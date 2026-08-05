import { Modal, Button, Image, CloseButton } from "react-bootstrap";
import { Fragment } from "react";

export default function SubraceModal({show, subrace, onHide}){

    return(
        <Modal show = {show} fullscreen = {true}>
            <Modal.Header className="bg-dark text-light">
                <h1>{subrace?.name}</h1>
                <CloseButton variant = "white" onClick={onHide}/>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
                <div className="d-flex flex-row">
                    <div className="w-20 h-100 m-3">
                        <Image fluid thumbnail src={subrace?.img !== "" ? subrace?.img : "eye.png"}/>
                    </div>
                    <div className="w-100 h-100 m-3 overflow-auto">
                        {subrace?.description.map((e, index) => (
                            <Fragment key={index}>
                                <h3>{e.paragraph}</h3>
                                <p>{e.description}</p>
                            </Fragment>
                        ))}
                        <h2 className="pt-5 pb-3">{subrace?.name} - Cechy Rasowe</h2>
                        {subrace?.racial_bonuses.map((e, index) => (
                            <Fragment key={index}>
                                <h3>{e.name}</h3>
                                <p>{e.description}</p>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}