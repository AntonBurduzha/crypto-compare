// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin, Row, Col } from 'antd';
import * as currenciesActions from '../../actions';
import { ErrorMessage } from '../shared/ErrorMessage';
import CurrenciesPagination from './CurrenciesPagination';
import CurrenciesList from './CurrenciesList';
import CurrenciesSearch from './CurrenciesSearch';
import type { Action } from '../../types/actions';
import type { StoreState } from '../../types/reducers';
import type { Currency } from '../../types/entities';

import { currentPageListSelector } from '../../selectors';

type StateProps = { fetching: boolean, error: boolean, pageList: Array<Currency> };

type DispatchProps = { fetchCryptoCurrencies: () => void };

type Props = StateProps & DispatchProps;

export class CurrenciesView extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchCryptoCurrencies();
  }

  render() {
    const { fetching, error, pageList } = this.props;
    return (
      <Spin tip="Loading..." spinning={fetching}>
        <div className="main-container">
          <Row type="flex" justify="start" align="middle" style={{ padding: '20px 30px 0px 20px' }}>
            <Col span={16}>
              <CurrenciesPagination/>
            </Col>
            <Col span={8}>
              <CurrenciesSearch/>
            </Col>
          </Row>
          <CurrenciesList list={pageList} />
          { error && <ErrorMessage /> }
        </div>
      </Spin>
    );
  }
}

export function mapStateToProps(state: StoreState): StateProps {
  return {
    fetching: state.app.currencies.fetching,
    error: state.app.currencies.error,
    pageList: currentPageListSelector(state)
  };
}

export function mapDispatchToProps(dispatch: Action => void): DispatchProps {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesView);
