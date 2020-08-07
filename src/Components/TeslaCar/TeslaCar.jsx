import React from 'react';
import {TeslaCarDiv, TeslaFront, TeslaRare, TeslaWheelsDiv} from "./TeslaCarStyles";
import {connect} from "react-redux";
const TeslaCar = ({config}) => {
    return (
        <TeslaCarDiv>
            <TeslaWheelsDiv>
               <TeslaFront wheels={config.wheels}/>
                <TeslaRare wheels={config.wheels}/>
            </TeslaWheelsDiv>
        </TeslaCarDiv>
    );
}
const mapStateToProps = (state) => ({
        config: state.BatteryReducer.config
    }
)
export default connect(mapStateToProps)(TeslaCar);