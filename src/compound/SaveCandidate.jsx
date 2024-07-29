import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const SaveCandidate = ({values}) => {

  let response = null;

  const url = "http://localhost:8081/graphql";


    const [nombreCandidato, setNombreCandidato] = useState('');
    const [apellidoCandidato, setApellidoCandidato] = useState('');
    const [urlCandidato, setUrlCandidato] = useState('');
    const [linkedinCandidato, setLinkedinCandidato] = useState('');
    const [telefonoCandidato, setTelefonoCandidato] = useState('');
    const [direccionCandidato, setDireccionCandidato] = useState('');
    const [emailCandidato, setEmailCandidato] = useState('');
    const [aficionesCandidato, setAficionesCandidato] = useState('');
    const [habilidadesCandidato, setHabilidadesCandidato] = useState('');

    const handleNombreCandidatoChange = (event) => {
        setNombreCandidato(event.target.value);
      };
    
      const handleApellidoChange = (event) => {
        setApellidoCandidato (event.target.value);
      };
    
      const handleUrlChange = (event) => {
        setUrlCandidato (event.target.value);
      };
      const handleLinkedinCandidatoChange = (event) => {
        setLinkedinCandidato (event.target.value);
      };
      const handleTelefonoCandidatoChange = (event) => {
        setTelefonoCandidato (event.target.value);
      };
      const handleDireccionCandidatoChange = (event) => {
        setDireccionCandidato (event.target.value);
      };
      const handleEmailCandidatoChange = (event) => {
        setEmailCandidato (event.target.value);
      };
      const handleAficionesCandidatoChange = (event) => {
        setAficionesCandidato (event.target.value);
      };
      const handleHabilidadesCandidatoChange = (event) => {
        setHabilidadesCandidato (event.target.value);
      };

      async function clearSaveData(){
        setNombreCandidato("");
        setApellidoCandidato("");
        setUrlCandidato("");
        setLinkedinCandidato("");
        setTelefonoCandidato("");
        setDireccionCandidato("");
        setAficionesCandidato("");
        setEmailCandidato("");
        setHabilidadesCandidato("");
      }
      
      const [responseSave, setResponseSave] = useState('');

      const getSaveCandidateData = async () => {

        const query = `
      mutation {
        saveCandidate(saveCandidateInput: {
          nombreCandidato: "${nombreCandidato}",  
          apellidoCandidato: "${apellidoCandidato}",
          urlCandidato: "${urlCandidato}",
          linkedinCandidato: ${linkedinCandidato},
          telefonoCandidato: "${telefonoCandidato}",
          direccionCandidato: "${direccionCandidato}",
          aficionesCandidato: "${aficionesCandidato}",
          emailCandidato: "${emailCandidato}",
          habilidadesCandidato: "${habilidadesCandidato}"
        }) {
          nombreCandidato
        }
      }
    
  `;
  
  console.log("La petición a lanzar es:" + query);
  
  try {
    response = await axios.post(url, { query });
    console.log(response)
    setResponseSave(response.data.data.saveCandidate.nombreCandidato);
  
  
  } catch (error) {
    console.error(error);
  }
  };
    

  return (
    <>
    <div style={{ display: "flex", maxHeight:"none", border: "2px black", padding:"25px"}}>

  <div style={{ margin: 0, display:"flex", flexDirection: "column", justifyContent: "space-between", marginTop:"32px"}}>
    <Form.Label>Nombre:</Form.Label>
    <Form.Label>Apellido:</Form.Label>
    <Form.Label>Url:</Form.Label>
    <Form.Label>Linkedin:</Form.Label>
    <Form.Label>Telefono:</Form.Label>
    <Form.Label>Dirección:</Form.Label>
    <Form.Label>Aficiones:</Form.Label>
    <Form.Label>Email:</Form.Label>
    <Form.Label>Habilidades:</Form.Label>
  </div>
  <div style={{ marginLeft: "2%", display:"flex", flexDirection: "column", justifyContent: "space-between", marginTop:"32px"}}>
    <Form.Control type="text" onChange = {handleNombreCandidatoChange}/>
    <Form.Control type="text" onChange = {handleApellidoChange}/>
    <Form.Control type="text" onChange = {handleUrlChange}/>
    <Form.Control type="text" onChange = {handleLinkedinCandidatoChange}/>
    <Form.Control type="text" onChange = {handleTelefonoCandidatoChange}/>
    <Form.Control type="text" onChange = {handleDireccionCandidatoChange}/>
    <Form.Control type="text" onChange = {handleAficionesCandidatoChange}/>
    <Form.Control type="text" onChange = {handleEmailCandidatoChange}/>
    <Form.Control type="text" onChange = {handleHabilidadesCandidatoChange}/>
  </div>

  
  <div style={{paddingLeft:"10px"}}>
    <div>
      <Form.Label>Response:</Form.Label>
      {responseSave}
    </div>
  </div>
</div>
<div id="master2" style={{ display:"flex", justifyContent:"flex-start" }}>

  <Button as = "clearSaveCandidate" preventDefault={false}  onClick={clearSaveData} style={{marginRight:"50px"}}>
      Clear Data
  </Button>

  <Button as="saveCandidate" variant = "success" preventDefault={false} onClick={getSaveCandidateData}>
      Save Candidate
  </Button>
</div>
</>
  )


}

export default SaveCandidate