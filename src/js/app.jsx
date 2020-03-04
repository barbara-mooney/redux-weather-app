import React from 'react';
import SearchCity from './Components/SearchCity';
import InfoDisplay from './Components/InfoDisplay';
import SearchHistory from './Components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3'>Weather App</h1>
          <br />
          <h4>Always know if you need an umbrella!</h4>
        </div>
        <div>
          <SearchCity />
        </div>
        <div className='row' width="100%">
          <div className='col-6'>
            <InfoDisplay />
          </div>
          <div className='col-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
