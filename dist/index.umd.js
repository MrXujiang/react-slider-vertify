(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('react'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.reactSliderVertify = {}), global.React));
})(this, function (exports, React) {
  'use strict';

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e };
  }

  var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

  function getDefaultExportFromCjs(x) {
    return x &&
      x.__esModule &&
      Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x;
  }

  function createCommonjsModule(fn, basedir, module) {
    return (
      (module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return commonjsRequire(
            path,
            base === undefined || base === null ? module.path : base,
          );
        },
      }),
      fn(module, module.exports),
      module.exports
    );
  }

  function commonjsRequire() {
    throw new Error(
      'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
    );
  }

  var arrayWithHoles = createCommonjsModule(function (module) {
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    module.exports = _arrayWithHoles;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var iterableToArrayLimit = createCommonjsModule(function (module) {
    function _iterableToArrayLimit(arr, i) {
      var _i =
        arr == null
          ? null
          : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
            arr['@@iterator'];

      if (_i == null) return;
      var _arr = [];
      var _n = true;
      var _d = false;

      var _s, _e;

      try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i['return'] != null) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    module.exports = _iterableToArrayLimit;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var arrayLikeToArray = createCommonjsModule(function (module) {
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    module.exports = _arrayLikeToArray;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var unsupportedIterableToArray = createCommonjsModule(function (module) {
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === 'string') return arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === 'Object' && o.constructor) n = o.constructor.name;
      if (n === 'Map' || n === 'Set') return Array.from(o);
      if (
        n === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return arrayLikeToArray(o, minLen);
    }

    module.exports = _unsupportedIterableToArray;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var nonIterableRest = createCommonjsModule(function (module) {
    function _nonIterableRest() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }

    module.exports = _nonIterableRest;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var slicedToArray = createCommonjsModule(function (module) {
    function _slicedToArray(arr, i) {
      return (
        arrayWithHoles(arr) ||
        iterableToArrayLimit(arr, i) ||
        unsupportedIterableToArray(arr, i) ||
        nonIterableRest()
      );
    }

    module.exports = _slicedToArray;
    (module.exports['default'] = module.exports),
      (module.exports.__esModule = true);
  });

  var _slicedToArray = /*@__PURE__*/ getDefaultExportFromCjs(slicedToArray);

  function getRandomNumberByRange(start, end) {
    return Math.round(Math.random() * (end - start) + start);
  }

  function sum(x, y) {
    return x + y;
  }

  function square(x) {
    return x * x;
  }

  var _this = undefined;
  var index = /*#__PURE__*/ React.memo(function (_ref) {
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

    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

    var _useState3 = React.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      sliderLeft = _useState4[0],
      setSliderLeft = _useState4[1];

    var _useState5 = React.useState('sliderContainer'),
      _useState6 = _slicedToArray(_useState5, 2),
      sliderClass = _useState6[0],
      setSliderClass = _useState6[1];

    var _useState7 = React.useState(text),
      _useState8 = _slicedToArray(_useState7, 2),
      textTip = _useState8[0],
      setTextTip = _useState8[1];

    var canvasRef = React.useRef(null);
    var blockRef = React.useRef(null);
    var imgRef = React.useRef(null);
    var isMouseDownRef = React.useRef(false);
    var trailRef = React.useRef([]);
    var originXRef = React.useRef(0);
    var originYRef = React.useRef(0);
    var xRef = React.useRef(0);
    var yRef = React.useRef(0);
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

    React.useEffect(
      function () {
        if (visible) {
          imgRef.current ? reset() : initImg();
        }
      },
      [visible],
    );
    return /*#__PURE__*/ React__default['default'].createElement(
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
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'canvasArea',
        },
        /*#__PURE__*/ React__default['default'].createElement('canvas', {
          ref: canvasRef,
          width: width,
          height: height,
        }),
        /*#__PURE__*/ React__default['default'].createElement('canvas', {
          ref: blockRef,
          className: 'block',
          width: width,
          height: height,
          onMouseDown: handleDragStart,
          onTouchStart: handleDragStart,
        }),
      ),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: sliderClass,
          style: {
            pointerEvents: isLoading ? 'none' : 'auto',
            width: width + 'px',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            className: 'sliderMask',
            style: {
              width: sliderLeft + 'px',
            },
          },
          /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              className: 'slider',
              style: {
                left: sliderLeft + 'px',
              },
              onMouseDown: handleDragStart,
              onTouchStart: handleDragStart,
            },
            /*#__PURE__*/ React__default['default'].createElement(
              'div',
              {
                className: 'sliderIcon',
              },
              '\u2192',
            ),
          ),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'div',
          {
            className: 'sliderText',
          },
          textTip,
        ),
      ),
      /*#__PURE__*/ React__default['default'].createElement('div', {
        className: 'refreshIcon',
        onClick: handleRefresh,
        style: {
          backgroundImage: 'url('.concat(refreshIcon, ')'),
        },
      }),
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'loadingContainer',
          style: {
            width: width + 'px',
            height: height + 'px',
            display: isLoading ? '' : 'none',
          },
        },
        /*#__PURE__*/ React__default['default'].createElement('div', {
          className: 'loadingIcon',
        }),
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          null,
          '\u52A0\u8F7D\u4E2D...',
        ),
      ),
    );
  });

  exports.Vertify = index;

  Object.defineProperty(exports, '__esModule', { value: true });
});
