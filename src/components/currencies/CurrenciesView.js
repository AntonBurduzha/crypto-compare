import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin, Row, Col } from 'antd';
import * as currenciesActions from '../../actions';
import { ErrorMessage } from '../shared/ErrorMessage';
import CurrenciesPagination from './CurrenciesPagination';
import CurrenciesList from './CurrenciesList';
import CurrenciesSearch from './CurrenciesSearch';

class CurrenciesView extends Component {
  componentDidMount() {
    this.props.fetchCryptoCurrencies();
  }

  render() {
    const { currencies } = this.props;
    return (
      <Spin tip="Loading..." spinning={currencies.get('fetching')}>
        <div className="main-container">
          <Row type="flex" justify="start" align="middle" style={{ padding: '20px 30px 0px 20px' }}>
            <Col span={16}>
              <CurrenciesPagination/>
            </Col>
            <Col span={8}>
              <CurrenciesSearch/>
            </Col>
          </Row>
          <CurrenciesList list={currencies.get('pageList')} />
          { currencies.get('error') && <ErrorMessage /> }
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
