// @flow
import * as React from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currenciesActions from '../../actions';
import type { Action } from '../../types/actions';

type DispatchProps = { searchCryptoCurrencies: (string) => void };

export class CurrenciesSearch extends React.Component<DispatchProps> {
  onSearch = (value: string): void => this.props.searchCryptoCurrencies(value);

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

export function mapDispatchToProps(dispatch: Action => void): DispatchProps {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrenciesSearch);
