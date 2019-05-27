import React from 'react';

const CompanyItem = props =>  (
    <li className="search-result" key={props.company.tickerSymbol} onClick={props.onCompanyClick}>
        <div className="company-name">{props.company.name}</div>
        <div className="company-symbol">{props.company.tickerSymbol}</div>
    </li>
)

export default CompanyItem;