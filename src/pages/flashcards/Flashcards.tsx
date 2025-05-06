import { Card } from "react-bootstrap"
import Navbar from "../../components/nav/Navbar"
import { useParams } from "react-router-dom"
import useSWR from "swr"
import staticImg from "../../assets/images/p-searching.png"
import Iflashcard from "../../models/flashcardModels"
import "./flashcards.css"
import NotFound from "../../components/not-found/NotFound"

const fetcher = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()
  console.log(data) 
  return data
}

function Flashcards() {
  const topicId = useParams().Id
  const url = `https://localhost:7256/topic/${topicId}/flashcards`

  const { data : FData , error , isLoading} = useSWR(url, fetcher)

  if (isLoading) return <p>Loading flashcards...</p>
  if (error) return <NotFound/>
  if (!FData) return <p>No flashcards found.</p>

  return (
    <>
    <Navbar />
    <div className="flashcards-container">
      <h1 className="title1">{FData.topic} Flashcards</h1>
      <div className="cards-grid">
        {FData.flashcards?.map((flashcard: Iflashcard, index: number) => (
          <div className="flashcard" key={index}>
            <img
              className="flashcard-img"
              src={flashcard.iconUrl || staticImg}
              alt={`${flashcard.english} icon`}
            />
            <div className="flashcard-body">
              <h5 className="flashcard-title">
                {flashcard.english} - {flashcard.danish}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Flashcards
