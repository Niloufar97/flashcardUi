export interface Itopic {
    id: number
    topicName: string
    flashcardCount: number | null
    iconUrl: string | null
    level: number 
}

export type ItopicArray = Itopic[];