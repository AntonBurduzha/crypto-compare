import React from 'react';
import { Row, Col } from 'antd';

export const ErrorMessage = () =>
  <Row type="flex" justify="center" align="middle">
    <Col span={12}>
      <h3 style={{ textAlign: 'center' }}>Oups! Error occurs, please try again later.</h3>
    </Col>
  </Row>
