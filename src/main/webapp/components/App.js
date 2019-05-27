import React from 'react';
import {connect} from 'react-redux';
import { getCompanyByName, getPricesForCompany } from '../actions';
import CompanyItem from './CompanyItem';
import StockChart from './StockChart';
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="search-container">
                    <h1>Browse</h1>
                    <input className="search" type="search" placeholder="Search for companies..." onInput={this.props.onChangeSearchInput} />
                    <ul className='search-results-container'>
                    { this.props.showCompanyList && this.props.companiesFound.map(company => 
                        <CompanyItem company={company} onCompanyClick={() => this.props.onCompanyClick(company)} />
                    )}
                    </ul>
                </div>
                { this.props.stockData && <StockChart data={this.props.stockData} />}
            </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
    onChangeSearchInput: (e) => getCompanyByName(e.target.value),
    onCompanyClick: (company) => getPricesForCompany(company)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);