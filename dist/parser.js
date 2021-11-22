var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/picomatch/lib/constants.js
var require_constants = __commonJS({
  "node_modules/picomatch/lib/constants.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    });
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      CHAR_0: 48,
      CHAR_9: 57,
      CHAR_UPPERCASE_A: 65,
      CHAR_LOWERCASE_A: 97,
      CHAR_UPPERCASE_Z: 90,
      CHAR_LOWERCASE_Z: 122,
      CHAR_LEFT_PARENTHESES: 40,
      CHAR_RIGHT_PARENTHESES: 41,
      CHAR_ASTERISK: 42,
      CHAR_AMPERSAND: 38,
      CHAR_AT: 64,
      CHAR_BACKWARD_SLASH: 92,
      CHAR_CARRIAGE_RETURN: 13,
      CHAR_CIRCUMFLEX_ACCENT: 94,
      CHAR_COLON: 58,
      CHAR_COMMA: 44,
      CHAR_DOT: 46,
      CHAR_DOUBLE_QUOTE: 34,
      CHAR_EQUAL: 61,
      CHAR_EXCLAMATION_MARK: 33,
      CHAR_FORM_FEED: 12,
      CHAR_FORWARD_SLASH: 47,
      CHAR_GRAVE_ACCENT: 96,
      CHAR_HASH: 35,
      CHAR_HYPHEN_MINUS: 45,
      CHAR_LEFT_ANGLE_BRACKET: 60,
      CHAR_LEFT_CURLY_BRACE: 123,
      CHAR_LEFT_SQUARE_BRACKET: 91,
      CHAR_LINE_FEED: 10,
      CHAR_NO_BREAK_SPACE: 160,
      CHAR_PERCENT: 37,
      CHAR_PLUS: 43,
      CHAR_QUESTION_MARK: 63,
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      CHAR_RIGHT_CURLY_BRACE: 125,
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      CHAR_SEMICOLON: 59,
      CHAR_SINGLE_QUOTE: 39,
      CHAR_SPACE: 32,
      CHAR_TAB: 9,
      CHAR_UNDERSCORE: 95,
      CHAR_VERTICAL_LINE: 124,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      SEP: path2.sep,
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});

// node_modules/picomatch/lib/utils.js
var require_utils = __commonJS({
  "node_modules/picomatch/lib/utils.js"(exports2) {
    "use strict";
    var path2 = require("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants();
    exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
    exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports2.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports2.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports2.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path2.sep === "\\";
    };
    exports2.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1)
        return input;
      if (input[idx - 1] === "\\")
        return exports2.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports2.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports2.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});

// node_modules/picomatch/lib/scan.js
var require_scan = __commonJS({
  "node_modules/picomatch/lib/scan.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var {
      CHAR_ASTERISK,
      CHAR_AT,
      CHAR_BACKWARD_SLASH,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_EXCLAMATION_MARK,
      CHAR_FORWARD_SLASH,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_LEFT_PARENTHESES,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_PLUS,
      CHAR_QUESTION_MARK,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_RIGHT_PARENTHESES,
      CHAR_RIGHT_SQUARE_BRACKET
    } = require_constants();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true)
            continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK)
            isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob)
          glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module2.exports = scan;
  }
});

// node_modules/picomatch/lib/parse.js
var require_parse = __commonJS({
  "node_modules/picomatch/lib/parse.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output)
          append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), { conditions: 1, inner: "" });
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            output = token.close = `)${rest})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".")
              prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true)
          throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = __spreadValues({}, options);
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true)
          return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match)
              return;
            const source2 = create(match[1]);
            if (!source2)
              return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module2.exports = parse;
  }
});

// node_modules/picomatch/lib/picomatch.js
var require_picomatch = __commonJS({
  "node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
    "use strict";
    var path2 = require("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils();
    var constants = require_constants();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch2 = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch2(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2)
              return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch2.compileRe(glob, options) : picomatch2.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
        isIgnored = picomatch2(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch2.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch2.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch2.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch2.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch2.makeRe(glob, options);
      return regex.test(path2.basename(input));
    };
    picomatch2.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
    picomatch2.parse = (pattern, options) => {
      if (Array.isArray(pattern))
        return pattern.map((p) => picomatch2.parse(p, options));
      return parse(pattern, __spreadProps(__spreadValues({}, options), { fastpaths: false }));
    };
    picomatch2.scan = (input, options) => scan(input, options);
    picomatch2.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch2.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch2.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch2.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch2.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true)
          throw err;
        return /$^/;
      }
    };
    picomatch2.constants = constants;
    module2.exports = picomatch2;
  }
});

// node_modules/picomatch/index.js
var require_picomatch2 = __commonJS({
  "node_modules/picomatch/index.js"(exports2, module2) {
    "use strict";
    module2.exports = require_picomatch();
  }
});

// node_modules/fast-glob/out/utils/array.js
var require_array = __commonJS({
  "node_modules/fast-glob/out/utils/array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.splitWhen = exports2.flatten = void 0;
    function flatten(items) {
      return items.reduce((collection, item) => [].concat(collection, item), []);
    }
    exports2.flatten = flatten;
    function splitWhen(items, predicate) {
      const result = [[]];
      let groupIndex = 0;
      for (const item of items) {
        if (predicate(item)) {
          groupIndex++;
          result[groupIndex] = [];
        } else {
          result[groupIndex].push(item);
        }
      }
      return result;
    }
    exports2.splitWhen = splitWhen;
  }
});

// node_modules/fast-glob/out/utils/errno.js
var require_errno = __commonJS({
  "node_modules/fast-glob/out/utils/errno.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isEnoentCodeError = void 0;
    function isEnoentCodeError(error) {
      return error.code === "ENOENT";
    }
    exports2.isEnoentCodeError = isEnoentCodeError;
  }
});

// node_modules/fast-glob/out/utils/fs.js
var require_fs = __commonJS({
  "node_modules/fast-glob/out/utils/fs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports2.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/fast-glob/out/utils/path.js
var require_path = __commonJS({
  "node_modules/fast-glob/out/utils/path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeLeadingDotSegment = exports2.escape = exports2.makeAbsolute = exports2.unixify = void 0;
    var path2 = require("path");
    var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
    var UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\())/g;
    function unixify(filepath) {
      return filepath.replace(/\\/g, "/");
    }
    exports2.unixify = unixify;
    function makeAbsolute(cwd, filepath) {
      return path2.resolve(cwd, filepath);
    }
    exports2.makeAbsolute = makeAbsolute;
    function escape(pattern) {
      return pattern.replace(UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
    }
    exports2.escape = escape;
    function removeLeadingDotSegment(entry) {
      if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
          return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
      }
      return entry;
    }
    exports2.removeLeadingDotSegment = removeLeadingDotSegment;
  }
});

// node_modules/is-extglob/index.js
var require_is_extglob = __commonJS({
  "node_modules/is-extglob/index.js"(exports2, module2) {
    module2.exports = function isExtglob(str) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      var match;
      while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
        if (match[2])
          return true;
        str = str.slice(match.index + match[0].length);
      }
      return false;
    };
  }
});

// node_modules/is-glob/index.js
var require_is_glob = __commonJS({
  "node_modules/is-glob/index.js"(exports2, module2) {
    var isExtglob = require_is_extglob();
    var chars = { "{": "}", "(": ")", "[": "]" };
    var strictCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      var pipeIndex = -2;
      var closeSquareIndex = -2;
      var closeCurlyIndex = -2;
      var closeParenIndex = -2;
      var backSlashIndex = -2;
      while (index < str.length) {
        if (str[index] === "*") {
          return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
          return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
          if (closeSquareIndex < index) {
            closeSquareIndex = str.indexOf("]", index);
          }
          if (closeSquareIndex > index) {
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
              return true;
            }
          }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
          closeCurlyIndex = str.indexOf("}", index);
          if (closeCurlyIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
              return true;
            }
          }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
          closeParenIndex = str.indexOf(")", index);
          if (closeParenIndex > index) {
            backSlashIndex = str.indexOf("\\", index);
            if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
              return true;
            }
          }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
          if (pipeIndex < index) {
            pipeIndex = str.indexOf("|", index);
          }
          if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
            closeParenIndex = str.indexOf(")", pipeIndex);
            if (closeParenIndex > pipeIndex) {
              backSlashIndex = str.indexOf("\\", pipeIndex);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    var relaxedCheck = function(str) {
      if (str[0] === "!") {
        return true;
      }
      var index = 0;
      while (index < str.length) {
        if (/[*?{}()[\]]/.test(str[index])) {
          return true;
        }
        if (str[index] === "\\") {
          var open = str[index + 1];
          index += 2;
          var close = chars[open];
          if (close) {
            var n = str.indexOf(close, index);
            if (n !== -1) {
              index = n + 1;
            }
          }
          if (str[index] === "!") {
            return true;
          }
        } else {
          index++;
        }
      }
      return false;
    };
    module2.exports = function isGlob(str, options) {
      if (typeof str !== "string" || str === "") {
        return false;
      }
      if (isExtglob(str)) {
        return true;
      }
      var check = strictCheck;
      if (options && options.strict === false) {
        check = relaxedCheck;
      }
      return check(str);
    };
  }
});

// node_modules/glob-parent/index.js
var require_glob_parent = __commonJS({
  "node_modules/glob-parent/index.js"(exports2, module2) {
    "use strict";
    var isGlob = require_is_glob();
    var pathPosixDirname = require("path").posix.dirname;
    var isWin32 = require("os").platform() === "win32";
    var slash = "/";
    var backslash = /\\/g;
    var enclosure = /[\{\[].*[\}\]]$/;
    var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
    var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
    module2.exports = function globParent(str, opts) {
      var options = Object.assign({ flipBackslashes: true }, opts);
      if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
      }
      if (enclosure.test(str)) {
        str += slash;
      }
      str += "a";
      do {
        str = pathPosixDirname(str);
      } while (isGlob(str) || globby.test(str));
      return str.replace(escaped, "$1");
    };
  }
});

// node_modules/braces/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/braces/lib/utils.js"(exports2) {
    "use strict";
    exports2.isInteger = (num) => {
      if (typeof num === "number") {
        return Number.isInteger(num);
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
      }
      return false;
    };
    exports2.find = (node, type) => node.nodes.find((node2) => node2.type === type);
    exports2.exceedsLimit = (min, max, step = 1, limit) => {
      if (limit === false)
        return false;
      if (!exports2.isInteger(min) || !exports2.isInteger(max))
        return false;
      return (Number(max) - Number(min)) / Number(step) >= limit;
    };
    exports2.escapeNode = (block, n = 0, type) => {
      let node = block.nodes[n];
      if (!node)
        return;
      if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
          node.value = "\\" + node.value;
          node.escaped = true;
        }
      }
    };
    exports2.encloseBrace = (node) => {
      if (node.type !== "brace")
        return false;
      if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isInvalidBrace = (block) => {
      if (block.type !== "brace")
        return false;
      if (block.invalid === true || block.dollar)
        return true;
      if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
      }
      if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
      }
      return false;
    };
    exports2.isOpenOrClose = (node) => {
      if (node.type === "open" || node.type === "close") {
        return true;
      }
      return node.open === true || node.close === true;
    };
    exports2.reduce = (nodes) => nodes.reduce((acc, node) => {
      if (node.type === "text")
        acc.push(node.value);
      if (node.type === "range")
        node.type = "text";
      return acc;
    }, []);
    exports2.flatten = (...args) => {
      const result = [];
      const flat = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          let ele = arr[i];
          Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
      };
      flat(args);
      return result;
    };
  }
});

// node_modules/braces/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/braces/lib/stringify.js"(exports2, module2) {
    "use strict";
    var utils = require_utils2();
    module2.exports = (ast, options = {}) => {
      let stringify = (node, parent = {}) => {
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
          if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
            return "\\" + node.value;
          }
          return node.value;
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += stringify(child);
          }
        }
        return output;
      };
      return stringify(ast);
    };
  }
});

// node_modules/is-number/index.js
var require_is_number = __commonJS({
  "node_modules/is-number/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(num) {
      if (typeof num === "number") {
        return num - num === 0;
      }
      if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
      }
      return false;
    };
  }
});

// node_modules/to-regex-range/index.js
var require_to_regex_range = __commonJS({
  "node_modules/to-regex-range/index.js"(exports2, module2) {
    "use strict";
    var isNumber = require_is_number();
    var toRegexRange = (min, max, options) => {
      if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
      }
      if (max === void 0 || min === max) {
        return String(min);
      }
      if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
      }
      let opts = __spreadValues({ relaxZeros: true }, options);
      if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
      }
      let relax = String(opts.relaxZeros);
      let shorthand = String(opts.shorthand);
      let capture = String(opts.capture);
      let wrap = String(opts.wrap);
      let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
      if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
      }
      let a = Math.min(min, max);
      let b = Math.max(min, max);
      if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
          return `(${result})`;
        }
        if (opts.wrap === false) {
          return result;
        }
        return `(?:${result})`;
      }
      let isPadded = hasPadding(min) || hasPadding(max);
      let state = { min, max, a, b };
      let positives = [];
      let negatives = [];
      if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
      }
      if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
      }
      if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
      }
      state.negatives = negatives;
      state.positives = positives;
      state.result = collatePatterns(negatives, positives, opts);
      if (opts.capture === true) {
        state.result = `(${state.result})`;
      } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
      }
      toRegexRange.cache[cacheKey] = state;
      return state.result;
    };
    function collatePatterns(neg, pos, options) {
      let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
      let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
      let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
      let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
      return subpatterns.join("|");
    }
    function splitToRanges(min, max) {
      let nines = 1;
      let zeros = 1;
      let stop = countNines(min, nines);
      let stops = new Set([max]);
      while (min <= stop && stop <= max) {
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
      }
      stop = countZeros(max + 1, zeros) - 1;
      while (min < stop && stop <= max) {
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
      }
      stops = [...stops];
      stops.sort(compare);
      return stops;
    }
    function rangeToPattern(start, stop, options) {
      if (start === stop) {
        return { pattern: start, count: [], digits: 0 };
      }
      let zipped = zip(start, stop);
      let digits = zipped.length;
      let pattern = "";
      let count = 0;
      for (let i = 0; i < digits; i++) {
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
          pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
          pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
          count++;
        }
      }
      if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
      }
      return { pattern, count: [count], digits };
    }
    function splitToPatterns(min, max, tok, options) {
      let ranges = splitToRanges(min, max);
      let tokens = [];
      let start = min;
      let prev;
      for (let i = 0; i < ranges.length; i++) {
        let max2 = ranges[i];
        let obj = rangeToPattern(String(start), String(max2), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
          if (prev.count.length > 1) {
            prev.count.pop();
          }
          prev.count.push(obj.count[0]);
          prev.string = prev.pattern + toQuantifier(prev.count);
          start = max2 + 1;
          continue;
        }
        if (tok.isPadded) {
          zeros = padZeros(max2, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max2 + 1;
        prev = obj;
      }
      return tokens;
    }
    function filterPatterns(arr, comparison, prefix, intersection, options) {
      let result = [];
      for (let ele of arr) {
        let { string } = ele;
        if (!intersection && !contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
        if (intersection && contains(comparison, "string", string)) {
          result.push(prefix + string);
        }
      }
      return result;
    }
    function zip(a, b) {
      let arr = [];
      for (let i = 0; i < a.length; i++)
        arr.push([a[i], b[i]]);
      return arr;
    }
    function compare(a, b) {
      return a > b ? 1 : b > a ? -1 : 0;
    }
    function contains(arr, key, val) {
      return arr.some((ele) => ele[key] === val);
    }
    function countNines(min, len) {
      return Number(String(min).slice(0, -len) + "9".repeat(len));
    }
    function countZeros(integer, zeros) {
      return integer - integer % Math.pow(10, zeros);
    }
    function toQuantifier(digits) {
      let [start = 0, stop = ""] = digits;
      if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
      }
      return "";
    }
    function toCharacterClass(a, b, options) {
      return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
    }
    function hasPadding(str) {
      return /^-?(0+)\d/.test(str);
    }
    function padZeros(value, tok, options) {
      if (!tok.isPadded) {
        return value;
      }
      let diff = Math.abs(tok.maxLen - String(value).length);
      let relax = options.relaxZeros !== false;
      switch (diff) {
        case 0:
          return "";
        case 1:
          return relax ? "0?" : "0";
        case 2:
          return relax ? "0{0,2}" : "00";
        default: {
          return relax ? `0{0,${diff}}` : `0{${diff}}`;
        }
      }
    }
    toRegexRange.cache = {};
    toRegexRange.clearCache = () => toRegexRange.cache = {};
    module2.exports = toRegexRange;
  }
});

// node_modules/fill-range/index.js
var require_fill_range = __commonJS({
  "node_modules/fill-range/index.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var toRegexRange = require_to_regex_range();
    var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    var transform = (toNumber) => {
      return (value) => toNumber === true ? Number(value) : String(value);
    };
    var isValidValue = (value) => {
      return typeof value === "number" || typeof value === "string" && value !== "";
    };
    var isNumber = (num) => Number.isInteger(+num);
    var zeros = (input) => {
      let value = `${input}`;
      let index = -1;
      if (value[0] === "-")
        value = value.slice(1);
      if (value === "0")
        return false;
      while (value[++index] === "0")
        ;
      return index > 0;
    };
    var stringify = (start, end, options) => {
      if (typeof start === "string" || typeof end === "string") {
        return true;
      }
      return options.stringify === true;
    };
    var pad = (input, maxLength, toNumber) => {
      if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash)
          input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
      }
      if (toNumber === false) {
        return String(input);
      }
      return input;
    };
    var toMaxLen = (input, maxLength) => {
      let negative = input[0] === "-" ? "-" : "";
      if (negative) {
        input = input.slice(1);
        maxLength--;
      }
      while (input.length < maxLength)
        input = "0" + input;
      return negative ? "-" + input : input;
    };
    var toSequence = (parts, options) => {
      parts.negatives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      parts.positives.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
      let prefix = options.capture ? "" : "?:";
      let positives = "";
      let negatives = "";
      let result;
      if (parts.positives.length) {
        positives = parts.positives.join("|");
      }
      if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
      }
      if (positives && negatives) {
        result = `${positives}|${negatives}`;
      } else {
        result = positives || negatives;
      }
      if (options.wrap) {
        return `(${prefix}${result})`;
      }
      return result;
    };
    var toRange = (a, b, isNumbers, options) => {
      if (isNumbers) {
        return toRegexRange(a, b, __spreadValues({ wrap: false }, options));
      }
      let start = String.fromCharCode(a);
      if (a === b)
        return start;
      let stop = String.fromCharCode(b);
      return `[${start}-${stop}]`;
    };
    var toRegex = (start, end, options) => {
      if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
      }
      return toRegexRange(start, end, options);
    };
    var rangeError = (...args) => {
      return new RangeError("Invalid range arguments: " + util.inspect(...args));
    };
    var invalidRange = (start, end, options) => {
      if (options.strictRanges === true)
        throw rangeError([start, end]);
      return [];
    };
    var invalidStep = (step, options) => {
      if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
      }
      return [];
    };
    var fillNumbers = (start, end, step = 1, options = {}) => {
      let a = Number(start);
      let b = Number(end);
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      }
      if (a === 0)
        a = 0;
      if (b === 0)
        b = 0;
      let descending = a > b;
      let startString = String(start);
      let endString = String(end);
      let stepString = String(step);
      step = Math.max(Math.abs(step), 1);
      let padded = zeros(startString) || zeros(endString) || zeros(stepString);
      let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
      let toNumber = padded === false && stringify(start, end, options) === false;
      let format = options.transform || transform(toNumber);
      if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
      }
      let parts = { negatives: [], positives: [] };
      let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        if (options.toRegex === true && step > 1) {
          push(a);
        } else {
          range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, __spreadValues({ wrap: false }, options));
      }
      return range;
    };
    var fillLetters = (start, end, step = 1, options = {}) => {
      if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
      }
      let format = options.transform || ((val) => String.fromCharCode(val));
      let a = `${start}`.charCodeAt(0);
      let b = `${end}`.charCodeAt(0);
      let descending = a > b;
      let min = Math.min(a, b);
      let max = Math.max(a, b);
      if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
      }
      let range = [];
      let index = 0;
      while (descending ? a >= b : a <= b) {
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
      }
      if (options.toRegex === true) {
        return toRegex(range, null, { wrap: false, options });
      }
      return range;
    };
    var fill = (start, end, step, options = {}) => {
      if (end == null && isValidValue(start)) {
        return [start];
      }
      if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
      }
      if (typeof step === "function") {
        return fill(start, end, 1, { transform: step });
      }
      if (isObject(step)) {
        return fill(start, end, 0, step);
      }
      let opts = __spreadValues({}, options);
      if (opts.capture === true)
        opts.wrap = true;
      step = step || opts.step || 1;
      if (!isNumber(step)) {
        if (step != null && !isObject(step))
          return invalidStep(step, opts);
        return fill(start, end, 1, step);
      }
      if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
      }
      return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
    };
    module2.exports = fill;
  }
});

// node_modules/braces/lib/compile.js
var require_compile = __commonJS({
  "node_modules/braces/lib/compile.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var utils = require_utils2();
    var compile = (ast, options = {}) => {
      let walk = (node, parent = {}) => {
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
          return prefix + node.value;
        }
        if (node.isClose === true) {
          return prefix + node.value;
        }
        if (node.type === "open") {
          return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
          return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
          return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
          return node.value;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          let range = fill(...args, __spreadProps(__spreadValues({}, options), { wrap: false, toRegex: true }));
          if (range.length !== 0) {
            return args.length > 1 && range.length > 1 ? `(${range})` : range;
          }
        }
        if (node.nodes) {
          for (let child of node.nodes) {
            output += walk(child, node);
          }
        }
        return output;
      };
      return walk(ast);
    };
    module2.exports = compile;
  }
});

// node_modules/braces/lib/expand.js
var require_expand = __commonJS({
  "node_modules/braces/lib/expand.js"(exports2, module2) {
    "use strict";
    var fill = require_fill_range();
    var stringify = require_stringify();
    var utils = require_utils2();
    var append = (queue = "", stash = "", enclose = false) => {
      let result = [];
      queue = [].concat(queue);
      stash = [].concat(stash);
      if (!stash.length)
        return queue;
      if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
      }
      for (let item of queue) {
        if (Array.isArray(item)) {
          for (let value of item) {
            result.push(append(value, stash, enclose));
          }
        } else {
          for (let ele of stash) {
            if (enclose === true && typeof ele === "string")
              ele = `{${ele}}`;
            result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
          }
        }
      }
      return utils.flatten(result);
    };
    var expand = (ast, options = {}) => {
      let rangeLimit = options.rangeLimit === void 0 ? 1e3 : options.rangeLimit;
      let walk = (node, parent = {}) => {
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while (p.type !== "brace" && p.type !== "root" && p.parent) {
          p = p.parent;
          q = p.queue;
        }
        if (node.invalid || node.dollar) {
          q.push(append(q.pop(), stringify(node, options)));
          return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
          q.push(append(q.pop(), ["{}"]));
          return;
        }
        if (node.nodes && node.ranges > 0) {
          let args = utils.reduce(node.nodes);
          if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
            throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
          }
          let range = fill(...args, options);
          if (range.length === 0) {
            range = stringify(node, options);
          }
          q.push(append(q.pop(), range));
          node.nodes = [];
          return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while (block.type !== "brace" && block.type !== "root" && block.parent) {
          block = block.parent;
          queue = block.queue;
        }
        for (let i = 0; i < node.nodes.length; i++) {
          let child = node.nodes[i];
          if (child.type === "comma" && node.type === "brace") {
            if (i === 1)
              queue.push("");
            queue.push("");
            continue;
          }
          if (child.type === "close") {
            q.push(append(q.pop(), queue, enclose));
            continue;
          }
          if (child.value && child.type !== "open") {
            queue.push(append(queue.pop(), child.value));
            continue;
          }
          if (child.nodes) {
            walk(child, node);
          }
        }
        return queue;
      };
      return utils.flatten(walk(ast));
    };
    module2.exports = expand;
  }
});

// node_modules/braces/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/braces/lib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      MAX_LENGTH: 1024 * 64,
      CHAR_0: "0",
      CHAR_9: "9",
      CHAR_UPPERCASE_A: "A",
      CHAR_LOWERCASE_A: "a",
      CHAR_UPPERCASE_Z: "Z",
      CHAR_LOWERCASE_Z: "z",
      CHAR_LEFT_PARENTHESES: "(",
      CHAR_RIGHT_PARENTHESES: ")",
      CHAR_ASTERISK: "*",
      CHAR_AMPERSAND: "&",
      CHAR_AT: "@",
      CHAR_BACKSLASH: "\\",
      CHAR_BACKTICK: "`",
      CHAR_CARRIAGE_RETURN: "\r",
      CHAR_CIRCUMFLEX_ACCENT: "^",
      CHAR_COLON: ":",
      CHAR_COMMA: ",",
      CHAR_DOLLAR: "$",
      CHAR_DOT: ".",
      CHAR_DOUBLE_QUOTE: '"',
      CHAR_EQUAL: "=",
      CHAR_EXCLAMATION_MARK: "!",
      CHAR_FORM_FEED: "\f",
      CHAR_FORWARD_SLASH: "/",
      CHAR_HASH: "#",
      CHAR_HYPHEN_MINUS: "-",
      CHAR_LEFT_ANGLE_BRACKET: "<",
      CHAR_LEFT_CURLY_BRACE: "{",
      CHAR_LEFT_SQUARE_BRACKET: "[",
      CHAR_LINE_FEED: "\n",
      CHAR_NO_BREAK_SPACE: "\xA0",
      CHAR_PERCENT: "%",
      CHAR_PLUS: "+",
      CHAR_QUESTION_MARK: "?",
      CHAR_RIGHT_ANGLE_BRACKET: ">",
      CHAR_RIGHT_CURLY_BRACE: "}",
      CHAR_RIGHT_SQUARE_BRACKET: "]",
      CHAR_SEMICOLON: ";",
      CHAR_SINGLE_QUOTE: "'",
      CHAR_SPACE: " ",
      CHAR_TAB: "	",
      CHAR_UNDERSCORE: "_",
      CHAR_VERTICAL_LINE: "|",
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
    };
  }
});

// node_modules/braces/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/braces/lib/parse.js"(exports2, module2) {
    "use strict";
    var stringify = require_stringify();
    var {
      MAX_LENGTH,
      CHAR_BACKSLASH,
      CHAR_BACKTICK,
      CHAR_COMMA,
      CHAR_DOT,
      CHAR_LEFT_PARENTHESES,
      CHAR_RIGHT_PARENTHESES,
      CHAR_LEFT_CURLY_BRACE,
      CHAR_RIGHT_CURLY_BRACE,
      CHAR_LEFT_SQUARE_BRACKET,
      CHAR_RIGHT_SQUARE_BRACKET,
      CHAR_DOUBLE_QUOTE,
      CHAR_SINGLE_QUOTE,
      CHAR_NO_BREAK_SPACE,
      CHAR_ZERO_WIDTH_NOBREAK_SPACE
    } = require_constants2();
    var parse = (input, options = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      let opts = options || {};
      let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
      }
      let ast = { type: "root", input, nodes: [] };
      let stack = [ast];
      let block = ast;
      let prev = ast;
      let brackets = 0;
      let length = input.length;
      let index = 0;
      let depth = 0;
      let value;
      let memo = {};
      const advance = () => input[index++];
      const push = (node) => {
        if (node.type === "text" && prev.type === "dot") {
          prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
          prev.value += node.value;
          return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
      };
      push({ type: "bos" });
      while (index < length) {
        block = stack[stack.length - 1];
        value = advance();
        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
          continue;
        }
        if (value === CHAR_BACKSLASH) {
          push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
          continue;
        }
        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
          push({ type: "text", value: "\\" + value });
          continue;
        }
        if (value === CHAR_LEFT_SQUARE_BRACKET) {
          brackets++;
          let closed = true;
          let next;
          while (index < length && (next = advance())) {
            value += next;
            if (next === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              continue;
            }
            if (next === CHAR_BACKSLASH) {
              value += advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              brackets--;
              if (brackets === 0) {
                break;
              }
            }
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_PARENTHESES) {
          block = push({ type: "paren", nodes: [] });
          stack.push(block);
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
          if (block.type !== "paren") {
            push({ type: "text", value });
            continue;
          }
          block = stack.pop();
          push({ type: "text", value });
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
          let open = value;
          let next;
          if (options.keepQuotes !== true) {
            value = "";
          }
          while (index < length && (next = advance())) {
            if (next === CHAR_BACKSLASH) {
              value += next + advance();
              continue;
            }
            if (next === open) {
              if (options.keepQuotes === true)
                value += next;
              break;
            }
            value += next;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === CHAR_LEFT_CURLY_BRACE) {
          depth++;
          let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
          let brace = {
            type: "brace",
            open: true,
            close: false,
            dollar,
            depth,
            commas: 0,
            ranges: 0,
            nodes: []
          };
          block = push(brace);
          stack.push(block);
          push({ type: "open", value });
          continue;
        }
        if (value === CHAR_RIGHT_CURLY_BRACE) {
          if (block.type !== "brace") {
            push({ type: "text", value });
            continue;
          }
          let type = "close";
          block = stack.pop();
          block.close = true;
          push({ type, value });
          depth--;
          block = stack[stack.length - 1];
          continue;
        }
        if (value === CHAR_COMMA && depth > 0) {
          if (block.ranges > 0) {
            block.ranges = 0;
            let open = block.nodes.shift();
            block.nodes = [open, { type: "text", value: stringify(block) }];
          }
          push({ type: "comma", value });
          block.commas++;
          continue;
        }
        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
          let siblings = block.nodes;
          if (depth === 0 || siblings.length === 0) {
            push({ type: "text", value });
            continue;
          }
          if (prev.type === "dot") {
            block.range = [];
            prev.value += value;
            prev.type = "range";
            if (block.nodes.length !== 3 && block.nodes.length !== 5) {
              block.invalid = true;
              block.ranges = 0;
              prev.type = "text";
              continue;
            }
            block.ranges++;
            block.args = [];
            continue;
          }
          if (prev.type === "range") {
            siblings.pop();
            let before = siblings[siblings.length - 1];
            before.value += prev.value + value;
            prev = before;
            block.ranges--;
            continue;
          }
          push({ type: "dot", value });
          continue;
        }
        push({ type: "text", value });
      }
      do {
        block = stack.pop();
        if (block.type !== "root") {
          block.nodes.forEach((node) => {
            if (!node.nodes) {
              if (node.type === "open")
                node.isOpen = true;
              if (node.type === "close")
                node.isClose = true;
              if (!node.nodes)
                node.type = "text";
              node.invalid = true;
            }
          });
          let parent = stack[stack.length - 1];
          let index2 = parent.nodes.indexOf(block);
          parent.nodes.splice(index2, 1, ...block.nodes);
        }
      } while (stack.length > 0);
      push({ type: "eos" });
      return ast;
    };
    module2.exports = parse;
  }
});

// node_modules/braces/index.js
var require_braces = __commonJS({
  "node_modules/braces/index.js"(exports2, module2) {
    "use strict";
    var stringify = require_stringify();
    var compile = require_compile();
    var expand = require_expand();
    var parse = require_parse2();
    var braces = (input, options = {}) => {
      let output = [];
      if (Array.isArray(input)) {
        for (let pattern of input) {
          let result = braces.create(pattern, options);
          if (Array.isArray(result)) {
            output.push(...result);
          } else {
            output.push(result);
          }
        }
      } else {
        output = [].concat(braces.create(input, options));
      }
      if (options && options.expand === true && options.nodupes === true) {
        output = [...new Set(output)];
      }
      return output;
    };
    braces.parse = (input, options = {}) => parse(input, options);
    braces.stringify = (input, options = {}) => {
      if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
      }
      return stringify(input, options);
    };
    braces.compile = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      return compile(input, options);
    };
    braces.expand = (input, options = {}) => {
      if (typeof input === "string") {
        input = braces.parse(input, options);
      }
      let result = expand(input, options);
      if (options.noempty === true) {
        result = result.filter(Boolean);
      }
      if (options.nodupes === true) {
        result = [...new Set(result)];
      }
      return result;
    };
    braces.create = (input, options = {}) => {
      if (input === "" || input.length < 3) {
        return [input];
      }
      return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
    };
    module2.exports = braces;
  }
});

// node_modules/micromatch/index.js
var require_micromatch = __commonJS({
  "node_modules/micromatch/index.js"(exports2, module2) {
    "use strict";
    var util = require("util");
    var braces = require_braces();
    var picomatch2 = require_picomatch2();
    var utils = require_utils();
    var isEmptyString = (val) => val === "" || val === "./";
    var micromatch = (list, patterns, options) => {
      patterns = [].concat(patterns);
      list = [].concat(list);
      let omit = new Set();
      let keep = new Set();
      let items = new Set();
      let negatives = 0;
      let onResult = (state) => {
        items.add(state.output);
        if (options && options.onResult) {
          options.onResult(state);
        }
      };
      for (let i = 0; i < patterns.length; i++) {
        let isMatch = picomatch2(String(patterns[i]), __spreadProps(__spreadValues({}, options), { onResult }), true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated)
          negatives++;
        for (let item of list) {
          let matched = isMatch(item, true);
          let match = negated ? !matched.isMatch : matched.isMatch;
          if (!match)
            continue;
          if (negated) {
            omit.add(matched.output);
          } else {
            omit.delete(matched.output);
            keep.add(matched.output);
          }
        }
      }
      let result = negatives === patterns.length ? [...items] : [...keep];
      let matches = result.filter((item) => !omit.has(item));
      if (options && matches.length === 0) {
        if (options.failglob === true) {
          throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
          return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
        }
      }
      return matches;
    };
    micromatch.match = micromatch;
    micromatch.matcher = (pattern, options) => picomatch2(pattern, options);
    micromatch.isMatch = (str, patterns, options) => picomatch2(patterns, options)(str);
    micromatch.any = micromatch.isMatch;
    micromatch.not = (list, patterns, options = {}) => {
      patterns = [].concat(patterns).map(String);
      let result = new Set();
      let items = [];
      let onResult = (state) => {
        if (options.onResult)
          options.onResult(state);
        items.push(state.output);
      };
      let matches = micromatch(list, patterns, __spreadProps(__spreadValues({}, options), { onResult }));
      for (let item of items) {
        if (!matches.includes(item)) {
          result.add(item);
        }
      }
      return [...result];
    };
    micromatch.contains = (str, pattern, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      if (Array.isArray(pattern)) {
        return pattern.some((p) => micromatch.contains(str, p, options));
      }
      if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
          return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
          return true;
        }
      }
      return micromatch.isMatch(str, pattern, __spreadProps(__spreadValues({}, options), { contains: true }));
    };
    micromatch.matchKeys = (obj, patterns, options) => {
      if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
      }
      let keys = micromatch(Object.keys(obj), patterns, options);
      let res = {};
      for (let key of keys)
        res[key] = obj[key];
      return res;
    };
    micromatch.some = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch2(String(pattern), options);
        if (items.some((item) => isMatch(item))) {
          return true;
        }
      }
      return false;
    };
    micromatch.every = (list, patterns, options) => {
      let items = [].concat(list);
      for (let pattern of [].concat(patterns)) {
        let isMatch = picomatch2(String(pattern), options);
        if (!items.every((item) => isMatch(item))) {
          return false;
        }
      }
      return true;
    };
    micromatch.all = (str, patterns, options) => {
      if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
      }
      return [].concat(patterns).every((p) => picomatch2(p, options)(str));
    };
    micromatch.capture = (glob, input, options) => {
      let posix = utils.isWindows(options);
      let regex = picomatch2.makeRe(String(glob), __spreadProps(__spreadValues({}, options), { capture: true }));
      let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
      if (match) {
        return match.slice(1).map((v) => v === void 0 ? "" : v);
      }
    };
    micromatch.makeRe = (...args) => picomatch2.makeRe(...args);
    micromatch.scan = (...args) => picomatch2.scan(...args);
    micromatch.parse = (patterns, options) => {
      let res = [];
      for (let pattern of [].concat(patterns || [])) {
        for (let str of braces(String(pattern), options)) {
          res.push(picomatch2.parse(str, options));
        }
      }
      return res;
    };
    micromatch.braces = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [pattern];
      }
      return braces(pattern, options);
    };
    micromatch.braceExpand = (pattern, options) => {
      if (typeof pattern !== "string")
        throw new TypeError("Expected a string");
      return micromatch.braces(pattern, __spreadProps(__spreadValues({}, options), { expand: true }));
    };
    module2.exports = micromatch;
  }
});

// node_modules/fast-glob/out/utils/pattern.js
var require_pattern = __commonJS({
  "node_modules/fast-glob/out/utils/pattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.matchAny = exports2.convertPatternsToRe = exports2.makeRe = exports2.getPatternParts = exports2.expandBraceExpansion = exports2.expandPatternsWithBraceExpansion = exports2.isAffectDepthOfReadingPattern = exports2.endsWithSlashGlobStar = exports2.hasGlobStar = exports2.getBaseDirectory = exports2.isPatternRelatedToParentDirectory = exports2.getPatternsOutsideCurrentDirectory = exports2.getPatternsInsideCurrentDirectory = exports2.getPositivePatterns = exports2.getNegativePatterns = exports2.isPositivePattern = exports2.isNegativePattern = exports2.convertToNegativePattern = exports2.convertToPositivePattern = exports2.isDynamicPattern = exports2.isStaticPattern = void 0;
    var path2 = require("path");
    var globParent = require_glob_parent();
    var micromatch = require_micromatch();
    var GLOBSTAR = "**";
    var ESCAPE_SYMBOL = "\\";
    var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
    var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[.*]/;
    var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\(.*\|.*\)/;
    var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\(.*\)/;
    var BRACE_EXPANSIONS_SYMBOLS_RE = /{.*(?:,|\.\.).*}/;
    function isStaticPattern(pattern, options = {}) {
      return !isDynamicPattern(pattern, options);
    }
    exports2.isStaticPattern = isStaticPattern;
    function isDynamicPattern(pattern, options = {}) {
      if (pattern === "") {
        return false;
      }
      if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
      }
      if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      if (options.braceExpansion !== false && BRACE_EXPANSIONS_SYMBOLS_RE.test(pattern)) {
        return true;
      }
      return false;
    }
    exports2.isDynamicPattern = isDynamicPattern;
    function convertToPositivePattern(pattern) {
      return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
    }
    exports2.convertToPositivePattern = convertToPositivePattern;
    function convertToNegativePattern(pattern) {
      return "!" + pattern;
    }
    exports2.convertToNegativePattern = convertToNegativePattern;
    function isNegativePattern(pattern) {
      return pattern.startsWith("!") && pattern[1] !== "(";
    }
    exports2.isNegativePattern = isNegativePattern;
    function isPositivePattern(pattern) {
      return !isNegativePattern(pattern);
    }
    exports2.isPositivePattern = isPositivePattern;
    function getNegativePatterns(patterns) {
      return patterns.filter(isNegativePattern);
    }
    exports2.getNegativePatterns = getNegativePatterns;
    function getPositivePatterns(patterns) {
      return patterns.filter(isPositivePattern);
    }
    exports2.getPositivePatterns = getPositivePatterns;
    function getPatternsInsideCurrentDirectory(patterns) {
      return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
    }
    exports2.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
    function getPatternsOutsideCurrentDirectory(patterns) {
      return patterns.filter(isPatternRelatedToParentDirectory);
    }
    exports2.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
    function isPatternRelatedToParentDirectory(pattern) {
      return pattern.startsWith("..") || pattern.startsWith("./..");
    }
    exports2.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
    function getBaseDirectory(pattern) {
      return globParent(pattern, { flipBackslashes: false });
    }
    exports2.getBaseDirectory = getBaseDirectory;
    function hasGlobStar(pattern) {
      return pattern.includes(GLOBSTAR);
    }
    exports2.hasGlobStar = hasGlobStar;
    function endsWithSlashGlobStar(pattern) {
      return pattern.endsWith("/" + GLOBSTAR);
    }
    exports2.endsWithSlashGlobStar = endsWithSlashGlobStar;
    function isAffectDepthOfReadingPattern(pattern) {
      const basename = path2.basename(pattern);
      return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
    }
    exports2.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
    function expandPatternsWithBraceExpansion(patterns) {
      return patterns.reduce((collection, pattern) => {
        return collection.concat(expandBraceExpansion(pattern));
      }, []);
    }
    exports2.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
    function expandBraceExpansion(pattern) {
      return micromatch.braces(pattern, {
        expand: true,
        nodupes: true
      });
    }
    exports2.expandBraceExpansion = expandBraceExpansion;
    function getPatternParts(pattern, options) {
      let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
      if (parts.length === 0) {
        parts = [pattern];
      }
      if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
      }
      return parts;
    }
    exports2.getPatternParts = getPatternParts;
    function makeRe(pattern, options) {
      return micromatch.makeRe(pattern, options);
    }
    exports2.makeRe = makeRe;
    function convertPatternsToRe(patterns, options) {
      return patterns.map((pattern) => makeRe(pattern, options));
    }
    exports2.convertPatternsToRe = convertPatternsToRe;
    function matchAny(entry, patternsRe) {
      return patternsRe.some((patternRe) => patternRe.test(entry));
    }
    exports2.matchAny = matchAny;
  }
});

// node_modules/merge2/index.js
var require_merge2 = __commonJS({
  "node_modules/merge2/index.js"(exports2, module2) {
    "use strict";
    var Stream = require("stream");
    var PassThrough = Stream.PassThrough;
    var slice = Array.prototype.slice;
    module2.exports = merge2;
    function merge2() {
      const streamsQueue = [];
      const args = slice.call(arguments);
      let merging = false;
      let options = args[args.length - 1];
      if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
      } else {
        options = {};
      }
      const doEnd = options.end !== false;
      const doPipeError = options.pipeError === true;
      if (options.objectMode == null) {
        options.objectMode = true;
      }
      if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
      }
      const mergedStream = PassThrough(options);
      function addStream() {
        for (let i = 0, len = arguments.length; i < len; i++) {
          streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
      }
      function mergeStream() {
        if (merging) {
          return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
          process.nextTick(endStream);
          return;
        }
        if (!Array.isArray(streams)) {
          streams = [streams];
        }
        let pipesCount = streams.length + 1;
        function next() {
          if (--pipesCount > 0) {
            return;
          }
          merging = false;
          mergeStream();
        }
        function pipe(stream) {
          function onend() {
            stream.removeListener("merge2UnpipeEnd", onend);
            stream.removeListener("end", onend);
            if (doPipeError) {
              stream.removeListener("error", onerror);
            }
            next();
          }
          function onerror(err) {
            mergedStream.emit("error", err);
          }
          if (stream._readableState.endEmitted) {
            return next();
          }
          stream.on("merge2UnpipeEnd", onend);
          stream.on("end", onend);
          if (doPipeError) {
            stream.on("error", onerror);
          }
          stream.pipe(mergedStream, { end: false });
          stream.resume();
        }
        for (let i = 0; i < streams.length; i++) {
          pipe(streams[i]);
        }
        next();
      }
      function endStream() {
        merging = false;
        mergedStream.emit("queueDrain");
        if (doEnd) {
          mergedStream.end();
        }
      }
      mergedStream.setMaxListeners(0);
      mergedStream.add = addStream;
      mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
      });
      if (args.length) {
        addStream.apply(null, args);
      }
      return mergedStream;
    }
    function pauseStreams(streams, options) {
      if (!Array.isArray(streams)) {
        if (!streams._readableState && streams.pipe) {
          streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
          throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
      } else {
        for (let i = 0, len = streams.length; i < len; i++) {
          streams[i] = pauseStreams(streams[i], options);
        }
      }
      return streams;
    }
  }
});

// node_modules/fast-glob/out/utils/stream.js
var require_stream = __commonJS({
  "node_modules/fast-glob/out/utils/stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.merge = void 0;
    var merge2 = require_merge2();
    function merge(streams) {
      const mergedStream = merge2(streams);
      streams.forEach((stream) => {
        stream.once("error", (error) => mergedStream.emit("error", error));
      });
      mergedStream.once("close", () => propagateCloseEventToSources(streams));
      mergedStream.once("end", () => propagateCloseEventToSources(streams));
      return mergedStream;
    }
    exports2.merge = merge;
    function propagateCloseEventToSources(streams) {
      streams.forEach((stream) => stream.emit("close"));
    }
  }
});

// node_modules/fast-glob/out/utils/string.js
var require_string = __commonJS({
  "node_modules/fast-glob/out/utils/string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isEmpty = exports2.isString = void 0;
    function isString(input) {
      return typeof input === "string";
    }
    exports2.isString = isString;
    function isEmpty(input) {
      return input === "";
    }
    exports2.isEmpty = isEmpty;
  }
});

// node_modules/fast-glob/out/utils/index.js
var require_utils3 = __commonJS({
  "node_modules/fast-glob/out/utils/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.string = exports2.stream = exports2.pattern = exports2.path = exports2.fs = exports2.errno = exports2.array = void 0;
    var array = require_array();
    exports2.array = array;
    var errno = require_errno();
    exports2.errno = errno;
    var fs2 = require_fs();
    exports2.fs = fs2;
    var path2 = require_path();
    exports2.path = path2;
    var pattern = require_pattern();
    exports2.pattern = pattern;
    var stream = require_stream();
    exports2.stream = stream;
    var string = require_string();
    exports2.string = string;
  }
});

// node_modules/fast-glob/out/managers/tasks.js
var require_tasks = __commonJS({
  "node_modules/fast-glob/out/managers/tasks.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.convertPatternGroupToTask = exports2.convertPatternGroupsToTasks = exports2.groupPatternsByBaseDirectory = exports2.getNegativePatternsAsPositive = exports2.getPositivePatterns = exports2.convertPatternsToTasks = exports2.generate = void 0;
    var utils = require_utils3();
    function generate(patterns, settings) {
      const positivePatterns = getPositivePatterns(patterns);
      const negativePatterns = getNegativePatternsAsPositive(patterns, settings.ignore);
      const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
      const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
      const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, false);
      const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, true);
      return staticTasks.concat(dynamicTasks);
    }
    exports2.generate = generate;
    function convertPatternsToTasks(positive, negative, dynamic) {
      const tasks = [];
      const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
      const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
      const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
      const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
      tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
      if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
      } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
      }
      return tasks;
    }
    exports2.convertPatternsToTasks = convertPatternsToTasks;
    function getPositivePatterns(patterns) {
      return utils.pattern.getPositivePatterns(patterns);
    }
    exports2.getPositivePatterns = getPositivePatterns;
    function getNegativePatternsAsPositive(patterns, ignore) {
      const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
      const positive = negative.map(utils.pattern.convertToPositivePattern);
      return positive;
    }
    exports2.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
    function groupPatternsByBaseDirectory(patterns) {
      const group = {};
      return patterns.reduce((collection, pattern) => {
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
          collection[base].push(pattern);
        } else {
          collection[base] = [pattern];
        }
        return collection;
      }, group);
    }
    exports2.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
    function convertPatternGroupsToTasks(positive, negative, dynamic) {
      return Object.keys(positive).map((base) => {
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
      });
    }
    exports2.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
    function convertPatternGroupToTask(base, positive, negative, dynamic) {
      return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
      };
    }
    exports2.convertPatternGroupToTask = convertPatternGroupToTask;
  }
});

// node_modules/@nodelib/fs.stat/out/providers/async.js
var require_async = __commonJS({
  "node_modules/@nodelib/fs.stat/out/providers/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.read = void 0;
    function read(path2, settings, callback) {
      settings.fs.lstat(path2, (lstatError, lstat) => {
        if (lstatError !== null) {
          callFailureCallback(callback, lstatError);
          return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          callSuccessCallback(callback, lstat);
          return;
        }
        settings.fs.stat(path2, (statError, stat) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              callFailureCallback(callback, statError);
              return;
            }
            callSuccessCallback(callback, lstat);
            return;
          }
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          callSuccessCallback(callback, stat);
        });
      });
    }
    exports2.read = read;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/@nodelib/fs.stat/out/providers/sync.js
var require_sync = __commonJS({
  "node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.read = void 0;
    function read(path2, settings) {
      const lstat = settings.fs.lstatSync(path2);
      if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
      }
      try {
        const stat = settings.fs.statSync(path2);
        if (settings.markSymbolicLink) {
          stat.isSymbolicLink = () => true;
        }
        return stat;
      } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
          return lstat;
        }
        throw error;
      }
    }
    exports2.read = read;
  }
});

// node_modules/@nodelib/fs.stat/out/adapters/fs.js
var require_fs2 = __commonJS({
  "node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createFileSystemAdapter = exports2.FILE_SYSTEM_ADAPTER = void 0;
    var fs2 = require("fs");
    exports2.FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      stat: fs2.stat,
      lstatSync: fs2.lstatSync,
      statSync: fs2.statSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports2.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports2.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports2.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/@nodelib/fs.stat/out/settings.js
var require_settings = __commonJS({
  "node_modules/@nodelib/fs.stat/out/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fs2 = require_fs2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs2.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports2.default = Settings;
  }
});

// node_modules/@nodelib/fs.stat/out/index.js
var require_out = __commonJS({
  "node_modules/@nodelib/fs.stat/out/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.statSync = exports2.stat = exports2.Settings = void 0;
    var async = require_async();
    var sync = require_sync();
    var settings_1 = require_settings();
    exports2.Settings = settings_1.default;
    function stat(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports2.stat = stat;
    function statSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path2, settings);
    }
    exports2.statSync = statSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/queue-microtask/index.js
var require_queue_microtask = __commonJS({
  "node_modules/queue-microtask/index.js"(exports2, module2) {
    var promise;
    module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
      throw err;
    }, 0));
  }
});

// node_modules/run-parallel/index.js
var require_run_parallel = __commonJS({
  "node_modules/run-parallel/index.js"(exports2, module2) {
    module2.exports = runParallel;
    var queueMicrotask2 = require_queue_microtask();
    function runParallel(tasks, cb) {
      let results, pending, keys;
      let isSync = true;
      if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
      } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
      }
      function done(err) {
        function end() {
          if (cb)
            cb(err, results);
          cb = null;
        }
        if (isSync)
          queueMicrotask2(end);
        else
          end();
      }
      function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
          done(err);
        }
      }
      if (!pending) {
        done(null);
      } else if (keys) {
        keys.forEach(function(key) {
          tasks[key](function(err, result) {
            each(key, err, result);
          });
        });
      } else {
        tasks.forEach(function(task, i) {
          task(function(err, result) {
            each(i, err, result);
          });
        });
      }
      isSync = false;
    }
  }
});

// node_modules/@nodelib/fs.scandir/out/constants.js
var require_constants3 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
    var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
    if (NODE_PROCESS_VERSION_PARTS[0] === void 0 || NODE_PROCESS_VERSION_PARTS[1] === void 0) {
      throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
    }
    var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
    var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
    var SUPPORTED_MAJOR_VERSION = 10;
    var SUPPORTED_MINOR_VERSION = 10;
    var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
    var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
    exports2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
  }
});

// node_modules/@nodelib/fs.scandir/out/utils/fs.js
var require_fs3 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDirentFromStats = void 0;
    var DirentFromStats = class {
      constructor(name, stats) {
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
      }
    };
    function createDirentFromStats(name, stats) {
      return new DirentFromStats(name, stats);
    }
    exports2.createDirentFromStats = createDirentFromStats;
  }
});

// node_modules/@nodelib/fs.scandir/out/utils/index.js
var require_utils4 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.fs = void 0;
    var fs2 = require_fs3();
    exports2.fs = fs2;
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/common.js
var require_common = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.joinPathSegments = void 0;
    function joinPathSegments(a, b, separator) {
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports2.joinPathSegments = joinPathSegments;
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/async.js
var require_async2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readdir = exports2.readdirWithFileTypes = exports2.read = void 0;
    var fsStat = require_out();
    var rpl = require_run_parallel();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings, callback) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
      }
      readdir(directory, settings, callback);
    }
    exports2.read = read;
    function readdirWithFileTypes(directory, settings, callback) {
      settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const entries = dirents.map((dirent) => ({
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        }));
        if (!settings.followSymbolicLinks) {
          callSuccessCallback(callback, entries);
          return;
        }
        const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, rplEntries);
        });
      });
    }
    exports2.readdirWithFileTypes = readdirWithFileTypes;
    function makeRplTaskEntry(entry, settings) {
      return (done) => {
        if (!entry.dirent.isSymbolicLink()) {
          done(null, entry);
          return;
        }
        settings.fs.stat(entry.path, (statError, stats) => {
          if (statError !== null) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              done(statError);
              return;
            }
            done(null, entry);
            return;
          }
          entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          done(null, entry);
        });
      };
    }
    function readdir(directory, settings, callback) {
      settings.fs.readdir(directory, (readdirError, names) => {
        if (readdirError !== null) {
          callFailureCallback(callback, readdirError);
          return;
        }
        const tasks = names.map((name) => {
          const path2 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          return (done) => {
            fsStat.stat(path2, settings.fsStatSettings, (error, stats) => {
              if (error !== null) {
                done(error);
                return;
              }
              const entry = {
                name,
                path: path2,
                dirent: utils.fs.createDirentFromStats(name, stats)
              };
              if (settings.stats) {
                entry.stats = stats;
              }
              done(null, entry);
            });
          };
        });
        rpl(tasks, (rplError, entries) => {
          if (rplError !== null) {
            callFailureCallback(callback, rplError);
            return;
          }
          callSuccessCallback(callback, entries);
        });
      });
    }
    exports2.readdir = readdir;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, result) {
      callback(null, result);
    }
  }
});

// node_modules/@nodelib/fs.scandir/out/providers/sync.js
var require_sync2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.readdir = exports2.readdirWithFileTypes = exports2.read = void 0;
    var fsStat = require_out();
    var constants_1 = require_constants3();
    var utils = require_utils4();
    var common = require_common();
    function read(directory, settings) {
      if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
      }
      return readdir(directory, settings);
    }
    exports2.read = read;
    function readdirWithFileTypes(directory, settings) {
      const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
      return dirents.map((dirent) => {
        const entry = {
          dirent,
          name: dirent.name,
          path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
          try {
            const stats = settings.fs.statSync(entry.path);
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
          } catch (error) {
            if (settings.throwErrorOnBrokenSymbolicLink) {
              throw error;
            }
          }
        }
        return entry;
      });
    }
    exports2.readdirWithFileTypes = readdirWithFileTypes;
    function readdir(directory, settings) {
      const names = settings.fs.readdirSync(directory);
      return names.map((name) => {
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
          name,
          path: entryPath,
          dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
          entry.stats = stats;
        }
        return entry;
      });
    }
    exports2.readdir = readdir;
  }
});

// node_modules/@nodelib/fs.scandir/out/adapters/fs.js
var require_fs4 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createFileSystemAdapter = exports2.FILE_SYSTEM_ADAPTER = void 0;
    var fs2 = require("fs");
    exports2.FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      stat: fs2.stat,
      lstatSync: fs2.lstatSync,
      statSync: fs2.statSync,
      readdir: fs2.readdir,
      readdirSync: fs2.readdirSync
    };
    function createFileSystemAdapter(fsMethods) {
      if (fsMethods === void 0) {
        return exports2.FILE_SYSTEM_ADAPTER;
      }
      return Object.assign(Object.assign({}, exports2.FILE_SYSTEM_ADAPTER), fsMethods);
    }
    exports2.createFileSystemAdapter = createFileSystemAdapter;
  }
});

// node_modules/@nodelib/fs.scandir/out/settings.js
var require_settings2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var fs2 = require_fs4();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs2.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this.followSymbolicLinks,
          fs: this.fs,
          throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports2.default = Settings;
  }
});

// node_modules/@nodelib/fs.scandir/out/index.js
var require_out2 = __commonJS({
  "node_modules/@nodelib/fs.scandir/out/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Settings = exports2.scandirSync = exports2.scandir = void 0;
    var async = require_async2();
    var sync = require_sync2();
    var settings_1 = require_settings2();
    exports2.Settings = settings_1.default;
    function scandir(path2, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path2, getSettings(), optionsOrSettingsOrCallback);
        return;
      }
      async.read(path2, getSettings(optionsOrSettingsOrCallback), callback);
    }
    exports2.scandir = scandir;
    function scandirSync(path2, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      return sync.read(path2, settings);
    }
    exports2.scandirSync = scandirSync;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/reusify/reusify.js
var require_reusify = __commonJS({
  "node_modules/reusify/reusify.js"(exports2, module2) {
    "use strict";
    function reusify(Constructor) {
      var head = new Constructor();
      var tail = head;
      function get() {
        var current = head;
        if (current.next) {
          head = current.next;
        } else {
          head = new Constructor();
          tail = head;
        }
        current.next = null;
        return current;
      }
      function release(obj) {
        tail.next = obj;
        tail = obj;
      }
      return {
        get,
        release
      };
    }
    module2.exports = reusify;
  }
});

// node_modules/fastq/queue.js
var require_queue = __commonJS({
  "node_modules/fastq/queue.js"(exports2, module2) {
    "use strict";
    var reusify = require_reusify();
    function fastqueue(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
      }
      var cache = reusify(Task);
      var queueHead = null;
      var queueTail = null;
      var _running = 0;
      var errorHandler = null;
      var self = {
        push,
        drain: noop,
        saturated: noop,
        pause,
        paused: false,
        concurrency,
        running,
        resume,
        idle,
        length,
        getQueue,
        unshift,
        empty: noop,
        kill,
        killAndDrain,
        error
      };
      return self;
      function running() {
        return _running;
      }
      function pause() {
        self.paused = true;
      }
      function length() {
        var current = queueHead;
        var counter = 0;
        while (current) {
          current = current.next;
          counter++;
        }
        return counter;
      }
      function getQueue() {
        var current = queueHead;
        var tasks = [];
        while (current) {
          tasks.push(current.value);
          current = current.next;
        }
        return tasks;
      }
      function resume() {
        if (!self.paused)
          return;
        self.paused = false;
        for (var i = 0; i < self.concurrency; i++) {
          _running++;
          release();
        }
      }
      function idle() {
        return _running === 0 && self.length() === 0;
      }
      function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self.concurrency || self.paused) {
          if (queueTail) {
            queueTail.next = current;
            queueTail = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self.concurrency || self.paused) {
          if (queueHead) {
            current.next = queueHead;
            queueHead = current;
          } else {
            queueHead = current;
            queueTail = current;
            self.saturated();
          }
        } else {
          _running++;
          worker.call(context, current.value, current.worked);
        }
      }
      function release(holder) {
        if (holder) {
          cache.release(holder);
        }
        var next = queueHead;
        if (next) {
          if (!self.paused) {
            if (queueTail === queueHead) {
              queueTail = null;
            }
            queueHead = next.next;
            next.next = null;
            worker.call(context, next.value, next.worked);
            if (queueTail === null) {
              self.empty();
            }
          } else {
            _running--;
          }
        } else if (--_running === 0) {
          self.drain();
        }
      }
      function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop;
      }
      function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop;
      }
      function error(handler) {
        errorHandler = handler;
      }
    }
    function noop() {
    }
    function Task() {
      this.value = null;
      this.callback = noop;
      this.next = null;
      this.release = noop;
      this.context = null;
      this.errorHandler = null;
      var self = this;
      this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop;
        if (self.errorHandler) {
          errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
      };
    }
    function queueAsPromised(context, worker, concurrency) {
      if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
      }
      function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
          cb(null, res);
        }, cb);
      }
      var queue = fastqueue(context, asyncWrapper, concurrency);
      var pushCb = queue.push;
      var unshiftCb = queue.unshift;
      queue.push = push;
      queue.unshift = unshift;
      queue.drained = drained;
      return queue;
      function push(value) {
        var p = new Promise(function(resolve, reject) {
          pushCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function unshift(value) {
        var p = new Promise(function(resolve, reject) {
          unshiftCb(value, function(err, result) {
            if (err) {
              reject(err);
              return;
            }
            resolve(result);
          });
        });
        p.catch(noop);
        return p;
      }
      function drained() {
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
          queue.drain = function() {
            previousDrain();
            resolve();
          };
        });
        return p;
      }
    }
    module2.exports = fastqueue;
    module2.exports.promise = queueAsPromised;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/common.js
var require_common2 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/common.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.joinPathSegments = exports2.replacePathSegmentSeparator = exports2.isAppliedFilter = exports2.isFatalError = void 0;
    function isFatalError(settings, error) {
      if (settings.errorFilter === null) {
        return true;
      }
      return !settings.errorFilter(error);
    }
    exports2.isFatalError = isFatalError;
    function isAppliedFilter(filter, value) {
      return filter === null || filter(value);
    }
    exports2.isAppliedFilter = isAppliedFilter;
    function replacePathSegmentSeparator(filepath, separator) {
      return filepath.split(/[/\\]/).join(separator);
    }
    exports2.replacePathSegmentSeparator = replacePathSegmentSeparator;
    function joinPathSegments(a, b, separator) {
      if (a === "") {
        return b;
      }
      if (a.endsWith(separator)) {
        return a + b;
      }
      return a + separator + b;
    }
    exports2.joinPathSegments = joinPathSegments;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/reader.js
var require_reader = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var common = require_common2();
    var Reader = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
      }
    };
    exports2.default = Reader;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/async.js
var require_async3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var events_1 = require("events");
    var fsScandir = require_out2();
    var fastq = require_queue();
    var common = require_common2();
    var reader_1 = require_reader();
    var AsyncReader = class extends reader_1.default {
      constructor(_root, _settings) {
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = () => {
          if (!this._isFatalError) {
            this._emitter.emit("end");
          }
        };
      }
      read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(() => {
          this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
      }
      get isDestroyed() {
        return this._isDestroyed;
      }
      destroy() {
        if (this._isDestroyed) {
          throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
      }
      onEntry(callback) {
        this._emitter.on("entry", callback);
      }
      onError(callback) {
        this._emitter.once("error", callback);
      }
      onEnd(callback) {
        this._emitter.once("end", callback);
      }
      _pushToQueue(directory, base) {
        const queueItem = { directory, base };
        this._queue.push(queueItem, (error) => {
          if (error !== null) {
            this._handleError(error);
          }
        });
      }
      _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
          if (error !== null) {
            done(error, void 0);
            return;
          }
          for (const entry of entries) {
            this._handleEntry(entry, item.base);
          }
          done(null, void 0);
        });
      }
      _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
          return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
      }
      _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
          return;
        }
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _emitEntry(entry) {
        this._emitter.emit("entry", entry);
      }
    };
    exports2.default = AsyncReader;
  }
});

// node_modules/@nodelib/fs.walk/out/providers/async.js
var require_async4 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var async_1 = require_async3();
    var AsyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
      }
      read(callback) {
        this._reader.onError((error) => {
          callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry) => {
          this._storage.push(entry);
        });
        this._reader.onEnd(() => {
          callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
      }
    };
    exports2.default = AsyncProvider;
    function callFailureCallback(callback, error) {
      callback(error);
    }
    function callSuccessCallback(callback, entries) {
      callback(null, entries);
    }
  }
});

// node_modules/@nodelib/fs.walk/out/providers/stream.js
var require_stream2 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var stream_1 = require("stream");
    var async_1 = require_async3();
    var StreamProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
          objectMode: true,
          read: () => {
          },
          destroy: () => {
            if (!this._reader.isDestroyed) {
              this._reader.destroy();
            }
          }
        });
      }
      read() {
        this._reader.onError((error) => {
          this._stream.emit("error", error);
        });
        this._reader.onEntry((entry) => {
          this._stream.push(entry);
        });
        this._reader.onEnd(() => {
          this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
      }
    };
    exports2.default = StreamProvider;
  }
});

// node_modules/@nodelib/fs.walk/out/readers/sync.js
var require_sync3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fsScandir = require_out2();
    var common = require_common2();
    var reader_1 = require_reader();
    var SyncReader = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = new Set();
      }
      read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
      }
      _pushToQueue(directory, base) {
        this._queue.add({ directory, base });
      }
      _handleQueue() {
        for (const item of this._queue.values()) {
          this._handleDirectory(item.directory, item.base);
        }
      }
      _handleDirectory(directory, base) {
        try {
          const entries = this._scandir(directory, this._settings.fsScandirSettings);
          for (const entry of entries) {
            this._handleEntry(entry, base);
          }
        } catch (error) {
          this._handleError(error);
        }
      }
      _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
          return;
        }
        throw error;
      }
      _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== void 0) {
          entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
          this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
          this._pushToQueue(fullpath, base === void 0 ? void 0 : entry.path);
        }
      }
      _pushToStorage(entry) {
        this._storage.push(entry);
      }
    };
    exports2.default = SyncReader;
  }
});

// node_modules/@nodelib/fs.walk/out/providers/sync.js
var require_sync4 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var sync_1 = require_sync3();
    var SyncProvider = class {
      constructor(_root, _settings) {
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
      }
      read() {
        return this._reader.read();
      }
    };
    exports2.default = SyncProvider;
  }
});

// node_modules/@nodelib/fs.walk/out/settings.js
var require_settings3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path2 = require("path");
    var fsScandir = require_out2();
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, void 0);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path2.sep);
        this.fsScandirSettings = new fsScandir.Settings({
          followSymbolicLinks: this._options.followSymbolicLinks,
          fs: this._options.fs,
          pathSegmentSeparator: this._options.pathSegmentSeparator,
          stats: this._options.stats,
          throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
      }
      _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
      }
    };
    exports2.default = Settings;
  }
});

// node_modules/@nodelib/fs.walk/out/index.js
var require_out3 = __commonJS({
  "node_modules/@nodelib/fs.walk/out/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Settings = exports2.walkStream = exports2.walkSync = exports2.walk = void 0;
    var async_1 = require_async4();
    var stream_1 = require_stream2();
    var sync_1 = require_sync4();
    var settings_1 = require_settings3();
    exports2.Settings = settings_1.default;
    function walk(directory, optionsOrSettingsOrCallback, callback) {
      if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
      }
      new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
    }
    exports2.walk = walk;
    function walkSync(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new sync_1.default(directory, settings);
      return provider.read();
    }
    exports2.walkSync = walkSync;
    function walkStream(directory, optionsOrSettings) {
      const settings = getSettings(optionsOrSettings);
      const provider = new stream_1.default(directory, settings);
      return provider.read();
    }
    exports2.walkStream = walkStream;
    function getSettings(settingsOrOptions = {}) {
      if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
      }
      return new settings_1.default(settingsOrOptions);
    }
  }
});

// node_modules/fast-glob/out/readers/reader.js
var require_reader2 = __commonJS({
  "node_modules/fast-glob/out/readers/reader.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path2 = require("path");
    var fsStat = require_out();
    var utils = require_utils3();
    var Reader = class {
      constructor(_settings) {
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
          followSymbolicLink: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
      }
      _getFullEntryPath(filepath) {
        return path2.resolve(this._settings.cwd, filepath);
      }
      _makeEntry(stats, pattern) {
        const entry = {
          name: pattern,
          path: pattern,
          dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
          entry.stats = stats;
        }
        return entry;
      }
      _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
      }
    };
    exports2.default = Reader;
  }
});

// node_modules/fast-glob/out/readers/stream.js
var require_stream3 = __commonJS({
  "node_modules/fast-glob/out/readers/stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var stream_1 = require("stream");
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderStream = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
      }
      dynamic(root, options) {
        return this._walkStream(root, options);
      }
      static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({ objectMode: true });
        stream._write = (index, _enc, done) => {
          return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
            if (entry !== null && options.entryFilter(entry)) {
              stream.push(entry);
            }
            if (index === filepaths.length - 1) {
              stream.end();
            }
            done();
          }).catch(done);
        };
        for (let i = 0; i < filepaths.length; i++) {
          stream.write(i);
        }
        return stream;
      }
      _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        });
      }
      _getStat(filepath) {
        return new Promise((resolve, reject) => {
          this._stat(filepath, this._fsStatSettings, (error, stats) => {
            return error === null ? resolve(stats) : reject(error);
          });
        });
      }
    };
    exports2.default = ReaderStream;
  }
});

// node_modules/fast-glob/out/providers/matchers/matcher.js
var require_matcher = __commonJS({
  "node_modules/fast-glob/out/providers/matchers/matcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils = require_utils3();
    var Matcher = class {
      constructor(_patterns, _settings, _micromatchOptions) {
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
      }
      _fillStorage() {
        const patterns = utils.pattern.expandPatternsWithBraceExpansion(this._patterns);
        for (const pattern of patterns) {
          const segments = this._getPatternSegments(pattern);
          const sections = this._splitSegmentsIntoSections(segments);
          this._storage.push({
            complete: sections.length <= 1,
            pattern,
            segments,
            sections
          });
        }
      }
      _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part) => {
          const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
          if (!dynamic) {
            return {
              dynamic: false,
              pattern: part
            };
          }
          return {
            dynamic: true,
            pattern: part,
            patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
          };
        });
      }
      _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
      }
    };
    exports2.default = Matcher;
  }
});

// node_modules/fast-glob/out/providers/matchers/partial.js
var require_partial = __commonJS({
  "node_modules/fast-glob/out/providers/matchers/partial.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var matcher_1 = require_matcher();
    var PartialMatcher = class extends matcher_1.default {
      match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
        for (const pattern of patterns) {
          const section = pattern.sections[0];
          if (!pattern.complete && levels > section.length) {
            return true;
          }
          const match = parts.every((part, index) => {
            const segment = pattern.segments[index];
            if (segment.dynamic && segment.patternRe.test(part)) {
              return true;
            }
            if (!segment.dynamic && segment.pattern === part) {
              return true;
            }
            return false;
          });
          if (match) {
            return true;
          }
        }
        return false;
      }
    };
    exports2.default = PartialMatcher;
  }
});

// node_modules/fast-glob/out/providers/filters/deep.js
var require_deep = __commonJS({
  "node_modules/fast-glob/out/providers/filters/deep.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils = require_utils3();
    var partial_1 = require_partial();
    var DeepFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
      }
      getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry) => this._filter(basePath, entry, matcher, negativeRe);
      }
      _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
      }
      _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
      }
      _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
          return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
          return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
          return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
      }
      _isSkippedByDeep(basePath, entryPath) {
        if (this._settings.deep === Infinity) {
          return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
      }
      _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
          return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
      }
      _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
      }
      _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
      }
      _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
      }
    };
    exports2.default = DeepFilter;
  }
});

// node_modules/fast-glob/out/providers/filters/entry.js
var require_entry = __commonJS({
  "node_modules/fast-glob/out/providers/filters/entry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryFilter = class {
      constructor(_settings, _micromatchOptions) {
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = new Map();
      }
      getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, this._micromatchOptions);
        return (entry) => this._filter(entry, positiveRe, negativeRe);
      }
      _filter(entry, positiveRe, negativeRe) {
        if (this._settings.unique && this._isDuplicateEntry(entry)) {
          return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
          return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(entry.path, negativeRe)) {
          return false;
        }
        const filepath = this._settings.baseNameMatch ? entry.name : entry.path;
        const isMatched = this._isMatchToPatterns(filepath, positiveRe) && !this._isMatchToPatterns(entry.path, negativeRe);
        if (this._settings.unique && isMatched) {
          this._createIndexRecord(entry);
        }
        return isMatched;
      }
      _isDuplicateEntry(entry) {
        return this.index.has(entry.path);
      }
      _createIndexRecord(entry) {
        this.index.set(entry.path, void 0);
      }
      _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
      }
      _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
      }
      _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
          return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
      }
      _isMatchToPatterns(entryPath, patternsRe) {
        const filepath = utils.path.removeLeadingDotSegment(entryPath);
        return utils.pattern.matchAny(filepath, patternsRe);
      }
    };
    exports2.default = EntryFilter;
  }
});

// node_modules/fast-glob/out/providers/filters/error.js
var require_error = __commonJS({
  "node_modules/fast-glob/out/providers/filters/error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils = require_utils3();
    var ErrorFilter = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getFilter() {
        return (error) => this._isNonFatalError(error);
      }
      _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
      }
    };
    exports2.default = ErrorFilter;
  }
});

// node_modules/fast-glob/out/providers/transformers/entry.js
var require_entry2 = __commonJS({
  "node_modules/fast-glob/out/providers/transformers/entry.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var utils = require_utils3();
    var EntryTransformer = class {
      constructor(_settings) {
        this._settings = _settings;
      }
      getTransformer() {
        return (entry) => this._transform(entry);
      }
      _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
          filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
          filepath += "/";
        }
        if (!this._settings.objectMode) {
          return filepath;
        }
        return Object.assign(Object.assign({}, entry), { path: filepath });
      }
    };
    exports2.default = EntryTransformer;
  }
});

// node_modules/fast-glob/out/providers/provider.js
var require_provider = __commonJS({
  "node_modules/fast-glob/out/providers/provider.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var path2 = require("path");
    var deep_1 = require_deep();
    var entry_1 = require_entry();
    var error_1 = require_error();
    var entry_2 = require_entry2();
    var Provider = class {
      constructor(_settings) {
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
      }
      _getRootDirectory(task) {
        return path2.resolve(this._settings.cwd, task.base);
      }
      _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
          basePath,
          pathSegmentSeparator: "/",
          concurrency: this._settings.concurrency,
          deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
          entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
          errorFilter: this.errorFilter.getFilter(),
          followSymbolicLinks: this._settings.followSymbolicLinks,
          fs: this._settings.fs,
          stats: this._settings.stats,
          throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
          transform: this.entryTransformer.getTransformer()
        };
      }
      _getMicromatchOptions() {
        return {
          dot: this._settings.dot,
          matchBase: this._settings.baseNameMatch,
          nobrace: !this._settings.braceExpansion,
          nocase: !this._settings.caseSensitiveMatch,
          noext: !this._settings.extglob,
          noglobstar: !this._settings.globstar,
          posix: true,
          strictSlashes: false
        };
      }
    };
    exports2.default = Provider;
  }
});

// node_modules/fast-glob/out/providers/async.js
var require_async5 = __commonJS({
  "node_modules/fast-glob/out/providers/async.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var stream_1 = require_stream3();
    var provider_1 = require_provider();
    var ProviderAsync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = [];
        return new Promise((resolve, reject) => {
          const stream = this.api(root, task, options);
          stream.once("error", reject);
          stream.on("data", (entry) => entries.push(options.transform(entry)));
          stream.once("end", () => resolve(entries));
        });
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports2.default = ProviderAsync;
  }
});

// node_modules/fast-glob/out/providers/stream.js
var require_stream4 = __commonJS({
  "node_modules/fast-glob/out/providers/stream.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var stream_1 = require("stream");
    var stream_2 = require_stream3();
    var provider_1 = require_provider();
    var ProviderStream = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({ objectMode: true, read: () => {
        } });
        source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
        destination.once("close", () => source.destroy());
        return destination;
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports2.default = ProviderStream;
  }
});

// node_modules/fast-glob/out/readers/sync.js
var require_sync5 = __commonJS({
  "node_modules/fast-glob/out/readers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fsStat = require_out();
    var fsWalk = require_out3();
    var reader_1 = require_reader2();
    var ReaderSync = class extends reader_1.default {
      constructor() {
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
      }
      dynamic(root, options) {
        return this._walkSync(root, options);
      }
      static(patterns, options) {
        const entries = [];
        for (const pattern of patterns) {
          const filepath = this._getFullEntryPath(pattern);
          const entry = this._getEntry(filepath, pattern, options);
          if (entry === null || !options.entryFilter(entry)) {
            continue;
          }
          entries.push(entry);
        }
        return entries;
      }
      _getEntry(filepath, pattern, options) {
        try {
          const stats = this._getStat(filepath);
          return this._makeEntry(stats, pattern);
        } catch (error) {
          if (options.errorFilter(error)) {
            return null;
          }
          throw error;
        }
      }
      _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
      }
    };
    exports2.default = ReaderSync;
  }
});

// node_modules/fast-glob/out/providers/sync.js
var require_sync6 = __commonJS({
  "node_modules/fast-glob/out/providers/sync.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var sync_1 = require_sync5();
    var provider_1 = require_provider();
    var ProviderSync = class extends provider_1.default {
      constructor() {
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
      }
      read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
      }
      api(root, task, options) {
        if (task.dynamic) {
          return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
      }
    };
    exports2.default = ProviderSync;
  }
});

// node_modules/fast-glob/out/settings.js
var require_settings4 = __commonJS({
  "node_modules/fast-glob/out/settings.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
    var fs2 = require("fs");
    var os = require("os");
    var CPU_COUNT = Math.max(os.cpus().length, 1);
    exports2.DEFAULT_FILE_SYSTEM_ADAPTER = {
      lstat: fs2.lstat,
      lstatSync: fs2.lstatSync,
      stat: fs2.stat,
      statSync: fs2.statSync,
      readdir: fs2.readdir,
      readdirSync: fs2.readdirSync
    };
    var Settings = class {
      constructor(_options = {}) {
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
          this.onlyFiles = false;
        }
        if (this.stats) {
          this.objectMode = true;
        }
      }
      _getValue(option, value) {
        return option === void 0 ? value : option;
      }
      _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports2.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
      }
    };
    exports2.default = Settings;
  }
});

// node_modules/fast-glob/out/index.js
var require_out4 = __commonJS({
  "node_modules/fast-glob/out/index.js"(exports2, module2) {
    "use strict";
    var taskManager = require_tasks();
    var async_1 = require_async5();
    var stream_1 = require_stream4();
    var sync_1 = require_sync6();
    var settings_1 = require_settings4();
    var utils = require_utils3();
    async function FastGlob(source, options) {
      assertPatternsInput(source);
      const works = getWorks(source, async_1.default, options);
      const result = await Promise.all(works);
      return utils.array.flatten(result);
    }
    (function(FastGlob2) {
      function sync(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
      }
      FastGlob2.sync = sync;
      function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        return utils.stream.merge(works);
      }
      FastGlob2.stream = stream;
      function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
      }
      FastGlob2.generateTasks = generateTasks;
      function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
      }
      FastGlob2.isDynamicPattern = isDynamicPattern;
      function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
      }
      FastGlob2.escapePath = escapePath;
    })(FastGlob || (FastGlob = {}));
    function getWorks(source, _Provider, options) {
      const patterns = [].concat(source);
      const settings = new settings_1.default(options);
      const tasks = taskManager.generate(patterns, settings);
      const provider = new _Provider(settings);
      return tasks.map(provider.read, provider);
    }
    function assertPatternsInput(input) {
      const source = [].concat(input);
      const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
      if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
      }
    }
    module2.exports = FastGlob;
  }
});

// src/parser.ts
var picomatch = require_picomatch2();
var fg = require_out4();
var fs = require("fs");
var path = require("path");
function generatePostcssConfig(config, use) {
  let obj = {
    plugins: []
  };
  if (use !== void 0) {
    use.split(",").forEach(function(plugin) {
      obj.plugins.push(require(plugin));
    });
  } else {
    let configFileLoc;
    if (config !== void 0) {
      configFileLoc = path.resolve(process.cwd(), config, "postcss.config.js");
    } else {
      configFileLoc = path.resolve(process.cwd(), "postcss.config.js");
    }
    try {
      fs.lstatSync(configFileLoc);
      obj = require(configFileLoc);
    } catch (e) {
    }
  }
  return obj;
}
function expandGlob(input, callback, index = 0, expanded = []) {
  if (index < input.length) {
    let isGlob = false;
    let isDir = false;
    let isFile = false;
    isGlob = picomatch.scan(input[index]).isGlob;
    if (isGlob === false) {
      try {
        isDir = fs.lstatSync(path.normalize(input[index])).isDirectory();
        isFile = fs.lstatSync(path.normalize(input[index])).isFile();
      } catch (err) {
        throw err;
      }
    }
    if (isGlob || isFile) {
      let files = fg.sync(input[index], {
        dot: true
      }).map((entry) => path.normalize(entry));
      expanded.push(...files);
      index = index + 1;
      expandGlob(input, callback, index, expanded);
    } else if (isDir) {
      let dir = input[index];
      fs.readdir(dir, (err, files) => {
        if (err) {
          throw err;
        } else {
          files.forEach((file) => {
            let fullname = path.join(dir, file);
            if (!fs.lstatSync(fullname).isDirectory()) {
              expanded.push(fullname);
            }
          });
          index = index + 1;
          expandGlob(input, callback, index, expanded);
        }
      });
    }
  } else {
    callback(expanded);
  }
}
function createDestination(filename, outFile, dir, base, extension, usingStdin) {
  let result = "";
  let mirror = "";
  if (!outFile)
    outFile = "";
  if (!extension)
    extension = ".css";
  if (usingStdin === true) {
    if (outFile.length > 0) {
      result = outFile;
    } else {
      result = "";
    }
  } else {
    if (!dir)
      dir = "";
    if (!base)
      base = "";
    if (dir.length > 0) {
      if (base.length > 0) {
        mirror = path.dirname(filename.replace(path.join(base, "/"), ""));
      }
      result = path.join(dir, mirror, path.basename(filename, path.extname(filename)) + extension);
    } else if (outFile.length > 0) {
      result = outFile;
    } else {
      result = "";
    }
  }
  return result;
}
exports.expandGlob = expandGlob;
exports.createDestination = createDestination;
exports.generatePostcssConfig = generatePostcssConfig;
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvbGliL3V0aWxzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvbGliL3NjYW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvcGFyc2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3BpY29tYXRjaC9saWIvcGljb21hdGNoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9waWNvbWF0Y2gvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvYXJyYXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvZXJybm8uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvZnMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvcGF0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaXMtZXh0Z2xvYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvaXMtZ2xvYi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZ2xvYi1wYXJlbnQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvdXRpbHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvc3RyaW5naWZ5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9pcy1udW1iZXIvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3RvLXJlZ2V4LXJhbmdlL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9maWxsLXJhbmdlL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9icmFjZXMvbGliL2NvbXBpbGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2JyYWNlcy9saWIvZXhwYW5kLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9icmFjZXMvbGliL2NvbnN0YW50cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvYnJhY2VzL2xpYi9wYXJzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvYnJhY2VzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9taWNyb21hdGNoL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL3BhdHRlcm4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL21lcmdlMi9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC91dGlscy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvdXRpbHMvc3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3V0aWxzL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L21hbmFnZXJzL3Rhc2tzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zdGF0L291dC9wcm92aWRlcnMvYXN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L3Byb3ZpZGVycy9zeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zdGF0L291dC9hZGFwdGVycy9mcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc3RhdC9vdXQvc2V0dGluZ3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnN0YXQvb3V0L2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9xdWV1ZS1taWNyb3Rhc2svaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3J1bi1wYXJhbGxlbC9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvY29uc3RhbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC91dGlscy9mcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvdXRpbHMvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9jb21tb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L3Byb3ZpZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLnNjYW5kaXIvb3V0L2FkYXB0ZXJzL2ZzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy5zY2FuZGlyL291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMuc2NhbmRpci9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdHEvcXVldWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3JlYWRlcnMvY29tbW9uLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9yZWFkZXJzL3JlYWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcmVhZGVycy9hc3luYy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvcHJvdmlkZXJzL2FzeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9wcm92aWRlcnMvc3RyZWFtLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9yZWFkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bub2RlbGliL2ZzLndhbGsvb3V0L3Byb3ZpZGVycy9zeW5jLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Abm9kZWxpYi9mcy53YWxrL291dC9zZXR0aW5ncy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQG5vZGVsaWIvZnMud2Fsay9vdXQvaW5kZXguanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcmVhZGVycy9yZWFkZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcmVhZGVycy9zdHJlYW0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL21hdGNoZXJzL21hdGNoZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL21hdGNoZXJzL3BhcnRpYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL2ZpbHRlcnMvZGVlcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvZmlsdGVycy9lbnRyeS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvZmlsdGVycy9lcnJvci5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvdHJhbnNmb3JtZXJzL2VudHJ5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9mYXN0LWdsb2Ivb3V0L3Byb3ZpZGVycy9wcm92aWRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9wcm92aWRlcnMvYXN5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL3N0cmVhbS5qcyIsICIuLi9ub2RlX21vZHVsZXMvZmFzdC1nbG9iL291dC9yZWFkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvcHJvdmlkZXJzL3N5bmMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvc2V0dGluZ3MuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2Zhc3QtZ2xvYi9vdXQvaW5kZXguanMiLCAiLi4vc3JjL3BhcnNlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgV0lOX1NMQVNIID0gJ1xcXFxcXFxcLyc7XG5jb25zdCBXSU5fTk9fU0xBU0ggPSBgW14ke1dJTl9TTEFTSH1dYDtcblxuLyoqXG4gKiBQb3NpeCBnbG9iIHJlZ2V4XG4gKi9cblxuY29uc3QgRE9UX0xJVEVSQUwgPSAnXFxcXC4nO1xuY29uc3QgUExVU19MSVRFUkFMID0gJ1xcXFwrJztcbmNvbnN0IFFNQVJLX0xJVEVSQUwgPSAnXFxcXD8nO1xuY29uc3QgU0xBU0hfTElURVJBTCA9ICdcXFxcLyc7XG5jb25zdCBPTkVfQ0hBUiA9ICcoPz0uKSc7XG5jb25zdCBRTUFSSyA9ICdbXi9dJztcbmNvbnN0IEVORF9BTkNIT1IgPSBgKD86JHtTTEFTSF9MSVRFUkFMfXwkKWA7XG5jb25zdCBTVEFSVF9BTkNIT1IgPSBgKD86Xnwke1NMQVNIX0xJVEVSQUx9KWA7XG5jb25zdCBET1RTX1NMQVNIID0gYCR7RE9UX0xJVEVSQUx9ezEsMn0ke0VORF9BTkNIT1J9YDtcbmNvbnN0IE5PX0RPVCA9IGAoPyEke0RPVF9MSVRFUkFMfSlgO1xuY29uc3QgTk9fRE9UUyA9IGAoPyEke1NUQVJUX0FOQ0hPUn0ke0RPVFNfU0xBU0h9KWA7XG5jb25zdCBOT19ET1RfU0xBU0ggPSBgKD8hJHtET1RfTElURVJBTH17MCwxfSR7RU5EX0FOQ0hPUn0pYDtcbmNvbnN0IE5PX0RPVFNfU0xBU0ggPSBgKD8hJHtET1RTX1NMQVNIfSlgO1xuY29uc3QgUU1BUktfTk9fRE9UID0gYFteLiR7U0xBU0hfTElURVJBTH1dYDtcbmNvbnN0IFNUQVIgPSBgJHtRTUFSS30qP2A7XG5cbmNvbnN0IFBPU0lYX0NIQVJTID0ge1xuICBET1RfTElURVJBTCxcbiAgUExVU19MSVRFUkFMLFxuICBRTUFSS19MSVRFUkFMLFxuICBTTEFTSF9MSVRFUkFMLFxuICBPTkVfQ0hBUixcbiAgUU1BUkssXG4gIEVORF9BTkNIT1IsXG4gIERPVFNfU0xBU0gsXG4gIE5PX0RPVCxcbiAgTk9fRE9UUyxcbiAgTk9fRE9UX1NMQVNILFxuICBOT19ET1RTX1NMQVNILFxuICBRTUFSS19OT19ET1QsXG4gIFNUQVIsXG4gIFNUQVJUX0FOQ0hPUlxufTtcblxuLyoqXG4gKiBXaW5kb3dzIGdsb2IgcmVnZXhcbiAqL1xuXG5jb25zdCBXSU5ET1dTX0NIQVJTID0ge1xuICAuLi5QT1NJWF9DSEFSUyxcblxuICBTTEFTSF9MSVRFUkFMOiBgWyR7V0lOX1NMQVNIfV1gLFxuICBRTUFSSzogV0lOX05PX1NMQVNILFxuICBTVEFSOiBgJHtXSU5fTk9fU0xBU0h9Kj9gLFxuICBET1RTX1NMQVNIOiBgJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpYCxcbiAgTk9fRE9UOiBgKD8hJHtET1RfTElURVJBTH0pYCxcbiAgTk9fRE9UUzogYCg/ISg/Ol58WyR7V0lOX1NMQVNIfV0pJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpKWAsXG4gIE5PX0RPVF9TTEFTSDogYCg/ISR7RE9UX0xJVEVSQUx9ezAsMX0oPzpbJHtXSU5fU0xBU0h9XXwkKSlgLFxuICBOT19ET1RTX1NMQVNIOiBgKD8hJHtET1RfTElURVJBTH17MSwyfSg/Olske1dJTl9TTEFTSH1dfCQpKWAsXG4gIFFNQVJLX05PX0RPVDogYFteLiR7V0lOX1NMQVNIfV1gLFxuICBTVEFSVF9BTkNIT1I6IGAoPzpefFske1dJTl9TTEFTSH1dKWAsXG4gIEVORF9BTkNIT1I6IGAoPzpbJHtXSU5fU0xBU0h9XXwkKWBcbn07XG5cbi8qKlxuICogUE9TSVggQnJhY2tldCBSZWdleFxuICovXG5cbmNvbnN0IFBPU0lYX1JFR0VYX1NPVVJDRSA9IHtcbiAgYWxudW06ICdhLXpBLVowLTknLFxuICBhbHBoYTogJ2EtekEtWicsXG4gIGFzY2lpOiAnXFxcXHgwMC1cXFxceDdGJyxcbiAgYmxhbms6ICcgXFxcXHQnLFxuICBjbnRybDogJ1xcXFx4MDAtXFxcXHgxRlxcXFx4N0YnLFxuICBkaWdpdDogJzAtOScsXG4gIGdyYXBoOiAnXFxcXHgyMS1cXFxceDdFJyxcbiAgbG93ZXI6ICdhLXonLFxuICBwcmludDogJ1xcXFx4MjAtXFxcXHg3RSAnLFxuICBwdW5jdDogJ1xcXFwtIVwiIyQlJlxcJygpXFxcXCorLC4vOjs8PT4/QFtcXFxcXV5fYHt8fX4nLFxuICBzcGFjZTogJyBcXFxcdFxcXFxyXFxcXG5cXFxcdlxcXFxmJyxcbiAgdXBwZXI6ICdBLVonLFxuICB3b3JkOiAnQS1aYS16MC05XycsXG4gIHhkaWdpdDogJ0EtRmEtZjAtOSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBNQVhfTEVOR1RIOiAxMDI0ICogNjQsXG4gIFBPU0lYX1JFR0VYX1NPVVJDRSxcblxuICAvLyByZWd1bGFyIGV4cHJlc3Npb25zXG4gIFJFR0VYX0JBQ0tTTEFTSDogL1xcXFwoPyFbKis/XiR7fSh8KVtcXF1dKS9nLFxuICBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUzogL15bXkAhW1xcXS4sJCorP157fSgpfFxcXFwvXSsvLFxuICBSRUdFWF9TUEVDSUFMX0NIQVJTOiAvWy0qKz8uXiR7fSh8KVtcXF1dLyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19CQUNLUkVGOiAvKFxcXFw/KSgoXFxXKShcXDMqKSkvZyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19HTE9CQUw6IC8oWy0qKz8uXiR7fSh8KVtcXF1dKS9nLFxuICBSRUdFWF9SRU1PVkVfQkFDS1NMQVNIOiAvKD86XFxbLio/W15cXFxcXVxcXXxcXFxcKD89LikpL2csXG5cbiAgLy8gUmVwbGFjZSBnbG9icyB3aXRoIGVxdWl2YWxlbnQgcGF0dGVybnMgdG8gcmVkdWNlIHBhcnNpbmcgdGltZS5cbiAgUkVQTEFDRU1FTlRTOiB7XG4gICAgJyoqKic6ICcqJyxcbiAgICAnKiovKionOiAnKionLFxuICAgICcqKi8qKi8qKic6ICcqKidcbiAgfSxcblxuICAvLyBEaWdpdHNcbiAgQ0hBUl8wOiA0OCwgLyogMCAqL1xuICBDSEFSXzk6IDU3LCAvKiA5ICovXG5cbiAgLy8gQWxwaGFiZXQgY2hhcnMuXG4gIENIQVJfVVBQRVJDQVNFX0E6IDY1LCAvKiBBICovXG4gIENIQVJfTE9XRVJDQVNFX0E6IDk3LCAvKiBhICovXG4gIENIQVJfVVBQRVJDQVNFX1o6IDkwLCAvKiBaICovXG4gIENIQVJfTE9XRVJDQVNFX1o6IDEyMiwgLyogeiAqL1xuXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUzogNDAsIC8qICggKi9cbiAgQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUzogNDEsIC8qICkgKi9cblxuICBDSEFSX0FTVEVSSVNLOiA0MiwgLyogKiAqL1xuXG4gIC8vIE5vbi1hbHBoYWJldGljIGNoYXJzLlxuICBDSEFSX0FNUEVSU0FORDogMzgsIC8qICYgKi9cbiAgQ0hBUl9BVDogNjQsIC8qIEAgKi9cbiAgQ0hBUl9CQUNLV0FSRF9TTEFTSDogOTIsIC8qIFxcICovXG4gIENIQVJfQ0FSUklBR0VfUkVUVVJOOiAxMywgLyogXFxyICovXG4gIENIQVJfQ0lSQ1VNRkxFWF9BQ0NFTlQ6IDk0LCAvKiBeICovXG4gIENIQVJfQ09MT046IDU4LCAvKiA6ICovXG4gIENIQVJfQ09NTUE6IDQ0LCAvKiAsICovXG4gIENIQVJfRE9UOiA0NiwgLyogLiAqL1xuICBDSEFSX0RPVUJMRV9RVU9URTogMzQsIC8qIFwiICovXG4gIENIQVJfRVFVQUw6IDYxLCAvKiA9ICovXG4gIENIQVJfRVhDTEFNQVRJT05fTUFSSzogMzMsIC8qICEgKi9cbiAgQ0hBUl9GT1JNX0ZFRUQ6IDEyLCAvKiBcXGYgKi9cbiAgQ0hBUl9GT1JXQVJEX1NMQVNIOiA0NywgLyogLyAqL1xuICBDSEFSX0dSQVZFX0FDQ0VOVDogOTYsIC8qIGAgKi9cbiAgQ0hBUl9IQVNIOiAzNSwgLyogIyAqL1xuICBDSEFSX0hZUEhFTl9NSU5VUzogNDUsIC8qIC0gKi9cbiAgQ0hBUl9MRUZUX0FOR0xFX0JSQUNLRVQ6IDYwLCAvKiA8ICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRTogMTIzLCAvKiB7ICovXG4gIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVDogOTEsIC8qIFsgKi9cbiAgQ0hBUl9MSU5FX0ZFRUQ6IDEwLCAvKiBcXG4gKi9cbiAgQ0hBUl9OT19CUkVBS19TUEFDRTogMTYwLCAvKiBcXHUwMEEwICovXG4gIENIQVJfUEVSQ0VOVDogMzcsIC8qICUgKi9cbiAgQ0hBUl9QTFVTOiA0MywgLyogKyAqL1xuICBDSEFSX1FVRVNUSU9OX01BUks6IDYzLCAvKiA/ICovXG4gIENIQVJfUklHSFRfQU5HTEVfQlJBQ0tFVDogNjIsIC8qID4gKi9cbiAgQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRTogMTI1LCAvKiB9ICovXG4gIENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQ6IDkzLCAvKiBdICovXG4gIENIQVJfU0VNSUNPTE9OOiA1OSwgLyogOyAqL1xuICBDSEFSX1NJTkdMRV9RVU9URTogMzksIC8qICcgKi9cbiAgQ0hBUl9TUEFDRTogMzIsIC8qICAgKi9cbiAgQ0hBUl9UQUI6IDksIC8qIFxcdCAqL1xuICBDSEFSX1VOREVSU0NPUkU6IDk1LCAvKiBfICovXG4gIENIQVJfVkVSVElDQUxfTElORTogMTI0LCAvKiB8ICovXG4gIENIQVJfWkVST19XSURUSF9OT0JSRUFLX1NQQUNFOiA2NTI3OSwgLyogXFx1RkVGRiAqL1xuXG4gIFNFUDogcGF0aC5zZXAsXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBFWFRHTE9CX0NIQVJTXG4gICAqL1xuXG4gIGV4dGdsb2JDaGFycyhjaGFycykge1xuICAgIHJldHVybiB7XG4gICAgICAnISc6IHsgdHlwZTogJ25lZ2F0ZScsIG9wZW46ICcoPzooPyEoPzonLCBjbG9zZTogYCkpJHtjaGFycy5TVEFSfSlgIH0sXG4gICAgICAnPyc6IHsgdHlwZTogJ3FtYXJrJywgb3BlbjogJyg/OicsIGNsb3NlOiAnKT8nIH0sXG4gICAgICAnKyc6IHsgdHlwZTogJ3BsdXMnLCBvcGVuOiAnKD86JywgY2xvc2U6ICcpKycgfSxcbiAgICAgICcqJzogeyB0eXBlOiAnc3RhcicsIG9wZW46ICcoPzonLCBjbG9zZTogJykqJyB9LFxuICAgICAgJ0AnOiB7IHR5cGU6ICdhdCcsIG9wZW46ICcoPzonLCBjbG9zZTogJyknIH1cbiAgICB9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgR0xPQl9DSEFSU1xuICAgKi9cblxuICBnbG9iQ2hhcnMod2luMzIpIHtcbiAgICByZXR1cm4gd2luMzIgPT09IHRydWUgPyBXSU5ET1dTX0NIQVJTIDogUE9TSVhfQ0hBUlM7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgd2luMzIgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xuY29uc3Qge1xuICBSRUdFWF9CQUNLU0xBU0gsXG4gIFJFR0VYX1JFTU9WRV9CQUNLU0xBU0gsXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlMsXG4gIFJFR0VYX1NQRUNJQUxfQ0hBUlNfR0xPQkFMXG59ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcblxuZXhwb3J0cy5pc09iamVjdCA9IHZhbCA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcbmV4cG9ydHMuaGFzUmVnZXhDaGFycyA9IHN0ciA9PiBSRUdFWF9TUEVDSUFMX0NIQVJTLnRlc3Qoc3RyKTtcbmV4cG9ydHMuaXNSZWdleENoYXIgPSBzdHIgPT4gc3RyLmxlbmd0aCA9PT0gMSAmJiBleHBvcnRzLmhhc1JlZ2V4Q2hhcnMoc3RyKTtcbmV4cG9ydHMuZXNjYXBlUmVnZXggPSBzdHIgPT4gc3RyLnJlcGxhY2UoUkVHRVhfU1BFQ0lBTF9DSEFSU19HTE9CQUwsICdcXFxcJDEnKTtcbmV4cG9ydHMudG9Qb3NpeFNsYXNoZXMgPSBzdHIgPT4gc3RyLnJlcGxhY2UoUkVHRVhfQkFDS1NMQVNILCAnLycpO1xuXG5leHBvcnRzLnJlbW92ZUJhY2tzbGFzaGVzID0gc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKFJFR0VYX1JFTU9WRV9CQUNLU0xBU0gsIG1hdGNoID0+IHtcbiAgICByZXR1cm4gbWF0Y2ggPT09ICdcXFxcJyA/ICcnIDogbWF0Y2g7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5zdXBwb3J0c0xvb2tiZWhpbmRzID0gKCkgPT4ge1xuICBjb25zdCBzZWdzID0gcHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDEpLnNwbGl0KCcuJykubWFwKE51bWJlcik7XG4gIGlmIChzZWdzLmxlbmd0aCA9PT0gMyAmJiBzZWdzWzBdID49IDkgfHwgKHNlZ3NbMF0gPT09IDggJiYgc2Vnc1sxXSA+PSAxMCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnRzLmlzV2luZG93cyA9IG9wdGlvbnMgPT4ge1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy53aW5kb3dzID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gb3B0aW9ucy53aW5kb3dzO1xuICB9XG4gIHJldHVybiB3aW4zMiA9PT0gdHJ1ZSB8fCBwYXRoLnNlcCA9PT0gJ1xcXFwnO1xufTtcblxuZXhwb3J0cy5lc2NhcGVMYXN0ID0gKGlucHV0LCBjaGFyLCBsYXN0SWR4KSA9PiB7XG4gIGNvbnN0IGlkeCA9IGlucHV0Lmxhc3RJbmRleE9mKGNoYXIsIGxhc3RJZHgpO1xuICBpZiAoaWR4ID09PSAtMSkgcmV0dXJuIGlucHV0O1xuICBpZiAoaW5wdXRbaWR4IC0gMV0gPT09ICdcXFxcJykgcmV0dXJuIGV4cG9ydHMuZXNjYXBlTGFzdChpbnB1dCwgY2hhciwgaWR4IC0gMSk7XG4gIHJldHVybiBgJHtpbnB1dC5zbGljZSgwLCBpZHgpfVxcXFwke2lucHV0LnNsaWNlKGlkeCl9YDtcbn07XG5cbmV4cG9ydHMucmVtb3ZlUHJlZml4ID0gKGlucHV0LCBzdGF0ZSA9IHt9KSA9PiB7XG4gIGxldCBvdXRwdXQgPSBpbnB1dDtcbiAgaWYgKG91dHB1dC5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgb3V0cHV0ID0gb3V0cHV0LnNsaWNlKDIpO1xuICAgIHN0YXRlLnByZWZpeCA9ICcuLyc7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn07XG5cbmV4cG9ydHMud3JhcE91dHB1dCA9IChpbnB1dCwgc3RhdGUgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGNvbnN0IHByZXBlbmQgPSBvcHRpb25zLmNvbnRhaW5zID8gJycgOiAnXic7XG4gIGNvbnN0IGFwcGVuZCA9IG9wdGlvbnMuY29udGFpbnMgPyAnJyA6ICckJztcblxuICBsZXQgb3V0cHV0ID0gYCR7cHJlcGVuZH0oPzoke2lucHV0fSkke2FwcGVuZH1gO1xuICBpZiAoc3RhdGUubmVnYXRlZCA9PT0gdHJ1ZSkge1xuICAgIG91dHB1dCA9IGAoPzpeKD8hJHtvdXRwdXR9KS4qJClgO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5jb25zdCB7XG4gIENIQVJfQVNURVJJU0ssICAgICAgICAgICAgIC8qICogKi9cbiAgQ0hBUl9BVCwgICAgICAgICAgICAgICAgICAgLyogQCAqL1xuICBDSEFSX0JBQ0tXQVJEX1NMQVNILCAgICAgICAvKiBcXCAqL1xuICBDSEFSX0NPTU1BLCAgICAgICAgICAgICAgICAvKiAsICovXG4gIENIQVJfRE9ULCAgICAgICAgICAgICAgICAgIC8qIC4gKi9cbiAgQ0hBUl9FWENMQU1BVElPTl9NQVJLLCAgICAgLyogISAqL1xuICBDSEFSX0ZPUldBUkRfU0xBU0gsICAgICAgICAvKiAvICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRSwgICAgIC8qIHsgKi9cbiAgQ0hBUl9MRUZUX1BBUkVOVEhFU0VTLCAgICAgLyogKCAqL1xuICBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQsICAvKiBbICovXG4gIENIQVJfUExVUywgICAgICAgICAgICAgICAgIC8qICsgKi9cbiAgQ0hBUl9RVUVTVElPTl9NQVJLLCAgICAgICAgLyogPyAqL1xuICBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFLCAgICAvKiB9ICovXG4gIENIQVJfUklHSFRfUEFSRU5USEVTRVMsICAgIC8qICkgKi9cbiAgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCAgLyogXSAqL1xufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmNvbnN0IGlzUGF0aFNlcGFyYXRvciA9IGNvZGUgPT4ge1xuICByZXR1cm4gY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIIHx8IGNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0g7XG59O1xuXG5jb25zdCBkZXB0aCA9IHRva2VuID0+IHtcbiAgaWYgKHRva2VuLmlzUHJlZml4ICE9PSB0cnVlKSB7XG4gICAgdG9rZW4uZGVwdGggPSB0b2tlbi5pc0dsb2JzdGFyID8gSW5maW5pdHkgOiAxO1xuICB9XG59O1xuXG4vKipcbiAqIFF1aWNrbHkgc2NhbnMgYSBnbG9iIHBhdHRlcm4gYW5kIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYSBoYW5kZnVsIG9mXG4gKiB1c2VmdWwgcHJvcGVydGllcywgbGlrZSBgaXNHbG9iYCwgYHBhdGhgICh0aGUgbGVhZGluZyBub24tZ2xvYiwgaWYgaXQgZXhpc3RzKSxcbiAqIGBnbG9iYCAodGhlIGFjdHVhbCBwYXR0ZXJuKSwgYG5lZ2F0ZWRgICh0cnVlIGlmIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIGAhYCBidXQgbm90XG4gKiB3aXRoIGAhKGApIGFuZCBgbmVnYXRlZEV4dGdsb2JgICh0cnVlIGlmIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIGAhKGApLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwbSA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogY29uc29sZS5sb2cocG0uc2NhbignZm9vL2Jhci8qLmpzJykpO1xuICogeyBpc0dsb2I6IHRydWUsIGlucHV0OiAnZm9vL2Jhci8qLmpzJywgYmFzZTogJ2Zvby9iYXInLCBnbG9iOiAnKi5qcycgfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0b2tlbnMgYW5kIHJlZ2V4IHNvdXJjZSBzdHJpbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvbnN0IHNjYW4gPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgY29uc3Qgb3B0cyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3QgbGVuZ3RoID0gaW5wdXQubGVuZ3RoIC0gMTtcbiAgY29uc3Qgc2NhblRvRW5kID0gb3B0cy5wYXJ0cyA9PT0gdHJ1ZSB8fCBvcHRzLnNjYW5Ub0VuZCA9PT0gdHJ1ZTtcbiAgY29uc3Qgc2xhc2hlcyA9IFtdO1xuICBjb25zdCB0b2tlbnMgPSBbXTtcbiAgY29uc3QgcGFydHMgPSBbXTtcblxuICBsZXQgc3RyID0gaW5wdXQ7XG4gIGxldCBpbmRleCA9IC0xO1xuICBsZXQgc3RhcnQgPSAwO1xuICBsZXQgbGFzdEluZGV4ID0gMDtcbiAgbGV0IGlzQnJhY2UgPSBmYWxzZTtcbiAgbGV0IGlzQnJhY2tldCA9IGZhbHNlO1xuICBsZXQgaXNHbG9iID0gZmFsc2U7XG4gIGxldCBpc0V4dGdsb2IgPSBmYWxzZTtcbiAgbGV0IGlzR2xvYnN0YXIgPSBmYWxzZTtcbiAgbGV0IGJyYWNlRXNjYXBlZCA9IGZhbHNlO1xuICBsZXQgYmFja3NsYXNoZXMgPSBmYWxzZTtcbiAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcbiAgbGV0IG5lZ2F0ZWRFeHRnbG9iID0gZmFsc2U7XG4gIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICBsZXQgYnJhY2VzID0gMDtcbiAgbGV0IHByZXY7XG4gIGxldCBjb2RlO1xuICBsZXQgdG9rZW4gPSB7IHZhbHVlOiAnJywgZGVwdGg6IDAsIGlzR2xvYjogZmFsc2UgfTtcblxuICBjb25zdCBlb3MgPSAoKSA9PiBpbmRleCA+PSBsZW5ndGg7XG4gIGNvbnN0IHBlZWsgPSAoKSA9PiBzdHIuY2hhckNvZGVBdChpbmRleCArIDEpO1xuICBjb25zdCBhZHZhbmNlID0gKCkgPT4ge1xuICAgIHByZXYgPSBjb2RlO1xuICAgIHJldHVybiBzdHIuY2hhckNvZGVBdCgrK2luZGV4KTtcbiAgfTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb2RlID0gYWR2YW5jZSgpO1xuICAgIGxldCBuZXh0O1xuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgIGJhY2tzbGFzaGVzID0gdG9rZW4uYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgY29kZSA9IGFkdmFuY2UoKTtcblxuICAgICAgaWYgKGNvZGUgPT09IENIQVJfTEVGVF9DVVJMWV9CUkFDRSkge1xuICAgICAgICBicmFjZUVzY2FwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGJyYWNlRXNjYXBlZCA9PT0gdHJ1ZSB8fCBjb2RlID09PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0UpIHtcbiAgICAgIGJyYWNlcysrO1xuXG4gICAgICB3aGlsZSAoZW9zKCkgIT09IHRydWUgJiYgKGNvZGUgPSBhZHZhbmNlKCkpKSB7XG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgYmFja3NsYXNoZXMgPSB0b2tlbi5iYWNrc2xhc2hlcyA9IHRydWU7XG4gICAgICAgICAgYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfTEVGVF9DVVJMWV9CUkFDRSkge1xuICAgICAgICAgIGJyYWNlcysrO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJyYWNlRXNjYXBlZCAhPT0gdHJ1ZSAmJiBjb2RlID09PSBDSEFSX0RPVCAmJiAoY29kZSA9IGFkdmFuY2UoKSkgPT09IENIQVJfRE9UKSB7XG4gICAgICAgICAgaXNCcmFjZSA9IHRva2VuLmlzQnJhY2UgPSB0cnVlO1xuICAgICAgICAgIGlzR2xvYiA9IHRva2VuLmlzR2xvYiA9IHRydWU7XG4gICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnJhY2VFc2NhcGVkICE9PSB0cnVlICYmIGNvZGUgPT09IENIQVJfQ09NTUEpIHtcbiAgICAgICAgICBpc0JyYWNlID0gdG9rZW4uaXNCcmFjZSA9IHRydWU7XG4gICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFKSB7XG4gICAgICAgICAgYnJhY2VzLS07XG5cbiAgICAgICAgICBpZiAoYnJhY2VzID09PSAwKSB7XG4gICAgICAgICAgICBicmFjZUVzY2FwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlzQnJhY2UgPSB0b2tlbi5pc0JyYWNlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gQ0hBUl9GT1JXQVJEX1NMQVNIKSB7XG4gICAgICBzbGFzaGVzLnB1c2goaW5kZXgpO1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgdG9rZW4gPSB7IHZhbHVlOiAnJywgZGVwdGg6IDAsIGlzR2xvYjogZmFsc2UgfTtcblxuICAgICAgaWYgKGZpbmlzaGVkID09PSB0cnVlKSBjb250aW51ZTtcbiAgICAgIGlmIChwcmV2ID09PSBDSEFSX0RPVCAmJiBpbmRleCA9PT0gKHN0YXJ0ICsgMSkpIHtcbiAgICAgICAgc3RhcnQgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm5vZXh0ICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCBpc0V4dGdsb2JDaGFyID0gY29kZSA9PT0gQ0hBUl9QTFVTXG4gICAgICAgIHx8IGNvZGUgPT09IENIQVJfQVRcbiAgICAgICAgfHwgY29kZSA9PT0gQ0hBUl9BU1RFUklTS1xuICAgICAgICB8fCBjb2RlID09PSBDSEFSX1FVRVNUSU9OX01BUktcbiAgICAgICAgfHwgY29kZSA9PT0gQ0hBUl9FWENMQU1BVElPTl9NQVJLO1xuXG4gICAgICBpZiAoaXNFeHRnbG9iQ2hhciA9PT0gdHJ1ZSAmJiBwZWVrKCkgPT09IENIQVJfTEVGVF9QQVJFTlRIRVNFUykge1xuICAgICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuICAgICAgICBpc0V4dGdsb2IgPSB0b2tlbi5pc0V4dGdsb2IgPSB0cnVlO1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIGlmIChjb2RlID09PSBDSEFSX0VYQ0xBTUFUSU9OX01BUksgJiYgaW5kZXggPT09IHN0YXJ0KSB7XG4gICAgICAgICAgbmVnYXRlZEV4dGdsb2IgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAoY29kZSA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgICAgIGlmIChjb2RlID09PSBDSEFSX0JBQ0tXQVJEX1NMQVNIKSB7XG4gICAgICAgICAgICAgIGJhY2tzbGFzaGVzID0gdG9rZW4uYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgICAgICAgICBjb2RlID0gYWR2YW5jZSgpO1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvZGUgPT09IENIQVJfUklHSFRfUEFSRU5USEVTRVMpIHtcbiAgICAgICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfQVNURVJJU0spIHtcbiAgICAgIGlmIChwcmV2ID09PSBDSEFSX0FTVEVSSVNLKSBpc0dsb2JzdGFyID0gdG9rZW4uaXNHbG9ic3RhciA9IHRydWU7XG4gICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPT09IENIQVJfUVVFU1RJT05fTUFSSykge1xuICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgIGZpbmlzaGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAobmV4dCA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgaWYgKG5leHQgPT09IENIQVJfQkFDS1dBUkRfU0xBU0gpIHtcbiAgICAgICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgICAgICBhZHZhbmNlKCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCkge1xuICAgICAgICAgIGlzQnJhY2tldCA9IHRva2VuLmlzQnJhY2tldCA9IHRydWU7XG4gICAgICAgICAgaXNHbG9iID0gdG9rZW4uaXNHbG9iID0gdHJ1ZTtcbiAgICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNjYW5Ub0VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMubm9uZWdhdGUgIT09IHRydWUgJiYgY29kZSA9PT0gQ0hBUl9FWENMQU1BVElPTl9NQVJLICYmIGluZGV4ID09PSBzdGFydCkge1xuICAgICAgbmVnYXRlZCA9IHRva2VuLm5lZ2F0ZWQgPSB0cnVlO1xuICAgICAgc3RhcnQrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRzLm5vcGFyZW4gIT09IHRydWUgJiYgY29kZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBpc0dsb2IgPSB0b2tlbi5pc0dsb2IgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIHdoaWxlIChlb3MoKSAhPT0gdHJ1ZSAmJiAoY29kZSA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICAgICAgICBiYWNrc2xhc2hlcyA9IHRva2VuLmJhY2tzbGFzaGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvZGUgPSBhZHZhbmNlKCk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29kZSA9PT0gQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUykge1xuICAgICAgICAgICAgZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGlzR2xvYiA9PT0gdHJ1ZSkge1xuICAgICAgZmluaXNoZWQgPSB0cnVlO1xuXG4gICAgICBpZiAoc2NhblRvRW5kID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAob3B0cy5ub2V4dCA9PT0gdHJ1ZSkge1xuICAgIGlzRXh0Z2xvYiA9IGZhbHNlO1xuICAgIGlzR2xvYiA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IGJhc2UgPSBzdHI7XG4gIGxldCBwcmVmaXggPSAnJztcbiAgbGV0IGdsb2IgPSAnJztcblxuICBpZiAoc3RhcnQgPiAwKSB7XG4gICAgcHJlZml4ID0gc3RyLnNsaWNlKDAsIHN0YXJ0KTtcbiAgICBzdHIgPSBzdHIuc2xpY2Uoc3RhcnQpO1xuICAgIGxhc3RJbmRleCAtPSBzdGFydDtcbiAgfVxuXG4gIGlmIChiYXNlICYmIGlzR2xvYiA9PT0gdHJ1ZSAmJiBsYXN0SW5kZXggPiAwKSB7XG4gICAgYmFzZSA9IHN0ci5zbGljZSgwLCBsYXN0SW5kZXgpO1xuICAgIGdsb2IgPSBzdHIuc2xpY2UobGFzdEluZGV4KTtcbiAgfSBlbHNlIGlmIChpc0dsb2IgPT09IHRydWUpIHtcbiAgICBiYXNlID0gJyc7XG4gICAgZ2xvYiA9IHN0cjtcbiAgfSBlbHNlIHtcbiAgICBiYXNlID0gc3RyO1xuICB9XG5cbiAgaWYgKGJhc2UgJiYgYmFzZSAhPT0gJycgJiYgYmFzZSAhPT0gJy8nICYmIGJhc2UgIT09IHN0cikge1xuICAgIGlmIChpc1BhdGhTZXBhcmF0b3IoYmFzZS5jaGFyQ29kZUF0KGJhc2UubGVuZ3RoIC0gMSkpKSB7XG4gICAgICBiYXNlID0gYmFzZS5zbGljZSgwLCAtMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICBpZiAoZ2xvYikgZ2xvYiA9IHV0aWxzLnJlbW92ZUJhY2tzbGFzaGVzKGdsb2IpO1xuXG4gICAgaWYgKGJhc2UgJiYgYmFja3NsYXNoZXMgPT09IHRydWUpIHtcbiAgICAgIGJhc2UgPSB1dGlscy5yZW1vdmVCYWNrc2xhc2hlcyhiYXNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBwcmVmaXgsXG4gICAgaW5wdXQsXG4gICAgc3RhcnQsXG4gICAgYmFzZSxcbiAgICBnbG9iLFxuICAgIGlzQnJhY2UsXG4gICAgaXNCcmFja2V0LFxuICAgIGlzR2xvYixcbiAgICBpc0V4dGdsb2IsXG4gICAgaXNHbG9ic3RhcixcbiAgICBuZWdhdGVkLFxuICAgIG5lZ2F0ZWRFeHRnbG9iXG4gIH07XG5cbiAgaWYgKG9wdHMudG9rZW5zID09PSB0cnVlKSB7XG4gICAgc3RhdGUubWF4RGVwdGggPSAwO1xuICAgIGlmICghaXNQYXRoU2VwYXJhdG9yKGNvZGUpKSB7XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuICAgIHN0YXRlLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGlmIChvcHRzLnBhcnRzID09PSB0cnVlIHx8IG9wdHMudG9rZW5zID09PSB0cnVlKSB7XG4gICAgbGV0IHByZXZJbmRleDtcblxuICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IHNsYXNoZXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgY29uc3QgbiA9IHByZXZJbmRleCA/IHByZXZJbmRleCArIDEgOiBzdGFydDtcbiAgICAgIGNvbnN0IGkgPSBzbGFzaGVzW2lkeF07XG4gICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnNsaWNlKG4sIGkpO1xuICAgICAgaWYgKG9wdHMudG9rZW5zKSB7XG4gICAgICAgIGlmIChpZHggPT09IDAgJiYgc3RhcnQgIT09IDApIHtcbiAgICAgICAgICB0b2tlbnNbaWR4XS5pc1ByZWZpeCA9IHRydWU7XG4gICAgICAgICAgdG9rZW5zW2lkeF0udmFsdWUgPSBwcmVmaXg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9rZW5zW2lkeF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkZXB0aCh0b2tlbnNbaWR4XSk7XG4gICAgICAgIHN0YXRlLm1heERlcHRoICs9IHRva2Vuc1tpZHhdLmRlcHRoO1xuICAgICAgfVxuICAgICAgaWYgKGlkeCAhPT0gMCB8fCB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgcGFydHMucHVzaCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBwcmV2SW5kZXggPSBpO1xuICAgIH1cblxuICAgIGlmIChwcmV2SW5kZXggJiYgcHJldkluZGV4ICsgMSA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC5zbGljZShwcmV2SW5kZXggKyAxKTtcbiAgICAgIHBhcnRzLnB1c2godmFsdWUpO1xuXG4gICAgICBpZiAob3B0cy50b2tlbnMpIHtcbiAgICAgICAgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBkZXB0aCh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdKTtcbiAgICAgICAgc3RhdGUubWF4RGVwdGggKz0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXS5kZXB0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5zbGFzaGVzID0gc2xhc2hlcztcbiAgICBzdGF0ZS5wYXJ0cyA9IHBhcnRzO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY2FuO1xuIiwgIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IHtcbiAgTUFYX0xFTkdUSCxcbiAgUE9TSVhfUkVHRVhfU09VUkNFLFxuICBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUyxcbiAgUkVHRVhfU1BFQ0lBTF9DSEFSU19CQUNLUkVGLFxuICBSRVBMQUNFTUVOVFNcbn0gPSBjb25zdGFudHM7XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbmNvbnN0IGV4cGFuZFJhbmdlID0gKGFyZ3MsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmV4cGFuZFJhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZXhwYW5kUmFuZ2UoLi4uYXJncywgb3B0aW9ucyk7XG4gIH1cblxuICBhcmdzLnNvcnQoKTtcbiAgY29uc3QgdmFsdWUgPSBgWyR7YXJncy5qb2luKCctJyl9XWA7XG5cbiAgdHJ5IHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3ICovXG4gICAgbmV3IFJlZ0V4cCh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgcmV0dXJuIGFyZ3MubWFwKHYgPT4gdXRpbHMuZXNjYXBlUmVnZXgodikpLmpvaW4oJy4uJyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG4vKipcbiAqIENyZWF0ZSB0aGUgbWVzc2FnZSBmb3IgYSBzeW50YXggZXJyb3JcbiAqL1xuXG5jb25zdCBzeW50YXhFcnJvciA9ICh0eXBlLCBjaGFyKSA9PiB7XG4gIHJldHVybiBgTWlzc2luZyAke3R5cGV9OiBcIiR7Y2hhcn1cIiAtIHVzZSBcIlxcXFxcXFxcJHtjaGFyfVwiIHRvIG1hdGNoIGxpdGVyYWwgY2hhcmFjdGVyc2A7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBpbnB1dCBzdHJpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuY29uc3QgcGFyc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIHN0cmluZycpO1xuICB9XG5cbiAgaW5wdXQgPSBSRVBMQUNFTUVOVFNbaW5wdXRdIHx8IGlucHV0O1xuXG4gIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgY29uc3QgbWF4ID0gdHlwZW9mIG9wdHMubWF4TGVuZ3RoID09PSAnbnVtYmVyJyA/IE1hdGgubWluKE1BWF9MRU5HVEgsIG9wdHMubWF4TGVuZ3RoKSA6IE1BWF9MRU5HVEg7XG5cbiAgbGV0IGxlbiA9IGlucHV0Lmxlbmd0aDtcbiAgaWYgKGxlbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW5wdXQgbGVuZ3RoOiAke2xlbn0sIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aDogJHttYXh9YCk7XG4gIH1cblxuICBjb25zdCBib3MgPSB7IHR5cGU6ICdib3MnLCB2YWx1ZTogJycsIG91dHB1dDogb3B0cy5wcmVwZW5kIHx8ICcnIH07XG4gIGNvbnN0IHRva2VucyA9IFtib3NdO1xuXG4gIGNvbnN0IGNhcHR1cmUgPSBvcHRzLmNhcHR1cmUgPyAnJyA6ICc/Oic7XG4gIGNvbnN0IHdpbjMyID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpO1xuXG4gIC8vIGNyZWF0ZSBjb25zdGFudHMgYmFzZWQgb24gcGxhdGZvcm0sIGZvciB3aW5kb3dzIG9yIHBvc2l4XG4gIGNvbnN0IFBMQVRGT1JNX0NIQVJTID0gY29uc3RhbnRzLmdsb2JDaGFycyh3aW4zMik7XG4gIGNvbnN0IEVYVEdMT0JfQ0hBUlMgPSBjb25zdGFudHMuZXh0Z2xvYkNoYXJzKFBMQVRGT1JNX0NIQVJTKTtcblxuICBjb25zdCB7XG4gICAgRE9UX0xJVEVSQUwsXG4gICAgUExVU19MSVRFUkFMLFxuICAgIFNMQVNIX0xJVEVSQUwsXG4gICAgT05FX0NIQVIsXG4gICAgRE9UU19TTEFTSCxcbiAgICBOT19ET1QsXG4gICAgTk9fRE9UX1NMQVNILFxuICAgIE5PX0RPVFNfU0xBU0gsXG4gICAgUU1BUkssXG4gICAgUU1BUktfTk9fRE9ULFxuICAgIFNUQVIsXG4gICAgU1RBUlRfQU5DSE9SXG4gIH0gPSBQTEFURk9STV9DSEFSUztcblxuICBjb25zdCBnbG9ic3RhciA9IG9wdHMgPT4ge1xuICAgIHJldHVybiBgKCR7Y2FwdHVyZX0oPzooPyEke1NUQVJUX0FOQ0hPUn0ke29wdHMuZG90ID8gRE9UU19TTEFTSCA6IERPVF9MSVRFUkFMfSkuKSo/KWA7XG4gIH07XG5cbiAgY29uc3Qgbm9kb3QgPSBvcHRzLmRvdCA/ICcnIDogTk9fRE9UO1xuICBjb25zdCBxbWFya05vRG90ID0gb3B0cy5kb3QgPyBRTUFSSyA6IFFNQVJLX05PX0RPVDtcbiAgbGV0IHN0YXIgPSBvcHRzLmJhc2ggPT09IHRydWUgPyBnbG9ic3RhcihvcHRzKSA6IFNUQVI7XG5cbiAgaWYgKG9wdHMuY2FwdHVyZSkge1xuICAgIHN0YXIgPSBgKCR7c3Rhcn0pYDtcbiAgfVxuXG4gIC8vIG1pbmltYXRjaCBvcHRpb25zIHN1cHBvcnRcbiAgaWYgKHR5cGVvZiBvcHRzLm5vZXh0ID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRzLm5vZXh0Z2xvYiA9IG9wdHMubm9leHQ7XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICBpbnB1dCxcbiAgICBpbmRleDogLTEsXG4gICAgc3RhcnQ6IDAsXG4gICAgZG90OiBvcHRzLmRvdCA9PT0gdHJ1ZSxcbiAgICBjb25zdW1lZDogJycsXG4gICAgb3V0cHV0OiAnJyxcbiAgICBwcmVmaXg6ICcnLFxuICAgIGJhY2t0cmFjazogZmFsc2UsXG4gICAgbmVnYXRlZDogZmFsc2UsXG4gICAgYnJhY2tldHM6IDAsXG4gICAgYnJhY2VzOiAwLFxuICAgIHBhcmVuczogMCxcbiAgICBxdW90ZXM6IDAsXG4gICAgZ2xvYnN0YXI6IGZhbHNlLFxuICAgIHRva2Vuc1xuICB9O1xuXG4gIGlucHV0ID0gdXRpbHMucmVtb3ZlUHJlZml4KGlucHV0LCBzdGF0ZSk7XG4gIGxlbiA9IGlucHV0Lmxlbmd0aDtcblxuICBjb25zdCBleHRnbG9icyA9IFtdO1xuICBjb25zdCBicmFjZXMgPSBbXTtcbiAgY29uc3Qgc3RhY2sgPSBbXTtcbiAgbGV0IHByZXYgPSBib3M7XG4gIGxldCB2YWx1ZTtcblxuICAvKipcbiAgICogVG9rZW5pemluZyBoZWxwZXJzXG4gICAqL1xuXG4gIGNvbnN0IGVvcyA9ICgpID0+IHN0YXRlLmluZGV4ID09PSBsZW4gLSAxO1xuICBjb25zdCBwZWVrID0gc3RhdGUucGVlayA9IChuID0gMSkgPT4gaW5wdXRbc3RhdGUuaW5kZXggKyBuXTtcbiAgY29uc3QgYWR2YW5jZSA9IHN0YXRlLmFkdmFuY2UgPSAoKSA9PiBpbnB1dFsrK3N0YXRlLmluZGV4XSB8fCAnJztcbiAgY29uc3QgcmVtYWluaW5nID0gKCkgPT4gaW5wdXQuc2xpY2Uoc3RhdGUuaW5kZXggKyAxKTtcbiAgY29uc3QgY29uc3VtZSA9ICh2YWx1ZSA9ICcnLCBudW0gPSAwKSA9PiB7XG4gICAgc3RhdGUuY29uc3VtZWQgKz0gdmFsdWU7XG4gICAgc3RhdGUuaW5kZXggKz0gbnVtO1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZCA9IHRva2VuID0+IHtcbiAgICBzdGF0ZS5vdXRwdXQgKz0gdG9rZW4ub3V0cHV0ICE9IG51bGwgPyB0b2tlbi5vdXRwdXQgOiB0b2tlbi52YWx1ZTtcbiAgICBjb25zdW1lKHRva2VuLnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBuZWdhdGUgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMTtcblxuICAgIHdoaWxlIChwZWVrKCkgPT09ICchJyAmJiAocGVlaygyKSAhPT0gJygnIHx8IHBlZWsoMykgPT09ICc/JykpIHtcbiAgICAgIGFkdmFuY2UoKTtcbiAgICAgIHN0YXRlLnN0YXJ0Kys7XG4gICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb3VudCAlIDIgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0ZS5uZWdhdGVkID0gdHJ1ZTtcbiAgICBzdGF0ZS5zdGFydCsrO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGluY3JlbWVudCA9IHR5cGUgPT4ge1xuICAgIHN0YXRlW3R5cGVdKys7XG4gICAgc3RhY2sucHVzaCh0eXBlKTtcbiAgfTtcblxuICBjb25zdCBkZWNyZW1lbnQgPSB0eXBlID0+IHtcbiAgICBzdGF0ZVt0eXBlXS0tO1xuICAgIHN0YWNrLnBvcCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQdXNoIHRva2VucyBvbnRvIHRoZSB0b2tlbnMgYXJyYXkuIFRoaXMgaGVscGVyIHNwZWVkcyB1cFxuICAgKiB0b2tlbml6aW5nIGJ5IDEpIGhlbHBpbmcgdXMgYXZvaWQgYmFja3RyYWNraW5nIGFzIG11Y2ggYXMgcG9zc2libGUsXG4gICAqIGFuZCAyKSBoZWxwaW5nIHVzIGF2b2lkIGNyZWF0aW5nIGV4dHJhIHRva2VucyB3aGVuIGNvbnNlY3V0aXZlXG4gICAqIGNoYXJhY3RlcnMgYXJlIHBsYWluIHRleHQuIFRoaXMgaW1wcm92ZXMgcGVyZm9ybWFuY2UgYW5kIHNpbXBsaWZpZXNcbiAgICogbG9va2JlaGluZHMuXG4gICAqL1xuXG4gIGNvbnN0IHB1c2ggPSB0b2sgPT4ge1xuICAgIGlmIChwcmV2LnR5cGUgPT09ICdnbG9ic3RhcicpIHtcbiAgICAgIGNvbnN0IGlzQnJhY2UgPSBzdGF0ZS5icmFjZXMgPiAwICYmICh0b2sudHlwZSA9PT0gJ2NvbW1hJyB8fCB0b2sudHlwZSA9PT0gJ2JyYWNlJyk7XG4gICAgICBjb25zdCBpc0V4dGdsb2IgPSB0b2suZXh0Z2xvYiA9PT0gdHJ1ZSB8fCAoZXh0Z2xvYnMubGVuZ3RoICYmICh0b2sudHlwZSA9PT0gJ3BpcGUnIHx8IHRvay50eXBlID09PSAncGFyZW4nKSk7XG5cbiAgICAgIGlmICh0b2sudHlwZSAhPT0gJ3NsYXNoJyAmJiB0b2sudHlwZSAhPT0gJ3BhcmVuJyAmJiAhaXNCcmFjZSAmJiAhaXNFeHRnbG9iKSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtcHJldi5vdXRwdXQubGVuZ3RoKTtcbiAgICAgICAgcHJldi50eXBlID0gJ3N0YXInO1xuICAgICAgICBwcmV2LnZhbHVlID0gJyonO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IHN0YXI7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2Lm91dHB1dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXh0Z2xvYnMubGVuZ3RoICYmIHRvay50eXBlICE9PSAncGFyZW4nKSB7XG4gICAgICBleHRnbG9ic1tleHRnbG9icy5sZW5ndGggLSAxXS5pbm5lciArPSB0b2sudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHRvay52YWx1ZSB8fCB0b2sub3V0cHV0KSBhcHBlbmQodG9rKTtcbiAgICBpZiAocHJldiAmJiBwcmV2LnR5cGUgPT09ICd0ZXh0JyAmJiB0b2sudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBwcmV2LnZhbHVlICs9IHRvay52YWx1ZTtcbiAgICAgIHByZXYub3V0cHV0ID0gKHByZXYub3V0cHV0IHx8ICcnKSArIHRvay52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2sucHJldiA9IHByZXY7XG4gICAgdG9rZW5zLnB1c2godG9rKTtcbiAgICBwcmV2ID0gdG9rO1xuICB9O1xuXG4gIGNvbnN0IGV4dGdsb2JPcGVuID0gKHR5cGUsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSB7IC4uLkVYVEdMT0JfQ0hBUlNbdmFsdWVdLCBjb25kaXRpb25zOiAxLCBpbm5lcjogJycgfTtcblxuICAgIHRva2VuLnByZXYgPSBwcmV2O1xuICAgIHRva2VuLnBhcmVucyA9IHN0YXRlLnBhcmVucztcbiAgICB0b2tlbi5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQ7XG4gICAgY29uc3Qgb3V0cHV0ID0gKG9wdHMuY2FwdHVyZSA/ICcoJyA6ICcnKSArIHRva2VuLm9wZW47XG5cbiAgICBpbmNyZW1lbnQoJ3BhcmVucycpO1xuICAgIHB1c2goeyB0eXBlLCB2YWx1ZSwgb3V0cHV0OiBzdGF0ZS5vdXRwdXQgPyAnJyA6IE9ORV9DSEFSIH0pO1xuICAgIHB1c2goeyB0eXBlOiAncGFyZW4nLCBleHRnbG9iOiB0cnVlLCB2YWx1ZTogYWR2YW5jZSgpLCBvdXRwdXQgfSk7XG4gICAgZXh0Z2xvYnMucHVzaCh0b2tlbik7XG4gIH07XG5cbiAgY29uc3QgZXh0Z2xvYkNsb3NlID0gdG9rZW4gPT4ge1xuICAgIGxldCBvdXRwdXQgPSB0b2tlbi5jbG9zZSArIChvcHRzLmNhcHR1cmUgPyAnKScgOiAnJyk7XG4gICAgbGV0IHJlc3Q7XG5cbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ25lZ2F0ZScpIHtcbiAgICAgIGxldCBleHRnbG9iU3RhciA9IHN0YXI7XG5cbiAgICAgIGlmICh0b2tlbi5pbm5lciAmJiB0b2tlbi5pbm5lci5sZW5ndGggPiAxICYmIHRva2VuLmlubmVyLmluY2x1ZGVzKCcvJykpIHtcbiAgICAgICAgZXh0Z2xvYlN0YXIgPSBnbG9ic3RhcihvcHRzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV4dGdsb2JTdGFyICE9PSBzdGFyIHx8IGVvcygpIHx8IC9eXFwpKyQvLnRlc3QocmVtYWluaW5nKCkpKSB7XG4gICAgICAgIG91dHB1dCA9IHRva2VuLmNsb3NlID0gYCkkKSkke2V4dGdsb2JTdGFyfWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5pbm5lci5pbmNsdWRlcygnKicpICYmIChyZXN0ID0gcmVtYWluaW5nKCkpICYmIC9eXFwuW15cXFxcLy5dKyQvLnRlc3QocmVzdCkpIHtcbiAgICAgICAgb3V0cHV0ID0gdG9rZW4uY2xvc2UgPSBgKSR7cmVzdH0pJHtleHRnbG9iU3Rhcn0pYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuLnByZXYudHlwZSA9PT0gJ2JvcycpIHtcbiAgICAgICAgc3RhdGUubmVnYXRlZEV4dGdsb2IgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1c2goeyB0eXBlOiAncGFyZW4nLCBleHRnbG9iOiB0cnVlLCB2YWx1ZSwgb3V0cHV0IH0pO1xuICAgIGRlY3JlbWVudCgncGFyZW5zJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZhc3QgcGF0aHNcbiAgICovXG5cbiAgaWYgKG9wdHMuZmFzdHBhdGhzICE9PSBmYWxzZSAmJiAhLyheWyohXXxbLygpW1xcXXt9XCJdKS8udGVzdChpbnB1dCkpIHtcbiAgICBsZXQgYmFja3NsYXNoZXMgPSBmYWxzZTtcblxuICAgIGxldCBvdXRwdXQgPSBpbnB1dC5yZXBsYWNlKFJFR0VYX1NQRUNJQUxfQ0hBUlNfQkFDS1JFRiwgKG0sIGVzYywgY2hhcnMsIGZpcnN0LCByZXN0LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGZpcnN0ID09PSAnXFxcXCcpIHtcbiAgICAgICAgYmFja3NsYXNoZXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ID09PSAnPycpIHtcbiAgICAgICAgaWYgKGVzYykge1xuICAgICAgICAgIHJldHVybiBlc2MgKyBmaXJzdCArIChyZXN0ID8gUU1BUksucmVwZWF0KHJlc3QubGVuZ3RoKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gcW1hcmtOb0RvdCArIChyZXN0ID8gUU1BUksucmVwZWF0KHJlc3QubGVuZ3RoKSA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUU1BUksucmVwZWF0KGNoYXJzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBET1RfTElURVJBTC5yZXBlYXQoY2hhcnMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0ID09PSAnKicpIHtcbiAgICAgICAgaWYgKGVzYykge1xuICAgICAgICAgIHJldHVybiBlc2MgKyBmaXJzdCArIChyZXN0ID8gc3RhciA6ICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlc2MgPyBtIDogYFxcXFwke219YDtcbiAgICB9KTtcblxuICAgIGlmIChiYWNrc2xhc2hlcyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnJlcGxhY2UoL1xcXFwrL2csIG0gPT4ge1xuICAgICAgICAgIHJldHVybiBtLmxlbmd0aCAlIDIgPT09IDAgPyAnXFxcXFxcXFwnIDogKG0gPyAnXFxcXCcgOiAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdXRwdXQgPT09IGlucHV0ICYmIG9wdHMuY29udGFpbnMgPT09IHRydWUpIHtcbiAgICAgIHN0YXRlLm91dHB1dCA9IGlucHV0O1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIHN0YXRlLm91dHB1dCA9IHV0aWxzLndyYXBPdXRwdXQob3V0cHV0LCBzdGF0ZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRva2VuaXplIGlucHV0IHVudGlsIHdlIHJlYWNoIGVuZC1vZi1zdHJpbmdcbiAgICovXG5cbiAgd2hpbGUgKCFlb3MoKSkge1xuICAgIHZhbHVlID0gYWR2YW5jZSgpO1xuXG4gICAgaWYgKHZhbHVlID09PSAnXFx1MDAwMCcpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzY2FwZWQgY2hhcmFjdGVyc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnXFxcXCcpIHtcbiAgICAgIGNvbnN0IG5leHQgPSBwZWVrKCk7XG5cbiAgICAgIGlmIChuZXh0ID09PSAnLycgJiYgb3B0cy5iYXNoICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dCA9PT0gJy4nIHx8IG5leHQgPT09ICc7Jykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgIHZhbHVlICs9ICdcXFxcJztcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBjb2xsYXBzZSBzbGFzaGVzIHRvIHJlZHVjZSBwb3RlbnRpYWwgZm9yIGV4cGxvaXRzXG4gICAgICBjb25zdCBtYXRjaCA9IC9eXFxcXCsvLmV4ZWMocmVtYWluaW5nKCkpO1xuICAgICAgbGV0IHNsYXNoZXMgPSAwO1xuXG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMF0ubGVuZ3RoID4gMikge1xuICAgICAgICBzbGFzaGVzID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICBzdGF0ZS5pbmRleCArPSBzbGFzaGVzO1xuICAgICAgICBpZiAoc2xhc2hlcyAlIDIgIT09IDApIHtcbiAgICAgICAgICB2YWx1ZSArPSAnXFxcXCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMudW5lc2NhcGUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWUgPSBhZHZhbmNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSArPSBhZHZhbmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5icmFja2V0cyA9PT0gMCkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgd2UncmUgaW5zaWRlIGEgcmVnZXggY2hhcmFjdGVyIGNsYXNzLCBjb250aW51ZVxuICAgICAqIHVudGlsIHdlIHJlYWNoIHRoZSBjbG9zaW5nIGJyYWNrZXQuXG4gICAgICovXG5cbiAgICBpZiAoc3RhdGUuYnJhY2tldHMgPiAwICYmICh2YWx1ZSAhPT0gJ10nIHx8IHByZXYudmFsdWUgPT09ICdbJyB8fCBwcmV2LnZhbHVlID09PSAnW14nKSkge1xuICAgICAgaWYgKG9wdHMucG9zaXggIT09IGZhbHNlICYmIHZhbHVlID09PSAnOicpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBwcmV2LnZhbHVlLnNsaWNlKDEpO1xuICAgICAgICBpZiAoaW5uZXIuaW5jbHVkZXMoJ1snKSkge1xuICAgICAgICAgIHByZXYucG9zaXggPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGlubmVyLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHByZXYudmFsdWUubGFzdEluZGV4T2YoJ1snKTtcbiAgICAgICAgICAgIGNvbnN0IHByZSA9IHByZXYudmFsdWUuc2xpY2UoMCwgaWR4KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBwcmV2LnZhbHVlLnNsaWNlKGlkeCArIDIpO1xuICAgICAgICAgICAgY29uc3QgcG9zaXggPSBQT1NJWF9SRUdFWF9TT1VSQ0VbcmVzdF07XG4gICAgICAgICAgICBpZiAocG9zaXgpIHtcbiAgICAgICAgICAgICAgcHJldi52YWx1ZSA9IHByZSArIHBvc2l4O1xuICAgICAgICAgICAgICBzdGF0ZS5iYWNrdHJhY2sgPSB0cnVlO1xuICAgICAgICAgICAgICBhZHZhbmNlKCk7XG5cbiAgICAgICAgICAgICAgaWYgKCFib3Mub3V0cHV0ICYmIHRva2Vucy5pbmRleE9mKHByZXYpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgYm9zLm91dHB1dCA9IE9ORV9DSEFSO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoKHZhbHVlID09PSAnWycgJiYgcGVlaygpICE9PSAnOicpIHx8ICh2YWx1ZSA9PT0gJy0nICYmIHBlZWsoKSA9PT0gJ10nKSkge1xuICAgICAgICB2YWx1ZSA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09ICddJyAmJiAocHJldi52YWx1ZSA9PT0gJ1snIHx8IHByZXYudmFsdWUgPT09ICdbXicpKSB7XG4gICAgICAgIHZhbHVlID0gYFxcXFwke3ZhbHVlfWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLnBvc2l4ID09PSB0cnVlICYmIHZhbHVlID09PSAnIScgJiYgcHJldi52YWx1ZSA9PT0gJ1snKSB7XG4gICAgICAgIHZhbHVlID0gJ14nO1xuICAgICAgfVxuXG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgYXBwZW5kKHsgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB3ZSdyZSBpbnNpZGUgYSBxdW90ZWQgc3RyaW5nLCBjb250aW51ZVxuICAgICAqIHVudGlsIHdlIHJlYWNoIHRoZSBjbG9zaW5nIGRvdWJsZSBxdW90ZS5cbiAgICAgKi9cblxuICAgIGlmIChzdGF0ZS5xdW90ZXMgPT09IDEgJiYgdmFsdWUgIT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdXRpbHMuZXNjYXBlUmVnZXgodmFsdWUpO1xuICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgIGFwcGVuZCh7IHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG91YmxlIHF1b3Rlc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnXCInKSB7XG4gICAgICBzdGF0ZS5xdW90ZXMgPSBzdGF0ZS5xdW90ZXMgPT09IDEgPyAwIDogMTtcbiAgICAgIGlmIChvcHRzLmtlZXBRdW90ZXMgPT09IHRydWUpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJlbnRoZXNlc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnKCcpIHtcbiAgICAgIGluY3JlbWVudCgncGFyZW5zJyk7XG4gICAgICBwdXNoKHsgdHlwZTogJ3BhcmVuJywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09ICcpJykge1xuICAgICAgaWYgKHN0YXRlLnBhcmVucyA9PT0gMCAmJiBvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihzeW50YXhFcnJvcignb3BlbmluZycsICcoJykpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleHRnbG9iID0gZXh0Z2xvYnNbZXh0Z2xvYnMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoZXh0Z2xvYiAmJiBzdGF0ZS5wYXJlbnMgPT09IGV4dGdsb2IucGFyZW5zICsgMSkge1xuICAgICAgICBleHRnbG9iQ2xvc2UoZXh0Z2xvYnMucG9wKCkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdwYXJlbicsIHZhbHVlLCBvdXRwdXQ6IHN0YXRlLnBhcmVucyA/ICcpJyA6ICdcXFxcKScgfSk7XG4gICAgICBkZWNyZW1lbnQoJ3BhcmVucycpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3F1YXJlIGJyYWNrZXRzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICdbJykge1xuICAgICAgaWYgKG9wdHMubm9icmFja2V0ID09PSB0cnVlIHx8ICFyZW1haW5pbmcoKS5pbmNsdWRlcygnXScpKSB7XG4gICAgICAgIGlmIChvcHRzLm5vYnJhY2tldCAhPT0gdHJ1ZSAmJiBvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdjbG9zaW5nJywgJ10nKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5jcmVtZW50KCdicmFja2V0cycpO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2JyYWNrZXQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gJ10nKSB7XG4gICAgICBpZiAob3B0cy5ub2JyYWNrZXQgPT09IHRydWUgfHwgKHByZXYgJiYgcHJldi50eXBlID09PSAnYnJhY2tldCcgJiYgcHJldi52YWx1ZS5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlLCBvdXRwdXQ6IGBcXFxcJHt2YWx1ZX1gIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmJyYWNrZXRzID09PSAwKSB7XG4gICAgICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdvcGVuaW5nJywgJ1snKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0OiBgXFxcXCR7dmFsdWV9YCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGRlY3JlbWVudCgnYnJhY2tldHMnKTtcblxuICAgICAgY29uc3QgcHJldlZhbHVlID0gcHJldi52YWx1ZS5zbGljZSgxKTtcbiAgICAgIGlmIChwcmV2LnBvc2l4ICE9PSB0cnVlICYmIHByZXZWYWx1ZVswXSA9PT0gJ14nICYmICFwcmV2VmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gO1xuICAgICAgfVxuXG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgYXBwZW5kKHsgdmFsdWUgfSk7XG5cbiAgICAgIC8vIHdoZW4gbGl0ZXJhbCBicmFja2V0cyBhcmUgZXhwbGljaXRseSBkaXNhYmxlZFxuICAgICAgLy8gYXNzdW1lIHdlIHNob3VsZCBtYXRjaCB3aXRoIGEgcmVnZXggY2hhcmFjdGVyIGNsYXNzXG4gICAgICBpZiAob3B0cy5saXRlcmFsQnJhY2tldHMgPT09IGZhbHNlIHx8IHV0aWxzLmhhc1JlZ2V4Q2hhcnMocHJldlZhbHVlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXNjYXBlZCA9IHV0aWxzLmVzY2FwZVJlZ2V4KHByZXYudmFsdWUpO1xuICAgICAgc3RhdGUub3V0cHV0ID0gc3RhdGUub3V0cHV0LnNsaWNlKDAsIC1wcmV2LnZhbHVlLmxlbmd0aCk7XG5cbiAgICAgIC8vIHdoZW4gbGl0ZXJhbCBicmFja2V0cyBhcmUgZXhwbGljaXRseSBlbmFibGVkXG4gICAgICAvLyBhc3N1bWUgd2Ugc2hvdWxkIGVzY2FwZSB0aGUgYnJhY2tldHMgdG8gbWF0Y2ggbGl0ZXJhbCBjaGFyYWN0ZXJzXG4gICAgICBpZiAob3B0cy5saXRlcmFsQnJhY2tldHMgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IGVzY2FwZWQ7XG4gICAgICAgIHByZXYudmFsdWUgPSBlc2NhcGVkO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gd2hlbiB0aGUgdXNlciBzcGVjaWZpZXMgbm90aGluZywgdHJ5IHRvIG1hdGNoIGJvdGhcbiAgICAgIHByZXYudmFsdWUgPSBgKCR7Y2FwdHVyZX0ke2VzY2FwZWR9fCR7cHJldi52YWx1ZX0pYDtcbiAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2LnZhbHVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnJhY2VzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICd7JyAmJiBvcHRzLm5vYnJhY2UgIT09IHRydWUpIHtcbiAgICAgIGluY3JlbWVudCgnYnJhY2VzJyk7XG5cbiAgICAgIGNvbnN0IG9wZW4gPSB7XG4gICAgICAgIHR5cGU6ICdicmFjZScsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvdXRwdXQ6ICcoJyxcbiAgICAgICAgb3V0cHV0SW5kZXg6IHN0YXRlLm91dHB1dC5sZW5ndGgsXG4gICAgICAgIHRva2Vuc0luZGV4OiBzdGF0ZS50b2tlbnMubGVuZ3RoXG4gICAgICB9O1xuXG4gICAgICBicmFjZXMucHVzaChvcGVuKTtcbiAgICAgIHB1c2gob3Blbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09ICd9Jykge1xuICAgICAgY29uc3QgYnJhY2UgPSBicmFjZXNbYnJhY2VzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAob3B0cy5ub2JyYWNlID09PSB0cnVlIHx8ICFicmFjZSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSwgb3V0cHV0OiB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGxldCBvdXRwdXQgPSAnKSc7XG5cbiAgICAgIGlmIChicmFjZS5kb3RzID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRva2Vucy5zbGljZSgpO1xuICAgICAgICBjb25zdCByYW5nZSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0b2tlbnMucG9wKCk7XG4gICAgICAgICAgaWYgKGFycltpXS50eXBlID09PSAnYnJhY2UnKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFycltpXS50eXBlICE9PSAnZG90cycpIHtcbiAgICAgICAgICAgIHJhbmdlLnVuc2hpZnQoYXJyW2ldLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQgPSBleHBhbmRSYW5nZShyYW5nZSwgb3B0cyk7XG4gICAgICAgIHN0YXRlLmJhY2t0cmFjayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChicmFjZS5jb21tYSAhPT0gdHJ1ZSAmJiBicmFjZS5kb3RzICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCBicmFjZS5vdXRwdXRJbmRleCk7XG4gICAgICAgIGNvbnN0IHRva3MgPSBzdGF0ZS50b2tlbnMuc2xpY2UoYnJhY2UudG9rZW5zSW5kZXgpO1xuICAgICAgICBicmFjZS52YWx1ZSA9IGJyYWNlLm91dHB1dCA9ICdcXFxceyc7XG4gICAgICAgIHZhbHVlID0gb3V0cHV0ID0gJ1xcXFx9JztcbiAgICAgICAgc3RhdGUub3V0cHV0ID0gb3V0O1xuICAgICAgICBmb3IgKGNvbnN0IHQgb2YgdG9rcykge1xuICAgICAgICAgIHN0YXRlLm91dHB1dCArPSAodC5vdXRwdXQgfHwgdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdicmFjZScsIHZhbHVlLCBvdXRwdXQgfSk7XG4gICAgICBkZWNyZW1lbnQoJ2JyYWNlcycpO1xuICAgICAgYnJhY2VzLnBvcCgpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGlwZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ3wnKSB7XG4gICAgICBpZiAoZXh0Z2xvYnMubGVuZ3RoID4gMCkge1xuICAgICAgICBleHRnbG9ic1tleHRnbG9icy5sZW5ndGggLSAxXS5jb25kaXRpb25zKys7XG4gICAgICB9XG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbW1hc1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnLCcpIHtcbiAgICAgIGxldCBvdXRwdXQgPSB2YWx1ZTtcblxuICAgICAgY29uc3QgYnJhY2UgPSBicmFjZXNbYnJhY2VzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGJyYWNlICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAnYnJhY2VzJykge1xuICAgICAgICBicmFjZS5jb21tYSA9IHRydWU7XG4gICAgICAgIG91dHB1dCA9ICd8JztcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdjb21tYScsIHZhbHVlLCBvdXRwdXQgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTbGFzaGVzXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09ICcvJykge1xuICAgICAgLy8gaWYgdGhlIGJlZ2lubmluZyBvZiB0aGUgZ2xvYiBpcyBcIi4vXCIsIGFkdmFuY2UgdGhlIHN0YXJ0XG4gICAgICAvLyB0byB0aGUgY3VycmVudCBpbmRleCwgYW5kIGRvbid0IGFkZCB0aGUgXCIuL1wiIGNoYXJhY3RlcnNcbiAgICAgIC8vIHRvIHRoZSBzdGF0ZS4gVGhpcyBncmVhdGx5IHNpbXBsaWZpZXMgbG9va2JlaGluZHMgd2hlblxuICAgICAgLy8gY2hlY2tpbmcgZm9yIEJPUyBjaGFyYWN0ZXJzIGxpa2UgXCIhXCIgYW5kIFwiLlwiIChub3QgXCIuL1wiKVxuICAgICAgaWYgKHByZXYudHlwZSA9PT0gJ2RvdCcgJiYgc3RhdGUuaW5kZXggPT09IHN0YXRlLnN0YXJ0ICsgMSkge1xuICAgICAgICBzdGF0ZS5zdGFydCA9IHN0YXRlLmluZGV4ICsgMTtcbiAgICAgICAgc3RhdGUuY29uc3VtZWQgPSAnJztcbiAgICAgICAgc3RhdGUub3V0cHV0ID0gJyc7XG4gICAgICAgIHRva2Vucy5wb3AoKTtcbiAgICAgICAgcHJldiA9IGJvczsgLy8gcmVzZXQgXCJwcmV2XCIgdG8gdGhlIGZpcnN0IHRva2VuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3NsYXNoJywgdmFsdWUsIG91dHB1dDogU0xBU0hfTElURVJBTCB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvdHNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJy4nKSB7XG4gICAgICBpZiAoc3RhdGUuYnJhY2VzID4gMCAmJiBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICAgIGlmIChwcmV2LnZhbHVlID09PSAnLicpIHByZXYub3V0cHV0ID0gRE9UX0xJVEVSQUw7XG4gICAgICAgIGNvbnN0IGJyYWNlID0gYnJhY2VzW2JyYWNlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgcHJldi50eXBlID0gJ2RvdHMnO1xuICAgICAgICBwcmV2Lm91dHB1dCArPSB2YWx1ZTtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgYnJhY2UuZG90cyA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHN0YXRlLmJyYWNlcyArIHN0YXRlLnBhcmVucykgPT09IDAgJiYgcHJldi50eXBlICE9PSAnYm9zJyAmJiBwcmV2LnR5cGUgIT09ICdzbGFzaCcpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUsIG91dHB1dDogRE9UX0xJVEVSQUwgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ2RvdCcsIHZhbHVlLCBvdXRwdXQ6IERPVF9MSVRFUkFMIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVlc3Rpb24gbWFya3NcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJz8nKSB7XG4gICAgICBjb25zdCBpc0dyb3VwID0gcHJldiAmJiBwcmV2LnZhbHVlID09PSAnKCc7XG4gICAgICBpZiAoIWlzR3JvdXAgJiYgb3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgcGVlaygpID09PSAnKCcgJiYgcGVlaygyKSAhPT0gJz8nKSB7XG4gICAgICAgIGV4dGdsb2JPcGVuKCdxbWFyaycsIHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2ICYmIHByZXYudHlwZSA9PT0gJ3BhcmVuJykge1xuICAgICAgICBjb25zdCBuZXh0ID0gcGVlaygpO1xuICAgICAgICBsZXQgb3V0cHV0ID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKG5leHQgPT09ICc8JyAmJiAhdXRpbHMuc3VwcG9ydHNMb29rYmVoaW5kcygpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb2RlLmpzIHYxMCBvciBoaWdoZXIgaXMgcmVxdWlyZWQgZm9yIHJlZ2V4IGxvb2tiZWhpbmRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHByZXYudmFsdWUgPT09ICcoJyAmJiAhL1shPTw6XS8udGVzdChuZXh0KSkgfHwgKG5leHQgPT09ICc8JyAmJiAhLzwoWyE9XXxcXHcrPikvLnRlc3QocmVtYWluaW5nKCkpKSkge1xuICAgICAgICAgIG91dHB1dCA9IGBcXFxcJHt2YWx1ZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUsIG91dHB1dCB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmRvdCAhPT0gdHJ1ZSAmJiAocHJldi50eXBlID09PSAnc2xhc2gnIHx8IHByZXYudHlwZSA9PT0gJ2JvcycpKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAncW1hcmsnLCB2YWx1ZSwgb3V0cHV0OiBRTUFSS19OT19ET1QgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3FtYXJrJywgdmFsdWUsIG91dHB1dDogUU1BUksgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGNsYW1hdGlvblxuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnIScpIHtcbiAgICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJykge1xuICAgICAgICBpZiAocGVlaygyKSAhPT0gJz8nIHx8ICEvWyE9PDpdLy50ZXN0KHBlZWsoMykpKSB7XG4gICAgICAgICAgZXh0Z2xvYk9wZW4oJ25lZ2F0ZScsIHZhbHVlKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5ub25lZ2F0ZSAhPT0gdHJ1ZSAmJiBzdGF0ZS5pbmRleCA9PT0gMCkge1xuICAgICAgICBuZWdhdGUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGx1c1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSAnKycpIHtcbiAgICAgIGlmIChvcHRzLm5vZXh0Z2xvYiAhPT0gdHJ1ZSAmJiBwZWVrKCkgPT09ICcoJyAmJiBwZWVrKDIpICE9PSAnPycpIHtcbiAgICAgICAgZXh0Z2xvYk9wZW4oJ3BsdXMnLCB2YWx1ZSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHByZXYgJiYgcHJldi52YWx1ZSA9PT0gJygnKSB8fCBvcHRzLnJlZ2V4ID09PSBmYWxzZSkge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3BsdXMnLCB2YWx1ZSwgb3V0cHV0OiBQTFVTX0xJVEVSQUwgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoKHByZXYgJiYgKHByZXYudHlwZSA9PT0gJ2JyYWNrZXQnIHx8IHByZXYudHlwZSA9PT0gJ3BhcmVuJyB8fCBwcmV2LnR5cGUgPT09ICdicmFjZScpKSB8fCBzdGF0ZS5wYXJlbnMgPiAwKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAncGx1cycsIHZhbHVlIH0pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdwbHVzJywgdmFsdWU6IFBMVVNfTElURVJBTCB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWluIHRleHRcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gJ0AnKSB7XG4gICAgICBpZiAob3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgcGVlaygpID09PSAnKCcgJiYgcGVlaygyKSAhPT0gJz8nKSB7XG4gICAgICAgIHB1c2goeyB0eXBlOiAnYXQnLCBleHRnbG9iOiB0cnVlLCB2YWx1ZSwgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhaW4gdGV4dFxuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlICE9PSAnKicpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJyQnIHx8IHZhbHVlID09PSAnXicpIHtcbiAgICAgICAgdmFsdWUgPSBgXFxcXCR7dmFsdWV9YDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0Y2ggPSBSRUdFWF9OT05fU1BFQ0lBTF9DSEFSUy5leGVjKHJlbWFpbmluZygpKTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB2YWx1ZSArPSBtYXRjaFswXTtcbiAgICAgICAgc3RhdGUuaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0YXJzXG4gICAgICovXG5cbiAgICBpZiAocHJldiAmJiAocHJldi50eXBlID09PSAnZ2xvYnN0YXInIHx8IHByZXYuc3RhciA9PT0gdHJ1ZSkpIHtcbiAgICAgIHByZXYudHlwZSA9ICdzdGFyJztcbiAgICAgIHByZXYuc3RhciA9IHRydWU7XG4gICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgcHJldi5vdXRwdXQgPSBzdGFyO1xuICAgICAgc3RhdGUuYmFja3RyYWNrID0gdHJ1ZTtcbiAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IHJlc3QgPSByZW1haW5pbmcoKTtcbiAgICBpZiAob3B0cy5ub2V4dGdsb2IgIT09IHRydWUgJiYgL15cXChbXj9dLy50ZXN0KHJlc3QpKSB7XG4gICAgICBleHRnbG9iT3Blbignc3RhcicsIHZhbHVlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2LnR5cGUgPT09ICdzdGFyJykge1xuICAgICAgaWYgKG9wdHMubm9nbG9ic3RhciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yID0gcHJldi5wcmV2O1xuICAgICAgY29uc3QgYmVmb3JlID0gcHJpb3IucHJldjtcbiAgICAgIGNvbnN0IGlzU3RhcnQgPSBwcmlvci50eXBlID09PSAnc2xhc2gnIHx8IHByaW9yLnR5cGUgPT09ICdib3MnO1xuICAgICAgY29uc3QgYWZ0ZXJTdGFyID0gYmVmb3JlICYmIChiZWZvcmUudHlwZSA9PT0gJ3N0YXInIHx8IGJlZm9yZS50eXBlID09PSAnZ2xvYnN0YXInKTtcblxuICAgICAgaWYgKG9wdHMuYmFzaCA9PT0gdHJ1ZSAmJiAoIWlzU3RhcnQgfHwgKHJlc3RbMF0gJiYgcmVzdFswXSAhPT0gJy8nKSkpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdzdGFyJywgdmFsdWUsIG91dHB1dDogJycgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0JyYWNlID0gc3RhdGUuYnJhY2VzID4gMCAmJiAocHJpb3IudHlwZSA9PT0gJ2NvbW1hJyB8fCBwcmlvci50eXBlID09PSAnYnJhY2UnKTtcbiAgICAgIGNvbnN0IGlzRXh0Z2xvYiA9IGV4dGdsb2JzLmxlbmd0aCAmJiAocHJpb3IudHlwZSA9PT0gJ3BpcGUnIHx8IHByaW9yLnR5cGUgPT09ICdwYXJlbicpO1xuICAgICAgaWYgKCFpc1N0YXJ0ICYmIHByaW9yLnR5cGUgIT09ICdwYXJlbicgJiYgIWlzQnJhY2UgJiYgIWlzRXh0Z2xvYikge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3N0YXInLCB2YWx1ZSwgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0cmlwIGNvbnNlY3V0aXZlIGAvKiovYFxuICAgICAgd2hpbGUgKHJlc3Quc2xpY2UoMCwgMykgPT09ICcvKionKSB7XG4gICAgICAgIGNvbnN0IGFmdGVyID0gaW5wdXRbc3RhdGUuaW5kZXggKyA0XTtcbiAgICAgICAgaWYgKGFmdGVyICYmIGFmdGVyICE9PSAnLycpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXN0ID0gcmVzdC5zbGljZSgzKTtcbiAgICAgICAgY29uc3VtZSgnLyoqJywgMyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnYm9zJyAmJiBlb3MoKSkge1xuICAgICAgICBwcmV2LnR5cGUgPSAnZ2xvYnN0YXInO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBwcmV2Lm91dHB1dCA9IGdsb2JzdGFyKG9wdHMpO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBwcmV2Lm91dHB1dDtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnc2xhc2gnICYmIHByaW9yLnByZXYudHlwZSAhPT0gJ2JvcycgJiYgIWFmdGVyU3RhciAmJiBlb3MoKSkge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLShwcmlvci5vdXRwdXQgKyBwcmV2Lm91dHB1dCkubGVuZ3RoKTtcbiAgICAgICAgcHJpb3Iub3V0cHV0ID0gYCg/OiR7cHJpb3Iub3V0cHV0fWA7XG5cbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi5vdXRwdXQgPSBnbG9ic3RhcihvcHRzKSArIChvcHRzLnN0cmljdFNsYXNoZXMgPyAnKScgOiAnfCQpJyk7XG4gICAgICAgIHByZXYudmFsdWUgKz0gdmFsdWU7XG4gICAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IHByaW9yLm91dHB1dCArIHByZXYub3V0cHV0O1xuICAgICAgICBjb25zdW1lKHZhbHVlKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnc2xhc2gnICYmIHByaW9yLnByZXYudHlwZSAhPT0gJ2JvcycgJiYgcmVzdFswXSA9PT0gJy8nKSB7XG4gICAgICAgIGNvbnN0IGVuZCA9IHJlc3RbMV0gIT09IHZvaWQgMCA/ICd8JCcgOiAnJztcblxuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBzdGF0ZS5vdXRwdXQuc2xpY2UoMCwgLShwcmlvci5vdXRwdXQgKyBwcmV2Lm91dHB1dCkubGVuZ3RoKTtcbiAgICAgICAgcHJpb3Iub3V0cHV0ID0gYCg/OiR7cHJpb3Iub3V0cHV0fWA7XG5cbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi5vdXRwdXQgPSBgJHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9fCR7U0xBU0hfTElURVJBTH0ke2VuZH0pYDtcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcblxuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gcHJpb3Iub3V0cHV0ICsgcHJldi5vdXRwdXQ7XG4gICAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcblxuICAgICAgICBjb25zdW1lKHZhbHVlICsgYWR2YW5jZSgpKTtcblxuICAgICAgICBwdXNoKHsgdHlwZTogJ3NsYXNoJywgdmFsdWU6ICcvJywgb3V0cHV0OiAnJyB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmlvci50eXBlID09PSAnYm9zJyAmJiByZXN0WzBdID09PSAnLycpIHtcbiAgICAgICAgcHJldi50eXBlID0gJ2dsb2JzdGFyJztcbiAgICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgcHJldi5vdXRwdXQgPSBgKD86Xnwke1NMQVNIX0xJVEVSQUx9fCR7Z2xvYnN0YXIob3B0cyl9JHtTTEFTSF9MSVRFUkFMfSlgO1xuICAgICAgICBzdGF0ZS5vdXRwdXQgPSBwcmV2Lm91dHB1dDtcbiAgICAgICAgc3RhdGUuZ2xvYnN0YXIgPSB0cnVlO1xuICAgICAgICBjb25zdW1lKHZhbHVlICsgYWR2YW5jZSgpKTtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICdzbGFzaCcsIHZhbHVlOiAnLycsIG91dHB1dDogJycgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgc2luZ2xlIHN0YXIgZnJvbSBvdXRwdXRcbiAgICAgIHN0YXRlLm91dHB1dCA9IHN0YXRlLm91dHB1dC5zbGljZSgwLCAtcHJldi5vdXRwdXQubGVuZ3RoKTtcblxuICAgICAgLy8gcmVzZXQgcHJldmlvdXMgdG9rZW4gdG8gZ2xvYnN0YXJcbiAgICAgIHByZXYudHlwZSA9ICdnbG9ic3Rhcic7XG4gICAgICBwcmV2Lm91dHB1dCA9IGdsb2JzdGFyKG9wdHMpO1xuICAgICAgcHJldi52YWx1ZSArPSB2YWx1ZTtcblxuICAgICAgLy8gcmVzZXQgb3V0cHV0IHdpdGggZ2xvYnN0YXJcbiAgICAgIHN0YXRlLm91dHB1dCArPSBwcmV2Lm91dHB1dDtcbiAgICAgIHN0YXRlLmdsb2JzdGFyID0gdHJ1ZTtcbiAgICAgIGNvbnN1bWUodmFsdWUpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgdG9rZW4gPSB7IHR5cGU6ICdzdGFyJywgdmFsdWUsIG91dHB1dDogc3RhciB9O1xuXG4gICAgaWYgKG9wdHMuYmFzaCA9PT0gdHJ1ZSkge1xuICAgICAgdG9rZW4ub3V0cHV0ID0gJy4qPyc7XG4gICAgICBpZiAocHJldi50eXBlID09PSAnYm9zJyB8fCBwcmV2LnR5cGUgPT09ICdzbGFzaCcpIHtcbiAgICAgICAgdG9rZW4ub3V0cHV0ID0gbm9kb3QgKyB0b2tlbi5vdXRwdXQ7XG4gICAgICB9XG4gICAgICBwdXNoKHRva2VuKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcmV2ICYmIChwcmV2LnR5cGUgPT09ICdicmFja2V0JyB8fCBwcmV2LnR5cGUgPT09ICdwYXJlbicpICYmIG9wdHMucmVnZXggPT09IHRydWUpIHtcbiAgICAgIHRva2VuLm91dHB1dCA9IHZhbHVlO1xuICAgICAgcHVzaCh0b2tlbik7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuaW5kZXggPT09IHN0YXRlLnN0YXJ0IHx8IHByZXYudHlwZSA9PT0gJ3NsYXNoJyB8fCBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICBpZiAocHJldi50eXBlID09PSAnZG90Jykge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gTk9fRE9UX1NMQVNIO1xuICAgICAgICBwcmV2Lm91dHB1dCArPSBOT19ET1RfU0xBU0g7XG5cbiAgICAgIH0gZWxzZSBpZiAob3B0cy5kb3QgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IE5PX0RPVFNfU0xBU0g7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IE5PX0RPVFNfU0xBU0g7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLm91dHB1dCArPSBub2RvdDtcbiAgICAgICAgcHJldi5vdXRwdXQgKz0gbm9kb3Q7XG4gICAgICB9XG5cbiAgICAgIGlmIChwZWVrKCkgIT09ICcqJykge1xuICAgICAgICBzdGF0ZS5vdXRwdXQgKz0gT05FX0NIQVI7XG4gICAgICAgIHByZXYub3V0cHV0ICs9IE9ORV9DSEFSO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1c2godG9rZW4pO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLmJyYWNrZXRzID4gMCkge1xuICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnXScpKTtcbiAgICBzdGF0ZS5vdXRwdXQgPSB1dGlscy5lc2NhcGVMYXN0KHN0YXRlLm91dHB1dCwgJ1snKTtcbiAgICBkZWNyZW1lbnQoJ2JyYWNrZXRzJyk7XG4gIH1cblxuICB3aGlsZSAoc3RhdGUucGFyZW5zID4gMCkge1xuICAgIGlmIChvcHRzLnN0cmljdEJyYWNrZXRzID09PSB0cnVlKSB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3ludGF4RXJyb3IoJ2Nsb3NpbmcnLCAnKScpKTtcbiAgICBzdGF0ZS5vdXRwdXQgPSB1dGlscy5lc2NhcGVMYXN0KHN0YXRlLm91dHB1dCwgJygnKTtcbiAgICBkZWNyZW1lbnQoJ3BhcmVucycpO1xuICB9XG5cbiAgd2hpbGUgKHN0YXRlLmJyYWNlcyA+IDApIHtcbiAgICBpZiAob3B0cy5zdHJpY3RCcmFja2V0cyA9PT0gdHJ1ZSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN5bnRheEVycm9yKCdjbG9zaW5nJywgJ30nKSk7XG4gICAgc3RhdGUub3V0cHV0ID0gdXRpbHMuZXNjYXBlTGFzdChzdGF0ZS5vdXRwdXQsICd7Jyk7XG4gICAgZGVjcmVtZW50KCdicmFjZXMnKTtcbiAgfVxuXG4gIGlmIChvcHRzLnN0cmljdFNsYXNoZXMgIT09IHRydWUgJiYgKHByZXYudHlwZSA9PT0gJ3N0YXInIHx8IHByZXYudHlwZSA9PT0gJ2JyYWNrZXQnKSkge1xuICAgIHB1c2goeyB0eXBlOiAnbWF5YmVfc2xhc2gnLCB2YWx1ZTogJycsIG91dHB1dDogYCR7U0xBU0hfTElURVJBTH0/YCB9KTtcbiAgfVxuXG4gIC8vIHJlYnVpbGQgdGhlIG91dHB1dCBpZiB3ZSBoYWQgdG8gYmFja3RyYWNrIGF0IGFueSBwb2ludFxuICBpZiAoc3RhdGUuYmFja3RyYWNrID09PSB0cnVlKSB7XG4gICAgc3RhdGUub3V0cHV0ID0gJyc7XG5cbiAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHN0YXRlLnRva2Vucykge1xuICAgICAgc3RhdGUub3V0cHV0ICs9IHRva2VuLm91dHB1dCAhPSBudWxsID8gdG9rZW4ub3V0cHV0IDogdG9rZW4udmFsdWU7XG5cbiAgICAgIGlmICh0b2tlbi5zdWZmaXgpIHtcbiAgICAgICAgc3RhdGUub3V0cHV0ICs9IHRva2VuLnN1ZmZpeDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG4vKipcbiAqIEZhc3QgcGF0aHMgZm9yIGNyZWF0aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZm9yIGNvbW1vbiBnbG9iIHBhdHRlcm5zLlxuICogVGhpcyBjYW4gc2lnbmlmaWNhbnRseSBzcGVlZCB1cCBwcm9jZXNzaW5nIGFuZCBoYXMgdmVyeSBsaXR0bGUgZG93bnNpZGVcbiAqIGltcGFjdCB3aGVuIG5vbmUgb2YgdGhlIGZhc3QgcGF0aHMgbWF0Y2guXG4gKi9cblxucGFyc2UuZmFzdHBhdGhzID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB7IC4uLm9wdGlvbnMgfTtcbiAgY29uc3QgbWF4ID0gdHlwZW9mIG9wdHMubWF4TGVuZ3RoID09PSAnbnVtYmVyJyA/IE1hdGgubWluKE1BWF9MRU5HVEgsIG9wdHMubWF4TGVuZ3RoKSA6IE1BWF9MRU5HVEg7XG4gIGNvbnN0IGxlbiA9IGlucHV0Lmxlbmd0aDtcbiAgaWYgKGxlbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgSW5wdXQgbGVuZ3RoOiAke2xlbn0sIGV4Y2VlZHMgbWF4aW11bSBhbGxvd2VkIGxlbmd0aDogJHttYXh9YCk7XG4gIH1cblxuICBpbnB1dCA9IFJFUExBQ0VNRU5UU1tpbnB1dF0gfHwgaW5wdXQ7XG4gIGNvbnN0IHdpbjMyID0gdXRpbHMuaXNXaW5kb3dzKG9wdGlvbnMpO1xuXG4gIC8vIGNyZWF0ZSBjb25zdGFudHMgYmFzZWQgb24gcGxhdGZvcm0sIGZvciB3aW5kb3dzIG9yIHBvc2l4XG4gIGNvbnN0IHtcbiAgICBET1RfTElURVJBTCxcbiAgICBTTEFTSF9MSVRFUkFMLFxuICAgIE9ORV9DSEFSLFxuICAgIERPVFNfU0xBU0gsXG4gICAgTk9fRE9ULFxuICAgIE5PX0RPVFMsXG4gICAgTk9fRE9UU19TTEFTSCxcbiAgICBTVEFSLFxuICAgIFNUQVJUX0FOQ0hPUlxuICB9ID0gY29uc3RhbnRzLmdsb2JDaGFycyh3aW4zMik7XG5cbiAgY29uc3Qgbm9kb3QgPSBvcHRzLmRvdCA/IE5PX0RPVFMgOiBOT19ET1Q7XG4gIGNvbnN0IHNsYXNoRG90ID0gb3B0cy5kb3QgPyBOT19ET1RTX1NMQVNIIDogTk9fRE9UO1xuICBjb25zdCBjYXB0dXJlID0gb3B0cy5jYXB0dXJlID8gJycgOiAnPzonO1xuICBjb25zdCBzdGF0ZSA9IHsgbmVnYXRlZDogZmFsc2UsIHByZWZpeDogJycgfTtcbiAgbGV0IHN0YXIgPSBvcHRzLmJhc2ggPT09IHRydWUgPyAnLio/JyA6IFNUQVI7XG5cbiAgaWYgKG9wdHMuY2FwdHVyZSkge1xuICAgIHN0YXIgPSBgKCR7c3Rhcn0pYDtcbiAgfVxuXG4gIGNvbnN0IGdsb2JzdGFyID0gb3B0cyA9PiB7XG4gICAgaWYgKG9wdHMubm9nbG9ic3RhciA9PT0gdHJ1ZSkgcmV0dXJuIHN0YXI7XG4gICAgcmV0dXJuIGAoJHtjYXB0dXJlfSg/Oig/ISR7U1RBUlRfQU5DSE9SfSR7b3B0cy5kb3QgPyBET1RTX1NMQVNIIDogRE9UX0xJVEVSQUx9KS4pKj8pYDtcbiAgfTtcblxuICBjb25zdCBjcmVhdGUgPSBzdHIgPT4ge1xuICAgIHN3aXRjaCAoc3RyKSB7XG4gICAgICBjYXNlICcqJzpcbiAgICAgICAgcmV0dXJuIGAke25vZG90fSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJy4qJzpcbiAgICAgICAgcmV0dXJuIGAke0RPVF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyouKic6XG4gICAgICAgIHJldHVybiBgJHtub2RvdH0ke3N0YXJ9JHtET1RfTElURVJBTH0ke09ORV9DSEFSfSR7c3Rhcn1gO1xuXG4gICAgICBjYXNlICcqLyonOlxuICAgICAgICByZXR1cm4gYCR7bm9kb3R9JHtzdGFyfSR7U0xBU0hfTElURVJBTH0ke09ORV9DSEFSfSR7c2xhc2hEb3R9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyoqJzpcbiAgICAgICAgcmV0dXJuIG5vZG90ICsgZ2xvYnN0YXIob3B0cyk7XG5cbiAgICAgIGNhc2UgJyoqLyonOlxuICAgICAgICByZXR1cm4gYCg/OiR7bm9kb3R9JHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9KT8ke3NsYXNoRG90fSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGNhc2UgJyoqLyouKic6XG4gICAgICAgIHJldHVybiBgKD86JHtub2RvdH0ke2dsb2JzdGFyKG9wdHMpfSR7U0xBU0hfTElURVJBTH0pPyR7c2xhc2hEb3R9JHtzdGFyfSR7RE9UX0xJVEVSQUx9JHtPTkVfQ0hBUn0ke3N0YXJ9YDtcblxuICAgICAgY2FzZSAnKiovLionOlxuICAgICAgICByZXR1cm4gYCg/OiR7bm9kb3R9JHtnbG9ic3RhcihvcHRzKX0ke1NMQVNIX0xJVEVSQUx9KT8ke0RPVF9MSVRFUkFMfSR7T05FX0NIQVJ9JHtzdGFyfWA7XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAvXiguKj8pXFwuKFxcdyspJC8uZXhlYyhzdHIpO1xuICAgICAgICBpZiAoIW1hdGNoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gY3JlYXRlKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCFzb3VyY2UpIHJldHVybjtcblxuICAgICAgICByZXR1cm4gc291cmNlICsgRE9UX0xJVEVSQUwgKyBtYXRjaFsyXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb3V0cHV0ID0gdXRpbHMucmVtb3ZlUHJlZml4KGlucHV0LCBzdGF0ZSk7XG4gIGxldCBzb3VyY2UgPSBjcmVhdGUob3V0cHV0KTtcblxuICBpZiAoc291cmNlICYmIG9wdHMuc3RyaWN0U2xhc2hlcyAhPT0gdHJ1ZSkge1xuICAgIHNvdXJjZSArPSBgJHtTTEFTSF9MSVRFUkFMfT9gO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3Qgc2NhbiA9IHJlcXVpcmUoJy4vc2NhbicpO1xuY29uc3QgcGFyc2UgPSByZXF1aXJlKCcuL3BhcnNlJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbmNvbnN0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5jb25zdCBpc09iamVjdCA9IHZhbCA9PiB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0Y2hlciBmdW5jdGlvbiBmcm9tIG9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMuIFRoZVxuICogcmV0dXJuZWQgZnVuY3Rpb24gdGFrZXMgYSBzdHJpbmcgdG8gbWF0Y2ggYXMgaXRzIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGlzIGEgbWF0Y2guIFRoZSByZXR1cm5lZCBtYXRjaGVyXG4gKiBmdW5jdGlvbiBhbHNvIHRha2VzIGEgYm9vbGVhbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRoYXQsIHdoZW4gdHJ1ZSxcbiAqIHJldHVybnMgYW4gb2JqZWN0IHdpdGggYWRkaXRpb25hbCBpbmZvcm1hdGlvbi5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2goZ2xvYlssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCBpc01hdGNoID0gcGljb21hdGNoKCcqLiEoKmEpJyk7XG4gKiBjb25zb2xlLmxvZyhpc01hdGNoKCdhLmEnKSk7IC8vPT4gZmFsc2VcbiAqIGNvbnNvbGUubG9nKGlzTWF0Y2goJ2EuYicpKTsgLy89PiB0cnVlXG4gKiBgYGBcbiAqIEBuYW1lIHBpY29tYXRjaFxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBnbG9ic2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucy5cbiAqIEBwYXJhbSB7T2JqZWN0PX0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtGdW5jdGlvbj19IFJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5jb25zdCBwaWNvbWF0Y2ggPSAoZ2xvYiwgb3B0aW9ucywgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iKSkge1xuICAgIGNvbnN0IGZucyA9IGdsb2IubWFwKGlucHV0ID0+IHBpY29tYXRjaChpbnB1dCwgb3B0aW9ucywgcmV0dXJuU3RhdGUpKTtcbiAgICBjb25zdCBhcnJheU1hdGNoZXIgPSBzdHIgPT4ge1xuICAgICAgZm9yIChjb25zdCBpc01hdGNoIG9mIGZucykge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGlzTWF0Y2goc3RyKTtcbiAgICAgICAgaWYgKHN0YXRlKSByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlNYXRjaGVyO1xuICB9XG5cbiAgY29uc3QgaXNTdGF0ZSA9IGlzT2JqZWN0KGdsb2IpICYmIGdsb2IudG9rZW5zICYmIGdsb2IuaW5wdXQ7XG5cbiAgaWYgKGdsb2IgPT09ICcnIHx8ICh0eXBlb2YgZ2xvYiAhPT0gJ3N0cmluZycgJiYgIWlzU3RhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgcGF0dGVybiB0byBiZSBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBwb3NpeCA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKTtcbiAgY29uc3QgcmVnZXggPSBpc1N0YXRlXG4gICAgPyBwaWNvbWF0Y2guY29tcGlsZVJlKGdsb2IsIG9wdGlvbnMpXG4gICAgOiBwaWNvbWF0Y2gubWFrZVJlKGdsb2IsIG9wdGlvbnMsIGZhbHNlLCB0cnVlKTtcblxuICBjb25zdCBzdGF0ZSA9IHJlZ2V4LnN0YXRlO1xuICBkZWxldGUgcmVnZXguc3RhdGU7XG5cbiAgbGV0IGlzSWdub3JlZCA9ICgpID0+IGZhbHNlO1xuICBpZiAob3B0cy5pZ25vcmUpIHtcbiAgICBjb25zdCBpZ25vcmVPcHRzID0geyAuLi5vcHRpb25zLCBpZ25vcmU6IG51bGwsIG9uTWF0Y2g6IG51bGwsIG9uUmVzdWx0OiBudWxsIH07XG4gICAgaXNJZ25vcmVkID0gcGljb21hdGNoKG9wdHMuaWdub3JlLCBpZ25vcmVPcHRzLCByZXR1cm5TdGF0ZSk7XG4gIH1cblxuICBjb25zdCBtYXRjaGVyID0gKGlucHV0LCByZXR1cm5PYmplY3QgPSBmYWxzZSkgPT4ge1xuICAgIGNvbnN0IHsgaXNNYXRjaCwgbWF0Y2gsIG91dHB1dCB9ID0gcGljb21hdGNoLnRlc3QoaW5wdXQsIHJlZ2V4LCBvcHRpb25zLCB7IGdsb2IsIHBvc2l4IH0pO1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgZ2xvYiwgc3RhdGUsIHJlZ2V4LCBwb3NpeCwgaW5wdXQsIG91dHB1dCwgbWF0Y2gsIGlzTWF0Y2ggfTtcblxuICAgIGlmICh0eXBlb2Ygb3B0cy5vblJlc3VsdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3B0cy5vblJlc3VsdChyZXN1bHQpO1xuICAgIH1cblxuICAgIGlmIChpc01hdGNoID09PSBmYWxzZSkge1xuICAgICAgcmVzdWx0LmlzTWF0Y2ggPSBmYWxzZTtcbiAgICAgIHJldHVybiByZXR1cm5PYmplY3QgPyByZXN1bHQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNJZ25vcmVkKGlucHV0KSkge1xuICAgICAgaWYgKHR5cGVvZiBvcHRzLm9uSWdub3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdHMub25JZ25vcmUocmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5pc01hdGNoID0gZmFsc2U7XG4gICAgICByZXR1cm4gcmV0dXJuT2JqZWN0ID8gcmVzdWx0IDogZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLm9uTWF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdHMub25NYXRjaChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuT2JqZWN0ID8gcmVzdWx0IDogdHJ1ZTtcbiAgfTtcblxuICBpZiAocmV0dXJuU3RhdGUpIHtcbiAgICBtYXRjaGVyLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcjtcbn07XG5cbi8qKlxuICogVGVzdCBgaW5wdXRgIHdpdGggdGhlIGdpdmVuIGByZWdleGAuIFRoaXMgaXMgdXNlZCBieSB0aGUgbWFpblxuICogYHBpY29tYXRjaCgpYCBmdW5jdGlvbiB0byB0ZXN0IHRoZSBpbnB1dCBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogLy8gcGljb21hdGNoLnRlc3QoaW5wdXQsIHJlZ2V4Wywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC50ZXN0KCdmb28vYmFyJywgL14oPzooW14vXSo/KVxcLyhbXi9dKj8pKSQvKSk7XG4gKiAvLyB7IGlzTWF0Y2g6IHRydWUsIG1hdGNoOiBbICdmb28vJywgJ2ZvbycsICdiYXInIF0sIG91dHB1dDogJ2Zvby9iYXInIH1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgU3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gYHJlZ2V4YFxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1hdGNoaW5nIGluZm8uXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbnBpY29tYXRjaC50ZXN0ID0gKGlucHV0LCByZWdleCwgb3B0aW9ucywgeyBnbG9iLCBwb3NpeCB9ID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBpbnB1dCB0byBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKGlucHV0ID09PSAnJykge1xuICAgIHJldHVybiB7IGlzTWF0Y2g6IGZhbHNlLCBvdXRwdXQ6ICcnIH07XG4gIH1cblxuICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3QgZm9ybWF0ID0gb3B0cy5mb3JtYXQgfHwgKHBvc2l4ID8gdXRpbHMudG9Qb3NpeFNsYXNoZXMgOiBudWxsKTtcbiAgbGV0IG1hdGNoID0gaW5wdXQgPT09IGdsb2I7XG4gIGxldCBvdXRwdXQgPSAobWF0Y2ggJiYgZm9ybWF0KSA/IGZvcm1hdChpbnB1dCkgOiBpbnB1dDtcblxuICBpZiAobWF0Y2ggPT09IGZhbHNlKSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0ID8gZm9ybWF0KGlucHV0KSA6IGlucHV0O1xuICAgIG1hdGNoID0gb3V0cHV0ID09PSBnbG9iO1xuICB9XG5cbiAgaWYgKG1hdGNoID09PSBmYWxzZSB8fCBvcHRzLmNhcHR1cmUgPT09IHRydWUpIHtcbiAgICBpZiAob3B0cy5tYXRjaEJhc2UgPT09IHRydWUgfHwgb3B0cy5iYXNlbmFtZSA9PT0gdHJ1ZSkge1xuICAgICAgbWF0Y2ggPSBwaWNvbWF0Y2gubWF0Y2hCYXNlKGlucHV0LCByZWdleCwgb3B0aW9ucywgcG9zaXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtYXRjaCA9IHJlZ2V4LmV4ZWMob3V0cHV0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBpc01hdGNoOiBCb29sZWFuKG1hdGNoKSwgbWF0Y2gsIG91dHB1dCB9O1xufTtcblxuLyoqXG4gKiBNYXRjaCB0aGUgYmFzZW5hbWUgb2YgYSBmaWxlcGF0aC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2gubWF0Y2hCYXNlKGlucHV0LCBnbG9iWywgb3B0aW9uc10pO1xuICogY29uc29sZS5sb2cocGljb21hdGNoLm1hdGNoQmFzZSgnZm9vL2Jhci5qcycsICcqLmpzJyk7IC8vIHRydWVcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgU3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxTdHJpbmd9IGBnbG9iYCBHbG9iIHBhdHRlcm4gb3IgcmVnZXggY3JlYXRlZCBieSBbLm1ha2VSZV0oI21ha2VSZSkuXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gubWF0Y2hCYXNlID0gKGlucHV0LCBnbG9iLCBvcHRpb25zLCBwb3NpeCA9IHV0aWxzLmlzV2luZG93cyhvcHRpb25zKSkgPT4ge1xuICBjb25zdCByZWdleCA9IGdsb2IgaW5zdGFuY2VvZiBSZWdFeHAgPyBnbG9iIDogcGljb21hdGNoLm1ha2VSZShnbG9iLCBvcHRpb25zKTtcbiAgcmV0dXJuIHJlZ2V4LnRlc3QocGF0aC5iYXNlbmFtZShpbnB1dCkpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgKiphbnkqKiBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgIG1hdGNoIHRoZSBzcGVjaWZpZWQgYHN0cmluZ2AuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuICogLy8gcGljb21hdGNoLmlzTWF0Y2goc3RyaW5nLCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2guaXNNYXRjaCgnYS5hJywgWydiLionLCAnKi5hJ10pKTsgLy89PiB0cnVlXG4gKiBjb25zb2xlLmxvZyhwaWNvbWF0Y2guaXNNYXRjaCgnYS5hJywgJ2IuKicpKTsgLy89PiBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gc3RyIFRoZSBzdHJpbmcgdG8gdGVzdC5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBwYXR0ZXJucyBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKS5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbnkgcGF0dGVybnMgbWF0Y2ggYHN0cmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLmlzTWF0Y2ggPSAoc3RyLCBwYXR0ZXJucywgb3B0aW9ucykgPT4gcGljb21hdGNoKHBhdHRlcm5zLCBvcHRpb25zKShzdHIpO1xuXG4vKipcbiAqIFBhcnNlIGEgZ2xvYiBwYXR0ZXJuIHRvIGNyZWF0ZSB0aGUgc291cmNlIHN0cmluZyBmb3IgYSByZWd1bGFyXG4gKiBleHByZXNzaW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIGNvbnN0IHJlc3VsdCA9IHBpY29tYXRjaC5wYXJzZShwYXR0ZXJuWywgb3B0aW9uc10pO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggdXNlZnVsIHByb3BlcnRpZXMgYW5kIG91dHB1dCB0byBiZSB1c2VkIGFzIGEgcmVnZXggc291cmNlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLnBhcnNlID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHJldHVybiBwYXR0ZXJuLm1hcChwID0+IHBpY29tYXRjaC5wYXJzZShwLCBvcHRpb25zKSk7XG4gIHJldHVybiBwYXJzZShwYXR0ZXJuLCB7IC4uLm9wdGlvbnMsIGZhc3RwYXRoczogZmFsc2UgfSk7XG59O1xuXG4vKipcbiAqIFNjYW4gYSBnbG9iIHBhdHRlcm4gdG8gc2VwYXJhdGUgdGhlIHBhdHRlcm4gaW50byBzZWdtZW50cy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2guc2NhbihpbnB1dFssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCByZXN1bHQgPSBwaWNvbWF0Y2guc2NhbignIS4vZm9vLyouanMnKTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gKiB7IHByZWZpeDogJyEuLycsXG4gKiAgIGlucHV0OiAnIS4vZm9vLyouanMnLFxuICogICBzdGFydDogMyxcbiAqICAgYmFzZTogJ2ZvbycsXG4gKiAgIGdsb2I6ICcqLmpzJyxcbiAqICAgaXNCcmFjZTogZmFsc2UsXG4gKiAgIGlzQnJhY2tldDogZmFsc2UsXG4gKiAgIGlzR2xvYjogdHJ1ZSxcbiAqICAgaXNFeHRnbG9iOiBmYWxzZSxcbiAqICAgaXNHbG9ic3RhcjogZmFsc2UsXG4gKiAgIG5lZ2F0ZWQ6IHRydWUgfVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBHbG9iIHBhdHRlcm4gdG8gc2Nhbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgd2l0aFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2guc2NhbiA9IChpbnB1dCwgb3B0aW9ucykgPT4gc2NhbihpbnB1dCwgb3B0aW9ucyk7XG5cbi8qKlxuICogQ29tcGlsZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBmcm9tIHRoZSBgc3RhdGVgIG9iamVjdCByZXR1cm5lZCBieSB0aGVcbiAqIFtwYXJzZSgpXSgjcGFyc2UpIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYHN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHBhcmFtIHtCb29sZWFufSBgcmV0dXJuT3V0cHV0YCBJbnRlbmRlZCBmb3IgaW1wbGVtZW50b3JzLCB0aGlzIGFyZ3VtZW50IGFsbG93cyB5b3UgdG8gcmV0dXJuIHRoZSByYXcgb3V0cHV0IGZyb20gdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYHJldHVyblN0YXRlYCBBZGRzIHRoZSBzdGF0ZSB0byBhIGBzdGF0ZWAgcHJvcGVydHkgb24gdGhlIHJldHVybmVkIHJlZ2V4LiBVc2VmdWwgZm9yIGltcGxlbWVudG9ycyBhbmQgZGVidWdnaW5nLlxuICogQHJldHVybiB7UmVnRXhwfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2guY29tcGlsZVJlID0gKHN0YXRlLCBvcHRpb25zLCByZXR1cm5PdXRwdXQgPSBmYWxzZSwgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAocmV0dXJuT3V0cHV0ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHN0YXRlLm91dHB1dDtcbiAgfVxuXG4gIGNvbnN0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBwcmVwZW5kID0gb3B0cy5jb250YWlucyA/ICcnIDogJ14nO1xuICBjb25zdCBhcHBlbmQgPSBvcHRzLmNvbnRhaW5zID8gJycgOiAnJCc7XG5cbiAgbGV0IHNvdXJjZSA9IGAke3ByZXBlbmR9KD86JHtzdGF0ZS5vdXRwdXR9KSR7YXBwZW5kfWA7XG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5uZWdhdGVkID09PSB0cnVlKSB7XG4gICAgc291cmNlID0gYF4oPyEke3NvdXJjZX0pLiokYDtcbiAgfVxuXG4gIGNvbnN0IHJlZ2V4ID0gcGljb21hdGNoLnRvUmVnZXgoc291cmNlLCBvcHRpb25zKTtcbiAgaWYgKHJldHVyblN0YXRlID09PSB0cnVlKSB7XG4gICAgcmVnZXguc3RhdGUgPSBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiByZWdleDtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGZyb20gYSBwYXJzZWQgZ2xvYiBwYXR0ZXJuLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gcGljb21hdGNoLnBhcnNlKCcqLmpzJyk7XG4gKiAvLyBwaWNvbWF0Y2guY29tcGlsZVJlKHN0YXRlWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKHBpY29tYXRjaC5jb21waWxlUmUoc3RhdGUpKTtcbiAqIC8vPT4gL14oPzooPyFcXC4pKD89LilbXi9dKj9cXC5qcykkL1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0YXRlYCBUaGUgb2JqZWN0IHJldHVybmVkIGZyb20gdGhlIGAucGFyc2VgIG1ldGhvZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYHJldHVybk91dHB1dGAgSW1wbGVtZW50b3JzIG1heSB1c2UgdGhpcyBhcmd1bWVudCB0byByZXR1cm4gdGhlIGNvbXBpbGVkIG91dHB1dCwgaW5zdGVhZCBvZiBhIHJlZ3VsYXIgZXhwcmVzc2lvbi4gVGhpcyBpcyBub3QgZXhwb3NlZCBvbiB0aGUgb3B0aW9ucyB0byBwcmV2ZW50IGVuZC11c2VycyBmcm9tIG11dGF0aW5nIHRoZSByZXN1bHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGByZXR1cm5TdGF0ZWAgSW1wbGVtZW50b3JzIG1heSB1c2UgdGhpcyBhcmd1bWVudCB0byByZXR1cm4gdGhlIHN0YXRlIGZyb20gdGhlIHBhcnNlZCBnbG9iIHdpdGggdGhlIHJldHVybmVkIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm4ge1JlZ0V4cH0gUmV0dXJucyBhIHJlZ2V4IGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxucGljb21hdGNoLm1ha2VSZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9LCByZXR1cm5PdXRwdXQgPSBmYWxzZSwgcmV0dXJuU3RhdGUgPSBmYWxzZSkgPT4ge1xuICBpZiAoIWlucHV0IHx8IHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIG5vbi1lbXB0eSBzdHJpbmcnKTtcbiAgfVxuXG4gIGxldCBwYXJzZWQgPSB7IG5lZ2F0ZWQ6IGZhbHNlLCBmYXN0cGF0aHM6IHRydWUgfTtcblxuICBpZiAob3B0aW9ucy5mYXN0cGF0aHMgIT09IGZhbHNlICYmIChpbnB1dFswXSA9PT0gJy4nIHx8IGlucHV0WzBdID09PSAnKicpKSB7XG4gICAgcGFyc2VkLm91dHB1dCA9IHBhcnNlLmZhc3RwYXRocyhpbnB1dCwgb3B0aW9ucyk7XG4gIH1cblxuICBpZiAoIXBhcnNlZC5vdXRwdXQpIHtcbiAgICBwYXJzZWQgPSBwYXJzZShpbnB1dCwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gcGljb21hdGNoLmNvbXBpbGVSZShwYXJzZWQsIG9wdGlvbnMsIHJldHVybk91dHB1dCwgcmV0dXJuU3RhdGUpO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gZnJvbSB0aGUgZ2l2ZW4gcmVnZXggc291cmNlIHN0cmluZy5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgcGljb21hdGNoID0gcmVxdWlyZSgncGljb21hdGNoJyk7XG4gKiAvLyBwaWNvbWF0Y2gudG9SZWdleChzb3VyY2VbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc3QgeyBvdXRwdXQgfSA9IHBpY29tYXRjaC5wYXJzZSgnKi5qcycpO1xuICogY29uc29sZS5sb2cocGljb21hdGNoLnRvUmVnZXgob3V0cHV0KSk7XG4gKiAvLz0+IC9eKD86KD8hXFwuKSg/PS4pW14vXSo/XFwuanMpJC9cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBzb3VyY2VgIFJlZ3VsYXIgZXhwcmVzc2lvbiBzb3VyY2Ugc3RyaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7UmVnRXhwfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5waWNvbWF0Y2gudG9SZWdleCA9IChzb3VyY2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzb3VyY2UsIG9wdHMuZmxhZ3MgfHwgKG9wdHMubm9jYXNlID8gJ2knIDogJycpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5kZWJ1ZyA9PT0gdHJ1ZSkgdGhyb3cgZXJyO1xuICAgIHJldHVybiAvJF4vO1xuICB9XG59O1xuXG4vKipcbiAqIFBpY29tYXRjaCBjb25zdGFudHMuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxucGljb21hdGNoLmNvbnN0YW50cyA9IGNvbnN0YW50cztcblxuLyoqXG4gKiBFeHBvc2UgXCJwaWNvbWF0Y2hcIlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGljb21hdGNoO1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9waWNvbWF0Y2gnKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3BsaXRXaGVuID0gZXhwb3J0cy5mbGF0dGVuID0gdm9pZCAwO1xuZnVuY3Rpb24gZmxhdHRlbihpdGVtcykge1xuICAgIHJldHVybiBpdGVtcy5yZWR1Y2UoKGNvbGxlY3Rpb24sIGl0ZW0pID0+IFtdLmNvbmNhdChjb2xsZWN0aW9uLCBpdGVtKSwgW10pO1xufVxuZXhwb3J0cy5mbGF0dGVuID0gZmxhdHRlbjtcbmZ1bmN0aW9uIHNwbGl0V2hlbihpdGVtcywgcHJlZGljYXRlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW1tdXTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgIGlmIChwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgICAgICAgIGdyb3VwSW5kZXgrKztcbiAgICAgICAgICAgIHJlc3VsdFtncm91cEluZGV4XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwSW5kZXhdLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuc3BsaXRXaGVuID0gc3BsaXRXaGVuO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0Vub2VudENvZGVFcnJvciA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzRW5vZW50Q29kZUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yLmNvZGUgPT09ICdFTk9FTlQnO1xufVxuZXhwb3J0cy5pc0Vub2VudENvZGVFcnJvciA9IGlzRW5vZW50Q29kZUVycm9yO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMgPSB2b2lkIDA7XG5jbGFzcyBEaXJlbnRGcm9tU3RhdHMge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNCbG9ja0RldmljZSA9IHN0YXRzLmlzQmxvY2tEZXZpY2UuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNDaGFyYWN0ZXJEZXZpY2UgPSBzdGF0cy5pc0NoYXJhY3RlckRldmljZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdG9yeSA9IHN0YXRzLmlzRGlyZWN0b3J5LmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRklGTyA9IHN0YXRzLmlzRklGTy5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0ZpbGUgPSBzdGF0cy5pc0ZpbGUuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNTb2NrZXQgPSBzdGF0cy5pc1NvY2tldC5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc1N5bWJvbGljTGluayA9IHN0YXRzLmlzU3ltYm9saWNMaW5rLmJpbmQoc3RhdHMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZURpcmVudEZyb21TdGF0cyhuYW1lLCBzdGF0cykge1xuICAgIHJldHVybiBuZXcgRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKTtcbn1cbmV4cG9ydHMuY3JlYXRlRGlyZW50RnJvbVN0YXRzID0gY3JlYXRlRGlyZW50RnJvbVN0YXRzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZW1vdmVMZWFkaW5nRG90U2VnbWVudCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5tYWtlQWJzb2x1dGUgPSBleHBvcnRzLnVuaXhpZnkgPSB2b2lkIDA7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBMRUFESU5HX0RPVF9TRUdNRU5UX0NIQVJBQ1RFUlNfQ09VTlQgPSAyOyAvLyAuLyBvciAuXFxcXFxuY29uc3QgVU5FU0NBUEVEX0dMT0JfU1lNQk9MU19SRSA9IC8oXFxcXD8pKFsoKSo/W1xcXXt8fV18XiF8WyErQF0oPz1cXCgpKS9nO1xuLyoqXG4gKiBEZXNpZ25lZCB0byB3b3JrIG9ubHkgd2l0aCBzaW1wbGUgcGF0aHM6IGBkaXJcXFxcZmlsZWAuXG4gKi9cbmZ1bmN0aW9uIHVuaXhpZnkoZmlsZXBhdGgpIHtcbiAgICByZXR1cm4gZmlsZXBhdGgucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xufVxuZXhwb3J0cy51bml4aWZ5ID0gdW5peGlmeTtcbmZ1bmN0aW9uIG1ha2VBYnNvbHV0ZShjd2QsIGZpbGVwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGgucmVzb2x2ZShjd2QsIGZpbGVwYXRoKTtcbn1cbmV4cG9ydHMubWFrZUFic29sdXRlID0gbWFrZUFic29sdXRlO1xuZnVuY3Rpb24gZXNjYXBlKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5yZXBsYWNlKFVORVNDQVBFRF9HTE9CX1NZTUJPTFNfUkUsICdcXFxcJDInKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQoZW50cnkpIHtcbiAgICAvLyBXZSBkbyBub3QgdXNlIGBzdGFydHNXaXRoYCBiZWNhdXNlIHRoaXMgaXMgMTB4IHNsb3dlciB0aGFuIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gZm9yIHNvbWUgY2FzZXMuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItc3RyaW5nLXN0YXJ0cy1lbmRzLXdpdGhcbiAgICBpZiAoZW50cnkuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kQ2hhcmFjdGVyeSA9IGVudHJ5LmNoYXJBdCgxKTtcbiAgICAgICAgaWYgKHNlY29uZENoYXJhY3RlcnkgPT09ICcvJyB8fCBzZWNvbmRDaGFyYWN0ZXJ5ID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5zbGljZShMRUFESU5HX0RPVF9TRUdNRU5UX0NIQVJBQ1RFUlNfQ09VTlQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeTtcbn1cbmV4cG9ydHMucmVtb3ZlTGVhZGluZ0RvdFNlZ21lbnQgPSByZW1vdmVMZWFkaW5nRG90U2VnbWVudDtcbiIsICIvKiFcbiAqIGlzLWV4dGdsb2IgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLWV4dGdsb2I+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTYsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRnbG9iKHN0cikge1xuICBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycgfHwgc3RyID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBtYXRjaDtcbiAgd2hpbGUgKChtYXRjaCA9IC8oXFxcXCkufChbQD8hKypdXFwoLipcXCkpL2cuZXhlYyhzdHIpKSkge1xuICAgIGlmIChtYXRjaFsyXSkgcmV0dXJuIHRydWU7XG4gICAgc3RyID0gc3RyLnNsaWNlKG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCAiLyohXG4gKiBpcy1nbG9iIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9pcy1nbG9iPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE3LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG52YXIgaXNFeHRnbG9iID0gcmVxdWlyZSgnaXMtZXh0Z2xvYicpO1xudmFyIGNoYXJzID0geyAneyc6ICd9JywgJygnOiAnKScsICdbJzogJ10nfTtcbnZhciBzdHJpY3RDaGVjayA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoc3RyWzBdID09PSAnIScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcGlwZUluZGV4ID0gLTI7XG4gIHZhciBjbG9zZVNxdWFyZUluZGV4ID0gLTI7XG4gIHZhciBjbG9zZUN1cmx5SW5kZXggPSAtMjtcbiAgdmFyIGNsb3NlUGFyZW5JbmRleCA9IC0yO1xuICB2YXIgYmFja1NsYXNoSW5kZXggPSAtMjtcbiAgd2hpbGUgKGluZGV4IDwgc3RyLmxlbmd0aCkge1xuICAgIGlmIChzdHJbaW5kZXhdID09PSAnKicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXggKyAxXSA9PT0gJz8nICYmIC9bXFxdLispXS8udGVzdChzdHJbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlU3F1YXJlSW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICdbJyAmJiBzdHJbaW5kZXggKyAxXSAhPT0gJ10nKSB7XG4gICAgICBpZiAoY2xvc2VTcXVhcmVJbmRleCA8IGluZGV4KSB7XG4gICAgICAgIGNsb3NlU3F1YXJlSW5kZXggPSBzdHIuaW5kZXhPZignXScsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChjbG9zZVNxdWFyZUluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgaWYgKGJhY2tTbGFzaEluZGV4ID09PSAtMSB8fCBiYWNrU2xhc2hJbmRleCA+IGNsb3NlU3F1YXJlSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBiYWNrU2xhc2hJbmRleCA9IHN0ci5pbmRleE9mKCdcXFxcJywgaW5kZXgpO1xuICAgICAgICBpZiAoYmFja1NsYXNoSW5kZXggPT09IC0xIHx8IGJhY2tTbGFzaEluZGV4ID4gY2xvc2VTcXVhcmVJbmRleCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQ3VybHlJbmRleCAhPT0gLTEgJiYgc3RyW2luZGV4XSA9PT0gJ3snICYmIHN0cltpbmRleCArIDFdICE9PSAnfScpIHtcbiAgICAgIGNsb3NlQ3VybHlJbmRleCA9IHN0ci5pbmRleE9mKCd9JywgaW5kZXgpO1xuICAgICAgaWYgKGNsb3NlQ3VybHlJbmRleCA+IGluZGV4KSB7XG4gICAgICAgIGJhY2tTbGFzaEluZGV4ID0gc3RyLmluZGV4T2YoJ1xcXFwnLCBpbmRleCk7XG4gICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZUN1cmx5SW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZVBhcmVuSW5kZXggIT09IC0xICYmIHN0cltpbmRleF0gPT09ICcoJyAmJiBzdHJbaW5kZXggKyAxXSA9PT0gJz8nICYmIC9bOiE9XS8udGVzdChzdHJbaW5kZXggKyAyXSkgJiYgc3RyW2luZGV4ICsgM10gIT09ICcpJykge1xuICAgICAgY2xvc2VQYXJlbkluZGV4ID0gc3RyLmluZGV4T2YoJyknLCBpbmRleCk7XG4gICAgICBpZiAoY2xvc2VQYXJlbkluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgYmFja1NsYXNoSW5kZXggPSBzdHIuaW5kZXhPZignXFxcXCcsIGluZGV4KTtcbiAgICAgICAgaWYgKGJhY2tTbGFzaEluZGV4ID09PSAtMSB8fCBiYWNrU2xhc2hJbmRleCA+IGNsb3NlUGFyZW5JbmRleCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBpcGVJbmRleCAhPT0gLTEgJiYgc3RyW2luZGV4XSA9PT0gJygnICYmIHN0cltpbmRleCArIDFdICE9PSAnfCcpIHtcbiAgICAgIGlmIChwaXBlSW5kZXggPCBpbmRleCkge1xuICAgICAgICBwaXBlSW5kZXggPSBzdHIuaW5kZXhPZignfCcsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChwaXBlSW5kZXggIT09IC0xICYmIHN0cltwaXBlSW5kZXggKyAxXSAhPT0gJyknKSB7XG4gICAgICAgIGNsb3NlUGFyZW5JbmRleCA9IHN0ci5pbmRleE9mKCcpJywgcGlwZUluZGV4KTtcbiAgICAgICAgaWYgKGNsb3NlUGFyZW5JbmRleCA+IHBpcGVJbmRleCkge1xuICAgICAgICAgIGJhY2tTbGFzaEluZGV4ID0gc3RyLmluZGV4T2YoJ1xcXFwnLCBwaXBlSW5kZXgpO1xuICAgICAgICAgIGlmIChiYWNrU2xhc2hJbmRleCA9PT0gLTEgfHwgYmFja1NsYXNoSW5kZXggPiBjbG9zZVBhcmVuSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXhdID09PSAnXFxcXCcpIHtcbiAgICAgIHZhciBvcGVuID0gc3RyW2luZGV4ICsgMV07XG4gICAgICBpbmRleCArPSAyO1xuICAgICAgdmFyIGNsb3NlID0gY2hhcnNbb3Blbl07XG5cbiAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICB2YXIgbiA9IHN0ci5pbmRleE9mKGNsb3NlLCBpbmRleCk7XG4gICAgICAgIGlmIChuICE9PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gbiArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0cltpbmRleF0gPT09ICchJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxudmFyIHJlbGF4ZWRDaGVjayA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoc3RyWzBdID09PSAnIScpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBzdHIubGVuZ3RoKSB7XG4gICAgaWYgKC9bKj97fSgpW1xcXV0vLnRlc3Qoc3RyW2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdHJbaW5kZXhdID09PSAnXFxcXCcpIHtcbiAgICAgIHZhciBvcGVuID0gc3RyW2luZGV4ICsgMV07XG4gICAgICBpbmRleCArPSAyO1xuICAgICAgdmFyIGNsb3NlID0gY2hhcnNbb3Blbl07XG5cbiAgICAgIGlmIChjbG9zZSkge1xuICAgICAgICB2YXIgbiA9IHN0ci5pbmRleE9mKGNsb3NlLCBpbmRleCk7XG4gICAgICAgIGlmIChuICE9PSAtMSkge1xuICAgICAgICAgIGluZGV4ID0gbiArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0cltpbmRleF0gPT09ICchJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0dsb2Ioc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzRXh0Z2xvYihzdHIpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgY2hlY2sgPSBzdHJpY3RDaGVjaztcblxuICAvLyBvcHRpb25hbGx5IHJlbGF4IGNoZWNrXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc3RyaWN0ID09PSBmYWxzZSkge1xuICAgIGNoZWNrID0gcmVsYXhlZENoZWNrO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrKHN0cik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcblxudmFyIGlzR2xvYiA9IHJlcXVpcmUoJ2lzLWdsb2InKTtcbnZhciBwYXRoUG9zaXhEaXJuYW1lID0gcmVxdWlyZSgncGF0aCcpLnBvc2l4LmRpcm5hbWU7XG52YXIgaXNXaW4zMiA9IHJlcXVpcmUoJ29zJykucGxhdGZvcm0oKSA9PT0gJ3dpbjMyJztcblxudmFyIHNsYXNoID0gJy8nO1xudmFyIGJhY2tzbGFzaCA9IC9cXFxcL2c7XG52YXIgZW5jbG9zdXJlID0gL1tcXHtcXFtdLipbXFx9XFxdXSQvO1xudmFyIGdsb2JieSA9IC8oXnxbXlxcXFxdKShbXFx7XFxbXXxcXChbXlxcKV0rJCkvO1xudmFyIGVzY2FwZWQgPSAvXFxcXChbXFwhXFwqXFw/XFx8XFxbXFxdXFwoXFwpXFx7XFx9XSkvZztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5mbGlwQmFja3NsYXNoZXM9dHJ1ZV1cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2xvYlBhcmVudChzdHIsIG9wdHMpIHtcbiAgdmFyIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgZmxpcEJhY2tzbGFzaGVzOiB0cnVlIH0sIG9wdHMpO1xuXG4gIC8vIGZsaXAgd2luZG93cyBwYXRoIHNlcGFyYXRvcnNcbiAgaWYgKG9wdGlvbnMuZmxpcEJhY2tzbGFzaGVzICYmIGlzV2luMzIgJiYgc3RyLmluZGV4T2Yoc2xhc2gpIDwgMCkge1xuICAgIHN0ciA9IHN0ci5yZXBsYWNlKGJhY2tzbGFzaCwgc2xhc2gpO1xuICB9XG5cbiAgLy8gc3BlY2lhbCBjYXNlIGZvciBzdHJpbmdzIGVuZGluZyBpbiBlbmNsb3N1cmUgY29udGFpbmluZyBwYXRoIHNlcGFyYXRvclxuICBpZiAoZW5jbG9zdXJlLnRlc3Qoc3RyKSkge1xuICAgIHN0ciArPSBzbGFzaDtcbiAgfVxuXG4gIC8vIHByZXNlcnZlcyBmdWxsIHBhdGggaW4gY2FzZSBvZiB0cmFpbGluZyBwYXRoIHNlcGFyYXRvclxuICBzdHIgKz0gJ2EnO1xuXG4gIC8vIHJlbW92ZSBwYXRoIHBhcnRzIHRoYXQgYXJlIGdsb2JieVxuICBkbyB7XG4gICAgc3RyID0gcGF0aFBvc2l4RGlybmFtZShzdHIpO1xuICB9IHdoaWxlIChpc0dsb2Ioc3RyKSB8fCBnbG9iYnkudGVzdChzdHIpKTtcblxuICAvLyByZW1vdmUgZXNjYXBlIGNoYXJzIGFuZCByZXR1cm4gcmVzdWx0XG4gIHJldHVybiBzdHIucmVwbGFjZShlc2NhcGVkLCAnJDEnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmlzSW50ZWdlciA9IG51bSA9PiB7XG4gIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG51bSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBudW0gPT09ICdzdHJpbmcnICYmIG51bS50cmltKCkgIT09ICcnKSB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKG51bSkpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogRmluZCBhIG5vZGUgb2YgdGhlIGdpdmVuIHR5cGVcbiAqL1xuXG5leHBvcnRzLmZpbmQgPSAobm9kZSwgdHlwZSkgPT4gbm9kZS5ub2Rlcy5maW5kKG5vZGUgPT4gbm9kZS50eXBlID09PSB0eXBlKTtcblxuLyoqXG4gKiBGaW5kIGEgbm9kZSBvZiB0aGUgZ2l2ZW4gdHlwZVxuICovXG5cbmV4cG9ydHMuZXhjZWVkc0xpbWl0ID0gKG1pbiwgbWF4LCBzdGVwID0gMSwgbGltaXQpID0+IHtcbiAgaWYgKGxpbWl0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWV4cG9ydHMuaXNJbnRlZ2VyKG1pbikgfHwgIWV4cG9ydHMuaXNJbnRlZ2VyKG1heCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICgoTnVtYmVyKG1heCkgLSBOdW1iZXIobWluKSkgLyBOdW1iZXIoc3RlcCkpID49IGxpbWl0O1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIG5vZGUgd2l0aCAnXFxcXCcgYmVmb3JlIG5vZGUudmFsdWVcbiAqL1xuXG5leHBvcnRzLmVzY2FwZU5vZGUgPSAoYmxvY2ssIG4gPSAwLCB0eXBlKSA9PiB7XG4gIGxldCBub2RlID0gYmxvY2subm9kZXNbbl07XG4gIGlmICghbm9kZSkgcmV0dXJuO1xuXG4gIGlmICgodHlwZSAmJiBub2RlLnR5cGUgPT09IHR5cGUpIHx8IG5vZGUudHlwZSA9PT0gJ29wZW4nIHx8IG5vZGUudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIGlmIChub2RlLmVzY2FwZWQgIT09IHRydWUpIHtcbiAgICAgIG5vZGUudmFsdWUgPSAnXFxcXCcgKyBub2RlLnZhbHVlO1xuICAgICAgbm9kZS5lc2NhcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBicmFjZSBub2RlIHNob3VsZCBiZSBlbmNsb3NlZCBpbiBsaXRlcmFsIGJyYWNlc1xuICovXG5cbmV4cG9ydHMuZW5jbG9zZUJyYWNlID0gbm9kZSA9PiB7XG4gIGlmIChub2RlLnR5cGUgIT09ICdicmFjZScpIHJldHVybiBmYWxzZTtcbiAgaWYgKChub2RlLmNvbW1hcyA+PiAwICsgbm9kZS5yYW5nZXMgPj4gMCkgPT09IDApIHtcbiAgICBub2RlLmludmFsaWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgYnJhY2Ugbm9kZSBpcyBpbnZhbGlkLlxuICovXG5cbmV4cG9ydHMuaXNJbnZhbGlkQnJhY2UgPSBibG9jayA9PiB7XG4gIGlmIChibG9jay50eXBlICE9PSAnYnJhY2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmIChibG9jay5pbnZhbGlkID09PSB0cnVlIHx8IGJsb2NrLmRvbGxhcikgcmV0dXJuIHRydWU7XG4gIGlmICgoYmxvY2suY29tbWFzID4+IDAgKyBibG9jay5yYW5nZXMgPj4gMCkgPT09IDApIHtcbiAgICBibG9jay5pbnZhbGlkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoYmxvY2sub3BlbiAhPT0gdHJ1ZSB8fCBibG9jay5jbG9zZSAhPT0gdHJ1ZSkge1xuICAgIGJsb2NrLmludmFsaWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgbm9kZSBpcyBhbiBvcGVuIG9yIGNsb3NlIG5vZGVcbiAqL1xuXG5leHBvcnRzLmlzT3Blbk9yQ2xvc2UgPSBub2RlID0+IHtcbiAgaWYgKG5vZGUudHlwZSA9PT0gJ29wZW4nIHx8IG5vZGUudHlwZSA9PT0gJ2Nsb3NlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBub2RlLm9wZW4gPT09IHRydWUgfHwgbm9kZS5jbG9zZSA9PT0gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVkdWNlIGFuIGFycmF5IG9mIHRleHQgbm9kZXMuXG4gKi9cblxuZXhwb3J0cy5yZWR1Y2UgPSBub2RlcyA9PiBub2Rlcy5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICBpZiAobm9kZS50eXBlID09PSAndGV4dCcpIGFjYy5wdXNoKG5vZGUudmFsdWUpO1xuICBpZiAobm9kZS50eXBlID09PSAncmFuZ2UnKSBub2RlLnR5cGUgPSAndGV4dCc7XG4gIHJldHVybiBhY2M7XG59LCBbXSk7XG5cbi8qKlxuICogRmxhdHRlbiBhbiBhcnJheVxuICovXG5cbmV4cG9ydHMuZmxhdHRlbiA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBmbGF0ID0gYXJyID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGVsZSA9IGFycltpXTtcbiAgICAgIEFycmF5LmlzQXJyYXkoZWxlKSA/IGZsYXQoZWxlLCByZXN1bHQpIDogZWxlICE9PSB2b2lkIDAgJiYgcmVzdWx0LnB1c2goZWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgZmxhdChhcmdzKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoYXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHN0cmluZ2lmeSA9IChub2RlLCBwYXJlbnQgPSB7fSkgPT4ge1xuICAgIGxldCBpbnZhbGlkQmxvY2sgPSBvcHRpb25zLmVzY2FwZUludmFsaWQgJiYgdXRpbHMuaXNJbnZhbGlkQnJhY2UocGFyZW50KTtcbiAgICBsZXQgaW52YWxpZE5vZGUgPSBub2RlLmludmFsaWQgPT09IHRydWUgJiYgb3B0aW9ucy5lc2NhcGVJbnZhbGlkID09PSB0cnVlO1xuICAgIGxldCBvdXRwdXQgPSAnJztcblxuICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICBpZiAoKGludmFsaWRCbG9jayB8fCBpbnZhbGlkTm9kZSkgJiYgdXRpbHMuaXNPcGVuT3JDbG9zZShub2RlKSkge1xuICAgICAgICByZXR1cm4gJ1xcXFwnICsgbm9kZS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlLnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChub2RlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbm9kZS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2Rlcykge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5ub2Rlcykge1xuICAgICAgICBvdXRwdXQgKz0gc3RyaW5naWZ5KGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfTtcblxuICByZXR1cm4gc3RyaW5naWZ5KGFzdCk7XG59O1xuXG4iLCAiLyohXG4gKiBpcy1udW1iZXIgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLW51bWJlcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG51bSkge1xuICBpZiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVtIC0gbnVtID09PSAwO1xuICB9XG4gIGlmICh0eXBlb2YgbnVtID09PSAnc3RyaW5nJyAmJiBudW0udHJpbSgpICE9PSAnJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUgPyBOdW1iZXIuaXNGaW5pdGUoK251bSkgOiBpc0Zpbml0ZSgrbnVtKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwgIi8qIVxuICogdG8tcmVnZXgtcmFuZ2UgPGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb21hdGNoL3RvLXJlZ2V4LXJhbmdlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNS1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyJyk7XG5cbmNvbnN0IHRvUmVnZXhSYW5nZSA9IChtaW4sIG1heCwgb3B0aW9ucykgPT4ge1xuICBpZiAoaXNOdW1iZXIobWluKSA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0b1JlZ2V4UmFuZ2U6IGV4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgaWYgKG1heCA9PT0gdm9pZCAwIHx8IG1pbiA9PT0gbWF4KSB7XG4gICAgcmV0dXJuIFN0cmluZyhtaW4pO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKG1heCkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndG9SZWdleFJhbmdlOiBleHBlY3RlZCB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgbnVtYmVyLicpO1xuICB9XG5cbiAgbGV0IG9wdHMgPSB7IHJlbGF4WmVyb3M6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgaWYgKHR5cGVvZiBvcHRzLnN0cmljdFplcm9zID09PSAnYm9vbGVhbicpIHtcbiAgICBvcHRzLnJlbGF4WmVyb3MgPSBvcHRzLnN0cmljdFplcm9zID09PSBmYWxzZTtcbiAgfVxuXG4gIGxldCByZWxheCA9IFN0cmluZyhvcHRzLnJlbGF4WmVyb3MpO1xuICBsZXQgc2hvcnRoYW5kID0gU3RyaW5nKG9wdHMuc2hvcnRoYW5kKTtcbiAgbGV0IGNhcHR1cmUgPSBTdHJpbmcob3B0cy5jYXB0dXJlKTtcbiAgbGV0IHdyYXAgPSBTdHJpbmcob3B0cy53cmFwKTtcbiAgbGV0IGNhY2hlS2V5ID0gbWluICsgJzonICsgbWF4ICsgJz0nICsgcmVsYXggKyBzaG9ydGhhbmQgKyBjYXB0dXJlICsgd3JhcDtcblxuICBpZiAodG9SZWdleFJhbmdlLmNhY2hlLmhhc093blByb3BlcnR5KGNhY2hlS2V5KSkge1xuICAgIHJldHVybiB0b1JlZ2V4UmFuZ2UuY2FjaGVbY2FjaGVLZXldLnJlc3VsdDtcbiAgfVxuXG4gIGxldCBhID0gTWF0aC5taW4obWluLCBtYXgpO1xuICBsZXQgYiA9IE1hdGgubWF4KG1pbiwgbWF4KTtcblxuICBpZiAoTWF0aC5hYnMoYSAtIGIpID09PSAxKSB7XG4gICAgbGV0IHJlc3VsdCA9IG1pbiArICd8JyArIG1heDtcbiAgICBpZiAob3B0cy5jYXB0dXJlKSB7XG4gICAgICByZXR1cm4gYCgke3Jlc3VsdH0pYDtcbiAgICB9XG4gICAgaWYgKG9wdHMud3JhcCA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJldHVybiBgKD86JHtyZXN1bHR9KWA7XG4gIH1cblxuICBsZXQgaXNQYWRkZWQgPSBoYXNQYWRkaW5nKG1pbikgfHwgaGFzUGFkZGluZyhtYXgpO1xuICBsZXQgc3RhdGUgPSB7IG1pbiwgbWF4LCBhLCBiIH07XG4gIGxldCBwb3NpdGl2ZXMgPSBbXTtcbiAgbGV0IG5lZ2F0aXZlcyA9IFtdO1xuXG4gIGlmIChpc1BhZGRlZCkge1xuICAgIHN0YXRlLmlzUGFkZGVkID0gaXNQYWRkZWQ7XG4gICAgc3RhdGUubWF4TGVuID0gU3RyaW5nKHN0YXRlLm1heCkubGVuZ3RoO1xuICB9XG5cbiAgaWYgKGEgPCAwKSB7XG4gICAgbGV0IG5ld01pbiA9IGIgPCAwID8gTWF0aC5hYnMoYikgOiAxO1xuICAgIG5lZ2F0aXZlcyA9IHNwbGl0VG9QYXR0ZXJucyhuZXdNaW4sIE1hdGguYWJzKGEpLCBzdGF0ZSwgb3B0cyk7XG4gICAgYSA9IHN0YXRlLmEgPSAwO1xuICB9XG5cbiAgaWYgKGIgPj0gMCkge1xuICAgIHBvc2l0aXZlcyA9IHNwbGl0VG9QYXR0ZXJucyhhLCBiLCBzdGF0ZSwgb3B0cyk7XG4gIH1cblxuICBzdGF0ZS5uZWdhdGl2ZXMgPSBuZWdhdGl2ZXM7XG4gIHN0YXRlLnBvc2l0aXZlcyA9IHBvc2l0aXZlcztcbiAgc3RhdGUucmVzdWx0ID0gY29sbGF0ZVBhdHRlcm5zKG5lZ2F0aXZlcywgcG9zaXRpdmVzLCBvcHRzKTtcblxuICBpZiAob3B0cy5jYXB0dXJlID09PSB0cnVlKSB7XG4gICAgc3RhdGUucmVzdWx0ID0gYCgke3N0YXRlLnJlc3VsdH0pYDtcbiAgfSBlbHNlIGlmIChvcHRzLndyYXAgIT09IGZhbHNlICYmIChwb3NpdGl2ZXMubGVuZ3RoICsgbmVnYXRpdmVzLmxlbmd0aCkgPiAxKSB7XG4gICAgc3RhdGUucmVzdWx0ID0gYCg/OiR7c3RhdGUucmVzdWx0fSlgO1xuICB9XG5cbiAgdG9SZWdleFJhbmdlLmNhY2hlW2NhY2hlS2V5XSA9IHN0YXRlO1xuICByZXR1cm4gc3RhdGUucmVzdWx0O1xufTtcblxuZnVuY3Rpb24gY29sbGF0ZVBhdHRlcm5zKG5lZywgcG9zLCBvcHRpb25zKSB7XG4gIGxldCBvbmx5TmVnYXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhuZWcsIHBvcywgJy0nLCBmYWxzZSwgb3B0aW9ucykgfHwgW107XG4gIGxldCBvbmx5UG9zaXRpdmUgPSBmaWx0ZXJQYXR0ZXJucyhwb3MsIG5lZywgJycsIGZhbHNlLCBvcHRpb25zKSB8fCBbXTtcbiAgbGV0IGludGVyc2VjdGVkID0gZmlsdGVyUGF0dGVybnMobmVnLCBwb3MsICctPycsIHRydWUsIG9wdGlvbnMpIHx8IFtdO1xuICBsZXQgc3VicGF0dGVybnMgPSBvbmx5TmVnYXRpdmUuY29uY2F0KGludGVyc2VjdGVkKS5jb25jYXQob25seVBvc2l0aXZlKTtcbiAgcmV0dXJuIHN1YnBhdHRlcm5zLmpvaW4oJ3wnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUb1JhbmdlcyhtaW4sIG1heCkge1xuICBsZXQgbmluZXMgPSAxO1xuICBsZXQgemVyb3MgPSAxO1xuXG4gIGxldCBzdG9wID0gY291bnROaW5lcyhtaW4sIG5pbmVzKTtcbiAgbGV0IHN0b3BzID0gbmV3IFNldChbbWF4XSk7XG5cbiAgd2hpbGUgKG1pbiA8PSBzdG9wICYmIHN0b3AgPD0gbWF4KSB7XG4gICAgc3RvcHMuYWRkKHN0b3ApO1xuICAgIG5pbmVzICs9IDE7XG4gICAgc3RvcCA9IGNvdW50TmluZXMobWluLCBuaW5lcyk7XG4gIH1cblxuICBzdG9wID0gY291bnRaZXJvcyhtYXggKyAxLCB6ZXJvcykgLSAxO1xuXG4gIHdoaWxlIChtaW4gPCBzdG9wICYmIHN0b3AgPD0gbWF4KSB7XG4gICAgc3RvcHMuYWRkKHN0b3ApO1xuICAgIHplcm9zICs9IDE7XG4gICAgc3RvcCA9IGNvdW50WmVyb3MobWF4ICsgMSwgemVyb3MpIC0gMTtcbiAgfVxuXG4gIHN0b3BzID0gWy4uLnN0b3BzXTtcbiAgc3RvcHMuc29ydChjb21wYXJlKTtcbiAgcmV0dXJuIHN0b3BzO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSByYW5nZSB0byBhIHJlZ2V4IHBhdHRlcm5cbiAqIEBwYXJhbSB7TnVtYmVyfSBgc3RhcnRgXG4gKiBAcGFyYW0ge051bWJlcn0gYHN0b3BgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcmFuZ2VUb1BhdHRlcm4oc3RhcnQsIHN0b3AsIG9wdGlvbnMpIHtcbiAgaWYgKHN0YXJ0ID09PSBzdG9wKSB7XG4gICAgcmV0dXJuIHsgcGF0dGVybjogc3RhcnQsIGNvdW50OiBbXSwgZGlnaXRzOiAwIH07XG4gIH1cblxuICBsZXQgemlwcGVkID0gemlwKHN0YXJ0LCBzdG9wKTtcbiAgbGV0IGRpZ2l0cyA9IHppcHBlZC5sZW5ndGg7XG4gIGxldCBwYXR0ZXJuID0gJyc7XG4gIGxldCBjb3VudCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWdpdHM7IGkrKykge1xuICAgIGxldCBbc3RhcnREaWdpdCwgc3RvcERpZ2l0XSA9IHppcHBlZFtpXTtcblxuICAgIGlmIChzdGFydERpZ2l0ID09PSBzdG9wRGlnaXQpIHtcbiAgICAgIHBhdHRlcm4gKz0gc3RhcnREaWdpdDtcblxuICAgIH0gZWxzZSBpZiAoc3RhcnREaWdpdCAhPT0gJzAnIHx8IHN0b3BEaWdpdCAhPT0gJzknKSB7XG4gICAgICBwYXR0ZXJuICs9IHRvQ2hhcmFjdGVyQ2xhc3Moc3RhcnREaWdpdCwgc3RvcERpZ2l0LCBvcHRpb25zKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb3VudCkge1xuICAgIHBhdHRlcm4gKz0gb3B0aW9ucy5zaG9ydGhhbmQgPT09IHRydWUgPyAnXFxcXGQnIDogJ1swLTldJztcbiAgfVxuXG4gIHJldHVybiB7IHBhdHRlcm4sIGNvdW50OiBbY291bnRdLCBkaWdpdHMgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRUb1BhdHRlcm5zKG1pbiwgbWF4LCB0b2ssIG9wdGlvbnMpIHtcbiAgbGV0IHJhbmdlcyA9IHNwbGl0VG9SYW5nZXMobWluLCBtYXgpO1xuICBsZXQgdG9rZW5zID0gW107XG4gIGxldCBzdGFydCA9IG1pbjtcbiAgbGV0IHByZXY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbWF4ID0gcmFuZ2VzW2ldO1xuICAgIGxldCBvYmogPSByYW5nZVRvUGF0dGVybihTdHJpbmcoc3RhcnQpLCBTdHJpbmcobWF4KSwgb3B0aW9ucyk7XG4gICAgbGV0IHplcm9zID0gJyc7XG5cbiAgICBpZiAoIXRvay5pc1BhZGRlZCAmJiBwcmV2ICYmIHByZXYucGF0dGVybiA9PT0gb2JqLnBhdHRlcm4pIHtcbiAgICAgIGlmIChwcmV2LmNvdW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcHJldi5jb3VudC5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgcHJldi5jb3VudC5wdXNoKG9iai5jb3VudFswXSk7XG4gICAgICBwcmV2LnN0cmluZyA9IHByZXYucGF0dGVybiArIHRvUXVhbnRpZmllcihwcmV2LmNvdW50KTtcbiAgICAgIHN0YXJ0ID0gbWF4ICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2suaXNQYWRkZWQpIHtcbiAgICAgIHplcm9zID0gcGFkWmVyb3MobWF4LCB0b2ssIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIG9iai5zdHJpbmcgPSB6ZXJvcyArIG9iai5wYXR0ZXJuICsgdG9RdWFudGlmaWVyKG9iai5jb3VudCk7XG4gICAgdG9rZW5zLnB1c2gob2JqKTtcbiAgICBzdGFydCA9IG1heCArIDE7XG4gICAgcHJldiA9IG9iajtcbiAgfVxuXG4gIHJldHVybiB0b2tlbnM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclBhdHRlcm5zKGFyciwgY29tcGFyaXNvbiwgcHJlZml4LCBpbnRlcnNlY3Rpb24sIG9wdGlvbnMpIHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIGZvciAobGV0IGVsZSBvZiBhcnIpIHtcbiAgICBsZXQgeyBzdHJpbmcgfSA9IGVsZTtcblxuICAgIC8vIG9ubHkgcHVzaCBpZiBfYm90aF8gYXJlIG5lZ2F0aXZlLi4uXG4gICAgaWYgKCFpbnRlcnNlY3Rpb24gJiYgIWNvbnRhaW5zKGNvbXBhcmlzb24sICdzdHJpbmcnLCBzdHJpbmcpKSB7XG4gICAgICByZXN1bHQucHVzaChwcmVmaXggKyBzdHJpbmcpO1xuICAgIH1cblxuICAgIC8vIG9yIF9ib3RoXyBhcmUgcG9zaXRpdmVcbiAgICBpZiAoaW50ZXJzZWN0aW9uICYmIGNvbnRhaW5zKGNvbXBhcmlzb24sICdzdHJpbmcnLCBzdHJpbmcpKSB7XG4gICAgICByZXN1bHQucHVzaChwcmVmaXggKyBzdHJpbmcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFppcCBzdHJpbmdzXG4gKi9cblxuZnVuY3Rpb24gemlwKGEsIGIpIHtcbiAgbGV0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIGFyci5wdXNoKFthW2ldLCBiW2ldXSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xuICByZXR1cm4gYSA+IGIgPyAxIDogYiA+IGEgPyAtMSA6IDA7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwga2V5LCB2YWwpIHtcbiAgcmV0dXJuIGFyci5zb21lKGVsZSA9PiBlbGVba2V5XSA9PT0gdmFsKTtcbn1cblxuZnVuY3Rpb24gY291bnROaW5lcyhtaW4sIGxlbikge1xuICByZXR1cm4gTnVtYmVyKFN0cmluZyhtaW4pLnNsaWNlKDAsIC1sZW4pICsgJzknLnJlcGVhdChsZW4pKTtcbn1cblxuZnVuY3Rpb24gY291bnRaZXJvcyhpbnRlZ2VyLCB6ZXJvcykge1xuICByZXR1cm4gaW50ZWdlciAtIChpbnRlZ2VyICUgTWF0aC5wb3coMTAsIHplcm9zKSk7XG59XG5cbmZ1bmN0aW9uIHRvUXVhbnRpZmllcihkaWdpdHMpIHtcbiAgbGV0IFtzdGFydCA9IDAsIHN0b3AgPSAnJ10gPSBkaWdpdHM7XG4gIGlmIChzdG9wIHx8IHN0YXJ0ID4gMSkge1xuICAgIHJldHVybiBgeyR7c3RhcnQgKyAoc3RvcCA/ICcsJyArIHN0b3AgOiAnJyl9fWA7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiB0b0NoYXJhY3RlckNsYXNzKGEsIGIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGBbJHthfSR7KGIgLSBhID09PSAxKSA/ICcnIDogJy0nfSR7Yn1dYDtcbn1cblxuZnVuY3Rpb24gaGFzUGFkZGluZyhzdHIpIHtcbiAgcmV0dXJuIC9eLT8oMCspXFxkLy50ZXN0KHN0cik7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm9zKHZhbHVlLCB0b2ssIG9wdGlvbnMpIHtcbiAgaWYgKCF0b2suaXNQYWRkZWQpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBsZXQgZGlmZiA9IE1hdGguYWJzKHRvay5tYXhMZW4gLSBTdHJpbmcodmFsdWUpLmxlbmd0aCk7XG4gIGxldCByZWxheCA9IG9wdGlvbnMucmVsYXhaZXJvcyAhPT0gZmFsc2U7XG5cbiAgc3dpdGNoIChkaWZmKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuICcnO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiByZWxheCA/ICcwPycgOiAnMCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHJlbGF4ID8gJzB7MCwyfScgOiAnMDAnO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiByZWxheCA/IGAwezAsJHtkaWZmfX1gIDogYDB7JHtkaWZmfX1gO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENhY2hlXG4gKi9cblxudG9SZWdleFJhbmdlLmNhY2hlID0ge307XG50b1JlZ2V4UmFuZ2UuY2xlYXJDYWNoZSA9ICgpID0+ICh0b1JlZ2V4UmFuZ2UuY2FjaGUgPSB7fSk7XG5cbi8qKlxuICogRXhwb3NlIGB0b1JlZ2V4UmFuZ2VgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b1JlZ2V4UmFuZ2U7XG4iLCAiLyohXG4gKiBmaWxsLXJhbmdlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9maWxsLXJhbmdlPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5jb25zdCB0b1JlZ2V4UmFuZ2UgPSByZXF1aXJlKCd0by1yZWdleC1yYW5nZScpO1xuXG5jb25zdCBpc09iamVjdCA9IHZhbCA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKTtcblxuY29uc3QgdHJhbnNmb3JtID0gdG9OdW1iZXIgPT4ge1xuICByZXR1cm4gdmFsdWUgPT4gdG9OdW1iZXIgPT09IHRydWUgPyBOdW1iZXIodmFsdWUpIDogU3RyaW5nKHZhbHVlKTtcbn07XG5cbmNvbnN0IGlzVmFsaWRWYWx1ZSA9IHZhbHVlID0+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnKTtcbn07XG5cbmNvbnN0IGlzTnVtYmVyID0gbnVtID0+IE51bWJlci5pc0ludGVnZXIoK251bSk7XG5cbmNvbnN0IHplcm9zID0gaW5wdXQgPT4ge1xuICBsZXQgdmFsdWUgPSBgJHtpbnB1dH1gO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgaWYgKHZhbHVlWzBdID09PSAnLScpIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gIGlmICh2YWx1ZSA9PT0gJzAnKSByZXR1cm4gZmFsc2U7XG4gIHdoaWxlICh2YWx1ZVsrK2luZGV4XSA9PT0gJzAnKTtcbiAgcmV0dXJuIGluZGV4ID4gMDtcbn07XG5cbmNvbnN0IHN0cmluZ2lmeSA9IChzdGFydCwgZW5kLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnMuc3RyaW5naWZ5ID09PSB0cnVlO1xufTtcblxuY29uc3QgcGFkID0gKGlucHV0LCBtYXhMZW5ndGgsIHRvTnVtYmVyKSA9PiB7XG4gIGlmIChtYXhMZW5ndGggPiAwKSB7XG4gICAgbGV0IGRhc2ggPSBpbnB1dFswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gICAgaWYgKGRhc2gpIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgaW5wdXQgPSAoZGFzaCArIGlucHV0LnBhZFN0YXJ0KGRhc2ggPyBtYXhMZW5ndGggLSAxIDogbWF4TGVuZ3RoLCAnMCcpKTtcbiAgfVxuICBpZiAodG9OdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhpbnB1dCk7XG4gIH1cbiAgcmV0dXJuIGlucHV0O1xufTtcblxuY29uc3QgdG9NYXhMZW4gPSAoaW5wdXQsIG1heExlbmd0aCkgPT4ge1xuICBsZXQgbmVnYXRpdmUgPSBpbnB1dFswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gIGlmIChuZWdhdGl2ZSkge1xuICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgbWF4TGVuZ3RoLS07XG4gIH1cbiAgd2hpbGUgKGlucHV0Lmxlbmd0aCA8IG1heExlbmd0aCkgaW5wdXQgPSAnMCcgKyBpbnB1dDtcbiAgcmV0dXJuIG5lZ2F0aXZlID8gKCctJyArIGlucHV0KSA6IGlucHV0O1xufTtcblxuY29uc3QgdG9TZXF1ZW5jZSA9IChwYXJ0cywgb3B0aW9ucykgPT4ge1xuICBwYXJ0cy5uZWdhdGl2ZXMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApO1xuICBwYXJ0cy5wb3NpdGl2ZXMuc29ydCgoYSwgYikgPT4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDApO1xuXG4gIGxldCBwcmVmaXggPSBvcHRpb25zLmNhcHR1cmUgPyAnJyA6ICc/Oic7XG4gIGxldCBwb3NpdGl2ZXMgPSAnJztcbiAgbGV0IG5lZ2F0aXZlcyA9ICcnO1xuICBsZXQgcmVzdWx0O1xuXG4gIGlmIChwYXJ0cy5wb3NpdGl2ZXMubGVuZ3RoKSB7XG4gICAgcG9zaXRpdmVzID0gcGFydHMucG9zaXRpdmVzLmpvaW4oJ3wnKTtcbiAgfVxuXG4gIGlmIChwYXJ0cy5uZWdhdGl2ZXMubGVuZ3RoKSB7XG4gICAgbmVnYXRpdmVzID0gYC0oJHtwcmVmaXh9JHtwYXJ0cy5uZWdhdGl2ZXMuam9pbignfCcpfSlgO1xuICB9XG5cbiAgaWYgKHBvc2l0aXZlcyAmJiBuZWdhdGl2ZXMpIHtcbiAgICByZXN1bHQgPSBgJHtwb3NpdGl2ZXN9fCR7bmVnYXRpdmVzfWA7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gcG9zaXRpdmVzIHx8IG5lZ2F0aXZlcztcbiAgfVxuXG4gIGlmIChvcHRpb25zLndyYXApIHtcbiAgICByZXR1cm4gYCgke3ByZWZpeH0ke3Jlc3VsdH0pYDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCB0b1JhbmdlID0gKGEsIGIsIGlzTnVtYmVycywgb3B0aW9ucykgPT4ge1xuICBpZiAoaXNOdW1iZXJzKSB7XG4gICAgcmV0dXJuIHRvUmVnZXhSYW5nZShhLCBiLCB7IHdyYXA6IGZhbHNlLCAuLi5vcHRpb25zIH0pO1xuICB9XG5cbiAgbGV0IHN0YXJ0ID0gU3RyaW5nLmZyb21DaGFyQ29kZShhKTtcbiAgaWYgKGEgPT09IGIpIHJldHVybiBzdGFydDtcblxuICBsZXQgc3RvcCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYik7XG4gIHJldHVybiBgWyR7c3RhcnR9LSR7c3RvcH1dYDtcbn07XG5cbmNvbnN0IHRvUmVnZXggPSAoc3RhcnQsIGVuZCwgb3B0aW9ucykgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShzdGFydCkpIHtcbiAgICBsZXQgd3JhcCA9IG9wdGlvbnMud3JhcCA9PT0gdHJ1ZTtcbiAgICBsZXQgcHJlZml4ID0gb3B0aW9ucy5jYXB0dXJlID8gJycgOiAnPzonO1xuICAgIHJldHVybiB3cmFwID8gYCgke3ByZWZpeH0ke3N0YXJ0LmpvaW4oJ3wnKX0pYCA6IHN0YXJ0LmpvaW4oJ3wnKTtcbiAgfVxuICByZXR1cm4gdG9SZWdleFJhbmdlKHN0YXJ0LCBlbmQsIG9wdGlvbnMpO1xufTtcblxuY29uc3QgcmFuZ2VFcnJvciA9ICguLi5hcmdzKSA9PiB7XG4gIHJldHVybiBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCByYW5nZSBhcmd1bWVudHM6ICcgKyB1dGlsLmluc3BlY3QoLi4uYXJncykpO1xufTtcblxuY29uc3QgaW52YWxpZFJhbmdlID0gKHN0YXJ0LCBlbmQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0UmFuZ2VzID09PSB0cnVlKSB0aHJvdyByYW5nZUVycm9yKFtzdGFydCwgZW5kXSk7XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IGludmFsaWRTdGVwID0gKHN0ZXAsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMuc3RyaWN0UmFuZ2VzID09PSB0cnVlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgc3RlcCBcIiR7c3RlcH1cIiB0byBiZSBhIG51bWJlcmApO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmNvbnN0IGZpbGxOdW1iZXJzID0gKHN0YXJ0LCBlbmQsIHN0ZXAgPSAxLCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IGEgPSBOdW1iZXIoc3RhcnQpO1xuICBsZXQgYiA9IE51bWJlcihlbmQpO1xuXG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihhKSB8fCAhTnVtYmVyLmlzSW50ZWdlcihiKSkge1xuICAgIGlmIChvcHRpb25zLnN0cmljdFJhbmdlcyA9PT0gdHJ1ZSkgdGhyb3cgcmFuZ2VFcnJvcihbc3RhcnQsIGVuZF0pO1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8vIGZpeCBuZWdhdGl2ZSB6ZXJvXG4gIGlmIChhID09PSAwKSBhID0gMDtcbiAgaWYgKGIgPT09IDApIGIgPSAwO1xuXG4gIGxldCBkZXNjZW5kaW5nID0gYSA+IGI7XG4gIGxldCBzdGFydFN0cmluZyA9IFN0cmluZyhzdGFydCk7XG4gIGxldCBlbmRTdHJpbmcgPSBTdHJpbmcoZW5kKTtcbiAgbGV0IHN0ZXBTdHJpbmcgPSBTdHJpbmcoc3RlcCk7XG4gIHN0ZXAgPSBNYXRoLm1heChNYXRoLmFicyhzdGVwKSwgMSk7XG5cbiAgbGV0IHBhZGRlZCA9IHplcm9zKHN0YXJ0U3RyaW5nKSB8fCB6ZXJvcyhlbmRTdHJpbmcpIHx8IHplcm9zKHN0ZXBTdHJpbmcpO1xuICBsZXQgbWF4TGVuID0gcGFkZGVkID8gTWF0aC5tYXgoc3RhcnRTdHJpbmcubGVuZ3RoLCBlbmRTdHJpbmcubGVuZ3RoLCBzdGVwU3RyaW5nLmxlbmd0aCkgOiAwO1xuICBsZXQgdG9OdW1iZXIgPSBwYWRkZWQgPT09IGZhbHNlICYmIHN0cmluZ2lmeShzdGFydCwgZW5kLCBvcHRpb25zKSA9PT0gZmFsc2U7XG4gIGxldCBmb3JtYXQgPSBvcHRpb25zLnRyYW5zZm9ybSB8fCB0cmFuc2Zvcm0odG9OdW1iZXIpO1xuXG4gIGlmIChvcHRpb25zLnRvUmVnZXggJiYgc3RlcCA9PT0gMSkge1xuICAgIHJldHVybiB0b1JhbmdlKHRvTWF4TGVuKHN0YXJ0LCBtYXhMZW4pLCB0b01heExlbihlbmQsIG1heExlbiksIHRydWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0geyBuZWdhdGl2ZXM6IFtdLCBwb3NpdGl2ZXM6IFtdIH07XG4gIGxldCBwdXNoID0gbnVtID0+IHBhcnRzW251bSA8IDAgPyAnbmVnYXRpdmVzJyA6ICdwb3NpdGl2ZXMnXS5wdXNoKE1hdGguYWJzKG51bSkpO1xuICBsZXQgcmFuZ2UgPSBbXTtcbiAgbGV0IGluZGV4ID0gMDtcblxuICB3aGlsZSAoZGVzY2VuZGluZyA/IGEgPj0gYiA6IGEgPD0gYikge1xuICAgIGlmIChvcHRpb25zLnRvUmVnZXggPT09IHRydWUgJiYgc3RlcCA+IDEpIHtcbiAgICAgIHB1c2goYSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmdlLnB1c2gocGFkKGZvcm1hdChhLCBpbmRleCksIG1heExlbiwgdG9OdW1iZXIpKTtcbiAgICB9XG4gICAgYSA9IGRlc2NlbmRpbmcgPyBhIC0gc3RlcCA6IGEgKyBzdGVwO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAob3B0aW9ucy50b1JlZ2V4ID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIHN0ZXAgPiAxXG4gICAgICA/IHRvU2VxdWVuY2UocGFydHMsIG9wdGlvbnMpXG4gICAgICA6IHRvUmVnZXgocmFuZ2UsIG51bGwsIHsgd3JhcDogZmFsc2UsIC4uLm9wdGlvbnMgfSk7XG4gIH1cblxuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5jb25zdCBmaWxsTGV0dGVycyA9IChzdGFydCwgZW5kLCBzdGVwID0gMSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICgoIWlzTnVtYmVyKHN0YXJ0KSAmJiBzdGFydC5sZW5ndGggPiAxKSB8fCAoIWlzTnVtYmVyKGVuZCkgJiYgZW5kLmxlbmd0aCA+IDEpKSB7XG4gICAgcmV0dXJuIGludmFsaWRSYW5nZShzdGFydCwgZW5kLCBvcHRpb25zKTtcbiAgfVxuXG5cbiAgbGV0IGZvcm1hdCA9IG9wdGlvbnMudHJhbnNmb3JtIHx8ICh2YWwgPT4gU3RyaW5nLmZyb21DaGFyQ29kZSh2YWwpKTtcbiAgbGV0IGEgPSBgJHtzdGFydH1gLmNoYXJDb2RlQXQoMCk7XG4gIGxldCBiID0gYCR7ZW5kfWAuY2hhckNvZGVBdCgwKTtcblxuICBsZXQgZGVzY2VuZGluZyA9IGEgPiBiO1xuICBsZXQgbWluID0gTWF0aC5taW4oYSwgYik7XG4gIGxldCBtYXggPSBNYXRoLm1heChhLCBiKTtcblxuICBpZiAob3B0aW9ucy50b1JlZ2V4ICYmIHN0ZXAgPT09IDEpIHtcbiAgICByZXR1cm4gdG9SYW5nZShtaW4sIG1heCwgZmFsc2UsIG9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHJhbmdlID0gW107XG4gIGxldCBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKGRlc2NlbmRpbmcgPyBhID49IGIgOiBhIDw9IGIpIHtcbiAgICByYW5nZS5wdXNoKGZvcm1hdChhLCBpbmRleCkpO1xuICAgIGEgPSBkZXNjZW5kaW5nID8gYSAtIHN0ZXAgOiBhICsgc3RlcDtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudG9SZWdleCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiB0b1JlZ2V4KHJhbmdlLCBudWxsLCB7IHdyYXA6IGZhbHNlLCBvcHRpb25zIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuY29uc3QgZmlsbCA9IChzdGFydCwgZW5kLCBzdGVwLCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKGVuZCA9PSBudWxsICYmIGlzVmFsaWRWYWx1ZShzdGFydCkpIHtcbiAgICByZXR1cm4gW3N0YXJ0XTtcbiAgfVxuXG4gIGlmICghaXNWYWxpZFZhbHVlKHN0YXJ0KSB8fCAhaXNWYWxpZFZhbHVlKGVuZCkpIHtcbiAgICByZXR1cm4gaW52YWxpZFJhbmdlKHN0YXJ0LCBlbmQsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZpbGwoc3RhcnQsIGVuZCwgMSwgeyB0cmFuc2Zvcm06IHN0ZXAgfSk7XG4gIH1cblxuICBpZiAoaXNPYmplY3Qoc3RlcCkpIHtcbiAgICByZXR1cm4gZmlsbChzdGFydCwgZW5kLCAwLCBzdGVwKTtcbiAgfVxuXG4gIGxldCBvcHRzID0geyAuLi5vcHRpb25zIH07XG4gIGlmIChvcHRzLmNhcHR1cmUgPT09IHRydWUpIG9wdHMud3JhcCA9IHRydWU7XG4gIHN0ZXAgPSBzdGVwIHx8IG9wdHMuc3RlcCB8fCAxO1xuXG4gIGlmICghaXNOdW1iZXIoc3RlcCkpIHtcbiAgICBpZiAoc3RlcCAhPSBudWxsICYmICFpc09iamVjdChzdGVwKSkgcmV0dXJuIGludmFsaWRTdGVwKHN0ZXAsIG9wdHMpO1xuICAgIHJldHVybiBmaWxsKHN0YXJ0LCBlbmQsIDEsIHN0ZXApO1xuICB9XG5cbiAgaWYgKGlzTnVtYmVyKHN0YXJ0KSAmJiBpc051bWJlcihlbmQpKSB7XG4gICAgcmV0dXJuIGZpbGxOdW1iZXJzKHN0YXJ0LCBlbmQsIHN0ZXAsIG9wdHMpO1xuICB9XG5cbiAgcmV0dXJuIGZpbGxMZXR0ZXJzKHN0YXJ0LCBlbmQsIE1hdGgubWF4KE1hdGguYWJzKHN0ZXApLCAxKSwgb3B0cyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGw7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmaWxsID0gcmVxdWlyZSgnZmlsbC1yYW5nZScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnN0IGNvbXBpbGUgPSAoYXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IHdhbGsgPSAobm9kZSwgcGFyZW50ID0ge30pID0+IHtcbiAgICBsZXQgaW52YWxpZEJsb2NrID0gdXRpbHMuaXNJbnZhbGlkQnJhY2UocGFyZW50KTtcbiAgICBsZXQgaW52YWxpZE5vZGUgPSBub2RlLmludmFsaWQgPT09IHRydWUgJiYgb3B0aW9ucy5lc2NhcGVJbnZhbGlkID09PSB0cnVlO1xuICAgIGxldCBpbnZhbGlkID0gaW52YWxpZEJsb2NrID09PSB0cnVlIHx8IGludmFsaWROb2RlID09PSB0cnVlO1xuICAgIGxldCBwcmVmaXggPSBvcHRpb25zLmVzY2FwZUludmFsaWQgPT09IHRydWUgPyAnXFxcXCcgOiAnJztcbiAgICBsZXQgb3V0cHV0ID0gJyc7XG5cbiAgICBpZiAobm9kZS5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBwcmVmaXggKyBub2RlLnZhbHVlO1xuICAgIH1cbiAgICBpZiAobm9kZS5pc0Nsb3NlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ICsgbm9kZS52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnb3BlbicpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkID8gKHByZWZpeCArIG5vZGUudmFsdWUpIDogJygnO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgIHJldHVybiBpbnZhbGlkID8gKHByZWZpeCArIG5vZGUudmFsdWUpIDogJyknO1xuICAgIH1cblxuICAgIGlmIChub2RlLnR5cGUgPT09ICdjb21tYScpIHtcbiAgICAgIHJldHVybiBub2RlLnByZXYudHlwZSA9PT0gJ2NvbW1hJyA/ICcnIDogKGludmFsaWQgPyBub2RlLnZhbHVlIDogJ3wnKTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIG5vZGUudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubm9kZXMgJiYgbm9kZS5yYW5nZXMgPiAwKSB7XG4gICAgICBsZXQgYXJncyA9IHV0aWxzLnJlZHVjZShub2RlLm5vZGVzKTtcbiAgICAgIGxldCByYW5nZSA9IGZpbGwoLi4uYXJncywgeyAuLi5vcHRpb25zLCB3cmFwOiBmYWxzZSwgdG9SZWdleDogdHJ1ZSB9KTtcblxuICAgICAgaWYgKHJhbmdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPiAxICYmIHJhbmdlLmxlbmd0aCA+IDEgPyBgKCR7cmFuZ2V9KWAgOiByYW5nZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2Rlcykge1xuICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5ub2Rlcykge1xuICAgICAgICBvdXRwdXQgKz0gd2FsayhjaGlsZCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgcmV0dXJuIHdhbGsoYXN0KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGlsZTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZpbGwgPSByZXF1aXJlKCdmaWxsLXJhbmdlJyk7XG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL3N0cmluZ2lmeScpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnN0IGFwcGVuZCA9IChxdWV1ZSA9ICcnLCBzdGFzaCA9ICcnLCBlbmNsb3NlID0gZmFsc2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gIHF1ZXVlID0gW10uY29uY2F0KHF1ZXVlKTtcbiAgc3Rhc2ggPSBbXS5jb25jYXQoc3Rhc2gpO1xuXG4gIGlmICghc3Rhc2gubGVuZ3RoKSByZXR1cm4gcXVldWU7XG4gIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVuY2xvc2UgPyB1dGlscy5mbGF0dGVuKHN0YXNoKS5tYXAoZWxlID0+IGB7JHtlbGV9fWApIDogc3Rhc2g7XG4gIH1cblxuICBmb3IgKGxldCBpdGVtIG9mIHF1ZXVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIGl0ZW0pIHtcbiAgICAgICAgcmVzdWx0LnB1c2goYXBwZW5kKHZhbHVlLCBzdGFzaCwgZW5jbG9zZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBlbGUgb2Ygc3Rhc2gpIHtcbiAgICAgICAgaWYgKGVuY2xvc2UgPT09IHRydWUgJiYgdHlwZW9mIGVsZSA9PT0gJ3N0cmluZycpIGVsZSA9IGB7JHtlbGV9fWA7XG4gICAgICAgIHJlc3VsdC5wdXNoKEFycmF5LmlzQXJyYXkoZWxlKSA/IGFwcGVuZChpdGVtLCBlbGUsIGVuY2xvc2UpIDogKGl0ZW0gKyBlbGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHV0aWxzLmZsYXR0ZW4ocmVzdWx0KTtcbn07XG5cbmNvbnN0IGV4cGFuZCA9IChhc3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBsZXQgcmFuZ2VMaW1pdCA9IG9wdGlvbnMucmFuZ2VMaW1pdCA9PT0gdm9pZCAwID8gMTAwMCA6IG9wdGlvbnMucmFuZ2VMaW1pdDtcblxuICBsZXQgd2FsayA9IChub2RlLCBwYXJlbnQgPSB7fSkgPT4ge1xuICAgIG5vZGUucXVldWUgPSBbXTtcblxuICAgIGxldCBwID0gcGFyZW50O1xuICAgIGxldCBxID0gcGFyZW50LnF1ZXVlO1xuXG4gICAgd2hpbGUgKHAudHlwZSAhPT0gJ2JyYWNlJyAmJiBwLnR5cGUgIT09ICdyb290JyAmJiBwLnBhcmVudCkge1xuICAgICAgcCA9IHAucGFyZW50O1xuICAgICAgcSA9IHAucXVldWU7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuaW52YWxpZCB8fCBub2RlLmRvbGxhcikge1xuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBzdHJpbmdpZnkobm9kZSwgb3B0aW9ucykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS50eXBlID09PSAnYnJhY2UnICYmIG5vZGUuaW52YWxpZCAhPT0gdHJ1ZSAmJiBub2RlLm5vZGVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBbJ3t9J10pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5ub2RlcyAmJiBub2RlLnJhbmdlcyA+IDApIHtcbiAgICAgIGxldCBhcmdzID0gdXRpbHMucmVkdWNlKG5vZGUubm9kZXMpO1xuXG4gICAgICBpZiAodXRpbHMuZXhjZWVkc0xpbWl0KC4uLmFyZ3MsIG9wdGlvbnMuc3RlcCwgcmFuZ2VMaW1pdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2V4cGFuZGVkIGFycmF5IGxlbmd0aCBleGNlZWRzIHJhbmdlIGxpbWl0LiBVc2Ugb3B0aW9ucy5yYW5nZUxpbWl0IHRvIGluY3JlYXNlIG9yIGRpc2FibGUgdGhlIGxpbWl0LicpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmFuZ2UgPSBmaWxsKC4uLmFyZ3MsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByYW5nZSA9IHN0cmluZ2lmeShub2RlLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCByYW5nZSkpO1xuICAgICAgbm9kZS5ub2RlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBlbmNsb3NlID0gdXRpbHMuZW5jbG9zZUJyYWNlKG5vZGUpO1xuICAgIGxldCBxdWV1ZSA9IG5vZGUucXVldWU7XG4gICAgbGV0IGJsb2NrID0gbm9kZTtcblxuICAgIHdoaWxlIChibG9jay50eXBlICE9PSAnYnJhY2UnICYmIGJsb2NrLnR5cGUgIT09ICdyb290JyAmJiBibG9jay5wYXJlbnQpIHtcbiAgICAgIGJsb2NrID0gYmxvY2sucGFyZW50O1xuICAgICAgcXVldWUgPSBibG9jay5xdWV1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGUubm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjaGlsZCA9IG5vZGUubm9kZXNbaV07XG5cbiAgICAgIGlmIChjaGlsZC50eXBlID09PSAnY29tbWEnICYmIG5vZGUudHlwZSA9PT0gJ2JyYWNlJykge1xuICAgICAgICBpZiAoaSA9PT0gMSkgcXVldWUucHVzaCgnJyk7XG4gICAgICAgIHF1ZXVlLnB1c2goJycpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnR5cGUgPT09ICdjbG9zZScpIHtcbiAgICAgICAgcS5wdXNoKGFwcGVuZChxLnBvcCgpLCBxdWV1ZSwgZW5jbG9zZSkpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnZhbHVlICYmIGNoaWxkLnR5cGUgIT09ICdvcGVuJykge1xuICAgICAgICBxdWV1ZS5wdXNoKGFwcGVuZChxdWV1ZS5wb3AoKSwgY2hpbGQudmFsdWUpKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5ub2Rlcykge1xuICAgICAgICB3YWxrKGNoaWxkLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVldWU7XG4gIH07XG5cbiAgcmV0dXJuIHV0aWxzLmZsYXR0ZW4od2Fsayhhc3QpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwYW5kO1xuIiwgIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BWF9MRU5HVEg6IDEwMjQgKiA2NCxcblxuICAvLyBEaWdpdHNcbiAgQ0hBUl8wOiAnMCcsIC8qIDAgKi9cbiAgQ0hBUl85OiAnOScsIC8qIDkgKi9cblxuICAvLyBBbHBoYWJldCBjaGFycy5cbiAgQ0hBUl9VUFBFUkNBU0VfQTogJ0EnLCAvKiBBICovXG4gIENIQVJfTE9XRVJDQVNFX0E6ICdhJywgLyogYSAqL1xuICBDSEFSX1VQUEVSQ0FTRV9aOiAnWicsIC8qIFogKi9cbiAgQ0hBUl9MT1dFUkNBU0VfWjogJ3onLCAvKiB6ICovXG5cbiAgQ0hBUl9MRUZUX1BBUkVOVEhFU0VTOiAnKCcsIC8qICggKi9cbiAgQ0hBUl9SSUdIVF9QQVJFTlRIRVNFUzogJyknLCAvKiApICovXG5cbiAgQ0hBUl9BU1RFUklTSzogJyonLCAvKiAqICovXG5cbiAgLy8gTm9uLWFscGhhYmV0aWMgY2hhcnMuXG4gIENIQVJfQU1QRVJTQU5EOiAnJicsIC8qICYgKi9cbiAgQ0hBUl9BVDogJ0AnLCAvKiBAICovXG4gIENIQVJfQkFDS1NMQVNIOiAnXFxcXCcsIC8qIFxcICovXG4gIENIQVJfQkFDS1RJQ0s6ICdgJywgLyogYCAqL1xuICBDSEFSX0NBUlJJQUdFX1JFVFVSTjogJ1xccicsIC8qIFxcciAqL1xuICBDSEFSX0NJUkNVTUZMRVhfQUNDRU5UOiAnXicsIC8qIF4gKi9cbiAgQ0hBUl9DT0xPTjogJzonLCAvKiA6ICovXG4gIENIQVJfQ09NTUE6ICcsJywgLyogLCAqL1xuICBDSEFSX0RPTExBUjogJyQnLCAvKiAuICovXG4gIENIQVJfRE9UOiAnLicsIC8qIC4gKi9cbiAgQ0hBUl9ET1VCTEVfUVVPVEU6ICdcIicsIC8qIFwiICovXG4gIENIQVJfRVFVQUw6ICc9JywgLyogPSAqL1xuICBDSEFSX0VYQ0xBTUFUSU9OX01BUks6ICchJywgLyogISAqL1xuICBDSEFSX0ZPUk1fRkVFRDogJ1xcZicsIC8qIFxcZiAqL1xuICBDSEFSX0ZPUldBUkRfU0xBU0g6ICcvJywgLyogLyAqL1xuICBDSEFSX0hBU0g6ICcjJywgLyogIyAqL1xuICBDSEFSX0hZUEhFTl9NSU5VUzogJy0nLCAvKiAtICovXG4gIENIQVJfTEVGVF9BTkdMRV9CUkFDS0VUOiAnPCcsIC8qIDwgKi9cbiAgQ0hBUl9MRUZUX0NVUkxZX0JSQUNFOiAneycsIC8qIHsgKi9cbiAgQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUOiAnWycsIC8qIFsgKi9cbiAgQ0hBUl9MSU5FX0ZFRUQ6ICdcXG4nLCAvKiBcXG4gKi9cbiAgQ0hBUl9OT19CUkVBS19TUEFDRTogJ1xcdTAwQTAnLCAvKiBcXHUwMEEwICovXG4gIENIQVJfUEVSQ0VOVDogJyUnLCAvKiAlICovXG4gIENIQVJfUExVUzogJysnLCAvKiArICovXG4gIENIQVJfUVVFU1RJT05fTUFSSzogJz8nLCAvKiA/ICovXG4gIENIQVJfUklHSFRfQU5HTEVfQlJBQ0tFVDogJz4nLCAvKiA+ICovXG4gIENIQVJfUklHSFRfQ1VSTFlfQlJBQ0U6ICd9JywgLyogfSAqL1xuICBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUOiAnXScsIC8qIF0gKi9cbiAgQ0hBUl9TRU1JQ09MT046ICc7JywgLyogOyAqL1xuICBDSEFSX1NJTkdMRV9RVU9URTogJ1xcJycsIC8qICcgKi9cbiAgQ0hBUl9TUEFDRTogJyAnLCAvKiAgICovXG4gIENIQVJfVEFCOiAnXFx0JywgLyogXFx0ICovXG4gIENIQVJfVU5ERVJTQ09SRTogJ18nLCAvKiBfICovXG4gIENIQVJfVkVSVElDQUxfTElORTogJ3wnLCAvKiB8ICovXG4gIENIQVJfWkVST19XSURUSF9OT0JSRUFLX1NQQUNFOiAnXFx1RkVGRicgLyogXFx1RkVGRiAqL1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vc3RyaW5naWZ5Jyk7XG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3Qge1xuICBNQVhfTEVOR1RILFxuICBDSEFSX0JBQ0tTTEFTSCwgLyogXFwgKi9cbiAgQ0hBUl9CQUNLVElDSywgLyogYCAqL1xuICBDSEFSX0NPTU1BLCAvKiAsICovXG4gIENIQVJfRE9ULCAvKiAuICovXG4gIENIQVJfTEVGVF9QQVJFTlRIRVNFUywgLyogKCAqL1xuICBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTLCAvKiApICovXG4gIENIQVJfTEVGVF9DVVJMWV9CUkFDRSwgLyogeyAqL1xuICBDSEFSX1JJR0hUX0NVUkxZX0JSQUNFLCAvKiB9ICovXG4gIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCwgLyogWyAqL1xuICBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VULCAvKiBdICovXG4gIENIQVJfRE9VQkxFX1FVT1RFLCAvKiBcIiAqL1xuICBDSEFSX1NJTkdMRV9RVU9URSwgLyogJyAqL1xuICBDSEFSX05PX0JSRUFLX1NQQUNFLFxuICBDSEFSX1pFUk9fV0lEVEhfTk9CUkVBS19TUEFDRVxufSA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbi8qKlxuICogcGFyc2VcbiAqL1xuXG5jb25zdCBwYXJzZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IG1heCA9IHR5cGVvZiBvcHRzLm1heExlbmd0aCA9PT0gJ251bWJlcicgPyBNYXRoLm1pbihNQVhfTEVOR1RILCBvcHRzLm1heExlbmd0aCkgOiBNQVhfTEVOR1RIO1xuICBpZiAoaW5wdXQubGVuZ3RoID4gbWF4KSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKGBJbnB1dCBsZW5ndGggKCR7aW5wdXQubGVuZ3RofSksIGV4Y2VlZHMgbWF4IGNoYXJhY3RlcnMgKCR7bWF4fSlgKTtcbiAgfVxuXG4gIGxldCBhc3QgPSB7IHR5cGU6ICdyb290JywgaW5wdXQsIG5vZGVzOiBbXSB9O1xuICBsZXQgc3RhY2sgPSBbYXN0XTtcbiAgbGV0IGJsb2NrID0gYXN0O1xuICBsZXQgcHJldiA9IGFzdDtcbiAgbGV0IGJyYWNrZXRzID0gMDtcbiAgbGV0IGxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGRlcHRoID0gMDtcbiAgbGV0IHZhbHVlO1xuICBsZXQgbWVtbyA9IHt9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXJzXG4gICAqL1xuXG4gIGNvbnN0IGFkdmFuY2UgPSAoKSA9PiBpbnB1dFtpbmRleCsrXTtcbiAgY29uc3QgcHVzaCA9IG5vZGUgPT4ge1xuICAgIGlmIChub2RlLnR5cGUgPT09ICd0ZXh0JyAmJiBwcmV2LnR5cGUgPT09ICdkb3QnKSB7XG4gICAgICBwcmV2LnR5cGUgPSAndGV4dCc7XG4gICAgfVxuXG4gICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSAndGV4dCcgJiYgbm9kZS50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIHByZXYudmFsdWUgKz0gbm9kZS52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBibG9jay5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgIG5vZGUucGFyZW50ID0gYmxvY2s7XG4gICAgbm9kZS5wcmV2ID0gcHJldjtcbiAgICBwcmV2ID0gbm9kZTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBwdXNoKHsgdHlwZTogJ2JvcycgfSk7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgYmxvY2sgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICB2YWx1ZSA9IGFkdmFuY2UoKTtcblxuICAgIC8qKlxuICAgICAqIEludmFsaWQgY2hhcnNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9aRVJPX1dJRFRIX05PQlJFQUtfU1BBQ0UgfHwgdmFsdWUgPT09IENIQVJfTk9fQlJFQUtfU1BBQ0UpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzY2FwZWQgY2hhcnNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9CQUNLU0xBU0gpIHtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiAob3B0aW9ucy5rZWVwRXNjYXBpbmcgPyB2YWx1ZSA6ICcnKSArIGFkdmFuY2UoKSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IHNxdWFyZSBicmFja2V0IChsaXRlcmFsKTogJ10nXG4gICAgICovXG5cbiAgICBpZiAodmFsdWUgPT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlOiAnXFxcXCcgKyB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExlZnQgc3F1YXJlIGJyYWNrZXQ6ICdbJ1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX0xFRlRfU1FVQVJFX0JSQUNLRVQpIHtcbiAgICAgIGJyYWNrZXRzKys7XG5cbiAgICAgIGxldCBjbG9zZWQgPSB0cnVlO1xuICAgICAgbGV0IG5leHQ7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCAmJiAobmV4dCA9IGFkdmFuY2UoKSkpIHtcbiAgICAgICAgdmFsdWUgKz0gbmV4dDtcblxuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICAgICAgYnJhY2tldHMrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0ID09PSBDSEFSX0JBQ0tTTEFTSCkge1xuICAgICAgICAgIHZhbHVlICs9IGFkdmFuY2UoKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXh0ID09PSBDSEFSX1JJR0hUX1NRVUFSRV9CUkFDS0VUKSB7XG4gICAgICAgICAgYnJhY2tldHMtLTtcblxuICAgICAgICAgIGlmIChicmFja2V0cyA9PT0gMCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyZW50aGVzZXNcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9MRUZUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBibG9jayA9IHB1c2goeyB0eXBlOiAncGFyZW4nLCBub2RlczogW10gfSk7XG4gICAgICBzdGFjay5wdXNoKGJsb2NrKTtcbiAgICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX1JJR0hUX1BBUkVOVEhFU0VTKSB7XG4gICAgICBpZiAoYmxvY2sudHlwZSAhPT0gJ3BhcmVuJykge1xuICAgICAgICBwdXNoKHsgdHlwZTogJ3RleHQnLCB2YWx1ZSB9KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBibG9jayA9IHN0YWNrLnBvcCgpO1xuICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICBibG9jayA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUXVvdGVzOiAnfFwifGBcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9ET1VCTEVfUVVPVEUgfHwgdmFsdWUgPT09IENIQVJfU0lOR0xFX1FVT1RFIHx8IHZhbHVlID09PSBDSEFSX0JBQ0tUSUNLKSB7XG4gICAgICBsZXQgb3BlbiA9IHZhbHVlO1xuICAgICAgbGV0IG5leHQ7XG5cbiAgICAgIGlmIChvcHRpb25zLmtlZXBRdW90ZXMgIT09IHRydWUpIHtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoICYmIChuZXh0ID0gYWR2YW5jZSgpKSkge1xuICAgICAgICBpZiAobmV4dCA9PT0gQ0hBUl9CQUNLU0xBU0gpIHtcbiAgICAgICAgICB2YWx1ZSArPSBuZXh0ICsgYWR2YW5jZSgpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5leHQgPT09IG9wZW4pIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy5rZWVwUXVvdGVzID09PSB0cnVlKSB2YWx1ZSArPSBuZXh0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgKz0gbmV4dDtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMZWZ0IGN1cmx5IGJyYWNlOiAneydcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNFKSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBsZXQgZG9sbGFyID0gcHJldi52YWx1ZSAmJiBwcmV2LnZhbHVlLnNsaWNlKC0xKSA9PT0gJyQnIHx8IGJsb2NrLmRvbGxhciA9PT0gdHJ1ZTtcbiAgICAgIGxldCBicmFjZSA9IHtcbiAgICAgICAgdHlwZTogJ2JyYWNlJyxcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgY2xvc2U6IGZhbHNlLFxuICAgICAgICBkb2xsYXIsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBjb21tYXM6IDAsXG4gICAgICAgIHJhbmdlczogMCxcbiAgICAgICAgbm9kZXM6IFtdXG4gICAgICB9O1xuXG4gICAgICBibG9jayA9IHB1c2goYnJhY2UpO1xuICAgICAgc3RhY2sucHVzaChibG9jayk7XG4gICAgICBwdXNoKHsgdHlwZTogJ29wZW4nLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJpZ2h0IGN1cmx5IGJyYWNlOiAnfSdcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDRSkge1xuICAgICAgaWYgKGJsb2NrLnR5cGUgIT09ICdicmFjZScpIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBsZXQgdHlwZSA9ICdjbG9zZSc7XG4gICAgICBibG9jayA9IHN0YWNrLnBvcCgpO1xuICAgICAgYmxvY2suY2xvc2UgPSB0cnVlO1xuXG4gICAgICBwdXNoKHsgdHlwZSwgdmFsdWUgfSk7XG4gICAgICBkZXB0aC0tO1xuXG4gICAgICBibG9jayA9IHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tbWE6ICcsJ1xuICAgICAqL1xuXG4gICAgaWYgKHZhbHVlID09PSBDSEFSX0NPTU1BICYmIGRlcHRoID4gMCkge1xuICAgICAgaWYgKGJsb2NrLnJhbmdlcyA+IDApIHtcbiAgICAgICAgYmxvY2sucmFuZ2VzID0gMDtcbiAgICAgICAgbGV0IG9wZW4gPSBibG9jay5ub2Rlcy5zaGlmdCgpO1xuICAgICAgICBibG9jay5ub2RlcyA9IFtvcGVuLCB7IHR5cGU6ICd0ZXh0JywgdmFsdWU6IHN0cmluZ2lmeShibG9jaykgfV07XG4gICAgICB9XG5cbiAgICAgIHB1c2goeyB0eXBlOiAnY29tbWEnLCB2YWx1ZSB9KTtcbiAgICAgIGJsb2NrLmNvbW1hcysrO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG90OiAnLidcbiAgICAgKi9cblxuICAgIGlmICh2YWx1ZSA9PT0gQ0hBUl9ET1QgJiYgZGVwdGggPiAwICYmIGJsb2NrLmNvbW1hcyA9PT0gMCkge1xuICAgICAgbGV0IHNpYmxpbmdzID0gYmxvY2subm9kZXM7XG5cbiAgICAgIGlmIChkZXB0aCA9PT0gMCB8fCBzaWJsaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcHVzaCh7IHR5cGU6ICd0ZXh0JywgdmFsdWUgfSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldi50eXBlID09PSAnZG90Jykge1xuICAgICAgICBibG9jay5yYW5nZSA9IFtdO1xuICAgICAgICBwcmV2LnZhbHVlICs9IHZhbHVlO1xuICAgICAgICBwcmV2LnR5cGUgPSAncmFuZ2UnO1xuXG4gICAgICAgIGlmIChibG9jay5ub2Rlcy5sZW5ndGggIT09IDMgJiYgYmxvY2subm9kZXMubGVuZ3RoICE9PSA1KSB7XG4gICAgICAgICAgYmxvY2suaW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgYmxvY2sucmFuZ2VzID0gMDtcbiAgICAgICAgICBwcmV2LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBibG9jay5yYW5nZXMrKztcbiAgICAgICAgYmxvY2suYXJncyA9IFtdO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXYudHlwZSA9PT0gJ3JhbmdlJykge1xuICAgICAgICBzaWJsaW5ncy5wb3AoKTtcblxuICAgICAgICBsZXQgYmVmb3JlID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGJlZm9yZS52YWx1ZSArPSBwcmV2LnZhbHVlICsgdmFsdWU7XG4gICAgICAgIHByZXYgPSBiZWZvcmU7XG4gICAgICAgIGJsb2NrLnJhbmdlcy0tO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcHVzaCh7IHR5cGU6ICdkb3QnLCB2YWx1ZSB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRleHRcbiAgICAgKi9cblxuICAgIHB1c2goeyB0eXBlOiAndGV4dCcsIHZhbHVlIH0pO1xuICB9XG5cbiAgLy8gTWFyayBpbWJhbGFuY2VkIGJyYWNlcyBhbmQgYnJhY2tldHMgYXMgaW52YWxpZFxuICBkbyB7XG4gICAgYmxvY2sgPSBzdGFjay5wb3AoKTtcblxuICAgIGlmIChibG9jay50eXBlICE9PSAncm9vdCcpIHtcbiAgICAgIGJsb2NrLm5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIGlmICghbm9kZS5ub2Rlcykge1xuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdvcGVuJykgbm9kZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdjbG9zZScpIG5vZGUuaXNDbG9zZSA9IHRydWU7XG4gICAgICAgICAgaWYgKCFub2RlLm5vZGVzKSBub2RlLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgbm9kZS5pbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGdldCB0aGUgbG9jYXRpb24gb2YgdGhlIGJsb2NrIG9uIHBhcmVudC5ub2RlcyAoYmxvY2sncyBzaWJsaW5ncylcbiAgICAgIGxldCBwYXJlbnQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcbiAgICAgIGxldCBpbmRleCA9IHBhcmVudC5ub2Rlcy5pbmRleE9mKGJsb2NrKTtcbiAgICAgIC8vIHJlcGxhY2UgdGhlIChpbnZhbGlkKSBibG9jayB3aXRoIGl0J3Mgbm9kZXNcbiAgICAgIHBhcmVudC5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEsIC4uLmJsb2NrLm5vZGVzKTtcbiAgICB9XG4gIH0gd2hpbGUgKHN0YWNrLmxlbmd0aCA+IDApO1xuXG4gIHB1c2goeyB0eXBlOiAnZW9zJyB9KTtcbiAgcmV0dXJuIGFzdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdHJpbmdpZnkgPSByZXF1aXJlKCcuL2xpYi9zdHJpbmdpZnknKTtcbmNvbnN0IGNvbXBpbGUgPSByZXF1aXJlKCcuL2xpYi9jb21waWxlJyk7XG5jb25zdCBleHBhbmQgPSByZXF1aXJlKCcuL2xpYi9leHBhbmQnKTtcbmNvbnN0IHBhcnNlID0gcmVxdWlyZSgnLi9saWIvcGFyc2UnKTtcblxuLyoqXG4gKiBFeHBhbmQgdGhlIGdpdmVuIHBhdHRlcm4gb3IgY3JlYXRlIGEgcmVnZXgtY29tcGF0aWJsZSBzdHJpbmcuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuICogY29uc29sZS5sb2coYnJhY2VzKCd7YSxiLGN9JywgeyBjb21waWxlOiB0cnVlIH0pKTsgLy89PiBbJyhhfGJ8YyknXVxuICogY29uc29sZS5sb2coYnJhY2VzKCd7YSxiLGN9JykpOyAvLz0+IFsnYScsICdiJywgJ2MnXVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmBcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuY29uc3QgYnJhY2VzID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgbGV0IG91dHB1dCA9IFtdO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgIGZvciAobGV0IHBhdHRlcm4gb2YgaW5wdXQpIHtcbiAgICAgIGxldCByZXN1bHQgPSBicmFjZXMuY3JlYXRlKHBhdHRlcm4sIG9wdGlvbnMpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICBvdXRwdXQucHVzaCguLi5yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0LnB1c2gocmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0gW10uY29uY2F0KGJyYWNlcy5jcmVhdGUoaW5wdXQsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZXhwYW5kID09PSB0cnVlICYmIG9wdGlvbnMubm9kdXBlcyA9PT0gdHJ1ZSkge1xuICAgIG91dHB1dCA9IFsuLi5uZXcgU2V0KG91dHB1dCldO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCB3aXRoIHRoZSBnaXZlbiBgb3B0aW9uc2AuXG4gKlxuICogYGBganNcbiAqIC8vIGJyYWNlcy5wYXJzZShwYXR0ZXJuLCBbLCBvcHRpb25zXSk7XG4gKiBjb25zdCBhc3QgPSBicmFjZXMucGFyc2UoJ2Eve2IsY30vZCcpO1xuICogY29uc29sZS5sb2coYXN0KTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IHBhdHRlcm4gQnJhY2UgcGF0dGVybiB0byBwYXJzZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBBU1RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuYnJhY2VzLnBhcnNlID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHBhcnNlKGlucHV0LCBvcHRpb25zKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYnJhY2VzIHN0cmluZyBmcm9tIGFuIEFTVCwgb3IgYW4gQVNUIG5vZGUuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IGJyYWNlcyA9IHJlcXVpcmUoJ2JyYWNlcycpO1xuICogbGV0IGFzdCA9IGJyYWNlcy5wYXJzZSgnZm9vL3thLGJ9L2JhcicpO1xuICogY29uc29sZS5sb2coc3RyaW5naWZ5KGFzdC5ub2Rlc1syXSkpOyAvLz0+ICd7YSxifSdcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgQnJhY2UgcGF0dGVybiBvciBBU1QuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5zdHJpbmdpZnkgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBzdHJpbmdpZnkoYnJhY2VzLnBhcnNlKGlucHV0LCBvcHRpb25zKSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZ2lmeShpbnB1dCwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIENvbXBpbGVzIGEgYnJhY2UgcGF0dGVybiBpbnRvIGEgcmVnZXgtY29tcGF0aWJsZSwgb3B0aW1pemVkIHN0cmluZy5cbiAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgbWFpbiBbYnJhY2VzXSgjYnJhY2VzKSBmdW5jdGlvbiBieSBkZWZhdWx0LlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcy5jb21waWxlKCdhL3tiLGN9L2QnKSk7XG4gKiAvLz0+IFsnYS8oYnxjKS9kJ11cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBpbnB1dGAgQnJhY2UgcGF0dGVybiBvciBBU1QuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5jb21waWxlID0gKGlucHV0LCBvcHRpb25zID0ge30pID0+IHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dCA9IGJyYWNlcy5wYXJzZShpbnB1dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIGNvbXBpbGUoaW5wdXQsIG9wdGlvbnMpO1xufTtcblxuLyoqXG4gKiBFeHBhbmRzIGEgYnJhY2UgcGF0dGVybiBpbnRvIGFuIGFycmF5LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgdGhlXG4gKiBtYWluIFticmFjZXNdKCNicmFjZXMpIGZ1bmN0aW9uIHdoZW4gYG9wdGlvbnMuZXhwYW5kYCBpcyB0cnVlLiBCZWZvcmVcbiAqIHVzaW5nIHRoaXMgbWV0aG9kIGl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgcmVhZCB0aGUgW3BlcmZvcm1hbmNlIG5vdGVzXSgjcGVyZm9ybWFuY2UpKVxuICogYW5kIGFkdmFudGFnZXMgb2YgdXNpbmcgWy5jb21waWxlXSgjY29tcGlsZSkgaW5zdGVhZC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG4gKiBjb25zb2xlLmxvZyhicmFjZXMuZXhwYW5kKCdhL3tiLGN9L2QnKSk7XG4gKiAvLz0+IFsnYS9iL2QnLCAnYS9jL2QnXTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBCcmFjZSBwYXR0ZXJuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBleHBhbmRlZCB2YWx1ZXMuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmJyYWNlcy5leHBhbmQgPSAoaW5wdXQsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgIGlucHV0ID0gYnJhY2VzLnBhcnNlKGlucHV0LCBvcHRpb25zKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBleHBhbmQoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIC8vIGZpbHRlciBvdXQgZW1wdHkgc3RyaW5ncyBpZiBzcGVjaWZpZWRcbiAgaWYgKG9wdGlvbnMubm9lbXB0eSA9PT0gdHJ1ZSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICAvLyBmaWx0ZXIgb3V0IGR1cGxpY2F0ZXMgaWYgc3BlY2lmaWVkXG4gIGlmIChvcHRpb25zLm5vZHVwZXMgPT09IHRydWUpIHtcbiAgICByZXN1bHQgPSBbLi4ubmV3IFNldChyZXN1bHQpXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFByb2Nlc3NlcyBhIGJyYWNlIHBhdHRlcm4gYW5kIHJldHVybnMgZWl0aGVyIGFuIGV4cGFuZGVkIGFycmF5XG4gKiAoaWYgYG9wdGlvbnMuZXhwYW5kYCBpcyB0cnVlKSwgYSBoaWdobHkgb3B0aW1pemVkIHJlZ2V4LWNvbXBhdGlibGUgc3RyaW5nLlxuICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBtYWluIFticmFjZXNdKCNicmFjZXMpIGZ1bmN0aW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBicmFjZXMgPSByZXF1aXJlKCdicmFjZXMnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcy5jcmVhdGUoJ3VzZXItezIwMC4uMzAwfS9wcm9qZWN0LXthLGIsY30tezEuLjEwfScpKVxuICogLy89PiAndXNlci0oMjBbMC05XXwyWzEtOV1bMC05XXwzMDApL3Byb2plY3QtKGF8YnxjKS0oWzEtOV18MTApJ1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gIEJyYWNlIHBhdHRlcm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIGV4cGFuZGVkIHZhbHVlcy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuYnJhY2VzLmNyZWF0ZSA9IChpbnB1dCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmIChpbnB1dCA9PT0gJycgfHwgaW5wdXQubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBbaW5wdXRdO1xuICB9XG5cbiByZXR1cm4gb3B0aW9ucy5leHBhbmQgIT09IHRydWVcbiAgICA/IGJyYWNlcy5jb21waWxlKGlucHV0LCBvcHRpb25zKVxuICAgIDogYnJhY2VzLmV4cGFuZChpbnB1dCwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEV4cG9zZSBcImJyYWNlc1wiXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBicmFjZXM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgYnJhY2VzID0gcmVxdWlyZSgnYnJhY2VzJyk7XG5jb25zdCBwaWNvbWF0Y2ggPSByZXF1aXJlKCdwaWNvbWF0Y2gnKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgncGljb21hdGNoL2xpYi91dGlscycpO1xuY29uc3QgaXNFbXB0eVN0cmluZyA9IHZhbCA9PiB2YWwgPT09ICcnIHx8IHZhbCA9PT0gJy4vJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3MgdGhhdCBtYXRjaCBvbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tKGxpc3QsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tKFsnYS5qcycsICdhLnR4dCddLCBbJyouanMnXSkpO1xuICogLy89PiBbICdhLmpzJyBdXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5PHN0cmluZz59IGBsaXN0YCBMaXN0IG9mIHN0cmluZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheTxzdHJpbmc+fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpXG4gKiBAcmV0dXJuIHtBcnJheX0gUmV0dXJucyBhbiBhcnJheSBvZiBtYXRjaGVzXG4gKiBAc3VtbWFyeSBmYWxzZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5jb25zdCBtaWNyb21hdGNoID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIHBhdHRlcm5zID0gW10uY29uY2F0KHBhdHRlcm5zKTtcbiAgbGlzdCA9IFtdLmNvbmNhdChsaXN0KTtcblxuICBsZXQgb21pdCA9IG5ldyBTZXQoKTtcbiAgbGV0IGtlZXAgPSBuZXcgU2V0KCk7XG4gIGxldCBpdGVtcyA9IG5ldyBTZXQoKTtcbiAgbGV0IG5lZ2F0aXZlcyA9IDA7XG5cbiAgbGV0IG9uUmVzdWx0ID0gc3RhdGUgPT4ge1xuICAgIGl0ZW1zLmFkZChzdGF0ZS5vdXRwdXQpO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMub25SZXN1bHQpIHtcbiAgICAgIG9wdGlvbnMub25SZXN1bHQoc3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdHRlcm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGlzTWF0Y2ggPSBwaWNvbWF0Y2goU3RyaW5nKHBhdHRlcm5zW2ldKSwgeyAuLi5vcHRpb25zLCBvblJlc3VsdCB9LCB0cnVlKTtcbiAgICBsZXQgbmVnYXRlZCA9IGlzTWF0Y2guc3RhdGUubmVnYXRlZCB8fCBpc01hdGNoLnN0YXRlLm5lZ2F0ZWRFeHRnbG9iO1xuICAgIGlmIChuZWdhdGVkKSBuZWdhdGl2ZXMrKztcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgbGV0IG1hdGNoZWQgPSBpc01hdGNoKGl0ZW0sIHRydWUpO1xuXG4gICAgICBsZXQgbWF0Y2ggPSBuZWdhdGVkID8gIW1hdGNoZWQuaXNNYXRjaCA6IG1hdGNoZWQuaXNNYXRjaDtcbiAgICAgIGlmICghbWF0Y2gpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBvbWl0LmFkZChtYXRjaGVkLm91dHB1dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbWl0LmRlbGV0ZShtYXRjaGVkLm91dHB1dCk7XG4gICAgICAgIGtlZXAuYWRkKG1hdGNoZWQub3V0cHV0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gbmVnYXRpdmVzID09PSBwYXR0ZXJucy5sZW5ndGggPyBbLi4uaXRlbXNdIDogWy4uLmtlZXBdO1xuICBsZXQgbWF0Y2hlcyA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiAhb21pdC5oYXMoaXRlbSkpO1xuXG4gIGlmIChvcHRpb25zICYmIG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKG9wdGlvbnMuZmFpbGdsb2IgPT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWF0Y2hlcyBmb3VuZCBmb3IgXCIke3BhdHRlcm5zLmpvaW4oJywgJyl9XCJgKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5ub251bGwgPT09IHRydWUgfHwgb3B0aW9ucy5udWxsZ2xvYiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMudW5lc2NhcGUgPyBwYXR0ZXJucy5tYXAocCA9PiBwLnJlcGxhY2UoL1xcXFwvZywgJycpKSA6IHBhdHRlcm5zO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufTtcblxuLyoqXG4gKiBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICovXG5cbm1pY3JvbWF0Y2gubWF0Y2ggPSBtaWNyb21hdGNoO1xuXG4vKipcbiAqIFJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uIGZyb20gdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5gIGFuZCBgb3B0aW9uc2AuXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gdGFrZXMgYSBzdHJpbmcgdG8gbWF0Y2ggYXMgaXRzIG9ubHkgYXJndW1lbnQgYW5kIHJldHVybnNcbiAqIHRydWUgaWYgdGhlIHN0cmluZyBpcyBhIG1hdGNoLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLm1hdGNoZXIocGF0dGVyblssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCBpc01hdGNoID0gbW0ubWF0Y2hlcignKi4hKCphKScpO1xuICogY29uc29sZS5sb2coaXNNYXRjaCgnYS5hJykpOyAvLz0+IGZhbHNlXG4gKiBjb25zb2xlLmxvZyhpc01hdGNoKCdhLmInKSk7IC8vPT4gdHJ1ZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gIEdsb2IgcGF0dGVyblxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7RnVuY3Rpb259IFJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLm1hdGNoZXIgPSAocGF0dGVybiwgb3B0aW9ucykgPT4gcGljb21hdGNoKHBhdHRlcm4sIG9wdGlvbnMpO1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiAqKmFueSoqIG9mIHRoZSBnaXZlbiBnbG9iIGBwYXR0ZXJuc2AgbWF0Y2ggdGhlIHNwZWNpZmllZCBgc3RyaW5nYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5pc01hdGNoKHN0cmluZywgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uaXNNYXRjaCgnYS5hJywgWydiLionLCAnKi5hJ10pKTsgLy89PiB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5pc01hdGNoKCdhLmEnLCAnYi4qJykpOyAvLz0+IGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYCBUaGUgc3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYFtvcHRpb25zXWAgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpLlxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBwYXR0ZXJucyBtYXRjaCBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmlzTWF0Y2ggPSAoc3RyLCBwYXR0ZXJucywgb3B0aW9ucykgPT4gcGljb21hdGNoKHBhdHRlcm5zLCBvcHRpb25zKShzdHIpO1xuXG4vKipcbiAqIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gKi9cblxubWljcm9tYXRjaC5hbnkgPSBtaWNyb21hdGNoLmlzTWF0Y2g7XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygc3RyaW5ncyB0aGF0IF8qKmRvIG5vdCBtYXRjaCBhbnkqKl8gb2YgdGhlIGdpdmVuIGBwYXR0ZXJuc2AuXG4gKlxuICogYGBganNcbiAqIGNvbnN0IG1tID0gcmVxdWlyZSgnbWljcm9tYXRjaCcpO1xuICogLy8gbW0ubm90KGxpc3QsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLm5vdChbJ2EuYScsICdiLmInLCAnYy5jJ10sICcqLmEnKSk7XG4gKiAvLz0+IFsnYi5iJywgJ2MuYyddXG4gKiBgYGBcbiAqIEBwYXJhbSB7QXJyYXl9IGBsaXN0YCBBcnJheSBvZiBzdHJpbmdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJuIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7QXJyYXl9IFJldHVybnMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0aGF0ICoqZG8gbm90IG1hdGNoKiogdGhlIGdpdmVuIHBhdHRlcm5zLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLm5vdCA9IChsaXN0LCBwYXR0ZXJucywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHBhdHRlcm5zID0gW10uY29uY2F0KHBhdHRlcm5zKS5tYXAoU3RyaW5nKTtcbiAgbGV0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgbGV0IGl0ZW1zID0gW107XG5cbiAgbGV0IG9uUmVzdWx0ID0gc3RhdGUgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uUmVzdWx0KSBvcHRpb25zLm9uUmVzdWx0KHN0YXRlKTtcbiAgICBpdGVtcy5wdXNoKHN0YXRlLm91dHB1dCk7XG4gIH07XG5cbiAgbGV0IG1hdGNoZXMgPSBtaWNyb21hdGNoKGxpc3QsIHBhdHRlcm5zLCB7IC4uLm9wdGlvbnMsIG9uUmVzdWx0IH0pO1xuXG4gIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICBpZiAoIW1hdGNoZXMuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIHJlc3VsdC5hZGQoaXRlbSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbLi4ucmVzdWx0XTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBgc3RyaW5nYCBjb250YWlucyB0aGUgZ2l2ZW4gcGF0dGVybi4gU2ltaWxhclxuICogdG8gWy5pc01hdGNoXSgjaXNNYXRjaCkgYnV0IHRoZSBwYXR0ZXJuIGNhbiBtYXRjaCBhbnkgcGFydCBvZiB0aGUgc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5jb250YWlucyhzdHJpbmcsIHBhdHRlcm5bLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uY29udGFpbnMoJ2FhL2JiL2NjJywgJypiJykpO1xuICogLy89PiB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5jb250YWlucygnYWEvYmIvY2MnLCAnKmQnKSk7XG4gKiAvLz0+IGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgc3RyYCBUaGUgc3RyaW5nIHRvIG1hdGNoLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgR2xvYiBwYXR0ZXJuIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBvZiB0aGUgcGF0dGVybnMgbWF0Y2hlcyBhbnkgcGFydCBvZiBgc3RyYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5jb250YWlucyA9IChzdHIsIHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBzdHJpbmc6IFwiJHt1dGlsLmluc3BlY3Qoc3RyKX1cImApO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zb21lKHAgPT4gbWljcm9tYXRjaC5jb250YWlucyhzdHIsIHAsIG9wdGlvbnMpKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNFbXB0eVN0cmluZyhzdHIpIHx8IGlzRW1wdHlTdHJpbmcocGF0dGVybikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RyLmluY2x1ZGVzKHBhdHRlcm4pIHx8IChzdHIuc3RhcnRzV2l0aCgnLi8nKSAmJiBzdHIuc2xpY2UoMikuaW5jbHVkZXMocGF0dGVybikpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWljcm9tYXRjaC5pc01hdGNoKHN0ciwgcGF0dGVybiwgeyAuLi5vcHRpb25zLCBjb250YWluczogdHJ1ZSB9KTtcbn07XG5cbi8qKlxuICogRmlsdGVyIHRoZSBrZXlzIG9mIHRoZSBnaXZlbiBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gYGdsb2JgIHBhdHRlcm5cbiAqIGFuZCBgb3B0aW9uc2AuIERvZXMgbm90IGF0dGVtcHQgdG8gbWF0Y2ggbmVzdGVkIGtleXMuIElmIHlvdSBuZWVkIHRoaXMgZmVhdHVyZSxcbiAqIHVzZSBbZ2xvYi1vYmplY3RdW10gaW5zdGVhZC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5tYXRjaEtleXMob2JqZWN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zdCBvYmogPSB7IGFhOiAnYScsIGFiOiAnYicsIGFjOiAnYycgfTtcbiAqIGNvbnNvbGUubG9nKG1tLm1hdGNoS2V5cyhvYmosICcqYicpKTtcbiAqIC8vPT4geyBhYjogJ2InIH1cbiAqIGBgYFxuICogQHBhcmFtIHtPYmplY3R9IGBvYmplY3RgIFRoZSBvYmplY3Qgd2l0aCBrZXlzIHRvIGZpbHRlci5cbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgcGF0dGVybnNgIE9uZSBvciBtb3JlIGdsb2IgcGF0dGVybnMgdG8gdXNlIGZvciBtYXRjaGluZy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGggb25seSBrZXlzIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIHBhdHRlcm5zLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLm1hdGNoS2V5cyA9IChvYmosIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGlmICghdXRpbHMuaXNPYmplY3Qob2JqKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QnKTtcbiAgfVxuICBsZXQga2V5cyA9IG1pY3JvbWF0Y2goT2JqZWN0LmtleXMob2JqKSwgcGF0dGVybnMsIG9wdGlvbnMpO1xuICBsZXQgcmVzID0ge307XG4gIGZvciAobGV0IGtleSBvZiBrZXlzKSByZXNba2V5XSA9IG9ialtrZXldO1xuICByZXR1cm4gcmVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgc29tZSBvZiB0aGUgc3RyaW5ncyBpbiB0aGUgZ2l2ZW4gYGxpc3RgIG1hdGNoIGFueSBvZiB0aGUgZ2l2ZW4gZ2xvYiBgcGF0dGVybnNgLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLnNvbWUobGlzdCwgcGF0dGVybnNbLCBvcHRpb25zXSk7XG4gKlxuICogY29uc29sZS5sb2cobW0uc29tZShbJ2Zvby5qcycsICdiYXIuanMnXSwgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICogY29uc29sZS5sb2cobW0uc29tZShbJ2Zvby5qcyddLCBbJyouanMnLCAnIWZvby5qcyddKSk7XG4gKiAvLyBmYWxzZVxuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYGxpc3RgIFRoZSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyB0byB0ZXN0LiBSZXR1cm5zIGFzIHNvb24gYXMgdGhlIGZpcnN0IG1hdGNoIGlzIGZvdW5kLlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGBwYXR0ZXJuc2AgT25lIG9yIG1vcmUgZ2xvYiBwYXR0ZXJucyB0byB1c2UgZm9yIG1hdGNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYCBTZWUgYXZhaWxhYmxlIFtvcHRpb25zXSgjb3B0aW9ucykgZm9yIGNoYW5naW5nIGhvdyBtYXRjaGVzIGFyZSBwZXJmb3JtZWRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhbnkgYHBhdHRlcm5zYCBtYXRjaGVzIGFueSBvZiB0aGUgc3RyaW5ncyBpbiBgbGlzdGBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5zb21lID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdLmNvbmNhdChsaXN0KTtcblxuICBmb3IgKGxldCBwYXR0ZXJuIG9mIFtdLmNvbmNhdChwYXR0ZXJucykpIHtcbiAgICBsZXQgaXNNYXRjaCA9IHBpY29tYXRjaChTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpO1xuICAgIGlmIChpdGVtcy5zb21lKGl0ZW0gPT4gaXNNYXRjaChpdGVtKSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBldmVyeSBzdHJpbmcgaW4gdGhlIGdpdmVuIGBsaXN0YCBtYXRjaGVzXG4gKiBhbnkgb2YgdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5zYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgbW0gPSByZXF1aXJlKCdtaWNyb21hdGNoJyk7XG4gKiAvLyBtbS5ldmVyeShsaXN0LCBwYXR0ZXJuc1ssIG9wdGlvbnNdKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5ldmVyeSgnZm9vLmpzJywgWydmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICogY29uc29sZS5sb2cobW0uZXZlcnkoWydmb28uanMnLCAnYmFyLmpzJ10sIFsnKi5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBjb25zb2xlLmxvZyhtbS5ldmVyeShbJ2Zvby5qcycsICdiYXIuanMnXSwgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gZmFsc2VcbiAqIGNvbnNvbGUubG9nKG1tLmV2ZXJ5KFsnZm9vLmpzJ10sIFsnKi5qcycsICchZm9vLmpzJ10pKTtcbiAqIC8vIGZhbHNlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgbGlzdGAgVGhlIHN0cmluZyBvciBhcnJheSBvZiBzdHJpbmdzIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFsbCBgcGF0dGVybnNgIG1hdGNoZXMgYWxsIG9mIHRoZSBzdHJpbmdzIGluIGBsaXN0YFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmV2ZXJ5ID0gKGxpc3QsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCBpdGVtcyA9IFtdLmNvbmNhdChsaXN0KTtcblxuICBmb3IgKGxldCBwYXR0ZXJuIG9mIFtdLmNvbmNhdChwYXR0ZXJucykpIHtcbiAgICBsZXQgaXNNYXRjaCA9IHBpY29tYXRjaChTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpO1xuICAgIGlmICghaXRlbXMuZXZlcnkoaXRlbSA9PiBpc01hdGNoKGl0ZW0pKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmICoqYWxsKiogb2YgdGhlIGdpdmVuIGBwYXR0ZXJuc2AgbWF0Y2hcbiAqIHRoZSBzcGVjaWZpZWQgc3RyaW5nLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmFsbChzdHJpbmcsIHBhdHRlcm5zWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWydmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWycqLmpzJywgJyFmb28uanMnXSkpO1xuICogLy8gZmFsc2VcbiAqXG4gKiBjb25zb2xlLmxvZyhtbS5hbGwoJ2Zvby5qcycsIFsnKi5qcycsICdmb28uanMnXSkpO1xuICogLy8gdHJ1ZVxuICpcbiAqIGNvbnNvbGUubG9nKG1tLmFsbCgnZm9vLmpzJywgWycqLmpzJywgJ2YqJywgJypvKicsICcqby5qcyddKSk7XG4gKiAvLyB0cnVlXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBgc3RyYCBUaGUgc3RyaW5nIHRvIHRlc3QuXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gYHBhdHRlcm5zYCBPbmUgb3IgbW9yZSBnbG9iIHBhdHRlcm5zIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIFNlZSBhdmFpbGFibGUgW29wdGlvbnNdKCNvcHRpb25zKSBmb3IgY2hhbmdpbmcgaG93IG1hdGNoZXMgYXJlIHBlcmZvcm1lZFxuICogQHJldHVybiB7Qm9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIGFueSBwYXR0ZXJucyBtYXRjaCBgc3RyYFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmFsbCA9IChzdHIsIHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgc3RyaW5nOiBcIiR7dXRpbC5pbnNwZWN0KHN0cil9XCJgKTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQocGF0dGVybnMpLmV2ZXJ5KHAgPT4gcGljb21hdGNoKHAsIG9wdGlvbnMpKHN0cikpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IG9mIG1hdGNoZXMgY2FwdHVyZWQgYnkgYHBhdHRlcm5gIGluIGBzdHJpbmcsIG9yIGBudWxsYCBpZiB0aGUgcGF0dGVybiBkaWQgbm90IG1hdGNoLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLmNhcHR1cmUocGF0dGVybiwgc3RyaW5nWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLmNhcHR1cmUoJ3Rlc3QvKi5qcycsICd0ZXN0L2Zvby5qcycpKTtcbiAqIC8vPT4gWydmb28nXVxuICogY29uc29sZS5sb2cobW0uY2FwdHVyZSgndGVzdC8qLmpzJywgJ2Zvby9iYXIuY3NzJykpO1xuICogLy89PiBudWxsXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgZ2xvYmAgR2xvYiBwYXR0ZXJuIHRvIHVzZSBmb3IgbWF0Y2hpbmcuXG4gKiBAcGFyYW0ge1N0cmluZ30gYGlucHV0YCBTdHJpbmcgdG8gbWF0Y2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2AgU2VlIGF2YWlsYWJsZSBbb3B0aW9uc10oI29wdGlvbnMpIGZvciBjaGFuZ2luZyBob3cgbWF0Y2hlcyBhcmUgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtBcnJheXxudWxsfSBSZXR1cm5zIGFuIGFycmF5IG9mIGNhcHR1cmVzIGlmIHRoZSBpbnB1dCBtYXRjaGVzIHRoZSBnbG9iIHBhdHRlcm4sIG90aGVyd2lzZSBgbnVsbGAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1pY3JvbWF0Y2guY2FwdHVyZSA9IChnbG9iLCBpbnB1dCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcG9zaXggPSB1dGlscy5pc1dpbmRvd3Mob3B0aW9ucyk7XG4gIGxldCByZWdleCA9IHBpY29tYXRjaC5tYWtlUmUoU3RyaW5nKGdsb2IpLCB7IC4uLm9wdGlvbnMsIGNhcHR1cmU6IHRydWUgfSk7XG4gIGxldCBtYXRjaCA9IHJlZ2V4LmV4ZWMocG9zaXggPyB1dGlscy50b1Bvc2l4U2xhc2hlcyhpbnB1dCkgOiBpbnB1dCk7XG5cbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuIG1hdGNoLnNsaWNlKDEpLm1hcCh2ID0+IHYgPT09IHZvaWQgMCA/ICcnIDogdik7XG4gIH1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGZyb20gdGhlIGdpdmVuIGdsb2IgYHBhdHRlcm5gLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIC8vIG1tLm1ha2VSZShwYXR0ZXJuWywgb3B0aW9uc10pO1xuICpcbiAqIGNvbnNvbGUubG9nKG1tLm1ha2VSZSgnKi5qcycpKTtcbiAqIC8vPT4gL14oPzooXFwuW1xcXFxcXC9dKT8oPyFcXC4pKD89LilbXlxcL10qP1xcLmpzKSQvXG4gKiBgYGBcbiAqIEBwYXJhbSB7U3RyaW5nfSBgcGF0dGVybmAgQSBnbG9iIHBhdHRlcm4gdG8gY29udmVydCB0byByZWdleC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBgb3B0aW9uc2BcbiAqIEByZXR1cm4ge1JlZ0V4cH0gUmV0dXJucyBhIHJlZ2V4IGNyZWF0ZWQgZnJvbSB0aGUgZ2l2ZW4gcGF0dGVybi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5tYWtlUmUgPSAoLi4uYXJncykgPT4gcGljb21hdGNoLm1ha2VSZSguLi5hcmdzKTtcblxuLyoqXG4gKiBTY2FuIGEgZ2xvYiBwYXR0ZXJuIHRvIHNlcGFyYXRlIHRoZSBwYXR0ZXJuIGludG8gc2VnbWVudHMuIFVzZWRcbiAqIGJ5IHRoZSBbc3BsaXRdKCNzcGxpdCkgbWV0aG9kLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gbW0uc2NhbihwYXR0ZXJuWywgb3B0aW9uc10pO1xuICogYGBgXG4gKiBAcGFyYW0ge1N0cmluZ30gYHBhdHRlcm5gXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgXG4gKiBAcmV0dXJuIHtPYmplY3R9IFJldHVybnMgYW4gb2JqZWN0IHdpdGhcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubWljcm9tYXRjaC5zY2FuID0gKC4uLmFyZ3MpID0+IHBpY29tYXRjaC5zY2FuKC4uLmFyZ3MpO1xuXG4vKipcbiAqIFBhcnNlIGEgZ2xvYiBwYXR0ZXJuIHRvIGNyZWF0ZSB0aGUgc291cmNlIHN0cmluZyBmb3IgYSByZWd1bGFyXG4gKiBleHByZXNzaW9uLlxuICpcbiAqIGBgYGpzXG4gKiBjb25zdCBtbSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnN0IHN0YXRlID0gbW0ocGF0dGVyblssIG9wdGlvbnNdKTtcbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBnbG9iYFxuICogQHBhcmFtIHtPYmplY3R9IGBvcHRpb25zYFxuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHVzZWZ1bCBwcm9wZXJ0aWVzIGFuZCBvdXRwdXQgdG8gYmUgdXNlZCBhcyByZWdleCBzb3VyY2Ugc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLnBhcnNlID0gKHBhdHRlcm5zLCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXMgPSBbXTtcbiAgZm9yIChsZXQgcGF0dGVybiBvZiBbXS5jb25jYXQocGF0dGVybnMgfHwgW10pKSB7XG4gICAgZm9yIChsZXQgc3RyIG9mIGJyYWNlcyhTdHJpbmcocGF0dGVybiksIG9wdGlvbnMpKSB7XG4gICAgICByZXMucHVzaChwaWNvbWF0Y2gucGFyc2Uoc3RyLCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG4vKipcbiAqIFByb2Nlc3MgdGhlIGdpdmVuIGJyYWNlIGBwYXR0ZXJuYC5cbiAqXG4gKiBgYGBqc1xuICogY29uc3QgeyBicmFjZXMgfSA9IHJlcXVpcmUoJ21pY3JvbWF0Y2gnKTtcbiAqIGNvbnNvbGUubG9nKGJyYWNlcygnZm9vL3thLGIsY30vYmFyJykpO1xuICogLy89PiBbICdmb28vKGF8YnxjKS9iYXInIF1cbiAqXG4gKiBjb25zb2xlLmxvZyhicmFjZXMoJ2Zvby97YSxiLGN9L2JhcicsIHsgZXhwYW5kOiB0cnVlIH0pKTtcbiAqIC8vPT4gWyAnZm9vL2EvYmFyJywgJ2Zvby9iL2JhcicsICdmb28vYy9iYXInIF1cbiAqIGBgYFxuICogQHBhcmFtIHtTdHJpbmd9IGBwYXR0ZXJuYCBTdHJpbmcgd2l0aCBicmFjZSBwYXR0ZXJuIHRvIHByb2Nlc3MuXG4gKiBAcGFyYW0ge09iamVjdH0gYG9wdGlvbnNgIEFueSBbb3B0aW9uc10oI29wdGlvbnMpIHRvIGNoYW5nZSBob3cgZXhwYW5zaW9uIGlzIHBlcmZvcm1lZC4gU2VlIHRoZSBbYnJhY2VzXVtdIGxpYnJhcnkgZm9yIGFsbCBhdmFpbGFibGUgb3B0aW9ucy5cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5taWNyb21hdGNoLmJyYWNlcyA9IChwYXR0ZXJuLCBvcHRpb25zKSA9PiB7XG4gIGlmICh0eXBlb2YgcGF0dGVybiAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG4gIGlmICgob3B0aW9ucyAmJiBvcHRpb25zLm5vYnJhY2UgPT09IHRydWUpIHx8ICEvXFx7LipcXH0vLnRlc3QocGF0dGVybikpIHtcbiAgICByZXR1cm4gW3BhdHRlcm5dO1xuICB9XG4gIHJldHVybiBicmFjZXMocGF0dGVybiwgb3B0aW9ucyk7XG59O1xuXG4vKipcbiAqIEV4cGFuZCBicmFjZXNcbiAqL1xuXG5taWNyb21hdGNoLmJyYWNlRXhwYW5kID0gKHBhdHRlcm4sIG9wdGlvbnMpID0+IHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgcmV0dXJuIG1pY3JvbWF0Y2guYnJhY2VzKHBhdHRlcm4sIHsgLi4ub3B0aW9ucywgZXhwYW5kOiB0cnVlIH0pO1xufTtcblxuLyoqXG4gKiBFeHBvc2UgbWljcm9tYXRjaFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gbWljcm9tYXRjaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWF0Y2hBbnkgPSBleHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBleHBvcnRzLm1ha2VSZSA9IGV4cG9ydHMuZ2V0UGF0dGVyblBhcnRzID0gZXhwb3J0cy5leHBhbmRCcmFjZUV4cGFuc2lvbiA9IGV4cG9ydHMuZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24gPSBleHBvcnRzLmlzQWZmZWN0RGVwdGhPZlJlYWRpbmdQYXR0ZXJuID0gZXhwb3J0cy5lbmRzV2l0aFNsYXNoR2xvYlN0YXIgPSBleHBvcnRzLmhhc0dsb2JTdGFyID0gZXhwb3J0cy5nZXRCYXNlRGlyZWN0b3J5ID0gZXhwb3J0cy5pc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSBleHBvcnRzLmdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSA9IGV4cG9ydHMuZ2V0UG9zaXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuaXNQb3NpdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmlzTmVnYXRpdmVQYXR0ZXJuID0gZXhwb3J0cy5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4gPSBleHBvcnRzLmNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybiA9IGV4cG9ydHMuaXNEeW5hbWljUGF0dGVybiA9IGV4cG9ydHMuaXNTdGF0aWNQYXR0ZXJuID0gdm9pZCAwO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZ2xvYlBhcmVudCA9IHJlcXVpcmUoXCJnbG9iLXBhcmVudFwiKTtcbmNvbnN0IG1pY3JvbWF0Y2ggPSByZXF1aXJlKFwibWljcm9tYXRjaFwiKTtcbmNvbnN0IEdMT0JTVEFSID0gJyoqJztcbmNvbnN0IEVTQ0FQRV9TWU1CT0wgPSAnXFxcXCc7XG5jb25zdCBDT01NT05fR0xPQl9TWU1CT0xTX1JFID0gL1sqP118XiEvO1xuY29uc3QgUkVHRVhfQ0hBUkFDVEVSX0NMQVNTX1NZTUJPTFNfUkUgPSAvXFxbLipdLztcbmNvbnN0IFJFR0VYX0dST1VQX1NZTUJPTFNfUkUgPSAvKD86XnxbXiEqKz9AXSlcXCguKlxcfC4qXFwpLztcbmNvbnN0IEdMT0JfRVhURU5TSU9OX1NZTUJPTFNfUkUgPSAvWyEqKz9AXVxcKC4qXFwpLztcbmNvbnN0IEJSQUNFX0VYUEFOU0lPTlNfU1lNQk9MU19SRSA9IC97LiooPzosfFxcLlxcLikuKn0vO1xuZnVuY3Rpb24gaXNTdGF0aWNQYXR0ZXJuKHBhdHRlcm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiAhaXNEeW5hbWljUGF0dGVybihwYXR0ZXJuLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuaXNTdGF0aWNQYXR0ZXJuID0gaXNTdGF0aWNQYXR0ZXJuO1xuZnVuY3Rpb24gaXNEeW5hbWljUGF0dGVybihwYXR0ZXJuLCBvcHRpb25zID0ge30pIHtcbiAgICAvKipcbiAgICAgKiBBIHNwZWNpYWwgY2FzZSB3aXRoIGFuIGVtcHR5IHN0cmluZyBpcyBuZWNlc3NhcnkgZm9yIG1hdGNoaW5nIHBhdHRlcm5zIHRoYXQgc3RhcnQgd2l0aCBhIGZvcndhcmQgc2xhc2guXG4gICAgICogQW4gZW1wdHkgc3RyaW5nIGNhbm5vdCBiZSBhIGR5bmFtaWMgcGF0dGVybi5cbiAgICAgKiBGb3IgZXhhbXBsZSwgdGhlIHBhdHRlcm4gYC9saWIvKmAgd2lsbCBiZSBzcHJlYWQgaW50byBwYXJ0czogJycsICdsaWInLCAnKicuXG4gICAgICovXG4gICAgaWYgKHBhdHRlcm4gPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYGNhc2VTZW5zaXRpdmVNYXRjaGAgb3B0aW9uIGlzIGRpc2FibGVkLCBhbGwgcGF0dGVybnMgbXVzdCBiZSBtYXJrZWQgYXMgZHluYW1pYywgYmVjYXVzZSB3ZSBjYW5ub3QgY2hlY2tcbiAgICAgKiBmaWxlcGF0aCBkaXJlY3RseSAod2l0aG91dCByZWFkIGRpcmVjdG9yeSkuXG4gICAgICovXG4gICAgaWYgKG9wdGlvbnMuY2FzZVNlbnNpdGl2ZU1hdGNoID09PSBmYWxzZSB8fCBwYXR0ZXJuLmluY2x1ZGVzKEVTQ0FQRV9TWU1CT0wpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ09NTU9OX0dMT0JfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pIHx8IFJFR0VYX0NIQVJBQ1RFUl9DTEFTU19TWU1CT0xTX1JFLnRlc3QocGF0dGVybikgfHwgUkVHRVhfR1JPVVBfU1lNQk9MU19SRS50ZXN0KHBhdHRlcm4pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5leHRnbG9iICE9PSBmYWxzZSAmJiBHTE9CX0VYVEVOU0lPTl9TWU1CT0xTX1JFLnRlc3QocGF0dGVybikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmJyYWNlRXhwYW5zaW9uICE9PSBmYWxzZSAmJiBCUkFDRV9FWFBBTlNJT05TX1NZTUJPTFNfUkUudGVzdChwYXR0ZXJuKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0cy5pc0R5bmFtaWNQYXR0ZXJuID0gaXNEeW5hbWljUGF0dGVybjtcbmZ1bmN0aW9uIGNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGlzTmVnYXRpdmVQYXR0ZXJuKHBhdHRlcm4pID8gcGF0dGVybi5zbGljZSgxKSA6IHBhdHRlcm47XG59XG5leHBvcnRzLmNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybiA9IGNvbnZlcnRUb1Bvc2l0aXZlUGF0dGVybjtcbmZ1bmN0aW9uIGNvbnZlcnRUb05lZ2F0aXZlUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuICchJyArIHBhdHRlcm47XG59XG5leHBvcnRzLmNvbnZlcnRUb05lZ2F0aXZlUGF0dGVybiA9IGNvbnZlcnRUb05lZ2F0aXZlUGF0dGVybjtcbmZ1bmN0aW9uIGlzTmVnYXRpdmVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5zdGFydHNXaXRoKCchJykgJiYgcGF0dGVyblsxXSAhPT0gJygnO1xufVxuZXhwb3J0cy5pc05lZ2F0aXZlUGF0dGVybiA9IGlzTmVnYXRpdmVQYXR0ZXJuO1xuZnVuY3Rpb24gaXNQb3NpdGl2ZVBhdHRlcm4ocGF0dGVybikge1xuICAgIHJldHVybiAhaXNOZWdhdGl2ZVBhdHRlcm4ocGF0dGVybik7XG59XG5leHBvcnRzLmlzUG9zaXRpdmVQYXR0ZXJuID0gaXNQb3NpdGl2ZVBhdHRlcm47XG5mdW5jdGlvbiBnZXROZWdhdGl2ZVBhdHRlcm5zKHBhdHRlcm5zKSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zLmZpbHRlcihpc05lZ2F0aXZlUGF0dGVybik7XG59XG5leHBvcnRzLmdldE5lZ2F0aXZlUGF0dGVybnMgPSBnZXROZWdhdGl2ZVBhdHRlcm5zO1xuZnVuY3Rpb24gZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucykge1xuICAgIHJldHVybiBwYXR0ZXJucy5maWx0ZXIoaXNQb3NpdGl2ZVBhdHRlcm4pO1xufVxuZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZ2V0UG9zaXRpdmVQYXR0ZXJucztcbi8qKlxuICogUmV0dXJucyBwYXR0ZXJucyB0aGF0IGNhbiBiZSBhcHBsaWVkIGluc2lkZSB0aGUgY3VycmVudCBkaXJlY3RvcnkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFsnLi8qJywgJyonLCAnYS8qJ11cbiAqIGdldFBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeShbJy4vKicsICcqJywgJ2EvKicsICcuLi8qJywgJy4vLi4vKiddKVxuICovXG5mdW5jdGlvbiBnZXRQYXR0ZXJuc0luc2lkZUN1cnJlbnREaXJlY3RvcnkocGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnMuZmlsdGVyKChwYXR0ZXJuKSA9PiAhaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5KHBhdHRlcm4pKTtcbn1cbmV4cG9ydHMuZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5ID0gZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5O1xuLyoqXG4gKiBSZXR1cm5zIHBhdHRlcm5zIHRvIGJlIGV4cGFuZGVkIHJlbGF0aXZlIHRvIChvdXRzaWRlKSB0aGUgY3VycmVudCBkaXJlY3RvcnkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFsnLi4vKicsICcuLy4uLyonXVxuICogZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5KFsnLi8qJywgJyonLCAnYS8qJywgJy4uLyonLCAnLi8uLi8qJ10pXG4gKi9cbmZ1bmN0aW9uIGdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkocGF0dGVybnMpIHtcbiAgICByZXR1cm4gcGF0dGVybnMuZmlsdGVyKGlzUGF0dGVyblJlbGF0ZWRUb1BhcmVudERpcmVjdG9yeSk7XG59XG5leHBvcnRzLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSBnZXRQYXR0ZXJuc091dHNpZGVDdXJyZW50RGlyZWN0b3J5O1xuZnVuY3Rpb24gaXNQYXR0ZXJuUmVsYXRlZFRvUGFyZW50RGlyZWN0b3J5KHBhdHRlcm4pIHtcbiAgICByZXR1cm4gcGF0dGVybi5zdGFydHNXaXRoKCcuLicpIHx8IHBhdHRlcm4uc3RhcnRzV2l0aCgnLi8uLicpO1xufVxuZXhwb3J0cy5pc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3RvcnkgPSBpc1BhdHRlcm5SZWxhdGVkVG9QYXJlbnREaXJlY3Rvcnk7XG5mdW5jdGlvbiBnZXRCYXNlRGlyZWN0b3J5KHBhdHRlcm4pIHtcbiAgICByZXR1cm4gZ2xvYlBhcmVudChwYXR0ZXJuLCB7IGZsaXBCYWNrc2xhc2hlczogZmFsc2UgfSk7XG59XG5leHBvcnRzLmdldEJhc2VEaXJlY3RvcnkgPSBnZXRCYXNlRGlyZWN0b3J5O1xuZnVuY3Rpb24gaGFzR2xvYlN0YXIocGF0dGVybikge1xuICAgIHJldHVybiBwYXR0ZXJuLmluY2x1ZGVzKEdMT0JTVEFSKTtcbn1cbmV4cG9ydHMuaGFzR2xvYlN0YXIgPSBoYXNHbG9iU3RhcjtcbmZ1bmN0aW9uIGVuZHNXaXRoU2xhc2hHbG9iU3RhcihwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uZW5kc1dpdGgoJy8nICsgR0xPQlNUQVIpO1xufVxuZXhwb3J0cy5lbmRzV2l0aFNsYXNoR2xvYlN0YXIgPSBlbmRzV2l0aFNsYXNoR2xvYlN0YXI7XG5mdW5jdGlvbiBpc0FmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybihwYXR0ZXJuKSB7XG4gICAgY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHBhdHRlcm4pO1xuICAgIHJldHVybiBlbmRzV2l0aFNsYXNoR2xvYlN0YXIocGF0dGVybikgfHwgaXNTdGF0aWNQYXR0ZXJuKGJhc2VuYW1lKTtcbn1cbmV4cG9ydHMuaXNBZmZlY3REZXB0aE9mUmVhZGluZ1BhdHRlcm4gPSBpc0FmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybjtcbmZ1bmN0aW9uIGV4cGFuZFBhdHRlcm5zV2l0aEJyYWNlRXhwYW5zaW9uKHBhdHRlcm5zKSB7XG4gICAgcmV0dXJuIHBhdHRlcm5zLnJlZHVjZSgoY29sbGVjdGlvbiwgcGF0dGVybikgPT4ge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbi5jb25jYXQoZXhwYW5kQnJhY2VFeHBhbnNpb24ocGF0dGVybikpO1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydHMuZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24gPSBleHBhbmRQYXR0ZXJuc1dpdGhCcmFjZUV4cGFuc2lvbjtcbmZ1bmN0aW9uIGV4cGFuZEJyYWNlRXhwYW5zaW9uKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gbWljcm9tYXRjaC5icmFjZXMocGF0dGVybiwge1xuICAgICAgICBleHBhbmQ6IHRydWUsXG4gICAgICAgIG5vZHVwZXM6IHRydWVcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhwYW5kQnJhY2VFeHBhbnNpb24gPSBleHBhbmRCcmFjZUV4cGFuc2lvbjtcbmZ1bmN0aW9uIGdldFBhdHRlcm5QYXJ0cyhwYXR0ZXJuLCBvcHRpb25zKSB7XG4gICAgbGV0IHsgcGFydHMgfSA9IG1pY3JvbWF0Y2guc2NhbihwYXR0ZXJuLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHBhcnRzOiB0cnVlIH0pKTtcbiAgICAvKipcbiAgICAgKiBUaGUgc2NhbiBtZXRob2QgcmV0dXJucyBhbiBlbXB0eSBhcnJheSBpbiBzb21lIGNhc2VzLlxuICAgICAqIFNlZSBtaWNyb21hdGNoL3BpY29tYXRjaCM1OCBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAqL1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGFydHMgPSBbcGF0dGVybl07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBzY2FuIG1ldGhvZCBkb2VzIG5vdCByZXR1cm4gYW4gZW1wdHkgcGFydCBmb3IgdGhlIHBhdHRlcm4gd2l0aCBhIGZvcndhcmQgc2xhc2guXG4gICAgICogVGhpcyBpcyBhbm90aGVyIHBhcnQgb2YgbWljcm9tYXRjaC9waWNvbWF0Y2gjNTguXG4gICAgICovXG4gICAgaWYgKHBhcnRzWzBdLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnNsaWNlKDEpO1xuICAgICAgICBwYXJ0cy51bnNoaWZ0KCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzO1xufVxuZXhwb3J0cy5nZXRQYXR0ZXJuUGFydHMgPSBnZXRQYXR0ZXJuUGFydHM7XG5mdW5jdGlvbiBtYWtlUmUocGF0dGVybiwgb3B0aW9ucykge1xuICAgIHJldHVybiBtaWNyb21hdGNoLm1ha2VSZShwYXR0ZXJuLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWFrZVJlID0gbWFrZVJlO1xuZnVuY3Rpb24gY29udmVydFBhdHRlcm5zVG9SZShwYXR0ZXJucywgb3B0aW9ucykge1xuICAgIHJldHVybiBwYXR0ZXJucy5tYXAoKHBhdHRlcm4pID0+IG1ha2VSZShwYXR0ZXJuLCBvcHRpb25zKSk7XG59XG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvUmUgPSBjb252ZXJ0UGF0dGVybnNUb1JlO1xuZnVuY3Rpb24gbWF0Y2hBbnkoZW50cnksIHBhdHRlcm5zUmUpIHtcbiAgICByZXR1cm4gcGF0dGVybnNSZS5zb21lKChwYXR0ZXJuUmUpID0+IHBhdHRlcm5SZS50ZXN0KGVudHJ5KSk7XG59XG5leHBvcnRzLm1hdGNoQW55ID0gbWF0Y2hBbnk7XG4iLCAiJ3VzZSBzdHJpY3QnXG4vKlxuICogbWVyZ2UyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGVhbWJpdGlvbi9tZXJnZTJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtMjAyMCBUZWFtYml0aW9uXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbmNvbnN0IFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5jb25zdCBQYXNzVGhyb3VnaCA9IFN0cmVhbS5QYXNzVGhyb3VnaFxuY29uc3Qgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTJcblxuZnVuY3Rpb24gbWVyZ2UyICgpIHtcbiAgY29uc3Qgc3RyZWFtc1F1ZXVlID0gW11cbiAgY29uc3QgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICBsZXQgbWVyZ2luZyA9IGZhbHNlXG4gIGxldCBvcHRpb25zID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG5cbiAgaWYgKG9wdGlvbnMgJiYgIUFycmF5LmlzQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucy5waXBlID09IG51bGwpIHtcbiAgICBhcmdzLnBvcCgpXG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICBjb25zdCBkb0VuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZVxuICBjb25zdCBkb1BpcGVFcnJvciA9IG9wdGlvbnMucGlwZUVycm9yID09PSB0cnVlXG4gIGlmIChvcHRpb25zLm9iamVjdE1vZGUgPT0gbnVsbCkge1xuICAgIG9wdGlvbnMub2JqZWN0TW9kZSA9IHRydWVcbiAgfVxuICBpZiAob3B0aW9ucy5oaWdoV2F0ZXJNYXJrID09IG51bGwpIHtcbiAgICBvcHRpb25zLmhpZ2hXYXRlck1hcmsgPSA2NCAqIDEwMjRcbiAgfVxuICBjb25zdCBtZXJnZWRTdHJlYW0gPSBQYXNzVGhyb3VnaChvcHRpb25zKVxuXG4gIGZ1bmN0aW9uIGFkZFN0cmVhbSAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgc3RyZWFtc1F1ZXVlLnB1c2gocGF1c2VTdHJlYW1zKGFyZ3VtZW50c1tpXSwgb3B0aW9ucykpXG4gICAgfVxuICAgIG1lcmdlU3RyZWFtKClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VTdHJlYW0gKCkge1xuICAgIGlmIChtZXJnaW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgbWVyZ2luZyA9IHRydWVcblxuICAgIGxldCBzdHJlYW1zID0gc3RyZWFtc1F1ZXVlLnNoaWZ0KClcbiAgICBpZiAoIXN0cmVhbXMpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZW5kU3RyZWFtKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShzdHJlYW1zKSkge1xuICAgICAgc3RyZWFtcyA9IFtzdHJlYW1zXVxuICAgIH1cblxuICAgIGxldCBwaXBlc0NvdW50ID0gc3RyZWFtcy5sZW5ndGggKyAxXG5cbiAgICBmdW5jdGlvbiBuZXh0ICgpIHtcbiAgICAgIGlmICgtLXBpcGVzQ291bnQgPiAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbWVyZ2luZyA9IGZhbHNlXG4gICAgICBtZXJnZVN0cmVhbSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGlwZSAoc3RyZWFtKSB7XG4gICAgICBmdW5jdGlvbiBvbmVuZCAoKSB7XG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignbWVyZ2UyVW5waXBlRW5kJywgb25lbmQpXG4gICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpXG4gICAgICAgIGlmIChkb1BpcGVFcnJvcikge1xuICAgICAgICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKVxuICAgICAgICB9XG4gICAgICAgIG5leHQoKVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gb25lcnJvciAoZXJyKSB7XG4gICAgICAgIG1lcmdlZFN0cmVhbS5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIH1cbiAgICAgIC8vIHNraXAgZW5kZWQgc3RyZWFtXG4gICAgICBpZiAoc3RyZWFtLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKVxuICAgICAgfVxuXG4gICAgICBzdHJlYW0ub24oJ21lcmdlMlVucGlwZUVuZCcsIG9uZW5kKVxuICAgICAgc3RyZWFtLm9uKCdlbmQnLCBvbmVuZClcblxuICAgICAgaWYgKGRvUGlwZUVycm9yKSB7XG4gICAgICAgIHN0cmVhbS5vbignZXJyb3InLCBvbmVycm9yKVxuICAgICAgfVxuXG4gICAgICBzdHJlYW0ucGlwZShtZXJnZWRTdHJlYW0sIHsgZW5kOiBmYWxzZSB9KVxuICAgICAgLy8gY29tcGF0aWJsZSBmb3Igb2xkIHN0cmVhbVxuICAgICAgc3RyZWFtLnJlc3VtZSgpXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwaXBlKHN0cmVhbXNbaV0pXG4gICAgfVxuXG4gICAgbmV4dCgpXG4gIH1cblxuICBmdW5jdGlvbiBlbmRTdHJlYW0gKCkge1xuICAgIG1lcmdpbmcgPSBmYWxzZVxuICAgIC8vIGVtaXQgJ3F1ZXVlRHJhaW4nIHdoZW4gYWxsIHN0cmVhbXMgbWVyZ2VkLlxuICAgIG1lcmdlZFN0cmVhbS5lbWl0KCdxdWV1ZURyYWluJylcbiAgICBpZiAoZG9FbmQpIHtcbiAgICAgIG1lcmdlZFN0cmVhbS5lbmQoKVxuICAgIH1cbiAgfVxuXG4gIG1lcmdlZFN0cmVhbS5zZXRNYXhMaXN0ZW5lcnMoMClcbiAgbWVyZ2VkU3RyZWFtLmFkZCA9IGFkZFN0cmVhbVxuICBtZXJnZWRTdHJlYW0ub24oJ3VucGlwZScsIGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICBzdHJlYW0uZW1pdCgnbWVyZ2UyVW5waXBlRW5kJylcbiAgfSlcblxuICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICBhZGRTdHJlYW0uYXBwbHkobnVsbCwgYXJncylcbiAgfVxuICByZXR1cm4gbWVyZ2VkU3RyZWFtXG59XG5cbi8vIGNoZWNrIGFuZCBwYXVzZSBzdHJlYW1zIGZvciBwaXBlLlxuZnVuY3Rpb24gcGF1c2VTdHJlYW1zIChzdHJlYW1zLCBvcHRpb25zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShzdHJlYW1zKSkge1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBvbGQtc3R5bGUgc3RyZWFtc1xuICAgIGlmICghc3RyZWFtcy5fcmVhZGFibGVTdGF0ZSAmJiBzdHJlYW1zLnBpcGUpIHtcbiAgICAgIHN0cmVhbXMgPSBzdHJlYW1zLnBpcGUoUGFzc1Rocm91Z2gob3B0aW9ucykpXG4gICAgfVxuICAgIGlmICghc3RyZWFtcy5fcmVhZGFibGVTdGF0ZSB8fCAhc3RyZWFtcy5wYXVzZSB8fCAhc3RyZWFtcy5waXBlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgcmVhZGFibGUgc3RyZWFtIGNhbiBiZSBtZXJnZWQuJylcbiAgICB9XG4gICAgc3RyZWFtcy5wYXVzZSgpXG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHN0cmVhbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHN0cmVhbXNbaV0gPSBwYXVzZVN0cmVhbXMoc3RyZWFtc1tpXSwgb3B0aW9ucylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cmVhbXNcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2UgPSB2b2lkIDA7XG5jb25zdCBtZXJnZTIgPSByZXF1aXJlKFwibWVyZ2UyXCIpO1xuZnVuY3Rpb24gbWVyZ2Uoc3RyZWFtcykge1xuICAgIGNvbnN0IG1lcmdlZFN0cmVhbSA9IG1lcmdlMihzdHJlYW1zKTtcbiAgICBzdHJlYW1zLmZvckVhY2goKHN0cmVhbSkgPT4ge1xuICAgICAgICBzdHJlYW0ub25jZSgnZXJyb3InLCAoZXJyb3IpID0+IG1lcmdlZFN0cmVhbS5lbWl0KCdlcnJvcicsIGVycm9yKSk7XG4gICAgfSk7XG4gICAgbWVyZ2VkU3RyZWFtLm9uY2UoJ2Nsb3NlJywgKCkgPT4gcHJvcGFnYXRlQ2xvc2VFdmVudFRvU291cmNlcyhzdHJlYW1zKSk7XG4gICAgbWVyZ2VkU3RyZWFtLm9uY2UoJ2VuZCcsICgpID0+IHByb3BhZ2F0ZUNsb3NlRXZlbnRUb1NvdXJjZXMoc3RyZWFtcykpO1xuICAgIHJldHVybiBtZXJnZWRTdHJlYW07XG59XG5leHBvcnRzLm1lcmdlID0gbWVyZ2U7XG5mdW5jdGlvbiBwcm9wYWdhdGVDbG9zZUV2ZW50VG9Tb3VyY2VzKHN0cmVhbXMpIHtcbiAgICBzdHJlYW1zLmZvckVhY2goKHN0cmVhbSkgPT4gc3RyZWFtLmVtaXQoJ2Nsb3NlJykpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0VtcHR5ID0gZXhwb3J0cy5pc1N0cmluZyA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzU3RyaW5nKGlucHV0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5mdW5jdGlvbiBpc0VtcHR5KGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0ID09PSAnJztcbn1cbmV4cG9ydHMuaXNFbXB0eSA9IGlzRW1wdHk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0cmluZyA9IGV4cG9ydHMuc3RyZWFtID0gZXhwb3J0cy5wYXR0ZXJuID0gZXhwb3J0cy5wYXRoID0gZXhwb3J0cy5mcyA9IGV4cG9ydHMuZXJybm8gPSBleHBvcnRzLmFycmF5ID0gdm9pZCAwO1xuY29uc3QgYXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheVwiKTtcbmV4cG9ydHMuYXJyYXkgPSBhcnJheTtcbmNvbnN0IGVycm5vID0gcmVxdWlyZShcIi4vZXJybm9cIik7XG5leHBvcnRzLmVycm5vID0gZXJybm87XG5jb25zdCBmcyA9IHJlcXVpcmUoXCIuL2ZzXCIpO1xuZXhwb3J0cy5mcyA9IGZzO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCIuL3BhdGhcIik7XG5leHBvcnRzLnBhdGggPSBwYXRoO1xuY29uc3QgcGF0dGVybiA9IHJlcXVpcmUoXCIuL3BhdHRlcm5cIik7XG5leHBvcnRzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuY29uc3Qgc3RyZWFtID0gcmVxdWlyZShcIi4vc3RyZWFtXCIpO1xuZXhwb3J0cy5zdHJlYW0gPSBzdHJlYW07XG5jb25zdCBzdHJpbmcgPSByZXF1aXJlKFwiLi9zdHJpbmdcIik7XG5leHBvcnRzLnN0cmluZyA9IHN0cmluZztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udmVydFBhdHRlcm5Hcm91cFRvVGFzayA9IGV4cG9ydHMuY29udmVydFBhdHRlcm5Hcm91cHNUb1Rhc2tzID0gZXhwb3J0cy5ncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5ID0gZXhwb3J0cy5nZXROZWdhdGl2ZVBhdHRlcm5zQXNQb3NpdGl2ZSA9IGV4cG9ydHMuZ2V0UG9zaXRpdmVQYXR0ZXJucyA9IGV4cG9ydHMuY29udmVydFBhdHRlcm5zVG9UYXNrcyA9IGV4cG9ydHMuZ2VuZXJhdGUgPSB2b2lkIDA7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIGdlbmVyYXRlKHBhdHRlcm5zLCBzZXR0aW5ncykge1xuICAgIGNvbnN0IHBvc2l0aXZlUGF0dGVybnMgPSBnZXRQb3NpdGl2ZVBhdHRlcm5zKHBhdHRlcm5zKTtcbiAgICBjb25zdCBuZWdhdGl2ZVBhdHRlcm5zID0gZ2V0TmVnYXRpdmVQYXR0ZXJuc0FzUG9zaXRpdmUocGF0dGVybnMsIHNldHRpbmdzLmlnbm9yZSk7XG4gICAgY29uc3Qgc3RhdGljUGF0dGVybnMgPSBwb3NpdGl2ZVBhdHRlcm5zLmZpbHRlcigocGF0dGVybikgPT4gdXRpbHMucGF0dGVybi5pc1N0YXRpY1BhdHRlcm4ocGF0dGVybiwgc2V0dGluZ3MpKTtcbiAgICBjb25zdCBkeW5hbWljUGF0dGVybnMgPSBwb3NpdGl2ZVBhdHRlcm5zLmZpbHRlcigocGF0dGVybikgPT4gdXRpbHMucGF0dGVybi5pc0R5bmFtaWNQYXR0ZXJuKHBhdHRlcm4sIHNldHRpbmdzKSk7XG4gICAgY29uc3Qgc3RhdGljVGFza3MgPSBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzKHN0YXRpY1BhdHRlcm5zLCBuZWdhdGl2ZVBhdHRlcm5zLCAvKiBkeW5hbWljICovIGZhbHNlKTtcbiAgICBjb25zdCBkeW5hbWljVGFza3MgPSBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzKGR5bmFtaWNQYXR0ZXJucywgbmVnYXRpdmVQYXR0ZXJucywgLyogZHluYW1pYyAqLyB0cnVlKTtcbiAgICByZXR1cm4gc3RhdGljVGFza3MuY29uY2F0KGR5bmFtaWNUYXNrcyk7XG59XG5leHBvcnRzLmdlbmVyYXRlID0gZ2VuZXJhdGU7XG4vKipcbiAqIFJldHVybnMgdGFza3MgZ3JvdXBlZCBieSBiYXNpYyBwYXR0ZXJuIGRpcmVjdG9yaWVzLlxuICpcbiAqIFBhdHRlcm5zIHRoYXQgY2FuIGJlIGZvdW5kIGluc2lkZSAoYC4vYCkgYW5kIG91dHNpZGUgKGAuLi9gKSB0aGUgY3VycmVudCBkaXJlY3RvcnkgYXJlIGhhbmRsZWQgc2VwYXJhdGVseS5cbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgZGlyZWN0b3J5IHRyYXZlcnNhbCBzdGFydHMgYXQgdGhlIGJhc2UgZGlyZWN0b3J5IGFuZCBnb2VzIGRlZXBlci5cbiAqL1xuZnVuY3Rpb24gY29udmVydFBhdHRlcm5zVG9UYXNrcyhwb3NpdGl2ZSwgbmVnYXRpdmUsIGR5bmFtaWMpIHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuICAgIGNvbnN0IHBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkgPSB1dGlscy5wYXR0ZXJuLmdldFBhdHRlcm5zT3V0c2lkZUN1cnJlbnREaXJlY3RvcnkocG9zaXRpdmUpO1xuICAgIGNvbnN0IHBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSA9IHV0aWxzLnBhdHRlcm4uZ2V0UGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5KHBvc2l0aXZlKTtcbiAgICBjb25zdCBvdXRzaWRlQ3VycmVudERpcmVjdG9yeUdyb3VwID0gZ3JvdXBQYXR0ZXJuc0J5QmFzZURpcmVjdG9yeShwYXR0ZXJuc091dHNpZGVDdXJyZW50RGlyZWN0b3J5KTtcbiAgICBjb25zdCBpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXAgPSBncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5KHBhdHRlcm5zSW5zaWRlQ3VycmVudERpcmVjdG9yeSk7XG4gICAgdGFza3MucHVzaCguLi5jb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3Mob3V0c2lkZUN1cnJlbnREaXJlY3RvcnlHcm91cCwgbmVnYXRpdmUsIGR5bmFtaWMpKTtcbiAgICAvKlxuICAgICAqIEZvciB0aGUgc2FrZSBvZiByZWR1Y2luZyBmdXR1cmUgYWNjZXNzZXMgdG8gdGhlIGZpbGUgc3lzdGVtLCB3ZSBtZXJnZSBhbGwgdGFza3Mgd2l0aGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeVxuICAgICAqIGludG8gYSBnbG9iYWwgdGFzaywgaWYgYXQgbGVhc3Qgb25lIHBhdHRlcm4gcmVmZXJzIHRvIHRoZSByb290IChgLmApLiBJbiB0aGlzIGNhc2UsIHRoZSBnbG9iYWwgdGFzayBjb3ZlcnMgdGhlIHJlc3QuXG4gICAgICovXG4gICAgaWYgKCcuJyBpbiBpbnNpZGVDdXJyZW50RGlyZWN0b3J5R3JvdXApIHtcbiAgICAgICAgdGFza3MucHVzaChjb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrKCcuJywgcGF0dGVybnNJbnNpZGVDdXJyZW50RGlyZWN0b3J5LCBuZWdhdGl2ZSwgZHluYW1pYykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFza3MucHVzaCguLi5jb252ZXJ0UGF0dGVybkdyb3Vwc1RvVGFza3MoaW5zaWRlQ3VycmVudERpcmVjdG9yeUdyb3VwLCBuZWdhdGl2ZSwgZHluYW1pYykpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza3M7XG59XG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuc1RvVGFza3MgPSBjb252ZXJ0UGF0dGVybnNUb1Rhc2tzO1xuZnVuY3Rpb24gZ2V0UG9zaXRpdmVQYXR0ZXJucyhwYXR0ZXJucykge1xuICAgIHJldHVybiB1dGlscy5wYXR0ZXJuLmdldFBvc2l0aXZlUGF0dGVybnMocGF0dGVybnMpO1xufVxuZXhwb3J0cy5nZXRQb3NpdGl2ZVBhdHRlcm5zID0gZ2V0UG9zaXRpdmVQYXR0ZXJucztcbmZ1bmN0aW9uIGdldE5lZ2F0aXZlUGF0dGVybnNBc1Bvc2l0aXZlKHBhdHRlcm5zLCBpZ25vcmUpIHtcbiAgICBjb25zdCBuZWdhdGl2ZSA9IHV0aWxzLnBhdHRlcm4uZ2V0TmVnYXRpdmVQYXR0ZXJucyhwYXR0ZXJucykuY29uY2F0KGlnbm9yZSk7XG4gICAgY29uc3QgcG9zaXRpdmUgPSBuZWdhdGl2ZS5tYXAodXRpbHMucGF0dGVybi5jb252ZXJ0VG9Qb3NpdGl2ZVBhdHRlcm4pO1xuICAgIHJldHVybiBwb3NpdGl2ZTtcbn1cbmV4cG9ydHMuZ2V0TmVnYXRpdmVQYXR0ZXJuc0FzUG9zaXRpdmUgPSBnZXROZWdhdGl2ZVBhdHRlcm5zQXNQb3NpdGl2ZTtcbmZ1bmN0aW9uIGdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkocGF0dGVybnMpIHtcbiAgICBjb25zdCBncm91cCA9IHt9O1xuICAgIHJldHVybiBwYXR0ZXJucy5yZWR1Y2UoKGNvbGxlY3Rpb24sIHBhdHRlcm4pID0+IHtcbiAgICAgICAgY29uc3QgYmFzZSA9IHV0aWxzLnBhdHRlcm4uZ2V0QmFzZURpcmVjdG9yeShwYXR0ZXJuKTtcbiAgICAgICAgaWYgKGJhc2UgaW4gY29sbGVjdGlvbikge1xuICAgICAgICAgICAgY29sbGVjdGlvbltiYXNlXS5wdXNoKHBhdHRlcm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sbGVjdGlvbltiYXNlXSA9IFtwYXR0ZXJuXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9LCBncm91cCk7XG59XG5leHBvcnRzLmdyb3VwUGF0dGVybnNCeUJhc2VEaXJlY3RvcnkgPSBncm91cFBhdHRlcm5zQnlCYXNlRGlyZWN0b3J5O1xuZnVuY3Rpb24gY29udmVydFBhdHRlcm5Hcm91cHNUb1Rhc2tzKHBvc2l0aXZlLCBuZWdhdGl2ZSwgZHluYW1pYykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhwb3NpdGl2ZSkubWFwKChiYXNlKSA9PiB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrKGJhc2UsIHBvc2l0aXZlW2Jhc2VdLCBuZWdhdGl2ZSwgZHluYW1pYyk7XG4gICAgfSk7XG59XG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcyA9IGNvbnZlcnRQYXR0ZXJuR3JvdXBzVG9UYXNrcztcbmZ1bmN0aW9uIGNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2soYmFzZSwgcG9zaXRpdmUsIG5lZ2F0aXZlLCBkeW5hbWljKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZHluYW1pYyxcbiAgICAgICAgcG9zaXRpdmUsXG4gICAgICAgIG5lZ2F0aXZlLFxuICAgICAgICBiYXNlLFxuICAgICAgICBwYXR0ZXJuczogW10uY29uY2F0KHBvc2l0aXZlLCBuZWdhdGl2ZS5tYXAodXRpbHMucGF0dGVybi5jb252ZXJ0VG9OZWdhdGl2ZVBhdHRlcm4pKVxuICAgIH07XG59XG5leHBvcnRzLmNvbnZlcnRQYXR0ZXJuR3JvdXBUb1Rhc2sgPSBjb252ZXJ0UGF0dGVybkdyb3VwVG9UYXNrO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5yZWFkID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVhZChwYXRoLCBzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBzZXR0aW5ncy5mcy5sc3RhdChwYXRoLCAobHN0YXRFcnJvciwgbHN0YXQpID0+IHtcbiAgICAgICAgaWYgKGxzdGF0RXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIGxzdGF0RXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbHN0YXQuaXNTeW1ib2xpY0xpbmsoKSB8fCAhc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICBjYWxsU3VjY2Vzc0NhbGxiYWNrKGNhbGxiYWNrLCBsc3RhdCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ3MuZnMuc3RhdChwYXRoLCAoc3RhdEVycm9yLCBzdGF0KSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBzdGF0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGxzdGF0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MubWFya1N5bWJvbGljTGluaykge1xuICAgICAgICAgICAgICAgIHN0YXQuaXNTeW1ib2xpY0xpbmsgPSAoKSA9PiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgc3RhdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkID0gcmVhZDtcbmZ1bmN0aW9uIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIGVycm9yKSB7XG4gICAgY2FsbGJhY2soZXJyb3IpO1xufVxuZnVuY3Rpb24gY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcmVzdWx0KSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVhZCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlYWQocGF0aCwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCBsc3RhdCA9IHNldHRpbmdzLmZzLmxzdGF0U3luYyhwYXRoKTtcbiAgICBpZiAoIWxzdGF0LmlzU3ltYm9saWNMaW5rKCkgfHwgIXNldHRpbmdzLmZvbGxvd1N5bWJvbGljTGluaykge1xuICAgICAgICByZXR1cm4gbHN0YXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0YXQgPSBzZXR0aW5ncy5mcy5zdGF0U3luYyhwYXRoKTtcbiAgICAgICAgaWYgKHNldHRpbmdzLm1hcmtTeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgIHN0YXQuaXNTeW1ib2xpY0xpbmsgPSAoKSA9PiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFzZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgIHJldHVybiBsc3RhdDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5leHBvcnRzLnJlYWQgPSByZWFkO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlciA9IGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiA9IHZvaWQgMDtcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xuZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSID0ge1xuICAgIGxzdGF0OiBmcy5sc3RhdCxcbiAgICBzdGF0OiBmcy5zdGF0LFxuICAgIGxzdGF0U3luYzogZnMubHN0YXRTeW5jLFxuICAgIHN0YXRTeW5jOiBmcy5zdGF0U3luY1xufTtcbmZ1bmN0aW9uIGNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyKGZzTWV0aG9kcykge1xuICAgIGlmIChmc01ldGhvZHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIpLCBmc01ldGhvZHMpO1xufVxuZXhwb3J0cy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlciA9IGNyZWF0ZUZpbGVTeXN0ZW1BZGFwdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiLi9hZGFwdGVycy9mc1wiKTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcihfb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgdGhpcy5mb2xsb3dTeW1ib2xpY0xpbmsgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmZvbGxvd1N5bWJvbGljTGluaywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZnMgPSBmcy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlcih0aGlzLl9vcHRpb25zLmZzKTtcbiAgICAgICAgdGhpcy5tYXJrU3ltYm9saWNMaW5rID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5tYXJrU3ltYm9saWNMaW5rLCBmYWxzZSk7XG4gICAgICAgIHRoaXMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmssIHRydWUpO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uICE9PSBudWxsICYmIG9wdGlvbiAhPT0gdm9pZCAwID8gb3B0aW9uIDogdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3M7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXRTeW5jID0gZXhwb3J0cy5zdGF0ID0gZXhwb3J0cy5TZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGFzeW5jID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL2FzeW5jXCIpO1xuY29uc3Qgc3luYyA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zeW5jXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIHN0YXQocGF0aCwgb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFzeW5jLnJlYWQocGF0aCwgZ2V0U2V0dGluZ3MoKSwgb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc3luYy5yZWFkKHBhdGgsIGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayksIGNhbGxiYWNrKTtcbn1cbmV4cG9ydHMuc3RhdCA9IHN0YXQ7XG5mdW5jdGlvbiBzdGF0U3luYyhwYXRoLCBvcHRpb25zT3JTZXR0aW5ncykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3MpO1xuICAgIHJldHVybiBzeW5jLnJlYWQocGF0aCwgc2V0dGluZ3MpO1xufVxuZXhwb3J0cy5zdGF0U3luYyA9IHN0YXRTeW5jO1xuZnVuY3Rpb24gZ2V0U2V0dGluZ3Moc2V0dGluZ3NPck9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChzZXR0aW5nc09yT3B0aW9ucyBpbnN0YW5jZW9mIHNldHRpbmdzXzEuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3NPck9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KHNldHRpbmdzT3JPcHRpb25zKTtcbn1cbiIsICIvKiEgcXVldWUtbWljcm90YXNrLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5sZXQgcHJvbWlzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJ1xuICA/IHF1ZXVlTWljcm90YXNrLmJpbmQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG4gIC8vIHJldXNlIHJlc29sdmVkIHByb21pc2UsIGFuZCBhbGxvY2F0ZSBpdCBsYXppbHlcbiAgOiBjYiA9PiAocHJvbWlzZSB8fCAocHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpKSlcbiAgICAudGhlbihjYilcbiAgICAuY2F0Y2goZXJyID0+IHNldFRpbWVvdXQoKCkgPT4geyB0aHJvdyBlcnIgfSwgMCkpXG4iLCAiLyohIHJ1bi1wYXJhbGxlbC4gTUlUIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xubW9kdWxlLmV4cG9ydHMgPSBydW5QYXJhbGxlbFxuXG5jb25zdCBxdWV1ZU1pY3JvdGFzayA9IHJlcXVpcmUoJ3F1ZXVlLW1pY3JvdGFzaycpXG5cbmZ1bmN0aW9uIHJ1blBhcmFsbGVsICh0YXNrcywgY2IpIHtcbiAgbGV0IHJlc3VsdHMsIHBlbmRpbmcsIGtleXNcbiAgbGV0IGlzU3luYyA9IHRydWVcblxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXNrcykpIHtcbiAgICByZXN1bHRzID0gW11cbiAgICBwZW5kaW5nID0gdGFza3MubGVuZ3RoXG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHRhc2tzKVxuICAgIHJlc3VsdHMgPSB7fVxuICAgIHBlbmRpbmcgPSBrZXlzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoZXJyKSB7XG4gICAgZnVuY3Rpb24gZW5kICgpIHtcbiAgICAgIGlmIChjYikgY2IoZXJyLCByZXN1bHRzKVxuICAgICAgY2IgPSBudWxsXG4gICAgfVxuICAgIGlmIChpc1N5bmMpIHF1ZXVlTWljcm90YXNrKGVuZClcbiAgICBlbHNlIGVuZCgpXG4gIH1cblxuICBmdW5jdGlvbiBlYWNoIChpLCBlcnIsIHJlc3VsdCkge1xuICAgIHJlc3VsdHNbaV0gPSByZXN1bHRcbiAgICBpZiAoLS1wZW5kaW5nID09PSAwIHx8IGVycikge1xuICAgICAgZG9uZShlcnIpXG4gICAgfVxuICB9XG5cbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgLy8gZW1wdHlcbiAgICBkb25lKG51bGwpXG4gIH0gZWxzZSBpZiAoa2V5cykge1xuICAgIC8vIG9iamVjdFxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB0YXNrc1trZXldKGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkgeyBlYWNoKGtleSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBhcnJheVxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2ssIGkpIHtcbiAgICAgIHRhc2soZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7IGVhY2goaSwgZXJyLCByZXN1bHQpIH0pXG4gICAgfSlcbiAgfVxuXG4gIGlzU3luYyA9IGZhbHNlXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLklTX1NVUFBPUlRfUkVBRERJUl9XSVRIX0ZJTEVfVFlQRVMgPSB2b2lkIDA7XG5jb25zdCBOT0RFX1BST0NFU1NfVkVSU0lPTl9QQVJUUyA9IHByb2Nlc3MudmVyc2lvbnMubm9kZS5zcGxpdCgnLicpO1xuaWYgKE5PREVfUFJPQ0VTU19WRVJTSU9OX1BBUlRTWzBdID09PSB1bmRlZmluZWQgfHwgTk9ERV9QUk9DRVNTX1ZFUlNJT05fUEFSVFNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBiZWhhdmlvci4gVGhlICdwcm9jZXNzLnZlcnNpb25zLm5vZGUnIHZhcmlhYmxlIGhhcyBpbnZhbGlkIHZhbHVlOiAke3Byb2Nlc3MudmVyc2lvbnMubm9kZX1gKTtcbn1cbmNvbnN0IE1BSk9SX1ZFUlNJT04gPSBOdW1iZXIucGFyc2VJbnQoTk9ERV9QUk9DRVNTX1ZFUlNJT05fUEFSVFNbMF0sIDEwKTtcbmNvbnN0IE1JTk9SX1ZFUlNJT04gPSBOdW1iZXIucGFyc2VJbnQoTk9ERV9QUk9DRVNTX1ZFUlNJT05fUEFSVFNbMV0sIDEwKTtcbmNvbnN0IFNVUFBPUlRFRF9NQUpPUl9WRVJTSU9OID0gMTA7XG5jb25zdCBTVVBQT1JURURfTUlOT1JfVkVSU0lPTiA9IDEwO1xuY29uc3QgSVNfTUFUQ0hFRF9CWV9NQUpPUiA9IE1BSk9SX1ZFUlNJT04gPiBTVVBQT1JURURfTUFKT1JfVkVSU0lPTjtcbmNvbnN0IElTX01BVENIRURfQllfTUFKT1JfQU5EX01JTk9SID0gTUFKT1JfVkVSU0lPTiA9PT0gU1VQUE9SVEVEX01BSk9SX1ZFUlNJT04gJiYgTUlOT1JfVkVSU0lPTiA+PSBTVVBQT1JURURfTUlOT1JfVkVSU0lPTjtcbi8qKlxuICogSVMgYHRydWVgIGZvciBOb2RlLmpzIDEwLjEwIGFuZCBncmVhdGVyLlxuICovXG5leHBvcnRzLklTX1NVUFBPUlRfUkVBRERJUl9XSVRIX0ZJTEVfVFlQRVMgPSBJU19NQVRDSEVEX0JZX01BSk9SIHx8IElTX01BVENIRURfQllfTUFKT1JfQU5EX01JTk9SO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMgPSB2b2lkIDA7XG5jbGFzcyBEaXJlbnRGcm9tU3RhdHMge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXRzKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXNCbG9ja0RldmljZSA9IHN0YXRzLmlzQmxvY2tEZXZpY2UuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNDaGFyYWN0ZXJEZXZpY2UgPSBzdGF0cy5pc0NoYXJhY3RlckRldmljZS5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0RpcmVjdG9yeSA9IHN0YXRzLmlzRGlyZWN0b3J5LmJpbmQoc3RhdHMpO1xuICAgICAgICB0aGlzLmlzRklGTyA9IHN0YXRzLmlzRklGTy5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc0ZpbGUgPSBzdGF0cy5pc0ZpbGUuYmluZChzdGF0cyk7XG4gICAgICAgIHRoaXMuaXNTb2NrZXQgPSBzdGF0cy5pc1NvY2tldC5iaW5kKHN0YXRzKTtcbiAgICAgICAgdGhpcy5pc1N5bWJvbGljTGluayA9IHN0YXRzLmlzU3ltYm9saWNMaW5rLmJpbmQoc3RhdHMpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZURpcmVudEZyb21TdGF0cyhuYW1lLCBzdGF0cykge1xuICAgIHJldHVybiBuZXcgRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKTtcbn1cbmV4cG9ydHMuY3JlYXRlRGlyZW50RnJvbVN0YXRzID0gY3JlYXRlRGlyZW50RnJvbVN0YXRzO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5mcyA9IHZvaWQgMDtcbmNvbnN0IGZzID0gcmVxdWlyZShcIi4vZnNcIik7XG5leHBvcnRzLmZzID0gZnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmpvaW5QYXRoU2VnbWVudHMgPSB2b2lkIDA7XG5mdW5jdGlvbiBqb2luUGF0aFNlZ21lbnRzKGEsIGIsIHNlcGFyYXRvcikge1xuICAgIC8qKlxuICAgICAqIFRoZSBjb3JyZWN0IGhhbmRsaW5nIG9mIGNhc2VzIHdoZW4gdGhlIGZpcnN0IHNlZ21lbnQgaXMgYSByb290IChgL2AsIGBDOi9gKSBvciBVTkMgcGF0aCAoYC8vPy9DOi9gKS5cbiAgICAgKi9cbiAgICBpZiAoYS5lbmRzV2l0aChzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBhICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIGEgKyBzZXBhcmF0b3IgKyBiO1xufVxuZXhwb3J0cy5qb2luUGF0aFNlZ21lbnRzID0gam9pblBhdGhTZWdtZW50cztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucmVhZGRpciA9IGV4cG9ydHMucmVhZGRpcldpdGhGaWxlVHlwZXMgPSBleHBvcnRzLnJlYWQgPSB2b2lkIDA7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IHJwbCA9IHJlcXVpcmUoXCJydW4tcGFyYWxsZWxcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGNvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcbmZ1bmN0aW9uIHJlYWQoZGlyZWN0b3J5LCBzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBpZiAoIXNldHRpbmdzLnN0YXRzICYmIGNvbnN0YW50c18xLklTX1NVUFBPUlRfUkVBRERJUl9XSVRIX0ZJTEVfVFlQRVMpIHtcbiAgICAgICAgcmVhZGRpcldpdGhGaWxlVHlwZXMoZGlyZWN0b3J5LCBzZXR0aW5ncywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlYWRkaXIoZGlyZWN0b3J5LCBzZXR0aW5ncywgY2FsbGJhY2spO1xufVxuZXhwb3J0cy5yZWFkID0gcmVhZDtcbmZ1bmN0aW9uIHJlYWRkaXJXaXRoRmlsZVR5cGVzKGRpcmVjdG9yeSwgc2V0dGluZ3MsIGNhbGxiYWNrKSB7XG4gICAgc2V0dGluZ3MuZnMucmVhZGRpcihkaXJlY3RvcnksIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9LCAocmVhZGRpckVycm9yLCBkaXJlbnRzKSA9PiB7XG4gICAgICAgIGlmIChyZWFkZGlyRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNhbGxGYWlsdXJlQ2FsbGJhY2soY2FsbGJhY2ssIHJlYWRkaXJFcnJvcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW50cmllcyA9IGRpcmVudHMubWFwKChkaXJlbnQpID0+ICh7XG4gICAgICAgICAgICBkaXJlbnQsXG4gICAgICAgICAgICBuYW1lOiBkaXJlbnQubmFtZSxcbiAgICAgICAgICAgIHBhdGg6IGNvbW1vbi5qb2luUGF0aFNlZ21lbnRzKGRpcmVjdG9yeSwgZGlyZW50Lm5hbWUsIHNldHRpbmdzLnBhdGhTZWdtZW50U2VwYXJhdG9yKVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmICghc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcykge1xuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgZW50cmllcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFza3MgPSBlbnRyaWVzLm1hcCgoZW50cnkpID0+IG1ha2VScGxUYXNrRW50cnkoZW50cnksIHNldHRpbmdzKSk7XG4gICAgICAgIHJwbCh0YXNrcywgKHJwbEVycm9yLCBycGxFbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocnBsRXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBycGxFcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgcnBsRW50cmllcyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkZGlyV2l0aEZpbGVUeXBlcyA9IHJlYWRkaXJXaXRoRmlsZVR5cGVzO1xuZnVuY3Rpb24gbWFrZVJwbFRhc2tFbnRyeShlbnRyeSwgc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gKGRvbmUpID0+IHtcbiAgICAgICAgaWYgKCFlbnRyeS5kaXJlbnQuaXNTeW1ib2xpY0xpbmsoKSkge1xuICAgICAgICAgICAgZG9uZShudWxsLCBlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0dGluZ3MuZnMuc3RhdChlbnRyeS5wYXRoLCAoc3RhdEVycm9yLCBzdGF0cykgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXRFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZShzdGF0RXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgZW50cnkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJ5LmRpcmVudCA9IHV0aWxzLmZzLmNyZWF0ZURpcmVudEZyb21TdGF0cyhlbnRyeS5uYW1lLCBzdGF0cyk7XG4gICAgICAgICAgICBkb25lKG51bGwsIGVudHJ5KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlYWRkaXIoZGlyZWN0b3J5LCBzZXR0aW5ncywgY2FsbGJhY2spIHtcbiAgICBzZXR0aW5ncy5mcy5yZWFkZGlyKGRpcmVjdG9yeSwgKHJlYWRkaXJFcnJvciwgbmFtZXMpID0+IHtcbiAgICAgICAgaWYgKHJlYWRkaXJFcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgcmVhZGRpckVycm9yKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0YXNrcyA9IG5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGF0aCA9IGNvbW1vbi5qb2luUGF0aFNlZ21lbnRzKGRpcmVjdG9yeSwgbmFtZSwgc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIChkb25lKSA9PiB7XG4gICAgICAgICAgICAgICAgZnNTdGF0LnN0YXQocGF0aCwgc2V0dGluZ3MuZnNTdGF0U2V0dGluZ3MsIChlcnJvciwgc3RhdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZW50OiB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMobmFtZSwgc3RhdHMpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5zdGF0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHMgPSBzdGF0cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBkb25lKG51bGwsIGVudHJ5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBycGwodGFza3MsIChycGxFcnJvciwgZW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKHJwbEVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FsbEZhaWx1cmVDYWxsYmFjayhjYWxsYmFjaywgcnBsRXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGVudHJpZXMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVhZGRpciA9IHJlYWRkaXI7XG5mdW5jdGlvbiBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcikge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcbn1cbmZ1bmN0aW9uIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIHJlc3VsdCkge1xuICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlYWRkaXIgPSBleHBvcnRzLnJlYWRkaXJXaXRoRmlsZVR5cGVzID0gZXhwb3J0cy5yZWFkID0gdm9pZCAwO1xuY29uc3QgZnNTdGF0ID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnN0YXRcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGNvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcbmZ1bmN0aW9uIHJlYWQoZGlyZWN0b3J5LCBzZXR0aW5ncykge1xuICAgIGlmICghc2V0dGluZ3Muc3RhdHMgJiYgY29uc3RhbnRzXzEuSVNfU1VQUE9SVF9SRUFERElSX1dJVEhfRklMRV9UWVBFUykge1xuICAgICAgICByZXR1cm4gcmVhZGRpcldpdGhGaWxlVHlwZXMoZGlyZWN0b3J5LCBzZXR0aW5ncyk7XG4gICAgfVxuICAgIHJldHVybiByZWFkZGlyKGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xufVxuZXhwb3J0cy5yZWFkID0gcmVhZDtcbmZ1bmN0aW9uIHJlYWRkaXJXaXRoRmlsZVR5cGVzKGRpcmVjdG9yeSwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCBkaXJlbnRzID0gc2V0dGluZ3MuZnMucmVhZGRpclN5bmMoZGlyZWN0b3J5LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG4gICAgcmV0dXJuIGRpcmVudHMubWFwKChkaXJlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZW50cnkgPSB7XG4gICAgICAgICAgICBkaXJlbnQsXG4gICAgICAgICAgICBuYW1lOiBkaXJlbnQubmFtZSxcbiAgICAgICAgICAgIHBhdGg6IGNvbW1vbi5qb2luUGF0aFNlZ21lbnRzKGRpcmVjdG9yeSwgZGlyZW50Lm5hbWUsIHNldHRpbmdzLnBhdGhTZWdtZW50U2VwYXJhdG9yKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoZW50cnkuZGlyZW50LmlzU3ltYm9saWNMaW5rKCkgJiYgc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0cyA9IHNldHRpbmdzLmZzLnN0YXRTeW5jKGVudHJ5LnBhdGgpO1xuICAgICAgICAgICAgICAgIGVudHJ5LmRpcmVudCA9IHV0aWxzLmZzLmNyZWF0ZURpcmVudEZyb21TdGF0cyhlbnRyeS5uYW1lLCBzdGF0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2V0dGluZ3MudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfSk7XG59XG5leHBvcnRzLnJlYWRkaXJXaXRoRmlsZVR5cGVzID0gcmVhZGRpcldpdGhGaWxlVHlwZXM7XG5mdW5jdGlvbiByZWFkZGlyKGRpcmVjdG9yeSwgc2V0dGluZ3MpIHtcbiAgICBjb25zdCBuYW1lcyA9IHNldHRpbmdzLmZzLnJlYWRkaXJTeW5jKGRpcmVjdG9yeSk7XG4gICAgcmV0dXJuIG5hbWVzLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBjb21tb24uam9pblBhdGhTZWdtZW50cyhkaXJlY3RvcnksIG5hbWUsIHNldHRpbmdzLnBhdGhTZWdtZW50U2VwYXJhdG9yKTtcbiAgICAgICAgY29uc3Qgc3RhdHMgPSBmc1N0YXQuc3RhdFN5bmMoZW50cnlQYXRoLCBzZXR0aW5ncy5mc1N0YXRTZXR0aW5ncyk7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhdGg6IGVudHJ5UGF0aCxcbiAgICAgICAgICAgIGRpcmVudDogdXRpbHMuZnMuY3JlYXRlRGlyZW50RnJvbVN0YXRzKG5hbWUsIHN0YXRzKVxuICAgICAgICB9O1xuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhdHMpIHtcbiAgICAgICAgICAgIGVudHJ5LnN0YXRzID0gc3RhdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgIH0pO1xufVxuZXhwb3J0cy5yZWFkZGlyID0gcmVhZGRpcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIgPSBleHBvcnRzLkZJTEVfU1lTVEVNX0FEQVBURVIgPSB2b2lkIDA7XG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUiA9IHtcbiAgICBsc3RhdDogZnMubHN0YXQsXG4gICAgc3RhdDogZnMuc3RhdCxcbiAgICBsc3RhdFN5bmM6IGZzLmxzdGF0U3luYyxcbiAgICBzdGF0U3luYzogZnMuc3RhdFN5bmMsXG4gICAgcmVhZGRpcjogZnMucmVhZGRpcixcbiAgICByZWFkZGlyU3luYzogZnMucmVhZGRpclN5bmNcbn07XG5mdW5jdGlvbiBjcmVhdGVGaWxlU3lzdGVtQWRhcHRlcihmc01ldGhvZHMpIHtcbiAgICBpZiAoZnNNZXRob2RzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGV4cG9ydHMuRklMRV9TWVNURU1fQURBUFRFUjtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXhwb3J0cy5GSUxFX1NZU1RFTV9BREFQVEVSKSwgZnNNZXRob2RzKTtcbn1cbmV4cG9ydHMuY3JlYXRlRmlsZVN5c3RlbUFkYXB0ZXIgPSBjcmVhdGVGaWxlU3lzdGVtQWRhcHRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiLi9hZGFwdGVycy9mc1wiKTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcihfb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgdGhpcy5mb2xsb3dTeW1ib2xpY0xpbmtzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5mb2xsb3dTeW1ib2xpY0xpbmtzLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZnMgPSBmcy5jcmVhdGVGaWxlU3lzdGVtQWRhcHRlcih0aGlzLl9vcHRpb25zLmZzKTtcbiAgICAgICAgdGhpcy5wYXRoU2VnbWVudFNlcGFyYXRvciA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMucGF0aFNlZ21lbnRTZXBhcmF0b3IsIHBhdGguc2VwKTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuc3RhdHMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmsgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZnNTdGF0U2V0dGluZ3MgPSBuZXcgZnNTdGF0LlNldHRpbmdzKHtcbiAgICAgICAgICAgIGZvbGxvd1N5bWJvbGljTGluazogdGhpcy5mb2xsb3dTeW1ib2xpY0xpbmtzLFxuICAgICAgICAgICAgZnM6IHRoaXMuZnMsXG4gICAgICAgICAgICB0aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbms6IHRoaXMudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfZ2V0VmFsdWUob3B0aW9uLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uICE9PSBudWxsICYmIG9wdGlvbiAhPT0gdm9pZCAwID8gb3B0aW9uIDogdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3M7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNldHRpbmdzID0gZXhwb3J0cy5zY2FuZGlyU3luYyA9IGV4cG9ydHMuc2NhbmRpciA9IHZvaWQgMDtcbmNvbnN0IGFzeW5jID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL2FzeW5jXCIpO1xuY29uc3Qgc3luYyA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zeW5jXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIHNjYW5kaXIocGF0aCwgb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrLCBjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFzeW5jLnJlYWQocGF0aCwgZ2V0U2V0dGluZ3MoKSwgb3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhc3luYy5yZWFkKHBhdGgsIGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzT3JDYWxsYmFjayksIGNhbGxiYWNrKTtcbn1cbmV4cG9ydHMuc2NhbmRpciA9IHNjYW5kaXI7XG5mdW5jdGlvbiBzY2FuZGlyU3luYyhwYXRoLCBvcHRpb25zT3JTZXR0aW5ncykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3MpO1xuICAgIHJldHVybiBzeW5jLnJlYWQocGF0aCwgc2V0dGluZ3MpO1xufVxuZXhwb3J0cy5zY2FuZGlyU3luYyA9IHNjYW5kaXJTeW5jO1xuZnVuY3Rpb24gZ2V0U2V0dGluZ3Moc2V0dGluZ3NPck9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChzZXR0aW5nc09yT3B0aW9ucyBpbnN0YW5jZW9mIHNldHRpbmdzXzEuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3NPck9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KHNldHRpbmdzT3JPcHRpb25zKTtcbn1cbiIsICIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gcmV1c2lmeSAoQ29uc3RydWN0b3IpIHtcbiAgdmFyIGhlYWQgPSBuZXcgQ29uc3RydWN0b3IoKVxuICB2YXIgdGFpbCA9IGhlYWRcblxuICBmdW5jdGlvbiBnZXQgKCkge1xuICAgIHZhciBjdXJyZW50ID0gaGVhZFxuXG4gICAgaWYgKGN1cnJlbnQubmV4dCkge1xuICAgICAgaGVhZCA9IGN1cnJlbnQubmV4dFxuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkID0gbmV3IENvbnN0cnVjdG9yKClcbiAgICAgIHRhaWwgPSBoZWFkXG4gICAgfVxuXG4gICAgY3VycmVudC5uZXh0ID0gbnVsbFxuXG4gICAgcmV0dXJuIGN1cnJlbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbGVhc2UgKG9iaikge1xuICAgIHRhaWwubmV4dCA9IG9ialxuICAgIHRhaWwgPSBvYmpcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiBnZXQsXG4gICAgcmVsZWFzZTogcmVsZWFzZVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmV1c2lmeVxuIiwgIid1c2Ugc3RyaWN0J1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cblxudmFyIHJldXNpZnkgPSByZXF1aXJlKCdyZXVzaWZ5JylcblxuZnVuY3Rpb24gZmFzdHF1ZXVlIChjb250ZXh0LCB3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gIGlmICh0eXBlb2YgY29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbmN1cnJlbmN5ID0gd29ya2VyXG4gICAgd29ya2VyID0gY29udGV4dFxuICAgIGNvbnRleHQgPSBudWxsXG4gIH1cblxuICBpZiAoY29uY3VycmVuY3kgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdmYXN0cXVldWUgY29uY3VycmVuY3kgbXVzdCBiZSBncmVhdGVyIHRoYW4gMScpXG4gIH1cblxuICB2YXIgY2FjaGUgPSByZXVzaWZ5KFRhc2spXG4gIHZhciBxdWV1ZUhlYWQgPSBudWxsXG4gIHZhciBxdWV1ZVRhaWwgPSBudWxsXG4gIHZhciBfcnVubmluZyA9IDBcbiAgdmFyIGVycm9ySGFuZGxlciA9IG51bGxcblxuICB2YXIgc2VsZiA9IHtcbiAgICBwdXNoOiBwdXNoLFxuICAgIGRyYWluOiBub29wLFxuICAgIHNhdHVyYXRlZDogbm9vcCxcbiAgICBwYXVzZTogcGF1c2UsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICBjb25jdXJyZW5jeTogY29uY3VycmVuY3ksXG4gICAgcnVubmluZzogcnVubmluZyxcbiAgICByZXN1bWU6IHJlc3VtZSxcbiAgICBpZGxlOiBpZGxlLFxuICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgIGdldFF1ZXVlOiBnZXRRdWV1ZSxcbiAgICB1bnNoaWZ0OiB1bnNoaWZ0LFxuICAgIGVtcHR5OiBub29wLFxuICAgIGtpbGw6IGtpbGwsXG4gICAga2lsbEFuZERyYWluOiBraWxsQW5kRHJhaW4sXG4gICAgZXJyb3I6IGVycm9yXG4gIH1cblxuICByZXR1cm4gc2VsZlxuXG4gIGZ1bmN0aW9uIHJ1bm5pbmcgKCkge1xuICAgIHJldHVybiBfcnVubmluZ1xuICB9XG5cbiAgZnVuY3Rpb24gcGF1c2UgKCkge1xuICAgIHNlbGYucGF1c2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gbGVuZ3RoICgpIHtcbiAgICB2YXIgY3VycmVudCA9IHF1ZXVlSGVhZFxuICAgIHZhciBjb3VudGVyID0gMFxuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgICAgIGNvdW50ZXIrK1xuICAgIH1cblxuICAgIHJldHVybiBjb3VudGVyXG4gIH1cblxuICBmdW5jdGlvbiBnZXRRdWV1ZSAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBxdWV1ZUhlYWRcbiAgICB2YXIgdGFza3MgPSBbXVxuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIHRhc2tzLnB1c2goY3VycmVudC52YWx1ZSlcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3NcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZSAoKSB7XG4gICAgaWYgKCFzZWxmLnBhdXNlZCkgcmV0dXJuXG4gICAgc2VsZi5wYXVzZWQgPSBmYWxzZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5jb25jdXJyZW5jeTsgaSsrKSB7XG4gICAgICBfcnVubmluZysrXG4gICAgICByZWxlYXNlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpZGxlICgpIHtcbiAgICByZXR1cm4gX3J1bm5pbmcgPT09IDAgJiYgc2VsZi5sZW5ndGgoKSA9PT0gMFxuICB9XG5cbiAgZnVuY3Rpb24gcHVzaCAodmFsdWUsIGRvbmUpIHtcbiAgICB2YXIgY3VycmVudCA9IGNhY2hlLmdldCgpXG5cbiAgICBjdXJyZW50LmNvbnRleHQgPSBjb250ZXh0XG4gICAgY3VycmVudC5yZWxlYXNlID0gcmVsZWFzZVxuICAgIGN1cnJlbnQudmFsdWUgPSB2YWx1ZVxuICAgIGN1cnJlbnQuY2FsbGJhY2sgPSBkb25lIHx8IG5vb3BcbiAgICBjdXJyZW50LmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlclxuXG4gICAgaWYgKF9ydW5uaW5nID09PSBzZWxmLmNvbmN1cnJlbmN5IHx8IHNlbGYucGF1c2VkKSB7XG4gICAgICBpZiAocXVldWVUYWlsKSB7XG4gICAgICAgIHF1ZXVlVGFpbC5uZXh0ID0gY3VycmVudFxuICAgICAgICBxdWV1ZVRhaWwgPSBjdXJyZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUhlYWQgPSBjdXJyZW50XG4gICAgICAgIHF1ZXVlVGFpbCA9IGN1cnJlbnRcbiAgICAgICAgc2VsZi5zYXR1cmF0ZWQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfcnVubmluZysrXG4gICAgICB3b3JrZXIuY2FsbChjb250ZXh0LCBjdXJyZW50LnZhbHVlLCBjdXJyZW50LndvcmtlZClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bnNoaWZ0ICh2YWx1ZSwgZG9uZSkge1xuICAgIHZhciBjdXJyZW50ID0gY2FjaGUuZ2V0KClcblxuICAgIGN1cnJlbnQuY29udGV4dCA9IGNvbnRleHRcbiAgICBjdXJyZW50LnJlbGVhc2UgPSByZWxlYXNlXG4gICAgY3VycmVudC52YWx1ZSA9IHZhbHVlXG4gICAgY3VycmVudC5jYWxsYmFjayA9IGRvbmUgfHwgbm9vcFxuXG4gICAgaWYgKF9ydW5uaW5nID09PSBzZWxmLmNvbmN1cnJlbmN5IHx8IHNlbGYucGF1c2VkKSB7XG4gICAgICBpZiAocXVldWVIZWFkKSB7XG4gICAgICAgIGN1cnJlbnQubmV4dCA9IHF1ZXVlSGVhZFxuICAgICAgICBxdWV1ZUhlYWQgPSBjdXJyZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUhlYWQgPSBjdXJyZW50XG4gICAgICAgIHF1ZXVlVGFpbCA9IGN1cnJlbnRcbiAgICAgICAgc2VsZi5zYXR1cmF0ZWQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfcnVubmluZysrXG4gICAgICB3b3JrZXIuY2FsbChjb250ZXh0LCBjdXJyZW50LnZhbHVlLCBjdXJyZW50LndvcmtlZClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWxlYXNlIChob2xkZXIpIHtcbiAgICBpZiAoaG9sZGVyKSB7XG4gICAgICBjYWNoZS5yZWxlYXNlKGhvbGRlcilcbiAgICB9XG4gICAgdmFyIG5leHQgPSBxdWV1ZUhlYWRcbiAgICBpZiAobmV4dCkge1xuICAgICAgaWYgKCFzZWxmLnBhdXNlZCkge1xuICAgICAgICBpZiAocXVldWVUYWlsID09PSBxdWV1ZUhlYWQpIHtcbiAgICAgICAgICBxdWV1ZVRhaWwgPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgcXVldWVIZWFkID0gbmV4dC5uZXh0XG4gICAgICAgIG5leHQubmV4dCA9IG51bGxcbiAgICAgICAgd29ya2VyLmNhbGwoY29udGV4dCwgbmV4dC52YWx1ZSwgbmV4dC53b3JrZWQpXG4gICAgICAgIGlmIChxdWV1ZVRhaWwgPT09IG51bGwpIHtcbiAgICAgICAgICBzZWxmLmVtcHR5KClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3J1bm5pbmctLVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoLS1fcnVubmluZyA9PT0gMCkge1xuICAgICAgc2VsZi5kcmFpbigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2lsbCAoKSB7XG4gICAgcXVldWVIZWFkID0gbnVsbFxuICAgIHF1ZXVlVGFpbCA9IG51bGxcbiAgICBzZWxmLmRyYWluID0gbm9vcFxuICB9XG5cbiAgZnVuY3Rpb24ga2lsbEFuZERyYWluICgpIHtcbiAgICBxdWV1ZUhlYWQgPSBudWxsXG4gICAgcXVldWVUYWlsID0gbnVsbFxuICAgIHNlbGYuZHJhaW4oKVxuICAgIHNlbGYuZHJhaW4gPSBub29wXG4gIH1cblxuICBmdW5jdGlvbiBlcnJvciAoaGFuZGxlcikge1xuICAgIGVycm9ySGFuZGxlciA9IGhhbmRsZXJcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbmZ1bmN0aW9uIFRhc2sgKCkge1xuICB0aGlzLnZhbHVlID0gbnVsbFxuICB0aGlzLmNhbGxiYWNrID0gbm9vcFxuICB0aGlzLm5leHQgPSBudWxsXG4gIHRoaXMucmVsZWFzZSA9IG5vb3BcbiAgdGhpcy5jb250ZXh0ID0gbnVsbFxuICB0aGlzLmVycm9ySGFuZGxlciA9IG51bGxcblxuICB2YXIgc2VsZiA9IHRoaXNcblxuICB0aGlzLndvcmtlZCA9IGZ1bmN0aW9uIHdvcmtlZCAoZXJyLCByZXN1bHQpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBzZWxmLmNhbGxiYWNrXG4gICAgdmFyIGVycm9ySGFuZGxlciA9IHNlbGYuZXJyb3JIYW5kbGVyXG4gICAgdmFyIHZhbCA9IHNlbGYudmFsdWVcbiAgICBzZWxmLnZhbHVlID0gbnVsbFxuICAgIHNlbGYuY2FsbGJhY2sgPSBub29wXG4gICAgaWYgKHNlbGYuZXJyb3JIYW5kbGVyKSB7XG4gICAgICBlcnJvckhhbmRsZXIoZXJyLCB2YWwpXG4gICAgfVxuICAgIGNhbGxiYWNrLmNhbGwoc2VsZi5jb250ZXh0LCBlcnIsIHJlc3VsdClcbiAgICBzZWxmLnJlbGVhc2Uoc2VsZilcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWV1ZUFzUHJvbWlzZWQgKGNvbnRleHQsIHdvcmtlciwgY29uY3VycmVuY3kpIHtcbiAgaWYgKHR5cGVvZiBjb250ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uY3VycmVuY3kgPSB3b3JrZXJcbiAgICB3b3JrZXIgPSBjb250ZXh0XG4gICAgY29udGV4dCA9IG51bGxcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzeW5jV3JhcHBlciAoYXJnLCBjYikge1xuICAgIHdvcmtlci5jYWxsKHRoaXMsIGFyZylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY2IobnVsbCwgcmVzKVxuICAgICAgfSwgY2IpXG4gIH1cblxuICB2YXIgcXVldWUgPSBmYXN0cXVldWUoY29udGV4dCwgYXN5bmNXcmFwcGVyLCBjb25jdXJyZW5jeSlcblxuICB2YXIgcHVzaENiID0gcXVldWUucHVzaFxuICB2YXIgdW5zaGlmdENiID0gcXVldWUudW5zaGlmdFxuXG4gIHF1ZXVlLnB1c2ggPSBwdXNoXG4gIHF1ZXVlLnVuc2hpZnQgPSB1bnNoaWZ0XG4gIHF1ZXVlLmRyYWluZWQgPSBkcmFpbmVkXG5cbiAgcmV0dXJuIHF1ZXVlXG5cbiAgZnVuY3Rpb24gcHVzaCAodmFsdWUpIHtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHB1c2hDYih2YWx1ZSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0KVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gTGV0J3MgZm9yayB0aGUgcHJvbWlzZSBjaGFpbiB0b1xuICAgIC8vIG1ha2UgdGhlIGVycm9yIGJ1YmJsZSB1cCB0byB0aGUgdXNlciBidXRcbiAgICAvLyBub3QgbGVhZCB0byBhIHVuaGFuZGxlZFJlamVjdGlvblxuICAgIHAuY2F0Y2gobm9vcClcblxuICAgIHJldHVybiBwXG4gIH1cblxuICBmdW5jdGlvbiB1bnNoaWZ0ICh2YWx1ZSkge1xuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdW5zaGlmdENiKHZhbHVlLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBMZXQncyBmb3JrIHRoZSBwcm9taXNlIGNoYWluIHRvXG4gICAgLy8gbWFrZSB0aGUgZXJyb3IgYnViYmxlIHVwIHRvIHRoZSB1c2VyIGJ1dFxuICAgIC8vIG5vdCBsZWFkIHRvIGEgdW5oYW5kbGVkUmVqZWN0aW9uXG4gICAgcC5jYXRjaChub29wKVxuXG4gICAgcmV0dXJuIHBcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWluZWQgKCkge1xuICAgIHZhciBwcmV2aW91c0RyYWluID0gcXVldWUuZHJhaW5cblxuICAgIHZhciBwID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIHF1ZXVlLmRyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwcmV2aW91c0RyYWluKClcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBwXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmYXN0cXVldWVcbm1vZHVsZS5leHBvcnRzLnByb21pc2UgPSBxdWV1ZUFzUHJvbWlzZWRcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IGV4cG9ydHMucmVwbGFjZVBhdGhTZWdtZW50U2VwYXJhdG9yID0gZXhwb3J0cy5pc0FwcGxpZWRGaWx0ZXIgPSBleHBvcnRzLmlzRmF0YWxFcnJvciA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzRmF0YWxFcnJvcihzZXR0aW5ncywgZXJyb3IpIHtcbiAgICBpZiAoc2V0dGluZ3MuZXJyb3JGaWx0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhc2V0dGluZ3MuZXJyb3JGaWx0ZXIoZXJyb3IpO1xufVxuZXhwb3J0cy5pc0ZhdGFsRXJyb3IgPSBpc0ZhdGFsRXJyb3I7XG5mdW5jdGlvbiBpc0FwcGxpZWRGaWx0ZXIoZmlsdGVyLCB2YWx1ZSkge1xuICAgIHJldHVybiBmaWx0ZXIgPT09IG51bGwgfHwgZmlsdGVyKHZhbHVlKTtcbn1cbmV4cG9ydHMuaXNBcHBsaWVkRmlsdGVyID0gaXNBcHBsaWVkRmlsdGVyO1xuZnVuY3Rpb24gcmVwbGFjZVBhdGhTZWdtZW50U2VwYXJhdG9yKGZpbGVwYXRoLCBzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gZmlsZXBhdGguc3BsaXQoL1svXFxcXF0vKS5qb2luKHNlcGFyYXRvcik7XG59XG5leHBvcnRzLnJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvciA9IHJlcGxhY2VQYXRoU2VnbWVudFNlcGFyYXRvcjtcbmZ1bmN0aW9uIGpvaW5QYXRoU2VnbWVudHMoYSwgYiwgc2VwYXJhdG9yKSB7XG4gICAgaWYgKGEgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiBiO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgY29ycmVjdCBoYW5kbGluZyBvZiBjYXNlcyB3aGVuIHRoZSBmaXJzdCBzZWdtZW50IGlzIGEgcm9vdCAoYC9gLCBgQzovYCkgb3IgVU5DIHBhdGggKGAvLz8vQzovYCkuXG4gICAgICovXG4gICAgaWYgKGEuZW5kc1dpdGgoc2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgfVxuICAgIHJldHVybiBhICsgc2VwYXJhdG9yICsgYjtcbn1cbmV4cG9ydHMuam9pblBhdGhTZWdtZW50cyA9IGpvaW5QYXRoU2VnbWVudHM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jbGFzcyBSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9yb290LCBfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IF9yb290O1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fcm9vdCA9IGNvbW1vbi5yZXBsYWNlUGF0aFNlZ21lbnRTZXBhcmF0b3IoX3Jvb3QsIF9zZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUmVhZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jb25zdCBmYXN0cSA9IHJlcXVpcmUoXCJmYXN0cVwiKTtcbmNvbnN0IGNvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcbmNvbnN0IHJlYWRlcl8xID0gcmVxdWlyZShcIi4vcmVhZGVyXCIpO1xuY2xhc3MgQXN5bmNSZWFkZXIgZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKF9yb290LCBfc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fc2NhbmRpciA9IGZzU2NhbmRpci5zY2FuZGlyO1xuICAgICAgICB0aGlzLl9lbWl0dGVyID0gbmV3IGV2ZW50c18xLkV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IGZhc3RxKHRoaXMuX3dvcmtlci5iaW5kKHRoaXMpLCB0aGlzLl9zZXR0aW5ncy5jb25jdXJyZW5jeSk7XG4gICAgICAgIHRoaXMuX2lzRmF0YWxFcnJvciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9xdWV1ZS5kcmFpbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNGYXRhbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KCdlbmQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgdGhpcy5faXNGYXRhbEVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wdXNoVG9RdWV1ZSh0aGlzLl9yb290LCB0aGlzLl9zZXR0aW5ncy5iYXNlUGF0aCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1pdHRlcjtcbiAgICB9XG4gICAgZ2V0IGlzRGVzdHJveWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNEZXN0cm95ZWQ7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcmVhZGVyIGlzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9xdWV1ZS5raWxsQW5kRHJhaW4oKTtcbiAgICB9XG4gICAgb25FbnRyeShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uKCdlbnRyeScsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgb25FcnJvcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uY2UoJ2Vycm9yJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBvbkVuZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLm9uY2UoJ2VuZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgX3B1c2hUb1F1ZXVlKGRpcmVjdG9yeSwgYmFzZSkge1xuICAgICAgICBjb25zdCBxdWV1ZUl0ZW0gPSB7IGRpcmVjdG9yeSwgYmFzZSB9O1xuICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKHF1ZXVlSXRlbSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfd29ya2VyKGl0ZW0sIGRvbmUpIHtcbiAgICAgICAgdGhpcy5fc2NhbmRpcihpdGVtLmRpcmVjdG9yeSwgdGhpcy5fc2V0dGluZ3MuZnNTY2FuZGlyU2V0dGluZ3MsIChlcnJvciwgZW50cmllcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9uZShlcnJvciwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFbnRyeShlbnRyeSwgaXRlbS5iYXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUobnVsbCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAodGhpcy5faXNEZXN0cm95ZWQgfHwgIWNvbW1vbi5pc0ZhdGFsRXJyb3IodGhpcy5fc2V0dGluZ3MsIGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRmF0YWxFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2lzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICB9XG4gICAgX2hhbmRsZUVudHJ5KGVudHJ5LCBiYXNlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0Rlc3Ryb3llZCB8fCB0aGlzLl9pc0ZhdGFsRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdWxscGF0aCA9IGVudHJ5LnBhdGg7XG4gICAgICAgIGlmIChiYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVudHJ5LnBhdGggPSBjb21tb24uam9pblBhdGhTZWdtZW50cyhiYXNlLCBlbnRyeS5uYW1lLCB0aGlzLl9zZXR0aW5ncy5wYXRoU2VnbWVudFNlcGFyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbW1vbi5pc0FwcGxpZWRGaWx0ZXIodGhpcy5fc2V0dGluZ3MuZW50cnlGaWx0ZXIsIGVudHJ5KSkge1xuICAgICAgICAgICAgdGhpcy5fZW1pdEVudHJ5KGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50cnkuZGlyZW50LmlzRGlyZWN0b3J5KCkgJiYgY29tbW9uLmlzQXBwbGllZEZpbHRlcih0aGlzLl9zZXR0aW5ncy5kZWVwRmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUb1F1ZXVlKGZ1bGxwYXRoLCBiYXNlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBlbnRyeS5wYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZW1pdEVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdCgnZW50cnknLCBlbnRyeSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gQXN5bmNSZWFkZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBhc3luY18xID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvYXN5bmNcIik7XG5jbGFzcyBBc3luY1Byb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBhc3luY18xLmRlZmF1bHQodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zdG9yYWdlID0gW107XG4gICAgfVxuICAgIHJlYWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbnRyeSgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgY2FsbFN1Y2Nlc3NDYWxsYmFjayhjYWxsYmFjaywgdGhpcy5fc3RvcmFnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIucmVhZCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEFzeW5jUHJvdmlkZXI7XG5mdW5jdGlvbiBjYWxsRmFpbHVyZUNhbGxiYWNrKGNhbGxiYWNrLCBlcnJvcikge1xuICAgIGNhbGxiYWNrKGVycm9yKTtcbn1cbmZ1bmN0aW9uIGNhbGxTdWNjZXNzQ2FsbGJhY2soY2FsbGJhY2ssIGVudHJpZXMpIHtcbiAgICBjYWxsYmFjayhudWxsLCBlbnRyaWVzKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IGFzeW5jXzEgPSByZXF1aXJlKFwiLi4vcmVhZGVycy9hc3luY1wiKTtcbmNsYXNzIFN0cmVhbVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfcm9vdCwgX3NldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSBfcm9vdDtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBhc3luY18xLmRlZmF1bHQodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLl9zdHJlYW0gPSBuZXcgc3RyZWFtXzEuUmVhZGFibGUoe1xuICAgICAgICAgICAgb2JqZWN0TW9kZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlYWQ6ICgpID0+IHsgfSxcbiAgICAgICAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3JlYWRlci5pc0Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlYWQoKSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5vbkVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fcmVhZGVyLm9uRW50cnkoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zdHJlYW0ucHVzaChlbnRyeSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIub25FbmQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWFkZXIucmVhZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyZWFtO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmVhbVByb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jb25zdCBjb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcbmNsYXNzIFN5bmNSZWFkZXIgZXh0ZW5kcyByZWFkZXJfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fc2NhbmRpciA9IGZzU2NhbmRpci5zY2FuZGlyU3luYztcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IFtdO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgdGhpcy5fcHVzaFRvUXVldWUodGhpcy5fcm9vdCwgdGhpcy5fc2V0dGluZ3MuYmFzZVBhdGgpO1xuICAgICAgICB0aGlzLl9oYW5kbGVRdWV1ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcmFnZTtcbiAgICB9XG4gICAgX3B1c2hUb1F1ZXVlKGRpcmVjdG9yeSwgYmFzZSkge1xuICAgICAgICB0aGlzLl9xdWV1ZS5hZGQoeyBkaXJlY3RvcnksIGJhc2UgfSk7XG4gICAgfVxuICAgIF9oYW5kbGVRdWV1ZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX3F1ZXVlLnZhbHVlcygpKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEaXJlY3RvcnkoaXRlbS5kaXJlY3RvcnksIGl0ZW0uYmFzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2hhbmRsZURpcmVjdG9yeShkaXJlY3RvcnksIGJhc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLl9zY2FuZGlyKGRpcmVjdG9yeSwgdGhpcy5fc2V0dGluZ3MuZnNTY2FuZGlyU2V0dGluZ3MpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW50cnkoZW50cnksIGJhc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9oYW5kbGVFcnJvcihlcnJvcikge1xuICAgICAgICBpZiAoIWNvbW1vbi5pc0ZhdGFsRXJyb3IodGhpcy5fc2V0dGluZ3MsIGVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBfaGFuZGxlRW50cnkoZW50cnksIGJhc2UpIHtcbiAgICAgICAgY29uc3QgZnVsbHBhdGggPSBlbnRyeS5wYXRoO1xuICAgICAgICBpZiAoYmFzZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbnRyeS5wYXRoID0gY29tbW9uLmpvaW5QYXRoU2VnbWVudHMoYmFzZSwgZW50cnkubmFtZSwgdGhpcy5fc2V0dGluZ3MucGF0aFNlZ21lbnRTZXBhcmF0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21tb24uaXNBcHBsaWVkRmlsdGVyKHRoaXMuX3NldHRpbmdzLmVudHJ5RmlsdGVyLCBlbnRyeSkpIHtcbiAgICAgICAgICAgIHRoaXMuX3B1c2hUb1N0b3JhZ2UoZW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbnRyeS5kaXJlbnQuaXNEaXJlY3RvcnkoKSAmJiBjb21tb24uaXNBcHBsaWVkRmlsdGVyKHRoaXMuX3NldHRpbmdzLmRlZXBGaWx0ZXIsIGVudHJ5KSkge1xuICAgICAgICAgICAgdGhpcy5fcHVzaFRvUXVldWUoZnVsbHBhdGgsIGJhc2UgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGVudHJ5LnBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9wdXNoVG9TdG9yYWdlKGVudHJ5KSB7XG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaChlbnRyeSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3luY1JlYWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN5bmNfMSA9IHJlcXVpcmUoXCIuLi9yZWFkZXJzL3N5bmNcIik7XG5jbGFzcyBTeW5jUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9yb290LCBfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fcm9vdCA9IF9yb290O1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fcmVhZGVyID0gbmV3IHN5bmNfMS5kZWZhdWx0KHRoaXMuX3Jvb3QsIHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgcmVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5yZWFkKCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU3luY1Byb3ZpZGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuY29uc3QgZnNTY2FuZGlyID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLnNjYW5kaXJcIik7XG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IoX29wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9vcHRpb25zID0gX29wdGlvbnM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmJhc2VQYXRoLCB1bmRlZmluZWQpO1xuICAgICAgICB0aGlzLmNvbmN1cnJlbmN5ID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5jb25jdXJyZW5jeSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKTtcbiAgICAgICAgdGhpcy5kZWVwRmlsdGVyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5kZWVwRmlsdGVyLCBudWxsKTtcbiAgICAgICAgdGhpcy5lbnRyeUZpbHRlciA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuZW50cnlGaWx0ZXIsIG51bGwpO1xuICAgICAgICB0aGlzLmVycm9yRmlsdGVyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5lcnJvckZpbHRlciwgbnVsbCk7XG4gICAgICAgIHRoaXMucGF0aFNlZ21lbnRTZXBhcmF0b3IgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnBhdGhTZWdtZW50U2VwYXJhdG9yLCBwYXRoLnNlcCk7XG4gICAgICAgIHRoaXMuZnNTY2FuZGlyU2V0dGluZ3MgPSBuZXcgZnNTY2FuZGlyLlNldHRpbmdzKHtcbiAgICAgICAgICAgIGZvbGxvd1N5bWJvbGljTGlua3M6IHRoaXMuX29wdGlvbnMuZm9sbG93U3ltYm9saWNMaW5rcyxcbiAgICAgICAgICAgIGZzOiB0aGlzLl9vcHRpb25zLmZzLFxuICAgICAgICAgICAgcGF0aFNlZ21lbnRTZXBhcmF0b3I6IHRoaXMuX29wdGlvbnMucGF0aFNlZ21lbnRTZXBhcmF0b3IsXG4gICAgICAgICAgICBzdGF0czogdGhpcy5fb3B0aW9ucy5zdGF0cyxcbiAgICAgICAgICAgIHRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluazogdGhpcy5fb3B0aW9ucy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZShvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gIT09IG51bGwgJiYgb3B0aW9uICE9PSB2b2lkIDAgPyBvcHRpb24gOiB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBTZXR0aW5ncztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2V0dGluZ3MgPSBleHBvcnRzLndhbGtTdHJlYW0gPSBleHBvcnRzLndhbGtTeW5jID0gZXhwb3J0cy53YWxrID0gdm9pZCAwO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N0cmVhbVwiKTtcbmNvbnN0IHN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zeW5jXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuZXhwb3J0cy5TZXR0aW5ncyA9IHNldHRpbmdzXzEuZGVmYXVsdDtcbmZ1bmN0aW9uIHdhbGsoZGlyZWN0b3J5LCBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zT3JTZXR0aW5nc09yQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbmV3IGFzeW5jXzEuZGVmYXVsdChkaXJlY3RvcnksIGdldFNldHRpbmdzKCkpLnJlYWQob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgYXN5bmNfMS5kZWZhdWx0KGRpcmVjdG9yeSwgZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3NPckNhbGxiYWNrKSkucmVhZChjYWxsYmFjayk7XG59XG5leHBvcnRzLndhbGsgPSB3YWxrO1xuZnVuY3Rpb24gd2Fsa1N5bmMoZGlyZWN0b3J5LCBvcHRpb25zT3JTZXR0aW5ncykge1xuICAgIGNvbnN0IHNldHRpbmdzID0gZ2V0U2V0dGluZ3Mob3B0aW9uc09yU2V0dGluZ3MpO1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHN5bmNfMS5kZWZhdWx0KGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBwcm92aWRlci5yZWFkKCk7XG59XG5leHBvcnRzLndhbGtTeW5jID0gd2Fsa1N5bmM7XG5mdW5jdGlvbiB3YWxrU3RyZWFtKGRpcmVjdG9yeSwgb3B0aW9uc09yU2V0dGluZ3MpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGdldFNldHRpbmdzKG9wdGlvbnNPclNldHRpbmdzKTtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBzdHJlYW1fMS5kZWZhdWx0KGRpcmVjdG9yeSwgc2V0dGluZ3MpO1xuICAgIHJldHVybiBwcm92aWRlci5yZWFkKCk7XG59XG5leHBvcnRzLndhbGtTdHJlYW0gPSB3YWxrU3RyZWFtO1xuZnVuY3Rpb24gZ2V0U2V0dGluZ3Moc2V0dGluZ3NPck9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChzZXR0aW5nc09yT3B0aW9ucyBpbnN0YW5jZW9mIHNldHRpbmdzXzEuZGVmYXVsdCkge1xuICAgICAgICByZXR1cm4gc2V0dGluZ3NPck9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgc2V0dGluZ3NfMS5kZWZhdWx0KHNldHRpbmdzT3JPcHRpb25zKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jbGFzcyBSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncykge1xuICAgICAgICB0aGlzLl9zZXR0aW5ncyA9IF9zZXR0aW5ncztcbiAgICAgICAgdGhpcy5fZnNTdGF0U2V0dGluZ3MgPSBuZXcgZnNTdGF0LlNldHRpbmdzKHtcbiAgICAgICAgICAgIGZvbGxvd1N5bWJvbGljTGluazogdGhpcy5fc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcyxcbiAgICAgICAgICAgIGZzOiB0aGlzLl9zZXR0aW5ncy5mcyxcbiAgICAgICAgICAgIHRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluazogdGhpcy5fc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldEZ1bGxFbnRyeVBhdGgoZmlsZXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIGZpbGVwYXRoKTtcbiAgICB9XG4gICAgX21ha2VFbnRyeShzdGF0cywgcGF0dGVybikge1xuICAgICAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgICAgICAgIG5hbWU6IHBhdHRlcm4sXG4gICAgICAgICAgICBwYXRoOiBwYXR0ZXJuLFxuICAgICAgICAgICAgZGlyZW50OiB1dGlscy5mcy5jcmVhdGVEaXJlbnRGcm9tU3RhdHMocGF0dGVybiwgc3RhdHMpXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5zdGF0cykge1xuICAgICAgICAgICAgZW50cnkuc3RhdHMgPSBzdGF0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgfVxuICAgIF9pc0ZhdGFsRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5lcnJuby5pc0Vub2VudENvZGVFcnJvcihlcnJvcikgJiYgIXRoaXMuX3NldHRpbmdzLnN1cHByZXNzRXJyb3JzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IGZzU3RhdCA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy5zdGF0XCIpO1xuY29uc3QgZnNXYWxrID0gcmVxdWlyZShcIkBub2RlbGliL2ZzLndhbGtcIik7XG5jb25zdCByZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3JlYWRlclwiKTtcbmNsYXNzIFJlYWRlclN0cmVhbSBleHRlbmRzIHJlYWRlcl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl93YWxrU3RyZWFtID0gZnNXYWxrLndhbGtTdHJlYW07XG4gICAgICAgIHRoaXMuX3N0YXQgPSBmc1N0YXQuc3RhdDtcbiAgICB9XG4gICAgZHluYW1pYyhyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93YWxrU3RyZWFtKHJvb3QsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzdGF0aWMocGF0dGVybnMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZmlsZXBhdGhzID0gcGF0dGVybnMubWFwKHRoaXMuX2dldEZ1bGxFbnRyeVBhdGgsIHRoaXMpO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBuZXcgc3RyZWFtXzEuUGFzc1Rocm91Z2goeyBvYmplY3RNb2RlOiB0cnVlIH0pO1xuICAgICAgICBzdHJlYW0uX3dyaXRlID0gKGluZGV4LCBfZW5jLCBkb25lKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RW50cnkoZmlsZXBhdGhzW2luZGV4XSwgcGF0dGVybnNbaW5kZXhdLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIC50aGVuKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeSAhPT0gbnVsbCAmJiBvcHRpb25zLmVudHJ5RmlsdGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdHJlYW0ucHVzaChlbnRyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gZmlsZXBhdGhzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLmVuZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChkb25lKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN0cmVhbS53cml0ZShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgIH1cbiAgICBfZ2V0RW50cnkoZmlsZXBhdGgsIHBhdHRlcm4sIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFN0YXQoZmlsZXBhdGgpXG4gICAgICAgICAgICAudGhlbigoc3RhdHMpID0+IHRoaXMuX21ha2VFbnRyeShzdGF0cywgcGF0dGVybikpXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lcnJvckZpbHRlcihlcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXQoZmlsZXBhdGgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXQoZmlsZXBhdGgsIHRoaXMuX2ZzU3RhdFNldHRpbmdzLCAoZXJyb3IsIHN0YXRzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yID09PSBudWxsID8gcmVzb2x2ZShzdGF0cykgOiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRlclN0cmVhbTtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgTWF0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoX3BhdHRlcm5zLCBfc2V0dGluZ3MsIF9taWNyb21hdGNoT3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wYXR0ZXJucyA9IF9wYXR0ZXJucztcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zID0gX21pY3JvbWF0Y2hPcHRpb25zO1xuICAgICAgICB0aGlzLl9zdG9yYWdlID0gW107XG4gICAgICAgIHRoaXMuX2ZpbGxTdG9yYWdlKCk7XG4gICAgfVxuICAgIF9maWxsU3RvcmFnZSgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcmlnaW5hbCBwYXR0ZXJuIG1heSBpbmNsdWRlIGB7LCosKiosYS8qfWAsIHdoaWNoIHdpbGwgbGVhZCB0byBwcm9ibGVtcyB3aXRoIG1hdGNoaW5nICh1bnJlc29sdmVkIGxldmVsKS5cbiAgICAgICAgICogU28sIGJlZm9yZSBleHBhbmQgcGF0dGVybnMgd2l0aCBicmFjZSBleHBhbnNpb24gaW50byBzZXBhcmF0ZWQgcGF0dGVybnMuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHV0aWxzLnBhdHRlcm4uZXhwYW5kUGF0dGVybnNXaXRoQnJhY2VFeHBhbnNpb24odGhpcy5fcGF0dGVybnMpO1xuICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5fZ2V0UGF0dGVyblNlZ21lbnRzKHBhdHRlcm4pO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSB0aGlzLl9zcGxpdFNlZ21lbnRzSW50b1NlY3Rpb25zKHNlZ21lbnRzKTtcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgICAgICAgY29tcGxldGU6IHNlY3Rpb25zLmxlbmd0aCA8PSAxLFxuICAgICAgICAgICAgICAgIHBhdHRlcm4sXG4gICAgICAgICAgICAgICAgc2VnbWVudHMsXG4gICAgICAgICAgICAgICAgc2VjdGlvbnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRQYXR0ZXJuU2VnbWVudHMocGF0dGVybikge1xuICAgICAgICBjb25zdCBwYXJ0cyA9IHV0aWxzLnBhdHRlcm4uZ2V0UGF0dGVyblBhcnRzKHBhdHRlcm4sIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHBhcnRzLm1hcCgocGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZHluYW1pYyA9IHV0aWxzLnBhdHRlcm4uaXNEeW5hbWljUGF0dGVybihwYXJ0LCB0aGlzLl9zZXR0aW5ncyk7XG4gICAgICAgICAgICBpZiAoIWR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBkeW5hbWljOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjogcGFydFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGR5bmFtaWM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGFydCxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuUmU6IHV0aWxzLnBhdHRlcm4ubWFrZVJlKHBhcnQsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zcGxpdFNlZ21lbnRzSW50b1NlY3Rpb25zKHNlZ21lbnRzKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheS5zcGxpdFdoZW4oc2VnbWVudHMsIChzZWdtZW50KSA9PiBzZWdtZW50LmR5bmFtaWMgJiYgdXRpbHMucGF0dGVybi5oYXNHbG9iU3RhcihzZWdtZW50LnBhdHRlcm4pKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBNYXRjaGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vbWF0Y2hlclwiKTtcbmNsYXNzIFBhcnRpYWxNYXRjaGVyIGV4dGVuZHMgbWF0Y2hlcl8xLmRlZmF1bHQge1xuICAgIG1hdGNoKGZpbGVwYXRoKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZmlsZXBhdGguc3BsaXQoJy8nKTtcbiAgICAgICAgY29uc3QgbGV2ZWxzID0gcGFydHMubGVuZ3RoO1xuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IHRoaXMuX3N0b3JhZ2UuZmlsdGVyKChpbmZvKSA9PiAhaW5mby5jb21wbGV0ZSB8fCBpbmZvLnNlZ21lbnRzLmxlbmd0aCA+IGxldmVscyk7XG4gICAgICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBwYXR0ZXJucykge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHBhdHRlcm4uc2VjdGlvbnNbMF07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIHBhdHRlcm4gaGFzIGEgZ2xvYnN0YXIgYW5kIHdlIG11c3QgcmVhZCBhbGwgZGlyZWN0b3JpZXMgdW5jb25kaXRpb25hbGx5LFxuICAgICAgICAgICAgICogYnV0IG9ubHkgaWYgdGhlIGxldmVsIGhhcyByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIGZpcnN0IGdyb3VwLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIGZpeHR1cmVzL3thLGJ9LyoqXG4gICAgICAgICAgICAgKiAgXiB0cnVlL2ZhbHNlICBeIGFsd2F5cyB0cnVlXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuLmNvbXBsZXRlICYmIGxldmVscyA+IHNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHBhcnRzLmV2ZXJ5KChwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBwYXR0ZXJuLnNlZ21lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudC5keW5hbWljICYmIHNlZ21lbnQucGF0dGVyblJlLnRlc3QocGFydCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc2VnbWVudC5keW5hbWljICYmIHNlZ21lbnQucGF0dGVybiA9PT0gcGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUGFydGlhbE1hdGNoZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNvbnN0IHBhcnRpYWxfMSA9IHJlcXVpcmUoXCIuLi9tYXRjaGVycy9wYXJ0aWFsXCIpO1xuY2xhc3MgRGVlcEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoX3NldHRpbmdzLCBfbWljcm9tYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zID0gX21pY3JvbWF0Y2hPcHRpb25zO1xuICAgIH1cbiAgICBnZXRGaWx0ZXIoYmFzZVBhdGgsIHBvc2l0aXZlLCBuZWdhdGl2ZSkge1xuICAgICAgICBjb25zdCBtYXRjaGVyID0gdGhpcy5fZ2V0TWF0Y2hlcihwb3NpdGl2ZSk7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlUmUgPSB0aGlzLl9nZXROZWdhdGl2ZVBhdHRlcm5zUmUobmVnYXRpdmUpO1xuICAgICAgICByZXR1cm4gKGVudHJ5KSA9PiB0aGlzLl9maWx0ZXIoYmFzZVBhdGgsIGVudHJ5LCBtYXRjaGVyLCBuZWdhdGl2ZVJlKTtcbiAgICB9XG4gICAgX2dldE1hdGNoZXIocGF0dGVybnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwYXJ0aWFsXzEuZGVmYXVsdChwYXR0ZXJucywgdGhpcy5fc2V0dGluZ3MsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgX2dldE5lZ2F0aXZlUGF0dGVybnNSZShwYXR0ZXJucykge1xuICAgICAgICBjb25zdCBhZmZlY3REZXB0aE9mUmVhZGluZ1BhdHRlcm5zID0gcGF0dGVybnMuZmlsdGVyKHV0aWxzLnBhdHRlcm4uaXNBZmZlY3REZXB0aE9mUmVhZGluZ1BhdHRlcm4pO1xuICAgICAgICByZXR1cm4gdXRpbHMucGF0dGVybi5jb252ZXJ0UGF0dGVybnNUb1JlKGFmZmVjdERlcHRoT2ZSZWFkaW5nUGF0dGVybnMsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgX2ZpbHRlcihiYXNlUGF0aCwgZW50cnksIG1hdGNoZXIsIG5lZ2F0aXZlUmUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcHBlZEJ5RGVlcChiYXNlUGF0aCwgZW50cnkucGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5faXNTa2lwcGVkU3ltYm9saWNMaW5rKGVudHJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdXRpbHMucGF0aC5yZW1vdmVMZWFkaW5nRG90U2VnbWVudChlbnRyeS5wYXRoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzU2tpcHBlZEJ5UG9zaXRpdmVQYXR0ZXJucyhmaWxlcGF0aCwgbWF0Y2hlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faXNTa2lwcGVkQnlOZWdhdGl2ZVBhdHRlcm5zKGZpbGVwYXRoLCBuZWdhdGl2ZVJlKTtcbiAgICB9XG4gICAgX2lzU2tpcHBlZEJ5RGVlcChiYXNlUGF0aCwgZW50cnlQYXRoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdm9pZCB1bm5lY2Vzc2FyeSBkZXB0aCBjYWxjdWxhdGlvbnMgd2hlbiBpdCBkb2Vzbid0IG1hdHRlci5cbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5kZWVwID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRFbnRyeUxldmVsKGJhc2VQYXRoLCBlbnRyeVBhdGgpID49IHRoaXMuX3NldHRpbmdzLmRlZXA7XG4gICAgfVxuICAgIF9nZXRFbnRyeUxldmVsKGJhc2VQYXRoLCBlbnRyeVBhdGgpIHtcbiAgICAgICAgY29uc3QgZW50cnlQYXRoRGVwdGggPSBlbnRyeVBhdGguc3BsaXQoJy8nKS5sZW5ndGg7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRyeVBhdGhEZXB0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYXNlUGF0aERlcHRoID0gYmFzZVBhdGguc3BsaXQoJy8nKS5sZW5ndGg7XG4gICAgICAgIHJldHVybiBlbnRyeVBhdGhEZXB0aCAtIGJhc2VQYXRoRGVwdGg7XG4gICAgfVxuICAgIF9pc1NraXBwZWRTeW1ib2xpY0xpbmsoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9zZXR0aW5ncy5mb2xsb3dTeW1ib2xpY0xpbmtzICYmIGVudHJ5LmRpcmVudC5pc1N5bWJvbGljTGluaygpO1xuICAgIH1cbiAgICBfaXNTa2lwcGVkQnlQb3NpdGl2ZVBhdHRlcm5zKGVudHJ5UGF0aCwgbWF0Y2hlcikge1xuICAgICAgICByZXR1cm4gIXRoaXMuX3NldHRpbmdzLmJhc2VOYW1lTWF0Y2ggJiYgIW1hdGNoZXIubWF0Y2goZW50cnlQYXRoKTtcbiAgICB9XG4gICAgX2lzU2tpcHBlZEJ5TmVnYXRpdmVQYXR0ZXJucyhlbnRyeVBhdGgsIHBhdHRlcm5zUmUpIHtcbiAgICAgICAgcmV0dXJuICF1dGlscy5wYXR0ZXJuLm1hdGNoQW55KGVudHJ5UGF0aCwgcGF0dGVybnNSZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRGVlcEZpbHRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO1xuY2xhc3MgRW50cnlGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKF9zZXR0aW5ncywgX21pY3JvbWF0Y2hPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX3NldHRpbmdzID0gX3NldHRpbmdzO1xuICAgICAgICB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyA9IF9taWNyb21hdGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5pbmRleCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0RmlsdGVyKHBvc2l0aXZlLCBuZWdhdGl2ZSkge1xuICAgICAgICBjb25zdCBwb3NpdGl2ZVJlID0gdXRpbHMucGF0dGVybi5jb252ZXJ0UGF0dGVybnNUb1JlKHBvc2l0aXZlLCB0aGlzLl9taWNyb21hdGNoT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IG5lZ2F0aXZlUmUgPSB1dGlscy5wYXR0ZXJuLmNvbnZlcnRQYXR0ZXJuc1RvUmUobmVnYXRpdmUsIHRoaXMuX21pY3JvbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIChlbnRyeSkgPT4gdGhpcy5fZmlsdGVyKGVudHJ5LCBwb3NpdGl2ZVJlLCBuZWdhdGl2ZVJlKTtcbiAgICB9XG4gICAgX2ZpbHRlcihlbnRyeSwgcG9zaXRpdmVSZSwgbmVnYXRpdmVSZSkge1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MudW5pcXVlICYmIHRoaXMuX2lzRHVwbGljYXRlRW50cnkoZW50cnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX29ubHlGaWxlRmlsdGVyKGVudHJ5KSB8fCB0aGlzLl9vbmx5RGlyZWN0b3J5RmlsdGVyKGVudHJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc1NraXBwZWRCeUFic29sdXRlTmVnYXRpdmVQYXR0ZXJucyhlbnRyeS5wYXRoLCBuZWdhdGl2ZVJlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdGhpcy5fc2V0dGluZ3MuYmFzZU5hbWVNYXRjaCA/IGVudHJ5Lm5hbWUgOiBlbnRyeS5wYXRoO1xuICAgICAgICBjb25zdCBpc01hdGNoZWQgPSB0aGlzLl9pc01hdGNoVG9QYXR0ZXJucyhmaWxlcGF0aCwgcG9zaXRpdmVSZSkgJiYgIXRoaXMuX2lzTWF0Y2hUb1BhdHRlcm5zKGVudHJ5LnBhdGgsIG5lZ2F0aXZlUmUpO1xuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MudW5pcXVlICYmIGlzTWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW5kZXhSZWNvcmQoZW50cnkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc01hdGNoZWQ7XG4gICAgfVxuICAgIF9pc0R1cGxpY2F0ZUVudHJ5KGVudHJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4LmhhcyhlbnRyeS5wYXRoKTtcbiAgICB9XG4gICAgX2NyZWF0ZUluZGV4UmVjb3JkKGVudHJ5KSB7XG4gICAgICAgIHRoaXMuaW5kZXguc2V0KGVudHJ5LnBhdGgsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIF9vbmx5RmlsZUZpbHRlcihlbnRyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2V0dGluZ3Mub25seUZpbGVzICYmICFlbnRyeS5kaXJlbnQuaXNGaWxlKCk7XG4gICAgfVxuICAgIF9vbmx5RGlyZWN0b3J5RmlsdGVyKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXR0aW5ncy5vbmx5RGlyZWN0b3JpZXMgJiYgIWVudHJ5LmRpcmVudC5pc0RpcmVjdG9yeSgpO1xuICAgIH1cbiAgICBfaXNTa2lwcGVkQnlBYnNvbHV0ZU5lZ2F0aXZlUGF0dGVybnMoZW50cnlQYXRoLCBwYXR0ZXJuc1JlKSB7XG4gICAgICAgIGlmICghdGhpcy5fc2V0dGluZ3MuYWJzb2x1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmdWxscGF0aCA9IHV0aWxzLnBhdGgubWFrZUFic29sdXRlKHRoaXMuX3NldHRpbmdzLmN3ZCwgZW50cnlQYXRoKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4ubWF0Y2hBbnkoZnVsbHBhdGgsIHBhdHRlcm5zUmUpO1xuICAgIH1cbiAgICBfaXNNYXRjaFRvUGF0dGVybnMoZW50cnlQYXRoLCBwYXR0ZXJuc1JlKSB7XG4gICAgICAgIGNvbnN0IGZpbGVwYXRoID0gdXRpbHMucGF0aC5yZW1vdmVMZWFkaW5nRG90U2VnbWVudChlbnRyeVBhdGgpO1xuICAgICAgICByZXR1cm4gdXRpbHMucGF0dGVybi5tYXRjaEFueShmaWxlcGF0aCwgcGF0dGVybnNSZSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRW50cnlGaWx0ZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTtcbmNsYXNzIEVycm9yRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgfVxuICAgIGdldEZpbHRlcigpIHtcbiAgICAgICAgcmV0dXJuIChlcnJvcikgPT4gdGhpcy5faXNOb25GYXRhbEVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgX2lzTm9uRmF0YWxFcnJvcihlcnJvcikge1xuICAgICAgICByZXR1cm4gdXRpbHMuZXJybm8uaXNFbm9lbnRDb2RlRXJyb3IoZXJyb3IpIHx8IHRoaXMuX3NldHRpbmdzLnN1cHByZXNzRXJyb3JzO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVycm9yRmlsdGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XG5jbGFzcyBFbnRyeVRyYW5zZm9ybWVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgfVxuICAgIGdldFRyYW5zZm9ybWVyKCkge1xuICAgICAgICByZXR1cm4gKGVudHJ5KSA9PiB0aGlzLl90cmFuc2Zvcm0oZW50cnkpO1xuICAgIH1cbiAgICBfdHJhbnNmb3JtKGVudHJ5KSB7XG4gICAgICAgIGxldCBmaWxlcGF0aCA9IGVudHJ5LnBhdGg7XG4gICAgICAgIGlmICh0aGlzLl9zZXR0aW5ncy5hYnNvbHV0ZSkge1xuICAgICAgICAgICAgZmlsZXBhdGggPSB1dGlscy5wYXRoLm1ha2VBYnNvbHV0ZSh0aGlzLl9zZXR0aW5ncy5jd2QsIGZpbGVwYXRoKTtcbiAgICAgICAgICAgIGZpbGVwYXRoID0gdXRpbHMucGF0aC51bml4aWZ5KGZpbGVwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc2V0dGluZ3MubWFya0RpcmVjdG9yaWVzICYmIGVudHJ5LmRpcmVudC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICBmaWxlcGF0aCArPSAnLyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9zZXR0aW5ncy5vYmplY3RNb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsZXBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZW50cnkpLCB7IHBhdGg6IGZpbGVwYXRoIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEVudHJ5VHJhbnNmb3JtZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XG5jb25zdCBkZWVwXzEgPSByZXF1aXJlKFwiLi9maWx0ZXJzL2RlZXBcIik7XG5jb25zdCBlbnRyeV8xID0gcmVxdWlyZShcIi4vZmlsdGVycy9lbnRyeVwiKTtcbmNvbnN0IGVycm9yXzEgPSByZXF1aXJlKFwiLi9maWx0ZXJzL2Vycm9yXCIpO1xuY29uc3QgZW50cnlfMiA9IHJlcXVpcmUoXCIuL3RyYW5zZm9ybWVycy9lbnRyeVwiKTtcbmNsYXNzIFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihfc2V0dGluZ3MpIHtcbiAgICAgICAgdGhpcy5fc2V0dGluZ3MgPSBfc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZXJyb3JGaWx0ZXIgPSBuZXcgZXJyb3JfMS5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcbiAgICAgICAgdGhpcy5lbnRyeUZpbHRlciA9IG5ldyBlbnRyeV8xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MsIHRoaXMuX2dldE1pY3JvbWF0Y2hPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLmRlZXBGaWx0ZXIgPSBuZXcgZGVlcF8xLmRlZmF1bHQodGhpcy5fc2V0dGluZ3MsIHRoaXMuX2dldE1pY3JvbWF0Y2hPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLmVudHJ5VHJhbnNmb3JtZXIgPSBuZXcgZW50cnlfMi5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgX2dldFJvb3REaXJlY3RvcnkodGFzaykge1xuICAgICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHRoaXMuX3NldHRpbmdzLmN3ZCwgdGFzay5iYXNlKTtcbiAgICB9XG4gICAgX2dldFJlYWRlck9wdGlvbnModGFzaykge1xuICAgICAgICBjb25zdCBiYXNlUGF0aCA9IHRhc2suYmFzZSA9PT0gJy4nID8gJycgOiB0YXNrLmJhc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgICAgIHBhdGhTZWdtZW50U2VwYXJhdG9yOiAnLycsXG4gICAgICAgICAgICBjb25jdXJyZW5jeTogdGhpcy5fc2V0dGluZ3MuY29uY3VycmVuY3ksXG4gICAgICAgICAgICBkZWVwRmlsdGVyOiB0aGlzLmRlZXBGaWx0ZXIuZ2V0RmlsdGVyKGJhc2VQYXRoLCB0YXNrLnBvc2l0aXZlLCB0YXNrLm5lZ2F0aXZlKSxcbiAgICAgICAgICAgIGVudHJ5RmlsdGVyOiB0aGlzLmVudHJ5RmlsdGVyLmdldEZpbHRlcih0YXNrLnBvc2l0aXZlLCB0YXNrLm5lZ2F0aXZlKSxcbiAgICAgICAgICAgIGVycm9yRmlsdGVyOiB0aGlzLmVycm9yRmlsdGVyLmdldEZpbHRlcigpLFxuICAgICAgICAgICAgZm9sbG93U3ltYm9saWNMaW5rczogdGhpcy5fc2V0dGluZ3MuZm9sbG93U3ltYm9saWNMaW5rcyxcbiAgICAgICAgICAgIGZzOiB0aGlzLl9zZXR0aW5ncy5mcyxcbiAgICAgICAgICAgIHN0YXRzOiB0aGlzLl9zZXR0aW5ncy5zdGF0cyxcbiAgICAgICAgICAgIHRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluazogdGhpcy5fc2V0dGluZ3MudGhyb3dFcnJvck9uQnJva2VuU3ltYm9saWNMaW5rLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0aGlzLmVudHJ5VHJhbnNmb3JtZXIuZ2V0VHJhbnNmb3JtZXIoKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBfZ2V0TWljcm9tYXRjaE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3Q6IHRoaXMuX3NldHRpbmdzLmRvdCxcbiAgICAgICAgICAgIG1hdGNoQmFzZTogdGhpcy5fc2V0dGluZ3MuYmFzZU5hbWVNYXRjaCxcbiAgICAgICAgICAgIG5vYnJhY2U6ICF0aGlzLl9zZXR0aW5ncy5icmFjZUV4cGFuc2lvbixcbiAgICAgICAgICAgIG5vY2FzZTogIXRoaXMuX3NldHRpbmdzLmNhc2VTZW5zaXRpdmVNYXRjaCxcbiAgICAgICAgICAgIG5vZXh0OiAhdGhpcy5fc2V0dGluZ3MuZXh0Z2xvYixcbiAgICAgICAgICAgIG5vZ2xvYnN0YXI6ICF0aGlzLl9zZXR0aW5ncy5nbG9ic3RhcixcbiAgICAgICAgICAgIHBvc2l4OiB0cnVlLFxuICAgICAgICAgICAgc3RyaWN0U2xhc2hlczogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBQcm92aWRlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvc3RyZWFtXCIpO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuY2xhc3MgUHJvdmlkZXJBc3luYyBleHRlbmRzIHByb3ZpZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBzdHJlYW1fMS5kZWZhdWx0KHRoaXMuX3NldHRpbmdzKTtcbiAgICB9XG4gICAgcmVhZCh0YXNrKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLl9nZXRSb290RGlyZWN0b3J5KHRhc2spO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0UmVhZGVyT3B0aW9ucyh0YXNrKTtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IFtdO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5hcGkocm9vdCwgdGFzaywgb3B0aW9ucyk7XG4gICAgICAgICAgICBzdHJlYW0ub25jZSgnZXJyb3InLCByZWplY3QpO1xuICAgICAgICAgICAgc3RyZWFtLm9uKCdkYXRhJywgKGVudHJ5KSA9PiBlbnRyaWVzLnB1c2gob3B0aW9ucy50cmFuc2Zvcm0oZW50cnkpKSk7XG4gICAgICAgICAgICBzdHJlYW0ub25jZSgnZW5kJywgKCkgPT4gcmVzb2x2ZShlbnRyaWVzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhcGkocm9vdCwgdGFzaywgb3B0aW9ucykge1xuICAgICAgICBpZiAodGFzay5keW5hbWljKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLmR5bmFtaWMocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5zdGF0aWModGFzay5wYXR0ZXJucywgb3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXJBc3luYztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcInN0cmVhbVwiKTtcbmNvbnN0IHN0cmVhbV8yID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvc3RyZWFtXCIpO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuY2xhc3MgUHJvdmlkZXJTdHJlYW0gZXh0ZW5kcyBwcm92aWRlcl8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLl9yZWFkZXIgPSBuZXcgc3RyZWFtXzIuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlYWQodGFzaykge1xuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fZ2V0Um9vdERpcmVjdG9yeSh0YXNrKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2dldFJlYWRlck9wdGlvbnModGFzayk7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRoaXMuYXBpKHJvb3QsIHRhc2ssIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IG5ldyBzdHJlYW1fMS5SZWFkYWJsZSh7IG9iamVjdE1vZGU6IHRydWUsIHJlYWQ6ICgpID0+IHsgfSB9KTtcbiAgICAgICAgc291cmNlXG4gICAgICAgICAgICAub25jZSgnZXJyb3InLCAoZXJyb3IpID0+IGRlc3RpbmF0aW9uLmVtaXQoJ2Vycm9yJywgZXJyb3IpKVxuICAgICAgICAgICAgLm9uKCdkYXRhJywgKGVudHJ5KSA9PiBkZXN0aW5hdGlvbi5lbWl0KCdkYXRhJywgb3B0aW9ucy50cmFuc2Zvcm0oZW50cnkpKSlcbiAgICAgICAgICAgIC5vbmNlKCdlbmQnLCAoKSA9PiBkZXN0aW5hdGlvbi5lbWl0KCdlbmQnKSk7XG4gICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAub25jZSgnY2xvc2UnLCAoKSA9PiBzb3VyY2UuZGVzdHJveSgpKTtcbiAgICAgICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xuICAgIH1cbiAgICBhcGkocm9vdCwgdGFzaywgb3B0aW9ucykge1xuICAgICAgICBpZiAodGFzay5keW5hbWljKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGVyLmR5bmFtaWMocm9vdCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5zdGF0aWModGFzay5wYXR0ZXJucywgb3B0aW9ucyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvdmlkZXJTdHJlYW07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmc1N0YXQgPSByZXF1aXJlKFwiQG5vZGVsaWIvZnMuc3RhdFwiKTtcbmNvbnN0IGZzV2FsayA9IHJlcXVpcmUoXCJAbm9kZWxpYi9mcy53YWxrXCIpO1xuY29uc3QgcmVhZGVyXzEgPSByZXF1aXJlKFwiLi9yZWFkZXJcIik7XG5jbGFzcyBSZWFkZXJTeW5jIGV4dGVuZHMgcmVhZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3dhbGtTeW5jID0gZnNXYWxrLndhbGtTeW5jO1xuICAgICAgICB0aGlzLl9zdGF0U3luYyA9IGZzU3RhdC5zdGF0U3luYztcbiAgICB9XG4gICAgZHluYW1pYyhyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93YWxrU3luYyhyb290LCBvcHRpb25zKTtcbiAgICB9XG4gICAgc3RhdGljKHBhdHRlcm5zLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHBhdHRlcm5zKSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlcGF0aCA9IHRoaXMuX2dldEZ1bGxFbnRyeVBhdGgocGF0dGVybik7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2dldEVudHJ5KGZpbGVwYXRoLCBwYXR0ZXJuLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChlbnRyeSA9PT0gbnVsbCB8fCAhb3B0aW9ucy5lbnRyeUZpbHRlcihlbnRyeSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJpZXM7XG4gICAgfVxuICAgIF9nZXRFbnRyeShmaWxlcGF0aCwgcGF0dGVybiwgb3B0aW9ucykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSB0aGlzLl9nZXRTdGF0KGZpbGVwYXRoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYWtlRW50cnkoc3RhdHMsIHBhdHRlcm4pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZXJyb3JGaWx0ZXIoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZ2V0U3RhdChmaWxlcGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdFN5bmMoZmlsZXBhdGgsIHRoaXMuX2ZzU3RhdFNldHRpbmdzKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkZXJTeW5jO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3Qgc3luY18xID0gcmVxdWlyZShcIi4uL3JlYWRlcnMvc3luY1wiKTtcbmNvbnN0IHByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlclwiKTtcbmNsYXNzIFByb3ZpZGVyU3luYyBleHRlbmRzIHByb3ZpZGVyXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuX3JlYWRlciA9IG5ldyBzeW5jXzEuZGVmYXVsdCh0aGlzLl9zZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlYWQodGFzaykge1xuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fZ2V0Um9vdERpcmVjdG9yeSh0YXNrKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2dldFJlYWRlck9wdGlvbnModGFzayk7XG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmFwaShyb290LCB0YXNrLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKG9wdGlvbnMudHJhbnNmb3JtKTtcbiAgICB9XG4gICAgYXBpKHJvb3QsIHRhc2ssIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRhc2suZHluYW1pYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRlci5keW5hbWljKHJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkZXIuc3RhdGljKHRhc2sucGF0dGVybnMsIG9wdGlvbnMpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IFByb3ZpZGVyU3luYztcbiIsICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuREVGQVVMVF9GSUxFX1NZU1RFTV9BREFQVEVSID0gdm9pZCAwO1xuY29uc3QgZnMgPSByZXF1aXJlKFwiZnNcIik7XG5jb25zdCBvcyA9IHJlcXVpcmUoXCJvc1wiKTtcbi8qKlxuICogVGhlIGBvcy5jcHVzYCBtZXRob2QgY2FuIHJldHVybiB6ZXJvLiBXZSBleHBlY3QgdGhlIG51bWJlciBvZiBjb3JlcyB0byBiZSBncmVhdGVyIHRoYW4gemVyby5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvbm9kZS9ibG9iLzdmYWVkZGYyM2E5OGM1Mzg5NmY4YjU3NGE2ZTY2NTg5ZThmYjFlYjgvbGliL29zLmpzI0wxMDYtTDEwN1xuICovXG5jb25zdCBDUFVfQ09VTlQgPSBNYXRoLm1heChvcy5jcHVzKCkubGVuZ3RoLCAxKTtcbmV4cG9ydHMuREVGQVVMVF9GSUxFX1NZU1RFTV9BREFQVEVSID0ge1xuICAgIGxzdGF0OiBmcy5sc3RhdCxcbiAgICBsc3RhdFN5bmM6IGZzLmxzdGF0U3luYyxcbiAgICBzdGF0OiBmcy5zdGF0LFxuICAgIHN0YXRTeW5jOiBmcy5zdGF0U3luYyxcbiAgICByZWFkZGlyOiBmcy5yZWFkZGlyLFxuICAgIHJlYWRkaXJTeW5jOiBmcy5yZWFkZGlyU3luY1xufTtcbmNsYXNzIFNldHRpbmdzIHtcbiAgICBjb25zdHJ1Y3Rvcihfb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgdGhpcy5hYnNvbHV0ZSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuYWJzb2x1dGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5iYXNlTmFtZU1hdGNoID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5iYXNlTmFtZU1hdGNoLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYnJhY2VFeHBhbnNpb24gPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmJyYWNlRXhwYW5zaW9uLCB0cnVlKTtcbiAgICAgICAgdGhpcy5jYXNlU2Vuc2l0aXZlTWF0Y2ggPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmNhc2VTZW5zaXRpdmVNYXRjaCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuY29uY3VycmVuY3kgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLmNvbmN1cnJlbmN5LCBDUFVfQ09VTlQpO1xuICAgICAgICB0aGlzLmN3ZCA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuY3dkLCBwcm9jZXNzLmN3ZCgpKTtcbiAgICAgICAgdGhpcy5kZWVwID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5kZWVwLCBJbmZpbml0eSk7XG4gICAgICAgIHRoaXMuZG90ID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5kb3QsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5leHRnbG9iID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5leHRnbG9iLCB0cnVlKTtcbiAgICAgICAgdGhpcy5mb2xsb3dTeW1ib2xpY0xpbmtzID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5mb2xsb3dTeW1ib2xpY0xpbmtzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5mcyA9IHRoaXMuX2dldEZpbGVTeXN0ZW1NZXRob2RzKHRoaXMuX29wdGlvbnMuZnMpO1xuICAgICAgICB0aGlzLmdsb2JzdGFyID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5nbG9ic3RhciwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuaWdub3JlID0gdGhpcy5fZ2V0VmFsdWUodGhpcy5fb3B0aW9ucy5pZ25vcmUsIFtdKTtcbiAgICAgICAgdGhpcy5tYXJrRGlyZWN0b3JpZXMgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm1hcmtEaXJlY3RvcmllcywgZmFsc2UpO1xuICAgICAgICB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm9iamVjdE1vZGUsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5vbmx5RGlyZWN0b3JpZXMgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLm9ubHlEaXJlY3RvcmllcywgZmFsc2UpO1xuICAgICAgICB0aGlzLm9ubHlGaWxlcyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMub25seUZpbGVzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuc3RhdHMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zdXBwcmVzc0Vycm9ycyA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMuc3VwcHJlc3NFcnJvcnMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yT25Ccm9rZW5TeW1ib2xpY0xpbmsgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLl9vcHRpb25zLnRocm93RXJyb3JPbkJyb2tlblN5bWJvbGljTGluaywgZmFsc2UpO1xuICAgICAgICB0aGlzLnVuaXF1ZSA9IHRoaXMuX2dldFZhbHVlKHRoaXMuX29wdGlvbnMudW5pcXVlLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMub25seURpcmVjdG9yaWVzKSB7XG4gICAgICAgICAgICB0aGlzLm9ubHlGaWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRzKSB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdE1vZGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF9nZXRWYWx1ZShvcHRpb24sIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBvcHRpb24gPT09IHVuZGVmaW5lZCA/IHZhbHVlIDogb3B0aW9uO1xuICAgIH1cbiAgICBfZ2V0RmlsZVN5c3RlbU1ldGhvZHMobWV0aG9kcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGV4cG9ydHMuREVGQVVMVF9GSUxFX1NZU1RFTV9BREFQVEVSKSwgbWV0aG9kcyk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gU2V0dGluZ3M7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCB0YXNrTWFuYWdlciA9IHJlcXVpcmUoXCIuL21hbmFnZXJzL3Rhc2tzXCIpO1xuY29uc3QgYXN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9hc3luY1wiKTtcbmNvbnN0IHN0cmVhbV8xID0gcmVxdWlyZShcIi4vcHJvdmlkZXJzL3N0cmVhbVwiKTtcbmNvbnN0IHN5bmNfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVycy9zeW5jXCIpO1xuY29uc3Qgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmFzeW5jIGZ1bmN0aW9uIEZhc3RHbG9iKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIGFzc2VydFBhdHRlcm5zSW5wdXQoc291cmNlKTtcbiAgICBjb25zdCB3b3JrcyA9IGdldFdvcmtzKHNvdXJjZSwgYXN5bmNfMS5kZWZhdWx0LCBvcHRpb25zKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbCh3b3Jrcyk7XG4gICAgcmV0dXJuIHV0aWxzLmFycmF5LmZsYXR0ZW4ocmVzdWx0KTtcbn1cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90eXBlc2NyaXB0LWVzbGludC90eXBlc2NyaXB0LWVzbGludC9pc3N1ZXMvNjBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbihmdW5jdGlvbiAoRmFzdEdsb2IpIHtcbiAgICBmdW5jdGlvbiBzeW5jKHNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHdvcmtzID0gZ2V0V29ya3Moc291cmNlLCBzeW5jXzEuZGVmYXVsdCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheS5mbGF0dGVuKHdvcmtzKTtcbiAgICB9XG4gICAgRmFzdEdsb2Iuc3luYyA9IHN5bmM7XG4gICAgZnVuY3Rpb24gc3RyZWFtKHNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHdvcmtzID0gZ2V0V29ya3Moc291cmNlLCBzdHJlYW1fMS5kZWZhdWx0LCBvcHRpb25zKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdHJlYW0gcmV0dXJuZWQgYnkgdGhlIHByb3ZpZGVyIGNhbm5vdCB3b3JrIHdpdGggYW4gYXN5bmNocm9ub3VzIGl0ZXJhdG9yLlxuICAgICAgICAgKiBUbyBzdXBwb3J0IGFzeW5jaHJvbm91cyBpdGVyYXRvcnMsIHJlZ2FyZGxlc3Mgb2YgdGhlIG51bWJlciBvZiB0YXNrcywgd2UgYWx3YXlzIG11bHRpcGxleCBzdHJlYW1zLlxuICAgICAgICAgKiBUaGlzIGFmZmVjdHMgcGVyZm9ybWFuY2UgKCsyNSUpLiBJIGRvbid0IHNlZSBiZXN0IHNvbHV0aW9uIHJpZ2h0IG5vdy5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB1dGlscy5zdHJlYW0ubWVyZ2Uod29ya3MpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5zdHJlYW0gPSBzdHJlYW07XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrcyhzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgYXNzZXJ0UGF0dGVybnNJbnB1dChzb3VyY2UpO1xuICAgICAgICBjb25zdCBwYXR0ZXJucyA9IFtdLmNvbmNhdChzb3VyY2UpO1xuICAgICAgICBjb25zdCBzZXR0aW5ncyA9IG5ldyBzZXR0aW5nc18xLmRlZmF1bHQob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0YXNrTWFuYWdlci5nZW5lcmF0ZShwYXR0ZXJucywgc2V0dGluZ3MpO1xuICAgIH1cbiAgICBGYXN0R2xvYi5nZW5lcmF0ZVRhc2tzID0gZ2VuZXJhdGVUYXNrcztcbiAgICBmdW5jdGlvbiBpc0R5bmFtaWNQYXR0ZXJuKHNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBhc3NlcnRQYXR0ZXJuc0lucHV0KHNvdXJjZSk7XG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLnBhdHRlcm4uaXNEeW5hbWljUGF0dGVybihzb3VyY2UsIHNldHRpbmdzKTtcbiAgICB9XG4gICAgRmFzdEdsb2IuaXNEeW5hbWljUGF0dGVybiA9IGlzRHluYW1pY1BhdHRlcm47XG4gICAgZnVuY3Rpb24gZXNjYXBlUGF0aChzb3VyY2UpIHtcbiAgICAgICAgYXNzZXJ0UGF0dGVybnNJbnB1dChzb3VyY2UpO1xuICAgICAgICByZXR1cm4gdXRpbHMucGF0aC5lc2NhcGUoc291cmNlKTtcbiAgICB9XG4gICAgRmFzdEdsb2IuZXNjYXBlUGF0aCA9IGVzY2FwZVBhdGg7XG59KShGYXN0R2xvYiB8fCAoRmFzdEdsb2IgPSB7fSkpO1xuZnVuY3Rpb24gZ2V0V29ya3Moc291cmNlLCBfUHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBwYXR0ZXJucyA9IFtdLmNvbmNhdChzb3VyY2UpO1xuICAgIGNvbnN0IHNldHRpbmdzID0gbmV3IHNldHRpbmdzXzEuZGVmYXVsdChvcHRpb25zKTtcbiAgICBjb25zdCB0YXNrcyA9IHRhc2tNYW5hZ2VyLmdlbmVyYXRlKHBhdHRlcm5zLCBzZXR0aW5ncyk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgX1Byb3ZpZGVyKHNldHRpbmdzKTtcbiAgICByZXR1cm4gdGFza3MubWFwKHByb3ZpZGVyLnJlYWQsIHByb3ZpZGVyKTtcbn1cbmZ1bmN0aW9uIGFzc2VydFBhdHRlcm5zSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCBzb3VyY2UgPSBbXS5jb25jYXQoaW5wdXQpO1xuICAgIGNvbnN0IGlzVmFsaWRTb3VyY2UgPSBzb3VyY2UuZXZlcnkoKGl0ZW0pID0+IHV0aWxzLnN0cmluZy5pc1N0cmluZyhpdGVtKSAmJiAhdXRpbHMuc3RyaW5nLmlzRW1wdHkoaXRlbSkpO1xuICAgIGlmICghaXNWYWxpZFNvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQYXR0ZXJucyBtdXN0IGJlIGEgc3RyaW5nIChub24gZW1wdHkpIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEZhc3RHbG9iO1xuIiwgImltcG9ydCB7IGdlbmVyYXRlIH0gZnJvbSAnZmFzdC1nbG9iL291dC9tYW5hZ2Vycy90YXNrcyc7XG5cbmNvbnN0IHBpY29tYXRjaCA9IHJlcXVpcmUoJ3BpY29tYXRjaCcpO1xuY29uc3QgZmcgPSByZXF1aXJlKCdmYXN0LWdsb2InKTtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIG9iamVjdCB1c2VkIGZvciBwb3N0Y3NzIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlUG9zdGNzc0NvbmZpZyhjb25maWc6IHN0cmluZywgdXNlOiBzdHJpbmcpIHtcblx0bGV0IG9iaiA9IHtcblx0XHRwbHVnaW5zOiBbXVxuXHR9O1xuXHQvLyBJZiB1c2VyIHNwZWNpZmllcyAtLXVzZSwgd2UgaWdub3JlIHBvc3Rjc3MgY29uZmlnIGZpbGVzLlxuXHRpZiAodXNlICE9PSB1bmRlZmluZWQpIHtcblx0XHR1c2Uuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcblx0XHRcdG9iai5wbHVnaW5zLnB1c2gocmVxdWlyZShwbHVnaW4pKTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgY29uZmlnRmlsZUxvYztcblx0XHRpZiAoY29uZmlnICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbmZpZ0ZpbGVMb2MgPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgY29uZmlnLCAncG9zdGNzcy5jb25maWcuanMnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uZmlnRmlsZUxvYyA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAncG9zdGNzcy5jb25maWcuanMnKTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0ZnMubHN0YXRTeW5jKGNvbmZpZ0ZpbGVMb2MpO1xuXHRcdFx0b2JqID0gcmVxdWlyZShjb25maWdGaWxlTG9jKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBUT0RPXG5cdFx0fVxuXHR9XG5cdHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gYXJyYXkgb2YgaW5wdXQgc291cmNlcywgZXhwYW5kIGFueSBnbG9icyBhbmQgdmFsaWRhdGUgdGhhdCBpbnB1dHMgZXhpc3QuXG4gKlxuICovXG5mdW5jdGlvbiBleHBhbmRHbG9iKGlucHV0OiBzdHJpbmdbXSwgY2FsbGJhY2ssIGluZGV4OiBudW1iZXIgPSAwLCBleHBhbmRlZDogc3RyaW5nW10gPSBbXSkge1xuXHRpZiAoaW5kZXggPCBpbnB1dC5sZW5ndGgpIHtcblx0XHRsZXQgaXNHbG9iID0gZmFsc2U7XG5cdFx0bGV0IGlzRGlyID0gZmFsc2U7XG5cdFx0bGV0IGlzRmlsZSA9IGZhbHNlO1xuXG5cdFx0aXNHbG9iID0gcGljb21hdGNoLnNjYW4oaW5wdXRbaW5kZXhdKS5pc0dsb2I7XG5cblx0XHRpZiAoaXNHbG9iID09PSBmYWxzZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aXNEaXIgPSBmcy5sc3RhdFN5bmMocGF0aC5ub3JtYWxpemUoaW5wdXRbaW5kZXhdKSkuaXNEaXJlY3RvcnkoKTtcblx0XHRcdFx0aXNGaWxlID0gZnMubHN0YXRTeW5jKHBhdGgubm9ybWFsaXplKGlucHV0W2luZGV4XSkpLmlzRmlsZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHRocm93IGVycjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNHbG9iIHx8IGlzRmlsZSkge1xuXHRcdFx0bGV0IGZpbGVzID0gZmdcblx0XHRcdFx0LnN5bmMoaW5wdXRbaW5kZXhdLCB7XG5cdFx0XHRcdFx0ZG90OiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5tYXAoKGVudHJ5KSA9PiBwYXRoLm5vcm1hbGl6ZShlbnRyeSkpO1xuXHRcdFx0ZXhwYW5kZWQucHVzaCguLi5maWxlcyk7XG5cblx0XHRcdGluZGV4ID0gaW5kZXggKyAxO1xuXHRcdFx0ZXhwYW5kR2xvYihpbnB1dCwgY2FsbGJhY2ssIGluZGV4LCBleHBhbmRlZCk7XG5cdFx0fSBlbHNlIGlmIChpc0Rpcikge1xuXHRcdFx0bGV0IGRpciA9IGlucHV0W2luZGV4XTtcblxuXHRcdFx0ZnMucmVhZGRpcihkaXIsIChlcnIsIGZpbGVzKSA9PiB7XG5cdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGZ1bGxuYW1lID0gcGF0aC5qb2luKGRpciwgZmlsZSk7XG5cdFx0XHRcdFx0XHRpZiAoIWZzLmxzdGF0U3luYyhmdWxsbmFtZSkuaXNEaXJlY3RvcnkoKSkge1xuXHRcdFx0XHRcdFx0XHRleHBhbmRlZC5wdXNoKGZ1bGxuYW1lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGluZGV4ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdGV4cGFuZEdsb2IoaW5wdXQsIGNhbGxiYWNrLCBpbmRleCwgZXhwYW5kZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y2FsbGJhY2soZXhwYW5kZWQpO1xuXHR9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBmaWxlbmFtZVxuICogQHJldHVybnMgcGF0aCwgb3IgYSBibGFuayBzdHJpbmcgaWYgdGhlIGNvbWJpbmF0aW9uIG9mIG9wdGlvbnMgcHJvdmlkZWQgZG9lcyBub3QgZ2l2ZSBhIHZhbGlkIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURlc3RpbmF0aW9uKGZpbGVuYW1lOiBzdHJpbmcsIG91dEZpbGUsIGRpciwgYmFzZSwgZXh0ZW5zaW9uLCB1c2luZ1N0ZGluOiBib29sZWFuKSB7XG5cdGxldCByZXN1bHQ6IHN0cmluZyA9ICcnO1xuXHRsZXQgbWlycm9yOiBzdHJpbmcgPSAnJztcblxuXHRpZiAoIW91dEZpbGUpIG91dEZpbGUgPSAnJztcblx0aWYgKCFleHRlbnNpb24pIGV4dGVuc2lvbiA9ICcuY3NzJztcblxuXHRpZiAodXNpbmdTdGRpbiA9PT0gdHJ1ZSkge1xuXHRcdGlmIChvdXRGaWxlLmxlbmd0aCA+IDApIHtcblx0XHRcdHJlc3VsdCA9IG91dEZpbGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9ICcnO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRpZiAoIWRpcikgZGlyID0gJyc7XG5cdFx0aWYgKCFiYXNlKSBiYXNlID0gJyc7XG5cblx0XHRpZiAoZGlyLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmIChiYXNlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bWlycm9yID0gcGF0aC5kaXJuYW1lKGZpbGVuYW1lLnJlcGxhY2UocGF0aC5qb2luKGJhc2UsICcvJyksICcnKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBwYXRoLmpvaW4oZGlyLCBtaXJyb3IsIHBhdGguYmFzZW5hbWUoZmlsZW5hbWUsIHBhdGguZXh0bmFtZShmaWxlbmFtZSkpICsgZXh0ZW5zaW9uKTtcblx0XHR9IGVsc2UgaWYgKG91dEZpbGUubGVuZ3RoID4gMCkge1xuXHRcdFx0cmVzdWx0ID0gb3V0RmlsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gJyc7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0cy5leHBhbmRHbG9iID0gZXhwYW5kR2xvYjtcbmV4cG9ydHMuY3JlYXRlRGVzdGluYXRpb24gPSBjcmVhdGVEZXN0aW5hdGlvbjtcbmV4cG9ydHMuZ2VuZXJhdGVQb3N0Y3NzQ29uZmlnID0gZ2VuZXJhdGVQb3N0Y3NzQ29uZmlnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRUEsUUFBTSxRQUFPLFFBQVE7QUFDckIsUUFBTSxZQUFZO0FBQ2xCLFFBQU0sZUFBZSxLQUFLO0FBTTFCLFFBQU0sY0FBYztBQUNwQixRQUFNLGVBQWU7QUFDckIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxnQkFBZ0I7QUFDdEIsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sUUFBUTtBQUNkLFFBQU0sYUFBYSxNQUFNO0FBQ3pCLFFBQU0sZUFBZSxRQUFRO0FBQzdCLFFBQU0sYUFBYSxHQUFHLG1CQUFtQjtBQUN6QyxRQUFNLFNBQVMsTUFBTTtBQUNyQixRQUFNLFVBQVUsTUFBTSxlQUFlO0FBQ3JDLFFBQU0sZUFBZSxNQUFNLG1CQUFtQjtBQUM5QyxRQUFNLGdCQUFnQixNQUFNO0FBQzVCLFFBQU0sZUFBZSxNQUFNO0FBQzNCLFFBQU0sT0FBTyxHQUFHO0FBRWhCLFFBQU0sY0FBYztBQUFBLE1BQ2xCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQTtBQU9GLFFBQU0sZ0JBQWdCLGlDQUNqQixjQURpQjtBQUFBLE1BR3BCLGVBQWUsSUFBSTtBQUFBLE1BQ25CLE9BQU87QUFBQSxNQUNQLE1BQU0sR0FBRztBQUFBLE1BQ1QsWUFBWSxHQUFHLHVCQUF1QjtBQUFBLE1BQ3RDLFFBQVEsTUFBTTtBQUFBLE1BQ2QsU0FBUyxZQUFZLGNBQWMsdUJBQXVCO0FBQUEsTUFDMUQsY0FBYyxNQUFNLHVCQUF1QjtBQUFBLE1BQzNDLGVBQWUsTUFBTSx1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
