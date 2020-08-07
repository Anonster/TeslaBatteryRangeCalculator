import styled, {css} from "styled-components";
import TeslaCarPic from '../../assets/tesla.jpg';
import  Wheel19 from '../../assets/wheel-19.png';
import Wheel21 from '../../assets/wheel-21.png';
export const TeslaCarDiv = styled.div`
     width: 100%;
     min-height: 350px;
     background: #fff url(${TeslaCarPic}) no-repeat top center;
     background-size: contain; 
`;

export const TeslaWheelsDiv = styled.div`
    height: 247px;
    width: 555px;
    position: relative;
    margin: 0 auto; 
`;
const TeslaWheel = css`
  height: 80px;
  width: 80px;
  bottom: 0;
  position: absolute;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover; 
`;
const Animation = css`
    
@keyframes infinite-spinning {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg); } }
@-webkit-keyframes infinite-spinning {
  from {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg); } }
`;
const TeslaWheel19 = css`
    background-image: url(${Wheel19});
    -webkit-animation: ${Animation} 250ms steps(6) infinite;
    -moz-animation: ${Animation} 250ms steps(6) infinite;
    -o-animation: ${Animation} 250ms steps(6) infinite;
    animation: ${Animation} 250ms steps(6) infinite; 
`;

const TeslaWheel21 = css`
     background-image: url(${Wheel21});
    -webkit-animation: ${Animation} 480ms steps(12) infinite;
    -moz-animation: ${Animation} 480ms steps(12) infinite;
    -o-animation: ${Animation} 480ms steps(12) infinite;
    animation: ${Animation} 480ms steps(12) infinite;   
`;

const GetTeslaWheelSize = (props) => {
    if(props.wheels === 19) {
        return TeslaWheel19;
    }
    return TeslaWheel21;
}

export const TeslaFront = styled.div`
    ${TeslaWheel}
    left: 53px;
    ${GetTeslaWheelSize}
`;
export const TeslaRare = styled.div`
    ${TeslaWheel}
    right: 72px;
    ${GetTeslaWheelSize}
`;


