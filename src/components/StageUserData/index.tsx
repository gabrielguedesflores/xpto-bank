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
				{/* <div style={{ width: '15%', margin: '0 auto', marginTop: '-25px'}}>
          <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
          />
        </div> */}
				<FormUserData /> 
			</main>
		</div>
	);
};

export default CoverExample;
