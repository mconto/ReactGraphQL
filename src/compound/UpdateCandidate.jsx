import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function TestTemplate() {

    const [nombreCandidate, setNombreCandidate] = useState('');
    const [apellidoCandidate, setApellidoCandidate] = useState('');
    const [telefonoCandidate, setTelefonoCandidate] = useState('');
    const [emailCandidate, setEmailCandidate] = useState('');
    const [responseUpdateCandidate, setResponseUpdateCandidate] = useState('');
    
    const handleNombreCandidateChange = (event) => {
      setNombreCandidate(event.target.value); // Almacena el valor en la variable nombreCandidate
    };
  
    const handleApellidoCandidateChange = (event) => {
      setApellidoCandidate(event.target.value);
    };
  
    const handleTelefonoCandidateChange = (event) => {
      setTelefonoCandidate (event.target.value);
    };
  
    const handleEmailCandidateChange = (event) => {
      setEmailCandidate (event.target.value);
    };
  
    async function clearDataUpdate(){
      setNombreCandidate("");
      setApellidoCandidate("");
      setTelefonoCandidate("");
      setEmailCandidate("");
    }
  
    async function testTemplate() {
      const url = "http://localhost:8081/graphql";
      let response=null;
      const getUpdateCandidate = async () => {
        const query = `
          mutation {
            updateCandidate(candidate: {
              nombreCandidate: "${nombreCandidate}",
              apellidoCandidate: "${apellidoCandidate}",
              telefonoCandidate: "${telefonoCandidate}",
              emailCandidate: "${emailCandidate}
            }){
              nombre
            }
          }
        `;
        console.log(query);
        try {
          response = await axios.post(url, { query });
          console.log(response);
          setResponseUpdateCandidate(response.data.data.updateCandidate.nombre);
  
  
        
        } catch (error) {
          console.error(error);
        }
      };
    
      await getUpdateCandidate();
    }

  return (
    <div>
      
      <div style={{ display: "flex", height:"350px",  border: "2px black", padding:"25px"}}>
          <div style={{ margin: 0, display:"flex", flexDirection: "column", justifyContent: "space-around"}}>
          
            <Form.Label>Nombre candidato:</Form.Label>
            <Form.Label>Apellido candidado:</Form.Label>
            <Form.Label>Telefono candidato:</Form.Label>
            <Form.Label>Email candidato:</Form.Label>
         
          </div>
        
        <div style={{ marginLeft: "5%", display:"flex", flexDirection: "column", justifyContent: "space-around"}}>
              
              <Form.Control onChange={handleNombreCandidateChange}/>
              <Form.Control onChange={handleApellidoCandidateChange}/>
              <Form.Control onChange={handleTelefonoCandidateChange}/>
              <Form.Control onChange={handleEmailCandidateChange}/>
              
        </div>
        <div>
        <div style={{display:"flex"}}>

        <div>
            <Form.Label>Response:{responseUpdateCandidate}</Form.Label>
        </div>
        </div>
      </div>
    </div>


      <div id="master3" style={{display:"flex", justifyContent:"flex-start"}}>
                
        <Button as = "clearUpdateCandidate" preventDefault={false} style={{marginRight:"50px"}} onClick={clearDataUpdate}>
          Clear Data
        </Button>

        <Button as="updateCandidate" variant = "success" preventDefault={false} onClick={updateCandidate}>
          Update Candidate
        </Button>
                
      </div>



    </div>
  )
}

export default TestTemplate