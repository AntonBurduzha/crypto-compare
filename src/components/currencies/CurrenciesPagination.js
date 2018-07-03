// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import * as currenciesActions from '../../actions';
import { PAGE_SIZE } from '../../constants';
import { Pagination } from 'antd';
import type { Action } from '../../types/actions';
import type { StoreState } from '../../types/reducers';
import type { Currency } from '../../types/entities';

type StateProps = { searchedKey: string, filteredList: Array<Currency>, fullList: Array<Currency>, page: number };

type DispatchProps = { getNextPage: (number) => void };

type Props = StateProps & DispatchProps;

class CurrenciesPagination extends React.Component<Props> {
  onChangePage = (pageNumber: number): void => this.props.getNextPage(pageNumber);

  render() {
    const { searchedKey, filteredList, fullList, page } = this.props;
    const list = searchedKey ? filteredList : fullList;
    return (
      <React.Fragment>
        { list.length &&
            <Pagination
              total={list.length}
              showTotal={(total, range) => {
                return `${range[0]}-${range[1]} of ${total} items`}
              }
              pageSize={PAGE_SIZE}
              defaultCurrent={1}
              current={page}
              onChange={this.onChangePage}
            />
          }
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: StoreState): StateProps {
  return {
    searchedKey: state.app.currencies.searchedKey,
    filteredList: state.app.currencies.filteredList,
    fullList: state.app.currencies.fullList,
    page: state.app.currencies.page
  };
}

function mapDispatchToProps(dispatch: Action => void): DispatchProps {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesPagination);
