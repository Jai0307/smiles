import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Courses = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Course: {id}</p>
  
}

export default Courses