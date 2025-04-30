import { useQuery } from '@tanstack/react-query'

export const useGetCourses = (level: string) => {
  async function getData() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/courses/levels/${level}`)
    if (!res.ok) console.log('error')
    return await res.json()
  }

  const { data, isError, isPending } = useQuery({
    queryFn: getData,
    queryKey: ['courses', level],
    staleTime: 10 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  })

  return { data, isError, isPending }
}
