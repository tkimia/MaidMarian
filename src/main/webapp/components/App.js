import React from 'react';
import {connect} from 'react-redux';
import { getCompanyByName } from '../actions';
class App extends React.Component {
    render() {
        return (
            <div className="search-container">
                <h1>Browse</h1>
                <input className="search" type="search" placeholder="Search for companies..." onInput={this.props.onChangeSearchInput} />
                <ul>
                { this.props.showCompanyAutocomplete && this.props.companyAutocompleteList.map(company => 
                    <li className="search-result" key={company.tickerSymbol}>
                        <div className="company-name">{company.name}</div>
                        <div className="company-symbol">{company.tickerSymbol}</div>
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
    onChangeSearchInput: (e) => getCompanyByName(e.target.value)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);