import React from 'react';
import {Loc,Temp,Icon} from '../style';
const Weather=props=>(
    <div>
        {props.city && props.country &&  <Loc><span className='span'>{props.city}</span> <span> {props.country}</span></Loc>}
        {props.temperature && <Temp>Temperature: {props.temperature}º</Temp>}

        {props.weatherIcon && <Icon><img src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}/> </Icon>}
        {props.description && <p>Conditions:{props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
)
export default Weather;