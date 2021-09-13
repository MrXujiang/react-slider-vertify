### 基本使用:

```tsx
import React from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default () => {
  return <Vertify />;
};
```

### 设置宽高:

```tsx
import React from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default () => {
  return <Vertify width={330} height={80} />;
};
```

### 设置滑块边长和半径:

```tsx
import React from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default () => {
  return <Vertify width={320} height={160} l={28} r={5} />;
};
```

### 设置成功, 失败, 刷新时的回调:

```tsx
import React from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default () => {
  return (
    <Vertify
      width={320}
      height={160}
      onSuccess={() => alert('success')}
      onFail={() => alert('fail')}
      onRefresh={() => alert('refresh')}
    />
  );
};
```

### 动态设置显示/ 隐藏:

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

<API></API>
