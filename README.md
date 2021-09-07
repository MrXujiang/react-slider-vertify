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
import { Vertify } from 'react-slider-vertify';

export default () => {
    const [visible, setVisible] = useState(false);
    const show = () => {
        setVisible(true)
    }
    const hide = () => {
        setVisible(false)
    }
    const style = {
        display: 'inline-block',
        marginRight: '20px',
        marginBottom: '20px',
        width: '100px', 
        padding: '5px 20px', 
        color: '#fff', 
        textAlign: 'center',
        cursor: 'pointer',
        background: '#1991FA'
    }
    return <>
        <div onClick={show} style={style}>显示</div>
        <div onClick={hide} style={style}>隐藏</div>
        <Vertify 
            width={320}
            height={160}
            visible={visible}
            onSuccess={() => alert('success')} 
            onFail={() => alert('fail')} 
            onRefresh={() => alert('refresh')} 
        />
    </>
    
};
```

## More Production

| name      | Description |
| ----------- | ----------- |
| [H5-Dooring](https://github.com/MrXujiang/h5-Dooring)      | 让H5制作像搭积木一样简单, 轻松搭建H5页面, H5网站, PC端网站, LowCode平台.
| [V6.Dooring](https://github.com/MrXujiang/v6.dooring.public)   | 可视化大屏解决方案, 提供一套可视化编辑引擎, 助力个人或企业轻松定制自己的可视化大屏应用.        |
| [dooring-electron-lowcode](https://github.com/MrXujiang/dooring-electron-lowcode)   | 基于electron的H5-Dooring编辑器桌面端.        |
| [PC-Dooring](https://github.com/MrXujiang/pc-Dooring)   | 网格式拖拽搭建PC端页面.        |
| [DooringX](https://github.com/H5-Dooring/dooringx)   | 快速高效搭建可视化拖拽平台.        |

## Inspired by

https://github.com/yeild/jigsaw

## 赞助 | Sponsored
开源不易, 有了您的赞助, 我们会做的更好~

<img src="http://cdn.dooring.cn/dr/WechatIMG2.jpeg" width="180px" />

## 技术反馈和交流群 | Technical feedback and communication
微信：beautifulFront

<img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />

