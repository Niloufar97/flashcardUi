export interface Itopic {
    id: number
    topicName: string
    flashcards: string[] | null
    iconUrl: string | null
    level: number 
}

export type ItopicArray = Itopic[];