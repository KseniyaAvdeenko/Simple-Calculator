import React from 'react';
import CalcSettings from "./CalcSettings";
import Display from "./Display";
import CalcButtons from "./CalcButtons";

const Calculator = ({toggleBg, bg, history, currentCalculations, doCalculations}) => {


    return (
        <div className={bg.calculator}>
            <CalcSettings toggleBg={toggleBg} bg={bg}/>
            <Display bg={bg} history={history}
                     currentCalculations={currentCalculations}/>
            <CalcButtons bg={bg} doCalculations={doCalculations}/>
        </div>
    );
};

export default Calculator;
