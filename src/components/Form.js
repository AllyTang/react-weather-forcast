import React from 'react';
import {FormOpt} from '../style';
const Form=props=>(
    <FormOpt onSubmit={props.getWeather}>
        <input className='city' type='text' name='city' placeholder='City...'/>
        <input className='country' type='text' name='country' placeholder='Country...'/>
        <button className='button'>Get Weather</button>
    </FormOpt>
)
export default Form;