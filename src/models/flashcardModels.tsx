export default interface Iflashcard{
    english: string
    danish: string
    iconUrl: string | null
}
export default interface IflashcardWithTopic{
    topic: string
    flashcards: Iflashcard[]
}