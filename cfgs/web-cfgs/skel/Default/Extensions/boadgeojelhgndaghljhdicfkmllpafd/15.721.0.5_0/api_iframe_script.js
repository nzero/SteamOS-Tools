var chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var a = a || {};
a.global = this;
a.J = function(b) {
  return void 0 !== b;
};
a.T = function(b, c, d) {
  b = b.split(".");
  d = d || a.global;
  b[0] in d || !d.execScript || d.execScript("var " + b[0]);
  for (var e;b.length && (e = b.shift());) {
    !b.length && a.J(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
a.Ud = function(b, c) {
  a.T(b, c);
};
a.w = !0;
a.Dd = "en";
a.gc = !0;
a.$b = !1;
a.Ua = !a.w;
a.da = !1;
a.qe = function(b) {
  a.ra(b);
};
a.ra = function(b, c) {
  a.T(b, c);
};
a.tc = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
a.module = function(b) {
  if (!a.isString(b) || !b || -1 == b.search(a.tc)) {
    throw Error("Invalid module identifier");
  }
  if (!a.Aa()) {
    throw Error("Module " + b + " has been loaded incorrectly.");
  }
  if (a.g.Y) {
    throw Error("goog.module may only be called once per module.");
  }
  a.g.Y = b;
};
a.module.get = function(b) {
  return a.module.Gc(b);
};
a.module.Gc = function() {
};
a.g = null;
a.Aa = function() {
  return null != a.g;
};
a.module.S = function() {
  if (!a.Aa()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  a.g.S = !0;
};
a.module.ta = function() {
  a.g.ta = !0;
};
a.ue = function(b) {
  if (a.Ua) {
    throw b = b || "", Error("Importing test-only code into non-debug environment" + (b ? ": " + b : "."));
  }
};
a.Vd = function() {
};
a.ae = function(b, c) {
  for (var d = b.split("."), e = c || a.global, g;g = d.shift();) {
    if (a.Pc(e[g])) {
      e = e[g];
    } else {
      return null;
    }
  }
  return e;
};
a.be = function(b, c) {
  var d = c || a.global, e;
  for (e in b) {
    d[e] = b[e];
  }
};
a.Sd = function(b, c, d, e) {
  if (a.ba) {
    var g;
    b = b.replace(/\\/g, "/");
    for (var h = a.h, k = 0;g = c[k];k++) {
      h.B[g] = b, h.Z[b] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      b in h.requires || (h.requires[b] = {}), h.requires[b][c] = !0;
    }
  }
};
a.we = !1;
a.td = !0;
a.je = function(b) {
  a.global.console && a.global.console.error(b);
};
a.require = function() {
};
a.s = "";
a.ne = function() {
};
a.Rd = function() {
  throw Error("unimplemented abstract method");
};
a.Td = function(b) {
  b.Yd = function() {
    if (b.xa) {
      return b.xa;
    }
    a.w && (a.ya[a.ya.length] = b);
    return b.xa = new b;
  };
};
a.ya = [];
a.jb = !0;
a.Vb = a.w;
a.Uc = {};
a.ba = !1;
a.ba && (a.Nc = {}, a.h = {Z:{}, B:{}, requires:{}, Ja:{}, C:{}, F:{}}, a.wa = function() {
  var b = a.global.document;
  return "undefined" != typeof b && "write" in b;
}, a.Fc = function() {
  if (a.global.Oa) {
    a.s = a.global.Oa;
  } else {
    if (a.wa()) {
      for (var b = a.global.document.getElementsByTagName("SCRIPT"), c = b.length - 1;0 <= c;--c) {
        var d = b[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          a.s = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, a.X = function(b, c) {
  (a.global.qd || a.ld)(b, c) && (a.h.C[b] = !0);
}, a.gb = !a.global.atob && a.global.document && a.global.document.all, a.Mc = function(b) {
  a.X("", 'goog.retrieveAndExecModule_("' + b + '");') && (a.h.C[b] = !0);
}, a.$ = [], a.xe = function(b, c) {
  return a.jb && a.J(a.global.JSON) ? "goog.loadModule(" + a.global.JSON.stringify(c + "\n//# sourceURL=" + b + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + b + "\n";
}, a.Tc = function() {
  var b = a.$.length;
  if (0 < b) {
    var c = a.$;
    a.$ = [];
    for (var d = 0;d < b;d++) {
      a.Ca(c[d]);
    }
  }
}, a.ke = function(b) {
  a.za(b) && a.vc(b) && a.Ca(a.s + a.W(b));
}, a.za = function(b) {
  return (b = a.W(b)) && a.h.Z[b] ? a.s + b in a.h.F : !1;
}, a.vc = function(b) {
  if ((b = a.W(b)) && b in a.h.requires) {
    for (var c in a.h.requires[b]) {
      if (!a.Qc(c) && !a.za(c)) {
        return !1;
      }
    }
  }
  return !0;
}, a.Ca = function(b) {
  if (b in a.h.F) {
    var c = a.h.F[b];
    delete a.h.F[b];
    a.Kc(c);
  }
}, a.ie = function(b) {
  var c = a.g;
  try {
    a.g = {Y:void 0, S:!1};
    var d;
    if (a.isFunction(b)) {
      d = b.call(a.global, {});
    } else {
      if (a.isString(b)) {
        d = a.Sc.call(a.global, b);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = a.g.Y;
    if (!a.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    a.g.ta ? a.ra(e, d) : a.Vb && Object.seal && Object.seal(d);
    a.Uc[e] = d;
    if (a.g.S) {
      for (var g in d) {
        if (0 === g.indexOf("test", 0) || "tearDown" == g || "setUp" == g || "setUpPage" == g || "tearDownPage" == g) {
          a.global[g] = d[g];
        }
      }
    }
  } finally {
    a.g = c;
  }
}, a.Sc = function(b) {
  eval(b);
  return {};
}, a.kd = function(b) {
  a.global.document.write('<script type="text/javascript" src="' + b + '">\x3c/script>');
}, a.wc = function(b) {
  var c = a.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = b;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, a.ld = function(b, c) {
  if (a.wa()) {
    var d = a.global.document;
    if (!a.da && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(b)) {
        return !1;
      }
      throw Error('Cannot write "' + b + '" after document load');
    }
    var e = a.gb;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++a.Ba + ")' ", d.write('<script type="text/javascript" src="' + b + '"' + e + ">\x3c/script>")) : a.da ? a.wc(b) : a.kd(b) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, a.Ba = 0, a.oe = function(b, c) {
  "complete" == b.readyState && a.Ba == c && a.Tc();
  return !0;
}, a.ye = function() {
  function b(g) {
    if (!(g in e.C)) {
      if (!(g in e.Ja) && (e.Ja[g] = !0, g in e.requires)) {
        for (var h in e.requires[g]) {
          if (!a.Qc(h)) {
            if (h in e.B) {
              b(e.B[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      g in d || (d[g] = !0, c.push(g));
    }
  }
  var c = [], d = {}, e = a.h, g;
  for (g in a.Nc) {
    e.C[g] || b(g);
  }
  for (var h = 0;h < c.length;h++) {
    g = c[h], a.h.C[g] = !0;
  }
  var k = a.g;
  a.g = null;
  for (h = 0;h < c.length;h++) {
    if (g = c[h]) {
      e.Z[g] ? a.Mc(a.s + g) : a.X(a.s + g);
    } else {
      throw a.g = k, Error("Undefined script input");
    }
  }
  a.g = k;
}, a.W = function(b) {
  return b in a.h.B ? a.h.B[b] : null;
}, a.Fc(), a.global.rd || a.X(a.s + "deps.js"));
a.me = function(b) {
  b = b.split("/");
  for (var c = 0;c < b.length;) {
    "." == b[c] ? b.splice(c, 1) : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1] ? b.splice(--c, 2) : c++;
  }
  return b.join("/");
};
a.he = function(b) {
  if (a.global.Pa) {
    return a.global.Pa(b);
  }
  var c = new a.global.XMLHttpRequest;
  c.open("get", b, !1);
  c.send();
  return c.responseText;
};
a.se = function() {
};
a.L = function(b) {
  var c = typeof b;
  if ("object" == c) {
    if (b) {
      if (b instanceof Array) {
        return "array";
      }
      if (b instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(b);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof b.call) {
      return "object";
    }
  }
  return c;
};
a.ge = function(b) {
  return null === b;
};
a.Pc = function(b) {
  return null != b;
};
a.isArray = function(b) {
  return "array" == a.L(b);
};
a.de = function(b) {
  var c = a.L(b);
  return "array" == c || "object" == c && "number" == typeof b.length;
};
a.fe = function(b) {
  return a.isObject(b) && "function" == typeof b.getFullYear;
};
a.isString = function(b) {
  return "string" == typeof b;
};
a.ee = function(b) {
  return "boolean" == typeof b;
};
a.isNumber = function(b) {
  return "number" == typeof b;
};
a.isFunction = function(b) {
  return "function" == a.L(b);
};
a.isObject = function(b) {
  var c = typeof b;
  return "object" == c && null != b || "function" == c;
};
a.Ic = function(b) {
  return b[a.o] || (b[a.o] = ++a.jd);
};
a.ce = function(b) {
  return !!b[a.o];
};
a.ad = function(b) {
  "removeAttribute" in b && b.removeAttribute(a.o);
  try {
    delete b[a.o];
  } catch (c) {
  }
};
a.o = "closure_uid_" + (1E9 * Math.random() >>> 0);
a.jd = 0;
a.Xd = a.Ic;
a.re = a.ad;
a.Ac = function(b) {
  var c = a.L(b);
  if ("object" == c || "array" == c) {
    if (b.clone) {
      return b.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in b) {
      c[d] = a.Ac(b[d]);
    }
    return c;
  }
  return b;
};
a.zc = function(b, c, d) {
  return b.call.apply(b.bind, arguments);
};
a.yc = function(b, c, d) {
  if (!b) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return b.apply(c, d);
    };
  }
  return function() {
    return b.apply(c, arguments);
  };
};
a.bind = function(b, c, d) {
  a.bind = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? a.zc : a.yc;
  return a.bind.apply(null, arguments);
};
a.pe = function(b, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return b.apply(this, c);
  };
};
a.le = function(b, c) {
  for (var d in c) {
    b[d] = c[d];
  }
};
a.now = a.gc && Date.now || function() {
  return +new Date;
};
a.Kc = function(b) {
  if (a.global.execScript) {
    a.global.execScript(b, "JavaScript");
  } else {
    if (a.global.eval) {
      if (null == a.G) {
        if (a.global.eval("var _evalTest_ = 1;"), "undefined" != typeof a.global._evalTest_) {
          try {
            delete a.global._evalTest_;
          } catch (c) {
          }
          a.G = !0;
        } else {
          a.G = !1;
        }
      }
      if (a.G) {
        a.global.eval(b);
      } else {
        var d = a.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(b));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
a.G = null;
a.Wd = function(b, c) {
  var d = function(b) {
    return a.sa[b] || b;
  }, e = function(b) {
    b = b.split("-");
    for (var c = [], e = 0;e < b.length;e++) {
      c.push(d(b[e]));
    }
    return c.join("-");
  }, e = a.sa ? "BY_WHOLE" == a.Dc ? d : e : function(b) {
    return b;
  };
  return c ? b + "-" + e(c) : e(b);
};
a.te = function(b, c) {
  a.sa = b;
  a.Dc = c;
};
a.Zd = function(b, c) {
  c && (b = b.replace(/\{\$([^}]+)}/g, function(b, e) {
    return e in c ? c[e] : b;
  }));
  return b;
};
a.$d = function(b) {
  return b;
};
a.a = function(b, c, d) {
  a.T(b, c, d);
};
a.f = function(b, c, d) {
  b[c] = d;
};
a.Oc = function(b, c) {
  function d() {
  }
  d.prototype = c.prototype;
  b.K = c.prototype;
  b.prototype = new d;
  b.prototype.constructor = b;
  b.xc = function(b, d, h) {
    for (var k = Array(arguments.length - 2), l = 2;l < arguments.length;l++) {
      k[l - 2] = arguments[l];
    }
    return c.prototype[d].apply(b, k);
  };
};
a.xc = function(b, c, d) {
  var e = arguments.callee.caller;
  if (a.$b || a.w && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.K) {
    for (var g = Array(arguments.length - 1), h = 1;h < arguments.length;h++) {
      g[h - 1] = arguments[h];
    }
    return e.K.constructor.apply(b, g);
  }
  g = Array(arguments.length - 2);
  for (h = 2;h < arguments.length;h++) {
    g[h - 2] = arguments[h];
  }
  for (var h = !1, k = b.constructor;k;k = k.K && k.K.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(b, g);
      }
    }
  }
  if (b[c] === e) {
    return b.constructor.prototype[c].apply(b, g);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
a.scope = function(b) {
  b.call(a.global);
};
a.Gd = !1;
a.l = function(b, c) {
  var d = c.constructor, e = c.gd;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = a.l.Cc(d, b);
  b && a.Oc(d, b);
  delete c.constructor;
  delete c.gd;
  a.l.qa(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : a.l.qa(d, e));
  return d;
};
a.l.Ub = a.w;
a.l.Cc = function(b, c) {
  if (a.l.Ub && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[a.qc]) {
      return b;
    }
    var d = function() {
      var c = b.apply(this, arguments) || this;
      c[a.o] = c[a.o];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return b;
};
a.l.ja = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
a.l.qa = function(b, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
  }
  for (var e = 0;e < a.l.ja.length;e++) {
    d = a.l.ja[e], Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
  }
};
a.ve = function() {
};
a.qc = "goog_defineClass_legacy_unsealable";
chrome.cast.aa = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
a.a("chrome.cast.AutoJoinPolicy", chrome.cast.aa);
chrome.cast.ca = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
a.a("chrome.cast.DefaultActionPolicy", chrome.cast.ca);
chrome.cast.M = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
a.a("chrome.cast.Capability", chrome.cast.M);
chrome.cast.ea = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
a.a("chrome.cast.ErrorCode", chrome.cast.ea);
chrome.cast.Rb = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
a.a("chrome.cast.ReceiverAvailability", chrome.cast.Rb);
chrome.cast.cc = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
a.a("chrome.cast.SenderPlatform", chrome.cast.cc);
chrome.cast.la = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
a.a("chrome.cast.ReceiverType", chrome.cast.la);
chrome.cast.Wa = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
a.a("chrome.cast.DialAppState", chrome.cast.Wa);
chrome.cast.Qb = {CAST:"cast", STOP:"stop"};
a.a("chrome.cast.ReceiverAction", chrome.cast.Qb);
chrome.cast.na = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
a.a("chrome.cast.SessionStatus", chrome.cast.na);
chrome.cast.VERSION = [1, 2];
a.a("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(b, c, d) {
  this.code = b;
  this.description = c || null;
  this.details = d || null;
};
a.a("chrome.cast.Error", chrome.cast.Error);
chrome.cast.bc = function(b) {
  this.platform = b;
  this.packageId = this.url = null;
};
a.a("chrome.cast.SenderApplication", chrome.cast.bc);
chrome.cast.Image = function(b) {
  this.url = b;
  this.width = this.height = null;
};
a.a("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function(b, c) {
  this.level = a.J(b) ? b : null;
  this.muted = a.J(c) ? c : null;
};
a.a("chrome.cast.Volume", chrome.cast.Volume);
var f = {b:{yd:"LAUNCH", ma:"STOP", Zb:"SET_VOLUME", bb:"GET_STATUS", Jd:"RECEIVER_STATUS", Pd:"CONNECT", Qd:"CLOSE", ud:"GET_APP_AVAILABILITY", mb:"LOAD", nb:"PAUSE", tb:"SEEK", ob:"PLAY", ia:"STOP_MEDIA", ga:"MEDIA_GET_STATUS", ha:"MEDIA_SET_VOLUME", lb:"EDIT_TRACKS_INFO", qb:"QUEUE_LOAD", pb:"QUEUE_INSERT", O:"QUEUE_UPDATE", rb:"QUEUE_REMOVE", sb:"QUEUE_REORDER", vd:"INVALID_PLAYER_STATE", Cd:"LOAD_FAILED", Bd:"LOAD_CANCELLED", wd:"INVALID_REQUEST", Fd:"MEDIA_STATUS", zd:"LAUNCH_ERROR", PING:"PING", 
Hd:"PONG"}, P:{}};
f.P[f.b.ia] = f.b.ma;
f.P[f.b.ha] = f.b.Zb;
f.P[f.b.ga] = f.b.bb;
f.md = function(b, c, d) {
  this.sessionId = b;
  this.namespaceName = c;
  this.message = d;
};
f.Od = function(b) {
  this.type = f.b.ma;
  this.requestId = null;
  this.sessionId = b || null;
};
chrome.cast.media.wb = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
a.a("chrome.cast.media.MediaCommand", chrome.cast.media.wb);
chrome.cast.media.j = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
a.a("chrome.cast.media.MetadataType", chrome.cast.media.j);
chrome.cast.media.ka = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
a.a("chrome.cast.media.PlayerState", chrome.cast.media.ka);
chrome.cast.media.R = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"ALL_AND_SHUFFLE"};
a.a("chrome.cast.media.RepeatMode", chrome.cast.media.R);
chrome.cast.media.Tb = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
a.a("chrome.cast.media.ResumeState", chrome.cast.media.Tb);
chrome.cast.media.oa = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
a.a("chrome.cast.media.StreamType", chrome.cast.media.oa);
chrome.cast.media.hb = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
a.a("chrome.cast.media.IdleReason", chrome.cast.media.hb);
chrome.cast.media.oc = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
a.a("chrome.cast.media.TrackType", chrome.cast.media.oc);
chrome.cast.media.lc = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
a.a("chrome.cast.media.TextTrackType", chrome.cast.media.lc);
chrome.cast.media.hc = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
a.a("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.hc);
chrome.cast.media.mc = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
a.a("chrome.cast.media.TextTrackWindowType", chrome.cast.media.mc);
chrome.cast.media.ic = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
a.a("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.ic);
chrome.cast.media.jc = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
a.a("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.jc);
chrome.cast.media.eb = function() {
  this.type = f.b.ga;
  this.customData = null;
};
a.a("chrome.cast.media.GetStatusRequest", chrome.cast.media.eb);
chrome.cast.media.Bb = function() {
  this.type = f.b.nb;
  this.customData = null;
};
a.a("chrome.cast.media.PauseRequest", chrome.cast.media.Bb);
chrome.cast.media.Db = function() {
  this.type = f.b.ob;
  this.customData = null;
};
a.a("chrome.cast.media.PlayRequest", chrome.cast.media.Db);
chrome.cast.media.ac = function() {
  this.type = f.b.tb;
  this.customData = this.resumeState = this.currentTime = null;
};
a.a("chrome.cast.media.SeekRequest", chrome.cast.media.ac);
chrome.cast.media.ec = function() {
  this.type = f.b.ia;
  this.customData = null;
};
a.a("chrome.cast.media.StopRequest", chrome.cast.media.ec);
chrome.cast.media.uc = function(b) {
  this.type = f.b.ha;
  this.volume = b;
  this.customData = null;
};
a.a("chrome.cast.media.VolumeRequest", chrome.cast.media.uc);
chrome.cast.media.kb = function(b) {
  this.type = f.b.mb;
  this.sessionId = this.requestId = null;
  this.media = b;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
a.a("chrome.cast.media.LoadRequest", chrome.cast.media.kb);
chrome.cast.media.ab = function(b, c) {
  this.type = f.b.lb;
  this.requestId = null;
  this.activeTrackIds = b || null;
  this.textTrackStyle = c || null;
};
a.a("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.ab);
chrome.cast.media.Hb = function(b) {
  this.type = f.b.qb;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.R.OFF;
  this.customData = null;
};
a.a("chrome.cast.media.QueueLoadRequest", chrome.cast.media.Hb);
chrome.cast.media.Eb = function(b) {
  this.type = f.b.pb;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.customData = this.insertBefore = null;
};
a.a("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.Eb);
chrome.cast.media.Lb = function(b) {
  this.type = f.b.O;
  this.sessionId = this.requestId = null;
  this.items = b;
  this.customData = null;
};
a.a("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.Lb);
chrome.cast.media.Gb = function() {
  this.type = f.b.O;
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
a.a("chrome.cast.media.QueueJumpRequest", chrome.cast.media.Gb);
chrome.cast.media.Kb = function() {
  this.type = f.b.O;
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
a.a("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.Kb);
chrome.cast.media.Ib = function(b) {
  this.type = f.b.rb;
  this.sessionId = this.requestId = null;
  this.itemIds = b;
  this.customData = null;
};
a.a("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.Ib);
chrome.cast.media.Jb = function(b) {
  this.type = f.b.sb;
  this.sessionId = this.requestId = null;
  this.itemIds = b;
  this.customData = this.insertBefore = null;
};
a.a("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.Jb);
chrome.cast.media.cb = function() {
  this.metadataType = this.type = chrome.cast.media.j.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
a.a("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.cb);
chrome.cast.media.yb = function() {
  this.metadataType = this.type = chrome.cast.media.j.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
a.a("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.yb);
chrome.cast.media.pc = function() {
  this.metadataType = this.type = chrome.cast.media.j.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
a.a("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.pc);
chrome.cast.media.zb = function() {
  this.metadataType = this.type = chrome.cast.media.j.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
a.a("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.zb);
chrome.cast.media.Cb = function() {
  this.metadataType = this.type = chrome.cast.media.j.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
a.a("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Cb);
chrome.cast.media.xb = function(b, c) {
  this.contentId = b;
  this.streamType = chrome.cast.media.oa.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
a.a("chrome.cast.media.MediaInfo", chrome.cast.media.xb);
chrome.cast.media.Fb = function(b) {
  this.itemId = null;
  this.media = b;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
a.a("chrome.cast.media.QueueItem", chrome.cast.media.Fb);
chrome.cast.media.vb = function(b, c) {
  this.sessionId = b;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.ka.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.R.OFF;
};
a.a("chrome.cast.media.Media", chrome.cast.media.vb);
chrome.cast.media.Ta = "CC1AD845";
a.a("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Ta);
chrome.cast.media.timeout = {};
a.a("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
a.f(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Hc = 0;
a.f(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Hc);
chrome.cast.media.timeout.play = 0;
a.f(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
a.f(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
a.f(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
a.f(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.fd = 0;
a.f(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.fd);
chrome.cast.media.timeout.Ec = 0;
a.f(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Ec);
chrome.cast.media.timeout.$c = 0;
a.f(chrome.cast.media.timeout, "queue", chrome.cast.media.timeout.$c);
chrome.cast.media.nc = function(b, c) {
  this.trackId = b;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
a.a("chrome.cast.media.Track", chrome.cast.media.nc);
chrome.cast.media.kc = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
a.a("chrome.cast.media.TextTrackStyle", chrome.cast.media.kc);
chrome.cast.Na = function(b, c, d, e, g) {
  this.sessionRequest = b;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.aa.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = g || chrome.cast.ca.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
a.a("chrome.cast.ApiConfig", chrome.cast.Na);
chrome.cast.Za = function(b, c) {
  this.appName = b;
  this.launchParameter = c || null;
};
a.a("chrome.cast.DialRequest", chrome.cast.Za);
chrome.cast.Xa = function(b, c, d) {
  this.receiver = b;
  this.appState = c;
  this.extraData = d || null;
};
a.a("chrome.cast.DialLaunchData", chrome.cast.Xa);
chrome.cast.Ya = function(b, c) {
  this.doLaunch = b;
  this.launchParameter = c || null;
};
a.a("chrome.cast.DialLaunchResponse", chrome.cast.Ya);
chrome.cast.dc = function(b, c, d) {
  this.appId = b;
  this.capabilities = c || [chrome.cast.M.VIDEO_OUT, chrome.cast.M.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.Fa;
  this.language = null;
};
a.a("chrome.cast.SessionRequest", chrome.cast.dc);
chrome.cast.Pb = function(b, c, d, e) {
  this.label = b;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.la.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};
a.a("chrome.cast.Receiver", chrome.cast.Pb);
chrome.cast.Sb = function(b, c) {
  this.statusText = b;
  this.appImages = c;
  this.showStop = null;
};
a.a("chrome.cast.ReceiverDisplayStatus", chrome.cast.Sb);
chrome.cast.D = function(b, c, d, e, g) {
  this.sessionId = b;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = g;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.na.CONNECTED;
  this.transportId = "";
};
a.a("chrome.cast.Session", chrome.cast.D);
chrome.cast.D.Sa = "custom_receiver_session_id";
a.f(chrome.cast.D, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.D.Sa);
chrome.cast.timeout = {};
a.a("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.Fa = 1E4;
a.f(chrome.cast.timeout, "requestSession", chrome.cast.timeout.Fa);
chrome.cast.timeout.Rc = 3E3;
a.f(chrome.cast.timeout, "leaveSession", chrome.cast.timeout.Rc);
chrome.cast.timeout.hd = 3E3;
a.f(chrome.cast.timeout, "stopSession", chrome.cast.timeout.hd);
chrome.cast.timeout.ed = 3E3;
a.f(chrome.cast.timeout, "setReceiverVolume", chrome.cast.timeout.ed);
chrome.cast.timeout.bd = 3E3;
a.f(chrome.cast.timeout, "sendCustomMessage", chrome.cast.timeout.bd);
chrome.cast.ub = "mirror_app_id";
a.a("chrome.cast.MIRROR_APP_ID", chrome.cast.ub);
f.xd = {};
f.N = function(b, c, d, e, g, h) {
  this.type = b;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = a.isNumber(g) ? g : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
f.c = {fb:"iframe_init_result", fa:"fail_to_connect_to_extension", pd:"client_reconnect", sc:"v2_message", La:"app_message", od:"client_init", Ed:"log_message", Kd:"request_session", Ld:"request_session_by_id", Ad:"leave_session", nd:"client_disconnect", Md:"set_custom_receivers", sd:"custom_dial_launch_response", Nd:"set_receiver_display_status", Id:"query_tab_broadcast_status", $a:"extension_ready", Ka:"api_iframe_ready", Nb:"receiver_availability", Mb:"receiver_action", Ab:"new_session", rc:"update_session", 
Va:"disconnect_session", Ob:"remove_session", Ma:"app_message_success", ib:"leave_session_success", Yb:"set_receiver_volume_success", Wb:"set_custom_receivers_success", ERROR:"error", Ra:"custom_dial_launch_request", Xb:"set_receiver_display_status_success", fc:"tab_broadcast_status"};
f.u = function(b) {
  this.v = b;
  this.U = this.m = null;
};
f.u.prototype.dd = function(b) {
  this.U = b;
};
f.u.prototype.Ia = function(b) {
  b.clientId = this.v;
  if (!this.m && (this.Vc(), !this.m)) {
    return;
  }
  this.m.postMessage(b);
};
f.u.prototype.Vc = function() {
  !this.m && (this.m = chrome.runtime.connect({name:this.v})) && (this.m.onMessage.addListener(a.bind(this.Da, this)), this.m.onDisconnect.addListener(a.bind(this.Xc, this)));
};
f.u.prototype.Da = function(b) {
  this.U && this.U(b);
};
f.u.prototype.Xc = function() {
  this.m = null;
  this.Da(new f.N(f.c.fa, null));
};
f.A = function(b) {
  this.Ea = b;
  this.pa = null;
};
f.A.prototype.init = function() {
  window.addEventListener("message", this.Wc.bind(this), !1);
};
f.A.prototype.cd = function(b) {
  this.pa = b;
};
f.A.prototype.Wc = function(b) {
  if (b.source != window) {
    var c = b.data;
    this.Ea = c.appOrigin = b.origin;
    this.pa(c);
  }
};
f.A.prototype.Ha = function(b) {
  b.clientId = null;
  window.parent.postMessage(b, this.Ea);
};
f.i = function() {
  this.v = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.I = new f.A(f.i.Jc(window.location.href, "appOrigin"));
  this.V = new f.u(this.v);
  this.va = 0;
  this.H = null;
};
f.i.prototype.init = function() {
  this.I.init();
  this.I.cd(this.Yc.bind(this));
  this.V.dd(this.Zc.bind(this));
  this.Bc();
};
f.i.Qa = 1E3;
f.i.prototype.Bc = function() {
  var b = this;
  this.ua();
  this.H = setInterval(function() {
    6 > b.va ? b.ua() : b.Ga(new chrome.cast.Error(chrome.cast.ea.EXTENSION_MISSING));
  }, f.i.Qa);
};
f.i.prototype.ua = function() {
  this.va++;
  this.V.Ia(new f.N(f.c.Ka, void 0, void 0, this.v));
};
f.i.prototype.Ga = function(b) {
  this.H && (clearInterval(this.H), this.H = null, this.I.Ha(new f.N(f.c.fb, b)));
};
f.i.prototype.Yc = function(b) {
  b.clientId = this.v;
  this.V.Ia(b);
};
f.i.prototype.Zc = function(b) {
  switch(b.type) {
    case f.c.La:
    ;
    case f.c.Ma:
    ;
    case f.c.ERROR:
    ;
    case f.c.Ab:
    ;
    case f.c.rc:
    ;
    case f.c.Va:
    ;
    case f.c.Ob:
    ;
    case f.c.Nb:
    ;
    case f.c.sc:
    ;
    case f.c.ib:
    ;
    case f.c.Yb:
    ;
    case f.c.Wb:
    ;
    case f.c.fa:
    ;
    case f.c.Ra:
    ;
    case f.c.Xb:
    ;
    case f.c.Mb:
    ;
    case f.c.fc:
      this.I.Ha(b);
      break;
    case f.c.$a:
      this.Ga(null);
  }
};
f.i.Jc = function(b, c) {
  var d = decodeURIComponent(b).split("?")[1];
  if (!d) {
    return null;
  }
  for (var d = d.split("&"), e, g = 0;g < d.length;g++) {
    if (0 == d[g].indexOf(c)) {
      e = d[g];
      break;
    }
  }
  return e ? e.substring(c.length + 1) || null : null;
};
f.Lc = new f.i;
f.Lc.init();

