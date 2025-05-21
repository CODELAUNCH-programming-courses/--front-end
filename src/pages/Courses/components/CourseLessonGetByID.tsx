import { useParams } from 'react-router-dom'
import styles from './CourseLessonGetByID.module.css'
import { Link, useLocation } from 'react-router-dom'
import { VideoList } from './Videolist'
import { useGetCourseById } from '../hooks/useGetCourseById'
import { useGetLessonVideo } from '../hooks/useGetLessonVideo'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function CourseLessonGetByID() {
  const { id } = useParams<{ id: string }>()
  const query = useQuery()
  const mode = query.get('mode')
  const { data: course, isPending: isCourseLoading, isError: isCourseError } = useGetCourseById(id)
  const { videoUrl, isPending: isVideoLoading, isError: isVideoError } = useGetLessonVideo(mode || undefined)
  console.log('course:', course)
  console.log('mode:', mode)
  console.log('videoUrl:', videoUrl)
  if (isCourseLoading) return <div className='wrap'>Завантаження курсу...</div>
  if (isCourseError) return <div className='wrap'>Помилка при завантаженні курсу</div>
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.curseName}>{course.name}</h1>
        <p>{course?.description}</p>
        <div className={styles.curseContainer}>
          <div className={styles.lessons}>
            {Array.isArray(course.lessons) &&
              course.lessons.map((lesson: any, index: number) => (
                <Link key={lesson.id} className={styles.lessonLink} to={`?mode=${lesson.id}`}>
                  {index + 1}. {lesson.name}
                </Link>
              ))}
          </div>
          <div className={styles.lessonVideo}>
            {' '}
            {mode && (
              <>
                {isVideoLoading && <p>Завантаження відео...</p>}
                {isVideoError && <p>Помилка при завантаженні відео</p>}
                {videoUrl && <VideoList video={videoUrl} />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
