[![npm downloads](https://img.shields.io/npm/dm/@alex_xu/react-slider-vertify.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@alex_xu/react-slider-vertify) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alex_xu/react-slider-vertify) ![APM](https://img.shields.io/npm/l/@alex_xu/react-slider-vertify?style=flat-square)
## Hello react-slider-vertify!

react-slider-vertify 是一款前端实现的滑动验证码组件, 我们可以通过它轻松的控制验证的整个生命周期(刷新时, 验证成功时, 验证失败时的回调), 并拥有一定的配置化能力.

![demo.gif](http://cdn.dooring.cn/dr/slider.gif)

## doc

[react-slider-vertify](http://h5.dooring.cn/slider-vertify/)

## Getting Started

Install dependencies,

```bash
$ npm i @alex_xu/react-slider-vertify
```

## Use

```tsx
import React, { useState } from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default () => {
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  const style = {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
    width: '100px',
    padding: '5px 20px',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#1991FA',
  };
  return (
    <>
      <div onClick={show} style={style}>
        显示
      </div>
      <div onClick={hide} style={style}>
        隐藏
      </div>
      <Vertify
        width={320}
        height={160}
        visible={visible}
        onSuccess={() => alert('success')}
        onFail={() => alert('fail')}
        onRefresh={() => alert('refresh')}
      />
    </>
  );
};
```

## More Production

| name                                                                              | Description                                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [H5-Dooring](https://github.com/MrXujiang/h5-Dooring)                             | 让 H5 制作像搭积木一样简单, 轻松搭建 H5 页面, H5 网站, PC 端网站, LowCode 平台.         |
| [V6.Dooring](https://github.com/MrXujiang/v6.dooring.public)                      | 可视化大屏解决方案, 提供一套可视化编辑引擎, 助力个人或企业轻松定制自己的可视化大屏应用. |
| [dooring-electron-lowcode](https://github.com/MrXujiang/dooring-electron-lowcode) | 基于 electron 的 H5-Dooring 编辑器桌面端.                                               |
| [DooringX](https://github.com/H5-Dooring/dooringx)                                | 快速高效搭建可视化拖拽平台.                                                             |
| [Mitu](https://github.com/H5-Dooring/mitu-editor)                                 | 一款轻量级且可扩展的图片/图形编辑器解决方案.                                            |

## Inspired by

https://github.com/yeild/jigsaw

## 赞助 | Sponsored

开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication

微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
