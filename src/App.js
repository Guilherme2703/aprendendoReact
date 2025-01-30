import { useState } from 'react'

import React from 'react'


// function App(){
//   const [aluno, setAluno] = useState('Sujeito programador')
  
//   function handleChangeName(nome){
//     setAluno(nome);
//   }
//   return(
//     <div>
//       <h1>Componente App</h1><br/>
//       <h2>Olá {aluno}</h2>
//       <button onClick={() => handleChangeName('Guilherme Lima de Freitas')}>
//         Mudar nome
//       </button>
//     </div>
//   );
// }

// function App(){
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [idade, setIdade] = useState(0); 
//   const [user, setUser] = useState({});
  
//   function handleRegister(e){
//     e.preventDefault();
//     alert("Usuário registrado com sucesso")
//     setUser({
//       nome: nome,
//       idade: idade,
//       email: email,
//     })
//   }

//   return(
//     <div>
//       <h1>Cadastrando Usuário</h1>

//       <form onSubmit={handleRegister}>
//         <label>Nome</label><br/>
//         <input 
//         placeholder='Digite o seu Nome'
//         value={nome}
//         onChange={ (e)=> setNome(e.target.value)}/>
//         <br/>

//         <label>E-mail</label><br/>
//         <input 
//         placeholder='Digite o seu E-mail'
//         value={email}
//         onChange={(e)=> setEmail(e.target.value)}/>
//         <br/>

//         <label>Idade</label><br/>
//         <input 
//         placeholder='Digite a sua Idade'
//         value={idade}
//         onChange={(e)=> setIdade(e.target.value)}/>
//         <br/>
//         <button type='submit'>Registrado</button>
//       </form>

//       <br/><br/>

//       <div>
//         <span>Bem-vindo: {user.nome} </span><br/>
//         <span>Idade: {user.idade}</span><br/>
//         <span>Email:{user.email}</span><br/>
//       </div>
//     </div>
//   );
// }
function App(){
  const[input, setInput] = useState('');
  const[tarefas, setTarefa] = useState([
    'Pagar conta de agua',
    'Estudar para ESA'
  ]);
  
  function handleRegister(e){
    e.preventDefault();

    setTarefa([...tarefas, input])
    setInput('')
  }

  return(
    <div>
      <h1>Cadastrando Usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da Tarefa</label><br/>
        <input 
        placeholder='Digite o Nome da tarefa'
        value={input}
        onChange={ (e)=> setInput(e.target.value)}/>
        <br/>
        <button type='submit'>Registrado</button>
      </form>

      <br/><br/>

      <ul>
        {tarefas.map( tarefa =>(
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

