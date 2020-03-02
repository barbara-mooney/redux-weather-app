import React from 'react';
import {
    updateCity,
    searchCity,
    } from './cityActions'; 

export default class SearchCity extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleSearchCity = this.handleSearchCity.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
        console.log(value, 'value of city handlecityinput')
    }

    handleSearchCity() {
        const { name, dispatch } = this.props;
        dispatch(searchCity(name));
        console.log(name, '1st console inside handlesearchcity');
    }

    render() {
        const { name } = this.props;
        return (
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter name of city" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2" 
                    value={ name }
                    onChange={ this.handleCityInput }
                    />
                <div className="input-group-append">
                    <span><button 
                            type='button'
                            className='btn btn-secondary mb-5'
                            value = { name }
                            onClick={ this.handleSearchCity }>Go!
                        </button></span>
                </div>
            </div>
        
        );
    }
}