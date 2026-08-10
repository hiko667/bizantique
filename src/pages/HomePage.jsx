import { Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {Fade} from "react-bootstrap"
import history from "../data/history_of_bizantique.json"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CrossIcon, LandmarkIcon, EyeIcon, SwordIcon, RotateCcwClockIcon } from 'lucide-react';
import { useState } from "react";

function renderIcon(age){
    switch (age) {
        case "dominium":
            return(<LandmarkIcon/>)
        case "apostasy":
            return(<EyeIcon/>)
        case "faithwars":
            return(<CrossIcon/>)
        default:
            return(<SwordIcon/>)
    }
}

export default function HomePage(){
    const [showHistory, setShowHistory] = useState(false);
    const navigate = useNavigate()
    
    return(
        <Fade in = {true} appear = {true}>
            <div className="w-100 h-100 p-3 d-flex flex-column align-items-center justify-content-center"
            style={{overflowX : "hidden"}}>
                <div className="d-flex fade_in_element flex-column mb-5 align-items-center">
                    <Image src="Logo.png" fluid style={{maxWidth : "100vw"}}/>
                    <div className="d-flex flex-row gap-3">
                        <Button className="btn-77 rounded-3 text-dark flex-fill" variant="dark"
                        onClick={() => navigate("/map")}>
                            Rozpocznij Podróż
                        </Button>
                        <Button className="flex-fill" variant="outline-light" onClick={() => setShowHistory(!showHistory)}>
                            Historia Miasta
                        </Button>
                    </div>
                </div>
                {showHistory &&
                    <>
                        <div className="d-flex fade_in_element overflow-auto w-100 align-items-center flex-column">
                            <VerticalTimeline intersectionObserverProps={{
                                rootMargin: '0px 0px -40px 0px',
                                triggerOnce: false,
                                }}>
                                    {history.map((e) =>(
                                        <VerticalTimelineElement key={e.name} 
                                        className="text-dark"
                                        icon = {renderIcon(e.age)}
                                        contentStyle={{ background: '#f8f9fa', color: '#f8f9fa' }}
                                        contentArrowStyle={{ borderRight: '7px solid ' }}
                                        date={e.year}
                                        iconStyle={{ background: '#f8f9fa', color: '#212529' }}>
                                                <h2>{e.name}</h2>
                                                <p className="text-dark">{e.description}</p>
                                        </VerticalTimelineElement>
                                    ))}
                                    <VerticalTimelineElement
                                        className="text-dark"
                                        icon = {<RotateCcwClockIcon/>}
                                        contentStyle={{color: '#f8f9fa' }}
                                        contentArrowStyle={{ borderRight: '7px solid ' }}
                                        date={"Zamknij historię"}
                                        iconOnClick={() => setShowHistory(false)}
                                        iconStyle={{ background: '#f8f9fa', color: '#212529' }}>
                                    </VerticalTimelineElement>
                            </VerticalTimeline>
                        </div>
                    </>
                }
            </div>
        </Fade>
    )
}