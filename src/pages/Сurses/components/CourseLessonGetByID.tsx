import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './CourseLessonGetByID.module.css'
import { Link, useLocation } from 'react-router-dom'
import { VideoList } from './Videolist'

interface Lesson {
  id: number
  name: string
  videoUrl?: string
}

interface CourseData {
  name: string
  description: string
  level: string
  lessons: Lesson[]
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function CourseLessonGetByID() {
  const { id } = useParams<{ id: string }>()
  const query = useQuery()
  const mode = query.get('mode')
  const [course, setCourse] = useState<CourseData | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCourse() {
      const res = await fetch(`http://localhost:3004/api/v1/courses/${id}`)
      const result = await res.json()
      setCourse(result.data)
    }
    if (id) fetchCourse()
  }, [id])
  useEffect(() => {
    async function fetchLesson() {
      if (mode) {
        const res = await fetch(`http://localhost:3004/api/v1/lessons/${mode}`)
        const result = await res.json()
        if (result.status === 'success') {
          setVideoUrl(result.data.videoUrl)
        }
      }
    }
    fetchLesson()
  }, [mode])

  if (!course) return <div className='wrap'>Завантаження...</div>
  return (
    <div className={styles.wrap}>
      <div className={styles.textSpace}>
        <h1 className={styles.curseName}>{course.name}</h1>
        <p>{course.description}</p>
        <div className={styles.curseContainer}>
          <div className={styles.lessons}>
            {course.lessons.map((lesson: any) => (
              <Link to={`?mode=${lesson.id}`}>{lesson.name}</Link>
            ))}
          </div>
          <div className={styles.lessonVideo}>{videoUrl && <VideoList video={[videoUrl]} />}</div>
        </div>
      </div>
    </div>
  )
}
