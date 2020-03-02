import React from 'react';

class CityInfoDisplay extends React.Component{
    render() {

        return (
            <div className='card border-info mb-3'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <div className='container'>
                        <div className='row text-center'>
                            <h4>{ name } </h4>
                            <h6>Lat/Long: { lat }{ long }</h6>
                        </div>
                        <div className='row'>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>`Temperature(F)`</h6>
                                <p>{ name }</p>
                            </div>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>Pressure</h6>
                                <p>{ pressure }</p>
                            </div>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>Humidity</h6>
                                <p>{ humidity }</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>`Lowest Temp (F)`</h6>
                                <p>{ temp_min }</p>
                            </div>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>`Highst Temp (F)`</h6>
                                <p>{ temp_max }</p>
                            </div>
                            <div className='col text-center'>
                                <h6 className='h6 strong'>Wind Speed</h6>
                                <p>{ wind }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;