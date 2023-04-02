import React from "react";
import Lottie from "lottie-react";
//import animationData from '../../lottie/animations/f2e4bbf0-747a-4a3e-9dac-ff7f38982c5a.json';
import animationData from '../../lottie/animations/08a47afd-7525-448e-9a8f-c45dbbad7857.json'
import "bootstrap/dist/css/bootstrap.min.css";

const CoverExample: React.FC = () => {
	return (
		<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			<main className="px-3">
				<h1>Dados do Usuário</h1>
				<p className="lead">
					Preencha os dados abaixo
				</p>
				<br />
			</main>
		</div>
	);
};

export default CoverExample;
