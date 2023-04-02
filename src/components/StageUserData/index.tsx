import React from "react";
import Lottie from "lottie-react";
import FormUserData from './FormUserData';
import animationData from '../../lottie/animations/form.json'
import "bootstrap/dist/css/bootstrap.min.css";

const CoverExample: React.FC = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        <h1>Dados do Usuário</h1>
        <p className="lead">
          Preencha os dados abaixo
        </p>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center" style={{marginTop: '-15px'}}>
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
              // speed={1.2}
              style={{ width: '90%', height: '90%' }}
              rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            />
          </div>
          <div className="col-md-6">
            <FormUserData /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoverExample;
