import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import * as currenciesActions from '../../actions';
import { PAGE_SIZE } from '../../constants';
import { Pagination } from 'antd';

class CurrenciesPagination extends Component {
  onChangePage = pageNumber => this.props.getNextPage(pageNumber);

  render() {
    const { fullList, page, filteredList, searchedKey } = this.props.currencies;
    const list = searchedKey ? filteredList : fullList;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { currencies: state.app.currencies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...currenciesActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrenciesPagination);
