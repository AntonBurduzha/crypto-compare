import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import { Spin } from 'antd';
import * as currenciesActions from '../../actions';
import { ErrorMessage } from '../shared/ErrorMessage';
import CurrenciesPagination from './CurrenciesPagination';
import CurrenciesList from './CurrenciesList';

class CurrenciesView extends Component {
  componentDidMount() {
    this.props.fetchCryptoCurrencies();
  }

  render() {
    const { fetching, error, pageList } = this.props.currencies;
    return (
      <Spin tip="Loading..." spinning={fetching}>
        <div className="main-container">
          <CurrenciesPagination/>
          <CurrenciesList list={pageList}/>
          { error && <ErrorMessage/> }
        </div>
      </Spin>
    );
  }
}

function mapStateToProps(state) {
  return { currencies: state.app.currencies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesView);
