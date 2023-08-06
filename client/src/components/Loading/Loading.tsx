import React from 'react';
import { Space, Spin } from 'antd';
import { TipContent } from './style';

const Loading: React.FC = () => {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spin tip="Loading" size="large">
        <TipContent className="content" />
      </Spin>
    </Space>
  );
};

export default Loading;
