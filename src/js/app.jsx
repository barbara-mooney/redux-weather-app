import React from 'react';
// import PreloadedCities from './components/PreloadedCities';
import SearchCity from './Components/SearchCity';
// import CityInfoDisplay from './components/CityInfoDisplay';
// import SearchHistory from './components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Weather App</h1>
          <h3>Always know if you need an umbrella!</h3>
        </div>
        <div>
          <SearchCity />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            call city info display component
          </div>
          <div className='col-12 col-md-6 mb-4'>
            call searchhistory component
          </div>
        </div>
      </div>
    );
  }
}
