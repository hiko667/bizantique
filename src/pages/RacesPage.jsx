import { Fragment, useState } from "react"
import RaceCard from "../components/RaceCard"
import races from "../data/races.json"
import { Button } from "react-bootstrap"
import {Fade} from 'react-bootstrap';
import SubraceModal from "../components/SubraceModal";
import { ChevronLeftIcon } from "lucide-react";

export default function RacesPage() {
    const [currentRace, setCurrentRace] = useState(null)
    const [currentSubrace, setCurrentSubrace] = useState(null);
    const [showSubraceModal, setShowSubraceModal] = useState(false);

    const racesWithSubraces = races.filter(
        (race) => race.subraces.length > 0
    )

    const currentSubraces = currentRace
        ? races.filter((race) => currentRace.subraces.includes(race.id))
        : []

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px",
        maxHeight: "100vh",
        overflowY: "auto",
    }

    const onSubraceModal = (subrace) => {
        setCurrentSubrace(subrace)
        setShowSubraceModal(true)
    }

    return (
        <div className="overflow-auto p-3"
        style={{overflowX : "hidden"}}>
            <SubraceModal show={showSubraceModal} 
            onHide={() => setShowSubraceModal(false)}
            subrace={currentSubrace}/>
            {currentRace ? (
                <div>

                    <Button
                        variant="outline-light"
                        className="m-3 text-light"
                        onClick={() => setCurrentRace(null)}
                    >
                        <ChevronLeftIcon/>
                    </Button>
                    <div className="d-flex justify-content-center flex-column align-items-center">
                        <h1>{currentRace.name}</h1>
                        <div className="d-flex justify-content-start flex-column w-100">
                            {currentRace.description.map((d, index) => (
                                <Fragment key={index}>
                                    <h4>{d.paragraph}</h4>
                                    <p>{d.description}</p>
                                </Fragment>
                            ))}
                            {currentRace.racial_bonuses.length > 0  && <h2 className="py-3">{currentRace.name} - Cechy rasowe</h2>}
                            {currentRace.racial_bonuses.map((d, index) => (
                                <Fragment key={index}>
                                    <h4>{d.name}</h4>
                                    <p>{d.description}</p>
                                </Fragment>
                            ))}
                        </div>
                        <h2>{currentRace.name} - podrasy</h2>
                    </div>

                    <div style={gridStyle}>
                        {currentSubraces.map((subrace) => (
                            <Fade in={true} dimension = "height" appear={true} key={subrace.id}>
                                <div>
                                    <RaceCard race={subrace} 
                                    onClick={() => onSubraceModal(subrace)}
                                    />
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            ) : (
                <div style={gridStyle}>
                    {racesWithSubraces.map((race) => (
                        <Fade in={true} dimension = "height" appear={true} key={race.id}>
                            <div>
                                <RaceCard
                                    race={race}
                                    onClick={() => setCurrentRace(race)}
                                />
                            </div>
                        </Fade>
                    ))}
                </div>
            )}
        </div>
    )
}