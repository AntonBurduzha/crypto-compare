import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import { Spin } from 'antd';
import * as currenciesActions from '../../actions';
import { ErrorMessage } from '../shared';
import { CRYPRO_COMPARE_OLD_API, PAGE_SIZE } from '../../constants';
import { Row, Col, Card, Pagination } from 'antd';

class CurrenciesView extends Component {
  componentDidMount() {
    this.props.fetchCryptoCurrencies();
  }

  onChangePage = pageNumber => this.props.getNextPage(pageNumber);

  render() {
    const { fetching, error, pageList, fullList, page } = this.props.currencies;

    return (
      <Spin tip="Loading..." spinning={fetching}>
        <div className="main-container">
          <Row type="flex" justify="start" gutter={16} style={{margin: '0'}}>
            {
              Object.keys(fullList).length &&
                <Col span={24}>
                  <Pagination
                    total={Object.keys(fullList).length}
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
            {
              Object.values(pageList).map(item => {
                return (
                  <Col span={3} key={item.Id}>
                    <Card
                      hoverable
                      style={{ width: 140, textAlign: 'center', margin: 'auto' }}
                      cover={<img alt={item.FullName} src={`${CRYPRO_COMPARE_OLD_API}${item.ImageUrl}`}/>}
                    >
                      <Card.Meta title={item.Symbol} description={item.CoinName}/>
                    </Card>
                  </Col>
                );
              })
            }
          </Row>
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
