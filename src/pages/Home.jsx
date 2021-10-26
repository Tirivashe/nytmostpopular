import { useEffect, useState } from "react"
import Header from "../components/Header"
import PostsList from "../components/PostsList"
import { rawPath } from "../keys"

const Home = () => {

  const [state, setState] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(rawPath)
      const data = await res.json()
      setState(data.results)
      console.log(data.results)
    }

    fetchData()
  }, [])


  return (
      <div>
        <Header />
        { state ? <PostsList posts={state}/> : <h4 className='text-center text-8xl my-4 text-green-400 font-extralight'>Loading posts...</h4>}
      </div>
  )
}

export default Home