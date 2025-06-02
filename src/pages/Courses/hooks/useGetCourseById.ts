import { useQuery } from '@tanstack/react-query'

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

export const useGetCourseById = (id?: string) => {
  const fetchCourse = async (): Promise<CourseData> => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/${id}`)
    const result = await res.json()

    if (!res.ok ) {
      throw new Error('Error loading course')
    }

    return result.data
  }

  return useQuery({
    queryKey: ['course', id],
    queryFn: fetchCourse,
    enabled: !!id,
  })
}
