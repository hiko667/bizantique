import { Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {Fade} from "react-bootstrap"

export default function HomePage(){
    const navigate = useNavigate()
    return(
        <Fade in = {true} appear = {true}>
            <div className="w-100 h-100 overflow-auto d-flex align-items-center justify-content-center"
            style={{overflowX : "hidden"}}>
                <div className="d-flex flex-column align-items-center">
                    <Image src="Logo.png" className="mb-3" fluid style={{maxWidth : "100vw"}}/>
                    <div className="d-flex flex-row gap-3">
                        <Button className="btn-77 rounded-3 text-dark flex-fill" variant="dark"
                        onClick={() => navigate("/map")}>
                            Rozpocznij Podróż
                        </Button>
                        <Button className="flex-fill" variant="outline-light">
                            Historia Miasta
                        </Button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}