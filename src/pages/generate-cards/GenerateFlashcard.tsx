
import { Container, Form, Button } from "react-bootstrap";
import './generate-cards.css'
import Navbar from "../../components/nav/Navbar";
import useSWRMutation from "swr/mutation";
import { useState } from "react";

const createFlashcard = async (url: string, { arg }: { arg: { topicName: string; level: number } }) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(arg),
    });

    if (!response.ok) {
        throw new Error('Failed to create flashcard');
    }

    return response.json();
};
  
function GenerateFlashcard() {
    const [topic, setTopic] = useState("");
    const [difficulty, setDifficulty] = useState("1"); 

    const { trigger, isMutating } = useSWRMutation("https://localhost:7256/topic/create", createFlashcard);

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await trigger({ topicName: topic, level: parseInt(difficulty) });
            setTopic(""); // Clear the input field after submission
            setDifficulty("1"); // Reset difficulty to default  
        }
        catch (error) {
            console.error("Error generating flashcard:", error);
        }
    }

    return (
        <>
            <Navbar />
            <Container className="d-flex justify-content-center align-items-center vh-100 container">
                <div className="w-100 p-5 shadow-sm rounded bg-white generate-box">
                    <h1 className="title1 text-center mb-4">Generate Flashcard</h1>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formTopic">
                            <Form.Label className="title2">Topic</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter topic"
                                className="shadow-sm"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formDifficulty">
                            <Form.Label className="title2">Difficulty</Form.Label>
                            <Form.Select className="shadow-sm" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                <option value="1">Easy</option>
                                <option value="2">Medium</option>
                                <option value="3">Hard</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit" className="btn-primary-blue px-4 py-2" disabled={isMutating}>
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
