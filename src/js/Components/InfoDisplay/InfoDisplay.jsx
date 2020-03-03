import React from 'react';

const InfoDisplay = (props) => {
    console.log(props.icon, 'console of props.icon')
    return (
    <div className='card'>
        <div className='card-header text-white bg-primary'>City Information</div>
        <div className='card'>
            <div className='card-body'>
                <img src={`http://openweather.org/img/wn/${props.icon}@2x.png`} id="weather-icon" alt=''/>
                <h3 className='text-center weatherInfo'> {props.name} </h3>
                <h6 className='text-center'>Lat/Long: {props.lat}{props.lon}</h6>
            </div>
            <hr className='horizontalLine'/>
            <div className='row'>
                <div className='col text-center weatherInfo'>
                    <h6 className='h6 strong'>Temperature(F)</h6>
                    <p>{ props.temp }</p>
                </div>
                <div className='col text-center weatherInfo'>
                    <h6 className='h6 strong'>Pressure</h6>
                    <p>{ props.pressure }</p>
                </div>
                <div className='col text-center weatherInfo'>
                    <h6 className='h6 strong'>Humidity</h6>
                    <p>{ props.humidity }</p>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center weatherInfo'>
                    <h6 className='h6 strong'>Lowest Temp (F)</h6>
                    <p>{ props.temp_min }</p>
                </div>
                <div className='col text-center weatherInfo'>
                    <h6 className='h6 strong'>Highst Temp (F)</h6>
                    <p>{ props.temp_max }</p>
                </div>
                <div className='col text-center'>
                    <h6 className='h6 strong'>Wind Speed</h6>
                    <p>{ props.wind }</p>
                </div>
            </div>
        </div>
    </div>
)}


export default InfoDisplay;