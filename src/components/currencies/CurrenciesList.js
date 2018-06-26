import React from 'react';
import { Row, Col, Card } from 'antd';
import { CRYPRO_COMPARE_OLD_API } from '../../constants';

const CurrenciesList = ({ list }) =>
  <Row type="flex" justify="start" gutter={16} style={{margin: '0', padding: '0 20px' }}>
    { list.map(item => {
        return (
          <Col span={3} key={item.get('Id')} style={{ margin: '10px 0', padding: '0' }}>
            <Card
              hoverable
              style={{ width: 140, textAlign: 'center' }}
              cover={
                <a href={`${CRYPRO_COMPARE_OLD_API}${item.get('Url')}`} target="_blank">
                  <img alt={item.get('FullName')} src={`${CRYPRO_COMPARE_OLD_API}${item.get('ImageUrl')}`}/>
                </a>
              }
            >
              <Card.Meta title={item.get('Symbol')} description={item.get('CoinName')}/>
            </Card>
          </Col>
        );
      })
    }
  </Row>

export default CurrenciesList;
