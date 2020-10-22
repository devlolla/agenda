import React, {useState} from 'react';
import '../App.css';

import { FiArrowRight } from "react-icons/fi";
import api from '../services/api';

function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  

  function handleRegister(e) {
    e.preventDefault();

    const info = {
      titulo,
      data,
      hora,
      descricao,
      nome,
      telefone,
      email
    };

    api.post('register', info);

    window.location.reload();
    
  }


    
  return (
     <div className="container-form">
        <form className="form-cadastro" onSubmit={handleRegister}>

          <input 
            placeholder="Titulo"
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}/>

                      
           <input 
            placeholder="Data"
            type="text"
            value={data}
            onChange={e => setData(e.target.value)}/>
 
           <input 
            placeholder="Hora"
            type="text"
            value={hora}
            onChange={e => setHora(e.target.value)}/>
 
          <textarea 
            placeholder="Descrição"
            type="text"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}/>

           <input 
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}/>

           <input 
            placeholder="Telefone"
            type="text"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}/>

           <input 
            placeholder="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}/>
          
          
          <div className="button">
              <button id="button" type="submit"> <FiArrowRight size={20} /> </button>
            </div>
        </form>


</div>

  );
}

export default Cadastro;
