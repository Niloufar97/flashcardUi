
import { Container, Form, Button } from "react-bootstrap";
import './generate-cards.css'
import Navbar from "../../components/nav/Navbar";

function GenerateFlashcard() {
    return (
        <>
            <Navbar />
            <Container className="d-flex justify-content-center align-items-center vh-100 container">
                <div className="w-100 p-5 shadow-sm rounded bg-white generate-box">
                    <h1 className="title1 text-center mb-4">Generate Flashcard</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTopic">
                            <Form.Label className="title2">Topic</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter topic"
                                className="shadow-sm"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formDifficulty">
                            <Form.Label className="title2">Difficulty</Form.Label>
                            <Form.Select className="shadow-sm">
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" className="btn-primary-blue px-4 py-2">
                                Generate
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default GenerateFlashcard;
