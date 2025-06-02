import { useQuery } from '@tanstack/react-query'

export const useGetLessonVideo = (lessonId?: string) => {
  const fetchLesson = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/lessons/${lessonId}`)
    const result = await res.json()
    
    return result.data.videoUrl
  }

  const { data, isError, isPending } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: fetchLesson,
    enabled: !!lessonId,
  })
  return { videoUrl: data, isError, isPending }
}
