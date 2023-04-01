import React, { Component } from 'react';
import Home from './components/Home';
import { AppState } from './dto/App..dto';
import './App.css'

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      step: 0
    };
  }

  handleClick = () => {
    this.setState({ step: 1 });
  }

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {step === 0 && <Home />}
          {step === 1 && <div>Etapa 1 do formulário</div>}
          {step === 2 && <div>Etapa 2 do formulário</div>}
          {/* adicione mais etapas aqui */}
          <button 
            id="create-account" 
            className="btn btn-lg btn-secondary fw-bold border-white bg-dark"
            onClick={this.handleClick}
          >
            Criar uma conta
          </button>
        </header>
      </div>
    );
  }
}

export default App;
