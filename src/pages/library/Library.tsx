import './library.module.css'
import { ItopicArray } from "../../models/topicModels"
import useSWR from "swr"

const fetcher = async(url: string) => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Failed to fetch data")
    }
    return response.json()
}

export default function Library(){
    const {data: topics} = useSWR<ItopicArray>("https://localhost:7256/topic", fetcher)

    return(
        <>
            <h1>Your Topics</h1>
            <ul>
               {
                topics?.map((topic, index) => {     
                    return (
                        <li key={index}>
                            <h2>{topic.topicName}</h2>
                        </li>   
                    )
                })
               }
            </ul>
        </>
    )
}