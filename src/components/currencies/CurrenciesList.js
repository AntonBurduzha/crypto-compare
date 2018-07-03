// @flow
import * as React from 'react';
import { Row, Col, Card } from 'antd';
import { CRYPRO_COMPARE_OLD_API } from '../../constants';
import type { Currency } from '../../types/entities';
import type { Element } from 'react';

type Props = {
  list: Array<Currency>
};

const CurrenciesList = (props: Props): Element<any> =>
  <Row type="flex" justify="start" gutter={16} style={{margin: '0', padding: '0 20px' }}>
    { props.list.map((item: Currency): Element<any> => {
        return (
          <Col span={3} key={item.Id} style={{ margin: '10px 0', padding: '0' }}>
            <Card
              hoverable
              style={{ width: 140, textAlign: 'center' }}
              cover={
                <a href={`${CRYPRO_COMPARE_OLD_API}${item.Url}`} target="_blank">
                  <img alt={item.FullName} src={`${CRYPRO_COMPARE_OLD_API}${item.ImageUrl}`}/>
                </a>
              }
            >
              <Card.Meta title={item.Symbol} description={item.CoinName}/>
            </Card>
          </Col>
        );
      })
    }
  </Row>

export default CurrenciesList;
