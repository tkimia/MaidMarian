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
                    <li>{company.tickerSymbol} - {company.name}</li>
                )}
                </ul>
            </div>
        );
    }
}

console.log("WWWWWWWWWWWWWWWW");

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
    onChangeSearchInput: (e) => getCompanyByName(e.target.value)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);