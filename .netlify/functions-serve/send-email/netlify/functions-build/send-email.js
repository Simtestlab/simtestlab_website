// netlify/functions-build/send-email.js
(() => {
  var e = { 9764: (e2, t2, i2) => {
    !function() {
      "use strict";
      var t3 = i2(2192), a = i2(7177), s = { origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE", preflightContinue: false, optionsSuccessStatus: 204 };
      function n(e3) {
        return "string" == typeof e3 || e3 instanceof String;
      }
      function o(e3, t4) {
        if (Array.isArray(t4)) {
          for (var i3 = 0; i3 < t4.length; ++i3)
            if (o(e3, t4[i3]))
              return true;
          return false;
        }
        return n(t4) ? e3 === t4 : t4 instanceof RegExp ? t4.test(e3) : !!t4;
      }
      function r(e3, t4) {
        var i3, a2 = t4.headers.origin, s2 = [];
        return e3.origin && "*" !== e3.origin ? n(e3.origin) ? (s2.push([{ key: "Access-Control-Allow-Origin", value: e3.origin }]), s2.push([{ key: "Vary", value: "Origin" }])) : (i3 = o(a2, e3.origin), s2.push([{ key: "Access-Control-Allow-Origin", value: !!i3 && a2 }]), s2.push([{ key: "Vary", value: "Origin" }])) : s2.push([{ key: "Access-Control-Allow-Origin", value: "*" }]), s2;
      }
      function p(e3) {
        return true === e3.credentials ? { key: "Access-Control-Allow-Credentials", value: "true" } : null;
      }
      function c(e3) {
        var t4 = e3.exposedHeaders;
        return t4 ? (t4.join && (t4 = t4.join(",")), t4 && t4.length ? { key: "Access-Control-Expose-Headers", value: t4 } : null) : null;
      }
      function l(e3, t4) {
        for (var i3 = 0, s2 = e3.length; i3 < s2; i3++) {
          var n2 = e3[i3];
          n2 && (Array.isArray(n2) ? l(n2, t4) : "Vary" === n2.key && n2.value ? a(t4, n2.value) : n2.value && t4.setHeader(n2.key, n2.value));
        }
      }
      e2.exports = function(e3) {
        var i3 = null;
        return i3 = "function" == typeof e3 ? e3 : function(t4, i4) {
          i4(null, e3);
        }, function(e4, a2, n2) {
          i3(e4, function(i4, o2) {
            if (i4)
              n2(i4);
            else {
              var d = t3({}, s, o2), h = null;
              d.origin && "function" == typeof d.origin ? h = d.origin : d.origin && (h = function(e5, t4) {
                t4(null, d.origin);
              }), h ? h(e4.headers.origin, function(t4, i5) {
                t4 || !i5 ? n2(t4) : (d.origin = i5, function(e5, t5, i6, a3) {
                  var s2 = [];
                  "OPTIONS" === (t5.method && t5.method.toUpperCase && t5.method.toUpperCase()) ? (s2.push(r(e5, t5)), s2.push(p(e5)), s2.push(function(e6) {
                    var t6 = e6.methods;
                    return t6.join && (t6 = e6.methods.join(",")), { key: "Access-Control-Allow-Methods", value: t6 };
                  }(e5)), s2.push(function(e6, t6) {
                    var i7 = e6.allowedHeaders || e6.headers, a4 = [];
                    return i7 ? i7.join && (i7 = i7.join(",")) : (i7 = t6.headers["access-control-request-headers"], a4.push([{ key: "Vary", value: "Access-Control-Request-Headers" }])), i7 && i7.length && a4.push([{ key: "Access-Control-Allow-Headers", value: i7 }]), a4;
                  }(e5, t5)), s2.push(function(e6) {
                    var t6 = ("number" == typeof e6.maxAge || e6.maxAge) && e6.maxAge.toString();
                    return t6 && t6.length ? { key: "Access-Control-Max-Age", value: t6 } : null;
                  }(e5)), s2.push(c(e5)), l(s2, i6), e5.preflightContinue ? a3() : (i6.statusCode = e5.optionsSuccessStatus, i6.setHeader("Content-Length", "0"), i6.end())) : (s2.push(r(e5, t5)), s2.push(p(e5)), s2.push(c(e5)), l(s2, i6), a3());
                }(d, e4, a2, n2));
              }) : n2();
            }
          });
        };
      };
    }();
  }, 4786: (e2, t2, i2) => {
    const a = i2(9896), s = i2(6928), n = i2(857), o = i2(6982), r = i2(2716).version, p = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
    function c(e3) {
      console.log(`[dotenv@${r}][DEBUG] ${e3}`);
    }
    function l(e3) {
      return e3 && e3.DOTENV_KEY && e3.DOTENV_KEY.length > 0 ? e3.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
    }
    function d(e3, t3) {
      let i3;
      try {
        i3 = new URL(t3);
      } catch (e4) {
        if ("ERR_INVALID_URL" === e4.code) {
          const e5 = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
          throw e5.code = "INVALID_DOTENV_KEY", e5;
        }
        throw e4;
      }
      const a2 = i3.password;
      if (!a2) {
        const e4 = new Error("INVALID_DOTENV_KEY: Missing key part");
        throw e4.code = "INVALID_DOTENV_KEY", e4;
      }
      const s2 = i3.searchParams.get("environment");
      if (!s2) {
        const e4 = new Error("INVALID_DOTENV_KEY: Missing environment part");
        throw e4.code = "INVALID_DOTENV_KEY", e4;
      }
      const n2 = `DOTENV_VAULT_${s2.toUpperCase()}`, o2 = e3.parsed[n2];
      if (!o2) {
        const e4 = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${n2} in your .env.vault file.`);
        throw e4.code = "NOT_FOUND_DOTENV_ENVIRONMENT", e4;
      }
      return { ciphertext: o2, key: a2 };
    }
    function h(e3) {
      let t3 = null;
      if (e3 && e3.path && e3.path.length > 0)
        if (Array.isArray(e3.path))
          for (const i3 of e3.path)
            a.existsSync(i3) && (t3 = i3.endsWith(".vault") ? i3 : `${i3}.vault`);
        else
          t3 = e3.path.endsWith(".vault") ? e3.path : `${e3.path}.vault`;
      else
        t3 = s.resolve(process.cwd(), ".env.vault");
      return a.existsSync(t3) ? t3 : null;
    }
    function m(e3) {
      return "~" === e3[0] ? s.join(n.homedir(), e3.slice(1)) : e3;
    }
    const u = { configDotenv: function(e3) {
      const t3 = s.resolve(process.cwd(), ".env");
      let i3 = "utf8";
      const n2 = Boolean(e3 && e3.debug);
      e3 && e3.encoding ? i3 = e3.encoding : n2 && c("No encoding is specified. UTF-8 is used by default");
      let o2, r2 = [t3];
      if (e3 && e3.path)
        if (Array.isArray(e3.path)) {
          r2 = [];
          for (const t4 of e3.path)
            r2.push(m(t4));
        } else
          r2 = [m(e3.path)];
      const p2 = {};
      for (const t4 of r2)
        try {
          const s2 = u.parse(a.readFileSync(t4, { encoding: i3 }));
          u.populate(p2, s2, e3);
        } catch (e4) {
          n2 && c(`Failed to load ${t4} ${e4.message}`), o2 = e4;
        }
      let l2 = process.env;
      return e3 && null != e3.processEnv && (l2 = e3.processEnv), u.populate(l2, p2, e3), o2 ? { parsed: p2, error: o2 } : { parsed: p2 };
    }, _configVault: function(e3) {
      console.log(`[dotenv@${r}][INFO] Loading env from encrypted .env.vault`);
      const t3 = u._parseVault(e3);
      let i3 = process.env;
      return e3 && null != e3.processEnv && (i3 = e3.processEnv), u.populate(i3, t3, e3), { parsed: t3 };
    }, _parseVault: function(e3) {
      const t3 = h(e3), i3 = u.configDotenv({ path: t3 });
      if (!i3.parsed) {
        const e4 = new Error(`MISSING_DATA: Cannot parse ${t3} for an unknown reason`);
        throw e4.code = "MISSING_DATA", e4;
      }
      const a2 = l(e3).split(","), s2 = a2.length;
      let n2;
      for (let e4 = 0; e4 < s2; e4++)
        try {
          const t4 = d(i3, a2[e4].trim());
          n2 = u.decrypt(t4.ciphertext, t4.key);
          break;
        } catch (t4) {
          if (e4 + 1 >= s2)
            throw t4;
        }
      return u.parse(n2);
    }, config: function(e3) {
      if (0 === l(e3).length)
        return u.configDotenv(e3);
      const t3 = h(e3);
      return t3 ? u._configVault(e3) : (i3 = `You set DOTENV_KEY but you are missing a .env.vault file at ${t3}. Did you forget to build it?`, console.log(`[dotenv@${r}][WARN] ${i3}`), u.configDotenv(e3));
      var i3;
    }, decrypt: function(e3, t3) {
      const i3 = Buffer.from(t3.slice(-64), "hex");
      let a2 = Buffer.from(e3, "base64");
      const s2 = a2.subarray(0, 12), n2 = a2.subarray(-16);
      a2 = a2.subarray(12, -16);
      try {
        const e4 = o.createDecipheriv("aes-256-gcm", i3, s2);
        return e4.setAuthTag(n2), `${e4.update(a2)}${e4.final()}`;
      } catch (e4) {
        const t4 = e4 instanceof RangeError, i4 = "Invalid key length" === e4.message, a3 = "Unsupported state or unable to authenticate data" === e4.message;
        if (t4 || i4) {
          const e5 = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
          throw e5.code = "INVALID_DOTENV_KEY", e5;
        }
        if (a3) {
          const e5 = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
          throw e5.code = "DECRYPTION_FAILED", e5;
        }
        throw e4;
      }
    }, parse: function(e3) {
      const t3 = {};
      let i3, a2 = e3.toString();
      for (a2 = a2.replace(/\r\n?/gm, "\n"); null != (i3 = p.exec(a2)); ) {
        const e4 = i3[1];
        let a3 = i3[2] || "";
        a3 = a3.trim();
        const s2 = a3[0];
        a3 = a3.replace(/^(['"`])([\s\S]*)\1$/gm, "$2"), '"' === s2 && (a3 = a3.replace(/\\n/g, "\n"), a3 = a3.replace(/\\r/g, "\r")), t3[e4] = a3;
      }
      return t3;
    }, populate: function(e3, t3, i3 = {}) {
      const a2 = Boolean(i3 && i3.debug), s2 = Boolean(i3 && i3.override);
      if ("object" != typeof t3) {
        const e4 = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
        throw e4.code = "OBJECT_REQUIRED", e4;
      }
      for (const i4 of Object.keys(t3))
        Object.prototype.hasOwnProperty.call(e3, i4) ? (true === s2 && (e3[i4] = t3[i4]), a2 && c(true === s2 ? `"${i4}" is already defined and WAS overwritten` : `"${i4}" is already defined and was NOT overwritten`)) : e3[i4] = t3[i4];
    } };
    e2.exports.configDotenv = u.configDotenv, e2.exports._configVault = u._configVault, e2.exports._parseVault = u._parseVault, e2.exports.config = u.config, e2.exports.decrypt = u.decrypt, e2.exports.parse = u.parse, e2.exports.populate = u.populate, e2.exports = u;
  }, 2461: function(e2, t2, i2) {
    "use strict";
    var a = this && this.__importDefault || function(e3) {
      return e3 && e3.__esModule ? e3 : { default: e3 };
    };
    const s = a(i2(5143)), n = a(i2(1573)), o = a(i2(2588)), r = a(i2(6585)), p = a(i2(6607)), c = a(i2(4689)), l = a(i2(7028)), d = a(i2(8482)), h = a(i2(1560)), m = a(i2(3930)), u = a(i2(2636)), f = a(i2(5035)), g = a(i2(6044)), x = a(i2(3865)), v = a(i2(1369));
    function y(e3, t3 = {}) {
      const { enabledByDefault: i3 = true } = t3;
      switch (e3) {
        case void 0:
          return i3 ? [] : null;
        case false:
          return null;
        case true:
          return [];
        default:
          return false === t3.takesOptions ? (console.warn(`${t3.name} does not take options. ${i3 ? "Remove the property" : "Set the property to `true`"} to silence this warning.`), []) : [e3];
      }
    }
    const b = Object.assign(function(e3 = {}) {
      var t3;
      if ("IncomingMessage" === (null === (t3 = e3.constructor) || void 0 === t3 ? void 0 : t3.name))
        throw new Error("It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.");
      const i3 = function(e4) {
        const t4 = [], i4 = y(e4.contentSecurityPolicy);
        i4 && t4.push(s.default(...i4)), y(e4.crossOriginEmbedderPolicy, { name: "crossOriginEmbedderPolicy", takesOptions: false, enabledByDefault: false }) && t4.push(n.default());
        const a2 = y(e4.crossOriginOpenerPolicy, { enabledByDefault: false });
        a2 && t4.push(o.default(...a2));
        const b2 = y(e4.crossOriginResourcePolicy, { enabledByDefault: false });
        b2 && t4.push(r.default(...b2));
        const w = y(e4.dnsPrefetchControl);
        w && t4.push(m.default(...w));
        const _ = y(e4.expectCt);
        _ && t4.push(p.default(..._));
        const k = y(e4.frameguard);
        k && t4.push(f.default(...k)), y(e4.hidePoweredBy, { name: "hidePoweredBy", takesOptions: false }) && t4.push(x.default());
        const E = y(e4.hsts);
        E && t4.push(d.default(...E)), y(e4.ieNoOpen, { name: "ieNoOpen", takesOptions: false }) && t4.push(u.default()), y(e4.noSniff, { name: "noSniff", takesOptions: false }) && t4.push(h.default()), y(e4.originAgentCluster, { name: "originAgentCluster", takesOptions: false, enabledByDefault: false }) && t4.push(c.default());
        const S = y(e4.permittedCrossDomainPolicies);
        S && t4.push(g.default(...S));
        const A = y(e4.referrerPolicy);
        return A && t4.push(l.default(...A)), y(e4.xssFilter, { name: "xssFilter", takesOptions: false }) && t4.push(v.default()), t4;
      }(e3);
      return function(e4, t4, a2) {
        const s2 = i3[Symbol.iterator]();
        !function i4(n2) {
          if (n2)
            return void a2(n2);
          const o2 = s2.next();
          o2.done ? a2() : (0, o2.value)(e4, t4, i4);
        }();
      };
    }, { contentSecurityPolicy: s.default, crossOriginEmbedderPolicy: n.default, crossOriginOpenerPolicy: o.default, crossOriginResourcePolicy: r.default, dnsPrefetchControl: m.default, expectCt: p.default, frameguard: f.default, hidePoweredBy: x.default, hsts: d.default, ieNoOpen: u.default, noSniff: h.default, originAgentCluster: c.default, permittedCrossDomainPolicies: g.default, referrerPolicy: l.default, xssFilter: v.default, featurePolicy() {
      throw new Error("helmet.featurePolicy was removed because the Feature-Policy header is deprecated. If you still need this header, you can use the `feature-policy` module.");
    }, hpkp() {
      throw new Error("helmet.hpkp was removed because the header has been deprecated. If you still need this header, you can use the `hpkp` module. For more, see <https://github.com/helmetjs/helmet/issues/180>.");
    }, noCache() {
      throw new Error("helmet.noCache was removed. You can use the `nocache` module instead. For more, see <https://github.com/helmetjs/helmet/issues/215>.");
    } });
    e2.exports = b;
  }, 5143: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.dangerouslyDisableDefaultSrc = t2.getDefaultDirectives = void 0;
    const i2 = Symbol("dangerouslyDisableDefaultSrc");
    t2.dangerouslyDisableDefaultSrc = i2;
    const a = { "default-src": ["'self'"], "base-uri": ["'self'"], "block-all-mixed-content": [], "font-src": ["'self'", "https:", "data:"], "frame-ancestors": ["'self'"], "img-src": ["'self'", "data:"], "object-src": ["'none'"], "script-src": ["'self'"], "script-src-attr": ["'none'"], "style-src": ["'self'", "https:", "'unsafe-inline'"], "upgrade-insecure-requests": [] }, s = () => Object.assign({}, a);
    t2.getDefaultDirectives = s;
    const n = (e3) => /;|,/.test(e3), o = function(e3 = {}) {
      "loose" in e3 && console.warn("Content-Security-Policy middleware no longer needs the `loose` parameter. You should remove it."), "setAllHeaders" in e3 && console.warn("Content-Security-Policy middleware no longer supports the `setAllHeaders` parameter. See <https://github.com/helmetjs/helmet/wiki/Setting-legacy-Content-Security-Policy-headers-in-Helmet-4>."), ["disableAndroid", "browserSniff"].forEach((t4) => {
        t4 in e3 && console.warn(`Content-Security-Policy middleware no longer does browser sniffing, so you can remove the \`${t4}\` option. See <https://github.com/helmetjs/csp/issues/97> for discussion.`);
      });
      const t3 = e3.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy", a2 = function(e4) {
        const t4 = s(), { useDefaults: a3 = false, directives: o2 = t4 } = e4, r = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
        for (const e5 in o2) {
          if (l = o2, d = e5, !Object.prototype.hasOwnProperty.call(l, d))
            continue;
          if (0 === e5.length || /[^a-zA-Z0-9-]/.test(e5))
            throw new Error(`Content-Security-Policy received an invalid directive name ${JSON.stringify(e5)}`);
          const t5 = e5.replace(/[A-Z]/g, (e6) => "-" + e6.toLowerCase());
          if (p.has(t5))
            throw new Error(`Content-Security-Policy received a duplicate directive ${JSON.stringify(t5)}`);
          p.add(t5);
          const a4 = o2[e5];
          let s2;
          if (null !== a4) {
            if ("string" == typeof a4)
              s2 = [a4];
            else {
              if (!a4)
                throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(t5)}`);
              if (a4 === i2) {
                if ("default-src" === t5) {
                  c.add("default-src");
                  continue;
                }
                throw new Error(`Content-Security-Policy: tried to disable ${JSON.stringify(t5)} as if it were default-src; simply omit the key`);
              }
              s2 = a4;
            }
            for (const e6 of s2)
              if ("string" == typeof e6 && n(e6))
                throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(t5)}`);
            r.set(t5, s2);
          } else {
            if ("default-src" === t5)
              throw new Error("Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.");
            c.add(t5);
          }
        }
        var l, d;
        if (a3 && Object.entries(t4).forEach(([e5, t5]) => {
          r.has(e5) || c.has(e5) || r.set(e5, t5);
        }), !r.size)
          throw new Error("Content-Security-Policy has no directives. Either set some or disable the header");
        if (!r.has("default-src") && !c.has("default-src"))
          throw new Error("Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.");
        return r;
      }(e3);
      return function(e4, i3, s2) {
        const o2 = function(e5, t4, i4) {
          let a3;
          const s3 = [];
          return i4.forEach((i5, o3) => {
            let r = "";
            for (const a4 of i5)
              r += " " + (a4 instanceof Function ? a4(e5, t4) : a4);
            r ? n(r) ? a3 = new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(o3)}`) : s3.push(`${o3}${r}`) : s3.push(o3);
          }), a3 || s3.join(";");
        }(e4, i3, a2);
        o2 instanceof Error ? s2(o2) : (i3.setHeader(t3, o2), s2());
      };
    };
    o.getDefaultDirectives = s, o.dangerouslyDisableDefaultSrc = i2, e2.exports = o, t2.default = o;
  }, 1573: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.setHeader("Cross-Origin-Embedder-Policy", "require-corp"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 2588: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const i2 = /* @__PURE__ */ new Set(["same-origin", "same-origin-allow-popups", "unsafe-none"]);
    function a(e3 = {}) {
      const t3 = function({ policy: e4 = "same-origin" }) {
        if (i2.has(e4))
          return e4;
        throw new Error(`Cross-Origin-Opener-Policy does not support the ${JSON.stringify(e4)} policy`);
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("Cross-Origin-Opener-Policy", t3), a2();
      };
    }
    e2.exports = a, t2.default = a;
  }, 6585: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const i2 = /* @__PURE__ */ new Set(["same-origin", "same-site", "cross-origin"]);
    function a(e3 = {}) {
      const t3 = function({ policy: e4 = "same-origin" }) {
        if (i2.has(e4))
          return e4;
        throw new Error(`Cross-Origin-Resource-Policy does not support the ${JSON.stringify(e4)} policy`);
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("Cross-Origin-Resource-Policy", t3), a2();
      };
    }
    e2.exports = a, t2.default = a;
  }, 6607: (e2, t2) => {
    "use strict";
    function i2(e3 = 0) {
      if (e3 >= 0 && Number.isFinite(e3))
        return Math.floor(e3);
      throw new Error(`Expect-CT: ${JSON.stringify(e3)} is not a valid value for maxAge. Please choose a positive integer.`);
    }
    function a(e3 = {}) {
      const t3 = function(e4) {
        const t4 = [`max-age=${i2(e4.maxAge)}`];
        return e4.enforce && t4.push("enforce"), e4.reportUri && t4.push(`report-uri="${e4.reportUri}"`), t4.join(", ");
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("Expect-CT", t3), a2();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = a, t2.default = a;
  }, 4689: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.setHeader("Origin-Agent-Cluster", "?1"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 7028: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const i2 = /* @__PURE__ */ new Set(["no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url", ""]);
    function a(e3 = {}) {
      const t3 = function({ policy: e4 = ["no-referrer"] }) {
        const t4 = "string" == typeof e4 ? [e4] : e4;
        if (0 === t4.length)
          throw new Error("Referrer-Policy received no policy tokens");
        const a2 = /* @__PURE__ */ new Set();
        return t4.forEach((e5) => {
          if (!i2.has(e5))
            throw new Error(`Referrer-Policy received an unexpected policy token ${JSON.stringify(e5)}`);
          if (a2.has(e5))
            throw new Error(`Referrer-Policy received a duplicate policy token ${JSON.stringify(e5)}`);
          a2.add(e5);
        }), t4.join(",");
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("Referrer-Policy", t3), a2();
      };
    }
    e2.exports = a, t2.default = a;
  }, 8482: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const i2 = 15552e3;
    function a(e3 = i2) {
      if (e3 >= 0 && Number.isFinite(e3))
        return Math.floor(e3);
      throw new Error(`Strict-Transport-Security: ${JSON.stringify(e3)} is not a valid value for maxAge. Please choose a positive integer.`);
    }
    function s(e3 = {}) {
      const t3 = function(e4) {
        if ("maxage" in e4)
          throw new Error("Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?");
        "includeSubdomains" in e4 && console.warn('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase "D".)'), "setIf" in e4 && console.warn("Strict-Transport-Security middleware no longer supports the `setIf` parameter. See the documentation and <https://github.com/helmetjs/helmet/wiki/Conditionally-using-middleware> if you need help replicating this behavior.");
        const t4 = [`max-age=${a(e4.maxAge)}`];
        return (void 0 === e4.includeSubDomains || e4.includeSubDomains) && t4.push("includeSubDomains"), e4.preload && t4.push("preload"), t4.join("; ");
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("Strict-Transport-Security", t3), a2();
      };
    }
    e2.exports = s, t2.default = s;
  }, 1560: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.setHeader("X-Content-Type-Options", "nosniff"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 3930: (e2, t2) => {
    "use strict";
    function i2(e3 = {}) {
      const t3 = e3.allow ? "on" : "off";
      return function(e4, i3, a) {
        i3.setHeader("X-DNS-Prefetch-Control", t3), a();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 2636: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.setHeader("X-Download-Options", "noopen"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 5035: (e2, t2) => {
    "use strict";
    function i2(e3 = {}) {
      const t3 = function({ action: e4 = "SAMEORIGIN" }) {
        const t4 = "string" == typeof e4 ? e4.toUpperCase() : e4;
        switch (t4) {
          case "SAME-ORIGIN":
            return "SAMEORIGIN";
          case "DENY":
          case "SAMEORIGIN":
            return t4;
          case "ALLOW-FROM":
            throw new Error("X-Frame-Options no longer supports `ALLOW-FROM` due to poor browser support. See <https://github.com/helmetjs/helmet/wiki/How-to-use-X%E2%80%93Frame%E2%80%93Options's-%60ALLOW%E2%80%93FROM%60-directive> for more info.");
          default:
            throw new Error(`X-Frame-Options received an invalid action ${JSON.stringify(e4)}`);
        }
      }(e3);
      return function(e4, i3, a) {
        i3.setHeader("X-Frame-Options", t3), a();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 6044: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true });
    const i2 = /* @__PURE__ */ new Set(["none", "master-only", "by-content-type", "all"]);
    function a(e3 = {}) {
      const t3 = function({ permittedPolicies: e4 = "none" }) {
        if (i2.has(e4))
          return e4;
        throw new Error(`X-Permitted-Cross-Domain-Policies does not support ${JSON.stringify(e4)}`);
      }(e3);
      return function(e4, i3, a2) {
        i3.setHeader("X-Permitted-Cross-Domain-Policies", t3), a2();
      };
    }
    e2.exports = a, t2.default = a;
  }, 3865: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.removeHeader("X-Powered-By"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 1369: (e2, t2) => {
    "use strict";
    function i2() {
      return function(e3, t3, i3) {
        t3.setHeader("X-XSS-Protection", "0"), i3();
      };
    }
    Object.defineProperty(t2, "__esModule", { value: true }), e2.exports = i2, t2.default = i2;
  }, 4913: (e2) => {
    "use strict";
    class t2 {
      constructor(e3) {
        this.str = (e3 || "").toString(), this.operatorCurrent = "", this.operatorExpecting = "", this.node = null, this.escaped = false, this.list = [], this.operators = { '"': '"', "(": ")", "<": ">", ",": "", ":": ";", ";": "" };
      }
      tokenize() {
        let e3, t3 = [];
        for (let t4 = 0, i2 = this.str.length; t4 < i2; t4++)
          e3 = this.str.charAt(t4), this.checkChar(e3);
        return this.list.forEach((e4) => {
          e4.value = (e4.value || "").toString().trim(), e4.value && t3.push(e4);
        }), t3;
      }
      checkChar(e3) {
        if (this.escaped)
          ;
        else {
          if (e3 === this.operatorExpecting)
            return this.node = { type: "operator", value: e3 }, this.list.push(this.node), this.node = null, this.operatorExpecting = "", void (this.escaped = false);
          if (!this.operatorExpecting && e3 in this.operators)
            return this.node = { type: "operator", value: e3 }, this.list.push(this.node), this.node = null, this.operatorExpecting = this.operators[e3], void (this.escaped = false);
          if (['"', "'"].includes(this.operatorExpecting) && "\\" === e3)
            return void (this.escaped = true);
        }
        this.node || (this.node = { type: "text", value: "" }, this.list.push(this.node)), "\n" === e3 && (e3 = " "), (e3.charCodeAt(0) >= 33 || [" ", "	"].includes(e3)) && (this.node.value += e3), this.escaped = false;
      }
    }
    e2.exports = function e3(i2, a) {
      a = a || {};
      let s = new t2(i2).tokenize(), n = [], o = [], r = [];
      if (s.forEach((e4) => {
        "operator" !== e4.type || "," !== e4.value && ";" !== e4.value ? o.push(e4) : (o.length && n.push(o), o = []);
      }), o.length && n.push(o), n.forEach((t3) => {
        t3 = function(t4) {
          let i3, a2, s2, n2, o2 = false, r2 = "text", p = [], c = { address: [], comment: [], group: [], text: [] };
          for (s2 = 0, n2 = t4.length; s2 < n2; s2++)
            if (i3 = t4[s2], "operator" === i3.type)
              switch (i3.value) {
                case "<":
                  r2 = "address";
                  break;
                case "(":
                  r2 = "comment";
                  break;
                case ":":
                  r2 = "group", o2 = true;
                  break;
                default:
                  r2 = "text";
              }
            else
              i3.value && ("address" === r2 && (i3.value = i3.value.replace(/^[^<]*<\s*/, "")), c[r2].push(i3.value));
          if (!c.text.length && c.comment.length && (c.text = c.comment, c.comment = []), o2)
            c.text = c.text.join(" "), p.push({ name: c.text || a2 && a2.name, group: c.group.length ? e3(c.group.join(",")) : [] });
          else {
            if (!c.address.length && c.text.length) {
              for (s2 = c.text.length - 1; s2 >= 0; s2--)
                if (c.text[s2].match(/^[^@\s]+@[^@\s]+$/)) {
                  c.address = c.text.splice(s2, 1);
                  break;
                }
              let e4 = function(e5) {
                return c.address.length ? e5 : (c.address = [e5.trim()], " ");
              };
              if (!c.address.length)
                for (s2 = c.text.length - 1; s2 >= 0 && (c.text[s2] = c.text[s2].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, e4).trim(), !c.address.length); s2--)
                  ;
            }
            if (!c.text.length && c.comment.length && (c.text = c.comment, c.comment = []), c.address.length > 1 && (c.text = c.text.concat(c.address.splice(1))), c.text = c.text.join(" "), c.address = c.address.join(" "), !c.address && o2)
              return [];
            a2 = { address: c.address || c.text || "", name: c.text || c.address || "" }, a2.address === a2.name && ((a2.address || "").match(/@/) ? a2.name = "" : a2.address = ""), p.push(a2);
          }
          return p;
        }(t3), t3.length && (r = r.concat(t3));
      }), a.flatten) {
        let e4 = [], t3 = (i3) => {
          i3.forEach((i4) => {
            if (i4.group)
              return t3(i4.group);
            e4.push(i4);
          });
        };
        return t3(r), e4;
      }
      return r;
    };
  }, 4449: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    function s(e3) {
      return "string" == typeof e3 && (e3 = Buffer.from(e3, "utf-8")), e3.toString("base64");
    }
    function n(e3, t3) {
      if (t3 = t3 || 76, (e3 = (e3 || "").toString()).length <= t3)
        return e3;
      let i3 = [], a2 = 0, s2 = 1024 * t3;
      for (; a2 < e3.length; ) {
        let n2 = e3.substr(a2, s2).replace(new RegExp(".{" + t3 + "}", "g"), "$&\r\n").trim();
        i3.push(n2), a2 += s2;
      }
      return i3.join("\r\n").trim();
    }
    e2.exports = { encode: s, wrap: n, Encoder: class extends a {
      constructor(e3) {
        super(), this.options = e3 || {}, false !== this.options.lineLength && (this.options.lineLength = this.options.lineLength || 76), this._curLine = "", this._remainingBytes = false, this.inputBytes = 0, this.outputBytes = 0;
      }
      _transform(e3, t3, i3) {
        if ("buffer" !== t3 && (e3 = Buffer.from(e3, t3)), !e3 || !e3.length)
          return setImmediate(i3);
        this.inputBytes += e3.length, this._remainingBytes && this._remainingBytes.length && (e3 = Buffer.concat([this._remainingBytes, e3], this._remainingBytes.length + e3.length), this._remainingBytes = false), e3.length % 3 ? (this._remainingBytes = e3.slice(e3.length - e3.length % 3), e3 = e3.slice(0, e3.length - e3.length % 3)) : this._remainingBytes = false;
        let a2 = this._curLine + s(e3);
        if (this.options.lineLength) {
          a2 = n(a2, this.options.lineLength);
          let e4 = a2.lastIndexOf("\n");
          e4 < 0 ? (this._curLine = a2, a2 = "") : e4 === a2.length - 1 ? this._curLine = "" : (this._curLine = a2.substr(e4 + 1), a2 = a2.substr(0, e4 + 1));
        }
        a2 && (this.outputBytes += a2.length, this.push(Buffer.from(a2, "ascii"))), setImmediate(i3);
      }
      _flush(e3) {
        this._remainingBytes && this._remainingBytes.length && (this._curLine += s(this._remainingBytes)), this._curLine && (this._curLine = n(this._curLine, this.options.lineLength), this.outputBytes += this._curLine.length, this.push(this._curLine, "ascii"), this._curLine = ""), e3();
      }
    } };
  }, 8573: (e2, t2, i2) => {
    "use strict";
    const a = i2(8460), s = i2(3755), n = i2(4184), o = i2(2203).PassThrough, r = i2(9896), p = i2(6928), c = i2(6982);
    class l {
      constructor(e3, t3, i3, a2) {
        this.options = e3 || {}, this.keys = t3, this.cacheTreshold = Number(this.options.cacheTreshold) || 131072, this.hashAlgo = this.options.hashAlgo || "sha256", this.cacheDir = this.options.cacheDir || false, this.chunks = [], this.chunklen = 0, this.readPos = 0, this.cachePath = !!this.cacheDir && p.join(this.cacheDir, "message." + Date.now() + "-" + c.randomBytes(14).toString("hex")), this.cache = false, this.headers = false, this.bodyHash = false, this.parser = false, this.relaxedBody = false, this.input = i3, this.output = a2, this.output.usingCache = false, this.hasErrored = false, this.input.on("error", (e4) => {
          this.hasErrored = true, this.cleanup(), a2.emit("error", e4);
        });
      }
      cleanup() {
        this.cache && this.cachePath && r.unlink(this.cachePath, () => false);
      }
      createReadCache() {
        this.cache = r.createReadStream(this.cachePath), this.cache.once("error", (e3) => {
          this.cleanup(), this.output.emit("error", e3);
        }), this.cache.once("close", () => {
          this.cleanup();
        }), this.cache.pipe(this.output);
      }
      sendNextChunk() {
        if (this.hasErrored)
          return;
        if (this.readPos >= this.chunks.length)
          return this.cache ? this.createReadCache() : this.output.end();
        let e3 = this.chunks[this.readPos++];
        if (false === this.output.write(e3))
          return this.output.once("drain", () => {
            this.sendNextChunk();
          });
        setImmediate(() => this.sendNextChunk());
      }
      sendSignedOutput() {
        let e3 = 0, t3 = () => {
          if (e3 >= this.keys.length)
            return this.output.write(this.parser.rawHeaders), setImmediate(() => this.sendNextChunk());
          let i3 = this.keys[e3++], a2 = n(this.headers, this.hashAlgo, this.bodyHash, { domainName: i3.domainName, keySelector: i3.keySelector, privateKey: i3.privateKey, headerFieldNames: this.options.headerFieldNames, skipFields: this.options.skipFields });
          return a2 && this.output.write(Buffer.from(a2 + "\r\n")), setImmediate(t3);
        };
        if (this.bodyHash && this.headers)
          return t3();
        this.output.write(this.parser.rawHeaders), this.sendNextChunk();
      }
      createWriteCache() {
        this.output.usingCache = true, this.cache = r.createWriteStream(this.cachePath), this.cache.once("error", (e3) => {
          this.cleanup(), this.relaxedBody.unpipe(this.cache), this.relaxedBody.on("readable", () => {
            for (; null !== this.relaxedBody.read(); )
              ;
          }), this.hasErrored = true, this.output.emit("error", e3);
        }), this.cache.once("close", () => {
          this.sendSignedOutput();
        }), this.relaxedBody.removeAllListeners("readable"), this.relaxedBody.pipe(this.cache);
      }
      signStream() {
        this.parser = new a(), this.relaxedBody = new s({ hashAlgo: this.hashAlgo }), this.parser.on("headers", (e3) => {
          this.headers = e3;
        }), this.relaxedBody.on("hash", (e3) => {
          this.bodyHash = e3;
        }), this.relaxedBody.on("readable", () => {
          let e3;
          if (!this.cache) {
            for (; null !== (e3 = this.relaxedBody.read()); )
              if (this.chunks.push(e3), this.chunklen += e3.length, this.chunklen >= this.cacheTreshold && this.cachePath)
                return this.createWriteCache();
          }
        }), this.relaxedBody.on("end", () => {
          this.cache || this.sendSignedOutput();
        }), this.parser.pipe(this.relaxedBody), setImmediate(() => this.input.pipe(this.parser));
      }
    }
    e2.exports = class {
      constructor(e3) {
        this.options = e3 || {}, this.keys = [].concat(this.options.keys || { domainName: e3.domainName, keySelector: e3.keySelector, privateKey: e3.privateKey });
      }
      sign(e3, t3) {
        let i3 = new o(), a2 = e3, s2 = false;
        Buffer.isBuffer(e3) ? (s2 = e3, a2 = new o()) : "string" == typeof e3 && (s2 = Buffer.from(e3), a2 = new o());
        let n2 = this.options;
        t3 && Object.keys(t3).length && (n2 = {}, Object.keys(this.options || {}).forEach((e4) => {
          n2[e4] = this.options[e4];
        }), Object.keys(t3 || {}).forEach((e4) => {
          e4 in n2 || (n2[e4] = t3[e4]);
        }));
        let r2 = new l(n2, this.keys, a2, i3);
        return setImmediate(() => {
          r2.signStream(), s2 && setImmediate(() => {
            a2.end(s2);
          });
        }), i3;
      }
    };
  }, 8460: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    e2.exports = class extends a {
      constructor(e3) {
        super(e3), this.lastBytes = Buffer.alloc(4), this.headersParsed = false, this.headerBytes = 0, this.headerChunks = [], this.rawHeaders = false, this.bodySize = 0;
      }
      updateLastBytes(e3) {
        let t3 = this.lastBytes.length, i3 = Math.min(e3.length, t3);
        for (let e4 = 0, a2 = t3 - i3; e4 < a2; e4++)
          this.lastBytes[e4] = this.lastBytes[e4 + i3];
        for (let a2 = 1; a2 <= i3; a2++)
          this.lastBytes[t3 - a2] = e3[e3.length - a2];
      }
      checkHeaders(e3) {
        if (this.headersParsed)
          return true;
        let t3 = this.lastBytes.length, i3 = 0;
        this.curLinePos = 0;
        for (let a2 = 0, s = this.lastBytes.length + e3.length; a2 < s; a2++) {
          let s2;
          if (s2 = a2 < t3 ? this.lastBytes[a2] : e3[a2 - t3], 10 === s2 && a2) {
            let s3 = a2 - 1 < t3 ? this.lastBytes[a2 - 1] : e3[a2 - 1 - t3], n = a2 > 1 && (a2 - 2 < t3 ? this.lastBytes[a2 - 2] : e3[a2 - 2 - t3]);
            if (10 === s3) {
              this.headersParsed = true, i3 = a2 - t3 + 1, this.headerBytes += i3;
              break;
            }
            if (13 === s3 && 10 === n) {
              this.headersParsed = true, i3 = a2 - t3 + 1, this.headerBytes += i3;
              break;
            }
          }
        }
        if (this.headersParsed) {
          if (this.headerChunks.push(e3.slice(0, i3)), this.rawHeaders = Buffer.concat(this.headerChunks, this.headerBytes), this.headerChunks = null, this.emit("headers", this.parseHeaders()), e3.length - 1 > i3) {
            let t4 = e3.slice(i3);
            this.bodySize += t4.length, setImmediate(() => this.push(t4));
          }
          return false;
        }
        return this.headerBytes += e3.length, this.headerChunks.push(e3), this.updateLastBytes(e3), false;
      }
      _transform(e3, t3, i3) {
        if (!e3 || !e3.length)
          return i3();
        let a2;
        "string" == typeof e3 && (e3 = Buffer.from(e3, t3));
        try {
          a2 = this.checkHeaders(e3);
        } catch (e4) {
          return i3(e4);
        }
        a2 && (this.bodySize += e3.length, this.push(e3)), setImmediate(i3);
      }
      _flush(e3) {
        if (this.headerChunks) {
          let e4 = Buffer.concat(this.headerChunks, this.headerBytes);
          this.bodySize += e4.length, this.push(e4), this.headerChunks = null;
        }
        e3();
      }
      parseHeaders() {
        let e3 = (this.rawHeaders || "").toString().split(/\r?\n/);
        for (let t3 = e3.length - 1; t3 > 0; t3--)
          /^\s/.test(e3[t3]) && (e3[t3 - 1] += "\n" + e3[t3], e3.splice(t3, 1));
        return e3.filter((e4) => e4.trim()).map((e4) => ({ key: e4.substr(0, e4.indexOf(":")).trim().toLowerCase(), line: e4 }));
      }
    };
  }, 3755: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform, s = i2(6982);
    e2.exports = class extends a {
      constructor(e3) {
        super(), e3 = e3 || {}, this.chunkBuffer = [], this.chunkBufferLen = 0, this.bodyHash = s.createHash(e3.hashAlgo || "sha1"), this.remainder = "", this.byteLength = 0, this.debug = e3.debug, this._debugBody = !!e3.debug && [];
      }
      updateHash(e3) {
        let t3, i3 = "", a2 = "file";
        for (let t4 = e3.length - 1; t4 >= 0; t4--) {
          let s3 = e3[t4];
          if ("file" !== a2 || 10 !== s3 && 13 !== s3)
            if ("file" !== a2 || 9 !== s3 && 32 !== s3) {
              if (("line" !== a2 || 9 !== s3 && 32 !== s3) && ("file" === a2 || "line" === a2) && (a2 = "body", t4 === e3.length - 1))
                break;
            } else
              a2 = "line";
          if (0 === t4) {
            if ("file" === a2 && (!this.remainder || /[\r\n]$/.test(this.remainder)) || "line" === a2 && (!this.remainder || /[ \t]$/.test(this.remainder)))
              return void (this.remainder += e3.toString("binary"));
            if ("line" === a2 || "file" === a2) {
              i3 = e3.toString("binary"), e3 = false;
              break;
            }
          }
          if ("body" === a2) {
            i3 = e3.slice(t4 + 1).toString("binary"), e3 = e3.slice(0, t4 + 1);
            break;
          }
        }
        let s2 = !!this.remainder;
        if (e3 && !s2)
          for (let t4 = 0, i4 = e3.length; t4 < i4; t4++) {
            if (t4 && 10 === e3[t4] && 13 !== e3[t4 - 1]) {
              s2 = true;
              break;
            }
            if (t4 && 13 === e3[t4] && 32 === e3[t4 - 1]) {
              s2 = true;
              break;
            }
            if (t4 && 32 === e3[t4] && 32 === e3[t4 - 1]) {
              s2 = true;
              break;
            }
            if (9 === e3[t4]) {
              s2 = true;
              break;
            }
          }
        s2 ? (t3 = this.remainder + (e3 ? e3.toString("binary") : ""), this.remainder = i3, t3 = t3.replace(/\r?\n/g, "\n").replace(/[ \t]*$/gm, "").replace(/[ \t]+/gm, " ").replace(/\n/g, "\r\n"), e3 = Buffer.from(t3, "binary")) : i3 && (this.remainder = i3), this.debug && this._debugBody.push(e3), this.bodyHash.update(e3);
      }
      _transform(e3, t3, i3) {
        if (!e3 || !e3.length)
          return i3();
        "string" == typeof e3 && (e3 = Buffer.from(e3, t3)), this.updateHash(e3), this.byteLength += e3.length, this.push(e3), i3();
      }
      _flush(e3) {
        /[\r\n]$/.test(this.remainder) && this.byteLength > 2 && this.bodyHash.update(Buffer.from("\r\n")), this.byteLength || this.push(Buffer.from("\r\n")), this.emit("hash", this.bodyHash.digest("base64"), !!this.debug && Buffer.concat(this._debugBody)), e3();
      }
    };
  }, 4184: (e2, t2, i2) => {
    "use strict";
    const a = i2(6093), s = i2(9480), n = i2(6982);
    function o(e3, t3, i3) {
      let a2 = /* @__PURE__ */ new Set(), s2 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Map();
      (i3 || "").toLowerCase().split(":").forEach((e4) => {
        s2.add(e4.trim());
      }), (t3 || "").toLowerCase().split(":").filter((e4) => !s2.has(e4.trim())).forEach((e4) => {
        a2.add(e4.trim());
      });
      for (let t4 = e3.length - 1; t4 >= 0; t4--) {
        let i4 = e3[t4];
        a2.has(i4.key) && !n2.has(i4.key) && n2.set(i4.key, r(i4.line));
      }
      let o2 = [], p = [];
      return a2.forEach((e4) => {
        n2.has(e4) && (p.push(e4), o2.push(e4 + ":" + n2.get(e4)));
      }), { headers: o2.join("\r\n") + "\r\n", fieldNames: p.join(":") };
    }
    function r(e3) {
      return e3.substr(e3.indexOf(":") + 1).replace(/\r?\n/g, "").replace(/\s+/g, " ").trim();
    }
    e2.exports = (e3, t3, i3, p) => {
      let c, l, d = o(e3, (p = p || {}).headerFieldNames || "From:Sender:Reply-To:Subject:Date:Message-ID:To:Cc:MIME-Version:Content-Type:Content-Transfer-Encoding:Content-ID:Content-Description:Resent-Date:Resent-From:Resent-Sender:Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:List-Id:List-Help:List-Unsubscribe:List-Subscribe:List-Post:List-Owner:List-Archive", p.skipFields), h = function(e4, t4, i4, n2, o2) {
        let r2 = ["v=1", "a=rsa-" + n2, "c=relaxed/relaxed", "d=" + a.toASCII(e4), "q=dns/txt", "s=" + t4, "bh=" + o2, "h=" + i4].join("; ");
        return s.foldLines("DKIM-Signature: " + r2, 76) + ";\r\n b=";
      }(p.domainName, p.keySelector, d.fieldNames, t3, i3);
      d.headers += "dkim-signature:" + r(h), c = n.createSign(("rsa-" + t3).toUpperCase()), c.update(d.headers);
      try {
        l = c.sign(p.privateKey, "base64");
      } catch (e4) {
        return false;
      }
      return h + l.replace(/(^.{73}|.{75}(?!\r?\n|\r))/g, "$&\r\n ").trim();
    }, e2.exports.relaxedHeaders = o;
  }, 4601: (e2, t2, i2) => {
    "use strict";
    const a = i2(7016);
    e2.exports = class {
      constructor(e3) {
        this.options = e3 || {}, this.cookies = [];
      }
      set(e3, t3) {
        let i3, s = a.parse(t3 || ""), n = this.parse(e3);
        return n.domain ? (i3 = n.domain.replace(/^\./, ""), (s.hostname.length < i3.length || ("." + s.hostname).substr(1 - i3.length) !== "." + i3) && (n.domain = s.hostname)) : n.domain = s.hostname, n.path || (n.path = this.getPath(s.pathname)), n.expires || (n.expires = new Date(Date.now() + 1e3 * (Number(this.options.sessionTimeout || 1800) || 1800))), this.add(n);
      }
      get(e3) {
        return this.list(e3).map((e4) => e4.name + "=" + e4.value).join("; ");
      }
      list(e3) {
        let t3, i3, a2 = [];
        for (t3 = this.cookies.length - 1; t3 >= 0; t3--)
          i3 = this.cookies[t3], this.isExpired(i3) ? this.cookies.splice(t3, t3) : this.match(i3, e3) && a2.unshift(i3);
        return a2;
      }
      parse(e3) {
        let t3 = {};
        return (e3 || "").toString().split(";").forEach((e4) => {
          let i3, a2 = e4.split("="), s = a2.shift().trim().toLowerCase(), n = a2.join("=").trim();
          if (s)
            switch (s) {
              case "expires":
                n = new Date(n), "Invalid Date" !== n.toString() && (t3.expires = n);
                break;
              case "path":
                t3.path = n;
                break;
              case "domain":
                i3 = n.toLowerCase(), i3.length && "." !== i3.charAt(0) && (i3 = "." + i3), t3.domain = i3;
                break;
              case "max-age":
                t3.expires = new Date(Date.now() + 1e3 * (Number(n) || 0));
                break;
              case "secure":
                t3.secure = true;
                break;
              case "httponly":
                t3.httponly = true;
                break;
              default:
                t3.name || (t3.name = s, t3.value = n);
            }
        }), t3;
      }
      match(e3, t3) {
        let i3 = a.parse(t3 || "");
        return (i3.hostname === e3.domain || "." === e3.domain.charAt(0) && ("." + i3.hostname).substr(-e3.domain.length) === e3.domain) && this.getPath(i3.pathname).substr(0, e3.path.length) === e3.path && (!e3.secure || "https:" === i3.protocol);
      }
      add(e3) {
        let t3, i3;
        if (!e3 || !e3.name)
          return false;
        for (t3 = 0, i3 = this.cookies.length; t3 < i3; t3++)
          if (this.compare(this.cookies[t3], e3))
            return this.isExpired(e3) ? (this.cookies.splice(t3, 1), false) : (this.cookies[t3] = e3, true);
        return this.isExpired(e3) || this.cookies.push(e3), true;
      }
      compare(e3, t3) {
        return e3.name === t3.name && e3.path === t3.path && e3.domain === t3.domain && e3.secure === t3.secure && e3.httponly == e3.httponly;
      }
      isExpired(e3) {
        return e3.expires && e3.expires < /* @__PURE__ */ new Date() || !e3.value;
      }
      getPath(e3) {
        let t3 = (e3 || "/").split("/");
        return t3.pop(), t3 = t3.join("/").trim(), "/" !== t3.charAt(0) && (t3 = "/" + t3), "/" !== t3.substr(-1) && (t3 += "/"), t3;
      }
    };
  }, 1358: (e2, t2, i2) => {
    "use strict";
    const a = i2(8611), s = i2(5692), n = i2(7016), o = i2(3106), r = i2(2203).PassThrough, p = i2(4601), c = i2(2290), l = i2(9278);
    function d(e3, t3) {
      (t3 = t3 || {}).fetchRes = t3.fetchRes || new r(), t3.cookies = t3.cookies || new p(), t3.redirects = t3.redirects || 0, t3.maxRedirects = isNaN(t3.maxRedirects) ? 5 : t3.maxRedirects, t3.cookie && ([].concat(t3.cookie || []).forEach((i4) => {
        t3.cookies.set(i4, e3);
      }), t3.cookie = false);
      let i3, h, m, u = t3.fetchRes, f = n.parse(e3), g = (t3.method || "").toString().trim().toUpperCase() || "GET", x = false, v = "https:" === f.protocol ? s : a, y = { "accept-encoding": "gzip,deflate", "user-agent": "nodemailer/" + c.version };
      if (Object.keys(t3.headers || {}).forEach((e4) => {
        y[e4.toLowerCase().trim()] = t3.headers[e4];
      }), t3.userAgent && (y["user-agent"] = t3.userAgent), f.auth && (y.Authorization = "Basic " + Buffer.from(f.auth).toString("base64")), (i3 = t3.cookies.get(e3)) && (y.cookie = i3), t3.body) {
        if (false !== t3.contentType && (y["Content-Type"] = t3.contentType || "application/x-www-form-urlencoded"), "function" == typeof t3.body.pipe)
          y["Transfer-Encoding"] = "chunked", h = t3.body, h.on("error", (t4) => {
            x || (x = true, t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4));
          });
        else {
          if (t3.body instanceof Buffer)
            h = t3.body;
          else if ("object" == typeof t3.body)
            try {
              h = Buffer.from(Object.keys(t3.body).map((e4) => {
                let i4 = t3.body[e4].toString().trim();
                return encodeURIComponent(e4) + "=" + encodeURIComponent(i4);
              }).join("&"));
            } catch (t4) {
              if (x)
                return;
              return x = true, t4.type = "FETCH", t4.sourceUrl = e3, void u.emit("error", t4);
            }
          else
            h = Buffer.from(t3.body.toString().trim());
          y["Content-Type"] = t3.contentType || "application/x-www-form-urlencoded", y["Content-Length"] = h.length;
        }
        g = (t3.method || "").toString().trim().toUpperCase() || "POST";
      }
      let b = { method: g, host: f.hostname, path: f.path, port: f.port ? f.port : "https:" === f.protocol ? 443 : 80, headers: y, rejectUnauthorized: false, agent: false };
      t3.tls && Object.keys(t3.tls).forEach((e4) => {
        b[e4] = t3.tls[e4];
      }), "https:" !== f.protocol || !f.hostname || f.hostname === b.host || l.isIP(f.hostname) || b.servername || (b.servername = f.hostname);
      try {
        m = v.request(b);
      } catch (t4) {
        return x = true, setImmediate(() => {
          t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4);
        }), u;
      }
      return t3.timeout && m.setTimeout(t3.timeout, () => {
        if (x)
          return;
        x = true, m.abort();
        let t4 = new Error("Request Timeout");
        t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4);
      }), m.on("error", (t4) => {
        x || (x = true, t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4));
      }), m.on("response", (i4) => {
        let a2;
        if (!x) {
          switch (i4.headers["content-encoding"]) {
            case "gzip":
            case "deflate":
              a2 = o.createUnzip();
          }
          if (i4.headers["set-cookie"] && [].concat(i4.headers["set-cookie"] || []).forEach((i5) => {
            t3.cookies.set(i5, e3);
          }), [301, 302, 303, 307, 308].includes(i4.statusCode) && i4.headers.location) {
            if (t3.redirects++, t3.redirects > t3.maxRedirects) {
              x = true;
              let t4 = new Error("Maximum redirect count exceeded");
              return t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4), void m.abort();
            }
            return t3.method = "GET", t3.body = false, d(n.resolve(e3, i4.headers.location), t3);
          }
          if (u.statusCode = i4.statusCode, u.headers = i4.headers, i4.statusCode >= 300 && !t3.allowErrorResponse) {
            x = true;
            let t4 = new Error("Invalid status code " + i4.statusCode);
            return t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4), void m.abort();
          }
          i4.on("error", (t4) => {
            x || (x = true, t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4), m.abort());
          }), a2 ? (i4.pipe(a2).pipe(u), a2.on("error", (t4) => {
            x || (x = true, t4.type = "FETCH", t4.sourceUrl = e3, u.emit("error", t4), m.abort());
          })) : i4.pipe(u);
        }
      }), setImmediate(() => {
        if (h)
          try {
            if ("function" == typeof h.pipe)
              return h.pipe(m);
            m.write(h);
          } catch (t4) {
            return x = true, t4.type = "FETCH", t4.sourceUrl = e3, void u.emit("error", t4);
          }
        m.end();
      }), u;
    }
    e2.exports = function(e3, t3) {
      return d(e3, t3);
    }, e2.exports.Cookies = p;
  }, 2151: (e2, t2, i2) => {
    "use strict";
    const a = i2(2290), s = i2(6047);
    e2.exports = class {
      constructor(e3) {
        e3 = e3 || {}, this.options = e3 || {}, this.name = "JSONTransport", this.version = a.version, this.logger = s.getLogger(this.options, { component: this.options.component || "json-transport" });
      }
      send(e3, t3) {
        e3.message.keepBcc = true;
        let i3 = e3.data.envelope || e3.message.getEnvelope(), a2 = e3.message.messageId(), s2 = [].concat(i3.to || []);
        s2.length > 3 && s2.push("...and " + s2.splice(2).length + " more"), this.logger.info({ tnx: "send", messageId: a2 }, "Composing JSON structure of %s to <%s>", a2, s2.join(", ")), setImmediate(() => {
          e3.normalize((e4, s3) => e4 ? (this.logger.error({ err: e4, tnx: "send", messageId: a2 }, "Failed building JSON structure for %s. %s", a2, e4.message), t3(e4)) : (delete s3.envelope, delete s3.normalizedHeaders, t3(null, { envelope: i3, messageId: a2, message: this.options.skipEncoding ? s3 : JSON.stringify(s3) })));
        });
      }
    };
  }, 182: (e2, t2, i2) => {
    "use strict";
    const a = i2(9593), s = i2(9480), n = i2(6047).parseDataURI;
    e2.exports = class {
      constructor(e3) {
        this.mail = e3 || {}, this.message = false;
      }
      compile() {
        return this._alternatives = this.getAlternatives(), this._htmlNode = this._alternatives.filter((e3) => /^text\/html\b/i.test(e3.contentType)).pop(), this._attachments = this.getAttachments(!!this._htmlNode), this._useRelated = !(!this._htmlNode || !this._attachments.related.length), this._useAlternative = this._alternatives.length > 1, this._useMixed = this._attachments.attached.length > 1 || this._alternatives.length && 1 === this._attachments.attached.length, this.mail.raw ? this.message = new a("message/rfc822", { newline: this.mail.newline }).setRaw(this.mail.raw) : this._useMixed ? this.message = this._createMixed() : this._useAlternative ? this.message = this._createAlternative() : this._useRelated ? this.message = this._createRelated() : this.message = this._createContentNode(false, [].concat(this._alternatives || []).concat(this._attachments.attached || []).shift() || { contentType: "text/plain", content: "" }), this.mail.headers && this.message.addHeader(this.mail.headers), ["from", "sender", "to", "cc", "bcc", "reply-to", "in-reply-to", "references", "subject", "message-id", "date"].forEach((e3) => {
          let t3 = e3.replace(/-(\w)/g, (e4, t4) => t4.toUpperCase());
          this.mail[t3] && this.message.setHeader(e3, this.mail[t3]);
        }), this.mail.envelope && this.message.setEnvelope(this.mail.envelope), this.message.messageId(), this.message;
      }
      getAttachments(e3) {
        let t3, i3, a2 = [].concat(this.mail.attachments || []).map((e4, t4) => {
          let i4, a3 = /^message\//i.test(e4.contentType);
          /^data:/i.test(e4.path || e4.href) && (e4 = this._processDataUrl(e4));
          let n2 = e4.contentType || s.detectMimeType(e4.filename || e4.path || e4.href || "bin"), o = /^image\//i.test(n2);
          return i4 = { contentType: n2, contentDisposition: e4.contentDisposition || (a3 || o && e4.cid ? "inline" : "attachment"), contentTransferEncoding: "contentTransferEncoding" in e4 ? e4.contentTransferEncoding : "base64" }, e4.filename ? i4.filename = e4.filename : a3 || false === e4.filename || (i4.filename = (e4.path || e4.href || "").split("/").pop().split("?").shift() || "attachment-" + (t4 + 1), i4.filename.indexOf(".") < 0 && (i4.filename += "." + s.detectExtension(i4.contentType))), /^https?:\/\//i.test(e4.path) && (e4.href = e4.path, e4.path = void 0), e4.cid && (i4.cid = e4.cid), e4.raw ? i4.raw = e4.raw : e4.path ? i4.content = { path: e4.path } : e4.href ? i4.content = { href: e4.href, httpHeaders: e4.httpHeaders } : i4.content = e4.content || "", e4.encoding && (i4.encoding = e4.encoding), e4.headers && (i4.headers = e4.headers), i4;
        });
        return this.mail.icalEvent && (t3 = "object" == typeof this.mail.icalEvent && (this.mail.icalEvent.content || this.mail.icalEvent.path || this.mail.icalEvent.href || this.mail.icalEvent.raw) ? this.mail.icalEvent : { content: this.mail.icalEvent }, i3 = {}, Object.keys(t3).forEach((e4) => {
          i3[e4] = t3[e4];
        }), i3.contentType = "application/ics", i3.headers || (i3.headers = {}), i3.filename = i3.filename || "invite.ics", i3.headers["Content-Disposition"] = "attachment", i3.headers["Content-Transfer-Encoding"] = "base64"), e3 ? { attached: a2.filter((e4) => !e4.cid).concat(i3 || []), related: a2.filter((e4) => !!e4.cid) } : { attached: a2.concat(i3 || []), related: [] };
      }
      getAlternatives() {
        let e3, t3, i3, a2, n2, o, r = [];
        return this.mail.text && (e3 = "object" == typeof this.mail.text && (this.mail.text.content || this.mail.text.path || this.mail.text.href || this.mail.text.raw) ? this.mail.text : { content: this.mail.text }, e3.contentType = "text/plain; charset=utf-8"), this.mail.watchHtml && (i3 = "object" == typeof this.mail.watchHtml && (this.mail.watchHtml.content || this.mail.watchHtml.path || this.mail.watchHtml.href || this.mail.watchHtml.raw) ? this.mail.watchHtml : { content: this.mail.watchHtml }, i3.contentType = "text/watch-html; charset=utf-8"), this.mail.amp && (a2 = "object" == typeof this.mail.amp && (this.mail.amp.content || this.mail.amp.path || this.mail.amp.href || this.mail.amp.raw) ? this.mail.amp : { content: this.mail.amp }, a2.contentType = "text/x-amp-html; charset=utf-8"), this.mail.icalEvent && (n2 = "object" == typeof this.mail.icalEvent && (this.mail.icalEvent.content || this.mail.icalEvent.path || this.mail.icalEvent.href || this.mail.icalEvent.raw) ? this.mail.icalEvent : { content: this.mail.icalEvent }, o = {}, Object.keys(n2).forEach((e4) => {
          o[e4] = n2[e4];
        }), o.content && "object" == typeof o.content && (o.content._resolve = true), o.filename = false, o.contentType = "text/calendar; charset=utf-8; method=" + (o.method || "PUBLISH").toString().trim().toUpperCase(), o.headers || (o.headers = {})), this.mail.html && (t3 = "object" == typeof this.mail.html && (this.mail.html.content || this.mail.html.path || this.mail.html.href || this.mail.html.raw) ? this.mail.html : { content: this.mail.html }, t3.contentType = "text/html; charset=utf-8"), [].concat(e3 || []).concat(i3 || []).concat(a2 || []).concat(t3 || []).concat(o || []).concat(this.mail.alternatives || []).forEach((e4) => {
          let t4;
          /^data:/i.test(e4.path || e4.href) && (e4 = this._processDataUrl(e4)), t4 = { contentType: e4.contentType || s.detectMimeType(e4.filename || e4.path || e4.href || "txt"), contentTransferEncoding: e4.contentTransferEncoding }, e4.filename && (t4.filename = e4.filename), /^https?:\/\//i.test(e4.path) && (e4.href = e4.path, e4.path = void 0), e4.raw ? t4.raw = e4.raw : e4.path ? t4.content = { path: e4.path } : e4.href ? t4.content = { href: e4.href } : t4.content = e4.content || "", e4.encoding && (t4.encoding = e4.encoding), e4.headers && (t4.headers = e4.headers), r.push(t4);
        }), r;
      }
      _createMixed(e3) {
        let t3;
        return t3 = e3 ? e3.createChild("multipart/mixed", { disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }) : new a("multipart/mixed", { baseBoundary: this.mail.baseBoundary, textEncoding: this.mail.textEncoding, boundaryPrefix: this.mail.boundaryPrefix, disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }), this._useAlternative ? this._createAlternative(t3) : this._useRelated && this._createRelated(t3), [].concat(!this._useAlternative && this._alternatives || []).concat(this._attachments.attached || []).forEach((e4) => {
          this._useRelated && e4 === this._htmlNode || this._createContentNode(t3, e4);
        }), t3;
      }
      _createAlternative(e3) {
        let t3;
        return t3 = e3 ? e3.createChild("multipart/alternative", { disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }) : new a("multipart/alternative", { baseBoundary: this.mail.baseBoundary, textEncoding: this.mail.textEncoding, boundaryPrefix: this.mail.boundaryPrefix, disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }), this._alternatives.forEach((e4) => {
          this._useRelated && this._htmlNode === e4 ? this._createRelated(t3) : this._createContentNode(t3, e4);
        }), t3;
      }
      _createRelated(e3) {
        let t3;
        return t3 = e3 ? e3.createChild('multipart/related; type="text/html"', { disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }) : new a('multipart/related; type="text/html"', { baseBoundary: this.mail.baseBoundary, textEncoding: this.mail.textEncoding, boundaryPrefix: this.mail.boundaryPrefix, disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }), this._createContentNode(t3, this._htmlNode), this._attachments.related.forEach((e4) => this._createContentNode(t3, e4)), t3;
      }
      _createContentNode(e3, t3) {
        let i3;
        (t3 = t3 || {}).content = t3.content || "";
        let s2 = (t3.encoding || "utf8").toString().toLowerCase().replace(/[-_\s]/g, "");
        return i3 = e3 ? e3.createChild(t3.contentType, { filename: t3.filename, textEncoding: this.mail.textEncoding, disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }) : new a(t3.contentType, { filename: t3.filename, baseBoundary: this.mail.baseBoundary, textEncoding: this.mail.textEncoding, boundaryPrefix: this.mail.boundaryPrefix, disableUrlAccess: this.mail.disableUrlAccess, disableFileAccess: this.mail.disableFileAccess, normalizeHeaderKey: this.mail.normalizeHeaderKey, newline: this.mail.newline }), t3.headers && i3.addHeader(t3.headers), t3.cid && i3.setHeader("Content-Id", "<" + t3.cid.replace(/[<>]/g, "") + ">"), t3.contentTransferEncoding ? i3.setHeader("Content-Transfer-Encoding", t3.contentTransferEncoding) : this.mail.encoding && /^text\//i.test(t3.contentType) && i3.setHeader("Content-Transfer-Encoding", this.mail.encoding), /^text\//i.test(t3.contentType) && !t3.contentDisposition || i3.setHeader("Content-Disposition", t3.contentDisposition || (t3.cid && /^image\//i.test(t3.contentType) ? "inline" : "attachment")), "string" != typeof t3.content || ["utf8", "usascii", "ascii"].includes(s2) || (t3.content = Buffer.from(t3.content, s2)), t3.raw ? i3.setRaw(t3.raw) : i3.setContent(t3.content), i3;
      }
      _processDataUrl(e3) {
        let t3;
        return (e3.path || e3.href).match(/^data:/) && (t3 = n(e3.path || e3.href)), t3 ? (e3.content = t3.data, e3.contentType = e3.contentType || t3.contentType, "path" in e3 && (e3.path = false), "href" in e3 && (e3.href = false), e3) : e3;
      }
    };
  }, 570: (e2, t2, i2) => {
    "use strict";
    const a = i2(4434), s = i2(6047), n = i2(7922), o = i2(182), r = i2(8573), p = i2(1666), c = i2(9023), l = i2(7016), d = i2(2290), h = i2(1885), m = i2(9278), u = i2(2250), f = i2(6982);
    e2.exports = class extends a {
      constructor(e3, t3, i3) {
        super(), this.options = t3 || {}, this._defaults = i3 || {}, this._defaultPlugins = { compile: [(...e4) => this._convertDataImages(...e4)], stream: [] }, this._userPlugins = { compile: [], stream: [] }, this.meta = /* @__PURE__ */ new Map(), this.dkim = !!this.options.dkim && new r(this.options.dkim), this.transporter = e3, this.transporter.mailer = this, this.logger = s.getLogger(this.options, { component: this.options.component || "mail" }), this.logger.debug({ tnx: "create" }, "Creating transport: %s", this.getVersionString()), "function" == typeof this.transporter.on && (this.transporter.on("log", (e4) => {
          this.logger.debug({ tnx: "transport" }, "%s: %s", e4.type, e4.message);
        }), this.transporter.on("error", (e4) => {
          this.logger.error({ err: e4, tnx: "transport" }, "Transport Error: %s", e4.message), this.emit("error", e4);
        }), this.transporter.on("idle", (...e4) => {
          this.emit("idle", ...e4);
        })), ["close", "isIdle", "verify"].forEach((e4) => {
          this[e4] = (...t4) => "function" == typeof this.transporter[e4] ? ("verify" === e4 && "function" == typeof this.getSocket && (this.transporter.getSocket = this.getSocket, this.getSocket = false), this.transporter[e4](...t4)) : (this.logger.warn({ tnx: "transport", methodName: e4 }, "Non existing method %s called for transport", e4), false);
        }), this.options.proxy && "string" == typeof this.options.proxy && this.setupProxy(this.options.proxy);
      }
      use(e3, t3) {
        return e3 = (e3 || "").toString(), this._userPlugins.hasOwnProperty(e3) ? this._userPlugins[e3].push(t3) : this._userPlugins[e3] = [t3], this;
      }
      sendMail(e3, t3 = null) {
        let i3;
        t3 || (i3 = new Promise((e4, i4) => {
          t3 = s.callbackPromise(e4, i4);
        })), "function" == typeof this.getSocket && (this.transporter.getSocket = this.getSocket, this.getSocket = false);
        let a2 = new h(this, e3);
        return this.logger.debug({ tnx: "transport", name: this.transporter.name, version: this.transporter.version, action: "send" }, "Sending mail using %s/%s", this.transporter.name, this.transporter.version), this._processPlugins("compile", a2, (e4) => {
          if (e4)
            return this.logger.error({ err: e4, tnx: "plugin", action: "compile" }, "PluginCompile Error: %s", e4.message), t3(e4);
          a2.message = new o(a2.data).compile(), a2.setMailerHeader(), a2.setPriorityHeaders(), a2.setListHeaders(), this._processPlugins("stream", a2, (e5) => {
            if (e5)
              return this.logger.error({ err: e5, tnx: "plugin", action: "stream" }, "PluginStream Error: %s", e5.message), t3(e5);
            (a2.data.dkim || this.dkim) && a2.message.processFunc((e6) => {
              let t4 = a2.data.dkim ? new r(a2.data.dkim) : this.dkim;
              return this.logger.debug({ tnx: "DKIM", messageId: a2.message.messageId(), dkimDomains: t4.keys.map((e7) => e7.keySelector + "." + e7.domainName).join(", ") }, "Signing outgoing message with %s keys", t4.keys.length), t4.sign(e6, a2.data._dkim);
            }), this.transporter.send(a2, (...e6) => {
              e6[0] && this.logger.error({ err: e6[0], tnx: "transport", action: "send" }, "Send Error: %s", e6[0].message), t3(...e6);
            });
          });
        }), i3;
      }
      getVersionString() {
        return c.format("%s (%s; +%s; %s/%s)", d.name, d.version, d.homepage, this.transporter.name, this.transporter.version);
      }
      _processPlugins(e3, t3, i3) {
        if (e3 = (e3 || "").toString(), !this._userPlugins.hasOwnProperty(e3))
          return i3();
        let a2 = this._userPlugins[e3] || [], s2 = this._defaultPlugins[e3] || [];
        if (a2.length && this.logger.debug({ tnx: "transaction", pluginCount: a2.length, step: e3 }, "Using %s plugins for %s", a2.length, e3), a2.length + s2.length === 0)
          return i3();
        let n2 = 0, o2 = "default", r2 = () => {
          let e4 = "default" === o2 ? s2 : a2;
          if (n2 >= e4.length) {
            if ("default" !== o2 || !a2.length)
              return i3();
            o2 = "user", n2 = 0, e4 = a2;
          }
          (0, e4[n2++])(t3, (e5) => {
            if (e5)
              return i3(e5);
            r2();
          });
        };
        r2();
      }
      setupProxy(e3) {
        let t3 = l.parse(e3);
        this.getSocket = (e4, i3) => {
          let a2 = t3.protocol.replace(/:$/, "").toLowerCase();
          if (this.meta.has("proxy_handler_" + a2))
            return this.meta.get("proxy_handler_" + a2)(t3, e4, i3);
          switch (a2) {
            case "http":
            case "https":
              return void p(t3.href, e4.port, e4.host, (e5, t4) => e5 ? i3(e5) : i3(null, { connection: t4 }));
            case "socks":
            case "socks5":
            case "socks4":
            case "socks4a": {
              if (!this.meta.has("proxy_socks_module"))
                return i3(new Error("Socks module not loaded"));
              let a3 = (a4) => {
                let s2 = !!this.meta.get("proxy_socks_module").SocksClient, n2 = s2 ? this.meta.get("proxy_socks_module").SocksClient : this.meta.get("proxy_socks_module"), o2 = Number(t3.protocol.replace(/\D/g, "")) || 5, r2 = { proxy: { ipaddress: a4, port: Number(t3.port), type: o2 }, [s2 ? "destination" : "target"]: { host: e4.host, port: e4.port }, command: "connect" };
                if (t3.auth) {
                  let e5 = decodeURIComponent(t3.auth.split(":").shift()), i4 = decodeURIComponent(t3.auth.split(":").pop());
                  s2 ? (r2.proxy.userId = e5, r2.proxy.password = i4) : 4 === o2 ? r2.userid = e5 : r2.authentication = { username: e5, password: i4 };
                }
                n2.createConnection(r2, (e5, t4) => e5 ? i3(e5) : i3(null, { connection: t4.socket || t4 }));
              };
              return m.isIP(t3.hostname) ? a3(t3.hostname) : u.resolve(t3.hostname, (e5, t4) => {
                if (e5)
                  return i3(e5);
                a3(Array.isArray(t4) ? t4[0] : t4);
              });
            }
          }
          i3(new Error("Unknown proxy configuration"));
        };
      }
      _convertDataImages(e3, t3) {
        if (!this.options.attachDataUrls && !e3.data.attachDataUrls || !e3.data.html)
          return t3();
        e3.resolveContent(e3.data, "html", (i3, a2) => {
          if (i3)
            return t3(i3);
          let s2 = 0;
          a2 = (a2 || "").toString().replace(/(<img\b[^<>]{0,1024} src\s{0,20}=[\s"']{0,20})(data:([^;]+);[^"'>\s]+)/gi, (t4, i4, a3, o2) => {
            let r2 = f.randomBytes(10).toString("hex") + "@localhost";
            return e3.data.attachments || (e3.data.attachments = []), Array.isArray(e3.data.attachments) || (e3.data.attachments = [].concat(e3.data.attachments || [])), e3.data.attachments.push({ path: a3, cid: r2, filename: "image-" + ++s2 + "." + n.detectExtension(o2) }), i4 + "cid:" + r2;
          }), e3.data.html = a2, t3();
        });
      }
      set(e3, t3) {
        return this.meta.set(e3, t3);
      }
      get(e3) {
        return this.meta.get(e3);
      }
    };
  }, 1885: (e2, t2, i2) => {
    "use strict";
    const a = i2(6047), s = i2(9593), n = i2(9480);
    e2.exports = class {
      constructor(e3, t3) {
        this.mailer = e3, this.data = {}, this.message = null, t3 = t3 || {};
        let i3 = e3.options || {}, a2 = e3._defaults || {};
        Object.keys(t3).forEach((e4) => {
          this.data[e4] = t3[e4];
        }), this.data.headers = this.data.headers || {}, Object.keys(a2).forEach((e4) => {
          e4 in this.data ? "headers" === e4 && Object.keys(a2.headers).forEach((e5) => {
            e5 in this.data.headers || (this.data.headers[e5] = a2.headers[e5]);
          }) : this.data[e4] = a2[e4];
        }), ["disableFileAccess", "disableUrlAccess", "normalizeHeaderKey"].forEach((e4) => {
          e4 in i3 && (this.data[e4] = i3[e4]);
        });
      }
      resolveContent(...e3) {
        return a.resolveContent(...e3);
      }
      resolveAll(e3) {
        let t3 = [[this.data, "html"], [this.data, "text"], [this.data, "watchHtml"], [this.data, "amp"], [this.data, "icalEvent"]];
        this.data.alternatives && this.data.alternatives.length && this.data.alternatives.forEach((e4, i4) => {
          t3.push([this.data.alternatives, i4]);
        }), this.data.attachments && this.data.attachments.length && this.data.attachments.forEach((e4, i4) => {
          e4.filename || (e4.filename = (e4.path || e4.href || "").split("/").pop().split("?").shift() || "attachment-" + (i4 + 1), e4.filename.indexOf(".") < 0 && (e4.filename += "." + n.detectExtension(e4.contentType))), e4.contentType || (e4.contentType = n.detectMimeType(e4.filename || e4.path || e4.href || "bin")), t3.push([this.data.attachments, i4]);
        });
        let i3 = new s();
        ["from", "to", "cc", "bcc", "sender", "replyTo"].forEach((e4) => {
          let t4;
          this.message ? t4 = [].concat(i3._parseAddresses(this.message.getHeader("replyTo" === e4 ? "reply-to" : e4)) || []) : this.data[e4] && (t4 = [].concat(i3._parseAddresses(this.data[e4]) || [])), t4 && t4.length ? this.data[e4] = t4 : e4 in this.data && (this.data[e4] = null);
        }), ["from", "sender"].forEach((e4) => {
          this.data[e4] && (this.data[e4] = this.data[e4].shift());
        });
        let o = 0, r = () => {
          if (o >= t3.length)
            return e3(null, this.data);
          let i4 = t3[o++];
          if (!i4[0] || !i4[0][i4[1]])
            return r();
          a.resolveContent(...i4, (t4, a2) => {
            if (t4)
              return e3(t4);
            let s2 = { content: a2 };
            i4[0][i4[1]] && "object" == typeof i4[0][i4[1]] && !Buffer.isBuffer(i4[0][i4[1]]) && Object.keys(i4[0][i4[1]]).forEach((e4) => {
              e4 in s2 || ["content", "path", "href", "raw"].includes(e4) || (s2[e4] = i4[0][i4[1]][e4]);
            }), i4[0][i4[1]] = s2, r();
          });
        };
        setImmediate(() => r());
      }
      normalize(e3) {
        let t3 = this.data.envelope || this.message.getEnvelope(), i3 = this.message.messageId();
        this.resolveAll((a2, s2) => a2 ? e3(a2) : (s2.envelope = t3, s2.messageId = i3, ["html", "text", "watchHtml", "amp"].forEach((e4) => {
          s2[e4] && s2[e4].content && ("string" == typeof s2[e4].content ? s2[e4] = s2[e4].content : Buffer.isBuffer(s2[e4].content) && (s2[e4] = s2[e4].content.toString()));
        }), s2.icalEvent && Buffer.isBuffer(s2.icalEvent.content) && (s2.icalEvent.content = s2.icalEvent.content.toString("base64"), s2.icalEvent.encoding = "base64"), s2.alternatives && s2.alternatives.length && s2.alternatives.forEach((e4) => {
          e4 && e4.content && Buffer.isBuffer(e4.content) && (e4.content = e4.content.toString("base64"), e4.encoding = "base64");
        }), s2.attachments && s2.attachments.length && s2.attachments.forEach((e4) => {
          e4 && e4.content && Buffer.isBuffer(e4.content) && (e4.content = e4.content.toString("base64"), e4.encoding = "base64");
        }), s2.normalizedHeaders = {}, Object.keys(s2.headers || {}).forEach((e4) => {
          let t4 = [].concat(s2.headers[e4] || []).shift();
          t4 = t4 && t4.value || t4, t4 && (["references", "in-reply-to", "message-id", "content-id"].includes(e4) && (t4 = this.message._encodeHeaderValue(e4, t4)), s2.normalizedHeaders[e4] = t4);
        }), s2.list && "object" == typeof s2.list && this._getListHeaders(s2.list).forEach((e4) => {
          s2.normalizedHeaders[e4.key] = e4.value.map((e5) => e5 && e5.value || e5).join(", ");
        }), s2.references && (s2.normalizedHeaders.references = this.message._encodeHeaderValue("references", s2.references)), s2.inReplyTo && (s2.normalizedHeaders["in-reply-to"] = this.message._encodeHeaderValue("in-reply-to", s2.inReplyTo)), e3(null, s2)));
      }
      setMailerHeader() {
        this.message && this.data.xMailer && this.message.setHeader("X-Mailer", this.data.xMailer);
      }
      setPriorityHeaders() {
        if (this.message && this.data.priority)
          switch ((this.data.priority || "").toString().toLowerCase()) {
            case "high":
              this.message.setHeader("X-Priority", "1 (Highest)"), this.message.setHeader("X-MSMail-Priority", "High"), this.message.setHeader("Importance", "High");
              break;
            case "low":
              this.message.setHeader("X-Priority", "5 (Lowest)"), this.message.setHeader("X-MSMail-Priority", "Low"), this.message.setHeader("Importance", "Low");
          }
      }
      setListHeaders() {
        this.message && this.data.list && "object" == typeof this.data.list && this.data.list && "object" == typeof this.data.list && this._getListHeaders(this.data.list).forEach((e3) => {
          e3.value.forEach((t3) => {
            this.message.addHeader(e3.key, t3);
          });
        });
      }
      _getListHeaders(e3) {
        return Object.keys(e3).map((t3) => ({ key: "list-" + t3.toLowerCase().trim(), value: [].concat(e3[t3] || []).map((e4) => ({ prepared: true, foldLines: true, value: [].concat(e4 || []).map((e5) => {
          if ("string" == typeof e5 && (e5 = { url: e5 }), e5 && e5.url) {
            if ("id" === t3.toLowerCase().trim()) {
              let t4 = e5.comment || "";
              return t4 = n.isPlainText(t4) ? '"' + t4 + '"' : n.encodeWord(t4), (e5.comment ? t4 + " " : "") + this._formatListUrl(e5.url).replace(/^<[^:]+\/{,2}/, "");
            }
            let i3 = e5.comment || "";
            return n.isPlainText(i3) || (i3 = n.encodeWord(i3)), this._formatListUrl(e5.url) + (e5.comment ? " (" + i3 + ")" : "");
          }
          return "";
        }).filter((e5) => e5).join(", ") })) }));
      }
      _formatListUrl(e3) {
        return e3 = e3.replace(/[\s<]+|[\s>]+/g, ""), /^(https?|mailto|ftp):/.test(e3) ? "<" + e3 + ">" : /^[^@]+@[^@]+$/.test(e3) ? "<mailto:" + e3 + ">" : "<http://" + e3 + ">";
      }
    };
  }, 9480: (e2, t2, i2) => {
    "use strict";
    const a = i2(4449), s = i2(5515), n = i2(7922);
    e2.exports = { isPlainText: (e3, t3) => "string" == typeof e3 && !(t3 ? /[\x00-\x08\x0b\x0c\x0e-\x1f"\u0080-\uFFFF]/ : /[\x00-\x08\x0b\x0c\x0e-\x1f\u0080-\uFFFF]/).test(e3), hasLongerLines: (e3, t3) => e3.length > 131072 || new RegExp("^.{" + (t3 + 1) + ",}", "m").test(e3), encodeWord(e3, t3, i3) {
      let n2;
      if ((i3 = i3 || 0) && i3 > 12 && (i3 -= 12), "Q" === (t3 = (t3 || "Q").toString().toUpperCase().trim().charAt(0)) ? n2 = s.encode(e3).replace(/[^a-z0-9!*+\-/=]/gi, (e4) => {
        let t4 = e4.charCodeAt(0).toString(16).toUpperCase();
        return " " === e4 ? "_" : "=" + (1 === t4.length ? "0" + t4 : t4);
      }) : "B" === t3 && (n2 = "string" == typeof e3 ? e3 : a.encode(e3), i3 = i3 ? Math.max(3, (i3 - i3 % 4) / 4 * 3) : 0), i3 && ("B" !== t3 ? n2 : a.encode(e3)).length > i3)
        if ("Q" === t3)
          n2 = this.splitMimeEncodedString(n2, i3).join("?= =?UTF-8?" + t3 + "?");
        else {
          let e4 = [], s2 = "";
          for (let t4 = 0, o = n2.length; t4 < o; t4++) {
            let r = n2.charAt(t4);
            /[\ud83c\ud83d\ud83e]/.test(r) && t4 < o - 1 && (r += n2.charAt(++t4)), Buffer.byteLength(s2 + r) <= i3 || 0 === t4 ? s2 += r : (e4.push(a.encode(s2)), s2 = r);
          }
          s2 && e4.push(a.encode(s2)), n2 = e4.length > 1 ? e4.join("?= =?UTF-8?" + t3 + "?") : e4.join("");
        }
      else
        "B" === t3 && (n2 = a.encode(e3));
      return "=?UTF-8?" + t3 + "?" + n2 + ("?=" === n2.substr(-2) ? "" : "?=");
    }, encodeWords(e3, t3, i3, a2) {
      let s2;
      i3 = i3 || 0;
      let n2 = e3.match(/(?:^|\s)([^\s]*["\u0080-\uFFFF])/);
      if (!n2)
        return e3;
      if (a2)
        return this.encodeWord(e3, t3, i3);
      let o = e3.match(/(["\u0080-\uFFFF][^\s]*)[^"\u0080-\uFFFF]*$/);
      if (!o)
        return e3;
      let r = n2.index + (n2[0].match(/[^\s]/) || { index: 0 }).index, p = o.index + (o[1] || "").length;
      return s2 = (r ? e3.substr(0, r) : "") + this.encodeWord(e3.substring(r, p), t3 || "Q", i3) + (p < e3.length ? e3.substr(p) : ""), s2;
    }, buildHeaderValue(e3) {
      let t3 = [];
      return Object.keys(e3.params || {}).forEach((i3) => {
        let a2 = e3.params[i3];
        !this.isPlainText(a2, true) || a2.length >= 75 ? this.buildHeaderParam(i3, a2, 50).forEach((e4) => {
          /[\s"\\;:/=(),<>@[\]?]|^[-']|'$/.test(e4.value) && "*" !== e4.key.substr(-1) ? t3.push(e4.key + "=" + JSON.stringify(e4.value)) : t3.push(e4.key + "=" + e4.value);
        }) : /[\s'"\\;:/=(),<>@[\]?]|^-/.test(a2) ? t3.push(i3 + "=" + JSON.stringify(a2)) : t3.push(i3 + "=" + a2);
      }), e3.value + (t3.length ? "; " + t3.join("; ") : "");
    }, buildHeaderParam(e3, t3, i3) {
      let a2, s2, n2, o, r, p, c = [], l = "string" == typeof t3 ? t3 : (t3 || "").toString(), d = 0;
      if (i3 = i3 || 50, this.isPlainText(t3, true)) {
        if (l.length <= i3)
          return [{ key: e3, value: l }];
        l = l.replace(new RegExp(".{" + i3 + "}", "g"), (e4) => (c.push({ line: e4 }), "")), l && c.push({ line: l });
      } else {
        if (/[\uD800-\uDBFF]/.test(l)) {
          for (a2 = [], r = 0, p = l.length; r < p; r++)
            s2 = l.charAt(r), n2 = s2.charCodeAt(0), n2 >= 55296 && n2 <= 56319 && r < p - 1 ? (s2 += l.charAt(r + 1), a2.push(s2), r++) : a2.push(s2);
          l = a2;
        }
        o = "utf-8''";
        let e4 = true;
        for (d = 0, r = 0, p = l.length; r < p; r++) {
          if (s2 = l[r], e4)
            s2 = this.safeEncodeURIComponent(s2);
          else if (s2 = " " === s2 ? s2 : this.safeEncodeURIComponent(s2), s2 !== l[r]) {
            if (!((this.safeEncodeURIComponent(o) + s2).length >= i3)) {
              e4 = true, r = d, o = "";
              continue;
            }
            c.push({ line: o, encoded: e4 }), o = "", d = r - 1;
          }
          (o + s2).length >= i3 ? (c.push({ line: o, encoded: e4 }), o = s2 = " " === l[r] ? " " : this.safeEncodeURIComponent(l[r]), s2 === l[r] ? (e4 = false, d = r - 1) : e4 = true) : o += s2;
        }
        o && c.push({ line: o, encoded: e4 });
      }
      return c.map((t4, i4) => ({ key: e3 + "*" + i4 + (t4.encoded ? "*" : ""), value: t4.line }));
    }, parseHeaderValue(e3) {
      let t3, i3 = { value: false, params: {} }, a2 = false, s2 = "", n2 = "value", o = false, r = false;
      for (let p = 0, c = e3.length; p < c; p++)
        if (t3 = e3.charAt(p), "key" === n2) {
          if ("=" === t3) {
            a2 = s2.trim().toLowerCase(), n2 = "value", s2 = "";
            continue;
          }
          s2 += t3;
        } else {
          if (r)
            s2 += t3;
          else {
            if ("\\" === t3) {
              r = true;
              continue;
            }
            o && t3 === o ? o = false : o || '"' !== t3 ? o || ";" !== t3 ? s2 += t3 : (false === a2 ? i3.value = s2.trim() : i3.params[a2] = s2.trim(), n2 = "key", s2 = "") : o = t3;
          }
          r = false;
        }
      return "value" === n2 ? false === a2 ? i3.value = s2.trim() : i3.params[a2] = s2.trim() : s2.trim() && (i3.params[s2.trim().toLowerCase()] = ""), Object.keys(i3.params).forEach((e4) => {
        let t4, a3, s3, n3;
        (s3 = e4.match(/(\*(\d+)|\*(\d+)\*|\*)$/)) && (t4 = e4.substr(0, s3.index), a3 = Number(s3[2] || s3[3]) || 0, i3.params[t4] && "object" == typeof i3.params[t4] || (i3.params[t4] = { charset: false, values: [] }), n3 = i3.params[e4], 0 === a3 && "*" === s3[0].substr(-1) && (s3 = n3.match(/^([^']*)'[^']*'(.*)$/)) && (i3.params[t4].charset = s3[1] || "iso-8859-1", n3 = s3[2]), i3.params[t4].values[a3] = n3, delete i3.params[e4]);
      }), Object.keys(i3.params).forEach((e4) => {
        let t4;
        i3.params[e4] && Array.isArray(i3.params[e4].values) && (t4 = i3.params[e4].values.map((e5) => e5 || "").join(""), i3.params[e4].charset ? i3.params[e4] = "=?" + i3.params[e4].charset + "?Q?" + t4.replace(/[=?_\s]/g, (e5) => {
          let t5 = e5.charCodeAt(0).toString(16);
          return " " === e5 ? "_" : "%" + (t5.length < 2 ? "0" : "") + t5;
        }).replace(/%/g, "=") + "?=" : i3.params[e4] = t4);
      }), i3;
    }, detectExtension: (e3) => n.detectExtension(e3), detectMimeType: (e3) => n.detectMimeType(e3), foldLines(e3, t3, i3) {
      t3 = t3 || 76;
      let a2, s2, n2 = 0, o = (e3 = (e3 || "").toString()).length, r = "";
      for (; n2 < o; ) {
        if (a2 = e3.substr(n2, t3), a2.length < t3) {
          r += a2;
          break;
        }
        (s2 = a2.match(/^[^\n\r]*(\r?\n|\r)/)) ? (a2 = s2[0], r += a2, n2 += a2.length) : ((s2 = a2.match(/(\s+)[^\s]*$/)) && s2[0].length - (i3 ? (s2[1] || "").length : 0) < a2.length ? a2 = a2.substr(0, a2.length - (s2[0].length - (i3 ? (s2[1] || "").length : 0))) : (s2 = e3.substr(n2 + a2.length).match(/^[^\s]+(\s*)/)) && (a2 += s2[0].substr(0, s2[0].length - (i3 ? 0 : (s2[1] || "").length))), r += a2, n2 += a2.length, n2 < o && (r += "\r\n"));
      }
      return r;
    }, splitMimeEncodedString: (e3, t3) => {
      let i3, a2, s2, n2, o = [];
      for (t3 = Math.max(t3 || 0, 12); e3.length; ) {
        for (i3 = e3.substr(0, t3), (a2 = i3.match(/[=][0-9A-F]?$/i)) && (i3 = i3.substr(0, a2.index)), n2 = false; !n2; )
          n2 = true, (a2 = e3.substr(i3.length).match(/^[=]([0-9A-F]{2})/i)) && (s2 = parseInt(a2[1], 16), s2 < 194 && s2 > 127 && (i3 = i3.substr(0, i3.length - 3), n2 = false));
        i3.length && o.push(i3), e3 = e3.substr(i3.length);
      }
      return o;
    }, encodeURICharComponent: (e3) => {
      let t3 = "", i3 = e3.charCodeAt(0).toString(16).toUpperCase();
      if (i3.length % 2 && (i3 = "0" + i3), i3.length > 2)
        for (let e4 = 0, a2 = i3.length / 2; e4 < a2; e4++)
          t3 += "%" + i3.substr(e4, 2);
      else
        t3 += "%" + i3;
      return t3;
    }, safeEncodeURIComponent(e3) {
      e3 = (e3 || "").toString();
      try {
        e3 = encodeURIComponent(e3);
      } catch (t3) {
        return e3.replace(/[^\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]+/g, "");
      }
      return e3.replace(/[\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]/g, (e4) => this.encodeURICharComponent(e4));
    } };
  }, 7922: (e2, t2, i2) => {
    "use strict";
    const a = i2(6928), s = "application/octet-stream", n = /* @__PURE__ */ new Map([["application/acad", "dwg"], ["application/applixware", "aw"], ["application/arj", "arj"], ["application/atom+xml", "xml"], ["application/atomcat+xml", "atomcat"], ["application/atomsvc+xml", "atomsvc"], ["application/base64", ["mm", "mme"]], ["application/binhex", "hqx"], ["application/binhex4", "hqx"], ["application/book", ["book", "boo"]], ["application/ccxml+xml,", "ccxml"], ["application/cdf", "cdf"], ["application/cdmi-capability", "cdmia"], ["application/cdmi-container", "cdmic"], ["application/cdmi-domain", "cdmid"], ["application/cdmi-object", "cdmio"], ["application/cdmi-queue", "cdmiq"], ["application/clariscad", "ccad"], ["application/commonground", "dp"], ["application/cu-seeme", "cu"], ["application/davmount+xml", "davmount"], ["application/drafting", "drw"], ["application/dsptype", "tsp"], ["application/dssc+der", "dssc"], ["application/dssc+xml", "xdssc"], ["application/dxf", "dxf"], ["application/ecmascript", ["js", "es"]], ["application/emma+xml", "emma"], ["application/envoy", "evy"], ["application/epub+zip", "epub"], ["application/excel", ["xls", "xl", "xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xlt", "xlv", "xlw"]], ["application/exi", "exi"], ["application/font-tdpfr", "pfr"], ["application/fractals", "fif"], ["application/freeloader", "frl"], ["application/futuresplash", "spl"], ["application/gnutar", "tgz"], ["application/groupwise", "vew"], ["application/hlp", "hlp"], ["application/hta", "hta"], ["application/hyperstudio", "stk"], ["application/i-deas", "unv"], ["application/iges", ["iges", "igs"]], ["application/inf", "inf"], ["application/internet-property-stream", "acx"], ["application/ipfix", "ipfix"], ["application/java", "class"], ["application/java-archive", "jar"], ["application/java-byte-code", "class"], ["application/java-serialized-object", "ser"], ["application/java-vm", "class"], ["application/javascript", "js"], ["application/json", "json"], ["application/lha", "lha"], ["application/lzx", "lzx"], ["application/mac-binary", "bin"], ["application/mac-binhex", "hqx"], ["application/mac-binhex40", "hqx"], ["application/mac-compactpro", "cpt"], ["application/macbinary", "bin"], ["application/mads+xml", "mads"], ["application/marc", "mrc"], ["application/marcxml+xml", "mrcx"], ["application/mathematica", "ma"], ["application/mathml+xml", "mathml"], ["application/mbedlet", "mbd"], ["application/mbox", "mbox"], ["application/mcad", "mcd"], ["application/mediaservercontrol+xml", "mscml"], ["application/metalink4+xml", "meta4"], ["application/mets+xml", "mets"], ["application/mime", "aps"], ["application/mods+xml", "mods"], ["application/mp21", "m21"], ["application/mp4", "mp4"], ["application/mspowerpoint", ["ppt", "pot", "pps", "ppz"]], ["application/msword", ["doc", "dot", "w6w", "wiz", "word"]], ["application/mswrite", "wri"], ["application/mxf", "mxf"], ["application/netmc", "mcp"], ["application/octet-stream", ["*"]], ["application/oda", "oda"], ["application/oebps-package+xml", "opf"], ["application/ogg", "ogx"], ["application/olescript", "axs"], ["application/onenote", "onetoc"], ["application/patch-ops-error+xml", "xer"], ["application/pdf", "pdf"], ["application/pgp-encrypted", "asc"], ["application/pgp-signature", "pgp"], ["application/pics-rules", "prf"], ["application/pkcs-12", "p12"], ["application/pkcs-crl", "crl"], ["application/pkcs10", "p10"], ["application/pkcs7-mime", ["p7c", "p7m"]], ["application/pkcs7-signature", "p7s"], ["application/pkcs8", "p8"], ["application/pkix-attr-cert", "ac"], ["application/pkix-cert", ["cer", "crt"]], ["application/pkix-crl", "crl"], ["application/pkix-pkipath", "pkipath"], ["application/pkixcmp", "pki"], ["application/plain", "text"], ["application/pls+xml", "pls"], ["application/postscript", ["ps", "ai", "eps"]], ["application/powerpoint", "ppt"], ["application/pro_eng", ["part", "prt"]], ["application/prs.cww", "cww"], ["application/pskc+xml", "pskcxml"], ["application/rdf+xml", "rdf"], ["application/reginfo+xml", "rif"], ["application/relax-ng-compact-syntax", "rnc"], ["application/resource-lists+xml", "rl"], ["application/resource-lists-diff+xml", "rld"], ["application/ringing-tones", "rng"], ["application/rls-services+xml", "rs"], ["application/rsd+xml", "rsd"], ["application/rss+xml", "xml"], ["application/rtf", ["rtf", "rtx"]], ["application/sbml+xml", "sbml"], ["application/scvp-cv-request", "scq"], ["application/scvp-cv-response", "scs"], ["application/scvp-vp-request", "spq"], ["application/scvp-vp-response", "spp"], ["application/sdp", "sdp"], ["application/sea", "sea"], ["application/set", "set"], ["application/set-payment-initiation", "setpay"], ["application/set-registration-initiation", "setreg"], ["application/shf+xml", "shf"], ["application/sla", "stl"], ["application/smil", ["smi", "smil"]], ["application/smil+xml", "smi"], ["application/solids", "sol"], ["application/sounder", "sdr"], ["application/sparql-query", "rq"], ["application/sparql-results+xml", "srx"], ["application/srgs", "gram"], ["application/srgs+xml", "grxml"], ["application/sru+xml", "sru"], ["application/ssml+xml", "ssml"], ["application/step", ["step", "stp"]], ["application/streamingmedia", "ssm"], ["application/tei+xml", "tei"], ["application/thraud+xml", "tfi"], ["application/timestamped-data", "tsd"], ["application/toolbook", "tbk"], ["application/vda", "vda"], ["application/vnd.3gpp.pic-bw-large", "plb"], ["application/vnd.3gpp.pic-bw-small", "psb"], ["application/vnd.3gpp.pic-bw-var", "pvb"], ["application/vnd.3gpp2.tcap", "tcap"], ["application/vnd.3m.post-it-notes", "pwn"], ["application/vnd.accpac.simply.aso", "aso"], ["application/vnd.accpac.simply.imp", "imp"], ["application/vnd.acucobol", "acu"], ["application/vnd.acucorp", "atc"], ["application/vnd.adobe.air-application-installer-package+zip", "air"], ["application/vnd.adobe.fxp", "fxp"], ["application/vnd.adobe.xdp+xml", "xdp"], ["application/vnd.adobe.xfdf", "xfdf"], ["application/vnd.ahead.space", "ahead"], ["application/vnd.airzip.filesecure.azf", "azf"], ["application/vnd.airzip.filesecure.azs", "azs"], ["application/vnd.amazon.ebook", "azw"], ["application/vnd.americandynamics.acc", "acc"], ["application/vnd.amiga.ami", "ami"], ["application/vnd.android.package-archive", "apk"], ["application/vnd.anser-web-certificate-issue-initiation", "cii"], ["application/vnd.anser-web-funds-transfer-initiation", "fti"], ["application/vnd.antix.game-component", "atx"], ["application/vnd.apple.installer+xml", "mpkg"], ["application/vnd.apple.mpegurl", "m3u8"], ["application/vnd.aristanetworks.swi", "swi"], ["application/vnd.audiograph", "aep"], ["application/vnd.blueice.multipass", "mpm"], ["application/vnd.bmi", "bmi"], ["application/vnd.businessobjects", "rep"], ["application/vnd.chemdraw+xml", "cdxml"], ["application/vnd.chipnuts.karaoke-mmd", "mmd"], ["application/vnd.cinderella", "cdy"], ["application/vnd.claymore", "cla"], ["application/vnd.cloanto.rp9", "rp9"], ["application/vnd.clonk.c4group", "c4g"], ["application/vnd.cluetrust.cartomobile-config", "c11amc"], ["application/vnd.cluetrust.cartomobile-config-pkg", "c11amz"], ["application/vnd.commonspace", "csp"], ["application/vnd.contact.cmsg", "cdbcmsg"], ["application/vnd.cosmocaller", "cmc"], ["application/vnd.crick.clicker", "clkx"], ["application/vnd.crick.clicker.keyboard", "clkk"], ["application/vnd.crick.clicker.palette", "clkp"], ["application/vnd.crick.clicker.template", "clkt"], ["application/vnd.crick.clicker.wordbank", "clkw"], ["application/vnd.criticaltools.wbs+xml", "wbs"], ["application/vnd.ctc-posml", "pml"], ["application/vnd.cups-ppd", "ppd"], ["application/vnd.curl.car", "car"], ["application/vnd.curl.pcurl", "pcurl"], ["application/vnd.data-vision.rdz", "rdz"], ["application/vnd.denovo.fcselayout-link", "fe_launch"], ["application/vnd.dna", "dna"], ["application/vnd.dolby.mlp", "mlp"], ["application/vnd.dpgraph", "dpg"], ["application/vnd.dreamfactory", "dfac"], ["application/vnd.dvb.ait", "ait"], ["application/vnd.dvb.service", "svc"], ["application/vnd.dynageo", "geo"], ["application/vnd.ecowin.chart", "mag"], ["application/vnd.enliven", "nml"], ["application/vnd.epson.esf", "esf"], ["application/vnd.epson.msf", "msf"], ["application/vnd.epson.quickanime", "qam"], ["application/vnd.epson.salt", "slt"], ["application/vnd.epson.ssf", "ssf"], ["application/vnd.eszigno3+xml", "es3"], ["application/vnd.ezpix-album", "ez2"], ["application/vnd.ezpix-package", "ez3"], ["application/vnd.fdf", "fdf"], ["application/vnd.fdsn.seed", "seed"], ["application/vnd.flographit", "gph"], ["application/vnd.fluxtime.clip", "ftc"], ["application/vnd.framemaker", "fm"], ["application/vnd.frogans.fnc", "fnc"], ["application/vnd.frogans.ltf", "ltf"], ["application/vnd.fsc.weblaunch", "fsc"], ["application/vnd.fujitsu.oasys", "oas"], ["application/vnd.fujitsu.oasys2", "oa2"], ["application/vnd.fujitsu.oasys3", "oa3"], ["application/vnd.fujitsu.oasysgp", "fg5"], ["application/vnd.fujitsu.oasysprs", "bh2"], ["application/vnd.fujixerox.ddd", "ddd"], ["application/vnd.fujixerox.docuworks", "xdw"], ["application/vnd.fujixerox.docuworks.binder", "xbd"], ["application/vnd.fuzzysheet", "fzs"], ["application/vnd.genomatix.tuxedo", "txd"], ["application/vnd.geogebra.file", "ggb"], ["application/vnd.geogebra.tool", "ggt"], ["application/vnd.geometry-explorer", "gex"], ["application/vnd.geonext", "gxt"], ["application/vnd.geoplan", "g2w"], ["application/vnd.geospace", "g3w"], ["application/vnd.gmx", "gmx"], ["application/vnd.google-earth.kml+xml", "kml"], ["application/vnd.google-earth.kmz", "kmz"], ["application/vnd.grafeq", "gqf"], ["application/vnd.groove-account", "gac"], ["application/vnd.groove-help", "ghf"], ["application/vnd.groove-identity-message", "gim"], ["application/vnd.groove-injector", "grv"], ["application/vnd.groove-tool-message", "gtm"], ["application/vnd.groove-tool-template", "tpl"], ["application/vnd.groove-vcard", "vcg"], ["application/vnd.hal+xml", "hal"], ["application/vnd.handheld-entertainment+xml", "zmm"], ["application/vnd.hbci", "hbci"], ["application/vnd.hhe.lesson-player", "les"], ["application/vnd.hp-hpgl", ["hgl", "hpg", "hpgl"]], ["application/vnd.hp-hpid", "hpid"], ["application/vnd.hp-hps", "hps"], ["application/vnd.hp-jlyt", "jlt"], ["application/vnd.hp-pcl", "pcl"], ["application/vnd.hp-pclxl", "pclxl"], ["application/vnd.hydrostatix.sof-data", "sfd-hdstx"], ["application/vnd.hzn-3d-crossword", "x3d"], ["application/vnd.ibm.minipay", "mpy"], ["application/vnd.ibm.modcap", "afp"], ["application/vnd.ibm.rights-management", "irm"], ["application/vnd.ibm.secure-container", "sc"], ["application/vnd.iccprofile", "icc"], ["application/vnd.igloader", "igl"], ["application/vnd.immervision-ivp", "ivp"], ["application/vnd.immervision-ivu", "ivu"], ["application/vnd.insors.igm", "igm"], ["application/vnd.intercon.formnet", "xpw"], ["application/vnd.intergeo", "i2g"], ["application/vnd.intu.qbo", "qbo"], ["application/vnd.intu.qfx", "qfx"], ["application/vnd.ipunplugged.rcprofile", "rcprofile"], ["application/vnd.irepository.package+xml", "irp"], ["application/vnd.is-xpr", "xpr"], ["application/vnd.isac.fcs", "fcs"], ["application/vnd.jam", "jam"], ["application/vnd.jcp.javame.midlet-rms", "rms"], ["application/vnd.jisp", "jisp"], ["application/vnd.joost.joda-archive", "joda"], ["application/vnd.kahootz", "ktz"], ["application/vnd.kde.karbon", "karbon"], ["application/vnd.kde.kchart", "chrt"], ["application/vnd.kde.kformula", "kfo"], ["application/vnd.kde.kivio", "flw"], ["application/vnd.kde.kontour", "kon"], ["application/vnd.kde.kpresenter", "kpr"], ["application/vnd.kde.kspread", "ksp"], ["application/vnd.kde.kword", "kwd"], ["application/vnd.kenameaapp", "htke"], ["application/vnd.kidspiration", "kia"], ["application/vnd.kinar", "kne"], ["application/vnd.koan", "skp"], ["application/vnd.kodak-descriptor", "sse"], ["application/vnd.las.las+xml", "lasxml"], ["application/vnd.llamagraphics.life-balance.desktop", "lbd"], ["application/vnd.llamagraphics.life-balance.exchange+xml", "lbe"], ["application/vnd.lotus-1-2-3", "123"], ["application/vnd.lotus-approach", "apr"], ["application/vnd.lotus-freelance", "pre"], ["application/vnd.lotus-notes", "nsf"], ["application/vnd.lotus-organizer", "org"], ["application/vnd.lotus-screencam", "scm"], ["application/vnd.lotus-wordpro", "lwp"], ["application/vnd.macports.portpkg", "portpkg"], ["application/vnd.mcd", "mcd"], ["application/vnd.medcalcdata", "mc1"], ["application/vnd.mediastation.cdkey", "cdkey"], ["application/vnd.mfer", "mwf"], ["application/vnd.mfmp", "mfm"], ["application/vnd.micrografx.flo", "flo"], ["application/vnd.micrografx.igx", "igx"], ["application/vnd.mif", "mif"], ["application/vnd.mobius.daf", "daf"], ["application/vnd.mobius.dis", "dis"], ["application/vnd.mobius.mbk", "mbk"], ["application/vnd.mobius.mqy", "mqy"], ["application/vnd.mobius.msl", "msl"], ["application/vnd.mobius.plc", "plc"], ["application/vnd.mobius.txf", "txf"], ["application/vnd.mophun.application", "mpn"], ["application/vnd.mophun.certificate", "mpc"], ["application/vnd.mozilla.xul+xml", "xul"], ["application/vnd.ms-artgalry", "cil"], ["application/vnd.ms-cab-compressed", "cab"], ["application/vnd.ms-excel", ["xls", "xla", "xlc", "xlm", "xlt", "xlw", "xlb", "xll"]], ["application/vnd.ms-excel.addin.macroenabled.12", "xlam"], ["application/vnd.ms-excel.sheet.binary.macroenabled.12", "xlsb"], ["application/vnd.ms-excel.sheet.macroenabled.12", "xlsm"], ["application/vnd.ms-excel.template.macroenabled.12", "xltm"], ["application/vnd.ms-fontobject", "eot"], ["application/vnd.ms-htmlhelp", "chm"], ["application/vnd.ms-ims", "ims"], ["application/vnd.ms-lrm", "lrm"], ["application/vnd.ms-officetheme", "thmx"], ["application/vnd.ms-outlook", "msg"], ["application/vnd.ms-pki.certstore", "sst"], ["application/vnd.ms-pki.pko", "pko"], ["application/vnd.ms-pki.seccat", "cat"], ["application/vnd.ms-pki.stl", "stl"], ["application/vnd.ms-pkicertstore", "sst"], ["application/vnd.ms-pkiseccat", "cat"], ["application/vnd.ms-pkistl", "stl"], ["application/vnd.ms-powerpoint", ["ppt", "pot", "pps", "ppa", "pwz"]], ["application/vnd.ms-powerpoint.addin.macroenabled.12", "ppam"], ["application/vnd.ms-powerpoint.presentation.macroenabled.12", "pptm"], ["application/vnd.ms-powerpoint.slide.macroenabled.12", "sldm"], ["application/vnd.ms-powerpoint.slideshow.macroenabled.12", "ppsm"], ["application/vnd.ms-powerpoint.template.macroenabled.12", "potm"], ["application/vnd.ms-project", "mpp"], ["application/vnd.ms-word.document.macroenabled.12", "docm"], ["application/vnd.ms-word.template.macroenabled.12", "dotm"], ["application/vnd.ms-works", ["wks", "wcm", "wdb", "wps"]], ["application/vnd.ms-wpl", "wpl"], ["application/vnd.ms-xpsdocument", "xps"], ["application/vnd.mseq", "mseq"], ["application/vnd.musician", "mus"], ["application/vnd.muvee.style", "msty"], ["application/vnd.neurolanguage.nlu", "nlu"], ["application/vnd.noblenet-directory", "nnd"], ["application/vnd.noblenet-sealer", "nns"], ["application/vnd.noblenet-web", "nnw"], ["application/vnd.nokia.configuration-message", "ncm"], ["application/vnd.nokia.n-gage.data", "ngdat"], ["application/vnd.nokia.n-gage.symbian.install", "n-gage"], ["application/vnd.nokia.radio-preset", "rpst"], ["application/vnd.nokia.radio-presets", "rpss"], ["application/vnd.nokia.ringing-tone", "rng"], ["application/vnd.novadigm.edm", "edm"], ["application/vnd.novadigm.edx", "edx"], ["application/vnd.novadigm.ext", "ext"], ["application/vnd.oasis.opendocument.chart", "odc"], ["application/vnd.oasis.opendocument.chart-template", "otc"], ["application/vnd.oasis.opendocument.database", "odb"], ["application/vnd.oasis.opendocument.formula", "odf"], ["application/vnd.oasis.opendocument.formula-template", "odft"], ["application/vnd.oasis.opendocument.graphics", "odg"], ["application/vnd.oasis.opendocument.graphics-template", "otg"], ["application/vnd.oasis.opendocument.image", "odi"], ["application/vnd.oasis.opendocument.image-template", "oti"], ["application/vnd.oasis.opendocument.presentation", "odp"], ["application/vnd.oasis.opendocument.presentation-template", "otp"], ["application/vnd.oasis.opendocument.spreadsheet", "ods"], ["application/vnd.oasis.opendocument.spreadsheet-template", "ots"], ["application/vnd.oasis.opendocument.text", "odt"], ["application/vnd.oasis.opendocument.text-master", "odm"], ["application/vnd.oasis.opendocument.text-template", "ott"], ["application/vnd.oasis.opendocument.text-web", "oth"], ["application/vnd.olpc-sugar", "xo"], ["application/vnd.oma.dd2+xml", "dd2"], ["application/vnd.openofficeorg.extension", "oxt"], ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "pptx"], ["application/vnd.openxmlformats-officedocument.presentationml.slide", "sldx"], ["application/vnd.openxmlformats-officedocument.presentationml.slideshow", "ppsx"], ["application/vnd.openxmlformats-officedocument.presentationml.template", "potx"], ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "xlsx"], ["application/vnd.openxmlformats-officedocument.spreadsheetml.template", "xltx"], ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "docx"], ["application/vnd.openxmlformats-officedocument.wordprocessingml.template", "dotx"], ["application/vnd.osgeo.mapguide.package", "mgp"], ["application/vnd.osgi.dp", "dp"], ["application/vnd.palm", "pdb"], ["application/vnd.pawaafile", "paw"], ["application/vnd.pg.format", "str"], ["application/vnd.pg.osasli", "ei6"], ["application/vnd.picsel", "efif"], ["application/vnd.pmi.widget", "wg"], ["application/vnd.pocketlearn", "plf"], ["application/vnd.powerbuilder6", "pbd"], ["application/vnd.previewsystems.box", "box"], ["application/vnd.proteus.magazine", "mgz"], ["application/vnd.publishare-delta-tree", "qps"], ["application/vnd.pvi.ptid1", "ptid"], ["application/vnd.quark.quarkxpress", "qxd"], ["application/vnd.realvnc.bed", "bed"], ["application/vnd.recordare.musicxml", "mxl"], ["application/vnd.recordare.musicxml+xml", "musicxml"], ["application/vnd.rig.cryptonote", "cryptonote"], ["application/vnd.rim.cod", "cod"], ["application/vnd.rn-realmedia", "rm"], ["application/vnd.rn-realplayer", "rnx"], ["application/vnd.route66.link66+xml", "link66"], ["application/vnd.sailingtracker.track", "st"], ["application/vnd.seemail", "see"], ["application/vnd.sema", "sema"], ["application/vnd.semd", "semd"], ["application/vnd.semf", "semf"], ["application/vnd.shana.informed.formdata", "ifm"], ["application/vnd.shana.informed.formtemplate", "itp"], ["application/vnd.shana.informed.interchange", "iif"], ["application/vnd.shana.informed.package", "ipk"], ["application/vnd.simtech-mindmapper", "twd"], ["application/vnd.smaf", "mmf"], ["application/vnd.smart.teacher", "teacher"], ["application/vnd.solent.sdkm+xml", "sdkm"], ["application/vnd.spotfire.dxp", "dxp"], ["application/vnd.spotfire.sfs", "sfs"], ["application/vnd.stardivision.calc", "sdc"], ["application/vnd.stardivision.draw", "sda"], ["application/vnd.stardivision.impress", "sdd"], ["application/vnd.stardivision.math", "smf"], ["application/vnd.stardivision.writer", "sdw"], ["application/vnd.stardivision.writer-global", "sgl"], ["application/vnd.stepmania.stepchart", "sm"], ["application/vnd.sun.xml.calc", "sxc"], ["application/vnd.sun.xml.calc.template", "stc"], ["application/vnd.sun.xml.draw", "sxd"], ["application/vnd.sun.xml.draw.template", "std"], ["application/vnd.sun.xml.impress", "sxi"], ["application/vnd.sun.xml.impress.template", "sti"], ["application/vnd.sun.xml.math", "sxm"], ["application/vnd.sun.xml.writer", "sxw"], ["application/vnd.sun.xml.writer.global", "sxg"], ["application/vnd.sun.xml.writer.template", "stw"], ["application/vnd.sus-calendar", "sus"], ["application/vnd.svd", "svd"], ["application/vnd.symbian.install", "sis"], ["application/vnd.syncml+xml", "xsm"], ["application/vnd.syncml.dm+wbxml", "bdm"], ["application/vnd.syncml.dm+xml", "xdm"], ["application/vnd.tao.intent-module-archive", "tao"], ["application/vnd.tmobile-livetv", "tmo"], ["application/vnd.trid.tpt", "tpt"], ["application/vnd.triscape.mxs", "mxs"], ["application/vnd.trueapp", "tra"], ["application/vnd.ufdl", "ufd"], ["application/vnd.uiq.theme", "utz"], ["application/vnd.umajin", "umj"], ["application/vnd.unity", "unityweb"], ["application/vnd.uoml+xml", "uoml"], ["application/vnd.vcx", "vcx"], ["application/vnd.visio", "vsd"], ["application/vnd.visionary", "vis"], ["application/vnd.vsf", "vsf"], ["application/vnd.wap.wbxml", "wbxml"], ["application/vnd.wap.wmlc", "wmlc"], ["application/vnd.wap.wmlscriptc", "wmlsc"], ["application/vnd.webturbo", "wtb"], ["application/vnd.wolfram.player", "nbp"], ["application/vnd.wordperfect", "wpd"], ["application/vnd.wqd", "wqd"], ["application/vnd.wt.stf", "stf"], ["application/vnd.xara", ["web", "xar"]], ["application/vnd.xfdl", "xfdl"], ["application/vnd.yamaha.hv-dic", "hvd"], ["application/vnd.yamaha.hv-script", "hvs"], ["application/vnd.yamaha.hv-voice", "hvp"], ["application/vnd.yamaha.openscoreformat", "osf"], ["application/vnd.yamaha.openscoreformat.osfpvg+xml", "osfpvg"], ["application/vnd.yamaha.smaf-audio", "saf"], ["application/vnd.yamaha.smaf-phrase", "spf"], ["application/vnd.yellowriver-custom-menu", "cmp"], ["application/vnd.zul", "zir"], ["application/vnd.zzazz.deck+xml", "zaz"], ["application/vocaltec-media-desc", "vmd"], ["application/vocaltec-media-file", "vmf"], ["application/voicexml+xml", "vxml"], ["application/widget", "wgt"], ["application/winhlp", "hlp"], ["application/wordperfect", ["wp", "wp5", "wp6", "wpd"]], ["application/wordperfect6.0", ["w60", "wp5"]], ["application/wordperfect6.1", "w61"], ["application/wsdl+xml", "wsdl"], ["application/wspolicy+xml", "wspolicy"], ["application/x-123", "wk1"], ["application/x-7z-compressed", "7z"], ["application/x-abiword", "abw"], ["application/x-ace-compressed", "ace"], ["application/x-aim", "aim"], ["application/x-authorware-bin", "aab"], ["application/x-authorware-map", "aam"], ["application/x-authorware-seg", "aas"], ["application/x-bcpio", "bcpio"], ["application/x-binary", "bin"], ["application/x-binhex40", "hqx"], ["application/x-bittorrent", "torrent"], ["application/x-bsh", ["bsh", "sh", "shar"]], ["application/x-bytecode.elisp", "elc"], ["application/x-bytecode.python", "pyc"], ["application/x-bzip", "bz"], ["application/x-bzip2", ["boz", "bz2"]], ["application/x-cdf", "cdf"], ["application/x-cdlink", "vcd"], ["application/x-chat", ["cha", "chat"]], ["application/x-chess-pgn", "pgn"], ["application/x-cmu-raster", "ras"], ["application/x-cocoa", "cco"], ["application/x-compactpro", "cpt"], ["application/x-compress", "z"], ["application/x-compressed", ["tgz", "gz", "z", "zip"]], ["application/x-conference", "nsc"], ["application/x-cpio", "cpio"], ["application/x-cpt", "cpt"], ["application/x-csh", "csh"], ["application/x-debian-package", "deb"], ["application/x-deepv", "deepv"], ["application/x-director", ["dir", "dcr", "dxr"]], ["application/x-doom", "wad"], ["application/x-dtbncx+xml", "ncx"], ["application/x-dtbook+xml", "dtb"], ["application/x-dtbresource+xml", "res"], ["application/x-dvi", "dvi"], ["application/x-elc", "elc"], ["application/x-envoy", ["env", "evy"]], ["application/x-esrehber", "es"], ["application/x-excel", ["xls", "xla", "xlb", "xlc", "xld", "xlk", "xll", "xlm", "xlt", "xlv", "xlw"]], ["application/x-font-bdf", "bdf"], ["application/x-font-ghostscript", "gsf"], ["application/x-font-linux-psf", "psf"], ["application/x-font-otf", "otf"], ["application/x-font-pcf", "pcf"], ["application/x-font-snf", "snf"], ["application/x-font-ttf", "ttf"], ["application/x-font-type1", "pfa"], ["application/x-font-woff", "woff"], ["application/x-frame", "mif"], ["application/x-freelance", "pre"], ["application/x-futuresplash", "spl"], ["application/x-gnumeric", "gnumeric"], ["application/x-gsp", "gsp"], ["application/x-gss", "gss"], ["application/x-gtar", "gtar"], ["application/x-gzip", ["gz", "gzip"]], ["application/x-hdf", "hdf"], ["application/x-helpfile", ["help", "hlp"]], ["application/x-httpd-imap", "imap"], ["application/x-ima", "ima"], ["application/x-internet-signup", ["ins", "isp"]], ["application/x-internett-signup", "ins"], ["application/x-inventor", "iv"], ["application/x-ip2", "ip"], ["application/x-iphone", "iii"], ["application/x-java-class", "class"], ["application/x-java-commerce", "jcm"], ["application/x-java-jnlp-file", "jnlp"], ["application/x-javascript", "js"], ["application/x-koan", ["skd", "skm", "skp", "skt"]], ["application/x-ksh", "ksh"], ["application/x-latex", ["latex", "ltx"]], ["application/x-lha", "lha"], ["application/x-lisp", "lsp"], ["application/x-livescreen", "ivy"], ["application/x-lotus", "wq1"], ["application/x-lotusscreencam", "scm"], ["application/x-lzh", "lzh"], ["application/x-lzx", "lzx"], ["application/x-mac-binhex40", "hqx"], ["application/x-macbinary", "bin"], ["application/x-magic-cap-package-1.0", "mc$"], ["application/x-mathcad", "mcd"], ["application/x-meme", "mm"], ["application/x-midi", ["mid", "midi"]], ["application/x-mif", "mif"], ["application/x-mix-transfer", "nix"], ["application/x-mobipocket-ebook", "prc"], ["application/x-mplayer2", "asx"], ["application/x-ms-application", "application"], ["application/x-ms-wmd", "wmd"], ["application/x-ms-wmz", "wmz"], ["application/x-ms-xbap", "xbap"], ["application/x-msaccess", "mdb"], ["application/x-msbinder", "obd"], ["application/x-mscardfile", "crd"], ["application/x-msclip", "clp"], ["application/x-msdownload", ["exe", "dll"]], ["application/x-msexcel", ["xls", "xla", "xlw"]], ["application/x-msmediaview", ["mvb", "m13", "m14"]], ["application/x-msmetafile", "wmf"], ["application/x-msmoney", "mny"], ["application/x-mspowerpoint", "ppt"], ["application/x-mspublisher", "pub"], ["application/x-msschedule", "scd"], ["application/x-msterminal", "trm"], ["application/x-mswrite", "wri"], ["application/x-navi-animation", "ani"], ["application/x-navidoc", "nvd"], ["application/x-navimap", "map"], ["application/x-navistyle", "stl"], ["application/x-netcdf", ["cdf", "nc"]], ["application/x-newton-compatible-pkg", "pkg"], ["application/x-nokia-9000-communicator-add-on-software", "aos"], ["application/x-omc", "omc"], ["application/x-omcdatamaker", "omcd"], ["application/x-omcregerator", "omcr"], ["application/x-pagemaker", ["pm4", "pm5"]], ["application/x-pcl", "pcl"], ["application/x-perfmon", ["pma", "pmc", "pml", "pmr", "pmw"]], ["application/x-pixclscript", "plx"], ["application/x-pkcs10", "p10"], ["application/x-pkcs12", ["p12", "pfx"]], ["application/x-pkcs7-certificates", ["p7b", "spc"]], ["application/x-pkcs7-certreqresp", "p7r"], ["application/x-pkcs7-mime", ["p7m", "p7c"]], ["application/x-pkcs7-signature", ["p7s", "p7a"]], ["application/x-pointplus", "css"], ["application/x-portable-anymap", "pnm"], ["application/x-project", ["mpc", "mpt", "mpv", "mpx"]], ["application/x-qpro", "wb1"], ["application/x-rar-compressed", "rar"], ["application/x-rtf", "rtf"], ["application/x-sdp", "sdp"], ["application/x-sea", "sea"], ["application/x-seelogo", "sl"], ["application/x-sh", "sh"], ["application/x-shar", ["shar", "sh"]], ["application/x-shockwave-flash", "swf"], ["application/x-silverlight-app", "xap"], ["application/x-sit", "sit"], ["application/x-sprite", ["spr", "sprite"]], ["application/x-stuffit", "sit"], ["application/x-stuffitx", "sitx"], ["application/x-sv4cpio", "sv4cpio"], ["application/x-sv4crc", "sv4crc"], ["application/x-tar", "tar"], ["application/x-tbook", ["sbk", "tbk"]], ["application/x-tcl", "tcl"], ["application/x-tex", "tex"], ["application/x-tex-tfm", "tfm"], ["application/x-texinfo", ["texi", "texinfo"]], ["application/x-troff", ["roff", "t", "tr"]], ["application/x-troff-man", "man"], ["application/x-troff-me", "me"], ["application/x-troff-ms", "ms"], ["application/x-troff-msvideo", "avi"], ["application/x-ustar", "ustar"], ["application/x-visio", ["vsd", "vst", "vsw"]], ["application/x-vnd.audioexplosion.mzz", "mzz"], ["application/x-vnd.ls-xpix", "xpix"], ["application/x-vrml", "vrml"], ["application/x-wais-source", ["src", "wsrc"]], ["application/x-winhelp", "hlp"], ["application/x-wintalk", "wtk"], ["application/x-world", ["wrl", "svr"]], ["application/x-wpwin", "wpd"], ["application/x-wri", "wri"], ["application/x-x509-ca-cert", ["cer", "crt", "der"]], ["application/x-x509-user-cert", "crt"], ["application/x-xfig", "fig"], ["application/x-xpinstall", "xpi"], ["application/x-zip-compressed", "zip"], ["application/xcap-diff+xml", "xdf"], ["application/xenc+xml", "xenc"], ["application/xhtml+xml", "xhtml"], ["application/xml", "xml"], ["application/xml-dtd", "dtd"], ["application/xop+xml", "xop"], ["application/xslt+xml", "xslt"], ["application/xspf+xml", "xspf"], ["application/xv+xml", "mxml"], ["application/yang", "yang"], ["application/yin+xml", "yin"], ["application/ynd.ms-pkipko", "pko"], ["application/zip", "zip"], ["audio/adpcm", "adp"], ["audio/aiff", ["aiff", "aif", "aifc"]], ["audio/basic", ["snd", "au"]], ["audio/it", "it"], ["audio/make", ["funk", "my", "pfunk"]], ["audio/make.my.funk", "pfunk"], ["audio/mid", ["mid", "rmi"]], ["audio/midi", ["midi", "kar", "mid"]], ["audio/mod", "mod"], ["audio/mp4", "mp4a"], ["audio/mpeg", ["mpga", "mp3", "m2a", "mp2", "mpa", "mpg"]], ["audio/mpeg3", "mp3"], ["audio/nspaudio", ["la", "lma"]], ["audio/ogg", "oga"], ["audio/s3m", "s3m"], ["audio/tsp-audio", "tsi"], ["audio/tsplayer", "tsp"], ["audio/vnd.dece.audio", "uva"], ["audio/vnd.digital-winds", "eol"], ["audio/vnd.dra", "dra"], ["audio/vnd.dts", "dts"], ["audio/vnd.dts.hd", "dtshd"], ["audio/vnd.lucent.voice", "lvp"], ["audio/vnd.ms-playready.media.pya", "pya"], ["audio/vnd.nuera.ecelp4800", "ecelp4800"], ["audio/vnd.nuera.ecelp7470", "ecelp7470"], ["audio/vnd.nuera.ecelp9600", "ecelp9600"], ["audio/vnd.qcelp", "qcp"], ["audio/vnd.rip", "rip"], ["audio/voc", "voc"], ["audio/voxware", "vox"], ["audio/wav", "wav"], ["audio/webm", "weba"], ["audio/x-aac", "aac"], ["audio/x-adpcm", "snd"], ["audio/x-aiff", ["aiff", "aif", "aifc"]], ["audio/x-au", "au"], ["audio/x-gsm", ["gsd", "gsm"]], ["audio/x-jam", "jam"], ["audio/x-liveaudio", "lam"], ["audio/x-mid", ["mid", "midi"]], ["audio/x-midi", ["midi", "mid"]], ["audio/x-mod", "mod"], ["audio/x-mpeg", "mp2"], ["audio/x-mpeg-3", "mp3"], ["audio/x-mpegurl", "m3u"], ["audio/x-mpequrl", "m3u"], ["audio/x-ms-wax", "wax"], ["audio/x-ms-wma", "wma"], ["audio/x-nspaudio", ["la", "lma"]], ["audio/x-pn-realaudio", ["ra", "ram", "rm", "rmm", "rmp"]], ["audio/x-pn-realaudio-plugin", ["ra", "rmp", "rpm"]], ["audio/x-psid", "sid"], ["audio/x-realaudio", "ra"], ["audio/x-twinvq", "vqf"], ["audio/x-twinvq-plugin", ["vqe", "vql"]], ["audio/x-vnd.audioexplosion.mjuicemediafile", "mjf"], ["audio/x-voc", "voc"], ["audio/x-wav", "wav"], ["audio/xm", "xm"], ["chemical/x-cdx", "cdx"], ["chemical/x-cif", "cif"], ["chemical/x-cmdf", "cmdf"], ["chemical/x-cml", "cml"], ["chemical/x-csml", "csml"], ["chemical/x-pdb", ["pdb", "xyz"]], ["chemical/x-xyz", "xyz"], ["drawing/x-dwf", "dwf"], ["i-world/i-vrml", "ivr"], ["image/bmp", ["bmp", "bm"]], ["image/cgm", "cgm"], ["image/cis-cod", "cod"], ["image/cmu-raster", ["ras", "rast"]], ["image/fif", "fif"], ["image/florian", ["flo", "turbot"]], ["image/g3fax", "g3"], ["image/gif", "gif"], ["image/ief", ["ief", "iefs"]], ["image/jpeg", ["jpeg", "jpe", "jpg", "jfif", "jfif-tbnl"]], ["image/jutvision", "jut"], ["image/ktx", "ktx"], ["image/naplps", ["nap", "naplps"]], ["image/pict", ["pic", "pict"]], ["image/pipeg", "jfif"], ["image/pjpeg", ["jfif", "jpe", "jpeg", "jpg"]], ["image/png", ["png", "x-png"]], ["image/prs.btif", "btif"], ["image/svg+xml", "svg"], ["image/tiff", ["tif", "tiff"]], ["image/vasa", "mcf"], ["image/vnd.adobe.photoshop", "psd"], ["image/vnd.dece.graphic", "uvi"], ["image/vnd.djvu", "djvu"], ["image/vnd.dvb.subtitle", "sub"], ["image/vnd.dwg", ["dwg", "dxf", "svf"]], ["image/vnd.dxf", "dxf"], ["image/vnd.fastbidsheet", "fbs"], ["image/vnd.fpx", "fpx"], ["image/vnd.fst", "fst"], ["image/vnd.fujixerox.edmics-mmr", "mmr"], ["image/vnd.fujixerox.edmics-rlc", "rlc"], ["image/vnd.ms-modi", "mdi"], ["image/vnd.net-fpx", ["fpx", "npx"]], ["image/vnd.rn-realflash", "rf"], ["image/vnd.rn-realpix", "rp"], ["image/vnd.wap.wbmp", "wbmp"], ["image/vnd.xiff", "xif"], ["image/webp", "webp"], ["image/x-cmu-raster", "ras"], ["image/x-cmx", "cmx"], ["image/x-dwg", ["dwg", "dxf", "svf"]], ["image/x-freehand", "fh"], ["image/x-icon", "ico"], ["image/x-jg", "art"], ["image/x-jps", "jps"], ["image/x-niff", ["niff", "nif"]], ["image/x-pcx", "pcx"], ["image/x-pict", ["pct", "pic"]], ["image/x-portable-anymap", "pnm"], ["image/x-portable-bitmap", "pbm"], ["image/x-portable-graymap", "pgm"], ["image/x-portable-greymap", "pgm"], ["image/x-portable-pixmap", "ppm"], ["image/x-quicktime", ["qif", "qti", "qtif"]], ["image/x-rgb", "rgb"], ["image/x-tiff", ["tif", "tiff"]], ["image/x-windows-bmp", "bmp"], ["image/x-xbitmap", "xbm"], ["image/x-xbm", "xbm"], ["image/x-xpixmap", ["xpm", "pm"]], ["image/x-xwd", "xwd"], ["image/x-xwindowdump", "xwd"], ["image/xbm", "xbm"], ["image/xpm", "xpm"], ["message/rfc822", ["eml", "mht", "mhtml", "nws", "mime"]], ["model/iges", ["iges", "igs"]], ["model/mesh", "msh"], ["model/vnd.collada+xml", "dae"], ["model/vnd.dwf", "dwf"], ["model/vnd.gdl", "gdl"], ["model/vnd.gtw", "gtw"], ["model/vnd.mts", "mts"], ["model/vnd.vtu", "vtu"], ["model/vrml", ["vrml", "wrl", "wrz"]], ["model/x-pov", "pov"], ["multipart/x-gzip", "gzip"], ["multipart/x-ustar", "ustar"], ["multipart/x-zip", "zip"], ["music/crescendo", ["mid", "midi"]], ["music/x-karaoke", "kar"], ["paleovu/x-pv", "pvu"], ["text/asp", "asp"], ["text/calendar", "ics"], ["text/css", "css"], ["text/csv", "csv"], ["text/ecmascript", "js"], ["text/h323", "323"], ["text/html", ["html", "htm", "stm", "acgi", "htmls", "htx", "shtml"]], ["text/iuls", "uls"], ["text/javascript", "js"], ["text/mcf", "mcf"], ["text/n3", "n3"], ["text/pascal", "pas"], ["text/plain", ["txt", "bas", "c", "h", "c++", "cc", "com", "conf", "cxx", "def", "f", "f90", "for", "g", "hh", "idc", "jav", "java", "list", "log", "lst", "m", "mar", "pl", "sdml", "text"]], ["text/plain-bas", "par"], ["text/prs.lines.tag", "dsc"], ["text/richtext", ["rtx", "rt", "rtf"]], ["text/scriplet", "wsc"], ["text/scriptlet", "sct"], ["text/sgml", ["sgm", "sgml"]], ["text/tab-separated-values", "tsv"], ["text/troff", "t"], ["text/turtle", "ttl"], ["text/uri-list", ["uni", "unis", "uri", "uris"]], ["text/vnd.abc", "abc"], ["text/vnd.curl", "curl"], ["text/vnd.curl.dcurl", "dcurl"], ["text/vnd.curl.mcurl", "mcurl"], ["text/vnd.curl.scurl", "scurl"], ["text/vnd.fly", "fly"], ["text/vnd.fmi.flexstor", "flx"], ["text/vnd.graphviz", "gv"], ["text/vnd.in3d.3dml", "3dml"], ["text/vnd.in3d.spot", "spot"], ["text/vnd.rn-realtext", "rt"], ["text/vnd.sun.j2me.app-descriptor", "jad"], ["text/vnd.wap.wml", "wml"], ["text/vnd.wap.wmlscript", "wmls"], ["text/webviewhtml", "htt"], ["text/x-asm", ["asm", "s"]], ["text/x-audiosoft-intra", "aip"], ["text/x-c", ["c", "cc", "cpp"]], ["text/x-component", "htc"], ["text/x-fortran", ["for", "f", "f77", "f90"]], ["text/x-h", ["h", "hh"]], ["text/x-java-source", ["java", "jav"]], ["text/x-java-source,java", "java"], ["text/x-la-asf", "lsx"], ["text/x-m", "m"], ["text/x-pascal", "p"], ["text/x-script", "hlb"], ["text/x-script.csh", "csh"], ["text/x-script.elisp", "el"], ["text/x-script.guile", "scm"], ["text/x-script.ksh", "ksh"], ["text/x-script.lisp", "lsp"], ["text/x-script.perl", "pl"], ["text/x-script.perl-module", "pm"], ["text/x-script.phyton", "py"], ["text/x-script.rexx", "rexx"], ["text/x-script.scheme", "scm"], ["text/x-script.sh", "sh"], ["text/x-script.tcl", "tcl"], ["text/x-script.tcsh", "tcsh"], ["text/x-script.zsh", "zsh"], ["text/x-server-parsed-html", ["shtml", "ssi"]], ["text/x-setext", "etx"], ["text/x-sgml", ["sgm", "sgml"]], ["text/x-speech", ["spc", "talk"]], ["text/x-uil", "uil"], ["text/x-uuencode", ["uu", "uue"]], ["text/x-vcalendar", "vcs"], ["text/x-vcard", "vcf"], ["text/xml", "xml"], ["video/3gpp", "3gp"], ["video/3gpp2", "3g2"], ["video/animaflex", "afl"], ["video/avi", "avi"], ["video/avs-video", "avs"], ["video/dl", "dl"], ["video/fli", "fli"], ["video/gl", "gl"], ["video/h261", "h261"], ["video/h263", "h263"], ["video/h264", "h264"], ["video/jpeg", "jpgv"], ["video/jpm", "jpm"], ["video/mj2", "mj2"], ["video/mp4", "mp4"], ["video/mpeg", ["mpeg", "mp2", "mpa", "mpe", "mpg", "mpv2", "m1v", "m2v", "mp3"]], ["video/msvideo", "avi"], ["video/ogg", "ogv"], ["video/quicktime", ["mov", "qt", "moov"]], ["video/vdo", "vdo"], ["video/vivo", ["viv", "vivo"]], ["video/vnd.dece.hd", "uvh"], ["video/vnd.dece.mobile", "uvm"], ["video/vnd.dece.pd", "uvp"], ["video/vnd.dece.sd", "uvs"], ["video/vnd.dece.video", "uvv"], ["video/vnd.fvt", "fvt"], ["video/vnd.mpegurl", "mxu"], ["video/vnd.ms-playready.media.pyv", "pyv"], ["video/vnd.rn-realvideo", "rv"], ["video/vnd.uvvu.mp4", "uvu"], ["video/vnd.vivo", ["viv", "vivo"]], ["video/vosaic", "vos"], ["video/webm", "webm"], ["video/x-amt-demorun", "xdr"], ["video/x-amt-showrun", "xsr"], ["video/x-atomic3d-feature", "fmf"], ["video/x-dl", "dl"], ["video/x-dv", ["dif", "dv"]], ["video/x-f4v", "f4v"], ["video/x-fli", "fli"], ["video/x-flv", "flv"], ["video/x-gl", "gl"], ["video/x-isvideo", "isu"], ["video/x-la-asf", ["lsf", "lsx"]], ["video/x-m4v", "m4v"], ["video/x-motion-jpeg", "mjpg"], ["video/x-mpeg", ["mp3", "mp2"]], ["video/x-mpeq2a", "mp2"], ["video/x-ms-asf", ["asf", "asr", "asx"]], ["video/x-ms-asf-plugin", "asx"], ["video/x-ms-wm", "wm"], ["video/x-ms-wmv", "wmv"], ["video/x-ms-wmx", "wmx"], ["video/x-ms-wvx", "wvx"], ["video/x-msvideo", "avi"], ["video/x-qtc", "qtc"], ["video/x-scm", "scm"], ["video/x-sgi-movie", ["movie", "mv"]], ["windows/metafile", "wmf"], ["www/mime", "mime"], ["x-conference/x-cooltalk", "ice"], ["x-music/x-midi", ["mid", "midi"]], ["x-world/x-3dmf", ["3dm", "3dmf", "qd3", "qd3d"]], ["x-world/x-svr", "svr"], ["x-world/x-vrml", ["flr", "vrml", "wrl", "wrz", "xaf", "xof"]], ["x-world/x-vrt", "vrt"], ["xgl/drawing", "xgz"], ["xgl/movie", "xmz"]]), o = /* @__PURE__ */ new Map([["123", "application/vnd.lotus-1-2-3"], ["323", "text/h323"], ["*", "application/octet-stream"], ["3dm", "x-world/x-3dmf"], ["3dmf", "x-world/x-3dmf"], ["3dml", "text/vnd.in3d.3dml"], ["3g2", "video/3gpp2"], ["3gp", "video/3gpp"], ["7z", "application/x-7z-compressed"], ["a", "application/octet-stream"], ["aab", "application/x-authorware-bin"], ["aac", "audio/x-aac"], ["aam", "application/x-authorware-map"], ["aas", "application/x-authorware-seg"], ["abc", "text/vnd.abc"], ["abw", "application/x-abiword"], ["ac", "application/pkix-attr-cert"], ["acc", "application/vnd.americandynamics.acc"], ["ace", "application/x-ace-compressed"], ["acgi", "text/html"], ["acu", "application/vnd.acucobol"], ["acx", "application/internet-property-stream"], ["adp", "audio/adpcm"], ["aep", "application/vnd.audiograph"], ["afl", "video/animaflex"], ["afp", "application/vnd.ibm.modcap"], ["ahead", "application/vnd.ahead.space"], ["ai", "application/postscript"], ["aif", ["audio/aiff", "audio/x-aiff"]], ["aifc", ["audio/aiff", "audio/x-aiff"]], ["aiff", ["audio/aiff", "audio/x-aiff"]], ["aim", "application/x-aim"], ["aip", "text/x-audiosoft-intra"], ["air", "application/vnd.adobe.air-application-installer-package+zip"], ["ait", "application/vnd.dvb.ait"], ["ami", "application/vnd.amiga.ami"], ["ani", "application/x-navi-animation"], ["aos", "application/x-nokia-9000-communicator-add-on-software"], ["apk", "application/vnd.android.package-archive"], ["application", "application/x-ms-application"], ["apr", "application/vnd.lotus-approach"], ["aps", "application/mime"], ["arc", "application/octet-stream"], ["arj", ["application/arj", "application/octet-stream"]], ["art", "image/x-jg"], ["asf", "video/x-ms-asf"], ["asm", "text/x-asm"], ["aso", "application/vnd.accpac.simply.aso"], ["asp", "text/asp"], ["asr", "video/x-ms-asf"], ["asx", ["video/x-ms-asf", "application/x-mplayer2", "video/x-ms-asf-plugin"]], ["atc", "application/vnd.acucorp"], ["atomcat", "application/atomcat+xml"], ["atomsvc", "application/atomsvc+xml"], ["atx", "application/vnd.antix.game-component"], ["au", ["audio/basic", "audio/x-au"]], ["avi", ["video/avi", "video/msvideo", "application/x-troff-msvideo", "video/x-msvideo"]], ["avs", "video/avs-video"], ["aw", "application/applixware"], ["axs", "application/olescript"], ["azf", "application/vnd.airzip.filesecure.azf"], ["azs", "application/vnd.airzip.filesecure.azs"], ["azw", "application/vnd.amazon.ebook"], ["bas", "text/plain"], ["bcpio", "application/x-bcpio"], ["bdf", "application/x-font-bdf"], ["bdm", "application/vnd.syncml.dm+wbxml"], ["bed", "application/vnd.realvnc.bed"], ["bh2", "application/vnd.fujitsu.oasysprs"], ["bin", ["application/octet-stream", "application/mac-binary", "application/macbinary", "application/x-macbinary", "application/x-binary"]], ["bm", "image/bmp"], ["bmi", "application/vnd.bmi"], ["bmp", ["image/bmp", "image/x-windows-bmp"]], ["boo", "application/book"], ["book", "application/book"], ["box", "application/vnd.previewsystems.box"], ["boz", "application/x-bzip2"], ["bsh", "application/x-bsh"], ["btif", "image/prs.btif"], ["bz", "application/x-bzip"], ["bz2", "application/x-bzip2"], ["c", ["text/plain", "text/x-c"]], ["c++", "text/plain"], ["c11amc", "application/vnd.cluetrust.cartomobile-config"], ["c11amz", "application/vnd.cluetrust.cartomobile-config-pkg"], ["c4g", "application/vnd.clonk.c4group"], ["cab", "application/vnd.ms-cab-compressed"], ["car", "application/vnd.curl.car"], ["cat", ["application/vnd.ms-pkiseccat", "application/vnd.ms-pki.seccat"]], ["cc", ["text/plain", "text/x-c"]], ["ccad", "application/clariscad"], ["cco", "application/x-cocoa"], ["ccxml", "application/ccxml+xml,"], ["cdbcmsg", "application/vnd.contact.cmsg"], ["cdf", ["application/cdf", "application/x-cdf", "application/x-netcdf"]], ["cdkey", "application/vnd.mediastation.cdkey"], ["cdmia", "application/cdmi-capability"], ["cdmic", "application/cdmi-container"], ["cdmid", "application/cdmi-domain"], ["cdmio", "application/cdmi-object"], ["cdmiq", "application/cdmi-queue"], ["cdx", "chemical/x-cdx"], ["cdxml", "application/vnd.chemdraw+xml"], ["cdy", "application/vnd.cinderella"], ["cer", ["application/pkix-cert", "application/x-x509-ca-cert"]], ["cgm", "image/cgm"], ["cha", "application/x-chat"], ["chat", "application/x-chat"], ["chm", "application/vnd.ms-htmlhelp"], ["chrt", "application/vnd.kde.kchart"], ["cif", "chemical/x-cif"], ["cii", "application/vnd.anser-web-certificate-issue-initiation"], ["cil", "application/vnd.ms-artgalry"], ["cla", "application/vnd.claymore"], ["class", ["application/octet-stream", "application/java", "application/java-byte-code", "application/java-vm", "application/x-java-class"]], ["clkk", "application/vnd.crick.clicker.keyboard"], ["clkp", "application/vnd.crick.clicker.palette"], ["clkt", "application/vnd.crick.clicker.template"], ["clkw", "application/vnd.crick.clicker.wordbank"], ["clkx", "application/vnd.crick.clicker"], ["clp", "application/x-msclip"], ["cmc", "application/vnd.cosmocaller"], ["cmdf", "chemical/x-cmdf"], ["cml", "chemical/x-cml"], ["cmp", "application/vnd.yellowriver-custom-menu"], ["cmx", "image/x-cmx"], ["cod", ["image/cis-cod", "application/vnd.rim.cod"]], ["com", ["application/octet-stream", "text/plain"]], ["conf", "text/plain"], ["cpio", "application/x-cpio"], ["cpp", "text/x-c"], ["cpt", ["application/mac-compactpro", "application/x-compactpro", "application/x-cpt"]], ["crd", "application/x-mscardfile"], ["crl", ["application/pkix-crl", "application/pkcs-crl"]], ["crt", ["application/pkix-cert", "application/x-x509-user-cert", "application/x-x509-ca-cert"]], ["cryptonote", "application/vnd.rig.cryptonote"], ["csh", ["text/x-script.csh", "application/x-csh"]], ["csml", "chemical/x-csml"], ["csp", "application/vnd.commonspace"], ["css", ["text/css", "application/x-pointplus"]], ["csv", "text/csv"], ["cu", "application/cu-seeme"], ["curl", "text/vnd.curl"], ["cww", "application/prs.cww"], ["cxx", "text/plain"], ["dae", "model/vnd.collada+xml"], ["daf", "application/vnd.mobius.daf"], ["davmount", "application/davmount+xml"], ["dcr", "application/x-director"], ["dcurl", "text/vnd.curl.dcurl"], ["dd2", "application/vnd.oma.dd2+xml"], ["ddd", "application/vnd.fujixerox.ddd"], ["deb", "application/x-debian-package"], ["deepv", "application/x-deepv"], ["def", "text/plain"], ["der", "application/x-x509-ca-cert"], ["dfac", "application/vnd.dreamfactory"], ["dif", "video/x-dv"], ["dir", "application/x-director"], ["dis", "application/vnd.mobius.dis"], ["djvu", "image/vnd.djvu"], ["dl", ["video/dl", "video/x-dl"]], ["dll", "application/x-msdownload"], ["dms", "application/octet-stream"], ["dna", "application/vnd.dna"], ["doc", "application/msword"], ["docm", "application/vnd.ms-word.document.macroenabled.12"], ["docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], ["dot", "application/msword"], ["dotm", "application/vnd.ms-word.template.macroenabled.12"], ["dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"], ["dp", ["application/commonground", "application/vnd.osgi.dp"]], ["dpg", "application/vnd.dpgraph"], ["dra", "audio/vnd.dra"], ["drw", "application/drafting"], ["dsc", "text/prs.lines.tag"], ["dssc", "application/dssc+der"], ["dtb", "application/x-dtbook+xml"], ["dtd", "application/xml-dtd"], ["dts", "audio/vnd.dts"], ["dtshd", "audio/vnd.dts.hd"], ["dump", "application/octet-stream"], ["dv", "video/x-dv"], ["dvi", "application/x-dvi"], ["dwf", ["model/vnd.dwf", "drawing/x-dwf"]], ["dwg", ["application/acad", "image/vnd.dwg", "image/x-dwg"]], ["dxf", ["application/dxf", "image/vnd.dwg", "image/vnd.dxf", "image/x-dwg"]], ["dxp", "application/vnd.spotfire.dxp"], ["dxr", "application/x-director"], ["ecelp4800", "audio/vnd.nuera.ecelp4800"], ["ecelp7470", "audio/vnd.nuera.ecelp7470"], ["ecelp9600", "audio/vnd.nuera.ecelp9600"], ["edm", "application/vnd.novadigm.edm"], ["edx", "application/vnd.novadigm.edx"], ["efif", "application/vnd.picsel"], ["ei6", "application/vnd.pg.osasli"], ["el", "text/x-script.elisp"], ["elc", ["application/x-elc", "application/x-bytecode.elisp"]], ["eml", "message/rfc822"], ["emma", "application/emma+xml"], ["env", "application/x-envoy"], ["eol", "audio/vnd.digital-winds"], ["eot", "application/vnd.ms-fontobject"], ["eps", "application/postscript"], ["epub", "application/epub+zip"], ["es", ["application/ecmascript", "application/x-esrehber"]], ["es3", "application/vnd.eszigno3+xml"], ["esf", "application/vnd.epson.esf"], ["etx", "text/x-setext"], ["evy", ["application/envoy", "application/x-envoy"]], ["exe", ["application/octet-stream", "application/x-msdownload"]], ["exi", "application/exi"], ["ext", "application/vnd.novadigm.ext"], ["ez2", "application/vnd.ezpix-album"], ["ez3", "application/vnd.ezpix-package"], ["f", ["text/plain", "text/x-fortran"]], ["f4v", "video/x-f4v"], ["f77", "text/x-fortran"], ["f90", ["text/plain", "text/x-fortran"]], ["fbs", "image/vnd.fastbidsheet"], ["fcs", "application/vnd.isac.fcs"], ["fdf", "application/vnd.fdf"], ["fe_launch", "application/vnd.denovo.fcselayout-link"], ["fg5", "application/vnd.fujitsu.oasysgp"], ["fh", "image/x-freehand"], ["fif", ["application/fractals", "image/fif"]], ["fig", "application/x-xfig"], ["fli", ["video/fli", "video/x-fli"]], ["flo", ["image/florian", "application/vnd.micrografx.flo"]], ["flr", "x-world/x-vrml"], ["flv", "video/x-flv"], ["flw", "application/vnd.kde.kivio"], ["flx", "text/vnd.fmi.flexstor"], ["fly", "text/vnd.fly"], ["fm", "application/vnd.framemaker"], ["fmf", "video/x-atomic3d-feature"], ["fnc", "application/vnd.frogans.fnc"], ["for", ["text/plain", "text/x-fortran"]], ["fpx", ["image/vnd.fpx", "image/vnd.net-fpx"]], ["frl", "application/freeloader"], ["fsc", "application/vnd.fsc.weblaunch"], ["fst", "image/vnd.fst"], ["ftc", "application/vnd.fluxtime.clip"], ["fti", "application/vnd.anser-web-funds-transfer-initiation"], ["funk", "audio/make"], ["fvt", "video/vnd.fvt"], ["fxp", "application/vnd.adobe.fxp"], ["fzs", "application/vnd.fuzzysheet"], ["g", "text/plain"], ["g2w", "application/vnd.geoplan"], ["g3", "image/g3fax"], ["g3w", "application/vnd.geospace"], ["gac", "application/vnd.groove-account"], ["gdl", "model/vnd.gdl"], ["geo", "application/vnd.dynageo"], ["gex", "application/vnd.geometry-explorer"], ["ggb", "application/vnd.geogebra.file"], ["ggt", "application/vnd.geogebra.tool"], ["ghf", "application/vnd.groove-help"], ["gif", "image/gif"], ["gim", "application/vnd.groove-identity-message"], ["gl", ["video/gl", "video/x-gl"]], ["gmx", "application/vnd.gmx"], ["gnumeric", "application/x-gnumeric"], ["gph", "application/vnd.flographit"], ["gqf", "application/vnd.grafeq"], ["gram", "application/srgs"], ["grv", "application/vnd.groove-injector"], ["grxml", "application/srgs+xml"], ["gsd", "audio/x-gsm"], ["gsf", "application/x-font-ghostscript"], ["gsm", "audio/x-gsm"], ["gsp", "application/x-gsp"], ["gss", "application/x-gss"], ["gtar", "application/x-gtar"], ["gtm", "application/vnd.groove-tool-message"], ["gtw", "model/vnd.gtw"], ["gv", "text/vnd.graphviz"], ["gxt", "application/vnd.geonext"], ["gz", ["application/x-gzip", "application/x-compressed"]], ["gzip", ["multipart/x-gzip", "application/x-gzip"]], ["h", ["text/plain", "text/x-h"]], ["h261", "video/h261"], ["h263", "video/h263"], ["h264", "video/h264"], ["hal", "application/vnd.hal+xml"], ["hbci", "application/vnd.hbci"], ["hdf", "application/x-hdf"], ["help", "application/x-helpfile"], ["hgl", "application/vnd.hp-hpgl"], ["hh", ["text/plain", "text/x-h"]], ["hlb", "text/x-script"], ["hlp", ["application/winhlp", "application/hlp", "application/x-helpfile", "application/x-winhelp"]], ["hpg", "application/vnd.hp-hpgl"], ["hpgl", "application/vnd.hp-hpgl"], ["hpid", "application/vnd.hp-hpid"], ["hps", "application/vnd.hp-hps"], ["hqx", ["application/mac-binhex40", "application/binhex", "application/binhex4", "application/mac-binhex", "application/x-binhex40", "application/x-mac-binhex40"]], ["hta", "application/hta"], ["htc", "text/x-component"], ["htke", "application/vnd.kenameaapp"], ["htm", "text/html"], ["html", "text/html"], ["htmls", "text/html"], ["htt", "text/webviewhtml"], ["htx", "text/html"], ["hvd", "application/vnd.yamaha.hv-dic"], ["hvp", "application/vnd.yamaha.hv-voice"], ["hvs", "application/vnd.yamaha.hv-script"], ["i2g", "application/vnd.intergeo"], ["icc", "application/vnd.iccprofile"], ["ice", "x-conference/x-cooltalk"], ["ico", "image/x-icon"], ["ics", "text/calendar"], ["idc", "text/plain"], ["ief", "image/ief"], ["iefs", "image/ief"], ["ifm", "application/vnd.shana.informed.formdata"], ["iges", ["application/iges", "model/iges"]], ["igl", "application/vnd.igloader"], ["igm", "application/vnd.insors.igm"], ["igs", ["application/iges", "model/iges"]], ["igx", "application/vnd.micrografx.igx"], ["iif", "application/vnd.shana.informed.interchange"], ["iii", "application/x-iphone"], ["ima", "application/x-ima"], ["imap", "application/x-httpd-imap"], ["imp", "application/vnd.accpac.simply.imp"], ["ims", "application/vnd.ms-ims"], ["inf", "application/inf"], ["ins", ["application/x-internet-signup", "application/x-internett-signup"]], ["ip", "application/x-ip2"], ["ipfix", "application/ipfix"], ["ipk", "application/vnd.shana.informed.package"], ["irm", "application/vnd.ibm.rights-management"], ["irp", "application/vnd.irepository.package+xml"], ["isp", "application/x-internet-signup"], ["isu", "video/x-isvideo"], ["it", "audio/it"], ["itp", "application/vnd.shana.informed.formtemplate"], ["iv", "application/x-inventor"], ["ivp", "application/vnd.immervision-ivp"], ["ivr", "i-world/i-vrml"], ["ivu", "application/vnd.immervision-ivu"], ["ivy", "application/x-livescreen"], ["jad", "text/vnd.sun.j2me.app-descriptor"], ["jam", ["application/vnd.jam", "audio/x-jam"]], ["jar", "application/java-archive"], ["jav", ["text/plain", "text/x-java-source"]], ["java", ["text/plain", "text/x-java-source,java", "text/x-java-source"]], ["jcm", "application/x-java-commerce"], ["jfif", ["image/pipeg", "image/jpeg", "image/pjpeg"]], ["jfif-tbnl", "image/jpeg"], ["jisp", "application/vnd.jisp"], ["jlt", "application/vnd.hp-jlyt"], ["jnlp", "application/x-java-jnlp-file"], ["joda", "application/vnd.joost.joda-archive"], ["jpe", ["image/jpeg", "image/pjpeg"]], ["jpeg", ["image/jpeg", "image/pjpeg"]], ["jpg", ["image/jpeg", "image/pjpeg"]], ["jpgv", "video/jpeg"], ["jpm", "video/jpm"], ["jps", "image/x-jps"], ["js", ["application/javascript", "application/ecmascript", "text/javascript", "text/ecmascript", "application/x-javascript"]], ["json", "application/json"], ["jut", "image/jutvision"], ["kar", ["audio/midi", "music/x-karaoke"]], ["karbon", "application/vnd.kde.karbon"], ["kfo", "application/vnd.kde.kformula"], ["kia", "application/vnd.kidspiration"], ["kml", "application/vnd.google-earth.kml+xml"], ["kmz", "application/vnd.google-earth.kmz"], ["kne", "application/vnd.kinar"], ["kon", "application/vnd.kde.kontour"], ["kpr", "application/vnd.kde.kpresenter"], ["ksh", ["application/x-ksh", "text/x-script.ksh"]], ["ksp", "application/vnd.kde.kspread"], ["ktx", "image/ktx"], ["ktz", "application/vnd.kahootz"], ["kwd", "application/vnd.kde.kword"], ["la", ["audio/nspaudio", "audio/x-nspaudio"]], ["lam", "audio/x-liveaudio"], ["lasxml", "application/vnd.las.las+xml"], ["latex", "application/x-latex"], ["lbd", "application/vnd.llamagraphics.life-balance.desktop"], ["lbe", "application/vnd.llamagraphics.life-balance.exchange+xml"], ["les", "application/vnd.hhe.lesson-player"], ["lha", ["application/octet-stream", "application/lha", "application/x-lha"]], ["lhx", "application/octet-stream"], ["link66", "application/vnd.route66.link66+xml"], ["list", "text/plain"], ["lma", ["audio/nspaudio", "audio/x-nspaudio"]], ["log", "text/plain"], ["lrm", "application/vnd.ms-lrm"], ["lsf", "video/x-la-asf"], ["lsp", ["application/x-lisp", "text/x-script.lisp"]], ["lst", "text/plain"], ["lsx", ["video/x-la-asf", "text/x-la-asf"]], ["ltf", "application/vnd.frogans.ltf"], ["ltx", "application/x-latex"], ["lvp", "audio/vnd.lucent.voice"], ["lwp", "application/vnd.lotus-wordpro"], ["lzh", ["application/octet-stream", "application/x-lzh"]], ["lzx", ["application/lzx", "application/octet-stream", "application/x-lzx"]], ["m", ["text/plain", "text/x-m"]], ["m13", "application/x-msmediaview"], ["m14", "application/x-msmediaview"], ["m1v", "video/mpeg"], ["m21", "application/mp21"], ["m2a", "audio/mpeg"], ["m2v", "video/mpeg"], ["m3u", ["audio/x-mpegurl", "audio/x-mpequrl"]], ["m3u8", "application/vnd.apple.mpegurl"], ["m4v", "video/x-m4v"], ["ma", "application/mathematica"], ["mads", "application/mads+xml"], ["mag", "application/vnd.ecowin.chart"], ["man", "application/x-troff-man"], ["map", "application/x-navimap"], ["mar", "text/plain"], ["mathml", "application/mathml+xml"], ["mbd", "application/mbedlet"], ["mbk", "application/vnd.mobius.mbk"], ["mbox", "application/mbox"], ["mc$", "application/x-magic-cap-package-1.0"], ["mc1", "application/vnd.medcalcdata"], ["mcd", ["application/mcad", "application/vnd.mcd", "application/x-mathcad"]], ["mcf", ["image/vasa", "text/mcf"]], ["mcp", "application/netmc"], ["mcurl", "text/vnd.curl.mcurl"], ["mdb", "application/x-msaccess"], ["mdi", "image/vnd.ms-modi"], ["me", "application/x-troff-me"], ["meta4", "application/metalink4+xml"], ["mets", "application/mets+xml"], ["mfm", "application/vnd.mfmp"], ["mgp", "application/vnd.osgeo.mapguide.package"], ["mgz", "application/vnd.proteus.magazine"], ["mht", "message/rfc822"], ["mhtml", "message/rfc822"], ["mid", ["audio/mid", "audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"]], ["midi", ["audio/midi", "music/crescendo", "x-music/x-midi", "audio/x-midi", "application/x-midi", "audio/x-mid"]], ["mif", ["application/vnd.mif", "application/x-mif", "application/x-frame"]], ["mime", ["message/rfc822", "www/mime"]], ["mj2", "video/mj2"], ["mjf", "audio/x-vnd.audioexplosion.mjuicemediafile"], ["mjpg", "video/x-motion-jpeg"], ["mlp", "application/vnd.dolby.mlp"], ["mm", ["application/base64", "application/x-meme"]], ["mmd", "application/vnd.chipnuts.karaoke-mmd"], ["mme", "application/base64"], ["mmf", "application/vnd.smaf"], ["mmr", "image/vnd.fujixerox.edmics-mmr"], ["mny", "application/x-msmoney"], ["mod", ["audio/mod", "audio/x-mod"]], ["mods", "application/mods+xml"], ["moov", "video/quicktime"], ["mov", "video/quicktime"], ["movie", "video/x-sgi-movie"], ["mp2", ["video/mpeg", "audio/mpeg", "video/x-mpeg", "audio/x-mpeg", "video/x-mpeq2a"]], ["mp3", ["audio/mpeg", "audio/mpeg3", "video/mpeg", "audio/x-mpeg-3", "video/x-mpeg"]], ["mp4", ["video/mp4", "application/mp4"]], ["mp4a", "audio/mp4"], ["mpa", ["video/mpeg", "audio/mpeg"]], ["mpc", ["application/vnd.mophun.certificate", "application/x-project"]], ["mpe", "video/mpeg"], ["mpeg", "video/mpeg"], ["mpg", ["video/mpeg", "audio/mpeg"]], ["mpga", "audio/mpeg"], ["mpkg", "application/vnd.apple.installer+xml"], ["mpm", "application/vnd.blueice.multipass"], ["mpn", "application/vnd.mophun.application"], ["mpp", "application/vnd.ms-project"], ["mpt", "application/x-project"], ["mpv", "application/x-project"], ["mpv2", "video/mpeg"], ["mpx", "application/x-project"], ["mpy", "application/vnd.ibm.minipay"], ["mqy", "application/vnd.mobius.mqy"], ["mrc", "application/marc"], ["mrcx", "application/marcxml+xml"], ["ms", "application/x-troff-ms"], ["mscml", "application/mediaservercontrol+xml"], ["mseq", "application/vnd.mseq"], ["msf", "application/vnd.epson.msf"], ["msg", "application/vnd.ms-outlook"], ["msh", "model/mesh"], ["msl", "application/vnd.mobius.msl"], ["msty", "application/vnd.muvee.style"], ["mts", "model/vnd.mts"], ["mus", "application/vnd.musician"], ["musicxml", "application/vnd.recordare.musicxml+xml"], ["mv", "video/x-sgi-movie"], ["mvb", "application/x-msmediaview"], ["mwf", "application/vnd.mfer"], ["mxf", "application/mxf"], ["mxl", "application/vnd.recordare.musicxml"], ["mxml", "application/xv+xml"], ["mxs", "application/vnd.triscape.mxs"], ["mxu", "video/vnd.mpegurl"], ["my", "audio/make"], ["mzz", "application/x-vnd.audioexplosion.mzz"], ["n-gage", "application/vnd.nokia.n-gage.symbian.install"], ["n3", "text/n3"], ["nap", "image/naplps"], ["naplps", "image/naplps"], ["nbp", "application/vnd.wolfram.player"], ["nc", "application/x-netcdf"], ["ncm", "application/vnd.nokia.configuration-message"], ["ncx", "application/x-dtbncx+xml"], ["ngdat", "application/vnd.nokia.n-gage.data"], ["nif", "image/x-niff"], ["niff", "image/x-niff"], ["nix", "application/x-mix-transfer"], ["nlu", "application/vnd.neurolanguage.nlu"], ["nml", "application/vnd.enliven"], ["nnd", "application/vnd.noblenet-directory"], ["nns", "application/vnd.noblenet-sealer"], ["nnw", "application/vnd.noblenet-web"], ["npx", "image/vnd.net-fpx"], ["nsc", "application/x-conference"], ["nsf", "application/vnd.lotus-notes"], ["nvd", "application/x-navidoc"], ["nws", "message/rfc822"], ["o", "application/octet-stream"], ["oa2", "application/vnd.fujitsu.oasys2"], ["oa3", "application/vnd.fujitsu.oasys3"], ["oas", "application/vnd.fujitsu.oasys"], ["obd", "application/x-msbinder"], ["oda", "application/oda"], ["odb", "application/vnd.oasis.opendocument.database"], ["odc", "application/vnd.oasis.opendocument.chart"], ["odf", "application/vnd.oasis.opendocument.formula"], ["odft", "application/vnd.oasis.opendocument.formula-template"], ["odg", "application/vnd.oasis.opendocument.graphics"], ["odi", "application/vnd.oasis.opendocument.image"], ["odm", "application/vnd.oasis.opendocument.text-master"], ["odp", "application/vnd.oasis.opendocument.presentation"], ["ods", "application/vnd.oasis.opendocument.spreadsheet"], ["odt", "application/vnd.oasis.opendocument.text"], ["oga", "audio/ogg"], ["ogv", "video/ogg"], ["ogx", "application/ogg"], ["omc", "application/x-omc"], ["omcd", "application/x-omcdatamaker"], ["omcr", "application/x-omcregerator"], ["onetoc", "application/onenote"], ["opf", "application/oebps-package+xml"], ["org", "application/vnd.lotus-organizer"], ["osf", "application/vnd.yamaha.openscoreformat"], ["osfpvg", "application/vnd.yamaha.openscoreformat.osfpvg+xml"], ["otc", "application/vnd.oasis.opendocument.chart-template"], ["otf", "application/x-font-otf"], ["otg", "application/vnd.oasis.opendocument.graphics-template"], ["oth", "application/vnd.oasis.opendocument.text-web"], ["oti", "application/vnd.oasis.opendocument.image-template"], ["otp", "application/vnd.oasis.opendocument.presentation-template"], ["ots", "application/vnd.oasis.opendocument.spreadsheet-template"], ["ott", "application/vnd.oasis.opendocument.text-template"], ["oxt", "application/vnd.openofficeorg.extension"], ["p", "text/x-pascal"], ["p10", ["application/pkcs10", "application/x-pkcs10"]], ["p12", ["application/pkcs-12", "application/x-pkcs12"]], ["p7a", "application/x-pkcs7-signature"], ["p7b", "application/x-pkcs7-certificates"], ["p7c", ["application/pkcs7-mime", "application/x-pkcs7-mime"]], ["p7m", ["application/pkcs7-mime", "application/x-pkcs7-mime"]], ["p7r", "application/x-pkcs7-certreqresp"], ["p7s", ["application/pkcs7-signature", "application/x-pkcs7-signature"]], ["p8", "application/pkcs8"], ["par", "text/plain-bas"], ["part", "application/pro_eng"], ["pas", "text/pascal"], ["paw", "application/vnd.pawaafile"], ["pbd", "application/vnd.powerbuilder6"], ["pbm", "image/x-portable-bitmap"], ["pcf", "application/x-font-pcf"], ["pcl", ["application/vnd.hp-pcl", "application/x-pcl"]], ["pclxl", "application/vnd.hp-pclxl"], ["pct", "image/x-pict"], ["pcurl", "application/vnd.curl.pcurl"], ["pcx", "image/x-pcx"], ["pdb", ["application/vnd.palm", "chemical/x-pdb"]], ["pdf", "application/pdf"], ["pfa", "application/x-font-type1"], ["pfr", "application/font-tdpfr"], ["pfunk", ["audio/make", "audio/make.my.funk"]], ["pfx", "application/x-pkcs12"], ["pgm", ["image/x-portable-graymap", "image/x-portable-greymap"]], ["pgn", "application/x-chess-pgn"], ["pgp", "application/pgp-signature"], ["pic", ["image/pict", "image/x-pict"]], ["pict", "image/pict"], ["pkg", "application/x-newton-compatible-pkg"], ["pki", "application/pkixcmp"], ["pkipath", "application/pkix-pkipath"], ["pko", ["application/ynd.ms-pkipko", "application/vnd.ms-pki.pko"]], ["pl", ["text/plain", "text/x-script.perl"]], ["plb", "application/vnd.3gpp.pic-bw-large"], ["plc", "application/vnd.mobius.plc"], ["plf", "application/vnd.pocketlearn"], ["pls", "application/pls+xml"], ["plx", "application/x-pixclscript"], ["pm", ["text/x-script.perl-module", "image/x-xpixmap"]], ["pm4", "application/x-pagemaker"], ["pm5", "application/x-pagemaker"], ["pma", "application/x-perfmon"], ["pmc", "application/x-perfmon"], ["pml", ["application/vnd.ctc-posml", "application/x-perfmon"]], ["pmr", "application/x-perfmon"], ["pmw", "application/x-perfmon"], ["png", "image/png"], ["pnm", ["application/x-portable-anymap", "image/x-portable-anymap"]], ["portpkg", "application/vnd.macports.portpkg"], ["pot", ["application/vnd.ms-powerpoint", "application/mspowerpoint"]], ["potm", "application/vnd.ms-powerpoint.template.macroenabled.12"], ["potx", "application/vnd.openxmlformats-officedocument.presentationml.template"], ["pov", "model/x-pov"], ["ppa", "application/vnd.ms-powerpoint"], ["ppam", "application/vnd.ms-powerpoint.addin.macroenabled.12"], ["ppd", "application/vnd.cups-ppd"], ["ppm", "image/x-portable-pixmap"], ["pps", ["application/vnd.ms-powerpoint", "application/mspowerpoint"]], ["ppsm", "application/vnd.ms-powerpoint.slideshow.macroenabled.12"], ["ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"], ["ppt", ["application/vnd.ms-powerpoint", "application/mspowerpoint", "application/powerpoint", "application/x-mspowerpoint"]], ["pptm", "application/vnd.ms-powerpoint.presentation.macroenabled.12"], ["pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"], ["ppz", "application/mspowerpoint"], ["prc", "application/x-mobipocket-ebook"], ["pre", ["application/vnd.lotus-freelance", "application/x-freelance"]], ["prf", "application/pics-rules"], ["prt", "application/pro_eng"], ["ps", "application/postscript"], ["psb", "application/vnd.3gpp.pic-bw-small"], ["psd", ["application/octet-stream", "image/vnd.adobe.photoshop"]], ["psf", "application/x-font-linux-psf"], ["pskcxml", "application/pskc+xml"], ["ptid", "application/vnd.pvi.ptid1"], ["pub", "application/x-mspublisher"], ["pvb", "application/vnd.3gpp.pic-bw-var"], ["pvu", "paleovu/x-pv"], ["pwn", "application/vnd.3m.post-it-notes"], ["pwz", "application/vnd.ms-powerpoint"], ["py", "text/x-script.phyton"], ["pya", "audio/vnd.ms-playready.media.pya"], ["pyc", "application/x-bytecode.python"], ["pyv", "video/vnd.ms-playready.media.pyv"], ["qam", "application/vnd.epson.quickanime"], ["qbo", "application/vnd.intu.qbo"], ["qcp", "audio/vnd.qcelp"], ["qd3", "x-world/x-3dmf"], ["qd3d", "x-world/x-3dmf"], ["qfx", "application/vnd.intu.qfx"], ["qif", "image/x-quicktime"], ["qps", "application/vnd.publishare-delta-tree"], ["qt", "video/quicktime"], ["qtc", "video/x-qtc"], ["qti", "image/x-quicktime"], ["qtif", "image/x-quicktime"], ["qxd", "application/vnd.quark.quarkxpress"], ["ra", ["audio/x-realaudio", "audio/x-pn-realaudio", "audio/x-pn-realaudio-plugin"]], ["ram", "audio/x-pn-realaudio"], ["rar", "application/x-rar-compressed"], ["ras", ["image/cmu-raster", "application/x-cmu-raster", "image/x-cmu-raster"]], ["rast", "image/cmu-raster"], ["rcprofile", "application/vnd.ipunplugged.rcprofile"], ["rdf", "application/rdf+xml"], ["rdz", "application/vnd.data-vision.rdz"], ["rep", "application/vnd.businessobjects"], ["res", "application/x-dtbresource+xml"], ["rexx", "text/x-script.rexx"], ["rf", "image/vnd.rn-realflash"], ["rgb", "image/x-rgb"], ["rif", "application/reginfo+xml"], ["rip", "audio/vnd.rip"], ["rl", "application/resource-lists+xml"], ["rlc", "image/vnd.fujixerox.edmics-rlc"], ["rld", "application/resource-lists-diff+xml"], ["rm", ["application/vnd.rn-realmedia", "audio/x-pn-realaudio"]], ["rmi", "audio/mid"], ["rmm", "audio/x-pn-realaudio"], ["rmp", ["audio/x-pn-realaudio-plugin", "audio/x-pn-realaudio"]], ["rms", "application/vnd.jcp.javame.midlet-rms"], ["rnc", "application/relax-ng-compact-syntax"], ["rng", ["application/ringing-tones", "application/vnd.nokia.ringing-tone"]], ["rnx", "application/vnd.rn-realplayer"], ["roff", "application/x-troff"], ["rp", "image/vnd.rn-realpix"], ["rp9", "application/vnd.cloanto.rp9"], ["rpm", "audio/x-pn-realaudio-plugin"], ["rpss", "application/vnd.nokia.radio-presets"], ["rpst", "application/vnd.nokia.radio-preset"], ["rq", "application/sparql-query"], ["rs", "application/rls-services+xml"], ["rsd", "application/rsd+xml"], ["rt", ["text/richtext", "text/vnd.rn-realtext"]], ["rtf", ["application/rtf", "text/richtext", "application/x-rtf"]], ["rtx", ["text/richtext", "application/rtf"]], ["rv", "video/vnd.rn-realvideo"], ["s", "text/x-asm"], ["s3m", "audio/s3m"], ["saf", "application/vnd.yamaha.smaf-audio"], ["saveme", "application/octet-stream"], ["sbk", "application/x-tbook"], ["sbml", "application/sbml+xml"], ["sc", "application/vnd.ibm.secure-container"], ["scd", "application/x-msschedule"], ["scm", ["application/vnd.lotus-screencam", "video/x-scm", "text/x-script.guile", "application/x-lotusscreencam", "text/x-script.scheme"]], ["scq", "application/scvp-cv-request"], ["scs", "application/scvp-cv-response"], ["sct", "text/scriptlet"], ["scurl", "text/vnd.curl.scurl"], ["sda", "application/vnd.stardivision.draw"], ["sdc", "application/vnd.stardivision.calc"], ["sdd", "application/vnd.stardivision.impress"], ["sdkm", "application/vnd.solent.sdkm+xml"], ["sdml", "text/plain"], ["sdp", ["application/sdp", "application/x-sdp"]], ["sdr", "application/sounder"], ["sdw", "application/vnd.stardivision.writer"], ["sea", ["application/sea", "application/x-sea"]], ["see", "application/vnd.seemail"], ["seed", "application/vnd.fdsn.seed"], ["sema", "application/vnd.sema"], ["semd", "application/vnd.semd"], ["semf", "application/vnd.semf"], ["ser", "application/java-serialized-object"], ["set", "application/set"], ["setpay", "application/set-payment-initiation"], ["setreg", "application/set-registration-initiation"], ["sfd-hdstx", "application/vnd.hydrostatix.sof-data"], ["sfs", "application/vnd.spotfire.sfs"], ["sgl", "application/vnd.stardivision.writer-global"], ["sgm", ["text/sgml", "text/x-sgml"]], ["sgml", ["text/sgml", "text/x-sgml"]], ["sh", ["application/x-shar", "application/x-bsh", "application/x-sh", "text/x-script.sh"]], ["shar", ["application/x-bsh", "application/x-shar"]], ["shf", "application/shf+xml"], ["shtml", ["text/html", "text/x-server-parsed-html"]], ["sid", "audio/x-psid"], ["sis", "application/vnd.symbian.install"], ["sit", ["application/x-stuffit", "application/x-sit"]], ["sitx", "application/x-stuffitx"], ["skd", "application/x-koan"], ["skm", "application/x-koan"], ["skp", ["application/vnd.koan", "application/x-koan"]], ["skt", "application/x-koan"], ["sl", "application/x-seelogo"], ["sldm", "application/vnd.ms-powerpoint.slide.macroenabled.12"], ["sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"], ["slt", "application/vnd.epson.salt"], ["sm", "application/vnd.stepmania.stepchart"], ["smf", "application/vnd.stardivision.math"], ["smi", ["application/smil", "application/smil+xml"]], ["smil", "application/smil"], ["snd", ["audio/basic", "audio/x-adpcm"]], ["snf", "application/x-font-snf"], ["sol", "application/solids"], ["spc", ["text/x-speech", "application/x-pkcs7-certificates"]], ["spf", "application/vnd.yamaha.smaf-phrase"], ["spl", ["application/futuresplash", "application/x-futuresplash"]], ["spot", "text/vnd.in3d.spot"], ["spp", "application/scvp-vp-response"], ["spq", "application/scvp-vp-request"], ["spr", "application/x-sprite"], ["sprite", "application/x-sprite"], ["src", "application/x-wais-source"], ["sru", "application/sru+xml"], ["srx", "application/sparql-results+xml"], ["sse", "application/vnd.kodak-descriptor"], ["ssf", "application/vnd.epson.ssf"], ["ssi", "text/x-server-parsed-html"], ["ssm", "application/streamingmedia"], ["ssml", "application/ssml+xml"], ["sst", ["application/vnd.ms-pkicertstore", "application/vnd.ms-pki.certstore"]], ["st", "application/vnd.sailingtracker.track"], ["stc", "application/vnd.sun.xml.calc.template"], ["std", "application/vnd.sun.xml.draw.template"], ["step", "application/step"], ["stf", "application/vnd.wt.stf"], ["sti", "application/vnd.sun.xml.impress.template"], ["stk", "application/hyperstudio"], ["stl", ["application/vnd.ms-pkistl", "application/sla", "application/vnd.ms-pki.stl", "application/x-navistyle"]], ["stm", "text/html"], ["stp", "application/step"], ["str", "application/vnd.pg.format"], ["stw", "application/vnd.sun.xml.writer.template"], ["sub", "image/vnd.dvb.subtitle"], ["sus", "application/vnd.sus-calendar"], ["sv4cpio", "application/x-sv4cpio"], ["sv4crc", "application/x-sv4crc"], ["svc", "application/vnd.dvb.service"], ["svd", "application/vnd.svd"], ["svf", ["image/vnd.dwg", "image/x-dwg"]], ["svg", "image/svg+xml"], ["svr", ["x-world/x-svr", "application/x-world"]], ["swf", "application/x-shockwave-flash"], ["swi", "application/vnd.aristanetworks.swi"], ["sxc", "application/vnd.sun.xml.calc"], ["sxd", "application/vnd.sun.xml.draw"], ["sxg", "application/vnd.sun.xml.writer.global"], ["sxi", "application/vnd.sun.xml.impress"], ["sxm", "application/vnd.sun.xml.math"], ["sxw", "application/vnd.sun.xml.writer"], ["t", ["text/troff", "application/x-troff"]], ["talk", "text/x-speech"], ["tao", "application/vnd.tao.intent-module-archive"], ["tar", "application/x-tar"], ["tbk", ["application/toolbook", "application/x-tbook"]], ["tcap", "application/vnd.3gpp2.tcap"], ["tcl", ["text/x-script.tcl", "application/x-tcl"]], ["tcsh", "text/x-script.tcsh"], ["teacher", "application/vnd.smart.teacher"], ["tei", "application/tei+xml"], ["tex", "application/x-tex"], ["texi", "application/x-texinfo"], ["texinfo", "application/x-texinfo"], ["text", ["application/plain", "text/plain"]], ["tfi", "application/thraud+xml"], ["tfm", "application/x-tex-tfm"], ["tgz", ["application/gnutar", "application/x-compressed"]], ["thmx", "application/vnd.ms-officetheme"], ["tif", ["image/tiff", "image/x-tiff"]], ["tiff", ["image/tiff", "image/x-tiff"]], ["tmo", "application/vnd.tmobile-livetv"], ["torrent", "application/x-bittorrent"], ["tpl", "application/vnd.groove-tool-template"], ["tpt", "application/vnd.trid.tpt"], ["tr", "application/x-troff"], ["tra", "application/vnd.trueapp"], ["trm", "application/x-msterminal"], ["tsd", "application/timestamped-data"], ["tsi", "audio/tsp-audio"], ["tsp", ["application/dsptype", "audio/tsplayer"]], ["tsv", "text/tab-separated-values"], ["ttf", "application/x-font-ttf"], ["ttl", "text/turtle"], ["turbot", "image/florian"], ["twd", "application/vnd.simtech-mindmapper"], ["txd", "application/vnd.genomatix.tuxedo"], ["txf", "application/vnd.mobius.txf"], ["txt", "text/plain"], ["ufd", "application/vnd.ufdl"], ["uil", "text/x-uil"], ["uls", "text/iuls"], ["umj", "application/vnd.umajin"], ["uni", "text/uri-list"], ["unis", "text/uri-list"], ["unityweb", "application/vnd.unity"], ["unv", "application/i-deas"], ["uoml", "application/vnd.uoml+xml"], ["uri", "text/uri-list"], ["uris", "text/uri-list"], ["ustar", ["application/x-ustar", "multipart/x-ustar"]], ["utz", "application/vnd.uiq.theme"], ["uu", ["application/octet-stream", "text/x-uuencode"]], ["uue", "text/x-uuencode"], ["uva", "audio/vnd.dece.audio"], ["uvh", "video/vnd.dece.hd"], ["uvi", "image/vnd.dece.graphic"], ["uvm", "video/vnd.dece.mobile"], ["uvp", "video/vnd.dece.pd"], ["uvs", "video/vnd.dece.sd"], ["uvu", "video/vnd.uvvu.mp4"], ["uvv", "video/vnd.dece.video"], ["vcd", "application/x-cdlink"], ["vcf", "text/x-vcard"], ["vcg", "application/vnd.groove-vcard"], ["vcs", "text/x-vcalendar"], ["vcx", "application/vnd.vcx"], ["vda", "application/vda"], ["vdo", "video/vdo"], ["vew", "application/groupwise"], ["vis", "application/vnd.visionary"], ["viv", ["video/vivo", "video/vnd.vivo"]], ["vivo", ["video/vivo", "video/vnd.vivo"]], ["vmd", "application/vocaltec-media-desc"], ["vmf", "application/vocaltec-media-file"], ["voc", ["audio/voc", "audio/x-voc"]], ["vos", "video/vosaic"], ["vox", "audio/voxware"], ["vqe", "audio/x-twinvq-plugin"], ["vqf", "audio/x-twinvq"], ["vql", "audio/x-twinvq-plugin"], ["vrml", ["model/vrml", "x-world/x-vrml", "application/x-vrml"]], ["vrt", "x-world/x-vrt"], ["vsd", ["application/vnd.visio", "application/x-visio"]], ["vsf", "application/vnd.vsf"], ["vst", "application/x-visio"], ["vsw", "application/x-visio"], ["vtu", "model/vnd.vtu"], ["vxml", "application/voicexml+xml"], ["w60", "application/wordperfect6.0"], ["w61", "application/wordperfect6.1"], ["w6w", "application/msword"], ["wad", "application/x-doom"], ["wav", ["audio/wav", "audio/x-wav"]], ["wax", "audio/x-ms-wax"], ["wb1", "application/x-qpro"], ["wbmp", "image/vnd.wap.wbmp"], ["wbs", "application/vnd.criticaltools.wbs+xml"], ["wbxml", "application/vnd.wap.wbxml"], ["wcm", "application/vnd.ms-works"], ["wdb", "application/vnd.ms-works"], ["web", "application/vnd.xara"], ["weba", "audio/webm"], ["webm", "video/webm"], ["webp", "image/webp"], ["wg", "application/vnd.pmi.widget"], ["wgt", "application/widget"], ["wiz", "application/msword"], ["wk1", "application/x-123"], ["wks", "application/vnd.ms-works"], ["wm", "video/x-ms-wm"], ["wma", "audio/x-ms-wma"], ["wmd", "application/x-ms-wmd"], ["wmf", ["windows/metafile", "application/x-msmetafile"]], ["wml", "text/vnd.wap.wml"], ["wmlc", "application/vnd.wap.wmlc"], ["wmls", "text/vnd.wap.wmlscript"], ["wmlsc", "application/vnd.wap.wmlscriptc"], ["wmv", "video/x-ms-wmv"], ["wmx", "video/x-ms-wmx"], ["wmz", "application/x-ms-wmz"], ["woff", "application/x-font-woff"], ["word", "application/msword"], ["wp", "application/wordperfect"], ["wp5", ["application/wordperfect", "application/wordperfect6.0"]], ["wp6", "application/wordperfect"], ["wpd", ["application/wordperfect", "application/vnd.wordperfect", "application/x-wpwin"]], ["wpl", "application/vnd.ms-wpl"], ["wps", "application/vnd.ms-works"], ["wq1", "application/x-lotus"], ["wqd", "application/vnd.wqd"], ["wri", ["application/mswrite", "application/x-wri", "application/x-mswrite"]], ["wrl", ["model/vrml", "x-world/x-vrml", "application/x-world"]], ["wrz", ["model/vrml", "x-world/x-vrml"]], ["wsc", "text/scriplet"], ["wsdl", "application/wsdl+xml"], ["wspolicy", "application/wspolicy+xml"], ["wsrc", "application/x-wais-source"], ["wtb", "application/vnd.webturbo"], ["wtk", "application/x-wintalk"], ["wvx", "video/x-ms-wvx"], ["x-png", "image/png"], ["x3d", "application/vnd.hzn-3d-crossword"], ["xaf", "x-world/x-vrml"], ["xap", "application/x-silverlight-app"], ["xar", "application/vnd.xara"], ["xbap", "application/x-ms-xbap"], ["xbd", "application/vnd.fujixerox.docuworks.binder"], ["xbm", ["image/xbm", "image/x-xbm", "image/x-xbitmap"]], ["xdf", "application/xcap-diff+xml"], ["xdm", "application/vnd.syncml.dm+xml"], ["xdp", "application/vnd.adobe.xdp+xml"], ["xdr", "video/x-amt-demorun"], ["xdssc", "application/dssc+xml"], ["xdw", "application/vnd.fujixerox.docuworks"], ["xenc", "application/xenc+xml"], ["xer", "application/patch-ops-error+xml"], ["xfdf", "application/vnd.adobe.xfdf"], ["xfdl", "application/vnd.xfdl"], ["xgz", "xgl/drawing"], ["xhtml", "application/xhtml+xml"], ["xif", "image/vnd.xiff"], ["xl", "application/excel"], ["xla", ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"]], ["xlam", "application/vnd.ms-excel.addin.macroenabled.12"], ["xlb", ["application/excel", "application/vnd.ms-excel", "application/x-excel"]], ["xlc", ["application/vnd.ms-excel", "application/excel", "application/x-excel"]], ["xld", ["application/excel", "application/x-excel"]], ["xlk", ["application/excel", "application/x-excel"]], ["xll", ["application/excel", "application/vnd.ms-excel", "application/x-excel"]], ["xlm", ["application/vnd.ms-excel", "application/excel", "application/x-excel"]], ["xls", ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"]], ["xlsb", "application/vnd.ms-excel.sheet.binary.macroenabled.12"], ["xlsm", "application/vnd.ms-excel.sheet.macroenabled.12"], ["xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"], ["xlt", ["application/vnd.ms-excel", "application/excel", "application/x-excel"]], ["xltm", "application/vnd.ms-excel.template.macroenabled.12"], ["xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"], ["xlv", ["application/excel", "application/x-excel"]], ["xlw", ["application/vnd.ms-excel", "application/excel", "application/x-msexcel", "application/x-excel"]], ["xm", "audio/xm"], ["xml", ["application/xml", "text/xml", "application/atom+xml", "application/rss+xml"]], ["xmz", "xgl/movie"], ["xo", "application/vnd.olpc-sugar"], ["xof", "x-world/x-vrml"], ["xop", "application/xop+xml"], ["xpi", "application/x-xpinstall"], ["xpix", "application/x-vnd.ls-xpix"], ["xpm", ["image/xpm", "image/x-xpixmap"]], ["xpr", "application/vnd.is-xpr"], ["xps", "application/vnd.ms-xpsdocument"], ["xpw", "application/vnd.intercon.formnet"], ["xslt", "application/xslt+xml"], ["xsm", "application/vnd.syncml+xml"], ["xspf", "application/xspf+xml"], ["xsr", "video/x-amt-showrun"], ["xul", "application/vnd.mozilla.xul+xml"], ["xwd", ["image/x-xwd", "image/x-xwindowdump"]], ["xyz", ["chemical/x-xyz", "chemical/x-pdb"]], ["yang", "application/yang"], ["yin", "application/yin+xml"], ["z", ["application/x-compressed", "application/x-compress"]], ["zaz", "application/vnd.zzazz.deck+xml"], ["zip", ["application/zip", "multipart/x-zip", "application/x-zip-compressed", "application/x-compressed"]], ["zir", "application/vnd.zul"], ["zmm", "application/vnd.handheld-entertainment+xml"], ["zoo", "application/octet-stream"], ["zsh", "text/x-script.zsh"]]);
    e2.exports = { detectMimeType(e3) {
      if (!e3)
        return s;
      let t3 = a.parse(e3), i3 = (t3.ext.substr(1) || t3.name || "").split("?").shift().trim().toLowerCase(), n2 = s;
      return o.has(i3) && (n2 = o.get(i3)), Array.isArray(n2) ? n2[0] : n2;
    }, detectExtension(e3) {
      if (!e3)
        return "bin";
      let t3 = (e3 || "").toLowerCase().trim().split("/"), i3 = t3.shift().trim(), a2 = t3.join("/").trim();
      if (n.has(i3 + "/" + a2)) {
        let e4 = n.get(i3 + "/" + a2);
        return Array.isArray(e4) ? e4[0] : e4;
      }
      return "text" === i3 ? "txt" : "bin";
    } };
  }, 9593: (e2, t2, i2) => {
    "use strict";
    const a = i2(6982), s = i2(9896), n = i2(6093), o = i2(2203).PassThrough, r = i2(6047), p = i2(9480), c = i2(5515), l = i2(4449), d = i2(4913), h = i2(1358), m = i2(3820), u = i2(54), f = i2(877);
    class g {
      constructor(e3, t3) {
        this.nodeCounter = 0, t3 = t3 || {}, this.baseBoundary = t3.baseBoundary || a.randomBytes(8).toString("hex"), this.boundaryPrefix = t3.boundaryPrefix || "--_NmP", this.disableFileAccess = !!t3.disableFileAccess, this.disableUrlAccess = !!t3.disableUrlAccess, this.normalizeHeaderKey = t3.normalizeHeaderKey, this.date = /* @__PURE__ */ new Date(), this.rootNode = t3.rootNode || this, this.keepBcc = !!t3.keepBcc, t3.filename && (this.filename = t3.filename, e3 || (e3 = p.detectMimeType(this.filename.split(".").pop()))), this.textEncoding = (t3.textEncoding || "").toString().trim().charAt(0).toUpperCase(), this.parentNode = t3.parentNode, this.hostname = t3.hostname, this.newline = t3.newline, this.childNodes = [], this._nodeId = ++this.rootNode.nodeCounter, this._headers = [], this._isPlainText = false, this._hasLongLines = false, this._envelope = false, this._raw = false, this._transforms = [], this._processFuncs = [], e3 && this.setHeader("Content-Type", e3);
      }
      createChild(e3, t3) {
        t3 || "object" != typeof e3 || (t3 = e3, e3 = void 0);
        let i3 = new g(e3, t3);
        return this.appendChild(i3), i3;
      }
      appendChild(e3) {
        return e3.rootNode !== this.rootNode && (e3.rootNode = this.rootNode, e3._nodeId = ++this.rootNode.nodeCounter), e3.parentNode = this, this.childNodes.push(e3), e3;
      }
      replace(e3) {
        return e3 === this ? this : (this.parentNode.childNodes.forEach((t3, i3) => {
          t3 === this && (e3.rootNode = this.rootNode, e3.parentNode = this.parentNode, e3._nodeId = this._nodeId, this.rootNode = this, this.parentNode = void 0, e3.parentNode.childNodes[i3] = e3);
        }), e3);
      }
      remove() {
        if (!this.parentNode)
          return this;
        for (let e3 = this.parentNode.childNodes.length - 1; e3 >= 0; e3--)
          if (this.parentNode.childNodes[e3] === this)
            return this.parentNode.childNodes.splice(e3, 1), this.parentNode = void 0, this.rootNode = this, this;
      }
      setHeader(e3, t3) {
        let i3, a2 = false;
        if (!t3 && e3 && "object" == typeof e3)
          return e3.key && "value" in e3 ? this.setHeader(e3.key, e3.value) : Array.isArray(e3) ? e3.forEach((e4) => {
            this.setHeader(e4.key, e4.value);
          }) : Object.keys(e3).forEach((t4) => {
            this.setHeader(t4, e3[t4]);
          }), this;
        i3 = { key: e3 = this._normalizeHeaderKey(e3), value: t3 };
        for (let t4 = 0, s2 = this._headers.length; t4 < s2; t4++)
          this._headers[t4].key === e3 && (a2 ? (this._headers.splice(t4, 1), t4--, s2--) : (this._headers[t4] = i3, a2 = true));
        return a2 || this._headers.push(i3), this;
      }
      addHeader(e3, t3) {
        return !t3 && e3 && "object" == typeof e3 ? (e3.key && e3.value ? this.addHeader(e3.key, e3.value) : Array.isArray(e3) ? e3.forEach((e4) => {
          this.addHeader(e4.key, e4.value);
        }) : Object.keys(e3).forEach((t4) => {
          this.addHeader(t4, e3[t4]);
        }), this) : Array.isArray(t3) ? (t3.forEach((t4) => {
          this.addHeader(e3, t4);
        }), this) : (this._headers.push({ key: this._normalizeHeaderKey(e3), value: t3 }), this);
      }
      getHeader(e3) {
        e3 = this._normalizeHeaderKey(e3);
        for (let t3 = 0, i3 = this._headers.length; t3 < i3; t3++)
          if (this._headers[t3].key === e3)
            return this._headers[t3].value;
      }
      setContent(e3) {
        return this.content = e3, "function" == typeof this.content.pipe ? (this._contentErrorHandler = (e4) => {
          this.content.removeListener("error", this._contentErrorHandler), this.content = e4;
        }, this.content.once("error", this._contentErrorHandler)) : "string" == typeof this.content && (this._isPlainText = p.isPlainText(this.content), this._isPlainText && p.hasLongerLines(this.content, 76) && (this._hasLongLines = true)), this;
      }
      build(e3) {
        let t3;
        e3 || (t3 = new Promise((t4, i4) => {
          e3 = r.callbackPromise(t4, i4);
        }));
        let i3 = this.createReadStream(), a2 = [], s2 = 0, n2 = false;
        return i3.on("readable", () => {
          let e4;
          for (; null !== (e4 = i3.read()); )
            a2.push(e4), s2 += e4.length;
        }), i3.once("error", (t4) => {
          if (!n2)
            return n2 = true, e3(t4);
        }), i3.once("end", (t4) => {
          if (!n2)
            return n2 = true, t4 && t4.length && (a2.push(t4), s2 += t4.length), e3(null, Buffer.concat(a2, s2));
        }), t3;
      }
      getTransferEncoding() {
        let e3 = false, t3 = (this.getHeader("Content-Type") || "").toString().toLowerCase().trim();
        return this.content && (e3 = (this.getHeader("Content-Transfer-Encoding") || "").toString().toLowerCase().trim(), e3 && ["base64", "quoted-printable"].includes(e3) || (/^text\//i.test(t3) ? e3 = this._isPlainText && !this._hasLongLines ? "7bit" : "string" == typeof this.content || this.content instanceof Buffer ? "Q" === this._getTextEncoding(this.content) ? "quoted-printable" : "base64" : "B" === this.textEncoding ? "base64" : "quoted-printable" : /^(multipart|message)\//i.test(t3) || (e3 = e3 || "base64"))), e3;
      }
      buildHeaders() {
        let e3 = this.getTransferEncoding(), t3 = [];
        if (e3 && this.setHeader("Content-Transfer-Encoding", e3), this.filename && !this.getHeader("Content-Disposition") && this.setHeader("Content-Disposition", "attachment"), this.rootNode === this) {
          this.getHeader("Date") || this.setHeader("Date", this.date.toUTCString().replace(/GMT/, "+0000")), this.messageId(), this.getHeader("MIME-Version") || this.setHeader("MIME-Version", "1.0");
          for (let e4 = this._headers.length - 2; e4 >= 0; e4--) {
            let t4 = this._headers[e4];
            "Content-Type" === t4.key && (this._headers.splice(e4, 1), this._headers.push(t4));
          }
        }
        return this._headers.forEach((e4) => {
          let i3, a2, s2 = e4.key, n2 = e4.value, o2 = {};
          if (!n2 || "object" != typeof n2 || ["From", "Sender", "To", "Cc", "Bcc", "Reply-To", "Date", "References"].includes(s2) || (Object.keys(n2).forEach((e5) => {
            "value" !== e5 && (o2[e5] = n2[e5]);
          }), n2 = (n2.value || "").toString(), n2.trim()))
            if (o2.prepared)
              o2.foldLines ? t3.push(p.foldLines(s2 + ": " + n2)) : t3.push(s2 + ": " + n2);
            else {
              switch (e4.key) {
                case "Content-Disposition":
                  i3 = p.parseHeaderValue(n2), this.filename && (i3.params.filename = this.filename), n2 = p.buildHeaderValue(i3);
                  break;
                case "Content-Type":
                  i3 = p.parseHeaderValue(n2), this._handleContentType(i3), i3.value.match(/^text\/plain\b/) && "string" == typeof this.content && /[\u0080-\uFFFF]/.test(this.content) && (i3.params.charset = "utf-8"), n2 = p.buildHeaderValue(i3), this.filename && (a2 = this._encodeWords(this.filename), (a2 !== this.filename || /[\s'"\\;:/=(),<>@[\]?]|^-/.test(a2)) && (a2 = '"' + a2 + '"'), n2 += "; name=" + a2);
                  break;
                case "Bcc":
                  if (!this.keepBcc)
                    return;
              }
              if (n2 = this._encodeHeaderValue(s2, n2), (n2 || "").toString().trim()) {
                if ("function" == typeof this.normalizeHeaderKey) {
                  let e5 = this.normalizeHeaderKey(s2, n2);
                  e5 && "string" == typeof e5 && e5.length && (s2 = e5);
                }
                t3.push(p.foldLines(s2 + ": " + n2, 76));
              }
            }
        }), t3.join("\r\n");
      }
      createReadStream(e3) {
        let t3, i3 = new o(e3 = e3 || {}), a2 = i3;
        this.stream(i3, e3, (e4) => {
          e4 ? a2.emit("error", e4) : i3.end();
        });
        for (let e4 = 0, i4 = this._transforms.length; e4 < i4; e4++)
          t3 = "function" == typeof this._transforms[e4] ? this._transforms[e4]() : this._transforms[e4], a2.once("error", (e5) => {
            t3.emit("error", e5);
          }), a2 = a2.pipe(t3);
        t3 = new m(), a2.once("error", (e4) => {
          t3.emit("error", e4);
        }), a2 = a2.pipe(t3);
        for (let e4 = 0, i4 = this._processFuncs.length; e4 < i4; e4++)
          t3 = this._processFuncs[e4], a2 = t3(a2);
        if (this.newline) {
          const e4 = ["win", "windows", "dos", "\r\n"].includes(this.newline.toString().toLowerCase()) ? new u() : new f(), t4 = a2.pipe(e4);
          return a2.on("error", (e5) => t4.emit("error", e5)), t4;
        }
        return a2;
      }
      transform(e3) {
        this._transforms.push(e3);
      }
      processFunc(e3) {
        this._processFuncs.push(e3);
      }
      stream(e3, t3, i3) {
        let a2, s2, n2 = this.getTransferEncoding(), o2 = false, r2 = (e4) => {
          o2 || (o2 = true, i3(e4));
        }, p2 = () => {
          let i4 = 0, a3 = () => {
            if (i4 >= this.childNodes.length)
              return e3.write("\r\n--" + this.boundary + "--\r\n"), r2();
            let s3 = this.childNodes[i4++];
            e3.write((i4 > 1 ? "\r\n" : "") + "--" + this.boundary + "\r\n"), s3.stream(e3, t3, (e4) => {
              if (e4)
                return r2(e4);
              setImmediate(a3);
            });
          };
          if (!this.multipart)
            return r2();
          setImmediate(a3);
        };
        this._raw ? setImmediate(() => {
          if ("[object Error]" === Object.prototype.toString.call(this._raw))
            return r2(this._raw);
          "function" == typeof this._raw.pipe && this._raw.removeListener("error", this._contentErrorHandler);
          let t4 = this._getStream(this._raw);
          t4.pipe(e3, { end: false }), t4.on("error", (t5) => e3.emit("error", t5)), t4.on("end", p2);
        }) : (e3.write(this.buildHeaders() + "\r\n\r\n"), setImmediate(() => {
          if (!this.content)
            return setImmediate(p2);
          {
            if ("[object Error]" === Object.prototype.toString.call(this.content))
              return r2(this.content);
            "function" == typeof this.content.pipe && (this.content.removeListener("error", this._contentErrorHandler), this._contentErrorHandler = (e4) => r2(e4), this.content.once("error", this._contentErrorHandler));
            let i4 = () => {
              ["quoted-printable", "base64"].includes(n2) ? (a2 = new ("base64" === n2 ? l : c).Encoder(t3), a2.pipe(e3, { end: false }), a2.once("end", p2), a2.once("error", (e4) => r2(e4)), s2 = this._getStream(this.content), s2.pipe(a2)) : (s2 = this._getStream(this.content), s2.pipe(e3, { end: false }), s2.once("end", p2)), s2.once("error", (e4) => r2(e4));
            };
            if (this.content._resolve) {
              let e4 = [], t4 = 0, a3 = false, s3 = this._getStream(this.content);
              s3.on("error", (e5) => {
                a3 || (a3 = true, r2(e5));
              }), s3.on("readable", () => {
                let i5;
                for (; null !== (i5 = s3.read()); )
                  e4.push(i5), t4 += i5.length;
              }), s3.on("end", () => {
                a3 || (a3 = true, this.content._resolve = false, this.content._resolvedValue = Buffer.concat(e4, t4), setImmediate(i4));
              });
            } else
              setImmediate(i4);
          }
        }));
      }
      setEnvelope(e3) {
        let t3;
        this._envelope = { from: false, to: [] }, e3.from && (t3 = [], this._convertAddresses(this._parseAddresses(e3.from), t3), t3 = t3.filter((e4) => e4 && e4.address), t3.length && t3[0] && (this._envelope.from = t3[0].address)), ["to", "cc", "bcc"].forEach((t4) => {
          e3[t4] && this._convertAddresses(this._parseAddresses(e3[t4]), this._envelope.to);
        }), this._envelope.to = this._envelope.to.map((e4) => e4.address).filter((e4) => e4);
        let i3 = ["to", "cc", "bcc", "from"];
        return Object.keys(e3).forEach((t4) => {
          i3.includes(t4) || (this._envelope[t4] = e3[t4]);
        }), this;
      }
      getAddresses() {
        let e3 = {};
        return this._headers.forEach((t3) => {
          let i3 = t3.key.toLowerCase();
          ["from", "sender", "reply-to", "to", "cc", "bcc"].includes(i3) && (Array.isArray(e3[i3]) || (e3[i3] = []), this._convertAddresses(this._parseAddresses(t3.value), e3[i3]));
        }), e3;
      }
      getEnvelope() {
        if (this._envelope)
          return this._envelope;
        let e3 = { from: false, to: [] };
        return this._headers.forEach((t3) => {
          let i3 = [];
          "From" === t3.key || !e3.from && ["Reply-To", "Sender"].includes(t3.key) ? (this._convertAddresses(this._parseAddresses(t3.value), i3), i3.length && i3[0] && (e3.from = i3[0].address)) : ["To", "Cc", "Bcc"].includes(t3.key) && this._convertAddresses(this._parseAddresses(t3.value), e3.to);
        }), e3.to = e3.to.map((e4) => e4.address), e3;
      }
      messageId() {
        let e3 = this.getHeader("Message-ID");
        return e3 || (e3 = this._generateMessageId(), this.setHeader("Message-ID", e3)), e3;
      }
      setRaw(e3) {
        return this._raw = e3, this._raw && "function" == typeof this._raw.pipe && (this._contentErrorHandler = (e4) => {
          this._raw.removeListener("error", this._contentErrorHandler), this._raw = e4;
        }, this._raw.once("error", this._contentErrorHandler)), this;
      }
      _getStream(e3) {
        let t3;
        return e3._resolvedValue ? (t3 = new o(), setImmediate(() => {
          try {
            t3.end(e3._resolvedValue);
          } catch (e4) {
            t3.emit("error", e4);
          }
        }), t3) : "function" == typeof e3.pipe ? e3 : e3 && "string" == typeof e3.path && !e3.href ? this.disableFileAccess ? (t3 = new o(), setImmediate(() => t3.emit("error", new Error("File access rejected for " + e3.path))), t3) : s.createReadStream(e3.path) : e3 && "string" == typeof e3.href ? this.disableUrlAccess ? (t3 = new o(), setImmediate(() => t3.emit("error", new Error("Url access rejected for " + e3.href))), t3) : h(e3.href, { headers: e3.httpHeaders }) : (t3 = new o(), setImmediate(() => {
          try {
            t3.end(e3 || "");
          } catch (e4) {
            t3.emit("error", e4);
          }
        }), t3);
      }
      _parseAddresses(e3) {
        return [].concat.apply([], [].concat(e3).map((e4) => e4 && e4.address ? (e4.address = this._normalizeAddress(e4.address), e4.name = e4.name || "", [e4]) : d(e4)));
      }
      _normalizeHeaderKey(e3) {
        return (e3 || "").toString().replace(/\r?\n|\r/g, " ").trim().toLowerCase().replace(/^X-SMTPAPI$|^(MIME|DKIM|ARC|BIMI)\b|^[a-z]|-(SPF|FBL|ID|MD5)$|-[a-z]/gi, (e4) => e4.toUpperCase()).replace(/^Content-Features$/i, "Content-features");
      }
      _handleContentType(e3) {
        this.contentType = e3.value.trim().toLowerCase(), this.multipart = !!/^multipart\//i.test(this.contentType) && this.contentType.substr(this.contentType.indexOf("/") + 1), this.multipart ? this.boundary = e3.params.boundary = e3.params.boundary || this.boundary || this._generateBoundary() : this.boundary = false;
      }
      _generateBoundary() {
        return this.rootNode.boundaryPrefix + "-" + this.rootNode.baseBoundary + "-Part_" + this._nodeId;
      }
      _encodeHeaderValue(e3, t3) {
        switch (e3 = this._normalizeHeaderKey(e3)) {
          case "From":
          case "Sender":
          case "To":
          case "Cc":
          case "Bcc":
          case "Reply-To":
            return this._convertAddresses(this._parseAddresses(t3));
          case "Message-ID":
          case "In-Reply-To":
          case "Content-Id":
            return "<" !== (t3 = (t3 || "").toString().replace(/\r?\n|\r/g, " ")).charAt(0) && (t3 = "<" + t3), ">" !== t3.charAt(t3.length - 1) && (t3 += ">"), t3;
          case "References":
            return (t3 = [].concat.apply([], [].concat(t3 || "").map((e4) => (e4 = (e4 || "").toString().replace(/\r?\n|\r/g, " ").trim()).replace(/<[^>]*>/g, (e5) => e5.replace(/\s/g, "")).split(/\s+/))).map((e4) => ("<" !== e4.charAt(0) && (e4 = "<" + e4), ">" !== e4.charAt(e4.length - 1) && (e4 += ">"), e4))).join(" ").trim();
          case "Date":
            return "[object Date]" === Object.prototype.toString.call(t3) ? t3.toUTCString().replace(/GMT/, "+0000") : (t3 = (t3 || "").toString().replace(/\r?\n|\r/g, " "), this._encodeWords(t3));
          case "Content-Type":
          case "Content-Disposition":
            return (t3 || "").toString().replace(/\r?\n|\r/g, " ");
          default:
            return t3 = (t3 || "").toString().replace(/\r?\n|\r/g, " "), this._encodeWords(t3);
        }
      }
      _convertAddresses(e3, t3) {
        let i3 = [];
        return t3 = t3 || [], [].concat(e3 || []).forEach((e4) => {
          if (e4.address)
            e4.address = this._normalizeAddress(e4.address), e4.name ? e4.name && i3.push(`${this._encodeAddressName(e4.name)} <${e4.address}>`) : i3.push(e4.address.indexOf(" ") >= 0 ? `<${e4.address}>` : `${e4.address}`), e4.address && (t3.filter((t4) => t4.address === e4.address).length || t3.push(e4));
          else if (e4.group) {
            let a2 = (e4.group.length ? this._convertAddresses(e4.group, t3) : "").trim();
            i3.push(`${this._encodeAddressName(e4.name)}:${a2};`);
          }
        }), i3.join(", ");
      }
      _normalizeAddress(e3) {
        let t3 = (e3 = (e3 || "").toString().replace(/[\x00-\x1F<>]+/g, " ").trim()).lastIndexOf("@");
        if (t3 < 0)
          return e3;
        let i3, a2 = e3.substr(0, t3), s2 = e3.substr(t3 + 1);
        try {
          i3 = n.toASCII(s2.toLowerCase());
        } catch (e4) {
        }
        return a2.indexOf(" ") >= 0 && ('"' !== a2.charAt(0) && (a2 = '"' + a2), '"' !== a2.substr(-1) && (a2 += '"')), `${a2}@${i3}`;
      }
      _encodeAddressName(e3) {
        return /^[\w ]*$/.test(e3) ? e3 : /^[\x20-\x7e]*$/.test(e3) ? '"' + e3.replace(/([\\"])/g, "\\$1") + '"' : p.encodeWord(e3, this._getTextEncoding(e3), 52);
      }
      _encodeWords(e3) {
        return p.encodeWords(e3, this._getTextEncoding(e3), 52, true);
      }
      _getTextEncoding(e3) {
        e3 = (e3 || "").toString();
        let t3, i3, a2 = this.textEncoding;
        return a2 || (i3 = (e3.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\u0080-\uFFFF]/g) || []).length, t3 = (e3.match(/[a-z]/gi) || []).length, a2 = i3 < t3 ? "Q" : "B"), a2;
      }
      _generateMessageId() {
        return "<" + [2, 2, 2, 6].reduce((e3, t3) => e3 + "-" + a.randomBytes(t3).toString("hex"), a.randomBytes(4).toString("hex")) + "@" + (this.getEnvelope().from || this.hostname || "localhost").split("@").pop() + ">";
      }
    }
    e2.exports = g;
  }, 3820: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    e2.exports = class extends a {
      constructor() {
        super(), this.lastByte = false;
      }
      _transform(e3, t3, i3) {
        e3.length && (this.lastByte = e3[e3.length - 1]), this.push(e3), i3();
      }
      _flush(e3) {
        return 10 === this.lastByte ? e3() : 13 === this.lastByte ? (this.push(Buffer.from("\n")), e3()) : (this.push(Buffer.from("\r\n")), e3());
      }
    };
  }, 877: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    e2.exports = class extends a {
      constructor(e3) {
        super(e3), this.options = e3 || {};
      }
      _transform(e3, t3, i3) {
        let a2, s = 0;
        for (let t4 = 0, i4 = e3.length; t4 < i4; t4++)
          13 === e3[t4] && (a2 = e3.slice(s, t4), s = t4 + 1, this.push(a2));
        s && s < e3.length ? (a2 = e3.slice(s), this.push(a2)) : s || this.push(e3), i3();
      }
    };
  }, 54: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    e2.exports = class extends a {
      constructor(e3) {
        super(e3), this.options = e3 || {}, this.lastByte = false;
      }
      _transform(e3, t3, i3) {
        let a2, s = 0;
        for (let t4 = 0, i4 = e3.length; t4 < i4; t4++)
          10 === e3[t4] && (t4 && 13 !== e3[t4 - 1] || !t4 && 13 !== this.lastByte) && (t4 > s && (a2 = e3.slice(s, t4), this.push(a2)), this.push(Buffer.from("\r\n")), s = t4 + 1);
        s && s < e3.length ? (a2 = e3.slice(s), this.push(a2)) : s || this.push(e3), this.lastByte = e3[e3.length - 1], i3();
      }
    };
  }, 9725: (e2, t2, i2) => {
    "use strict";
    const a = i2(570), s = i2(6047), n = i2(167), o = i2(8406), r = i2(6859), p = i2(5938), c = i2(2151), l = i2(8887), d = i2(1358), h = i2(2290), m = (process.env.ETHEREAL_API || "https://api.nodemailer.com").replace(/\/+$/, ""), u = (process.env.ETHEREAL_WEB || "https://ethereal.email").replace(/\/+$/, ""), f = (process.env.ETHEREAL_API_KEY || "").replace(/\s*/g, "") || null, g = ["true", "yes", "y", "1"].includes((process.env.ETHEREAL_CACHE || "yes").toString().trim().toLowerCase());
    let x = false;
    e2.exports.createTransport = function(e3, t3) {
      let i3, d2, h2;
      return ("object" == typeof e3 && "function" != typeof e3.send || "string" == typeof e3 && /^(smtps?|direct):/i.test(e3)) && (d2 = (i3 = "string" == typeof e3 ? e3 : e3.url) ? s.parseConnectionUrl(i3) : e3, e3 = d2.pool ? new n(d2) : d2.sendmail ? new r(d2) : d2.streamTransport ? new p(d2) : d2.jsonTransport ? new c(d2) : d2.SES ? new l(d2) : new o(d2)), h2 = new a(e3, d2, t3), h2;
    }, e2.exports.createTestAccount = function(e3, t3) {
      let i3;
      if (t3 || "function" != typeof e3 || (t3 = e3, e3 = false), t3 || (i3 = new Promise((e4, i4) => {
        t3 = s.callbackPromise(e4, i4);
      })), g && x)
        return setImmediate(() => t3(null, x)), i3;
      e3 = e3 || m;
      let a2 = [], n2 = 0, o2 = {}, r2 = { requestor: h.name, version: h.version };
      f && (o2.Authorization = "Bearer " + f);
      let p2 = d(e3 + "/user", { contentType: "application/json", method: "POST", headers: o2, body: Buffer.from(JSON.stringify(r2)) });
      return p2.on("readable", () => {
        let e4;
        for (; null !== (e4 = p2.read()); )
          a2.push(e4), n2 += e4.length;
      }), p2.once("error", (e4) => t3(e4)), p2.once("end", () => {
        let e4, i4, s2 = Buffer.concat(a2, n2);
        try {
          e4 = JSON.parse(s2.toString());
        } catch (e5) {
          i4 = e5;
        }
        return i4 ? t3(i4) : "success" !== e4.status || e4.error ? t3(new Error(e4.error || "Request failed")) : (delete e4.status, x = e4, void t3(null, x));
      }), i3;
    }, e2.exports.getTestMessageUrl = function(e3) {
      if (!e3 || !e3.response)
        return false;
      let t3 = /* @__PURE__ */ new Map();
      return e3.response.replace(/\[([^\]]+)\]$/, (e4, i3) => {
        i3.replace(/\b([A-Z0-9]+)=([^\s]+)/g, (e5, i4, a2) => {
          t3.set(i4, a2);
        });
      }), !(!t3.has("STATUS") || !t3.has("MSGID")) && (x.web || u) + "/message/" + t3.get("MSGID");
    };
  }, 6093: (e2) => {
    "use strict";
    const t2 = 2147483647, i2 = 36, a = /^xn--/, s = /[^\0-\x7F]/, n = /[\x2E\u3002\uFF0E\uFF61]/g, o = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, r = Math.floor, p = String.fromCharCode;
    function c(e3) {
      throw new RangeError(o[e3]);
    }
    function l(e3, t3) {
      const i3 = e3.split("@");
      let a2 = "";
      i3.length > 1 && (a2 = i3[0] + "@", e3 = i3[1]);
      const s2 = function(e4, t4) {
        const i4 = [];
        let a3 = e4.length;
        for (; a3--; )
          i4[a3] = t4(e4[a3]);
        return i4;
      }((e3 = e3.replace(n, ".")).split("."), t3).join(".");
      return a2 + s2;
    }
    function d(e3) {
      const t3 = [];
      let i3 = 0;
      const a2 = e3.length;
      for (; i3 < a2; ) {
        const s2 = e3.charCodeAt(i3++);
        if (s2 >= 55296 && s2 <= 56319 && i3 < a2) {
          const a3 = e3.charCodeAt(i3++);
          56320 == (64512 & a3) ? t3.push(((1023 & s2) << 10) + (1023 & a3) + 65536) : (t3.push(s2), i3--);
        } else
          t3.push(s2);
      }
      return t3;
    }
    const h = function(e3, t3) {
      return e3 + 22 + 75 * (e3 < 26) - ((0 != t3) << 5);
    }, m = function(e3, t3, a2) {
      let s2 = 0;
      for (e3 = a2 ? r(e3 / 700) : e3 >> 1, e3 += r(e3 / t3); e3 > 455; s2 += i2)
        e3 = r(e3 / 35);
      return r(s2 + 36 * e3 / (e3 + 38));
    }, u = function(e3) {
      const a2 = [], s2 = e3.length;
      let n2 = 0, o2 = 128, p2 = 72, l2 = e3.lastIndexOf("-");
      l2 < 0 && (l2 = 0);
      for (let t3 = 0; t3 < l2; ++t3)
        e3.charCodeAt(t3) >= 128 && c("not-basic"), a2.push(e3.charCodeAt(t3));
      for (let h2 = l2 > 0 ? l2 + 1 : 0; h2 < s2; ) {
        const l3 = n2;
        for (let a3 = 1, o3 = i2; ; o3 += i2) {
          h2 >= s2 && c("invalid-input");
          const l4 = (d2 = e3.charCodeAt(h2++)) >= 48 && d2 < 58 ? d2 - 48 + 26 : d2 >= 65 && d2 < 91 ? d2 - 65 : d2 >= 97 && d2 < 123 ? d2 - 97 : i2;
          l4 >= i2 && c("invalid-input"), l4 > r((t2 - n2) / a3) && c("overflow"), n2 += l4 * a3;
          const m2 = o3 <= p2 ? 1 : o3 >= p2 + 26 ? 26 : o3 - p2;
          if (l4 < m2)
            break;
          const u3 = i2 - m2;
          a3 > r(t2 / u3) && c("overflow"), a3 *= u3;
        }
        const u2 = a2.length + 1;
        p2 = m(n2 - l3, u2, 0 == l3), r(n2 / u2) > t2 - o2 && c("overflow"), o2 += r(n2 / u2), n2 %= u2, a2.splice(n2++, 0, o2);
      }
      var d2;
      return String.fromCodePoint(...a2);
    }, f = function(e3) {
      const a2 = [], s2 = (e3 = d(e3)).length;
      let n2 = 128, o2 = 0, l2 = 72;
      for (const t3 of e3)
        t3 < 128 && a2.push(p(t3));
      const u2 = a2.length;
      let f2 = u2;
      for (u2 && a2.push("-"); f2 < s2; ) {
        let s3 = t2;
        for (const t3 of e3)
          t3 >= n2 && t3 < s3 && (s3 = t3);
        const d2 = f2 + 1;
        s3 - n2 > r((t2 - o2) / d2) && c("overflow"), o2 += (s3 - n2) * d2, n2 = s3;
        for (const s4 of e3)
          if (s4 < n2 && ++o2 > t2 && c("overflow"), s4 === n2) {
            let e4 = o2;
            for (let t3 = i2; ; t3 += i2) {
              const s5 = t3 <= l2 ? 1 : t3 >= l2 + 26 ? 26 : t3 - l2;
              if (e4 < s5)
                break;
              const n3 = e4 - s5, o3 = i2 - s5;
              a2.push(p(h(s5 + n3 % o3, 0))), e4 = r(n3 / o3);
            }
            a2.push(p(h(e4, 0))), l2 = m(o2, d2, f2 === u2), o2 = 0, ++f2;
          }
        ++o2, ++n2;
      }
      return a2.join("");
    }, g = { version: "2.3.1", ucs2: { decode: d, encode: (e3) => String.fromCodePoint(...e3) }, decode: u, encode: f, toASCII: function(e3) {
      return l(e3, function(e4) {
        return s.test(e4) ? "xn--" + f(e4) : e4;
      });
    }, toUnicode: function(e3) {
      return l(e3, function(e4) {
        return a.test(e4) ? u(e4.slice(4).toLowerCase()) : e4;
      });
    } };
    e2.exports = g;
  }, 5515: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    function s(e3) {
      "string" == typeof e3 && (e3 = Buffer.from(e3, "utf-8"));
      let t3, i3 = [[9], [10], [13], [32, 60], [62, 126]], a2 = "";
      for (let s2 = 0, n2 = e3.length; s2 < n2; s2++)
        t3 = e3[s2], o(t3, i3) && (32 !== t3 && 9 !== t3 || s2 !== n2 - 1 && 10 !== e3[s2 + 1] && 13 !== e3[s2 + 1]) ? a2 += String.fromCharCode(t3) : a2 += "=" + (t3 < 16 ? "0" : "") + t3.toString(16).toUpperCase();
      return a2;
    }
    function n(e3, t3) {
      if (t3 = t3 || 76, (e3 = (e3 || "").toString()).length <= t3)
        return e3;
      let i3, a2, s2, n2 = 0, o2 = e3.length, r = Math.floor(t3 / 3), p = "";
      for (; n2 < o2; )
        if (s2 = e3.substr(n2, t3), i3 = s2.match(/\r\n/))
          s2 = s2.substr(0, i3.index + i3[0].length), p += s2, n2 += s2.length;
        else if ("\n" !== s2.substr(-1))
          if (i3 = s2.substr(-r).match(/\n.*?$/))
            s2 = s2.substr(0, s2.length - (i3[0].length - 1)), p += s2, n2 += s2.length;
          else {
            if (s2.length > t3 - r && (i3 = s2.substr(-r).match(/[ \t.,!?][^ \t.,!?]*$/)))
              s2 = s2.substr(0, s2.length - (i3[0].length - 1));
            else if (s2.match(/[=][\da-f]{0,2}$/i))
              for ((i3 = s2.match(/[=][\da-f]{0,1}$/i)) && (s2 = s2.substr(0, s2.length - i3[0].length)); s2.length > 3 && s2.length < o2 - n2 && !s2.match(/^(?:=[\da-f]{2}){1,4}$/i) && (i3 = s2.match(/[=][\da-f]{2}$/gi)) && (a2 = parseInt(i3[0].substr(1, 2), 16), !(a2 < 128)) && (s2 = s2.substr(0, s2.length - 3), !(a2 >= 192)); )
                ;
            n2 + s2.length < o2 && "\n" !== s2.substr(-1) ? (s2.length === t3 && s2.match(/[=][\da-f]{2}$/i) ? s2 = s2.substr(0, s2.length - 3) : s2.length === t3 && (s2 = s2.substr(0, s2.length - 1)), n2 += s2.length, s2 += "=\r\n") : n2 += s2.length, p += s2;
          }
        else
          p += s2, n2 += s2.length;
      return p;
    }
    function o(e3, t3) {
      for (let i3 = t3.length - 1; i3 >= 0; i3--)
        if (t3[i3].length) {
          if (1 === t3[i3].length && e3 === t3[i3][0])
            return true;
          if (2 === t3[i3].length && e3 >= t3[i3][0] && e3 <= t3[i3][1])
            return true;
        }
      return false;
    }
    e2.exports = { encode: s, wrap: n, Encoder: class extends a {
      constructor(e3) {
        super(), this.options = e3 || {}, false !== this.options.lineLength && (this.options.lineLength = this.options.lineLength || 76), this._curLine = "", this.inputBytes = 0, this.outputBytes = 0;
      }
      _transform(e3, t3, i3) {
        let a2;
        if ("buffer" !== t3 && (e3 = Buffer.from(e3, t3)), !e3 || !e3.length)
          return i3();
        this.inputBytes += e3.length, this.options.lineLength ? (a2 = this._curLine + s(e3), a2 = n(a2, this.options.lineLength), a2 = a2.replace(/(^|\n)([^\n]*)$/, (e4, t4, i4) => (this._curLine = i4, t4)), a2 && (this.outputBytes += a2.length, this.push(a2))) : (a2 = s(e3), this.outputBytes += a2.length, this.push(a2, "ascii")), i3();
      }
      _flush(e3) {
        this._curLine && (this.outputBytes += this._curLine.length, this.push(this._curLine, "ascii")), e3();
      }
    } };
  }, 6859: (e2, t2, i2) => {
    "use strict";
    const a = i2(5317).spawn, s = i2(2290), n = i2(6047);
    e2.exports = class {
      constructor(e3) {
        e3 = e3 || {}, this._spawn = a, this.options = e3 || {}, this.name = "Sendmail", this.version = s.version, this.path = "sendmail", this.args = false, this.winbreak = false, this.logger = n.getLogger(this.options, { component: this.options.component || "sendmail" }), e3 && ("string" == typeof e3 ? this.path = e3 : "object" == typeof e3 && (e3.path && (this.path = e3.path), Array.isArray(e3.args) && (this.args = e3.args), this.winbreak = ["win", "windows", "dos", "\r\n"].includes((e3.newline || "").toString().toLowerCase())));
      }
      send(e3, t3) {
        e3.message.keepBcc = true;
        let i3, a2, s2, n2 = e3.data.envelope || e3.message.getEnvelope(), o = e3.message.messageId();
        if ([].concat(n2.from || []).concat(n2.to || []).some((e4) => /^-/.test(e4)))
          return t3(new Error("Can not send mail. Invalid envelope addresses."));
        i3 = this.args ? ["-i"].concat(this.args).concat(n2.to) : ["-i"].concat(n2.from ? ["-f", n2.from] : []).concat(n2.to);
        let r = (i4) => {
          if (!s2)
            return s2 = true, "function" == typeof t3 ? i4 ? t3(i4) : t3(null, { envelope: e3.data.envelope || e3.message.getEnvelope(), messageId: o, response: "Messages queued for delivery" }) : void 0;
        };
        try {
          a2 = this._spawn(this.path, i3);
        } catch (e4) {
          return this.logger.error({ err: e4, tnx: "spawn", messageId: o }, "Error occurred while spawning sendmail. %s", e4.message), r(e4);
        }
        if (!a2)
          return r(new Error("sendmail was not found"));
        {
          a2.on("error", (e4) => {
            this.logger.error({ err: e4, tnx: "spawn", messageId: o }, "Error occurred when sending message %s. %s", o, e4.message), r(e4);
          }), a2.once("exit", (e4) => {
            if (!e4)
              return r();
            let t5;
            t5 = 127 === e4 ? new Error("Sendmail command not found, process exited with code " + e4) : new Error("Sendmail exited with code " + e4), this.logger.error({ err: t5, tnx: "stdin", messageId: o }, "Error sending message %s to sendmail. %s", o, t5.message), r(t5);
          }), a2.once("close", r), a2.stdin.on("error", (e4) => {
            this.logger.error({ err: e4, tnx: "stdin", messageId: o }, "Error occurred when piping message %s to sendmail. %s", o, e4.message), r(e4);
          });
          let t4 = [].concat(n2.to || []);
          t4.length > 3 && t4.push("...and " + t4.splice(2).length + " more"), this.logger.info({ tnx: "send", messageId: o }, "Sending message %s to <%s>", o, t4.join(", "));
          let i4 = e3.message.createReadStream();
          i4.once("error", (e4) => {
            this.logger.error({ err: e4, tnx: "stdin", messageId: o }, "Error occurred when generating message %s. %s", o, e4.message), a2.kill("SIGINT"), r(e4);
          }), i4.pipe(a2.stdin);
        }
      }
    };
  }, 8887: (e2, t2, i2) => {
    "use strict";
    const a = i2(4434), s = i2(2290), n = i2(6047), o = i2(54);
    e2.exports = class extends a {
      constructor(e3) {
        super(), e3 = e3 || {}, this.options = e3 || {}, this.ses = this.options.SES, this.name = "SESTransport", this.version = s.version, this.logger = n.getLogger(this.options, { component: this.options.component || "ses-transport" }), this.maxConnections = Number(this.options.maxConnections) || 1 / 0, this.connections = 0, this.sendingRate = Number(this.options.sendingRate) || 1 / 0, this.sendingRateTTL = null, this.rateInterval = 1e3, this.rateMessages = [], this.pending = [], this.idling = true, setImmediate(() => {
          this.idling && this.emit("idle");
        });
      }
      send(e3, t3) {
        return this.connections >= this.maxConnections ? (this.idling = false, this.pending.push({ mail: e3, callback: t3 })) : this._checkSendingRate() ? void this._send(e3, (...e4) => {
          setImmediate(() => t3(...e4)), this._sent();
        }) : (this.idling = false, this.pending.push({ mail: e3, callback: t3 }));
      }
      _checkRatedQueue() {
        if (this.connections >= this.maxConnections || !this._checkSendingRate())
          return;
        if (!this.pending.length)
          return void (this.idling || (this.idling = true, this.emit("idle")));
        let e3 = this.pending.shift();
        this._send(e3.mail, (...t3) => {
          setImmediate(() => e3.callback(...t3)), this._sent();
        });
      }
      _checkSendingRate() {
        clearTimeout(this.sendingRateTTL);
        let e3 = Date.now(), t3 = false;
        for (let i4 = this.rateMessages.length - 1; i4 >= 0; i4--)
          this.rateMessages[i4].ts >= e3 - this.rateInterval && (!t3 || this.rateMessages[i4].ts < t3) && (t3 = this.rateMessages[i4].ts), this.rateMessages[i4].ts < e3 - this.rateInterval && !this.rateMessages[i4].pending && this.rateMessages.splice(i4, 1);
        if (this.rateMessages.length < this.sendingRate)
          return true;
        let i3 = Math.max(t3 + 1001, e3 + 20);
        this.sendingRateTTL = setTimeout(() => this._checkRatedQueue(), e3 - i3);
        try {
          this.sendingRateTTL.unref();
        } catch (e4) {
        }
        return false;
      }
      _sent() {
        this.connections--, this._checkRatedQueue();
      }
      isIdle() {
        return this.idling;
      }
      _send(e3, t3) {
        let i3 = { ts: Date.now(), pending: true };
        this.connections++, this.rateMessages.push(i3);
        let a2 = e3.data.envelope || e3.message.getEnvelope(), s2 = e3.message.messageId(), n2 = [].concat(a2.to || []);
        n2.length > 3 && n2.push("...and " + n2.splice(2).length + " more"), this.logger.info({ tnx: "send", messageId: s2 }, "Sending message %s to <%s>", s2, n2.join(", ")), setImmediate(() => ((t4) => {
          e3.data._dkim || (e3.data._dkim = {}), e3.data._dkim.skipFields && "string" == typeof e3.data._dkim.skipFields ? e3.data._dkim.skipFields += ":date:message-id" : e3.data._dkim.skipFields = "date:message-id";
          let i4 = e3.message.createReadStream(), a3 = i4.pipe(new o()), s3 = [], n3 = 0;
          a3.on("readable", () => {
            let e4;
            for (; null !== (e4 = a3.read()); )
              s3.push(e4), n3 += e4.length;
          }), i4.once("error", (e4) => a3.emit("error", e4)), a3.once("error", (e4) => {
            t4(e4);
          }), a3.once("end", () => t4(null, Buffer.concat(s3, n3)));
        })((n3, o2) => {
          if (n3)
            return this.logger.error({ err: n3, tnx: "send", messageId: s2 }, "Failed creating message for %s. %s", s2, n3.message), i3.pending = false, t3(n3);
          let r = { RawMessage: { Data: o2 }, Source: a2.from, Destinations: a2.to };
          Object.keys(e3.data.ses || {}).forEach((t4) => {
            r[t4] = e3.data.ses[t4];
          });
          let p = (this.ses.aws ? this.ses.ses : this.ses) || {}, c = this.ses.aws || {};
          var l;
          l = (e4, n4) => {
            let l2;
            !e4 && n4 || (n4 = "us-east-1"), l2 = "function" == typeof p.send && c.SendRawEmailCommand ? p.send(new c.SendRawEmailCommand(r)) : p.sendRawEmail(r).promise(), l2.then((e5) => {
              "us-east-1" === n4 && (n4 = "email"), i3.pending = false, t3(null, { envelope: { from: a2.from, to: a2.to }, messageId: "<" + e5.MessageId + (/@/.test(e5.MessageId) ? "" : "@" + n4 + ".amazonses.com") + ">", response: e5.MessageId, raw: o2 });
            }).catch((e5) => {
              this.logger.error({ err: e5, tnx: "send" }, "Send error for %s: %s", s2, e5.message), i3.pending = false, t3(e5);
            });
          }, p.config && "function" == typeof p.config.region ? p.config.region().then((e4) => l(null, e4)).catch((e4) => l(e4)) : l(null, p.config && p.config.region || "us-east-1");
        }));
      }
      verify(e3) {
        let t3, i3 = (this.ses.aws ? this.ses.ses : this.ses) || {}, a2 = this.ses.aws || {};
        const s2 = { RawMessage: { Data: "From: invalid@invalid\r\nTo: invalid@invalid\r\n Subject: Invalid\r\n\r\nInvalid" }, Source: "invalid@invalid", Destinations: ["invalid@invalid"] };
        e3 || (t3 = new Promise((t4, i4) => {
          e3 = n.callbackPromise(t4, i4);
        }));
        const o2 = (t4) => t4 && "InvalidParameterValue" !== (t4.code || t4.Code) ? e3(t4) : e3(null, true);
        return "function" == typeof i3.send && a2.SendRawEmailCommand ? (s2.RawMessage.Data = Buffer.from(s2.RawMessage.Data), i3.send(new a2.SendRawEmailCommand(s2), o2)) : i3.sendRawEmail(s2, o2), t3;
      }
    };
  }, 6047: (e2, t2, i2) => {
    "use strict";
    const a = i2(7016), s = i2(9023), n = i2(9896), o = i2(1358), r = i2(2250), p = i2(9278), c = i2(857), l = 3e5;
    let d;
    try {
      d = c.networkInterfaces();
    } catch (e3) {
    }
    e2.exports.networkInterfaces = d;
    const h = (t3, i3) => {
      let a2 = e2.exports.networkInterfaces;
      return !a2 || Object.keys(a2).map((e3) => a2[e3]).reduce((e3, t4) => e3.concat(t4), []).filter((e3) => !e3.internal || i3).filter((e3) => e3.family === "IPv" + t3 || e3.family === t3).length > 0;
    }, m = (e3, t3, i3, a2) => {
      if (!h(e3, (i3 = i3 || {}).allowInternalNetworkInterfaces))
        return a2(null, []);
      (r.Resolver ? new r.Resolver(i3) : r)["resolve" + e3](t3, (e4, t4) => {
        if (e4) {
          switch (e4.code) {
            case r.NODATA:
            case r.NOTFOUND:
            case r.NOTIMP:
            case r.SERVFAIL:
            case r.CONNREFUSED:
            case r.REFUSED:
            case "EAI_AGAIN":
              return a2(null, []);
          }
          return a2(e4);
        }
        return a2(null, Array.isArray(t4) ? t4 : [].concat(t4 || []));
      });
    }, u = e2.exports.dnsCache = /* @__PURE__ */ new Map(), f = (e3, t3) => e3 ? Object.assign({ servername: e3.servername, host: e3.addresses && e3.addresses.length ? 1 === e3.addresses.length ? e3.addresses[0] : e3.addresses[Math.floor(Math.random() * e3.addresses.length)] : null }, t3 || {}) : Object.assign({}, t3 || {});
    function g(e3, t3) {
      let i3 = false, a2 = [], s2 = 0;
      e3.on("error", (e4) => {
        i3 || (i3 = true, t3(e4));
      }), e3.on("readable", () => {
        let t4;
        for (; null !== (t4 = e3.read()); )
          a2.push(t4), s2 += t4.length;
      }), e3.on("end", () => {
        if (i3)
          return;
        let e4;
        i3 = true;
        try {
          e4 = Buffer.concat(a2, s2);
        } catch (e5) {
          return t3(e5);
        }
        t3(null, e4);
      });
    }
    e2.exports.resolveHostname = (e3, t3) => {
      if (!(e3 = e3 || {}).host && e3.servername && (e3.host = e3.servername), !e3.host || p.isIP(e3.host)) {
        let i4 = { addresses: [e3.host], servername: e3.servername || false };
        return t3(null, f(i4, { cached: false }));
      }
      let i3;
      if (u.has(e3.host) && (i3 = u.get(e3.host), !i3.expires || i3.expires >= Date.now()))
        return t3(null, f(i3.value, { cached: true }));
      m(4, e3.host, e3, (a2, s2) => {
        if (a2)
          return i3 ? t3(null, f(i3.value, { cached: true, error: a2 })) : t3(a2);
        if (s2 && s2.length) {
          let i4 = { addresses: s2, servername: e3.servername || e3.host };
          return u.set(e3.host, { value: i4, expires: Date.now() + (e3.dnsTtl || l) }), t3(null, f(i4, { cached: false }));
        }
        m(6, e3.host, e3, (a3, s3) => {
          if (a3)
            return i3 ? t3(null, f(i3.value, { cached: true, error: a3 })) : t3(a3);
          if (s3 && s3.length) {
            let i4 = { addresses: s3, servername: e3.servername || e3.host };
            return u.set(e3.host, { value: i4, expires: Date.now() + (e3.dnsTtl || l) }), t3(null, f(i4, { cached: false }));
          }
          try {
            r.lookup(e3.host, { all: true }, (a4, s4) => {
              if (a4)
                return i3 ? t3(null, f(i3.value, { cached: true, error: a4 })) : t3(a4);
              let n2 = !!s4 && s4.filter((e4) => h(e4.family)).map((e4) => e4.address).shift();
              if (s4 && s4.length && !n2 && console.warn(`Failed to resolve IPv${s4[0].family} addresses with current network`), !n2 && i3)
                return t3(null, f(i3.value, { cached: true }));
              let o2 = { addresses: n2 ? [n2] : [e3.host], servername: e3.servername || e3.host };
              return u.set(e3.host, { value: o2, expires: Date.now() + (e3.dnsTtl || l) }), t3(null, f(o2, { cached: false }));
            });
          } catch (a4) {
            return i3 ? t3(null, f(i3.value, { cached: true, error: a4 })) : t3(a4);
          }
        });
      });
    }, e2.exports.parseConnectionUrl = (e3) => {
      e3 = e3 || "";
      let t3 = {};
      return [a.parse(e3, true)].forEach((e4) => {
        let i3;
        switch (e4.protocol) {
          case "smtp:":
            t3.secure = false;
            break;
          case "smtps:":
            t3.secure = true;
            break;
          case "direct:":
            t3.direct = true;
        }
        !isNaN(e4.port) && Number(e4.port) && (t3.port = Number(e4.port)), e4.hostname && (t3.host = e4.hostname), e4.auth && (i3 = e4.auth.split(":"), t3.auth || (t3.auth = {}), t3.auth.user = i3.shift(), t3.auth.pass = i3.join(":")), Object.keys(e4.query || {}).forEach((i4) => {
          let a2 = t3, s2 = i4, n2 = e4.query[i4];
          switch (isNaN(n2) || (n2 = Number(n2)), n2) {
            case "true":
              n2 = true;
              break;
            case "false":
              n2 = false;
          }
          if (0 === i4.indexOf("tls."))
            s2 = i4.substr(4), t3.tls || (t3.tls = {}), a2 = t3.tls;
          else if (i4.indexOf(".") >= 0)
            return;
          s2 in a2 || (a2[s2] = n2);
        });
      }), t3;
    }, e2.exports._logFunc = (e3, t3, i3, a2, s2, ...n2) => {
      let o2 = {};
      Object.keys(i3 || {}).forEach((e4) => {
        "level" !== e4 && (o2[e4] = i3[e4]);
      }), Object.keys(a2 || {}).forEach((e4) => {
        "level" !== e4 && (o2[e4] = a2[e4]);
      }), e3[t3](o2, s2, ...n2);
    }, e2.exports.getLogger = (t3, i3) => {
      let a2 = {}, n2 = ["trace", "debug", "info", "warn", "error", "fatal"];
      if (!(t3 = t3 || {}).logger)
        return n2.forEach((e3) => {
          a2[e3] = () => false;
        }), a2;
      let o2 = t3.logger;
      return true === t3.logger && (o2 = function(e3) {
        let t4 = 0, i4 = /* @__PURE__ */ new Map();
        e3.forEach((e4) => {
          e4.length > t4 && (t4 = e4.length);
        }), e3.forEach((e4) => {
          let a4 = e4.toUpperCase();
          a4.length < t4 && (a4 += " ".repeat(t4 - a4.length)), i4.set(e4, a4);
        });
        let a3 = (e4, t5, a4, ...n4) => {
          let o3 = "";
          t5 && ("server" === t5.tnx ? o3 = "S: " : "client" === t5.tnx && (o3 = "C: "), t5.sid && (o3 = "[" + t5.sid + "] " + o3), t5.cid && (o3 = "[#" + t5.cid + "] " + o3)), (a4 = s.format(a4, ...n4)).split(/\r?\n/).forEach((t6) => {
            console.log("[%s] %s %s", (/* @__PURE__ */ new Date()).toISOString().substr(0, 19).replace(/T/, " "), i4.get(e4), o3 + t6);
          });
        }, n3 = {};
        return e3.forEach((e4) => {
          n3[e4] = a3.bind(null, e4);
        }), n3;
      }(n2)), n2.forEach((t4) => {
        a2[t4] = (a3, s2, ...n3) => {
          e2.exports._logFunc(o2, t4, i3, a3, s2, ...n3);
        };
      }), a2;
    }, e2.exports.callbackPromise = (e3, t3) => function() {
      let i3 = Array.from(arguments), a2 = i3.shift();
      a2 ? t3(a2) : e3(...i3);
    }, e2.exports.parseDataURI = (e3) => {
      let t3 = e3, i3 = t3.indexOf(",");
      if (!i3)
        return e3;
      let a2, s2 = t3.substring(i3 + 1), n2 = t3.substring(5, i3).split(";"), o2 = n2.length > 1 && n2[n2.length - 1];
      o2 && o2.indexOf("=") < 0 && (a2 = o2.toLowerCase(), n2.pop());
      let r2 = n2.shift() || "application/octet-stream", p2 = {};
      for (let e4 of n2) {
        let t4 = e4.indexOf("=");
        if (t4 >= 0) {
          let i4 = e4.substring(0, t4), a3 = e4.substring(t4 + 1);
          p2[i4] = a3;
        }
      }
      switch (a2) {
        case "base64":
          s2 = Buffer.from(s2, "base64");
          break;
        case "utf8":
          s2 = Buffer.from(s2);
          break;
        default:
          try {
            s2 = Buffer.from(decodeURIComponent(s2));
          } catch (e4) {
            s2 = Buffer.from(s2);
          }
          s2 = Buffer.from(s2);
      }
      return { data: s2, encoding: a2, contentType: r2, params: p2 };
    }, e2.exports.resolveContent = (t3, i3, a2) => {
      let s2;
      a2 || (s2 = new Promise((t4, i4) => {
        a2 = e2.exports.callbackPromise(t4, i4);
      }));
      let r2, p2 = t3 && t3[i3] && t3[i3].content || t3[i3], c2 = ("object" == typeof t3[i3] && t3[i3].encoding || "utf8").toString().toLowerCase().replace(/[-_\s]/g, "");
      if (!p2)
        return a2(null, p2);
      if ("object" == typeof p2) {
        if ("function" == typeof p2.pipe)
          return g(p2, (e3, s3) => {
            if (e3)
              return a2(e3);
            t3[i3].content ? t3[i3].content = s3 : t3[i3] = s3, a2(null, s3);
          });
        if (/^https?:\/\//i.test(p2.path || p2.href))
          return r2 = o(p2.path || p2.href), g(r2, a2);
        if (/^data:/i.test(p2.path || p2.href)) {
          let t4 = e2.exports.parseDataURI(p2.path || p2.href);
          return t4 && t4.data ? a2(null, t4.data) : a2(null, Buffer.from(0));
        }
        if (p2.path)
          return g(n.createReadStream(p2.path), a2);
      }
      return "string" != typeof t3[i3].content || ["utf8", "usascii", "ascii"].includes(c2) || (p2 = Buffer.from(t3[i3].content, c2)), setImmediate(() => a2(null, p2)), s2;
    }, e2.exports.assign = function() {
      let e3 = Array.from(arguments), t3 = e3.shift() || {};
      return e3.forEach((e4) => {
        Object.keys(e4 || {}).forEach((i3) => {
          ["tls", "auth"].includes(i3) && e4[i3] && "object" == typeof e4[i3] ? (t3[i3] || (t3[i3] = {}), Object.keys(e4[i3]).forEach((a2) => {
            t3[i3][a2] = e4[i3][a2];
          })) : t3[i3] = e4[i3];
        });
      }), t3;
    }, e2.exports.encodeXText = (e3) => {
      if (!/[^\x21-\x2A\x2C-\x3C\x3E-\x7E]/.test(e3))
        return e3;
      let t3 = Buffer.from(e3), i3 = "";
      for (let e4 = 0, a2 = t3.length; e4 < a2; e4++) {
        let a3 = t3[e4];
        i3 += a3 < 33 || a3 > 126 || 43 === a3 || 61 === a3 ? "+" + (a3 < 16 ? "0" : "") + a3.toString(16).toUpperCase() : String.fromCharCode(a3);
      }
      return i3;
    };
  }, 5246: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Transform;
    e2.exports = class extends a {
      constructor(e3) {
        super(e3), this.options = e3 || {}, this._curLine = "", this.inByteCount = 0, this.outByteCount = 0, this.lastByte = false;
      }
      _transform(e3, t3, i3) {
        let a2, s, n, o = [], r = 0, p = 0;
        if (!e3 || !e3.length)
          return i3();
        for ("string" == typeof e3 && (e3 = Buffer.from(e3)), this.inByteCount += e3.length, a2 = 0, s = e3.length; a2 < s; a2++)
          46 === e3[a2] ? (a2 && 10 === e3[a2 - 1] || !a2 && (!this.lastByte || 10 === this.lastByte)) && (n = e3.slice(p, a2 + 1), o.push(n), o.push(Buffer.from(".")), r += n.length + 1, p = a2 + 1) : 10 === e3[a2] && (a2 && 13 !== e3[a2 - 1] || !a2 && 13 !== this.lastByte) && (a2 > p ? (n = e3.slice(p, a2), o.push(n), r += n.length + 2) : r += 2, o.push(Buffer.from("\r\n")), p = a2 + 1);
        r ? (p < e3.length && (n = e3.slice(p), o.push(n), r += n.length), this.outByteCount += r, this.push(Buffer.concat(o, r))) : (this.outByteCount += e3.length, this.push(e3)), this.lastByte = e3[e3.length - 1], i3();
      }
      _flush(e3) {
        let t3;
        t3 = 10 === this.lastByte ? Buffer.from(".\r\n") : 13 === this.lastByte ? Buffer.from("\n.\r\n") : Buffer.from("\r\n.\r\n"), this.outByteCount += t3.length, this.push(t3), e3();
      }
    };
  }, 1666: (e2, t2, i2) => {
    "use strict";
    const a = i2(9278), s = i2(4756), n = i2(7016);
    e2.exports = function e3(t3, i3, o, r) {
      let p, c, l, d = n.parse(t3);
      p = { host: d.hostname, port: Number(d.port) ? Number(d.port) : "https:" === d.protocol ? 443 : 80 }, "https:" === d.protocol ? (p.rejectUnauthorized = false, c = s.connect.bind(s)) : c = a.connect.bind(a);
      let h = false, m = (e4) => {
        if (!h) {
          h = true;
          try {
            l.destroy();
          } catch (e5) {
          }
          r(e4);
        }
      }, u = () => {
        let e4 = new Error("Proxy socket timed out");
        e4.code = "ETIMEDOUT", m(e4);
      };
      l = c(p, () => {
        if (h)
          return;
        let e4 = { Host: o + ":" + i3, Connection: "close" };
        d.auth && (e4["Proxy-Authorization"] = "Basic " + Buffer.from(d.auth).toString("base64")), l.write("CONNECT " + o + ":" + i3 + " HTTP/1.1\r\n" + Object.keys(e4).map((t5) => t5 + ": " + e4[t5]).join("\r\n") + "\r\n\r\n");
        let t4 = "", a2 = (e5) => {
          let i4, s2;
          if (!h && (t4 += e5.toString("binary"), i4 = t4.match(/\r\n\r\n/))) {
            if (l.removeListener("data", a2), s2 = t4.substr(i4.index + i4[0].length), t4 = t4.substr(0, i4.index), s2 && l.unshift(Buffer.from(s2, "binary")), h = true, i4 = t4.match(/^HTTP\/\d+\.\d+ (\d+)/i), !i4 || "2" !== (i4[1] || "").charAt(0)) {
              try {
                l.destroy();
              } catch (e6) {
              }
              return r(new Error("Invalid response from proxy" + (i4 && ": " + i4[1] || "")));
            }
            return l.removeListener("error", m), l.removeListener("timeout", u), l.setTimeout(0), r(null, l);
          }
        };
        l.on("data", a2);
      }), l.setTimeout(e3.timeout || 3e4), l.on("timeout", u), l.once("error", m);
    };
  }, 9273: (e2, t2, i2) => {
    "use strict";
    const a = i2(2290), s = i2(4434).EventEmitter, n = i2(9278), o = i2(4756), r = i2(857), p = i2(6982), c = i2(5246), l = i2(2203).PassThrough, d = i2(6047), h = 6e5;
    e2.exports = class extends s {
      constructor(e3) {
        super(e3), this.id = p.randomBytes(8).toString("base64").replace(/\W/g, ""), this.stage = "init", this.options = e3 || {}, this.secureConnection = !!this.options.secure, this.alreadySecured = !!this.options.secured, this.port = Number(this.options.port) || (this.secureConnection ? 465 : 587), this.host = this.options.host || "localhost", this.servername = this.options.servername ? this.options.servername : !n.isIP(this.host) && this.host, this.allowInternalNetworkInterfaces = this.options.allowInternalNetworkInterfaces || false, void 0 === this.options.secure && 465 === this.port && (this.secureConnection = true), this.name = this.options.name || this._getHostname(), this.logger = d.getLogger(this.options, { component: this.options.component || "smtp-connection", sid: this.id }), this.customAuth = /* @__PURE__ */ new Map(), Object.keys(this.options.customAuth || {}).forEach((e4) => {
          let t3 = (e4 || "").toString().trim().toUpperCase();
          t3 && this.customAuth.set(t3, this.options.customAuth[e4]);
        }), this.version = a.version, this.authenticated = false, this.destroyed = false, this.secure = !!this.secureConnection, this._remainder = "", this._responseQueue = [], this.lastServerResponse = false, this._socket = false, this._supportedAuth = [], this.allowsAuth = false, this._envelope = false, this._supportedExtensions = [], this._maxAllowedSize = 0, this._responseActions = [], this._recipientQueue = [], this._greetingTimeout = false, this._connectionTimeout = false, this._destroyed = false, this._closing = false, this._onSocketData = (e4) => this._onData(e4), this._onSocketError = (e4) => this._onError(e4, "ESOCKET", false, "CONN"), this._onSocketClose = () => this._onClose(), this._onSocketEnd = () => this._onEnd(), this._onSocketTimeout = () => this._onTimeout();
      }
      connect(e3) {
        if ("function" == typeof e3) {
          this.once("connect", () => {
            this.logger.debug({ tnx: "smtp" }, "SMTP handshake finished"), e3();
          });
          const t4 = this._isDestroyedMessage("connect");
          if (t4)
            return e3(this._formatError(t4, "ECONNECTION", false, "CONN"));
        }
        let t3 = { port: this.port, host: this.host, allowInternalNetworkInterfaces: this.allowInternalNetworkInterfaces, timeout: this.options.dnsTimeout || 3e4 };
        this.options.localAddress && (t3.localAddress = this.options.localAddress);
        let i3 = () => {
          this._connectionTimeout = setTimeout(() => {
            this._onError("Connection timeout", "ETIMEDOUT", false, "CONN");
          }, this.options.connectionTimeout || 12e4), this._socket.on("error", this._onSocketError);
        };
        return this.options.connection ? (this._socket = this.options.connection, void (this.secureConnection && !this.alreadySecured ? setImmediate(() => this._upgradeConnection((e4) => {
          e4 ? this._onError(new Error("Error initiating TLS - " + (e4.message || e4)), "ETLS", false, "CONN") : this._onConnect();
        })) : setImmediate(() => this._onConnect()))) : this.options.socket ? (this._socket = this.options.socket, d.resolveHostname(t3, (e4, a2) => {
          if (e4)
            return setImmediate(() => this._onError(e4, "EDNS", false, "CONN"));
          this.logger.debug({ tnx: "dns", source: t3.host, resolved: a2.host, cached: !!a2.cached }, "Resolved %s as %s [cache %s]", t3.host, a2.host, a2.cached ? "hit" : "miss"), Object.keys(a2).forEach((e5) => {
            "_" !== e5.charAt(0) && a2[e5] && (t3[e5] = a2[e5]);
          });
          try {
            this._socket.connect(this.port, this.host, () => {
              this._socket.setKeepAlive(true), this._onConnect();
            }), i3();
          } catch (e5) {
            return setImmediate(() => this._onError(e5, "ECONNECTION", false, "CONN"));
          }
        })) : this.secureConnection ? (this.options.tls && Object.keys(this.options.tls).forEach((e4) => {
          t3[e4] = this.options.tls[e4];
        }), this.servername && !t3.servername && (t3.servername = this.servername), d.resolveHostname(t3, (e4, a2) => {
          if (e4)
            return setImmediate(() => this._onError(e4, "EDNS", false, "CONN"));
          this.logger.debug({ tnx: "dns", source: t3.host, resolved: a2.host, cached: !!a2.cached }, "Resolved %s as %s [cache %s]", t3.host, a2.host, a2.cached ? "hit" : "miss"), Object.keys(a2).forEach((e5) => {
            "_" !== e5.charAt(0) && a2[e5] && (t3[e5] = a2[e5]);
          });
          try {
            this._socket = o.connect(t3, () => {
              this._socket.setKeepAlive(true), this._onConnect();
            }), i3();
          } catch (e5) {
            return setImmediate(() => this._onError(e5, "ECONNECTION", false, "CONN"));
          }
        })) : d.resolveHostname(t3, (e4, a2) => {
          if (e4)
            return setImmediate(() => this._onError(e4, "EDNS", false, "CONN"));
          this.logger.debug({ tnx: "dns", source: t3.host, resolved: a2.host, cached: !!a2.cached }, "Resolved %s as %s [cache %s]", t3.host, a2.host, a2.cached ? "hit" : "miss"), Object.keys(a2).forEach((e5) => {
            "_" !== e5.charAt(0) && a2[e5] && (t3[e5] = a2[e5]);
          });
          try {
            this._socket = n.connect(t3, () => {
              this._socket.setKeepAlive(true), this._onConnect();
            }), i3();
          } catch (e5) {
            return setImmediate(() => this._onError(e5, "ECONNECTION", false, "CONN"));
          }
        });
      }
      quit() {
        this._sendCommand("QUIT"), this._responseActions.push(this.close);
      }
      close() {
        if (clearTimeout(this._connectionTimeout), clearTimeout(this._greetingTimeout), this._responseActions = [], this._closing)
          return;
        this._closing = true;
        let e3 = "end";
        "init" === this.stage && (e3 = "destroy"), this.logger.debug({ tnx: "smtp" }, 'Closing connection to the server using "%s"', e3);
        let t3 = this._socket && this._socket.socket || this._socket;
        if (t3 && !t3.destroyed)
          try {
            this._socket[e3]();
          } catch (e4) {
          }
        this._destroy();
      }
      login(e3, t3) {
        const i3 = this._isDestroyedMessage("login");
        if (i3)
          return t3(this._formatError(i3, "ECONNECTION", false, "API"));
        if (this._auth = e3 || {}, this._authMethod = (this._auth.method || "").toString().trim().toUpperCase() || false, this._authMethod || !this._auth.oauth2 || this._auth.credentials ? this._authMethod && ("XOAUTH2" !== this._authMethod || this._auth.oauth2) || (this._authMethod = (this._supportedAuth[0] || "PLAIN").toUpperCase().trim()) : this._authMethod = "XOAUTH2", !("XOAUTH2" === this._authMethod || this._auth.credentials && this._auth.credentials.user && this._auth.credentials.pass)) {
          if (!(this._auth.user && this._auth.pass || this.customAuth.has(this._authMethod)))
            return t3(this._formatError('Missing credentials for "' + this._authMethod + '"', "EAUTH", false, "API"));
          this._auth.credentials = { user: this._auth.user, pass: this._auth.pass, options: this._auth.options };
        }
        if (!this.customAuth.has(this._authMethod)) {
          switch (this._authMethod) {
            case "XOAUTH2":
              return void this._handleXOauth2Token(false, t3);
            case "LOGIN":
              return this._responseActions.push((e4) => {
                this._actionAUTH_LOGIN_USER(e4, t3);
              }), void this._sendCommand("AUTH LOGIN");
            case "PLAIN":
              return this._responseActions.push((e4) => {
                this._actionAUTHComplete(e4, t3);
              }), void this._sendCommand("AUTH PLAIN " + Buffer.from("\0" + this._auth.credentials.user + "\0" + this._auth.credentials.pass, "utf-8").toString("base64"), "AUTH PLAIN " + Buffer.from("\0" + this._auth.credentials.user + "\0/* secret */", "utf-8").toString("base64"));
            case "CRAM-MD5":
              return this._responseActions.push((e4) => {
                this._actionAUTH_CRAM_MD5(e4, t3);
              }), void this._sendCommand("AUTH CRAM-MD5");
          }
          return t3(this._formatError('Unknown authentication method "' + this._authMethod + '"', "EAUTH", false, "API"));
        }
        {
          let e4, i4 = this.customAuth.get(this._authMethod), a2 = false, s2 = () => {
            a2 || (a2 = true, this.logger.info({ tnx: "smtp", username: this._auth.user, action: "authenticated", method: this._authMethod }, "User %s authenticated", JSON.stringify(this._auth.user)), this.authenticated = true, t3(null, true));
          }, n2 = (i5) => {
            a2 || (a2 = true, t3(this._formatError(i5, "EAUTH", e4, "AUTH " + this._authMethod)));
          }, o2 = i4({ auth: this._auth, method: this._authMethod, extensions: [].concat(this._supportedExtensions), authMethods: [].concat(this._supportedAuth), maxAllowedSize: this._maxAllowedSize || false, sendCommand: (t4, i5) => {
            let a3;
            return i5 || (a3 = new Promise((e5, t5) => {
              i5 = d.callbackPromise(e5, t5);
            })), this._responseActions.push((a4) => {
              e4 = a4;
              let s3 = a4.match(/^(\d+)(?:\s(\d+\.\d+\.\d+))?\s/), n3 = { command: t4, response: a4 };
              s3 ? (n3.status = Number(s3[1]) || 0, s3[2] && (n3.code = s3[2]), n3.text = a4.substr(s3[0].length)) : (n3.text = a4, n3.status = 0), i5(null, n3);
            }), setImmediate(() => this._sendCommand(t4)), a3;
          }, resolve: s2, reject: n2 });
          o2 && "function" == typeof o2.catch && o2.then(s2).catch(n2);
        }
      }
      send(e3, t3, i3) {
        if (!t3)
          return i3(this._formatError("Empty message", "EMESSAGE", false, "API"));
        const a2 = this._isDestroyedMessage("send message");
        if (a2)
          return i3(this._formatError(a2, "ECONNECTION", false, "API"));
        if (this._maxAllowedSize && e3.size > this._maxAllowedSize)
          return setImmediate(() => {
            i3(this._formatError("Message size larger than allowed " + this._maxAllowedSize, "EMESSAGE", false, "MAIL FROM"));
          });
        let s2 = false, n2 = function() {
          s2 || (s2 = true, i3(...arguments));
        };
        "function" == typeof t3.on && t3.on("error", (e4) => n2(this._formatError(e4, "ESTREAM", false, "API")));
        let o2 = Date.now();
        this._setEnvelope(e3, (e4, i4) => {
          if (e4)
            return n2(e4);
          let a3 = Date.now(), s3 = this._createSendStream((e5, t4) => e5 ? n2(e5) : (i4.envelopeTime = a3 - o2, i4.messageTime = Date.now() - a3, i4.messageSize = s3.outByteCount, i4.response = t4, n2(null, i4)));
          "function" == typeof t3.pipe ? t3.pipe(s3) : (s3.write(t3), s3.end());
        });
      }
      reset(e3) {
        this._sendCommand("RSET"), this._responseActions.push((t3) => "2" !== t3.charAt(0) ? e3(this._formatError("Could not reset session state. response=" + t3, "EPROTOCOL", t3, "RSET")) : (this._envelope = false, e3(null, true)));
      }
      _onConnect() {
        clearTimeout(this._connectionTimeout), this.logger.info({ tnx: "network", localAddress: this._socket.localAddress, localPort: this._socket.localPort, remoteAddress: this._socket.remoteAddress, remotePort: this._socket.remotePort }, "%s established to %s:%s", this.secure ? "Secure connection" : "Connection", this._socket.remoteAddress, this._socket.remotePort), this._destroyed ? this.close() : (this.stage = "connected", this._socket.removeListener("data", this._onSocketData), this._socket.removeListener("timeout", this._onSocketTimeout), this._socket.removeListener("close", this._onSocketClose), this._socket.removeListener("end", this._onSocketEnd), this._socket.on("data", this._onSocketData), this._socket.once("close", this._onSocketClose), this._socket.once("end", this._onSocketEnd), this._socket.setTimeout(this.options.socketTimeout || h), this._socket.on("timeout", this._onSocketTimeout), this._greetingTimeout = setTimeout(() => {
          this._socket && !this._destroyed && this._responseActions[0] === this._actionGreeting && this._onError("Greeting never received", "ETIMEDOUT", false, "CONN");
        }, this.options.greetingTimeout || 3e4), this._responseActions.push(this._actionGreeting), this._socket.resume());
      }
      _onData(e3) {
        if (this._destroyed || !e3 || !e3.length)
          return;
        let t3, i3 = (e3 || "").toString("binary"), a2 = (this._remainder + i3).split(/\r?\n/);
        this._remainder = a2.pop();
        for (let e4 = 0, i4 = a2.length; e4 < i4; e4++)
          this._responseQueue.length && (t3 = this._responseQueue[this._responseQueue.length - 1], /^\d+-/.test(t3.split("\n").pop())) ? this._responseQueue[this._responseQueue.length - 1] += "\n" + a2[e4] : this._responseQueue.push(a2[e4]);
        this._responseQueue.length && (t3 = this._responseQueue[this._responseQueue.length - 1], /^\d+-/.test(t3.split("\n").pop())) || this._processResponse();
      }
      _onError(e3, t3, i3, a2) {
        clearTimeout(this._connectionTimeout), clearTimeout(this._greetingTimeout), this._destroyed || (e3 = this._formatError(e3, t3, i3, a2), this.logger.error(i3, e3.message), this.emit("error", e3), this.close());
      }
      _formatError(e3, t3, i3, a2) {
        let s2;
        s2 = /Error\]$/i.test(Object.prototype.toString.call(e3)) ? e3 : new Error(e3), t3 && "Error" !== t3 && (s2.code = t3), i3 && (s2.response = i3, s2.message += ": " + i3);
        let n2 = "string" == typeof i3 && Number((i3.match(/^\d+/) || [])[0]) || false;
        return n2 && (s2.responseCode = n2), a2 && (s2.command = a2), s2;
      }
      _onClose() {
        let e3 = false;
        return this._remainder && this._remainder.trim() && ((this.options.debug || this.options.transactionLog) && this.logger.debug({ tnx: "server" }, this._remainder.replace(/\r?\n$/, "")), this.lastServerResponse = e3 = this._remainder.trim()), this.logger.info({ tnx: "network" }, "Connection closed"), this.upgrading && !this._destroyed ? this._onError(new Error("Connection closed unexpectedly"), "ETLS", e3, "CONN") : [this._actionGreeting, this.close].includes(this._responseActions[0]) || this._destroyed ? /^[45]\d{2}\b/.test(e3) ? this._onError(new Error("Connection closed unexpectedly"), "ECONNECTION", e3, "CONN") : void this._destroy() : this._onError(new Error("Connection closed unexpectedly"), "ECONNECTION", e3, "CONN");
      }
      _onEnd() {
        this._socket && !this._socket.destroyed && this._socket.destroy();
      }
      _onTimeout() {
        return this._onError(new Error("Timeout"), "ETIMEDOUT", false, "CONN");
      }
      _destroy() {
        this._destroyed || (this._destroyed = true, this.emit("end"));
      }
      _upgradeConnection(e3) {
        this._socket.removeListener("data", this._onSocketData), this._socket.removeListener("timeout", this._onSocketTimeout);
        let t3 = this._socket, i3 = { socket: this._socket, host: this.host };
        Object.keys(this.options.tls || {}).forEach((e4) => {
          i3[e4] = this.options.tls[e4];
        }), this.servername && !i3.servername && (i3.servername = this.servername), this.upgrading = true;
        try {
          this._socket = o.connect(i3, () => (this.secure = true, this.upgrading = false, this._socket.on("data", this._onSocketData), t3.removeListener("close", this._onSocketClose), t3.removeListener("end", this._onSocketEnd), e3(null, true)));
        } catch (t4) {
          return e3(t4);
        }
        this._socket.on("error", this._onSocketError), this._socket.once("close", this._onSocketClose), this._socket.once("end", this._onSocketEnd), this._socket.setTimeout(this.options.socketTimeout || h), this._socket.on("timeout", this._onSocketTimeout), t3.resume();
      }
      _processResponse() {
        if (!this._responseQueue.length)
          return false;
        let e3 = this.lastServerResponse = (this._responseQueue.shift() || "").toString();
        if (/^\d+-/.test(e3.split("\n").pop()))
          return;
        (this.options.debug || this.options.transactionLog) && this.logger.debug({ tnx: "server" }, e3.replace(/\r?\n$/, "")), e3.trim() || setImmediate(() => this._processResponse());
        let t3 = this._responseActions.shift();
        if ("function" != typeof t3)
          return this._onError(new Error("Unexpected Response"), "EPROTOCOL", e3, "CONN");
        t3.call(this, e3), setImmediate(() => this._processResponse());
      }
      _sendCommand(e3, t3) {
        if (!this._destroyed) {
          if (this._socket.destroyed)
            return this.close();
          (this.options.debug || this.options.transactionLog) && this.logger.debug({ tnx: "client" }, (t3 || e3 || "").toString().replace(/\r?\n$/, "")), this._socket.write(Buffer.from(e3 + "\r\n", "utf-8"));
        }
      }
      _setEnvelope(e3, t3) {
        let i3 = [], a2 = false;
        if (this._envelope = e3 || {}, this._envelope.from = (this._envelope.from && this._envelope.from.address || this._envelope.from || "").toString().trim(), this._envelope.to = [].concat(this._envelope.to || []).map((e4) => (e4 && e4.address || e4 || "").toString().trim()), !this._envelope.to.length)
          return t3(this._formatError("No recipients defined", "EENVELOPE", false, "API"));
        if (this._envelope.from && /[\r\n<>]/.test(this._envelope.from))
          return t3(this._formatError("Invalid sender " + JSON.stringify(this._envelope.from), "EENVELOPE", false, "API"));
        /[\x80-\uFFFF]/.test(this._envelope.from) && (a2 = true);
        for (let e4 = 0, i4 = this._envelope.to.length; e4 < i4; e4++) {
          if (!this._envelope.to[e4] || /[\r\n<>]/.test(this._envelope.to[e4]))
            return t3(this._formatError("Invalid recipient " + JSON.stringify(this._envelope.to[e4]), "EENVELOPE", false, "API"));
          /[\x80-\uFFFF]/.test(this._envelope.to[e4]) && (a2 = true);
        }
        if (this._envelope.rcptQueue = JSON.parse(JSON.stringify(this._envelope.to || [])), this._envelope.rejected = [], this._envelope.rejectedErrors = [], this._envelope.accepted = [], this._envelope.dsn)
          try {
            this._envelope.dsn = this._setDsnEnvelope(this._envelope.dsn);
          } catch (e4) {
            return t3(this._formatError("Invalid DSN " + e4.message, "EENVELOPE", false, "API"));
          }
        this._responseActions.push((e4) => {
          this._actionMAIL(e4, t3);
        }), a2 && this._supportedExtensions.includes("SMTPUTF8") && (i3.push("SMTPUTF8"), this._usingSmtpUtf8 = true), this._envelope.use8BitMime && this._supportedExtensions.includes("8BITMIME") && (i3.push("BODY=8BITMIME"), this._using8BitMime = true), this._envelope.size && this._supportedExtensions.includes("SIZE") && i3.push("SIZE=" + this._envelope.size), this._envelope.dsn && this._supportedExtensions.includes("DSN") && (this._envelope.dsn.ret && i3.push("RET=" + d.encodeXText(this._envelope.dsn.ret)), this._envelope.dsn.envid && i3.push("ENVID=" + d.encodeXText(this._envelope.dsn.envid))), this._sendCommand("MAIL FROM:<" + this._envelope.from + ">" + (i3.length ? " " + i3.join(" ") : ""));
      }
      _setDsnEnvelope(e3) {
        let t3 = (e3.ret || e3.return || "").toString().toUpperCase() || null;
        if (t3)
          switch (t3) {
            case "HDRS":
            case "HEADERS":
              t3 = "HDRS";
              break;
            case "FULL":
            case "BODY":
              t3 = "FULL";
          }
        if (t3 && !["FULL", "HDRS"].includes(t3))
          throw new Error("ret: " + JSON.stringify(t3));
        let i3 = (e3.envid || e3.id || "").toString() || null, a2 = e3.notify || null;
        if (a2) {
          "string" == typeof a2 && (a2 = a2.split(",")), a2 = a2.map((e5) => e5.trim().toUpperCase());
          let e4 = ["NEVER", "SUCCESS", "FAILURE", "DELAY"];
          if (a2.filter((t4) => !e4.includes(t4)).length || a2.length > 1 && a2.includes("NEVER"))
            throw new Error("notify: " + JSON.stringify(a2.join(",")));
          a2 = a2.join(",");
        }
        let s2 = (e3.recipient || e3.orcpt || "").toString() || null;
        return s2 && s2.indexOf(";") < 0 && (s2 = "rfc822;" + s2), { ret: t3, envid: i3, notify: a2, orcpt: s2 };
      }
      _getDsnRcptToArgs() {
        let e3 = [];
        return this._envelope.dsn && this._supportedExtensions.includes("DSN") && (this._envelope.dsn.notify && e3.push("NOTIFY=" + d.encodeXText(this._envelope.dsn.notify)), this._envelope.dsn.orcpt && e3.push("ORCPT=" + d.encodeXText(this._envelope.dsn.orcpt))), e3.length ? " " + e3.join(" ") : "";
      }
      _createSendStream(e3) {
        let t3, i3 = new c();
        return this.options.lmtp ? this._envelope.accepted.forEach((t4, i4) => {
          let a2 = i4 === this._envelope.accepted.length - 1;
          this._responseActions.push((i5) => {
            this._actionLMTPStream(t4, a2, i5, e3);
          });
        }) : this._responseActions.push((t4) => {
          this._actionSMTPStream(t4, e3);
        }), i3.pipe(this._socket, { end: false }), this.options.debug && (t3 = new l(), t3.on("readable", () => {
          let e4;
          for (; e4 = t3.read(); )
            this.logger.debug({ tnx: "message" }, e4.toString("binary").replace(/\r?\n$/, ""));
        }), i3.pipe(t3)), i3.once("end", () => {
          this.logger.info({ tnx: "message", inByteCount: i3.inByteCount, outByteCount: i3.outByteCount }, "<%s bytes encoded mime message (source size %s bytes)>", i3.outByteCount, i3.inByteCount);
        }), i3;
      }
      _actionGreeting(e3) {
        clearTimeout(this._greetingTimeout), "220" === e3.substr(0, 3) ? this.options.lmtp ? (this._responseActions.push(this._actionLHLO), this._sendCommand("LHLO " + this.name)) : (this._responseActions.push(this._actionEHLO), this._sendCommand("EHLO " + this.name)) : this._onError(new Error("Invalid greeting. response=" + e3), "EPROTOCOL", e3, "CONN");
      }
      _actionLHLO(e3) {
        "2" === e3.charAt(0) ? this._actionEHLO(e3) : this._onError(new Error("Invalid LHLO. response=" + e3), "EPROTOCOL", e3, "LHLO");
      }
      _actionEHLO(e3) {
        let t3;
        if ("421" !== e3.substr(0, 3)) {
          if ("2" !== e3.charAt(0))
            return this.options.requireTLS ? void this._onError(new Error("EHLO failed but HELO does not support required STARTTLS. response=" + e3), "ECONNECTION", e3, "EHLO") : (this._responseActions.push(this._actionHELO), void this._sendCommand("HELO " + this.name));
          if (this._ehloLines = e3.split(/\r?\n/).map((e4) => e4.replace(/^\d+[ -]/, "").trim()).filter((e4) => e4).slice(1), !this.secure && !this.options.ignoreTLS && (/[ -]STARTTLS\b/im.test(e3) || this.options.requireTLS))
            return this._sendCommand("STARTTLS"), void this._responseActions.push(this._actionSTARTTLS);
          /[ -]SMTPUTF8\b/im.test(e3) && this._supportedExtensions.push("SMTPUTF8"), /[ -]DSN\b/im.test(e3) && this._supportedExtensions.push("DSN"), /[ -]8BITMIME\b/im.test(e3) && this._supportedExtensions.push("8BITMIME"), /[ -]PIPELINING\b/im.test(e3) && this._supportedExtensions.push("PIPELINING"), /[ -]AUTH\b/i.test(e3) && (this.allowsAuth = true), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)PLAIN/i.test(e3) && this._supportedAuth.push("PLAIN"), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)LOGIN/i.test(e3) && this._supportedAuth.push("LOGIN"), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)CRAM-MD5/i.test(e3) && this._supportedAuth.push("CRAM-MD5"), /[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)XOAUTH2/i.test(e3) && this._supportedAuth.push("XOAUTH2"), (t3 = e3.match(/[ -]SIZE(?:[ \t]+(\d+))?/im)) && (this._supportedExtensions.push("SIZE"), this._maxAllowedSize = Number(t3[1]) || 0), this.emit("connect");
        } else
          this._onError(new Error("Server terminates connection. response=" + e3), "ECONNECTION", e3, "EHLO");
      }
      _actionHELO(e3) {
        "2" === e3.charAt(0) ? (this.allowsAuth = true, this.emit("connect")) : this._onError(new Error("Invalid HELO. response=" + e3), "EPROTOCOL", e3, "HELO");
      }
      _actionSTARTTLS(e3) {
        if ("2" !== e3.charAt(0))
          return this.options.opportunisticTLS ? (this.logger.info({ tnx: "smtp" }, "Failed STARTTLS upgrade, continuing unencrypted"), this.emit("connect")) : void this._onError(new Error("Error upgrading connection with STARTTLS"), "ETLS", e3, "STARTTLS");
        this._upgradeConnection((e4, t3) => {
          e4 ? this._onError(new Error("Error initiating TLS - " + (e4.message || e4)), "ETLS", false, "STARTTLS") : (this.logger.info({ tnx: "smtp" }, "Connection upgraded with STARTTLS"), t3 ? this.options.lmtp ? (this._responseActions.push(this._actionLHLO), this._sendCommand("LHLO " + this.name)) : (this._responseActions.push(this._actionEHLO), this._sendCommand("EHLO " + this.name)) : this.emit("connect"));
        });
      }
      _actionAUTH_LOGIN_USER(e3, t3) {
        /^334[ -]/.test(e3) ? (this._responseActions.push((e4) => {
          this._actionAUTH_LOGIN_PASS(e4, t3);
        }), this._sendCommand(Buffer.from(this._auth.credentials.user + "", "utf-8").toString("base64"))) : t3(this._formatError('Invalid login sequence while waiting for "334 VXNlcm5hbWU6"', "EAUTH", e3, "AUTH LOGIN"));
      }
      _actionAUTH_CRAM_MD5(e3, t3) {
        let i3 = e3.match(/^334\s+(.+)$/), a2 = "";
        if (!i3)
          return t3(this._formatError("Invalid login sequence while waiting for server challenge string", "EAUTH", e3, "AUTH CRAM-MD5"));
        a2 = i3[1];
        let s2 = Buffer.from(a2, "base64").toString("ascii"), n2 = p.createHmac("md5", this._auth.credentials.pass);
        n2.update(s2);
        let o2 = this._auth.credentials.user + " " + n2.digest("hex");
        this._responseActions.push((e4) => {
          this._actionAUTH_CRAM_MD5_PASS(e4, t3);
        }), this._sendCommand(Buffer.from(o2).toString("base64"), Buffer.from(this._auth.credentials.user + " /* secret */").toString("base64"));
      }
      _actionAUTH_CRAM_MD5_PASS(e3, t3) {
        if (!e3.match(/^235\s+/))
          return t3(this._formatError('Invalid login sequence while waiting for "235"', "EAUTH", e3, "AUTH CRAM-MD5"));
        this.logger.info({ tnx: "smtp", username: this._auth.user, action: "authenticated", method: this._authMethod }, "User %s authenticated", JSON.stringify(this._auth.user)), this.authenticated = true, t3(null, true);
      }
      _actionAUTH_LOGIN_PASS(e3, t3) {
        if (!/^334[ -]/.test(e3))
          return t3(this._formatError('Invalid login sequence while waiting for "334 UGFzc3dvcmQ6"', "EAUTH", e3, "AUTH LOGIN"));
        this._responseActions.push((e4) => {
          this._actionAUTHComplete(e4, t3);
        }), this._sendCommand(Buffer.from((this._auth.credentials.pass || "").toString(), "utf-8").toString("base64"), Buffer.from("/* secret */", "utf-8").toString("base64"));
      }
      _actionAUTHComplete(e3, t3, i3) {
        return i3 || "function" != typeof t3 || (i3 = t3, t3 = false), "334" === e3.substr(0, 3) ? (this._responseActions.push((e4) => {
          t3 || "XOAUTH2" !== this._authMethod ? this._actionAUTHComplete(e4, true, i3) : setImmediate(() => this._handleXOauth2Token(true, i3));
        }), void this._sendCommand("")) : "2" !== e3.charAt(0) ? (this.logger.info({ tnx: "smtp", username: this._auth.user, action: "authfail", method: this._authMethod }, "User %s failed to authenticate", JSON.stringify(this._auth.user)), i3(this._formatError("Invalid login", "EAUTH", e3, "AUTH " + this._authMethod))) : (this.logger.info({ tnx: "smtp", username: this._auth.user, action: "authenticated", method: this._authMethod }, "User %s authenticated", JSON.stringify(this._auth.user)), this.authenticated = true, void i3(null, true));
      }
      _actionMAIL(e3, t3) {
        let i3, a2;
        if (2 !== Number(e3.charAt(0)))
          return i3 = this._usingSmtpUtf8 && /^550 /.test(e3) && /[\x80-\uFFFF]/.test(this._envelope.from) ? "Internationalized mailbox name not allowed" : "Mail command failed", t3(this._formatError(i3, "EENVELOPE", e3, "MAIL FROM"));
        if (!this._envelope.rcptQueue.length)
          return t3(this._formatError("Can't send mail - no recipients defined", "EENVELOPE", false, "API"));
        if (this._recipientQueue = [], this._supportedExtensions.includes("PIPELINING"))
          for (; this._envelope.rcptQueue.length; )
            a2 = this._envelope.rcptQueue.shift(), this._recipientQueue.push(a2), this._responseActions.push((e4) => {
              this._actionRCPT(e4, t3);
            }), this._sendCommand("RCPT TO:<" + a2 + ">" + this._getDsnRcptToArgs());
        else
          a2 = this._envelope.rcptQueue.shift(), this._recipientQueue.push(a2), this._responseActions.push((e4) => {
            this._actionRCPT(e4, t3);
          }), this._sendCommand("RCPT TO:<" + a2 + ">" + this._getDsnRcptToArgs());
      }
      _actionRCPT(e3, t3) {
        let i3, a2, s2 = this._recipientQueue.shift();
        if (2 !== Number(e3.charAt(0)) ? (i3 = this._usingSmtpUtf8 && /^553 /.test(e3) && /[\x80-\uFFFF]/.test(s2) ? "Internationalized mailbox name not allowed" : "Recipient command failed", this._envelope.rejected.push(s2), a2 = this._formatError(i3, "EENVELOPE", e3, "RCPT TO"), a2.recipient = s2, this._envelope.rejectedErrors.push(a2)) : this._envelope.accepted.push(s2), this._envelope.rcptQueue.length || this._recipientQueue.length)
          this._envelope.rcptQueue.length && (s2 = this._envelope.rcptQueue.shift(), this._recipientQueue.push(s2), this._responseActions.push((e4) => {
            this._actionRCPT(e4, t3);
          }), this._sendCommand("RCPT TO:<" + s2 + ">" + this._getDsnRcptToArgs()));
        else {
          if (!(this._envelope.rejected.length < this._envelope.to.length))
            return a2 = this._formatError("Can't send mail - all recipients were rejected", "EENVELOPE", e3, "RCPT TO"), a2.rejected = this._envelope.rejected, a2.rejectedErrors = this._envelope.rejectedErrors, t3(a2);
          this._responseActions.push((e4) => {
            this._actionDATA(e4, t3);
          }), this._sendCommand("DATA");
        }
      }
      _actionDATA(e3, t3) {
        if (!/^[23]/.test(e3))
          return t3(this._formatError("Data command failed", "EENVELOPE", e3, "DATA"));
        let i3 = { accepted: this._envelope.accepted, rejected: this._envelope.rejected };
        this._ehloLines && this._ehloLines.length && (i3.ehlo = this._ehloLines), this._envelope.rejectedErrors.length && (i3.rejectedErrors = this._envelope.rejectedErrors), t3(null, i3);
      }
      _actionSMTPStream(e3, t3) {
        return 2 !== Number(e3.charAt(0)) ? t3(this._formatError("Message failed", "EMESSAGE", e3, "DATA")) : t3(null, e3);
      }
      _actionLMTPStream(e3, t3, i3, a2) {
        let s2;
        if (2 !== Number(i3.charAt(0))) {
          s2 = this._formatError("Message failed for recipient " + e3, "EMESSAGE", i3, "DATA"), s2.recipient = e3, this._envelope.rejected.push(e3), this._envelope.rejectedErrors.push(s2);
          for (let t4 = 0, i4 = this._envelope.accepted.length; t4 < i4; t4++)
            this._envelope.accepted[t4] === e3 && this._envelope.accepted.splice(t4, 1);
        }
        if (t3)
          return a2(null, i3);
      }
      _handleXOauth2Token(e3, t3) {
        this._auth.oauth2.getToken(e3, (i3, a2) => {
          if (i3)
            return this.logger.info({ tnx: "smtp", username: this._auth.user, action: "authfail", method: this._authMethod }, "User %s failed to authenticate", JSON.stringify(this._auth.user)), t3(this._formatError(i3, "EAUTH", false, "AUTH XOAUTH2"));
          this._responseActions.push((i4) => {
            this._actionAUTHComplete(i4, e3, t3);
          }), this._sendCommand("AUTH XOAUTH2 " + this._auth.oauth2.buildXOAuth2Token(a2), "AUTH XOAUTH2 " + this._auth.oauth2.buildXOAuth2Token("/* secret */"));
        });
      }
      _isDestroyedMessage(e3) {
        if (this._destroyed)
          return "Cannot " + e3 + " - smtp connection is already destroyed.";
        if (this._socket) {
          if (this._socket.destroyed)
            return "Cannot " + e3 + " - smtp connection socket is already destroyed.";
          if (!this._socket.writable)
            return "Cannot " + e3 + " - smtp connection socket is already half-closed.";
        }
      }
      _getHostname() {
        let e3;
        try {
          e3 = r.hostname() || "";
        } catch (t3) {
          e3 = "localhost";
        }
        return (!e3 || e3.indexOf(".") < 0) && (e3 = "[127.0.0.1]"), e3.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/) && (e3 = "[" + e3 + "]"), e3;
      }
    };
  }, 167: (e2, t2, i2) => {
    "use strict";
    const a = i2(4434), s = i2(2470), n = i2(9273), o = i2(9444), r = i2(6047), p = i2(2290);
    e2.exports = class extends a {
      constructor(e3) {
        let t3;
        super(), "string" == typeof (e3 = e3 || {}) && (e3 = { url: e3 });
        let i3 = e3.service;
        "function" == typeof e3.getSocket && (this.getSocket = e3.getSocket), e3.url && (t3 = r.parseConnectionUrl(e3.url), i3 = i3 || t3.service), this.options = r.assign(false, e3, t3, i3 && o(i3)), this.options.maxConnections = this.options.maxConnections || 5, this.options.maxMessages = this.options.maxMessages || 100, this.logger = r.getLogger(this.options, { component: this.options.component || "smtp-pool" });
        let a2 = new n(this.options);
        this.name = "SMTP (pool)", this.version = p.version + "[client:" + a2.version + "]", this._rateLimit = { counter: 0, timeout: null, waiting: [], checkpoint: false, delta: Number(this.options.rateDelta) || 1e3, limit: Number(this.options.rateLimit) || 0 }, this._closed = false, this._queue = [], this._connections = [], this._connectionCounter = 0, this.idling = true, setImmediate(() => {
          this.idling && this.emit("idle");
        });
      }
      getSocket(e3, t3) {
        return setImmediate(() => t3(null, false));
      }
      send(e3, t3) {
        return !this._closed && (this._queue.push({ mail: e3, requeueAttempts: 0, callback: t3 }), this.idling && this._queue.length >= this.options.maxConnections && (this.idling = false), setImmediate(() => this._processMessages()), true);
      }
      close() {
        let e3, t3 = this._connections.length;
        if (this._closed = true, clearTimeout(this._rateLimit.timeout), !t3 && !this._queue.length)
          return;
        for (let i4 = t3 - 1; i4 >= 0; i4--)
          this._connections[i4] && this._connections[i4].available && (e3 = this._connections[i4], e3.close(), this.logger.info({ tnx: "connection", cid: e3.id, action: "removed" }, "Connection #%s removed", e3.id));
        if (t3 && !this._connections.length && this.logger.debug({ tnx: "connection" }, "All connections removed"), !this._queue.length)
          return;
        let i3 = () => {
          if (!this._queue.length)
            return void this.logger.debug({ tnx: "connection" }, "Pending queue entries cleared");
          let t4 = this._queue.shift();
          if (t4 && "function" == typeof t4.callback)
            try {
              t4.callback(new Error("Connection pool was closed"));
            } catch (t5) {
              this.logger.error({ err: t5, tnx: "callback", cid: e3.id }, "Callback error for #%s: %s", e3.id, t5.message);
            }
          setImmediate(i3);
        };
        setImmediate(i3);
      }
      _processMessages() {
        let e3, t3, i3;
        if (this._closed)
          return;
        if (!this._queue.length)
          return void (this.idling || (this.idling = true, this.emit("idle")));
        for (t3 = 0, i3 = this._connections.length; t3 < i3; t3++)
          if (this._connections[t3].available) {
            e3 = this._connections[t3];
            break;
          }
        if (!e3 && this._connections.length < this.options.maxConnections && (e3 = this._createConnection()), !e3)
          return void (this.idling = false);
        !this.idling && this._queue.length < this.options.maxConnections && (this.idling = true, this.emit("idle"));
        let a2 = e3.queueEntry = this._queue.shift();
        a2.messageId = (e3.queueEntry.mail.message.getHeader("message-id") || "").replace(/[<>\s]/g, ""), e3.available = false, this.logger.debug({ tnx: "pool", cid: e3.id, messageId: a2.messageId, action: "assign" }, "Assigned message <%s> to #%s (%s)", a2.messageId, e3.id, e3.messages + 1), this._rateLimit.limit && (this._rateLimit.counter++, this._rateLimit.checkpoint || (this._rateLimit.checkpoint = Date.now())), e3.send(a2.mail, (t4, i4) => {
          if (a2 === e3.queueEntry) {
            try {
              a2.callback(t4, i4);
            } catch (t5) {
              this.logger.error({ err: t5, tnx: "callback", cid: e3.id }, "Callback error for #%s: %s", e3.id, t5.message);
            }
            e3.queueEntry = false;
          }
        });
      }
      _createConnection() {
        let e3 = new s(this);
        return e3.id = ++this._connectionCounter, this.logger.info({ tnx: "pool", cid: e3.id, action: "conection" }, "Created new pool resource #%s", e3.id), e3.on("available", () => {
          this.logger.debug({ tnx: "connection", cid: e3.id, action: "available" }, "Connection #%s became available", e3.id), this._closed ? this.close() : this._processMessages();
        }), e3.once("error", (t3) => {
          if ("EMAXLIMIT" !== t3.code ? this.logger.error({ err: t3, tnx: "pool", cid: e3.id }, "Pool Error for #%s: %s", e3.id, t3.message) : this.logger.debug({ tnx: "pool", cid: e3.id, action: "maxlimit" }, "Max messages limit exchausted for #%s", e3.id), e3.queueEntry) {
            try {
              e3.queueEntry.callback(t3);
            } catch (t4) {
              this.logger.error({ err: t4, tnx: "callback", cid: e3.id }, "Callback error for #%s: %s", e3.id, t4.message);
            }
            e3.queueEntry = false;
          }
          this._removeConnection(e3), this._continueProcessing();
        }), e3.once("close", () => {
          this.logger.info({ tnx: "connection", cid: e3.id, action: "closed" }, "Connection #%s was closed", e3.id), this._removeConnection(e3), e3.queueEntry ? setTimeout(() => {
            e3.queueEntry && (this._shouldRequeuOnConnectionClose(e3.queueEntry) ? this._requeueEntryOnConnectionClose(e3) : this._failDeliveryOnConnectionClose(e3)), this._continueProcessing();
          }, 50) : this._continueProcessing();
        }), this._connections.push(e3), e3;
      }
      _shouldRequeuOnConnectionClose(e3) {
        return void 0 === this.options.maxRequeues || this.options.maxRequeues < 0 || e3.requeueAttempts < this.options.maxRequeues;
      }
      _failDeliveryOnConnectionClose(e3) {
        if (e3.queueEntry && e3.queueEntry.callback) {
          try {
            e3.queueEntry.callback(new Error("Reached maximum number of retries after connection was closed"));
          } catch (t3) {
            this.logger.error({ err: t3, tnx: "callback", messageId: e3.queueEntry.messageId, cid: e3.id }, "Callback error for #%s: %s", e3.id, t3.message);
          }
          e3.queueEntry = false;
        }
      }
      _requeueEntryOnConnectionClose(e3) {
        e3.queueEntry.requeueAttempts = e3.queueEntry.requeueAttempts + 1, this.logger.debug({ tnx: "pool", cid: e3.id, messageId: e3.queueEntry.messageId, action: "requeue" }, "Re-queued message <%s> for #%s. Attempt: #%s", e3.queueEntry.messageId, e3.id, e3.queueEntry.requeueAttempts), this._queue.unshift(e3.queueEntry), e3.queueEntry = false;
      }
      _continueProcessing() {
        this._closed ? this.close() : setTimeout(() => this._processMessages(), 100);
      }
      _removeConnection(e3) {
        let t3 = this._connections.indexOf(e3);
        -1 !== t3 && this._connections.splice(t3, 1);
      }
      _checkRateLimit(e3) {
        if (!this._rateLimit.limit)
          return e3();
        let t3 = Date.now();
        return this._rateLimit.counter < this._rateLimit.limit ? e3() : (this._rateLimit.waiting.push(e3), this._rateLimit.checkpoint <= t3 - this._rateLimit.delta ? this._clearRateLimit() : void (this._rateLimit.timeout || (this._rateLimit.timeout = setTimeout(() => this._clearRateLimit(), this._rateLimit.delta - (t3 - this._rateLimit.checkpoint)), this._rateLimit.checkpoint = t3)));
      }
      _clearRateLimit() {
        for (clearTimeout(this._rateLimit.timeout), this._rateLimit.timeout = null, this._rateLimit.counter = 0, this._rateLimit.checkpoint = false; this._rateLimit.waiting.length; ) {
          let e3 = this._rateLimit.waiting.shift();
          setImmediate(e3);
        }
      }
      isIdle() {
        return this.idling;
      }
      verify(e3) {
        let t3;
        e3 || (t3 = new Promise((t4, i4) => {
          e3 = r.callbackPromise(t4, i4);
        }));
        let i3 = new s(this).auth;
        return this.getSocket(this.options, (t4, a2) => {
          if (t4)
            return e3(t4);
          let s2 = this.options;
          a2 && a2.connection && (this.logger.info({ tnx: "proxy", remoteAddress: a2.connection.remoteAddress, remotePort: a2.connection.remotePort, destHost: s2.host || "", destPort: s2.port || "", action: "connected" }, "Using proxied socket from %s:%s to %s:%s", a2.connection.remoteAddress, a2.connection.remotePort, s2.host || "", s2.port || ""), s2 = r.assign(false, s2), Object.keys(a2).forEach((e4) => {
            s2[e4] = a2[e4];
          }));
          let o2 = new n(s2), p2 = false;
          o2.once("error", (t5) => {
            if (!p2)
              return p2 = true, o2.close(), e3(t5);
          }), o2.once("end", () => {
            if (!p2)
              return p2 = true, e3(new Error("Connection closed"));
          });
          let c = () => {
            if (!p2)
              return p2 = true, o2.quit(), e3(null, true);
          };
          o2.connect(() => {
            if (!p2)
              if (i3 && (o2.allowsAuth || s2.forceAuth))
                o2.login(i3, (t5) => {
                  if (!p2)
                    return t5 ? (p2 = true, o2.close(), e3(t5)) : void c();
                });
              else {
                if (!i3 && o2.allowsAuth && s2.forceAuth) {
                  let t5 = new Error("Authentication info was not provided");
                  return t5.code = "NoAuth", p2 = true, o2.close(), e3(t5);
                }
                c();
              }
          });
        }), t3;
      }
    };
  }, 2470: (e2, t2, i2) => {
    "use strict";
    const a = i2(9273), s = i2(6047).assign, n = i2(9681), o = i2(4434);
    e2.exports = class extends o {
      constructor(e3) {
        if (super(), this.pool = e3, this.options = e3.options, this.logger = this.pool.logger, this.options.auth)
          switch ((this.options.auth.type || "").toString().toUpperCase()) {
            case "OAUTH2": {
              let e4 = new n(this.options.auth, this.logger);
              e4.provisionCallback = this.pool.mailer && this.pool.mailer.get("oauth2_provision_cb") || e4.provisionCallback, this.auth = { type: "OAUTH2", user: this.options.auth.user, oauth2: e4, method: "XOAUTH2" }, e4.on("token", (e5) => this.pool.mailer.emit("token", e5)), e4.on("error", (e5) => this.emit("error", e5));
              break;
            }
            default:
              if (!this.options.auth.user && !this.options.auth.pass)
                break;
              this.auth = { type: (this.options.auth.type || "").toString().toUpperCase() || "LOGIN", user: this.options.auth.user, credentials: { user: this.options.auth.user || "", pass: this.options.auth.pass, options: this.options.auth.options }, method: (this.options.auth.method || "").trim().toUpperCase() || this.options.authMethod || false };
          }
        this._connection = false, this._connected = false, this.messages = 0, this.available = true;
      }
      connect(e3) {
        this.pool.getSocket(this.options, (t3, i3) => {
          if (t3)
            return e3(t3);
          let n2 = false, o2 = this.options;
          i3 && i3.connection && (this.logger.info({ tnx: "proxy", remoteAddress: i3.connection.remoteAddress, remotePort: i3.connection.remotePort, destHost: o2.host || "", destPort: o2.port || "", action: "connected" }, "Using proxied socket from %s:%s to %s:%s", i3.connection.remoteAddress, i3.connection.remotePort, o2.host || "", o2.port || ""), o2 = s(false, o2), Object.keys(i3).forEach((e4) => {
            o2[e4] = i3[e4];
          })), this.connection = new a(o2), this.connection.once("error", (t4) => {
            if (this.emit("error", t4), !n2)
              return n2 = true, e3(t4);
          }), this.connection.once("end", () => {
            if (this.close(), n2)
              return;
            n2 = true;
            let t4 = setTimeout(() => {
              if (n2)
                return;
              let t5 = new Error("Unexpected socket close");
              this.connection && this.connection._socket && this.connection._socket.upgrading && (t5.code = "ETLS"), e3(t5);
            }, 1e3);
            try {
              t4.unref();
            } catch (e4) {
            }
          }), this.connection.connect(() => {
            if (!n2)
              return this.auth && (this.connection.allowsAuth || o2.forceAuth) ? void this.connection.login(this.auth, (t4) => {
                if (!n2) {
                  if (n2 = true, t4)
                    return this.connection.close(), this.emit("error", t4), e3(t4);
                  this._connected = true, e3(null, true);
                }
              }) : (n2 = true, this._connected = true, e3(null, true));
          });
        });
      }
      send(e3, t3) {
        if (!this._connected)
          return this.connect((i4) => i4 ? t3(i4) : this.send(e3, t3));
        let i3 = e3.message.getEnvelope(), a2 = e3.message.messageId(), s2 = [].concat(i3.to || []);
        s2.length > 3 && s2.push("...and " + s2.splice(2).length + " more"), this.logger.info({ tnx: "send", messageId: a2, cid: this.id }, "Sending message %s using #%s to <%s>", a2, this.id, s2.join(", ")), e3.data.dsn && (i3.dsn = e3.data.dsn), this.connection.send(i3, e3.message.createReadStream(), (e4, s3) => {
          if (this.messages++, e4)
            return this.connection.close(), this.emit("error", e4), t3(e4);
          s3.envelope = { from: i3.from, to: i3.to }, s3.messageId = a2, setImmediate(() => {
            let e5;
            this.messages >= this.options.maxMessages ? (e5 = new Error("Resource exhausted"), e5.code = "EMAXLIMIT", this.connection.close(), this.emit("error", e5)) : this.pool._checkRateLimit(() => {
              this.available = true, this.emit("available");
            });
          }), t3(null, s3);
        });
      }
      close() {
        this._connected = false, this.auth && this.auth.oauth2 && this.auth.oauth2.removeAllListeners(), this.connection && this.connection.close(), this.emit("close");
      }
    };
  }, 8406: (e2, t2, i2) => {
    "use strict";
    const a = i2(4434), s = i2(9273), n = i2(9444), o = i2(6047), r = i2(9681), p = i2(2290);
    e2.exports = class extends a {
      constructor(e3) {
        let t3;
        super(), "string" == typeof (e3 = e3 || {}) && (e3 = { url: e3 });
        let i3 = e3.service;
        "function" == typeof e3.getSocket && (this.getSocket = e3.getSocket), e3.url && (t3 = o.parseConnectionUrl(e3.url), i3 = i3 || t3.service), this.options = o.assign(false, e3, t3, i3 && n(i3)), this.logger = o.getLogger(this.options, { component: this.options.component || "smtp-transport" });
        let a2 = new s(this.options);
        this.name = "SMTP", this.version = p.version + "[client:" + a2.version + "]", this.options.auth && (this.auth = this.getAuth({}));
      }
      getSocket(e3, t3) {
        return setImmediate(() => t3(null, false));
      }
      getAuth(e3) {
        if (!e3)
          return this.auth;
        let t3 = false, i3 = {};
        if (this.options.auth && "object" == typeof this.options.auth && Object.keys(this.options.auth).forEach((e4) => {
          t3 = true, i3[e4] = this.options.auth[e4];
        }), e3 && "object" == typeof e3 && Object.keys(e3).forEach((a2) => {
          t3 = true, i3[a2] = e3[a2];
        }), !t3)
          return false;
        if ("OAUTH2" === (i3.type || "").toString().toUpperCase()) {
          if (!i3.service && !i3.user)
            return false;
          let e4 = new r(i3, this.logger);
          return e4.provisionCallback = this.mailer && this.mailer.get("oauth2_provision_cb") || e4.provisionCallback, e4.on("token", (e5) => this.mailer.emit("token", e5)), e4.on("error", (e5) => this.emit("error", e5)), { type: "OAUTH2", user: i3.user, oauth2: e4, method: "XOAUTH2" };
        }
        return { type: (i3.type || "").toString().toUpperCase() || "LOGIN", user: i3.user, credentials: { user: i3.user || "", pass: i3.pass, options: i3.options }, method: (i3.method || "").trim().toUpperCase() || this.options.authMethod || false };
      }
      send(e3, t3) {
        this.getSocket(this.options, (i3, a2) => {
          if (i3)
            return t3(i3);
          let n2 = false, r2 = this.options;
          a2 && a2.connection && (this.logger.info({ tnx: "proxy", remoteAddress: a2.connection.remoteAddress, remotePort: a2.connection.remotePort, destHost: r2.host || "", destPort: r2.port || "", action: "connected" }, "Using proxied socket from %s:%s to %s:%s", a2.connection.remoteAddress, a2.connection.remotePort, r2.host || "", r2.port || ""), r2 = o.assign(false, r2), Object.keys(a2).forEach((e4) => {
            r2[e4] = a2[e4];
          }));
          let p2 = new s(r2);
          p2.once("error", (e4) => {
            if (!n2)
              return n2 = true, p2.close(), t3(e4);
          }), p2.once("end", () => {
            if (n2)
              return;
            let e4 = setTimeout(() => {
              if (n2)
                return;
              n2 = true;
              let e5 = new Error("Unexpected socket close");
              p2 && p2._socket && p2._socket.upgrading && (e5.code = "ETLS"), t3(e5);
            }, 1e3);
            try {
              e4.unref();
            } catch (e5) {
            }
          });
          let c = () => {
            let i4 = e3.message.getEnvelope(), a3 = e3.message.messageId(), s2 = [].concat(i4.to || []);
            s2.length > 3 && s2.push("...and " + s2.splice(2).length + " more"), e3.data.dsn && (i4.dsn = e3.data.dsn), this.logger.info({ tnx: "send", messageId: a3 }, "Sending message %s to <%s>", a3, s2.join(", ")), p2.send(i4, e3.message.createReadStream(), (e4, s3) => {
              if (n2 = true, p2.close(), e4)
                return this.logger.error({ err: e4, tnx: "send" }, "Send error for %s: %s", a3, e4.message), t3(e4);
              s3.envelope = { from: i4.from, to: i4.to }, s3.messageId = a3;
              try {
                return t3(null, s3);
              } catch (e5) {
                this.logger.error({ err: e5, tnx: "callback" }, "Callback error for %s: %s", a3, e5.message);
              }
            });
          };
          p2.connect(() => {
            if (n2)
              return;
            let i4 = this.getAuth(e3.data.auth);
            i4 && (p2.allowsAuth || r2.forceAuth) ? p2.login(i4, (e4) => {
              if (i4 && i4 !== this.auth && i4.oauth2 && i4.oauth2.removeAllListeners(), !n2)
                return e4 ? (n2 = true, p2.close(), t3(e4)) : void c();
            }) : c();
          });
        });
      }
      verify(e3) {
        let t3;
        return e3 || (t3 = new Promise((t4, i3) => {
          e3 = o.callbackPromise(t4, i3);
        })), this.getSocket(this.options, (t4, i3) => {
          if (t4)
            return e3(t4);
          let a2 = this.options;
          i3 && i3.connection && (this.logger.info({ tnx: "proxy", remoteAddress: i3.connection.remoteAddress, remotePort: i3.connection.remotePort, destHost: a2.host || "", destPort: a2.port || "", action: "connected" }, "Using proxied socket from %s:%s to %s:%s", i3.connection.remoteAddress, i3.connection.remotePort, a2.host || "", a2.port || ""), a2 = o.assign(false, a2), Object.keys(i3).forEach((e4) => {
            a2[e4] = i3[e4];
          }));
          let n2 = new s(a2), r2 = false;
          n2.once("error", (t5) => {
            if (!r2)
              return r2 = true, n2.close(), e3(t5);
          }), n2.once("end", () => {
            if (!r2)
              return r2 = true, e3(new Error("Connection closed"));
          });
          let p2 = () => {
            if (!r2)
              return r2 = true, n2.quit(), e3(null, true);
          };
          n2.connect(() => {
            if (r2)
              return;
            let t5 = this.getAuth({});
            if (t5 && (n2.allowsAuth || a2.forceAuth))
              n2.login(t5, (t6) => {
                if (!r2)
                  return t6 ? (r2 = true, n2.close(), e3(t6)) : void p2();
              });
            else {
              if (!t5 && n2.allowsAuth && a2.forceAuth) {
                let t6 = new Error("Authentication info was not provided");
                return t6.code = "NoAuth", r2 = true, n2.close(), e3(t6);
              }
              p2();
            }
          });
        }), t3;
      }
      close() {
        this.auth && this.auth.oauth2 && this.auth.oauth2.removeAllListeners(), this.emit("close");
      }
    };
  }, 5938: (e2, t2, i2) => {
    "use strict";
    const a = i2(2290), s = i2(6047);
    e2.exports = class {
      constructor(e3) {
        e3 = e3 || {}, this.options = e3 || {}, this.name = "StreamTransport", this.version = a.version, this.logger = s.getLogger(this.options, { component: this.options.component || "stream-transport" }), this.winbreak = ["win", "windows", "dos", "\r\n"].includes((e3.newline || "").toString().toLowerCase());
      }
      send(e3, t3) {
        e3.message.keepBcc = true;
        let i3 = e3.data.envelope || e3.message.getEnvelope(), a2 = e3.message.messageId(), s2 = [].concat(i3.to || []);
        s2.length > 3 && s2.push("...and " + s2.splice(2).length + " more"), this.logger.info({ tnx: "send", messageId: a2 }, "Sending message %s to <%s> using %s line breaks", a2, s2.join(", "), this.winbreak ? "<CR><LF>" : "<LF>"), setImmediate(() => {
          let i4;
          try {
            i4 = e3.message.createReadStream();
          } catch (e4) {
            return this.logger.error({ err: e4, tnx: "send", messageId: a2 }, "Creating send stream failed for %s. %s", a2, e4.message), t3(e4);
          }
          if (!this.options.buffer)
            return i4.once("error", (e4) => {
              this.logger.error({ err: e4, tnx: "send", messageId: a2 }, "Failed creating message for %s. %s", a2, e4.message);
            }), t3(null, { envelope: e3.data.envelope || e3.message.getEnvelope(), messageId: a2, message: i4 });
          let s3 = [], n = 0;
          i4.on("readable", () => {
            let e4;
            for (; null !== (e4 = i4.read()); )
              s3.push(e4), n += e4.length;
          }), i4.once("error", (e4) => (this.logger.error({ err: e4, tnx: "send", messageId: a2 }, "Failed creating message for %s. %s", a2, e4.message), t3(e4))), i4.on("end", () => t3(null, { envelope: e3.data.envelope || e3.message.getEnvelope(), messageId: a2, message: Buffer.concat(s3, n) }));
        });
      }
    };
  }, 9444: (e2, t2, i2) => {
    "use strict";
    const a = i2(3565), s = {};
    function n(e3) {
      return e3.replace(/[^a-zA-Z0-9.-]/g, "").toLowerCase();
    }
    function o(e3) {
      let t3 = ["domains", "aliases"], i3 = {};
      return Object.keys(e3).forEach((a2) => {
        t3.indexOf(a2) < 0 && (i3[a2] = e3[a2]);
      }), i3;
    }
    Object.keys(a).forEach((e3) => {
      let t3 = a[e3];
      s[n(e3)] = o(t3), [].concat(t3.aliases || []).forEach((e4) => {
        s[n(e4)] = o(t3);
      }), [].concat(t3.domains || []).forEach((e4) => {
        s[n(e4)] = o(t3);
      });
    }), e2.exports = function(e3) {
      return e3 = n(e3.split("@").pop()), s[e3] || false;
    };
  }, 9681: (e2, t2, i2) => {
    "use strict";
    const a = i2(2203).Stream, s = i2(1358), n = i2(6982), o = i2(6047);
    e2.exports = class extends a {
      constructor(e3, t3) {
        if (super(), this.options = e3 || {}, e3 && e3.serviceClient) {
          if (!e3.privateKey || !e3.user)
            return void setImmediate(() => this.emit("error", new Error('Options "privateKey" and "user" are required for service account!')));
          let t4 = Math.min(Math.max(Number(this.options.serviceRequestTimeout) || 0, 0), 3600);
          this.options.serviceRequestTimeout = t4 || 300;
        }
        if (this.logger = o.getLogger({ logger: t3 }, { component: this.options.component || "OAuth2" }), this.provisionCallback = "function" == typeof this.options.provisionCallback && this.options.provisionCallback, this.options.accessUrl = this.options.accessUrl || "https://accounts.google.com/o/oauth2/token", this.options.customHeaders = this.options.customHeaders || {}, this.options.customParams = this.options.customParams || {}, this.accessToken = this.options.accessToken || false, this.options.expires && Number(this.options.expires))
          this.expires = this.options.expires;
        else {
          let e4 = Math.max(Number(this.options.timeout) || 0, 0);
          this.expires = e4 && Date.now() + 1e3 * e4 || 0;
        }
      }
      getToken(e3, t3) {
        if (!e3 && this.accessToken && (!this.expires || this.expires > Date.now()))
          return t3(null, this.accessToken);
        let i3 = (...e4) => {
          e4[0] ? this.logger.error({ err: e4[0], tnx: "OAUTH2", user: this.options.user, action: "renew" }, "Failed generating new Access Token for %s", this.options.user) : this.logger.info({ tnx: "OAUTH2", user: this.options.user, action: "renew" }, "Generated new Access Token for %s", this.options.user), t3(...e4);
        };
        this.provisionCallback ? this.provisionCallback(this.options.user, !!e3, (e4, t4, a2) => {
          !e4 && t4 && (this.accessToken = t4, this.expires = a2 || 0), i3(e4, t4);
        }) : this.generateToken(i3);
      }
      updateToken(e3, t3) {
        this.accessToken = e3, t3 = Math.max(Number(t3) || 0, 0), this.expires = t3 && Date.now() + 1e3 * t3 || 0, this.emit("token", { user: this.options.user, accessToken: e3 || "", expires: this.expires });
      }
      generateToken(e3) {
        let t3, i3;
        if (this.options.serviceClient) {
          let a2, s2 = Math.floor(Date.now() / 1e3), n2 = { iss: this.options.serviceClient, scope: this.options.scope || "https://mail.google.com/", sub: this.options.user, aud: this.options.accessUrl, iat: s2, exp: s2 + this.options.serviceRequestTimeout };
          try {
            a2 = this.jwtSignRS256(n2);
          } catch (t4) {
            return e3(new Error("Can't generate token. Check your auth options"));
          }
          t3 = { grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: a2 }, i3 = { grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: n2 };
        } else {
          if (!this.options.refreshToken)
            return e3(new Error("Can't create new access token for user"));
          t3 = { client_id: this.options.clientId || "", client_secret: this.options.clientSecret || "", refresh_token: this.options.refreshToken, grant_type: "refresh_token" }, i3 = { client_id: this.options.clientId || "", client_secret: (this.options.clientSecret || "").substr(0, 6) + "...", refresh_token: (this.options.refreshToken || "").substr(0, 6) + "...", grant_type: "refresh_token" };
        }
        Object.keys(this.options.customParams).forEach((e4) => {
          t3[e4] = this.options.customParams[e4], i3[e4] = this.options.customParams[e4];
        }), this.logger.debug({ tnx: "OAUTH2", user: this.options.user, action: "generate" }, "Requesting token using: %s", JSON.stringify(i3)), this.postRequest(this.options.accessUrl, t3, this.options, (t4, i4) => {
          let a2;
          if (t4)
            return e3(t4);
          try {
            a2 = JSON.parse(i4.toString());
          } catch (t5) {
            return e3(t5);
          }
          if (!a2 || "object" != typeof a2)
            return this.logger.debug({ tnx: "OAUTH2", user: this.options.user, action: "post" }, "Response: %s", (i4 || "").toString()), e3(new Error("Invalid authentication response"));
          let s2 = {};
          if (Object.keys(a2).forEach((e4) => {
            s2[e4] = "access_token" !== e4 ? a2[e4] : (a2[e4] || "").toString().substr(0, 6) + "...";
          }), this.logger.debug({ tnx: "OAUTH2", user: this.options.user, action: "post" }, "Response: %s", JSON.stringify(s2)), a2.error) {
            let t5 = a2.error;
            return a2.error_description && (t5 += ": " + a2.error_description), a2.error_uri && (t5 += " (" + a2.error_uri + ")"), e3(new Error(t5));
          }
          return a2.access_token ? (this.updateToken(a2.access_token, a2.expires_in), e3(null, this.accessToken)) : e3(new Error("No access token"));
        });
      }
      buildXOAuth2Token(e3) {
        let t3 = ["user=" + (this.options.user || ""), "auth=Bearer " + (e3 || this.accessToken), "", ""];
        return Buffer.from(t3.join(""), "utf-8").toString("base64");
      }
      postRequest(e3, t3, i3, a2) {
        let n2 = false, o2 = [], r = 0, p = s(e3, { method: "post", headers: i3.customHeaders, body: t3, allowErrorResponse: true });
        p.on("readable", () => {
          let e4;
          for (; null !== (e4 = p.read()); )
            o2.push(e4), r += e4.length;
        }), p.once("error", (e4) => {
          if (!n2)
            return n2 = true, a2(e4);
        }), p.once("end", () => {
          if (!n2)
            return n2 = true, a2(null, Buffer.concat(o2, r));
        });
      }
      toBase64URL(e3) {
        return "string" == typeof e3 && (e3 = Buffer.from(e3)), e3.toString("base64").replace(/[=]+/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      jwtSignRS256(e3) {
        e3 = ['{"alg":"RS256","typ":"JWT"}', JSON.stringify(e3)].map((e4) => this.toBase64URL(e4)).join(".");
        let t3 = n.createSign("RSA-SHA256").update(e3).sign(this.options.privateKey);
        return e3 + "." + this.toBase64URL(t3);
      }
    };
  }, 2192: (e2) => {
    "use strict";
    var t2 = Object.getOwnPropertySymbols, i2 = Object.prototype.hasOwnProperty, a = Object.prototype.propertyIsEnumerable;
    e2.exports = function() {
      try {
        if (!Object.assign)
          return false;
        var e3 = new String("abc");
        if (e3[5] = "de", "5" === Object.getOwnPropertyNames(e3)[0])
          return false;
        for (var t3 = {}, i3 = 0; i3 < 10; i3++)
          t3["_" + String.fromCharCode(i3)] = i3;
        if ("0123456789" !== Object.getOwnPropertyNames(t3).map(function(e4) {
          return t3[e4];
        }).join(""))
          return false;
        var a2 = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(e4) {
          a2[e4] = e4;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, a2)).join("");
      } catch (e4) {
        return false;
      }
    }() ? Object.assign : function(e3, s) {
      for (var n, o, r = function(e4) {
        if (null == e4)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e4);
      }(e3), p = 1; p < arguments.length; p++) {
        for (var c in n = Object(arguments[p]))
          i2.call(n, c) && (r[c] = n[c]);
        if (t2) {
          o = t2(n);
          for (var l = 0; l < o.length; l++)
            a.call(n, o[l]) && (r[o[l]] = n[o[l]]);
        }
      }
      return r;
    };
  }, 7177: (e2) => {
    "use strict";
    e2.exports = function(e3, t3) {
      if (!e3 || !e3.getHeader || !e3.setHeader)
        throw new TypeError("res argument is required");
      var a2 = e3.getHeader("Vary") || "", s = Array.isArray(a2) ? a2.join(", ") : String(a2);
      (a2 = i2(s, t3)) && e3.setHeader("Vary", a2);
    }, e2.exports.append = i2;
    var t2 = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
    function i2(e3, i3) {
      if ("string" != typeof e3)
        throw new TypeError("header argument is required");
      if (!i3)
        throw new TypeError("field argument is required");
      for (var s = Array.isArray(i3) ? i3 : a(String(i3)), n = 0; n < s.length; n++)
        if (!t2.test(s[n]))
          throw new TypeError("field argument contains an invalid header name");
      if ("*" === e3)
        return e3;
      var o = e3, r = a(e3.toLowerCase());
      if (-1 !== s.indexOf("*") || -1 !== r.indexOf("*"))
        return "*";
      for (var p = 0; p < s.length; p++) {
        var c = s[p].toLowerCase();
        -1 === r.indexOf(c) && (r.push(c), o = o ? o + ", " + s[p] : s[p]);
      }
      return o;
    }
    function a(e3) {
      for (var t3 = 0, i3 = [], a2 = 0, s = 0, n = e3.length; s < n; s++)
        switch (e3.charCodeAt(s)) {
          case 32:
            a2 === t3 && (a2 = t3 = s + 1);
            break;
          case 44:
            i3.push(e3.substring(a2, t3)), a2 = t3 = s + 1;
            break;
          default:
            t3 = s + 1;
        }
      return i3.push(e3.substring(a2, t3)), i3;
    }
  }, 4532: (e2, t2, i2) => {
    const a = i2(9725);
    i2(9764), i2(2461), i2(4786).config(), e2.exports = { handler: async (e3, t3) => {
      const { name: i3, email: s, phone: n, subject: o, message: r } = JSON.parse(e3.body), p = a.createTransport({ service: "gmail", auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } }), c = { from: s, to: process.env.EMAIL_RECEIVER, subject: "Contact Form Submission: ".concat(o), text: "Name: ".concat(i3, "\nEmail: ").concat(s, "\nPhone: ").concat(n, "\nMessage: ").concat(r) };
      try {
        return await p.sendMail(c), { statusCode: 200, body: JSON.stringify({ message: "Email sent successfully" }) };
      } catch (e4) {
        return console.error(e4), { statusCode: 500, body: JSON.stringify({ error: "Error sending email" }) };
      }
    } };
  }, 5317: (e2) => {
    "use strict";
    e2.exports = require("child_process");
  }, 6982: (e2) => {
    "use strict";
    e2.exports = require("crypto");
  }, 2250: (e2) => {
    "use strict";
    e2.exports = require("dns");
  }, 4434: (e2) => {
    "use strict";
    e2.exports = require("events");
  }, 9896: (e2) => {
    "use strict";
    e2.exports = require("fs");
  }, 8611: (e2) => {
    "use strict";
    e2.exports = require("http");
  }, 5692: (e2) => {
    "use strict";
    e2.exports = require("https");
  }, 9278: (e2) => {
    "use strict";
    e2.exports = require("net");
  }, 857: (e2) => {
    "use strict";
    e2.exports = require("os");
  }, 6928: (e2) => {
    "use strict";
    e2.exports = require("path");
  }, 2203: (e2) => {
    "use strict";
    e2.exports = require("stream");
  }, 4756: (e2) => {
    "use strict";
    e2.exports = require("tls");
  }, 7016: (e2) => {
    "use strict";
    e2.exports = require("url");
  }, 9023: (e2) => {
    "use strict";
    e2.exports = require("util");
  }, 3106: (e2) => {
    "use strict";
    e2.exports = require("zlib");
  }, 2716: (e2) => {
    "use strict";
    e2.exports = JSON.parse('{"name":"dotenv","version":"16.4.5","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"types":"./lib/main.d.ts","require":"./lib/main.js","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"funding":"https://dotenvx.com","keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3","decache":"^4.6.1","sinon":"^14.0.1","standard":"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0","tap":"^16.3.0","tar":"^6.1.11","typescript":"^4.8.4"},"engines":{"node":">=12"},"browser":{"fs":false}}');
  }, 3565: (e2) => {
    "use strict";
    e2.exports = JSON.parse('{"126":{"host":"smtp.126.com","port":465,"secure":true},"163":{"host":"smtp.163.com","port":465,"secure":true},"1und1":{"host":"smtp.1und1.de","port":465,"secure":true,"authMethod":"LOGIN"},"Aliyun":{"domains":["aliyun.com"],"host":"smtp.aliyun.com","port":465,"secure":true},"AOL":{"domains":["aol.com"],"host":"smtp.aol.com","port":587},"Bluewin":{"host":"smtpauths.bluewin.ch","domains":["bluewin.ch"],"port":465},"DebugMail":{"host":"debugmail.io","port":25},"DynectEmail":{"aliases":["Dynect"],"host":"smtp.dynect.net","port":25},"Ethereal":{"aliases":["ethereal.email"],"host":"smtp.ethereal.email","port":587},"FastMail":{"domains":["fastmail.fm"],"host":"smtp.fastmail.com","port":465,"secure":true},"Forward Email":{"aliases":["FE","ForwardEmail"],"domains":["forwardemail.net"],"host":"smtp.forwardemail.net","port":465,"secure":true},"Feishu Mail":{"aliases":["Feishu","FeishuMail"],"domains":["www.feishu.cn"],"host":"smtp.feishu.cn","port":465,"secure":true},"GandiMail":{"aliases":["Gandi","Gandi Mail"],"host":"mail.gandi.net","port":587},"Gmail":{"aliases":["Google Mail"],"domains":["gmail.com","googlemail.com"],"host":"smtp.gmail.com","port":465,"secure":true},"Godaddy":{"host":"smtpout.secureserver.net","port":25},"GodaddyAsia":{"host":"smtp.asia.secureserver.net","port":25},"GodaddyEurope":{"host":"smtp.europe.secureserver.net","port":25},"hot.ee":{"host":"mail.hot.ee"},"Hotmail":{"aliases":["Outlook","Outlook.com","Hotmail.com"],"domains":["hotmail.com","outlook.com"],"host":"smtp-mail.outlook.com","port":587},"iCloud":{"aliases":["Me","Mac"],"domains":["me.com","mac.com"],"host":"smtp.mail.me.com","port":587},"Infomaniak":{"host":"mail.infomaniak.com","domains":["ik.me","ikmail.com","etik.com"],"port":587},"Loopia":{"host":"mailcluster.loopia.se","port":465},"mail.ee":{"host":"smtp.mail.ee"},"Mail.ru":{"host":"smtp.mail.ru","port":465,"secure":true},"Mailcatch.app":{"host":"sandbox-smtp.mailcatch.app","port":2525},"Maildev":{"port":1025,"ignoreTLS":true},"Mailgun":{"host":"smtp.mailgun.org","port":465,"secure":true},"Mailjet":{"host":"in.mailjet.com","port":587},"Mailosaur":{"host":"mailosaur.io","port":25},"Mailtrap":{"host":"live.smtp.mailtrap.io","port":587},"Mandrill":{"host":"smtp.mandrillapp.com","port":587},"Naver":{"host":"smtp.naver.com","port":587},"One":{"host":"send.one.com","port":465,"secure":true},"OpenMailBox":{"aliases":["OMB","openmailbox.org"],"host":"smtp.openmailbox.org","port":465,"secure":true},"Outlook365":{"host":"smtp.office365.com","port":587,"secure":false},"OhMySMTP":{"host":"smtp.ohmysmtp.com","port":587,"secure":false},"Postmark":{"aliases":["PostmarkApp"],"host":"smtp.postmarkapp.com","port":2525},"qiye.aliyun":{"host":"smtp.mxhichina.com","port":"465","secure":true},"QQ":{"domains":["qq.com"],"host":"smtp.qq.com","port":465,"secure":true},"QQex":{"aliases":["QQ Enterprise"],"domains":["exmail.qq.com"],"host":"smtp.exmail.qq.com","port":465,"secure":true},"SendCloud":{"host":"smtp.sendcloud.net","port":2525},"SendGrid":{"host":"smtp.sendgrid.net","port":587},"SendinBlue":{"aliases":["Brevo"],"host":"smtp-relay.brevo.com","port":587},"SendPulse":{"host":"smtp-pulse.com","port":465,"secure":true},"SES":{"host":"email-smtp.us-east-1.amazonaws.com","port":465,"secure":true},"SES-US-EAST-1":{"host":"email-smtp.us-east-1.amazonaws.com","port":465,"secure":true},"SES-US-WEST-2":{"host":"email-smtp.us-west-2.amazonaws.com","port":465,"secure":true},"SES-EU-WEST-1":{"host":"email-smtp.eu-west-1.amazonaws.com","port":465,"secure":true},"SES-AP-SOUTH-1":{"host":"email-smtp.ap-south-1.amazonaws.com","port":465,"secure":true},"SES-AP-NORTHEAST-1":{"host":"email-smtp.ap-northeast-1.amazonaws.com","port":465,"secure":true},"SES-AP-NORTHEAST-2":{"host":"email-smtp.ap-northeast-2.amazonaws.com","port":465,"secure":true},"SES-AP-NORTHEAST-3":{"host":"email-smtp.ap-northeast-3.amazonaws.com","port":465,"secure":true},"SES-AP-SOUTHEAST-1":{"host":"email-smtp.ap-southeast-1.amazonaws.com","port":465,"secure":true},"SES-AP-SOUTHEAST-2":{"host":"email-smtp.ap-southeast-2.amazonaws.com","port":465,"secure":true},"Sparkpost":{"aliases":["SparkPost","SparkPost Mail"],"domains":["sparkpost.com"],"host":"smtp.sparkpostmail.com","port":587,"secure":false},"Tipimail":{"host":"smtp.tipimail.com","port":587},"Yahoo":{"domains":["yahoo.com"],"host":"smtp.mail.yahoo.com","port":465,"secure":true},"Yandex":{"domains":["yandex.ru"],"host":"smtp.yandex.ru","port":465,"secure":true},"Zoho":{"host":"smtp.zoho.com","port":465,"secure":true,"authMethod":"LOGIN"}}');
  }, 2290: (e2) => {
    "use strict";
    e2.exports = JSON.parse('{"name":"nodemailer","version":"6.9.14","description":"Easy as cake e-mail sending from your Node.js applications","main":"lib/nodemailer.js","scripts":{"test":"node --test --test-concurrency=1 test/**/*.test.js test/**/*-test.js","test:coverage":"c8 node --test --test-concurrency=1 test/**/*.test.js test/**/*-test.js","lint":"eslint .","update":"rm -rf node_modules/ package-lock.json && ncu -u && npm install"},"repository":{"type":"git","url":"https://github.com/nodemailer/nodemailer.git"},"keywords":["Nodemailer"],"author":"Andris Reinman","license":"MIT-0","bugs":{"url":"https://github.com/nodemailer/nodemailer/issues"},"homepage":"https://nodemailer.com/","devDependencies":{"@aws-sdk/client-ses":"3.600.0","bunyan":"1.8.15","c8":"10.1.2","eslint":"8.57.0","eslint-config-nodemailer":"1.2.0","eslint-config-prettier":"9.1.0","libbase64":"1.3.0","libmime":"5.3.5","libqp":"2.1.0","nodemailer-ntlm-auth":"1.0.4","proxy":"1.0.2","proxy-test-server":"1.0.0","smtp-server":"3.13.4"},"engines":{"node":">=6.0.0"}}');
  } }, t = {}, i = function i2(a) {
    var s = t[a];
    if (void 0 !== s)
      return s.exports;
    var n = t[a] = { exports: {} };
    return e[a].call(n.exports, n, n.exports, i2), n.exports;
  }(4532);
  module.exports = i;
})();
/*! For license information please see send-email.js.LICENSE.txt */
//# sourceMappingURL=send-email.js.map
