/**
 * HTML JS Executor - 在类似浏览器的环境下执行 HTML 中引用的本地 JS
 * 按调用顺序收集 console 日志并返回日志数组
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');

/**
 * 创建轻量 jQuery stub
 * 支持链式调用、选择器、$.cookie()、$.get/$.getJSON、.load() 等
 */
function createJQueryStub(window, document, fileSystemContext) {
  // 创建 Deferred-like 对象来支持 .done()、.fail()、.always()
  function createDeferred() {
    const deferred = {
      callbacks: [],
      failCallbacks: [],
      alwaysCallbacks: [],
      state: 'pending',
      value: null,
      error: null,

      done: function(callback) {
        if (typeof callback === 'function') {
          if (this.state === 'resolved') {
            callback(this.value);
          } else {
            this.callbacks.push(callback);
          }
        }
        return this;
      },

      fail: function(callback) {
        if (typeof callback === 'function') {
          if (this.state === 'rejected') {
            callback(this.error);
          } else {
            this.failCallbacks.push(callback);
          }
        }
        return this;
      },

      always: function(callback) {
        if (typeof callback === 'function') {
          if (this.state !== 'pending') {
            callback();
          } else {
            this.alwaysCallbacks.push(callback);
          }
        }
        return this;
      },

      resolve: function(value) {
        if (this.state === 'pending') {
          this.state = 'resolved';
          this.value = value;
          this.callbacks.forEach((cb) => cb(value));
          this.alwaysCallbacks.forEach((cb) => cb());
        }
        return this;
      },

      reject: function(error) {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.error = error;
          this.failCallbacks.forEach((cb) => cb(error));
          this.alwaysCallbacks.forEach((cb) => cb());
        }
        return this;
      },
    };
    return deferred;
  }

  // Cookie 内存存储
  const cookieStore = {};

  // DOM 查询辅助函数 - 支持 ID、class、属性选择器
  function queryDOM(selector) {
    if (!selector || typeof selector !== 'string') {
      return null;
    }

    // ID 选择器：#id
    if (selector.startsWith('#')) {
      const id = selector.slice(1);
      return document.getElementById(id);
    }

    // Class 选择器：.class
    if (selector.startsWith('.')) {
      const className = selector.slice(1);
      return document.getElementsByClassName(className)[0];
    }

    // 属性选择器：[attr="value"]
    const attrMatch = selector.match(/^\[([^\]=]+)=["']?([^\]"']+)["']?\]$/);
    if (attrMatch) {
      const [, attr, value] = attrMatch;
      return document.querySelector(`[${attr}="${value}"]`);
    }

    // 通用选择器
    try {
      return document.querySelector(selector);
    } catch (e) {
      return null;
    }
  }

  // Mock DOM 对象 - 用于链式调用，支持所有常用 jQuery 方法
  const mockDOMElement = {
    // 数组访问支持
    0: {
      innerHTML: '',
      style: {},
      className: '',
      getAttribute: function(attr) { return null; },
      setAttribute: function(attr, value) {},
      addEventListener: function(event, handler) {},
      removeEventListener: function(event, handler) {},
    },
    length: 1,
    // 事件绑定方法
    on: function(event, handler) {
      if (typeof handler === 'function' && (event === 'ready' || event === 'load')) {
        handler.call(this);
      }
      return this;
    },
    bind: function(event, handler) {
      if (typeof handler === 'function') {
        handler.call(this);
      }
      return this;
    },
    click: function(handler) {
      return this;
    },
    change: function(handler) {
      return this;
    },
    submit: function(handler) {
      return this;
    },
    keyup: function(handler) {
      return this;
    },
    keydown: function(handler) {
      return this;
    },
    blur: function(handler) {
      return this;
    },
    focus: function(handler) {
      return this;
    },
    mouseover: function(handler) {
      return this;
    },
    mouseout: function(handler) {
      return this;
    },
    scroll: function(handler) {
      return this;
    },
    // 属性方法
    prop: function(name, value) {
      return value !== undefined ? this : false;
    },
    attr: function(name, value) {
      return value !== undefined ? this : '';
    },
    css: function(prop, value) {
      return this;
    },
    // DOM 操作
    append: function(content) {
      return this;
    },
    html: function(content) {
      return content !== undefined ? this : '';
    },
    text: function(content) {
      return content !== undefined ? this : '';
    },
    val: function(value) {
      return value !== undefined ? this : '';
    },
    each: function(fn) {
      if (typeof fn === 'function') {
        fn.call(this, 0, this);
      }
      return this;
    },
    find: function(selector) {
      return this;
    },
    filter: function(selector) {
      return this;
    },
    eq: function(index) {
      return this;
    },
    parent: function(selector) {
      return this;
    },
    parents: function(selector) {
      return this;
    },
    children: function(selector) {
      return this;
    },
    siblings: function(selector) {
      return this;
    },
    addClass: function(className) {
      return this;
    },
    removeClass: function(className) {
      return this;
    },
    toggleClass: function(className) {
      return this;
    },
    hasClass: function(className) {
      return false;
    },
    is: function(selector) {
      return false;
    },
    empty: function() {
      return this;
    },
    remove: function() {
      return this;
    },
    detach: function() {
      return this;
    },
    clone: function(deep) {
      return this;
    },
    // 特殊方法
    ready: function(fn) {
      if (typeof fn === 'function') {
        fn.call(window);
      }
      return this;
    },
    load: function(url, callback) {
      if (typeof callback === 'function') {
        setTimeout(() => callback.call(this), 0);
      }
      return this;
    },
    // 显示隐藏
    hide: function() {
      return this;
    },
    show: function() {
      return this;
    },
    toggle: function() {
      return this;
    },
    // 动画方法
    fadeIn: function(duration, callback) {
      if (typeof duration === 'function') callback = duration;
      if (typeof callback === 'function') setTimeout(() => callback.call(this), 0);
      return this;
    },
    fadeOut: function(duration, callback) {
      if (typeof duration === 'function') callback = duration;
      if (typeof callback === 'function') setTimeout(() => callback.call(this), 0);
      return this;
    },
    slideDown: function(duration, callback) {
      if (typeof duration === 'function') callback = duration;
      if (typeof callback === 'function') setTimeout(() => callback.call(this), 0);
      return this;
    },
    slideUp: function(duration, callback) {
      if (typeof duration === 'function') callback = duration;
      if (typeof callback === 'function') setTimeout(() => callback.call(this), 0);
      return this;
    },
    animate: function(properties, duration, easing, callback) {
      if (typeof duration === 'function') callback = duration;
      if (typeof easing === 'function') callback = easing;
      if (typeof callback === 'function') setTimeout(() => callback.call(this), 0);
      return this;
    },
    delay: function(duration) {
      return this;
    },
    // 数据方法
    data: function(key, value) {
      return value !== undefined ? this : undefined;
    },
    removeData: function(key) {
      return this;
    },
    serialize: function() {
      return '';
    },
    serializeArray: function() {
      return [];
    },
    // 额外的 jQuery 方法
    offset: function(value) {
      return value !== undefined ? this : { top: 0, left: 0 };
    },
    position: function() {
      return { top: 0, left: 0 };
    },
    width: function(value) {
      return value !== undefined ? this : 0;
    },
    height: function(value) {
      return value !== undefined ? this : 0;
    },
    outerWidth: function(includeMargin) {
      return 0;
    },
    outerHeight: function(includeMargin) {
      return 0;
    },
    inner: function(content) {
      return this;
    },
    extend: function(obj) {
      return this;
    },
    index: function(selector) {
      return 0;
    },
    get: function(index) {
      return null;
    },
    toArray: function() {
      return [];
    },
    map: function(fn) {
      return this;
    },
    add: function(selector) {
      return this;
    },
    not: function(selector) {
      return this;
    },
    slice: function(start, end) {
      return this;
    },
    wrap: function(html) {
      return this;
    },
    wrapAll: function(html) {
      return this;
    },
    wrapInner: function(html) {
      return this;
    },
    unwrap: function() {
      return this;
    },
    replaceWith: function(content) {
      return this;
    },
    replaceAll: function(selector) {
      return this;
    },
    insertBefore: function(selector) {
      return this;
    },
    insertAfter: function(selector) {
      return this;
    },
    prependTo: function(selector) {
      return this;
    },
    appendTo: function(selector) {
      return this;
    },
    bootstrapTable: function() {
      return this;
    },
    before: function(content) {
      return this;
    },
    after: function(content) {
      return this;
    },
    closest: function(selector) {
      return this;
    },
    next: function(selector) {
      return this;
    },
    nextAll: function(selector) {
      return this;
    },
    prev: function(selector) {
      return this;
    },
    prevAll: function(selector) {
      return this;
    },
    getAttr: function(attr) {
      return '';
    },
    removeAttr: function(attr) {
      return this;
    },
    length: 0,
  };

  // jQuery 主函数
  const jQuery = function(selector) {
    // 如果传入函数（如 $(function() {})），立即执行
    if (typeof selector === 'function') {
      selector.call(window);
      return jQuery;
    }

    // 如果是字符串选择器，查询 DOM
    if (typeof selector === 'string') {
      const element = queryDOM(selector);
      // 如果找到真实元素，为其添加 jQuery 方法
      if (element) {
        const jQueryObject = Object.assign(Object.create(mockDOMElement), element);
        // 添加数组访问支持
        jQueryObject[0] = element;
        jQueryObject.length = 1;
        return jQueryObject;
      }
      // 对于常见的选择器，即使没有找到元素，也返回一个有 length 属性的 mock 对象
      // 这样可以避免 "Cannot read properties of null (reading 'length')" 错误
      const mockWithLength = Object.create(mockDOMElement);
      mockWithLength.length = 0;
      return mockWithLength;
    }

    // 其他情况返回 mock 对象
    return Object.create(mockDOMElement);
  };

  // 静态方法：$.get (改进版本，和 $.getJSON 保持一致的错误处理)
  jQuery.get = function(url, callback) {
    const deferred = createDeferred();
    try {
      // 尝试多种路径解析方式
      let filePath = null;
      let data = null;

      // 方式 1: 相对于 HTML 所在目录
      try {
        filePath = path.join(fileSystemContext, url);
        data = fs.readFileSync(filePath, 'utf8');
      } catch (e1) {
        // 方式 2: 绝对路径（以根目录为基准）
        try {
          filePath = path.join(htmlDir, url);
          data = fs.readFileSync(filePath, 'utf8');
        } catch (e2) {
          // 方式 3: 相对于当前工作目录
          try {
            filePath = path.resolve(url);
            data = fs.readFileSync(filePath, 'utf8');
          } catch (e3) {
            throw new Error(`无法加载文件 ${url}`);
          }
        }
      }

      // 成功加载
      deferred.resolve(data);
      if (typeof callback === 'function') {
        setTimeout(() => {
          callback(data);
        }, 0);
      }
    } catch (error) {
      // 加载失败
      deferred.reject(error);
      if (typeof callback === 'function') {
        setTimeout(() => {
          callback('', error);
        }, 0);
      }
    }
    return deferred;
  };

  // 静态方法：$.getJSON (改进版本，确保数据正确传递)
  jQuery.getJSON = function(url, callback) {
    const deferred = createDeferred();
    // 立即执行（不延迟），因为是同步操作
    try {
      // 尝试多种路径解析方式
      let filePath = null;
      let data = null;
      let json = null;

      // 方式 1: 相对于 HTML 所在目录
      try {
        filePath = path.join(fileSystemContext, url);
        data = fs.readFileSync(filePath, 'utf8');
        json = JSON.parse(data);
      } catch (e1) {
        // 方式 2: 绝对路径（以根目录为基准）
        try {
          filePath = path.join(htmlDir, url);
          data = fs.readFileSync(filePath, 'utf8');
          json = JSON.parse(data);
        } catch (e2) {
          // 方式 3: 相对于当前工作目录
          try {
            filePath = path.resolve(url);
            data = fs.readFileSync(filePath, 'utf8');
            json = JSON.parse(data);
          } catch (e3) {
            throw new Error(`无法加载文件 ${url}\n尝试过: ${path.join(fileSystemContext, url)}, ${path.join(htmlDir, url)}, ${path.resolve(url)}`);
          }
        }
      }

      // 成功加载并解析
      deferred.resolve(json);
      if (typeof callback === 'function') {
        // 使用 setTimeout 确保异步调用，模拟真实 AJAX
        setTimeout(() => {
          callback(json);
        }, 0);
      }
    } catch (error) {
      // 加载或解析失败
      deferred.reject(error);
      if (typeof callback === 'function') {
        // 回调会收到错误信息作为第二个参数，或空数组作为备选
        setTimeout(() => {
          callback([], error);
        }, 0);
      }
    }
    return deferred;
  };

  // 静态方法：$.cookie
  jQuery.cookie = function(name, value, options) {
    if (value !== undefined) {
      cookieStore[name] = String(value);
      return jQuery;
    }
    return cookieStore[name] || null;
  };

  // 静态方法：$.fn（模拟 jQuery 原型）
  jQuery.fn = mockDOMElement;

  return jQuery;
}

/**
 * 主函数：在类似浏览器的环境下执行 HTML 中的脚本
 * @param {string} htmlPathWithQuery - HTML 文件路径及查询字符串，如 '/result.html?t=202602&q=d'
 * @param {object} options - 选项
 *   - captureLevels: 要捕获的日志级别数组，默认 ['log','info','warn','error','debug']
 *   - throwOnScriptError: 脚本错误时是否抛出异常，默认 true
 *   - waitForMs: 脚本执行后的等待时间（毫秒），默认 0
 * @returns {Promise<Array>} 日志数组 [ { level, message, timestamp }, ... ]
 */
async function executeHtmlAndCollectLogs(htmlPathWithQuery, options = {}) {
  const {
    captureLevels = ['log', 'info', 'warn', 'error', 'debug'],
    throwOnScriptError = false,
    waitForMs = 0,
  } = options;

  // 解析 HTML 路径和查询字符串
  const [htmlPath, queryString] = htmlPathWithQuery.split('?');
  const search = queryString ? `?${queryString}` : '';

  // 获取工作目录（HTML 文件的目录）
  const workspaceRoot = process.cwd();
  const fullHtmlPath = path.join(workspaceRoot, htmlPath.startsWith('/') ? htmlPath.slice(1) : htmlPath);
  const htmlDir = path.dirname(fullHtmlPath);

  // 读取 HTML 文件
  let htmlContent;
  try {
    htmlContent = fs.readFileSync(fullHtmlPath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to read HTML file: ${fullHtmlPath}\n${error.message}`);
  }

  // 创建 JSDOM 环境
  const url = `file://${fullHtmlPath}${search}`;
  let dom;
  try {
    // 创建 virtualConsole 来抑制网络和异常错误
    const { VirtualConsole } = require('jsdom');
    const virtualConsole = new VirtualConsole();
    
    // 忽略所有网络相关错误和 jsdom 异常
    virtualConsole.on('error', (err) => {
      // 完全抑制这些消息，因为我们有自己的错误捕获机制
    });
    
    virtualConsole.on('warn', (msg) => {
      // 抑制网络和资源警告
      if (!msg.includes('Network') && !msg.includes('fetch') && !msg.includes('Could not load')) {
        // 允许其他警告通过
      }
    });
    
    virtualConsole.on('jsdomError', (err) => {
      // 完全抑制 jsdom 异常，用户已经通过 console.error 获得了我们捕获的错误
    });

    dom = new JSDOM(htmlContent, {
      url: url,
      pretendToBeVisual: true,
      virtualConsole: virtualConsole,
      beforeParse(window) {
        // 禁用 fetch 以防止网络请求
        window.fetch = () => Promise.reject(new Error('fetch disabled'));

        // 修补部分旧页面代码：document.getElementById("id")[0] 兼容性
        const originalGetElementById = window.document.getElementById.bind(window.document);
        window.document.getElementById = function(id) {
          const el = originalGetElementById(id);
          if (el && el[0] === undefined) {
            try {
              el[0] = el;
            } catch (e) {
              // Ignore if not writable
            }
          }
          return el;
        };
        
        // 禁用 jsdom 的默认异常报告，使用我们自己的错误捕获机制
        // 保存原始处理程序，以便我们可以自定义错误处理
        const originalOnError = window.onerror;
        window.onerror = function(error, source, lineno, colno, errorObj) {
          // 我们已经通过 try-catch 和 console.error 捕获了脚本错误
          // 此处返回 true 防止 jsdom 默认错误处理
          return true;
        };
        
        // 禁用未处理的 Promise 拒绝报告
        const originalOnUnhandledRejection = window.onunhandledrejection;
        window.onunhandledrejection = function(event) {
          // 我们的错误捕获机制已经处理了这些
          event.preventDefault();
          return true;
        };
      },
    });
  } catch (error) {
    throw new Error(`Failed to create JSDOM environment: ${error.message}`);
  }

  if (!dom) {
    throw new Error('JSDOM creation resulted in undefined');
  }

  const { window } = dom;
  const document = window.document;

  if (!document) {
    throw new Error('JSDOM document is undefined');
  }

  // 日志收集
  const logs = [];
  const logTimestamp = () => Date.now();

  // 注入 console 拦截器
  const consoleLevels = ['log', 'info', 'warn', 'error', 'debug'];
  consoleLevels.forEach((level) => {
    const originalMethod = console[level];
    window.console[level] = function(...args) {
      if (captureLevels.includes(level)) {
        const message = args
          .map((arg) => {
            if (typeof arg === 'string') return arg;
            if (typeof arg === 'object') {
              try {
                return JSON.stringify(arg);
              } catch (e) {
                return String(arg);
              }
            }
            return String(arg);
          })
          .join(' ');

        logs.push({
          level,
          message,
          timestamp: logTimestamp(),
        });
      }
      originalMethod.apply(console, args);
    };
  });

  // 创建 jQuery stub
  const jQuery = createJQueryStub(window, document, htmlDir);
  window.$ = window.jQuery = jQuery;

  // 提取 HTML 中的 script 标签并按顺序执行
  const scriptElements = document.querySelectorAll('script');
  const scripts = [];

  for (const scriptElement of scriptElements) {
    const src = scriptElement.getAttribute('src');
    const textContent = scriptElement.textContent || scriptElement.innerHTML;

    // 跳过 http/https 外链脚本
    if (src && (src.startsWith('http://') || src.startsWith('https://'))) {
      continue;
    }

    // 如果是本地脚本文件引用
    if (src) {
      try {
        const scriptPath = path.join(htmlDir, src);
        const scriptCode = fs.readFileSync(scriptPath, 'utf8');
        scripts.push({ code: scriptCode, src });
      } catch (error) {
        if (throwOnScriptError) {
          throw new Error(`Failed to load local script: ${src}\n${error.message}`);
        } else {
          logs.push({
            level: 'error',
            message: `Failed to load local script: ${src}`,
            timestamp: logTimestamp(),
          });
        }
      }
      continue;
    }

    // 内联脚本
    if (textContent && textContent.trim()) {
      scripts.push({ code: textContent, src: '<inline>' });
    }
  }

  // 执行所有脚本
  const context = vm.createContext({
    window,
    document,
    location: window.location,
    navigator: window.navigator || {
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      language: 'en-US',
      languages: ['en-US'],
      platform: 'Win32',
      onLine: true,
      cookieEnabled: true,
      doNotTrack: null,
      browserLanguage: 'en-US',
    },
    screen: window.screen || {
      width: 1920,
      height: 1080,
      availWidth: 1920,
      availHeight: 1050,
      colorDepth: 24,
      pixelDepth: 24,
    },
    history: window.history || { back: () => {}, forward: () => {}, go: () => {} },
    localStorage: {
      store: {},
      getItem(key) {
        return this.store[key] || null;
      },
      setItem(key, value) {
        this.store[key] = String(value);
      },
      removeItem(key) {
        delete this.store[key];
      },
      clear() {
        this.store = {};
      },
      key(index) {
        return Object.keys(this.store)[index] || null;
      },
      get length() {
        return Object.keys(this.store).length;
      },
    },
    sessionStorage: {
      store: {},
      getItem(key) {
        return this.store[key] || null;
      },
      setItem(key, value) {
        this.store[key] = String(value);
      },
      removeItem(key) {
        delete this.store[key];
      },
      clear() {
        this.store = {};
      },
      key(index) {
        return Object.keys(this.store)[index] || null;
      },
      get length() {
        return Object.keys(this.store).length;
      },
    },
    console: window.console,
    jQuery: window.jQuery,
    $: window.$,
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    JSON,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Error,
    Math,
    Date,
    RegExp,
    Promise,
    dataLayer: [],
    gtag: () => {},
    undefined,
  });

  // 保存脚本源代码映射用于错误报告
  const scriptSourceMap = {};
  const scriptSourceLines = {};

  for (const script of scripts) {
    // 保存源代码便于后续错误报告
    scriptSourceLines[script.src] = script.code.split('\n');
  }

  for (const script of scripts) {
    try {
      const vmScript = new vm.Script(script.code, {
        filename: script.src,
        lineOffset: 0,
        columnOffset: 0,
        displayErrors: true,
      });
      vmScript.runInContext(context, {
        timeout: 10000,
        filename: script.src,
      });
    } catch (error) {
      if (throwOnScriptError) {
        throw error;  // 直接抛出原始错误，保留完整堆栈
      } else {
        // 仅当 captureLevels 包含 'error' 时，才记录错误日志
        if (captureLevels.includes('error')) {
          // 从脚本源代码中查找导致错误的行（通过解析堆栈）
          let errorLine = null;
          let errorColumn = null;
          
          // 尝试从 error 对象中提取行列信息（不访问 .stack，避免重新生成）
          if (error.lineno !== undefined && error.colno !== undefined) {
            errorLine = error.lineno;
            errorColumn = error.colno;
          } else if (error.line !== undefined) {
            errorLine = error.line;
          }

          // 手动构造堆栈信息，完全避免使用 error.stack
          let reconstructedStack;
          if (errorLine) {
            const sourceLines = scriptSourceLines[script.src] || [];
            const contextStart = Math.max(0, errorLine - 3);
            const contextEnd = Math.min(sourceLines.length, errorLine + 1);
            const context = sourceLines.slice(contextStart, contextEnd).map((line, i) => {
              const lineNum = contextStart + i + 1;
              const prefix = lineNum === errorLine ? '> ' : '  ';
              return `${prefix}${lineNum} | ${line}`;
            }).join('\n');
            
            reconstructedStack = `at ${script.src}:${errorLine}:${errorColumn || 0}\n${context}`;
          } else {
            // 如果没有行号信息，至少显示脚本路径
            reconstructedStack = `at ${script.src}`;
            // 只有在必要时才访问 error.stack，并立即冻结它
            if (error.stack) {
              const stackSnapshot = String(error.stack); // 强制字符串转换，冻结值
              reconstructedStack += '\n(VM Stack):\n' + stackSnapshot.split('\n').slice(0, 5).join('\n');
            }
          }

          logs.push({
            level: 'error',
            message: error.message,
            script: script.src,
            stack: reconstructedStack,  // 重建的堆栈指向原始脚本文件
            timestamp: logTimestamp(),
          });
        }
      }
    }
  }

  // 等待异步操作完成
  if (waitForMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, waitForMs));
  }

  return logs;
}

module.exports = {
  executeHtmlAndCollectLogs,
};
