// @flow
import React from 'react';
import { Button } from 'antd';
import type { Element } from 'react';

type Props = {
  startConnection: () => void,
  stopConnection: () => void,
  isConnected: boolean
};

export const ButtonGroup = (props: Props): Element<any> => {
  return (
    <div className="cc-socket-wrapper">
      <Button
        type="primary"
        size="large"
        style={{ width: '120px', height: '40px', marginRight: '20px' }}
        onClick={props.startConnection}
        disabled={props.isConnected}
      >
        Start
      </Button>
      <Button
        type="danger"
        size="large"
        style={{ width: '120px', height: '40px' }}
        onClick={props.stopConnection}
        disabled={!props.isConnected}
      >
        Stop
      </Button>
    </div>
  );
}
