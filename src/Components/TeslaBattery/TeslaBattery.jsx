import React from "react";
import {TeslaBatteryForm, TeslaBatteryH1} from "./TeslaBatteryStyles";
import TeslaNotice from "../TeslaNotice/TeslaNotice";
import TeslaCar from "../TeslaCar/TeslaCar";

const TeslaBattery = () => (
    <TeslaBatteryForm>
        <TeslaBatteryH1>Range per Charge</TeslaBatteryH1>
        <TeslaCar/>
        <TeslaNotice/>
    </TeslaBatteryForm>
)
export default TeslaBattery;