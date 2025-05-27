import { Card } from 'react-bootstrap'
import staticImg from "../../assets/images/searching.png"
import { Link } from 'react-router'
import { Itopic } from '../../models/topicModels'
import { FaHeart, FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa"

interface TopicCardProps {
    topic: Itopic;      
    deleteTopic: () => void;
}

function TopicCard({ topic, deleteTopic}: TopicCardProps) {
   
    return (
        <Card className="library-card" key={topic.id}>
            <div className="image-wrapper">
                <Card.Img
                    variant="top"
                    src={topic.iconUrl || staticImg}
                    className="topic-img"
                />
                <div className="action-menu">
                    <div className="dots">
                        <FaEllipsisV />
                    </div>
                    <div className="actions">
                        <button className="icon-btn favorite" title="Favorite">
                            <FaHeart />
                        </button>
                        <button className="icon-btn edit" title="Edit">
                            <FaEdit />
                        </button>
                        <button className="icon-btn delete" onClick={deleteTopic}  title="Delete">
                            <FaTrash />
                        </button>
                    </div>
                </div>
            </div>

            <Card.Body>
                <Card.Title className="topic-name">
                    {topic.topicName.toUpperCase()}
                </Card.Title>
                <p className="topic-level">
                    {["Easy", "Medium", "Hard"][topic.level - 1]} - {topic.flashcardCount} Flashcards
                </p>
                <Link
                    to={`/library/${topic.id}`}
                    className="btn btn-primary-blue view-btn"
                >
                    View Cards
                </Link>
            </Card.Body>
        </Card>
    )
}

export default TopicCard
