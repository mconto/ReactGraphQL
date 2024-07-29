import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import JSONPretty from 'react-json-pretty';

const LoadTemplate = () => {

    let response=null;
    const url = "http://localhost:8081/graphql";



  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNombreChange = (event) => {
    setNombre(event.target.value); // Almacena el valor en la variable nombre
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail (event.target.value);
  };

  
  async function clearData(){
    setResponseData("");
  }
  



  async function handleSubmit() {
    const url = "http://localhost:8081/graphql";
    let response=null;
    const getCandidateData = async () => {
      const query = `
        query {
          getCandidate(findCandidate: {
            nombre: "${nombre}",
            apellido: "${apellido}",
            email: "${email}"
          }) {
            nombre
          }
        }
      `;
      console.log(query);
      try {
        response = await axios.post(url, { query });
        setResponseData(response.data.data.getCandidateData.nombre);
        console.log(response);

      
      } catch (error) {
        console.error(error);
      }
    };
  
    await getCandidateData();
  }


  return (
    <div>
      
      <div style={{ display: "flex", height:"350px", border: "2px black", padding:"25px"}}>
        <div style={{ margin: 0, display:"flex", flexDirection: "column", justifyContent: "space-around"}}>
          
            <Form.Label>Nombre Candidato:</Form.Label>
            <Form.Label>Apellido Candidato:</Form.Label>
            <Form.Label>Email Candidato:</Form.Label>
         
        </div>
        
        <div style={{ marginLeft: "2%", display:"flex", flexDirection: "column", justifyContent: "space-around"}}>
              
              <Form.Control type="text" onChange={handleNombreChange}/>
              <Form.Control type="text" onChange={handleApellidoChange}/>
              <Form.Control type="text" onChange={handleEmailChange}/>
              
        </div>
        
        <div style={{paddingLeft:"10px"}}>
          <div>
            <Form.Label>Response:</Form.Label>
            <JSONPretty data={responseData} class="box" theme={"dark"}></JSONPretty>
          </div>
        </div>
      </div>


      <div id="master3" style={{display:"flex", justifyContent:"flex-start"}}>
              
        <Button as = "clearFindCandidate" preventDefault={false} style={{marginRight:"50px"}} onClick={clearData}>
          Clear Data
        </Button>

        <Button as="FindCandidate" variant = "success" preventDefault={false} onClick={handleSubmit}>
          Find Candidate
        </Button>
      </div>

      
    </div>
  )
}

export default LoadTemplate