import React, {useState} from 'react';
import calcStyles from '../assets/styles/calculator.module.sass'
import LightImage from "./LightImage";
import DarkImage from "./DarkImage";

const CalcSettings = ({toggleBg, bg}) => {
    const [lightImage, setLightImage] = useState({fill: '#FFFFFF', backgroundColor: 'transparent'})
    const [darkImage, setDarkImage] = useState({fill: '#006FFF', backgroundColor: 'transparent'})


    return (
        <div className={calcStyles.calcSettings}>
            <div className={calcStyles.lightImageWrapper}
                 style={{backgroundColor: lightImage.backgroundColor, display:bg.displayLightImage}}>
                <LightImage
                    onMouseOver={() => setLightImage({
                        ...lightImage,
                        fill: '#006FFF',
                        backgroundColor: '#FFFFFF'
                    })}
                    onMouseOut={() => setLightImage({
                        ...lightImage,
                        fill: '#FFFFFF',
                        backgroundColor: 'transparent'
                    })}
                    onClick={()=>toggleBg()}
                    fill={lightImage.fill}/>
            </div>
            <div className={calcStyles.darkImageWrapper}
                 style={{backgroundColor: darkImage.backgroundColor, display:bg.displayDarkImage}}>
                <DarkImage
                    onMouseOver={() => setDarkImage({
                        ...darkImage,
                        fill: '#FFFFFF',
                        backgroundColor: '#006FFF'
                    })}
                    onMouseOut={() => setDarkImage({
                        ...darkImage,
                        fill: '#006FFF',
                        backgroundColor: 'transparent'
                    })}
                    onClick={()=>toggleBg()}
                    fill={darkImage.fill}
                />
            </div>
        </div>
    );
};

export default CalcSettings;
