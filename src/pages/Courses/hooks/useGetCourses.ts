import { useQuery } from '@tanstack/react-query'

export const useGetCourses = (url: string) => {
  async function getData() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}${url}`)
    if (!res.ok) console.log('error')
    return await res.json()
  }

  const { data, isError, isPending } = useQuery({
    queryFn: getData,
    queryKey: ['courses'],
    staleTime: 10 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  })

  return { data, isError, isPending }
}
