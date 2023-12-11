import React from 'react';
import { Button, ConfigProvider } from 'antd';


export default function Home() {


    return (
      <ConfigProvider>
        <div className="App">
          <Button type="primary">INDEX</Button>
        </div>
      </ConfigProvider>
    )
}