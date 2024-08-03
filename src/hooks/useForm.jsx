import { useState } from 'react';

const useForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i, e) {
        if(e) e.preventDefault();
        

        if(i < 0 || i >= steps.length ) return;

        setCurrentStep(i)
    }
    
    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,

        // verificação do último passo
        isLastStep: currentStep + 1 === steps.length ? true : false,

        isFirstStep: currentStep === 0 ? true : false,
    };
}

export default useForm;