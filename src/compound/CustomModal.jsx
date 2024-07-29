import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styles from './styles.css';

const CustomModal = ({title, showModal, toggleModal, children}) => {
  return (
    <Modal show={showModal} onHide={toggleModal} className="fullscreen-modal">
    <Modal.Header closeButton>
    <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>

{children}


    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={toggleModal}>
    Close
    </Button>
    </Modal.Footer>
    </Modal>

  )
}

export default CustomModal