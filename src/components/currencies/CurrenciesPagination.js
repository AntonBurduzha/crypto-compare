import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import * as currenciesActions from '../../actions';
import { PAGE_SIZE } from '../../constants';
import { Pagination } from 'antd';

class CurrenciesPagination extends Component {
  onChangePage = pageNumber => this.props.getNextPage(pageNumber);

  render() {
    const { currencies } = this.props;
    const list = currencies.get('searchedKey') ? currencies.get('filteredList') : currencies.get('fullList');
    return (
      <Fragment>
        { list.size &&
            <Pagination
              total={list.size}
              showTotal={(total, range) => {
                return `${range[0]}-${range[1]} of ${total} items`}
              }
              pageSize={PAGE_SIZE}
              defaultCurrent={1}
              current={currencies.get('page')}
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
