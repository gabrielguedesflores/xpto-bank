import React, { Component } from 'react';
import Home from './components/Home';
import StageUserData from './components/StageUserData'
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
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }

  handleBackClick = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  }

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {step === 0 && <Home />}
          {step === 1 && <StageUserData />}
          {step === 2 && <div>Etapa 2 do formulário</div>}
          {/* adicione mais etapas aqui */}
          <div>
            {step > 0 && (
              <button
                id="back"
                className="btn btn-lg btn-secondary me-2 fw-bold border-white bg-dark"
                onClick={this.handleBackClick}
              >
                Voltar
              </button>
            )}
            <button 
              id="create-account" 
              className="btn btn-lg btn-secondary fw-bold border-white bg-dark"
              onClick={this.handleClick}
            >
              Avançar
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
