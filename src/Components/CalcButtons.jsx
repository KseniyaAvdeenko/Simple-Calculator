import React from 'react';
import calcStyles from '../assets/styles/calculator.module.sass'

const CalcButtons = ({bg, doCalculations}) => {
    return (
        <div className={calcStyles.calcButtons}>
            <button onClick={()=>doCalculations('ce')} className={bg.functionalCalcButton}>CE</button>
            <button onClick={()=>doCalculations('back')} className={bg.functionalCalcButton}>
                <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.26455 7.57509e-07H23.8531C24.1573 7.57509e-07 24.449 0.120833 24.6641 0.335916C24.8792 0.550999 25 0.842714 25 1.14689V19.4971C25 19.8012 24.8792 20.093 24.6641 20.308C24.449 20.5231 24.1573 20.644 23.8531 20.644H7.26455C7.07559 20.6442 6.8895 20.5977 6.72283 20.5087C6.55616 20.4196 6.41407 20.2908 6.30919 20.1336L0.192849 10.9585C0.067105 10.77 0 10.5485 0 10.322C0 10.0954 0.067105 9.87392 0.192849 9.68546L6.30919 0.510365C6.41407 0.353176 6.55616 0.224336 6.72283 0.135298C6.8895 0.0462599 7.07559 -0.000216401 7.26455 7.57509e-07ZM7.87813 2.29377L2.52562 10.322L7.87813 18.3502H22.7074V2.29377H7.87813ZM14.6792 8.70028L17.9226 5.45574L19.5443 7.07858L16.3009 10.322L19.5443 13.5654L17.9226 15.1882L14.678 11.9437L11.4346 15.1882L9.81293 13.5654L13.0563 10.322L9.81293 7.07858L11.4346 5.45574L14.6792 8.70028Z"
                        fill={bg.functionalCalcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('%')} className={bg.functionalCalcButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.5 7C2.53333 7 1.70833 6.65833 1.025 5.975C0.341667 5.29167 0 4.46667 0 3.5C0 2.53333 0.341667 1.70833 1.025 1.025C1.70833 0.341667 2.53333 0 3.5 0C4.46667 0 5.29167 0.341667 5.975 1.025C6.65833 1.70833 7 2.53333 7 3.5C7 4.46667 6.65833 5.29167 5.975 5.975C5.29167 6.65833 4.46667 7 3.5 7ZM3.5 5C3.91667 5 4.271 4.85433 4.563 4.563C4.855 4.27167 5.00067 3.91733 5 3.5C4.99933 3.08267 4.85367 2.72867 4.563 2.438C4.27233 2.14733 3.918 2.00133 3.5 2C3.082 1.99867 2.728 2.14467 2.438 2.438C2.148 2.73133 2.002 3.08533 2 3.5C1.998 3.91467 2.144 4.269 2.438 4.563C2.732 4.857 3.086 5.00267 3.5 5ZM12.5 16C11.5333 16 10.7083 15.6583 10.025 14.975C9.34167 14.2917 9 13.4667 9 12.5C9 11.5333 9.34167 10.7083 10.025 10.025C10.7083 9.34167 11.5333 9 12.5 9C13.4667 9 14.2917 9.34167 14.975 10.025C15.6583 10.7083 16 11.5333 16 12.5C16 13.4667 15.6583 14.2917 14.975 14.975C14.2917 15.6583 13.4667 16 12.5 16ZM12.5 14C12.9167 14 13.271 13.8543 13.563 13.563C13.855 13.2717 14.0007 12.9173 14 12.5C13.9993 12.0827 13.8537 11.7287 13.563 11.438C13.2723 11.1473 12.918 11.0013 12.5 11C12.082 10.9987 11.728 11.1447 11.438 11.438C11.148 11.7313 11.002 12.0853 11 12.5C10.998 12.9147 11.144 13.269 11.438 13.563C11.732 13.857 12.086 14.0027 12.5 14ZM1.4 16L0 14.6L14.6 0L16 1.4L1.4 16Z"
                        fill={bg.functionalCalcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('/')} className={bg.functionalCalcButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 9.14286H0V6.85714H16V9.14286ZM8 0C8.60621 0 9.18759 0.240816 9.61624 0.66947C10.0449 1.09812 10.2857 1.67951 10.2857 2.28571C10.2857 2.89192 10.0449 3.4733 9.61624 3.90196C9.18759 4.33061 8.60621 4.57143 8 4.57143C7.39379 4.57143 6.81241 4.33061 6.38376 3.90196C5.9551 3.4733 5.71429 2.89192 5.71429 2.28571C5.71429 1.67951 5.9551 1.09812 6.38376 0.66947C6.81241 0.240816 7.39379 0 8 0ZM8 11.4286C8.60621 11.4286 9.18759 11.6694 9.61624 12.098C10.0449 12.5267 10.2857 13.1081 10.2857 13.7143C10.2857 14.3205 10.0449 14.9019 9.61624 15.3305C9.18759 15.7592 8.60621 16 8 16C7.39379 16 6.81241 15.7592 6.38376 15.3305C5.9551 14.9019 5.71429 14.3205 5.71429 13.7143C5.71429 13.1081 5.9551 12.5267 6.38376 12.098C6.81241 11.6694 7.39379 11.4286 8 11.4286Z"
                        fill={bg.functionalCalcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('7')} className={bg.calcButton}>7</button>
            <button onClick={()=>doCalculations('8')} className={bg.calcButton}>8</button>
            <button onClick={()=>doCalculations('9')} className={bg.calcButton}>9</button>
            <button onClick={()=>doCalculations('*')} className={bg.functionalCalcButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.3331 15.9842C1.06942 15.9841 0.81168 15.9059 0.592459 15.7594C0.373238 15.6129 0.202379 15.4046 0.101482 15.161C0.000585517 14.9174 -0.0258198 14.6494 0.0256055 14.3907C0.0770307 14.1321 0.203978 13.8946 0.390397 13.7081L13.7242 0.374296C13.9757 0.13141 14.3125 -0.00298759 14.6621 5.04051e-05C15.0117 0.0030884 15.3461 0.143319 15.5934 0.390539C15.8406 0.637758 15.9808 0.972186 15.9839 1.32179C15.9869 1.6714 15.8525 2.00822 15.6096 2.2597L2.2758 15.5935C2.15214 15.7175 2.0052 15.8159 1.84343 15.8829C1.68165 15.9499 1.50822 15.9844 1.3331 15.9842Z"
                        fill={bg.functionalCalcButtonFill}/>
                    <path
                        d="M14.6669 15.9842C14.4918 15.9844 14.3184 15.9499 14.1566 15.8829C13.9948 15.8159 13.8479 15.7175 13.7242 15.5935L0.390397 2.2597C0.147511 2.00822 0.0131129 1.6714 0.0161509 1.32179C0.0191889 0.972186 0.159419 0.637758 0.406639 0.390539C0.653859 0.143319 0.988287 0.0030884 1.3379 5.04051e-05C1.6875 -0.00298759 2.02432 0.13141 2.2758 0.374296L15.6096 13.7081C15.796 13.8946 15.923 14.1321 15.9744 14.3907C16.0258 14.6494 15.9994 14.9174 15.8985 15.161C15.7976 15.4046 15.6268 15.6129 15.4075 15.7594C15.1883 15.9059 14.9306 15.9841 14.6669 15.9842Z"
                        fill={bg.functionalCalcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('4')} className={bg.calcButton}>4</button>
            <button onClick={()=>doCalculations('5')} className={bg.calcButton}>5</button>
            <button onClick={()=>doCalculations('6')} className={bg.calcButton}>6</button>
            <button onClick={()=>doCalculations('-')} className={bg.functionalCalcButton}>-</button>
            <button onClick={()=>doCalculations('1')} className={bg.calcButton}>1</button>
            <button onClick={()=>doCalculations('2')} className={bg.calcButton}>2</button>
            <button onClick={()=>doCalculations('3')} className={bg.calcButton}>3</button>
            <button onClick={()=>doCalculations('+')} className={bg.functionalCalcButton}>+</button>
            <button onClick={()=>doCalculations('+/-')} className={bg.calcButton}>
                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286ZM16 20.5714H0V18.2857H16V20.5714Z"
                        fill={bg.calcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('0')} className={bg.calcButton}>0</button>
            <button onClick={()=>doCalculations('.')} className={bg.calcButton}>
                <svg width="7" height="7" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 4.5C9 5.39001 8.73608 6.26004 8.24161 7.00006C7.74715 7.74008 7.04434 8.31686 6.22207 8.65745C5.39981 8.99805 4.49501 9.08717 3.62209 8.91353C2.74918 8.7399 1.94736 8.31131 1.31802 7.68198C0.688685 7.05264 0.260102 6.25082 0.0864682 5.3779C-0.0871652 4.50499 0.00194979 3.60019 0.342544 2.77792C0.683138 1.95566 1.25992 1.25285 1.99994 0.758385C2.73996 0.263919 3.60999 0 4.5 0C5.69348 0 6.83807 0.474105 7.68198 1.31802C8.52589 2.16193 9 3.30652 9 4.5Z"
                        fill={bg.calcButtonFill}/>
                </svg>
            </button>
            <button onClick={()=>doCalculations('=')} className={bg.functionalCalcButton}>=</button>
        </div>
    );
};

export default CalcButtons;
