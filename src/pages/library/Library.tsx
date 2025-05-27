import './library.css'
import { ItopicArray } from "../../models/topicModels"
import useSWR, { mutate } from "swr"
import Navbar from '../../components/nav/Navbar'
import NotFound from '../../components/not-found/NotFound'
import TopicCard from './TopicCard'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}

export default function Library() {
  const deleteTopic = async (id: number) => {
    try{
        await fetch(`https://localhost:7256/topic/${id}`, {
        method: 'DELETE'
      })
      mutate("https://localhost:7256/topic") // Revalidate the SWR cache
    }catch (error) {
      console.error("Failed to delete topic:", error)
    }
  }

  // Fetch topics from the API
  const { data: topics, error } = useSWR<ItopicArray>("https://localhost:7256/topic", fetcher)
  if (error) return <NotFound />

  return (
    <>
      <Navbar />
      <div className="library-container">
        <h1 className="title1">Your Library</h1>
        <div className="library-list-wrapper">
          <div className="library-list">
            {topics?.map((topic) => (
              <TopicCard key={topic.id} topic= {topic} deleteTopic={()=>{deleteTopic(topic.id)}} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}