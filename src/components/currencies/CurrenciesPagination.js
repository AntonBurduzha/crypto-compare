import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import * as currenciesActions from '../../actions';
import { PAGE_SIZE } from '../../constants';
import { Row, Col, Pagination } from 'antd';

class CurrenciesPagination extends Component {
  onChangePage = pageNumber => this.props.getNextPage(pageNumber);

  render() {
    const { fullList, page } = this.props.currencies;
    return (
      <Row type="flex" justify="start" style={{margin: '0', padding: '20px 0 10px 20px'}}>
        { fullList.length &&
            <Col span={12}>
              <Pagination
                total={fullList.length}
                showTotal={(total, range) => {
                  return `${range[0]}-${range[1]} of ${total} items`}
                }
                pageSize={PAGE_SIZE}
                defaultCurrent={1}
                current={page}
                onChange={this.onChangePage}
              />
            </Col>
          }
      </Row>
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
