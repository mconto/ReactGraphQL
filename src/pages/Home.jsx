import React from 'react'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import SaveCandidate from '../compound/SaveCandidate'
import FindCandidate from '../compound/FindCandidate'
import CustomModal from '../compound/CustomModal'
import UpdateCandidate from '../compound/UpdateCandidate'

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [currentModal, setCurrentModal] = useState("")



    const toggleModal = (modalType = "SaveCandidate") => {
        setShowModal(!showModal)
        setCurrentModal(modalType)
    } 



  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', minHeight: '70vh' }}>
      <Button onClick={() => {toggleModal("SaveCandidate")} }>Save Candidate</Button>
      <Button onClick={() => {toggleModal("FindCandidate")} }>Find Candidate</Button>
      <Button onClick={() => {toggleModal("UpdateCandidate")} }>Update Candidate</Button>

      { showModal && currentModal === "FindCandidate" && (<CustomModal title={"Save Candidate"}showModal={showModal} toggleModal={toggleModal}> <SaveCandidate/> </CustomModal>) } 
      { showModal && currentModal === "FindCandidate" && (<CustomModal title={"Find Candidate"}showModal={showModal} toggleModal={toggleModal}> <FindCandidate/> </CustomModal>) } 
      { showModal && currentModal === "UpdateCandidate" && (<CustomModal title={"Update Template"}showModal={showModal} toggleModal={toggleModal}> <UpdateCandidate/> </CustomModal>) } 




     
    </div>
  )
}

export default Home