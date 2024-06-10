import React from 'react';
import calcStyles from '../assets/styles/calculator.module.sass'

const Display = ({bg,history, currentCalculations}) => {
    return (
        <div className={calcStyles.display} style={bg.displayStyles}>
            <div className={calcStyles.calculations}>{history}</div>
            <div className={calcStyles.currentCalculations}>{currentCalculations}</div>
        </div>
    );
};

export default Display;
