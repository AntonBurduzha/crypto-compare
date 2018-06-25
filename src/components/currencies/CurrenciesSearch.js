import React, { Component } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currenciesActions from '../../actions';

class CurrenciesSearch extends Component {
  onSearch = value => this.props.searchCryptoCurrencies(value);

  render() {
    return (
      <Input.Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={this.onSearch}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrenciesSearch);
