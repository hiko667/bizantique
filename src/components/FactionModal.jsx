import { CloseButton, Modal, Image } from "react-bootstrap";
import { Fragment } from "react";

export default function FactionModal({faction, show, onHide}){

    return(
        <Modal show = {show} fullscreen style={{width : "100vw"}}>
            <Modal.Header className="bg-dark text-light">
                <h1>{`${faction?.name} - ${faction?.short_description}`}</h1>
                <CloseButton color="white" onClick={onHide}/>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light w-100">
                <div className="d-flex bg-dark flex-column flex-sm-row">
                    <div className="m-3">
                        <Image fluid src={faction?.img !== "" ? faction?.img : "eye.png"} style={{maxWidth: "300px"}}/>
                    </div>
                    <div className="w-100 h-100 m-3 overflow-auto">
                        {faction?.description.map((e, index) => (
                            <Fragment key={index}>
                                <h3>{e.paragraph}</h3>
                                <p>{e.description}</p>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}