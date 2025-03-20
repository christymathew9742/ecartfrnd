import { Alert, Layout, Spin } from 'antd';
import React from 'react';
import styles from './spinner.module.scss';
import {
  LoadingOutlined,
} from '@ant-design/icons';

const DataLoader = (props: any) => {
  return (
    <Layout
    >
      <LoadingOutlined 
        // className={styles[props.class]}
        style={{
          padding: '6px',
          borderRadius: '100px',
          background: '#464b4f',
          color: 'white',
          fontSize: '50px',
          alignItems: 'center',
          justifyContent: 'center',
          position:'fixed',
          top: '50%',
          left: '50%',
          zIndex:10000000000,
        }}
      />
    </Layout>
  );
};

export default DataLoader;
