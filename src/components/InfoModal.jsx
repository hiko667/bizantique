import { Modal, Button, Image } from "react-bootstrap";

export default function InfoModal({show, data, closeModal}){

    return(
        <Modal onHide = {closeModal} className = "z-100"
            show = {show} centered size="lg">
            <Modal.Header closeButton className="bg-dark text-light">
                <Modal.Title id="contained-modal-title-vcenter">
                    {data ? data.name : ""}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-light">
                <div className="d-flex justify-content-center pb-3">
                    <Image
                        style={{width : "60%"}}
                        src = {data ? data.img : ""}
                        fluid
                    />
                </div>
                <p className="overflow-auto">
                    {data ? data.description : ""}
                </p>
            </Modal.Body>
        </Modal>
    )
}