import React, {useEffect, useState} from 'react';

import '../App.css';

import api from '../services/api';

import { FiTrash2 } from "react-icons/fi";



function Registro() {
  const [register, setRegister] = useState([]);

  
   
useEffect(() => {
    api.get('/list').then(response => {
        setRegister(response.data)
    })
    
}, []);


async function handleDelete(id) {
    try {
        await api.delete(`register/${id}`);

    setRegister(register.filter(registro => registro.id !== id));
    } catch (err) {
        alert('Erro ao deletar caso, tente novamente.')
    }
}



  return (
       <ul>
            {register.map(registro => (
            <li key={registro.id}>
                <h1>{registro.titulo}</h1>
                <div className="box-one">
                    <p> {registro.data} </p>
                    <p> {registro.hora} </p>
                </div>
                    <p> {registro.descricao} </p> 
                <div className="box-two">
                <p> {registro.nome} </p>
                <p> {registro.telefone} </p>
                <p> {registro.email} </p>
                </div>
                <button onClick={() => handleDelete(registro.id)} type="button"> 
                <FiTrash2 size={20} color="#A8A8B3" />
                </button>  
            </li>
    ))}
    </ul>

  );
}


export default Registro;
