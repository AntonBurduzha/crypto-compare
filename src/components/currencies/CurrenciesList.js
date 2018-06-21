import React from 'react';
import { CRYPRO_COMPARE_OLD_API } from '../../constants';
import { Row, Col, Card } from 'antd';

const CurrenciesList = ({ list }) =>
  <Row type="flex" justify="start" gutter={16} style={{margin: '0', padding: '0 20px'}}>
    { list.map(item => {
        return (
          <Col span={3} key={item.Id} style={{ margin: '10px 0', padding: '0' }}>
            <Card
              hoverable
              style={{ width: 140, textAlign: 'center' }}
              cover={<img alt={item.FullName} src={`${CRYPRO_COMPARE_OLD_API}${item.ImageUrl}`}/>}
            >
              <Card.Meta title={item.Symbol} description={item.CoinName}/>
            </Card>
          </Col>
        );
      })
    }
  </Row>

export default CurrenciesList;
