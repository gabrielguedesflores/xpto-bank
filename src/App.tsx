import React, { Component } from 'react';
import Home from './components/Home';
import StageUserData from './components/StageUserData'
import StageUserImage from './components/StageUserImage'
import { AppState } from './dto/App.dto';
import './App.css';
import Lottie from "lottie-react";
import animationData from './lottie/animations/loader.json';
import StageFinish from './components/StageFinish';
import End from './components/End';

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      step: 0,
      loading: true
    };
  }

  handleClick = () => {
    // this.setState({ loading: true }); // definir loading como true antes de avançar
    // setTimeout(() => {
      this.setState(prevState => ({ step: prevState.step + 1, loading: false }));
    // }, 1500);
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
          {step === 3 && <StageFinish />}
          {step === 4 && <End />}
          <div>

            {step > 0 && step < 3 && (
              <button
                id="back"
                className="btn btn-lg btn-secondary me-2 fw-bold border-white bg-dark"
                onClick={this.handleBackClick}
              >
                Voltar
              </button>
            )}

            {step < 4 && (
              <button
                id="create-account" 
                className="btn btn-lg btn-secondary fw-bold border-white bg-dark"
                onClick={this.handleClick}
              >
                {step < 3 ? 'Avançar' : 'Concluir'}
              </button>
            )}
            

            <div className="carousel-indicators d-flex flex-wrap">
              <button type="button" data-bs-target="" aria-label="Slide 1" aria-current={step === 0 ? "true" : "false"} className={step === 0 ? "active" : ""}></button>
              <button type="button" data-bs-target="" aria-label="Slide 2" aria-current={step === 1 ? "true" : "false"} className={step === 1 ? "active" : ""}></button>
              <button type="button" data-bs-target="" aria-label="Slide 3" aria-current={step === 2 ? "true" : "false"} className={step === 2 ? "active" : ""}></button>
              <button type="button" data-bs-target="" aria-label="Slide 4" aria-current={step === 3 ? "true" : "false"} className={step === 3 ? "active" : ""}></button>
              <button type="button" data-bs-target="" aria-label="Slide 5" aria-current={step === 4 ? "true" : "false"} className={step === 4 ? "active" : ""}></button>
            </div>

          </div>

        </header>
      </div>
    );
  }
}

export default App;
