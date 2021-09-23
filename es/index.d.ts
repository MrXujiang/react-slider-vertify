import React, { ReactNode } from 'react';

export interface IVertifyProp {
  /**
   * @description   canvas宽度
   * @default       320
   */
  width?: number;
  /**
   * @description   canvas高度
   * @default       160
   */
  height?: number;
  /**
   * @description   滑块边长
   * @default       42
   */
  l?: number;
  /**
   * @description   滑块半径
   * @default       9
   */
  r?: number;
  /**
   * @description   是否可见
   * @default       true
   */
  visible?: boolean;
  /**
   * @description   滑块文本
   * @default       向右滑动填充拼图
   */
  text?: string | ReactNode;
  /**
   * @description   刷新按钮icon, 为icon的url地址
   * @default       -
   */
  refreshIcon?: string;
  /**
   * @description   用于获取随机图片的url地址
   * @default       https://picsum.photos/${id}/${width}/${height}, 具体参考https://picsum.photos/, 只需要实现类似接口即可
   */
  imgUrl?: string;
  /**
   * @description   验证成功回调
   * @default       ():void => {}
   */
  onSuccess?: VoidFunction;
  /**
   * @description   验证失败回调
   * @default       ():void => {}
   */
  onFail?: VoidFunction;
  /**
   * @description   刷新时回调
   * @default       ():void => {}
   */
  onRefresh?: VoidFunction;
}

declare const Vertify: React.FC<IVertifyProp>;

export { Vertify };
