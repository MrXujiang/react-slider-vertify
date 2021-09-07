import { useState } from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

export default function IndexPage() {
  const [visible, setVisible] = useState(true);
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  const style = {
    display: 'inline-block',
    margin: '20px',
    width: '100px',
    padding: '5px 20px',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#1991FA',
  };
  return (
    <div style={{ width: '600px', margin: '60px auto', textAlign: 'center' }}>
      <Vertify
        width={320}
        height={160}
        visible={visible}
        onSuccess={() => alert('success')}
        onFail={() => alert('fail')}
        onRefresh={() => alert('refresh')}
      />
      <div onClick={show} style={style}>
        显示
      </div>
      <div onClick={hide} style={style}>
        隐藏
      </div>
      <div style={{ marginTop: '60px' }}>
        <div>更多精彩</div>
        <img src="http://cdn.dooring.cn/dr/qtqd_code.png" width="180px" />
      </div>
    </div>
  );
}
