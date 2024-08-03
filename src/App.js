import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import Results from './Results';
import './styles.css';

import api from './services/Api';


function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch () {
    if(input === '') {
      alert("Preencha o campo de CEP!")
      return;
    }
    try {
      const response = await api.get(`${input}/json`)
      setCep(response.data);
    } catch {
      alert("Ops, erro ao buscar!");
      setInput('');
    }
  }

  return (
    <div className="container">

      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input type="text" 
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(
          e.target.value
        )}
        />

        <button className="search" onClick={handleSearch}>
        <FiSearch size={25} color="#FFF"/>
          </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <Results 
        cep={cep.cep} 
        rua={cep.logradouro} 
        bairro={cep.bairro} 
        cidade={cep.localidade} 
        complemento={cep.complemento} />
      )}

    </div>
  );
}

export default App;
