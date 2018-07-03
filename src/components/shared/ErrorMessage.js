// @flow
import React from 'react';
import { Row, Col } from 'antd';
import type { Element } from 'react';

export const ErrorMessage = (): Element<any> => {
  return (
    <Row type="flex" justify="center" align="middle">
      <Col span={12}>
        <h3 style={{ textAlign: 'center' }}>Oups! Error occurs, please try again later.</h3>
      </Col>
    </Row>
  );
}
