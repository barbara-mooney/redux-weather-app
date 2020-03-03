import React from 'react';
// import { connect } from "react-redux";
import {
    updateCity,
    searchCity,
    } from './cityActions'; 

export default class SearchCity extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleSearchCity = this.handleSearchCity.bind(this);
        this.handleDefaultCity = this.handleDefaultCity.bind(this);
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

    handleDefaultCity(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchCity(value));
        console.log(name, 'console inside handledefaultcity');
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button 
                        type="button"
                        className="btn btn-primary btn-large"
                        value="San Diego"
                        onClick={ this.handleDefaultCity }
                        >San Diego</button>
                        <button 
                        type="button"
                        className="btn btn-primary btn-large"
                        value="New York"
                        onClick={ this.handleDefaultCity }
                        >New York</button>
                        <button 
                        type="button"
                        className="btn btn-primary btn-large"
                        value="Chicago"
                        onClick={ this.handleDefaultCity }
                        >Chicago</button>
                        <button 
                        type="button"
                        className="btn btn-primary btn-large"
                        value="Buenos Aires"
                        onClick={ this.handleDefaultCity }
                        >Buenos Aires</button>
                        <button 
                        type="button"
                        className="btn btn-primary btn-large"
                        value="Luxembourg"
                        onClick={ this.handleDefaultCity }
                        >Luxembourg</button>
                    </div>
            </div>
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter name of city" 
                        value={ name }
                        onChange={ this.handleCityInput }
                        />
                    <div className="input-group-append">
                        <span><button 
                                type='button'
                                className='btn btn-secondary'
                                onClick={ this.handleSearchCity }>Go!
                            </button></span>
                    </div>
                </div>
            </div>
        );
    }
}