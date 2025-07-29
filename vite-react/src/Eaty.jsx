import { useState } from 'react';

import './index.css';

export const Eaty = () => {
	const steps = [
		'Закипятите воду',
		'Посолите воду',
		'Добавьте пельмени в кипящую воду',
		'Ждите 7–10 минут',
		'Готово! Подавайте со сметаной',
	];

	const [currentStep, setCurrentStep] = useState(0);

	return (
		<div className="appContainer">
			<h1 className="title">Как приготовить пельмени</h1>

			<div className="stepDisplay">
				<p className="stepText">
					{currentStep + 1}: {steps[currentStep]}{' '}
				</p>
			</div>

			<div className="stepButtons">
				{steps.map((step, index) => (
					<button
						key={index}
						className={`stepBtn ${index === currentStep ? 'active' : index < currentStep ? 'completed' : ''}`} onClick={() => setCurrentStep(index)}
					>
						{index + 1}
					</button>
				))}
			</div>

			<div className="navButtons">
				<button className={`navBtn ${currentStep === 0 ? 'completed' : ''}`} onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>Назад</button>
				<button className="navBtn" onClick={() => {
					if(currentStep === steps.length - 1) {
						setCurrentStep(0)
					} else {
						setCurrentStep(currentStep + 1)
					}
					}}>
					{currentStep === steps.length - 1 ? 'Начать сначала' : 'Вперед'}
					</button>
			</div>
		</div>
	);
};
