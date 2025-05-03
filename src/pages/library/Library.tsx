import './library.css'
import { ItopicArray } from "../../models/topicModels"
import useSWR from "swr"
import { Card } from 'react-bootstrap'
import staticImg from "../../assets/images/p-searching.png"
import Navbar from '../../components/nav/Navbar'
import { Link } from 'react-router'

const fetcher = async (url: string) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Failed to fetch data")
    }
    return response.json()
}

export default function Library() {
    const { data: topics } = useSWR<ItopicArray>("https://localhost:7256/topic", fetcher)

    return (
        <>
        <Navbar/>
        <div className="library-container">
            <h1 className='title1'>Your Library</h1>
            <div className="library-list-wrapper">
            <div className='library-list'>
                {
                    topics?.map((topic, index) => {
                        return (
                            <>
                            <Card className='card' key={index}>
                                <Card.Img variant="top" src={topic.iconUrl? topic.iconUrl : staticImg }  className='topic-img'/>
                                <Card.Body>
                                    <Card.Title className='topic-name'>{topic.topicName.toLocaleUpperCase()}</Card.Title>
                                    <p>({["Easy", "Medium", "Hard"][topic.level - 1]})</p>
                                    <Link to={`/library/${topic.id}`} className="btn btn-primary-blue btn-lg w-50 mb-3">
                                        View Cards
                                    </Link>
                                </Card.Body>
                            </Card>
                            </>
                        )
                    })
                }
            </div>
            </div>
            
        </div>
        </>
    )
}