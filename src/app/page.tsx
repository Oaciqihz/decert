import React from 'react';
import { ConfigProvider } from 'antd';


export default function Home() {


    return (
      <ConfigProvider>
        <div className="App">
          <h1>Content</h1>
        </div>
      </ConfigProvider>
    )
}