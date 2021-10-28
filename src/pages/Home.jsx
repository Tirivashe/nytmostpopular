import { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import PostsList from "../components/PostList/PostsList"
import { rawPath } from "../keys"

const Home = () => {
  const [state, setState] = useState({posts: [], loading: false, error: false})

  useEffect(() => {
    const fetchData = async () => {

      setState(prevState => {
        return {...prevState, loading: true}
      })

      try {
        const response = await fetch(rawPath)
        const data = await response.json()

        setState(prevState => {
          return {...prevState, posts: data.results, loading: false}
        })

      } catch (error) {

        setState(prevState => {
          return {...prevState, error: true}
        })
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
      <div>
        <Header />
        {state.loading && <h4 className='text-center text-7xl my-4 text-green-400 font-extralight'>Loading posts...</h4>}
        {state.error && <h4 className='text-center text-4xl my-4 text-green-400 font-extralight'>An Error Has Occurred</h4>}
        {state.posts && <PostsList posts={state.posts}/>}
      </div>
  )
}

export default Home