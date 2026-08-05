import { Card } from "react-bootstrap"

export default function RaceCard({ race, onClick }) {
    return (
        <Card
            bg="light"
            border="warning"
            text="dark"
            style={{ width: "300px", height: "550px", cursor: onClick ? "pointer" : "default" }}
            onClick={onClick}
        >
            <Card.Img 
                variant="top" 
                style={{ height: "450px", objectFit: "cover" }} 
                src={race.img ? race.img : "eye.png"} 
            />
            <Card.Header>{race.name}</Card.Header>
            <Card.Body>
                <p
                    style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {race.description_short}
                </p>
            </Card.Body>
        </Card>
    )
}