import React from 'react';
import { ConfigProvider } from 'antd';
import { getDictionary } from '@/get-dictionary';
import LocaleSwitcher from '@/components/locale-switcher';


export default async function Home({ params: { lang } }: { params: { lang: "en" | "zh-CN" } }) {

  const dict = await getDictionary(lang)

    return (
      <ConfigProvider>
        <div className="Home">
          <LocaleSwitcher />
          {dict.hello}
        </div>
      </ConfigProvider>
    )
}