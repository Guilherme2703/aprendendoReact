import { useState } from 'react'

import React from 'react'


function App(){
  const [aluno, setAluno] = useState('Sujeito programador')
  
  function handleChangeName(nome){
    setAluno(nome);
  }
  return(
    <div>
      <h1>Componente App</h1><br/>
      <h2>Olá {aluno}</h2>
      <button onClick={() => handleChangeName('Guilherme Lima de Freitas')}>
        Mudar nome
      </button>
    </div>
  );
}

export default App;

