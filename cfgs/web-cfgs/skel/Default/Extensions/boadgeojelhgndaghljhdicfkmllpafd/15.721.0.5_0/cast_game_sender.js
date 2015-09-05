(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.Y = function(a) {
  return void 0 !== a;
};
g.eb = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.Y(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.Ai = function(a, c) {
  g.eb(a, c);
};
g.Z = !0;
g.yh = "en";
g.Va = !0;
g.Be = !1;
g.yd = !g.Z;
g.Ob = !1;
g.Aj = function(a) {
  g.yc(a);
};
g.yc = function(a, c) {
  g.eb(a, c);
};
g.Te = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
g.module = function(a) {
  if (!g.isString(a) || !a || -1 == a.search(g.Te)) {
    throw Error("Invalid module identifier");
  }
  if (!g.Rc()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (g.B.qb) {
    throw Error("goog.module may only be called once per module.");
  }
  g.B.qb = a;
};
g.module.get = function(a) {
  return g.module.Af(a);
};
g.module.Af = function() {
};
g.B = null;
g.Rc = function() {
  return null != g.B;
};
g.module.ab = function() {
  if (!g.Rc()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  g.B.ab = !0;
};
g.module.Cc = function() {
  g.B.Cc = !0;
};
g.Kj = function(a) {
  if (g.yd) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.Gi = function() {
};
g.Qi = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.s(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.Ui = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.Sh = function(a, c, d, e) {
  if (g.Mb) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var h = g.D, k = 0;f = c[k];k++) {
      h.la[f] = a, h.rb[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in h.requires || (h.requires[a] = {}), h.requires[a][c] = !0;
    }
  }
};
g.bk = !1;
g.lh = !0;
g.oj = function(a) {
  g.global.console && g.global.console.error(a);
};
g.require = function() {
};
g.X = "";
g.Uc = function() {
};
g.Rh = function() {
  throw Error("unimplemented abstract method");
};
g.Th = function(a) {
  a.Mi = function() {
    if (a.Nc) {
      return a.Nc;
    }
    g.Z && (g.Oc[g.Oc.length] = a);
    return a.Nc = new a;
  };
};
g.Oc = [];
g.Qd = !0;
g.ye = g.Z;
g.Sf = {};
g.Mb = !1;
g.Mb && (g.Gf = {}, g.D = {rb:{}, la:{}, requires:{}, kd:{}, qa:{}, ya:{}}, g.Lc = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.uf = function() {
  if (g.global.sd) {
    g.X = g.global.sd;
  } else {
    if (g.Lc()) {
      for (var a = g.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.X = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.jb = function(a, c) {
  (g.global.fh || g.Yg)(a, c) && (g.D.qa[a] = !0);
}, g.Nd = !g.global.atob && g.global.document && g.global.document.all, g.Ff = function(a) {
  g.jb("", 'goog.retrieveAndExecModule_("' + a + '");') && (g.D.qa[a] = !0);
}, g.sb = [], g.dk = function(a, c) {
  return g.Qd && g.Y(g.global.JSON) ? "goog.loadModule(" + g.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, g.Rf = function() {
  var a = g.sb.length;
  if (0 < a) {
    var c = g.sb;
    g.sb = [];
    for (var d = 0;d < a;d++) {
      g.Tc(c[d]);
    }
  }
}, g.qj = function(a) {
  g.Pc(a) && g.Ze(a) && g.Tc(g.X + g.ib(a));
}, g.Pc = function(a) {
  return (a = g.ib(a)) && g.D.rb[a] ? g.X + a in g.D.ya : !1;
}, g.Ze = function(a) {
  if ((a = g.ib(a)) && a in g.D.requires) {
    for (var c in g.D.requires[a]) {
      if (!g.Mf(c) && !g.Pc(c)) {
        return !1;
      }
    }
  }
  return !0;
}, g.Tc = function(a) {
  if (a in g.D.ya) {
    var c = g.D.ya[a];
    delete g.D.ya[a];
    g.Cf(c);
  }
}, g.nj = function(a) {
  var c = g.B;
  try {
    g.B = {qb:void 0, ab:!1};
    var d;
    if (g.isFunction(a)) {
      d = a.call(g.global, {});
    } else {
      if (g.isString(a)) {
        d = g.Qf.call(g.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = g.B.qb;
    if (!g.isString(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    g.B.Cc ? g.yc(e, d) : g.ye && Object.seal && Object.seal(d);
    g.Sf[e] = d;
    if (g.B.ab) {
      for (var f in d) {
        if (0 === f.indexOf("test", 0) || "tearDown" == f || "setUp" == f || "setUpPage" == f || "tearDownPage" == f) {
          g.global[f] = d[f];
        }
      }
    }
  } finally {
    g.B = c;
  }
}, g.Qf = function(a) {
  eval(a);
  return {};
}, g.Xg = function(a) {
  g.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, g.$e = function(a) {
  var c = g.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, g.Yg = function(a, c) {
  if (g.Lc()) {
    var d = g.global.document;
    if (!g.Ob && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = g.Nd;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++g.Sc + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : g.Ob ? g.$e(a) : g.Xg(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, g.Sc = 0, g.xj = function(a, c) {
  "complete" == a.readyState && g.Sc == c && g.Rf();
  return !0;
}, g.ek = function() {
  function a(f) {
    if (!(f in e.qa)) {
      if (!(f in e.kd) && (e.kd[f] = !0, f in e.requires)) {
        for (var h in e.requires[f]) {
          if (!g.Mf(h)) {
            if (h in e.la) {
              a(e.la[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = g.D, f;
  for (f in g.Gf) {
    e.qa[f] || a(f);
  }
  for (var h = 0;h < c.length;h++) {
    f = c[h], g.D.qa[f] = !0;
  }
  var k = g.B;
  g.B = null;
  for (h = 0;h < c.length;h++) {
    if (f = c[h]) {
      e.rb[f] ? g.Ff(g.X + f) : g.jb(g.X + f);
    } else {
      throw g.B = k, Error("Undefined script input");
    }
  }
  g.B = k;
}, g.ib = function(a) {
  return a in g.D.la ? g.D.la[a] : null;
}, g.uf(), g.global.gh || g.jb(g.X + "deps.js"));
g.tj = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
g.mj = function(a) {
  if (g.global.td) {
    return g.global.td(a);
  }
  var c = new g.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
g.Gj = function() {
};
g.I = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
g.Lf = function(a) {
  return null === a;
};
g.s = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.I(a);
};
g.Da = function(a) {
  var c = g.I(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.bj = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.ja = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.I(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.Jc = function(a) {
  return a[g.W] || (a[g.W] = ++g.Rg);
};
g.Vi = function(a) {
  return !!a[g.W];
};
g.Fg = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.W);
  try {
    delete a[g.W];
  } catch (c) {
  }
};
g.W = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.Rg = 0;
g.Li = g.Jc;
g.Ej = g.Fg;
g.kf = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.kf(a[d]);
    }
    return c;
  }
  return a;
};
g.cf = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.bf = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.cf : g.bind = g.bf;
  return g.bind.apply(null, arguments);
};
g.jg = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.rj = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.Va && Date.now || function() {
  return +new Date;
};
g.Cf = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.Aa) {
        if (g.global.eval("var _evalTest_ = 1;"), "undefined" != typeof g.global._evalTest_) {
          try {
            delete g.global._evalTest_;
          } catch (c) {
          }
          g.Aa = !0;
        } else {
          g.Aa = !1;
        }
      }
      if (g.Aa) {
        g.global.eval(a);
      } else {
        var d = g.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(a));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.Aa = null;
g.Ki = function(a, c) {
  var d = function(a) {
    return g.Bc[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.Bc ? "BY_WHOLE" == g.rf ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.Hj = function(a, c) {
  g.Bc = a;
  g.rf = c;
};
g.Oi = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
g.Pi = function(a) {
  return a;
};
g.c = function(a, c, d) {
  g.eb(a, c, d);
};
g.g = function(a, c, d) {
  a[c] = d;
};
g.kb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Ma = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.af = function(a, d, h) {
    for (var k = Array(arguments.length - 2), m = 2;m < arguments.length;m++) {
      k[m - 2] = arguments[m];
    }
    return c.prototype[d].apply(a, k);
  };
};
g.af = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Be || g.Z && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Ma) {
    for (var f = Array(arguments.length - 1), h = 1;h < arguments.length;h++) {
      f[h - 1] = arguments[h];
    }
    return e.Ma.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (h = 2;h < arguments.length;h++) {
    f[h - 2] = arguments[h];
  }
  for (var h = !1, k = a.constructor;k;k = k.Ma && k.Ma.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.Bh = !1;
g.P = function(a, c) {
  var d = c.constructor, e = c.Mg;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = g.P.pf(d, a);
  a && g.kb(d, a);
  delete c.constructor;
  delete c.Mg;
  g.P.qc(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.P.qc(d, e));
  return d;
};
g.P.xe = g.Z;
g.P.pf = function(a, c) {
  if (g.P.xe && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[g.Re]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[g.W] = c[g.W];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
g.P.Zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.P.qc = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.P.Zb.length;e++) {
    d = g.P.Zb[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
g.Sj = function() {
};
g.Re = "goog_defineClass_legacy_unsealable";
chrome.cast.Jb = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.c("chrome.cast.AutoJoinPolicy", chrome.cast.Jb);
chrome.cast.Nb = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.c("chrome.cast.DefaultActionPolicy", chrome.cast.Nb);
chrome.cast.Na = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.c("chrome.cast.Capability", chrome.cast.Na);
chrome.cast.K = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.c("chrome.cast.ErrorCode", chrome.cast.K);
chrome.cast.ue = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.c("chrome.cast.ReceiverAvailability", chrome.cast.ue);
chrome.cast.Ee = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.c("chrome.cast.SenderPlatform", chrome.cast.Ee);
chrome.cast.ua = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
g.c("chrome.cast.ReceiverType", chrome.cast.ua);
chrome.cast.Ad = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.c("chrome.cast.DialAppState", chrome.cast.Ad);
chrome.cast.te = {CAST:"cast", STOP:"stop"};
g.c("chrome.cast.ReceiverAction", chrome.cast.te);
chrome.cast.ia = {CONNECTED:"connected", DISCONNECTED:"disconnected", STOPPED:"stopped"};
g.c("chrome.cast.SessionStatus", chrome.cast.ia);
chrome.cast.VERSION = [1, 2];
g.c("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.c("chrome.cast.Error", chrome.cast.Error);
chrome.cast.De = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.c("chrome.cast.SenderApplication", chrome.cast.De);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.c("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Volume = function(a, c) {
  this.level = g.Y(a) ? a : null;
  this.muted = g.Y(c) ? c : null;
};
g.c("chrome.cast.Volume", chrome.cast.Volume);
var l = {o:{th:"LAUNCH", kc:"STOP", ic:"SET_VOLUME", Jd:"GET_STATUS", Hh:"RECEIVER_STATUS", Oh:"CONNECT", Ph:"CLOSE", ph:"GET_APP_AVAILABILITY", Vd:"LOAD", Wd:"PAUSE", be:"SEEK", Xd:"PLAY", Wb:"STOP_MEDIA", Ub:"MEDIA_GET_STATUS", Vb:"MEDIA_SET_VOLUME", Ud:"EDIT_TRACKS_INFO", Zd:"QUEUE_LOAD", Yd:"QUEUE_INSERT", Pa:"QUEUE_UPDATE", $d:"QUEUE_REMOVE", ae:"QUEUE_REORDER", qh:"INVALID_PLAYER_STATE", xh:"LOAD_FAILED", wh:"LOAD_CANCELLED", rh:"INVALID_REQUEST", Qa:"MEDIA_STATUS", uh:"LAUNCH_ERROR", PING:"PING", 
Eh:"PONG"}, Sa:{}};
l.Sa[l.o.Wb] = l.o.kc;
l.Sa[l.o.Vb] = l.o.ic;
l.Sa[l.o.Ub] = l.o.Jd;
l.pd = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
l.Ge = function(a) {
  this.type = l.o.kc;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.de = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.c("chrome.cast.media.MediaCommand", chrome.cast.media.de);
chrome.cast.media.L = {GENERIC:0, MOVIE:1, TV_SHOW:2, MUSIC_TRACK:3, PHOTO:4};
g.c("chrome.cast.media.MetadataType", chrome.cast.media.L);
chrome.cast.media.ha = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.c("chrome.cast.media.PlayerState", chrome.cast.media.ha);
chrome.cast.media.Ta = {OFF:"REPEAT_OFF", ALL:"REPEAT_ALL", SINGLE:"REPEAT_SINGLE", ALL_AND_SHUFFLE:"ALL_AND_SHUFFLE"};
g.c("chrome.cast.media.RepeatMode", chrome.cast.media.Ta);
chrome.cast.media.we = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.c("chrome.cast.media.ResumeState", chrome.cast.media.we);
chrome.cast.media.Ua = {BUFFERED:"BUFFERED", LIVE:"LIVE", OTHER:"OTHER"};
g.c("chrome.cast.media.StreamType", chrome.cast.media.Ua);
chrome.cast.media.Od = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.c("chrome.cast.media.IdleReason", chrome.cast.media.Od);
chrome.cast.media.Pe = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
g.c("chrome.cast.media.TrackType", chrome.cast.media.Pe);
chrome.cast.media.Me = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
g.c("chrome.cast.media.TextTrackType", chrome.cast.media.Me);
chrome.cast.media.Ie = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
g.c("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Ie);
chrome.cast.media.Ne = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
g.c("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Ne);
chrome.cast.media.Je = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
g.c("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Je);
chrome.cast.media.Ke = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
g.c("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Ke);
chrome.cast.media.Rb = function() {
  this.type = l.o.Ub;
  this.customData = null;
};
g.c("chrome.cast.media.GetStatusRequest", chrome.cast.media.Rb);
chrome.cast.media.ac = function() {
  this.type = l.o.Wd;
  this.customData = null;
};
g.c("chrome.cast.media.PauseRequest", chrome.cast.media.ac);
chrome.cast.media.bc = function() {
  this.type = l.o.Xd;
  this.customData = null;
};
g.c("chrome.cast.media.PlayRequest", chrome.cast.media.bc);
chrome.cast.media.Ce = function() {
  this.type = l.o.be;
  this.customData = this.resumeState = this.currentTime = null;
};
g.c("chrome.cast.media.SeekRequest", chrome.cast.media.Ce);
chrome.cast.media.mc = function() {
  this.type = l.o.Wb;
  this.customData = null;
};
g.c("chrome.cast.media.StopRequest", chrome.cast.media.mc);
chrome.cast.media.Ue = function(a) {
  this.type = l.o.Vb;
  this.volume = a;
  this.customData = null;
};
g.c("chrome.cast.media.VolumeRequest", chrome.cast.media.Ue);
chrome.cast.media.Sd = function(a) {
  this.type = l.o.Vd;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.c("chrome.cast.media.LoadRequest", chrome.cast.media.Sd);
chrome.cast.media.Gd = function(a, c) {
  this.type = l.o.Ud;
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
g.c("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Gd);
chrome.cast.media.le = function(a) {
  this.type = l.o.Zd;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.startIndex = 0;
  this.repeatMode = chrome.cast.media.Ta.OFF;
  this.customData = null;
};
g.c("chrome.cast.media.QueueLoadRequest", chrome.cast.media.le);
chrome.cast.media.dc = function(a) {
  this.type = l.o.Yd;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.dc);
chrome.cast.media.me = function(a) {
  this.type = l.o.Pa;
  this.sessionId = this.requestId = null;
  this.items = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.me);
chrome.cast.media.ta = function() {
  this.type = l.o.Pa;
  this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueJumpRequest", chrome.cast.media.ta);
chrome.cast.media.hc = function() {
  this.type = l.o.Pa;
  this.customData = this.repeatMode = this.sessionId = this.requestId = null;
};
g.c("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.hc);
chrome.cast.media.fc = function(a) {
  this.type = l.o.$d;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = null;
};
g.c("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.fc);
chrome.cast.media.gc = function(a) {
  this.type = l.o.ae;
  this.sessionId = this.requestId = null;
  this.itemIds = a;
  this.customData = this.insertBefore = null;
};
g.c("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.gc);
chrome.cast.media.Kd = function() {
  this.metadataType = this.type = chrome.cast.media.L.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.c("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Kd);
chrome.cast.media.fe = function() {
  this.metadataType = this.type = chrome.cast.media.L.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.c("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.fe);
chrome.cast.media.Qe = function() {
  this.metadataType = this.type = chrome.cast.media.L.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.c("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Qe);
chrome.cast.media.ge = function() {
  this.metadataType = this.type = chrome.cast.media.L.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.c("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.ge);
chrome.cast.media.je = function() {
  this.metadataType = this.type = chrome.cast.media.L.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.c("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.je);
chrome.cast.media.ee = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Ua.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
g.c("chrome.cast.media.MediaInfo", chrome.cast.media.ee);
chrome.cast.media.ec = function(a) {
  this.itemId = null;
  this.media = a;
  this.autoplay = !0;
  this.startTime = 0;
  this.playbackDuration = null;
  this.preloadTime = 0;
  this.customData = this.activeTrackIds = null;
};
g.c("chrome.cast.media.QueueItem", chrome.cast.media.ec);
chrome.cast.media.f = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.ha.IDLE;
  this.currentTime = 0;
  this.ob = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Volume;
  this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
  this.repeatMode = chrome.cast.media.Ta.OFF;
  this.Ca = this.pb = !1;
  this.pa = [];
};
g.c("chrome.cast.media.Media", chrome.cast.media.f);
chrome.cast.media.xd = "CC1AD845";
g.c("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.xd);
chrome.cast.media.timeout = {};
g.c("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.g(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Ba = 0;
g.g(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Ba);
chrome.cast.media.timeout.play = 0;
g.g(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.g(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.g(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.g(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.La = 0;
g.g(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.La);
chrome.cast.media.timeout.za = 0;
g.g(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.za);
chrome.cast.media.timeout.H = 0;
g.g(chrome.cast.media.timeout, "queue", chrome.cast.media.timeout.H);
chrome.cast.media.Oe = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
g.c("chrome.cast.media.Track", chrome.cast.media.Oe);
chrome.cast.media.Le = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
g.c("chrome.cast.media.TextTrackStyle", chrome.cast.media.Le);
chrome.cast.nd = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Jb.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Nb.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.c("chrome.cast.ApiConfig", chrome.cast.nd);
chrome.cast.Dd = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialRequest", chrome.cast.Dd);
chrome.cast.Bd = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.c("chrome.cast.DialLaunchData", chrome.cast.Bd);
chrome.cast.Cd = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.c("chrome.cast.DialLaunchResponse", chrome.cast.Cd);
chrome.cast.Fe = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Na.VIDEO_OUT, chrome.cast.Na.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.da;
  this.language = null;
};
g.c("chrome.cast.SessionRequest", chrome.cast.Fe);
chrome.cast.se = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.ua.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};
g.c("chrome.cast.Receiver", chrome.cast.se);
chrome.cast.ve = function(a, c) {
  this.statusText = a;
  this.appImages = c;
  this.showStop = null;
};
g.c("chrome.cast.ReceiverDisplayStatus", chrome.cast.ve);
chrome.cast.i = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.ia.CONNECTED;
  this.transportId = "";
};
g.c("chrome.cast.Session", chrome.cast.i);
chrome.cast.i.Lb = "custom_receiver_session_id";
g.g(chrome.cast.i, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.i.Lb);
chrome.cast.timeout = {};
g.c("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.da = 1E4;
g.g(chrome.cast.timeout, "requestSession", chrome.cast.timeout.da);
chrome.cast.timeout.ka = 3E3;
g.g(chrome.cast.timeout, "leaveSession", chrome.cast.timeout.ka);
chrome.cast.timeout.ed = 3E3;
g.g(chrome.cast.timeout, "stopSession", chrome.cast.timeout.ed);
chrome.cast.timeout.fa = 3E3;
g.g(chrome.cast.timeout, "setReceiverVolume", chrome.cast.timeout.fa);
chrome.cast.timeout.zb = 3E3;
g.g(chrome.cast.timeout, "sendCustomMessage", chrome.cast.timeout.zb);
chrome.cast.ce = "mirror_app_id";
g.c("chrome.cast.MIRROR_APP_ID", chrome.cast.ce);
l.od = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
  this.isTopLevelWindow = window.self == window.top;
};
l.lc = function(a, c) {
  this.type = l.o.ic;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
g.debug = {};
g.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.kb(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.Dc = {};
g.Dc.ie = {Ed:1, ah:2, TEXT:3, bh:4, nh:5, mh:6, Fh:7, hh:8, ih:9, kh:10, jh:11, Dh:12};
g.a = {};
g.a.Oa = !1;
g.a.Id = !1;
g.a.Se = {he:"\u00a0"};
g.a.Lg = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.a.Ci = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.a.mi = function(a, c) {
  return 0 == g.a.uc(c, a.substr(0, c.length));
};
g.a.ki = function(a, c) {
  return 0 == g.a.uc(c, a.substr(a.length - c.length, c.length));
};
g.a.li = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.a.Ng = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.a.si = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.a.mb = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
g.a.dj = function(a) {
  return 0 == a.length;
};
g.a.Qc = g.a.mb;
g.a.If = function(a) {
  return g.a.mb(g.a.Tf(a));
};
g.a.cj = g.a.If;
g.a.aj = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
g.a.Zi = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
g.a.gj = function(a) {
  return !/[^0-9]/.test(a);
};
g.a.$i = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
g.a.ij = function(a) {
  return " " == a;
};
g.a.jj = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.a.Qj = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.a.hi = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.a.vj = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.a.uj = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.a.ri = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.a.trim = g.Va && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.a.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.a.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.a.uc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.a.Wc = /(\.\d+)|(\d+)|(\D+)/g;
g.a.wj = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.a.Wc), e = c.toLowerCase().match(g.a.Wc), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var k = d[h], m = e[h];
    if (k != m) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : k < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.a.ak = function(a) {
  return encodeURIComponent(String(a));
};
g.a.$j = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.a.Wf = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.a.Kc = function(a, c) {
  if (c) {
    a = a.replace(g.a.Hb, "&amp;").replace(g.a.Tb, "&lt;").replace(g.a.Qb, "&gt;").replace(g.a.cc, "&quot;").replace(g.a.jc, "&#39;").replace(g.a.Yb, "&#0;"), g.a.Oa && (a = a.replace(g.a.Pb, "&#101;"));
  } else {
    if (!g.a.ld.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.a.Hb, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.a.Tb, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.a.Qb, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.a.cc, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.a.jc, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.a.Yb, "&#0;"));
    g.a.Oa && -1 != a.indexOf("e") && (a = a.replace(g.a.Pb, "&#101;"));
  }
  return a;
};
g.a.Hb = /&/g;
g.a.Tb = /</g;
g.a.Qb = />/g;
g.a.cc = /"/g;
g.a.jc = /'/g;
g.a.Yb = /\x00/g;
g.a.Pb = /e/g;
g.a.ld = g.a.Oa ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.a.Gb = function(a) {
  return g.a.contains(a, "&") ? !g.a.Id && "document" in g.global ? g.a.gd(a) : g.a.Sg(a) : a;
};
g.a.Zj = function(a, c) {
  return g.a.contains(a, "&") ? g.a.gd(a, c) : a;
};
g.a.gd = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.a.Md, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (k = String.fromCharCode(m));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
g.a.Sg = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
g.a.Md = /&([^;\s<&]+);?/g;
g.a.ck = function(a, c) {
  return g.a.Wf(a.replace(/  /g, " &#160;"), c);
};
g.a.zj = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.a.Se.he);
};
g.a.Rj = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.a.truncate = function(a, c, d) {
  d && (a = g.a.Gb(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.a.Kc(a));
  return a;
};
g.a.Yj = function(a, c, d, e) {
  d && (a = g.a.Gb(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.a.Kc(a));
  return a;
};
g.a.Eb = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.a.Fa = {"'":"\\'"};
g.a.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.a.Eb[e] || (31 < f && 127 > f ? e : g.a.Ec(e));
  }
  c.push('"');
  return c.join("");
};
g.a.Di = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.a.Ec(a.charAt(d));
  }
  return c.join("");
};
g.a.Ec = function(a) {
  if (a in g.a.Fa) {
    return g.a.Fa[a];
  }
  if (a in g.a.Eb) {
    return g.a.Fa[a] = g.a.Eb[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return g.a.Fa[a] = c;
};
g.a.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
g.a.ji = function(a, c) {
  return g.a.contains(a.toLowerCase(), c.toLowerCase());
};
g.a.xi = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.a.ma = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.a.remove = function(a, c) {
  var d = new RegExp(g.a.tb(c), "");
  return a.replace(d, "");
};
g.a.removeAll = function(a, c) {
  var d = new RegExp(g.a.tb(c), "g");
  return a.replace(d, "");
};
g.a.tb = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.a.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.a.yj = function(a, c, d) {
  a = g.Y(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.a.repeat("0", Math.max(0, c - d)) + a;
};
g.a.Tf = function(a) {
  return null == a ? "" : String(a);
};
g.a.gi = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.a.Ri = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.a.ui = function(a, c) {
  for (var d = 0, e = g.a.trim(String(a)).split("."), f = g.a.trim(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
    var m = e[k] || "", n = f[k] || "", p = /(\d*)(\D*)/g, t = /(\d*)(\D*)/g;
    do {
      var q = p.exec(m) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = g.a.$a(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || g.a.$a(0 == q[2].length, 0 == r[2].length) || g.a.$a(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
g.a.$a = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.a.Ld = 4294967296;
g.a.Wi = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.a.Ld;
  }
  return c;
};
g.a.Tg = 2147483648 * Math.random() | 0;
g.a.zi = function() {
  return "goog_" + g.a.Tg++;
};
g.a.Uj = function(a) {
  var c = Number(a);
  return 0 == c && g.a.mb(a) ? NaN : c;
};
g.a.fj = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.a.kj = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
g.a.Tj = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.a.Wj = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.a.Xj = function(a, c) {
  var d = g.isString(c) ? g.a.tb(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.a.ii = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
g.a.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.a.Oj = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.a.Bi = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var h = 0;h < c.length;h++) {
      e[h + 1] = Math.min(e[h] + 1, d[h + 1] + 1, d[h] + (a[f] != c[h]));
    }
    for (h = 0;h < d.length;h++) {
      d[h] = e[h];
    }
  }
  return e[c.length];
};
g.h = {};
g.h.J = g.Z;
g.h.ra = function(a, c) {
  c.unshift(a);
  g.debug.Error.call(this, g.a.Ng.apply(null, c));
  c.shift();
};
g.kb(g.h.ra, g.debug.Error);
g.h.ra.prototype.name = "AssertionError";
g.h.wd = function(a) {
  throw a;
};
g.h.cb = g.h.wd;
g.h.T = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  a = new g.h.ra("" + f, h || []);
  g.h.cb(a);
};
g.h.Ij = function(a) {
  g.h.J && (g.h.cb = a);
};
g.h.assert = function(a, c, d) {
  g.h.J && !a && g.h.T("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.tf = function(a, c) {
  g.h.J && g.h.cb(new g.h.ra("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
g.h.Zh = function(a, c, d) {
  g.h.J && !g.isNumber(a) && g.h.T("Expected number but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.bi = function(a, c, d) {
  g.h.J && !g.isString(a) && g.h.T("Expected string but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Xh = function(a, c, d) {
  g.h.J && !g.isFunction(a) && g.h.T("Expected function but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.$h = function(a, c, d) {
  g.h.J && !g.isObject(a) && g.h.T("Expected object but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Uh = function(a, c, d) {
  g.h.J && !g.isArray(a) && g.h.T("Expected array but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Vh = function(a, c, d) {
  g.h.J && !g.ja(a) && g.h.T("Expected boolean but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Wh = function(a, c, d) {
  !g.h.J || g.isObject(a) && a.nodeType == g.Dc.ie.Ed || g.h.T("Expected Element but got %s: %s.", [g.I(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.h.Yh = function(a, c, d, e) {
  !g.h.J || a instanceof c || g.h.T("Expected instanceof %s but got %s.", [g.h.Ic(c), g.h.Ic(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.h.ai = function() {
  for (var a in Object.prototype) {
    g.h.tf(a + " should not be enumerable in Object.prototype.");
  }
};
g.h.Ic = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
g.b = {};
g.S = g.Va;
g.b.R = !1;
g.b.kg = function(a) {
  return a[a.length - 1];
};
g.b.lj = g.b.kg;
g.b.l = Array.prototype;
g.b.indexOf = g.S && (g.b.R || g.b.l.indexOf) ? function(a, c, d) {
  return g.b.l.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.lastIndexOf = g.S && (g.b.R || g.b.l.lastIndexOf) ? function(a, c, d) {
  return g.b.l.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
g.b.forEach = g.S && (g.b.R || g.b.l.forEach) ? function(a, c, d) {
  g.b.l.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.b.Hc = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.b.filter = g.S && (g.b.R || g.b.l.filter) ? function(a, c, d) {
  return g.b.l.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, k = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.b.map = g.S && (g.b.R || g.b.l.map) ? function(a, c, d) {
  return g.b.l.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = c.call(d, h[k], k, a));
  }
  return f;
};
g.b.reduce = g.S && (g.b.R || g.b.l.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.b.l.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.reduceRight = g.S && (g.b.R || g.b.l.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.b.l.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.b.Hc(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.b.some = g.S && (g.b.R || g.b.l.some) ? function(a, c, d) {
  return g.b.l.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return !0;
    }
  }
  return !1;
};
g.b.every = g.S && (g.b.R || g.b.l.every) ? function(a, c, d) {
  return g.b.l.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return !1;
    }
  }
  return !0;
};
g.b.count = function(a, c, d) {
  var e = 0;
  g.b.forEach(a, function(a, h, k) {
    c.call(d, a, h, k) && ++e;
  }, d);
  return e;
};
g.b.find = function(a, c, d) {
  c = g.b.Gc(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.Gc = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return -1;
};
g.b.Ei = function(a, c, d) {
  c = g.b.vf(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.b.vf = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return -1;
};
g.b.contains = function(a, c) {
  return 0 <= g.b.indexOf(a, c);
};
g.b.Qc = function(a) {
  return 0 == a.length;
};
g.b.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.b.insert = function(a, c) {
  g.b.contains(a, c) || a.push(c);
};
g.b.Mc = function(a, c, d) {
  g.b.splice(a, d, 0, c);
};
g.b.Xi = function(a, c, d) {
  g.jg(g.b.splice, a, d, 0).apply(null, c);
};
g.b.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.b.indexOf(a, d)) ? a.push(c) : g.b.Mc(a, c, e);
};
g.b.remove = function(a, c) {
  var d = g.b.indexOf(a, c), e;
  (e = 0 <= d) && g.b.ma(a, d);
  return e;
};
g.b.ma = function(a, c) {
  return 1 == g.b.l.splice.call(a, c, 1).length;
};
g.b.Fj = function(a, c, d) {
  c = g.b.Gc(a, c, d);
  return 0 <= c ? (g.b.ma(a, c), !0) : !1;
};
g.b.Cj = function(a, c, d) {
  var e = 0;
  g.b.Hc(a, function(f, h) {
    c.call(d, f, h, a) && g.b.ma(a, h) && e++;
  });
  return e;
};
g.b.concat = function(a) {
  return g.b.l.concat.apply(g.b.l, arguments);
};
g.b.join = function(a) {
  return g.b.l.concat.apply(g.b.l, arguments);
};
g.b.Pg = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
g.b.clone = g.b.Pg;
g.b.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.Da(e)) {
      var f = a.length || 0, h = e.length || 0;
      a.length = f + h;
      for (var k = 0;k < h;k++) {
        a[f + k] = e[k];
      }
    } else {
      a.push(e);
    }
  }
};
g.b.splice = function(a, c, d, e) {
  return g.b.l.splice.apply(a, g.b.slice(arguments, 1));
};
g.b.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.b.l.slice.call(a, c) : g.b.l.slice.call(a, c, d);
};
g.b.Dj = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return g.isObject(a) ? "o" + g.Jc(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], m = d(k);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = k);
  }
  c.length = f;
};
g.b.rc = function(a, c, d) {
  return g.b.sc(a, d || g.b.V, !1, c);
};
g.b.ei = function(a, c, d) {
  return g.b.sc(a, c, !0, void 0, d);
};
g.b.sc = function(a, c, d, e, f) {
  for (var h = 0, k = a.length, m;h < k;) {
    var n = h + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (k = n, m = !p);
  }
  return m ? h : ~h;
};
g.b.sort = function(a, c) {
  a.sort(c || g.b.V);
};
g.b.Pj = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.b.V;
  g.b.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.b.Kg = function(a, c, d) {
  var e = d || g.b.V;
  g.b.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
g.b.Nj = function(a, c, d) {
  g.b.Kg(a, function(a) {
    return a[c];
  }, d);
};
g.b.hj = function(a, c, d) {
  c = c || g.b.V;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
g.b.equals = function(a, c, d) {
  if (!g.Da(a) || !g.Da(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || g.b.sf;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
g.b.ti = function(a, c, d) {
  d = d || g.b.V;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.b.V(a.length, c.length);
};
g.b.V = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.b.Yi = function(a, c) {
  return -g.b.V(a, c);
};
g.b.sf = function(a, c) {
  return a === c;
};
g.b.ci = function(a, c, d) {
  d = g.b.rc(a, c, d);
  return 0 > d ? (g.b.Mc(a, c, -(d + 1)), !0) : !1;
};
g.b.di = function(a, c, d) {
  c = g.b.rc(a, c, d);
  return 0 <= c ? g.b.ma(a, c) : !1;
};
g.b.fi = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], k = c.call(d, h, f, a);
    g.Y(k) && (e[k] || (e[k] = [])).push(h);
  }
  return e;
};
g.b.Vj = function(a, c, d) {
  var e = {};
  g.b.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.b.Bj = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.b.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.b.xf = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (g.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var h = g.b.xf.apply(null, g.b.slice(e, f, f + 8192)), k = 0;k < h.length;k++) {
          c.push(h[k]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
g.b.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.b.l.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.b.l.push.apply(a, a.splice(0, -c)));
  return a;
};
g.b.sj = function(a, c, d) {
  c = g.b.l.splice.call(a, c, 1);
  g.b.l.splice.call(a, d, 0, c[0]);
};
g.b.fk = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var h = arguments[f];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
g.b.Mj = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.b.wi = function(a, c) {
  var d = [];
  g.b.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
g.object.Ji = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.Hi = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.Ii = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.zc(a, c);
};
g.object.Ti = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.Ni = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Si = function(a, c) {
  for (var d = g.Da(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.Y(a));d++) {
  }
  return a;
};
g.object.vi = function(a, c) {
  return c in a;
};
g.object.zc = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
g.object.wf = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.Fi = function(a, c, d) {
  return (c = g.object.wf(a, c, d)) && a[c];
};
g.object.Qc = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.Jj = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.Lj = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
g.object.equals = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.Ug = function(a) {
  var c = g.I(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.Ug(a[d]);
    }
    return c;
  }
  return a;
};
g.object.Qg = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.$b = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.$b.length;h++) {
      d = g.object.$b[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.qf = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.qf.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.yi = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.ej = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.v = {};
l.v.Ra = "urn:x-cast:";
l.v.Td = 128;
l.v.Of = function(a) {
  return a.length > l.v.Ra.length && g.a.Lg(a, l.v.Ra) && a.length <= l.v.Td;
};
l.v.$ = function(a) {
  return l.v.Ra + "com.google.cast." + a;
};
l.v.vd = {Mh:l.v.$("tp.connection"), Nh:l.v.$("tp.heartbeat"), Gh:l.v.$("receiver"), zh:l.v.$("media"), Ah:l.v.$("media.universalRemote.optIn"), Qh:l.v.$("webrtc")};
l.v.He = g.object.Qg(l.v.vd);
l.v.Hf = function(a) {
  return l.v.He.hasOwnProperty(a);
};
l.u = {};
l.u.oi = function(a) {
  return a ? g.isString(a.sessionId) ? g.s(a.media) ? g.s(a.autoplay) && !g.ja(a.autoplay) ? "Invalid autoplay in LoadRequest." : g.s(a.currentTime) && !g.isNumber(a.currentTime) ? "Invalid currentTime in LoadRequest." : l.u.vc(a.media) : "media cannot be null or undefined in LoadRequest." : "Invalid sessionId in LoadRequest." : "LoadRequest cannot be null.";
};
l.u.pi = function(a) {
  if (!a) {
    return "QueueLoadRequest cannot be null.";
  }
  if (!g.isString(a.sessionId)) {
    return "Invalid sessionId in QueueLoadRequest.";
  }
  if (!g.s(a.items) || 0 >= a.items.length) {
    return "items cannot be null or undefined or empty in QueueLoadRequest.";
  }
  if (!g.s(a.repeatMode) || !g.isString(a.repeatMode)) {
    return "Invalid repeatMode in QueueLoadRequest.";
  }
  if (!g.s(a.startIndex) || !g.isNumber(a.startIndex) || 0 > a.startIndex || a.startIndex >= a.items.length) {
    return "Invalid startIndex in QueueLoadRequest.";
  }
  for (var c = 0;c < a.items.length;c++) {
    var d = l.u.hf(!1, a.items[c]);
    if ("" != d) {
      return "At index " + c + ": " + d;
    }
  }
  return "";
};
l.u.vc = function(a) {
  return a ? !g.isString(a.contentId) || 1E3 < a.contentId.length ? "Invalid contentId in MediaInfo." : g.object.zc(chrome.cast.media.Ua, a.streamType) ? g.isString(a.contentType) ? g.s(a.duration) && !g.isNumber(a.duration) ? "Invalid duration in MediaInfo." : "" : "Invalid contentType in MediaInfo." : "Invalid streamType in MediaInfo." : "MediaInfo cannot be null.";
};
l.u.hf = function(a, c) {
  if (!c) {
    return "QueueItem cannot be null.";
  }
  if (a) {
    if (g.s(c.itemId) && !g.isNumber(c.itemId)) {
      return "Invalid itemId in QueueItem.";
    }
  } else {
    if (g.s(c.itemId)) {
      return "itemId cannot be set in QueueItem.";
    }
  }
  return g.s(c.autoplay) && g.ja(c.autoplay) ? !g.s(c.startTime) || !g.isNumber(c.startTime) || 0 > c.startTime ? "Invalid startTime in QueueItem." : g.s(c.playbackDuration) && !g.isNumber(c.playbackDuration) ? "Invalid playbackDuration in QueueItem." : !g.s(c.preloadTime) || !g.isNumber(c.preloadTime) || 0 > c.preloadTime ? "Invalid preloadTime in QueueItem." : l.u.vc(c.media) : "Invalid autoplay in QueueItem.";
};
l.u.ff = function(a) {
  return !!a && g.s(a.sessionId) && g.isString(a.namespaceName) && l.v.Of(a.namespaceName) && !l.v.Hf(a.namespaceName);
};
l.u.ef = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? l.u.wc(a.sessionRequest) : !1;
};
l.u.gf = function(a) {
  return a ? !g.b.find(a, function(a) {
    return !((a.receiverType == chrome.cast.ua.CUSTOM || a.receiverType == chrome.cast.ua.DIAL) && g.s(a.friendlyName) && 0 == a.capabilities.length && g.Lf(a.volume));
  }) : !1;
};
l.u.wc = function(a) {
  return !a || !g.s(a.appId) || g.s(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.s(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
l.u.jf = function(a) {
  return a && g.s(a.volume) && l.u.xc(a.volume) ? g.s(a.expectedVolume) ? l.u.xc(a.expectedVolume) : !0 : !1;
};
l.u.xc = function(a) {
  return a ? g.s(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.ja(a.muted) : !1;
};
l.u.ni = function(a) {
  return !!a && g.ja(a.doLaunch) && (!g.s(a.launchParameter) || g.isString(a.launchParameter));
};
l.sh = {};
l.F = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
l.m = {Sb:"iframe_init_result", Hd:"fail_to_connect_to_extension", eh:"client_reconnect", va:"v2_message", Ib:"app_message", rd:"client_init", Rd:"log_message", qe:"request_session", re:"request_session_by_id", Pd:"leave_session", dh:"client_disconnect", ze:"set_custom_receivers", Kb:"custom_dial_launch_response", Ae:"set_receiver_display_status", ke:"query_tab_broadcast_status", oh:"extension_ready", Zg:"api_iframe_ready", oe:"receiver_availability", ne:"receiver_action", Xb:"new_session", nc:"update_session", 
zd:"disconnect_session", pe:"remove_session", $g:"app_message_success", vh:"leave_session_success", Kh:"set_receiver_volume_success", Ih:"set_custom_receivers_success", ERROR:"error", ud:"custom_dial_launch_request", Jh:"set_receiver_display_status_success", Lh:"tab_broadcast_status"};
l.Ch = function() {
  this.type = l.o.Qa;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.ga = function(a, c) {
  this.Ef = a;
  this.pc = c;
  this.oc = null;
};
chrome.cast.ga.prototype.init = function() {
  window.addEventListener("message", this.ag.bind(this), !1);
};
chrome.cast.ga.prototype.Hg = function(a) {
  this.oc = a;
};
chrome.cast.ga.prototype.ag = function(a) {
  a.source != window && a.origin == this.pc && (a = a.data, a.type == l.m.Sb && (this.Jf = !a.message), this.oc(a));
};
chrome.cast.ga.prototype.Ab = function(a) {
  this.Jf && this.Ef.contentWindow.postMessage(a, this.pc);
};
l.w = function(a, c, d) {
  this.fd = a;
  this.bb = c;
  this.Fb = g.isNumber(d) ? d : 0;
  this.Ea = !1;
  this.oa = null;
};
l.w.qd = 432E5;
l.w.prototype.Nf = function() {
  return this.Ea;
};
l.w.prototype.yb = function() {
  this.Ea = !0;
  this.bb = this.fd = null;
  this.oa && (clearTimeout(this.oa), this.oa = null);
};
l.w.Vc = function() {
};
l.w.prototype.jd = function() {
  var a = this.fd;
  this.yb();
  return a || l.w.Vc;
};
l.w.prototype.hd = function() {
  var a = this.bb;
  this.yb();
  return a || l.w.Vc;
};
l.w.prototype.dd = function(a, c) {
  if (!this.Ea && !this.oa) {
    var d = function() {
      if (!this.Ea) {
        a && a();
        var d = this.bb;
        this.yb();
        if (0 < this.Fb) {
          var f = new chrome.cast.Error(chrome.cast.K.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.oa = setTimeout(d, 0 < this.Fb ? this.Fb : l.w.qd);
  }
};
l.sa = function() {
  this.U = {};
};
b = l.sa.prototype;
b.add = function(a, c) {
  var d = this.U[a];
  if (d) {
    return -1 == d.indexOf(c) && d.push(c), !1;
  }
  this.U[a] = [c];
  return !0;
};
b.remove = function(a, c) {
  var d = this.U[a];
  if (!d) {
    return !1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return !1;
  }
  if (1 == d.length) {
    return delete this.U[a], !0;
  }
  d.splice(e, 1);
  return !1;
};
b.Xc = function(a) {
  if (!(a in this.U)) {
    return !1;
  }
  delete this.U[a];
  return !0;
};
b.zg = function(a) {
  var c = !1;
  Object.keys(this.U).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.U[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.U[a] || [];
};
b.contains = function(a, c) {
  return -1 != this.get(a).indexOf(c);
};
l.G = function() {
  this.ea = {};
  this.Ha = {};
};
b = l.G.prototype;
b.Dg = function(a, c) {
  var d = this.ea[a];
  return d ? (d.status = c, d.media.forEach(function(a) {
    delete this.Ha[this.hb(a)];
  }, this), delete this.ea[a], !0) : !1;
};
b.Ag = function(a) {
  delete this.Ha[this.hb(a)];
  var c = this.ea[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.mf = function(a) {
  if (a.sessionId == chrome.cast.i.Lb) {
    return a;
  }
  var c = this.ea[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.i(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.Ac(a);
      a.pb = !1;
      a.Ca = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.ea[a.sessionId] = c;
};
b.Ac = function(a) {
  var c = this.hb(a), d = this.Ha[c];
  d || (d = new chrome.cast.media.f(a.sessionId, a.mediaSessionId), this.Ha[c] = d, (c = this.ea[a.sessionId]) && c.media.push(d));
  l.G.Wg(d, a);
  return d;
};
b.hb = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
l.G.Wg = function(a, c) {
  a.currentItemId = null;
  a.loadingItemId = null;
  a.preloadedItemId = null;
  for (var d in c) {
    "items" != d && c.hasOwnProperty(d) && ("volume" == d ? (a.volume.level = c.volume.level, a.volume.muted = c.volume.muted) : a[d] = c[d]);
  }
  "currentTime" in c && (a.ob = g.now());
  l.G.Df(a.playerState, a.loadingItemId) ? (a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null) : l.G.Vg(a, c);
};
l.G.Df = function(a, c) {
  return a == chrome.cast.media.ha.IDLE && null == c;
};
l.G.df = function(a) {
  var c = {};
  if (a) {
    for (var d = 0;d < a.length;d++) {
      c[a[d].itemId] = d;
    }
  }
  return c;
};
l.G.Vg = function(a, c) {
  if (c.hasOwnProperty("items") && c.items) {
    for (var d = [], e = l.G.df(a.items), f = c.items, h = 0;h < f.length;h++) {
      var k = f[h];
      if (!k.media) {
        var m = k.itemId, n = a.items ? a.items[e[m]] : null;
        n && n.media ? k.media = n.media : m == a.currentItemId && a.media && (k.media = a.media);
      }
      d.push(l.G.of(k));
    }
    a.items = d;
  }
};
l.G.of = function(a) {
  var c = new chrome.cast.media.ec(a.media), d;
  for (d in a) {
    a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return c;
};
chrome.cast.N = function(a) {
  this.Xf = 1E3 * Math.floor(1E5 * Math.random());
  this.Ia = a;
  this.ca = {};
  this.wa = !1;
  this.aa = this.C = this.Za = null;
  this.xa = new l.sa;
  this.Ga = new l.sa;
  this.na = new l.sa;
  this.Ja = [];
  this.Ka = new l.G(this.pj);
  this.Fc = !1;
};
b = chrome.cast.N.prototype;
b.init = function() {
  this.Ia.Hg(this.lg.bind(this));
};
b.Bf = function() {
  return "a" + this.Xf++;
};
b.Uf = function(a) {
  var c = a.seqNum;
  if (!c) {
    return !1;
  }
  var d = this.ca[c];
  if (d) {
    var e = a.message;
    a.type == l.m.ERROR ? d.hd()(a.message) : d.jd()(e);
    delete this.ca[c];
  }
  return !!d;
};
b.Vf = function(a) {
  switch(a.type) {
    case l.m.Xb:
    ;
    case l.m.nc:
      a.message = this.nf(a.message);
      break;
    case l.m.va:
      a = a.message, a.type == l.o.Qa && a.status && (a.status = a.status.map(this.lf.bind(this)));
  }
};
b.nf = function(a) {
  return this.Ka.mf(a);
};
b.lg = function(a) {
  this.Vf(a);
  if (!this.Uf(a)) {
    switch(a.type) {
      case l.m.Sb:
        this.Yf(a);
        break;
      case l.m.oe:
        this.gg(a);
        break;
      case l.m.ne:
        this.fg(a);
        break;
      case l.m.Hd:
        this.Fc = !0;
        break;
      case l.m.Xb:
        this.eg(a);
        break;
      case l.m.nc:
        this.ig(a);
        break;
      case l.m.zd:
        this.$f(a);
        break;
      case l.m.pe:
        this.hg(a);
        break;
      case l.m.Ib:
        this.bg(a.message);
        break;
      case l.m.va:
        this.dg(a);
        break;
      case l.m.ud:
        this.Zf(a);
    }
  }
};
b.Zf = function(a) {
  var c = a.message;
  this.C && this.C.customDialLaunchCallback && this.C.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.Ia.Ab(new l.F(l.m.Kb, c, a.seqNum));
  }, this), g.bind(function() {
    this.Ia.Ab(new l.F(l.m.Kb, null, a.seqNum));
  }, this));
};
b.dg = function(a) {
  switch(a.message.type) {
    case l.o.Qa:
      this.cg(a.message);
  }
};
b.cg = function(a) {
  a.status.forEach(this.tc.bind(this));
};
b.eg = function(a) {
  this.C && this.C.sessionListener(a.message);
};
b.ig = function(a) {
  (a = a.message) && this.na.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.$f = function(a) {
  this.Yc(a.message, chrome.cast.ia.DISCONNECTED);
};
b.hg = function(a) {
  this.Yc(a.message, chrome.cast.ia.STOPPED);
};
b.Yc = function(a, c) {
  var d = c != chrome.cast.ia.STOPPED;
  this.Ka.Dg(a, c) && (this.xa.zg(a + "#"), this.Ga.Xc(a), this.na.get(a).forEach(function(a) {
    a(d);
  }), this.na.Xc(a));
};
b.bg = function(a) {
  this.yf(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.gg = function(a) {
  if (this.C) {
    var c = a.message;
    a.receiverList ? this.C.receiverListener.apply(null, [c, a.receiverList]) : this.C.receiverListener(c);
  }
};
b.fg = function(a) {
  this.Ja.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.Yf = function(a) {
  (a = a.message) ? (this.Za = a, this.aa && this.aa.hd()(a)) : (this.wa = !0, this.$c(), this.aa && this.aa.jd()(void 0));
};
b.Bb = function(a, c, d) {
  this.O(d) && (a = a || [], l.u.gf(a) ? this.M(new l.F(l.m.ze, a), new l.w(c, d)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.fa = function(a, c, d, e) {
  this.O(e) && (l.u.jf(c) ? (c.sessionId = a, this.M(new l.F(l.m.va, c, null, null, chrome.cast.timeout.fa), new l.w(d, e, chrome.cast.timeout.fa))) : e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.ka = function(a, c, d) {
  this.O(d) && this.M(new l.F(l.m.Pd, a, null, null, chrome.cast.timeout.ka), new l.w(c, d, chrome.cast.timeout.ka));
};
b.Zc = function(a, c, d, e) {
  this.O(d) && this.M(new l.F(l.m.va, a, null, null, e), new l.w(c, d, e));
};
b.ba = function(a) {
  this.O(g.Uc) && this.M(new l.F(l.m.Rd, a));
};
b.bd = function(a, c, d, e, f) {
  null != a && (c.mediaSessionId = a.mediaSessionId, c.sessionId = a.sessionId);
  c.requestId = null;
  this.Zc(c, function(a) {
    d && a.status && 1 == a.status.length ? d(a.status[0]) : e && e(new chrome.cast.Error(chrome.cast.K.SESSION_ERROR));
  }, e, f);
};
b.ad = function(a, c, d) {
  this.bd(null, a, function(a) {
    a.Ca = !0;
    a.pb = !0;
    c && c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.A = function(a, c, d, e, f) {
  this.bd(a, c, function(a) {
    this.tc(a);
    d && d();
  }.bind(this), e, f);
};
b.Gg = function(a, c, d) {
  this.O(d) && (l.u.ff(a) ? this.M(new l.F(l.m.Ib, a, null, null, chrome.cast.timeout.zb), new l.w(c, d, chrome.cast.timeout.zb)) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)));
};
b.$c = function() {
  this.C && this.wa && this.M(new l.F(l.m.rd, new l.od(this.C)));
};
b.M = function(a, c) {
  var d = this.Bf();
  a.seqNum = d;
  if (this.ca[d] && !this.ca[d].Nf()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ca[d] = c, c.dd(function() {
    delete this.ca[d];
  }.bind(this)));
  this.Ia.Ab(a);
};
b.nb = function(a, c) {
  this.O(c) && this.M(new l.F(l.m.ke, void 0), new l.w(a, c));
};
b.lb = function(a, c, d) {
  l.u.ef(a) ? this.Za ? d && d(this.Za) : this.C ? c && c() : (this.C = a, this.wa ? (this.$c(), c && c()) : (this.aa = new l.w(c, d, 6E3), this.aa.dd())) : d && d(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
};
b.da = function(a, c, d, e) {
  this.O(c) && (d && !l.u.wc(d) ? c && c(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER)) : (!d && this.C && (d = this.C.sessionRequest), this.M(new l.F(l.m.qe, d, null, null, d.requestSessionTimeout, e), new l.w(a, c, 0))));
};
b.xb = function(a) {
  this.O(g.Uc) && a && this.M(new l.F(l.m.re, a));
};
chrome.cast.N.md = new chrome.cast.Error(chrome.cast.K.API_NOT_INITIALIZED);
chrome.cast.N.Fd = new chrome.cast.Error(chrome.cast.K.EXTENSION_MISSING);
b = chrome.cast.N.prototype;
b.O = function(a) {
  return this.wa ? this.Fc ? (a && a(chrome.cast.N.Fd), !1) : !0 : (a && a(chrome.cast.N.md), !1);
};
b.fb = function(a, c) {
  return a + "#" + c;
};
b.Ve = function(a, c, d) {
  this.xa.add(this.fb(a, c), d);
};
b.yg = function(a, c, d) {
  this.xa.remove(this.fb(a, c), d);
};
b.yf = function(a, c) {
  return this.xa.get(this.fb(a, c));
};
b.Wa = function(a, c) {
  this.Ga.add(a, c);
};
b.ub = function(a, c) {
  this.Ga.remove(a, c);
};
b.We = function(a, c) {
  -1 == a.pa.indexOf(c) && a.pa.push(c);
};
b.Bg = function(a, c) {
  var d = a.pa.indexOf(c);
  -1 != d && a.pa.splice(d, 1);
};
chrome.cast.N.Kf = function(a) {
  return a.playerState != chrome.cast.media.ha.IDLE || null != a.loadingItemId;
};
b = chrome.cast.N.prototype;
b.tc = function(a) {
  if (a.Ca) {
    var c = chrome.cast.N.Kf(a);
    a.pa.forEach(function(a) {
      a(c);
    });
    c || this.Ka.Ag(a);
  } else {
    a.Ca = !0, a.pb || this.Ga.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.lf = function(a) {
  return this.Ka.Ac(a);
};
b.Ye = function(a, c) {
  this.na.add(a, c);
};
b.Eg = function(a, c) {
  this.na.remove(a, c);
};
b.Xa = function(a) {
  this.Ja.push(a);
};
b.vb = function(a) {
  a = this.Ja.indexOf(a);
  0 <= a && this.Ja.splice(a, 1);
};
b.Cb = function(a, c, d) {
  this.O(d) && this.M(new l.F(l.m.Ae, a), new l.w(c, d));
};
chrome.cast.isAvailable = !1;
g.c("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.j = null;
chrome.cast.nb = function(a, c) {
  chrome.cast.j.nb(a, c);
};
g.c("chrome.cast.isTabBroadcast", chrome.cast.nb);
chrome.cast.lb = function(a, c, d) {
  chrome.cast.j.lb(a, c, d);
};
g.c("chrome.cast.initialize", chrome.cast.lb);
chrome.cast.da = function(a, c, d, e) {
  chrome.cast.j.da(a, c, d, e);
};
g.c("chrome.cast.requestSession", chrome.cast.da);
chrome.cast.xb = function(a) {
  chrome.cast.j.xb(a);
};
g.c("chrome.cast.requestSessionById", chrome.cast.xb);
chrome.cast.Xa = function(a) {
  chrome.cast.j.Xa(a);
};
g.c("chrome.cast.addReceiverActionListener", chrome.cast.Xa);
chrome.cast.vb = function(a) {
  chrome.cast.j.vb(a);
};
g.c("chrome.cast.removeReceiverActionListener", chrome.cast.vb);
chrome.cast.ba = function(a) {
  chrome.cast.j.ba(a);
};
g.c("chrome.cast.logMessage", chrome.cast.ba);
chrome.cast.Bb = function(a, c, d) {
  chrome.cast.j.Bb(a, c, d);
};
g.c("chrome.cast.setCustomReceivers", chrome.cast.Bb);
chrome.cast.Cb = function(a, c, d) {
  chrome.cast.j.Cb(a, c, d);
};
g.c("chrome.cast.setReceiverDisplayStatus", chrome.cast.Cb);
chrome.cast.unescape = function(a) {
  return g.a.Gb(a);
};
g.c("chrome.cast.unescape", chrome.cast.unescape);
chrome.cast.i.prototype.Jg = function(a, c, d) {
  a = new l.lc(new chrome.cast.Volume(a, null), this.receiver.volume);
  chrome.cast.j.fa(this.sessionId, a, c, d);
};
g.g(chrome.cast.i.prototype, "setReceiverVolumeLevel", chrome.cast.i.prototype.Jg);
chrome.cast.i.prototype.Ig = function(a, c, d) {
  a = new l.lc(new chrome.cast.Volume(null, a), this.receiver.volume);
  chrome.cast.j.fa(this.sessionId, a, c, d);
};
g.g(chrome.cast.i.prototype, "setReceiverMuted", chrome.cast.i.prototype.Ig);
chrome.cast.i.prototype.leave = function(a, c) {
  chrome.cast.j.ka(this.sessionId, a, c);
};
g.g(chrome.cast.i.prototype, "leave", chrome.cast.i.prototype.leave);
chrome.cast.i.prototype.stop = function(a, c) {
  chrome.cast.j.Zc(new l.Ge(this.sessionId), a, c, chrome.cast.timeout.ed);
};
g.g(chrome.cast.i.prototype, "stop", chrome.cast.i.prototype.stop);
chrome.cast.i.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.j.Gg(new l.pd(this.sessionId, a, c), d, e);
};
g.g(chrome.cast.i.prototype, "sendMessage", chrome.cast.i.prototype.sendMessage);
chrome.cast.i.prototype.Ya = function(a) {
  chrome.cast.j.Ye(this.sessionId, a);
};
g.g(chrome.cast.i.prototype, "addUpdateListener", chrome.cast.i.prototype.Ya);
chrome.cast.i.prototype.wb = function(a) {
  chrome.cast.j.Eg(this.sessionId, a);
};
g.g(chrome.cast.i.prototype, "removeUpdateListener", chrome.cast.i.prototype.wb);
chrome.cast.i.prototype.Xe = function(a, c) {
  chrome.cast.j.Ve(this.sessionId, a, c);
};
g.g(chrome.cast.i.prototype, "addMessageListener", chrome.cast.i.prototype.Xe);
chrome.cast.i.prototype.Cg = function(a, c) {
  chrome.cast.j.yg(this.sessionId, a, c);
};
g.g(chrome.cast.i.prototype, "removeMessageListener", chrome.cast.i.prototype.Cg);
chrome.cast.i.prototype.Wa = function(a) {
  chrome.cast.j.Wa(this.sessionId, a);
};
g.g(chrome.cast.i.prototype, "addMediaListener", chrome.cast.i.prototype.Wa);
chrome.cast.i.prototype.ub = function(a) {
  chrome.cast.j.ub(this.sessionId, a);
};
g.g(chrome.cast.i.prototype, "removeMediaListener", chrome.cast.i.prototype.ub);
chrome.cast.i.prototype.Pf = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.j.ad(a, c, d);
};
g.g(chrome.cast.i.prototype, "loadMedia", chrome.cast.i.prototype.Pf);
chrome.cast.media.f.prototype.Ba = function(a, c, d) {
  a || (a = new chrome.cast.media.Rb);
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.Ba);
};
g.g(chrome.cast.media.f.prototype, "getStatus", chrome.cast.media.f.prototype.Ba);
chrome.cast.media.f.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.bc);
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.play);
};
g.g(chrome.cast.media.f.prototype, "play", chrome.cast.media.f.prototype.play);
chrome.cast.media.f.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.ac);
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.pause);
};
g.g(chrome.cast.media.f.prototype, "pause", chrome.cast.media.f.prototype.pause);
chrome.cast.media.f.prototype.seek = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.seek);
};
g.g(chrome.cast.media.f.prototype, "seek", chrome.cast.media.f.prototype.seek);
chrome.cast.media.f.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.mc);
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.stop);
};
g.g(chrome.cast.media.f.prototype, "stop", chrome.cast.media.f.prototype.stop);
chrome.cast.media.f.prototype.La = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.La);
};
g.g(chrome.cast.media.f.prototype, "setVolume", chrome.cast.media.f.prototype.La);
chrome.cast.media.f.prototype.za = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.za);
};
g.g(chrome.cast.media.f.prototype, "editTracksInfo", chrome.cast.media.f.prototype.za);
chrome.cast.i.prototype.pg = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.j.ad(a, c, d);
};
g.g(chrome.cast.i.prototype, "queueLoad", chrome.cast.i.prototype.pg);
chrome.cast.media.f.prototype.ng = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueInsertItems", chrome.cast.media.f.prototype.ng);
chrome.cast.media.f.prototype.mg = function(a, c, d) {
  chrome.cast.j.A(this, new chrome.cast.media.dc([a]), c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueAppendItem", chrome.cast.media.f.prototype.mg);
chrome.cast.media.f.prototype.xg = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueUpdateItems", chrome.cast.media.f.prototype.xg);
chrome.cast.media.f.prototype.sg = function(a, c) {
  var d = new chrome.cast.media.ta;
  d.jump = -1;
  chrome.cast.j.A(this, d, a, c, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queuePrev", chrome.cast.media.f.prototype.sg);
chrome.cast.media.f.prototype.rg = function(a, c) {
  var d = new chrome.cast.media.ta;
  d.jump = 1;
  chrome.cast.j.A(this, d, a, c, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueNext", chrome.cast.media.f.prototype.rg);
chrome.cast.media.f.prototype.og = function(a, c, d) {
  if (0 > this.gb(a)) {
    chrome.cast.ba("itemId not found in the queue.");
  } else {
    var e = new chrome.cast.media.ta;
    e.currentItemId = a;
    chrome.cast.j.A(this, e, c, d, chrome.cast.media.timeout.H);
  }
};
g.g(chrome.cast.media.f.prototype, "queueJumpToItem", chrome.cast.media.f.prototype.og);
chrome.cast.media.f.prototype.wg = function(a, c, d) {
  var e = new chrome.cast.media.hc;
  e.repeatMode = a;
  chrome.cast.j.A(this, e, c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueSetRepeatMode", chrome.cast.media.f.prototype.wg);
chrome.cast.media.f.prototype.ug = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueRemoveItems", chrome.cast.media.f.prototype.ug);
chrome.cast.media.f.prototype.tg = function(a, c, d) {
  0 > this.gb(a) ? chrome.cast.ba("itemId not found in the queue.") : chrome.cast.j.A(this, new chrome.cast.media.fc([a]), c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueRemoveItem", chrome.cast.media.f.prototype.tg);
chrome.cast.media.f.prototype.vg = function(a, c, d) {
  chrome.cast.j.A(this, a, c, d, chrome.cast.media.timeout.H);
};
g.g(chrome.cast.media.f.prototype, "queueReorderItems", chrome.cast.media.f.prototype.vg);
chrome.cast.media.f.prototype.qg = function(a, c, d, e) {
  var f = this.gb(a);
  if (0 > f) {
    chrome.cast.ba("itemId not found in the queue.");
  } else {
    if (0 > c) {
      e && e(new chrome.cast.Error(chrome.cast.K.INVALID_PARAMETER));
    } else {
      if (f == c) {
        d && d();
      } else {
        var h = null;
        c = c > f ? c + 1 : c;
        c < this.items.length && (h = this.items[c]);
        a = new chrome.cast.media.gc([a]);
        a.insertBefore = h ? h.itemId : null;
        chrome.cast.j.A(this, a, d, e, chrome.cast.media.timeout.H);
      }
    }
  }
};
g.g(chrome.cast.media.f.prototype, "queueMoveItemToNewIndex", chrome.cast.media.f.prototype.qg);
chrome.cast.media.f.prototype.Og = function(a) {
  return -1 < this.supportedMediaCommands.indexOf(a);
};
g.g(chrome.cast.media.f.prototype, "supportsCommand", chrome.cast.media.f.prototype.Og);
chrome.cast.media.f.prototype.zf = function() {
  if (this.playerState == chrome.cast.media.ha.PLAYING && 0 <= this.ob) {
    var a = (g.now() - this.ob) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.g(chrome.cast.media.f.prototype, "getEstimatedTime", chrome.cast.media.f.prototype.zf);
chrome.cast.media.f.prototype.Ya = function(a) {
  chrome.cast.j.We(this, a);
};
g.g(chrome.cast.media.f.prototype, "addUpdateListener", chrome.cast.media.f.prototype.Ya);
chrome.cast.media.f.prototype.wb = function(a) {
  chrome.cast.j.Bg(this, a);
};
g.g(chrome.cast.media.f.prototype, "removeUpdateListener", chrome.cast.media.f.prototype.wb);
chrome.cast.media.f.prototype.gb = function(a) {
  for (var c = 0;c < this.items.length;c++) {
    if (this.items[c].itemId == a) {
      return c;
    }
  }
  return -1;
};
chrome.cast.Db = function() {
  if (!chrome.cast.cd && (chrome.cast.cd = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = document.createElement("iframe");
    c.src = a + "/api_iframe.html?appOrigin=" + window.location.origin;
    c.setAttribute("style", "display:none");
    document.body.appendChild(c);
    a = new chrome.cast.ga(c, a);
    a.init();
    chrome.cast.j = new chrome.cast.N(a);
    chrome.cast.j.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.cd = !1;
"complete" == document.readyState ? chrome.cast.Db() : (window.addEventListener("load", chrome.cast.Db, !1), window.addEventListener("DOMContentLoaded", chrome.cast.Db, !1));
})();
(function() {var b, l = l || {};
l.global = this;
l.ka = function(a) {
  return void 0 !== a;
};
l.ee = function(a, c, d) {
  a = a.split(".");
  d = d || l.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && l.ka(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
l.At = function(a, c) {
  l.ee(a, c);
};
l.oa = !0;
l.da = "en";
l.Td = !0;
l.Rd = !1;
l.ii = !l.oa;
l.sf = !1;
l.wv = function(a) {
  l.gg(a);
};
l.gg = function(a, c) {
  l.ee(a, c);
};
l.wj = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
l.yc = function(a) {
  if (!l.G(a) || !a || -1 == a.search(l.wj)) {
    throw Error("Invalid module identifier");
  }
  if (!l.dh()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (l.la.Me) {
    throw Error("goog.module may only be called once per module.");
  }
  l.la.Me = a;
};
l.yc.get = function(a) {
  return l.yc.Gk(a);
};
l.yc.Gk = function() {
};
l.la = null;
l.dh = function() {
  return null != l.la;
};
l.yc.be = function() {
  if (!l.dh()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  l.la.be = !0;
};
l.yc.mg = function() {
  l.la.mg = !0;
};
l.Sv = function(a) {
  if (l.ii) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
l.Qt = function() {
};
l.Ig = function(a, c) {
  for (var d = a.split("."), e = c || l.global, f;f = d.shift();) {
    if (l.dd(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
l.hu = function(a, c) {
  var d = c || l.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
l.As = function(a, c, d, e) {
  if (l.qf) {
    var f;
    a = a.replace(/\\/g, "/");
    for (var g = l.ma, h = 0;f = c[h];h++) {
      g.zc[f] = a, g.Qe[a] = !!e;
    }
    for (e = 0;c = d[e];e++) {
      a in g.Cb || (g.Cb[a] = {}), g.Cb[a][c] = !0;
    }
  }
};
l.tw = !1;
l.Yo = !0;
l.av = function(a) {
  l.global.console && l.global.console.error(a);
};
l.Bv = function() {
};
l.rb = "";
l.Ac = function() {
};
l.ys = function() {
  throw Error("unimplemented abstract method");
};
l.Cj = function(a) {
  a.pe = function() {
    if (a.vc) {
      return a.vc;
    }
    l.oa && (l.Tg[l.Tg.length] = a);
    return a.vc = new a;
  };
};
l.Tg = [];
l.Fi = !0;
l.hj = l.oa;
l.Jl = {};
l.qf = !1;
l.qf && (l.hl = {}, l.ma = {Qe:{}, zc:{}, Cb:{}, Yh:{}, Gc:{}, Tc:{}}, l.Pg = function() {
  var a = l.global.document;
  return "undefined" != typeof a && "write" in a;
}, l.rk = function() {
  if (l.global.ei) {
    l.rb = l.global.ei;
  } else {
    if (l.Pg()) {
      for (var a = l.global.document.getElementsByTagName("SCRIPT"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          l.rb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, l.xe = function(a, c) {
  (l.global.Yn || l.mn)(a, c) && (l.ma.Gc[a] = !0);
}, l.Di = !l.global.atob && l.global.document && l.global.document.all, l.gl = function(a) {
  l.xe("", 'goog.retrieveAndExecModule_("' + a + '");') && (l.ma.Gc[a] = !0);
}, l.Se = [], l.vw = function(a, c) {
  return l.Fi && l.ka(l.global.JSON) ? "goog.loadModule(" + l.global.JSON.stringify(c + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + c + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, l.Il = function() {
  var a = l.Se.length;
  if (0 < a) {
    var c = l.Se;
    l.Se = [];
    for (var d = 0;d < a;d++) {
      l.uh(c[d]);
    }
  }
}, l.dv = function(a) {
  l.Zg(a) && l.Dj(a) && l.uh(l.rb + l.se(a));
}, l.Zg = function(a) {
  return (a = l.se(a)) && l.ma.Qe[a] ? l.rb + a in l.ma.Tc : !1;
}, l.Dj = function(a) {
  if ((a = l.se(a)) && a in l.ma.Cb) {
    for (var c in l.ma.Cb[a]) {
      if (!l.yl(c) && !l.Zg(c)) {
        return !1;
      }
    }
  }
  return !0;
}, l.uh = function(a) {
  if (a in l.ma.Tc) {
    var c = l.ma.Tc[a];
    delete l.ma.Tc[a];
    l.Tk(c);
  }
}, l.Yu = function(a) {
  var c = l.la;
  try {
    l.la = {Me:void 0, be:!1};
    var d;
    if (l.Xa(a)) {
      d = a.call(l.global, {});
    } else {
      if (l.G(a)) {
        d = l.Hl.call(l.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var e = l.la.Me;
    if (!l.G(e) || !e) {
      throw Error('Invalid module name "' + e + '"');
    }
    l.la.mg ? l.gg(e, d) : l.hj && Object.seal && Object.seal(d);
    l.Jl[e] = d;
    if (l.la.be) {
      for (var f in d) {
        if (0 === f.indexOf("test", 0) || "tearDown" == f || "setUp" == f || "setUpPage" == f || "tearDownPage" == f) {
          l.global[f] = d[f];
        }
      }
    }
  } finally {
    l.la = c;
  }
}, l.Hl = function(a) {
  eval(a);
  return {};
}, l.ln = function(a) {
  l.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, l.Ej = function(a) {
  var c = l.global.document, d = c.createElement("script");
  d.type = "text/javascript";
  d.src = a;
  d.defer = !1;
  d.async = !1;
  c.head.appendChild(d);
}, l.mn = function(a, c) {
  if (l.Pg()) {
    var d = l.global.document;
    if (!l.sf && "complete" == d.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var e = l.Di;
    void 0 === c ? e ? (e = " onreadystatechange='goog.onScriptLoad_(this, " + ++l.oh + ")' ", d.write('<script type="text/javascript" src="' + a + '"' + e + ">\x3c/script>")) : l.sf ? l.Ej(a) : l.ln(a) : d.write('<script type="text/javascript">' + c + "\x3c/script>");
    return !0;
  }
  return !1;
}, l.oh = 0, l.pv = function(a, c) {
  "complete" == a.readyState && l.oh == c && l.Il();
  return !0;
}, l.ww = function() {
  function a(f) {
    if (!(f in e.Gc)) {
      if (!(f in e.Yh) && (e.Yh[f] = !0, f in e.Cb)) {
        for (var g in e.Cb[f]) {
          if (!l.yl(g)) {
            if (g in e.zc) {
              a(e.zc[g]);
            } else {
              throw Error("Undefined nameToPath for " + g);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = l.ma, f;
  for (f in l.hl) {
    e.Gc[f] || a(f);
  }
  for (var g = 0;g < c.length;g++) {
    f = c[g], l.ma.Gc[f] = !0;
  }
  var h = l.la;
  l.la = null;
  for (g = 0;g < c.length;g++) {
    if (f = c[g]) {
      e.Qe[f] ? l.gl(l.rb + f) : l.xe(l.rb + f);
    } else {
      throw l.la = h, Error("Undefined script input");
    }
  }
  l.la = h;
}, l.se = function(a) {
  return a in l.ma.zc ? l.ma.zc[a] : null;
}, l.rk(), l.global.Zn || l.xe(l.rb + "deps.js"));
l.kv = function(a) {
  a = a.split("/");
  for (var c = 0;c < a.length;) {
    "." == a[c] ? a.splice(c, 1) : c && ".." == a[c] && a[c - 1] && ".." != a[c - 1] ? a.splice(--c, 2) : c++;
  }
  return a.join("/");
};
l.Xu = function(a) {
  if (l.global.fi) {
    return l.global.fi(a);
  }
  var c = new l.global.XMLHttpRequest;
  c.open("get", a, !1);
  c.send();
  return c.responseText;
};
l.Cv = function() {
};
l.xa = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
l.wl = function(a) {
  return null === a;
};
l.dd = function(a) {
  return null != a;
};
l.isArray = function(a) {
  return "array" == l.xa(a);
};
l.W = function(a) {
  var c = l.xa(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
l.wu = function(a) {
  return l.Rb(a) && "function" == typeof a.getFullYear;
};
l.G = function(a) {
  return "string" == typeof a;
};
l.cd = function(a) {
  return "boolean" == typeof a;
};
l.xc = function(a) {
  return "number" == typeof a;
};
l.Xa = function(a) {
  return "function" == l.xa(a);
};
l.Rb = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
l.sc = function(a) {
  return a[l.qb] || (a[l.qb] = ++l.cn);
};
l.mu = function(a) {
  return !!a[l.qb];
};
l.lm = function(a) {
  "removeAttribute" in a && a.removeAttribute(l.qb);
  try {
    delete a[l.qb];
  } catch (c) {
  }
};
l.qb = "closure_uid_" + (1E9 * Math.random() >>> 0);
l.cn = 0;
l.Wt = l.sc;
l.zv = l.lm;
l.Tj = function(a) {
  var c = l.xa(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.Tj(a[d]);
    }
    return c;
  }
  return a;
};
l.Jj = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
l.Ij = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
l.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.Jj : l.bind = l.Ij;
  return l.bind.apply(null, arguments);
};
l.Fh = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
l.fv = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
l.now = l.Td && Date.now || function() {
  return +new Date;
};
l.Tk = function(a) {
  if (l.global.execScript) {
    l.global.execScript(a, "JavaScript");
  } else {
    if (l.global.eval) {
      if (null == l.Vc) {
        if (l.global.eval("var _evalTest_ = 1;"), "undefined" != typeof l.global._evalTest_) {
          try {
            delete l.global._evalTest_;
          } catch (c) {
          }
          l.Vc = !0;
        } else {
          l.Vc = !1;
        }
      }
      if (l.Vc) {
        l.global.eval(a);
      } else {
        var d = l.global.document, e = d.createElement("SCRIPT");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(d.createTextNode(a));
        d.body.appendChild(e);
        d.body.removeChild(e);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
l.Vc = null;
l.Vt = function(a, c) {
  var d = function(a) {
    return l.kg[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = l.kg ? "BY_WHOLE" == l.$j ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
l.Mv = function(a, c) {
  l.kg = a;
  l.$j = c;
};
l.Yt = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
l.Zt = function(a) {
  return a;
};
l.F = function(a, c, d) {
  l.ee(a, c, d);
};
l.w = function(a, c, d) {
  a[c] = d;
};
l.wb = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Db = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Hj = function(a, d, g) {
    for (var h = Array(arguments.length - 2), k = 2;k < arguments.length;k++) {
      h[k - 2] = arguments[k];
    }
    return c.prototype[d].apply(a, h);
  };
};
l.Hj = function(a, c, d) {
  var e = arguments.callee.caller;
  if (l.Rd || l.oa && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Db) {
    for (var f = Array(arguments.length - 1), g = 1;g < arguments.length;g++) {
      f[g - 1] = arguments[g];
    }
    return e.Db.constructor.apply(a, f);
  }
  f = Array(arguments.length - 2);
  for (g = 2;g < arguments.length;g++) {
    f[g - 2] = arguments[g];
  }
  for (var g = !1, h = a.constructor;h;h = h.Db && h.Db.constructor) {
    if (h.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return h.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
l.scope = function(a) {
  a.call(l.global);
};
l.sq = !1;
l.Ia = function(a, c) {
  var d = c.constructor, e = c.Um;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = l.Ia.Xj(d, a);
  a && l.wb(d, a);
  delete c.constructor;
  delete c.Um;
  l.Ia.Zf(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : l.Ia.Zf(d, e));
  return d;
};
l.Ia.gj = l.oa;
l.Ia.Xj = function(a, c) {
  if (l.Ia.gj && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[l.oj]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      c[l.qb] = c[l.qb];
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
l.Ia.Kf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.Ia.Zf = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < l.Ia.Kf.length;e++) {
    d = l.Ia.Kf[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
l.ew = function() {
};
l.oj = "goog_defineClass_legacy_unsealable";
var chrome = chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.a = {};
l.F("chrome.cast.games", chrome.cast.a);
chrome.cast.a.Kd = "urn:x-cast:com.google.cast.games";
l.w(chrome.cast.a, "NAMESPACE", chrome.cast.a.Kd);
chrome.cast.a.Qd = "1.0.0";
l.w(chrome.cast.a, "SDK_VERSION_NUMBER", chrome.cast.a.Qd);
chrome.cast.a.Cf = {UNKNOWN:0, LOADING:1, RUNNING:2, PAUSED:3, SHOWING_INFO_SCREEN:4};
l.w(chrome.cast.a, "GameplayState", chrome.cast.a.Cf);
chrome.cast.a.Hf = {UNKNOWN:0, OPEN:1, CLOSED:2};
l.w(chrome.cast.a, "LobbyState", chrome.cast.a.Hf);
chrome.cast.a.$a = {INVALID_REQUEST:"invalid_request", NOT_ALLOWED:"not_allowed", INCORRECT_VERSION:"incorrect_version", TOO_MANY_PLAYERS:"too_many_players", wd:"cast_error"};
l.w(chrome.cast.a, "GameManagerErrorCode", chrome.cast.a.$a);
chrome.cast.a.D = {};
chrome.cast.a.D.Ha = {Sd:0, INVALID_REQUEST:1, NOT_ALLOWED:2, INCORRECT_VERSION:3, TOO_MANY_PLAYERS:4};
chrome.cast.a.D.Ha.Ck = function(a) {
  switch(a) {
    case chrome.cast.a.D.Ha.INVALID_REQUEST:
      return chrome.cast.a.$a.INVALID_REQUEST;
    case chrome.cast.a.D.Ha.NOT_ALLOWED:
      return chrome.cast.a.$a.NOT_ALLOWED;
    case chrome.cast.a.D.Ha.INCORRECT_VERSION:
      return chrome.cast.a.$a.INCORRECT_VERSION;
    case chrome.cast.a.D.Ha.TOO_MANY_PLAYERS:
      return chrome.cast.a.$a.TOO_MANY_PLAYERS;
    default:
      throw Error("Cannot get error code for status code " + a);;
  }
};
chrome.cast.a.D.xi = function() {
  this.type = chrome.cast.a.D.bc.GAME_MANAGER_PROCESSED_RESULT;
  this.requestId = 0;
  this.playerId = "";
  this.playerToken = null;
  this.statusCode = chrome.cast.a.D.Ha.Sd;
  this.errorDescription = "";
  this.gameplayState = chrome.cast.a.Cf.UNKNOWN;
  this.lobbyState = chrome.cast.a.Hf.UNKNOWN;
  this.players = [];
  this.gameData = null;
  this.gameStatusText = "";
  this.extraMessageData = this.gameManagerConfig = null;
};
l.F("chrome.cast.games.internal.GameManagerMessage", chrome.cast.a.D.xi);
chrome.cast.a.D.bc = {UNKNOWN:0, GAME_MANAGER_PROCESSED_RESULT:1, GAME_MESSAGE:2};
l.F("chrome.cast.games.internal.GameManagerMessageType", chrome.cast.a.D.bc);
chrome.cast.a.PlayerState = {UNKNOWN:0, DROPPED:1, QUIT:2, AVAILABLE:3, READY:4, IDLE:5, PLAYING:6};
l.w(chrome.cast.a, "PlayerState", chrome.cast.a.PlayerState);
chrome.cast.a.D.Od = function() {
  this.yh = 1E3 * Math.floor(1E5 * Math.random());
};
l.Cj(chrome.cast.a.D.Od);
chrome.cast.a.D.Od.prototype.Kk = function() {
  var a = this.yh++;
  0 == a && (a = this.yh++);
  return a;
};
chrome.cast.a.D.pa = {UNKNOWN:0, Mf:1, Zi:2, Wi:3, Xi:4, Yi:5, ui:6, GAME_MESSAGE:7, Bd:1100};
l.F("chrome.cast.games.internal.GameManagerRequestType", chrome.cast.a.D.pa);
chrome.cast.a.D.Af = function() {
  this.type = chrome.cast.a.D.pa.UNKNOWN;
  this.requestId = chrome.cast.a.D.Od.pe().Kk();
  this.playerId = "";
  this.extraMessageData = this.playerToken = null;
};
chrome.cast.a.D.pa.Dk = function(a) {
  var c = chrome.cast.a.PlayerState, d = chrome.cast.a.D.pa;
  switch(a) {
    case c.QUIT:
      return d.Yi;
    case c.AVAILABLE:
      return d.Mf;
    case c.READY:
      return d.Zi;
    case c.IDLE:
      return d.Wi;
    case c.PLAYING:
      return d.Xi;
    default:
      throw Error("No mapping to a game manager request type for player state: " + a);;
  }
};
chrome.cast.a.ac = function(a, c, d, e) {
  this.errorCode = a;
  this.errorDescription = c;
  this.result = d;
  this.castError = e;
};
l.w(chrome.cast.a, "GameManagerError", chrome.cast.a.ac);
chrome.cast.a.Dd = function(a, c, d) {
  this.playerId = a;
  this.requestId = c;
  this.extraMessageData = d;
};
l.w(chrome.cast.a, "GameManagerResult", chrome.cast.a.Dd);
l.json = {};
l.json.Vd = !1;
l.json.Cl = function(a) {
  return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
l.json.parse = l.json.Vd ? l.global.JSON.parse : function(a) {
  a = String(a);
  if (l.json.Cl(a)) {
    try {
      return eval("(" + a + ")");
    } catch (c) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
l.json.qw = l.json.Vd ? l.global.JSON.parse : function(a) {
  return eval("(" + a + ")");
};
l.json.Ph = l.json.Vd ? l.global.JSON.stringify : function(a, c) {
  return (new l.json.ua(c)).Ph(a);
};
l.json.ua = function(a) {
  this.pd = a;
};
l.json.ua.prototype.Ph = function(a) {
  var c = [];
  this.We(a, c);
  return c.join("");
};
l.json.ua.prototype.We = function(a, c) {
  if (null == a) {
    c.push("null");
  } else {
    if ("object" == typeof a) {
      if (l.isArray(a)) {
        this.Km(a, c);
        return;
      }
      if (a instanceof String || a instanceof Number || a instanceof Boolean) {
        a = a.valueOf();
      } else {
        this.Mm(a, c);
        return;
      }
    }
    switch(typeof a) {
      case "string":
        this.Qh(a, c);
        break;
      case "number":
        this.Lm(a, c);
        break;
      case "boolean":
        c.push(a);
        break;
      case "function":
        c.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof a);;
    }
  }
};
l.json.ua.eg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
l.json.ua.Sj = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
l.json.ua.prototype.Qh = function(a, c) {
  c.push('"', a.replace(l.json.ua.Sj, function(a) {
    var c = l.json.ua.eg[a];
    c || (c = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), l.json.ua.eg[a] = c);
    return c;
  }), '"');
};
l.json.ua.prototype.Lm = function(a, c) {
  c.push(isFinite(a) && !isNaN(a) ? a : "null");
};
l.json.ua.prototype.Km = function(a, c) {
  var d = a.length;
  c.push("[");
  for (var e = "", f = 0;f < d;f++) {
    c.push(e), e = a[f], this.We(this.pd ? this.pd.call(a, String(f), e) : e, c), e = ",";
  }
  c.push("]");
};
l.json.ua.prototype.Mm = function(a, c) {
  c.push("{");
  var d = "", e;
  for (e in a) {
    if (Object.prototype.hasOwnProperty.call(a, e)) {
      var f = a[e];
      "function" != typeof f && (c.push(d), this.Qh(e, c), c.push(":"), this.We(this.pd ? this.pd.call(a, e, f) : f, c), d = ",");
    }
  }
  c.push("}");
};
l.debug = {};
l.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, l.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
l.wb(l.debug.Error, Error);
l.debug.Error.prototype.name = "CustomError";
l.ja = {};
l.ja.Oi = {ki:1, An:2, TEXT:3, Tn:4, ap:5, $o:6, rr:7, eo:8, Co:9, Eo:10, Do:11, Tq:12};
l.f = {};
l.f.yd = !1;
l.f.ri = !1;
l.f.qj = {Mi:"\u00a0"};
l.f.bw = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
l.f.Et = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
l.f.bt = function(a, c) {
  return 0 == l.f.dg(c, a.substr(0, c.length));
};
l.f.$s = function(a, c) {
  return 0 == l.f.dg(c, a.substr(a.length - c.length, c.length));
};
l.f.at = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
l.f.Vm = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
l.f.jt = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
l.f.Ae = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
l.f.zu = function(a) {
  return 0 == a.length;
};
l.f.wa = l.f.Ae;
l.f.ll = function(a) {
  return l.f.Ae(l.f.Pl(a));
};
l.f.yu = l.f.ll;
l.f.uu = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
l.f.ru = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
l.f.Ku = function(a) {
  return !/[^0-9]/.test(a);
};
l.f.su = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
l.f.Qu = function(a) {
  return " " == a;
};
l.f.Ru = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
l.f.cw = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
l.f.Ys = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
l.f.mv = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
l.f.lv = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
l.f.it = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
l.f.trim = l.Td && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
l.f.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
l.f.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
l.f.dg = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
l.f.Ah = /(\.\d+)|(\d+)|(\D+)/g;
l.f.ov = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(l.f.Ah), e = c.toLowerCase().match(l.f.Ah), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var h = d[g], k = e[g];
    if (h != k) {
      return d = parseInt(h, 10), !isNaN(d) && (e = parseInt(k, 10), !isNaN(e) && d - e) ? d - e : h < k ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
l.f.sw = function(a) {
  return encodeURIComponent(String(a));
};
l.f.rw = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
l.f.xh = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
l.f.Va = function(a, c) {
  if (c) {
    a = a.replace(l.f.bf, "&amp;").replace(l.f.Gf, "&lt;").replace(l.f.xf, "&gt;").replace(l.f.Of, "&quot;").replace(l.f.Rf, "&#39;").replace(l.f.Jf, "&#0;"), l.f.yd && (a = a.replace(l.f.tf, "&#101;"));
  } else {
    if (!l.f.ai.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(l.f.bf, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(l.f.Gf, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(l.f.xf, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(l.f.Of, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(l.f.Rf, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(l.f.Jf, "&#0;"));
    l.f.yd && -1 != a.indexOf("e") && (a = a.replace(l.f.tf, "&#101;"));
  }
  return a;
};
l.f.bf = /&/g;
l.f.Gf = /</g;
l.f.xf = />/g;
l.f.Of = /"/g;
l.f.Rf = /'/g;
l.f.Jf = /\x00/g;
l.f.tf = /e/g;
l.f.ai = l.f.yd ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
l.f.Vh = function(a) {
  return l.f.contains(a, "&") ? !l.f.ri && "document" in l.global ? l.f.Wh(a) : l.f.dn(a) : a;
};
l.f.mw = function(a, c) {
  return l.f.contains(a, "&") ? l.f.Wh(a, c) : a;
};
l.f.Wh = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : l.global.document.createElement("div");
  return a.replace(l.f.zi, function(a, c) {
    var h = d[a];
    if (h) {
      return h;
    }
    if ("#" == c.charAt(0)) {
      var k = Number("0" + c.substr(1));
      isNaN(k) || (h = String.fromCharCode(k));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = h;
  });
};
l.f.dn = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
l.f.zi = /&([^;\s<&]+);?/g;
l.f.hn = function(a, c) {
  return l.f.xh(a.replace(/  /g, " &#160;"), c);
};
l.f.tv = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + l.f.qj.Mi);
};
l.f.dw = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
l.f.truncate = function(a, c, d) {
  d && (a = l.f.Vh(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = l.f.Va(a));
  return a;
};
l.f.kw = function(a, c, d, e) {
  d && (a = l.f.Vh(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = l.f.Va(a));
  return a;
};
l.f.Ye = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
l.f.ed = {"'":"\\'"};
l.f.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = l.f.Ye[e] || (31 < f && 127 > f ? e : l.f.qg(e));
  }
  c.push('"');
  return c.join("");
};
l.f.Lt = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = l.f.qg(a.charAt(d));
  }
  return c.join("");
};
l.f.qg = function(a) {
  if (a in l.f.ed) {
    return l.f.ed[a];
  }
  if (a in l.f.Ye) {
    return l.f.ed[a] = l.f.Ye[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return l.f.ed[a] = c;
};
l.f.contains = function(a, c) {
  return -1 != a.indexOf(c);
};
l.f.Qj = function(a, c) {
  return l.f.contains(a.toLowerCase(), c.toLowerCase());
};
l.f.rt = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
l.f.Ub = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
l.f.remove = function(a, c) {
  var d = new RegExp(l.f.Te(c), "");
  return a.replace(d, "");
};
l.f.removeAll = function(a, c) {
  var d = new RegExp(l.f.Te(c), "g");
  return a.replace(d, "");
};
l.f.Te = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
l.f.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
l.f.sv = function(a, c, d) {
  a = l.ka(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return l.f.repeat("0", Math.max(0, c - d)) + a;
};
l.f.Pl = function(a) {
  return null == a ? "" : String(a);
};
l.f.Us = function(a) {
  return Array.prototype.join.call(arguments, "");
};
l.f.bu = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36);
};
l.f.gc = function(a, c) {
  for (var d = 0, e = l.f.trim(String(a)).split("."), f = l.f.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
    var k = e[h] || "", n = f[h] || "", t = /(\d*)(\D*)/g, I = /(\d*)(\D*)/g;
    do {
      var q = t.exec(k) || ["", "", ""], u = I.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == u[0].length) {
        break;
      }
      d = l.f.Xd(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || l.f.Xd(0 == q[2].length, 0 == u[2].length) || l.f.Xd(q[2], u[2]);
    } while (0 == d);
  }
  return d;
};
l.f.Xd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
l.f.yi = 4294967296;
l.f.nu = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= l.f.yi;
  }
  return c;
};
l.f.fn = 2147483648 * Math.random() | 0;
l.f.wt = function() {
  return "goog_" + l.f.fn++;
};
l.f.hw = function(a) {
  var c = Number(a);
  return 0 == c && l.f.Ae(a) ? NaN : c;
};
l.f.Eu = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
l.f.Su = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
l.f.gw = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
l.f.iw = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
l.f.jw = function(a, c) {
  var d = l.G(c) ? l.f.Te(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
l.f.Zs = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
l.f.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return l.G(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
l.f.Xv = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
l.f.Dt = function(a, c) {
  var d = [], e = [];
  if (a == c) {
    return 0;
  }
  if (!a.length || !c.length) {
    return Math.max(a.length, c.length);
  }
  for (var f = 0;f < c.length + 1;f++) {
    d[f] = f;
  }
  for (f = 0;f < a.length;f++) {
    e[0] = f + 1;
    for (var g = 0;g < c.length;g++) {
      e[g + 1] = Math.min(e[g] + 1, d[g + 1] + 1, d[g] + (a[f] != c[g]));
    }
    for (g = 0;g < d.length;g++) {
      d[g] = e[g];
    }
  }
  return e[c.length];
};
l.l = {};
l.l.ya = l.oa;
l.l.Hc = function(a, c) {
  c.unshift(a);
  l.debug.Error.call(this, l.f.Vm.apply(null, c));
  c.shift();
};
l.wb(l.l.Hc, l.debug.Error);
l.l.Hc.prototype.name = "AssertionError";
l.l.hi = function(a) {
  throw a;
};
l.l.de = l.l.hi;
l.l.Ua = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new l.l.Hc("" + f, g || []);
  l.l.de(a);
};
l.l.Pv = function(a) {
  l.l.ya && (l.l.de = a);
};
l.l.assert = function(a, c, d) {
  l.l.ya && !a && l.l.Ua("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.ra = function(a, c) {
  l.l.ya && l.l.de(new l.l.Hc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
l.l.Ls = function(a, c, d) {
  l.l.ya && !l.xc(a) && l.l.Ua("Expected number but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Os = function(a, c, d) {
  l.l.ya && !l.G(a) && l.l.Ua("Expected string but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Js = function(a, c, d) {
  l.l.ya && !l.Xa(a) && l.l.Ua("Expected function but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ms = function(a, c, d) {
  l.l.ya && !l.Rb(a) && l.l.Ua("Expected object but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Gs = function(a, c, d) {
  l.l.ya && !l.isArray(a) && l.l.Ua("Expected array but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Hs = function(a, c, d) {
  l.l.ya && !l.cd(a) && l.l.Ua("Expected boolean but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Is = function(a, c, d) {
  !l.l.ya || l.Rb(a) && a.nodeType == l.ja.Oi.ki || l.l.Ua("Expected Element but got %s: %s.", [l.xa(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.l.Ks = function(a, c, d, e) {
  !l.l.ya || a instanceof c || l.l.Ua("Expected instanceof %s but got %s.", [l.l.Mg(c), l.l.Mg(a)], d, Array.prototype.slice.call(arguments, 3));
  return a;
};
l.l.Ns = function() {
  for (var a in Object.prototype) {
    l.l.ra(a + " should not be enumerable in Object.prototype.");
  }
};
l.l.Mg = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.c = {};
l.Oa = l.Td;
l.c.Na = !1;
l.c.hm = function(a) {
  return a[a.length - 1];
};
l.c.Uu = l.c.hm;
l.c.L = Array.prototype;
l.c.indexOf = l.Oa && (l.c.Na || l.c.L.indexOf) ? function(a, c, d) {
  return l.c.L.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.c.lastIndexOf = l.Oa && (l.c.Na || l.c.L.lastIndexOf) ? function(a, c, d) {
  return l.c.L.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (l.G(a)) {
    return l.G(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.c.forEach = l.Oa && (l.c.Na || l.c.L.forEach) ? function(a, c, d) {
  l.c.L.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
l.c.yg = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;--f) {
    f in e && c.call(d, e[f], f, a);
  }
};
l.c.filter = l.Oa && (l.c.Na || l.c.L.filter) ? function(a, c, d) {
  return l.c.L.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, h = l.G(a) ? a.split("") : a, k = 0;k < e;k++) {
    if (k in h) {
      var n = h[k];
      c.call(d, n, k, a) && (f[g++] = n);
    }
  }
  return f;
};
l.c.map = l.Oa && (l.c.Na || l.c.L.map) ? function(a, c, d) {
  return l.c.L.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = l.G(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = c.call(d, g[h], h, a));
  }
  return f;
};
l.c.reduce = l.Oa && (l.c.Na || l.c.L.reduce) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.c.L.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.c.forEach(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.c.reduceRight = l.Oa && (l.c.Na || l.c.L.reduceRight) ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.c.L.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.c.yg(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.c.some = l.Oa && (l.c.Na || l.c.L.some) ? function(a, c, d) {
  return l.c.L.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return !0;
    }
  }
  return !1;
};
l.c.every = l.Oa && (l.c.Na || l.c.L.every) ? function(a, c, d) {
  return l.c.L.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return !1;
    }
  }
  return !0;
};
l.c.count = function(a, c, d) {
  var e = 0;
  l.c.forEach(a, function(a, g, h) {
    c.call(d, a, g, h) && ++e;
  }, d);
  return e;
};
l.c.find = function(a, c, d) {
  c = l.c.ug(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.c.ug = function(a, c, d) {
  for (var e = a.length, f = l.G(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return -1;
};
l.c.Ot = function(a, c, d) {
  c = l.c.sk(a, c, d);
  return 0 > c ? null : l.G(a) ? a.charAt(c) : a[c];
};
l.c.sk = function(a, c, d) {
  for (var e = l.G(a) ? a.split("") : a, f = a.length - 1;0 <= f;f--) {
    if (f in e && c.call(d, e[f], f, a)) {
      return f;
    }
  }
  return -1;
};
l.c.contains = function(a, c) {
  return 0 <= l.c.indexOf(a, c);
};
l.c.wa = function(a) {
  return 0 == a.length;
};
l.c.clear = function(a) {
  if (!l.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
l.c.insert = function(a, c) {
  l.c.contains(a, c) || a.push(c);
};
l.c.Sg = function(a, c, d) {
  l.c.splice(a, d, 0, c);
};
l.c.pu = function(a, c, d) {
  l.Fh(l.c.splice, a, d, 0).apply(null, c);
};
l.c.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = l.c.indexOf(a, d)) ? a.push(c) : l.c.Sg(a, c, e);
};
l.c.remove = function(a, c) {
  var d = l.c.indexOf(a, c), e;
  (e = 0 <= d) && l.c.Ub(a, d);
  return e;
};
l.c.Ub = function(a, c) {
  return 1 == l.c.L.splice.call(a, c, 1).length;
};
l.c.Av = function(a, c, d) {
  c = l.c.ug(a, c, d);
  return 0 <= c ? (l.c.Ub(a, c), !0) : !1;
};
l.c.yv = function(a, c, d) {
  var e = 0;
  l.c.yg(a, function(f, g) {
    c.call(d, f, g, a) && l.c.Ub(a, g) && e++;
  });
  return e;
};
l.c.concat = function(a) {
  return l.c.L.concat.apply(l.c.L, arguments);
};
l.c.join = function(a) {
  return l.c.L.concat.apply(l.c.L, arguments);
};
l.c.kb = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return [];
};
l.c.clone = l.c.kb;
l.c.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.W(e)) {
      var f = a.length || 0, g = e.length || 0;
      a.length = f + g;
      for (var h = 0;h < g;h++) {
        a[f + h] = e[h];
      }
    } else {
      a.push(e);
    }
  }
};
l.c.splice = function(a, c, d, e) {
  return l.c.L.splice.apply(a, l.c.slice(arguments, 1));
};
l.c.slice = function(a, c, d) {
  return 2 >= arguments.length ? l.c.L.slice.call(a, c) : l.c.L.slice.call(a, c, d);
};
l.c.km = function(a, c, d) {
  c = c || a;
  var e = function(a) {
    return l.Rb(a) ? "o" + l.sc(a) : (typeof a).charAt(0) + a;
  };
  d = d || e;
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var h = a[g++], k = d(h);
    Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, c[f++] = h);
  }
  c.length = f;
};
l.c.$f = function(a, c, d) {
  return l.c.ag(a, d || l.c.cb, !1, c);
};
l.c.Rs = function(a, c, d) {
  return l.c.ag(a, c, !0, void 0, d);
};
l.c.ag = function(a, c, d, e, f) {
  for (var g = 0, h = a.length, k;g < h;) {
    var n = g + h >> 1, t;
    t = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < t ? g = n + 1 : (h = n, k = !t);
  }
  return k ? g : ~g;
};
l.c.sort = function(a, c) {
  a.sort(c || l.c.cb);
};
l.c.Yv = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || l.c.cb;
  l.c.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
l.c.Sm = function(a, c, d) {
  var e = d || l.c.cb;
  l.c.sort(a, function(a, d) {
    return e(c(a), c(d));
  });
};
l.c.Wv = function(a, c, d) {
  l.c.Sm(a, function(a) {
    return a[c];
  }, d);
};
l.c.jh = function(a, c, d) {
  c = c || l.c.cb;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return !1;
    }
  }
  return !0;
};
l.c.qa = function(a, c, d) {
  if (!l.W(a) || !l.W(c) || a.length != c.length) {
    return !1;
  }
  var e = a.length;
  d = d || l.c.ng;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return !1;
    }
  }
  return !0;
};
l.c.mt = function(a, c, d) {
  d = d || l.c.cb;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return l.c.cb(a.length, c.length);
};
l.c.cb = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
l.c.qu = function(a, c) {
  return -l.c.cb(a, c);
};
l.c.ng = function(a, c) {
  return a === c;
};
l.c.Ps = function(a, c, d) {
  d = l.c.$f(a, c, d);
  return 0 > d ? (l.c.Sg(a, c, -(d + 1)), !0) : !1;
};
l.c.Qs = function(a, c, d) {
  c = l.c.$f(a, c, d);
  return 0 <= c ? l.c.Ub(a, c) : !1;
};
l.c.Ts = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], h = c.call(d, g, f, a);
    l.ka(h) && (e[h] || (e[h] = [])).push(g);
  }
  return e;
};
l.c.$m = function(a, c, d) {
  var e = {};
  l.c.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
l.c.od = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return [];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
l.c.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
l.c.uk = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    if (l.isArray(e)) {
      for (var f = 0;f < e.length;f += 8192) {
        for (var g = l.c.slice(e, f, f + 8192), g = l.c.uk.apply(null, g), h = 0;h < g.length;h++) {
          c.push(g[h]);
        }
      }
    } else {
      c.push(e);
    }
  }
  return c;
};
l.c.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? l.c.L.unshift.apply(a, a.splice(-c, c)) : 0 > c && l.c.L.push.apply(a, a.splice(0, -c)));
  return a;
};
l.c.hv = function(a, c, d) {
  c = l.c.L.splice.call(a, c, 1);
  l.c.L.splice.call(a, d, 0, c[0]);
};
l.c.$h = function(a) {
  if (!arguments.length) {
    return [];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
l.c.Vv = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
l.c.qt = function(a, c) {
  var d = [];
  l.c.forEach(c, function(c) {
    d.push(a[c]);
  });
  return d;
};
l.ja.pb = {on:"A", pn:"ABBR", qn:"ACRONYM", rn:"ADDRESS", wn:"APPLET", xn:"AREA", yn:"ARTICLE", zn:"ASIDE", AUDIO:"AUDIO", Bn:"B", Cn:"BASE", Dn:"BASEFONT", En:"BDI", Fn:"BDO", Ln:"BIG", Mn:"BLOCKQUOTE", On:"BODY", Pn:"BR", Qn:"BUTTON", Rn:"CANVAS", Sn:"CAPTION", Un:"CENTER", Wn:"CITE", $n:"CODE", ao:"COL", bo:"COLGROUP", co:"COMMAND", po:"DATA", qo:"DATALIST", so:"DD", uo:"DEL", vo:"DETAILS", wo:"DFN", xo:"DIALOG", yo:"DIR", zo:"DIV", Ao:"DL", Uo:"DT", Xo:"EM", EMBED:"EMBED", fp:"FIELDSET", gp:"FIGCAPTION", 
hp:"FIGURE", FONT:"FONT", lp:"FOOTER", FORM:"FORM", FRAME:"FRAME", mp:"FRAMESET", op:"H1", pp:"H2", qp:"H3", rp:"H4", sp:"H5", tp:"H6", yp:"HEAD", zp:"HEADER", Bp:"HGROUP", Cp:"HR", Dp:"HTML", Fp:"I", IFRAME:"IFRAME", Kp:"IMG", Ci:"INPUT", Mp:"INS", Qp:"ISINDEX", Rp:"KBD", Tp:"KEYGEN", Wp:"LABEL", Xp:"LEGEND", Yp:"LI", Ei:"LINK", iq:"MAP", jq:"MARK", kq:"MATH", mq:"MENU", oq:"META", pq:"METER", Qq:"NAV", Rq:"NOFRAMES", Sq:"NOSCRIPT", OBJECT:"OBJECT", Wq:"OL", Yq:"OPTGROUP", Zq:"OPTION", ar:"OUTPUT", 
br:"P", er:"PARAM", qr:"PRE", sr:"PROGRESS", Q:"Q", zr:"RP", Ar:"RT", Br:"RUBY", Cr:"S", Er:"SAMP", SCRIPT:"SCRIPT", Gr:"SECTION", ij:"SELECT", Jr:"SMALL", Kr:"SOURCE", Lr:"SPAN", Nr:"STRIKE", Or:"STRONG", STYLE:"STYLE", Pr:"SUB", Rr:"SUMMARY", Sr:"SUP", Tr:"SVG", Ur:"TABLE", Vr:"TBODY", Wr:"TD", mj:"TEMPLATE", Xr:"TEXTAREA", Zr:"TFOOT", $r:"TH", as:"THEAD", bs:"TIME", cs:"TITLE", js:"TR", TRACK:"TRACK", ms:"TT", os:"U", ps:"UL", ss:"VAR", VIDEO:"VIDEO", us:"WBR"};
l.object = {};
l.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
l.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
l.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
l.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return !0;
    }
  }
  return !1;
};
l.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return !1;
    }
  }
  return !0;
};
l.object.va = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
l.object.Tt = function(a) {
  for (var c in a) {
    return c;
  }
};
l.object.Ut = function(a) {
  for (var c in a) {
    return a[c];
  }
};
l.object.contains = function(a, c) {
  return l.object.ic(a, c);
};
l.object.V = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
l.object.na = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
l.object.gu = function(a, c) {
  for (var d = l.W(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], l.ka(a));d++) {
  }
  return a;
};
l.object.Jb = function(a, c) {
  return c in a;
};
l.object.ic = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return !0;
    }
  }
  return !1;
};
l.object.tk = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
l.object.Pt = function(a, c, d) {
  return (c = l.object.tk(a, c, d)) && a[c];
};
l.object.wa = function(a) {
  for (var c in a) {
    return !1;
  }
  return !0;
};
l.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
l.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
l.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  l.object.set(a, c, d);
};
l.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
l.object.set = function(a, c, d) {
  a[c] = d;
};
l.object.Rv = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
l.object.Uv = function(a, c, d) {
  if (c in a) {
    return a[c];
  }
  d = d();
  return a[c] = d;
};
l.object.qa = function(a, c) {
  for (var d in a) {
    if (!(d in c) || a[d] !== c[d]) {
      return !1;
    }
  }
  for (d in c) {
    if (!(d in a)) {
      return !1;
    }
  }
  return !0;
};
l.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
l.object.gn = function(a) {
  var c = l.xa(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.object.gn(a[d]);
    }
    return c;
  }
  return a;
};
l.object.an = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
l.object.Nf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < l.object.Nf.length;g++) {
      d = l.object.Nf[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
l.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
l.object.ae = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.ae.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
l.object.ut = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
l.object.Bu = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
l.ja.tags = {};
l.ja.tags.yj = l.object.ae("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
l.ja.tags.Dl = function(a) {
  return !0 === l.ja.tags.yj[a];
};
l.i18n = {};
l.i18n.g = {};
l.i18n.g.si = !1;
l.i18n.g.Ff = l.i18n.g.si || ("ar" == l.da.substring(0, 2).toLowerCase() || "fa" == l.da.substring(0, 2).toLowerCase() || "he" == l.da.substring(0, 2).toLowerCase() || "iw" == l.da.substring(0, 2).toLowerCase() || "ps" == l.da.substring(0, 2).toLowerCase() || "sd" == l.da.substring(0, 2).toLowerCase() || "ug" == l.da.substring(0, 2).toLowerCase() || "ur" == l.da.substring(0, 2).toLowerCase() || "yi" == l.da.substring(0, 2).toLowerCase()) && (2 == l.da.length || "-" == l.da.substring(2, 3) || "_" == 
l.da.substring(2, 3)) || 3 <= l.da.length && "ckb" == l.da.substring(0, 3).toLowerCase() && (3 == l.da.length || "-" == l.da.substring(3, 4) || "_" == l.da.substring(3, 4));
l.i18n.g.Fb = {Gi:"\u202a", aj:"\u202b", Lf:"\u202c", Hi:"\u200e", bj:"\u200f"};
l.i18n.g.T = {mb:1, ob:-1, Pa:0};
l.i18n.g.dc = "right";
l.i18n.g.cc = "left";
l.i18n.g.Hp = l.i18n.g.Ff ? l.i18n.g.cc : l.i18n.g.dc;
l.i18n.g.Gp = l.i18n.g.Ff ? l.i18n.g.dc : l.i18n.g.cc;
l.i18n.g.Zm = function(a, c) {
  return "number" == typeof a ? 0 < a ? l.i18n.g.T.mb : 0 > a ? l.i18n.g.T.ob : c ? null : l.i18n.g.T.Pa : null == a ? null : a ? l.i18n.g.T.ob : l.i18n.g.T.mb;
};
l.i18n.g.Sb = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
l.i18n.g.Wb = "\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc";
l.i18n.g.fl = /<[^>]*>|&[^;]+;/g;
l.i18n.g.jb = function(a, c) {
  return c ? a.replace(l.i18n.g.fl, "") : a;
};
l.i18n.g.om = new RegExp("[" + l.i18n.g.Wb + "]");
l.i18n.g.Ll = new RegExp("[" + l.i18n.g.Sb + "]");
l.i18n.g.ad = function(a, c) {
  return l.i18n.g.om.test(l.i18n.g.jb(a, c));
};
l.i18n.g.lu = l.i18n.g.ad;
l.i18n.g.Og = function(a, c) {
  return l.i18n.g.Ll.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Ol = new RegExp("^[" + l.i18n.g.Sb + "]");
l.i18n.g.tm = new RegExp("^[" + l.i18n.g.Wb + "]");
l.i18n.g.zl = function(a) {
  return l.i18n.g.tm.test(a);
};
l.i18n.g.tl = function(a) {
  return l.i18n.g.Ol.test(a);
};
l.i18n.g.Iu = function(a) {
  return !l.i18n.g.tl(a) && !l.i18n.g.zl(a);
};
l.i18n.g.Ml = new RegExp("^[^" + l.i18n.g.Wb + "]*[" + l.i18n.g.Sb + "]");
l.i18n.g.qm = new RegExp("^[^" + l.i18n.g.Sb + "]*[" + l.i18n.g.Wb + "]");
l.i18n.g.Rh = function(a, c) {
  return l.i18n.g.qm.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Ou = l.i18n.g.Rh;
l.i18n.g.Tm = function(a, c) {
  return l.i18n.g.Ml.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Gu = l.i18n.g.Tm;
l.i18n.g.hh = /^http:\/\/.*/;
l.i18n.g.Ju = function(a, c) {
  a = l.i18n.g.jb(a, c);
  return l.i18n.g.hh.test(a) || !l.i18n.g.Og(a) && !l.i18n.g.ad(a);
};
l.i18n.g.Nl = new RegExp("[" + l.i18n.g.Sb + "][^" + l.i18n.g.Wb + "]*$");
l.i18n.g.rm = new RegExp("[" + l.i18n.g.Wb + "][^" + l.i18n.g.Sb + "]*$");
l.i18n.g.lk = function(a, c) {
  return l.i18n.g.Nl.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Fu = l.i18n.g.lk;
l.i18n.g.mk = function(a, c) {
  return l.i18n.g.rm.test(l.i18n.g.jb(a, c));
};
l.i18n.g.Mu = l.i18n.g.mk;
l.i18n.g.sm = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
l.i18n.g.Nu = function(a) {
  return l.i18n.g.sm.test(a);
};
l.i18n.g.bg = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(&lt;.*?(&gt;)+)/g;
l.i18n.g.Mj = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
l.i18n.g.ju = function(a, c) {
  return (void 0 === c ? l.i18n.g.ad(a) : c) ? a.replace(l.i18n.g.bg, "<span dir=rtl>$&</span>") : a.replace(l.i18n.g.bg, "<span dir=ltr>$&</span>");
};
l.i18n.g.ku = function(a, c) {
  var d = (void 0 === c ? l.i18n.g.ad(a) : c) ? l.i18n.g.Fb.bj : l.i18n.g.Fb.Hi;
  return a.replace(l.i18n.g.Mj, d + "$&" + d);
};
l.i18n.g.Ht = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a + "</span>";
};
l.i18n.g.It = function(a) {
  return l.i18n.g.Fb.aj + a + l.i18n.g.Fb.Lf;
};
l.i18n.g.Ft = function(a) {
  return "<" == a.charAt(0) ? a.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a + "</span>";
};
l.i18n.g.Gt = function(a) {
  return l.i18n.g.Fb.Gi + a + l.i18n.g.Fb.Lf;
};
l.i18n.g.dk = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
l.i18n.g.Fl = /left/gi;
l.i18n.g.nm = /right/gi;
l.i18n.g.Wm = /%%%%/g;
l.i18n.g.ev = function(a) {
  return a.replace(l.i18n.g.dk, ":$1 $4 $3 $2").replace(l.i18n.g.Fl, "%%%%").replace(l.i18n.g.nm, l.i18n.g.cc).replace(l.i18n.g.Wm, l.i18n.g.dc);
};
l.i18n.g.kk = /([\u0591-\u05f2])"/g;
l.i18n.g.Rm = /([\u0591-\u05f2])'/g;
l.i18n.g.jv = function(a) {
  return a.replace(l.i18n.g.kk, "$1\u05f4").replace(l.i18n.g.Rm, "$1\u05f3");
};
l.i18n.g.jn = /\s+/;
l.i18n.g.al = /[\d\u06f0-\u06f9]/;
l.i18n.g.pm = .4;
l.i18n.g.rg = function(a, c) {
  for (var d = 0, e = 0, f = !1, g = l.i18n.g.jb(a, c).split(l.i18n.g.jn), h = 0;h < g.length;h++) {
    var k = g[h];
    l.i18n.g.Rh(k) ? (d++, e++) : l.i18n.g.hh.test(k) ? f = !0 : l.i18n.g.Og(k) ? e++ : l.i18n.g.al.test(k) && (f = !0);
  }
  return 0 == e ? f ? l.i18n.g.T.mb : l.i18n.g.T.Pa : d / e > l.i18n.g.pm ? l.i18n.g.T.ob : l.i18n.g.T.mb;
};
l.i18n.g.Bt = function(a, c) {
  return l.i18n.g.rg(a, c) == l.i18n.g.T.ob;
};
l.i18n.g.Nv = function(a, c) {
  a && (c = l.i18n.g.Zm(c)) && (a.style.textAlign = c == l.i18n.g.T.ob ? l.i18n.g.dc : l.i18n.g.cc, a.dir = c == l.i18n.g.T.ob ? "rtl" : "ltr");
};
l.i18n.g.Ov = function(a, c) {
  switch(l.i18n.g.rg(c)) {
    case l.i18n.g.T.mb:
      a.dir = "ltr";
      break;
    case l.i18n.g.T.ob:
      a.dir = "rtl";
      break;
    default:
      a.removeAttribute("dir");
  }
};
l.i18n.g.Vo = function() {
};
l.f.ns = function() {
};
l.f.S = function() {
  this.rd = "";
  this.lj = l.f.S.Tf;
};
l.f.S.prototype.Wa = !0;
l.f.S.prototype.La = function() {
  return this.rd;
};
l.f.S.prototype.toString = function() {
  return "Const{" + this.rd + "}";
};
l.f.S.P = function(a) {
  if (a instanceof l.f.S && a.constructor === l.f.S && a.lj === l.f.S.Tf) {
    return a.rd;
  }
  l.l.ra("expected object of type Const, got '" + a + "'");
  return "type_error:Const";
};
l.f.S.ie = function(a) {
  return l.f.S.Zj(a);
};
l.f.S.Tf = {};
l.f.S.Zj = function(a) {
  var c = new l.f.S;
  c.rd = a;
  return c;
};
l.b = {};
l.b.I = function() {
  this.ld = "";
  this.dj = l.b.I.fa;
};
l.b.I.prototype.Wa = !0;
l.b.I.fa = {};
l.b.I.pc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.I.EMPTY : l.b.I.jc(a);
};
l.b.I.et = function() {
};
l.b.I.prototype.La = function() {
  return this.ld;
};
l.oa && (l.b.I.prototype.toString = function() {
  return "SafeStyle{" + this.ld + "}";
});
l.b.I.P = function(a) {
  if (a instanceof l.b.I && a.constructor === l.b.I && a.dj === l.b.I.fa) {
    return a.ld;
  }
  l.l.ra("expected object of type SafeStyle, got '" + a + "'");
  return "type_error:SafeStyle";
};
l.b.I.jc = function(a) {
  return (new l.b.I).xb(a);
};
l.b.I.prototype.xb = function(a) {
  this.ld = a;
  return this;
};
l.b.I.EMPTY = l.b.I.jc("");
l.b.I.Gb = "zClosurez";
l.b.I.create = function(a) {
  var c = "", d;
  for (d in a) {
    if (!/^[-_a-zA-Z0-9]+$/.test(d)) {
      throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
    }
    var e = a[d];
    null != e && (e instanceof l.f.S ? e = l.f.S.P(e) : l.b.I.xj.test(e) ? l.b.I.Vk(e) || (l.l.ra("String value requires balanced quotes, got: " + e), e = l.b.I.Gb) : (l.l.ra("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + e), e = l.b.I.Gb), c += d + ":" + e + ";");
  }
  return c ? l.b.I.jc(c) : l.b.I.EMPTY;
};
l.b.I.Vk = function(a) {
  for (var c = !0, d = !0, e = 0;e < a.length;e++) {
    var f = a.charAt(e);
    "'" == f && d ? c = !c : '"' == f && c && (d = !d);
  }
  return c && d;
};
l.b.I.xj = /^[-,."'%_!# a-zA-Z0-9]+$/;
l.b.I.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.c.forEach(a, d) : c += l.b.I.P(a);
  };
  l.c.forEach(arguments, d);
  return c ? l.b.I.jc(c) : l.b.I.EMPTY;
};
l.b.U = function() {
  this.kd = "";
  this.Pd = l.b.U.fa;
};
l.b.U.prototype.Wa = !0;
l.b.U.fa = {};
l.b.U.concat = function(a) {
  var c = "", d = function(a) {
    l.isArray(a) ? l.c.forEach(a, d) : c += l.b.U.P(a);
  };
  l.c.forEach(arguments, d);
  return l.b.U.Rc(c);
};
l.b.U.pc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.U.EMPTY : l.b.U.Rc(a);
};
l.b.U.prototype.La = function() {
  return this.kd;
};
l.oa && (l.b.U.prototype.toString = function() {
  return "SafeStyleSheet{" + this.kd + "}";
});
l.b.U.P = function(a) {
  if (a instanceof l.b.U && a.constructor === l.b.U && a.Pd === l.b.U.fa) {
    return a.kd;
  }
  l.l.ra("expected object of type SafeStyleSheet, got '" + a + "'");
  return "type_error:SafeStyleSheet";
};
l.b.U.Rc = function(a) {
  return (new l.b.U).xb(a);
};
l.b.U.prototype.xb = function(a) {
  this.kd = a;
  return this;
};
l.b.U.EMPTY = l.b.U.Rc("");
l.Da = {};
l.Da.url = {};
l.Da.url.Wj = function(a) {
  return l.Da.url.Ng().createObjectURL(a);
};
l.Da.url.Dv = function(a) {
  l.Da.url.Ng().revokeObjectURL(a);
};
l.Da.url.Ng = function() {
  var a = l.Da.url.vg();
  if (null != a) {
    return a;
  }
  throw Error("This browser doesn't seem to support blob URLs");
};
l.Da.url.vg = function() {
  return l.ka(l.global.URL) && l.ka(l.global.URL.createObjectURL) ? l.global.URL : l.ka(l.global.webkitURL) && l.ka(l.global.webkitURL.createObjectURL) ? l.global.webkitURL : l.ka(l.global.createObjectURL) ? l.global : null;
};
l.Da.url.Ss = function() {
  return null != l.Da.url.vg();
};
l.b.J = function() {
  this.Za = "";
  this.fj = l.b.J.fa;
};
l.b.J.Gb = "about:invalid#zClosurez";
l.b.J.prototype.Wa = !0;
l.b.J.prototype.La = function() {
  return this.Za;
};
l.b.J.prototype.we = !0;
l.b.J.prototype.ub = function() {
  return l.i18n.g.T.mb;
};
l.oa && (l.b.J.prototype.toString = function() {
  return "SafeUrl{" + this.Za + "}";
});
l.b.J.P = function(a) {
  if (a instanceof l.b.J && a.constructor === l.b.J && a.fj === l.b.J.fa) {
    return a.Za;
  }
  l.l.ra("expected object of type SafeUrl, got '" + a + "'");
  return "type_error:SafeUrl";
};
l.b.J.pc = function(a) {
  return l.b.J.kc(l.f.S.P(a));
};
l.b.Pf = /^(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm))$/i;
l.b.J.Rt = function(a) {
  a = l.b.Pf.test(a.type) ? l.Da.url.Wj(a) : l.b.J.Gb;
  return l.b.J.kc(a);
};
l.b.gi = /^data:([^;,]*);base64,[a-z0-9+\/]+=*$/i;
l.b.J.St = function(a) {
  var c = a.match(l.b.gi), c = c && l.b.Pf.test(c[1]);
  return l.b.J.kc(c ? a : l.b.J.Gb);
};
l.b.ej = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;
l.b.J.Mh = function(a) {
  if (a instanceof l.b.J) {
    return a;
  }
  a = a.Wa ? a.La() : String(a);
  l.b.ej.test(a) || (a = l.b.J.Gb);
  return l.b.J.kc(a);
};
l.b.J.fa = {};
l.b.J.kc = function(a) {
  var c = new l.b.J;
  c.Za = a;
  return c;
};
l.b.ba = function() {
  this.md = "";
  this.nj = l.b.ba.fa;
};
l.b.ba.prototype.Wa = !0;
l.b.ba.prototype.La = function() {
  return this.md;
};
l.b.ba.prototype.we = !0;
l.b.ba.prototype.ub = function() {
  return l.i18n.g.T.mb;
};
l.oa && (l.b.ba.prototype.toString = function() {
  return "TrustedResourceUrl{" + this.md + "}";
});
l.b.ba.P = function(a) {
  if (a instanceof l.b.ba && a.constructor === l.b.ba && a.nj === l.b.ba.fa) {
    return a.md;
  }
  l.l.ra("expected object of type TrustedResourceUrl, got '" + a + "'");
  return "type_error:TrustedResourceUrl";
};
l.b.ba.pc = function(a) {
  return l.b.ba.jg(l.f.S.P(a));
};
l.b.ba.fa = {};
l.b.ba.jg = function(a) {
  var c = new l.b.ba;
  c.md = a;
  return c;
};
l.b.s = function() {
  this.Za = "";
  this.cj = l.b.s.fa;
  this.Uc = null;
};
l.b.s.prototype.we = !0;
l.b.s.prototype.ub = function() {
  return this.Uc;
};
l.b.s.prototype.Wa = !0;
l.b.s.prototype.La = function() {
  return this.Za;
};
l.oa && (l.b.s.prototype.toString = function() {
  return "SafeHtml{" + this.Za + "}";
});
l.b.s.P = function(a) {
  if (a instanceof l.b.s && a.constructor === l.b.s && a.cj === l.b.s.fa) {
    return a.Za;
  }
  l.l.ra("expected object of type SafeHtml, got '" + a + "'");
  return "type_error:SafeHtml";
};
l.b.s.Va = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  var c = null;
  a.we && (c = a.ub());
  return l.b.s.Sa(l.f.Va(a.Wa ? a.La() : String(a)), c);
};
l.b.s.ou = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Va(a);
  return l.b.s.Sa(l.f.xh(l.b.s.P(a)), a.ub());
};
l.b.s.ve = function(a) {
  if (a instanceof l.b.s) {
    return a;
  }
  a = l.b.s.Va(a);
  return l.b.s.Sa(l.f.hn(l.b.s.P(a)), a.ub());
};
l.b.s.ie = l.b.s.Va;
l.b.s.Uf = /^[a-zA-Z0-9-]+$/;
l.b.s.pj = {action:!0, cite:!0, data:!0, formaction:!0, href:!0, manifest:!0, poster:!0, src:!0};
l.b.s.Ni = l.object.ae(l.ja.pb.EMBED, l.ja.pb.IFRAME, l.ja.pb.Ei, l.ja.pb.OBJECT, l.ja.pb.SCRIPT, l.ja.pb.STYLE, l.ja.pb.mj);
l.b.s.create = function(a, c, d) {
  if (!l.b.s.Uf.test(a)) {
    throw Error("Invalid tag name <" + a + ">.");
  }
  if (a.toUpperCase() in l.b.s.Ni) {
    throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
  }
  return l.b.s.Zd(a, c, d);
};
l.b.s.tt = function(a, c, d, e) {
  var f = {};
  f.src = a || null;
  f.srcdoc = c || null;
  a = l.b.s.fg(f, {sandbox:""}, d);
  return l.b.s.Zd("iframe", a, e);
};
l.b.s.vt = function(a, c) {
  var d = l.b.s.fg({type:"text/css"}, {}, c), e = "";
  a = l.c.concat(a);
  for (var f = 0;f < a.length;f++) {
    e += l.b.U.P(a[f]);
  }
  e = l.b.s.Sa(e, l.i18n.g.T.Pa);
  return l.b.s.Zd("style", d, e);
};
l.b.s.wk = function(a, c, d) {
  if (d instanceof l.f.S) {
    d = l.f.S.P(d);
  } else {
    if ("style" == c.toLowerCase()) {
      d = l.b.s.Ok(d);
    } else {
      if (/^on/i.test(c)) {
        throw Error('Attribute "' + c + '" requires goog.string.Const value, "' + d + '" given.');
      }
      if (c.toLowerCase() in l.b.s.pj) {
        if (d instanceof l.b.ba) {
          d = l.b.ba.P(d);
        } else {
          if (d instanceof l.b.J) {
            d = l.b.J.P(d);
          } else {
            if (l.G(d)) {
              d = l.b.J.Mh(d).La();
            } else {
              throw Error('Attribute "' + c + '" on tag "' + a + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + d + '" given.');
            }
          }
        }
      }
    }
  }
  d.Wa && (d = d.La());
  return c + '="' + l.f.Va(String(d)) + '"';
};
l.b.s.Ok = function(a) {
  if (!l.Rb(a)) {
    throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a + " given: " + a);
  }
  a instanceof l.b.I || (a = l.b.I.create(a));
  return l.b.I.P(a);
};
l.b.s.xt = function(a, c, d, e) {
  c = l.b.s.create(c, d, e);
  c.Uc = a;
  return c;
};
l.b.s.concat = function(a) {
  var c = l.i18n.g.T.Pa, d = "", e = function(a) {
    l.isArray(a) ? l.c.forEach(a, e) : (a = l.b.s.Va(a), d += l.b.s.P(a), a = a.ub(), c == l.i18n.g.T.Pa ? c = a : a != l.i18n.g.T.Pa && c != a && (c = null));
  };
  l.c.forEach(arguments, e);
  return l.b.s.Sa(d, c);
};
l.b.s.pt = function(a, c) {
  var d = l.b.s.concat(l.c.slice(arguments, 1));
  d.Uc = a;
  return d;
};
l.b.s.fa = {};
l.b.s.Sa = function(a, c) {
  return (new l.b.s).xb(a, c);
};
l.b.s.prototype.xb = function(a, c) {
  this.Za = a;
  this.Uc = c;
  return this;
};
l.b.s.Zd = function(a, c, d) {
  var e = null, f = "<" + a;
  if (c) {
    for (var g in c) {
      if (!l.b.s.Uf.test(g)) {
        throw Error('Invalid attribute name "' + g + '".');
      }
      var h = c[g];
      l.dd(h) && (f += " " + l.b.s.wk(a, g, h));
    }
  }
  l.dd(d) ? l.isArray(d) || (d = [d]) : d = [];
  l.ja.tags.Dl(a.toLowerCase()) ? f += ">" : (e = l.b.s.concat(d), f += ">" + l.b.s.P(e) + "</" + a + ">", e = e.ub());
  (a = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(a) ? l.i18n.g.T.Pa : null);
  return l.b.s.Sa(f, e);
};
l.b.s.fg = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = a[f];
  }
  for (f in c) {
    e[f] = c[f];
  }
  for (f in d) {
    var g = f.toLowerCase();
    if (g in a) {
      throw Error('Cannot override "' + g + '" attribute, got "' + f + '" with value "' + d[f] + '"');
    }
    g in c && delete e[g];
    e[f] = d[f];
  }
  return e;
};
l.b.s.Bo = l.b.s.Sa("<!DOCTYPE html>", l.i18n.g.T.Pa);
l.b.s.EMPTY = l.b.s.Sa("", l.i18n.g.T.Pa);
l.b.aa = function() {
  this.jd = "";
  this.Pd = l.b.aa.fa;
};
l.b.aa.prototype.Wa = !0;
l.b.aa.fa = {};
l.b.aa.pc = function(a) {
  a = l.f.S.P(a);
  return 0 === a.length ? l.b.aa.EMPTY : l.b.aa.$d(a);
};
l.b.aa.prototype.La = function() {
  return this.jd;
};
l.oa && (l.b.aa.prototype.toString = function() {
  return "SafeScript{" + this.jd + "}";
});
l.b.aa.P = function(a) {
  if (a instanceof l.b.aa && a.constructor === l.b.aa && a.Pd === l.b.aa.fa) {
    return a.jd;
  }
  l.l.ra("expected object of type SafeScript, got '" + a + "'");
  return "type_error:SafeScript";
};
l.b.aa.$d = function(a) {
  return (new l.b.aa).xb(a);
};
l.b.aa.prototype.xb = function(a) {
  this.jd = a;
  return this;
};
l.b.aa.EMPTY = l.b.aa.$d("");
l.b.Eb = {};
l.b.Eb.Iv = function(a, c, d) {
  return l.b.s.Sa(c, d || null);
};
l.b.Eb.Jv = function(a, c) {
  return l.b.aa.$d(c);
};
l.b.Eb.Kv = function(a, c) {
  return l.b.I.jc(c);
};
l.b.Eb.Lv = function(a, c) {
  return l.b.U.Rc(c);
};
l.b.Eb.um = function(a, c) {
  return l.b.J.kc(c);
};
l.b.Eb.lw = function(a, c) {
  return l.b.ba.jg(c);
};
l.A = {};
l.A.oo = function() {
};
l.M = {};
l.M.hc = function(a) {
  return function() {
    return a;
  };
};
l.M.ep = l.M.hc(!1);
l.M.ls = l.M.hc(!0);
l.M.Uq = l.M.hc(null);
l.M.identity = function(a) {
  return a;
};
l.M.error = function(a) {
  return function() {
    throw Error(a);
  };
};
l.M.ra = function(a) {
  return function() {
    throw a;
  };
};
l.M.Zu = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
l.M.nv = function(a) {
  return function() {
    return arguments[a];
  };
};
l.M.uw = function(a, c) {
  return l.M.Jm(a, l.M.hc(c));
};
l.M.Kt = function(a, c) {
  return function(d) {
    return c ? a == d : a === d;
  };
};
l.M.nt = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
l.M.Jm = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
l.M.Bs = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return !1;
      }
    }
    return !0;
  };
};
l.M.rv = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return !0;
      }
    }
    return !1;
  };
};
l.M.am = function(a) {
  return function() {
    return !a.apply(this, arguments);
  };
};
l.M.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
l.M.ci = !0;
l.M.Vs = function(a) {
  var c = !1, d;
  return function() {
    if (!l.M.ci) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
l.M.qv = function(a) {
  var c = a;
  return function() {
    if (c) {
      var a = c;
      c = null;
      a();
    }
  };
};
l.H = {};
l.H.xv = function(a) {
  return Math.floor(Math.random() * a);
};
l.H.nw = function(a, c) {
  return a + Math.random() * (c - a);
};
l.H.ft = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
l.H.vh = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
l.H.Vu = function(a, c, d) {
  return a + d * (c - a);
};
l.H.iv = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
l.H.Ze = function(a) {
  return l.H.vh(a, 360);
};
l.H.Zv = function(a) {
  return l.H.vh(a, 2 * Math.PI);
};
l.H.Uh = function(a) {
  return a * Math.PI / 180;
};
l.H.Ym = function(a) {
  return 180 * a / Math.PI;
};
l.H.Es = function(a, c) {
  return c * Math.cos(l.H.Uh(a));
};
l.H.Fs = function(a, c) {
  return c * Math.sin(l.H.Uh(a));
};
l.H.Cs = function(a, c, d, e) {
  return l.H.Ze(l.H.Ym(Math.atan2(e - c, d - a)));
};
l.H.Ds = function(a, c) {
  var d = l.H.Ze(c) - l.H.Ze(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
l.H.sign = Math.sign || function(a) {
  return 0 < a ? 1 : 0 > a ? -1 : a;
};
l.H.bv = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, h = [], k = 0;k < f + 1;k++) {
    h[k] = [], h[k][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    h[0][n] = 0;
  }
  for (k = 1;k <= f;k++) {
    for (n = 1;n <= g;n++) {
      d(a[k - 1], c[n - 1]) ? h[k][n] = h[k - 1][n - 1] + 1 : h[k][n] = Math.max(h[k - 1][n], h[k][n - 1]);
    }
  }
  for (var t = [], k = f, n = g;0 < k && 0 < n;) {
    d(a[k - 1], c[n - 1]) ? (t.unshift(e(k - 1, n - 1)), k--, n--) : h[k - 1][n] > h[k][n - 1] ? k-- : n--;
  }
  return t;
};
l.H.Sh = function(a) {
  return l.c.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
l.H.Gj = function(a) {
  return l.H.Sh.apply(null, arguments) / arguments.length;
};
l.H.vm = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = l.H.Gj.apply(null, arguments);
  return l.H.Sh.apply(null, l.c.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
l.H.$v = function(a) {
  return Math.sqrt(l.H.vm.apply(null, arguments));
};
l.H.Cu = function(a) {
  return isFinite(a) && 0 == a % 1;
};
l.H.Au = function(a) {
  return isFinite(a) && !isNaN(a);
};
l.H.Hu = function(a) {
  return 0 == a && 0 > 1 / a;
};
l.H.$u = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
l.H.Hv = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
l.H.Gv = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
l.j = {};
l.j.ea = "StopIteration" in l.global ? l.global.StopIteration : {message:"StopIteration", stack:""};
l.j.Iterator = function() {
};
l.j.Iterator.prototype.next = function() {
  throw l.j.ea;
};
l.j.Iterator.prototype.ec = function() {
  return this;
};
l.j.X = function(a) {
  if (a instanceof l.j.Iterator) {
    return a;
  }
  if ("function" == typeof a.ec) {
    return a.ec(!1);
  }
  if (l.W(a)) {
    var c = 0, d = new l.j.Iterator;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw l.j.ea;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
l.j.forEach = function(a, c, d) {
  if (l.W(a)) {
    try {
      l.c.forEach(a, c, d);
    } catch (e) {
      if (e !== l.j.ea) {
        throw e;
      }
    }
  } else {
    a = l.j.X(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== l.j.ea) {
        throw f;
      }
    }
  }
};
l.j.filter = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
l.j.Nt = function(a, c, d) {
  return l.j.filter(a, l.M.am(c), d);
};
l.j.od = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var h = new l.j.Iterator;
  h.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw l.j.ea;
    }
    var a = e;
    e += g;
    return a;
  };
  return h;
};
l.j.join = function(a, c) {
  return l.j.kb(a).join(c);
};
l.j.map = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
l.j.reduce = function(a, c, d, e) {
  var f = d;
  l.j.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
l.j.some = function(a, c, d) {
  a = l.j.X(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return !0;
      }
    }
  } catch (e) {
    if (e !== l.j.ea) {
      throw e;
    }
  }
  return !1;
};
l.j.every = function(a, c, d) {
  a = l.j.X(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return !1;
      }
    }
  } catch (e) {
    if (e !== l.j.ea) {
      throw e;
    }
  }
  return !0;
};
l.j.dt = function(a) {
  return l.j.Rj(arguments);
};
l.j.Rj = function(a) {
  var c = l.j.X(a);
  a = new l.j.Iterator;
  var d = null;
  a.next = function() {
    for (;;) {
      if (null == d) {
        var a = c.next();
        d = l.j.X(a);
      }
      try {
        return d.next();
      } catch (f) {
        if (f !== l.j.ea) {
          throw f;
        }
        d = null;
      }
    }
  };
  return a;
};
l.j.Ct = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
l.j.fw = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = e.next();
    if (c.call(d, a, void 0, e)) {
      return a;
    }
    throw l.j.ea;
  };
  return a;
};
l.j.kb = function(a) {
  if (l.W(a)) {
    return l.c.kb(a);
  }
  a = l.j.X(a);
  var c = [];
  l.j.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
l.j.qa = function(a, c, d) {
  a = l.j.nn({}, a, c);
  var e = d || l.c.ng;
  return l.j.every(a, function(a) {
    return e(a[0], a[1]);
  });
};
l.j.Yl = function(a, c) {
  try {
    return l.j.X(a).next();
  } catch (d) {
    if (d != l.j.ea) {
      throw d;
    }
    return c;
  }
};
l.j.product = function(a) {
  if (l.c.some(arguments, function(a) {
    return !a.length;
  }) || !arguments.length) {
    return new l.j.Iterator;
  }
  var c = new l.j.Iterator, d = arguments, e = l.c.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = l.c.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw l.j.ea;
  };
  return c;
};
l.j.yt = function(a) {
  var c = l.j.X(a), d = [], e = 0;
  a = new l.j.Iterator;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (h) {
        if (h != l.j.ea || l.c.wa(d)) {
          throw h;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
l.j.count = function(a, c) {
  var d = a || 0, e = l.ka(c) ? c : 1, f = new l.j.Iterator;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
l.j.repeat = function(a) {
  var c = new l.j.Iterator;
  c.next = l.M.hc(a);
  return c;
};
l.j.zs = function(a) {
  var c = l.j.X(a), d = 0;
  a = new l.j.Iterator;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
l.j.$h = function(a) {
  var c = arguments, d = new l.j.Iterator;
  if (0 < c.length) {
    var e = l.c.map(c, l.j.X);
    d.next = function() {
      return l.c.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
l.j.nn = function(a, c) {
  var d = l.c.slice(arguments, 1), e = new l.j.Iterator;
  if (0 < d.length) {
    var f = l.c.map(d, l.j.X);
    e.next = function() {
      var c = !1, d = l.c.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== l.j.ea) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw l.j.ea;
      }
      return d;
    };
  }
  return e;
};
l.j.ot = function(a, c) {
  var d = l.j.X(c);
  return l.j.filter(a, function() {
    return !!d.next();
  });
};
l.j.Lc = function(a, c) {
  this.iterator = l.j.X(a);
  this.nh = c || l.M.identity;
};
l.wb(l.j.Lc, l.j.Iterator);
l.j.Lc.prototype.next = function() {
  for (;this.lc == this.Th;) {
    this.Sc = this.iterator.next(), this.lc = this.nh(this.Sc);
  }
  this.Th = this.lc;
  return [this.lc, this.Uk(this.Th)];
};
l.j.Lc.prototype.Uk = function(a) {
  for (var c = [];this.lc == a;) {
    c.push(this.Sc);
    try {
      this.Sc = this.iterator.next();
    } catch (d) {
      if (d !== l.j.ea) {
        throw d;
      }
      break;
    }
    this.lc = this.nh(this.Sc);
  }
  return c;
};
l.j.iu = function(a, c) {
  return new l.j.Lc(a, c);
};
l.j.aw = function(a, c, d) {
  var e = l.j.X(a);
  a = new l.j.Iterator;
  a.next = function() {
    var a = l.j.kb(e.next());
    return c.apply(d, l.c.concat(a, void 0, e));
  };
  return a;
};
l.j.tee = function(a, c) {
  var d = l.j.X(a), e = l.c.map(l.c.od(l.xc(c) ? c : 2), function() {
    return [];
  }), f = function() {
    var a = d.next();
    l.c.forEach(e, function(c) {
      c.push(a);
    });
  };
  return l.c.map(e, function(a) {
    var c = new l.j.Iterator;
    c.next = function() {
      l.c.wa(a) && f();
      return a.shift();
    };
    return c;
  });
};
l.j.Jt = function(a, c) {
  return l.j.$h(l.j.count(c), a);
};
l.j.limit = function(a, c) {
  var d = l.j.X(a), e = new l.j.Iterator, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw l.j.ea;
  };
  return e;
};
l.j.Uj = function(a, c) {
  for (var d = l.j.X(a);0 < c--;) {
    l.j.Yl(d, null);
  }
  return d;
};
l.j.slice = function(a, c, d) {
  a = l.j.Uj(a, c);
  l.xc(d) && (a = l.j.limit(a, d - c));
  return a;
};
l.j.Wk = function(a) {
  var c = [];
  l.c.km(a, c);
  return a.length != c.length;
};
l.j.im = function(a, c) {
  var d = l.j.kb(a), d = l.c.repeat(d, l.xc(c) ? c : d.length), d = l.j.product.apply(void 0, d);
  return l.j.filter(d, function(a) {
    return !l.j.Wk(a);
  });
};
l.j.kt = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.kb(a), f = l.j.od(e.length), f = l.j.im(f, c), g = l.j.filter(f, function(a) {
    return l.c.jh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.c.map(g.next(), d);
  };
  return f;
};
l.j.lt = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.j.kb(a), f = l.c.od(e.length), f = l.c.repeat(f, c), f = l.j.product.apply(void 0, f), g = l.j.filter(f, function(a) {
    return l.c.jh(a);
  }), f = new l.j.Iterator;
  f.next = function() {
    return l.c.map(g.next(), d);
  };
  return f;
};
l.A.Map = function(a, c) {
  this.N = {};
  this.R = [];
  this.Fc = this.Ra = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
b = l.A.Map.prototype;
b.va = function() {
  return this.Ra;
};
b.V = function() {
  this.Ib();
  for (var a = [], c = 0;c < this.R.length;c++) {
    a.push(this.N[this.R[c]]);
  }
  return a;
};
b.na = function() {
  this.Ib();
  return this.R.concat();
};
b.Jb = function(a) {
  return l.A.Map.vb(this.N, a);
};
b.ic = function(a) {
  for (var c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    if (l.A.Map.vb(this.N, d) && this.N[d] == a) {
      return !0;
    }
  }
  return !1;
};
b.qa = function(a, c) {
  if (this === a) {
    return !0;
  }
  if (this.Ra != a.va()) {
    return !1;
  }
  var d = c || l.A.Map.ak;
  this.Ib();
  for (var e, f = 0;e = this.R[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return !1;
    }
  }
  return !0;
};
l.A.Map.ak = function(a, c) {
  return a === c;
};
b = l.A.Map.prototype;
b.wa = function() {
  return 0 == this.Ra;
};
b.clear = function() {
  this.N = {};
  this.Fc = this.Ra = this.R.length = 0;
};
b.remove = function(a) {
  return l.A.Map.vb(this.N, a) ? (delete this.N[a], this.Ra--, this.Fc++, this.R.length > 2 * this.Ra && this.Ib(), !0) : !1;
};
b.Ib = function() {
  if (this.Ra != this.R.length) {
    for (var a = 0, c = 0;a < this.R.length;) {
      var d = this.R[a];
      l.A.Map.vb(this.N, d) && (this.R[c++] = d);
      a++;
    }
    this.R.length = c;
  }
  if (this.Ra != this.R.length) {
    for (var e = {}, c = a = 0;a < this.R.length;) {
      d = this.R[a], l.A.Map.vb(e, d) || (this.R[c++] = d, e[d] = 1), a++;
    }
    this.R.length = c;
  }
};
b.get = function(a, c) {
  return l.A.Map.vb(this.N, a) ? this.N[a] : c;
};
b.set = function(a, c) {
  l.A.Map.vb(this.N, a) || (this.Ra++, this.R.push(a), this.Fc++);
  this.N[a] = c;
};
b.addAll = function(a) {
  var c;
  a instanceof l.A.Map ? (c = a.na(), a = a.V()) : (c = l.object.na(a), a = l.object.V(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.na(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new l.A.Map(this);
};
b.an = function() {
  for (var a = new l.A.Map, c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    a.set(this.N[d], d);
  }
  return a;
};
b.$m = function() {
  this.Ib();
  for (var a = {}, c = 0;c < this.R.length;c++) {
    var d = this.R[c];
    a[d] = this.N[d];
  }
  return a;
};
b.ec = function(a) {
  this.Ib();
  var c = 0, d = this.Fc, e = this, f = new l.j.Iterator;
  f.next = function() {
    if (d != e.Fc) {
      throw Error("The map has changed since the iterator was created");
    }
    if (c >= e.R.length) {
      throw l.j.ea;
    }
    var f = e.R[c++];
    return a ? f : e.N[f];
  };
  return f;
};
l.A.Map.vb = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
l.A.va = function(a) {
  return "function" == typeof a.va ? a.va() : l.W(a) || l.G(a) ? a.length : l.object.va(a);
};
l.A.V = function(a) {
  if ("function" == typeof a.V) {
    return a.V();
  }
  if (l.G(a)) {
    return a.split("");
  }
  if (l.W(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return l.object.V(a);
};
l.A.na = function(a) {
  if ("function" == typeof a.na) {
    return a.na();
  }
  if ("function" != typeof a.V) {
    if (l.W(a) || l.G(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return l.object.na(a);
  }
};
l.A.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.ic ? a.ic(c) : l.W(a) || l.G(a) ? l.c.contains(a, c) : l.object.ic(a, c);
};
l.A.wa = function(a) {
  return "function" == typeof a.wa ? a.wa() : l.W(a) || l.G(a) ? l.c.wa(a) : l.object.wa(a);
};
l.A.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : l.W(a) ? l.c.clear(a) : l.object.clear(a);
};
l.A.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (l.W(a) || l.G(a)) {
      l.c.forEach(a, c, d);
    } else {
      for (var e = l.A.na(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
        c.call(d, f[h], e && e[h], a);
      }
    }
  }
};
l.A.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.filter(a, c, d);
  }
  var e, f = l.A.na(a), g = l.A.V(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      c.call(d, g[k], f[k], a) && (e[f[k]] = g[k]);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      c.call(d, g[k], void 0, a) && e.push(g[k]);
    }
  }
  return e;
};
l.A.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.map(a, c, d);
  }
  var e, f = l.A.na(a), g = l.A.V(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      e[f[k]] = c.call(d, g[k], f[k], a);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      e[k] = c.call(d, g[k], void 0, a);
    }
  }
  return e;
};
l.A.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.some(a, c, d);
  }
  for (var e = l.A.na(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
    if (c.call(d, f[h], e && e[h], a)) {
      return !0;
    }
  }
  return !1;
};
l.A.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (l.W(a) || l.G(a)) {
    return l.c.every(a, c, d);
  }
  for (var e = l.A.na(a), f = l.A.V(a), g = f.length, h = 0;h < g;h++) {
    if (!c.call(d, f[h], e && e[h], a)) {
      return !1;
    }
  }
  return !0;
};
l.A.Set = function(a) {
  this.N = new l.A.Map;
  a && this.addAll(a);
};
l.A.Set.qe = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + l.sc(a) : c.substr(0, 1) + a;
};
b = l.A.Set.prototype;
b.va = function() {
  return this.N.va();
};
b.add = function(a) {
  this.N.set(l.A.Set.qe(a), a);
};
b.addAll = function(a) {
  a = l.A.V(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = l.A.V(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.N.remove(l.A.Set.qe(a));
};
b.clear = function() {
  this.N.clear();
};
b.wa = function() {
  return this.N.wa();
};
b.contains = function(a) {
  return this.N.Jb(l.A.Set.qe(a));
};
b.V = function() {
  return this.N.V();
};
b.clone = function() {
  return new l.A.Set(this);
};
b.qa = function(a) {
  return this.va() == l.A.va(a) && this.Al(a);
};
b.Al = function(a) {
  var c = l.A.va(a);
  if (this.va() > c) {
    return !1;
  }
  !(a instanceof l.A.Set) && 5 < c && (a = new l.A.Set(a));
  return l.A.every(this, function(c) {
    return l.A.contains(a, c);
  });
};
b.ec = function() {
  return this.N.ec(!1);
};
l.h = {};
l.h.userAgent = {};
l.h.userAgent.C = {};
l.h.userAgent.C.Gg = function() {
  var a = l.h.userAgent.C.Jk();
  return a && (a = a.userAgent) ? a : "";
};
l.h.userAgent.C.Jk = function() {
  return l.global.navigator;
};
l.h.userAgent.C.Xh = l.h.userAgent.C.Gg();
l.h.userAgent.C.Tv = function(a) {
  l.h.userAgent.C.Xh = a || l.h.userAgent.C.Gg();
};
l.h.userAgent.C.Ob = function() {
  return l.h.userAgent.C.Xh;
};
l.h.userAgent.C.K = function(a) {
  return l.f.contains(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.Vl = function(a) {
  return l.f.Qj(l.h.userAgent.C.Ob(), a);
};
l.h.userAgent.C.tg = function(a) {
  for (var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
l.h.userAgent.browser = {};
l.h.userAgent.browser.Le = function() {
  return l.h.userAgent.C.K("Opera") || l.h.userAgent.C.K("OPR");
};
l.h.userAgent.browser.Tl = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.browser.Ke = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.browser.Sl = function() {
  return l.h.userAgent.C.K("Firefox");
};
l.h.userAgent.browser.sh = function() {
  return l.h.userAgent.C.K("Safari") && !(l.h.userAgent.browser.Ie() || l.h.userAgent.browser.Je() || l.h.userAgent.browser.Le() || l.h.userAgent.browser.Ke() || l.h.userAgent.browser.ih() || l.h.userAgent.C.K("Android"));
};
l.h.userAgent.browser.Je = function() {
  return l.h.userAgent.C.K("Coast");
};
l.h.userAgent.browser.Ul = function() {
  return (l.h.userAgent.C.K("iPad") || l.h.userAgent.C.K("iPhone")) && !l.h.userAgent.browser.sh() && !l.h.userAgent.browser.Ie() && !l.h.userAgent.browser.Je() && l.h.userAgent.C.K("AppleWebKit");
};
l.h.userAgent.browser.Ie = function() {
  return (l.h.userAgent.C.K("Chrome") || l.h.userAgent.C.K("CriOS")) && !l.h.userAgent.browser.Le() && !l.h.userAgent.browser.Ke();
};
l.h.userAgent.browser.Rl = function() {
  return l.h.userAgent.C.K("Android") && !(l.h.userAgent.browser.Wg() || l.h.userAgent.browser.ml() || l.h.userAgent.browser.Ce() || l.h.userAgent.browser.ih());
};
l.h.userAgent.browser.Ce = l.h.userAgent.browser.Le;
l.h.userAgent.browser.bh = l.h.userAgent.browser.Tl;
l.h.userAgent.browser.Qb = l.h.userAgent.browser.Ke;
l.h.userAgent.browser.ml = l.h.userAgent.browser.Sl;
l.h.userAgent.browser.Pu = l.h.userAgent.browser.sh;
l.h.userAgent.browser.vu = l.h.userAgent.browser.Je;
l.h.userAgent.browser.Du = l.h.userAgent.browser.Ul;
l.h.userAgent.browser.Wg = l.h.userAgent.browser.Ie;
l.h.userAgent.browser.tu = l.h.userAgent.browser.Rl;
l.h.userAgent.browser.ih = function() {
  return l.h.userAgent.C.K("Silk");
};
l.h.userAgent.browser.tc = function() {
  function a(a) {
    a = l.c.find(a, e);
    return d[a] || "";
  }
  var c = l.h.userAgent.C.Ob();
  if (l.h.userAgent.browser.bh()) {
    return l.h.userAgent.browser.Ek(c);
  }
  var c = l.h.userAgent.C.tg(c), d = {};
  l.c.forEach(c, function(a) {
    d[a[0]] = a[1];
  });
  var e = l.Fh(l.object.Jb, d);
  return l.h.userAgent.browser.Ce() ? a(["Version", "Opera", "OPR"]) : l.h.userAgent.browser.Qb() ? a(["Edge"]) : l.h.userAgent.browser.Wg() ? a(["Chrome", "CriOS"]) : (c = c[2]) && c[1] || "";
};
l.h.userAgent.browser.sa = function(a) {
  return 0 <= l.f.gc(l.h.userAgent.browser.tc(), a);
};
l.h.userAgent.browser.Ek = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
l.h.userAgent.Z = {};
l.h.userAgent.Z.Lu = function() {
  return l.h.userAgent.C.K("Presto");
};
l.h.userAgent.Z.Bl = function() {
  return l.h.userAgent.C.K("Trident") || l.h.userAgent.C.K("MSIE");
};
l.h.userAgent.Z.Qb = function() {
  return l.h.userAgent.C.K("Edge");
};
l.h.userAgent.Z.lh = function() {
  return l.h.userAgent.C.Vl("WebKit") && !l.h.userAgent.Z.Qb();
};
l.h.userAgent.Z.nl = function() {
  return l.h.userAgent.C.K("Gecko") && !l.h.userAgent.Z.lh() && !l.h.userAgent.Z.Bl() && !l.h.userAgent.Z.Qb();
};
l.h.userAgent.Z.tc = function() {
  var a = l.h.userAgent.C.Ob();
  if (a) {
    var a = l.h.userAgent.C.tg(a), c = l.h.userAgent.Z.Bk(a);
    if (c) {
      return "Gecko" == c[0] ? l.h.userAgent.Z.Rk(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
l.h.userAgent.Z.Bk = function(a) {
  if (!l.h.userAgent.Z.Qb()) {
    return a[1];
  }
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    if ("Edge" == d[0]) {
      return d;
    }
  }
};
l.h.userAgent.Z.sa = function(a) {
  return 0 <= l.f.gc(l.h.userAgent.Z.tc(), a);
};
l.h.userAgent.Z.Rk = function(a, c) {
  var d = l.c.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
l.h.userAgent.platform = {};
l.h.userAgent.platform.Ug = function() {
  return l.h.userAgent.C.K("Android");
};
l.h.userAgent.platform.pl = function() {
  return l.h.userAgent.C.K("iPod");
};
l.h.userAgent.platform.fh = function() {
  return l.h.userAgent.C.K("iPhone") && !l.h.userAgent.C.K("iPod") && !l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.eh = function() {
  return l.h.userAgent.C.K("iPad");
};
l.h.userAgent.platform.ol = function() {
  return l.h.userAgent.platform.fh() || l.h.userAgent.platform.eh() || l.h.userAgent.platform.pl();
};
l.h.userAgent.platform.gh = function() {
  return l.h.userAgent.C.K("Macintosh");
};
l.h.userAgent.platform.rl = function() {
  return l.h.userAgent.C.K("Linux");
};
l.h.userAgent.platform.mh = function() {
  return l.h.userAgent.C.K("Windows");
};
l.h.userAgent.platform.Xg = function() {
  return l.h.userAgent.C.K("CrOS");
};
l.h.userAgent.platform.tc = function() {
  var a = l.h.userAgent.C.Ob(), c = "";
  l.h.userAgent.platform.mh() ? (c = /Windows (?:NT|Phone) ([0-9.]+)/, c = (a = c.exec(a)) ? a[1] : "0.0") : l.h.userAgent.platform.ol() ? (c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, c = (a = c.exec(a)) && a[1].replace(/_/g, ".")) : l.h.userAgent.platform.gh() ? (c = /Mac OS X ([0-9_.]+)/, c = (a = c.exec(a)) ? a[1].replace(/_/g, ".") : "10") : l.h.userAgent.platform.Ug() ? (c = /Android\s+([^\);]+)(\)|;)/, c = (a = c.exec(a)) && a[1]) : l.h.userAgent.platform.Xg() && (c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, 
  c = (a = c.exec(a)) && a[1]);
  return c || "";
};
l.h.userAgent.platform.sa = function(a) {
  return 0 <= l.f.gc(l.h.userAgent.platform.tc(), a);
};
l.userAgent = {};
l.userAgent.ff = !1;
l.userAgent.df = !1;
l.userAgent.ef = !1;
l.userAgent.mf = !1;
l.userAgent.ud = !1;
l.userAgent.lf = !1;
l.userAgent.bi = !1;
l.userAgent.Zb = l.userAgent.ff || l.userAgent.df || l.userAgent.ef || l.userAgent.ud || l.userAgent.mf || l.userAgent.lf;
l.userAgent.Qk = function() {
  return l.h.userAgent.C.Ob();
};
l.userAgent.Hg = function() {
  return l.global.navigator || null;
};
l.userAgent.Ld = l.userAgent.Zb ? l.userAgent.lf : l.h.userAgent.browser.Ce();
l.userAgent.Aa = l.userAgent.Zb ? l.userAgent.ff : l.h.userAgent.browser.bh();
l.userAgent.rf = l.userAgent.Zb ? l.userAgent.df : l.h.userAgent.Z.Qb();
l.userAgent.Wo = l.userAgent.rf || l.userAgent.Aa;
l.userAgent.Kc = l.userAgent.Zb ? l.userAgent.ef : l.h.userAgent.Z.nl();
l.userAgent.Qa = l.userAgent.Zb ? l.userAgent.mf || l.userAgent.ud : l.h.userAgent.Z.lh();
l.userAgent.vl = function() {
  return l.userAgent.Qa && l.h.userAgent.C.K("Mobile");
};
l.userAgent.rq = l.userAgent.ud || l.userAgent.vl();
l.userAgent.Dr = l.userAgent.Qa;
l.userAgent.bk = function() {
  var a = l.userAgent.Hg();
  return a && a.platform || "";
};
l.userAgent.gr = l.userAgent.bk();
l.userAgent.kf = !1;
l.userAgent.nf = !1;
l.userAgent.jf = !1;
l.userAgent.of = !1;
l.userAgent.cf = !1;
l.userAgent.hf = !1;
l.userAgent.gf = !1;
l.userAgent.nb = l.userAgent.kf || l.userAgent.nf || l.userAgent.jf || l.userAgent.of || l.userAgent.cf || l.userAgent.hf || l.userAgent.gf;
l.userAgent.hq = l.userAgent.nb ? l.userAgent.kf : l.h.userAgent.platform.gh();
l.userAgent.ws = l.userAgent.nb ? l.userAgent.nf : l.h.userAgent.platform.mh();
l.userAgent.ql = function() {
  return l.h.userAgent.platform.rl() || l.h.userAgent.platform.Xg();
};
l.userAgent.Zp = l.userAgent.nb ? l.userAgent.jf : l.userAgent.ql();
l.userAgent.El = function() {
  var a = l.userAgent.Hg();
  return !!a && l.f.contains(a.appVersion || "", "X11");
};
l.userAgent.xs = l.userAgent.nb ? l.userAgent.of : l.userAgent.El();
l.userAgent.ANDROID = l.userAgent.nb ? l.userAgent.cf : l.h.userAgent.platform.Ug();
l.userAgent.Pp = l.userAgent.nb ? l.userAgent.hf : l.h.userAgent.platform.fh();
l.userAgent.Op = l.userAgent.nb ? l.userAgent.gf : l.h.userAgent.platform.eh();
l.userAgent.ck = function() {
  if (l.userAgent.Ld && l.global.opera) {
    var a = l.global.opera.version;
    return l.Xa(a) ? a() : a;
  }
  var a = "", c = l.userAgent.Sk();
  c && (a = c ? c[1] : "");
  return l.userAgent.Aa && (c = l.userAgent.Bg(), c > parseFloat(a)) ? String(c) : a;
};
l.userAgent.Sk = function() {
  var a = l.userAgent.Qk();
  if (l.userAgent.Kc) {
    return /rv\:([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.rf) {
    return /Edge\/([\d\.]+)/.exec(a);
  }
  if (l.userAgent.Aa) {
    return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
  }
  if (l.userAgent.Qa) {
    return /WebKit\/(\S+)/.exec(a);
  }
};
l.userAgent.Bg = function() {
  var a = l.global.document;
  return a ? a.documentMode : void 0;
};
l.userAgent.VERSION = l.userAgent.ck();
l.userAgent.compare = function(a, c) {
  return l.f.gc(a, c);
};
l.userAgent.kh = {};
l.userAgent.sa = function(a) {
  return l.userAgent.bi || l.userAgent.kh[a] || (l.userAgent.kh[a] = 0 <= l.f.gc(l.userAgent.VERSION, a));
};
l.userAgent.Tu = l.userAgent.sa;
l.userAgent.ze = function(a) {
  return l.userAgent.ji >= a;
};
l.userAgent.xu = l.userAgent.ze;
var m = l.global.document;
l.userAgent.ji = m && l.userAgent.Aa ? l.userAgent.Bg() || ("CSS1Compat" == m.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5) : void 0;
l.debug.Ba = l.oa;
l.debug.ct = function(a, c, d) {
  d = d || l.global;
  var e = d.onerror, f = !!c;
  l.userAgent.Qa && !l.userAgent.sa("535.3") && (f = !f);
  d.onerror = function(c, d, k, n, t) {
    e && e(c, d, k, n, t);
    a({message:c, fileName:d, Gl:k, ht:n, error:t});
    return f;
  };
};
l.debug.nk = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !l.Xa(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (g) {
        f += "*** " + g + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
l.debug.zt = function(a, c) {
  var d = [], e = function(a, g, h) {
    var k = g + "  ";
    h = new l.A.Set(h);
    try {
      if (l.ka(a)) {
        if (l.wl(a)) {
          d.push("NULL");
        } else {
          if (l.G(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
          } else {
            if (l.Xa(a)) {
              d.push(String(a).replace(/\n/g, "\n" + g));
            } else {
              if (l.Rb(a)) {
                if (h.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  h.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !l.Xa(a[n])) {
                      d.push("\n"), d.push(k), d.push(n + " = "), e(a[n], k, h);
                    }
                  }
                  d.push("\n" + g + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (t) {
      d.push("*** " + t + " ***");
    }
  };
  e(a, "", new l.A.Set);
  return d.join("");
};
l.debug.pk = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    l.isArray(a[d]) ? c.push(l.debug.pk(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
l.debug.Mt = function(a, c) {
  var d = l.debug.qk(a, c);
  return l.b.s.P(d);
};
l.debug.qk = function(a, c) {
  try {
    var d = l.debug.$l(a), e = l.debug.Yj(d.fileName);
    return l.b.s.concat(l.b.s.ve("Message: " + d.message + "\nUrl: "), l.b.s.create("a", {href:e, target:"_new"}, d.fileName), l.b.s.ve("\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + d.stack + "-> [end]\n\nJS stack traversal:\n" + l.debug.ue(c) + "-> "));
  } catch (f) {
    return l.b.s.ve("Exception trying to expose exception! You win, we lose. " + f);
  }
};
l.debug.Yj = function(a) {
  l.dd(a) || (a = "");
  if (!/^https?:\/\//i.test(a)) {
    return l.b.J.pc(l.f.S.ie("sanitizedviewsrc"));
  }
  a = l.b.J.Mh(a);
  return l.b.Eb.um(l.f.S.ie("view-source scheme plus HTTP/HTTPS URL"), "view-source:" + l.b.J.P(a));
};
l.debug.$l = function(a) {
  var c = l.Ig("window.location.href");
  if (l.G(a)) {
    return {message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Gl || "Not available";
  } catch (g) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || l.global.$googDebugFname || c;
  } catch (h) {
    e = "Not available", f = !0;
  }
  return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
l.debug.pg = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, l.debug.pg)) : d = a;
  d.stack || (d.stack = l.debug.ue(l.debug.pg));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
l.debug.Nk = function(a) {
  if (l.Rd) {
    var c = l.debug.Fg(l.debug.Nk);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(l.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= l.debug.If) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
l.debug.If = 50;
l.debug.Fg = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return (a = c.stack) ? String(a) : null;
};
l.debug.ue = function(a) {
  var c;
  l.Rd && (c = l.debug.Fg(a || l.debug.ue));
  c || (c = l.debug.Lg(a || arguments.callee.caller, []));
  return c;
};
l.debug.Lg = function(a, c) {
  var d = [];
  if (l.c.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < l.debug.If) {
      d.push(l.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var g;
        g = e[f];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = l.debug.getFunctionName(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        d.push(g);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(l.debug.Lg(a.caller, c));
      } catch (h) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
l.debug.Qv = function(a) {
  l.debug.xg = a;
};
l.debug.getFunctionName = function(a) {
  if (l.debug.Mb[a]) {
    return l.debug.Mb[a];
  }
  if (l.debug.xg) {
    var c = l.debug.xg(a);
    if (c) {
      return l.debug.Mb[a] = c;
    }
  }
  a = String(a);
  l.debug.Mb[a] || (c = /function ([^\(]+)/.exec(a), l.debug.Mb[a] = c ? c[1] : "[Anonymous]");
  return l.debug.Mb[a];
};
l.debug.cv = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
l.debug.Fv = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
l.debug.Mb = {};
l.debug.ta = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
l.debug.ta.prototype.sg = null;
l.debug.ta.li = !0;
l.debug.ta.Zl = 0;
l.debug.ta.prototype.reset = function(a, c, d, e, f) {
  l.debug.ta.li && ("number" == typeof f || l.debug.ta.Zl++);
  e || l.now();
  this.Ee = a;
  this.Xl = c;
  delete this.sg;
};
l.debug.ta.prototype.Om = function(a) {
  this.sg = a;
};
l.debug.ta.prototype.getMessage = function() {
  return this.Xl;
};
l.debug.ia = function() {
  this.clear();
};
l.debug.ia.pe = function() {
  l.debug.ia.vc || (l.debug.ia.vc = new l.debug.ia);
  return l.debug.ia.vc;
};
l.debug.ia.Jc = 0;
l.debug.ia.prototype.Bj = function(a, c, d) {
  var e = (this.lg + 1) % l.debug.ia.Jc;
  this.lg = e;
  if (this.ah) {
    return e = this.cg[e], e.reset(a, c, d), e;
  }
  this.ah = e == l.debug.ia.Jc - 1;
  return this.cg[e] = new l.debug.ta(a, c, d);
};
l.debug.ia.kl = function() {
  return 0 < l.debug.ia.Jc;
};
l.debug.ia.prototype.clear = function() {
  this.cg = Array(l.debug.ia.Jc);
  this.lg = -1;
  this.ah = !1;
};
l.debug.o = function(a) {
  this.hb = a;
  this.Pb = this.Wd = this.Ee = this.Pe = null;
};
l.debug.o.Nd = "";
l.debug.o.$b = !0;
l.debug.o.$b || (l.debug.o.Ue = []);
l.debug.o.B = function(a, c) {
  this.name = a;
  this.value = c;
};
l.debug.o.B.prototype.toString = function() {
  return this.name;
};
l.debug.o.B.OFF = new l.debug.o.B("OFF", Infinity);
l.debug.o.B.kj = new l.debug.o.B("SHOUT", 1200);
l.debug.o.B.Qf = new l.debug.o.B("SEVERE", 1E3);
l.debug.o.B.Vf = new l.debug.o.B("WARNING", 900);
l.debug.o.B.Ef = new l.debug.o.B("INFO", 800);
l.debug.o.B.pf = new l.debug.o.B("CONFIG", 700);
l.debug.o.B.wf = new l.debug.o.B("FINE", 500);
l.debug.o.B.mi = new l.debug.o.B("FINER", 400);
l.debug.o.B.ni = new l.debug.o.B("FINEST", 300);
l.debug.o.B.ALL = new l.debug.o.B("ALL", 0);
l.debug.o.B.Md = [l.debug.o.B.OFF, l.debug.o.B.kj, l.debug.o.B.Qf, l.debug.o.B.Vf, l.debug.o.B.Ef, l.debug.o.B.pf, l.debug.o.B.wf, l.debug.o.B.mi, l.debug.o.B.ni, l.debug.o.B.ALL];
l.debug.o.B.ib = null;
l.debug.o.B.ig = function() {
  l.debug.o.B.ib = {};
  for (var a = 0, c;c = l.debug.o.B.Md[a];a++) {
    l.debug.o.B.ib[c.value] = c, l.debug.o.B.ib[c.name] = c;
  }
};
l.debug.o.B.$t = function(a) {
  l.debug.o.B.ib || l.debug.o.B.ig();
  return l.debug.o.B.ib[a] || null;
};
l.debug.o.B.au = function(a) {
  l.debug.o.B.ib || l.debug.o.B.ig();
  if (a in l.debug.o.B.ib) {
    return l.debug.o.B.ib[a];
  }
  for (var c = 0;c < l.debug.o.B.Md.length;++c) {
    var d = l.debug.o.B.Md[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
l.debug.o.Kl = function(a) {
  l.global.console && (l.global.console.timeStamp ? l.global.console.timeStamp(a) : l.global.console.markTimeline && l.global.console.markTimeline(a));
  l.global.msWriteProfilerMark && l.global.msWriteProfilerMark(a);
};
b = l.debug.o.prototype;
b.getName = function() {
  return this.hb;
};
b.Wf = function(a) {
  l.debug.Ba && (l.debug.o.$b ? (this.Pb || (this.Pb = []), this.Pb.push(a)) : l.debug.o.Ue.push(a));
};
b.Jh = function(a) {
  if (l.debug.Ba) {
    var c = l.debug.o.$b ? this.Pb : l.debug.o.Ue;
    return !!c && l.c.remove(c, a);
  }
  return !1;
};
b.getParent = function() {
  return this.Pe;
};
b.getChildren = function() {
  this.Wd || (this.Wd = {});
  return this.Wd;
};
b.Cg = function() {
  if (!l.debug.Ba) {
    return l.debug.o.B.OFF;
  }
  if (!l.debug.o.$b) {
    return l.debug.o.Ev;
  }
  if (this.Ee) {
    return this.Ee;
  }
  if (this.Pe) {
    return this.Pe.Cg();
  }
  l.l.ra("Root logger has no level set.");
  return null;
};
b.sl = function(a) {
  return l.debug.Ba && a.value >= this.Cg().value;
};
b.log = function(a, c, d) {
  l.debug.Ba && this.sl(a) && (l.Xa(c) && (c = c()), this.jk(this.Hk(a, c, d)));
};
b.Hk = function(a, c, d) {
  a = l.debug.ia.kl() ? l.debug.ia.pe().Bj(a, c, this.hb) : new l.debug.ta(a, String(c), this.hb);
  d && a.Om(d);
  return a;
};
b.Qm = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Qf, a, c);
};
b.Zh = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Vf, a, c);
};
b.info = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.Ef, a, c);
};
b.config = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.pf, a, c);
};
b.wg = function(a, c) {
  l.debug.Ba && this.log(l.debug.o.B.wf, a, c);
};
b.jk = function(a) {
  l.debug.o.Kl("log:" + a.getMessage());
  if (l.debug.o.$b) {
    for (var c = this;c;) {
      c.Nj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = l.debug.o.Ue[c++];) {
      d(a);
    }
  }
};
b.Nj = function(a) {
  if (this.Pb) {
    for (var c = 0, d;d = this.Pb[c];c++) {
      d(a);
    }
  }
};
l.debug.Ca = {};
l.debug.Ca.rh = {};
l.debug.Ca.initialize = function() {
  l.debug.Ca.Lh || (l.debug.Ca.rh[l.debug.o.Nd] = l.debug.Ca.Lh);
};
l.debug.Ca.Xt = function() {
  return l.debug.Ca.rh;
};
l.debug.Ca.cu = function() {
  l.debug.Ca.initialize();
  return l.debug.Ca.Lh;
};
l.debug.Ca.st = function() {
  return function() {
  };
};
l.log = {};
l.log.lb = l.debug.Ba;
l.log.Nd = l.debug.o.Nd;
l.log.o = l.debug.o;
l.log.B = l.debug.o.B;
l.log.ta = l.debug.ta;
l.log.Wf = function(a, c) {
  l.log.lb && a && a.Wf(c);
};
l.log.Jh = function(a, c) {
  return l.log.lb && a ? a.Jh(c) : !1;
};
l.log.log = function(a, c, d, e) {
  l.log.lb && a && a.log(c, d, e);
};
l.log.error = function(a, c, d) {
  l.log.lb && a && a.Qm(c, d);
};
l.log.Zh = function(a, c, d) {
  l.log.lb && a && a.Zh(c, d);
};
l.log.info = function(a, c, d) {
  l.log.lb && a && a.info(c, d);
};
l.log.wg = function(a, c, d) {
  l.log.lb && a && a.wg(c, d);
};
chrome.cast.a.D.ab = function(a) {
  this.qd = a;
  this.bd = null;
  this.$e = new l.A.Map;
  this.sb = new l.A.Map;
  this.Dc = new l.A.Map;
  this.Cc = new l.A.Map;
  this.Re = new l.A.Map;
  this.De = this.hd = this.sd = null;
  this.qd.addMessageListener(this.Xc(), l.bind(this.Bh, this));
};
chrome.cast.a.D.ab.Sf = 6E4;
b = chrome.cast.a.D.ab.prototype;
b.Ta = function() {
  this.qd.removeMessageListener(chrome.cast.a.Kd, l.bind(this.Bh, this));
  for (var a = this.Dc.na(), c = 0;c < a.length;c++) {
    this.Vb(a[c]);
  }
  this.hd = this.sd = null;
};
b.Xc = function() {
  return chrome.cast.a.Kd;
};
b.wm = function(a, c) {
  var d = new chrome.cast.a.D.Af;
  d.type = chrome.cast.a.D.pa.Bd;
  if (!d.requestId) {
    throw Error("Missing requestId field from request.");
  }
  if (!a) {
    throw Error("No success callback provided.");
  }
  this.bd = a;
  var e = l.Ac;
  c && (this.sb.set(d.requestId, c), e = function(a) {
    c(new chrome.cast.a.ac(chrome.cast.a.$a.wd, a.description, null, a));
    this.Vb(d.requestId);
  }.bind(this));
  var f = l.global.setTimeout(l.bind(this.Ch, this, d.requestId), chrome.cast.a.D.ab.Sf);
  this.Dc.set(d.requestId, f);
  this.Cc.set(d.requestId, d.type);
  this.qd.sendMessage(this.Xc(), d, l.Ac, e);
};
b.Ve = function(a, c, d, e, f) {
  if (c == chrome.cast.a.D.pa.UNKNOWN) {
    throw Error("Cannot send an UNKNOWN game manager request.");
  }
  if (!a && c != chrome.cast.a.D.pa.Mf && c != chrome.cast.a.D.pa.Bd) {
    throw Error("Missing player ID for game manager request type:" + c);
  }
  var g = new chrome.cast.a.D.Af;
  g.type = c;
  g.playerId = a ? a : "";
  g.playerToken = this.Re.get(g.playerId, null);
  g.extraMessageData = d;
  if (!g.requestId) {
    throw Error("Missing requestId field from request");
  }
  e && this.$e.set(g.requestId, e);
  a = l.Ac;
  f && (this.sb.set(g.requestId, f), a = function(a) {
    f(new chrome.cast.a.ac(chrome.cast.a.$a.wd, a.description, null, a));
    this.Vb(g.requestId);
  }.bind(this));
  g.type != chrome.cast.a.D.pa.GAME_MESSAGE && (c = l.global.setTimeout(l.bind(this.Ch, this, g.requestId), chrome.cast.a.D.ab.Sf), this.Dc.set(g.requestId, c));
  this.Cc.set(g.requestId, g.type);
  this.qd.sendMessage(this.Xc(), g, l.Ac, a);
};
b.Pm = function(a, c) {
  this.sd = a;
  this.hd = c;
};
b.xl = function(a) {
  return this.Re.Jb(a);
};
b.Ea = function() {
  return this.De;
};
l.w(chrome.cast.a.D.ab.prototype, "getLastUsedPlayerId", chrome.cast.a.D.ab.prototype.Ea);
b = chrome.cast.a.D.ab.prototype;
b.Bh = function(a, c) {
  if (a != this.Xc()) {
    throw Error("Incoming message has unexpected namespace: " + a);
  }
  var d = l.json.parse(c), e = d.type;
  if (e != chrome.cast.a.D.bc.GAME_MANAGER_PROCESSED_RESULT && e != chrome.cast.a.D.bc.GAME_MESSAGE) {
    l.log.error(this.qh, "Ignoring message, type is not GAME_MANAGER_PROCESSED_RESULT or  GAME_MESSAGE Type: " + e);
  } else {
    if (d.gameManagerConfig && d.gameManagerConfig.version != chrome.cast.a.Qd && (d.statusCode = chrome.cast.a.D.Ha.INCORRECT_VERSION, d.errorDescription = "Incorrect version of the GameManager SDK. Sender: " + chrome.cast.a.Qd + "Receiver: " + d.gameManagerConfig.version), d.statusCode != chrome.cast.a.D.Ha.Sd) {
      this.bm(d);
    } else {
      var e = d.playerId, f = d.playerToken;
      e && f && this.Re.set(e, f);
      this.sd && this.sd(d);
      d.requestId && (this.De = e || this.De, this.dm(d));
      this.hd && this.hd();
    }
  }
};
b.bm = function(a) {
  var c = a.requestId;
  if (this.sb.Jb(c)) {
    var d = this.sb.get(c), e = new chrome.cast.a.Dd(a.playerId, a.requestId, a.extraMessageData), f = chrome.cast.a.D.Ha.Ck(a.statusCode);
    d(new chrome.cast.a.ac(f, a.errorDescription, e, null));
    this.Vb(c);
  } else {
    l.log.info(this.qh, "Ignoring error message, no callback for request ID: " + c);
  }
};
b.dm = function(a) {
  var c = a.requestId, d = this.Cc.get(c), e = this.$e.get(a.requestId);
  this.Vb(c);
  if (d == chrome.cast.a.D.pa.Bd) {
    if (!this.bd) {
      throw Error("Got a response for a GET_GAME_MANAGER_CONFIG request but no initialization callback was set.");
    }
    this.bd();
    this.bd = null;
  } else {
    e ? e(new chrome.cast.a.Dd(a.playerId, a.requestId, a.extraMessageData)) : l.log.info(this.qh, "Ignoring message, no callback for request ID: " + c);
  }
};
b.Ch = function(a) {
  var c = this.Cc.get(a), c = "Did not receive a response to player request within a time period. request ID=" + a + " request type =" + c;
  if (this.sb.Jb(a)) {
    var d = this.sb.get(a), e = new chrome.cast.Error(chrome.cast.ErrorCode.TIMEOUT, c, null);
    d(new chrome.cast.a.ac(chrome.cast.a.$a.wd, c, null, e));
    this.Vb(a);
  } else {
    throw Error(c);
  }
};
b.Vb = function(a) {
  this.$e.remove(a);
  this.sb.remove(a);
  var c = this.Dc.get(a);
  l.global.clearTimeout(c);
  this.Dc.remove(a);
  this.Cc.remove(a);
};
l.hk = {};
l.hk.Ip = function() {
};
l.O = function() {
  l.O.Id != l.O.Jd.OFF && (l.O.yb[l.sc(this)] = this);
  this.mc = this.mc;
  this.gd = this.gd;
};
l.O.Jd = {OFF:0, Vi:1, Np:2};
l.O.Id = 0;
l.O.Lp = !0;
l.O.yb = {};
l.O.eu = function() {
  var a = [], c;
  for (c in l.O.yb) {
    l.O.yb.hasOwnProperty(c) && a.push(l.O.yb[Number(c)]);
  }
  return a;
};
l.O.gt = function() {
  l.O.yb = {};
};
l.O.prototype.mc = !1;
l.O.prototype.isDisposed = function() {
  return this.mc;
};
l.O.prototype.Ta = function() {
  if (!this.mc && (this.mc = !0, this.ce(), l.O.Id != l.O.Jd.OFF)) {
    var a = l.sc(this);
    if (l.O.Id == l.O.Jd.Vi && !l.O.yb.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete l.O.yb[a];
  }
};
l.O.prototype.ce = function() {
  if (this.gd) {
    for (;this.gd.length;) {
      this.gd.shift()();
    }
  }
};
l.O.isDisposed = function(a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
l.Ta = function(a) {
  a && "function" == typeof a.Ta && a.Ta();
};
l.ik = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    l.W(e) ? l.ik.apply(null, e) : l.Ta(e);
  }
};
l.events = {};
l.events.uf = function(a) {
  this.id = a;
};
l.events.uf.prototype.toString = function() {
  return this.id;
};
l.events.Event = function(a, c) {
  this.type = a instanceof l.events.uf ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.Ab = !1;
  this.Kh = !0;
};
l.events.Event.prototype.stopPropagation = function() {
  this.Ab = !0;
};
l.events.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Kh = !1;
};
l.events.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
l.events.Event.preventDefault = function(a) {
  a.preventDefault();
};
l.debug.ca = {};
l.debug.cp = function() {
};
l.debug.ca.Tb = [];
l.debug.ca.Ne = [];
l.debug.ca.wh = !1;
l.debug.ca.register = function(a) {
  l.debug.ca.Tb[l.debug.ca.Tb.length] = a;
  if (l.debug.ca.wh) {
    for (var c = l.debug.ca.Ne, d = 0;d < c.length;d++) {
      a(l.bind(c[d].kn, c[d]));
    }
  }
};
l.debug.ca.gv = function(a) {
  l.debug.ca.wh = !0;
  for (var c = l.bind(a.kn, a), d = 0;d < l.debug.ca.Tb.length;d++) {
    l.debug.ca.Tb[d](c);
  }
  l.debug.ca.Ne.push(a);
};
l.debug.ca.pw = function(a) {
  var c = l.debug.ca.Ne;
  a = l.bind(a.P, a);
  for (var d = 0;d < l.debug.ca.Tb.length;d++) {
    l.debug.ca.Tb[d](a);
  }
  c.length--;
};
l.Bb = {};
l.Bb.object = function(a, c) {
  return c;
};
l.Bb.Xe = function(a) {
  l.Bb.Xe[" "](a);
  return a;
};
l.Bb.Xe[" "] = l.Ac;
l.Bb.Pj = function(a, c) {
  try {
    return l.Bb.Xe(a[c]), !0;
  } catch (d) {
  }
  return !1;
};
l.events.Ic = {xp:!l.userAgent.Aa || l.userAgent.ze(9), Ed:!l.userAgent.Aa || l.userAgent.ze(9), jj:l.userAgent.Aa && !l.userAgent.sa("9"), wp:!l.userAgent.Qa || l.userAgent.sa("528"), vp:l.userAgent.Kc && l.userAgent.sa("1.9b") || l.userAgent.Aa && l.userAgent.sa("8") || l.userAgent.Ld && l.userAgent.sa("9.5") || l.userAgent.Qa && l.userAgent.sa("528"), Ep:l.userAgent.Kc && !l.userAgent.sa("8") || l.userAgent.Aa && !l.userAgent.sa("9"), hs:"ontouchstart" in l.global || !!(l.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!l.global.navigator || !l.global.navigator.msMaxTouchPoints)};
l.events.Zc = function(a) {
  return l.userAgent.Qa ? "webkit" + a : l.userAgent.Ld ? "o" + a.toLowerCase() : a.toLowerCase();
};
l.events.vf = {Xn:"click", yr:"rightclick", ro:"dblclick", tq:"mousedown", xq:"mouseup", Li:"mouseover", Ki:"mouseout", wq:"mousemove", uq:"mouseenter", vq:"mouseleave", Hr:"selectstart", vs:"wheel", Up:"keypress", Sp:"keydown", Vp:"keyup", Nn:"blur", ip:"focus", to:"deactivate", jp:l.userAgent.Aa ? "focusin" : "DOMFocusIn", kp:l.userAgent.Aa ? "focusout" : "DOMFocusOut", Vn:"change", vr:"reset", ij:"select", Qr:"submit", Ci:"input", tr:"propertychange", So:"dragstart", No:"drag", Po:"dragenter", 
Ro:"dragover", Qo:"dragleave", To:"drop", Oo:"dragend", gs:"touchstart", fs:"touchmove", es:"touchend", ds:"touchcancel", Kn:"beforeunload", ko:"consolemessage", lo:"contextmenu", Ho:"DOMContentLoaded", ERROR:"error", Ap:"help", LOAD:"load", fq:"losecapture", $q:"orientationchange", ur:"readystatechange", wr:"resize", Fr:"scroll", qs:"unload", up:"hashchange", cr:"pagehide", dr:"pageshow", pr:"popstate", mo:"copy", fr:"paste", no:"cut", Gn:"beforecopy", Hn:"beforecut", In:"beforepaste", Xq:"online", 
Vq:"offline", nq:"message", jo:"connect", vn:l.events.Zc("AnimationStart"), tn:l.events.Zc("AnimationEnd"), un:l.events.Zc("AnimationIteration"), ks:l.events.Zc("TransitionEnd"), ir:"pointerdown", or:"pointerup", hr:"pointercancel", lr:"pointermove", nr:"pointerover", mr:"pointerout", jr:"pointerenter", kr:"pointerleave", np:"gotpointercapture", gq:"lostpointercapture", yq:"MSGestureChange", zq:"MSGestureEnd", Aq:"MSGestureHold", Bq:"MSGestureStart", Cq:"MSGestureTap", Dq:"MSGotPointerCapture", Eq:"MSInertiaStart", 
Fq:"MSLostPointerCapture", Gq:"MSPointerCancel", Hq:"MSPointerDown", Iq:"MSPointerEnter", Jq:"MSPointerHover", Kq:"MSPointerLeave", Lq:"MSPointerMove", Mq:"MSPointerOut", Nq:"MSPointerOver", Oq:"MSPointerUp", TEXT:"text", Yr:"textInput", ho:"compositionstart", io:"compositionupdate", fo:"compositionend", bp:"exit", $p:"loadabort", aq:"loadcommit", bq:"loadredirect", cq:"loadstart", eq:"loadstop", xr:"responsive", Ir:"sizechanged", rs:"unresponsive", ts:"visibilitychange", Mr:"storage", Mo:"DOMSubtreeModified", 
Io:"DOMNodeInserted", Ko:"DOMNodeRemoved", Lo:"DOMNodeRemovedFromDocument", Jo:"DOMNodeInsertedIntoDocument", Fo:"DOMAttrModified", Go:"DOMCharacterDataModified", Jn:"beforeprint", sn:"afterprint"};
l.events.Fa = function(a, c) {
  l.events.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.oc = this.state = null;
  a && this.init(a, c);
};
l.wb(l.events.Fa, l.events.Event);
l.events.Fa.Pq = {cc:0, qq:1, dc:2};
l.events.Fa.Jp = [1, 4, 2];
l.events.Fa.prototype.init = function(a, c) {
  var d = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  e ? l.userAgent.Kc && (l.Bb.Pj(e, "nodeName") || (e = null)) : d == l.events.vf.Li ? e = a.fromElement : d == l.events.vf.Ki && (e = a.toElement);
  this.relatedTarget = e;
  this.offsetX = l.userAgent.Qa || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = l.userAgent.Qa || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.oc = a;
  a.defaultPrevented && this.preventDefault();
};
l.events.Fa.prototype.stopPropagation = function() {
  l.events.Fa.Db.stopPropagation.call(this);
  this.oc.stopPropagation ? this.oc.stopPropagation() : this.oc.cancelBubble = !0;
};
l.events.Fa.prototype.preventDefault = function() {
  l.events.Fa.Db.preventDefault.call(this);
  var a = this.oc;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, l.events.Ic.jj) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (c) {
      }
    }
  }
};
l.events.ha = function() {
};
l.events.ha.Df = "closure_listenable_" + (1E6 * Math.random() | 0);
l.events.ha.Aj = function(a) {
  a.prototype[l.events.ha.Df] = !0;
};
l.events.ha.Ya = function(a) {
  return !(!a || !a[l.events.ha.Df]);
};
l.events.Nc = function() {
};
l.events.Nc.Vj = 0;
l.events.Nc.mm = function() {
  return ++l.events.Nc.Vj;
};
l.events.Hd = function(a, c, d, e, f, g) {
  this.listener = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.Hb = !!f;
  this.$c = g;
  this.key = l.events.Nc.mm();
  this.removed = this.Qc = !1;
};
l.events.Hd.Zo = !1;
l.events.Hd.prototype.fd = function() {
  this.removed = !0;
  this.$c = this.src = this.proxy = this.listener = null;
};
l.events.bb = function(a) {
  this.src = a;
  this.$ = {};
  this.Ec = 0;
};
b = l.events.bb.prototype;
b.Pk = function() {
  return this.Ec;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.$[g];
  a || (a = this.$[g] = [], this.Ec++);
  var h = l.events.bb.fe(a, c, e, f);
  -1 < h ? (c = a[h], d || (c.Qc = !1)) : (c = new l.events.Hd(c, null, this.src, g, !!e, f), c.Qc = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.$)) {
    return !1;
  }
  var f = this.$[a];
  c = l.events.bb.fe(f, c, d, e);
  return -1 < c ? (f[c].fd(), l.c.Ub(f, c), 0 == f.length && (delete this.$[a], this.Ec--), !0) : !1;
};
b.Ih = function(a) {
  var c = a.type;
  if (!(c in this.$)) {
    return !1;
  }
  var d = l.c.remove(this.$[c], a);
  d && (a.fd(), 0 == this.$[c].length && (delete this.$[c], this.Ec--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.$) {
    if (!a || d == a) {
      for (var e = this.$[d], f = 0;f < e.length;f++) {
        ++c, e[f].fd();
      }
      delete this.$[d];
      this.Ec--;
    }
  }
  return c;
};
b.qc = function(a, c) {
  var d = this.$[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.Hb == c && e.push(g);
    }
  }
  return e;
};
b.Nb = function(a, c, d, e) {
  a = this.$[a.toString()];
  var f = -1;
  a && (f = l.events.bb.fe(a, c, d, e));
  return -1 < f ? a[f] : null;
};
b.hasListener = function(a, c) {
  var d = l.ka(a), e = d ? a.toString() : "", f = l.ka(c);
  return l.object.some(this.$, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(d && a[h].type != e || f && a[h].Hb != c)) {
        return !0;
      }
    }
    return !1;
  });
};
l.events.bb.fe = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.listener == c && g.Hb == !!d && g.$c == e) {
      return f;
    }
  }
  return -1;
};
l.events.Fd = "closure_lm_" + (1E6 * Math.random() | 0);
l.events.em = "on";
l.events.Oe = {};
l.events.xd = {Pi:0, Qi:1, Ri:2};
l.events.vd = 2;
l.events.Ge = 0;
l.events.listen = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  return l.events.ha.Ya(a) ? a.listen(c, d, e, f) : l.events.ph(a, c, d, !1, e, f);
};
l.events.ph = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var h = !!f;
  if (h && !l.events.Ic.Ed) {
    if (l.events.vd == l.events.xd.Pi) {
      return l.l.ra("Can not register capture listener in IE8-."), null;
    }
    if (l.events.vd == l.events.xd.Qi) {
      return null;
    }
  }
  var k = l.events.fb(a);
  k || (a[l.events.Fd] = k = new l.events.bb(a));
  d = k.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = l.events.Mk();
  d.proxy = e;
  e.src = a;
  e.listener = d;
  if (a.addEventListener) {
    a.addEventListener(c.toString(), e, h);
  } else {
    if (a.attachEvent) {
      a.attachEvent(l.events.Jg(c.toString()), e);
    } else {
      throw Error("addEventListener and attachEvent are unavailable.");
    }
  }
  l.events.Ge++;
  return d;
};
l.events.Mk = function() {
  var a = l.events.uc, c = l.events.Ic.Ed ? function(d) {
    return a.call(c.src, c.listener, d);
  } : function(d) {
    d = a.call(c.src, c.listener, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
l.events.Fe = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Fe(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  return l.events.ha.Ya(a) ? a.Fe(c, d, e, f) : l.events.ph(a, c, d, !0, e, f);
};
l.events.Wu = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
l.events.Xb = function(a, c, d, e, f) {
  if (l.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      l.events.Xb(a, c[g], d, e, f);
    }
    return null;
  }
  d = l.events.td(d);
  if (l.events.ha.Ya(a)) {
    return a.Xb(c, d, e, f);
  }
  if (!a) {
    return !1;
  }
  if (a = l.events.fb(a)) {
    if (c = a.Nb(c, d, !!e, f)) {
      return l.events.Yb(c);
    }
  }
  return !1;
};
l.events.Yb = function(a) {
  if (l.xc(a) || !a || a.removed) {
    return !1;
  }
  var c = a.src;
  if (l.events.ha.Ya(c)) {
    return c.Yb(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.Hb) : c.detachEvent && c.detachEvent(l.events.Jg(d), e);
  l.events.Ge--;
  (d = l.events.fb(c)) ? (d.Ih(a), 0 == d.Pk() && (d.src = null, c[l.events.Fd] = null)) : a.fd();
  return !0;
};
l.events.ow = function(a, c, d, e, f) {
  c.Xb(a, d, e, f);
};
l.events.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (l.events.ha.Ya(a)) {
    return a.Hh(c);
  }
  var d = l.events.fb(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.$) {
    if (!f || g == f) {
      for (var h = d.$[g].concat(), k = 0;k < h.length;++k) {
        l.events.Yb(h[k]) && ++e;
      }
    }
  }
  return e;
};
l.events.qc = function(a, c, d) {
  return l.events.ha.Ya(a) ? a.qc(c, d) : a ? (a = l.events.fb(a)) ? a.qc(c, d) : [] : [];
};
l.events.Nb = function(a, c, d, e, f) {
  d = l.events.td(d);
  e = !!e;
  return l.events.ha.Ya(a) ? a.Nb(c, d, e, f) : a ? (a = l.events.fb(a)) ? a.Nb(c, d, e, f) : null : null;
};
l.events.hasListener = function(a, c, d) {
  if (l.events.ha.Ya(a)) {
    return a.hasListener(c, d);
  }
  a = l.events.fb(a);
  return !!a && a.hasListener(c, d);
};
l.events.nk = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
l.events.Jg = function(a) {
  return a in l.events.Oe ? l.events.Oe[a] : l.events.Oe[a] = l.events.em + a;
};
l.events.Lb = function(a, c, d, e) {
  return l.events.ha.Ya(a) ? a.Lb(c, d, e) : l.events.he(a, c, d, e);
};
l.events.he = function(a, c, d, e) {
  var f = !0;
  if (a = l.events.fb(a)) {
    if (c = a.$[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.Hb == d && !g.removed && (g = l.events.ge(g, e), f = f && !1 !== g);
      }
    }
  }
  return f;
};
l.events.ge = function(a, c) {
  var d = a.listener, e = a.$c || a.src;
  a.Qc && l.events.Yb(a);
  return d.call(e, c);
};
l.events.du = function() {
  return l.events.Ge;
};
l.events.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
l.events.uv = function(a) {
  l.events.uc = a.vv(l.events.uc);
};
l.events.uc = function(a, c) {
  if (a.removed) {
    return !0;
  }
  if (!l.events.Ic.Ed) {
    var d = c || l.Ig("window.event"), e = new l.events.Fa(d, this), f = !0;
    if (l.events.vd == l.events.xd.Ri) {
      if (!l.events.ul(d)) {
        l.events.Ql(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, h = d.length - 1;!e.Ab && 0 <= h;h--) {
          e.currentTarget = d[h];
          var k = l.events.he(d[h], g, !0, e), f = f && k;
        }
        for (h = 0;!e.Ab && h < d.length;h++) {
          e.currentTarget = d[h], k = l.events.he(d[h], g, !1, e), f = f && k;
        }
      }
    } else {
      f = l.events.ge(a, e);
    }
    return f;
  }
  return l.events.ge(a, new l.events.Fa(c, this));
};
l.events.Ql = function(a) {
  var c = !1;
  if (0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
  }
  if (c || void 0 == a.returnValue) {
    a.returnValue = !0;
  }
};
l.events.ul = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
l.events.en = 0;
l.events.fu = function(a) {
  return a + "_" + l.events.en++;
};
l.events.fb = function(a) {
  a = a[l.events.Fd];
  return a instanceof l.events.bb ? a : null;
};
l.events.Gd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
l.events.td = function(a) {
  if (l.Xa(a)) {
    return a;
  }
  a[l.events.Gd] || (a[l.events.Gd] = function(c) {
    return a.handleEvent(c);
  });
  return a[l.events.Gd];
};
l.debug.ca.register(function(a) {
  l.events.uc = a(l.events.uc);
});
l.events.EventTarget = function() {
  l.O.call(this);
  this.Ja = new l.events.bb(this);
  this.zj = this;
  this.Dh = null;
};
l.wb(l.events.EventTarget, l.O);
l.events.ha.Aj(l.events.EventTarget);
l.events.EventTarget.lq = 1E3;
b = l.events.EventTarget.prototype;
b.Kg = function() {
  return this.Dh;
};
b.addEventListener = function(a, c, d, e) {
  l.events.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  l.events.Xb(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.Kg();
  if (d) {
    for (c = [];d;d = d.Kg()) {
      c.push(d);
    }
  }
  return l.events.EventTarget.ek(this.zj, a, c);
};
b.ce = function() {
  l.events.EventTarget.Db.ce.call(this);
  this.Hh();
  this.Dh = null;
};
b.listen = function(a, c, d, e) {
  return this.Ja.add(String(a), c, !1, d, e);
};
b.Fe = function(a, c, d, e) {
  return this.Ja.add(String(a), c, !0, d, e);
};
b.Xb = function(a, c, d, e) {
  return this.Ja.remove(String(a), c, d, e);
};
b.Yb = function(a) {
  return this.Ja.Ih(a);
};
b.Hh = function(a) {
  return this.Ja ? this.Ja.removeAll(a) : 0;
};
b.Lb = function(a, c, d) {
  a = this.Ja.$[String(a)];
  if (!a) {
    return !0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.Hb == c) {
      var h = g.listener, k = g.$c || g.src;
      g.Qc && this.Yb(g);
      e = !1 !== h.call(k, d) && e;
    }
  }
  return e && 0 != d.Kh;
};
b.qc = function(a, c) {
  return this.Ja.qc(String(a), c);
};
b.Nb = function(a, c, d, e) {
  return this.Ja.Nb(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.Ja.hasListener(l.ka(a) ? String(a) : void 0, c);
};
l.events.EventTarget.ek = function(a, c, d) {
  var e = c.type || c;
  if (l.G(c)) {
    c = new l.events.Event(c, a);
  } else {
    if (c instanceof l.events.Event) {
      c.target = c.target || a;
    } else {
      var f = c;
      c = new l.events.Event(e, a);
      l.object.extend(c, f);
    }
  }
  var f = !0, g;
  if (d) {
    for (var h = d.length - 1;!c.Ab && 0 <= h;h--) {
      g = c.currentTarget = d[h], f = g.Lb(e, !0, c) && f;
    }
  }
  c.Ab || (g = c.currentTarget = a, f = g.Lb(e, !0, c) && f, c.Ab || (f = g.Lb(e, !1, c) && f));
  if (d) {
    for (h = 0;!c.Ab && h < d.length;h++) {
      g = c.currentTarget = d[h], f = g.Lb(e, !1, c) && f;
    }
  }
  return f;
};
l.i = {};
l.i.m = {};
l.i.m.Ga = function(a, c, d, e, f) {
  this.Yd = a;
  this.hb = c;
  this.Xf = d;
  this.Fj = e;
  this.Gh = f;
};
l.i.m.Ga.prototype.getName = function() {
  return this.hb;
};
l.i.m.Ga.prototype.jl = function() {
  return !this.hb || "[object Object]" == this.Yd;
};
l.i.m.Ga.prototype.Xm = function() {
  var a = l.i.m.el, c = l.i.m.Wl, c = [this.Yd ? a(this.Yd) + "." : "", this.hb ? a(c(this.hb)) : "anonymous", a(this.Fj), this.Xf ? " [as " + a(c(this.Xf)) + "]" : ""];
  this.Gh && (c.push(" at "), c.push(a(this.Gh)));
  return c.join("");
};
l.i.m.Ii = 20;
l.i.m.Ji = 5E5;
l.i.m.za = "[a-zA-Z_$][\\w$]*";
l.i.m.rj = "(?: \\[as (" + l.i.m.za + ")\\])?";
l.i.m.sj = "(?:((?:new )?(?:\\[object Object\\]|" + l.i.m.za + "(?:\\." + l.i.m.za + ")*))\\.)?";
l.i.m.uj = "(?:new )?(?:" + l.i.m.za + "|<anonymous>)";
l.i.m.tj = " " + l.i.m.sj + "(" + l.i.m.uj + ")" + l.i.m.rj;
l.i.m.Ud = "((?:http|https|file)://[^\\s)]+|javascript:.*)";
l.i.m.di = " (?:\\(unknown source\\)|\\(native\\)|\\((.+)\\)|(.+))";
l.i.m.vj = new RegExp("^    at(?:" + l.i.m.tj + ")?" + l.i.m.di + "$");
l.i.m.oi = "(" + l.i.m.za + ")?(\\(.*\\))?@";
l.i.m.pi = new RegExp("^" + l.i.m.oi + "(?::0|" + l.i.m.Ud + ")$");
l.i.m.Si = "<anonymous function(?:\\: (?:(" + l.i.m.za + "(?:\\." + l.i.m.za + ")*)\\.)?(" + l.i.m.za + "))?>";
l.i.m.Ti = "(?:(?:(" + l.i.m.za + ")|" + l.i.m.Si + ")(\\(.*\\)))?@";
l.i.m.Ui = new RegExp("^" + l.i.m.Ti + l.i.m.Ud + "?$");
l.i.m.ti = new RegExp("^function (" + l.i.m.za + ")");
l.i.m.Ai = "(" + l.i.m.za + "(?:\\s+\\w+)*)";
l.i.m.Bi = new RegExp("^   at " + l.i.m.Ai + "\\s*\\((eval code:[^)]*|" + l.i.m.Ud + ")\\)?$");
l.i.m.vk = function() {
  for (var a = [], c = arguments.callee.caller, d = 0;c && d < l.i.m.Ii;) {
    var e = Function.prototype.toString.call(c).match(l.i.m.ti), e = e ? e[1] : "", f = ["("];
    if (c.arguments) {
      for (var g = 0;g < c.arguments.length;g++) {
        var h = c.arguments[g];
        0 < g && f.push(", ");
        l.G(h) ? f.push('"', h, '"') : h && h.$replay ? f.push("goog.testing.Mock") : f.push(String(h));
      }
    } else {
      f.push("unknown");
    }
    f.push(")");
    f = f.join("");
    a.push(new l.i.m.Ga("", e, "", f, ""));
    try {
      c = c.caller;
    } catch (k) {
      break;
    }
    d++;
  }
  return a;
};
l.i.m.gm = function(a) {
  var c = a.match(l.i.m.vj);
  return c ? new l.i.m.Ga(c[1] || "", c[2] || "", c[3] || "", "", c[4] || c[5] || c[6] || "") : a.length > l.i.m.Ji ? l.i.m.fm(a) : (c = a.match(l.i.m.pi)) ? new l.i.m.Ga("", c[1] || "", "", c[2] || "", c[3] || "") : (c = a.match(l.i.m.Ui)) ? new l.i.m.Ga(c[2] || "", c[1] || c[3] || "", "", c[4] || "", c[5] || "") : (c = a.match(l.i.m.Bi)) ? new l.i.m.Ga("", c[1] || "", "", "", c[2] || "") : null;
};
l.i.m.fm = function(a) {
  var c = a.indexOf("("), d = a.lastIndexOf("@"), e = a.lastIndexOf(":"), f = "";
  0 <= c && c < d && (f = a.substring(0, c));
  var g = "";
  0 <= d && d + 1 < e && (g = a.substring(d + 1));
  e = "";
  0 <= c && 0 < d && c < d && (e = a.substring(c, d));
  return new l.i.m.Ga("", f, "", e, g);
};
l.i.m.Nm = function(a) {
  l.i.m.og = a;
};
l.i.m.Wl = function(a) {
  return l.i.m.og ? l.i.m.og(a) : a;
};
l.i.m.el = function(a) {
  return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
};
l.i.m.zg = function(a) {
  for (var c = a.length - 1;a[c] && a[c].jl();) {
    c--;
  }
  for (var d = -1, e = 0;e < a.length;e++) {
    if (a[e] && "_assert" == a[e].getName()) {
      d = e;
      break;
    }
  }
  for (var f = [], e = d + 1;e <= c;e++) {
    f.push("> "), a[e] ? f.push(a[e].Xm()) : f.push("(unknown)"), f.push("\n");
  }
  return f.join("");
};
l.i.m.Eh = function(a) {
  a = a.replace(/\s*$/, "").split("\n");
  for (var c = [], d = 0;d < a.length;d++) {
    c.push(l.i.m.gm(a[d]));
  }
  return c;
};
l.i.m.Xs = function(a) {
  a = l.i.m.Eh(a);
  return l.i.m.zg(a);
};
l.i.m.Ik = function() {
  var a = Error();
  if (a.stack) {
    return a.stack;
  }
  try {
    null.x();
  } catch (c) {
    return c.stack;
  }
  return "";
};
l.i.m.get = function() {
  var a = l.i.m.Ik(), a = a ? l.isArray(a) ? l.i.m.Oj(a) : l.i.m.Eh(a) : l.i.m.vk();
  return l.i.m.zg(a);
};
l.i.m.Oj = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d], f = e.getFunctionName() || "unknown", g = e.getFileName(), e = g ? g + ":" + e.getLineNumber() + ":" + e.getColumnNumber() : "unknown";
    c.push(new l.i.m.Ga("", f, "", "", e));
  }
  return c;
};
l.F("setDeobfuscateFunctionName", l.i.m.Nm);
l.i.l = {};
var p = function(a, c) {
  return a == c;
}, x = function(a, c) {
  return a.toString() === c.toString();
}, y = {String:p, Number:p, Boolean:p, Date:function(a, c) {
  return a.getTime() == c.getTime();
}, RegExp:x, Function:x};
l.i.l.zh = function(a, c, d) {
  return Math.abs(a - c) <= d;
};
l.i.l.jm = {Number:l.i.l.zh};
var _trueTypeOf = function(a) {
  var c = typeof a;
  try {
    switch(c) {
      case "object":
        if (null == a) {
          c = "null";
          break;
        }
      ;
      case "function":
        switch(a.constructor) {
          case (new String("")).constructor:
            c = "String";
            break;
          case (new Boolean(!0)).constructor:
            c = "Boolean";
            break;
          case (new Number(0)).constructor:
            c = "Number";
            break;
          case [].constructor:
            c = "Array";
            break;
          case RegExp().constructor:
            c = "RegExp";
            break;
          case (new Date).constructor:
            c = "Date";
            break;
          case Function:
            c = "Function";
            break;
          default:
            var d = a.constructor.toString().match(/function\s*([^( ]+)\(/);
            d && (c = d[1]);
        }
        break;
    }
  } catch (e) {
  } finally {
    c = c.substr(0, 1).toUpperCase() + c.substr(1);
  }
  return c;
}, _displayStringForValue = function(a) {
  var c;
  try {
    c = "<" + String(a) + ">";
  } catch (d) {
    c = "<toString failed: " + d.message + ">";
  }
  null !== a && void 0 !== a && (c += " (" + _trueTypeOf(a) + ")");
  return c;
}, z = function(a, c) {
  return c.length == a + 1 ? c[0] : null;
}, A = function(a, c, d) {
  return d.length == c + 1 ? d[a] : d[a - 1];
}, _validateArguments = function(a, c) {
  _assert(null, c.length == a || c.length == a + 1 && l.G(c[0]), "Incorrect arguments passed to assert function");
}, _assert = function(a, c, d) {
  c || l.i.l.nd(a, d);
};
l.i.l.eb = function(a, c) {
  var d = "Expected " + _displayStringForValue(a) + " but was " + _displayStringForValue(c);
  if ("string" == typeof a && "string" == typeof c) {
    for (var e = Math.min(a.length, c.length), f = 0;f < e && a.charAt(f) == c.charAt(f);) {
      f++;
    }
    for (var g = 0;g < e && a.charAt(a.length - g - 1) == c.charAt(c.length - g - 1);) {
      g++;
    }
    f + g > e && (g = 0);
    if (2 < f || 2 < g) {
      e = function(a) {
        var c = Math.max(0, f - 2), d = Math.min(a.length, a.length - (g - 2));
        return (0 < c ? "..." : "") + a.substring(c, d) + (d < a.length ? "..." : "");
      }, d += "\nDifference was at position " + f + ". Expected [" + e(a) + "] vs. actual [" + e(c) + "]";
    }
  }
  return d;
};
var B = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.cd(e), "Bad argument to assert(boolean)");
  _assert(d, e, "Call to assert(boolean) with false");
}, C = function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.cd(e), "Bad argument to assertTrue(boolean)");
  _assert(d, e, "Call to assertTrue(boolean) with false");
}, D = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), e === f, l.i.l.eb(e, f));
}, E = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), null !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(null));
}, F = function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), void 0 !== A(1, 1, arguments), "Expected not to be " + _displayStringForValue(void 0));
};
l.i.l.Ws = function(a) {
  var c = l.global.G_testRunner, d = c.logTestFailure;
  try {
    c.logTestFailure = void 0, a();
  } finally {
    c.logTestFailure = d;
  }
};
l.i.l.zd = null;
l.i.l.Ad = "";
l.i.l.tb = function(a, c, d) {
  function e(a, c, d) {
    for (var q = 0;q < g.length;++q) {
      var u = g[q] === a, v = h[q] === c;
      if (u || v) {
        u && v || f.push("Asymmetric cycle detected at " + d);
        return;
      }
    }
    g.push(a);
    h.push(c);
    if (a !== c) {
      if (q = _trueTypeOf(a), u = _trueTypeOf(c), q == u) {
        var v = "Array" == q, w = k(q, a, c);
        if (w != l.i.l.zd) {
          w != l.i.l.Ad && f.push(d + ": " + w);
        } else {
          if (v && a.length != c.length) {
            f.push(d + ": Expected " + a.length + "-element array but got a " + c.length + "-element array");
          } else {
            if (w = d + (v ? "[%s]" : d ? ".%s" : "%s"), a.__iterator__) {
              l.Xa(a.qa) ? a.qa(c) || f.push("equals() returned false for " + (d || q)) : a.N ? e(a.N, c.N, w.replace("%s", "map_")) : f.push("unable to check " + (d || q) + " for equality: it has an iterator we do not know how to handle. please add an equals method");
            } else {
              for (var r in a) {
                v && l.i.l.Vg(r) || (r in c ? e(a[r], c[r], w.replace("%s", r)) : f.push("property " + r + " not present in actual " + (d || u)));
              }
              for (r in c) {
                v && l.i.l.Vg(r) || r in a || f.push("property " + r + " not present in expected " + (d || q));
              }
              if (v) {
                for (r = 0;r < a.length;r++) {
                  e(a[r], c[r], w.replace("%s", String(r)));
                }
              }
            }
          }
        }
      } else {
        f.push(d + " " + l.i.l.eb(a, c));
      }
    }
    g.pop();
    h.pop();
  }
  var f = [], g = [], h = [], k = d || function(a, c, d) {
    return (a = y[a]) ? a(c, d) ? l.i.l.Ad : l.i.l.eb(c, d) : l.i.l.zd;
  };
  e(a, c, "");
  return 0 == f.length ? null : l.i.l.eb(a, c) + "\n   " + f.join("\n   ");
};
var G = function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.tb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, !f, f);
}, H = function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments);
  _assert(z(3, arguments), l.i.l.zh(f, g, h), "Expected " + f + ", but got " + g + " which was more than " + h + " away");
};
l.i.l.af = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = a[d];
  }
  return c;
};
l.i.l.Qg = function(a, c) {
  if (a.indexOf) {
    return a.indexOf(c);
  }
  for (var d = 0;d < a.length;d++) {
    if (a[d] === c) {
      return d;
    }
  }
  return -1;
};
l.i.l.hg = function(a, c) {
  return -1 != l.i.l.Qg(a, c);
};
var J = function(a) {
  var c = document.createElement("DIV");
  c.innerHTML = a;
  return c.innerHTML.replace(/^\s+|\s+$/g, "");
};
l.i.l.nd = function(a, c) {
  throw new l.i.Mc(a, c);
};
l.i.l.Vg = function(a) {
  return (a | 0) == a;
};
l.i.Mc = function(a, c) {
  this.message = (a ? a : "") + (a && c ? "\n" : "") + (c ? c : "");
  l.i.m.get();
  this.comment = a || null;
  Error.captureStackTrace ? Error.captureStackTrace(this, l.i.Mc) : this.stack = Error().stack || "";
};
l.wb(l.i.Mc, Error);
l.i.Mc.prototype.toString = function() {
  return this.message;
};
l.F("fail", function(a) {
  l.i.l.nd("Call to fail()", a);
});
l.F("assert", B);
l.F("assertThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments), e = z(1, arguments);
  _assert(e, "function" == typeof d, "Argument passed to assertThrows is not a function");
  try {
    d();
  } catch (f) {
    return f && l.G(f.stacktrace) && l.G(f.message) && (d = f.message.length - f.stacktrace.length, f.message.indexOf(f.stacktrace, d) == d && (f.message = f.message.substr(0, d - 14))), f;
  }
  l.i.l.nd(e, "No exception thrown from function passed to assertThrows");
});
l.F("assertNotThrows", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, "function" == typeof e, "Argument passed to assertNotThrows is not a function");
  try {
    return e();
  } catch (f) {
    d = (d ? d + "\n" : "") + "A non expected exception was thrown from function passed to assertNotThrows", l.i.l.nd(d, f.stack || f.stacktrace || f.toString());
  }
});
l.F("assertTrue", C);
l.F("assertFalse", function(a, c) {
  _validateArguments(1, arguments);
  var d = z(1, arguments), e = A(1, 1, arguments);
  _assert(d, l.cd(e), "Bad argument to assertFalse(boolean)");
  _assert(d, !e, "Call to assertFalse(boolean) with true");
});
l.F("assertEquals", D);
l.F("assertNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments);
  _assert(z(2, arguments), A(1, 2, arguments) !== e, "Expected not to be " + _displayStringForValue(e));
});
l.F("assertNull", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), null === d, l.i.l.eb(null, d));
});
l.F("assertNotNull", E);
l.F("assertUndefined", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 === d, l.i.l.eb(void 0, d));
});
l.F("assertNotUndefined", F);
l.F("assertNotNullNorUndefined", function(a, c) {
  _validateArguments(1, arguments);
  E.apply(null, arguments);
  F.apply(null, arguments);
});
l.F("assertNonEmptyString", function(a, c) {
  _validateArguments(1, arguments);
  var d = A(1, 1, arguments);
  _assert(z(1, arguments), void 0 !== d && null !== d && "string" == typeof d && "" !== d, "Expected non-empty string but was " + _displayStringForValue(d));
});
l.F("assertNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), isNaN(A(1, 1, arguments)), "Expected NaN");
});
l.F("assertNotNaN", function(a, c) {
  _validateArguments(1, arguments);
  _assert(z(1, arguments), !isNaN(A(1, 1, arguments)), "Expected not NaN");
});
l.F("assertObjectEquals", G);
l.F("assertObjectRoughlyEquals", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(3, 3, arguments), g = z(3, arguments) ? z(3, arguments) : "", h = l.i.l.tb(A(1, 3, arguments), A(2, 3, arguments), function(a, c, d) {
    return (a = l.i.l.jm[a]) ? a(c, d, f) ? l.i.l.Ad : l.i.l.eb(c, d) + " which was more than " + f + " away" : l.i.l.zd;
  });
  _assert(g, !h, h);
});
l.F("assertObjectNotEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = z(2, arguments) ? z(2, arguments) : "", f = l.i.l.tb(A(1, 2, arguments), A(2, 2, arguments));
  _assert(e, f, "Objects should not be equal");
});
l.F("assertArrayEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "", h = _trueTypeOf(e);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  h = _trueTypeOf(f);
  _assert(g, "Array" == h, "Expected an array for assertArrayEquals but found a " + h);
  G(g, Array.prototype.concat.call(e), Array.prototype.concat.call(f));
});
l.F("assertElementsEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments) ? z(2, arguments) : "";
  if (e) {
    D("length mismatch: " + g, e.length, f.length);
    for (var h = 0;h < e.length;++h) {
      D("mismatch at index " + h + ": " + g, e[h], f[h]);
    }
  } else {
    B(g, !f);
  }
});
l.F("assertElementsRoughlyEqual", function(a, c, d, e) {
  _validateArguments(3, arguments);
  var f = A(1, 3, arguments), g = A(2, 3, arguments), h = A(3, 3, arguments), k = z(3, arguments) ? z(3, arguments) : "";
  if (f) {
    D("length mismatch: " + k, f.length, g.length);
    for (var n = 0;n < f.length;++n) {
      H(k, f[n], g[n], h);
    }
  } else {
    B(k, !g);
  }
});
l.F("assertSameElements", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments);
  C("Bad arguments to assertSameElements(opt_message, expected: ArrayLike, actual: ArrayLike)", l.W(e) && l.W(f));
  e = l.i.l.af(e);
  f = l.i.l.af(f);
  _assert(g, e.length == f.length, "Expected " + e.length + " elements: [" + e + "], got " + f.length + " elements: [" + f + "]");
  for (var h = l.i.l.af(e), k = 0;k < f.length;k++) {
    var n = l.i.l.Qg(h, f[k]);
    _assert(g, -1 != n, "Expected [" + e + "], got [" + f + "]");
    h.splice(n, 1);
  }
});
l.F("assertEvaluatesToTrue", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) || _assert(z(1, arguments), !1, "Expected to evaluate to true");
});
l.F("assertEvaluatesToFalse", function(a, c) {
  _validateArguments(1, arguments);
  A(1, 1, arguments) && _assert(z(1, arguments), !1, "Expected to evaluate to false");
});
l.F("assertHTMLEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(2, 2, arguments), f = J(A(1, 2, arguments)), e = J(e);
  _assert(z(2, arguments), f === e, l.i.l.eb(f, e));
});
l.F("assertHashEquals", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments), g = z(2, arguments), h;
  for (h in e) {
    _assert(g, h in f, "Expected hash had key " + h + " that was not found"), _assert(g, e[h] == f[h], "Value for key " + h + " mismatch - expected = " + e[h] + ", actual = " + f[h]);
  }
  for (h in f) {
    _assert(g, h in e, "Actual hash had key " + h + " that was not expected");
  }
});
l.F("assertRoughlyEquals", H);
l.F("assertContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), l.i.l.hg(f, e), "Expected '" + f + "' to contain '" + e + "'");
});
l.F("assertNotContains", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  _assert(z(2, arguments), !l.i.l.hg(f, e), "Expected '" + f + "' not to contain '" + e + "'");
});
l.F("assertRegExp", function(a, c, d) {
  _validateArguments(2, arguments);
  var e = A(1, 2, arguments), f = A(2, 2, arguments);
  "string" == typeof e && (e = new RegExp(e));
  _assert(z(2, arguments), e.test(f), "Expected '" + f + "' to match RegExp " + e.toString());
});
chrome.cast.a.Cd = {UNKNOWN:"unknown", STATE_CHANGED:"state_changed", GAME_MESSAGE_RECEIVED:"game_message_received"};
l.w(chrome.cast.a, "GameManagerEventType", chrome.cast.a.Cd);
chrome.cast.a.wi = function() {
};
l.w(chrome.cast.a, "GameManagerEvent", chrome.cast.a.wi);
chrome.cast.a.Bf = function(a, c) {
  this.type = chrome.cast.a.Cd.STATE_CHANGED;
  this.currentState = a;
  this.previousState = c;
};
l.w(chrome.cast.a, "GameManagerStateChangedEvent", chrome.cast.a.Bf);
chrome.cast.a.yf = function(a, c) {
  this.type = chrome.cast.a.Cd.GAME_MESSAGE_RECEIVED;
  this.playerId = a;
  this.gameMessage = c;
};
l.w(chrome.cast.a, "GameManagerGameMessageReceivedEvent", chrome.cast.a.yf);
chrome.cast.a.zf = function(a) {
  this.gameManagerClient = a;
};
l.w(chrome.cast.a, "GameManagerInstanceResult", chrome.cast.a.zf);
chrome.cast.a.v = function(a, c, d, e, f, g, h) {
  this.Yf = a;
  this.th = c;
  this.He = d;
  this.le = e;
  this.je = f;
  this.ke = g;
  this.zb = new l.A.Map;
  for (a = 0;a < h.length;a++) {
    c = h[a], this.zb.set(c.gb(), c);
  }
};
l.w(chrome.cast.a, "GameManagerState", chrome.cast.a.v);
chrome.cast.a.v.prototype.Ag = function() {
  return this.Yf;
};
l.w(chrome.cast.a.v.prototype, "getApplicationName", chrome.cast.a.v.prototype.Ag);
chrome.cast.a.v.prototype.Eg = function() {
  return this.th;
};
l.w(chrome.cast.a.v.prototype, "getMaxPlayers", chrome.cast.a.v.prototype.Eg);
chrome.cast.a.v.prototype.re = function() {
  return this.He;
};
l.w(chrome.cast.a.v.prototype, "getLobbyState", chrome.cast.a.v.prototype.re);
chrome.cast.a.v.prototype.oe = function() {
  return this.le;
};
l.w(chrome.cast.a.v.prototype, "getGameplayState", chrome.cast.a.v.prototype.oe);
chrome.cast.a.v.prototype.me = function() {
  return this.je;
};
l.w(chrome.cast.a.v.prototype, "getGameData", chrome.cast.a.v.prototype.me);
chrome.cast.a.v.prototype.ne = function() {
  return this.ke;
};
l.w(chrome.cast.a.v.prototype, "getGameStatusText", chrome.cast.a.v.prototype.ne);
chrome.cast.a.v.prototype.te = function() {
  return this.zb.V();
};
l.w(chrome.cast.a.v.prototype, "getPlayers", chrome.cast.a.v.prototype.te);
chrome.cast.a.v.prototype.Ka = function(a) {
  return this.zb.get(a, null);
};
l.w(chrome.cast.a.v.prototype, "getPlayer", chrome.cast.a.v.prototype.Ka);
chrome.cast.a.v.prototype.zk = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.wc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getControllablePlayers", chrome.cast.a.v.prototype.zk);
chrome.cast.a.v.prototype.yk = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.ye() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedPlayers", chrome.cast.a.v.prototype.yk);
chrome.cast.a.v.prototype.xk = function() {
  for (var a = [], c = this.zb.V(), d = 0;d < c.length;d++) {
    var e = c[d];
    e.ye() && e.wc() && a.push(e);
  }
  return a;
};
l.w(chrome.cast.a.v.prototype, "getConnectedControllablePlayers", chrome.cast.a.v.prototype.xk);
chrome.cast.a.v.prototype.Lk = function(a) {
  for (var c = [], d = this.zb.V(), e = 0;e < d.length;e++) {
    var f = d[e];
    f.rc() == a && c.push(f);
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getPlayersInState", chrome.cast.a.v.prototype.Lk);
chrome.cast.a.v.prototype.$k = function(a) {
  return this.He != a.re();
};
l.w(chrome.cast.a.v.prototype, "hasLobbyStateChanged", chrome.cast.a.v.prototype.$k);
chrome.cast.a.v.prototype.Zk = function(a) {
  return this.le != a.oe();
};
l.w(chrome.cast.a.v.prototype, "hasGameplayStateChanged", chrome.cast.a.v.prototype.Zk);
chrome.cast.a.v.prototype.Xk = function(a) {
  return null != l.i.l.tb(this.je, a.me());
};
l.w(chrome.cast.a.v.prototype, "hasGameDataChanged", chrome.cast.a.v.prototype.Xk);
chrome.cast.a.v.prototype.Yk = function(a) {
  return this.ke != a.ne();
};
l.w(chrome.cast.a.v.prototype, "hasGameStatusTextChanged", chrome.cast.a.v.prototype.Yk);
chrome.cast.a.v.prototype.bl = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? !d.qa(e) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerChanged", chrome.cast.a.v.prototype.bl);
chrome.cast.a.v.prototype.dl = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? d.rc() != e.rc() : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerStateChanged", chrome.cast.a.v.prototype.dl);
chrome.cast.a.v.prototype.cl = function(a, c) {
  var d = this.Ka(a), e = c.Ka(a);
  return null == d && null == e ? !1 : null != d && null != e ? null != l.i.l.tb(d.Yc(), e.Yc()) : !0;
};
l.w(chrome.cast.a.v.prototype, "hasPlayerDataChanged", chrome.cast.a.v.prototype.cl);
chrome.cast.a.v.prototype.Dg = function(a) {
  for (var c = [], d = this.te(), e = 0;e < d.length;e++) {
    var f = d[e], g = a.Ka(f.gb());
    null != g && f.qa(g) || c.push(f.gb());
  }
  a = a.te();
  for (e = 0;e < a.length;e++) {
    g = a[e], f = this.Ka(g.gb()), null != f || l.c.contains(c, g.gb()) || c.push(g.gb());
  }
  return c;
};
l.w(chrome.cast.a.v.prototype, "getListOfChangedPlayers", chrome.cast.a.v.prototype.Dg);
chrome.cast.a.v.prototype.qa = function(a) {
  return this.Yf == a.Ag() && this.th == a.Eg() && this.He == a.re() && this.le == a.oe() && this.ke == a.ne() && 0 == this.Dg(a).length && !l.i.l.tb(this.je, a.me());
};
l.w(chrome.cast.a.v.prototype, "equals", chrome.cast.a.v.prototype.qa);
chrome.cast.a.Y = function(a, c, d, e) {
  this.playerId_ = a;
  this.playerState_ = c;
  this.playerData_ = d;
  this.Yg = e;
};
l.w(chrome.cast.a, "PlayerInfo", chrome.cast.a.Y);
chrome.cast.a.Y.prototype.gb = function() {
  return this.playerId_;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerId", chrome.cast.a.Y.prototype.gb);
chrome.cast.a.Y.prototype.rc = function() {
  return this.playerState_;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerState", chrome.cast.a.Y.prototype.rc);
chrome.cast.a.Y.prototype.Yc = function() {
  return this.playerData_;
};
l.w(chrome.cast.a.Y.prototype, "getPlayerData", chrome.cast.a.Y.prototype.Yc);
chrome.cast.a.Y.prototype.wc = function() {
  return this.Yg;
};
l.w(chrome.cast.a.Y.prototype, "isControllable", chrome.cast.a.Y.prototype.wc);
chrome.cast.a.Y.prototype.ye = function() {
  return this.playerState_ == chrome.cast.a.PlayerState.IDLE || this.playerState_ == chrome.cast.a.PlayerState.AVAILABLE || this.playerState_ == chrome.cast.a.PlayerState.PLAYING || this.playerState_ == chrome.cast.a.PlayerState.READY;
};
l.w(chrome.cast.a.Y.prototype, "isConnected", chrome.cast.a.Y.prototype.ye);
chrome.cast.a.Y.prototype.qa = function(a) {
  return this.playerId_ == a.gb() && this.playerState_ == a.rc() && this.Yg == a.wc() && !l.i.l.tb(this.playerData_, a.Yc());
};
l.w(chrome.cast.a.Y.prototype, "equals", chrome.cast.a.Y.prototype.qa);
chrome.cast.a.u = function(a) {
  this.ga = new chrome.cast.a.D.ab(a);
  this.nc = new l.events.EventTarget;
  this.Bc = this.Kb = this.Wc = null;
  this.$g = this.Rg = !1;
  this.Kj = l.bind(this.cm, this);
  this.Lj = l.bind(this.bn, this);
  this.Pc = this.Oc = null;
  this.ga.Pm(this.Kj, this.Lj);
};
l.w(chrome.cast.a, "GameManagerClient", chrome.cast.a.u);
chrome.cast.a.u.Fk = function(a, c, d) {
  (new chrome.cast.a.u(a)).il(c, d);
};
l.w(chrome.cast.a.u, "getInstanceFor", chrome.cast.a.u.Fk);
chrome.cast.a.u.prototype.il = function(a, c) {
  if (this.Rg) {
    throw Error("Attempted to initialize the GameManagerClient more than once.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to initialize the GameManagerClient after it was disposed.");
  }
  this.Rg = !0;
  var d = this;
  this.ga.wm(function() {
    a(new chrome.cast.a.zf(d));
  }, c);
};
chrome.cast.a.u.prototype.Ta = function() {
  this.isDisposed() || (this.ga.Ta(), this.nc.Ta(), this.ga = null, this.$g = !0);
};
l.w(chrome.cast.a.u.prototype, "dispose", chrome.cast.a.u.prototype.Ta);
chrome.cast.a.u.prototype.isDisposed = function() {
  return this.$g;
};
l.w(chrome.cast.a.u.prototype, "isDisposed", chrome.cast.a.u.prototype.isDisposed);
chrome.cast.a.u.prototype.zm = function(a, c, d) {
  var e = this.ga.Ea();
  this.Ma(e, chrome.cast.a.PlayerState.AVAILABLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequest", chrome.cast.a.u.prototype.zm);
chrome.cast.a.u.prototype.Am = function(a, c, d, e) {
  this.Ma(a, chrome.cast.a.PlayerState.AVAILABLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerAvailableRequestWithPlayerId", chrome.cast.a.u.prototype.Am);
chrome.cast.a.u.prototype.Hm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(e, chrome.cast.a.PlayerState.READY, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequest", chrome.cast.a.u.prototype.Hm);
chrome.cast.a.u.prototype.Im = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(a, chrome.cast.a.PlayerState.READY, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerReadyRequestWithPlayerId", chrome.cast.a.u.prototype.Im);
chrome.cast.a.u.prototype.Bm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(e, chrome.cast.a.PlayerState.IDLE, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequest", chrome.cast.a.u.prototype.Bm);
chrome.cast.a.u.prototype.Cm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(a, chrome.cast.a.PlayerState.IDLE, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerIdleRequestWithPlayerId", chrome.cast.a.u.prototype.Cm);
chrome.cast.a.u.prototype.Dm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(e, chrome.cast.a.PlayerState.PLAYING, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequest", chrome.cast.a.u.prototype.Dm);
chrome.cast.a.u.prototype.Em = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(a, chrome.cast.a.PlayerState.PLAYING, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerPlayingRequestWithPlayerId", chrome.cast.a.u.prototype.Em);
chrome.cast.a.u.prototype.Fm = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send player request - no last used player ID found.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(e, chrome.cast.a.PlayerState.QUIT, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequest", chrome.cast.a.u.prototype.Fm);
chrome.cast.a.u.prototype.Gm = function(a, c, d, e) {
  if (!a) {
    throw Error("Cannot send player request - no player ID provided.To register a new player, use setPlayerAvailableRequest()");
  }
  this.Ma(a, chrome.cast.a.PlayerState.QUIT, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendPlayerQuitRequestWithPlayerId", chrome.cast.a.u.prototype.Gm);
chrome.cast.a.u.prototype.Ma = function(a, c, d, e, f) {
  this.fc();
  c = chrome.cast.a.D.pa.Dk(c);
  this.ga.Ve(a, c, d, e, f);
};
chrome.cast.a.u.prototype.ym = function(a, c, d) {
  var e = this.ga.Ea();
  if (!e) {
    throw Error("Cannot send game request - no last used player ID found.");
  }
  this.Oh(e, a, c, d);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequest", chrome.cast.a.u.prototype.ym);
chrome.cast.a.u.prototype.Oh = function(a, c, d, e) {
  this.fc();
  this.ga.Ve(a, chrome.cast.a.D.pa.ui, c, d, e);
};
l.w(chrome.cast.a.u.prototype, "sendGameRequestWithPlayerId", chrome.cast.a.u.prototype.Oh);
chrome.cast.a.u.prototype.xm = function(a) {
  var c = this.ga.Ea();
  if (!c) {
    throw Error("Cannot send game message - no last used player ID found.");
  }
  this.Nh(c, a);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessage", chrome.cast.a.u.prototype.xm);
chrome.cast.a.u.prototype.Nh = function(a, c) {
  this.fc();
  this.ga.Ve(a, chrome.cast.a.D.pa.GAME_MESSAGE, c, null, null);
};
l.w(chrome.cast.a.u.prototype, "sendGameMessageWithPlayerId", chrome.cast.a.u.prototype.Nh);
chrome.cast.a.u.prototype.addEventListener = function(a, c) {
  this.nc.listen(a, c);
};
l.w(chrome.cast.a.u.prototype, "addEventListener", chrome.cast.a.u.prototype.addEventListener);
chrome.cast.a.u.prototype.removeEventListener = function(a, c) {
  this.nc.Xb(a, c);
};
l.w(chrome.cast.a.u.prototype, "removeEventListener", chrome.cast.a.u.prototype.removeEventListener);
chrome.cast.a.u.prototype.Ak = function() {
  this.fc();
  return this.Kb;
};
l.w(chrome.cast.a.u.prototype, "getCurrentState", chrome.cast.a.u.prototype.Ak);
chrome.cast.a.u.prototype.Ea = function() {
  this.fc();
  return this.ga.Ea();
};
l.w(chrome.cast.a.u.prototype, "getLastUsedPlayerId", chrome.cast.a.u.prototype.Ea);
b = chrome.cast.a.u.prototype;
b.cm = function(a) {
  if (a.statusCode != chrome.cast.a.D.Ha.Sd) {
    throw Error("Expecting a successful response message but got an error for request ID " + a.requestId);
  }
  if (this.Be() || a.gameManagerConfig) {
    if (a.gameManagerConfig && (this.Wc = a.gameManagerConfig), this.Be()) {
      this.Bc = this.Kb;
      for (var c = [], d = 0;d < a.players.length;d++) {
        var e = a.players[d], f = e.playerId;
        c.push(new chrome.cast.a.Y(f, e.playerState, e.playerData, this.ga.xl(f)));
      }
      this.Kb = new chrome.cast.a.v(this.Wc.applicationName, this.Wc.maxPlayers, a.lobbyState, a.gameplayState, a.gameData, a.gameStatusText, c);
      c = this.Kb.Ka(a.playerId);
      null != c && c.wc() && a.type == chrome.cast.a.D.bc.GAME_MESSAGE && (this.Oc = a.playerId, this.Pc = a.extraMessageData);
    }
  }
};
b.bn = function() {
  null == this.Bc || this.Kb.qa(this.Bc) || this.gk(this.Kb, this.Bc);
  null != this.Oc && null != this.Pc && this.fk(this.Oc, this.Pc);
  this.Pc = this.Oc = this.Bc = null;
};
b.Be = function() {
  return null != this.Wc;
};
b.gk = function(a, c) {
  this.nc.dispatchEvent(new chrome.cast.a.Bf(a, c));
};
b.fk = function(a, c) {
  this.nc.dispatchEvent(new chrome.cast.a.yf(a, c));
};
b.fc = function() {
  if (!this.Be()) {
    throw Error("Attempted to perform an operation on the GameManagerClient before it was initialized.");
  }
  if (this.isDisposed()) {
    throw Error("Attempted to perform an operation on the GameManagerClient after it was disposed.");
  }
};
chrome.cast.a.D.vi = function() {
  this.applicationName = "[APPLICATION_NAME_NOT_SET]";
  this.maxPlayers = -1;
  this.version = "[INVALID_VERSION]";
};
l.F("chrome.cast.games.internal.GameManagerConfig", chrome.cast.a.D.vi);
chrome.cast.a.D.$i = function() {
  this.playerId = "";
  this.playerState = chrome.cast.a.PlayerState.UNKNOWN;
  this.playerData = null;
};
l.F("chrome.cast.games.internal.PlayerInfoMessageComponent", chrome.cast.a.D.$i);
})();
