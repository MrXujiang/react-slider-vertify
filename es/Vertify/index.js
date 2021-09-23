import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';

var _this = this;

import React, { useRef, useState, useEffect, memo } from 'react';
import { getRandomNumberByRange, sum, square } from './tool';
import './index.css';
export default /*#__PURE__*/ memo(function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 320 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 160 : _ref$height,
    _ref$l = _ref.l,
    l = _ref$l === void 0 ? 42 : _ref$l,
    _ref$r = _ref.r,
    r = _ref$r === void 0 ? 9 : _ref$r,
    imgUrl = _ref.imgUrl,
    text = _ref.text,
    _ref$refreshIcon = _ref.refreshIcon,
    refreshIcon =
      _ref$refreshIcon === void 0
        ? 'http://cdn.dooring.cn/dr/icon12.png'
        : _ref$refreshIcon,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? true : _ref$visible,
    onSuccess = _ref.onSuccess,
    onFail = _ref.onFail,
    onRefresh = _ref.onRefresh;

  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setLoading = _useState2[1];

  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    sliderLeft = _useState4[0],
    setSliderLeft = _useState4[1];

  var _useState5 = useState('sliderContainer'),
    _useState6 = _slicedToArray(_useState5, 2),
    sliderClass = _useState6[0],
    setSliderClass = _useState6[1];

  var _useState7 = useState(text),
    _useState8 = _slicedToArray(_useState7, 2),
    textTip = _useState8[0],
    setTextTip = _useState8[1];

  var canvasRef = useRef(null);
  var blockRef = useRef(null);
  var imgRef = useRef(null);
  var isMouseDownRef = useRef(false);
  var trailRef = useRef([]);
  var originXRef = useRef(0);
  var originYRef = useRef(0);
  var xRef = useRef(0);
  var yRef = useRef(0);
  var PI = Math.PI;
  var L = l + r * 2 + 3; // 滑块实际边长

  var drawPath = function drawPath(ctx, x, y, operation) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
    ctx.lineTo(x + l, y);
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.stroke();
    ctx.globalCompositeOperation = 'destination-over';
    operation === 'fill' ? ctx.fill() : ctx.clip();
  };

  var getRandomImgSrc = function getRandomImgSrc() {
    return (
      imgUrl ||
      'https://picsum.photos/id/'
        .concat(getRandomNumberByRange(0, 1084), '/')
        .concat(width, '/')
        .concat(height)
    );
  };

  var createImg = function createImg(onload) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = onload;

    img.onerror = function () {
      img.setSrc(getRandomImgSrc()); // 图片加载失败的时候重新加载其他图片
    };

    img.setSrc = function (src) {
      var isIE = window.navigator.userAgent.indexOf('Trident') > -1;

      if (isIE) {
        // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
        var xhr = new XMLHttpRequest();

        xhr.onloadend = function (e) {
          var file = new FileReader(); // FileReader仅支持IE10+

          file.readAsDataURL(e.target.response);

          file.onloadend = function (e) {
            var _e$target;

            img.src =
              e === null || e === void 0
                ? void 0
                : (_e$target = e.target) === null || _e$target === void 0
                ? void 0
                : _e$target.result;
          };
        };

        xhr.open('GET', src);
        xhr.responseType = 'blob';
        xhr.send();
      } else img.src = src;
    };

    img.setSrc(getRandomImgSrc());
    return img;
  };

  var draw = function draw(img) {
    var canvasCtx = canvasRef.current.getContext('2d');
    var blockCtx = blockRef.current.getContext('2d'); // 随机位置创建拼图形状

    xRef.current = getRandomNumberByRange(L + 10, width - (L + 10));
    yRef.current = getRandomNumberByRange(10 + r * 2, height - (L + 10));
    drawPath(canvasCtx, xRef.current, yRef.current, 'fill');
    drawPath(blockCtx, xRef.current, yRef.current, 'clip'); // 画入图片

    canvasCtx.drawImage(img, 0, 0, width, height);
    blockCtx.drawImage(img, 0, 0, width, height); // 提取滑块并放到最左边

    var y1 = yRef.current - r * 2 - 1;
    var ImageData = blockCtx.getImageData(xRef.current - 3, y1, L, L);
    blockRef.current.width = L;
    blockCtx.putImageData(ImageData, 0, y1);
  };

  var initImg = function initImg() {
    var img = createImg(function () {
      setLoading(false);
      draw(img);
    });
    imgRef.current = img;
  };

  var reset = function reset() {
    var canvasCtx = canvasRef.current.getContext('2d');
    var blockCtx = blockRef.current.getContext('2d'); // 重置样式

    setSliderLeft(0);
    setSliderClass('sliderContainer');
    blockRef.current.width = width;
    blockRef.current.style.left = 0 + 'px'; // 清空画布

    canvasCtx.clearRect(0, 0, width, height);
    blockCtx.clearRect(0, 0, width, height); // 重新加载图片

    setLoading(true);
    imgRef.current.setSrc(getRandomImgSrc());
  };

  var handleRefresh = function handleRefresh() {
    reset();
    typeof onRefresh === 'function' && onRefresh();
  };

  var verify = function verify() {
    var arr = trailRef.current; // 拖动时y轴的移动距离

    var average = arr.reduce(sum) / arr.length;
    var deviations = arr.map(function (x) {
      return x - average;
    });
    var stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length);
    var left = parseInt(blockRef.current.style.left);
    return {
      spliced: Math.abs(left - xRef.current) < 10,
      verified: stddev !== 0, // 简单验证拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
    };
  };

  var handleDragStart = function handleDragStart(e) {
    originXRef.current = e.clientX || e.touches[0].clientX;
    originYRef.current = e.clientY || e.touches[0].clientY;
    isMouseDownRef.current = true;
  };

  var handleDragMove = function handleDragMove(e) {
    if (!isMouseDownRef.current) return false;
    e.preventDefault();
    var eventX = e.clientX || e.touches[0].clientX;
    var eventY = e.clientY || e.touches[0].clientY;
    var moveX = eventX - originXRef.current;
    var moveY = eventY - originYRef.current;
    if (moveX < 0 || moveX + 38 >= width) return false;
    setSliderLeft(moveX);
    var blockLeft = ((width - 40 - 20) / (width - 40)) * moveX;
    blockRef.current.style.left = blockLeft + 'px';
    setSliderClass('sliderContainer sliderContainer_active');
    trailRef.current.push(moveY);
  };

  var handleDragEnd = function handleDragEnd(e) {
    if (!isMouseDownRef.current) return false;
    isMouseDownRef.current = false;
    var eventX = e.clientX || e.changedTouches[0].clientX;
    if (eventX === originXRef.current) return false;
    setSliderClass('sliderContainer');

    var _verify = verify(),
      spliced = _verify.spliced,
      verified = _verify.verified;

    if (spliced) {
      if (verified) {
        setSliderClass('sliderContainer sliderContainer_success');
        typeof onSuccess === 'function' && onSuccess();
      } else {
        setSliderClass('sliderContainer sliderContainer_fail');
        setTextTip('请再试一次');
        reset();
      }
    } else {
      setSliderClass('sliderContainer sliderContainer_fail');
      typeof onFail === 'function' && onFail();
      setTimeout(reset.bind(_this), 1000);
    }
  };

  useEffect(
    function () {
      if (visible) {
        imgRef.current ? reset() : initImg();
      }
    },
    [visible],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'vertifyWrap',
      style: {
        width: width + 'px',
        margin: '0 auto',
        display: visible ? '' : 'none',
      },
      onMouseMove: handleDragMove,
      onMouseUp: handleDragEnd,
      onTouchMove: handleDragMove,
      onTouchEnd: handleDragEnd,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'canvasArea',
      },
      /*#__PURE__*/ React.createElement('canvas', {
        ref: canvasRef,
        width: width,
        height: height,
      }),
      /*#__PURE__*/ React.createElement('canvas', {
        ref: blockRef,
        className: 'block',
        width: width,
        height: height,
        onMouseDown: handleDragStart,
        onTouchStart: handleDragStart,
      }),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: sliderClass,
        style: {
          pointerEvents: isLoading ? 'none' : 'auto',
          width: width + 'px',
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'sliderMask',
          style: {
            width: sliderLeft + 'px',
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'slider',
            style: {
              left: sliderLeft + 'px',
            },
            onMouseDown: handleDragStart,
            onTouchStart: handleDragStart,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'sliderIcon',
            },
            '\u2192',
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'sliderText',
        },
        textTip,
      ),
    ),
    /*#__PURE__*/ React.createElement('div', {
      className: 'refreshIcon',
      onClick: handleRefresh,
      style: {
        backgroundImage: 'url('.concat(refreshIcon, ')'),
      },
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'loadingContainer',
        style: {
          width: width + 'px',
          height: height + 'px',
          display: isLoading ? '' : 'none',
        },
      },
      /*#__PURE__*/ React.createElement('div', {
        className: 'loadingIcon',
      }),
      /*#__PURE__*/ React.createElement('span', null, '\u52A0\u8F7D\u4E2D...'),
    ),
  );
});
