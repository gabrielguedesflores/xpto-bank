import React from "react";
import Lottie from "lottie-react";
import animationData from '../../lottie/animations/end.json'
import "bootstrap/dist/css/bootstrap.min.css";

const CoverExample: React.FC = () => {
  
  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        <h1>Ótimo, finalizamos por aqui</h1>

				<p className="lead">
					Você reberá um e-mail com os próximos passos.<br/>
					Lhe manteremos avisados ;)
        </p>
        <br />
        <div style={{ width: '40%', margin: '0 auto', marginTop: '-25px'}}>
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
