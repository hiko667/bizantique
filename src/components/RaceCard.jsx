import { Card } from "react-bootstrap"
import "./race.css"

export default function RaceCard({ race, onClick, dealDelay = 0 }) {
    return (
        <div
            className="race-card-deal"
            style={{
                "--deal-delay": `${dealDelay}s`,
                aspectRatio: "300 / 550",
            }}
        >
            <div className="race-card-flip-inner">
                
                <div className="race-card-face race-card-back" />

                <div className="race-card-face race-card-front">
                    <Card
                        bg="light"
                        border="warning"
                        text="dark"
                        style={{
                            width: "100%",
                            height: "100%",
                            cursor: onClick ? "pointer" : "default",
                        }}
                        onClick={onClick}
                    >
                        <Card.Img
                            variant="top"
                            style={{ height: "80%", objectFit: "cover" }}
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
                </div>
            </div>
        </div>
    )
}