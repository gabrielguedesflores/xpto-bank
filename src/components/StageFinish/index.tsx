import React, { useState } from "react";
import Lottie from "lottie-react";
//import FormUserData from './FormUserData';
import animationData from '../../lottie/animations/finish.json'
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
        <h1>Formulário Concluído</h1>
        <p className="lead">
					Muito bem!
        </p>
        
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
