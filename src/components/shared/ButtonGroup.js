import React from 'react';
import { Button } from 'antd';

export const ButtonGroup = ({ startConnection, stopConnection, isConnected }) => {
  return (
    <div className="cc-socket-wrapper">
      <Button
        type="primary"
        size="large"
        style={{ width: '120px', height: '40px', marginRight: '20px' }}
        onClick={startConnection}
        disabled={isConnected}
      >
        Start
      </Button>
      <Button
        type="danger"
        size="large"
        style={{ width: '120px', height: '40px' }}
        onClick={stopConnection}
        disabled={!isConnected}
      >
        Stop
      </Button>
    </div>
  );
}
