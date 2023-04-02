import React, { Component } from 'react';
import Home from './components/Home';
import StageUserData from './components/StageUserData'
import StageUserImage from './components/StageUserImage'
import { AppState } from './dto/App.dto';
import './App.css';
import Lottie from "lottie-react";
import animationData from './lottie/animations/loader.json';

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      step: 0,
      loading: true
    };
  }

  handleClick = () => {
    this.setState({ loading: true }); // definir loading como true antes de avançar
    setTimeout(() => {
      this.setState(prevState => ({ step: prevState.step + 1, loading: false }));
    }, 1500);
  }

  handleBackClick = () => {
    this.setState(prevState => ({ step: prevState.step - 1 }));
  }

  componentDidMount() {
    // esconder o loader após 3 segundos
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    const { step, loading } = this.state;

    if (loading) {
      // exibir o loader enquanto loading for verdadeiro
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <div className="App-header loader-container">
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          {step === 0 && <Home />}
          {step === 1 && <StageUserData />}
          {step === 2 && <StageUserImage />}
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
