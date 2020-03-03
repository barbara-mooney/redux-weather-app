import React from 'react';

class SearchHistory extends React.Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div>
            <div className='card'>
                <div className='card-header text-white bg-primary'>Search History</div>
                    <div className='card-body'>
                        <div><ul className="list-group list-group-flush full-width">
                            {this.props.history.map((item, index) => (
                                <li className="list-group-item" key={index}>
                                {item}
                                </li>
                            ))}</ul>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}


export default SearchHistory;