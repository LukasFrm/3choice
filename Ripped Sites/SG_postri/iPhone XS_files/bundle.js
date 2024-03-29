/*! @sentry/browser 4.0.6 (f474d18) | https://github.com/getsentry/sentry-javascript */
var Sentry = function(t) {
    "use strict";
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, n)
    };

    function n(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
    var r = function() {
        return (r = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function o(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                t.done ? o(t.value) : new n(function(e) {
                    e(t.value)
                }).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        })
    }

    function i(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
        return t
    }
    var s = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function c(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function l(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var f = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
            }(e.Severity || (e.Severity = {})),
            function(t) {
                t.fromString = function(e) {
                    switch (e) {
                        case "debug":
                            return t.Debug;
                        case "info":
                            return t.Info;
                        case "warn":
                        case "warning":
                            return t.Warning;
                        case "error":
                            return t.Error;
                        case "fatal":
                            return t.Fatal;
                        case "critical":
                            return t.Critical;
                        case "log":
                        default:
                            return t.Log
                    }
                }
            }(e.Severity || (e.Severity = {})),
            function(t) {
                t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
            }(e.Status || (e.Status = {})),
            function(t) {
                t.fromHttpCode = function(e) {
                    return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                }
            }(e.Status || (e.Status = {}))
    });
    c(f);
    var p = f.Severity,
        h = f.Status,
        d = l(function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isError = function(t) {
                switch (Object.prototype.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return t instanceof Error
                }
            }, e.isErrorEvent = function(t) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(t)
            }, e.isDOMError = function(t) {
                return "[object DOMError]" === Object.prototype.toString.call(t)
            }, e.isDOMException = function(t) {
                return "[object DOMException]" === Object.prototype.toString.call(t)
            }, e.isUndefined = function(t) {
                return void 0 === t
            }, e.isFunction = function(t) {
                return "function" == typeof t
            }, e.isString = function(t) {
                return "[object String]" === Object.prototype.toString.call(t)
            }, e.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, e.isPlainObject = function(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }, e.isRegExp = function(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }
        });
    c(d);
    var v = d.isError,
        y = d.isErrorEvent,
        g = d.isDOMError,
        b = d.isDOMException,
        m = d.isUndefined,
        _ = d.isFunction,
        E = d.isString,
        w = (d.isArray, d.isPlainObject),
        x = (d.isRegExp, l(function(t, e) {
            function n() {
                return "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : {}
            }

            function r(t) {
                var e, n, r, o, i, a = [];
                if (!t || !t.tagName) return "";
                if (a.push(t.tagName.toLowerCase()), t.id && a.push("#" + t.id), (e = t.className) && d.isString(e))
                    for (n = e.split(/\s+/), i = 0; i < n.length; i++) a.push("." + n[i]);
                var u = ["type", "name", "title", "alt"];
                for (i = 0; i < u.length; i++) r = u[i], (o = t.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                return a.join("")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getGlobalObject = n, e.uuid4 = function() {
                var t = n(),
                    e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var r = new Uint16Array(8);
                    e.getRandomValues(r), r[3] = 4095 & r[3] | 16384, r[4] = 16383 & r[4] | 32768;
                    var o = function(t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return o(r[0]) + o(r[1]) + o(r[2]) + o(r[3]) + o(r[4]) + o(r[5]) + o(r[6]) + o(r[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            }, e.htmlTreeAsString = function(t) {
                for (var e, n = t, o = [], i = 0, a = 0, u = " > ".length; n && i++ < 5 && !("html" === (e = r(n)) || i > 1 && a + o.length * u + e.length >= 80);) o.push(e), a += e.length, n = n.parentNode;
                return o.reverse().join(" > ")
            }, e.htmlElementAsString = r, e.parseUrl = function(t) {
                if (!t) return {};
                var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    relative: e[5] + n + r
                }
            }, e.getEventDescription = function(t) {
                if (t.message) return t.message;
                if (t.exception && t.exception.values && t.exception.values[0]) {
                    var e = t.exception.values[0];
                    return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
                }
                return t.event_id || "<unknown>"
            }
        }));
    c(x);
    var S = x.getGlobalObject,
        k = (x.uuid4, x.htmlTreeAsString),
        O = (x.htmlElementAsString, x.parseUrl),
        j = x.getEventDescription,
        T = l(function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = x.getGlobalObject(),
                r = new(function() {
                    function t() {
                        this.console = n.console, this.disabled = !0
                    }
                    return t.prototype.disable = function() {
                        this.disabled = !0
                    }, t.prototype.enable = function() {
                        this.disabled = !1
                    }, t.prototype.log = function(t) {
                        this.disabled || this.console.log("Sentry Logger [Log]: " + t)
                    }, t.prototype.warn = function(t) {
                        this.disabled || this.console.warn("Sentry Logger [Warn]: " + t)
                    }, t.prototype.error = function(t) {
                        this.disabled || this.console.error("Sentry Logger [Error]: " + t)
                    }, t
                }());
            e.logger = r
        });
    c(T);
    T.logger;
    var M = l(function(t, e) {
        var n = s && s.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            r = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            o = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            },
            i = s && s.__values || function(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            },
            a = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            u = s && s.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var c = function() {
            function t() {
                this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {}
            }
            return t.prototype.addScopeListener = function(t) {
                this.scopeListeners.push(t)
            }, t.prototype.addEventProcessor = function(t) {
                return this.eventProcessors.push(t), this
            }, t.prototype.notifyScopeListeners = function() {
                var t = this;
                this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function() {
                    t.scopeListeners.forEach(function(e) {
                        e(t)
                    }), t.notifyingListeners = !1
                }, 0))
            }, t.prototype.notifyEventProcessors = function(t, e) {
                return r(this, void 0, void 0, function() {
                    var r, a, u, s, c, l, f;
                    return o(this, function(o) {
                        switch (o.label) {
                            case 0:
                                u = t, o.label = 1;
                            case 1:
                                o.trys.push([1, 8, 9, 10]), s = i(this.eventProcessors), c = s.next(), o.label = 2;
                            case 2:
                                if (c.done) return [3, 7];
                                l = c.value, o.label = 3;
                            case 3:
                                return o.trys.push([3, 5, , 6]), [4, l(n({}, u), e)];
                            case 4:
                                return null === (u = o.sent()) ? [2, null] : [3, 6];
                            case 5:
                                return o.sent(), [3, 6];
                            case 6:
                                return c = s.next(), [3, 2];
                            case 7:
                                return [3, 10];
                            case 8:
                                return f = o.sent(), r = {
                                    error: f
                                }, [3, 10];
                            case 9:
                                try {
                                    c && !c.done && (a = s.return) && a.call(s)
                                } finally {
                                    if (r) throw r.error
                                }
                                return [7];
                            case 10:
                                return [2, u]
                        }
                    })
                })
            }, t.prototype.setUser = function(t) {
                return this.user = t, this.notifyScopeListeners(), this
            }, t.prototype.setTag = function(t, e) {
                var r;
                return this.tags = n({}, this.tags, ((r = {})[t] = e, r)), this.notifyScopeListeners(), this
            }, t.prototype.setExtra = function(t, e) {
                var r;
                return this.extra = n({}, this.extra, ((r = {})[t] = e, r)), this.notifyScopeListeners(), this
            }, t.prototype.setFingerprint = function(t) {
                return this.fingerprint = t, this.notifyScopeListeners(), this
            }, t.prototype.setLevel = function(t) {
                return this.level = t, this.notifyScopeListeners(), this
            }, t.clone = function(e) {
                var n = new t;
                return Object.assign(n, e, {
                    scopeListeners: []
                }), e && (n.eventProcessors = u(e.eventProcessors)), n
            }, t.prototype.getTags = function() {
                return this.tags
            }, t.prototype.getExtra = function() {
                return this.extra
            }, t.prototype.getUser = function() {
                return this.user
            }, t.prototype.getFingerprint = function() {
                return this.fingerprint
            }, t.prototype.getBreadcrumbs = function() {
                return this.breadcrumbs
            }, t.prototype.getLevel = function() {
                return this.level
            }, t.prototype.clear = function() {
                this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, this.fingerprint = void 0, this.notifyScopeListeners()
            }, t.prototype.addBreadcrumb = function(t, e) {
                this.breadcrumbs = void 0 !== e && e >= 0 ? u(this.breadcrumbs, [t]).slice(-e) : u(this.breadcrumbs, [t]), this.notifyScopeListeners()
            }, t.prototype.applyToEvent = function(t, e, i) {
                return r(this, void 0, void 0, function() {
                    return o(this, function(r) {
                        return this.extra && Object.keys(this.extra).length && (t.extra = n({}, this.extra, t.extra)), this.tags && Object.keys(this.tags).length && (t.tags = n({}, this.tags, t.tags)), this.user && Object.keys(this.user).length && (t.user = n({}, this.user, t.user)), this.fingerprint && void 0 === t.fingerprint && (t.fingerprint = this.fingerprint), this.level && void 0 === t.level && (t.level = this.level), (!t.breadcrumbs || 0 === t.breadcrumbs.length) && this.breadcrumbs.length > 0 && (t.breadcrumbs = void 0 !== i && i >= 0 ? this.breadcrumbs.slice(-i) : this.breadcrumbs), [2, this.notifyEventProcessors(t, e)]
                    })
                })
            }, t
        }();
        e.Scope = c
    });
    c(M);
    M.Scope;
    var B = l(function(t, e) {
        var n = s && s.__assign || function() {
                return (n = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            r = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            o = s && s.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.API_VERSION = 3;
        var i = function() {
            function t(t, n, r) {
                void 0 === n && (n = new M.Scope), void 0 === r && (r = e.API_VERSION), this.version = r, this.stack = [], this.stack.push({
                    client: t,
                    scope: n
                })
            }
            return t.prototype.invokeClient = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var i = this.getStackTop();
                i && i.client && i.client[t] && (e = i.client)[t].apply(e, o(n, [i.scope]))
            }, t.prototype.invokeClientAsync = function(t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var i = this.getStackTop();
                i && i.client && i.client[t] && (e = i.client)[t].apply(e, o(n, [i.scope])).catch(function(t) {
                    console.error(t)
                })
            }, t.prototype.isOlderThan = function(t) {
                return this.version < t
            }, t.prototype.bindClient = function(t) {
                var e = this.getStackTop();
                e.client = t, e && e.scope && t && e.scope.addScopeListener(function(e) {
                    if (t.getBackend) try {
                        t.getBackend().storeScope(e)
                    } catch (t) {}
                })
            }, t.prototype.pushScope = function() {
                var t = this.getStack(),
                    e = t.length > 0 ? t[t.length - 1].scope : void 0,
                    n = M.Scope.clone(e);
                return this.getStack().push({
                    client: this.getClient(),
                    scope: n
                }), n
            }, t.prototype.popScope = function() {
                return void 0 !== this.getStack().pop()
            }, t.prototype.withScope = function(t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }, t.prototype.getClient = function() {
                return this.getStackTop().client
            }, t.prototype.getScope = function() {
                return this.getStackTop().scope
            }, t.prototype.getStack = function() {
                return this.stack
            }, t.prototype.getStackTop = function() {
                return this.stack[this.stack.length - 1]
            }, t.prototype.captureException = function(t, e) {
                var r = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureException", t, n({}, e, {
                    event_id: r
                })), r
            }, t.prototype.captureMessage = function(t, e, r) {
                var o = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureMessage", t, e, n({}, r, {
                    event_id: o
                })), o
            }, t.prototype.captureEvent = function(t, e) {
                var r = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureEvent", t, n({}, e, {
                    event_id: r
                })), r
            }, t.prototype.lastEventId = function() {
                return this._lastEventId
            }, t.prototype.addBreadcrumb = function(t, e) {
                this.invokeClient("addBreadcrumb", t, n({}, e))
            }, t.prototype.configureScope = function(t) {
                var e = this.getStackTop();
                e.scope && e.client && t(e.scope)
            }, t.prototype.run = function(t) {
                var e = u(this);
                try {
                    t(this)
                } finally {
                    u(e)
                }
            }, t
        }();

        function a() {
            var t = x.getGlobalObject();
            return t.__SENTRY__ = t.__SENTRY__ || {
                hub: void 0
            }, t.__SENTRY__
        }

        function u(t) {
            var e = a(),
                n = e.hub;
            return e.hub = t, n
        }
        e.Hub = i, e.getMainCarrier = a, e.makeMain = u, e.getCurrentHub = function() {
            var t = a();
            return t.hub && !t.hub.isOlderThan(e.API_VERSION) || (t.hub = new i), t.hub
        }, e.getHubFromCarrier = function(t) {
            return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = {}, t.__SENTRY__.hub = new i, t.__SENTRY__.hub)
        }
    });
    c(B);
    B.API_VERSION, B.Hub, B.getMainCarrier, B.makeMain, B.getCurrentHub, B.getHubFromCarrier;
    var P = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Scope = M.Scope, e.getCurrentHub = B.getCurrentHub, e.getHubFromCarrier = B.getHubFromCarrier, e.Hub = B.Hub
    });
    c(P);
    P.Scope, P.getCurrentHub, P.getHubFromCarrier, P.Hub;
    var I = l(function(t, e) {
        var n = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = s && s.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
                return t
            };

        function o(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = P.getCurrentHub();
            if (o && o[t]) return o[t].apply(o, r(e));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.captureException = function(t) {
            var e;
            try {
                throw new Error("Sentry syntheticException")
            } catch (t) {
                e = t
            }
            return o("captureException", t, {
                originalException: t,
                syntheticException: e
            })
        }, e.captureMessage = function(t, e) {
            var n;
            try {
                throw new Error(t)
            } catch (t) {
                n = t
            }
            return o("captureMessage", t, e, {
                originalException: t,
                syntheticException: n
            })
        }, e.captureEvent = function(t) {
            return o("captureEvent", t)
        }, e.addBreadcrumb = function(t) {
            o("addBreadcrumb", t)
        }, e.configureScope = function(t) {
            o("configureScope", t)
        }, e.withScope = function(t) {
            o("withScope", t)
        }, e._callOnClient = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            o.apply(void 0, r(["invokeClient", t], e))
        }
    });
    c(I);
    I.captureException, I.captureMessage, I.captureEvent, I.addBreadcrumb, I.configureScope, I.withScope, I._callOnClient;
    var F = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = "[NaN]",
            r = "[undefined]";

        function o() {
            var t = [],
                e = [];
            return function(o, i) {
                var a = i;
                if (Number.isNaN(i) ? a = n : d.isUndefined(i) && (a = r), t.length > 0) {
                    var u = t.indexOf(this); - 1 !== u ? (t.splice(u + 1), e.splice(u, 1 / 0, o)) : (t.push(this), e.push(o)), -1 !== t.indexOf(a) && (a = function(n, r) {
                        return t[0] === r ? "[Circular ~]" : "[Circular ~." + e.slice(0, t.indexOf(r)).join(".") + "]"
                    }.call(this, o, a))
                } else t.push(a);
                return a instanceof Error ? function(t) {
                    var e = {
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    };
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(a) : a
            }
        }

        function i(t, e) {
            return e === n ? NaN : e !== r ? e : void 0
        }

        function a(t) {
            return JSON.stringify(t, o())
        }

        function u(t) {
            return JSON.parse(t, i)
        }
        e.serialize = a, e.deserialize = u, e.clone = function(t) {
            return u(a(t))
        }, e.fill = function(t, e, n) {
            if (e in t) {
                var r = t[e],
                    o = n(r);
                o.__sentry__ = !0, o.__sentry_original__ = r, o.__sentry_wrapped__ = o, t[e] = o
            }
        }, e.urlEncode = function(t) {
            return Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&")
        };
        var s = 3,
            c = 51200,
            l = 40;

        function f(t) {
            return function(t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }

        function p(t) {
            if ("string" == typeof t) return t.length <= 40 ? t : t.substr(0, 39) + "…";
            if ("number" == typeof t || "boolean" == typeof t || void 0 === t) return t;
            if (Number.isNaN(t)) return "[NaN]";
            if (d.isUndefined(t)) return "[undefined]";
            var e = Object.prototype.toString.call(t);
            if ("[object Object]" === e) return "[Object]";
            if ("[object Array]" === e) return "[Array]";
            if ("[object Function]" === e) {
                var n = t.name;
                return n ? "[Function: " + n + "]" : "[Function]"
            }
            return t
        }

        function h(t, e) {
            if (0 === e) return p(t);
            if (d.isPlainObject(t)) {
                var n = {},
                    r = t;
                return Object.keys(r).forEach(function(t) {
                    n[t] = h(r[t], e - 1)
                }), n
            }
            return Array.isArray(t) ? t.map(function(t) {
                return h(t, e - 1)
            }) : p(t)
        }
        e.serializeObject = h, e.limitObjectDepthToSize = function t(e, n, r) {
            void 0 === n && (n = s), void 0 === r && (r = c);
            var o = h(e, n);
            return f(a(o)) > r ? t(e, n - 1) : o
        }, e.serializeKeysToEventMessage = function(t, e) {
            if (void 0 === e && (e = l), !t.length) return "[object has no keys]";
            if (t[0].length >= e) return t[0];
            for (var n = t.length; n > 0; n--) {
                var r = t.slice(0, n).join(", ");
                if (!(r.length > e)) return n === t.length ? r : r + "…"
            }
            return ""
        }
    });
    c(F);
    var C = F.serialize,
        D = F.deserialize,
        R = (F.clone, F.fill),
        A = (F.urlEncode, F.serializeObject),
        L = F.limitObjectDepthToSize,
        U = F.serializeKeysToEventMessage,
        H = l(function(t, e) {
            var n, r = s && s.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function r() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function(t) {
                function e(e) {
                    var n = this.constructor,
                        r = t.call(this, e) || this;
                    return r.message = e, r.name = n.prototype.constructor.name, Object.setPrototypeOf(r, n.prototype), r
                }
                return r(e, t), e
            }(Error);
            e.SentryError = o
        });
    c(H);
    H.SentryError;
    var N = l(function(t, e) {
        var n = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = s && s.__values || function(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
            i = function() {
                function t(t) {
                    "string" == typeof t ? this.fromString(t) : this.fromComponents(t), this.validate()
                }
                return t.prototype.toString = function(t) {
                    void 0 === t && (t = !1);
                    var e = this,
                        n = e.host,
                        r = e.path,
                        o = e.pass,
                        i = e.port,
                        a = e.projectId;
                    return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
                }, t.prototype.fromString = function(t) {
                    var e = o.exec(t);
                    if (!e) throw new H.SentryError("Invalid Dsn");
                    var r = n(e.slice(1), 6),
                        i = r[0],
                        a = r[1],
                        u = r[2],
                        s = void 0 === u ? "" : u,
                        c = r[3],
                        l = r[4],
                        f = void 0 === l ? "" : l,
                        p = "",
                        h = r[5],
                        d = h.split("/");
                    d.length > 1 && (p = d.slice(0, -1).join("/"), h = d.pop()), Object.assign(this, {
                        host: c,
                        pass: s,
                        path: p,
                        projectId: h,
                        port: f,
                        protocol: i,
                        user: a
                    })
                }, t.prototype.fromComponents = function(t) {
                    this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                }, t.prototype.validate = function() {
                    var t, e;
                    try {
                        for (var n = r(["protocol", "user", "host", "projectId"]), o = n.next(); !o.done; o = n.next()) {
                            var i = o.value;
                            if (!this[i]) throw new H.SentryError("Invalid Dsn: Missing " + i)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (e = n.return) && e.call(n)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    if ("http" !== this.protocol && "https" !== this.protocol) throw new H.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                    if (this.port && isNaN(parseInt(this.port, 10))) throw new H.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"')
                }, t
            }();
        e.Dsn = i
    });
    c(N);
    N.Dsn;
    var G = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t(t) {
                this.dsn = t, this.dsnObject = new N.Dsn(t)
            }
            return t.prototype.getDsn = function() {
                return this.dsnObject
            }, t.prototype.getStoreEndpoint = function() {
                return "" + this.getBaseUrl() + this.getStoreEndpointPath()
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                var t = {
                    sentry_key: this.dsnObject.user,
                    sentry_version: "7"
                };
                return this.getStoreEndpoint() + "?" + F.urlEncode(t)
            }, t.prototype.getBaseUrl = function() {
                var t = this.dsnObject,
                    e = t.protocol ? t.protocol + ":" : "",
                    n = t.port ? ":" + t.port : "";
                return e + "//" + t.host + n
            }, t.prototype.getStoreEndpointPath = function() {
                var t = this.dsnObject;
                return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            }, t.prototype.getRequestHeaders = function(t, e) {
                var n = this.dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_timestamp=" + (new Date).getTime()), r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, t.prototype.getReportDialogEndpoint = function(t) {
                void 0 === t && (t = {});
                var e = this.dsnObject,
                    n = this.getBaseUrl() + (e.path ? "/" + e.path : "") + "/api/embed/error-page/",
                    r = [];
                for (var o in r.push("dsn=" + e.toString()), t)
                    if ("user" === o) {
                        if (!t.user) continue;
                        t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                    } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                return r.length ? n + "?" + r.join("&") : n
            }, t
        }();
        e.API = n
    });
    c(G);
    G.API;
    var $ = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.forget = function(t) {
            t.catch(function(t) {
                console.error(t)
            })
        }, e.filterAsync = function(t, e, o) {
            return n(this, void 0, void 0, function() {
                var n;
                return r(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Promise.all(t.map(e, o))];
                        case 1:
                            return n = r.sent(), [2, t.filter(function(t, e) {
                                return n[e]
                            })]
                    }
                })
            })
        }
    });
    c($);
    $.forget, $.filterAsync;
    var q = l(function(t, e) {
        var n = s && s.__values || function(t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
                n = 0;
            return e ? e.call(t) : {
                next: function() {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.truncate = function(t, e) {
            return void 0 === e && (e = 0), 0 !== e && d.isString(t) ? t.length <= e ? t : t.substr(0, e) + "…" : t
        }, e.snipLine = function(t, e) {
            var n = t,
                r = n.length;
            if (r <= 150) return n;
            e > r && (e = r);
            var o = Math.max(e - 60, 0);
            o < 5 && (o = 0);
            var i = Math.min(o + 140, r);
            return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
        }, e.safeJoin = function(t, e) {
            var r, o;
            if (!Array.isArray(t)) return "";
            var i = [];
            try {
                for (var a = n(t), u = a.next(); !u.done; u = a.next()) {
                    var s = u.value;
                    try {
                        i.push(String(s))
                    } catch (t) {
                        i.push("[value cannot be serialized]")
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (o = a.return) && o.call(a)
                } finally {
                    if (r) throw r.error
                }
            }
            return i.join(e)
        }
    });
    c(q);
    q.truncate, q.snipLine;
    var z = q.safeJoin,
        V = l(function(t, e) {
            var n = s && s.__assign || function() {
                    return (n = Object.assign || function(t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                r = s && s.__awaiter || function(t, e, n, r) {
                    return new(n || (n = Promise))(function(o, i) {
                        function a(t) {
                            try {
                                s(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                s(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            t.done ? o(t.value) : new n(function(e) {
                                e(t.value)
                            }).then(a, u)
                        }
                        s((r = r.apply(t, e || [])).next())
                    })
                },
                o = s && s.__generator || function(t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                        return this
                    }), i;

                    function u(i) {
                        return function(u) {
                            return function(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t, e) {
                    this.backend = new t(e), this.options = e, e.dsn && (this.dsn = new N.Dsn(e.dsn))
                }
                return t.prototype.install = function() {
                    if (!this.isEnabled()) return this.installed = !1;
                    var t = this.getBackend();
                    return !this.installed && t.install && t.install(), this.installed = !0
                }, t.prototype.buffer = function(t) {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return [2, this.getBackend().getBuffer().add(t)]
                        })
                    })
                }, t.prototype.captureException = function(t, e, n) {
                    return r(this, void 0, void 0, function() {
                        var i = this;
                        return o(this, function(a) {
                            return [2, this.buffer(r(i, void 0, void 0, function() {
                                var r;
                                return o(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this.getBackend().eventFromException(t, e)];
                                        case 1:
                                            return r = o.sent(), [2, this.captureEvent(r, e, n)]
                                    }
                                })
                            }))]
                        })
                    })
                }, t.prototype.captureMessage = function(t, e, n, i) {
                    return r(this, void 0, void 0, function() {
                        var a = this;
                        return o(this, function(u) {
                            return [2, this.buffer(r(a, void 0, void 0, function() {
                                var r;
                                return o(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this.getBackend().eventFromMessage(t, e, n)];
                                        case 1:
                                            return r = o.sent(), [2, this.captureEvent(r, n, i)]
                                    }
                                })
                            }))]
                        })
                    })
                }, t.prototype.captureEvent = function(t, e, n) {
                    return r(this, void 0, void 0, function() {
                        var i = this;
                        return o(this, function(a) {
                            return [2, this.buffer(r(i, void 0, void 0, function() {
                                var i = this;
                                return o(this, function(a) {
                                    return [2, this.processEvent(t, function(t) {
                                        return r(i, void 0, void 0, function() {
                                            return o(this, function(e) {
                                                return [2, this.getBackend().sendEvent(t)]
                                            })
                                        })
                                    }, e, n)]
                                })
                            }))]
                        })
                    })
                }, t.prototype.addBreadcrumb = function(t, e, i) {
                    return r(this, void 0, void 0, function() {
                        var a, u, s, c, l, f, p, h;
                        return o(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    return a = this.getOptions(), u = a.beforeBreadcrumb, s = a.maxBreadcrumbs, (c = void 0 === s ? 30 : s) <= 0 ? [2] : (l = (new Date).getTime() / 1e3, f = n({
                                        timestamp: l
                                    }, t), u ? [4, function(t) {
                                        return r(this, void 0, void 0, function() {
                                            var e, n, r, i;
                                            return o(this, function(o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e = x.getGlobalObject(), n = ["debug", "info", "warn", "error", "log"], "console" in e ? (r = e.console, n.forEach(function(t) {
                                                            t in e.console && r[t].__sentry__ && (r[t] = r[t].__sentry_original__)
                                                        }), [4, t()]) : [2, t()];
                                                    case 1:
                                                        return i = o.sent(), n.forEach(function(t) {
                                                            t in e.console && r[t].__sentry__ && (r[t] = r[t].__sentry_wrapped__)
                                                        }), [2, i]
                                                }
                                            })
                                        })
                                    }(function() {
                                        return u(f, e)
                                    })] : [3, 2]);
                                case 1:
                                    return h = d.sent(), [3, 3];
                                case 2:
                                    h = f, d.label = 3;
                                case 3:
                                    return null === (p = h) ? [2] : [4, this.getBackend().storeBreadcrumb(p)];
                                case 4:
                                    return d.sent() && i && i.addBreadcrumb(p, Math.min(c, 100)), [2]
                            }
                        })
                    })
                }, t.prototype.getDsn = function() {
                    return this.dsn
                }, t.prototype.getOptions = function() {
                    return this.options
                }, t.prototype.getBackend = function() {
                    return this.backend
                }, t.prototype.isEnabled = function() {
                    return !1 !== this.getOptions().enabled && void 0 !== this.dsn
                }, t.prototype.prepareEvent = function(t, e, i) {
                    return r(this, void 0, void 0, function() {
                        var r, a, u, s, c, l, f, p, h, d;
                        return o(this, function(o) {
                            return r = this.getOptions(), a = r.environment, u = r.maxBreadcrumbs, s = void 0 === u ? 30 : u, c = r.release, l = r.repos, f = r.dist, void 0 === (p = n({}, t)).environment && void 0 !== a && (p.environment = a), void 0 === p.release && void 0 !== c && (p.release = c), void 0 === p.repos && void 0 !== l && (p.repos = l), void 0 === p.dist && void 0 !== f && (p.dist = f), p.message && (p.message = q.truncate(p.message, 250)), (h = p.exception && p.exception.values && p.exception.values[0]) && h.value && (h.value = q.truncate(h.value, 250)), (d = p.request) && d.url && (d.url = q.truncate(d.url, 250)), void 0 === p.event_id && (p.event_id = x.uuid4()), e ? [2, e.applyToEvent(p, i, Math.min(s, 100))] : [2, p]
                        })
                    })
                }, t.prototype.processEvent = function(t, e, n, i) {
                    return r(this, void 0, void 0, function() {
                        var r, a, u, s, c, l, p;
                        return o(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.isEnabled() ? (r = this.getOptions(), a = r.beforeSend, "number" == typeof(u = r.sampleRate) && u > Math.random() ? [2, {
                                        status: f.Status.Skipped
                                    }] : [4, this.prepareEvent(t, i, n)]) : [2, {
                                        status: f.Status.Skipped
                                    }];
                                case 1:
                                    if (null === (s = o.sent())) return [2, {
                                        status: f.Status.Skipped
                                    }];
                                    c = s, o.label = 2;
                                case 2:
                                    return o.trys.push([2, 5, , 6]), n && n.data && !0 === n.data.__sentry__ || !a ? [3, 4] : [4, a(s, n)];
                                case 3:
                                    c = o.sent(), o.label = 4;
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return l = o.sent(), $.forget(this.captureException(l, {
                                        data: {
                                            __sentry__: !0
                                        },
                                        originalException: l
                                    })), [2, {
                                        reason: "Event processing in beforeSend method threw an exception",
                                        status: f.Status.Invalid
                                    }];
                                case 6:
                                    return null === c ? [2, {
                                        reason: "Event dropped due to being discarded by beforeSend method",
                                        status: f.Status.Skipped
                                    }] : [4, e(c)];
                                case 7:
                                    return (p = o.sent()).event = c, p.status, f.Status.RateLimit, [2, p]
                            }
                        })
                    })
                }, t.prototype.close = function(t) {
                    return r(this, void 0, void 0, function() {
                        return o(this, function(e) {
                            return [2, this.getBackend().getBuffer().drain(t)]
                        })
                    })
                }, t
            }();
            e.BaseClient = i
        });
    c(V);
    V.BaseClient;
    var W = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                this.buffer = new Set
            }
            return t.prototype.add = function(t) {
                return n(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function(n) {
                        return this.buffer.add(t), t.then(function() {
                            return e.buffer.delete(t)
                        }).catch(function() {
                            return e.buffer.delete(t)
                        }), [2, t]
                    })
                })
            }, t.prototype.length = function() {
                return this.buffer.size
            }, t.prototype.drain = function(t) {
                return n(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function(n) {
                        return [2, new Promise(function(n) {
                            var r = setTimeout(function() {
                                t && t > 0 && n(!1)
                            }, t);
                            Promise.all(e.buffer.values()).then(function() {
                                clearTimeout(r), n(!0)
                            }).catch(function() {
                                n(!0)
                            })
                        })]
                    })
                })
            }, t
        }();
        e.RequestBuffer = o
    });
    c(W);
    W.RequestBuffer;
    var X = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t(t) {
                this.buffer = new W.RequestBuffer, this.options = t, this.options.dsn || T.logger.warn("No DSN provided, backend will not do anything.")
            }
            return t.prototype.eventFromException = function(t, e) {
                return n(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        throw new H.SentryError("Backend has to implement `eventFromException` method")
                    })
                })
            }, t.prototype.eventFromMessage = function(t, e, o) {
                return n(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        throw new H.SentryError("Backend has to implement `eventFromMessage` method")
                    })
                })
            }, t.prototype.sendEvent = function(t) {
                return n(this, void 0, void 0, function() {
                    return r(this, function(t) {
                        throw new H.SentryError("Backend has to implement `sendEvent` method")
                    })
                })
            }, t.prototype.storeBreadcrumb = function(t) {
                return !0
            }, t.prototype.storeScope = function(t) {}, t.prototype.getBuffer = function() {
                return this.buffer
            }, t
        }();
        e.BaseBackend = o
    });
    c(X);
    X.BaseBackend;
    var K = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function(t) {
                t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
            }(e.LogLevel || (e.LogLevel = {}))
    });
    c(K);
    K.LogLevel;
    var Y = l(function(t, e) {
        var n = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = s && s.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.initAndBind = function(t, e, n) {
            if (void 0 === n && (n = []), e.debug && T.logger.enable(), !P.getCurrentHub().getClient()) {
                var o = new t(e);
                o.install(), P.getCurrentHub().bindClient(o);
                var i = !1 === e.defaultIntegrations ? [] : r(n);
                if (Array.isArray(e.integrations)) {
                    var a = e.integrations.map(function(t) {
                        return t.name
                    });
                    i = r(i.filter(function(t) {
                        return -1 === a.indexOf(t.name)
                    }), e.integrations)
                } else "function" == typeof e.integrations && (i = e.integrations(i));
                Array.isArray(i) && i.forEach(function(t) {
                    t.install(e), T.logger.log("Integration installed: " + t.name)
                })
            }
        }
    });
    c(Y);
    Y.initAndBind;
    var J = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                this.name = "Dedupe"
            }
            return t.prototype.install = function() {
                var t = this;
                I.configureScope(function(e) {
                    e.addEventProcessor(function(e) {
                        return n(t, void 0, void 0, function() {
                            return r(this, function(t) {
                                try {
                                    if (this.shouldDropEvent(e, this.previousEvent)) return [2, null]
                                } catch (t) {
                                    return [2, this.previousEvent = e]
                                }
                                return [2, this.previousEvent = e]
                            })
                        })
                    })
                })
            }, t.prototype.shouldDropEvent = function(t, e) {
                return !!e && (this.isSameMessageEvent(t, e) ? (T.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + x.getEventDescription(t)), !0) : !!this.isSameExceptionEvent(t, e) && (T.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + x.getEventDescription(t)), !0))
            }, t.prototype.isSameMessageEvent = function(t, e) {
                var n = t.message,
                    r = e.message;
                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e))))
            }, t.prototype.getFramesFromEvent = function(t) {
                var e = t.exception;
                if (!e) return t.stacktrace ? t.stacktrace.frames : void 0;
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }, t.prototype.isSameStacktrace = function(t, e) {
                var n = this.getFramesFromEvent(t),
                    r = this.getFramesFromEvent(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                        a = n[o];
                    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                }
                return !0
            }, t.prototype.getExceptionFromEvent = function(t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }, t.prototype.isSameExceptionEvent = function(t, e) {
                var n = this.getExceptionFromEvent(e),
                    r = this.getExceptionFromEvent(t);
                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e)))
            }, t.prototype.isSameFingerprint = function(t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }, t
        }();
        e.Dedupe = o
    });
    c(J);
    J.Dedupe;
    var Z = l(function(t, e) {
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {
                this.name = "FunctionToString"
            }
            return t.prototype.install = function() {
                n = Function.prototype.toString, Function.prototype.toString = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var r = this.__sentry__ ? this.__sentry_original__ : this;
                    return n.apply(r, t)
                }
            }, t
        }();
        e.FunctionToString = r
    });
    c(Z);
    Z.FunctionToString;
    var Q = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {
                this.name = "SDKInformation"
            }
            return t.prototype.install = function() {
                T.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.")
            }, t
        }();
        e.SDKInformation = n
    });
    c(Q);
    Q.SDKInformation;
    var tt = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            },
            o = s && s.__read || function(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            i = s && s.__spread || function() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            u = function() {
                function t() {
                    this.ignoreErrors = a, this.name = "InboundFilters"
                }
                return t.prototype.install = function(t) {
                    var e = this;
                    void 0 === t && (t = {}), this.configureOptions(t), I.configureScope(function(t) {
                        t.addEventProcessor(function(t) {
                            return n(e, void 0, void 0, function() {
                                return r(this, function(e) {
                                    return this.shouldDropEvent(t) ? [2, null] : [2, t]
                                })
                            })
                        })
                    })
                }, t.prototype.shouldDropEvent = function(t) {
                    return this.isIgnoredError(t) ? (T.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + x.getEventDescription(t)), !0) : this.isBlacklistedUrl(t) ? (T.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + x.getEventDescription(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0) : !this.isWhitelistedUrl(t) && (T.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + x.getEventDescription(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0)
                }, t.prototype.isIgnoredError = function(t) {
                    var e = this;
                    return !!this.ignoreErrors && this.getPossibleEventMessages(t).some(function(t) {
                        return e.ignoreErrors.some(function(n) {
                            return e.isMatchingPattern(t, n)
                        })
                    })
                }, t.prototype.isBlacklistedUrl = function(t) {
                    var e = this;
                    if (!this.blacklistUrls) return !1;
                    var n = this.getEventFilterUrl(t);
                    return !!n && this.blacklistUrls.some(function(t) {
                        return e.isMatchingPattern(n, t)
                    })
                }, t.prototype.isWhitelistedUrl = function(t) {
                    var e = this;
                    if (!this.whitelistUrls) return !0;
                    var n = this.getEventFilterUrl(t);
                    return !n || this.whitelistUrls.some(function(t) {
                        return e.isMatchingPattern(n, t)
                    })
                }, t.prototype.isMatchingPattern = function(t, e) {
                    return d.isRegExp(e) ? e.test(t) : "string" == typeof e && t.includes(e)
                }, t.prototype.configureOptions = function(t) {
                    t.ignoreErrors && (this.ignoreErrors = i(a, t.ignoreErrors)), t.blacklistUrls && (this.blacklistUrls = i(t.blacklistUrls)), t.whitelistUrls && (this.whitelistUrls = i(t.whitelistUrls))
                }, t.prototype.getPossibleEventMessages = function(t) {
                    if (t.message) return [t.message];
                    if (!t.exception) return [];
                    try {
                        var e = t.exception.values[0],
                            n = e.type,
                            r = e.value;
                        return ["" + r, n + ": " + r]
                    } catch (e) {
                        return T.logger.error("Cannot extract message for event " + x.getEventDescription(t)), []
                    }
                }, t.prototype.getEventFilterUrl = function(t) {
                    try {
                        return t.stacktrace ? t.stacktrace.frames[0].filename : t.exception ? t.exception.values[0].stacktrace.frames[0].filename : null
                    } catch (e) {
                        return T.logger.error("Cannot extract url for event " + x.getEventDescription(t)), null
                    }
                }, t
            }();
        e.InboundFilters = u
    });
    c(tt);
    tt.InboundFilters;
    var et = l(function(t, e) {
        var n = s && s.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function a(t) {
                        try {
                            s(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            s(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(t) {
                        t.done ? o(t.value) : new n(function(e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    s((r = r.apply(t, e || [])).next())
                })
            },
            r = s && s.__generator || function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function() {
            function t() {
                this.name = "Debug"
            }
            return t.prototype.install = function() {
                var t = this;
                I.configureScope(function(e) {
                    e.addEventProcessor(function(e) {
                        return n(t, void 0, void 0, function() {
                            return r(this, function(t) {
                                return console.log(e), [2, e]
                            })
                        })
                    })
                })
            }, t
        }();
        e.Debug = o
    });
    c(et);
    et.Debug;
    var nt = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Dedupe = J.Dedupe, e.FunctionToString = Z.FunctionToString, e.SDKInformation = Q.SDKInformation, e.InboundFilters = tt.InboundFilters, e.Debug = et.Debug
    });
    c(nt);
    nt.Dedupe, nt.FunctionToString, nt.SDKInformation, nt.InboundFilters, nt.Debug;
    var rt = l(function(t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.logger = T.logger, e.addBreadcrumb = I.addBreadcrumb, e.captureException = I.captureException, e.captureEvent = I.captureEvent, e.captureMessage = I.captureMessage, e.configureScope = I.configureScope, e.withScope = I.withScope, e.getCurrentHub = P.getCurrentHub, e.Hub = P.Hub, e.getHubFromCarrier = P.getHubFromCarrier, e.Scope = P.Scope, e.API = G.API, e.BaseClient = V.BaseClient, e.BaseBackend = X.BaseBackend, e.Dsn = N.Dsn, e.SentryError = H.SentryError, e.RequestBuffer = W.RequestBuffer, e.LogLevel = K.LogLevel, e.initAndBind = Y.initAndBind, e.Integrations = nt
    });
    c(rt);
    var ot = rt.logger,
        it = rt.addBreadcrumb,
        at = rt.captureException,
        ut = rt.captureEvent,
        st = rt.captureMessage,
        ct = rt.configureScope,
        lt = rt.withScope,
        ft = rt.getCurrentHub,
        pt = rt.Hub,
        ht = rt.getHubFromCarrier,
        dt = rt.Scope,
        vt = rt.API,
        yt = rt.BaseClient,
        gt = rt.BaseBackend,
        bt = (rt.Dsn, rt.SentryError),
        mt = (rt.RequestBuffer, rt.LogLevel, rt.initAndBind),
        _t = rt.Integrations,
        Et = l(function(t, e) {
            function n() {
                if (!("fetch" in x.getGlobalObject())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.supportsErrorEvent = function() {
                try {
                    return new ErrorEvent(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsDOMError = function() {
                try {
                    return new DOMError(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsDOMException = function() {
                try {
                    return new DOMException(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsFetch = n, e.supportsNativeFetch = function() {
                return !!n() && -1 !== x.getGlobalObject().fetch.toString().indexOf("native")
            }, e.supportsBeacon = function() {
                var t = x.getGlobalObject();
                return "navigator" in t && "sendBeacon" in t.navigator
            }, e.supportsReportingObserver = function() {
                return "ReportingObserver" in x.getGlobalObject()
            }, e.supportsReferrerPolicy = function() {
                if (!n()) return !1;
                try {
                    return new Request("pickleRick", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsHistory = function() {
                var t = x.getGlobalObject(),
                    e = t.chrome,
                    n = e && e.app && e.app.runtime,
                    r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                return !n && r
            }
        });
    c(Et);
    Et.supportsErrorEvent, Et.supportsDOMError, Et.supportsDOMException;
    var wt = Et.supportsFetch,
        xt = Et.supportsNativeFetch,
        St = Et.supportsBeacon,
        kt = Et.supportsReportingObserver,
        Ot = Et.supportsReferrerPolicy,
        jt = Et.supportsHistory,
        Tt = l(function(t) {
            var e, n;
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(t, e) {
                    return t << e | t >>> 32 - e
                },
                rotr: function(t, e) {
                    return t << 32 - e | t >>> e
                },
                endian: function(t) {
                    if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);
                    for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);
                    return t
                },
                randomBytes: function(t) {
                    for (var e = []; t > 0; t--) e.push(Math.floor(256 * Math.random()));
                    return e
                },
                bytesToWords: function(t) {
                    for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8) e[r >>> 5] |= t[n] << 24 - r % 32;
                    return e
                },
                wordsToBytes: function(t) {
                    for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                    return e
                },
                bytesToHex: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));
                    return e.join("")
                },
                hexToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));
                    return e
                },
                bytesToBase64: function(t) {
                    for (var n = [], r = 0; r < t.length; r += 3)
                        for (var o = t[r] << 16 | t[r + 1] << 8 | t[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * t.length ? n.push(e.charAt(o >>> 6 * (3 - i) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(t) {
                    t = t.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, o = 0; r < t.length; o = ++r % 4) 0 != o && n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | e.indexOf(t.charAt(r)) >>> 6 - 2 * o);
                    return n
                }
            }, t.exports = n
        }),
        Mt = {
            utf8: {
                stringToBytes: function(t) {
                    return Mt.bin.stringToBytes(unescape(encodeURIComponent(t)))
                },
                bytesToString: function(t) {
                    return decodeURIComponent(escape(Mt.bin.bytesToString(t)))
                }
            },
            bin: {
                stringToBytes: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                    return e
                },
                bytesToString: function(t) {
                    for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));
                    return e.join("")
                }
            }
        },
        Bt = Mt,
        Pt = function(t) {
            return null != t && (It(t) || function(t) {
                return "function" == typeof t.readFloatLE && "function" == typeof t.slice && It(t.slice(0, 0))
            }(t) || !!t._isBuffer)
        };

    function It(t) {
        return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
    }
    var Ft = l(function(t) {
            var e, n, r, o, i;
            e = Tt, n = Bt.utf8, r = Pt, o = Bt.bin, (i = function(t, a) {
                t.constructor == String ? t = a && "binary" === a.encoding ? o.stringToBytes(t) : n.stringToBytes(t) : r(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());
                for (var u = e.bytesToWords(t), s = 8 * t.length, c = 1732584193, l = -271733879, f = -1732584194, p = 271733878, h = 0; h < u.length; h++) u[h] = 16711935 & (u[h] << 8 | u[h] >>> 24) | 4278255360 & (u[h] << 24 | u[h] >>> 8);
                u[s >>> 5] |= 128 << s % 32, u[14 + (s + 64 >>> 9 << 4)] = s;
                var d = i._ff,
                    v = i._gg,
                    y = i._hh,
                    g = i._ii;
                for (h = 0; h < u.length; h += 16) {
                    var b = c,
                        m = l,
                        _ = f,
                        E = p;
                    l = g(l = g(l = g(l = g(l = y(l = y(l = y(l = y(l = v(l = v(l = v(l = v(l = d(l = d(l = d(l = d(l, f = d(f, p = d(p, c = d(c, l, f, p, u[h + 0], 7, -680876936), l, f, u[h + 1], 12, -389564586), c, l, u[h + 2], 17, 606105819), p, c, u[h + 3], 22, -1044525330), f = d(f, p = d(p, c = d(c, l, f, p, u[h + 4], 7, -176418897), l, f, u[h + 5], 12, 1200080426), c, l, u[h + 6], 17, -1473231341), p, c, u[h + 7], 22, -45705983), f = d(f, p = d(p, c = d(c, l, f, p, u[h + 8], 7, 1770035416), l, f, u[h + 9], 12, -1958414417), c, l, u[h + 10], 17, -42063), p, c, u[h + 11], 22, -1990404162), f = d(f, p = d(p, c = d(c, l, f, p, u[h + 12], 7, 1804603682), l, f, u[h + 13], 12, -40341101), c, l, u[h + 14], 17, -1502002290), p, c, u[h + 15], 22, 1236535329), f = v(f, p = v(p, c = v(c, l, f, p, u[h + 1], 5, -165796510), l, f, u[h + 6], 9, -1069501632), c, l, u[h + 11], 14, 643717713), p, c, u[h + 0], 20, -373897302), f = v(f, p = v(p, c = v(c, l, f, p, u[h + 5], 5, -701558691), l, f, u[h + 10], 9, 38016083), c, l, u[h + 15], 14, -660478335), p, c, u[h + 4], 20, -405537848), f = v(f, p = v(p, c = v(c, l, f, p, u[h + 9], 5, 568446438), l, f, u[h + 14], 9, -1019803690), c, l, u[h + 3], 14, -187363961), p, c, u[h + 8], 20, 1163531501), f = v(f, p = v(p, c = v(c, l, f, p, u[h + 13], 5, -1444681467), l, f, u[h + 2], 9, -51403784), c, l, u[h + 7], 14, 1735328473), p, c, u[h + 12], 20, -1926607734), f = y(f, p = y(p, c = y(c, l, f, p, u[h + 5], 4, -378558), l, f, u[h + 8], 11, -2022574463), c, l, u[h + 11], 16, 1839030562), p, c, u[h + 14], 23, -35309556), f = y(f, p = y(p, c = y(c, l, f, p, u[h + 1], 4, -1530992060), l, f, u[h + 4], 11, 1272893353), c, l, u[h + 7], 16, -155497632), p, c, u[h + 10], 23, -1094730640), f = y(f, p = y(p, c = y(c, l, f, p, u[h + 13], 4, 681279174), l, f, u[h + 0], 11, -358537222), c, l, u[h + 3], 16, -722521979), p, c, u[h + 6], 23, 76029189), f = y(f, p = y(p, c = y(c, l, f, p, u[h + 9], 4, -640364487), l, f, u[h + 12], 11, -421815835), c, l, u[h + 15], 16, 530742520), p, c, u[h + 2], 23, -995338651), f = g(f, p = g(p, c = g(c, l, f, p, u[h + 0], 6, -198630844), l, f, u[h + 7], 10, 1126891415), c, l, u[h + 14], 15, -1416354905), p, c, u[h + 5], 21, -57434055), f = g(f, p = g(p, c = g(c, l, f, p, u[h + 12], 6, 1700485571), l, f, u[h + 3], 10, -1894986606), c, l, u[h + 10], 15, -1051523), p, c, u[h + 1], 21, -2054922799), f = g(f, p = g(p, c = g(c, l, f, p, u[h + 8], 6, 1873313359), l, f, u[h + 15], 10, -30611744), c, l, u[h + 6], 15, -1560198380), p, c, u[h + 13], 21, 1309151649), f = g(f, p = g(p, c = g(c, l, f, p, u[h + 4], 6, -145523070), l, f, u[h + 11], 10, -1120210379), c, l, u[h + 2], 15, 718787259), p, c, u[h + 9], 21, -343485551), c = c + b >>> 0, l = l + m >>> 0, f = f + _ >>> 0, p = p + E >>> 0
                }
                return e.endian([c, l, f, p])
            })._ff = function(t, e, n, r, o, i, a) {
                var u = t + (e & n | ~e & r) + (o >>> 0) + a;
                return (u << i | u >>> 32 - i) + e
            }, i._gg = function(t, e, n, r, o, i, a) {
                var u = t + (e & r | n & ~r) + (o >>> 0) + a;
                return (u << i | u >>> 32 - i) + e
            }, i._hh = function(t, e, n, r, o, i, a) {
                var u = t + (e ^ n ^ r) + (o >>> 0) + a;
                return (u << i | u >>> 32 - i) + e
            }, i._ii = function(t, e, n, r, o, i, a) {
                var u = t + (n ^ (e | ~r)) + (o >>> 0) + a;
                return (u << i | u >>> 32 - i) + e
            }, i._blocksize = 16, i._digestsize = 16, t.exports = function(t, n) {
                if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
                var r = e.wordsToBytes(i(t, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : e.bytesToHex(r)
            }
        }),
        Ct = Object.freeze({
            default: Ft,
            __moduleExports: Ft
        }),
        Dt = S(),
        Rt = {
            wrap: function() {
                return function() {}
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1
        },
        At = [].slice,
        Lt = "?",
        Ut = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

    function Ht(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function Nt() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }
    Rt.wrap = function(t) {
        return function() {
            try {
                return t.apply(this, arguments)
            } catch (t) {
                throw Rt.report(t), t
            }
        }
    }, Rt.report = function() {
        var t, e, n, o, i = [],
            a = null,
            u = null;

        function s(t, e, n) {
            var r = null;
            if (!e || Rt.collectWindowErrors) {
                for (var o in i)
                    if (Ht(i, o)) try {
                        i[o](t, e, n)
                    } catch (t) {
                        r = t
                    }
                    if (r) throw r
            }
        }

        function c(e, n, o, i, a) {
            if (a = y(a) ? a.error : a, e = y(e) ? e.message : e, u) Rt.computeStackTrace.augmentStackTraceWithInitialElement(u, n, o, e), f();
            else if (a && v(a)) s(Rt.computeStackTrace(a), !0, a);
            else {
                var c, l = {
                        url: n,
                        line: o,
                        column: i
                    },
                    p = e;
                if ("[object String]" === {}.toString.call(e)) {
                    var h = e.match(Ut);
                    h && (c = h[1], p = h[2])
                }
                l.func = Rt.computeStackTrace.guessFunctionName(l.url, l.line), l.context = Rt.computeStackTrace.gatherContext(l.url, l.line), s({
                    name: c,
                    message: p,
                    mode: "onerror",
                    stack: [r({}, l, {
                        url: l.url || Nt()
                    })]
                }, !0, null)
            }
            return !!t && t.apply(this, arguments)
        }

        function l(t) {
            var e = t && (t.detail ? t.detail.reason : t.reason) || t;
            s(Rt.computeStackTrace(e), !0, e)
        }

        function f() {
            var t = u,
                e = a;
            u = null, a = null, s(t, !1, e)
        }

        function p(t) {
            if (u) {
                if (a === t) return;
                f()
            }
            var e = Rt.computeStackTrace(t);
            throw u = e, a = t, setTimeout(function() {
                a === t && f()
            }, e.incomplete ? 2e3 : 0), t
        }
        return p.subscribe = function(t) {
            i.push(t)
        }, p.unsubscribe = function(r) {
            for (var a = i.length - 1; a >= 0; --a) i[a] === r && i.splice(a, 1);
            0 === i.length && (e && (Dt.onerror = t, e = !1), o && (Dt.onerror = n, o = !1))
        }, p.installGlobalHandler = function() {
            !0 !== e && (t = Dt.onerror, Dt.onerror = c, e = !0)
        }, p.installGlobalUnhandledRejectionHandler = function() {
            !0 !== o && (n = Dt.onunhandledrejection, Dt.onunhandledrejection = l, o = !0)
        }, p
    }(), Rt.computeStackTrace = function() {
        var t = !1,
            e = {};

        function n(t) {
            if ("string" != typeof t) return [];
            if (!Ht(e, t)) {
                var n = "",
                    r = "";
                try {
                    r = Dt.document.domain
                } catch (t) {}
                var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);
                o && o[2] === r && (n = function(t) {
                    if (!Rt.remoteFetching) return "";
                    try {
                        var e = function() {
                            try {
                                return new Dt.XMLHttpRequest
                            } catch (t) {
                                return new Dt.ActiveXObject("Microsoft.XMLHTTP")
                            }
                        }();
                        return e.open("GET", t, !1), e.send(""), e.responseText
                    } catch (t) {
                        return ""
                    }
                }(t)), e[t] = n ? n.split("\n") : []
            }
            return e[t]
        }

        function r(t, e) {
            var r, o = /function ([^(]*)\(([^)]*)\)/,
                i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                a = "",
                u = n(t);
            if (!u.length) return Lt;
            for (var s = 0; s < 10; ++s)
                if (a = u[e - s] + a, !m(a)) {
                    if (r = i.exec(a)) return r[1];
                    if (r = o.exec(a)) return r[1]
                }
            return Lt
        }

        function o(t, e) {
            var r = n(t);
            if (!r.length) return null;
            var o = [],
                i = Math.floor(Rt.linesOfContext / 2),
                a = i + Rt.linesOfContext % 2,
                u = Math.max(0, e - i - 1),
                s = Math.min(r.length, e + a - 1);
            e -= 1;
            for (var c = u; c < s; ++c) m(r[c]) || o.push(r[c]);
            return o.length > 0 ? o : null
        }

        function i(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }

        function a(t) {
            return i(t).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }

        function u(t, e) {
            for (var r, o, i = 0, a = e.length; i < a; ++i)
                if ((r = n(e[i])).length && (r = r.join("\n"), o = t.exec(r))) return {
                    url: e[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1
                };
            return null
        }

        function s(t, e, r) {
            var o, a = n(e),
                u = new RegExp("\\b" + i(t) + "\\b");
            return r -= 1, a && a.length > r && (o = u.exec(a[r])) ? o.index : null
        }

        function c(t) {
            if (!m(Dt && Dt.document)) {
                for (var e, n, r, o, s = [Nt()], c = Dt.document.getElementsByTagName("script"), l = "" + t, f = 0; f < c.length; ++f) {
                    var p = c[f];
                    p.src && s.push(p.src)
                }
                if (r = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var h = r[1] ? "\\s+" + r[1] : "",
                        d = r[2].split(",").join("\\s*,\\s*");
                    e = i(r[3]).replace(/;$/, ";?"), n = new RegExp("function" + h + "\\s*\\(\\s*" + d + "\\s*\\)\\s*{\\s*" + e + "\\s*}")
                } else n = new RegExp(i(l).replace(/\s+/g, "\\s+"));
                if (o = u(n, s)) return o;
                if (r = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var v = r[1];
                    if (e = a(r[2]), o = u(n = new RegExp("on" + v + "=[\\'\"]\\s*" + e + "\\s*[\\'\"]", "i"), s[0])) return o;
                    if (o = u(n = new RegExp(e), s)) return o
                }
                return null
            }
        }

        function l(t) {
            if (!t.stack) return null;
            for (var e, n, i, a = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, f = /\((\S*)(?::(\d+))(?::(\d+))\)/, p = t.stack.split("\n"), h = [], d = /^(.*) is undefined$/.exec(t.message), v = 0, y = p.length; v < y; ++v) {
                if (n = a.exec(p[v])) {
                    var g = n[2] && 0 === n[2].indexOf("native");
                    n[2] && 0 === n[2].indexOf("eval") && (e = f.exec(n[2])) && (n[2] = e[1]), i = {
                        url: g ? null : n[2],
                        func: n[1] || Lt,
                        args: g ? [n[2]] : [],
                        line: n[3] ? +n[3] : null,
                        column: n[4] ? +n[4] : null
                    }
                } else if (n = c.exec(p[v])) i = {
                    url: n[2],
                    func: n[1] || Lt,
                    args: [],
                    line: +n[3],
                    column: n[4] ? +n[4] : null
                };
                else {
                    if (!(n = u.exec(p[v]))) continue;
                    n[3] && n[3].indexOf(" > eval") > -1 && (e = l.exec(n[3])) ? n[3] = e[1] : 0 !== v || n[5] || m(t.columnNumber) || (h[0].column = t.columnNumber + 1), i = {
                        url: n[3],
                        func: n[1] || Lt,
                        args: n[2] ? n[2].split(",") : [],
                        line: n[4] ? +n[4] : null,
                        column: n[5] ? +n[5] : null
                    }
                }
                if (!i.func && i.line && (i.func = r(i.url, i.line)), Rt.remoteFetching && i.url && "blob:" === i.url.substr(0, 5)) {
                    var b = new XMLHttpRequest;
                    if (b.open("GET", i.url, !1), b.send(""), 200 === b.status) {
                        var _ = b.responseText || "",
                            E = (_ = _.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                        if (E) {
                            var w = E[1];
                            "~" === w.charAt(0) && (w = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + w.slice(1)), i.url = w.slice(0, -4)
                        }
                    }
                }
                i.context = i.line ? o(i.url, i.line) : null, h.push(i)
            }
            return h.length ? (h[0] && h[0].line && !h[0].column && d && (h[0].column = s(d[1], h[0].url, h[0].line)), {
                mode: "stack",
                name: t.name,
                message: t.message,
                stack: h
            }) : null
        }

        function f(t, e, n, i) {
            var a = {
                url: e,
                line: n
            };
            if (a.url && a.line) {
                t.incomplete = !1, a.func || (a.func = r(a.url, a.line)), a.context || (a.context = o(a.url, a.line));
                var u = / '([^']+)' /.exec(i);
                if (u && (a.column = s(u[1], a.url, a.line)), t.stack.length > 0 && t.stack[0].url === a.url) {
                    if (t.stack[0].line === a.line) return !1;
                    if (!t.stack[0].line && t.stack[0].func === a.func) return t.stack[0].line = a.line, t.stack[0].context = a.context, !1
                }
                return t.stack.unshift(a), t.partial = !0, !0
            }
            return t.incomplete = !0, !1
        }

        function p(t, e) {
            for (var n, o, i, a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], l = {}, d = !1, v = p.caller; v && !d; v = v.caller)
                if (v !== h && v !== Rt.report) {
                    if (o = {
                            url: null,
                            func: Lt,
                            args: [],
                            line: null,
                            column: null
                        }, v.name ? o.func = v.name : (n = a.exec(v.toString())) && (o.func = n[1]), void 0 === o.func) try {
                        o.func = n.input.substring(0, n.input.indexOf("{"))
                    } catch (t) {}
                    if (i = c(v)) {
                        o.url = i.url, o.line = i.line, o.func === Lt && (o.func = r(o.url, o.line));
                        var y = / '([^']+)' /.exec(t.message || t.description);
                        y && (o.column = s(y[1], i.url, i.line))
                    }
                    l["" + v] ? d = !0 : l["" + v] = !0, u.push(o)
                }
            e && u.splice(0, e);
            var g = {
                mode: "callers",
                name: t.name,
                message: t.message,
                stack: u
            };
            return f(g, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), g
        }

        function h(e, i) {
            var s = null;
            i = null == i ? 0 : +i;
            try {
                if (s = function(t) {
                        var e = t.stacktrace;
                        if (e) {
                            for (var n, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, a = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, u = e.split("\n"), s = [], c = 0; c < u.length; c += 2) {
                                var l = null;
                                if ((n = i.exec(u[c])) ? l = {
                                        url: n[2],
                                        line: +n[1],
                                        column: null,
                                        func: n[3],
                                        args: []
                                    } : (n = a.exec(u[c])) && (l = {
                                        url: n[6],
                                        line: +n[1],
                                        column: +n[2],
                                        func: n[3] || n[4],
                                        args: n[5] ? n[5].split(",") : []
                                    }), l) {
                                    if (!l.func && l.line && (l.func = r(l.url, l.line)), l.line) try {
                                        l.context = o(l.url, l.line)
                                    } catch (t) {}
                                    l.context || (l.context = [u[c + 1]]), s.push(l)
                                }
                            }
                            return s.length ? {
                                mode: "stacktrace",
                                name: t.name,
                                message: t.message,
                                stack: s
                            } : null
                        }
                    }(e)) return s
            } catch (e) {
                if (t) throw e
            }
            try {
                if (s = l(e)) return s
            } catch (e) {
                if (t) throw e
            }
            try {
                if (s = function(t) {
                        var e = t.message.split("\n");
                        if (e.length < 4) return null;
                        var i, s = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            c = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            l = /^\s*Line (\d+) of function script\s*$/i,
                            f = [],
                            p = Dt && Dt.document && Dt.document.getElementsByTagName("script"),
                            h = [];
                        for (var d in p) Ht(p, d) && !p[d].src && h.push(p[d]);
                        for (var v = 2; v < e.length; v += 2) {
                            var y = null;
                            if (i = s.exec(e[v])) y = {
                                url: i[2],
                                func: i[3],
                                args: [],
                                line: +i[1],
                                column: null
                            };
                            else if (i = c.exec(e[v])) {
                                y = {
                                    url: i[3],
                                    func: i[4],
                                    args: [],
                                    line: +i[1],
                                    column: null
                                };
                                var g = +i[1],
                                    b = h[i[2] - 1];
                                if (b) {
                                    var m = n(y.url);
                                    if (m) {
                                        var _ = (m = m.join("\n")).indexOf(b.innerText);
                                        _ >= 0 && (y.line = g + m.substring(0, _).split("\n").length)
                                    }
                                }
                            } else if (i = l.exec(e[v])) {
                                var E = Nt().replace(/#.*$/, ""),
                                    w = u(new RegExp(a(e[v + 1])), [E]);
                                y = {
                                    url: E,
                                    func: "",
                                    args: [],
                                    line: w ? w.line : i[1],
                                    column: null
                                }
                            }
                            if (y) {
                                y.func || (y.func = r(y.url, y.line));
                                var x = o(y.url, y.line),
                                    S = x ? x[Math.floor(x.length / 2)] : null;
                                x && S.replace(/^\s*/, "") === e[v + 1].replace(/^\s*/, "") ? y.context = x : y.context = [e[v + 1]], f.push(y)
                            }
                        }
                        return f.length ? {
                            mode: "multiline",
                            name: t.name,
                            message: e[0],
                            stack: f
                        } : null
                    }(e)) return s
            } catch (e) {
                if (t) throw e
            }
            try {
                if (s = p(e, i + 1)) return s
            } catch (e) {
                if (t) throw e
            }
            return {
                name: e.name,
                message: e.message,
                mode: "failed"
            }
        }
        return h.augmentStackTraceWithInitialElement = f, h.computeStackTraceFromStackProp = l, h.guessFunctionName = r, h.gatherContext = o, h.ofCaller = function(t) {
            t = 1 + (null == t ? 0 : +t);
            try {
                throw new Error
            } catch (e) {
                return h(e, t + 1)
            }
        }, h.getSource = n, h
    }(), Rt.extendToAsynchronousCallbacks = function() {
        var t = function(t) {
            var e = Dt[t];
            Dt[t] = function() {
                var t = At.call(arguments),
                    n = t[0];
                return "function" == typeof n && (t[0] = Rt.wrap(n)), e.apply ? e.apply(this, t) : e(t[0], t[1])
            }
        };
        t("setTimeout"), t("setInterval")
    }, Rt.remoteFetching = !1, Rt.collectWindowErrors = !0, Rt.linesOfContext = 11;
    var Gt = Rt.report.subscribe,
        $t = Rt.report.installGlobalHandler,
        qt = Rt.report.installGlobalUnhandledRejectionHandler,
        zt = Rt.computeStackTrace,
        Vt = Ft || Ct,
        Wt = 50;

    function Xt(t) {
        var e = {
            stacktrace: {
                frames: Yt(t.stack)
            },
            type: t.name,
            value: t.message
        };
        return void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"), e
    }

    function Kt(t) {
        return {
            exception: {
                values: [Xt(t)]
            },
            transaction: t.url || t.stack && t.stack[0].url || "<unknown>"
        }
    }

    function Yt(t) {
        if (!t || !t.length) return [];
        var e = t,
            n = e[0].func || "";
        return (n.includes("captureMessage") || n.includes("captureException")) && (e = e.slice(1)), e.map(function(t) {
            return {
                colno: t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: t.line
            }
        }).slice(0, Wt).reverse()
    }
    var Jt, Zt, Qt = function() {
            function t(t) {
                this.options = t, this.url = new vt(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            return t.prototype.captureEvent = function(t) {
                return o(this, void 0, void 0, function() {
                    return i(this, function(t) {
                        throw new bt("Transport Class has to implement `captureEvent` method")
                    })
                })
            }, t
        }(),
        te = S(),
        ee = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function(t) {
                return o(this, void 0, void 0, function() {
                    var e, n;
                    return i(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return e = {
                                    body: C(t),
                                    method: "POST",
                                    referrerPolicy: Ot() ? "origin" : ""
                                }, [4, te.fetch(this.url, e)];
                            case 1:
                                return n = r.sent(), [2, {
                                    status: h.fromHttpCode(n.status)
                                }]
                        }
                    })
                })
            }, e
        }(Qt),
        ne = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function(t) {
                return o(this, void 0, void 0, function() {
                    var e = this;
                    return i(this, function(n) {
                        return [2, new Promise(function(n, r) {
                            var o = new XMLHttpRequest;
                            o.onreadystatechange = function() {
                                4 === o.readyState && (200 === o.status && n({
                                    status: h.fromHttpCode(o.status)
                                }), r(o))
                            }, o.open("POST", e.url), o.send(C(t))
                        })]
                    })
                })
            }, e
        }(Qt),
        re = S(),
        oe = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function(t) {
                return o(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(n) {
                        return e = C(t), [2, {
                            status: re.navigator.sendBeacon(this.url, e) ? h.Success : h.Failed
                        }]
                    })
                })
            }, e
        }(Qt),
        ie = Object.freeze({
            BaseTransport: Qt,
            FetchTransport: ee,
            XHRTransport: ne,
            BeaconTransport: oe
        }),
        ae = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.install = function() {
                if (!this.options.dsn) throw new bt("Invariant exception: install() must not be called when disabled");
                return Error.stackTraceLimit = 50, !0
            }, e.prototype.eventFromException = function(t, e) {
                return o(this, void 0, void 0, function() {
                    var n, o, a, u;
                    return i(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return y(t) && t.error ? (t = (u = t).error, n = Kt(zt(t)), [3, 7]) : [3, 1];
                            case 1:
                                return g(t) || b(t) ? (o = (u = t).name || (g(u) ? "DOMError" : "DOMException"), a = u.message ? o + ": " + u.message : o, [4, this.eventFromMessage(a, void 0, e)]) : [3, 3];
                            case 2:
                                return n = i.sent(), [3, 7];
                            case 3:
                                return v(t) ? (n = Kt(zt(t)), [3, 7]) : [3, 4];
                            case 4:
                                return w(t) && e && e.syntheticException ? (n = function(t, e) {
                                    var n = Object.keys(t).sort(),
                                        r = {
                                            extra: {
                                                __serialized__: L(t)
                                            },
                                            fingerprint: [Vt(n.join(""))],
                                            message: "Non-Error exception captured with keys: " + U(n)
                                        };
                                    if (e) {
                                        var o = Yt(zt(e).stack);
                                        r.stacktrace = {
                                            frames: o
                                        }
                                    }
                                    return r
                                }(u = t, e.syntheticException), [3, 7]) : [3, 5];
                            case 5:
                                return u = t, [4, this.eventFromMessage(u, void 0, e)];
                            case 6:
                                n = i.sent(), i.label = 7;
                            case 7:
                                return [2, n = r({}, n, {
                                    event_id: e && e.event_id,
                                    exception: r({}, n.exception, {
                                        mechanism: {
                                            handled: !0,
                                            type: "generic"
                                        }
                                    })
                                })]
                        }
                    })
                })
            }, e.prototype.eventFromMessage = function(t, e, n) {
                return void 0 === e && (e = p.Info), o(this, void 0, void 0, function() {
                    var r, o, a;
                    return i(this, function(i) {
                        return r = {
                            event_id: n && n.event_id,
                            fingerprint: [t],
                            level: e,
                            message: t
                        }, this.options.attachStacktrace && n && n.syntheticException && (o = zt(n.syntheticException), a = Yt(o.stack), r.stacktrace = {
                            frames: a
                        }), [2, r]
                    })
                })
            }, e.prototype.sendEvent = function(t) {
                return o(this, void 0, void 0, function() {
                    var e;
                    return i(this, function(n) {
                        return this.options.dsn ? (this.transport || (e = this.options.transportOptions ? this.options.transportOptions : {
                            dsn: this.options.dsn
                        }, this.options.transport ? this.transport = new this.options.transport({
                            dsn: this.options.dsn
                        }) : St() ? this.transport = new oe(e) : wt() ? this.transport = new ee(e) : this.transport = new ne(e)), [2, this.transport.captureEvent(t)]) : (ot.warn("Event has been skipped because no Dsn is configured."), [2, {
                            status: h.Skipped,
                            reason: "Event has been skipped because no Dsn is configured."
                        }])
                    })
                })
            }, e
        }(gt),
        ue = "sentry.javascript.browser",
        se = function(t) {
            function e(e) {
                return t.call(this, ae, e) || this
            }
            return n(e, t), e.prototype.prepareEvent = function(e, n, a) {
                return o(this, void 0, void 0, function() {
                    return i(this, function(o) {
                        return e.platform = e.platform || "javascript", e.sdk = r({}, e.sdk, {
                            name: ue,
                            packages: u(e.sdk && e.sdk.packages || [], [{
                                name: "npm:@sentry/browser",
                                version: "4.0.6"
                            }]),
                            version: "4.0.6"
                        }), [2, t.prototype.prepareEvent.call(this, e, n, a)]
                    })
                })
            }, e.prototype.showReportDialog = function(t) {
                void 0 === t && (t = {});
                var e = S().document;
                if (e) {
                    var n = t.dsn || this.getDsn();
                    if (!t.eventId) throw new bt("Missing `eventId` option in showReportDialog call");
                    if (!n) throw new bt("Missing `Dsn` option in showReportDialog call");
                    var r = e.createElement("script");
                    r.async = !0, r.src = new vt(n).getReportDialogEndpoint(t), (e.head || e.body).appendChild(r)
                }
            }, e
        }(yt),
        ce = 1e3,
        le = 0;

    function fe(t, e, n) {
        if (void 0 === e && (e = {}), !_(t)) return t;
        try {
            if (t.__sentry__) return t;
            if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var a = function() {
            var a = this;
            n && _(n) && n.apply(this, arguments);
            var u = Array.prototype.slice.call(arguments);
            try {
                var s = u.map(function(t) {
                    return fe(t, e)
                });
                return t.handleEvent ? t.handleEvent.apply(this, s) : t.apply(this, s)
            } catch (t) {
                throw le += 1, setTimeout(function() {
                    le -= 1
                }), lt(function(n) {
                    return o(a, void 0, void 0, function() {
                        var a = this;
                        return i(this, function(s) {
                            return n.addEventProcessor(function(t) {
                                return o(a, void 0, void 0, function() {
                                    var n;
                                    return i(this, function(o) {
                                        return n = r({}, t), e.mechanism && (n.exception = n.exception || {}, n.exception.mechanism = e.mechanism), n.extra = r({}, n.extra, {
                                            arguments: A(u, 2)
                                        }), [2, n]
                                    })
                                })
                            }), ft().captureException(t, {
                                originalException: t
                            }), [2]
                        })
                    })
                }), t
            }
        };
        try {
            for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (a[u] = t[u])
        } catch (t) {}
        return a.prototype = t.prototype, t.__sentry_wrapped__ = a, a.__sentry__ = !0, a.__sentry_original__ = t, a
    }

    function pe(t) {
        return function(e) {
            if (Jt = void 0, Zt !== e) {
                var n;
                Zt = e;
                try {
                    n = k(e.target)
                } catch (t) {
                    n = "<unknown>"
                }
                ft().addBreadcrumb({
                    category: "ui." + t,
                    message: n
                }, {
                    event: e,
                    name: t
                })
            }
        }
    }

    function he() {
        return function(t) {
            var e;
            try {
                e = t.target
            } catch (t) {
                return
            }
            var n = e && e.tagName;
            n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable) && (Jt || pe("input")(t), clearTimeout(Jt), Jt = setTimeout(function() {
                Jt = void 0
            }, ce))
        }
    }
    var de, ve = function() {
            function t(t) {
                this.name = "GlobalHandlers", this.options = r({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return t.prototype.install = function() {
                var t = this;
                Gt(function(e, n, r) {
                    le > 0 || ft().captureEvent(t.eventFromGlobalHandler(e), {
                        originalException: r,
                        data: {
                            stack: e
                        }
                    })
                }), this.options.onerror && (ot.log("Global Handler attached: onerror"), $t()), this.options.onunhandledrejection && (ot.log("Global Handler attached: onunhandledrejection"), qt())
            }, t.prototype.eventFromGlobalHandler = function(t) {
                var e = Kt(t);
                return r({}, e, {
                    exception: r({}, e.exception, {
                        mechanism: {
                            handled: !1,
                            type: "onerror" === t.mode ? "onerror" : "onunhandledrejection"
                        }
                    })
                })
            }, t
        }(),
        ye = function() {
            function t() {
                this.ignoreOnError = 0, this.name = "TryCatch"
            }
            return t.prototype.wrapTimeFunction = function(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = e[0];
                    return e[0] = fe(r, {
                        mechanism: {
                            data: {
                                function: t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }, t.prototype.wrapRAF = function(t) {
                return function(e) {
                    return t(fe(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: t && t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype.wrapEventTarget = function(t) {
                var e = S(),
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (R(n, "addEventListener", function(e) {
                    return function(n, r, o) {
                        try {
                            r.handleEvent = fe(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: r && r.name || "<anonymous>",
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            })
                        } catch (t) {}
                        var i, a, u;
                        return "EventTarget" !== t && "Node" !== t || (a = pe("click"), u = he(), i = function(t) {
                            if (t) {
                                var e;
                                try {
                                    e = t.type
                                } catch (t) {
                                    return
                                }
                                return "click" === e ? a(t) : "keypress" === e ? u(t) : void 0
                            }
                        }), e.call(this, n, fe(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: r && r.name || "<anonymous>",
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }, i), o)
                    }
                }), R(n, "removeEventListener", function(t) {
                    return function(e, n, r) {
                        var o = n;
                        try {
                            o = o && (o.__sentry_wrapped__ || o)
                        } catch (t) {}
                        return t.call(this, e, o, r)
                    }
                }))
            }, t.prototype.install = function() {
                this.ignoreOnError = this.ignoreOnError;
                var t = S();
                R(t, "setTimeout", this.wrapTimeFunction.bind(this)), R(t, "setInterval", this.wrapTimeFunction.bind(this)), R(t, "requestAnimationFrame", this.wrapRAF.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.wrapEventTarget.bind(this))
            }, t
        }(),
        ge = S();

    function be(t) {
        try {
            var e = D(t);
            ft().addBreadcrumb({
                category: "sentry",
                event_id: e.event_id,
                level: e.level || p.fromString("error"),
                message: j(e)
            }, {
                event: e
            })
        } catch (t) {
            ot.error("Error while adding sentry type breadcrumb")
        }
    }
    var me, _e = function() {
            function t(t) {
                this.name = "Breadcrumbs", this.options = r({
                    beacon: !0,
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return t.prototype.instrumentBeacon = function(t) {
                St() && R(ge.navigator, "sendBeacon", function(e) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = n[0],
                            i = n[1],
                            a = e.apply(this, n);
                        if (t.filterUrl && o.includes(t.filterUrl)) return be(i), a;
                        var u = {
                            category: "beacon",
                            data: i,
                            type: "http"
                        };
                        return a || (u.level = p.Error), ft().addBreadcrumb(u, {
                            input: n,
                            result: a
                        }), a
                    }
                })
            }, t.prototype.instrumentConsole = function() {
                "console" in ge && ["debug", "info", "warn", "error", "log"].forEach(function(t) {
                    t in ge.console && R(ge.console, t, function(e) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o = {
                                category: "console",
                                data: {
                                    extra: {
                                        arguments: n.slice(1)
                                    },
                                    logger: "console"
                                },
                                level: p.fromString(t),
                                message: z(n, " ")
                            };
                            "assert" === t && !1 === n[0] && (o.message = "Assertion failed: " + (z(n.slice(1), " ") || "console.assert"), o.data.extra.arguments = n.slice(1)), ft().addBreadcrumb(o, {
                                input: n,
                                level: t
                            }), e && e.apply(ge.console, n)
                        }
                    })
                })
            }, t.prototype.instrumentDOM = function() {
                "document" in ge && (ge.document.addEventListener("click", pe("click"), !1), ge.document.addEventListener("keypress", he(), !1))
            }, t.prototype.instrumentFetch = function(t) {
                xt() && R(ge, "fetch", function(e) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o, i = n[0],
                            a = "GET";
                        if ("string" == typeof i ? o = i : "Request" in ge && i instanceof Request ? (o = i.url, i.method && (a = i.method)) : o = String(i), n[1] && n[1].method && (a = n[1].method), t.filterUrl && o.includes(t.filterUrl)) return "POST" === a && n[1] && n[1].body && be(n[1].body), e.apply(ge, n);
                        var u = {
                            method: a,
                            url: o
                        };
                        return e.apply(ge, n).then(function(t) {
                            return u.status_code = t.status, ft().addBreadcrumb({
                                category: "fetch",
                                data: u,
                                type: "http"
                            }, {
                                input: n,
                                response: t
                            }), t
                        }).catch(function(t) {
                            throw ft().addBreadcrumb({
                                category: "fetch",
                                data: u,
                                level: p.Error,
                                type: "http"
                            }, {
                                error: t,
                                input: n
                            }), t
                        })
                    }
                })
            }, t.prototype.instrumentHistory = function() {
                var t = this;
                if (jt()) {
                    var e = function(t, e) {
                            var n = O(ge.location.href),
                                r = O(e),
                                o = O(t);
                            o.path || (o = n), de = e, n.protocol === r.protocol && n.host === r.host && (e = r.relative), n.protocol === o.protocol && n.host === o.host && (t = o.relative), ft().addBreadcrumb({
                                category: "navigation",
                                data: {
                                    from: t,
                                    to: e
                                }
                            })
                        },
                        n = ge.onpopstate;
                    ge.onpopstate = function() {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        var i = ge.location.href;
                        if (e(de, i), n) return n.apply(t, r)
                    }, R(ge.history, "pushState", r), R(ge.history, "replaceState", r)
                }

                function r(t) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = n.length > 2 ? n[2] : void 0;
                        return o && e(de, String(o)), t.apply(this, n)
                    }
                }
            }, t.prototype.instrumentXHR = function(t) {
                if ("XMLHttpRequest" in ge) {
                    var e = XMLHttpRequest.prototype;
                    R(e, "open", function(e) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o = n[1];
                            return this.__sentry_xhr__ = {
                                method: n[0],
                                url: n[1]
                            }, E(o) && t.filterUrl && o.includes(t.filterUrl) && (this.__sentry_own_request__ = !0), e.apply(this, n)
                        }
                    }), R(e, "send", function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = this;

                            function o() {
                                if (4 === r.readyState) {
                                    if (r.__sentry_own_request__) return;
                                    try {
                                        r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                    } catch (t) {}
                                    ft().addBreadcrumb({
                                        category: "xhr",
                                        data: r.__sentry_xhr__,
                                        type: "http"
                                    }, {
                                        xhr: r
                                    })
                                }
                            }
                            return r.__sentry_own_request__ && be(e[0]), ["onload", "onerror", "onprogress"].forEach(function(t) {
                                ! function(t, e) {
                                    t in e && _(e[t]) && R(e, t, function(e) {
                                        return fe(e, {
                                            mechanism: {
                                                data: {
                                                    function: t,
                                                    handler: e && e.name || "<anonymous>"
                                                },
                                                handled: !0,
                                                type: "instrument"
                                            }
                                        })
                                    })
                                }(t, r)
                            }), "onreadystatechange" in r && _(r.onreadystatechange) ? R(r, "onreadystatechange", function(t) {
                                return fe(t, {
                                    mechanism: {
                                        data: {
                                            function: "onreadystatechange",
                                            handler: t && t.name || "<anonymous>"
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }, o)
                            }) : r.onreadystatechange = o, t.apply(this, e)
                        }
                    })
                }
            }, t.prototype.install = function(t) {
                void 0 === t && (t = {});
                var e = t.dsn && new vt(t.dsn).getStoreEndpoint();
                this.options.console && this.instrumentConsole(), this.options.dom && this.instrumentDOM(), this.options.xhr && this.instrumentXHR({
                    filterUrl: e
                }), this.options.fetch && this.instrumentFetch({
                    filterUrl: e
                }), this.options.beacon && this.instrumentBeacon({
                    filterUrl: e
                }), this.options.history && this.instrumentHistory()
            }, t
        }(),
        Ee = "cause",
        we = 5,
        xe = function() {
            function t(t) {
                void 0 === t && (t = {}), this.name = "LinkedErrors", this.key = t.key || Ee, this.limit = t.limit || we
            }
            return t.prototype.install = function() {
                var t = this;
                ct(function(e) {
                    return e.addEventProcessor(t.handler.bind(t))
                })
            }, t.prototype.handler = function(t, e) {
                if (!(t.exception && t.exception.values && e && e.originalException instanceof Error)) return t;
                var n = this.walkErrorTree(e.originalException, this.key);
                return t.exception.values = u(t.exception.values, n), t
            }, t.prototype.walkErrorTree = function(t, e, n) {
                if (void 0 === n && (n = []), !(t[e] instanceof Error) || n.length >= this.limit) return n;
                var r = Xt(zt(t[e]));
                return this.walkErrorTree(t[e], e, u(n, [r]))
            }, t
        }();
    ! function(t) {
        t.Crash = "crash", t.Deprecation = "deprecation", t.Intervention = "intervention"
    }(me || (me = {}));
    var Se = function() {
            function t(t) {
                void 0 === t && (t = {
                    types: [me.Crash, me.Deprecation, me.Intervention]
                }), this.options = t, this.name = "ReportingObserver"
            }
            return t.prototype.install = function() {
                kt() && new(S().ReportingObserver)(this.handler.bind(this), {
                    buffered: !0,
                    types: this.options.types
                }).observe()
            }, t.prototype.handler = function(t) {
                var e, n, r = function(t) {
                    lt(function(e) {
                        e.setExtra("url", t.url);
                        var n = "ReportingObserver [" + t.type + "]",
                            r = "No details available";
                        if (t.body) {
                            var o, i = {};
                            for (var a in t.body) i[a] = t.body[a];
                            if (e.setExtra("body", i), t.type === me.Crash) r = [(o = t.body).crashId || "", o.reason || ""].join(" ").trim() || r;
                            else r = (o = t.body).message || r
                        }
                        st(n + ": " + r)
                    })
                };
                try {
                    for (var o = function(t) {
                            var e = "function" == typeof Symbol && t[Symbol.iterator],
                                n = 0;
                            return e ? e.call(t) : {
                                next: function() {
                                    return t && n >= t.length && (t = void 0), {
                                        value: t && t[n++],
                                        done: !t
                                    }
                                }
                            }
                        }(t), i = o.next(); !i.done; i = o.next()) {
                        r(i.value)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, t
        }(),
        ke = S(),
        Oe = function() {
            function t() {
                this.name = "UserAgent"
            }
            return t.prototype.install = function() {
                var t = this;
                ct(function(e) {
                    e.addEventProcessor(function(e) {
                        return o(t, void 0, void 0, function() {
                            var t;
                            return i(this, function(n) {
                                return ke.navigator && ke.location ? ((t = e.request || {}).url = t.url || ke.location.href, t.headers = t.headers || {}, t.headers["User-Agent"] = ke.navigator.userAgent, [2, r({}, e, {
                                    request: t
                                })]) : [2, e]
                            })
                        })
                    })
                })
            }, t
        }(),
        je = function() {
            function t(t) {
                void 0 === t && (t = {}), this.name = "Ember", this.Ember = t.Ember || S().Ember
            }
            return t.prototype.install = function() {
                var t = this;
                if (this.Ember) {
                    var e = this.Ember.onerror;
                    this.Ember.onerror = function(n) {
                        lt(function(e) {
                            t.addIntegrationToSdkInfo(e), ft().captureException(n, {
                                originalException: n
                            })
                        }), "function" == typeof e && e.call(t.Ember, n)
                    }, this.Ember.RSVP.on("error", function(e) {
                        var n = ft().pushScope();
                        e instanceof Error ? (n.setExtra("context", "Unhandled Promise error detected"), t.addIntegrationToSdkInfo(n), ft().captureException(e, {
                            originalException: e
                        })) : (n.setExtra("reason", e), t.addIntegrationToSdkInfo(n), st("Unhandled Promise error detected")), ft().popScope()
                    })
                }
            }, t.prototype.addIntegrationToSdkInfo = function(t) {
                var e = this;
                t.addEventProcessor(function(t) {
                    return o(e, void 0, void 0, function() {
                        var e;
                        return i(this, function(n) {
                            return t.sdk && (e = t.sdk.integrations || [], t.sdk = r({}, t.sdk, {
                                integrations: u(e, ["ember"])
                            })), [2, t]
                        })
                    })
                })
            }, t
        }(),
        Te = function() {
            function t(t) {
                void 0 === t && (t = {}), this.name = "Vue", this.Vue = t.Vue || S().Vue
            }
            return t.prototype.formatComponentName = function(t) {
                if (t.$root === t) return "root instance";
                var e = t._isVue ? t.$options.name || t.$options._componentTag : t.name;
                return (e ? "component <" + e + ">" : "anonymous component") + (t._isVue && t.$options.__file ? " at " + t.$options.__file : "")
            }, t.prototype.install = function() {
                var t = this;
                if (this.Vue && this.Vue.config) {
                    var e = this.Vue.config.errorHandler;
                    this.Vue.config.errorHandler = function(n, a, s) {
                        var c = {};
                        w(a) && (c.componentName = t.formatComponentName(a), c.propsData = a.$options.propsData), m(s) || (c.lifecycleHook = s), lt(function(e) {
                            Object.keys(c).forEach(function(t) {
                                e.setExtra(t, c[t])
                            }), e.addEventProcessor(function(e) {
                                return o(t, void 0, void 0, function() {
                                    var t;
                                    return i(this, function(n) {
                                        return e.sdk && (t = e.sdk.integrations || [], e.sdk = r({}, e.sdk, {
                                            integrations: u(t, ["vue"])
                                        })), [2, e]
                                    })
                                })
                            }), ft().captureException(n, {
                                originalException: n
                            })
                        }), "function" == typeof e && e.call(t.Vue, n, a, s)
                    }
                }
            }, t
        }(),
        Me = Object.freeze({
            GlobalHandlers: ve,
            TryCatch: ye,
            Breadcrumbs: _e,
            LinkedErrors: xe,
            ReportingObserver: Se,
            UserAgent: Oe,
            Ember: je,
            Vue: Te
        }),
        Be = [new _t.Dedupe, new _t.InboundFilters, new _t.FunctionToString, new ye, new _e, new ve, new Se, new xe, new Oe];
    var Pe = r({}, _t, Me);
    return t.Integrations = Pe, t.Transports = ie, t.Severity = p, t.Status = h, t.addBreadcrumb = it, t.captureException = at, t.captureEvent = ut, t.captureMessage = st, t.configureScope = ct, t.withScope = lt, t.getHubFromCarrier = ht, t.getCurrentHub = ft, t.Hub = pt, t.Scope = dt, t.BrowserBackend = ae, t.BrowserClient = se, t.defaultIntegrations = Be, t.forceLoad = function() {}, t.init = function(t) {
        mt(se, t, Be)
    }, t.lastEventId = function() {
        return ft().lastEventId()
    }, t.onLoad = function(t) {
        t()
    }, t.showReportDialog = function(t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = ft().lastEventId()), ft().getClient().showReportDialog(t)
    }, t.SDK_NAME = ue, t.SDK_VERSION = "4.0.6", t
}({});
//# sourceMappingURL=bundle.min.js.map