import React, { useState } from "react";
import Lottie from "lottie-react";
//import FormUserData from './FormUserData';
import animationData from '../../lottie/animations/form-user-image.json'
import "bootstrap/dist/css/bootstrap.min.css";

const CoverExample: React.FC = () => {
  const [isUploaded, setIsUploaded] = useState(false);

  const handleUploadClick = () => {
    // aqui você pode adicionar a lógica para fazer upload do arquivo
    setIsUploaded(true);
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        <h1>Adicione sua melhor foto</h1>
        <p className="lead">
          Preencha os dados abaixo
        </p>
        <label htmlFor="file-upload" className="btn btn-lg btn-secondary fw-bold border-white bg-dark">
          <span>{isUploaded ? "Arquivo Anexado" : "Adicione sua foto aqui"}</span>
          {isUploaded && <i className="bi bi-check-circle-fill ms-2"></i>}
        </label>
        <input type="file" id="file-upload" className="visually-hidden" onChange={handleUploadClick} />

        <div style={{ width: '35%', margin: '0 auto', marginTop: '-25px'}}>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div>
      </main>
    </div>
  );
};

export default CoverExample;
