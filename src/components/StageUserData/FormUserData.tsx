import { useState } from 'react';
import './FormUserData.css';

function FormUserData() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted');
    // Adicione aqui o código para enviar os dados do formulário
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />

        <label htmlFor="dateOfBirth">Data de Nascimento:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />

      </form>
    </div>
  );
}

export default FormUserData;
