! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).faceapi = t.faceapi || {})
}(this, function (c) {
    "use strict";
    var r = function (t, e) {
        return (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    };

    function a(t, e) {
        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    var O = function () {
        return (O = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function p(i, a, s, u) {
        return new(s || (s = Promise))(function (t, e) {
            function n(t) {
                try {
                    o(u.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function r(t) {
                try {
                    o(u.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(e) {
                e.done ? t(e.value) : new s(function (t) {
                    t(e.value)
                }).then(n, r)
            }
            o((u = u.apply(i, a || [])).next())
        })
    }

    function P(n, r) {
        var o, i, a, t, s = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this
        }), t;

        function e(e) {
            return function (t) {
                return function (e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                        switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e;
                                break;
                            case 4:
                                return s.label++, {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, i = e[1], e = [0];
                                continue;
                            case 7:
                                e = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                    s.label = e[1];
                                    break
                                }
                                if (6 === e[0] && s.label < a[1]) {
                                    s.label = a[1], a = e;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(e);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        e = r.call(n, s)
                    } catch (t) {
                        e = [6, t], i = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    }
    var o = function (t, e) {
        return (o = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, e)
    };

    function s(t, e) {
        function n() {
            this.constructor = t
        }
        o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    var n = function () {
        return (n = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function m(i, a, s, u) {
        return new(s || (s = Promise))(function (t, e) {
            function n(t) {
                try {
                    o(u.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function r(t) {
                try {
                    o(u.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(e) {
                e.done ? t(e.value) : new s(function (t) {
                    t(e.value)
                }).then(n, r)
            }
            o((u = u.apply(i, a || [])).next())
        })
    }

    function R(n, r) {
        var o, i, a, t, s = {
            label: 0,
            sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return t = {
            next: e(0),
            throw: e(1),
            return: e(2)
        }, "function" == typeof Symbol && (t[Symbol.iterator] = function () {
            return this
        }), t;

        function e(e) {
            return function (t) {
                return function (e) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, i && (a = 2 & e[0] ? i.return : e[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, e[1])).done) return a;
                        switch (i = 0, a && (e = [2 & e[0], a.value]), e[0]) {
                            case 0:
                            case 1:
                                a = e;
                                break;
                            case 4:
                                return s.label++, {
                                    value: e[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, i = e[1], e = [0];
                                continue;
                            case 7:
                                e = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) {
                                    s.label = e[1];
                                    break
                                }
                                if (6 === e[0] && s.label < a[1]) {
                                    s.label = a[1], a = e;
                                    break
                                }
                                if (a && s.label < a[2]) {
                                    s.label = a[2], s.ops.push(e);
                                    break
                                }
                                a[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        e = r.call(n, s)
                    } catch (t) {
                        e = [6, t], i = 0
                    } finally {
                        o = a = 0
                    }
                    if (5 & e[0]) throw e[1];
                    return {
                        value: e[0] ? e[1] : void 0,
                        done: !0
                    }
                }([e, t])
            }
        }
    }
    var i = {},
        u = {
            alpha: !1,
            antialias: !1,
            premultipliedAlpha: !1,
            preserveDrawingBuffer: !1,
            depth: !1,
            stencil: !1,
            failIfMajorPerformanceCaveat: !0
        };

    function l(t) {
        t in i || (i[t] = function (e) {
            if (1 !== e && 2 !== e) throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");
            var t = document.createElement("canvas");
            return t.addEventListener("webglcontextlost", function (t) {
                t.preventDefault(), delete i[e]
            }, !1), 1 === e ? t.getContext("webgl", u) || t.getContext("experimental-webgl", u) : t.getContext("webgl2", u)
        }(t));
        var e = i[t];
        return e.isContextLost() ? (delete i[t], l(t)) : (e.disable(e.DEPTH_TEST), e.disable(e.STENCIL_TEST), e.disable(e.BLEND), e.disable(e.DITHER), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SAMPLE_COVERAGE), e.enable(e.SCISSOR_TEST), e.enable(e.CULL_FACE), e.cullFace(e.BACK), i[t])
    }

    function h(t) {
        for (var e = t.length, n = 0, r = 0; 0 < e;) r = Math.random() * e | 0, n = t[--e], t[e] = t[r], t[r] = n
    }

    function f(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function _(t) {
        return t % 2 == 0 ? t : t + 1
    }

    function d(t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n];
        return e
    }

    function v(t, e) {
        var n = Math.random();
        return e * n + (1 - n) * t
    }

    function D(t, e) {
        if (!t) throw new Error("string" == typeof e ? e : e())
    }

    function g(t, e, n) {
        void 0 === n && (n = ""), D(E(t, e), function () {
            return n + " Shapes " + t + " and " + e + " must match"
        })
    }

    function y(t) {
        D(null != t, function () {
            return "The input to the tensor constructor must be a non-null value."
        })
    }

    function x(t, e) {
        if (void 0 === e && (e = []), null == e && (e = []), Array.isArray(t) || z(t))
            for (var n = 0; n < t.length; ++n) x(t[n], e);
        else e.push(t);
        return e
    }

    function B(t) {
        if (0 === t.length) return 1;
        for (var e = t[0], n = 1; n < t.length; n++) e *= t[n];
        return e
    }

    function E(t, e) {
        if (t === e) return !0;
        if (null == t || null == e) return !1;
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }

    function T(t) {
        return t % 1 == 0
    }

    function w(t) {
        if (null != Math.tanh) return Math.tanh(t);
        if (t === 1 / 0) return 1;
        if (t === -1 / 0) return -1;
        var e = Math.exp(2 * t);
        return (e - 1) / (e + 1)
    }

    function b(t) {
        var e = Math.ceil(Math.sqrt(t));
        return [e, Math.ceil(t / e)]
    }

    function C(t, e) {
        return e <= t.length ? t : t + " ".repeat(e - t.length)
    }

    function S(i, a, s) {
        return void 0 === a && (a = function (t) {
            return 0
        }), new Promise(function (e, n) {
            var r = 0,
                o = function () {
                    if (i()) e();
                    else {
                        var t = a(++r);
                        null != s && s <= r ? n() : setTimeout(o, t)
                    }
                };
            o()
        })
    }

    function N(t, e) {
        for (var n = 1, r = -1, o = 0; o < t.length; ++o)
            if (0 <= t[o]) n *= t[o];
            else if (-1 === t[o]) {
            if (-1 !== r) throw Error("Shapes can only have 1 implicit size. Found -1 at dim " + r + " and dim " + o);
            r = o
        } else if (t[o] < 0) throw Error("Shapes can not be < 0. Found " + t[o] + " at dim " + o);
        if (-1 === r) {
            if (0 < e && e !== n) throw Error("Size(" + e + ") must match the product of shape " + t);
            return t
        }
        if (0 === n) throw Error("Cannot infer the missing size in [" + t + "] when there are 0 elements");
        if (e % n != 0) throw Error("The implicit shape can't be a fractional number. Got " + e + " / " + n);
        var i = t.slice();
        return i[r] = e / n, i
    }

    function k(t, e) {
        var n = e.length;
        return D((t = null == t ? e.map(function (t, e) {
            return e
        }) : [].concat(t)).every(function (t) {
            return -n <= t && t < n
        }), function () {
            return "All values in axis param must be in range [-" + n + ", " + n + ") but got axis " + t
        }), D(t.every(function (t) {
            return T(t)
        }), function () {
            return "All values in axis param must be integers but got axis " + t
        }), t.map(function (t) {
            return t < 0 ? n + t : t
        })
    }

    function I(t, e) {
        for (var n = [], r = [], o = null == e ? null : k(e, t).sort(), i = 0, a = 0; a < t.length; ++a) {
            if (null != o) {
                if (o[i] === a && 1 !== t[a]) throw new Error("Can't squeeze axis " + a + " since its dim '" + t[a] + "' is not 1");
                (null == o[i] || o[i] > a) && 1 === t[a] && (n.push(t[a]), r.push(a)), o[i] <= a && i++
            }
            1 !== t[a] && (n.push(t[a]), r.push(a))
        }
        return {
            newShape: n,
            keptDims: r
        }
    }

    function A(t, e) {
        var n = null;
        if (null == t || "float32" === t) n = new Float32Array(e);
        else if ("int32" === t) n = new Int32Array(e);
        else {
            if ("bool" !== t) throw new Error("Unknown data type " + t);
            n = new Uint8Array(e)
        }
        return n
    }

    function M(t, e) {
        var n = null;
        if (null == t || "float32" === t) n = new Float32Array(e);
        else if ("int32" === t) n = new Int32Array(e);
        else if ("bool" === t) n = new Uint8Array(e);
        else {
            if ("string" !== t) throw new Error("Unknown data type " + t);
            n = new Array(e)
        }
        return n
    }

    function F(t, e, n) {
        if ("float32" === e)
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                if (isNaN(o) || !isFinite(o)) throw Error("The result of the '" + n + "' is " + o + ".")
            }
    }

    function L(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (isNaN(r) || !isFinite(r)) throw Error("A tensor of type " + e + " being uploaded contains " + r + ".")
        }
    }

    function W(t, e) {
        return !("complex64" === e || "float32" === e && "complex64" !== t || "int32" === e && "float32" !== t && "complex64" !== t || "bool" === e && "bool" === t)
    }

    function z(t) {
        return t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array
    }

    function U(t) {
        if ("float32" === t || "int32" === t) return 4;
        if ("complex64" === t) return 8;
        if ("bool" === t) return 1;
        throw new Error("Unknown dtype " + t)
    }

    function G(t) {
        if (null == t) return 0;
        var e = 0;
        return t.forEach(function (t) {
            return e += 2 * t.length
        }), e
    }

    function V(t) {
        return "string" == typeof t || t instanceof String
    }

    function e(t) {
        return "boolean" == typeof t
    }

    function H(t) {
        return "number" == typeof t
    }

    function q(t) {
        return Array.isArray(t) ? q(t[0]) : t instanceof Float32Array ? "float32" : t instanceof Int32Array || t instanceof Uint8Array ? "int32" : H(t) ? "float32" : V(t) ? "string" : e(t) ? "bool" : "float32"
    }

    function j(t) {
        return !!(t && t.constructor && t.call && t.apply)
    }

    function $(t, e) {
        for (var n = e; n < t; ++n)
            if (t % n == 0) return n;
        return t
    }

    function K(t) {
        var e = t.length;
        if (e < 2) return [];
        var n = new Array(e - 1);
        n[e - 2] = t[e - 1];
        for (var r = e - 3; 0 <= r; --r) n[r] = n[r + 1] * t[r + 1];
        return n
    }

    function X(t, e, n) {
        if ("string" === e) throw new Error("Cannot convert a string[] to a TypedArray");
        if (Array.isArray(t) && (t = x(t)), n && L(t, e), o = e, (r = t) instanceof Float32Array && "float32" === o || r instanceof Int32Array && "int32" === o || r instanceof Uint8Array && "bool" === o) return t;
        var r, o;
        if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t);
        if ("int32" === e) return new Int32Array(t);
        if ("bool" !== e) throw new Error("Unknown data type " + e);
        for (var i = new Uint8Array(t.length), a = 0; a < i.length; ++a) 0 !== Math.round(t[a]) && (i[a] = 1);
        return i
    }

    function Y(t, e) {
        if (0 === t.length) return e[0];
        var n = t.reduce(function (t, e) {
            return t * e
        });
        if (0 === n) return [];
        if (n !== e.length) throw new Error("[" + t + "] does not match the input size.");
        return function t(e, n, r) {
            var o = new Array;
            if (1 === n.length)
                for (var i = n[0], a = 0; a < i; a++) o[a] = r[e + a];
            else {
                i = n[0];
                var s = n.slice(1),
                    u = s.reduce(function (t, e) {
                        return t * e
                    });
                for (a = 0; a < i; a++) o[a] = t(e + a * u, s, r)
            }
            return o
        }(0, t, e)
    }

    function Q(t, e) {
        for (var n = J(t, e), r = 0; r < n.length; r++) n[r] = 1;
        return n
    }

    function J(t, e) {
        if (null == e || "float32" === e || "complex64" === e) return new Float32Array(t);
        if ("int32" === e) return new Int32Array(t);
        if ("bool" === e) return new Uint8Array(t);
        throw new Error("Unknown data type " + e)
    }

    function Z() {
        if ("undefined" != typeof performance) return performance.now();
        if ("undefined" == typeof process) throw new Error("Cannot measure time in this environment. You should run tf.js in the browser or in Node.js");
        var t = process.hrtime();
        return 1e3 * t[0] + t[1] / 1e6
    }

    function tt(e) {
        e.forEach(function (t) {
            D(Number.isInteger(t) && 0 <= t, function () {
                return "Tensor must have a shape comprised of positive integers but got shape [" + e + "]."
            })
        })
    }
    var t = Object.freeze({
            shuffle: h,
            clamp: f,
            nearestLargerEven: _,
            sum: d,
            randUniform: v,
            distSquared: function (t, e) {
                for (var n = 0, r = 0; r < t.length; r++) {
                    var o = Number(t[r]) - Number(e[r]);
                    n += o * o
                }
                return n
            },
            assert: D,
            assertShapesMatch: g,
            assertNonNull: y,
            flatten: x,
            sizeFromShape: B,
            isScalarShape: function (t) {
                return 0 === t.length
            },
            arraysEqual: E,
            isInt: T,
            tanh: w,
            sizeToSquarishShape: b,
            createShuffledIndices: function (t) {
                for (var e = new Uint32Array(t), n = 0; n < t; ++n) e[n] = n;
                return h(e), e
            },
            rightPad: C,
            repeatedTry: S,
            inferFromImplicitShape: N,
            parseAxisParam: k,
            squeezeShape: I,
            getTypedArrayFromDType: A,
            getArrayFromDType: M,
            checkComputationForErrors: F,
            checkConversionForErrors: L,
            hasEncodingLoss: W,
            isTypedArray: z,
            bytesPerElement: U,
            bytesFromStringArray: G,
            isString: V,
            isBoolean: e,
            isNumber: H,
            inferDtype: q,
            isFunction: j,
            nearestDivisor: $,
            computeStrides: K,
            toTypedArray: X,
            toNestedArray: Y,
            makeOnesTypedArray: Q,
            makeZerosTypedArray: J,
            now: Z,
            assertNonNegativeIntegerDimensions: tt
        }),
        et = function () {
            function t(t, e) {
                this.backendTimer = t, null == (this.logger = e) && (this.logger = new nt)
            }
            return t.prototype.profileKernel = function (o, t) {
                var e, i = this,
                    a = this.backendTimer.time(function () {
                        e = t()
                    });
                return (Array.isArray(e) ? e : [e]).forEach(function (n) {
                    var r = n.dataSync();
                    F(r, n.dtype, o), a.then(function (t) {
                        var e = "";
                        null != t.getExtraProfileInfo && (e = t.getExtraProfileInfo()), i.logger.logKernelProfile(o, n, r, t.kernelMs, e)
                    })
                }), e
            }, t
        }(),
        nt = function () {
            function t() {}
            return t.prototype.logKernelProfile = function (t, e, n, r, o) {
                var i = C(r + "ms", 9),
                    a = C(t, 25),
                    s = e.rank,
                    u = e.size,
                    c = C(e.shape.toString(), 14);
                console.log("%c" + a + "\t%c" + i + "\t%c" + s + "D " + c + "\t%c" + u + "\t%c" + o, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green")
            }, t
        }(),
        rt = 20,
        ot = 3,
        it = 7;

    function at(t, e, n, r) {
        var o = K(e),
            i = function (t, e, n, r) {
                var o = B(e),
                    i = r[r.length - 1],
                    a = new Array(i).fill(0),
                    s = e.length,
                    u = "complex64" === n ? ct(t) : t;
                if (1 < s)
                    for (var c = 0; c < o / i; c++)
                        for (var l = c * i, h = 0; h < i; h++) a[h] = Math.max(a[h], st(u[l + h], 0, n).length);
                return a
            }(t, e, n, o),
            a = e.length,
            s = function t(e, n, r, o, i, a) {
                void 0 === a && (a = !0);
                var s = "complex64" === r ? 2 : 1,
                    u = n[0],
                    c = n.length;
                if (0 === c) return "complex64" === r ? [st(ct(e)[0], 0, r)] : "bool" === r ? [ut(e[0])] : [e[0].toString()];
                if (1 === c) {
                    if (rt < u) {
                        var l = ot * s,
                            h = Array.from(e.slice(0, l)),
                            p = Array.from(e.slice(u - ot * s, u));
                        return "complex64" === r && (h = ct(h), p = ct(p)), ["[" + h.map(function (t, e) {
                            return st(t, i[e], r)
                        }).join(", ") + ", ..., " + p.map(function (t, e) {
                            return st(t, i[u - ot + e], r)
                        }).join(", ") + "]"]
                    }
                    return ["[" + ("complex64" === r ? ct(e) : Array.from(e)).map(function (t, e) {
                        return st(t, i[e], r)
                    }).join(", ") + "]"]
                }
                var f = n.slice(1),
                    d = o.slice(1),
                    v = o[0] * s,
                    m = [];
                if (rt < u) {
                    for (var g = 0; g < ot; g++) {
                        var y = (x = g * v) + v;
                        m.push.apply(m, t(e.slice(x, y), f, r, d, i, !1))
                    }
                    for (m.push("..."), g = u - ot; g < u; g++) y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), f, r, d, i, g === u - 1))
                } else
                    for (g = 0; g < u; g++) {
                        var x;
                        y = (x = g * v) + v, m.push.apply(m, t(e.slice(x, y), f, r, d, i, g === u - 1))
                    }
                var w = 2 === c ? "," : "";
                m[0] = "[" + m[0] + w;
                for (g = 1; g < m.length - 1; g++) m[g] = " " + m[g] + w;
                var b = ",\n";
                for (g = 2; g < c; g++) b += "\n";
                return m[m.length - 1] = " " + m[m.length - 1] + "]" + (a ? "" : b), m
            }(t, e, n, o, i),
            u = ["Tensor"];
        return r && (u.push("  dtype: " + n), u.push("  rank: " + a), u.push("  shape: [" + e + "]"), u.push("  values:")), u.push(s.map(function (t) {
            return "    " + t
        }).join("\n")), u.join("\n")
    }

    function st(t, e, n) {
        return C(Array.isArray(t) ? parseFloat(t[0].toFixed(it)) + " + " + parseFloat(t[1].toFixed(it)) + "j" : V(t) ? "'" + t + "'" : "bool" === n ? ut(t) : parseFloat(t.toFixed(it)).toString(), e)
    }

    function ut(t) {
        return 0 === t ? "false" : "true"
    }

    function ct(t) {
        for (var e = [], n = 0; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
        return e
    }
    var lt = function () {
            function t(t, e, n) {
                var r = this;
                if (this.dtype = e, this.shape = t.slice(), this.size = B(t), null != n) {
                    var o = n.length;
                    D(o === this.size, function () {
                        return "Length of values '" + o + "' does not match the size inferred by the shape '" + r.size + "'."
                    })
                }
                if ("complex64" === e) throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");
                this.values = n || M(e, this.size), this.strides = K(t)
            }
            return t.prototype.set = function (t) {
                for (var e = this, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                0 === n.length && (n = [0]), D(n.length === this.rank, function () {
                    return "The number of provided coordinates (" + n.length + ") must match the rank (" + e.rank + ")"
                });
                var o = this.locToIndex(n);
                this.values[o] = t
            }, t.prototype.get = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                0 === t.length && (t = [0]);
                for (var n = 0, r = 0, o = t; r < o.length; r++) {
                    var i = o[r];
                    if (i < 0 || i >= this.shape[n]) {
                        var a = "Requested out of range element at " + t + ".   Buffer shape=" + this.shape;
                        throw new Error(a)
                    }
                    n++
                }
                for (var s = t[t.length - 1], u = 0; u < t.length - 1; ++u) s += this.strides[u] * t[u];
                return this.values[s]
            }, t.prototype.locToIndex = function (t) {
                if (0 === this.rank) return 0;
                if (1 === this.rank) return t[0];
                for (var e = t[t.length - 1], n = 0; n < t.length - 1; ++n) e += this.strides[n] * t[n];
                return e
            }, t.prototype.indexToLoc = function (t) {
                if (0 === this.rank) return [];
                if (1 === this.rank) return [t];
                for (var e = new Array(this.shape.length), n = 0; n < e.length - 1; ++n) e[n] = Math.floor(t / this.strides[n]), t -= e[n] * this.strides[n];
                return e[e.length - 1] = t, e
            }, Object.defineProperty(t.prototype, "rank", {
                get: function () {
                    return this.shape.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.toTensor = function () {
                return dt.make(this.shape, {
                    values: this.values
                }, this.dtype)
            }, t
        }(),
        ht = null,
        pt = null,
        ft = null;
    var dt = function () {
        function o(t, e, n, r, o) {
            this.kept = !1, this.isDisposedInternal = !1, this.shape = t.slice(), this.dtype = e || "float32", this.size = B(t), this.strides = K(t), this.dataId = null != r ? r : {}, this.id = ht().nextTensorId(), this.rankType = this.rank < 5 ? this.rank.toString() : "higher", ht().registerTensor(this, o), null != n && ht().write(this.dataId, n)
        }
        return o.make = function (t, e, n, r) {
            return new o(t, n, e.values, e.dataId, r)
        }, o.prototype.flatten = function () {
            return this.throwIfDisposed(), this.as1D()
        }, o.prototype.asScalar = function () {
            return this.throwIfDisposed(), D(1 === this.size, function () {
                return "The array must have only 1 element."
            }), this.reshape([])
        }, o.prototype.as1D = function () {
            return this.throwIfDisposed(), this.reshape([this.size])
        }, o.prototype.as2D = function (t, e) {
            return this.throwIfDisposed(), this.reshape([t, e])
        }, o.prototype.as3D = function (t, e, n) {
            return this.throwIfDisposed(), this.reshape([t, e, n])
        }, o.prototype.as4D = function (t, e, n, r) {
            return this.throwIfDisposed(), this.reshape([t, e, n, r])
        }, o.prototype.as5D = function (t, e, n, r, o) {
            return this.throwIfDisposed(), this.reshape([t, e, n, r, o])
        }, o.prototype.asType = function (t) {
            return this.throwIfDisposed(), pt.cast(this, t)
        }, Object.defineProperty(o.prototype, "rank", {
            get: function () {
                return this.shape.length
            },
            enumerable: !0,
            configurable: !0
        }), o.prototype.buffer = function () {
            return m(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.data()];
                        case 1:
                            return e = t.sent(), [2, pt.buffer(this.shape, this.dtype, e)]
                    }
                })
            })
        }, o.prototype.bufferSync = function () {
            return pt.buffer(this.shape, this.dtype, this.dataSync())
        }, o.prototype.array = function () {
            return m(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.data()];
                        case 1:
                            return e = t.sent(), [2, Y(this.shape, e)]
                    }
                })
            })
        }, o.prototype.arraySync = function () {
            return Y(this.shape, this.dataSync())
        }, o.prototype.data = function () {
            return m(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return this.throwIfDisposed(), [2, ht().read(this.dataId)]
                })
            })
        }, o.prototype.dataSync = function () {
            return this.throwIfDisposed(), ht().readSync(this.dataId)
        }, o.prototype.dispose = function () {
            this.isDisposed || (ht().disposeTensor(this), this.isDisposedInternal = !0)
        }, Object.defineProperty(o.prototype, "isDisposed", {
            get: function () {
                return this.isDisposedInternal
            },
            enumerable: !0,
            configurable: !0
        }), o.prototype.throwIfDisposed = function () {
            if (this.isDisposed) throw new Error("Tensor is disposed.")
        }, o.prototype.toFloat = function () {
            return this.asType("float32")
        }, o.prototype.toInt = function () {
            return this.asType("int32")
        }, o.prototype.toBool = function () {
            return this.asType("bool")
        }, o.prototype.print = function (t) {
            return void 0 === t && (t = !1), pt.print(this, t)
        }, o.prototype.reshape = function (t) {
            return this.throwIfDisposed(), pt.reshape(this, t)
        }, o.prototype.reshapeAs = function (t) {
            return this.throwIfDisposed(), this.reshape(t.shape)
        }, o.prototype.expandDims = function (t) {
            return void 0 === t && (t = 0), pt.expandDims(this, t)
        }, o.prototype.cumsum = function (t, e, n) {
            return void 0 === t && (t = 0), void 0 === e && (e = !1), void 0 === n && (n = !1), pt.cumsum(this, t, e, n)
        }, o.prototype.squeeze = function (t) {
            return this.throwIfDisposed(), pt.squeeze(this, t)
        }, o.prototype.clone = function () {
            return this.throwIfDisposed(), pt.clone(this)
        }, o.prototype.oneHot = function (t, e, n) {
            return this.throwIfDisposed(), pt.oneHot(this, t, e, n)
        }, o.prototype.toString = function (t) {
            return void 0 === t && (t = !1), at(this.dataSync(), this.shape, this.dtype, t)
        }, o.prototype.tile = function (t) {
            return this.throwIfDisposed(), pt.tile(this, t)
        }, o.prototype.gather = function (t, e) {
            return void 0 === e && (e = 0), this.throwIfDisposed(), pt.gather(this, t, e)
        }, o.prototype.matMul = function (t, e, n) {
            return void 0 === e && (e = !1), void 0 === n && (n = !1), this.throwIfDisposed(), pt.matMul(this, t, e, n)
        }, o.prototype.dot = function (t) {
            return this.throwIfDisposed(), pt.dot(this, t)
        }, o.prototype.norm = function (t, e, n) {
            return void 0 === t && (t = "euclidean"), void 0 === e && (e = null), void 0 === n && (n = !1), this.throwIfDisposed(), pt.norm(this, t, e, n)
        }, o.prototype.slice = function (t, e) {
            return this.throwIfDisposed(), pt.slice(this, t, e)
        }, o.prototype.reverse = function (t) {
            return this.throwIfDisposed(), pt.reverse(this, t)
        }, o.prototype.concat = function (t, e) {
            return void 0 === e && (e = 0), this.throwIfDisposed(), t instanceof o && (t = [t]), pt.concat([this].concat(t), e)
        }, o.prototype.split = function (t, e) {
            return void 0 === e && (e = 0), this.throwIfDisposed(), pt.split(this, t, e)
        }, o.prototype.stack = function (t, e) {
            return void 0 === e && (e = 0), pt.stack([this, t], e)
        }, o.prototype.unstack = function (t) {
            return void 0 === t && (t = 0), pt.unstack(this, t)
        }, o.prototype.pad = function (t, e) {
            return void 0 === e && (e = 0), pt.pad(this, t, e)
        }, o.prototype.batchNormalization = function (t, e, n, r, o) {
            return void 0 === n && (n = .001), ft("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"), this.batchNorm(t, e, o, r, n)
        }, o.prototype.batchNorm = function (t, e, n, r, o) {
            return void 0 === o && (o = .001), this.throwIfDisposed(), pt.batchNorm(this, t, e, n, r, o)
        }, o.prototype.all = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.all(this, t, e)
        }, o.prototype.any = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.any(this, t, e)
        }, o.prototype.logSumExp = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.logSumExp(this, t, e)
        }, o.prototype.sum = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.sum(this, t, e)
        }, o.prototype.prod = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.prod(this, t, e)
        }, o.prototype.mean = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.mean(this, t, e)
        }, o.prototype.min = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.min(this, t, e)
        }, o.prototype.max = function (t, e) {
            return void 0 === t && (t = null), void 0 === e && (e = !1), this.throwIfDisposed(), pt.max(this, t, e)
        }, o.prototype.argMin = function (t) {
            return void 0 === t && (t = null), this.throwIfDisposed(), pt.argMin(this, t)
        }, o.prototype.argMax = function (t) {
            return void 0 === t && (t = null), this.throwIfDisposed(), pt.argMax(this, t)
        }, o.prototype.cast = function (t) {
            return this.throwIfDisposed(), pt.cast(this, t)
        }, o.prototype.add = function (t) {
            return this.throwIfDisposed(), pt.add(this, t)
        }, o.prototype.addStrict = function (t) {
            return this.throwIfDisposed(), pt.addStrict(this, t)
        }, o.prototype.atan2 = function (t) {
            return this.throwIfDisposed(), pt.atan2(this, t)
        }, o.prototype.sub = function (t) {
            return this.throwIfDisposed(), pt.sub(this, t)
        }, o.prototype.subStrict = function (t) {
            return this.throwIfDisposed(), pt.subStrict(this, t)
        }, o.prototype.pow = function (t) {
            return this.throwIfDisposed(), pt.pow(this, t)
        }, o.prototype.powStrict = function (t) {
            return this.throwIfDisposed(), pt.powStrict(this, t)
        }, o.prototype.mul = function (t) {
            return this.throwIfDisposed(), pt.mul(this, t)
        }, o.prototype.mulStrict = function (t) {
            return this.throwIfDisposed(), pt.mulStrict(this, t)
        }, o.prototype.div = function (t) {
            return this.throwIfDisposed(), pt.div(this, t)
        }, o.prototype.floorDiv = function (t) {
            return this.throwIfDisposed(), pt.floorDiv(this, t)
        }, o.prototype.divStrict = function (t) {
            return this.throwIfDisposed(), pt.divStrict(this, t)
        }, o.prototype.minimum = function (t) {
            return this.throwIfDisposed(), pt.minimum(this, t)
        }, o.prototype.minimumStrict = function (t) {
            return this.throwIfDisposed(), pt.minimumStrict(this, t)
        }, o.prototype.maximum = function (t) {
            return this.throwIfDisposed(), pt.maximum(this, t)
        }, o.prototype.maximumStrict = function (t) {
            return this.throwIfDisposed(), pt.maximumStrict(this, t)
        }, o.prototype.mod = function (t) {
            return this.throwIfDisposed(), pt.mod(this, t)
        }, o.prototype.modStrict = function (t) {
            return this.throwIfDisposed(), pt.modStrict(this, t)
        }, o.prototype.squaredDifference = function (t) {
            return this.throwIfDisposed(), pt.squaredDifference(this, t)
        }, o.prototype.squaredDifferenceStrict = function (t) {
            return this.throwIfDisposed(), pt.squaredDifferenceStrict(this, t)
        }, o.prototype.transpose = function (t) {
            return this.throwIfDisposed(), pt.transpose(this, t)
        }, o.prototype.notEqual = function (t) {
            return this.throwIfDisposed(), pt.notEqual(this, t)
        }, o.prototype.notEqualStrict = function (t) {
            return this.throwIfDisposed(), pt.notEqualStrict(this, t)
        }, o.prototype.less = function (t) {
            return this.throwIfDisposed(), pt.less(this, t)
        }, o.prototype.lessStrict = function (t) {
            return this.throwIfDisposed(), pt.lessStrict(this, t)
        }, o.prototype.equal = function (t) {
            return this.throwIfDisposed(), pt.equal(this, t)
        }, o.prototype.equalStrict = function (t) {
            return this.throwIfDisposed(), pt.equalStrict(this, t)
        }, o.prototype.lessEqual = function (t) {
            return this.throwIfDisposed(), pt.lessEqual(this, t)
        }, o.prototype.lessEqualStrict = function (t) {
            return this.throwIfDisposed(), pt.lessEqualStrict(this, t)
        }, o.prototype.greater = function (t) {
            return this.throwIfDisposed(), pt.greater(this, t)
        }, o.prototype.greaterStrict = function (t) {
            return this.throwIfDisposed(), pt.greaterStrict(this, t)
        }, o.prototype.greaterEqual = function (t) {
            return this.throwIfDisposed(), pt.greaterEqual(this, t)
        }, o.prototype.greaterEqualStrict = function (t) {
            return this.throwIfDisposed(), pt.greaterEqualStrict(this, t)
        }, o.prototype.logicalAnd = function (t) {
            return this.throwIfDisposed(), pt.logicalAnd(this, t)
        }, o.prototype.logicalOr = function (t) {
            return this.throwIfDisposed(), pt.logicalOr(this, t)
        }, o.prototype.logicalNot = function () {
            return this.throwIfDisposed(), pt.logicalNot(this)
        }, o.prototype.logicalXor = function (t) {
            return this.throwIfDisposed(), pt.logicalXor(this, t)
        }, o.prototype.where = function (t, e) {
            return this.throwIfDisposed(), pt.where(t, this, e)
        }, o.prototype.neg = function () {
            return this.throwIfDisposed(), pt.neg(this)
        }, o.prototype.ceil = function () {
            return this.throwIfDisposed(), pt.ceil(this)
        }, o.prototype.floor = function () {
            return this.throwIfDisposed(), pt.floor(this)
        }, o.prototype.sign = function () {
            return this.throwIfDisposed(), pt.sign(this)
        }, o.prototype.exp = function () {
            return this.throwIfDisposed(), pt.exp(this)
        }, o.prototype.expm1 = function () {
            return this.throwIfDisposed(), pt.expm1(this)
        }, o.prototype.log = function () {
            return this.throwIfDisposed(), pt.log(this)
        }, o.prototype.log1p = function () {
            return this.throwIfDisposed(), pt.log1p(this)
        }, o.prototype.sqrt = function () {
            return this.throwIfDisposed(), pt.sqrt(this)
        }, o.prototype.rsqrt = function () {
            return this.throwIfDisposed(), pt.rsqrt(this)
        }, o.prototype.square = function () {
            return this.throwIfDisposed(), pt.square(this)
        }, o.prototype.reciprocal = function () {
            return this.throwIfDisposed(), pt.reciprocal(this)
        }, o.prototype.abs = function () {
            return this.throwIfDisposed(), pt.abs(this)
        }, o.prototype.clipByValue = function (t, e) {
            return this.throwIfDisposed(), pt.clipByValue(this, t, e)
        }, o.prototype.relu = function () {
            return this.throwIfDisposed(), pt.relu(this)
        }, o.prototype.elu = function () {
            return this.throwIfDisposed(), pt.elu(this)
        }, o.prototype.selu = function () {
            return this.throwIfDisposed(), pt.selu(this)
        }, o.prototype.leakyRelu = function (t) {
            return void 0 === t && (t = .2), this.throwIfDisposed(), pt.leakyRelu(this, t)
        }, o.prototype.prelu = function (t) {
            return this.throwIfDisposed(), pt.prelu(this, t)
        }, o.prototype.sigmoid = function () {
            return this.throwIfDisposed(), pt.sigmoid(this)
        }, o.prototype.logSigmoid = function () {
            return this.throwIfDisposed(), pt.logSigmoid(this)
        }, o.prototype.softplus = function () {
            return this.throwIfDisposed(), pt.softplus(this)
        }, o.prototype.zerosLike = function () {
            return this.throwIfDisposed(), pt.zerosLike(this)
        }, o.prototype.onesLike = function () {
            return this.throwIfDisposed(), pt.onesLike(this)
        }, o.prototype.sin = function () {
            return this.throwIfDisposed(), pt.sin(this)
        }, o.prototype.cos = function () {
            return this.throwIfDisposed(), pt.cos(this)
        }, o.prototype.tan = function () {
            return this.throwIfDisposed(), pt.tan(this)
        }, o.prototype.asin = function () {
            return this.throwIfDisposed(), pt.asin(this)
        }, o.prototype.acos = function () {
            return this.throwIfDisposed(), pt.acos(this)
        }, o.prototype.atan = function () {
            return this.throwIfDisposed(), pt.atan(this)
        }, o.prototype.sinh = function () {
            return this.throwIfDisposed(), pt.sinh(this)
        }, o.prototype.cosh = function () {
            return this.throwIfDisposed(), pt.cosh(this)
        }, o.prototype.tanh = function () {
            return this.throwIfDisposed(), pt.tanh(this)
        }, o.prototype.asinh = function () {
            return this.throwIfDisposed(), pt.asinh(this)
        }, o.prototype.acosh = function () {
            return this.throwIfDisposed(), pt.acosh(this)
        }, o.prototype.atanh = function () {
            return this.throwIfDisposed(), pt.atanh(this)
        }, o.prototype.erf = function () {
            return this.throwIfDisposed(), pt.erf(this)
        }, o.prototype.round = function () {
            return this.throwIfDisposed(), pt.round(this)
        }, o.prototype.step = function (t) {
            return void 0 === t && (t = 0), this.throwIfDisposed(), pt.step(this, t)
        }, o.prototype.softmax = function (t) {
            return void 0 === t && (t = -1), this.throwIfDisposed(), pt.softmax(this, t)
        }, o.prototype.logSoftmax = function (t) {
            return void 0 === t && (t = -1), this.throwIfDisposed(), pt.logSoftmax(this, t)
        }, o.prototype.resizeBilinear = function (t, e) {
            return void 0 === e && (e = !1), this.throwIfDisposed(), pt.image.resizeBilinear(this, t, e)
        }, o.prototype.resizeNearestNeighbor = function (t, e) {
            return void 0 === e && (e = !1), this.throwIfDisposed(), pt.image.resizeNearestNeighbor(this, t, e)
        }, o.prototype.conv1d = function (t, e, n, r, o, i) {
            return void 0 === r && (r = "NWC"), void 0 === o && (o = 1), this.throwIfDisposed(), pt.conv1d(this, t, e, n, r, o, i)
        }, o.prototype.conv2d = function (t, e, n, r, o, i) {
            return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), pt.conv2d(this, t, e, n, r, o, i)
        }, o.prototype.conv2dTranspose = function (t, e, n, r, o) {
            return this.throwIfDisposed(), pt.conv2dTranspose(this, t, e, n, r, o)
        }, o.prototype.depthwiseConv2D = function (t, e, n, r, o, i) {
            return void 0 === r && (r = "NHWC"), void 0 === o && (o = [1, 1]), this.throwIfDisposed(), pt.depthwiseConv2d(this, t, e, n, r, o, i)
        }, o.prototype.separableConv2d = function (t, e, n, r, o, i) {
            return void 0 === o && (o = [1, 1]), void 0 === i && (i = "NHWC"), this.throwIfDisposed(), pt.separableConv2d(this, t, e, n, r, o, i)
        }, o.prototype.avgPool = function (t, e, n, r) {
            return this.throwIfDisposed(), pt.avgPool(this, t, e, n, r)
        }, o.prototype.maxPool = function (t, e, n, r) {
            return this.throwIfDisposed(), pt.maxPool(this, t, e, n, r)
        }, o.prototype.localResponseNormalization = function (t, e, n, r) {
            return void 0 === t && (t = 5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === r && (r = .5), pt.localResponseNormalization(this, t, e, n, r)
        }, o.prototype.pool = function (t, e, n, r, o) {
            return this.throwIfDisposed(), pt.pool(this, t, e, n, r, o)
        }, o.prototype.variable = function (t, e, n) {
            return void 0 === t && (t = !0), this.throwIfDisposed(), vt.variable(this, t, e, n)
        }, o.prototype.unsortedSegmentSum = function (t, e) {
            return this.throwIfDisposed(), pt.unsortedSegmentSum(this, t, e)
        }, o.prototype.batchToSpaceND = function (t, e) {
            return this.throwIfDisposed(), pt.batchToSpaceND(this, t, e)
        }, o.prototype.spaceToBatchND = function (t, e) {
            return this.throwIfDisposed(), pt.spaceToBatchND(this, t, e)
        }, o.prototype.topk = function (t, e) {
            return void 0 === t && (t = 1), void 0 === e && (e = !0), this.throwIfDisposed(), pt.topk(this, t, e)
        }, o.prototype.stridedSlice = function (t, e, n, r, o, i, a, s) {
            return void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), this.throwIfDisposed(), pt.stridedSlice(this, t, e, n, r, o, i, a, s)
        }, o.prototype.depthToSpace = function (t, e) {
            return this.throwIfDisposed(), pt.depthToSpace(this, t, e)
        }, o.prototype.fft = function () {
            return this.throwIfDisposed(), pt.spectral.fft(this)
        }, o.prototype.ifft = function () {
            return this.throwIfDisposed(), pt.spectral.ifft(this)
        }, o.prototype.rfft = function () {
            return this.throwIfDisposed(), pt.spectral.rfft(this)
        }, o.prototype.irfft = function () {
            return this.throwIfDisposed(), pt.spectral.irfft(this)
        }, o
    }();
    Object.defineProperty(dt, Symbol.hasInstance, {
        value: function (t) {
            return !!t && null != t.dataId && null != t.shape && null != t.dtype
        }
    });
    var vt = function (o) {
        function i(t, e, n) {
            void 0 === e && (e = !0);
            var r = o.call(this, t.shape, t.dtype, null, t.dataId) || this;
            r.trainable = e, r.name = n, null == r.name && (r.name = ht().nextVariableId().toString());
            try {
                ht().registerVariable(r)
            } catch (t) {
                throw ht().disposeTensor(r), t
            }
            return r
        }
        return s(i, o), i.variable = function (t, e, n, r) {
            return void 0 === e && (e = !0), null != r && r !== t.dtype && (t = t.asType(r)), new i(t, e, n)
        }, i.prototype.assign = function (t) {
            if (t.dtype !== this.dtype) throw new Error("dtype of the new value (" + t.dtype + ") and previous value (" + this.dtype + ") must match");
            if (!E(t.shape, this.shape)) throw new Error("shape of the new value (" + t.shape + ") and previous value (" + this.shape + ") must match");
            ht().disposeTensor(this), this.dataId = t.dataId, ht().registerTensor(this)
        }, i
    }(dt);
    Object.defineProperty(vt, Symbol.hasInstance, {
        value: function (t) {
            return t instanceof dt && null != t.assign && t.assign instanceof Function
        }
    });
    var mt, gt, yt, xt, wt, bt, Et, Ct, _t, St, Rt = vt.variable;
    (St = mt || (mt = {})).R0 = "R0", St.R1 = "R1", St.R2 = "R2", St.R3 = "R3", St.R4 = "R4", St.R5 = "R5", St.R6 = "R6", (_t = gt || (gt = {})).float32 = "float32", _t.int32 = "int32", _t.bool = "int32", _t.complex64 = "complex64", (Ct = yt || (yt = {})).float32 = "float32", Ct.int32 = "int32", Ct.bool = "bool", Ct.complex64 = "complex64", (Et = xt || (xt = {})).float32 = "float32", Et.int32 = "float32", Et.bool = "float32", Et.complex64 = "complex64", (bt = wt || (wt = {})).float32 = "complex64", bt.int32 = "complex64", bt.bool = "complex64", bt.complex64 = "complex64";
    var Nt = {
        float32: xt,
        int32: gt,
        bool: yt,
        complex64: wt
    };

    function kt(t, e) {
        if ("string" !== t && "string" !== e) return Nt[t][e];
        if ("string" === t && "string" === e) return "string";
        throw new Error("Can not upcast " + t + " with " + e)
    }

    function It(t) {
        return kt(t, "int32")
    }

    function Tt(t, e) {
        if (t.dtype === e.dtype) return [t, e];
        var n = kt(t.dtype, e.dtype);
        return [t.cast(n), e.cast(n)]
    }

    function At(t, e) {
        D(t.dtype === e.dtype, function () {
            return "The dtypes of the first(" + t.dtype + ") and second(" + e.dtype + ") input must match"
        })
    }

    function Dt(t) {
        var e = [];
        return function t(e, n, r) {
            if (null != e)
                if (e instanceof dt) n.push(e);
                else if (s = e, Array.isArray(s) || "object" == typeof s) {
                var o = e;
                for (var i in o) {
                    var a = o[i];
                    r.has(a) || (r.add(a), t(a, n, r))
                }
            }
            var s
        }(t, e, new Set), e
    }
    var Mt, Ot, Pt = Object.freeze({
            makeTypesMatch: Tt,
            assertTypesMatch: At,
            isTensorInList: function (t, e) {
                for (var n = 0; n < e.length; n++)
                    if (e[n].id === t.id) return !0;
                return !1
            },
            getTensorsInContainer: Dt
        }),
        Ft = function () {
            function t(t, e, n) {
                this.backend = t, this.safeMode = e, this.debugMode = n, this.registeredVariables = {}, this.nextTapeNodeId = 0, this.numBytes = 0, this.numTensors = 0, this.numStringTensors = 0, this.numDataBuffers = 0, this.profiling = !1, this.gradientDepth = 0, this.kernelDepth = 0, this.scopeStack = [], this.nextScopeId = 0, this.tensorInfo = new WeakMap, this.profiler = new et(t), this.activeProfile = {
                    newBytes: 0,
                    newTensors: 0,
                    peakBytes: 0,
                    kernels: [],
                    result: null
                }
            }
            return t.prototype.moveData = function (t) {
                this.write(t, this.readSync(t))
            }, t.prototype.tidy = function (t, e) {
                var n, r = this,
                    o = null;
                if (null == e) {
                    if ("function" != typeof t) throw new Error("Please provide a function to tidy()");
                    e = t
                } else {
                    if ("string" != typeof t && !(t instanceof String)) throw new Error("When calling with two arguments, the first argument to tidy() must be a string");
                    if ("function" != typeof e) throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");
                    o = t
                }
                return this.scopedRun(function () {
                    return r.startScope(o)
                }, function () {
                    return r.endScope(n)
                }, function () {
                    return (n = e()) instanceof Promise && console.error("Cannot return a Promise inside of tidy."), n
                })
            }, t.prototype.scopedRun = function (t, e, n) {
                t();
                try {
                    var r = n();
                    return e(), r
                } catch (t) {
                    throw e(), t
                }
            }, t.prototype.nextTensorId = function () {
                return t.nextTensorId++
            }, t.prototype.nextVariableId = function () {
                return t.nextVariableId++
            }, t.prototype.clone = function (t) {
                var e = dt.make(t.shape, {
                    dataId: t.dataId
                }, t.dtype);
                return this.addTapeNode([t], e, function (t) {
                    return [t.toFloat()]
                }), e
            }, t.prototype.runKernel = function (t, e, n) {
                var r, o = this,
                    i = [],
                    a = this.isTapeOn(),
                    s = null != this.activeScope ? this.activeScope.name : "",
                    u = function (t) {
                        a && (i = t.map(function (t) {
                            return o.keep(o.clone(t))
                        }))
                    },
                    c = this.numBytes,
                    l = this.numTensors;
                if (this.scopedRun(function () {
                        return o.kernelDepth++
                    }, function () {
                        return o.kernelDepth--
                    }, function () {
                        r = o.debugMode() ? o.profiler.profileKernel(s, function () {
                            return t(o.backend, u)
                        }) : t(o.backend, u)
                    }), a) {
                    var h = {
                        id: this.nextTapeNodeId++,
                        name: s,
                        inputs: e,
                        outputs: Array.isArray(r) ? r : [r],
                        saved: i
                    };
                    null != n && (h.gradient = function (t) {
                        return n(t, i)
                    }), this.activeTape.push(h)
                }
                return this.profiling && this.activeProfile.kernels.push({
                    name: s,
                    bytesAdded: this.numBytes - c,
                    totalBytesSnapshot: this.numBytes,
                    tensorsAdded: this.numTensors - l,
                    totalTensorsSnapshot: this.numTensors,
                    inputShapes: Object.keys(e).map(function (t) {
                        return e[t].shape
                    }),
                    outputShape: Array.isArray(r) ? r.map(function (t) {
                        return t.shape
                    }) : r.shape
                }), r
            }, t.prototype.registerTensor = function (t, e) {
                var n = this.tensorInfo.has(t.dataId) ? this.tensorInfo.get(t.dataId).refCount : 0;
                if (this.numTensors++, "string" === t.dtype && this.numStringTensors++, 0 === n) {
                    this.numDataBuffers++;
                    var r = 0;
                    "complex64" !== t.dtype && "string" !== t.dtype && (r = t.size * U(t.dtype)), this.tensorInfo.set(t.dataId, {
                        backend: null != e ? e : this.backend,
                        dtype: t.dtype,
                        shape: t.shape,
                        bytes: r,
                        refCount: 0
                    }), this.numBytes += r, null != e ? e.register(t.dataId, t.shape, t.dtype) : this.backend.register(t.dataId, t.shape, t.dtype)
                }
                this.tensorInfo.get(t.dataId).refCount++, t instanceof vt || this.track(t)
            }, t.prototype.registerVariable = function (t) {
                if (null != this.registeredVariables[t.name]) throw new Error("Variable with name " + t.name + " was already registered");
                this.registeredVariables[t.name] = t
            }, t.prototype.disposeTensor = function (t) {
                if (this.tensorInfo.has(t.dataId)) {
                    this.numTensors--, "string" === t.dtype && this.numStringTensors--;
                    var e = this.tensorInfo.get(t.dataId);
                    e.refCount <= 1 ? ("complex64" !== t.dtype && (this.numBytes -= e.bytes), this.numDataBuffers--, e.backend.disposeData(t.dataId), this.tensorInfo.delete(t.dataId)) : this.tensorInfo.get(t.dataId).refCount--
                }
            }, t.prototype.disposeVariables = function () {
                for (var t in this.registeredVariables) {
                    var e = this.registeredVariables[t];
                    this.disposeTensor(e), delete this.registeredVariables[t]
                }
            }, t.prototype.memory = function () {
                var t = this.backend.memory();
                return t.numTensors = this.numTensors, t.numDataBuffers = this.numDataBuffers, t.numBytes = this.numBytes, 0 < this.numStringTensors && (t.unreliable = !0, null == t.reasons && (t.reasons = []), t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")), t
            }, t.prototype.profile = function (r) {
                return m(this, void 0, void 0, function () {
                    var e, n;
                    return R(this, function (t) {
                        return this.profiling = !0, e = this.numBytes, n = this.numTensors, this.activeProfile.kernels = [], this.activeProfile.result = r(), this.profiling = !1, this.activeProfile.peakBytes = Math.max.apply(Math, this.activeProfile.kernels.map(function (t) {
                            return t.totalBytesSnapshot
                        })), this.activeProfile.newBytes = this.numBytes - e, this.activeProfile.newTensors = this.numTensors - n, [2, this.activeProfile]
                    })
                })
            }, t.prototype.isTapeOn = function () {
                return 0 < this.gradientDepth && 0 === this.kernelDepth
            }, t.prototype.addTapeNode = function (t, e, r) {
                var n = {};
                t.forEach(function (t, e) {
                    n[e] = t
                });
                var o = {
                    id: this.nextTapeNodeId++,
                    name: this.activeScope.name,
                    inputs: n,
                    outputs: [e],
                    gradient: function (t) {
                        var n = {};
                        return r(t).forEach(function (t, e) {
                            n[e] = function () {
                                return t
                            }
                        }), n
                    }
                };
                this.activeTape.push(o)
            }, t.prototype.keep = function (t) {
                if (1 === this.scopeStack.length && this.safeMode) throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {...}) to avoid memory leaks.");
                return t.kept = !0, t
            }, t.prototype.startTape = function () {
                0 === this.gradientDepth && (this.activeTape = []), this.gradientDepth++
            }, t.prototype.endTape = function () {
                this.gradientDepth--
            }, t.prototype.startScope = function (t) {
                var e = {
                    track: [],
                    name: "unnamed scope",
                    id: this.nextScopeId++
                };
                t && (e.name = t), this.scopeStack.push(e), this.activeScope = e
            }, t.prototype.endScope = function (t) {
                for (var e = this, n = Dt(t), r = new Set(n.map(function (t) {
                        return t.id
                    })), o = 0; o < this.activeScope.track.length; o++) {
                    var i = this.activeScope.track[o];
                    i.kept || r.has(i.id) || i.dispose()
                }
                var a = this.scopeStack.pop();
                this.activeScope = 0 === this.scopeStack.length ? null : this.scopeStack[this.scopeStack.length - 1], n.forEach(function (t) {
                    t.kept || t.scopeId !== a.id || e.track(t)
                })
            }, t.prototype.gradients = function (t, o, i, e) {
                var a = this;
                if (void 0 === e && (e = !1), D(0 < o.length, function () {
                        return "gradients() received an empty list of xs."
                    }), null != i && "float32" !== i.dtype) throw new Error("dy must have 'float32' dtype, but has '" + i.dtype + "'");
                var s = this.scopedRun(function () {
                    return a.startTape()
                }, function () {
                    return a.endTape()
                }, function () {
                    return a.tidy("forward", t)
                });
                D(s instanceof dt, function () {
                    return "The result y returned by f() must be a tensor."
                });
                var u = function (t, e, n) {
                    for (var r = {}, o = {}, i = 0; i < e.length; i++) r[e[i].id] = !0;
                    for (i = 0; i < t.length; i++) {
                        var a = (d = t[i]).inputs;
                        for (var s in a) {
                            for (var u = a[s], c = !1, l = 0; l < e.length; l++)
                                if (r[u.id]) {
                                    d.outputs.forEach(function (t) {
                                        return r[t.id] = !0
                                    }), c = !0, o[d.id] = !0;
                                    break
                                } if (c) break
                        }
                    }
                    var h = {};
                    h[n.id] = !0;
                    var p = {};
                    for (i = t.length - 1; 0 <= i; i--)
                        for (a = (d = t[i]).inputs, l = 0; l < d.outputs.length; l++)
                            if (h[d.outputs[l].id]) {
                                for (var s in a) h[a[s].id] = !0, p[d.id] = !0;
                                break
                            } var f = [];
                    for (i = 0; i < t.length; i++) {
                        var d;
                        if (o[(d = t[i]).id] && p[d.id]) {
                            var v = {};
                            for (var s in d.inputs) {
                                var m = d.inputs[s];
                                r[m.id] && (v[s] = m)
                            }
                            var g = Object.assign({}, d);
                            g.inputs = v, g.outputs = d.outputs, f.push(g)
                        }
                    }
                    return f
                }(this.activeTape, o, s);
                if (!e && 0 === u.length && 0 < o.length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");
                return this.tidy("backward", function () {
                    var t, e, n = {};
                    n[s.id] = null == i ? (t = s.shape, e = Q(B(t), "float32"), dt.make(t, {
                            values: e
                        })) : i,
                        function (a, s, u) {
                            for (var t = function (t) {
                                    var o = s[t],
                                        r = [];
                                    if (o.outputs.forEach(function (t) {
                                            var e = a[t.id];
                                            if (null != e) r.push(e);
                                            else {
                                                var n = dt.make(t.shape, {
                                                    values: J(t.size, t.dtype)
                                                }, t.dtype);
                                                r.push(n)
                                            }
                                        }), null == o.gradient) throw new Error("Cannot compute gradient: gradient function not found for " + o.name + ".");
                                    var i = o.gradient(1 === o.outputs.length ? r[0] : r),
                                        e = function (t) {
                                            if (!(t in i)) throw new Error("Cannot backprop through input " + t + ". Available gradients found: " + Object.keys(i) + ".");
                                            var e = u(function () {
                                                return i[t]()
                                            });
                                            if ("float32" !== e.dtype) throw new Error("Error in gradient for op " + o.name + ". The gradient of input " + t + " must have 'float32' dtype, but has '" + e.dtype + "'");
                                            var n = o.inputs[t];
                                            if (!E(e.shape, n.shape)) throw new Error("Error in gradient for op " + o.name + ". The gradient of input '" + t + "' has shape '" + e.shape + "', which does not match the shape of the input '" + n.shape + "'");
                                            if (null == a[n.id]) a[n.id] = e;
                                            else {
                                                var r = a[n.id];
                                                a[n.id] = r.add(e), r.dispose()
                                            }
                                        };
                                    for (var n in o.inputs) e(n)
                                }, e = s.length - 1; 0 <= e; e--) t(e)
                        }(n, u, function (t) {
                            return a.tidy(t)
                        });
                    var r = o.map(function (t) {
                        return n[t.id]
                    });
                    return 0 === a.gradientDepth && (a.activeTape.forEach(function (t) {
                        for (var e in t.saved) t.saved[e].dispose()
                    }), a.activeTape = null), {
                        value: s,
                        grads: r
                    }
                })
            }, t.prototype.customGrad = function (r) {
                var e = this;
                return D(j(r), function () {
                        return "The f passed in customGrad(f) must be a function."
                    }),
                    function () {
                        for (var i, a = [], t = 0; t < arguments.length; t++) a[t] = arguments[t];
                        D(a.every(function (t) {
                            return t instanceof dt
                        }), function () {
                            return "The args passed in customGrad(f)(x1, x2,...) must all be tensors"
                        });
                        var n = {};
                        return a.forEach(function (t, e) {
                            n[e] = t
                        }), e.runKernel(function (t, e) {
                            return D((i = r.apply(void 0, a.concat([e]))).value instanceof dt, function () {
                                return "The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"
                            }), D(j(i.gradFunc), function () {
                                return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."
                            }), i.value
                        }, n, function (t, e) {
                            var n = i.gradFunc(t, e),
                                r = Array.isArray(n) ? n : [n];
                            D(r.length === a.length, function () {
                                return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."
                            }), D(r.every(function (t) {
                                return t instanceof dt
                            }), function () {
                                return "The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."
                            });
                            var o = {};
                            return r.forEach(function (t, e) {
                                o[e] = function () {
                                    return t
                                }
                            }), o
                        })
                    }
            }, t.prototype.write = function (t, e) {
                var n = this.tensorInfo.get(t);
                if ("string" === n.dtype) {
                    var r = G(e);
                    this.numBytes += r - n.bytes, n.bytes = r
                }
                this.backend !== n.backend && (n.backend.disposeData(t), n.backend = this.backend, this.backend.register(t, n.shape, n.dtype)), this.backend.write(t, e)
            }, t.prototype.readSync = function (t) {
                return this.tensorInfo.get(t).backend.readSync(t)
            }, t.prototype.read = function (t) {
                return this.tensorInfo.get(t).backend.read(t)
            }, t.prototype.fromPixels = function (t, e) {
                return this.backend.fromPixels(t, e)
            }, t.prototype.time = function (r) {
                return m(this, void 0, void 0, function () {
                    var e, n;
                    return R(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = Z(), [4, this.backend.time(r)];
                            case 1:
                                return (n = t.sent()).wallMs = Z() - e, [2, n]
                        }
                    })
                })
            }, t.prototype.track = function (t) {
                if (1 === this.scopeStack.length && this.safeMode) throw new Error("Safe mode is ON. Enclose all tensor operations inside tf.tidy(): tf.tidy(() => {op();...}); to avoid memory leaks.");
                return null != this.activeScope && (t.scopeId = this.activeScope.id, this.activeScope.track.push(t)), t
            }, t.nextTensorId = 0, t.nextVariableId = 0, t
        }();
    (Ot = Mt || (Mt = {}))[Ot.NUMBER = 0] = "NUMBER", Ot[Ot.BOOLEAN = 1] = "BOOLEAN", Ot[Ot.STRING = 2] = "STRING";
    var Lt, Bt, Wt = [{
        name: "DEBUG",
        type: Mt.BOOLEAN
    }, {
        name: "IS_BROWSER",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_LAZILY_UNPACK",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_CPU_FORWARD",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_BATCHNORMALIZATION",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_CLIP",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_DEPTHWISECONV",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_BINARY_OPERATIONS",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_ARRAY_OPERATIONS",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_IMAGE_OPERATIONS",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_PACK_REDUCE",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_CONV_IM2COL",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_MAX_TEXTURE_SIZE",
        type: Mt.NUMBER
    }, {
        name: "WEBGL_NUM_MB_BEFORE_PAGING",
        type: Mt.NUMBER
    }, {
        name: "WEBGL_MAX_TEXTURES_IN_SHADER",
        type: Mt.NUMBER
    }, {
        name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",
        type: Mt.NUMBER
    }, {
        name: "WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_VERSION",
        type: Mt.NUMBER
    }, {
        name: "WEBGL_RENDER_FLOAT32_ENABLED",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_DOWNLOAD_FLOAT_ENABLED",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_FENCE_API_ENABLED",
        type: Mt.BOOLEAN
    }, {
        name: "WEBGL_SIZE_UPLOAD_UNIFORM",
        type: Mt.NUMBER
    }, {
        name: "BACKEND",
        type: Mt.STRING
    }, {
        name: "EPSILON",
        type: Mt.NUMBER
    }, {
        name: "PROD",
        type: Mt.BOOLEAN
    }, {
        name: "TENSORLIKE_CHECK_SHAPE_CONSISTENCY",
        type: Mt.BOOLEAN
    }, {
        name: "DEPRECATION_WARNINGS_ENABLED",
        type: Mt.BOOLEAN
    }];

    function zt(t) {
        try {
            if (null != l(t)) return !0
        } catch (t) {
            return !1
        }
        return !1
    }
    var Ut = "tfjsflags";

    function Gt() {
        var e = {};
        if ("undefined" == typeof window || void 0 === window.location || void 0 === window.location.search) return e;
        var t, a, n = (t = window.location.search, a = {}, t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return r = a, o = e[0], i = e[1], r[decodeURIComponent(o)] = decodeURIComponent(i || ""), e.join("=");
            var r, o, i
        }), a);
        if (Ut in n) {
            var o = {};
            n[Ut].split(",").forEach(function (t) {
                var e = t.split(":"),
                    n = e[0],
                    r = e[1];
                o[n] = r
            }), Wt.forEach(function (t) {
                t.name in o && (console.log("Setting feature override from URL " + t.name + ": " + o[t.name]), t.type === Mt.NUMBER ? e[t.name] = +o[t.name] : t.type === Mt.BOOLEAN ? e[t.name] = "true" === o[t.name] : t.type === Mt.STRING ? e[t.name] = o[t.name] : console.warn("Unknown URL param: " + t.name + "."))
            })
        }
        return e
    }

    function Vt(t, e) {
        return null != t.getExtension(e)
    }

    function Ht(t, e) {
        var n = t.createFramebuffer(),
            r = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, r);
        var o = 2 === e ? t.RGBA32F : t.RGBA;
        t.texImage2D(t.TEXTURE_2D, 0, o, 1, 1, 0, t.RGBA, t.FLOAT, null), t.bindFramebuffer(t.FRAMEBUFFER, n), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, r, 0);
        var i = t.checkFramebufferStatus(t.FRAMEBUFFER) === t.FRAMEBUFFER_COMPLETE;
        return t.bindTexture(t.TEXTURE_2D, null), t.bindFramebuffer(t.FRAMEBUFFER, null), t.deleteTexture(r), t.deleteFramebuffer(n), i
    }
    var qt, jt = function () {
        function t(t) {
            this.features = {}, this.registry = {}, this.registryFactory = {}, null != t && (this.features = t), this.get("DEBUG") && console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")
        }
        return t.setBackend = function (t, e) {
            if (void 0 === e && (e = !1), !(t in Zt.registry)) throw new Error("Backend name '" + t + "' not found in registry");
            Zt.engine.backend = Zt.findBackend(t), Zt.backendName = t
        }, t.getBackend = function () {
            return Zt.initEngine(), Zt.backendName
        }, t.disposeVariables = function () {
            Zt.engine.disposeVariables()
        }, t.memory = function () {
            return Zt.engine.memory()
        }, t.profile = function (t) {
            return Zt.engine.profile(t)
        }, t.tidy = function (t, e) {
            return Zt.engine.tidy(t, e)
        }, t.dispose = function (t) {
            Dt(t).forEach(function (t) {
                return t.dispose()
            })
        }, t.keep = function (t) {
            return Zt.engine.keep(t)
        }, t.time = function (t) {
            return Zt.engine.time(t)
        }, t.prototype.get = function (t) {
            return t in this.features || (this.features[t] = this.evaluateFeature(t)), this.features[t]
        }, t.prototype.getFeatures = function () {
            return this.features
        }, t.prototype.set = function (t, e) {
            this.features[t] = e
        }, t.prototype.getBestBackendName = function () {
            var e = this;
            if (0 === Object.keys(this.registry).length) throw new Error("No backend found in registry.");
            return Object.keys(this.registry).map(function (t) {
                return {
                    name: t,
                    entry: e.registry[t]
                }
            }).sort(function (t, e) {
                return e.entry.priority - t.entry.priority
            })[0].name
        }, t.prototype.evaluateFeature = function (t) {
            if ("DEBUG" === t) return !1;
            if ("IS_BROWSER" === t) return "undefined" != typeof window;
            if ("IS_NODE" === t) return "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.node;
            if ("IS_CHROME" === t) return "undefined" != typeof navigator && null != navigator && null != navigator.userAgent && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            if ("WEBGL_CPU_FORWARD" === t) return !0;
            if ("WEBGL_PACK" === t) return 0 !== this.get("WEBGL_VERSION");
            if ("WEBGL_PACK_BATCHNORMALIZATION" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_CLIP" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_DEPTHWISECONV" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_BINARY_OPERATIONS" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_ARRAY_OPERATIONS" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_IMAGE_OPERATIONS" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_PACK_REDUCE" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_LAZILY_UNPACK" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_CONV_IM2COL" === t) return this.get("WEBGL_PACK");
            if ("WEBGL_NUM_MB_BEFORE_PAGING" === t) return this.get("PROD") || !this.get("IS_BROWSER") ? Number.POSITIVE_INFINITY : window.screen.height * window.screen.width * window.devicePixelRatio * 600 / 1024;
            if ("WEBGL_MAX_TEXTURE_SIZE" === t) return function (t) {
                if (null == Lt) {
                    var e = l(t);
                    Lt = e.getParameter(e.MAX_TEXTURE_SIZE)
                }
                return Lt
            }(this.get("WEBGL_VERSION"));
            if ("WEBGL_MAX_TEXTURES_IN_SHADER" === t) return function (t) {
                if (null == Bt) {
                    var e = l(t);
                    Bt = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
                }
                return Math.min(16, Bt)
            }(this.get("WEBGL_VERSION"));
            if ("IS_TEST" === t) return !1;
            if ("BACKEND" === t) return this.getBestBackendName();
            if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION" === t) {
                var e = this.get("WEBGL_VERSION");
                return 0 === e ? 0 : function (t) {
                    if (0 === t) return 0;
                    var e = l(t);
                    return Vt(e, "EXT_disjoint_timer_query_webgl2") && 2 === t ? 2 : Vt(e, "EXT_disjoint_timer_query") ? 1 : 0
                }(e)
            }
            if ("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE" === t) return 0 < this.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") && (n = navigator.userAgent || navigator.vendor || window.opera, !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))));
            var n, r;
            if ("HAS_WEBGL" === t) return 0 < this.get("WEBGL_VERSION");
            if ("WEBGL_VERSION" === t) return zt(2) ? 2 : zt(1) ? 1 : 0;
            if ("WEBGL_RENDER_FLOAT32_ENABLED" === t) return function (t) {
                if (0 === t) return !1;
                var e = l(t);
                if (1 === t) {
                    if (!Vt(e, "OES_texture_float")) return !1
                } else if (!Vt(e, "EXT_color_buffer_float")) return !1;
                return Ht(e, t)
            }(this.get("WEBGL_VERSION"));
            if ("WEBGL_DOWNLOAD_FLOAT_ENABLED" === t) return function (t) {
                if (0 === t) return !1;
                var e = l(t);
                if (1 === t) {
                    if (!Vt(e, "OES_texture_float")) return !1;
                    if (!Vt(e, "WEBGL_color_buffer_float")) return !1
                } else if (!Vt(e, "EXT_color_buffer_float")) return !1;
                return Ht(e, t)
            }(this.get("WEBGL_VERSION"));
            if ("WEBGL_FENCE_API_ENABLED" === t) return 2 === (r = this.get("WEBGL_VERSION")) && null != l(r).fenceSync;
            if ("WEBGL_SIZE_UPLOAD_UNIFORM" === t) return this.get("WEBGL_RENDER_FLOAT32_ENABLED") ? 4 : 0;
            if ("TEST_EPSILON" === t) return 32 === this.backend.floatPrecision() ? .001 : .1;
            if ("EPSILON" === t) return 32 === this.backend.floatPrecision() ? 1e-7 : 1e-4;
            if ("PROD" === t) return !1;
            if ("TENSORLIKE_CHECK_SHAPE_CONSISTENCY" === t) return !this.get("PROD");
            if ("DEPRECATION_WARNINGS_ENABLED" === t) return !0;
            throw new Error("Unknown feature " + t + ".")
        }, t.prototype.setFeatures = function (t) {
            this.features = Object.assign({}, t)
        }, t.prototype.reset = function () {
            this.features = Gt(), null != this.globalEngine && (this.globalEngine = null)
        }, Object.defineProperty(t.prototype, "backend", {
            get: function () {
                return this.engine.backend
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.findBackend = function (t) {
            return t in this.registry ? this.registry[t].backend : null
        }, t.prototype.findBackendFactory = function (t) {
            return t in this.registryFactory ? this.registryFactory[t] : null
        }, t.prototype.registerBackend = function (t, e, n) {
            var r = this;
            if (void 0 === n && (n = 1), t in this.registry) return console.warn(t + " backend was already registered. Reusing existing backend"), !1;
            try {
                var o = e();
                return o.setDataMover({
                    moveData: function (t) {
                        return r.engine.moveData(t)
                    }
                }), this.registry[t] = {
                    backend: o,
                    priority: n
                }, this.registryFactory[t] = e, !0
            } catch (e) {
                return console.warn("Registration of backend " + t + " failed"), console.warn(e.stack || e.message), !1
            }
        }, t.prototype.removeBackend = function (t) {
            if (!(t in this.registry)) throw new Error(t + " backend not found in registry");
            this.registry[t].backend.dispose(), delete this.registry[t]
        }, Object.defineProperty(t.prototype, "engine", {
            get: function () {
                return this.initEngine(), this.globalEngine
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.initEngine = function () {
            var t = this;
            if (null == this.globalEngine) {
                this.backendName = this.get("BACKEND");
                var e = this.findBackend(this.backendName);
                this.globalEngine = new Ft(e, !1, function () {
                    return t.get("DEBUG")
                })
            }
        }, Object.defineProperty(t.prototype, "global", {
            get: function () {
                return $t()
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();

    function $t() {
        if (null == qt) {
            var t = void 0;
            if ("undefined" != typeof window) t = window;
            else if ("undefined" != typeof global) t = global;
            else {
                if ("undefined" == typeof process) throw new Error("Could not find a global object");
                t = process
            }
            qt = t
        }
        return qt
    }

    function Kt() {
        Zt.set("PROD", !0)
    }

    function Xt() {
        Zt.set("DEBUG", !0)
    }

    function Yt() {
        Zt.set("DEPRECATION_WARNINGS_ENABLED", !1), console.warn("TensorFlow.js deprecation warnings have been disabled.")
    }

    function Qt(t) {
        Zt.get("DEPRECATION_WARNINGS_ENABLED") && console.warn(t + " You can disable deprecation warnings with tf.disableDeprecationWarnings().")
    }
    ft = Qt;
    var Jt, Zt = (null == (Jt = $t()).ENV && (Jt.ENV = new jt(Gt())), ht = function () {
            return Jt.ENV.engine
        }, Jt.ENV),
        te = Object.freeze({
            EPSILON_FLOAT16: 1e-4,
            EPSILON_FLOAT32: 1e-7,
            Environment: jt,
            enableProdMode: Kt,
            enableDebugMode: Xt,
            disableDeprecationWarnings: Yt,
            deprecationWarn: Qt,
            ENV: Zt
        });

    function ee(t) {
        var e = t;
        if (z(t)) return [t.length];
        if (!Array.isArray(t)) return [];
        for (var n = []; Array.isArray(e) || z(e);) n.push(e.length), e = e[0];
        return Array.isArray(t) && Zt.get("TENSORLIKE_CHECK_SHAPE_CONSISTENCY") && function t(e, n, r) {
            if (r = r || [], Array.isArray(e) || z(e)) {
                D(0 < n.length, function () {
                    return "Element arr[" + r.join("][") + "] should be a primitive, but is an array of " + e.length + " elements"
                }), D(e.length === n[0], function () {
                    return "Element arr[" + r.join("][") + "] should have " + n[0] + " elements, but has " + e.length + " elements"
                });
                for (var o = n.slice(1), i = 0; i < e.length; ++i) t(e[i], o, r.concat(i))
            } else D(0 === n.length, function () {
                return "Element arr[" + r.join("][") + "] is a primitive, but should be an array/TypedArray of " + n[0] + " elements"
            })
        }(t, n, []), n
    }

    function ne(t, e, n, r) {
        if (null != t && ("numeric" !== t && t !== e || "numeric" === t && "string" === e)) throw new Error("Argument '" + n + "' passed to '" + r + "' must be " + t + " tensor, but got " + e + " tensor")
    }

    function re(t, e, n, r) {
        if (void 0 === r && (r = "numeric"), t instanceof dt) return ne(r, t.dtype, e, n), t;
        var o = q(t);
        if ("string" !== o && 0 <= ["bool", "int32", "float32"].indexOf(r) && (o = r), ne(r, o, e, n), null == t || !z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) {
            var i = null == t ? "null" : t.constructor.name;
            throw new Error("Argument '" + e + "' passed to '" + n + "' must be a Tensor or TensorLike, but got '" + i + "'")
        }
        var a = ee(t);
        z(t) || Array.isArray(t) || (t = [t]);
        var s = "string" !== o ? X(t, o, Zt.get("DEBUG")) : x(t);
        return dt.make(a, {
            values: s
        }, o)
    }

    function oe(t, n, r, e) {
        if (void 0 === e && (e = "numeric"), !Array.isArray(t)) throw new Error("Argument " + n + " passed to " + r + " must be a `Tensor[]` or `TensorLike[]`");
        return t.map(function (t, e) {
            return re(t, n + "[" + e + "]", r)
        }, e)
    }

    function ie(t, e) {
        if (D(j(t), function () {
                return "The f passed in variableGrads(f) must be a function"
            }), D(null == e || Array.isArray(e) && e.every(function (t) {
                return t instanceof vt
            }), function () {
                return "The varList passed in variableGrads(f, varList) must be an array of variables"
            }), null == e)
            for (var n in e = [], Zt.engine.registeredVariables) e.push(Zt.engine.registeredVariables[n]);
        var r = e.length;
        D(0 < (e = e.filter(function (t) {
            return t.trainable
        })).length, function () {
            return "variableGrads() expects at least one of the input variables to be trainable, but none of the " + r + " variables is trainable."
        });
        var o = Zt.engine.gradients(t, e, null, !0),
            i = o.value,
            a = o.grads;
        D(a.some(function (t) {
            return null != t
        }), function () {
            return "Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."
        }), D(0 === i.rank, function () {
            return "The f passed in variableGrads(f) must return a scalar, but it returned a rank-" + i.rank + " tensor"
        });
        var s = {};
        return e.forEach(function (t, e) {
            null != a[e] && (s[t.name] = a[e])
        }), {
            value: i,
            grads: s
        }
    }

    function ae(t) {
        return Zt.engine.customGrad(t)
    }

    function se(t) {
        if (0 < t.filter(function (t) {
                return null == t
            }).length) throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")
    }
    var ue = jt.tidy,
        ce = jt.keep,
        le = jt.dispose,
        he = jt.time,
        pe = jt.profile;

    function fe() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        Zt.get("IS_TEST") || console.warn.apply(console, t)
    }

    function de(t, e, n, r) {
        void 0 === r && (r = !0);
        var o = [];
        if (r)(o = o.concat(e.slice(0))).push(t[0] / n), o = o.concat(t.slice(1));
        else {
            o = o.concat(t[0]);
            for (var i = e.length, a = 0; a < i; ++a) o = o.concat([t[a + 1] / e[a], e[a]]);
            o = o.concat(t.slice(i + 1))
        }
        return o
    }

    function ve(t, e, n) {
        void 0 === n && (n = !0);
        var r = [];
        if (n) {
            r.push(e);
            for (var o = e + 1; o < t; ++o) o <= 2 * e ? (r.push(o), r.push(o - (e + 1))) : r.push(o)
        } else {
            var i = [],
                a = [];
            for (o = 1; o < t; ++o) 2 * e + 1 <= o || o % 2 == 1 ? a.push(o) : i.push(o);
            r.push.apply(r, i), r.push(0), r.push.apply(r, a)
        }
        return r
    }

    function me(t, e, n, r) {
        void 0 === r && (r = !0);
        var o = [];
        r ? o.push(t[0] / n) : o.push(t[0] * n);
        for (var i = 1; i < t.length; ++i) i <= e.length ? r ? o.push(e[i - 1] * t[i]) : o.push(t[i] / e[i - 1]) : o.push(t[i]);
        return o
    }

    function ge(t, e) {
        for (var n = [0], r = 0; r < e; ++r) n.push(t[r][0]);
        return n
    }

    function ye(t, e, n) {
        for (var r = t.slice(0, 1), o = 0; o < n; ++o) r.push(t[o + 1] - e[o][0] - e[o][1]);
        return r
    }

    function xe(t, e) {
        for (var n = 0; n < t.length; ++n)
            if (t[t.length - n - 1] !== e - 1 - n) return !1;
        return !0
    }

    function we(e, t) {
        for (var n = [], r = e.length, o = 0; o < r; o++) - 1 === t.indexOf(o) && n.push(e[o]);
        return [n, t.map(function (t) {
            return e[t]
        })]
    }

    function be(t, e) {
        return function (t, e, n) {
            for (var r = t.length + e.length, o = [], i = 0, a = 0, s = 0; s < r; s++) - 1 === n.indexOf(s) ? o.push(t[i++]) : o.push(e[a++]);
            return o
        }(t, e.map(function (t) {
            return 1
        }), e)
    }

    function Ee(t, e, n) {
        D(xe(e, n), function () {
            return t + " supports only inner-most axes for now. Got axes " + e + " and rank-" + n + " input."
        })
    }

    function Ce(t, e) {
        if (xe(t, e)) return null;
        for (var n = [], r = 0; r < e; ++r) - 1 === t.indexOf(r) && n.push(r);
        return t.forEach(function (t) {
            return n.push(t)
        }), n
    }

    function _e(t) {
        return t.map(function (t, e) {
            return [e, t]
        }).sort(function (t, e) {
            return t[1] - e[1]
        }).map(function (t) {
            return t[0]
        })
    }

    function Se(t, e) {
        for (var n = [], r = e - t; r < e; ++r) n.push(r);
        return n
    }

    function Re(t, e) {
        for (var n = t[0].slice(), r = 1; r < t.length; r++) n[e] += t[r][e];
        return n
    }

    function Ne(t, e) {
        if (t.rank < 1) throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was " + t.rank + ".");
        if (e.rank < 1) throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if ("int32" !== e.dtype) throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was " + e.dtype + ".");
        if (e.shape[e.rank - 1] > t.rank) throw new Error("index innermost dimension length must be <= tensor rank; saw: " + e.shape[e.rank - 1] + " vs. " + t.rank);
        if (0 === t.size) throw new Error("Requested more than 0 entries, but input is empty. Input shape: " + t.shape + ".");
        for (var n = e.shape, r = n[n.length - 1], o = 1, i = 0; i < n.length - 1; ++i) o *= n[i];
        var a = t.shape,
            s = n.slice();
        s.pop();
        var u = 1;
        for (i = r; i < t.rank; ++i) u *= a[i], s.push(a[i]);
        var c = K(t.shape).map(function (t) {
            return t / u
        }).concat([1]).slice(0, r);
        return [s, o, u, c]
    }

    function ke(t) {
        return t <= 30 ? t : $(t, Math.floor(Math.sqrt(t)))
    }

    function Ie(t, e, n) {
        if (e.rank < 1) throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was " + e.rank + ".");
        if (t.rank < 1) throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was " + t.rank + ".");
        if ("int32" !== e.dtype) throw new Error("The dtype of 'indices' should be int32, but got dtype: " + e.dtype);
        if (n.length < 1) throw new Error("Output rank must be greater or equal to 1, but got shape: " + n);
        if (0 === n.length) {
            if (0 === e.size) throw new Error("Indices specified for empty output. indices shape: " + e.shape);
            if (0 === t.size) throw new Error("Updates specified for empty output. updates shape: " + t.shape)
        }! function (t, e, n) {
            var r = 1 < e.rank ? e.shape[e.rank - 1] : 1,
                o = 1 < e.rank ? e.rank - 1 : 1,
                i = "Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: " + n.shape + ", indices.shape: " + e.shape + ", shape: " + t + ", sliceDim: " + r + ", and batchDim: " + o + ".";
            if (n.rank < o) throw new Error(i + " update.rank < " + o + ". ");
            if (t.length < r + (n.rank - o)) throw new Error(i + " Output shape length < " + (r + (n.rank - o)));
            if (n.rank !== o + t.length - r) throw new Error(i + " update.rank != " + (o + t.length - r));
            for (var a = 0; a < o; ++a)
                if (n.shape[a] !== e.shape[a]) throw new Error(i + " updates.shape[" + a + "] (" + n.shape[a] + ") != indices.shape[" + a + "] (" + e.shape[a] + ").");
            for (a = 0; a < n.rank - o; ++a)
                if (n.shape[a + o] !== t[a + r]) throw new Error(i + " updates.shape[" + (a + o) + "] (" + n.shape[a + o] + ") != shape[" + (a + o) + "] (" + t[a + o] + ")")
        }(n, e, t)
    }

    function Te(t, e, n) {
        for (var r = 1 < e.rank ? e.shape[e.rank - 1] : 1, o = n.length, i = 1, a = r; a < o; ++a) i *= n[a];
        var s = r < 1 ? 1 : r;
        return {
            sliceRank: r,
            numUpdates: e.size / s,
            sliceSize: i,
            strides: K(n.slice(0, r)).concat([1]),
            outputSize: B(n)
        }
    }

    function Ae(t, e, n, i, r, o, a, s, u) {
        if (void 0 === r && (r = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === u && (u = 0), 0 !== a) throw new Error("ellipsis mask is not yet supported");
        if (0 !== s) throw new Error("new axis mask is not yet supported");
        for (var c = [], l = [], h = [], p = 0; p < t.length; p++) c[p] = De(r, e, i, t, p), l[p] = Me(o, n, i, t, p), u & 1 << p && (l[p] = c[p] + 1, h.push(p));
        var f = new Array(t.length).fill(0);
        return f = f.map(function (t, e) {
            for (var n = 0, r = i[e] || 1, o = c[e]; !(0 < r ? o >= l[e] : o <= l[e]); o += r) n += 1;
            return n
        }), [c, f, h]
    }

    function De(t, e, n, r, o) {
        var i = e[o],
            a = n[o] || 1;
        (t & 1 << o || null == i) && (i = 0 < a ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s), f(0, i, s - 1)
    }

    function Me(t, e, n, r, o) {
        var i = e[o],
            a = n[o] || 1;
        (t & 1 << o || null == i) && (i = 0 < a ? Number.MAX_SAFE_INTEGER : Number.MIN_SAFE_INTEGER);
        var s = r[o];
        return i < 0 && (i += s), 0 < a ? f(0, i, s) : f(-1, i, s - 1)
    }

    function Oe(t, e, n) {
        for (var r = n.length, o = 0; o < n.length; o++)
            if (1 < n[o]) {
                r = o;
                break
            } for (o = r + 1; o < n.length; o++)
            if (0 < e[o] || n[o] !== t[o]) return !1;
        return !0
    }

    function Pe(t, e) {
        for (var n = 0 < t.length ? t[t.length - 1] : 1, r = 0; r < t.length - 1; r++) n += t[r] * e[r];
        return n
    }

    function Fe(t) {
        var e = Object.keys(t);
        if (1 !== e.length) throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with " + e.length + " keys.");
        var r = e[0],
            o = t[r];
        r.endsWith("_") && (r = r.substring(0, r.length - 1));
        var n = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            Zt.engine.startScope(r);
            try {
                var n = o.apply(void 0, t);
                return n instanceof Promise && console.error("Cannot return a Promise inside of tidy."), Zt.engine.endScope(n), n
            } catch (t) {
                throw Zt.engine.endScope(null), t
            }
        };
        return Object.defineProperty(n, "name", {
            value: r,
            configurable: !0
        }), n
    }
    var Le = Fe({
            softmax_: function (t, o) {
                void 0 === o && (o = -1);
                var e = re(t, "logits", "softmax");
                if (-1 === o && (o = e.rank - 1), o !== e.rank - 1) throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and dim was " + o);
                return ae(function (t, e) {
                    var n = t.logSumExp([o], !0),
                        r = t.toFloat().sub(n).exp();
                    return e([r]), {
                        value: r,
                        gradFunc: function (t, e) {
                            var n = e[0],
                                r = t.mul(n);
                            return r.sub(r.sum([o], !0).mul(n))
                        }
                    }
                })(e)
            }
        }),
        Be = Fe({
            logSoftmax_: function (t, i) {
                void 0 === i && (i = -1);
                var e = re(t, "logits", "logSoftmax");
                if (-1 === i && (i = e.rank - 1), i !== e.rank - 1) throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank " + e.rank + " and axis was " + i);
                return ae(function (t, e) {
                    var n = t.max(i, !0),
                        r = t.sub(n),
                        o = r.toFloat().sub(r.exp().sum(i, !0).log());
                    return e([o]), {
                        value: o,
                        gradFunc: function (t, e) {
                            var n = e[0].exp();
                            return t.sub(t.sum(i, !0).mul(n))
                        }
                    }
                })(e)
            }
        });
    var We = Fe({
            complex_: function (t, e) {
                var n = re(t, "real", "complex"),
                    r = re(e, "imag", "complex");
                return g(n.shape, r.shape, "real and imag shapes, " + n.shape + " and " + r.shape + ", must match in call to tf.complex()."), Zt.engine.runKernel(function (t) {
                    return t.complex(n, r)
                }, {
                    $real: n,
                    $imag: r
                })
            }
        }),
        ze = Fe({
            real_: function (t) {
                var e = re(t, "input", "real");
                return Zt.engine.runKernel(function (t) {
                    return t.real(e)
                }, {
                    $input: e
                })
            }
        }),
        Ue = Fe({
            imag_: function (t) {
                var e = re(t, "input", "imag");
                return Zt.engine.runKernel(function (t) {
                    return t.imag(e)
                }, {
                    $input: e
                })
            }
        });

    function Ge(t, e, n) {
        if (null == n && (n = q(t)), "complex64" === n) throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");
        if (!z(t) && !Array.isArray(t) && "number" != typeof t && "boolean" != typeof t && "string" != typeof t) throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");
        var r = ee(t);
        if (null != e) {
            tt(e);
            var o = B(e),
                i = B(r);
            D(o === i, function () {
                return "Based on the provided shape, [" + e + "], the tensor should have " + o + " values but has " + i
            });
            for (var a = 0; a < r.length; ++a) {
                var s = r[a],
                    u = a !== r.length - 1 || s !== B(e.slice(a));
                D(r[a] === e[a] || !u, function () {
                    return "Error creating a new Tensor. Inferred shape (" + r + ") does not match the provided shape (" + e + "). "
                })
            }
        }
        return z(t) || Array.isArray(t) || (t = [t]), e = e || r, t = "string" !== n ? X(t, n, Zt.get("DEBUG")) : x(t), dt.make(e, {
            values: t
        }, n)
    }

    function Ve(t, e) {
        if ((z(t) || Array.isArray(t)) && "complex64" !== e) throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");
        return Ge(t, [], e)
    }

    function He(t, e) {
        y(t);
        var n = ee(t);
        if (1 !== n.length) throw new Error("tensor1d() requires values to be a flat/TypedArray");
        return Ge(t, n, e)
    }

    function qe(t, e, n) {
        if (y(t), null != e && 2 !== e.length) throw new Error("tensor2d() requires shape to have two numbers");
        var r = ee(t);
        if (2 !== r.length && 1 !== r.length) throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");
        return Ge(t, e = e || r, n)
    }

    function je(t, e, n) {
        if (y(t), null != e && 3 !== e.length) throw new Error("tensor3d() requires shape to have three numbers");
        var r = ee(t);
        if (3 !== r.length && 1 !== r.length) throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");
        return Ge(t, e = e || r, n)
    }

    function $e(t, e, n) {
        if (y(t), null != e && 4 !== e.length) throw new Error("tensor4d() requires shape to have four numbers");
        var r = ee(t);
        if (4 !== r.length && 1 !== r.length) throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
        return Ge(t, e = e || r, n)
    }

    function Ke(t, e, n) {
        if (y(t), null != e && 5 !== e.length) throw new Error("tensor5d() requires shape to have five numbers");
        var r = ee(t);
        if (5 !== r.length && 1 !== r.length) throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
        return Ge(t, e = e || r, n)
    }

    function Xe(t, e, n) {
        if (y(t), null != e && 6 !== e.length) throw new Error("tensor6d() requires shape to have six numbers");
        var r = ee(t);
        if (6 !== r.length && 1 !== r.length) throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
        if (1 === r.length && null == e) throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
        return Ge(t, e = e || r, n)
    }

    function Ye(t, e) {
        if (void 0 === e && (e = "float32"), "complex64" === e) {
            var n = Ye(t, "float32"),
                r = Ye(t, "float32");
            return We(n, r)
        }
        var o = Q(B(t), e);
        return dt.make(t, {
            values: o
        }, e)
    }

    function Qe(t, e) {
        if (void 0 === e && (e = "float32"), "complex64" === e) {
            var n = Qe(t, "float32"),
                r = Qe(t, "float32");
            return We(n, r)
        }
        var o = J(B(t), e);
        return dt.make(t, {
            values: o
        }, e)
    }

    function Je(e, n, r) {
        return Zt.engine.runKernel(function (t) {
            return t.fill(e, n, r)
        }, {})
    }

    function Ze(t, e, n) {
        if (0 === n) throw new Error("Cannot request zero samples");
        var r = (e - t) / (n - 1),
            o = J(n, "float32");
        o[0] = t;
        for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + r;
        return He(o, "float32")
    }

    function tn(t, e, n, r) {
        if (void 0 === n && (n = 1), void 0 === r && (r = "float32"), 0 === n) throw new Error("Cannot have a step of zero");
        if (t === e || t < e && n < 0 || e < t && 1 < n) return Qe([0], r);
        var o = J(Math.abs(Math.ceil((e - t) / n)), r);
        e < t && 1 === n && (n = -1), o[0] = t;
        for (var i = 1; i < o.length; i++) o[i] = o[i - 1] + n;
        return He(o, r)
    }
    var en = Fe({
            onesLike_: function (t) {
                var e = re(t, "x", "onesLike");
                if ("complex64" !== e.dtype) return Zt.engine.runKernel(function (t) {
                    return t.onesLike(e)
                }, {
                    $x: e
                }, null);
                var n = en(ze(e)),
                    r = nn(Ue(e));
                return We(n, r)
            }
        }),
        nn = Fe({
            zerosLike_: function (t) {
                var e = re(t, "x", "zerosLike");
                return Zt.engine.runKernel(function (t) {
                    return t.zerosLike(e)
                }, {
                    $x: e
                }, null)
            }
        }),
        rn = function () {
            function t(t) {
                this.dataMover = t, this.data = new WeakMap
            }
            return t.prototype.get = function (t) {
                return this.data.has(t) || this.dataMover.moveData(t), this.data.get(t)
            }, t.prototype.set = function (t, e) {
                this.data.set(t, e)
            }, t.prototype.has = function (t) {
                return this.data.has(t)
            }, t.prototype.delete = function (t) {
                return this.data.delete(t)
            }, t
        }(),
        on = function () {
            function t() {}
            return t.prototype.time = function (t) {
                throw new Error("Not yet implemented.")
            }, t.prototype.read = function (t) {
                throw new Error("Not yet implemented.")
            }, t.prototype.readSync = function (t) {
                throw new Error("Not yet implemented.")
            }, t.prototype.disposeData = function (t) {
                throw new Error("Not yet implemented.")
            }, t.prototype.write = function (t, e) {
                throw new Error("Not yet implemented.")
            }, t.prototype.fromPixels = function (t, e) {
                throw new Error("Not yet implemented.")
            }, t.prototype.register = function (t, e, n) {
                throw new Error("Not yet implemented.")
            }, t.prototype.memory = function () {
                throw new Error("Not yet implemented.")
            }, t.prototype.floatPrecision = function () {
                throw new Error("Not yet implemented")
            }, t.prototype.batchMatMul = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.fusedBatchMatMul = function (t, e, n, r, o, i) {
                throw new Error("Not yet implemented")
            }, t.prototype.slice = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.stridedSlice = function (t, e, n, r, o, i, a, s, u) {
                throw new Error("Not yet implemented")
            }, t.prototype.unstack = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.reverse = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.concat = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.neg = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.add = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.addN = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.subtract = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.multiply = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.realDivide = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.floorDiv = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.sum = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.prod = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.unsortedSegmentSum = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.argMin = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.argMax = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.equal = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.notEqual = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.less = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.lessEqual = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.greater = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.greaterEqual = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.logicalNot = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.logicalAnd = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.logicalOr = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.where = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.select = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.topk = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.min = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.minimum = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.mod = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.max = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.maximum = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.all = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.any = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.squaredDifference = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.ceil = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.floor = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.round = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.sign = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.isNaN = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.isInf = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.isFinite = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.pow = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.exp = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.expm1 = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.log = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.log1p = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.sqrt = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.rsqrt = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.square = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.reciprocal = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.relu = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.prelu = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.elu = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.eluDer = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.selu = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.int = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.clip = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.abs = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.complexAbs = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.sigmoid = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.softplus = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.sin = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.cos = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.tan = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.asin = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.acos = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.atan = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.atan2 = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.sinh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.cosh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.tanh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.asinh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.acosh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.atanh = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.erf = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.step = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv2d = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv2dDerInput = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv2dDerFilter = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.depthwiseConv2D = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.depthwiseConv2DDerInput = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv3d = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv3dDerInput = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.conv3dDerFilter = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.maxPool = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.maxPoolBackprop = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.avgPool = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.avgPoolBackprop = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.reshape = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.cast = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.tile = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.pad = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.transpose = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.gather = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.gatherND = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.scatterND = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.batchToSpaceND = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.spaceToBatchND = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.resizeBilinear = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.resizeBilinearBackprop = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.resizeNearestNeighbor = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.batchNormalization = function (t, e, n, r, o, i) {
                throw new Error("Not yet implemented")
            }, t.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
                throw new Error("Not yet implemented")
            }, t.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
                throw new Error("Not yet implemented")
            }, t.prototype.multinomial = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.oneHot = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.cumsum = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.nonMaxSuppression = function (t, e, n, r, o) {
                throw new Error("Not yet implemented")
            }, t.prototype.fft = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.ifft = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.complex = function (t, e) {
                throw new Error("Not yet implemented")
            }, t.prototype.real = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.imag = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.cropAndResize = function (t, e, n, r, o, i) {
                throw new Error("Not yet implemented")
            }, t.prototype.depthToSpace = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.split = function (t, e, n) {
                throw new Error("Not yet implemented")
            }, t.prototype.sparseToDense = function (t, e, n, r) {
                throw new Error("Not yet implemented")
            }, t.prototype.fill = function (t, e, n) {
                throw new Error("Not yet implemented.")
            }, t.prototype.onesLike = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.zerosLike = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.setDataMover = function (t) {
                throw new Error("Not yet implemented")
            }, t.prototype.dispose = function () {
                throw new Error("Not yet implemented")
            }, t
        }();

    function an(t, e, n) {
        if ("complex64" === e) {
            if ("complex64" === t.dtype) return t.clone();
            var r = Qe(t.shape),
                o = t.toFloat(),
                i = n.complex(o, r);
            return r.dispose(), o.dispose(), i
        }
        if (!W(t.dtype, e)) return dt.make(t.shape, {
            dataId: t.dataId
        }, e);
        if ("complex64" === t.dtype) {
            var a = n.real(t);
            return i = a.cast(e), a.dispose(), i
        }
        if ("int32" === e) return n.int(t);
        if ("bool" !== e) throw new Error("Error in Cast: unknown dtype argument (" + e + ")");
        var s = Ve(0, t.dtype);
        return i = n.notEqual(t, s), s.dispose(), i
    }

    function sn(t, e) {
        return dt.make(e, {
            dataId: t.dataId
        }, t.dtype)
    }

    function un(t, e) {
        if (t.length !== e.length) throw new Error("Cannot merge real and imag arrays of different lengths. real:" + t.length + ", imag: " + e.length + ".");
        for (var n = new Float32Array(2 * t.length), r = 0; r < n.length; r += 2) n[r] = t[r / 2], n[r + 1] = e[r / 2];
        return n
    }

    function cn(t, e) {
        return {
            real: t[2 * e],
            imag: t[2 * e + 1]
        }
    }

    function ln(t, e, n, r, o) {
        for (var i = Array.from(e).map(function (t, e) {
                return {
                    score: t,
                    boxIndex: e
                }
            }).filter(function (t) {
                return t.score > o
            }).sort(function (t, e) {
                return e.score - t.score
            }), a = [], s = 0; s < i.length; s++) {
            var u = i[s],
                c = u.score,
                l = u.boxIndex;
            if (c < o) break;
            for (var h = !1, p = a.length - 1; 0 <= p; --p)
                if (hn(t, l, a[p]) >= r) {
                    h = !0;
                    break
                } if (!h && (a.push(l), a.length >= n)) break
        }
        return He(a, "int32")
    }

    function hn(t, e, n) {
        var r = t.subarray(4 * e, 4 * e + 4),
            o = t.subarray(4 * n, 4 * n + 4),
            i = Math.min(r[0], r[2]),
            a = Math.min(r[1], r[3]),
            s = Math.max(r[0], r[2]),
            u = Math.max(r[1], r[3]),
            c = Math.min(o[0], o[2]),
            l = Math.min(o[1], o[3]),
            h = Math.max(o[0], o[2]),
            p = Math.max(o[1], o[3]),
            f = (s - i) * (u - a),
            d = (h - c) * (p - l);
        if (f <= 0 || d <= 0) return 0;
        var v = Math.max(i, c),
            m = Math.max(a, l),
            g = Math.min(s, h),
            y = Math.min(u, p),
            x = Math.max(g - v, 0) * Math.max(y - m, 0);
        return x / (f + d - x)
    }

    function pn(n, t, r) {
        var o = new Array(n.rank).fill(0),
            i = n.shape.slice();
        return t.map(function (t) {
            i[r] = t;
            var e = n.slice(o, i);
            return o[r] += t, e
        })
    }

    function fn(t, e, n, r, o) {
        for (var i = e[e.length - 1], a = [t.length / i, i], s = a[0], u = a[1], c = A(n, s * r), l = A("int32", s * r), h = 0; h < s; h++) {
            for (var p = h * u, f = t.subarray(p, p + u), d = [], v = 0; v < f.length; v++) d.push({
                value: f[v],
                index: v
            });
            d.sort(function (t, e) {
                return e.value - t.value
            });
            var m = h * r,
                g = c.subarray(m, m + r),
                y = l.subarray(m, m + r);
            for (v = 0; v < r; v++) g[v] = d[v].value, y[v] = d[v].index
        }
        var x = e.slice();
        return x[x.length - 1] = r, [Ge(c, x, n), Ge(l, x, "int32")]
    }
    var dn = function (t, e, n) {
        this.variableNames = ["A"];
        var r = t.windowSize,
            o = t.batchSize,
            i = t.inSize,
            a = Math.ceil(i / r);
        n || this.variableNames.push("bestIndicesA"), this.outputShape = [o, a];
        var s = "max" === e ? ">" : "<",
            u = n ? "inOffset + i;" : "round(getBestIndicesA(batch, inOffset + i));";
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + r + ";\n\n        int bestIndex = inOffset;\n        float bestValue = getA(batch, bestIndex);\n\n        for (int i = 0; i < " + r + "; i++) {\n          int inIdx = " + u + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + s + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    "
    };

    function vn(e, t) {
        return ["x", "y", "z", "w", "u", "v"].slice(0, t).map(function (t) {
            return e + "." + t
        })
    }

    function mn(t, e) {
        return 1 === e ? [t] : vn(t, e)
    }

    function gn(t, e) {
        for (var n = t.length, r = [], o = 0; o < n; o++) {
            var i = n - 1 - o,
                a = t[i] || 1;
            1 < (e[e.length - 1 - o] || 1) && 1 === a && r.unshift(i)
        }
        return r
    }

    function yn(t, e) {
        for (var n = [], r = 0; r < e.length; r++) {
            var o = t[t.length - r - 1],
                i = e.length - r - 1,
                a = e[i];
            (null == o || 1 === o && 1 < a) && n.unshift(i)
        }
        return n
    }

    function xn(t, e) {
        for (var n = [], r = Math.max(t.length, e.length), o = 0; o < r; o++) {
            var i = t[t.length - o - 1];
            null == i && (i = 1);
            var a = e[e.length - o - 1];
            if (null == a && (a = 1), 1 === i) n.unshift(a);
            else if (1 === a) n.unshift(i);
            else {
                if (i !== a) throw Error("Operands could not be broadcast together with shapes " + t + " and " + e + ".");
                n.unshift(i)
            }
        }
        return n
    }

    function wn() {
        var t, e, n, r, o, i, a, s, u, c;
        return c = 2 === Zt.get("WEBGL_VERSION") ? (t = "#version 300 es", n = "out", r = e = "in", o = "texture", i = "outputColor", a = "out vec4 outputColor;", s = "\n      const float NAN = uintBitsToFloat(uint(0x7fc00000));\n    ", u = "\n      const float INFINITY = uintBitsToFloat(uint(0x7f800000));\n    ", "\n      #define round(value) newRound(value)\n      int newRound(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 newRound(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    ") : (e = "attribute", r = n = "varying", o = "texture2D", i = "gl_FragColor", a = t = "", s = "\n      uniform float NAN;\n\n      bool isnan(float val) {\n        return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;\n      }\n      bvec4 isnan(vec4 val) {\n        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));\n      }\n    ", u = "\n      uniform float INFINITY;\n\n      bool isinf(float val) {\n        return abs(val) == INFINITY;\n      }\n      bvec4 isinf(vec4 val) {\n        return equal(abs(val), vec4(INFINITY));\n      }\n    ", "\n      int round(float value) {\n        return int(floor(value + 0.5));\n      }\n\n      ivec4 round(vec4 value) {\n        return ivec4(floor(value + vec4(0.5)));\n      }\n    "), {
            version: t,
            attribute: e,
            varyingVs: n,
            varyingFs: r,
            texture2D: o,
            output: i,
            defineOutput: a,
            defineSpecialNaN: s,
            defineSpecialInf: u,
            defineRound: c
        }
    }

    function bn(n, t, r) {
        void 0 === r && (r = "index");
        var o = K(t);
        return o.map(function (t, e) {
            return "int " + n[e] + " = " + r + " / " + t + "; " + (e === o.length - 1 ? "int " + n[e + 1] + " = " + r + " - " + n[e] + " * " + t : "index -= " + n[e] + " * " + t) + ";"
        }).join("")
    }

    function En(t) {
        return 1 === t.length ? "" + t[0] : "vec" + t.length + "(" + t.join(",") + ")"
    }

    function Cn(t, e, n, r) {
        var o = [];
        t.forEach(function (t) {
            var e = B(t.shapeInfo.logicalShape);
            t.shapeInfo.isUniform ? o.push("uniform float " + t.name + (1 < e ? "[" + e + "]" : "") + ";") : (o.push("uniform sampler2D " + t.name + ";"), o.push("uniform int offset" + t.name + ";"))
        });
        var i, a, s, u = o.join("\n"),
            c = t.map(function (t) {
                return function (t, e, n) {
                    void 0 === n && (n = !1);
                    var r = "";
                    r += n ? Sn(t) : _n(t);
                    var o = t.shapeInfo.logicalShape,
                        i = e.logicalShape;
                    return o.length <= i.length && (r += n ? function (t, e) {
                        var n, r = t.name,
                            o = r.charAt(0).toUpperCase() + r.slice(1),
                            i = "get" + o + "AtOutCoords",
                            a = t.shapeInfo.logicalShape.length,
                            s = e.logicalShape.length,
                            u = gn(t.shapeInfo.logicalShape, e.logicalShape),
                            c = Dn(s),
                            l = s - a,
                            h = ["x", "y", "z", "w", "u", "v"];
                        n = 0 === a ? "" : s < 2 && 1 <= u.length ? "coords = 0;" : u.map(function (t) {
                            return "coords." + h[t + l] + " = 0;"
                        }).join("\n");
                        var p = "";
                        p = s < 2 && 0 < a ? "coords" : t.shapeInfo.logicalShape.map(function (t, e) {
                            return "coords." + h[e + l]
                        }).join(", ");
                        var f = "return outputValue;";
                        if (1 === a && 1 < s) f = "\n      return vec4(outputValue.xy, outputValue.xy);\n    ";
                        else if (0 === a && 0 < s) f = 1 === s ? "\n        return vec4(outputValue.x, outputValue.x, 0., 0.);\n      " : "\n        return vec4(outputValue.x);\n      ";
                        else if (u.length) {
                            var d = a - 2,
                                v = a - 1; - 1 < u.indexOf(d) && -1 < u.indexOf(v) ? f = "return vec4(outputValue.x);" : -1 < u.indexOf(d) ? f = "return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);" : -1 < u.indexOf(v) && (f = "return vec4(outputValue.xx, outputValue.zz);")
                        }
                        return "\n    vec4 " + i + "() {\n      " + c + " coords = getOutputCoords();\n      " + n + "\n      vec4 outputValue = get" + o + "(" + p + ");\n      " + f + "\n    }\n  "
                    }(t, e) : function (t, e) {
                        var n = t.name,
                            r = n.charAt(0).toUpperCase() + n.slice(1),
                            o = "get" + r + "AtOutCoords",
                            i = e.texShape,
                            a = t.shapeInfo.texShape,
                            s = t.shapeInfo.logicalShape.length,
                            u = e.logicalShape.length;
                        if (!t.shapeInfo.isUniform && s === u && null == t.shapeInfo.flatOffset && E(a, i)) return "\n      float " + o + "() {\n        return sampleTexture(" + n + ", resultUV);\n      }\n    ";
                        var c = Dn(u),
                            l = gn(t.shapeInfo.logicalShape, e.logicalShape),
                            h = u - s,
                            p = ["x", "y", "z", "w", "u", "v"];
                        return "\n    float " + o + "() {\n      " + c + " coords = getOutputCoords();\n      " + (0 === s ? "" : u < 2 && 1 <= l.length ? "coords = 0;" : l.map(function (t) {
                            return "coords." + p[t + h] + " = 0;"
                        }).join("\n")) + "\n      return get" + r + "(" + (u < 2 && 0 < s ? "coords" : t.shapeInfo.logicalShape.map(function (t, e) {
                            return "coords." + p[e + h]
                        }).join(", ")) + ");\n    }\n  "
                    }(t, e)), r
                }(t, e, r)
            }).join("\n"),
            l = e.texShape,
            h = wn(),
            p = "\n    float sampleTexture(sampler2D textureSampler, vec2 uv) {\n      return " + h.texture2D + "(textureSampler, uv).r;\n    }\n  ",
            f = (s = h).version + "\n    precision highp float;\n    precision highp int;\n    precision highp sampler2D;\n    " + s.varyingFs + " vec2 resultUV;\n    " + s.defineOutput + "\n    const vec2 halfCR = vec2(0.5, 0.5);\n\n    struct ivec5\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n    };\n\n    struct ivec6\n    {\n      int x;\n      int y;\n      int z;\n      int w;\n      int u;\n      int v;\n    };\n\n    " + s.defineSpecialNaN + "\n    " + s.defineSpecialInf + "\n    " + s.defineRound + "\n\n    int imod(int x, int y) {\n      return x - y * (x / y);\n    }\n\n    //Based on the work of Dave Hoskins\n    //https://www.shadertoy.com/view/4djSRW\n    #define HASHSCALE1 443.8975\n    float random(float seed){\n      vec2 p = resultUV * seed;\n      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n      p3 += dot(p3, p3.yzx + 19.19);\n      return fract((p3.x + p3.y) * p3.z);\n    }\n\n    " + Rn + "\n    " + Nn + "\n    " + kn + "\n  ";
        return a = e.isPacked ? (i = function (t, e) {
            switch (t.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return s = e, 1 === (u = [Math.ceil(s[0] / 2), Math.ceil(s[1] / 2)])[0] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.x * " + u[1] + ".0);\n      }\n    " : 1 === u[1] ? "\n      int getOutputCoords() {\n        return 2 * int(resultUV.y * " + u[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + u[0] + ", " + u[1] + "));\n      return resTexRC.x * " + u[1] + " + resTexRC.y;\n    }\n  ";
                case 2:
                    return function (t, e) {
                        var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)];
                        if (E(t, e)) return "\n      ivec2 getOutputCoords() {\n        return 2 * ivec2(resultUV.yx * vec2(" + n[0] + ", " + n[1] + "));\n      }\n    ";
                        var r = Math.ceil(t[1] / 2);
                        return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n      int r = 2 * (index / " + r + ");\n      int c = imod(index, " + r + ") * 2;\n\n      return ivec2(r, c);\n    }\n  "
                    }(t, e);
                case 3:
                    return n = t, r = e, o = [Math.ceil(r[0] / 2), Math.ceil(r[1] / 2)], i = Math.ceil(n[2] / 2), a = i * Math.ceil(n[1] / 2), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + o[0] + ", " + o[1] + "));\n      int index = resTexRC.x * " + o[1] + " + resTexRC.y;\n\n      int b = index / " + a + ";\n      index -= b * " + a + ";\n\n      int r = 2 * (index / " + i + ");\n      int c = imod(index, " + i + ") * 2;\n\n      return ivec3(b, r, c);\n    }\n  ";
                default:
                    return function (t, e) {
                        for (var n = [Math.ceil(e[0] / 2), Math.ceil(e[1] / 2)], r = Math.ceil(t[t.length - 1] / 2), o = r * Math.ceil(t[t.length - 2] / 2), i = o, a = "", s = "b, r, c", u = 2; u < t.length - 1; u++) a = "\n      int b" + u + " = index / " + (i *= t[t.length - u - 1]) + ";\n      index -= b" + u + " * " + i + ";\n    " + a, s = "b" + u + ", " + s;
                        return "\n    ivec" + t.length + " getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + a + "\n\n      int b = index / " + o + ";\n      index -= b * " + o + ";\n\n      int r = 2 * (index / " + r + ");\n      int c = imod(index, " + r + ") * 2;\n\n      return ivec" + t.length + "(" + s + ");\n    }\n  "
                    }(t, e)
            }
            var n, r, o, i, a;
            var s, u
        }(e.logicalShape, l), "\n    void setOutput(vec4 val) {\n      " + h.output + " = val;\n    }\n  ") : (i = function (t, e) {
            switch (t.length) {
                case 0:
                    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
                case 1:
                    return 1 === (p = e)[0] ? "\n      int getOutputCoords() {\n        return int(resultUV.x * " + p[1] + ".0);\n      }\n    " : 1 === p[1] ? "\n      int getOutputCoords() {\n        return int(resultUV.y * " + p[0] + ".0);\n      }\n    " : "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + p[0] + ", " + p[1] + "));\n      return resTexRC.x * " + p[1] + " + resTexRC.y;\n    }\n  ";
                case 2:
                    return E(l = t, h = e) ? "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + h[0] + ", " + h[1] + "));\n      }\n    " : 1 === l[1] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + h[0] + ", " + h[1] + "));\n        int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    " : 1 === l[0] ? "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + h[0] + ", " + h[1] + "));\n        int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    " : "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + h[0] + ", " + h[1] + "));\n      int index = resTexRC.x * " + h[1] + " + resTexRC.y;\n      int r = index / " + l[1] + ";\n      int c = index - r * " + l[1] + ";\n      return ivec2(r, c);\n    }\n  ";
                case 3:
                    return u = e, c = bn(["r", "c", "d"], t), "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + u[0] + ", " + u[1] + "));\n      int index = resTexRC.x * " + u[1] + " + resTexRC.y;\n      " + c + "\n      return ivec3(r, c, d);\n    }\n  ";
                case 4:
                    return a = e, s = bn(["r", "c", "d", "d2"], t), "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + a[0] + ", " + a[1] + "));\n      int index = resTexRC.x * " + a[1] + " + resTexRC.y;\n      " + s + "\n      return ivec4(r, c, d, d2);\n    }\n  ";
                case 5:
                    return o = e, i = bn(["r", "c", "d", "d2", "d3"], t), "\n    ivec5 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx * vec2(" + o[0] + ",\n                             " + o[1] + "));\n\n      int index = resTexRC.x * " + o[1] + " + resTexRC.y;\n\n      " + i + "\n\n      ivec5 outShape = ivec5(r, c, d, d2, d3);\n      return outShape;\n    }\n  ";
                case 6:
                    return n = e, r = bn(["r", "c", "d", "d2", "d3", "d4"], t), "\n    ivec6 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + n[0] + ", " + n[1] + "));\n      int index = resTexRC.x * " + n[1] + " + resTexRC.y;\n\n      " + r + "\n\n      ivec6 result = ivec6(r, c, d, d2, d3, d4);\n      return result;\n    }\n  ";
                default:
                    throw new Error(t.length + "-D output sampling is not yet supported")
            }
            var n, r;
            var o, i;
            var a, s;
            var u, c;
            var l, h;
            var p
        }(e.logicalShape, l), "\n    void setOutput(float val) {\n      " + h.output + " = vec4(val, 0, 0, 0);\n    }\n  "), r && (f += In), [f, p, a, u, i, c, n].join("\n")
    }

    function _n(t) {
        var e = t.shapeInfo.logicalShape;
        switch (e.length) {
            case 0:
                return function (t) {
                    var e = t.name,
                        n = "get" + e.charAt(0).toUpperCase() + e.slice(1);
                    if (t.shapeInfo.isUniform) return "float " + n + "() {return " + e + ";}";
                    var r = t.shapeInfo.texShape,
                        o = r[0],
                        i = r[1];
                    if (1 === o && 1 === i) return "\n      float " + n + "() {\n        return sampleTexture(" + e + ", halfCR);\n      }\n    ";
                    var a = t.shapeInfo.texShape;
                    return "\n    float " + n + "() {\n      vec2 uv = uvFromFlat(" + a[0] + ", " + a[1] + ", " + Tn(e) + ");\n      return sampleTexture(" + e + ", uv);\n    }\n  "
                }(t);
            case 1:
                return function (t) {
                    var e = t.name,
                        n = "get" + e.charAt(0).toUpperCase() + e.slice(1);
                    if (t.shapeInfo.isUniform) return "\n      float " + n + "(int index) {\n        " + An(t) + "\n      }\n    ";
                    var r = t.shapeInfo.texShape,
                        o = r[0],
                        i = r[1];
                    if (1 === i && 1 === o) return "\n      float " + n + "(int index) {\n        return sampleTexture(" + e + ", halfCR);\n      }\n    ";
                    var a = Tn(e);
                    return 1 === i ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2(0.5, (float(index + " + a + ") + 0.5) / " + o + ".0);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : 1 === o ? "\n      float " + n + "(int index) {\n        vec2 uv = vec2((float(index + " + a + ") + 0.5) / " + i + ".0, 0.5);\n        return sampleTexture(" + e + ", uv);\n      }\n    " : "\n    float " + n + "(int index) {\n      vec2 uv = uvFromFlat(" + o + ", " + i + ", index + " + a + ");\n      return sampleTexture(" + e + ", uv);\n    }\n  "
                }(t);
            case 2:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = t.shapeInfo.texShape;
                    if (null != o && E(e, o)) {
                        var i = o[0];
                        return "\n    float " + r + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + o[1] + ".0, " + i + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                    }
                    var a = I(e),
                        s = a.newShape,
                        u = a.keptDims,
                        c = s;
                    if (c.length < e.length) return "\n      " + _n(Mn(t, c)) + "\n      float " + r + "(int row, int col) {\n        return " + r + "(" + On(["row", "col"], u) + ");\n      }\n    ";
                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col) {\n        int index = round(dot(vec2(row, col), vec2(" + e[1] + ", 1)));\n        " + An(t) + "\n      }\n    ";
                    var l = o[0],
                        h = o[1],
                        p = Tn(n);
                    return 1 === h ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p + "), vec3(" + e[1] + ", 1, 1));\n      vec2 uv = vec2(0.5, (index + 0.5) / " + l + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : 1 === l ? "\n    float " + r + "(int row, int col) {\n      float index = dot(vec3(row, col, " + p + "), vec3(" + e[1] + ", 1, 1));\n      vec2 uv = vec2((index + 0.5) / " + h + ".0, 0.5);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : "\n  float " + r + "(int row, int col) {\n    // Explicitly use integer operations as dot() only works on floats.\n    int index = row * " + e[1] + " + col + " + p + ";\n    vec2 uv = uvFromFlat(" + l + ", " + h + ", index);\n    return sampleTexture(" + n + ", uv);\n  }\n"
                }(t);
            case 3:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = e[1] * e[2],
                        i = e[2],
                        a = I(e),
                        s = a.newShape,
                        u = a.keptDims,
                        c = s;
                    if (c.length < e.length) return "\n        " + _n(Mn(t, c)) + "\n        float " + r + "(int row, int col, int depth) {\n          return " + r + "(" + On(["row", "col", "depth"], u) + ");\n        }\n      ";
                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth) {\n        int index = round(dot(vec3(row, col, depth),\n                          vec3(" + o + ", " + i + ", 1)));\n        " + An(t) + "\n      }\n    ";
                    var l = t.shapeInfo.texShape,
                        h = l[0],
                        p = l[1],
                        f = t.shapeInfo.flatOffset;
                    return p === o && null == f ? "\n        float " + r + "(int row, int col, int depth) {\n          float texR = float(row);\n          float texC = dot(vec2(col, depth), vec2(" + i + ", 1));\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + p + ".0, " + h + ".0);\n          return sampleTexture(" + n + ", uv);\n        }\n      " : p === i && null == f ? "\n    float " + r + "(int row, int col, int depth) {\n      float texR = dot(vec2(row, col), vec2(" + e[1] + ", 1));\n      float texC = float(depth);\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + p + ".0, " + h + ".0);\n      return sampleTexture(" + n + ", uv);\n    }\n  " : "\n      float " + r + "(int row, int col, int depth) {\n        // Explicitly use integer operations as dot() only works on floats.\n        int index = row * " + o + " + col * " + i + " + depth + " + Tn(n) + ";\n        vec2 uv = uvFromFlat(" + h + ", " + p + ", index);\n        return sampleTexture(" + n + ", uv);\n      }\n  "
                }(t);
            case 4:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = e[3],
                        i = e[2] * o,
                        a = e[1] * i,
                        s = I(e),
                        u = s.newShape,
                        c = s.keptDims;
                    if (u.length < e.length) return "\n      " + _n(Mn(t, u)) + "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        return " + r + "(" + On(["row", "col", "depth", "depth2"], c) + ");\n      }\n    ";
                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        int index = round(dot(vec4(row, col, depth, depth2),\n                          vec4(" + a + ", " + i + ", " + o + ", 1)));\n        " + An(t) + "\n      }\n    ";
                    var l = t.shapeInfo.flatOffset,
                        h = t.shapeInfo.texShape,
                        p = h[0],
                        f = h[1];
                    return f === a && null == l ? "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = float(row);\n        float texC =\n            dot(vec3(col, depth, depth2),\n                vec3(" + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + f + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : f === o && null == l ? "\n      float " + r + "(int row, int col, int depth, int depth2) {\n        float texR = dot(vec3(row, col, depth),\n                         vec3(" + e[1] * e[2] + ", " + e[2] + ", 1));\n        float texC = float(depth2);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + f + ".0, " + p + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth, int depth2) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + a + " + col * " + i + " +\n          depth * " + o + " + depth2;\n      vec2 uv = uvFromFlat(" + p + ", " + f + ", index + " + Tn(n) + ");\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                }(t);
            case 5:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = e[4],
                        i = e[3] * o,
                        a = e[2] * i,
                        s = e[1] * a,
                        u = I(e),
                        c = u.newShape,
                        l = u.keptDims;
                    if (c.length < e.length) return "\n      " + _n(Mn(t, c)) + "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        return " + r + "(" + On(["row", "col", "depth", "depth2", "depth3"], l) + ");\n      }\n    ";
                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float index = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + s + ", " + a + ", " + i + ", " + o + ")) +\n          depth3;\n        " + An(t) + "\n      }\n    ";
                    var h = t.shapeInfo.flatOffset,
                        p = t.shapeInfo.texShape,
                        f = p[0],
                        d = p[1];
                    return d === s && null == h ? "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n                         vec4(" + a + ", " + i + ", " + o + ", 1));\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + d + ".0, " + f + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : d === o && null == h ? "\n      float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n        float texR = dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] + ",\n               " + e[2] * e[3] + ", " + e[3] + ", 1));\n        int texC = depth3;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + d + ".0, " + f + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth, int depth2, int depth3) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + s + " + col * " + a + " + depth * " + i + " +\n          depth2 * " + o + " + depth3 + " + Tn(n) + ";\n      vec2 uv = uvFromFlat(" + f + ", " + d + ", index);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                }(t);
            case 6:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = I(e),
                        i = o.newShape,
                        a = o.keptDims;
                    if (i.length < e.length) return "\n      " + _n(Mn(t, i)) + "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        return " + r + "(" + On(["row", "col", "depth", "depth2", "depth3", "depth4"], a) + ");\n      }\n    ";
                    var s = e[5],
                        u = e[4] * s,
                        c = e[3] * u,
                        l = e[2] * c,
                        h = e[1] * l;
                    if (t.shapeInfo.isUniform) return "\n      float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n        int index = round(dot(\n          vec4(row, col, depth, depth2),\n          vec4(" + h + ", " + l + ", " + c + ", " + u + ")) +\n          dot(\n            vec2(depth3, depth4),\n            vec2(" + s + ", 1)));\n        " + An(t) + "\n      }\n    ";
                    var p = t.shapeInfo.flatOffset,
                        f = t.shapeInfo.texShape,
                        d = f[0],
                        v = f[1];
                    return v === h && null == p ? "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        int texR = row;\n        float texC = dot(vec4(col, depth, depth2, depth3),\n          vec4(" + l + ", " + c + ", " + u + ", " + s + ")) +\n               float(depth4);\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + v + ".0, " + d + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : v === s && null == p ? "\n      float " + r + "(int row, int col, int depth,\n                    int depth2, int depth3, int depth4) {\n        float texR = dot(vec4(row, col, depth, depth2),\n          vec4(" + e[1] * e[2] * e[3] * e[4] + ",\n               " + e[2] * e[3] * e[4] + ",\n               " + e[3] * e[4] + ",\n               " + e[4] + ")) + float(depth3);\n        int texC = depth4;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + v + ".0, " + d + ".0);\n        return sampleTexture(" + n + ", uv);\n      }\n    " : "\n    float " + r + "(int row, int col, int depth,\n                  int depth2, int depth3, int depth4) {\n      // Explicitly use integer operations as dot() only works on floats.\n      int index = row * " + h + " + col * " + l + " + depth * " + c + " +\n          depth2 * " + u + " + depth3 * " + s + " + depth4 + " + Tn(n) + ";\n      vec2 uv = uvFromFlat(" + d + ", " + v + ", index);\n      return sampleTexture(" + n + ", uv);\n    }\n  "
                }(t);
            default:
                throw new Error(e.length + "-D input sampling is not yet supported")
        }
    }

    function Sn(t) {
        switch (t.shapeInfo.logicalShape.length) {
            case 0:
                return "\n    vec4 get" + (s = t.name).charAt(0).toUpperCase() + s.slice(1) + "() {\n      return " + wn().texture2D + "(" + s + ", halfCR);\n    }\n  ";
            case 1:
                return n = (e = t).name, r = "get" + n.charAt(0).toUpperCase() + n.slice(1), o = e.shapeInfo.texShape, i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)], a = wn(), "\n    vec4 " + r + "(int index) {\n      vec2 uv = packedUVfrom1D(\n        " + i[0] + ", " + i[1] + ", index);\n      return " + a.texture2D + "(" + n + ", uv);\n    }\n  ";
            case 2:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = t.shapeInfo.texShape,
                        i = o[0],
                        a = o[1],
                        s = wn();
                    if (null != o && E(e, o)) return "\n      vec4 " + r + "(int row, int col) {\n        vec2 uv = (vec2(col, row) + halfCR) / vec2(" + a + ".0, " + i + ".0);\n\n        return " + s.texture2D + "(" + n + ", uv);\n      }\n    ";
                    var u = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
                    return "\n    vec4 " + r + "(int row, int col) {\n      vec2 uv = packedUVfrom2D(" + Math.ceil(e[1] / 2) + ", " + u[0] + ", " + u[1] + ", row, col);\n      return " + s.texture2D + "(" + n + ", uv);\n    }\n  "
                }(t);
            case 3:
                return function (t) {
                    var e = t.shapeInfo.logicalShape,
                        n = t.name,
                        r = "get" + n.charAt(0).toUpperCase() + n.slice(1),
                        o = t.shapeInfo.texShape,
                        i = [Math.ceil(o[0] / 2), Math.ceil(o[1] / 2)];
                    if (1 === e[0]) return "\n        " + Sn(Mn(t, e.slice(1))) + "\n        vec4 " + r + "(int b, int row, int col) {\n          return " + r + "(" + On(["b", "row", "col"], [1, 2]) + ");\n        }\n      ";
                    var a = i[0],
                        s = i[1],
                        u = Math.ceil(e[2] / 2);
                    return "\n    vec4 " + r + "(int b, int row, int col) {\n      vec2 uv = packedUVfrom3D(\n        " + a + ", " + s + ", " + u * Math.ceil(e[1] / 2) + ", " + u + ", b, row, col);\n      return " + wn().texture2D + "(" + n + ", uv);\n    }\n  "
                }(t);
            default:
                return function (t) {
                    for (var e = t.shapeInfo.logicalShape, n = e.length, r = t.name, o = "get" + r.charAt(0).toUpperCase() + r.slice(1), i = t.shapeInfo.texShape, a = [Math.ceil(i[0] / 2), Math.ceil(i[1] / 2)], s = a[0], u = a[1], c = Math.ceil(e[n - 1] / 2), l = c * Math.ceil(e[n - 2] / 2), h = "int b, int row, int col", p = "b * " + l + " + (row / 2) * " + c + " + (col / 2)", f = 2; f < n - 1; f++) h = "int b" + f + ", " + h, p = "b" + f + " * " + (l *= e[n - f - 1]) + " + " + p;
                    return "\n    vec4 " + o + "(" + h + ") {\n      int index = " + p + ";\n      int texR = index / " + u + ";\n      int texC = index - texR * " + u + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + u + ", " + s + ");\n      return " + wn().texture2D + "(" + r + ", uv);\n    }\n  "
                }(t)
        }
        var e, n, r, o, i, a, s
    }
    var Rn = "\nvec2 uvFromFlat(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\nvec2 packedUVfrom1D(int texNumR, int texNumC, int index) {\n  int texelIndex = index / 2;\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        Nn = "\nvec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,\n  int texNumC, int row, int col) {\n  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = texelIndex / texNumC;\n  int texC = texelIndex - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        kn = "\nvec2 packedUVfrom3D(int texNumR, int texNumC,\n    int texelsInBatch, int texelsInLogicalRow, int b,\n    int row, int col) {\n  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n",
        In = "\n  float getChannel(vec4 frag, vec2 innerDims) {\n    vec2 modCoord = mod(innerDims, 2.);\n    return modCoord.x == 0. ?\n      (modCoord.y == 0. ? frag.r : frag.g) :\n      (modCoord.y == 0. ? frag.b : frag.a);\n  }\n  float getChannel(vec4 frag, int dim) {\n    float modCoord = mod(float(dim), 2.);\n    return modCoord == 0. ? frag.r : frag.g;\n  }\n";

    function Tn(t) {
        return "offset" + t
    }

    function An(t) {
        var e = t.name,
            n = B(t.shapeInfo.logicalShape);
        return n < 2 ? "return " + e + ";" : "\n    for (int i = 0; i < " + n + "; i++) {\n      if (i == index) {\n        return " + e + "[i];\n      }\n    }\n  "
    }

    function Dn(t) {
        if (t <= 1) return "int";
        if (2 === t) return "ivec2";
        if (3 === t) return "ivec3";
        if (4 === t) return "ivec4";
        if (5 === t) return "ivec5";
        if (6 === t) return "ivec6";
        throw Error("GPU for rank " + t + " is not yet supported")
    }

    function Mn(t, e) {
        var n = JSON.parse(JSON.stringify(t));
        return n.shapeInfo.logicalShape = e, n
    }

    function On(e, t) {
        return t.map(function (t) {
            return e[t]
        }).join(", ")
    }
    var Pn = function (t, e, n, r) {
            this.variableNames = ["A"], this.usesPackedTextures = !0, D(2 < t.length, function () {
                return "Packed arg" + (n.charAt(0).toUpperCase() + n.slice(1)) + " supports only inputs with rank above 2."
            });
            var o = t[t.length - 1],
                i = Math.ceil(o / e);
            this.outputShape = t.slice(0, -1), 1 < i && this.outputShape.push(i), r || this.variableNames.push("bestIndicesA");
            var a, s, u = this.outputShape,
                c = u.length,
                l = Dn(c),
                h = mn("coords", c);
            if (1 === i) {
                var p = Dn(s = c + 1);
                a = "\n        " + p + " sourceLocR = " + p + "(" + h.join() + ", 0);\n        ++" + h[c - 1] + ";\n        " + p + " sourceLocG = " + p + "(" + h.join() + ", 0);\n        ++" + h[c - 2] + ";\n        " + p + " sourceLocA = " + p + "(" + h.join() + ", 0);\n        --" + h[c - 1] + ";\n        " + p + " sourceLocB = " + p + "(" + h.join() + ", 0);\n        --" + h[c - 2] + ";"
            } else a = "\n        " + l + " sourceLocR = coords;\n        ++" + h[(s = c) - 1] + ";\n        " + l + " sourceLocG = coords;\n        ++" + h[c - 2] + ";\n        " + l + " sourceLocA = coords;\n        --" + h[c - 1] + ";\n        " + l + " sourceLocB = coords;\n        --" + h[c - 2] + ";";
            var f = ["x", "y", "z", "w", "u", "v"].slice(0, s),
                d = "." + f[s - 1],
                v = f.map(function (t) {
                    return "int " + t
                }),
                m = mn("sourceLocR", s - 1).concat("inIdx.r"),
                g = mn("sourceLocG", s - 1).concat("inIdx.g"),
                y = mn("sourceLocB", s - 1).concat("inIdx.b"),
                x = mn("sourceLocA", s - 1).concat("inIdx.a"),
                w = "max" === n ? "greaterThan" : "lessThan",
                b = r ? "" : "\n          inIdx = round(vec4(getBestIndicesAChannel(" + m.join() + "),\n                             getBestIndicesAChannel(" + g.join() + "),\n                             getBestIndicesAChannel(" + y.join() + "),\n                             getBestIndicesAChannel(" + x.join() + ")));",
                E = "vec4(\n            getAChannel(" + m.join() + "),\n            hasNextCol ? getAChannel(" + g.join() + ") : 0.,\n            hasNextRow ? getAChannel(" + y.join() + ") : 0.,\n            hasNextRow && hasNextCol ? getAChannel(" + x.join() + ") : 0.)",
                C = r ? "" : "\n      float getBestIndicesAChannel(" + v.join() + ") {\n        return getChannel(getBestIndicesA(" + f.join() + "),\n                                          vec2(" + f.slice(-2).join() + "));\n      }";
            this.userCode = "\n      float getAChannel(" + v.join() + ") {\n        return getChannel(getA(" + f.join() + "),\n                               vec2(" + f.slice(-2).join() + "));\n      }\n      " + C + "\n      void main() {\n        " + l + " coords = getOutputCoords();\n        bool hasNextCol = " + h[c - 1] + " < " + (u[c - 1] - 1) + ";\n        bool hasNextRow = " + h[c - 2] + " < " + (u[c - 2] - 1) + ";\n        " + a + "\n        ivec4 srcIdx = ivec4(sourceLocR" + d + ", sourceLocG" + d + ",\n          sourceLocB" + d + ", sourceLocA" + d + ") * " + e + ";\n        ivec4 inIdx = srcIdx;\n        vec4 bestIndex = vec4(inIdx);\n        vec4 bestValue = " + E + ";\n\n        for (int i = 0; i < " + e + "; i++) {\n          inIdx = srcIdx;\n          " + b + "\n          vec4 candidate = " + E + ";\n          bvec4 nan = isnan(candidate);\n          bvec4 replace = bvec4(\n            vec4(" + w + "(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));\n\n          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,\n                           replace.y  ? candidate.y : bestValue.y,\n                           replace.z  ? candidate.z : bestValue.z,\n                           replace.w  ? candidate.w : bestValue.w);\n          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));\n          srcIdx++;\n        }\n        setOutput(bestIndex);\n      }\n    "
        },
        Fn = function (t) {
            this.variableNames = ["dy"], this.outputShape = t.inShape;
            var e = t.filterHeight,
                n = t.filterWidth,
                r = t.strideHeight,
                o = t.strideWidth,
                i = t.dilationHeight,
                a = t.dilationWidth,
                s = t.effectiveFilterHeight,
                u = t.effectiveFilterWidth,
                c = s - 1 - t.padInfo.top,
                l = u - 1 - t.padInfo.left,
                h = 1 / (e * n);
            this.userCode = "\n      const ivec2 pads = ivec2(" + c + ", " + l + ");\n      const float avgMultiplier = float(" + h + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + ";\n            wR += " + i + ") {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + u + ";\n            wC+= " + a + ") {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        Ln = function (t, e, n, r, o, i) {
            this.outputShape = [], this.variableNames = ["x", "mean", "variance"], xn(t, e), xn(t, n);
            var a = "0.0";
            null != r && (xn(t, r), this.variableNames.push("offset"), a = "getOffsetAtOutCoords()");
            var s = "1.0";
            null != o && (xn(t, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = t, this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + a + ";\n        float scale = " + s + ";\n        float inv = scale * inversesqrt(variance + float(" + i + "));\n        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));\n      }\n    "
        },
        Bn = function (t, e, n, r, o, i) {
            this.usesPackedTextures = !0, this.variableNames = ["x", "mean", "variance"], xn(t, e), xn(t, n);
            var a = "vec4(0.0)";
            null != r && (xn(t, r), this.variableNames.push("offset"), a = "getOffsetAtOutCoords()");
            var s = "vec4(1.0)";
            null != o && (xn(t, o), this.variableNames.push("scale"), s = "getScaleAtOutCoords()"), this.outputShape = t, this.userCode = "\n      void main() {\n        vec4 offset = " + a + ";\n        vec4 scale = " + s + ";\n\n        vec4 x = getXAtOutCoords();\n        vec4 mean = getMeanAtOutCoords();\n        vec4 variance = getVarianceAtOutCoords();\n\n        vec4 inv = scale * inversesqrt(variance + vec4(" + i + "));\n\n        setOutput((x - mean) * inv + offset);\n      }\n    "
        },
        Wn = "return areal * breal - aimag * bimag;",
        zn = "return areal * bimag + aimag * breal;",
        Un = function (t, e, n) {
            this.variableNames = ["AReal", "AImag", "BReal", "BImag"], this.outputShape = xn(e, n), this.userCode = "\n      float binaryOpComplex(\n          float areal, float aimag, float breal, float bimag) {\n        " + t + "\n      }\n\n      void main() {\n        float areal = getARealAtOutCoords();\n        float aimag = getAImagAtOutCoords();\n        float breal = getBRealAtOutCoords();\n        float bimag = getBImagAtOutCoords();\n        setOutput(binaryOpComplex(areal, aimag, breal, bimag));\n      }\n    "
        },
        Gn = "return a + b;",
        Vn = "return a - b;",
        Hn = "return a * b;",
        qn = "return (a - b) * (a - b);",
        jn = function (t, e, n) {
            this.variableNames = ["A", "B"], this.outputShape = xn(e, n), this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + t + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
        },
        $n = function (t, e, n) {
            this.variableNames = ["A", "B"], this.supportsBroadcasting = !0, this.usesPackedTextures = !0, this.outputShape = xn(e, n), this.userCode = "\n      vec4 binaryOperation(vec4 a, vec4 b) {\n        " + t + "\n      }\n\n      void main() {\n        vec4 a = getAAtOutCoords();\n        vec4 b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    "
        },
        Kn = function () {
            function t(t) {
                this.variableNames = ["A"], this.outputShape = t, this.userCode = "\n      uniform float min;\n      uniform float max;\n\n      void main() {\n        float value = getAAtOutCoords();\n        if (isnan(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, min, max));\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n, r) {
                var o = this;
                return function (t, e) {
                    null == o.minLoc && (o.minLoc = t.getUniformLocationNoThrow(e, "min"), o.maxLoc = t.getUniformLocationNoThrow(e, "max")), t.gl.uniform1f(o.minLoc, n), t.gl.uniform1f(o.maxLoc, r)
                }
            }, t
        }(),
        Xn = function () {
            function t(t) {
                this.variableNames = ["A"], this.usesPackedTextures = !0, this.outputShape = t, this.userCode = "\n      uniform float min;\n      uniform float max;\n\n      void main() {\n        vec4 value = getAAtOutCoords();\n\n        if (any(isnan(value))) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, vec4(min), vec4(max)));\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n, r) {
                var o = this;
                return function (t, e) {
                    null == o.minLoc && (o.minLoc = t.getUniformLocationNoThrow(e, "min"), o.maxLoc = t.getUniformLocationNoThrow(e, "max")), t.gl.uniform1f(o.minLoc, n), t.gl.uniform1f(o.maxLoc, r)
                }
            }, t
        }(),
        Yn = function (t) {
            this.variableNames = ["real", "imag"], this.outputShape = t, this.userCode = "\n      void main() {\n        float re = abs(getRealAtOutCoords());\n        float im = abs(getImagAtOutCoords());\n        float mx = max(re, im);\n\n        // sadly the length function in glsl is not underflow-safe\n        // (at least not on Intel GPUs). So the safe solution is\n        // to ensure underflow-safety in all cases.\n        setOutput(\n          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))\n        );\n      }\n    "
        },
        Qn = function (t) {
            this.outputShape = [], this.outputShape = Re(t, 1), this.variableNames = t.map(function (t, e) {
                return "T" + e
            });
            var e = new Array(t.length - 1);
            e[0] = t[0][1];
            for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n][1];
            var r = ["if (yC < " + e[0] + ") setOutput(getT0(yR, yC));"];
            for (n = 1; n < e.length; n++) {
                var o = e[n - 1];
                r.push("else if (yC < " + e[n] + ") setOutput(getT" + n + "(yR, yC-" + o + "));")
            }
            var i = e.length,
                a = e[e.length - 1];
            r.push("else setOutput(getT" + i + "(yR, yC-" + a + "));"), this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        " + r.join("\n        ") + "\n      }\n    "
        },
        Jn = function (t, e) {
            this.usesPackedTextures = !0, this.outputShape = [], this.outputShape = Re(t, e);
            var n = this.outputShape,
                r = n.length,
                o = Dn(r),
                i = mn("coords", r),
                a = ["x", "y", "z", "w", "u", "v"].slice(0, r);
            this.variableNames = t.map(function (t, e) {
                return "T" + e
            });
            var s = new Array(t.length - 1);
            s[0] = t[0][e];
            for (var u = 1; u < s.length; u++) s[u] = s[u - 1] + t[u][e];
            var c = a[e],
                l = "vec2(" + a.slice(-2).join() + ")",
                h = a.join(),
                p = "if (" + c + " < " + s[0] + ")\n          return getChannel(getT0(" + h + "), " + l + ");";
            for (u = 1; u < s.length; u++) {
                var f = s[u - 1];
                p += "\n        else if (" + c + " < " + s[u] + ") {\n          " + c + " -= " + f + ";\n          return getChannel(getT" + u + "(" + h + "), " + l + ");\n        }"
            }
            var d = s.length;
            p += "\n        else {\n          " + c + " -= " + s[s.length - 1] + ";\n          return getChannel(getT" + d + "(" + h + "), " + l + ");\n        }", this.userCode = "\n      float getValue(" + a.map(function (t) {
                return "int " + t
            }) + ") {\n        " + p + "\n      }\n\n      void main() {\n        " + o + " coords = getOutputCoords();\n        vec4 result = vec4(getValue(" + i + "), 0., 0., 0.);\n        if (++" + i[r - 1] + " < " + n[r - 1] + ") {\n          result.g = getValue(" + i + ");\n        }\n        if (++" + i[r - 2] + " < " + n[r - 2] + ") {\n          result.a = getValue(" + i + ");\n        }\n        if (" + i[r - 2] + " < " + n[r - 2] + " &&\n            --" + i[r - 1] + " < " + n[r - 1] + ") {\n          result.b = getValue(" + i + ");\n        }\n        setOutput(result);\n      }\n    "
        },
        Zn = function (t) {
            this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
            var e = t.strideHeight,
                n = t.strideWidth,
                r = t.padInfo.top,
                o = t.padInfo.left;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        tr = function (t) {
            this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
            var e = t.filterHeight,
                n = t.filterWidth,
                r = t.strideHeight,
                o = t.strideWidth,
                i = e - 1 - t.padInfo.top,
                a = n - 1 - t.padInfo.left;
            this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + a + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        er = function (t) {
            this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
            var e = t.strideDepth,
                n = t.strideHeight,
                r = t.strideWidth,
                o = t.padInfo.front,
                i = t.padInfo.top,
                a = t.padInfo.left;
            this.userCode = "\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int wF = coords.x;\n        int wR = coords.y;\n        int wC = coords.z;\n        int d1 = coords.w;\n        int d2 = coords.u;\n\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yF = 0; yF < " + t.outDepth + "; yF++) {\n            int xF = wF + yF * " + e + " - " + o + ";\n\n            if (xF < 0 || xF >= " + t.inDepth + ") {\n              continue;\n            }\n\n            for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n              int xR = wR + yR * " + n + " - " + i + ";\n\n              if (xR < 0 || xR >= " + t.inHeight + ") {\n                continue;\n              }\n\n              for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n                int xC = wC + yC * " + r + " - " + a + ";\n\n                if (xC < 0 || xC >= " + t.inWidth + ") {\n                  continue;\n                }\n\n                float dyValue = getDy(b, yF, yR, yC, d2);\n                float xValue = getX(b, xF, xR, xC, d1);\n                dotProd += (xValue * dyValue);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        nr = function (t) {
            this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
            var e = t.filterDepth,
                n = t.filterHeight,
                r = t.filterWidth,
                o = t.strideDepth,
                i = t.strideHeight,
                a = t.strideWidth,
                s = e - 1 - t.padInfo.front,
                u = n - 1 - t.padInfo.top,
                c = r - 1 - t.padInfo.left;
            this.userCode = "\n      const ivec3 pads = ivec3(" + s + ", " + u + ", " + c + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d1 = coords.u;\n\n\n        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;\n        int dyFCorner = dyCorner.x;\n        int dyRCorner = dyCorner.y;\n        int dyCCorner = dyCorner.z;\n\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + e + "; wF++) {\n          float dyF = float(dyFCorner + wF) / " + o + ".0;\n\n          if (dyF < 0.0 || dyF >= " + t.outDepth + ".0 || fract(dyF) > 0.0) {\n            continue;\n          }\n          int idyF = int(dyF);\n\n          int wFPerm = " + e + " - 1 - wF;\n\n          for (int wR = 0; wR < " + n + "; wR++) {\n            float dyR = float(dyRCorner + wR) / " + i + ".0;\n\n            if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 ||\n              fract(dyR) > 0.0) {\n              continue;\n            }\n            int idyR = int(dyR);\n\n            int wRPerm = " + n + " - 1 - wR;\n\n            for (int wC = 0; wC < " + r + "; wC++) {\n              float dyC = float(dyCCorner + wC) / " + a + ".0;\n\n              if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                  fract(dyC) > 0.0) {\n                continue;\n              }\n              int idyC = int(dyC);\n\n              int wCPerm = " + r + " - 1 - wC;\n\n              for (int d2 = 0; d2 < " + t.outChannels + "; d2++) {\n                float xValue = getDy(batch, idyF, idyR, idyC, d2);\n                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);\n                dotProd += xValue * wValue;\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        rr = function (t) {
            this.variableNames = ["x", "dy"], this.outputShape = t.filterShape;
            var e = t.strideHeight,
                n = t.strideWidth,
                r = t.padInfo.top,
                o = t.padInfo.left,
                i = t.outChannels / t.inChannels;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int dm = coords.w;\n        int d2 = d1 * " + i + " + dm;\n\n        float dotProd = 0.0;\n\n        // TODO: Vec4 over the batch size\n        for (int b = 0; b < " + t.batchSize + "; b++) {\n          for (int yR = 0; yR < " + t.outHeight + "; yR++) {\n            int xR = wR + yR * " + e + " - " + r + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + t.outWidth + "; yC++) {\n              int xC = wC + yC * " + n + " - " + o + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        or = function (t) {
            this.variableNames = ["dy", "W"], this.outputShape = t.inShape;
            var e = t.filterHeight,
                n = t.filterWidth,
                r = t.strideHeight,
                o = t.strideWidth,
                i = e - 1 - t.padInfo.top,
                a = n - 1 - t.padInfo.left,
                s = t.outChannels / t.inChannels;
            this.userCode = "\n      const ivec2 pads = ivec2(" + i + ", " + a + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        float dotProd = 0.0;\n\n        for (int wR = 0; wR < " + e + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + r + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + e + " - 1 - wR;\n\n          for (int wC = 0; wC < " + n + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + o + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + n + " - 1 - wC;\n\n            // TODO: Vec4 over the channelMul\n            for (int dm = 0; dm < " + s + "; dm++) {\n              int d2 = d1 * " + s + " + dm;\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, dm);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        ir = function (t) {
            this.variableNames = ["x", "W"], this.outputShape = t.outShape;
            var e = t.padInfo.top,
                n = t.padInfo.left,
                r = t.strideHeight,
                o = t.strideWidth,
                i = t.dilationHeight,
                a = t.dilationWidth,
                s = t.filterHeight,
                u = t.filterWidth,
                c = 4 * Math.floor(t.inChannels / 4),
                l = t.inChannels % 4;
            this.userCode = "\n      const ivec2 strides = ivec2(" + r + ", " + o + ");\n      const ivec2 pads = ivec2(" + e + ", " + n + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + s + "; wR++) {\n          int xR = xRCorner + wR * " + i + ";\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + u + "; wC++) {\n            int xC = xCCorner + wC * " + a + ";\n\n            if (xC < 0 || xC >= " + t.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + c + "; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if (" + (1 === l) + ") {\n              dotProd +=\n                getX(batch, xR, xC, " + c + ") *\n                getW(wR, wC, " + c + ", d2);\n            } else if (" + (2 === l) + ") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, " + c + "),\n                getX(batch, xR, xC, " + c + " + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, " + c + ", d2),\n                getW(wR, wC, " + c + " + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if (" + (3 === l) + ") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, " + c + "),\n                getX(batch, xR, xC, " + c + " + 1),\n                getX(batch, xR, xC, " + c + " + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, " + c + ", d2),\n                getW(wR, wC, " + c + " + 1, d2),\n                getW(wR, wC, " + c + " + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        ar = function (t) {
            this.variableNames = ["x", "W"], this.outputShape = t.outShape;
            var e = t.padInfo.front,
                n = t.padInfo.top,
                r = t.padInfo.left,
                o = t.strideDepth,
                i = t.strideHeight,
                a = t.strideWidth,
                s = t.dilationDepth,
                u = t.dilationHeight,
                c = t.dilationWidth,
                l = t.filterDepth,
                h = t.filterHeight,
                p = t.filterWidth,
                f = 4 * Math.floor(t.inChannels / 4),
                d = t.inChannels % 4;
            this.userCode = "\n      const ivec3 strides = ivec3(" + o + ", " + i + ", " + a + ");\n      const ivec3 pads = ivec3(" + e + ", " + n + ", " + r + ");\n\n      void main() {\n        ivec5 coords = getOutputCoords();\n        int batch = coords.x;\n        int d2 = coords.u;\n\n        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;\n        int xFCorner = xFRCCorner.x;\n        int xRCorner = xFRCCorner.y;\n        int xCCorner = xFRCCorner.z;\n\n        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get\n        // y(yF, yR, yC, d2). ? = to be determined. : = across all\n        // values in that axis.\n        float dotProd = 0.0;\n        for (int wF = 0; wF < " + l + "; wF++) {\n          int xF = xFCorner + wF * " + s + ";\n\n          if (xF < 0 || xF >= " + t.inDepth + ") {\n            continue;\n          }\n\n          for (int wR = 0; wR < " + h + "; wR++) {\n            int xR = xRCorner + wR * " + u + ";\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + p + "; wC++) {\n              int xC = xCCorner + wC * " + c + ";\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              for (int d1 = 0; d1 < " + f + "; d1 += 4) {\n                vec4 xValues = vec4(\n                  getX(batch, xF, xR, xC, d1),\n                  getX(batch, xF, xR, xC, d1 + 1),\n                  getX(batch, xF, xR, xC, d1 + 2),\n                  getX(batch, xF, xR, xC, d1 + 3)\n                );\n                vec4 wValues = vec4(\n                  getW(wF, wR, wC, d1, d2),\n                  getW(wF, wR, wC, d1 + 1, d2),\n                  getW(wF, wR, wC, d1 + 2, d2),\n                  getW(wF, wR, wC, d1 + 3, d2)\n                );\n\n                dotProd += dot(xValues, wValues);\n              }\n\n              if (" + (1 === d) + ") {\n                dotProd +=\n                  getX(batch, xF, xR, xC, " + f + ") *\n                  getW(wF, wR, wC, " + f + ", d2);\n              } else if (" + (2 === d) + ") {\n                vec2 xValues = vec2(\n                  getX(batch, xF, xR, xC, " + f + "),\n                  getX(batch, xF, xR, xC, " + f + " + 1)\n                );\n                vec2 wValues = vec2(\n                  getW(wF, wR, wC, " + f + ", d2),\n                  getW(wF, wR, wC, " + f + " + 1, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              } else if (" + (3 === d) + ") {\n                vec3 xValues = vec3(\n                  getX(batch, xF, xR, xC, " + f + "),\n                  getX(batch, xF, xR, xC, " + f + " + 1),\n                  getX(batch, xF, xR, xC, " + f + " + 2)\n                );\n                vec3 wValues = vec3(\n                  getW(wF, wR, wC, " + f + ", d2),\n                  getW(wF, wR, wC, " + f + " + 1, d2),\n                  getW(wF, wR, wC, " + f + " + 2, d2)\n                );\n                dotProd += dot(xValues, wValues);\n              }\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        sr = function (t) {
            this.variableNames = ["x", "W"], this.outputShape = t.outShape;
            var e = t.inHeight,
                n = t.inWidth,
                r = t.padInfo.top,
                o = t.padInfo.left,
                i = t.strideHeight,
                a = t.strideWidth,
                s = t.dilationHeight,
                u = t.dilationWidth,
                c = t.filterHeight,
                l = t.filterWidth,
                h = t.outChannels / t.inChannels;
            this.userCode = "\n      const ivec2 strides = ivec2(" + i + ", " + a + ");\n      const ivec2 pads = ivec2(" + r + ", " + o + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + h + ";\n        int q = d2 - d1 * " + h + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + c + "; wR++) {\n          int xR = xRCorner + wR * " + s + ";\n\n          if (xR < 0 || xR >= " + e + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + l + "; wC++) {\n            int xC = xCCorner + wC * " + u + ";\n\n            if (xC < 0 || xC >= " + n + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        ur = function (t) {
            this.variableNames = ["x", "W"], this.usesPackedTextures = !0, this.outputShape = t.outShape;
            for (var e = t.inHeight, n = t.inWidth, r = t.padInfo.top, o = t.padInfo.left, i = t.strideHeight, a = t.strideWidth, s = t.dilationHeight, u = t.dilationWidth, c = t.filterHeight, l = t.filterWidth, h = l, p = "int xR; int xC; int xCOffset;", f = 0; f < c; f++)
                for (var d = 0; d < l; d++) p += "\n          vec4 xTexelR" + f + "C" + 2 * d + " = vec4(0.);\n          vec4 wR" + f + "C" + d + " = vec4(0.);\n          vec4 xR" + f + "C" + d + " = vec4(0.);";
            for (f = 0; f < c; f++)
                for (var v = 0; v < h; v++) {
                    if (p += "\n          xR = xRCorner + " + f * s + ";\n          xC = xCCorner + " + (d = 2 * v) * u + ";\n        ", 1 === a) {
                        if (d < l && (p += o % 2 == 1 ? "\n                xCOffset = xC + 1;\n                if(xR >= 0 && xR < " + e + " && xCOffset >= 0 && xCOffset < " + n + ") {\n                  xTexelR" + f + "C" + d + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + f + "C" + d + " = vec4(0.);\n                }\n\n                xCOffset = xC + 1 - 2;\n                if(xR >= 0 && xR < " + e + " && xCOffset >= 0 && xCOffset < " + n + ") {\n                  vec4 previous = getX(batch, xR, xCOffset, d1);\n                  xR" + f + "C" + d + " = vec4(previous.zw, xTexelR" + f + "C" + d + ".xy);\n                } else {\n                  xR" + f + "C" + d + " = vec4(0, 0, xTexelR" + f + "C" + d + ".xy);\n                }\n              " : "\n                if(xR >= 0 && xR < " + e + " && xC >= 0 && xC < " + n + ") {\n                  xTexelR" + f + "C" + d + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + f + "C" + d + " = vec4(0.);\n                }\n\n                xR" + f + "C" + d + " = xTexelR" + f + "C" + d + ";\n              ", d + 1 < l)) {
                            var m = o % 2 == 0 ? _(u) : u;
                            u % 2 == 0 && o % 2 == 1 || u % 2 != 0 && o % 2 != 1 ? (p += "\n                  xCOffset = xC + " + o % 2 + " + " + m + ";\n\n                  if(xR >= 0 && xR < " + e + " &&\n                    xCOffset >= 0 && xCOffset < " + n + ") {\n                    xTexelR" + f + "C" + (d + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n                ", 1 < u && (p += "\n                    xCOffset -= 2;\n                    if(xR >= 0 && xR < " + e + " &&\n                      xCOffset >= 0 && xCOffset < " + n + ") {\n                      xTexelR" + f + "C" + d + " = getX(batch, xR, xCOffset, d1);\n                    } else {\n                      xTexelR" + f + "C" + d + " = vec4(0.);\n                    }\n                  "), p += "\n                  xR" + f + "C" + (d + 1) + " = vec4(\n                    xTexelR" + f + "C" + d + ".zw, xTexelR" + f + "C" + (d + 2) + ".xy);\n                ") : p += "\n                  xCOffset = xC + " + m + ";\n\n                  if(xR >= 0 && xR < " + e + " &&\n                    xCOffset >= 0 && xCOffset < " + n + ") {\n                    xTexelR" + f + "C" + (d + 2) + " = getX(batch, xR, xCOffset, d1);\n                  }\n\n                  xR" + f + "C" + (d + 1) + " = xTexelR" + f + "C" + (d + 2) + ";\n                "
                        }
                    } else d < l && (p += "\n              if(xR >= 0 && xR < " + e + ") {\n            ", o % 2 == 1 ? (p += "\n                xCOffset = xC + 1 - " + a + ";\n                if(xCOffset >= 0 && xCOffset < " + n + ") {\n                  xTexelR" + f + "C" + d + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + f + "C" + d + " = vec4(0.);\n                }\n\n                if(xC + 1 >= 0 && xC + 1 < " + n + ") {\n                  xTexelR" + f + "C" + (d + 2) + " = getX(batch, xR, xC + 1, d1);\n                } else {\n                  xTexelR" + f + "C" + (d + 2) + " = vec4(0.);\n                }\n\n                xR" + f + "C" + d + " = vec4(\n                  xTexelR" + f + "C" + d + ".zw, xTexelR" + f + "C" + (d + 2) + ".zw);\n              ", d + 1 < l && (p += "\n                  vec4 final = vec4(0.);\n                  xCOffset = xC + 1 + " + a + ";\n                  if(xCOffset >= 0 && xCOffset < " + n + ") {\n                    final = getX(batch, xR, xCOffset, d1);\n                  }\n                  xR" + f + "C" + (d + 1) + " = vec4(xTexelR" + f + "C" + (d + 2) + ".xy, final.xy);\n                ")) : (p += "\n                if(xC >= 0 && xC < " + n + ") {\n                  xTexelR" + f + "C" + d + " = getX(batch, xR, xC, d1);\n                } else {\n                  xTexelR" + f + "C" + d + " = vec4(0.);\n                }\n\n                xCOffset = xC + " + a + ";\n                if(xCOffset >= 0 && xCOffset < " + n + ") {\n                  xTexelR" + f + "C" + (d + 2) + " = getX(batch, xR, xCOffset, d1);\n                } else {\n                  xTexelR" + f + "C" + (d + 2) + " = vec4(0.);\n                }\n\n                xR" + f + "C" + d + " = vec4(\n                  xTexelR" + f + "C" + d + ".xy, xTexelR" + f + "C" + (d + 2) + ".xy);\n              ", d + 1 < l && (p += "\n                  xR" + f + "C" + (d + 1) + " = vec4(\n                    xTexelR" + f + "C" + d + ".zw, xTexelR" + f + "C" + (d + 2) + ".zw);\n                ")), p += "}");
                    d < l && (p += "\n            vec4 wTexelR" + f + "C" + d + " = getW(" + f + ", " + d + ", d1, q);\n            wR" + f + "C" + d + " = vec4(wTexelR" + f + "C" + d + ".xz, wTexelR" + f + "C" + d + ".xz);\n          ", d + 1 < l && (p += "\n              vec4 wTexelR" + f + "C" + (d + 1) + " = getW(" + f + ", " + (d + 1) + ", d1, q);\n              wR" + f + "C" + (d + 1) + " =\n                vec4(wTexelR" + f + "C" + (d + 1) + ".xz, wTexelR" + f + "C" + (d + 1) + ".xz);"))
                }
            for (f = 0; f < c; f++)
                for (d = 0; d < l; d++) p += "result += xR" + f + "C" + d + " * wR" + f + "C" + d + ";";
            this.userCode = "\n      const ivec2 strides = ivec2(" + i + ", " + a + ");\n      const ivec2 pads = ivec2(" + r + ", " + o + ");\n\n      void main() {\n\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2;\n        int q = 0;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        vec4 result = vec4(0.);\n\n        " + p + "\n\n        setOutput(result);\n      }\n    "
        },
        cr = function (t, e, n, r, o) {
            this.variableNames = ["Image", "Boxes", "BoxInd"], this.outputShape = [];
            var i = t[0],
                a = t[1],
                s = t[2],
                u = t[3],
                c = e[0],
                l = n[0],
                h = n[1];
            this.outputShape = [c, l, h, u];
            var p = "bilinear" === r ? 1 : 0,
                f = [a - 1 + ".0", s - 1 + ".0"],
                d = f[0],
                v = f[1],
                m = 1 < l ? ["" + (a - 1) / (l - 1), "(y2-y1) * height_ratio", "y1*" + d + " + float(y)*(height_scale)"] : ["0.0", "0.0", "0.5 * (y1+y2) * " + d],
                g = m[0],
                y = m[1],
                x = m[2],
                w = 1 < h ? ["" + (s - 1) / (h - 1), "(x2-x1) * width_ratio", "x1*" + v + " + float(x)*(width_scale)"] : ["0.0", "0.0", "0.5 * (x1+x2) * " + v],
                b = w[0],
                E = w[1],
                C = w[2];
            this.userCode = "\n      const float height_ratio = float(" + g + ");\n      const float width_ratio = float(" + b + ");\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int y = coords[1];\n        int x = coords[2];\n        int d = coords[3];\n\n        // get box vals\n        float y1 = getBoxes(b,0);\n        float x1 = getBoxes(b,1);\n        float y2 = getBoxes(b,2);\n        float x2 = getBoxes(b,3);\n\n        // get image in batch index\n        int bInd = round(getBoxInd(b));\n        if(bInd < 0 || bInd >= " + i + ") {\n          return;\n        }\n\n        float height_scale = " + y + ";\n        float width_scale = " + E + ";\n\n        float in_y = " + x + ";\n        if( in_y < 0.0 || in_y > " + d + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n        float in_x = " + C + ";\n        if( in_x < 0.0 || in_x > " + v + " ) {\n          setOutput(float(" + o + "));\n          return;\n        }\n\n        vec2 sourceFracIndexCR = vec2(in_x,in_y);\n        if(" + p + " == 1) {\n          // Compute the four integer indices.\n          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);\n          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));\n\n          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);\n          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);\n          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);\n          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);\n\n          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);\n\n          float top = topLeft + (topRight - topLeft) * fracCR.x;\n          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;\n          float newValue = top + (bottom - top) * fracCR.y;\n          setOutput(newValue);\n        } else {\n          // Compute the coordinators of nearest neighbor point.\n          ivec2 sourceNearestCR = ivec2(floor(\n            sourceFracIndexCR + vec2(0.5,0.5)));\n          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);\n          setOutput(newValue);\n        }\n      }\n    "
        },
        lr = function (t, e, n) {
            this.variableNames = ["x"];
            var r = (this.outputShape = t).length,
                o = t[t.length - 1],
                i = n ? "<" : ">";
            this.userCode = "\n      int getIndex(int i) {\n        " + (n ? "return " + o + " -i - 1;" : "return i;") + "\n      }\n\n      void main() {\n        " + Dn(r) + " coords = getOutputCoords();\n        int end = " + hr(r, "coords") + ";\n        float val = 0.0;\n        for (int i = " + o + " - 1; i >= 0; i -= 1) {\n          int idx = getIndex(i);\n          if (idx " + i + " end) {\n            continue;\n          }\n          if (idx == end && " + e + ") {\n            continue;\n          }\n          " + hr(r, "coords") + " = idx;\n          val += getX(" + function (t, e) {
                if (1 === t) return "" + e;
                if (2 === t) return e + ".x, " + e + ".y";
                if (3 === t) return e + ".x, " + e + ".y, " + e + ".z";
                if (4 === t) return e + ".x, " + e + ".y, " + e + ".z, " + e + ".w";
                throw Error("Cumulative sum for rank " + t + " is not yet supported")
            }(r, "coords") + ");\n        }\n        setOutput(val);\n      }\n    "
        };

    function hr(t, e) {
        if (1 === t) return "" + e;
        if (2 === t) return e + ".y";
        if (3 === t) return e + ".z";
        if (4 === t) return e + ".w";
        throw Error("Cumulative sum for rank " + t + " is not yet supported")
    }
    var pr = function () {
            function t(t, e, n) {
                this.variableNames = ["x"], this.outputShape = [], this.outputShape = t, this.blockSize = e, this.dataFormat = n, this.userCode = "\n    void main() {\n      ivec4 coords = getOutputCoords();\n      int b = coords[0];\n      int h = " + this.getHeightCoordString() + ";\n      int w = " + this.getWidthCoordString() + ";\n      int d = " + this.getDepthCoordString() + ";\n\n      int in_h = h / " + e + ";\n      int offset_h = imod(h, " + e + ");\n      int in_w = w / " + e + ";\n      int offset_w = imod(w, " + e + ");\n      int offset_d = (offset_h * " + e + " + offset_w) *\n        " + this.getOutputDepthSize() + ";\n      int in_d = d + offset_d;\n\n      float result = " + this.getInputSamplingString() + ";\n      setOutput(result);\n    }\n  "
            }
            return t.prototype.getHeightCoordString = function () {
                return "NHWC" === this.dataFormat ? "coords[1]" : "coords[2]"
            }, t.prototype.getWidthCoordString = function () {
                return "NHWC" === this.dataFormat ? "coords[2]" : "coords[3]"
            }, t.prototype.getDepthCoordString = function () {
                return "NHWC" === this.dataFormat ? "coords[3]" : "coords[1]"
            }, t.prototype.getOutputDepthSize = function () {
                return "NHWC" === this.dataFormat ? this.outputShape[3] : this.outputShape[1]
            }, t.prototype.getInputSamplingString = function () {
                return "NHWC" === this.dataFormat ? "getX(b, in_h, in_w, in_d)" : "getX(b, in_d, in_h, in_w)"
            }, t
        }(),
        fr = function (t) {
            this.variableNames = ["A"];
            var e = wn();
            this.outputShape = t, this.userCode = "\n      const float FLOAT_MAX = 1.70141184e38;\n      const float FLOAT_MIN = 1.17549435e-38;\n\n      lowp vec4 encode_float(highp float v) {\n        if (isnan(v)) {\n          return vec4(255, 255, 255, 255);\n        }\n\n        highp float av = abs(v);\n\n        if(av < FLOAT_MIN) {\n          return vec4(0.0, 0.0, 0.0, 0.0);\n        } else if(v > FLOAT_MAX) {\n          return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;\n        } else if(v < -FLOAT_MAX) {\n          return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;\n        }\n\n        highp vec4 c = vec4(0,0,0,0);\n\n        highp float e = floor(log2(av));\n        highp float m = exp2(fract(log2(av))) - 1.0;\n\n        c[2] = floor(128.0 * m);\n        m -= c[2] / 128.0;\n        c[1] = floor(32768.0 * m);\n        m -= c[1] / 32768.0;\n        c[0] = floor(8388608.0 * m);\n\n        highp float ebias = e + 127.0;\n        c[3] = floor(ebias / 2.0);\n        ebias -= c[3] * 2.0;\n        c[2] += floor(ebias) * 128.0;\n\n        c[3] += 128.0 * step(0.0, -v);\n\n        return c / 255.0;\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        " + e.output + " = encode_float(x);\n      }\n    "
        },
        dr = "return real * expR - imag * expI;",
        vr = "return real * expI + imag * expR;",
        mr = function (t, e, n) {
            this.variableNames = ["real", "imag"];
            var r = e[1];
            this.outputShape = e;
            var o = n ? "2.0 * " + Math.PI : "-2.0 * " + Math.PI,
                i = n ? r + ".0" : "1.0";
            this.userCode = "\n      const float exponentMultiplier = " + o + ";\n\n      float unaryOpComplex(float real, float expR, float imag, float expI) {\n        " + t + "\n      }\n\n      float mulMatDFT(int batch, int index) {\n        float indexRatio = float(index) / float(" + r + ");\n        float exponentMultiplierTimesIndexRatio =\n            exponentMultiplier * indexRatio;\n\n        float result = 0.0;\n\n        for (int i = 0; i < " + r + "; i++) {\n          // x = (-2|2 * PI / N) * index * i;\n          float x = exponentMultiplierTimesIndexRatio * float(i);\n          float expR = cos(x);\n          float expI = sin(x);\n          float real = getReal(batch, i);\n          float imag = getImag(batch, i);\n\n          result +=\n              unaryOpComplex(real, expR, imag, expI) / " + i + ";\n        }\n\n        return result;\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        setOutput(mulMatDFT(coords[0], coords[1]));\n      }\n    "
        },
        gr = function () {
            function t(t, e) {
                this.outputShape = [], this.variableNames = ["x"], this.outputShape = t, this.userCode = "\n      uniform float value;\n      void main() {\n        // Input can be obtained from uniform value.\n        setOutput(value);\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n) {
                var r = this;
                return function (t, e) {
                    null == r.valueLoc && (r.valueLoc = t.getUniformLocationNoThrow(e, "value")), t.gl.uniform1f(r.valueLoc, n)
                }
            }, t
        }(),
        yr = function (t) {
            this.variableNames = ["A"];
            var e = wn(),
                n = t[0],
                r = t[1];
            this.outputShape = t, this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + r + ".0, " + n + ".0);\n\n        vec4 values = " + e.texture2D + "(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    "
        },
        xr = function (t, e, n) {
            this.variableNames = ["A", "indices"];
            var r = t.slice();
            r[n] = e, this.outputShape = r, this.rank = r.length;
            var o = Dn(this.rank),
                i = function (t, e) {
                    var n = t.length;
                    if (4 < n) throw Error("Gather for rank " + n + " is not yet supported");
                    if (1 === n) return "int(getIndices(resRC))";
                    for (var r = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], o = [], i = 0; i < t.length; i++) i === e ? o.push("int(getIndices(" + r[i] + "))") : o.push("" + r[i]);
                    return o.join()
                }(t, n);
            this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
        };
    var wr, br, Er, Cr, _r = function (t, e, n) {
        this.sliceDim = t, this.strides = e, this.variableNames = ["x", "indices"], this.outputShape = n;
        var r = Dn(e.length),
            o = Dn(n.length),
            i = 1 < this.sliceDim ? "strides[j]" : "strides";
        this.userCode = "\n        " + r + " strides = " + r + "(" + this.strides + ");\n         void main() {\n          " + o + " coords = getOutputCoords();\n          int flattenIndex = 0;\n          for (int j = 0; j < " + this.sliceDim + "; j++) {\n            int index = round(getIndices(coords[0], j));\n            flattenIndex += index * " + i + ";\n          }\n          setOutput(getX(flattenIndex, coords[1]));\n        }\n      "
    };

    function Sr(t, e) {
        return [e, t]
    }

    function Rr(t, e) {
        return t * e
    }

    function Nr(t, e, n) {
        var r = function (t, e) {
            if (t % e != 0) throw new Error("unpackedSize (" + t + ") must be a multiple of " + e);
            return t / e
        }(t.length, n);
        if (e.length < r) throw new Error("matrix length (" + e.length + ") must be >= " + r);
        for (var o = 0, i = 0; i < t.length; i += n) e[o++] = t[i]
    }

    function kr(t, e) {
        return [Math.max(1, Math.ceil(e / 2)), Math.max(1, Math.ceil(t / 2))]
    }

    function Ir(t, e) {
        var n = kr(t, e);
        return n[0] * n[1] * 4
    }

    function Tr(t, e, n, r, o) {
        var i = n * r;
        if (o.length < i) throw new Error("matrix length (" + o.length + ") must be >= " + i);
        for (var a = r % 2 == 1, s = n % 2 == 1, u = Math.floor(r / 2), c = Math.floor(n / 2), l = Math.ceil(r / 2), h = l * Math.ceil(n / 2), p = _(n) * _(r), f = 0; f < e; f++) {
            for (var d = f * n * r, v = f * p, m = a ? 4 : 0, g = r + (a ? 1 : 0), y = v, x = d, w = d + r, b = 0; b < c; ++b) {
                for (var E = 0; E < u; ++E) o[x++] = t[y++], o[x++] = t[y++], o[w++] = t[y++], o[w++] = t[y++];
                y += m, x += g, w += g
            }
            if (a) {
                y = v + 4 * (l - 1);
                var C = d + r - 1;
                for (m = 4 * l, g = 2 * r, b = 0; b < c; ++b) o[C] = t[y], o[C + r] = t[y + 2], y += m, C += g
            }
            if (s) {
                for (y = v + 4 * (h - l), C = d + (n - 1) * r, E = 0; E < u; ++E) o[C++] = t[y++], o[C++] = t[y++], y += 2;
                a && (o[d + n * r - 1] = t[y])
            }
        }
        return o
    }

    function Ar(t, e, n) {
        var r = n();
        return e && function (t) {
            var e = t.getError();
            if (e !== t.NO_ERROR) throw new Error("WebGL Error: " + Mr(t, e))
        }(t), r
    }(Cr = wr || (wr = {}))[Cr.RENDER = 0] = "RENDER", Cr[Cr.UPLOAD = 1] = "UPLOAD", Cr[Cr.PIXELS = 2] = "PIXELS", Cr[Cr.DOWNLOAD = 3] = "DOWNLOAD", (Er = br || (br = {}))[Er.UNPACKED_FLOAT16 = 0] = "UNPACKED_FLOAT16", Er[Er.UNPACKED_FLOAT32 = 1] = "UNPACKED_FLOAT32", Er[Er.PACKED_4X1_UNSIGNED_BYTE = 2] = "PACKED_4X1_UNSIGNED_BYTE", Er[Er.PACKED_2X2_FLOAT32 = 3] = "PACKED_2X2_FLOAT32", Er[Er.PACKED_2X2_FLOAT16 = 4] = "PACKED_2X2_FLOAT16";

    function Dr(t) {
        return !!(Zt.get("WEBGL_RENDER_FLOAT32_ENABLED") || 0 === t || 5.96e-8 < Math.abs(t) && Math.abs(t) < 65504)
    }

    function Mr(t, e) {
        switch (e) {
            case t.NO_ERROR:
                return "NO_ERROR";
            case t.INVALID_ENUM:
                return "INVALID_ENUM";
            case t.INVALID_VALUE:
                return "INVALID_VALUE";
            case t.INVALID_OPERATION:
                return "INVALID_OPERATION";
            case t.INVALID_FRAMEBUFFER_OPERATION:
                return "INVALID_FRAMEBUFFER_OPERATION";
            case t.OUT_OF_MEMORY:
                return "OUT_OF_MEMORY";
            case t.CONTEXT_LOST_WEBGL:
                return "CONTEXT_LOST_WEBGL";
            default:
                return "Unknown error code " + e
        }
    }

    function Or(t, e, n) {
        return no(t, e, function () {
            return t.getExtension(n)
        }, 'Extension "' + n + '" not supported on this browser.')
    }

    function Pr(t, e, n) {
        var r = no(t, e, function () {
            return t.createShader(t.VERTEX_SHADER)
        }, "Unable to create vertex WebGLShader.");
        if (Ar(t, e, function () {
                return t.shaderSource(r, n)
            }), Ar(t, e, function () {
                return t.compileShader(r)
            }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw console.log(t.getShaderInfoLog(r)), new Error("Failed to compile vertex shader.");
        return r
    }

    function Fr(t, e, n) {
        var r = no(t, e, function () {
            return t.createShader(t.FRAGMENT_SHADER)
        }, "Unable to create fragment WebGLShader.");
        if (Ar(t, e, function () {
                return t.shaderSource(r, n)
            }), Ar(t, e, function () {
                return t.compileShader(r)
            }), !1 === t.getShaderParameter(r, t.COMPILE_STATUS)) throw function (t, e) {
            var n = Lr.exec(e);
            if (null == n) return console.log("Couldn't parse line number in error: " + e), console.log(t);
            for (var r = +n[1], o = t.split("\n"), i = o.length.toString().length + 2, a = o.map(function (t, e) {
                    return C((e + 1).toString(), i) + t
                }), s = 0, u = 0; u < a.length; u++) s = Math.max(a[u].length, s);
            var c = a.slice(0, r - 1),
                l = a.slice(r - 1, r),
                h = a.slice(r);
            console.log(c.join("\n")), console.log(e.split("\n")[0]), console.log("%c " + C(l[0], s), "border:1px solid red; background-color:#e3d2d2; color:#a61717"), console.log(h.join("\n"))
        }(n, t.getShaderInfoLog(r)), new Error("Failed to compile fragment shader.");
        return r
    }
    var Lr = /ERROR: [0-9]+:([0-9]+):/g;

    function Br(t, e) {
        return no(t, e, function () {
            return t.createProgram()
        }, "Unable to create WebGLProgram.")
    }

    function Wr(t, e, n) {
        if (Ar(t, e, function () {
                return t.linkProgram(n)
            }), !1 === t.getProgramParameter(n, t.LINK_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Failed to link vertex and fragment shaders.")
    }

    function zr(t, e, n) {
        if (Ar(t, e, function () {
                return t.validateProgram(n)
            }), !1 === t.getProgramParameter(n, t.VALIDATE_STATUS)) throw console.log(t.getProgramInfoLog(n)), new Error("Shader program validation failed.")
    }

    function Ur(t, e, n) {
        var r = no(t, e, function () {
            return t.createBuffer()
        }, "Unable to create WebGLBuffer");
        return Ar(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, r)
        }), Ar(t, e, function () {
            return t.bufferData(t.ARRAY_BUFFER, n, t.STATIC_DRAW)
        }), r
    }

    function Gr(t, e, n) {
        var r = no(t, e, function () {
            return t.createBuffer()
        }, "Unable to create WebGLBuffer");
        return Ar(t, e, function () {
            return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, r)
        }), Ar(t, e, function () {
            return t.bufferData(t.ELEMENT_ARRAY_BUFFER, n, t.STATIC_DRAW)
        }), r
    }

    function Vr() {
        return 2 === Zt.get("WEBGL_VERSION") ? 1 : 4
    }

    function Hr(t, e) {
        return no(t, e, function () {
            return t.createTexture()
        }, "Unable to create WebGLTexture.")
    }

    function qr(t, e) {
        var n = Zt.get("WEBGL_MAX_TEXTURE_SIZE");
        if (t <= 0 || e <= 0) {
            var r = "[" + t + "x" + e + "]";
            throw new Error("Requested texture size " + r + " is invalid.")
        }
        if (n < t || n < e) throw r = "[" + t + "x" + e + "]", new Error("Requested texture size " + r + " greater than WebGL maximum on this browser / GPU [" + n + "x" + n + "].")
    }

    function jr(t, e) {
        return no(t, e, function () {
            return t.createFramebuffer()
        }, "Unable to create WebGLFramebuffer.")
    }

    function $r(t, e, n, r, o, i, a, s) {
        var u = t.getAttribLocation(n, r);
        return -1 !== u && (Ar(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, o)
        }), Ar(t, e, function () {
            return t.vertexAttribPointer(u, i, t.FLOAT, !1, a, s)
        }), Ar(t, e, function () {
            return t.enableVertexAttribArray(u)
        }), !0)
    }

    function Kr(t, e, n, r) {
        ro(t, r), Ar(t, e, function () {
            return t.activeTexture(t.TEXTURE0 + r)
        }), Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        })
    }

    function Xr(t, e, n, r) {
        return no(t, e, function () {
            return t.getUniformLocation(n, r)
        }, 'uniform "' + r + '" not present in program.')
    }

    function Yr(t, e, n) {
        return t.getUniformLocation(e, n)
    }

    function Qr(t, e, n, r, o, i) {
        Ar(t, e, function () {
            return Kr(t, e, r, i)
        }), Ar(t, e, function () {
            return t.uniform1i(o, i)
        })
    }

    function Jr(t, e, n, r) {
        Ar(t, e, function () {
            return t.bindFramebuffer(t.FRAMEBUFFER, r)
        }), Ar(t, e, function () {
            return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n, 0)
        })
    }

    function Zr(t, e, n) {
        Ar(t, e, function () {
            return t.bindFramebuffer(t.FRAMEBUFFER, n)
        }), Ar(t, e, function () {
            return t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0)
        })
    }

    function to(t) {
        var e = t.checkFramebufferStatus(t.FRAMEBUFFER);
        if (e !== t.FRAMEBUFFER_COMPLETE) throw new Error("Error binding framebuffer: " + eo(t, e))
    }

    function eo(t, e) {
        switch (e) {
            case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_ATTACHMENT";
            case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                return "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";
            case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                return "FRAMEBUFFER_INCOMPLETE_DIMENSIONS";
            case t.FRAMEBUFFER_UNSUPPORTED:
                return "FRAMEBUFFER_UNSUPPORTED";
            default:
                return "unknown error " + e
        }
    }

    function no(t, e, n, r) {
        var o = Ar(t, e, function () {
            return n()
        });
        if (null == o) throw new Error(r);
        return o
    }

    function ro(t, e) {
        var n = t.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1,
            r = e + t.TEXTURE0;
        if (r < t.TEXTURE0 || n < r) throw new Error("textureUnit must be in [gl.TEXTURE0, gl.TEXTURE" + n + "].")
    }

    function oo(t, e) {
        return void 0 === e && (e = 2), B(t.slice(0, t.length - e))
    }

    function io(t) {
        if (0 === t.length) throw Error("Cannot get rows and columns of an empty shape array.");
        return [1 < t.length ? t[t.length - 2] : 1, t[t.length - 1]]
    }

    function ao(n, t) {
        var e;
        void 0 === t && (t = !1);
        var r = Zt.get("WEBGL_MAX_TEXTURE_SIZE");
        if (t && (r *= 2, 1 === (n = n.map(function (t, e) {
                return e >= n.length - 2 ? _(n[e]) : n[e]
            })).length && (n = [2, n[0]])), 2 !== n.length) {
            var o = I(n);
            n = o.newShape
        }
        var i = B(n);
        if (n.length <= 1 && i <= r) return [1, i];
        if (2 === n.length && n[0] <= r && n[1] <= r) return n;
        if (3 === n.length && n[0] * n[1] <= r && n[2] <= r) return [n[0] * n[1], n[2]];
        if (3 === n.length && n[0] <= r && n[1] * n[2] <= r) return [n[0], n[1] * n[2]];
        if (4 === n.length && n[0] * n[1] * n[2] <= r && n[3] <= r) return [n[0] * n[1] * n[2], n[3]];
        if (4 === n.length && n[0] <= r && n[1] * n[2] * n[3] <= r) return [n[0], n[1] * n[2] * n[3]];
        if (t) {
            var a = oo(n),
                s = 2,
                u = 2;
            return n.length && (s = (e = io(n))[0], u = e[1]), b(i = a * (s / 2) * (u / 2)).map(function (t) {
                return 2 * t
            })
        }
        return b(i)
    }

    function so(t) {
        return t % 2 == 0
    }

    function uo(t, e) {
        if (E(t = t.slice(-2), e = e.slice(-2))) return !0;
        if (!t.length || !e.length) return !0;
        if (0 === t[0] || 0 === t[1] || 0 === e[0] || 0 === e[1]) return !0;
        if (t.length !== e.length) {
            var n = t.slice(-1)[0],
                r = e.slice(-1)[0];
            if (n === r) return !0;
            if (so(n) && so(r) && (1 === t[0] || 1 === e[0])) return !0
        }
        return t[1] === e[1] && so(t[0]) && so(e[0])
    }
    var co = Object.freeze({
        callAndCheck: Ar,
        canBeRepresented: Dr,
        getWebGLErrorMessage: Mr,
        getExtensionOrThrow: Or,
        createVertexShader: Pr,
        createFragmentShader: Fr,
        createProgram: Br,
        linkProgram: Wr,
        validateProgram: zr,
        createStaticVertexBuffer: Ur,
        createStaticIndexBuffer: Gr,
        getNumChannels: Vr,
        createTexture: Hr,
        validateTextureSize: qr,
        createFramebuffer: jr,
        bindVertexBufferToProgramAttribute: $r,
        bindTextureUnit: Kr,
        unbindTextureUnit: function (t, e, n) {
            ro(t, n), Ar(t, e, function () {
                return t.activeTexture(t.TEXTURE0 + n)
            }), Ar(t, e, function () {
                return t.bindTexture(t.TEXTURE_2D, null)
            })
        },
        getProgramUniformLocationOrThrow: Xr,
        getProgramUniformLocation: Yr,
        bindTextureToProgramUniformSampler: Qr,
        bindCanvasToFramebuffer: function (t, e) {
            Ar(t, e, function () {
                return t.bindFramebuffer(t.FRAMEBUFFER, null)
            }), Ar(t, e, function () {
                return t.viewport(0, 0, t.canvas.width, t.canvas.height)
            }), Ar(t, e, function () {
                return t.scissor(0, 0, t.canvas.width, t.canvas.height)
            })
        },
        bindColorTextureToFramebuffer: Jr,
        unbindColorTextureFromFramebuffer: Zr,
        validateFramebuffer: to,
        getFramebufferErrorMessage: eo,
        getBatchDim: oo,
        getRowsCols: io,
        getTextureShapeFromLogicalShape: ao,
        isReshapeFree: uo
    });

    function lo(t, e) {
        var n = wn();
        return Pr(t, e, n.version + "\n    precision highp float;\n    " + n.attribute + " vec3 clipSpacePos;\n    " + n.attribute + " vec2 uv;\n    " + n.varyingVs + " vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }")
    }

    function ho(t, e) {
        return Ur(t, e, new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]))
    }

    function po(t, e) {
        return Gr(t, e, new Uint16Array([0, 1, 2, 2, 1, 3]))
    }

    function fo(t, e) {
        var n, r, o, i, a, s, u, c, l = t;
        return c = 2 === Zt.get("WEBGL_VERSION") ? (n = l.R32F, r = l.R16F, o = l.RGBA16F, i = l.RGBA32F, a = l.RED, s = 4, u = 1, l.HALF_FLOAT) : (n = t.RGBA, r = t.RGBA, o = t.RGBA, i = l.RGBA, a = t.RGBA, u = s = 4, null != e ? e.HALF_FLOAT_OES : null), {
            internalFormatFloat: n,
            internalFormatHalfFloat: r,
            internalFormatPackedHalfFloat: o,
            internalFormatPackedFloat: i,
            textureFormatFloat: a,
            downloadTextureFormat: t.RGBA,
            downloadUnpackNumChannels: s,
            defaultNumChannels: u,
            textureTypeHalfFloat: c
        }
    }

    function vo(t, e, n, r, o, i, a) {
        qr(n, r);
        var s = Hr(t, e),
            u = t.TEXTURE_2D;
        return Ar(t, e, function () {
            return t.bindTexture(u, s)
        }), Ar(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE)
        }), Ar(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
        }), Ar(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_MIN_FILTER, t.NEAREST)
        }), Ar(t, e, function () {
            return t.texParameteri(u, t.TEXTURE_MAG_FILTER, t.NEAREST)
        }), Ar(t, e, function () {
            return t.texImage2D(u, 0, o, n, r, 0, i, a, null)
        }), Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        }), s
    }

    function mo(t, e, n, r, o) {
        var i = Sr(n, r);
        return vo(t, e, i[0], i[1], o.internalFormatFloat, o.textureFormatFloat, t.FLOAT)
    }

    function go(t, e, n, r, o) {
        var i = Sr(n, r);
        return vo(t, e, i[0], i[1], o.internalFormatHalfFloat, o.textureFormatFloat, o.textureTypeHalfFloat)
    }

    function yo(t, e, n, r, o) {
        var i = Sr(n, r);
        return vo(t, e, i[0], i[1], t.RGBA, t.RGBA, t.UNSIGNED_BYTE)
    }

    function xo(t, e, n, r, o) {
        var i = kr(n, r);
        return vo(t, e, i[0], i[1], o.internalFormatPackedFloat, t.RGBA, t.FLOAT)
    }

    function wo(t, e, n, r, o) {
        var i = kr(n, r);
        return vo(t, e, i[0], i[1], o.internalFormatPackedHalfFloat, t.RGBA, o.textureTypeHalfFloat)
    }

    function bo(t, e, n, r) {
        return Ar(t, e, function () {
            return t.bindBuffer(t.ARRAY_BUFFER, r)
        }), $r(t, e, n, "clipSpacePos", r, 3, 20, 0) && $r(t, e, n, "uv", r, 2, 20, 12)
    }

    function Eo(t, e, n, r) {
        Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        }), Ar(t, e, function () {
            return t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, r)
        }), Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        })
    }

    function Co(t, e, n, r, o, i, a) {
        qr(r, o), Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, n)
        }), Ar(t, e, function () {
            return t.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, r, o, a, t.FLOAT, i)
        }), Ar(t, e, function () {
            return t.bindTexture(t.TEXTURE_2D, null)
        })
    }

    function _o(t, e, n, r, o, i, a, s) {
        var u, c = Sr(r, o),
            l = c[0],
            h = c[1],
            p = r * o;
        1 === s.defaultNumChannels && p === i.length ? u = i : function (t, e, n) {
            var r = Rr(t.length, n);
            if (e.length < r) throw new Error("unpackedArray length (" + e.length + ") must be >= " + r);
            for (var o = 0, i = 0; i < t.length; ++i) e[o] = t[i], o += n
        }(i, u = new Float32Array(p * a), a), Co(t, e, n, l, h, u, s.textureFormatFloat)
    }

    function So(t, e, n, r, o, i, a, s, u, c) {
        var l = kr(a, s),
            h = l[0],
            p = l[1],
            f = new Float32Array(Ir(a, s));
        (function (t, e, n, r, o) {
            for (var i = r % 2 == 1, a = n % 2 == 1, s = Math.floor(r / 2), u = Math.floor(n / 2), c = Math.ceil(r / 2), l = c * Math.ceil(n / 2), h = _(n) * _(r), p = 0; p < e; p++) {
                for (var f = p * n * r, d = p * h, v = i ? 4 : 0, m = r, g = d, y = 0; y < u; ++y) {
                    for (var x = 2 * y * r, w = 0; w < s; ++w) {
                        var b = f + x + 2 * w;
                        o[g] = t[b], o[g + 1] = t[b + 1], o[g + 2] = t[b + m], o[g + 3] = t[b + m + 1], g += 4
                    }
                    g += v
                }
                if (i) {
                    b = f + r - 1, g = d + 4 * (c - 1);
                    var E = 2 * r;
                    for (v = 4 * c, y = 0; y < u; ++y) o[g] = t[b], o[g + 2] = t[b + r], b += E, g += v
                }
                if (a) {
                    for (b = f + (n - 1) * r, g = d + 4 * (l - c), w = 0; w < s; ++w) o[g++] = t[b++], o[g++] = t[b++], g += 2;
                    i && a && (o[d + h - 4] = t[b])
                }
            }
        })(u, r, o, i, f), Co(t, e, n, h, p, f, t.RGBA)
    }

    function Ro(t, e, n, r, o, i) {
        var a = n;
        if (2 === Zt.get("WEBGL_VERSION")) {
            var s = t,
                u = s.createBuffer();
            Ar(t, e, function () {
                return t.bindBuffer(s.PIXEL_PACK_BUFFER, u)
            });
            var c = 4 * Rr(r * o, i.downloadUnpackNumChannels);
            Ar(t, e, function () {
                return t.bufferData(s.PIXEL_PACK_BUFFER, c, s.STREAM_READ)
            }), Ar(t, e, function () {
                return s.readPixels(0, 0, o, r, t.RGBA, t.FLOAT, 0)
            }), Ar(t, e, function () {
                return t.bindBuffer(s.PIXEL_PACK_BUFFER, null)
            }), a = u
        }
        return a
    }

    function No(t, e, n, r, o) {
        var i = t,
            a = new Float32Array(Rr(n * r, o.downloadUnpackNumChannels));
        i.bindBuffer(i.PIXEL_PACK_BUFFER, e), i.getBufferSubData(i.PIXEL_PACK_BUFFER, 0, a), i.bindBuffer(i.PIXEL_PACK_BUFFER, null);
        var s = new Float32Array(n * r);
        return Nr(a, s, o.downloadUnpackNumChannels), s
    }

    function ko(t, e, n, r, o) {
        var i = Sr(n, r),
            a = i[0],
            s = i[1],
            u = new Float32Array(Rr(n * r, o.downloadUnpackNumChannels));
        Ar(t, e, function () {
            return t.readPixels(0, 0, a, s, o.downloadTextureFormat, t.FLOAT, u)
        });
        var c = new Float32Array(n * r);
        return Nr(u, c, o.downloadUnpackNumChannels), c
    }

    function Io(t, e, n, r, o) {
        var i = Sr(n, r),
            a = i[0],
            s = i[1],
            u = new Uint8Array(Rr(n * r, 4));
        return Ar(t, e, function () {
            return t.readPixels(0, 0, a, s, o.downloadTextureFormat, t.UNSIGNED_BYTE, u)
        }), new Float32Array(u.buffer)
    }

    function To(t, e, n, r, o, i, a, s) {
        var u = t,
            c = new Float32Array(Ir(i, a));
        u.bindBuffer(u.PIXEL_PACK_BUFFER, e), u.getBufferSubData(u.PIXEL_PACK_BUFFER, 0, c), u.bindBuffer(u.PIXEL_PACK_BUFFER, null);
        var l = new Float32Array(B([n, r, o]));
        return Tr(c, n, r, o, l), l
    }

    function Ao(t, e, n, r, o, i, a, s) {
        var u = kr(i, a),
            c = u[0],
            l = u[1],
            h = new Float32Array(Ir(i, a));
        Ar(t, e, function () {
            return t.readPixels(0, 0, c, l, t.RGBA, t.FLOAT, h)
        });
        var p = new Float32Array(B([n, r, o]));
        return Tr(h, n, r, o, p)
    }
    var Do = Object.freeze({
            createVertexShader: lo,
            createVertexBuffer: ho,
            createIndexBuffer: po,
            getTextureConfig: fo,
            createFloat32MatrixTexture: mo,
            createFloat16MatrixTexture: go,
            createUnsignedBytesMatrixTexture: yo,
            createPackedMatrixTexture: xo,
            createFloat16PackedMatrixTexture: wo,
            bindVertexProgramAttributeStreams: bo,
            uploadPixelDataToTexture: Eo,
            uploadMatrixToTexture: _o,
            uploadMatrixToPackedTexture: So,
            maybeCreateBufferFromOutputTexture: Ro,
            downloadFloat32MatrixFromBuffer: No,
            downloadFloat32MatrixFromOutputTexture: ko,
            downloadByteEncodedFloatMatrixFromOutputTexture: Io,
            downloadPackedMatrixFromBuffer: To,
            downloadMatrixFromPackedOutputTexture: Ao
        }),
        Mo = function () {
            function t(t) {
                this.outputTexture = null, this.program = null, this.disposed = !1, this.vertexAttrsAreBound = !1, this.itemsToPoll = [];
                var e, n = Zt.get("WEBGL_VERSION");
                null != t ? (this.gl = t, e = t, i[n] = e) : this.gl = l(n), 1 === Zt.get("WEBGL_VERSION") ? (this.textureFloatExtension = Or(this.gl, this.debug, "OES_texture_float"), this.colorBufferFloatExtension = this.gl.getExtension("WEBGL_color_buffer_float"), Zt.get("WEBGL_RENDER_FLOAT32_ENABLED") || (this.textureHalfFloatExtension = Or(this.gl, this.debug, "OES_texture_half_float"), this.colorBufferHalfFloatExtension = this.gl.getExtension("EXT_color_buffer_half_float"))) : this.colorBufferFloatExtension = Or(this.gl, this.debug, "EXT_color_buffer_float"), this.vertexBuffer = ho(this.gl, this.debug), this.indexBuffer = po(this.gl, this.debug), this.framebuffer = jr(this.gl, this.debug), this.textureConfig = fo(this.gl, this.textureHalfFloatExtension)
            }
            return Object.defineProperty(t.prototype, "debug", {
                get: function () {
                    return Zt.get("DEBUG")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.dispose = function () {
                var t = this;
                if (!this.disposed) {
                    null != this.program && console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."), null != this.outputTexture && console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");
                    var e = this.gl;
                    Ar(e, this.debug, function () {
                        return e.finish()
                    }), Ar(e, this.debug, function () {
                        return e.bindFramebuffer(e.FRAMEBUFFER, null)
                    }), Ar(e, this.debug, function () {
                        return e.deleteFramebuffer(t.framebuffer)
                    }), Ar(e, this.debug, function () {
                        return e.bindBuffer(e.ARRAY_BUFFER, null)
                    }), Ar(e, this.debug, function () {
                        return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null)
                    }), Ar(e, this.debug, function () {
                        return e.deleteBuffer(t.indexBuffer)
                    }), this.disposed = !0
                }
            }, t.prototype.createFloat32MatrixTexture = function (t, e) {
                return this.throwIfDisposed(), mo(this.gl, this.debug, t, e, this.textureConfig)
            }, t.prototype.createFloat16MatrixTexture = function (t, e) {
                return this.throwIfDisposed(), go(this.gl, this.debug, t, e, this.textureConfig)
            }, t.prototype.createUnsignedBytesMatrixTexture = function (t, e) {
                return this.throwIfDisposed(), yo(this.gl, this.debug, t, e, this.textureConfig)
            }, t.prototype.uploadPixelDataToTexture = function (t, e) {
                this.throwIfDisposed(), Eo(this.gl, this.debug, t, e)
            }, t.prototype.createFloat16PackedMatrixTexture = function (t, e) {
                return this.throwIfDisposed(), wo(this.gl, this.debug, t, e, this.textureConfig)
            }, t.prototype.createPackedMatrixTexture = function (t, e) {
                return this.throwIfDisposed(), xo(this.gl, this.debug, t, e, this.textureConfig)
            }, t.prototype.deleteMatrixTexture = function (t) {
                var e = this;
                this.throwIfDisposed(), this.outputTexture === t && (Zr(this.gl, this.debug, this.framebuffer), this.outputTexture = null), Ar(this.gl, this.debug, function () {
                    return e.gl.deleteTexture(t)
                })
            }, t.prototype.uploadMatrixToTexture = function (t, e, n, r) {
                this.throwIfDisposed();
                var o = Vr();
                return _o(this.gl, this.debug, t, e, n, r, o, this.textureConfig)
            }, t.prototype.uploadMatrixToPackedTexture = function (t, e, n, r, o, i, a) {
                return this.throwIfDisposed(), So(this.gl, this.debug, t, e, n, r, o, i, a, this.textureConfig)
            }, t.prototype.downloadFloat32MatrixFromOutputTexture = function (t, e, n) {
                var r = this;
                return this.downloadMatrixDriver(t, function () {
                    return ko(r.gl, r.debug, e, n, r.textureConfig)
                })
            }, t.prototype.downloadByteEncodedFloatMatrixFromOutputTexture = function (t, e, n) {
                var r = this;
                return this.downloadMatrixDriver(t, function () {
                    return Io(r.gl, r.debug, e, n, r.textureConfig)
                })
            }, t.prototype.downloadPackedMatrixFromBuffer = function (t, e, n, r, o, i) {
                return To(this.gl, t, e, n, r, o, i, this.textureConfig)
            }, t.prototype.downloadFloat32MatrixFromBuffer = function (t, e, n) {
                return No(this.gl, t, e, n, this.textureConfig)
            }, t.prototype.maybeCreateBufferFromTexture = function (t, e, n) {
                this.bindTextureToFrameBuffer(t);
                var r = Ro(this.gl, this.debug, t, e, n, this.textureConfig);
                return this.unbindTextureToFrameBuffer(), r
            }, t.prototype.createAndWaitForFence = function () {
                var t = this.createFence(this.gl);
                return this.pollFence(t)
            }, t.prototype.createFence = function (t) {
                var e, n, r = this;
                if (Zt.get("WEBGL_FENCE_API_ENABLED")) {
                    var o = t,
                        i = o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    t.flush(), n = function () {
                        var t = o.clientWaitSync(i, 0, 0);
                        return t === o.ALREADY_SIGNALED || t === o.CONDITION_SATISFIED
                    }, e = i
                } else n = 0 < Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? (e = this.beginQuery(), this.endQuery(), function () {
                    return r.isQueryAvailable(e, Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                }) : function () {
                    return !0
                };
                return {
                    query: e,
                    isFencePassed: n
                }
            }, t.prototype.downloadMatrixFromPackedTexture = function (t, e, n, r, o, i) {
                var a = this;
                return this.downloadMatrixDriver(t, function () {
                    return Ao(a.gl, a.debug, e, n, r, o, i, a.textureConfig)
                })
            }, t.prototype.createProgram = function (t) {
                this.throwIfDisposed();
                var e = this.gl,
                    n = Fr(e, this.debug, t),
                    r = lo(e, this.debug),
                    o = Br(e, this.debug);
                return Ar(e, this.debug, function () {
                    return e.attachShader(o, r)
                }), Ar(e, this.debug, function () {
                    return e.attachShader(o, n)
                }), Wr(e, this.debug, o), this.debug && zr(e, this.debug, o), this.vertexAttrsAreBound || (this.setProgram(o), this.vertexAttrsAreBound = bo(e, this.debug, this.program, this.vertexBuffer)), o
            }, t.prototype.deleteProgram = function (t) {
                var e = this;
                this.throwIfDisposed(), t === this.program && (this.program = null), null != t && Ar(this.gl, this.debug, function () {
                    return e.gl.deleteProgram(t)
                })
            }, t.prototype.setProgram = function (t) {
                var e = this;
                this.throwIfDisposed(), this.program = t, null != this.program && this.debug && zr(this.gl, this.debug, this.program), Ar(this.gl, this.debug, function () {
                    return e.gl.useProgram(t)
                })
            }, t.prototype.getUniformLocation = function (t, e, n) {
                return void 0 === n && (n = !0), this.throwIfDisposed(), n ? Xr(this.gl, this.debug, t, e) : Yr(this.gl, t, e)
            }, t.prototype.getAttributeLocation = function (t, e) {
                var n = this;
                return this.throwIfDisposed(), Ar(this.gl, this.debug, function () {
                    return n.gl.getAttribLocation(t, e)
                })
            }, t.prototype.getUniformLocationNoThrow = function (t, e) {
                return this.throwIfDisposed(), this.gl.getUniformLocation(t, e)
            }, t.prototype.setInputMatrixTexture = function (t, e, n) {
                this.throwIfDisposed(), this.throwIfNoProgram(), Qr(this.gl, this.debug, this.program, t, e, n)
            }, t.prototype.setOutputMatrixTexture = function (t, e, n) {
                this.setOutputMatrixTextureDriver(t, n, e)
            }, t.prototype.setOutputPackedMatrixTexture = function (t, e, n) {
                this.throwIfDisposed();
                var r = kr(e, n),
                    o = r[0],
                    i = r[1];
                this.setOutputMatrixTextureDriver(t, o, i)
            }, t.prototype.setOutputMatrixWriteRegion = function (t, e, n, r) {
                this.setOutputMatrixWriteRegionDriver(n, t, r, e)
            }, t.prototype.setOutputPackedMatrixWriteRegion = function (t, e, n, r) {
                throw new Error("setOutputPackedMatrixWriteRegion not implemented.")
            }, t.prototype.debugValidate = function () {
                null != this.program && zr(this.gl, this.debug, this.program), to(this.gl)
            }, t.prototype.executeProgram = function () {
                this.throwIfDisposed(), this.throwIfNoProgram();
                var t = this.gl;
                this.debug && this.debugValidate(), Ar(t, this.debug, function () {
                    return t.drawElements(t.TRIANGLES, 6, t.UNSIGNED_SHORT, 0)
                })
            }, t.prototype.blockUntilAllProgramsCompleted = function () {
                var t = this;
                this.throwIfDisposed(), Ar(this.gl, this.debug, function () {
                    return t.gl.finish()
                })
            }, t.prototype.getQueryTimerExtension = function () {
                return null == this.disjointQueryTimerExtension && (this.disjointQueryTimerExtension = Or(this.gl, this.debug, 2 === Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? "EXT_disjoint_timer_query_webgl2" : "EXT_disjoint_timer_query")), this.disjointQueryTimerExtension
            }, t.prototype.getQueryTimerExtensionWebGL2 = function () {
                return this.getQueryTimerExtension()
            }, t.prototype.getQueryTimerExtensionWebGL1 = function () {
                return this.getQueryTimerExtension()
            }, t.prototype.beginQuery = function () {
                if (2 === Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                    var t = this.gl,
                        e = this.getQueryTimerExtensionWebGL2(),
                        n = t.createQuery();
                    return t.beginQuery(e.TIME_ELAPSED_EXT, n), n
                }
                var r = this.getQueryTimerExtensionWebGL1(),
                    o = r.createQueryEXT();
                return r.beginQueryEXT(r.TIME_ELAPSED_EXT, o), o
            }, t.prototype.endQuery = function () {
                if (2 !== Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")) {
                    var t = this.getQueryTimerExtensionWebGL1();
                    t.endQueryEXT(t.TIME_ELAPSED_EXT)
                } else {
                    var e = this.gl,
                        n = this.getQueryTimerExtensionWebGL2();
                    e.endQuery(n.TIME_ELAPSED_EXT)
                }
            }, t.prototype.waitForQueryAndGetTime = function (n) {
                return m(this, void 0, void 0, function () {
                    var e = this;
                    return R(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, S(function () {
                                    return e.disposed || e.isQueryAvailable(n, Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))
                                })];
                            case 1:
                                return t.sent(), [2, this.getQueryTime(n, Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]
                        }
                    })
                })
            }, t.prototype.getQueryTime = function (t, e) {
                if (0 === e) return null;
                if (2 === e) {
                    var n = this.gl;
                    return n.getQueryParameter(t, n.QUERY_RESULT) / 1e6
                }
                var r = this.getQueryTimerExtensionWebGL1();
                return r.getQueryObjectEXT(t, r.QUERY_RESULT_EXT) / 1e6
            }, t.prototype.isQueryAvailable = function (t, e) {
                if (0 === e) return !0;
                if (2 !== e) return o = (r = this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t, r.QUERY_RESULT_AVAILABLE_EXT), null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)), o && !this.disjoint;
                var n = this.gl,
                    r = this.getQueryTimerExtensionWebGL2(),
                    o = n.getQueryParameter(t, n.QUERY_RESULT_AVAILABLE);
                return null == this.disjoint && (this.disjoint = this.gl.getParameter(r.GPU_DISJOINT_EXT)), o && !this.disjoint
            }, t.prototype.pollFence = function (e) {
                var n = this;
                return new Promise(function (t) {
                    n.addItemToPoll(function () {
                        return e.isFencePassed()
                    }, function () {
                        return t()
                    })
                })
            }, t.prototype.pollItems = function () {
                for (var t = function (t) {
                        for (var e = 0; e < t.length && t[e](); ++e);
                        return e - 1
                    }(this.itemsToPoll.map(function (t) {
                        return t.isDoneFn
                    })), e = 0; e <= t; ++e)(0, this.itemsToPoll[e].resolveFn)();
                this.itemsToPoll = this.itemsToPoll.slice(t + 1)
            }, t.prototype.addItemToPoll = function (t, e) {
                var n = this;
                this.itemsToPoll.push({
                    isDoneFn: t,
                    resolveFn: e
                }), 1 < this.itemsToPoll.length || S(function () {
                    return n.pollItems(), 0 === n.itemsToPoll.length
                })
            }, t.prototype.bindTextureToFrameBuffer = function (t) {
                this.throwIfDisposed(), Jr(this.gl, this.debug, t, this.framebuffer), this.debug && to(this.gl)
            }, t.prototype.unbindTextureToFrameBuffer = function () {
                null != this.outputTexture ? (Jr(this.gl, this.debug, this.outputTexture, this.framebuffer), this.debug && to(this.gl)) : Zr(this.gl, this.debug, this.framebuffer)
            }, t.prototype.downloadMatrixDriver = function (t, e) {
                this.bindTextureToFrameBuffer(t);
                var n = e();
                return this.unbindTextureToFrameBuffer(), n
            }, t.prototype.setOutputMatrixTextureDriver = function (t, e, n) {
                this.throwIfDisposed();
                var r = this.gl;
                Jr(r, this.debug, t, this.framebuffer), this.debug && to(r), this.outputTexture = t, Ar(r, this.debug, function () {
                    return r.viewport(0, 0, e, n)
                }), Ar(r, this.debug, function () {
                    return r.scissor(0, 0, e, n)
                })
            }, t.prototype.setOutputMatrixWriteRegionDriver = function (t, e, n, r) {
                var o = this;
                this.throwIfDisposed(), Ar(this.gl, this.debug, function () {
                    return o.gl.scissor(t, e, n, r)
                })
            }, t.prototype.throwIfDisposed = function () {
                if (this.disposed) throw new Error("Attempted to use disposed GPGPUContext.")
            }, t.prototype.throwIfNoProgram = function () {
                if (null == this.program) throw new Error("No GPU program is currently set.")
            }, t
        }();

    function Oo(t, s) {
        if (t.length !== s.length) throw Error("Binary was compiled with " + t.length + " inputs, but was executed with " + s.length + " inputs");
        t.forEach(function (t, e) {
            var n = t.logicalShape,
                r = s[e],
                o = r.shape;
            if (!E(n, o)) throw Error("Binary was compiled with different shapes than the current args. Shapes " + n + " and " + o + " must match");
            if (!t.isUniform || !r.isUniform) {
                var i = t.texShape,
                    a = r.isUniform ? null : r.texData.texShape;
                if (!E(i, a)) throw Error("Binary was compiled with different texture shapes than the current args. Shape " + i + " and " + a + " must match")
            }
        })
    }
    var Po = function (t, e, n) {
            this.variableNames = ["A"], this.usesPackedTextures = !0, this.outputShape = t;
            var r = n.filterWidth,
                o = n.inChannels,
                i = n.strideWidth,
                a = n.strideHeight,
                s = n.padInfo,
                u = n.outWidth,
                c = n.dilationWidth,
                l = n.dilationHeight,
                h = s.left,
                p = s.top,
                f = o * r,
                d = wn();
            this.userCode = "\n      void main() {\n        ivec2 rc = getOutputCoords();\n\n        vec4 result = vec4(0);\n\n        for(int row=0; row<=1; row++) {\n          for(int col=0; col<=1; col++) {\n            int blockIndex = rc.y + col;\n            int pos = rc.x + row;\n\n            if(blockIndex >= " + t[1] + " || pos >= " + t[0] + ") continue;\n\n            int offsetY = int(blockIndex / (" + u + ")) * " + a + " - " + p + ";\n            int d0 = offsetY + " + l + " * (pos / " + f + ");\n\n            if(d0 >= " + e[0] + " || d0 < 0) continue;\n\n            int offsetX = int(mod(float(blockIndex), " + u + ".) * " + i + ". - " + h + ".);\n            int d1 = offsetX + " + c + " * (int(mod(float(pos), " + f + ".) / " + o + ".));\n\n            if(d1 >= " + e[1] + " || d1 < 0) continue;\n\n            vec2 innerDims = vec2(d1, int(mod(float(pos), " + o + ".)));\n            result[row * 2 + col] = getChannel(getA(d0, int(innerDims.x),\n                                              int(innerDims.y)), innerDims);\n          }\n        }\n\n        " + d.output + " = result;\n      }\n    "
        },
        Fo = function (t, e, n, r, o) {
            this.variableNames = ["x"], this.outputShape = [];
            var i, a = e,
                s = t[3] - 1;
            this.outputShape = t;
            var u = "float(" + n + ") + float(" + r + ") * sum";
            i = .5 === o ? "inversesqrt(" + u + ")" : 1 === o ? "1.0/(" + u + ")" : "exp(log(" + u + ") * float(-" + o + "));", this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + a + "; j <= " + a + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + s + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + i + ";\n        setOutput(val);\n      }\n    "
        },
        Lo = function (t, e, n, r, o) {
            this.variableNames = ["inputImage", "outputImage", "dy"], this.outputShape = [], this.outputShape = t, this.depth = t[3], this.depthRadius = e, this.bias = n, this.alpha = r, this.beta = o, this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n\n        float result = 0.0;\n        for (int d = 0; d < " + this.depth + "; ++d) {\n          int depthBegin = int(max(0.0, float(d - " + e + ")));\n          int depthEnd = int(min(float(" + this.depth + "),\n              float(d + " + e + " + 1)));\n\n          const int MIN_DEPTH_BEGIN = 0;\n          const int MAX_DEPTH_END = " + this.depth + ";\n\n          float norm = 0.0;\n          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd) {\n              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);\n            }\n            else {\n              break;\n            }\n          }\n\n          norm = float(" + r + ") * norm + float(" + n + ");\n\n          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){\n            if (k < depthBegin){\n              continue;\n            }\n            else if (k >= depthBegin && k < depthEnd){\n              float dyi = -2.0 * float(" + r + ")\n                * float(" + o + ")\n                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)\n                / norm;\n              if (k == d) {\n                dyi += pow(norm, -1.0 * " + o + ");\n              }\n              if (k == coords[3]) {\n                dyi *= getDy(b, r, c, d);\n                result += dyi;\n              }\n            }\n            else {\n              break;\n            }\n          }\n      }\n      setOutput(result);\n      }\n    "
        },
        Bo = function (t) {
            this.variableNames = ["dy", "maxPos"], this.outputShape = t.inShape;
            var e = t.strideHeight,
                n = t.strideWidth,
                r = t.dilationHeight,
                o = t.effectiveFilterHeight,
                i = t.effectiveFilterWidth,
                a = o - 1 - t.padInfo.top,
                s = i - 1 - t.padInfo.left,
                u = o * i - 1;
            this.userCode = "\n      const ivec2 pads = ivec2(" + a + ", " + s + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + o + ";\n          wR += " + r + ") {\n          float dyR = float(dyRCorner + wR) / " + e + ".0;\n\n          if (dyR < 0.0 || dyR >= " + t.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + i + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + n + ".0;\n\n            if (dyC < 0.0 || dyC >= " + t.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + u + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + i + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    "
        },
        Wo = function (t, e, n, r, o, i) {
            void 0 === n && (n = !1), void 0 === r && (r = !1), void 0 === o && (o = !1), void 0 === i && (i = null), this.variableNames = ["matrixA", "matrixB"], this.usesPackedTextures = !0, this.outputShape = e;
            var a = n ? t[1] : t[2],
                s = Math.ceil(a / 2),
                u = n ? "i * 2, rc.y" : "rc.y, i * 2",
                c = r ? "rc.z, i * 2" : "i * 2, rc.z",
                l = n ? ["a.xxyy", "a.zzww"] : ["a.xxzz", "a.yyww"],
                h = r ? ["b.xzxz", "b.ywyw"] : ["b.xyxy", "b.zwzw"],
                p = "",
                f = "";
            i && (p = "vec4 activation(vec4 x) {\n        " + i + "\n      }", f = "result = activation(result);");
            var d = o ? "result += getBiasAtOutCoords();" : "";
            o && this.variableNames.push("bias"), this.userCode = "\n      " + p + "\n\n      const float sharedDimension = " + s + ".0;\n\n      vec4 dot2x2ARowBCol(ivec3 rc) {\n        vec4 result = vec4(0);\n        for (int i = 0; i < " + s + "; i++) {\n          vec4 a = getMatrixA(rc.x, " + u + ");\n          vec4 b = getMatrixB(rc.x, " + c + ");\n\n          result += (" + l[0] + " * " + h[0] + ") + (" + l[1] + " * " + h[1] + ");\n        }\n        return result;\n      }\n\n      void main() {\n        ivec3 rc = getOutputCoords();\n        vec4 result = dot2x2ARowBCol(rc);\n\n        " + d + "\n\n        " + f + "\n\n        setOutput(result);\n      }\n    "
        },
        zo = function () {
            function t(t, e, n) {
                this.variableNames = ["probs"], this.outputShape = [t, n], this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (e - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (e - 1) + "));\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n) {
                var r = this;
                return function (t, e) {
                    null == r.seedLoc && (r.seedLoc = t.getUniformLocation(e, "seed")), t.gl.uniform1f(r.seedLoc, n)
                }
            }, t
        }(),
        Uo = function (t, e, n, r) {
            this.variableNames = ["indices"], this.outputShape = [t, e], this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + r + "), float(" + n + "),\n                      float(index == coords.y)));\n      }\n    "
        },
        Go = function (t) {
            this.variableNames = ["A"], this.isPackShader = !0;
            var e, n, r, o, i = (this.outputShape = t).length;
            if (0 === i) this.userCode = "\n        void main() {\n          setOutput(vec4(getA(), 0., 0., 0.));\n        }\n      ";
            else {
                var a = mn("rc", i),
                    s = Dn(i),
                    u = function (t, e, n) {
                        if (1 === t) return "rc > " + e[0];
                        for (var r = "", o = t - 2; o < t; o++) r += n[o] + " >= " + e[o], o < t - 1 && (r += "||");
                        return r
                    }(i, t, a),
                    c = function (t, e, n, r) {
                        if (1 === t) return "";
                        var o = r.slice(-2);
                        return "\n    int r = " + o[0] + ";\n    int c = " + o[1] + ";\n    int rp1 = r + 1;\n    int cp1 = c + 1;\n\n    bool cEdge = cp1 >= " + e + ";\n    bool rEdge = rp1 >= " + n + ";\n  "
                    }(i, t[t.length - 1], t[t.length - 2], a),
                    l = (n = a, r = (e = t).length, o = function (t, e) {
                        for (var n = [], r = 0; r <= 1; r++)
                            for (var o = 0; o <= 1; o++) {
                                for (var i = (0 === r ? "r" : "rp1") + ", " + (0 === o ? "c" : "cp1"), a = 2; a < t; a++) i = e[e.length - 1 - a] + "," + i;
                                n.push(i)
                            }
                        return n
                    }(r, n), 1 === r ? "getA(rc),\n            rc + 1 >= " + e[0] + " ? 0. : getA(rc + 1),\n            0, 0" : "getA(" + o[0] + "),\n          cEdge ? 0. : getA(" + o[1] + "),\n          rEdge ? 0. : getA(" + o[2] + "),\n          rEdge || cEdge ? 0. : getA(" + o[3] + ")");
                this.userCode = "\n        void main() {\n          " + s + " rc = getOutputCoords();\n\n          if(" + u + ") {\n            setOutput(vec4(0));\n          } else {\n            " + c + "\n\n            setOutput(vec4(" + l + "));\n          }\n        }\n      "
            }
        };
    var Vo = function (n, t, e) {
            this.variableNames = ["x"], this.outputShape = t.map(function (t, e) {
                return t[0] + n[e] + t[1]
            });
            var r = n.length,
                o = Dn(r),
                i = t.map(function (t) {
                    return t[0]
                }).join(","),
                a = t.map(function (t, e) {
                    return t[0] + n[e]
                }).join(","),
                s = ["coords[0]", "coords[1]", "coords[2]", "coords[3]"].slice(0, r);
            this.userCode = 1 !== r ? "\n      " + o + " start = " + o + "(" + i + ");\n      " + o + " end = " + o + "(" + a + ");\n\n      void main() {\n        " + o + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + e + "));\n        } else {\n          " + o + " coords = outC - start;\n          setOutput(getX(" + s + "));\n        }\n      }\n    " : "\n        int start = " + i + ";\n        int end = " + a + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + e + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      "
        },
        Ho = function (n, t, e) {
            this.variableNames = ["x"], this.usesPackedTextures = !0, this.outputShape = t.map(function (t, e) {
                return t[0] + n[e] + t[1]
            });
            for (var r = n.length, o = Dn(r), i = t.map(function (t) {
                    return t[0]
                }).join(","), a = t.map(function (t, e) {
                    return t[0] + n[e]
                }).join(","), s = mn("rc", r), u = mn("source", r), c = s[r - 1] + " < " + this.outputShape[r - 1], l = 1 === r ? "source" : "vec2(" + u.slice(-2).join() + ")", h = [o + " rc = outputLoc;", s[r - 1] + " += 1;\n       if(" + c + ") {\n      ", 1 === r ? "" : "}\n       rc = outputLoc;\n       " + s[r - 2] + " += 1;\n       if(" + s[r - 2] + " < " + this.outputShape[r - 2] + ") {", 1 === r ? "" : "  " + s[r - 1] + " += 1;\n         if(" + c + ") {"], p = 1 === r ? "rc < start || rc >= end" : "any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))", f = "", d = 0, v = 1 === r ? 2 : 4; d < v; d++) f += "\n        " + h[d] + "\n        if (" + p + ") {\n          result[" + d + "] = float(" + e + ");\n        } else {\n          " + o + " source = rc - start;\n          result[" + d + "] = getChannel(getX(" + u.join() + "), " + l + ");\n        }\n      ";
            f += 1 === r ? "} " : "}}", this.userCode = "\n      const " + o + " start = " + o + "(" + i + ");\n      const " + o + " end = " + o + "(" + a + ");\n\n      void main() {\n        " + o + " outputLoc = getOutputCoords();\n        vec4 result = vec4(0.);\n        " + f + "\n        setOutput(result);\n      }\n    "
        },
        qo = function (t, e, n) {
            if (this.variableNames = ["x"], "avg" === e && n) throw new Error("Cannot compute positions for average pool.");
            var r = t.filterWidth,
                o = t.strideHeight,
                i = t.strideWidth,
                a = t.dilationHeight,
                s = t.dilationWidth,
                u = t.effectiveFilterHeight,
                c = t.effectiveFilterWidth,
                l = t.padInfo.top,
                h = t.padInfo.left;
            this.outputShape = t.outShape;
            var p = "avg" === e,
                f = "0.0";
            if (p || (f = "-1.0 / 1e-20"), n) this.userCode = "\n        const ivec2 strides = ivec2(" + o + ", " + i + ");\n        const ivec2 pads = ivec2(" + l + ", " + h + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + u + ";\n              wR += " + a + ") {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + t.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + c + ";\n                wC += " + s + ") {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + t.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value >= currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + c + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
            else {
                var d = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
                "avg" === e && (d = "avgValue / count");
                var v = 4 * Math.floor(r / 4),
                    m = r % 4,
                    g = "\n      if (" + p + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = max(values, minMaxValue);\n      }\n    ";
                this.userCode = "\n      const ivec2 strides = ivec2(" + o + ", " + i + ");\n      const ivec2 pads = ivec2(" + l + ", " + h + ");\n      const float initializationValue = " + f + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + t.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + f + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + u + ";\n            wR += " + a + ") {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + t.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + v + "; wC += 4) {\n            int xC = xCCorner + wC * " + s + ";\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              getValue(batch, xR, xC + 3 * " + s + ", d)\n            );\n\n            " + g + "\n          }\n\n          int xC = xCCorner + " + v + ";\n          if (" + (1 === m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (2 === m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + g + "\n          } else if (" + (3 === m) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + " + s + ", d),\n              getValue(batch, xR, xC + 2 * " + s + ", d),\n              initializationValue\n            );\n\n            " + g + "\n          }\n        }\n        setOutput(" + d + ");\n      }\n    "
            }
        },
        jo = function (t, e) {
            this.variableNames = ["x"];
            var n = t.windowSize,
                r = t.batchSize,
                o = t.inSize,
                i = Math.ceil(o / n);
            this.outputShape = [r, i];
            var a = "0.0",
                s = "";
            "prod" === e ? a = "1.0" : "min" === e ? (a = "1.0 / 1e-20", s = "min") : "max" === e && (a = "-1.0 / 1e-20", s = "max");
            var u = e + "(" + e + "(" + e + "(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";
            "sum" === e ? u = "sumValue" : "prod" === e ? u = "prodValue" : "all" === e ? u = "allValue" : "any" === e && (u = "anyValue");
            var c = 4 * Math.floor(n / 4),
                l = n % 4,
                h = "\n      if (" + ("sum" === e) + ") {\n        sumValue += dot(values, ones);\n      } else if (" + ("prod" === e) + ") {\n        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);\n        prodValue *= tmp[0] * tmp[1];\n      } else {\n        minMaxValue = " + s + "(values, minMaxValue);\n      }\n    ",
                p = "vec4";
            "all" === e ? (a = "1.0", h = "\n        bool reducedAllValue = all(values);\n        float floatedReducedAllValue = float(reducedAllValue);\n        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);\n      ", p = "bvec4") : "any" === e && (a = "0.0", h = "\n        bool reducedAnyValue = any(values);\n        float floatedReducedAnyValue = float(reducedAnyValue);\n        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);\n      ", p = "bvec4");
            var f = "";
            0 < o % n && (f = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      "), this.userCode = "\n      const float initializationValue = " + a + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + f + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + n + ";\n\n        vec4 minMaxValue = vec4(" + a + ");\n        float prodValue = 1.0;\n        float sumValue = 0.0;\n        float allValue = 1.0;\n        float anyValue = 0.0;\n\n        for (int i = 0; i < " + c + "; i += 4) {\n          int inIdx = inOffset + i;\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + h + "\n        }\n\n        int inIdx = inOffset + " + c + ";\n        if (" + (1 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (2 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          " + h + "\n        } else if (" + (3 === l) + ") {\n          " + p + " values = " + p + "(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          " + h + "\n        }\n        setOutput(" + u + ");\n      }\n    "
        },
        $o = function (t, e) {
            this.variableNames = ["A"], this.usesPackedTextures = !0, this.outputShape = t;
            for (var n = "", r = 0; r < 4; r++) {
                var o = "thisRC = rc;";
                r % 2 == 1 && (o += "thisRC.z += 1;"), 1 < r && (o += "thisRC.y += 1;"), n += "\n        " + o + "\n        " + (0 < r ? "if(thisRC.y < rows && thisRC.z < cols){" : "") + "\n          int flatIndex = getFlatIndex(thisRC);\n\n          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);\n          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));\n\n          result[" + r + "] =\n            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);\n        " + (0 < r ? "}" : "") + "\n      "
            }
            this.userCode = "\n      \n    ivec3 inputCoordsFromReshapedOutCoords(int index) {\n      " + bn(["r", "c", "d"], e) + "\n      return ivec3(r, c, d);\n    }\n  \n      \n    int getFlatIndex(ivec3 coords) {\n      return round(" + function (t, e) {
                if (t.length !== e.length) throw new Error("Vectors to be dotted must be of the same length -got " + t.length + " and " + e.length);
                for (var n = [], r = Math.floor(t.length / 4), o = t.length % 4, i = 0; i < r; i++) {
                    var a = t.slice(4 * i, 4 * i + 4),
                        s = e.slice(4 * i, 4 * i + 4);
                    n.push(En(a) + ", " + En(s))
                }
                return 0 !== o && (a = t.slice(4 * r), s = e.slice(4 * r), 1 === a.length && (a = a.map(function (t) {
                    return "float(" + t + ")"
                }), s = s.map(function (t) {
                    return "float(" + t + ")"
                })), n.push(En(a) + ", " + En(s))), n.map(function (t, e) {
                    return "dot(" + t + ")"
                }).join("+")
            }(["coords.x", "coords.y", "coords.z"], K(t).map(function (t) {
                return t.toString()
            }).concat(["1."])) + ");\n    }\n  \n\n      void main() {\n        ivec3 rc = getOutputCoords();\n\n        vec4 result = vec4(0.);\n\n        ivec3 thisRC;\n        int rows = " + t[1] + ";\n        int cols = " + t[2] + ";\n\n        " + n + "\n\n        setOutput(result);\n      }\n    "
        };
    var Ko = function (t, e, n) {
            this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e.shape;
            var r = e.shape,
                o = r[1],
                i = r[2],
                a = t.shape,
                s = a[1],
                u = a[2],
                c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i],
                l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
                h = c[0] / l[0],
                p = c[1] / l[1],
                f = 1 / h,
                d = 1 / p,
                v = 2 * Math.ceil(f) + 2,
                m = 2 * Math.ceil(d) + 2;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + p + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (o - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (i - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
        },
        Xo = function (t, e, n, r) {
            this.variableNames = ["A"], this.outputShape = [];
            var o = t[0],
                i = t[1],
                a = t[2],
                s = t[3];
            this.outputShape = [o, e, n, s];
            var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
                c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
            this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    "
        },
        Yo = function (t, e, n, r) {
            this.variableNames = ["A"], this.usesPackedTextures = !0, this.outputShape = [];
            var o = t[0],
                i = t[1],
                a = t[2],
                s = t[3];
            this.outputShape = [o, e, n, s];
            var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
                c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n];
            this.userCode = "\n      const vec3 effectiveInputOverOutputRatioRC = vec3(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ",\n          " + u[1] / c[1] + ");\n      const vec3 inputShapeRC = vec3(" + i + ".0, " + a + ".0,\n                                     " + a + ".0);\n\n      float getAValue(int b, int r, int c, int d) {\n        return getChannel(getA(b, r, c, d), vec2(c, d));\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        // Calculate values for next column in yRC.z.\n        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);\n\n        // Fractional source index.\n        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);\n        ivec3 sourceCeilRC = ivec3(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n        \n        // Should we calculate next column and row elements in 2x2 packed cell.\n        bool hasNextCol = d < " + (s - 1) + "; \n        bool hasNextRow = coords.z < " + (n - 1) + ";\n\n        // In parallel, construct four corners for all four components in\n        // packed 2x2 cell.\n        vec4 topLeft = vec4(\n          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 bottomLeft = vec4(\n          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);\n\n        vec4 topRight = vec4(\n          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec4 bottomRight = vec4(\n          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),\n          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)\n                     : 0.0,\n          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)\n                     : 0.0,\n          (hasNextRow && hasNextCol) ?\n            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);\n\n        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);\n\n        vec4 top = mix(topLeft, topRight, fracRC.yyzz);\n        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);\n        vec4 newValue = mix(top, bottom, fracRC.x);\n\n        setOutput(newValue);\n      }\n    "
        },
        Qo = function (t, e, n) {
            this.variableNames = ["dy"], this.outputShape = [], this.outputShape = e.shape;
            var r = e.shape,
                o = r[1],
                i = r[2],
                a = t.shape,
                s = a[1],
                u = a[2],
                c = [n && 1 < s ? o - 1 : o, n && 1 < u ? i - 1 : i],
                l = [n && 1 < s ? s - 1 : s, n && 1 < u ? u - 1 : u],
                h = c[0] / l[0],
                p = c[1] / l[1],
                f = 1 / h,
                d = 1 / p,
                v = 2 * Math.ceil(f) + 2,
                m = 2 * Math.ceil(d) + 2;
            this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + h + ");\n        const float widthScale = float(" + p + ");\n\n        const float invHeightScale = float(" + f + ");\n        const float invWidthScale = float(" + d + ");\n\n        const int winHeight = int(" + v + ");\n        const int winWidth = int(" + m + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(floor(startRLerp - float(winHeight / 2)));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(floor(startCLerp - float(winWidth / 2)));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + s + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + u + ") {\n              continue;\n            }\n\n            float sourceFracRow =\n              float(" + c[0] + ") *\n                (float(dyR) / float(" + l[0] + "));\n\n            float sourceFracCol =\n                float(" + c[1] + ") *\n                  (float(dyC) / float(" + l[1] + "));\n\n            int sourceNearestRow = int(min(\n                float(int(" + o + ") - 1),\n                " + n + " ? float(round(sourceFracRow)) :\n                                  float(floor(sourceFracRow))));\n\n            int sourceNearestCol = int(min(\n                float(int(" + i + ") - 1),\n                " + n + " ? float(round(sourceFracCol)) :\n                                  float(floor(sourceFracCol))));\n\n            if (r == sourceNearestRow && c == sourceNearestCol) {\n              accumulator += getDy(b, dyR, dyC, d);\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    "
        },
        Jo = function (t, e, n, r) {
            this.variableNames = ["A"], this.outputShape = [];
            var o = t[0],
                i = t[1],
                a = t[2],
                s = t[3];
            this.outputShape = [o, e, n, s];
            var u = [r && 1 < e ? i - 1 : i, r && 1 < n ? a - 1 : a],
                c = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n],
                l = r ? "0.5" : "0.0";
            this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + u[0] / c[0] + ",\n          " + u[1] / c[1] + ");\n      const vec2 inputShapeRC = vec2(" + i + ".0, " + a + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + l + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    "
        },
        Zo = function (r, o) {
            this.variableNames = ["x"];
            var t = r.length;
            if (4 < t) throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
            if (this.outputShape = r, 1 !== t) {
                var e = r.map(function (t, e) {
                        return n = e, -1 !== o.indexOf(n) && 1 !== r[n] ? r[n] + " - coords[" + n + "] - 1" : "coords[" + n + "]";
                        var n
                    }).join(","),
                    n = Dn(t);
                this.userCode = "\n      void main() {\n        " + n + " coords = getOutputCoords();\n        setOutput(getX(" + e + "));\n      }\n    "
            } else this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + r[0] + " - coord - 1));\n        }\n      "
        },
        ti = function (i, a) {
            this.variableNames = ["x"], this.usesPackedTextures = !0;
            var t = i.length;
            if (4 < t) throw new Error("WebGL backend: Reverse of rank-" + t + " tensor is not yet supported");
            this.outputShape = i;
            var e, n, r, o = mn("rc", t),
                s = o[t - 1] + " + 1 < " + this.outputShape[t - 1],
                u = o[t - 2] + " + 1 < " + this.outputShape[t - 2],
                c = Dn(t);

            function l(o) {
                var t = i.map(function (t, e) {
                    return n = e, r = o, -1 !== a.indexOf(n) && 1 !== i[n] ? i[n] + " - " + r[n] + " - 1" : "" + r[n];
                    var n, r
                });
                return "getChannel(getX(" + t.join(",") + "), vec2(" + t.slice(-2).join(",") + "))"
            }
            this.userCode = 1 === t ? "\n        void main(){\n          int rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = getChannel(getX(" + i[0] + " - rc - 1), rc);\n          if(" + s + "){\n              result.g = getChannel(getX(" + i[0] + " - (rc  + 1) - 1), rc + 1);\n          }\n          setOutput(result);\n        }\n      " : "\n        void main() {\n          " + c + " rc = getOutputCoords();\n          vec4 result = vec4(0.);\n          result.r = " + l(o.slice()) + ";\n          if(" + s + "){\n            result.g = " + ((r = o.slice())[t - 1] = "(" + r[t - 1] + " + 1)", l(r)) + ";\n          }\n          if(" + u + ") {\n            result.b = " + ((n = o.slice())[t - 2] = "(" + n[t - 2] + " + 1)", l(n)) + ";\n            if(" + s + ") {\n              result.a = " + ((e = o.slice())[t - 1] = "(" + e[t - 1] + " + 1)", e[t - 2] = "(" + e[t - 2] + " + 1)", l(e)) + ";\n            }\n          }\n          setOutput(result);\n        }\n    "
        },
        ei = function (t, e, n, r, o, i, a) {
            void 0 === a && (a = !0), this.variableNames = ["updates", "indices", "defaultValue"], this.outputShape = i;
            var s = Dn(o.length),
                u = Dn(i.length),
                c = "";
            1 === n ? c = "i" : 2 === n && (c = "i, j");
            var l = "getIndices(" + c + ")",
                h = "";
            1 === r ? h = "i" : 2 === r && (h = "i, coords[1]");
            var p = "getUpdates(" + h + ")",
                f = 1 < e ? "strides[j]" : "strides";
            this.userCode = "\n        " + s + " strides = " + s + "(" + o + ");\n\n        void main() {\n          " + u + " coords = getOutputCoords();\n          float sum = 0.0;\n          bool found = false;\n          for (int i = 0; i < " + t + "; i++) {\n            int flattenedIndex = 0;\n            for (int j = 0; j < " + e + "; j++) {\n              int index = round(" + l + ");\n              flattenedIndex += index * " + f + ";\n            }\n            if (flattenedIndex == coords[0]) {\n              sum += " + p + ";\n              found = true;\n            }\n          }\n          setOutput(mix(getDefaultValue(), sum, float(found)));\n        }\n      "
        },
        ni = function (t, e) {
            this.variableNames = ["x", "segmentIds"];
            var n = t.windowSize,
                r = t.batchSize,
                o = t.inSize,
                i = t.numSegments,
                a = i * Math.ceil(o / n);
            this.outputShape = [r, a];
            var s = 4 * Math.floor(n / 4),
                u = n % 4,
                c = "\n        sumValue += dot(values, segFilter);\n    ",
                l = "";
            0 < o % n && (l = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return initializationValue;\n        }\n      ");
            var h = "";
            0 < o % n && (h = "\n        if (inIdx < 0 || inIdx >= " + o + ") {\n          return -1.0;\n        }\n      "), this.userCode = "\n      const float initializationValue = 0.0;\n\n      float getValue(int batch, int inIdx) {\n        " + l + "\n        return getX(batch, inIdx);\n      }\n\n      float getSegmentIdAtIndex(int inIdx) {\n        " + h + "\n        return getSegmentIds(inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = int(floor(float(outIdx) / float(\n          " + i + ")) * float(" + n + "));\n        int currentSeg = int(mod(float(outIdx), float(" + i + ")));\n\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + s + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0\n          );\n\n          " + c + "\n        }\n\n        int inIdx = inOffset + " + s + ";\n        if (" + (1 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n\n          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            0,\n            0,\n            0\n          );\n\n          " + c + "\n        } else if (" + (2 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n              0,\n              0\n          );\n\n          " + c + "\n        } else if (" + (3 === u) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n\n          vec4 segFilter = vec4(\n            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,\n            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,\n            0\n          );\n\n          " + c + "\n        }\n        setOutput(sumValue);\n      }\n    "
        },
        ri = function (t, e, n) {
            var r, o;
            if (this.variableNames = ["c", "a", "b"], this.outputShape = e, 4 < n) throw Error("Where for rank " + n + " is not yet supported");
            if (1 === n) r = o = "resRC";
            else {
                for (var i = ["resRC.x", "resRC.y", "resRC.z", "resRC.w"], a = [], s = [], u = 0; u < e.length; u++) s.push("" + i[u]), u < t && a.push("" + i[u]);
                r = a.join(), o = s.join()
            }
            var c = Dn(n);
            this.userCode = "\n      void main() {\n        " + c + " resRC = getOutputCoords();\n        float cVal = getC(" + r + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + o + "));\n        } else {\n          setOutput(getB(" + o + "));\n        }\n      }\n    "
        },
        oi = function () {
            function t(t) {
                this.variableNames = ["source"], this.outputShape = t, this.rank = t.length;
                var e, n = Dn(this.rank),
                    r = "uniform int start[" + this.rank + "];",
                    o = function (t) {
                        if (1 === t) return "sourceLoc";
                        if (t <= 6) return ii.slice(0, t).map(function (t) {
                            return "sourceLoc." + t
                        }).join(",");
                        throw Error("Slicing for rank " + t + " is not yet supported")
                    }(this.rank);
                e = "\n        " + n + " sourceLoc;\n        " + n + " coords = getOutputCoords();\n        " + t.map(function (t, e) {
                    return "sourceLoc." + ii[e] + " = start[" + e + "] + coords." + ii[e] + ";"
                }).join("\n") + "\n      ", this.userCode = "\n      " + r + "\n      void main() {\n        " + e + "\n        setOutput(getSource(" + o + "));\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n) {
                var r = this;
                if (n.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + n.length + ")");
                return function (t, e) {
                    null == r.startLoc && (r.startLoc = t.getUniformLocationNoThrow(e, "start"), null == r.startLoc) || t.gl.uniform1iv(r.startLoc, n)
                }
            }, t
        }(),
        ii = ["x", "y", "z", "w", "u", "v"];
    var ai = function () {
            function t(t) {
                this.variableNames = ["source"], this.usesPackedTextures = !0, this.outputShape = t, this.rank = t.length;
                var e = Dn(this.rank),
                    n = mn("coords", this.rank),
                    r = mn("sourceLoc", this.rank),
                    o = 1 === this.rank ? "sourceLoc" : "vec2(" + r.slice(-2).join() + ")",
                    i = "getChannel(getSource(" + r.join() + "), " + o + ")",
                    a = "\n      result.x = " + i + ";\n      if (++" + n[this.rank - 1] + " < " + t[this.rank - 1] + ") {\n        ++" + r[this.rank - 1] + ";\n        result.y = " + i + ";\n        --" + r[this.rank - 1] + ";\n      }\n    ",
                    s = 1 === this.rank ? "" : "\n      --" + n[this.rank - 1] + ";\n      if (++" + n[this.rank - 2] + " < " + t[this.rank - 2] + ") {\n        ++" + r[this.rank - 2] + ";\n        result.z = " + i + ";\n        if (++" + n[this.rank - 1] + " < " + t[this.rank - 1] + ") {\n          ++" + r[this.rank - 1] + ";\n          result.w = " + i + ";\n        }\n      }\n    ",
                    u = this.rank <= 4 ? "sourceLoc = coords +\n            " + e + "(" + t.map(function (t, e) {
                        return "start[" + e + "]"
                    }).join() + ");" : t.map(function (t, e) {
                        return r[e] + " = " + n[e] + " + start[" + e + "];"
                    }).join("\n");
                this.userCode = "\n      uniform int start[" + this.rank + "];\n      void main() {\n        " + e + " coords = getOutputCoords();\n        " + e + " sourceLoc;\n        " + u + " \n        vec4 result = vec4(0.);\n        " + a + "\n        " + s + "\n        setOutput(result);\n      }\n    "
            }
            return t.prototype.getCustomSetupFunc = function (n) {
                var r = this;
                if (n.length !== this.rank) throw Error("The rank (" + this.rank + ") of the program must match the length of start (" + n.length + ")");
                return function (t, e) {
                    null == r.startLoc && (r.startLoc = t.getUniformLocationNoThrow(e, "start"), null == r.startLoc) || t.gl.uniform1iv(r.startLoc, n)
                }
            }, t
        }(),
        si = function (t, e, n, r) {
            this.variableNames = ["x"];
            var o = n.filter(function (t, e) {
                return -1 === r.indexOf(e)
            });
            this.outputShape = o;
            var i = n.length,
                a = Dn(n.length),
                s = Dn(o.length),
                u = "";
            if (1 === i) u = "coords * strides + begin";
            else {
                var c = 0;
                u = n.map(function (t, e) {
                    return -1 === r.indexOf(e) ? (c++, 1 === o.length ? "coords * strides[" + e + "] + begin[" + e + "]" : "coords[" + (c - 1) + "] * strides[" + e + "] + begin[" + e + "]") : "begin[" + e + "]"
                }).join(",")
            }
            this.userCode = "\n      " + a + " begin = " + a + "(" + t + ");\n      " + a + " strides = " + a + "(" + e + ");\n\n      void main() {\n        " + s + " coords = getOutputCoords();\n        setOutput(getX(" + u + "));\n      }\n    "
        },
        ui = function () {
            function t(t) {
                this.gpgpu = t, this.numUsedTextures = 0, this.numFreeTextures = 0, this.freeTextures = {}, this.logEnabled = !1, this.usedTextures = {}
            }
            return t.prototype.acquireTexture = function (t, e, n) {
                var r, o = ci(e, n),
                    i = li(t, o, n);
                if (i in this.freeTextures || (this.freeTextures[i] = []), i in this.usedTextures || (this.usedTextures[i] = []), 0 < this.freeTextures[i].length) {
                    this.numFreeTextures--, this.numUsedTextures++, this.log();
                    var a = this.freeTextures[i].shift();
                    return this.usedTextures[i].push(a), a
                }
                return this.numUsedTextures++, this.log(), o === br.PACKED_2X2_FLOAT32 ? r = this.gpgpu.createPackedMatrixTexture(t[0], t[1]) : o === br.PACKED_2X2_FLOAT16 ? r = this.gpgpu.createFloat16PackedMatrixTexture(t[0], t[1]) : o === br.UNPACKED_FLOAT32 ? r = this.gpgpu.createFloat32MatrixTexture(t[0], t[1]) : o === br.UNPACKED_FLOAT16 ? r = this.gpgpu.createFloat16MatrixTexture(t[0], t[1]) : o === br.PACKED_4X1_UNSIGNED_BYTE && (r = this.gpgpu.createUnsignedBytesMatrixTexture(t[0], t[1])), this.usedTextures[i].push(r), r
            }, t.prototype.releaseTexture = function (t, e, n, r) {
                if (null != this.freeTextures) {
                    var o = li(e, ci(n, r), r);
                    o in this.freeTextures || (this.freeTextures[o] = []), this.freeTextures[o].push(t), this.numFreeTextures++, this.numUsedTextures--;
                    var i = this.usedTextures[o],
                        a = i.indexOf(t);
                    if (a < 0) throw new Error("Cannot release a texture that was never provided by this texture manager");
                    i.splice(a, 1), this.log()
                }
            }, t.prototype.log = function () {
                if (this.logEnabled) {
                    var t = this.numFreeTextures + this.numUsedTextures;
                    console.log("Free/Used", this.numFreeTextures + " / " + this.numUsedTextures, "(" + t + ")")
                }
            }, t.prototype.getNumUsedTextures = function () {
                return this.numUsedTextures
            }, t.prototype.getNumFreeTextures = function () {
                return this.numFreeTextures
            }, t.prototype.dispose = function () {
                var e = this;
                if (null != this.freeTextures) {
                    for (var t in this.freeTextures) this.freeTextures[t].forEach(function (t) {
                        e.gpgpu.deleteMatrixTexture(t)
                    });
                    for (var t in this.usedTextures) this.usedTextures[t].forEach(function (t) {
                        e.gpgpu.deleteMatrixTexture(t)
                    });
                    this.freeTextures = null, this.usedTextures = null, this.numUsedTextures = 0, this.numFreeTextures = 0
                }
            }, t
        }();

    function ci(t, e) {
        if (t === wr.UPLOAD) return e ? br.PACKED_2X2_FLOAT32 : br.UNPACKED_FLOAT32;
        if (t === wr.RENDER || null == t) return e ? Zt.get("WEBGL_RENDER_FLOAT32_ENABLED") ? br.PACKED_2X2_FLOAT32 : br.PACKED_2X2_FLOAT16 : Zt.get("WEBGL_RENDER_FLOAT32_ENABLED") ? br.UNPACKED_FLOAT32 : br.UNPACKED_FLOAT16;
        if (t === wr.DOWNLOAD || t === wr.PIXELS) return br.PACKED_4X1_UNSIGNED_BYTE;
        throw new Error("Unknown logical texture type " + t)
    }

    function li(t, e, n) {
        return t[0] + "_" + t[1] + "_" + e + "_" + n
    }
    var hi = function (t, e) {
        this.variableNames = ["A"];
        for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[r] * e[r];
        this.outputShape = n, this.rank = n.length;
        var o = Dn(this.rank),
            i = function (t) {
                var e = t.length;
                if (5 < e) throw Error("Tile for rank " + e + " is not yet supported");
                if (1 === e) return "imod(resRC, " + t[0] + ")";
                for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u"], r = [], o = 0; o < t.length; o++) r.push("imod(" + n[o] + ", " + t[o] + ")");
                return r.join()
            }(t);
        this.userCode = "\n      void main() {\n        " + o + " resRC = getOutputCoords();\n        setOutput(getA(" + i + "));\n      }\n    "
    };
    var pi = function (t, e) {
        this.variableNames = ["A"];
        for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
        this.outputShape = n, this.rank = n.length;
        var o = Dn(this.rank),
            i = function (t) {
                var e = t.length;
                if (6 < e) throw Error("Transpose for rank " + e + " is not yet supported");
                for (var n = ["resRC.x", "resRC.y", "resRC.z", "resRC.w", "resRC.u", "resRC.v"], r = new Array(e), o = 0; o < t.length; o++) r[t[o]] = n[o];
                return r.join()
            }(e);
        this.userCode = "\n    void main() {\n      " + o + " resRC = getOutputCoords();\n      setOutput(getA(" + i + "));\n    }\n    "
    };
    var fi = function (t, e) {
            this.variableNames = ["A"], this.usesPackedTextures = !0;
            for (var n = new Array(t.length), r = 0; r < n.length; r++) n[r] = t[e[r]];
            if (this.outputShape = n, this.rank = n.length, 6 < this.rank) throw Error("Packed transpose for rank " + this.rank + " is not yet supported.");
            var o = Dn(this.rank),
                i = vn("rc", this.rank),
                a = new Array(this.rank);
            for (r = 0; r < e.length; r++) a[e[r]] = i[r];
            var s = "vec2(" + a.slice(-2).join() + ")",
                u = "++" + i[this.rank - 1] + " < " + n[this.rank - 1],
                c = "getChannel(getA(" + a.join() + "), " + s + ")";
            this.userCode = "\n    void main() {\n      " + o + " rc = getOutputCoords();\n      vec4 result = vec4(0.);\n      result[0] = " + c + ";\n      if(" + u + ") {\n        result[1] = " + c + ";\n      }\n      --" + i[this.rank - 1] + ";\n      if(++" + i[this.rank - 2] + " < " + n[this.rank - 2] + ") {\n        result[2] = " + c + ";\n        if(" + u + ") {\n          result[3] = " + c + ";\n        }\n      }  \n      setOutput(result);\n    }\n    "
        },
        di = 1.7580993408473768,
        vi = 1.0507009873554805,
        mi = function (t, e) {
            this.variableNames = ["A"], this.outputShape = t, this.userCode = "\n      float unaryOperation(float x) {\n        " + e + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
        },
        gi = "if (isnan(x)) return x;",
        yi = gi + "\n  return (x < 0.0) ? 0.0 : x;\n";
    var xi = "return exp(x);",
        wi = "return x;",
        bi = "\n  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));\n  bvec4 isNaN = isnan(x);\n\n  result.r = isNaN.r ? x.r : result.r;\n  result.g = isNaN.g ? x.g : result.g;\n  result.b = isNaN.b ? x.b : result.b;\n  result.a = isNaN.a ? x.a : result.a;\n\n  return result;\n",
        Ei = function (t, e) {
            this.variableNames = ["A"], this.usesPackedTextures = !0, this.outputShape = t, this.userCode = "\n      vec4 unaryOperation(vec4 x) {\n        " + e + "\n      }\n\n      void main() {\n        vec4 x = getAAtOutCoords();\n        vec4 y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    "
        },
        Ci = function (t) {
            this.variableNames = ["A"], this.usesPackedTextures = !0;
            var e = (this.outputShape = t).length,
                n = mn("rc", e),
                r = Dn(e),
                o = function (t, e) {
                    if (1 === t) return "rc";
                    for (var n = "", r = 0; r < t; r++) n += e[r], r < t - 1 && (n += ",");
                    return n
                }(e, n),
                i = n.slice(-2),
                a = e <= 1 ? "rc" : "vec2(" + i.join(",") + ")";
            this.userCode = "\n      void main() {\n        " + r + " rc = getOutputCoords();\n        vec4 packedInput = getA(" + o + ");\n\n        setOutput(getChannel(packedInput, " + a + "));\n      }\n    "
        };
    var _i = Fe({
            concat_: function (t, n) {
                void 0 === n && (n = 0), D(1 <= t.length, function () {
                    return "Pass at least one tensor to concat"
                });
                var e = oe(t, "tensors", "concat");
                n = k(n, e[0].shape)[0];
                var r = Re(e.map(function (t) {
                    return t.shape
                }), n);
                if (0 === B(r)) return Ge([], r);
                if (1 === (e = e.filter(function (t) {
                        return 0 < t.size
                    })).length) return e[0];
                var o = e.map(function (t) {
                    return t.shape
                });
                ! function (t, r) {
                    var o = t[0].length;
                    t.forEach(function (t, e) {
                        D(t.length === o, function () {
                            return "Error in concat" + o + "D: rank of tensors[" + e + "] must be the same as the rank of the rest (" + o + ")"
                        })
                    }), D(0 <= r && r < o, function () {
                        return "Error in concat" + o + "D: axis must be between 0 and " + (o - 1) + "."
                    });
                    var i = t[0];
                    t.forEach(function (t, e) {
                        for (var n = 0; n < o; n++) D(n === r || t[n] === i[n], function () {
                            return "Error in concat" + o + "D: Shape of tensors[" + e + "] (" + t + ") does not match the shape of the rest (" + i + ") along the non-concatenated axis " + e + "."
                        })
                    })
                }(o, n);
                var i = e;
                return Zt.engine.runKernel(function (t) {
                    return t.concat(e, n)
                }, i, function (t) {
                    var e = o.map(function (t) {
                        return t[n]
                    });
                    return Ii(t, e, n).map(function (t) {
                        return function () {
                            return t
                        }
                    })
                })
            }
        }),
        Si = Fe({
            concat1d_: function (t) {
                return _i(t, 0)
            }
        }),
        Ri = Fe({
            concat2d_: function (t, e) {
                return _i(t, e)
            }
        }),
        Ni = Fe({
            concat3d_: function (t, e) {
                return _i(t, e)
            }
        }),
        ki = Fe({
            concat4d_: function (t, e) {
                return _i(t, e)
            }
        }),
        Ii = Fe({
            split_: function (t, e, n) {
                void 0 === n && (n = 0);
                var r, o = re(t, "x", "split");
                return n = k(n, o.shape)[0], r = "number" == typeof e ? (D(o.shape[n] % e == 0, function () {
                    return "Number of splits must evenly divide the axis."
                }), new Array(e).fill(o.shape[n] / e)) : (D(o.shape[n] === e.reduce(function (t, e) {
                    return t + e
                }), function () {
                    return "The sum of sizes must match the size of the axis dimension."
                }), e), Zt.engine.runKernel(function (t) {
                    return t.split(o, r, n)
                }, {
                    $x: o
                }, function (t) {
                    return {
                        $x: function () {
                            return _i(t, n)
                        }
                    }
                })
            }
        });

    function Ti(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var Ai = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
                }

                function r(t, e) {
                    var n = new function (t) {
                            var r, e = this,
                                n = (r = 4022871197, function (t) {
                                    t = t.toString();
                                    for (var e = 0; e < t.length; e++) {
                                        var n = .02519603282416938 * (r += t.charCodeAt(e));
                                        n -= r = n >>> 0, r = (n *= r) >>> 0, r += 4294967296 * (n -= r)
                                    }
                                    return 2.3283064365386963e-10 * (r >>> 0)
                                });
                            e.next = function () {
                                var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
                                return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
                            }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
                        }(t),
                        r = e && e.state,
                        o = n.next;
                    return o.int32 = function () {
                        return 4294967296 * n.next() | 0
                    }, o.double = function () {
                        return o() + 11102230246251565e-32 * (2097152 * o() | 0)
                    }, o.quick = o, r && ("object" == typeof r && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.alea = r
            }(0, t)
        }),
        Di = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
                }

                function r(t, e) {
                    var n = new function (t) {
                            var e = this,
                                n = "";
                            e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function () {
                                var t = e.x ^ e.x << 11;
                                return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                            }, t === (0 | t) ? e.x = t : n += t;
                            for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), e.next()
                        }(t),
                        r = e && e.state,
                        o = function () {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function () {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.xor128 = r
            }(0, t)
        }),
        Mi = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
                }

                function r(t, e) {
                    var n = new function (t) {
                            var e = this,
                                n = "";
                            e.next = function () {
                                var t = e.x ^ e.x >>> 2;
                                return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ t ^ t << 1) | 0
                            }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, t === ((e.v = 0) | t) ? e.x = t : n += t;
                            for (var r = 0; r < n.length + 64; r++) e.x ^= 0 | n.charCodeAt(r), r == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
                        }(t),
                        r = e && e.state,
                        o = function () {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function () {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.xorwow = r
            }(0, t)
        }),
        Oi = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.x = t.x.slice(), e.i = t.i, e
                }

                function r(t, e) {
                    null == t && (t = +new Date);
                    var n = new function (t) {
                            var o = this;
                            o.next = function () {
                                    var t, e, n = o.x,
                                        r = o.i;
                                    return t = n[r], e = (t ^= t >>> 7) ^ t << 24, e ^= (t = n[r + 1 & 7]) ^ t >>> 10, e ^= (t = n[r + 3 & 7]) ^ t >>> 3, e ^= (t = n[r + 4 & 7]) ^ t << 7, t = n[r + 7 & 7], e ^= (t ^= t << 13) ^ t << 9, n[r] = e, o.i = r + 1 & 7, e
                                },
                                function (t, e) {
                                    var n, r = [];
                                    if (e === (0 | e)) r[0] = e;
                                    else
                                        for (e = "" + e, n = 0; n < e.length; ++n) r[7 & n] = r[7 & n] << 15 ^ e.charCodeAt(n) + r[n + 1 & 7] << 13;
                                    for (; r.length < 8;) r.push(0);
                                    for (n = 0; n < 8 && 0 === r[n]; ++n);
                                    for (8 == n ? r[7] = -1 : r[n], t.x = r, t.i = 0, n = 256; 0 < n; --n) t.next()
                                }(o, t)
                        }(t),
                        r = e && e.state,
                        o = function () {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function () {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && (r.x && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.xorshift7 = r
            }(0, t)
        }),
        Pi = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
                }

                function r(t, e) {
                    null == t && (t = +new Date);
                    var n = new function (t) {
                            var i = this;
                            i.next = function () {
                                    var t, e, n = i.w,
                                        r = i.X,
                                        o = i.i;
                                    return i.w = n = n + 1640531527 | 0, e = r[o + 34 & 127], t = r[o = o + 1 & 127], e ^= e << 13, t ^= t << 17, e ^= e >>> 15, t ^= t >>> 12, e = r[o] = e ^ t, i.i = o, e + (n ^ n >>> 16) | 0
                                },
                                function (t, e) {
                                    var n, r, o, i, a, s = [],
                                        u = 128;
                                    for (e === (0 | e) ? (r = e, e = null) : (e += "\0", r = 0, u = Math.max(u, e.length)), o = 0, i = -32; i < u; ++i) e && (r ^= e.charCodeAt((i + 32) % e.length)), 0 === i && (a = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, 0 <= i && (a = a + 1640531527 | 0, o = 0 == (n = s[127 & i] ^= r + a) ? o + 1 : 0);
                                    for (128 <= o && (s[127 & (e && e.length || 0)] = -1), o = 127, i = 512; 0 < i; --i) r = s[o + 34 & 127], n = s[o = o + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[o] = r ^ n;
                                    t.w = a, t.X = s, t.i = o
                                }(i, t)
                        }(t),
                        r = e && e.state,
                        o = function () {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function () {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && (r.X && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.xor4096 = r
            }(0, t)
        }),
        Fi = Ti(function (t) {
            ! function (t, e, n) {
                function i(t, e) {
                    return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
                }

                function r(t, e) {
                    var n = new function (t) {
                            var o = this,
                                e = "";
                            o.next = function () {
                                var t = o.b,
                                    e = o.c,
                                    n = o.d,
                                    r = o.a;
                                return t = t << 25 ^ t >>> 7 ^ e, e = e - n | 0, n = n << 24 ^ n >>> 8 ^ r, r = r - t | 0, o.b = t = t << 20 ^ t >>> 12 ^ e, o.c = e = e - n | 0, o.d = n << 16 ^ e >>> 16 ^ r, o.a = r - t | 0
                            }, o.a = 0, o.b = 0, o.c = -1640531527, o.d = 1367130551, t === Math.floor(t) ? (o.a = t / 4294967296 | 0, o.b = 0 | t) : e += t;
                            for (var n = 0; n < e.length + 20; n++) o.b ^= 0 | e.charCodeAt(n), o.next()
                        }(t),
                        r = e && e.state,
                        o = function () {
                            return (n.next() >>> 0) / 4294967296
                        };
                    return o.double = function () {
                        do {
                            var t = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
                        } while (0 === t);
                        return t
                    }, o.int32 = n.next, o.quick = o, r && ("object" == typeof r && i(r, n), o.state = function () {
                        return i(n, {})
                    }), o
                }
                e && e.exports ? e.exports = r : this.tychei = r
            }(0, t)
        }),
        Li = Ti(function (e) {
            ! function (s, u) {
                var c, l = this,
                    h = 256,
                    p = 6,
                    f = "random",
                    d = u.pow(h, p),
                    v = u.pow(2, 52),
                    m = 2 * v,
                    g = h - 1;

                function t(t, e, n) {
                    var r = [],
                        o = x(function t(e, n) {
                            var r, o = [],
                                i = typeof e;
                            if (n && "object" == i)
                                for (r in e) try {
                                    o.push(t(e[r], n - 1))
                                } catch (t) {}
                            return o.length ? o : "string" == i ? e : e + "\0"
                        }((e = 1 == e ? {
                            entropy: !0
                        } : e || {}).entropy ? [t, w(s)] : null == t ? function () {
                            try {
                                var t;
                                return c && (t = c.randomBytes) ? t = t(h) : (t = new Uint8Array(h), (l.crypto || l.msCrypto).getRandomValues(t)), w(t)
                            } catch (t) {
                                var e = l.navigator,
                                    n = e && e.plugins;
                                return [+new Date, l, n, l.screen, w(s)]
                            }
                        }() : t, 3), r),
                        i = new function (t) {
                            var e, n = t.length,
                                a = this,
                                r = 0,
                                o = a.i = a.j = 0,
                                i = a.S = [];
                            for (n || (t = [n++]); r < h;) i[r] = r++;
                            for (r = 0; r < h; r++) i[r] = i[o = g & o + t[r % n] + (e = i[r])], i[o] = e;
                            (a.g = function (t) {
                                for (var e, n = 0, r = a.i, o = a.j, i = a.S; t--;) e = i[r = g & r + 1], n = n * h + i[g & (i[r] = i[o = g & o + e]) + (i[o] = e)];
                                return a.i = r, a.j = o, n
                            })(h)
                        }(r),
                        a = function () {
                            for (var t = i.g(p), e = d, n = 0; t < v;) t = (t + n) * h, e *= h, n = i.g(1);
                            for (; m <= t;) t /= 2, e /= 2, n >>>= 1;
                            return (t + n) / e
                        };
                    return a.int32 = function () {
                        return 0 | i.g(4)
                    }, a.quick = function () {
                        return i.g(4) / 4294967296
                    }, a.double = a, x(w(i.S), s), (e.pass || n || function (t, e, n, r) {
                        return r && (r.S && y(r, i), t.state = function () {
                            return y(i, {})
                        }), n ? (u[f] = t, e) : t
                    })(a, o, "global" in e ? e.global : this == u, e.state)
                }

                function y(t, e) {
                    return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                }

                function x(t, e) {
                    for (var n, r = t + "", o = 0; o < r.length;) e[g & o] = g & (n ^= 19 * e[g & o]) + r.charCodeAt(o++);
                    return w(e)
                }

                function w(t) {
                    return String.fromCharCode.apply(0, t)
                }
                if (u["seed" + f] = t, x(u.random(), s), e.exports) {
                    e.exports = t;
                    try {
                        c = require("crypto")
                    } catch (t) {}
                }
            }([], Math)
        });
    Li.alea = Ai, Li.xor128 = Di, Li.xorwow = Mi, Li.xorshift7 = Oi, Li.xor4096 = Pi, Li.tychei = Fi;
    var Bi = Li.alea,
        Wi = function () {
            function t(t, e, n, r, o) {
                this.mean = t, this.stdDev = e, this.dtype = n, this.nextVal = NaN, this.truncated = r, this.truncated && (this.upper = this.mean + 2 * this.stdDev, this.lower = this.mean - 2 * this.stdDev);
                var i = o || Math.random();
                this.random = Bi(i.toString())
            }
            return t.prototype.nextValue = function () {
                if (!isNaN(this.nextVal)) {
                    var t = this.nextVal;
                    return this.nextVal = NaN, t
                }
                for (var e, n, r = !1; !r;) {
                    for (var o = void 0, i = void 0, a = void 0; 1 <= (a = (o = 2 * this.random() - 1) * o + (i = 2 * this.random() - 1) * i) || 0 === a;);
                    var s = Math.sqrt(-2 * Math.log(a) / a);
                    e = this.mean + this.stdDev * o * s, n = this.mean + this.stdDev * i * s, this.truncated && !this.isValidTruncated(e) || (r = !0)
                }
                return this.truncated && !this.isValidTruncated(n) || (this.nextVal = this.convertValue(n)), this.convertValue(e)
            }, t.prototype.convertValue = function (t) {
                return null == this.dtype || "float32" === this.dtype ? t : Math.round(t)
            }, t.prototype.isValidTruncated = function (t) {
                return t <= this.upper && t >= this.lower
            }, t
        }();

    function zi(t, e, n) {
        return void 0 === e && (e = "float32"), e = e || "float32", tt(t), new lt(t, e, n)
    }

    function Ui(t, e) {
        void 0 === e && (e = !1), console.log(t.toString(e))
    }
    var Gi = Fe({
            batchToSpaceND_: function (t, e, n) {
                var r = re(t, "x", "batchToSpaceND"),
                    o = e.reduce(function (t, e) {
                        return t * e
                    });
                return D(r.rank >= 1 + e.length, function () {
                    return "input rank is " + r.rank + " but should be > than blockShape.length " + e.length
                }), D(n.length === e.length, function () {
                    return "crops.length is " + n.length + " but should be equal to blockShape.length  " + e.length
                }), D(r.shape[0] % o == 0, function () {
                    return "input tensor batch is " + r.shape[0] + " but is not divisible by the product of the elements of blockShape " + e.join(" * ") + " === " + o
                }), Zt.engine.runKernel(function (t) {
                    return t.batchToSpaceND(r, e, n)
                }, {
                    $x: r
                }, function (t) {
                    return {
                        $x: function () {
                            return t.spaceToBatchND(e, n)
                        }
                    }
                })
            }
        }),
        Vi = Fe({
            cast_: function (t, e) {
                var n = re(t, "x", "cast");
                return Zt.engine.runKernel(function (t) {
                    return t.cast(n, e)
                }, {
                    $x: n
                }, function (t) {
                    return {
                        $x: function () {
                            return t.clone()
                        }
                    }
                })
            }
        }),
        Hi = Fe({
            clone_: function (t) {
                var e = re(t, "x", "clone", null);
                return Zt.engine.runKernel(function (t) {
                    return dt.make(e.shape, {
                        dataId: e.dataId
                    }, e.dtype)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return t.toFloat()
                        }
                    }
                })
            }
        }),
        qi = Fe({
            cumsum_: function (t, e, n, r) {
                void 0 === e && (e = 0), void 0 === n && (n = !1), void 0 === r && (r = !1);
                var o = re(t, "x", "cumsum"),
                    i = Ce([e |= 0], o.rank),
                    a = o;
                null != i && (a = o.transpose(i));
                var s = Se(1, o.rank)[0],
                    u = Zt.engine.runKernel(function (t) {
                        return t.cumsum(a, s, n, r)
                    }, {
                        permutedX: a
                    }, function (t) {
                        return {
                            permutedX: function () {
                                return t.cumsum(e, n, !r)
                            }
                        }
                    });
                return null != i && (u = u.transpose(i)), u
            }
        }),
        ji = Fe({
            depthToSpace_: function (t, e, n) {
                void 0 === n && (n = "NHWC");
                var r = re(t, "x", "depthToSpace"),
                    o = "NHWC" === n ? r.shape[1] : r.shape[2],
                    i = "NHWC" === n ? r.shape[2] : r.shape[3],
                    a = "NHWC" === n ? r.shape[3] : r.shape[1];
                return D(0 <= o * e, function () {
                    return "Negative dimension size caused by overflow when multiplying\n      " + o + " and " + e + "  for depthToSpace with input shape\n      " + r.shape
                }), D(0 <= i * e, function () {
                    return "Negative dimension size caused by overflow when multiplying\n      " + i + " and " + e + " for depthToSpace with input shape\n          " + r.shape
                }), D(a % (e * e) == 0, function () {
                    return "Dimension size must be evenly divisible by " + e * e + " but is " + a + " for depthToSpace with input shape " + r.shape
                }), Zt.engine.runKernel(function (t) {
                    return t.depthToSpace(r, e, n)
                }, {
                    $x: r
                })
            }
        }),
        $i = Fe({
            expandDims_: function (t, e) {
                void 0 === e && (e = 0);
                var n = re(t, "x", "expandDims");
                D(e <= n.rank, function () {
                    return "Axis must be <= rank of the tensor"
                });
                var r = n.shape.slice();
                return e < 0 && (D(-(n.rank + 1) <= e, function () {
                    return "Axis must be in the interval [" + -(n.rank + 1) + ", " + n.rank + "]"
                }), e = n.rank + e + 1), r.splice(e, 0, 1), ia(n, r)
            }
        }),
        Ki = Fe({
            eye_: function (t, e, n, r) {
                void 0 === r && (r = "float32"), null == e && (e = t);
                for (var o = zi([t, e], r), i = t <= e ? t : e, a = 0; a < i; ++a) o.set(1, a, a);
                var s = o.toTensor().as2D(t, e);
                if (null == n) return s;
                if (1 === n.length) return ca($i(s, 0), [n[0], 1, 1]);
                if (2 === n.length) return ca($i($i(s, 0), 0), [n[0], n[1], 1, 1]);
                if (3 === n.length) return ca($i($i($i(s, 0), 0), 0), [n[0], n[1], n[2], 1, 1]);
                throw new Error("eye() currently supports only 1D and 2D batchShapes, but received " + n.length + "D.")
            }
        }),
        Xi = Fe({
            multinomial_: function (t, e, n, r) {
                void 0 === r && (r = !1);
                var o = re(t, "logits", "multinomial"),
                    i = o.size,
                    a = o.rank;
                if (i < 2) throw new Error("Error in multinomial: you need at least 2 outcomes, but got " + i + ".");
                if (2 < a) throw new Error("Rank of probabilities must be 1 or 2, but is " + a);
                n = n || Math.random();
                var s = 1 === a ? o.as2D(1, -1) : o,
                    u = Zt.engine.runKernel(function (t) {
                        return t.multinomial(s, r, e, n)
                    }, {
                        logits2D: s
                    });
                return 1 === a ? u.as1D() : u
            }
        }),
        Yi = Fe({
            oneHot_: function (t, e, n, r) {
                if (void 0 === n && (n = 1), void 0 === r && (r = 0), e < 2) throw new Error("Error in oneHot: depth must be >=2, but it is " + e);
                var o = re(t, "indices", "oneHot", "int32"),
                    i = o.shape.concat([e]);
                return o = o.flatten(), Zt.engine.runKernel(function (t) {
                    return t.oneHot(o, e, n, r)
                }, {
                    $indices: o
                }, function (t) {
                    return {
                        $indices: function () {
                            return Qe(o.shape, "float32")
                        }
                    }
                }).reshape(i)
            }
        }),
        Qi = Fe({
            pad_: function (t, e, n) {
                void 0 === n && (n = 0);
                var r = re(t, "x", "pad");
                if (0 === r.rank) throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");
                var o = e.map(function (t) {
                    return t[0]
                });
                return Zt.engine.runKernel(function (t) {
                    return t.pad(r, e, n)
                }, {
                    $x: r
                }, function (t) {
                    return {
                        $x: function () {
                            return t.slice(o, r.shape)
                        }
                    }
                })
            }
        }),
        Ji = Fe({
            pad1d_: function (t, e, n) {
                return void 0 === n && (n = 0), D(2 === e.length, function () {
                    return "Invalid number of paddings. Must be length of 2."
                }), Qi(t, [e], n)
            }
        }),
        Zi = Fe({
            pad2d_: function (t, e, n) {
                return void 0 === n && (n = 0), D(2 === e.length && 2 === e[0].length && 2 === e[1].length, function () {
                    return "Invalid number of paddings. Must be length of 2 each."
                }), Qi(t, e, n)
            }
        }),
        ta = Fe({
            pad3d_: function (t, e, n) {
                return void 0 === n && (n = 0), D(3 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length, function () {
                    return "Invalid number of paddings. Must be length of 2 each."
                }), Qi(t, e, n)
            }
        }),
        ea = Fe({
            pad4d_: function (t, e, n) {
                return void 0 === n && (n = 0), D(4 === e.length && 2 === e[0].length && 2 === e[1].length && 2 === e[2].length && 2 === e[3].length, function () {
                    return "Invalid number of paddings. Must be length of 2 each."
                }), Qi(t, e, n)
            }
        }),
        na = Fe({
            rand_: function (t, e, n) {
                var r = B(t),
                    o = null;
                if (null == n || "float32" === n) o = new Float32Array(r);
                else if ("int32" === n) o = new Int32Array(r);
                else {
                    if ("bool" !== n) throw new Error("Unknown data type " + n);
                    o = new Uint8Array(r)
                }
                for (var i = 0; i < r; i++) o[i] = e();
                return dt.make(t, {
                    values: o
                }, n)
            }
        }),
        ra = Fe({
            randomNormal_: function (t, e, n, r, o) {
                if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r);
                for (var i = new Wi(e, n, r, !1, o), a = zi(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
                return a.toTensor()
            }
        }),
        oa = Fe({
            randomUniform_: function (t, e, n, r) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = "float32");
                for (var o = zi(t, r), i = 0; i < o.values.length; i++) o.values[i] = v(e, n);
                return o.toTensor()
            }
        }),
        ia = Fe({
            reshape_: function (t, e) {
                var n = re(t, "x", "reshape", null);
                return e = N(e, n.size), D(n.size === B(e), function () {
                    return "new shape and old shape must have the same number of elements."
                }), Zt.engine.runKernel(function (t) {
                    return t.reshape(n, e)
                }, {
                    $x: n
                }, function (t) {
                    return {
                        $x: function () {
                            return t.reshape(n.shape)
                        }
                    }
                })
            }
        }),
        aa = Fe({
            spaceToBatchND_: function (t, r, o) {
                var e = re(t, "x", "spaceToBatchND");
                return D(e.rank >= 1 + r.length, function () {
                    return "input rank " + e.rank + " should be > than [blockShape] " + r.length
                }), D(o.length === r.length, function () {
                    return "paddings.shape[0] " + o.length + " must be equal to [blockShape] " + r.length
                }), D(e.shape.reduce(function (t, e, n) {
                    return 0 < n && n <= r.length ? t && (e + o[n - 1][0] + o[n - 1][1]) % r[n - 1] == 0 : t
                }, !0), function () {
                    return "input spatial dimensions " + e.shape.slice(1) + " with paddings " + o.toString() + " must be divisible by blockShapes " + r.toString()
                }), Zt.engine.runKernel(function (t) {
                    return t.spaceToBatchND(e, r, o)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return t.batchToSpaceND(r, o)
                        }
                    }
                })
            }
        }),
        sa = Fe({
            squeeze_: function (t, e) {
                var n = re(t, "x", "squeeze");
                return ia(n, I(n.shape, e).newShape)
            }
        }),
        ua = Fe({
            stack_: function (t, e) {
                void 0 === e && (e = 0);
                var n = oe(t, "tensors", "stack");
                if (D(1 <= n.length, function () {
                        return "Pass at least one tensor to tf.stack"
                    }), 1 === n.length) return n[0].expandDims(e);
                var r = n[0].rank,
                    o = n[0].shape,
                    i = n[0].dtype;
                D(e <= r, function () {
                    return "Axis must be <= rank of the tensor"
                }), n.forEach(function (t) {
                    g(o, t.shape, "All tensors passed to stack must have matching shapes")
                }), n.forEach(function (t) {
                    D(i === t.dtype, function () {
                        return "All tensors passed to stack must have matching dtypes"
                    })
                });
                var a = n.map(function (t) {
                    return t.expandDims(e)
                });
                return _i(a, e)
            }
        }),
        ca = Fe({
            tile_: function (t, s) {
                var r = re(t, "x", "tile");
                return D(r.rank === s.length, function () {
                    return "Error in transpose: rank of input " + r.rank + " must match length of reps " + s + "."
                }), Zt.engine.runKernel(function (t, e) {
                    var n = t.tile(r, s);
                    return e([r]), n
                }, {
                    $x: r
                }, function (i, t) {
                    var a = t[0];
                    return {
                        $x: function () {
                            var t = nn(a);
                            if (1 === a.rank)
                                for (var e = 0; e < s[0]; ++e) t = t.add(i.slice([e * a.shape[0]], [a.shape[0]]));
                            else if (2 === a.rank)
                                for (e = 0; e < s[0]; ++e)
                                    for (var n = 0; n < s[1]; ++n) t = t.add(i.slice([e * a.shape[0], n * a.shape[1]], [a.shape[0], a.shape[1]]));
                            else if (3 === a.rank)
                                for (e = 0; e < s[0]; ++e)
                                    for (n = 0; n < s[1]; ++n)
                                        for (var r = 0; r < s[2]; ++r) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2]], [a.shape[0], a.shape[1], a.shape[2]]));
                            else {
                                if (4 !== a.rank) throw new Error("Gradient for tile operation is not implemented for rank-" + a.rank + " tensors yet.");
                                for (e = 0; e < s[0]; ++e)
                                    for (n = 0; n < s[1]; ++n)
                                        for (r = 0; r < s[2]; ++r)
                                            for (var o = 0; o < s[3]; ++o) t = t.add(i.slice([e * a.shape[0], n * a.shape[1], r * a.shape[2], o * a.shape[3]], [a.shape[0], a.shape[1], a.shape[2], a.shape[3]]))
                            }
                            return t
                        }
                    }
                })
            }
        }),
        la = Fe({
            truncatedNormal_: function (t, e, n, r, o) {
                if (void 0 === e && (e = 0), void 0 === n && (n = 1), null != r && "bool" === r) throw new Error("Unsupported data type " + r);
                for (var i = new Wi(e, n, r, !0, o), a = zi(t, r), s = 0; s < a.values.length; s++) a.values[s] = i.nextValue();
                return a.toTensor()
            }
        }),
        ha = Fe({
            unstack_: function (t, e) {
                void 0 === e && (e = 0), e = e || 0;
                var n = re(t, "x", "unstack");
                return D(e >= -n.shape.length && e < n.shape.length, function () {
                    return "Axis = " + e + " is not in [-" + n.shape.length + ", " + n.shape.length + ")"
                }), e < 0 && (e += n.shape.length), Zt.engine.runKernel(function (t) {
                    return t.unstack(n, e)
                }, {
                    $x: n
                }, function (t) {
                    return {
                        $x: function () {
                            return ua(t, e)
                        }
                    }
                })
            }
        }),
        pa = function (h, p) {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s, u, c, l;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = re(h, "x", "setdiff1d"), n = re(p, "y", "setdiff1d"), D(e.dtype === n.dtype, function () {
                                return "x and y should have the same dtype, but got x (" + e.dtype + ") and y (" + n.dtype + ")."
                            }), D(1 === e.rank, function () {
                                return "x should be 1D tensor, but got x (" + e.shape + ")."
                            }), D(1 === n.rank, function () {
                                return "y should be 1D tensor, but got y (" + n.shape + ")."
                            }), [4, e.data()];
                        case 1:
                            return r = t.sent(), [4, n.data()];
                        case 2:
                            for (o = t.sent(), i = new Set(o), c = a = 0; c < r.length; c++) i.has(r[c]) || a++;
                            for (s = new lt([a], e.dtype), u = new lt([a], "int32"), l = c = 0; c < r.length; c++) i.has(r[c]) || (s.values[l] = r[c], u.values[l] = c, l++);
                            return [2, [s.toTensor(), u.toTensor()]]
                    }
                })
            })
        };

    function fa(t, e) {
        for (var n = [], r = 0; r < e.length; r++) e[r] && n.push(r);
        var o = zi(t, "int32"),
            i = zi([n.length, t.length], "int32");
        for (r = 0; r < n.length; r++) {
            var a = o.indexToLoc(n[r]),
                s = r * t.length;
            i.values.set(a, s)
        }
        return i.toTensor()
    }
    var da = {};
    var va = function () {
        function t(t) {
            if (this.gpgpu = t, this.pendingRead = new WeakMap, this.pendingDisposal = new WeakSet, this.dataRefCount = new WeakMap, this.lruDataGPU = [], this.numBytesInGPU = 0, this.uploadWaitMs = 0, this.downloadWaitMs = 0, this.disposed = !1, Zt.get("WEBGL_VERSION") < 1) throw new Error("WebGL is not supported on this device");
            if (null == t) {
                var e = l(Zt.get("WEBGL_VERSION"));
                this.binaryCache = ((n = Zt.get("WEBGL_VERSION")) in da || (da[n] = {}), da[n]), this.gpgpu = new Mo(e), this.canvas = e.canvas, this.gpgpuCreatedLocally = !0
            } else this.binaryCache = {}, this.gpgpuCreatedLocally = !1, this.canvas = t.gl.canvas;
            var n;
            this.textureManager = new ui(this.gpgpu)
        }
        return t.prototype.register = function (t, e, n) {
            if (this.texData.has(t)) throw new Error("Data buffer is already registered");
            this.texData.set(t, {
                shape: e,
                dtype: n
            })
        }, t.prototype.setDataMover = function (t) {
            this.texData = new rn(t)
        }, t.prototype.fromPixels = function (t, e) {
            if (null == t) throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
            var n = [t.height, t.width],
                r = [t.height, t.width, e];
            if (Zt.get("IS_BROWSER")) {
                if (!(t instanceof HTMLVideoElement || t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof ImageData)) throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was " + t.constructor.name);
                if (t instanceof HTMLVideoElement) {
                    if (null == this.fromPixels2DContext) {
                        if ("complete" !== document.readyState) throw new Error("The DOM is not ready yet. Please call tf.browser.fromPixels() once the DOM is ready. One way to do that is to add an event listener for `DOMContentLoaded` on the document object");
                        this.fromPixels2DContext = document.createElement("canvas").getContext("2d")
                    }
                    this.fromPixels2DContext.canvas.width = t.width, this.fromPixels2DContext.canvas.height = t.height, this.fromPixels2DContext.drawImage(t, 0, 0, t.width, t.height), t = this.fromPixels2DContext.canvas
                }
            }
            var o = this.makeTensorHandle(n, "int32");
            this.texData.get(o.dataId).usage = wr.PIXELS, this.gpgpu.uploadPixelDataToTexture(this.getTexture(o.dataId), t);
            var i = new yr(r),
                a = this.compileAndRun(i, [o]);
            return this.disposeData(o.dataId), a
        }, t.prototype.makeTensorHandle = function (t, e) {
            var n = {};
            return this.register(n, t, e), {
                dataId: n,
                shape: t,
                dtype: e
            }
        }, t.prototype.write = function (t, e) {
            if (null == e) throw new Error("MathBackendWebGL.write(): values can not be null");
            if (Zt.get("DEBUG"))
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    if (!Dr(r)) throw Error("The value " + r + " cannot be represented on this device.")
                }
            var o = this.texData.get(t),
                i = o.texture,
                a = o.texShape,
                s = o.usage,
                u = o.dtype,
                c = o.isPacked;
            if ("complex64" === u) throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");
            null != i && (this.releaseTexture(t, i, a, s, u, c), o.texture = null, o.texShape = null), o.usage = wr.UPLOAD, o.values = e
        }, t.prototype.readSync = function (t) {
            var e = this.texData.get(t),
                n = e.values,
                r = e.dtype,
                o = e.complexTensors,
                i = e.slice,
                a = e.shape;
            if (null != i) {
                var s = new mi(a, wi),
                    u = this.compileAndRun(s, [{
                        dataId: t,
                        shape: a,
                        dtype: r
                    }]),
                    c = this.readSync(u.dataId);
                return u.dispose(), c
            }
            if (null != n) return this.convertAndCacheOnCPU(t);
            if ("string" === r) return n;
            var l, h, p = null != this.activeTimers;
            return p && (l = performance.now()), h = "complex64" === r ? un(o.real.dataSync(), o.imag.dataSync()) : this.getValuesFromTexture(t), p && (this.downloadWaitMs += performance.now() - l), this.convertAndCacheOnCPU(t, h)
        }, t.prototype.read = function (S) {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, w, b, E, C, _;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (this.pendingRead.has(S)) return r = this.pendingRead.get(S), [2, new Promise(function (t) {
                                return r.push(t)
                            })];
                            if (o = this.texData.get(S), i = o.texture, a = o.values, s = o.texShape, u = o.isPacked, c = o.shape, l = o.slice, h = o.dtype, null != l) return p = new mi(c, wi), f = this.compileAndRun(p, [{
                                dataId: S,
                                shape: c,
                                dtype: h
                            }]), d = this.read(f.dataId), f.dispose(), [2, d];
                            if (null != a) return [2, this.convertAndCacheOnCPU(S)];
                            if (this.pendingRead.set(S, []), !Zt.get("WEBGL_DOWNLOAD_FLOAT_ENABLED") && 2 === Zt.get("WEBGL_VERSION")) throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");
                            return v = s[1], m = s[0], u && (e = kr(s[0], s[1]), v = e[0], m = e[1]), g = this.gpgpu.maybeCreateBufferFromTexture(i, m, v), [4, this.gpgpu.createAndWaitForFence()];
                        case 1:
                            return t.sent(), y = g instanceof WebGLTexture ? this.getValuesFromTexture(S) : (x = B(c), u ? (w = oo(c), E = b = 1, c.length && (n = io(c), b = n[0], E = n[1]), this.gpgpu.downloadPackedMatrixFromBuffer(g, w, b, E, s[0], s[1]).subarray(0, x)) : this.gpgpu.downloadFloat32MatrixFromBuffer(g, s[0], s[1]).subarray(0, x)), C = this.convertAndCacheOnCPU(S, y), _ = this.pendingRead.get(S), this.pendingRead.delete(S), _.forEach(function (t) {
                                return t(C)
                            }), this.pendingDisposal.has(S) && (this.pendingDisposal.delete(S), this.disposeData(S)), [2, C]
                    }
                })
            })
        }, t.prototype.getValuesFromTexture = function (e) {
            var t, n = this,
                r = this.texData.get(e),
                o = r.shape,
                i = r.dtype,
                a = r.texture,
                s = r.texShape,
                u = B(o);
            if (Zt.get("WEBGL_DOWNLOAD_FLOAT_ENABLED")) {
                if (this.texData.get(e).isPacked) {
                    var c = oo(o),
                        l = 1,
                        h = 1;
                    return o.length && (l = (t = io(o))[0], h = t[1]), this.gpgpu.downloadMatrixFromPackedTexture(a, c, l, h, s[0], s[1]).subarray(0, u)
                }
                return this.gpgpu.downloadFloat32MatrixFromOutputTexture(a, s[0], s[1]).subarray(0, u)
            }
            var p = this.makeTensorHandle(o, "float32");
            p.size = B(o), this.texData.get(p.dataId).usage = wr.DOWNLOAD;
            var f = ue(function () {
                    var t = new fr(o);
                    return n.compileAndRun(t, [{
                        shape: o,
                        dtype: i,
                        dataId: e
                    }], p, null, !1)
                }),
                d = this.texData.get(f.dataId),
                v = this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(d.texture, d.texShape[0], d.texShape[1]).subarray(0, u);
            return this.disposeData(p.dataId), v
        }, t.prototype.time = function (u) {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = this.activeTimers, r = !(n = []), null == this.programTimersStack ? (this.programTimersStack = n, r = !0) : this.activeTimers.push(n), this.activeTimers = n, u(), o = x(this.activeTimers.map(function (t) {
                                return t.query
                            })).filter(function (t) {
                                return null != t
                            }), i = x(this.activeTimers.map(function (t) {
                                return t.name
                            })).filter(function (t) {
                                return null != t
                            }), this.activeTimers = e, r && (this.programTimersStack = null), [4, Promise.all(o)];
                        case 1:
                            return a = t.sent(), s = {
                                uploadWaitMs: this.uploadWaitMs,
                                downloadWaitMs: this.downloadWaitMs,
                                kernelMs: d(a),
                                getExtraProfileInfo: function () {
                                    return a.map(function (t, e) {
                                        return {
                                            name: i[e],
                                            ms: t
                                        }
                                    }).map(function (t) {
                                        return t.name + ": " + t.ms
                                    }).join(", ")
                                },
                                wallMs: null
                            }, this.uploadWaitMs = 0, this.downloadWaitMs = 0, [2, s]
                    }
                })
            })
        }, t.prototype.memory = function () {
            return {
                unreliable: !1,
                numBytesInGPU: this.numBytesInGPU
            }
        }, t.prototype.startTimer = function () {
            return 0 < Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? this.gpgpu.beginQuery() : {
                startMs: performance.now(),
                endMs: null
            }
        }, t.prototype.endTimer = function (t) {
            return 0 < Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? this.gpgpu.endQuery() : t.endMs = performance.now(), t
        }, t.prototype.getQueryTime = function (n) {
            return m(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    return 0 < Zt.get("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION") ? [2, this.gpgpu.waitForQueryAndGetTime(n)] : [2, (e = n).endMs - e.startMs]
                })
            })
        }, t.prototype.disposeData = function (t) {
            if (!this.pendingDisposal.has(t))
                if (this.pendingRead.has(t)) this.pendingDisposal.add(t);
                else if (this.texData.has(t)) {
                var e = this.texData.get(t),
                    n = e.texture,
                    r = e.dtype,
                    o = e.texShape,
                    i = e.usage,
                    a = e.complexTensors,
                    s = e.isPacked,
                    u = e.slice;
                if (null != n) {
                    var c = u && u.origDataId || t,
                        l = this.dataRefCount.get(c);
                    1 < l ? this.dataRefCount.set(c, l - 1) : (this.dataRefCount.delete(c), this.releaseTexture(t, n, o, i, r, s), this.texData.delete(t))
                }
                null != a && (a.real.dispose(), a.imag.dispose())
            }
        }, t.prototype.getTexture = function (t) {
            return this.uploadToGPU(t), this.texData.get(t).texture
        }, t.prototype.getCPUBackend = function () {
            return Zt.get("WEBGL_CPU_FORWARD") ? (null == this.cpuBackend && (this.cpuBackend = Zt.findBackend("cpu")), this.cpuBackend) : null
        }, t.prototype.shouldExecuteOnCPU = function (t, e) {
            var n = this;
            return void 0 === e && (e = 128), null != this.getCPUBackend() && t.every(function (t) {
                return null == n.texData.get(t.dataId).texture && t.size < e
            })
        }, t.prototype.getGPGPUContext = function () {
            return this.gpgpu
        }, t.prototype.getCanvas = function () {
            return this.canvas
        }, t.prototype.complex = function (t, e) {
            var n = this.makeOutputArray(t.shape, "complex64");
            return this.texData.get(n.dataId).complexTensors = {
                real: Zt.engine.keep(t.clone()),
                imag: Zt.engine.keep(e.clone())
            }, n
        }, t.prototype.real = function (t) {
            return this.texData.get(t.dataId).complexTensors.real.clone()
        }, t.prototype.imag = function (t) {
            return this.texData.get(t.dataId).complexTensors.imag.clone()
        }, t.prototype.slice = function (t, e, n) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.slice(t, e, n);
            var r = this.texData.get(t.dataId).isPacked,
                o = Oe(t.shape, e, n);
            if (!r && o) return this.uploadToGPU(t.dataId), this.shallowSlice(t, e, n);
            var i = Zt.get("WEBGL_PACK_ARRAY_OPERATIONS") ? new ai(n) : new oi(n),
                a = i.getCustomSetupFunc(e);
            return this.compileAndRun(i, [t], null, a)
        }, t.prototype.shallowSlice = function (t, e, n) {
            var r = this.texData.get(t.dataId),
                o = dt.make(n, {}, t.dtype, this),
                i = this.texData.get(o.dataId);
            Object.assign(i, r), i.shape = n, i.dtype = t.dtype;
            var a = Pe(e, t.strides);
            r.slice && (a += r.slice.flatOffset), i.slice = {
                flatOffset: a,
                origDataId: r.slice && r.slice.origDataId || t.dataId
            };
            var s = this.dataRefCount.get(i.slice.origDataId) || 1;
            return this.dataRefCount.set(i.slice.origDataId, s + 1), o
        }, t.prototype.stridedSlice = function (t, e, n, r, o, i, a, s, u) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.stridedSlice(t, e, n, r, o, i, a, s, u);
            var c = Ae(t.shape, e, n, r, o, i, a, s, u),
                l = c[0],
                h = c[1],
                p = c[2],
                f = h.filter(function (t, e) {
                    return -1 === p.indexOf(e)
                });
            if (f.some(function (t) {
                    return 0 === t
                })) return Ge([], f);
            var d = new si(l, r, h, p);
            return this.compileAndRun(d, [t])
        }, t.prototype.reverse = function (t, e) {
            var n = Zt.get("WEBGL_PACK_ARRAY_OPERATIONS") ? new ti(t.shape, e) : new Zo(t.shape, e);
            return this.compileAndRun(n, [t])
        }, t.prototype.concat = function (t, e) {
            if (this.shouldExecuteOnCPU(t)) return this.cpuBackend.concat(t, e);
            if (1 === t.length) return t[0];
            if (t.length > Zt.get("WEBGL_MAX_TEXTURES_IN_SHADER")) {
                var n = Math.floor(t.length / 2),
                    r = this.concat(t.slice(0, n), e),
                    o = this.concat(t.slice(n), e);
                return this.concat([r, o], e)
            }
            if (Zt.get("WEBGL_PACK_ARRAY_OPERATIONS") && 1 < t[0].rank) {
                var i = new Jn(t.map(function (t) {
                    return t.shape
                }), e);
                return this.compileAndRun(i, t)
            }
            var a = Re(t.map(function (t) {
                    return t.shape
                }), e),
                s = t.map(function (t) {
                    return t.as2D(-1, B(t.shape.slice(e)))
                }),
                u = new Qn(s.map(function (t) {
                    return t.shape
                }));
            return this.compileAndRun(u, s).reshape(a)
        }, t.prototype.neg = function (t) {
            var e = new mi(t.shape, "return -x;");
            return this.compileAndRun(e, [t])
        }, t.prototype.batchMatMul = function (t, e, n, r) {
            var o = n ? t.shape[2] : t.shape[1],
                i = r ? e.shape[1] : e.shape[2],
                a = n ? t.shape[1] : t.shape[2],
                s = t.shape[0];
            if ((1 === o || 1 === i) && 1e3 < a) {
                n && (t = t.transpose([0, 2, 1])), r && (e = e.transpose([0, 2, 1]));
                var u = 1 === i ? t : t.as3D(s, a, 1),
                    c = 1 === i ? 2 : 1,
                    l = 1 === i ? e.as3D(s, 1, a) : e;
                return this.multiply(u, l).sum(c, !0)
            }
            var h = kt(t.dtype, e.dtype),
                p = new Wo(t.shape, [s, o, i], n, r),
                f = this.makePackedTensor(p.outputShape, h);
            return this.compileAndRun(p, [t, e], f)
        }, t.prototype.fusedBatchMatMul = function (t, e, n, r, o, i) {
            var a = n ? t.shape[2] : t.shape[1],
                s = r ? e.shape[1] : e.shape[2],
                u = t.shape[0],
                c = kt(t.dtype, e.dtype),
                l = new Wo(t.shape, [u, a, s], n, r, !!o, i ? function (t, e) {
                    if (void 0 === e && (e = !1), "linear" === t) return "return x;";
                    if ("relu" === t) return e ? bi : yi;
                    throw new Error("Activation " + t + " has not been implemented for the WebGL backend.")
                }(i, !0) : null),
                h = this.makePackedTensor(l.outputShape, c),
                p = [t, e];
            return o && p.push(o), this.compileAndRun(l, p, h)
        }, t.prototype.multiply = function (t, e) {
            if ("complex64" === t.dtype) {
                var n = this.texData.get(t.dataId),
                    r = this.texData.get(e.dataId),
                    o = new Un(Wn, t.shape, e.shape),
                    i = new Un(zn, t.shape, e.shape),
                    a = [this.makeComplexComponentTensorHandle(t, n.complexTensors.real), this.makeComplexComponentTensorHandle(t, n.complexTensors.imag), this.makeComplexComponentTensorHandle(e, r.complexTensors.real), this.makeComplexComponentTensorHandle(e, r.complexTensors.imag)],
                    s = this.compileAndRun(o, a),
                    u = this.compileAndRun(i, a),
                    c = this.complex(s, u);
                return s.dispose(), u.dispose(), c
            }
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.multiply(t, e);
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, Hn, t.dtype);
            var l = new jn(Hn, t.shape, e.shape),
                h = this.makeOutputArray(l.outputShape, t.dtype);
            return this.compileAndRun(l, [t, e], h)
        }, t.prototype.batchNormalization = function (t, e, n, r, o, i) {
            var a = [t, e, n],
                s = null;
            null != i && (s = i.shape, a.push(i));
            var u = null;
            if (null != o && (u = o.shape, a.push(o)), Zt.get("WEBGL_PACK_BATCHNORMALIZATION")) {
                var c = new Bn(t.shape, e.shape, n.shape, s, u, r);
                return this.compileAndRun(c, a)
            }
            var l = new Ln(t.shape, e.shape, n.shape, s, u, r);
            return this.compileAndRun(l, a)
        }, t.prototype.localResponseNormalization4D = function (t, e, n, r, o) {
            var i = new Fo(t.shape, e, n, r, o);
            return this.compileAndRun(i, [t])
        }, t.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
            var s = new Lo(e.shape, r, o, i, a);
            return this.compileAndRun(s, [e, n, t])
        }, t.prototype.tile = function (t, e) {
            var n = new hi(t.shape, e);
            return this.compileAndRun(n, [t])
        }, t.prototype.pad = function (t, e, n) {
            var r = Zt.get("WEBGL_PACK_ARRAY_OPERATIONS") ? new Ho(t.shape, e, n) : new Vo(t.shape, e, n);
            return this.compileAndRun(r, [t])
        }, t.prototype.transpose = function (t, e) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.transpose(t, e);
            var n = Zt.get("WEBGL_PACK_ARRAY_OPERATIONS") ? new fi(t.shape, e) : new pi(t.shape, e);
            return this.compileAndRun(n, [t])
        }, t.prototype.gather = function (t, e, n) {
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.gather(t, e, n);
            var r = new xr(t.shape, e.size, n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.batchToSpaceND = function (t, e, n) {
            D(t.rank <= 4, function () {
                return "batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"
            });
            var r = e.reduce(function (t, e) {
                    return t * e
                }),
                o = de(t.shape, e, r),
                i = ve(o.length, e.length),
                a = me(t.shape, e, r),
                s = ge(n, e.length),
                u = ye(a, n, e.length);
            return t.reshape(o).transpose(i).reshape(a).slice(s, u)
        }, t.prototype.spaceToBatchND = function (t, e, n) {
            D(t.rank <= 4, function () {
                return "spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"
            });
            var r = e.reduce(function (t, e) {
                    return t * e
                }),
                o = [
                    [0, 0]
                ];
            o.push.apply(o, n);
            for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
            var a = t.pad(o),
                s = de(a.shape, e, r, !1),
                u = ve(s.length, e.length, !1),
                c = me(a.shape, e, r, !1);
            return a.reshape(s).transpose(u).reshape(c)
        }, t.prototype.reduce = function (t, e, n) {
            var r = t.shape[0],
                o = t.shape[1],
                i = ke(o),
                a = new jo({
                    windowSize: i,
                    inSize: o,
                    batchSize: r
                }, e),
                s = a.outputShape,
                u = s[0],
                c = s[1],
                l = this.makeOutputArray([u, c], n);
            return this.compileAndRun(a, [t], l), 1 === l.shape[1] ? l : this.reduce(l, e, n)
        }, t.prototype.argReduce = function (t, e, n) {
            void 0 === n && (n = null);
            var r = t.shape[0],
                o = t.shape[1];
            null != n && (r = n.shape[0], o = n.shape[1]);
            var i = ke(o),
                a = new dn({
                    windowSize: i,
                    inSize: o,
                    batchSize: r
                }, e, null == n),
                s = a.outputShape,
                u = s[0],
                c = s[1],
                l = this.makeOutputArray([u, c], "int32"),
                h = [t];
            return null != n && h.push(n), this.compileAndRun(a, h, l), 1 === l.shape[1] ? l : this.argReduce(t, e, l)
        }, t.prototype.argReducePacked = function (t, e, n) {
            void 0 === n && (n = null);
            var r = null != n ? n.shape : t.shape,
                o = ke(r[r.length - 1]),
                i = new Pn(r, o, e, null == n),
                a = this.makePackedTensor(i.outputShape, "int32"),
                s = null == n ? [t] : [t, n];
            return this.compileAndRun(i, s, a), a.rank === t.rank ? this.argReducePacked(t, e, a) : a
        }, t.prototype.sum = function (t, e) {
            Ee("sum", e, t.rank);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o),
                a = It(t.dtype);
            return this.reduce(i, "sum", a).reshape(r)
        }, t.prototype.prod = function (t, e) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.prod(t, e);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o),
                a = It(t.dtype);
            return this.reduce(i, "prod", a).reshape(r)
        }, t.prototype.unsortedSegmentSum = function (t, e, n) {
            var r = 0,
                o = Ce([r], t.rank),
                i = t;
            null != o && (i = t.transpose(o), r = Se(1, t.rank)[0]);
            var a = function (t, e, n) {
                    for (var r = [], o = t.length, i = 0; i < o; i++) i !== e ? r.push(t[i]) : r.push(n);
                    return r
                }(i.shape, r, n),
                s = B([i.shape[r]]),
                u = i.as2D(-1, s),
                c = It(t.dtype),
                l = this.segOpCompute(u, "unsortedSegmentSum", e, c, n).reshape(a);
            return null != o && (l = l.transpose(_e(o))), l
        }, t.prototype.segOpCompute = function (t, e, n, r, o) {
            var i = t.shape[0],
                a = t.shape[1],
                s = function (t, e) {
                    var n, r = !1;
                    for (t <= 30 ? (n = t, r = !0) : n = $(t, Math.floor(Math.sqrt(t))); !r;) e < n || n === t ? r = !0 : n = $(t, n + 1);
                    return n
                }(a, o),
                u = new ni({
                    windowSize: s,
                    inSize: a,
                    batchSize: i,
                    numSegments: o
                }, e),
                c = u.outputShape,
                l = c[0],
                h = c[1],
                p = this.makeOutputArray([l, h], r);
            return this.compileAndRun(u, [t, n], p), p.shape[1] === o ? p : (n = tn(0, o).tile([a / s]), this.segOpCompute(p, e, n, r, o))
        }, t.prototype.argMinMaxReduce = function (t, e, n) {
            var r = [e];
            if (Ee("arg" + n.charAt(0).toUpperCase() + n.slice(1), r, t.rank), !Zt.get("WEBGL_PACK_REDUCE") || t.rank <= 2) {
                var o = we(t.shape, r),
                    i = o[0],
                    a = B(o[1]),
                    s = t.as2D(-1, a);
                return this.argReduce(s, n).reshape(i)
            }
            return this.argReducePacked(t, n)
        }, t.prototype.argMin = function (t, e) {
            return this.argMinMaxReduce(t, e, "min")
        }, t.prototype.argMax = function (t, e) {
            return this.argMinMaxReduce(t, e, "max")
        }, t.prototype.cumsum = function (t, e, n, r) {
            if (e !== t.rank - 1) throw new Error("WebGL cumsum shader expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
            var o = new lr(t.shape, n, r);
            return this.compileAndRun(o, [t])
        }, t.prototype.equal = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(equal(a, b));\n", "bool");
            var n = new jn("return float(a == b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.notEqual = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(notEqual(a, b));\n", "bool");
            var n = new jn("return float(a != b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.less = function (t, e) {
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.less(t, e);
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(lessThan(a, b));\n", "bool");
            var n = new jn("return float(a < b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.lessEqual = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(lessThanEqual(a, b));\n", "bool");
            var n = new jn("return float(a <= b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.greater = function (t, e) {
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.greater(t, e);
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(greaterThan(a, b));\n", "bool");
            var n = new jn("return float(a > b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.greaterEqual = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(greaterThanEqual(a, b));\n", "bool");
            var n = new jn("return float(a >= b);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.logicalNot = function (t) {
            var e = new mi(t.shape, "return float(!(x >= 1.0));");
            return this.compileAndRun(e, [t])
        }, t.prototype.logicalAnd = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return vec4(\n    vec4(greaterThanEqual(a, vec4(1.0))) *\n    vec4(greaterThanEqual(b, vec4(1.0))));\n", "bool");
            var n = new jn("return float(a >= 1.0 && b >= 1.0);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.logicalOr = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  return min(\n    vec4(greaterThanEqual(a, vec4(1.0))) +\n    vec4(greaterThanEqual(b, vec4(1.0))),\n    vec4(1.0));\n", "bool");
            var n = new jn("return float(a >= 1.0 || b >= 1.0);", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "bool");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.select = function (t, e, n) {
            var r = new ri(t.rank, e.shape, e.rank),
                o = this.makeOutputArray(r.outputShape, kt(e.dtype, n.dtype));
            return this.compileAndRun(r, [t, e, n], o)
        }, t.prototype.where = function (t) {
            fe("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");
            var e = t.dataSync();
            return fa(t.shape, e)
        }, t.prototype.topk = function (t, e, n) {
            return fn(t.dataSync(), t.shape, t.dtype, e)
        }, t.prototype.min = function (t, e) {
            Ee("min", e, t.rank);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o);
            return this.reduce(i, "min", i.dtype).reshape(r)
        }, t.prototype.minimum = function (t, e) {
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.minimum(t, e);
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 result = vec4(min(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new jn("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return min(a, b);\n", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.mod = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 result = mod(a, b);\n  vec4 isNaN = vec4(equal(b, vec4(0.0)));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new jn("if (b == 0.0) return NAN;\n  return mod(a, b);", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.max = function (t, e) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.max(t, e);
            Ee("max", e, t.rank);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o);
            return this.reduce(i, "max", i.dtype).reshape(r)
        }, t.prototype.maximum = function (t, e) {
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.maximum(t, e);
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 result = vec4(max(a, b));\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new jn("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return max(a, b);\n", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.all = function (t, e) {
            Ee("all", e, t.rank);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o);
            return this.reduce(i, "all", i.dtype).reshape(r)
        }, t.prototype.any = function (t, e) {
            Ee("any", e, t.rank);
            var n = we(t.shape, e),
                r = n[0],
                o = B(n[1]),
                i = t.as2D(-1, o);
            return this.reduce(i, "any", i.dtype).reshape(r)
        }, t.prototype.squaredDifference = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n(qn, t.shape, e.shape) : new jn(qn, t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.realDivide = function (t, e) {
            var n = new jn("if (a == b) return 1.0;\n  return a / b;", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "float32");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.floorDiv = function (t, e) {
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, "\n  vec4 resultSign = sign(a) * sign(b);\n  ivec4 ia = round(a);\n  ivec4 ib = round(b);\n  ivec4 result = ia / ib;\n  ivec4 amodb = ia - ib * result;\n\n  // Vectorize INT_DIV\n  // if (resultSign < 0.0 && amodb != 0) result -= 1;\n  // return float(result);\n  return vec4(result -\n     ivec4(lessThan(resultSign, vec4(0.0))) * ivec4(notEqual(amodb, ivec4(0))));\n", "int32");
            var n = new jn("\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n", t.shape, e.shape),
                r = this.makeOutputArray(n.outputShape, "int32");
            return this.compileAndRun(n, [t, e], r)
        }, t.prototype.add = function (t, e) {
            if ("complex64" === t.dtype && "complex64" === e.dtype) return this.complexSeparableBinaryOp(t, e, Gn);
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.add(t, e);
            var n = kt(t.dtype, e.dtype);
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, Gn, n);
            var r = new jn(Gn, t.shape, e.shape),
                o = this.makeOutputArray(r.outputShape, n);
            return this.compileAndRun(r, [t, e], o)
        }, t.prototype.packedBinaryOp = function (t, e, n, r) {
            var o = new $n(n, t.shape, e.shape),
                i = this.makePackedTensor(o.outputShape, r);
            return this.compileAndRun(o, [t, e], i)
        }, t.prototype.complexSeparableBinaryOp = function (s, u, c) {
            var l = this,
                t = this.texData.get(s.dataId),
                e = this.texData.get(u.dataId),
                n = [
                    [t.complexTensors.real, e.complexTensors.real],
                    [t.complexTensors.imag, e.complexTensors.imag]
                ].map(function (t) {
                    var e = t[0],
                        n = t[1],
                        r = l.makeComplexComponentTensorHandle(s, e),
                        o = l.makeComplexComponentTensorHandle(u, n),
                        i = new jn(c, s.shape, u.shape),
                        a = l.makeOutputArray(i.outputShape, kt(e.dtype, n.dtype));
                    return l.compileAndRun(i, [r, o], a)
                }),
                r = n[0],
                o = n[1],
                i = this.complex(r, o);
            return r.dispose(), o.dispose(), i
        }, t.prototype.makeComplexComponentTensorHandle = function (t, e) {
            return {
                dataId: e.dataId,
                dtype: e.dtype,
                shape: t.shape
            }
        }, t.prototype.addN = function (t) {
            for (var e = t[0], n = 1; n < t.length; n++) e = this.add(e, t[n]);
            return e
        }, t.prototype.subtract = function (t, e) {
            if ("complex64" === t.dtype && "complex64" === e.dtype) return this.complexSeparableBinaryOp(t, e, Vn);
            if (this.shouldExecuteOnCPU([t, e])) return this.cpuBackend.subtract(t, e);
            var n = kt(t.dtype, e.dtype);
            if (Zt.get("WEBGL_PACK_BINARY_OPERATIONS")) return this.packedBinaryOp(t, e, Vn, t.dtype);
            var r = new jn(Vn, t.shape, e.shape),
                o = this.makeOutputArray(r.outputShape, n);
            return this.compileAndRun(r, [t, e], o)
        }, t.prototype.pow = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS"),
                r = n ? new $n("\n  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.\n  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));\n  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);\n  vec4 result = multiplier * pow(abs(a), b);\n\n  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new jn("\nif(a < 0.0 && floor(b) < b){\n  return NAN;\n}\nreturn (round(mod(b, 2.0)) != 1) ?\n    pow(abs(a), b) : sign(a) * pow(abs(a), b);\n", t.shape, e.shape),
                o = kt(t.dtype, e.dtype),
                i = n ? this.makePackedTensor(r.outputShape, o) : this.makeOutputArray(r.outputShape, o);
            return this.compileAndRun(r, [t, e], i)
        }, t.prototype.ceil = function (t) {
            var e = new mi(t.shape, "return ceil(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.floor = function (t) {
            var e = new mi(t.shape, "return floor(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.sign = function (t) {
            var e = new mi(t.shape, "\n  if (isnan(x)) { return 0.0; }\n  return sign(x);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.isNaN = function (t) {
            var e = new mi(t.shape, "return float(isnan(x));"),
                n = this.makeOutputArray(e.outputShape, "bool");
            return this.compileAndRun(e, [t], n)
        }, t.prototype.isInf = function (t) {
            var e = new mi(t.shape, "return float(isinf(x));"),
                n = this.makeOutputArray(e.outputShape, "bool");
            return this.compileAndRun(e, [t], n)
        }, t.prototype.isFinite = function (t) {
            var e = new mi(t.shape, "return float(!isnan(x) && !isinf(x));"),
                n = this.makeOutputArray(e.outputShape, "bool");
            return this.compileAndRun(e, [t], n)
        }, t.prototype.round = function (t) {
            var e = new mi(t.shape, "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.exp = function (t) {
            var e;
            return e = Zt.get("WEBGL_PACK") ? new Ei(t.shape, xi) : new mi(t.shape, xi), this.compileAndRun(e, [t])
        }, t.prototype.expm1 = function (t) {
            var e = new mi(t.shape, "return exp(x) - 1.0;");
            return this.compileAndRun(e, [t])
        }, t.prototype.log = function (t) {
            var e;
            return e = Zt.get("WEBGL_PACK") ? new Ei(t.shape, "\n  vec4 result = log(x);\n  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));\n  result.r = isNaN.r == 1.0 ? NAN : result.r;\n  result.g = isNaN.g == 1.0 ? NAN : result.g;\n  result.b = isNaN.b == 1.0 ? NAN : result.b;\n  result.a = isNaN.a == 1.0 ? NAN : result.a;\n\n  return result;\n") : new mi(t.shape, "if (x < 0.0) return NAN;\n  return log(x);"), this.compileAndRun(e, [t])
        }, t.prototype.log1p = function (t) {
            var e = new mi(t.shape, "return log(1.0 + x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.sqrt = function (t) {
            var e = new mi(t.shape, "return sqrt(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.rsqrt = function (t) {
            if (this.shouldExecuteOnCPU([t])) return this.cpuBackend.rsqrt(t);
            var e = new mi(t.shape, "return inversesqrt(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.square = function (t) {
            var e = new mi(t.shape, "return x * x;");
            return this.compileAndRun(e, [t])
        }, t.prototype.reciprocal = function (t) {
            var e = new mi(t.shape, "return 1.0 / x;");
            return this.compileAndRun(e, [t])
        }, t.prototype.relu = function (t) {
            var e;
            return e = Zt.get("WEBGL_PACK") ? new Ei(t.shape, bi) : new mi(t.shape, yi), this.compileAndRun(e, [t])
        }, t.prototype.prelu = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));\n  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);\n", t.shape, e.shape) : new jn("return (a < 0.) ? b * a : a;", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.elu = function (t) {
            var e = new mi(t.shape, "return (x >= 0.0) ? x : (exp(x) - 1.0);");
            return this.compileAndRun(e, [t])
        }, t.prototype.eluDer = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));\n  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));\n", t.shape, e.shape) : new jn("return (b >= 1.0) ? a : a * (b + 1.0);", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.selu = function (t) {
            var e = new mi(t.shape, "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = 1.7580993408473768;\n  float scale = 1.0507009873554805;\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.int = function (t) {
            var e = new mi(t.shape, "return float(int(x));"),
                n = this.makeOutputArray(e.outputShape, "int32");
            return this.compileAndRun(e, [t], n)
        }, t.prototype.clip = function (t, e, n) {
            var r, o = (r = Zt.get("WEBGL_PACK_CLIP") ? new Xn(t.shape) : new Kn(t.shape)).getCustomSetupFunc(e, n);
            return this.compileAndRun(r, [t], null, o)
        }, t.prototype.abs = function (t) {
            var e = new mi(t.shape, "return abs(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.complexAbs = function (t) {
            var e = this.texData.get(t.dataId),
                n = new Yn(t.shape),
                r = [this.makeComplexComponentTensorHandle(t, e.complexTensors.real), this.makeComplexComponentTensorHandle(t, e.complexTensors.imag)];
            return this.compileAndRun(n, r)
        }, t.prototype.sigmoid = function (t) {
            var e = new mi(t.shape, "return 1.0 / (1.0 + exp(-1.0 * x));");
            return this.compileAndRun(e, [t])
        }, t.prototype.softplus = function (t) {
            var e = new mi(t.shape, "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.sin = function (t) {
            var e = new mi(t.shape, "if (isnan(x)) return x;\n  return sin(x);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.cos = function (t) {
            var e = new mi(t.shape, "if (isnan(x)) return x;\n  return cos(x);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.tan = function (t) {
            var e = new mi(t.shape, "return tan(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.asin = function (t) {
            var e = new mi(t.shape, "return asin(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.acos = function (t) {
            var e = new mi(t.shape, "return acos(x);");
            return this.compileAndRun(e, [t])
        }, t.prototype.atan = function (t) {
            var e = new mi(t.shape, "if (isnan(x)) return x;\n  return atan(x);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.atan2 = function (t, e) {
            var n = Zt.get("WEBGL_PACK_BINARY_OPERATIONS") ? new $n("\n  vec4 result = atan(a, b);\n  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));\n  \n  result.r = isNaN.r > 0. ? NAN : result.r;\n  result.g = isNaN.g > 0. ? NAN : result.g;\n  result.b = isNaN.b > 0. ? NAN : result.b;\n  result.a = isNaN.a > 0. ? NAN : result.a;\n\n  return result;\n", t.shape, e.shape) : new jn("\n  if (isnan(a)) return a;\n  if (isnan(b)) return b;\n\n  return atan(a, b);\n", t.shape, e.shape);
            return this.compileAndRun(n, [t, e])
        }, t.prototype.sinh = function (t) {
            var e = new mi(t.shape, "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.cosh = function (t) {
            var e = new mi(t.shape, "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.tanh = function (t) {
            var e = new mi(t.shape, "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n");
            return this.compileAndRun(e, [t])
        }, t.prototype.asinh = function (t) {
            var e = new mi(t.shape, "return log(x + sqrt(x * x + 1.0));");
            return this.compileAndRun(e, [t])
        }, t.prototype.acosh = function (t) {
            var e = new mi(t.shape, "if (isnan(x)) return x;\n  if (x < 1.0) return NAN;\n  return log(x + sqrt(x * x - 1.0));");
            return this.compileAndRun(e, [t])
        }, t.prototype.atanh = function (t) {
            var e = new mi(t.shape, "if (isnan(x)) return x;\n  if ((x < -1.0) || (x > 1.0)) return NAN;\n  return (log(1.0 + x) - log(1.0 - x)) / 2.0;");
            return this.compileAndRun(e, [t])
        }, t.prototype.erf = function (t) {
            var e = new mi(t.shape, '\n  // Error function is calculated approximately with elementary function.\n  // See "Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables", Abramowitz and Stegun.\n  float p = 0.3275911;\n  float a1 = 0.254829592;\n  float a2 = -0.284496736;\n  float a3 = 1.421413741;\n  float a4 = -1.453152027;\n  float a5 = 1.061405429;\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n');
            return this.compileAndRun(e, [t])
        }, t.prototype.step = function (t, e) {
            var n, r = new mi(t.shape, (void 0 === (n = e) && (n = 0), gi + "\n    return x > 0.0 ? 1.0 : float(" + n + ");\n  "));
            return this.compileAndRun(r, [t])
        }, t.prototype.conv2dByMatMul = function (t, e, n) {
            var r = t.shape,
                o = this.texData.get(t.dataId),
                i = n.inChannels,
                a = r[0] * r[1] * r[2],
                s = n.outChannels,
                u = (1 === a || 1 === s) && 1e3 < i,
                c = r[2] % 2 != 0 && !!o.isPacked;
            if (u || !Zt.get("WEBGL_LAZILY_UNPACK") || !Zt.get("WEBGL_PACK_BINARY_OPERATIONS") || !c) {
                var l = this.reshape(t, [1, r[0] * r[1] * r[2], n.inChannels]),
                    h = this.reshape(e, [1, n.inChannels, n.outChannels]);
                return this.reshape(this.batchMatMul(l, h, !1, !1), n.outShape)
            }
            var p = dt.make([1, r[0] * r[1] * (r[2] + 1), n.inChannels], {
                    dataId: t.dataId
                }, t.dtype, this),
                f = o.shape;
            o.shape = o.shape.slice(), o.shape[o.shape.length - 2]++, D(uo(o.shape, p.shape), function () {
                return "packed reshape " + o.shape + " to " + p.shape + " isn't free"
            });
            var d = this.reshape(e, [1, n.inChannels, n.outChannels]),
                v = this.batchMatMul(p, d, !1, !1),
                m = this.texData.get(v.dataId);
            return D(m.isPacked, function () {
                return "batchMatMul result is expected to be packed"
            }), o.shape = f, m.shape = n.outShape, dt.make(n.outShape, {
                dataId: v.dataId
            }, v.dtype, this)
        }, t.prototype.conv2dWithIm2Row = function (t, e, n) {
            var r = n.filterWidth,
                o = n.filterHeight,
                i = n.inChannels,
                a = n.outWidth,
                s = n.outHeight,
                u = r * o * i,
                c = s * a,
                l = [u, c],
                h = t.squeeze([0]),
                p = e.reshape([1, u, -1]),
                f = new Po(l, h.shape, n),
                d = this.compileAndRun(f, [h]).reshape([1, l[0], l[1]]),
                v = new Wo(d.shape, [1, c, n.outChannels], !0, !1);
            return this.compileAndRun(v, [d, p]).reshape([1, s, a, n.outChannels])
        }, t.prototype.conv2d = function (t, e, n) {
            if (1 === n.filterHeight && 1 === n.filterWidth && 1 === n.dilationHeight && 1 === n.dilationWidth && 1 === n.strideHeight && 1 === n.strideWidth && ("SAME" === n.padInfo.type || "VALID" === n.padInfo.type)) return this.conv2dByMatMul(t, e, n);
            if (Zt.get("WEBGL_CONV_IM2COL") && 1 === t.shape[0]) return this.conv2dWithIm2Row(t, e, n);
            var r = new ir(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.conv2dDerInput = function (t, e, n) {
            var r = new tr(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.conv2dDerFilter = function (t, e, n) {
            var r = new Zn(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.depthwiseConv2D = function (t, e, n) {
            var r;
            return Zt.get("WEBGL_PACK_DEPTHWISECONV") && n.strideWidth <= 2 && n.outChannels / n.inChannels == 1 ? (r = new ur(n), this.compileAndRun(r, [t, e], this.makePackedTensor(n.outShape, t.dtype))) : (r = new sr(n), this.compileAndRun(r, [t, e]))
        }, t.prototype.depthwiseConv2DDerInput = function (t, e, n) {
            var r = new or(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
            var r = new rr(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.conv3d = function (t, e, n) {
            var r = new ar(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.conv3dDerInput = function (t, e, n) {
            var r = new nr(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.conv3dDerFilter = function (t, e, n) {
            var r = new er(n);
            return this.compileAndRun(r, [t, e])
        }, t.prototype.maxPool = function (t, e) {
            var n = new qo(e, "max", !1),
                r = this.makeOutputArray(n.outputShape, t.dtype);
            return this.compileAndRun(n, [t], r)
        }, t.prototype.avgPool = function (t, e) {
            var n = new qo(e, "avg", !1),
                r = this.makeOutputArray(n.outputShape, "float32");
            return this.compileAndRun(n, [t], r)
        }, t.prototype.maxPoolBackprop = function (t, e, n, r) {
            var o = new qo(r, "max", !0),
                i = this.compileAndRun(o, [e]),
                a = new Bo(r),
                s = this.makeOutputArray(a.outputShape, e.dtype),
                u = this.compileAndRun(a, [t, i], s);
            return i.dispose(), u
        }, t.prototype.avgPoolBackprop = function (t, e, n) {
            var r = new Fn(n),
                o = this.makeOutputArray(r.outputShape, e.dtype);
            return this.compileAndRun(r, [t], o)
        }, t.prototype.cast = function (t, e) {
            return an(t, e, this)
        }, t.prototype.unstack = function (t, e) {
            for (var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0; i < t.rank; i++) i !== e && (r[o++] = t.shape[i]);
            var a = new Array(t.rank).fill(0),
                s = t.shape.slice();
            s[e] = 1;
            var u = new Array(n);
            for (i = 0; i < u.length; i++) u[a[e] = i] = this.slice(t, a, s).reshape(r);
            return u
        }, t.prototype.reshape = function (t, e) {
            var n = this.texData.get(t.dataId);
            return !n.isPacked || uo(t.shape, e) || null !== n.texture && uo(n.shape, e) ? sn(t, e) : this.packedReshape(t, e)
        }, t.prototype.resizeBilinear = function (t, e, n, r) {
            var o = Zt.get("WEBGL_PACK_IMAGE_OPERATIONS") ? new Yo(t.shape, e, n, r) : new Xo(t.shape, e, n, r);
            return this.compileAndRun(o, [t])
        }, t.prototype.resizeBilinearBackprop = function (t, e, n) {
            var r = new Ko(t, e, n);
            return this.compileAndRun(r, [t])
        }, t.prototype.resizeNearestNeighbor = function (t, e, n, r) {
            var o = new Jo(t.shape, e, n, r);
            return this.compileAndRun(o, [t])
        }, t.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
            var r = new Qo(t, e, n);
            return this.compileAndRun(r, [t])
        }, t.prototype.multinomial = function (t, e, n, r) {
            var o = e ? t : Le(t),
                i = o.shape[0],
                a = o.shape[1],
                s = new zo(i, a, n),
                u = this.makeOutputArray(s.outputShape, "int32"),
                c = s.getCustomSetupFunc(r);
            return this.compileAndRun(s, [o], u, c)
        }, t.prototype.oneHot = function (t, e, n, r) {
            var o = new Uo(t.size, e, n, r);
            return this.compileAndRun(o, [t])
        }, t.prototype.nonMaxSuppression = function (t, e, n, r, o) {
            return fe("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"), ln(t.dataSync(), e.dataSync(), n, r, o)
        }, t.prototype.cropAndResize = function (t, e, n, r, o, i) {
            var a = new cr(t.shape, e.shape, r, o, i);
            return this.compileAndRun(a, [t, e, n])
        }, t.prototype.depthToSpace = function (t, e, n) {
            D(1 < e, function () {
                return "blockSize should be > 1 for depthToSpace, but was: " + e
            });
            var r = t.shape[0],
                o = "NHWC" === n ? t.shape[1] : t.shape[2],
                i = "NHWC" === n ? t.shape[2] : t.shape[3],
                a = "NHWC" === n ? t.shape[3] : t.shape[1],
                s = o * e,
                u = i * e,
                c = a / (e * e),
                l = new pr("NHWC" === n ? [r, s, u, c] : [r, c, s, u], e, n);
            return this.compileAndRun(l, [t])
        }, t.prototype.split = function (t, e, n) {
            return pn(t, e, n)
        }, t.prototype.scatterND = function (t, e, n) {
            var r = Te(0, t, n),
                o = r.sliceRank,
                i = r.numUpdates,
                a = r.sliceSize,
                s = r.strides,
                u = r.outputSize,
                c = [u / a, a],
                l = t.reshape([i, o]),
                h = e.reshape([i, a]);
            if (0 === u) return sn(Ge([]), n);
            var p = Ve(0),
                f = new ei(i, o, l.rank, h.rank, s, c);
            return this.compileAndRun(f, [h, l, p]).reshape(n)
        }, t.prototype.sparseToDense = function (t, e, n, r) {
            var o = Te(0, t, n),
                i = o.sliceRank,
                a = o.numUpdates,
                s = o.strides,
                u = o.outputSize,
                c = new ei(a, i, t.rank, e.rank, s, [u, 1], !1);
            return this.compileAndRun(c, [e, t, r]).reshape(n)
        }, t.prototype.fft = function (t) {
            return this.fftImpl(t, !1)
        }, t.prototype.ifft = function (t) {
            return this.fftImpl(t, !0)
        }, t.prototype.fftImpl = function (t, e) {
            var n = this.texData.get(t.dataId),
                r = new mr(dr, t.shape, e),
                o = new mr(vr, t.shape, e),
                i = [this.makeComplexComponentTensorHandle(t, n.complexTensors.real), this.makeComplexComponentTensorHandle(t, n.complexTensors.imag)],
                a = this.compileAndRun(r, i),
                s = this.compileAndRun(o, i),
                u = this.complex(a, s).as2D(t.shape[0], t.shape[1]);
            return a.dispose(), s.dispose(), u
        }, t.prototype.gatherND = function (t, e) {
            var n = e.shape,
                r = n[n.length - 1],
                o = Ne(t, e),
                i = o[0],
                a = o[1],
                s = o[2],
                u = o[3],
                c = e.reshape([a, r]),
                l = t.reshape([t.size / s, s]),
                h = new _r(r, u, [a, s]);
            return this.compileAndRun(h, [l, c]).reshape(i)
        }, t.prototype.fill = function (t, e, n) {
            if ("string" === (n = n || q(e))) {
                var r = M(n, B(t));
                return r.fill(e), dt.make(t, {
                    values: r
                }, n)
            }
            var o = new gr(t, e),
                i = o.getCustomSetupFunc(e),
                a = this.makeOutputArray(t, n);
            return this.compileAndRun(o, [], a, i)
        }, t.prototype.onesLike = function (t) {
            if ("string" === t.dtype) throw new Error("onesLike is not supported under string dtype");
            return this.fill(t.shape, 1, t.dtype)
        }, t.prototype.zerosLike = function (t) {
            return this.fill(t.shape, "string" === t.dtype ? "" : 0, t.dtype)
        }, t.prototype.makeOutputArray = function (t, e) {
            return dt.make(t, {}, e, this)
        }, t.prototype.makePackedTensor = function (t, e) {
            var n = dt.make(t, {}, e, this);
            return this.texData.get(n.dataId).isPacked = !0, n
        }, t.prototype.unpackTensor = function (t) {
            var e = new Ci(t.shape);
            return this.compileAndRun(e, [t], dt.make(e.outputShape, {}, t.dtype, this))
        }, t.prototype.packTensor = function (t) {
            var e = new Go(t.shape);
            return this.compileAndRun(e, [t], this.makePackedTensor(t.shape, t.dtype))
        }, t.prototype.packedReshape = function (t, e) {
            var n = t.reshape([oo(t.shape)].concat(io(t.shape))),
                r = [oo(e)].concat(io(e)),
                o = new $o(r, n.shape);
            return this.compileAndRun(o, [n]).reshape(e)
        }, t.prototype.compileAndRun = function (o, t, e, n, r) {
            var i = this;
            if (void 0 === r && (r = !0), null == e && (e = o.usesPackedTextures ? this.makePackedTensor(o.outputShape, t[0].dtype) : this.makeOutputArray(o.outputShape, t[0].dtype)), 0 === e.size) return this.texData.get(e.dataId).values = A(e.dtype, 0), e;
            var a = t.map(function (t) {
                if ("complex64" === t.dtype) throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");
                var e = i.texData.get(t.dataId);
                if (null == e.texture) {
                    if (!o.usesPackedTextures && B(t.shape) <= Zt.get("WEBGL_SIZE_UPLOAD_UNIFORM")) return {
                        shape: t.shape,
                        texData: null,
                        isUniform: !0,
                        uniformValues: i.readSync(t.dataId)
                    };
                    o.usesPackedTextures && (e.isPacked = !0, e.shape = t.shape)
                } else if (!!e.isPacked != !!o.usesPackedTextures) t = e.isPacked ? i.unpackTensor(t) : i.packTensor(t), e = i.texData.get(t.dataId);
                else if (e.isPacked && !uo(e.shape, t.shape)) {
                    var n = t,
                        r = t.shape;
                    t.shape = e.shape, t = i.packedReshape(t, r), e = i.texData.get(t.dataId), n.shape = r
                }
                return i.uploadToGPU(t.dataId), {
                    shape: t.shape,
                    texData: e,
                    isUniform: !1
                }
            });
            this.uploadToGPU(e.dataId);
            var s, u = {
                    shape: e.shape,
                    texData: this.texData.get(e.dataId),
                    isUniform: !1
                },
                c = function (t, e, n) {
                    var r = "";
                    e.concat(n).forEach(function (t) {
                        var e = null != t.texData && null != t.texData.slice && 0 < t.texData.slice.flatOffset,
                            n = t.isUniform ? "uniform" : t.texData.texShape;
                        r += t.shape + "_" + n + "_" + e
                    });
                    var o = t.userCode;
                    return t.constructor.name + "_" + r + "_" + o
                }(o, a, u),
                l = this.getAndSaveBinary(c, function () {
                    return function (t, r, e, n) {
                        var o = r.userCode,
                            i = e.map(function (t, e) {
                                var n = {
                                    logicalShape: t.shape,
                                    texShape: t.isUniform ? null : t.texData.texShape,
                                    isUniform: t.isUniform,
                                    isPacked: !t.isUniform && t.texData.isPacked,
                                    flatOffset: null
                                };
                                return null != t.texData && null != t.texData.slice && 0 < t.texData.slice.flatOffset && (n.flatOffset = t.texData.slice.flatOffset), {
                                    name: r.variableNames[e],
                                    shapeInfo: n
                                }
                            }),
                            a = i.map(function (t) {
                                return t.shapeInfo
                            }),
                            s = {
                                logicalShape: n.shape,
                                texShape: n.texData.texShape,
                                isUniform: !1,
                                isPacked: n.texData.isPacked,
                                flatOffset: null
                            },
                            u = Cn(i, s, o, r.usesPackedTextures),
                            c = t.createProgram(u),
                            l = null,
                            h = null;
                        1 === Zt.get("WEBGL_VERSION") && (l = t.getUniformLocation(c, "INFINITY", !1), h = t.getUniformLocation(c, "NAN", !1));
                        for (var p = {}, f = 0; f < r.variableNames.length; f++) {
                            var d = r.variableNames[f];
                            p[d] = t.getUniformLocation(c, d, !1), p["offset" + d] = t.getUniformLocation(c, "offset" + d, !1)
                        }
                        return {
                            program: r,
                            source: u,
                            webGLProgram: c,
                            uniformLocations: p,
                            inShapeInfos: a,
                            outShapeInfo: s,
                            infLoc: l,
                            nanLoc: h
                        }
                    }(i.gpgpu, o, a, u)
                }),
                h = null != this.activeTimers;
            h && (s = this.startTimer()),
                function (a, s, t, e, n) {
                    Oo(s.inShapeInfos, t), Oo([s.outShapeInfo], [e]);
                    var r = e.texData.texture,
                        o = e.texData.texShape;
                    e.texData.isPacked ? a.setOutputPackedMatrixTexture(r, o[0], o[1]) : a.setOutputMatrixTexture(r, o[0], o[1]), a.setProgram(s.webGLProgram), 1 === Zt.get("WEBGL_VERSION") && (null !== s.infLoc && a.gl.uniform1f(s.infLoc, 1 / 0), null !== s.nanLoc && a.gl.uniform1f(s.nanLoc, NaN)), t.forEach(function (t, e) {
                        var n = s.program.variableNames[e],
                            r = s.uniformLocations[n],
                            o = s.uniformLocations["offset" + n];
                        if (null != r)
                            if (t.isUniform)
                                if (B(t.shape) < 2) a.gl.uniform1f(r, t.uniformValues[0]);
                                else {
                                    var i = t.uniformValues;
                                    i instanceof Float32Array || (i = new Float32Array(i)), a.gl.uniform1fv(r, i)
                                }
                        else null != t.texData.slice && null != o && a.gl.uniform1i(o, t.texData.slice.flatOffset), a.setInputMatrixTexture(t.texData.texture, r, e)
                    }), null != n && n(a, s.webGLProgram), a.executeProgram()
                }(this.gpgpu, l, a, u, n);
            var p = 1024 * Zt.get("WEBGL_NUM_MB_BEFORE_PAGING");
            if (r && this.numBytesInGPU > p)
                for (var f = this.numBytesInGPU - p; 0 < f && 0 < this.lruDataGPU.length;) {
                    var d = this.lruDataGPU.shift(),
                        v = this.texData.get(d),
                        m = v.texShape,
                        g = v.dtype;
                    f -= this.computeBytes(m, g), this.read(d)
                }
            return h && (s = this.endTimer(s), this.activeTimers.push({
                name: o.constructor.name,
                query: this.getQueryTime(s)
            })), Zt.get("WEBGL_LAZILY_UNPACK") || !this.texData.get(e.dataId).isPacked || o.isPackShader ? e : this.unpackTensor(e)
        }, t.prototype.getAndSaveBinary = function (t, e) {
            return t in this.binaryCache || (this.binaryCache[t] = e()), this.binaryCache[t]
        }, t.prototype.getTextureManager = function () {
            return this.textureManager
        }, t.prototype.dispose = function () {
            this.disposed || (this.textureManager.dispose(), this.canvas.remove(), null != this.fromPixels2DContext && this.fromPixels2DContext.canvas.remove(), this.gpgpuCreatedLocally && (this.gpgpu.program = null, this.gpgpu.dispose()), this.disposed = !0)
        }, t.prototype.floatPrecision = function () {
            var n = this;
            return ue(function () {
                var t = Zt.get("DEBUG");
                Zt.set("DEBUG", !1);
                var e = n.abs(Ve(1e-8)).dataSync()[0];
                return Zt.set("DEBUG", t), 0 < e ? 32 : 16
            })
        }, t.prototype.uploadToGPU = function (t) {
            var e, n = this.texData.get(t),
                r = n.shape,
                o = n.dtype,
                i = n.values,
                a = n.texture,
                s = n.usage,
                u = n.isPacked;
            if (null == a) {
                var c, l = null != this.activeTimers;
                l && (c = performance.now());
                var h = ao(r, u);
                n.texShape = h;
                var p = this.acquireTexture(t, h, s, o, u);
                if (n.texture = p, null != i) {
                    if (u) {
                        var f = oo(r),
                            d = 1,
                            v = 1;
                        r.length && (d = (e = io(r))[0], v = e[1]), this.gpgpu.uploadMatrixToPackedTexture(p, f, d, v, h[0], h[1], ma(i))
                    } else this.gpgpu.uploadMatrixToTexture(p, h[0], h[1], ma(i));
                    n.values = null, l && (this.uploadWaitMs += performance.now() - c)
                }
            } else Zt.get("WEBGL_NUM_MB_BEFORE_PAGING") < Number.POSITIVE_INFINITY && 0 <= this.lruDataGPU.indexOf(t) && (this.lruDataGPU.splice(this.lruDataGPU.indexOf(t), 1), this.lruDataGPU.push(t))
        }, t.prototype.convertAndCacheOnCPU = function (t, e) {
            var n = this.texData.get(t),
                r = n.texture,
                o = n.texShape,
                i = n.dtype,
                a = n.usage,
                s = n.isPacked;
            return null != r && (this.releaseTexture(t, r, o, a, i, s), n.texture = null, n.texShape = null, n.isPacked = !1), n.usage = wr.UPLOAD, null != e && (n.values = function (t, e) {
                if ("float32" === e || "complex64" === e) return t;
                if ("int32" !== e && "bool" !== e) throw new Error("Unknown dtype " + e);
                for (var n = "int32" === e ? new Int32Array(t.length) : new Uint8Array(t.length), r = 0; r < n.length; ++r) n[r] = Math.round(t[r]);
                return n
            }(e, i)), n.values
        }, t.prototype.releaseTexture = function (t, e, n, r, o, i) {
            if (Zt.get("WEBGL_NUM_MB_BEFORE_PAGING") < Number.POSITIVE_INFINITY) {
                var a = this.lruDataGPU.indexOf(t);
                0 <= a && this.lruDataGPU.splice(a, 1)
            }
            this.numBytesInGPU -= this.computeBytes(n, o), this.textureManager.releaseTexture(e, n, r, i)
        }, t.prototype.acquireTexture = function (t, e, n, r, o) {
            return Zt.get("WEBGL_NUM_MB_BEFORE_PAGING") < Number.POSITIVE_INFINITY && this.lruDataGPU.push(t), this.numBytesInGPU += this.computeBytes(e, r), this.textureManager.acquireTexture(e, n, o)
        }, t.prototype.computeBytes = function (t, e) {
            return t[0] * t[1] * U(e)
        }, t
    }();

    function ma(t) {
        return t instanceof Float32Array ? t : new Float32Array(t)
    }
    Zt.get("IS_BROWSER") && Zt.registerBackend("webgl", function () {
        return new va
    }, 2);
    var ga = Fe({
            abs_: function (t) {
                var r = re(t, "x", "abs");
                return "complex64" === r.dtype ? Zt.engine.runKernel(function (t) {
                    return t.complexAbs(r)
                }, {
                    $x: r
                }) : Zt.engine.runKernel(function (t, e) {
                    var n = t.abs(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.toFloat().step(-1))
                        }
                    }
                })
            }
        }),
        ya = Fe({
            acos_: function (t) {
                var r = re(t, "x", "acos");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.acos(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.divStrict(Ve(1).sub(n.toFloat().square()).sqrt()).neg()
                        }
                    }
                })
            }
        }),
        xa = Fe({
            acosh_: function (t) {
                var r = re(t, "x", "acosh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.acosh(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.divStrict(n.toFloat().square().sub(1).sqrt())
                        }
                    }
                })
            }
        }),
        wa = Fe({
            asin_: function (t) {
                var r = re(t, "x", "asin");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.asin(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.divStrict(Ve(1).sub(n.toFloat().square()).sqrt())
                        }
                    }
                })
            }
        }),
        ba = Fe({
            asinh_: function (t) {
                var r = re(t, "x", "asinh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.asinh(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.divStrict(Ve(1).add(n.toFloat().square()).sqrt())
                        }
                    }
                })
            }
        }),
        Ea = Fe({
            atan_: function (t) {
                var r = re(t, "x", "atan");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.atan(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.toFloat().square().add(1))
                        }
                    }
                })
            }
        }),
        Ca = Fe({
            atanh_: function (t) {
                var r = re(t, "x", "atanh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.atanh(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(Ve(1).sub(n.toFloat().square()))
                        }
                    }
                })
            }
        }),
        _a = Fe({
            ceil_: function (t) {
                var e = re(t, "x", "ceil");
                return Zt.engine.runKernel(function (t) {
                    return t.ceil(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Sa = Fe({
            clipByValue_: function (t, r, o) {
                var i = re(t, "x", "clipByValue");
                return D(r <= o, function () {
                    return "Error in clip: min (" + r + ") must be less than or equal to max (" + o + ")."
                }), Zt.engine.runKernel(function (t, e) {
                    var n = t.clip(i, r, o);
                    return e([i]), n
                }, {
                    $x: i
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.where(n.greaterEqual(r).logicalAnd(n.lessEqual(o)), nn(t))
                        }
                    }
                })
            }
        }),
        Ra = Fe({
            cos_: function (t) {
                var r = re(t, "x", "cos");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.cos(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return n.toFloat().sin().neg().mul(t)
                        }
                    }
                })
            }
        }),
        Na = Fe({
            cosh_: function (t) {
                var r = re(t, "x", "cosh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.cosh(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return n.toFloat().sinh().mulStrict(t)
                        }
                    }
                })
            }
        }),
        ka = Fe({
            erf_: function (t) {
                var r = re(t, "x", "erf");
                return D("int32" === r.dtype || "float32" === r.dtype, function () {
                    return "Input dtype must be `int32` or `float32`."
                }), "int32" === r.dtype && (r = r.toFloat()), Zt.engine.runKernel(function (t, e) {
                    var n = t.erf(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.square().neg().exp().mul(2 / Math.sqrt(Math.PI)))
                        }
                    }
                })
            }
        }),
        Ia = Fe({
            exp_: function (t) {
                var r = re(t, "x", "exp");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.exp(r);
                    return e([n]), n
                }, {
                    $x: r
                }, function (t, e) {
                    return {
                        $x: function () {
                            return t.mulStrict(e[0])
                        }
                    }
                })
            }
        }),
        Ta = Fe({
            expm1_: function (t) {
                var r = re(t, "x", "expm1");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.expm1(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.exp())
                        }
                    }
                })
            }
        }),
        Aa = Fe({
            floor_: function (t) {
                var e = re(t, "x", "floor");
                return Zt.engine.runKernel(function (t) {
                    return t.floor(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Da = Fe({
            log_: function (t) {
                var r = re(t, "x", "log");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.log(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.toFloat())
                        }
                    }
                })
            }
        }),
        Ma = Fe({
            log1p_: function (t) {
                var r = re(t, "x", "log1p");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.log1p(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.add(1))
                        }
                    }
                })
            }
        }),
        Oa = Fe({
            logSigmoid_: function (t) {
                var r = re(t, "x", "logSigmoid");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.softplus(r.neg()).neg();
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.neg().sigmoid())
                        }
                    }
                })
            }
        }),
        Pa = Fe({
            neg_: function (t) {
                var e = re(t, "x", "neg");
                return Zt.engine.runKernel(function (t) {
                    return t.neg(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return t.neg()
                        }
                    }
                })
            }
        }),
        Fa = Fe({
            reciprocal_: function (t) {
                var r = re(t, "x", "reciprocal");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.reciprocal(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.square().neg())
                        }
                    }
                })
            }
        }),
        La = Fe({
            round_: function (t) {
                var e = re(t, "x", "round");
                return Zt.engine.runKernel(function (t) {
                    return t.round(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Ba = Fe({
            rsqrt_: function (t) {
                var r = re(t, "x", "rsqrt");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.rsqrt(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.pow(1.5).mul(2)).neg()
                        }
                    }
                })
            }
        }),
        Wa = Fe({
            sigmoid_: function (t) {
                var r = re(t, "x", "sigmoid");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.sigmoid(r);
                    return e([n]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.mul(Ve(1).sub(n)))
                        }
                    }
                })
            }
        }),
        za = Fe({
            sign_: function (t) {
                var e = re(t, "x", "sign");
                return Zt.engine.runKernel(function (t) {
                    return t.sign(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Ua = Fe({
            isNaN_: function (t) {
                var e = re(t, "x", "isNaN");
                return Zt.engine.runKernel(function (t) {
                    return t.isNaN(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Ga = Fe({
            isInf_: function (t) {
                var e = re(t, "x", "isInf");
                return Zt.engine.runKernel(function (t) {
                    return t.isInf(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Va = Fe({
            isFinite_: function (t) {
                var e = re(t, "x", "isFinite");
                return Zt.engine.runKernel(function (t) {
                    return t.isFinite(e)
                }, {
                    $x: e
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Ha = Fe({
            sin_: function (t) {
                var r = re(t, "x", "sin");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.sin(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return n.toFloat().cos().mul(t)
                        }
                    }
                })
            }
        }),
        qa = Fe({
            sinh_: function (t) {
                var r = re(t, "x", "sinh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.sinh(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return n.toFloat().cosh().mulStrict(t)
                        }
                    }
                })
            }
        }),
        ja = Fe({
            softplus_: function (t) {
                var r = re(t, "x", "softplus");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.softplus(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.sigmoid())
                        }
                    }
                })
            }
        }),
        $a = Fe({
            sqrt_: function (t) {
                var r = re(t, "x", "sqrt");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.sqrt(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.toFloat().sqrt().mul(2))
                        }
                    }
                })
            }
        }),
        Ka = Fe({
            square_: function (t) {
                var n = re(t, "x", "square");
                return Zt.engine.runKernel(function (t, e) {
                    return e([n]), t.square(n)
                }, {
                    $x: n
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mul(n.toFloat().mul(2))
                        }
                    }
                })
            }
        }),
        Xa = Fe({
            step_: function (t, e) {
                void 0 === e && (e = 0);
                var n = re(t, "x", "step");
                return Zt.engine.runKernel(function (t) {
                    return t.step(n, e)
                }, {
                    $x: n
                }, function (t) {
                    return {
                        $x: function () {
                            return nn(t)
                        }
                    }
                })
            }
        }),
        Ya = Fe({
            tan_: function (t) {
                var r = re(t, "x", "tan");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.tan(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.div(n.cos().square())
                        }
                    }
                })
            }
        }),
        Qa = Fe({
            tanh_: function (t) {
                var r = re(t, "x", "tanh");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.tanh(r);
                    return e([n]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return Ve(1).sub(n.square()).mulStrict(t)
                        }
                    }
                })
            }
        });

    function Ja(t, e, n, r, o, i) {
        var a, s, u = re(t, "x", "batchNorm"),
            c = re(e, "mean", "batchNorm"),
            l = re(n, "variance", "batchNorm");
        return null != o && (a = re(o, "scale", "batchNorm")), null != r && (s = re(r, "offset", "batchNorm")), D(2 === u.rank, function () {
            return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
        }), D(2 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank " + c.rank + "."
        }), D(2 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank " + l.rank + "."
        }), null != a && D(2 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank " + a.rank + "."
        }), null != s && D(2 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank " + s.rank + "."
        }), es(u, c, l, s, a, i)
    }

    function Za(t, e, n, r, o, i) {
        var a, s, u = re(t, "x", "batchNorm"),
            c = re(e, "mean", "batchNorm"),
            l = re(n, "variance", "batchNorm");
        return null != o && (a = re(o, "scale", "batchNorm")), null != r && (s = re(r, "offset", "batchNorm")), D(3 === u.rank, function () {
            return "Error in batchNorm3D: x must be rank 3 but got rank " + u.rank + "."
        }), D(3 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank " + c.rank + "."
        }), D(3 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank " + l.rank + "."
        }), null != a && D(3 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank " + a.rank + "."
        }), null != s && D(3 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank " + s.rank + "."
        }), es(u, c, l, s, a, i)
    }

    function ts(t, e, n, r, o, i) {
        var a, s, u = re(t, "x", "batchNorm"),
            c = re(e, "mean", "batchNorm"),
            l = re(n, "variance", "batchNorm");
        return null != o && (a = re(o, "scale", "batchNorm")), null != r && (s = re(r, "offset", "batchNorm")), D(4 === u.rank, function () {
            return "Error in batchNorm4D: x must be rank 4 but got rank " + u.rank + "."
        }), D(4 === c.rank || 1 === c.rank, function () {
            return "Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank " + c.rank + "."
        }), D(4 === l.rank || 1 === l.rank, function () {
            return "Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank " + l.rank + "."
        }), null != a && D(4 === a.rank || 1 === a.rank, function () {
            return "Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank " + a.rank + "."
        }), null != s && D(4 === s.rank || 1 === s.rank, function () {
            return "Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank " + s.rank + "."
        }), es(u, c, l, s, a, i)
    }

    function es(t, e, n, r, o, d) {
        null == d && (d = .001);
        var i, a, v, s = re(t, "x", "batchNorm"),
            u = re(e, "mean", "batchNorm"),
            c = re(n, "variance", "batchNorm");
        return null != o && (i = re(o, "scale", "batchNorm")), null != r && (a = re(r, "offset", "batchNorm")), D(u.rank === c.rank, function () {
            return "Batch normalization gradient requires mean and variance to have equal ranks."
        }), D(null == a || u.rank === a.rank, function () {
            return "Batch normalization gradient requires mean and offset to have equal ranks."
        }), D(null == i || u.rank === i.rank, function () {
            return "Batch normalization gradient requires mean and scale to have equal ranks."
        }), v = 0 === s.rank || 1 === s.rank ? s.as4D(1, 1, 1, s.size) : 2 === s.rank ? s.as4D(1, 1, s.shape[0], s.shape[1]) : 3 === s.rank ? s.as4D(1, s.shape[0], s.shape[1], s.shape[2]) : s, Zt.engine.runKernel(function (t, e) {
            var n = t.batchNormalization(v, ns(u), ns(c), d, ns(i), ns(a));
            return e([s, u, c, i]), n
        }, {
            $x: s,
            $mean: u,
            $variance: c,
            $scale: i,
            $offset: a
        }, function (n, t) {
            var e = t[0],
                r = t[1],
                o = t[2],
                i = t[3],
                a = null == i ? Ve(1) : i,
                s = yn(r.shape, v.shape),
                u = [];
            if (1 === r.rank) {
                for (var c = 0; c < v.shape.length - 1; ++c) u.push(v.shape[c]);
                u.push(1)
            }
            var l = e.sub(r),
                h = n.mul(a),
                p = Ba(o.add(Ve(d))),
                f = p.mul(p).mul(p).mul(Ve(-.5));
            return {
                $x: function () {
                    return 1 === r.rank ? n.mul(ca(p.as4D(1, 1, 1, r.shape[0]), u)).mul(a).reshape(e.shape) : n.mul(p).mul(a).reshape(e.shape)
                },
                $mean: function () {
                    var t = p.mul(Ve(-1)).mul(h);
                    return 1 === r.rank && (t = t.sum(s)), t.reshape(r.shape)
                },
                $variance: function () {
                    var t = f.mul(l).mul(h);
                    return 1 === r.rank && (t = t.sum(s)), t.reshape(r.shape)
                },
                $scale: function () {
                    var t = l.mul(p),
                        e = n.mul(t);
                    return 1 === r.rank && (e = e.sum(s)), e.reshape(r.shape)
                },
                $offset: function () {
                    var t = n;
                    return 1 === r.rank && (t = t.sum(s)), t.reshape(r.shape)
                }
            }
        }).reshape(s.shape)
    }

    function ns(t) {
        return null == t ? null : 0 === t.rank ? t.as1D() : 1 === t.rank ? t : 2 === t.rank ? t.as4D(1, 1, t.shape[0], t.shape[1]) : 3 === t.rank ? t.as4D(1, t.shape[0], t.shape[1], t.shape[2]) : t
    }

    function rs() {
        Qt("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")
    }
    var os = Fe({
            batchNormalization2d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), rs(), Ja(t, e, n, i, o, r)
            }
        }),
        is = Fe({
            batchNormalization3d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), rs(), Za(t, e, n, i, o, r)
            }
        }),
        as = Fe({
            batchNormalization4d_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), rs(), ts(t, e, n, i, o, r)
            }
        }),
        ss = Fe({
            batchNormalization_: function (t, e, n, r, o, i) {
                return void 0 === r && (r = .001), rs(), es(t, e, n, i, o, r)
            }
        }),
        us = Fe({
            batchNorm_: es
        }),
        cs = Fe({
            batchNorm2d_: Ja
        }),
        ls = Fe({
            batchNorm3d_: Za
        }),
        hs = Fe({
            batchNorm4d_: ts
        });

    function ps(t, e, n, r, o, i, a) {
        void 0 === a && (a = "channelsLast");
        var s, u = vs(e),
            c = u[0],
            l = u[1];
        if ("channelsLast" === a) s = [c, l, t[3], t[3]];
        else {
            if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
            s = [c, l, t[1], t[1]]
        }
        return fs(t, s, n, r, o, i, !1, a)
    }

    function fs(t, e, n, r, o, i, a, s) {
        void 0 === a && (a = !1), void 0 === s && (s = "channelsLast");
        var u = [-1, -1, -1, -1],
            c = u[0],
            l = u[1],
            h = u[2],
            p = u[3];
        if ("channelsLast" === s) c = t[0], l = t[1], h = t[2], p = t[3];
        else {
            if ("channelsFirst" !== s) throw new Error("Unknown dataFormat " + s);
            c = t[0], p = t[1], l = t[2], h = t[3]
        }
        var f, d = e[0],
            v = e[1],
            m = e[3],
            g = vs(n),
            y = g[0],
            x = g[1],
            w = vs(r),
            b = w[0],
            E = w[1],
            C = gs(d, b),
            _ = gs(v, E),
            S = function (t, e, n, r, o, i, a, s) {
                var u, c, l;
                if ("number" == typeof t) {
                    u = {
                        top: t,
                        bottom: t,
                        left: t,
                        right: t,
                        type: 0 === t ? "VALID" : "NUMBER"
                    };
                    var h = function (t, e, n, r, o, i) {
                        null == o && (o = function (t, e, n, r) {
                            void 0 === r && (r = 1);
                            var o = gs(e, r);
                            return Math.floor((t[0] * (n - 1) - n + o) / 2)
                        }(t, e, r));
                        var a = t[0],
                            s = t[1],
                            u = ys((a - e + 2 * o) / r + 1, i);
                        D(T(u), function () {
                            return "The output # of rows (" + u + ") must be an integer. Change the stride and/or zero pad parameters"
                        });
                        var c = ys((s - e + 2 * o) / r + 1, i);
                        return D(T(c), function () {
                            return "The output # of columns (" + c + ") must be an integer. Change the stride and/or zero pad parameters"
                        }), [u, c, n]
                    }([e, n, 1], i, 1, r, t, s);
                    c = h[0], l = h[1]
                } else if ("same" === t) {
                    c = Math.ceil(e / r), l = Math.ceil(n / o);
                    var p = Math.max(0, (c - 1) * r + i - e),
                        f = Math.max(0, (l - 1) * o + a - n),
                        d = Math.floor(p / 2),
                        v = p - d,
                        m = Math.floor(f / 2);
                    u = {
                        top: d,
                        bottom: v,
                        left: m,
                        right: f - m,
                        type: "SAME"
                    }
                } else {
                    if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                    u = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        type: "VALID"
                    }, c = Math.ceil((e - i + 1) / r), l = Math.ceil((n - a + 1) / o)
                }
                return {
                    padInfo: u,
                    outHeight: c,
                    outWidth: l
                }
            }(o, l, h, y, x, C, _, i),
            R = S.padInfo,
            N = S.outHeight,
            k = S.outWidth,
            I = a ? m * p : m;
        return "channelsFirst" === s ? f = [c, I, N, k] : "channelsLast" === s && (f = [c, N, k, I]), {
            batchSize: c,
            dataFormat: s,
            inHeight: l,
            inWidth: h,
            inChannels: p,
            outHeight: N,
            outWidth: k,
            outChannels: I,
            padInfo: R,
            strideHeight: y,
            strideWidth: x,
            filterHeight: d,
            filterWidth: v,
            effectiveFilterHeight: C,
            effectiveFilterWidth: _,
            dilationHeight: b,
            dilationWidth: E,
            inShape: t,
            outShape: f,
            filterShape: e
        }
    }

    function ds(t, e, n, r, o, i, a) {
        void 0 === i && (i = !1), void 0 === a && (a = "channelsLast");
        var s = [-1, -1, -1, -1, -1],
            u = s[0],
            c = s[1],
            l = s[2],
            h = s[3],
            p = s[4];
        if ("channelsLast" === a) u = t[0], c = t[1], l = t[2], h = t[3], p = t[4];
        else {
            if ("channelsFirst" !== a) throw new Error("Unknown dataFormat " + a);
            u = t[0], p = t[1], c = t[2], l = t[3], h = t[4]
        }
        var f, d = e[0],
            v = e[1],
            m = e[2],
            g = e[4],
            y = ms(n),
            x = y[0],
            w = y[1],
            b = y[2],
            E = ms(r),
            C = E[0],
            _ = E[1],
            S = E[2],
            R = function (t, e, n, r, o, i, a, s, u, c) {
                var l, h, p, f;
                if ("same" === t) {
                    var d = ((h = Math.ceil(e / o)) - 1) * o + s - e,
                        v = ((p = Math.ceil(n / i)) - 1) * i + u - n,
                        m = ((f = Math.ceil(r / a)) - 1) * a + c - r,
                        g = Math.floor(d / 2),
                        y = d - g,
                        x = Math.floor(v / 2),
                        w = v - x,
                        b = Math.floor(m / 2);
                    l = {
                        top: x,
                        bottom: w,
                        left: b,
                        right: m - b,
                        front: g,
                        back: y,
                        type: "SAME"
                    }
                } else {
                    if ("valid" !== t) throw Error("Unknown padding parameter: " + t);
                    l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        front: 0,
                        back: 0,
                        type: "VALID"
                    }, h = Math.ceil((e - s + 1) / o), p = Math.ceil((n - u + 1) / i), f = Math.ceil((r - c + 1) / a)
                }
                return {
                    padInfo: l,
                    outDepth: h,
                    outHeight: p,
                    outWidth: f
                }
            }(o, c, l, h, x, w, b, gs(d, C), gs(v, _), gs(m, S)),
            N = R.padInfo,
            k = R.outDepth,
            I = R.outHeight,
            T = R.outWidth,
            A = i ? g * p : g;
        return "channelsFirst" === a ? f = [u, A, k, I, T] : "channelsLast" === a && (f = [u, k, I, T, A]), {
            batchSize: u,
            dataFormat: a,
            inDepth: c,
            inHeight: l,
            inWidth: h,
            inChannels: p,
            outDepth: k,
            outHeight: I,
            outWidth: T,
            outChannels: A,
            padInfo: N,
            strideDepth: x,
            strideHeight: w,
            strideWidth: b,
            filterDepth: d,
            filterHeight: v,
            filterWidth: m,
            dilationDepth: C,
            dilationHeight: _,
            dilationWidth: S,
            inShape: t,
            outShape: f,
            filterShape: e
        }
    }

    function vs(t) {
        return "number" == typeof t ? [t, t] : t
    }

    function ms(t) {
        return "number" == typeof t ? [t, t, t] : t
    }

    function gs(t, e) {
        return e <= 1 ? t : t + (t - 1) * (e - 1)
    }

    function ys(t, e) {
        if (!e) return t;
        switch (e) {
            case "round":
                return Math.round(t);
            case "ceil":
                return Math.ceil(t);
            case "floor":
                return Math.floor(t);
            default:
                throw new Error("Unknown roundingMode " + e)
        }
    }

    function xs(t) {
        var e = vs(t),
            n = e[0],
            r = e[1];
        return 1 === n && 1 === r
    }

    function ws(t, e) {
        return xs(t) || xs(e)
    }

    function bs(t, e, r, o, i, a) {
        D(t.length === e.rank, function () {
            return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
        });
        var n = t,
            s = e,
            u = !1;
        3 === e.rank && (u = !0, s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]), n = [1, t[0], t[1], t[2]]);
        var c = n[3],
            l = s.shape[3];
        D(4 === n.length, function () {
            return "Error in conv2dDerInput: inShape must be length 4, but got length " + n.length + "."
        }), D(4 === s.rank, function () {
            return "Error in conv2dDerInput: dy must be rank 4, but got rank " + s.rank
        }), D(4 === r.rank, function () {
            return "Error in conv2dDerInput: filter must be rank 4, but got rank " + r.rank
        }), D(c === r.shape[2], function () {
            return "Error in conv2dDerInput: depth of input (" + c + ") must match input depth for filter " + r.shape[2] + "."
        }), D(l === r.shape[3], function () {
            return "Error in conv2dDerInput: depth of output (" + l + ") must match output depth for filter " + r.shape[3] + "."
        }), null != a && D(T(i), function () {
            return "Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + i + "."
        });
        var h = fs(n, r.shape, o, 1, i, a),
            p = Zt.engine.runKernel(function (t, e) {
                var n = t.conv2dDerInput(s, r, h);
                return e([r, s]), n
            }, {
                dy4D: s,
                filter: r
            }, function (t, e) {
                var n = e[0],
                    r = e[1];
                return {
                    dy4D: function () {
                        return Ss(t, n, o, i, "NHWC", 1, a)
                    },
                    filter: function () {
                        return Ns(t, r, n.shape, o, i, a)
                    }
                }
            });
        return u ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
    }

    function Es(t, e, n, r, o, i) {
        var a = t;
        3 === t.rank && (a = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
        var s = e;
        3 === s.rank && (s = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), D(4 === a.rank, function () {
            return "Error in conv2dDerFilter: input must be rank 4, but got shape " + a.shape + "."
        }), D(4 === s.rank, function () {
            return "Error in conv2dDerFilter: dy must be rank 4, but got shape " + s.shape + "."
        }), D(4 === n.length, function () {
            return "Error in conv2dDerFilter: filterShape must be length 4, but got " + n + "."
        }), D(a.shape[3] === n[2], function () {
            return "Error in conv2dDerFilter: depth of input " + a.shape[3] + ") must match input depth in filter (" + n[2] + "."
        }), D(s.shape[3] === n[3], function () {
            return "Error in conv2dDerFilter: depth of dy (" + s.shape[3] + ") must match output depth for filter (" + n[3] + ")."
        }), null != i && D(T(o), function () {
            return "Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + "."
        });
        var u = fs(a.shape, n, r, 1, o, i);
        return Zt.engine.runKernel(function (t) {
            return t.conv2dDerFilter(a, s, u)
        }, {
            x4D: a,
            dy4D: s
        })
    }

    function Cs(t) {
        var e, n = "number" == typeof (e = t) ? [e, e, e] : 2 === e.length ? [e[0], e[1], 1] : e,
            r = n[0],
            o = n[1],
            i = n[2];
        return 1 === r && 1 === o && 1 === i
    }
    var _s = Fe({
            conv1d_: function (t, e, n, r, o, i, a) {
                void 0 === o && (o = "NWC"), void 0 === i && (i = 1);
                var s = re(t, "x", "conv1d"),
                    u = re(e, "filter", "conv1d"),
                    c = s,
                    l = !1;
                2 === s.rank && (l = !0, c = s.as3D(1, s.shape[0], s.shape[1])), D(3 === c.rank, function () {
                    return "Error in conv1d: input must be rank 3, but got rank " + c.rank + "."
                }), D(3 === u.rank, function () {
                    return "Error in conv1d: filter must be rank 3, but got rank " + u.rank + "."
                }), null != a && D(T(r), function () {
                    return "Error in conv1d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."
                }), D(c.shape[2] === u.shape[1], function () {
                    return "Error in conv1d: depth of input (" + c.shape[2] + ") must match input depth for filter " + u.shape[1] + "."
                }), D(ws(n, i), function () {
                    return "Error in conv1D: Either stride or dilation must be 1. Got stride " + n + " and dilation '" + i + "'"
                }), D("NWC" === o, function () {
                    return "Error in conv1d: got dataFormat of " + o + " but only NWC is currently supported."
                });
                var h = u.as4D(1, u.shape[0], u.shape[1], u.shape[2]),
                    p = c.as4D(c.shape[0], 1, c.shape[1], c.shape[2]),
                    f = Ss(p, h, [1, n], r, "NHWC", [1, i], a);
                return l ? f.as2D(f.shape[2], f.shape[3]) : f.as3D(f.shape[0], f.shape[2], f.shape[3])
            }
        }),
        Ss = Fe({
            conv2d_: function (t, e, i, a, n, s, r) {
                void 0 === n && (n = "NHWC"), void 0 === s && (s = [1, 1]);
                var o = re(t, "x", "conv2d"),
                    u = re(e, "filter", "conv2d"),
                    c = o,
                    l = !1;
                3 === o.rank && (l = !0, c = o.as4D(1, o.shape[0], o.shape[1], o.shape[2])), D(4 === c.rank, function () {
                    return "Error in conv2d: input must be rank 4, but got rank " + c.rank + "."
                }), D(4 === u.rank, function () {
                    return "Error in conv2d: filter must be rank 4, but got rank " + u.rank + "."
                }), null != r && D(T(a), function () {
                    return "Error in conv2d: pad must be an integer when using, dimRoundingMode " + r + " but got pad " + a + "."
                }), D(c.shape[3] === u.shape[2], function () {
                    return "Error in conv2d: depth of input (" + c.shape[3] + ") must match input depth for filter " + u.shape[2] + "."
                }), D(ws(i, s), function () {
                    return "Error in conv2D: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + s + "'"
                }), D("NHWC" === n, function () {
                    return "Error in conv2d: got dataFormat of " + n + " but only NHWC is currently supported."
                });
                var h = fs(c.shape, u.shape, i, s, a, r),
                    p = Zt.engine.runKernel(function (t, e) {
                        var n = t.conv2d(c, u, h);
                        return e([u, c]), n
                    }, {
                        x: c,
                        $filter: u
                    }, function (t, e) {
                        var n = e,
                            r = n[0],
                            o = n[1];
                        return D(xs(s), function () {
                            return "Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + s + "'"
                        }), {
                            x: function () {
                                return bs(o.shape, t, r, i, a)
                            },
                            $filter: function () {
                                return Es(o, t, r.shape, i, a)
                            }
                        }
                    });
                return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
            }
        }),
        Rs = Fe({
            conv3d_: function (t, e, o, i, n, a) {
                void 0 === n && (n = "NHWC"), void 0 === a && (a = [1, 1, 1]);
                var r, s = re(t, "x", "conv3d"),
                    u = re(e, "filter", "conv3d"),
                    c = s,
                    l = !1;
                4 === s.rank && (l = !0, c = s.as5D(1, s.shape[0], s.shape[1], s.shape[2], s.shape[3])), D(5 === c.rank, function () {
                    return "Error in conv3d: input must be rank 5, but got rank " + c.rank + "."
                }), D(5 === u.rank, function () {
                    return "Error in conv3d: filter must be rank 5, but got rank " + u.rank + "."
                }), D(c.shape[4] === u.shape[3], function () {
                    return "Error in conv3d: depth of input (" + c.shape[4] + ") must match input depth for filter " + u.shape[3] + "."
                }), D((r = a, Cs(o) || Cs(r)), function () {
                    return "Error in conv3D: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + a + "'"
                }), D("NHWC" === n, function () {
                    return "Error in conv3d: got dataFormat of " + n + " but only NHWC is currently supported."
                });
                var h = ds(c.shape, u.shape, o, a, i),
                    p = Zt.engine.runKernel(function (t, e) {
                        var n = t.conv3d(c, u, h);
                        return e([c, u]), n
                    }, {
                        x: c,
                        $filter: u
                    }, function (t, e) {
                        D(Cs(a), function () {
                            return "Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '" + a + "'"
                        });
                        var n = e[0],
                            r = e[1];
                        return {
                            x: function () {
                                return function (t, e, n, r, o) {
                                    D(t.length === e.rank, function () {
                                        return "Length of inShape (" + t.length + ") and rank of dy (" + e.rank + ") must match"
                                    });
                                    var i = t,
                                        a = e,
                                        s = !1;
                                    4 === e.rank && (s = !0, a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3]), i = [1, t[0], t[1], t[2], t[3]]);
                                    var u = i[4],
                                        c = a.shape[4];
                                    D(5 === i.length, function () {
                                        return "Error in conv3dDerInput: inShape must be length 5, but got length " + i.length + "."
                                    }), D(5 === a.rank, function () {
                                        return "Error in conv3dDerInput: dy must be rank 5, but got rank " + a.rank
                                    }), D(5 === n.rank, function () {
                                        return "Error in conv3dDerInput: filter must be rank 5, but got rank " + n.rank
                                    }), D(u === n.shape[3], function () {
                                        return "Error in conv3dDerInput: depth of input (" + u + ") must match input depth for filter " + n.shape[3] + "."
                                    }), D(c === n.shape[4], function () {
                                        return "Error in conv3dDerInput: depth of output (" + c + ") must match output depth for filter " + n.shape[4] + "."
                                    });
                                    var l = ds(i, n.shape, r, 1, o),
                                        h = Zt.engine.runKernel(function (t) {
                                            return t.conv3dDerInput(a, n, l)
                                        }, {
                                            dy5D: a
                                        });
                                    return s ? h.as4D(h.shape[1], h.shape[2], h.shape[3], h.shape[4]) : h
                                }(n.shape, t, r, o, i)
                            },
                            $filter: function () {
                                return function (t, e, n, r, o) {
                                    var i = t;
                                    4 === t.rank && (i = t.as5D(1, t.shape[0], t.shape[1], t.shape[2], t.shape[3]));
                                    var a = e;
                                    4 === a.rank && (a = e.as5D(1, e.shape[0], e.shape[1], e.shape[2], e.shape[3])), D(5 === i.rank, function () {
                                        return "Error in conv3dDerFilter: input must be rank 5, but got shape " + i.shape + "."
                                    }), D(5 === a.rank, function () {
                                        return "Error in conv3dDerFilter: dy must be rank 5, but got shape " + a.shape + "."
                                    }), D(5 === n.length, function () {
                                        return "Error in conv3dDerFilter: filterShape must be length 5, but got " + n + "."
                                    }), D(i.shape[4] === n[3], function () {
                                        return "Error in conv3dDerFilter: depth of input " + i.shape[4] + ") must match input depth in filter (" + n[3] + "."
                                    }), D(a.shape[4] === n[4], function () {
                                        return "Error in conv3dDerFilter: depth of dy (" + a.shape[4] + ") must match output depth for filter (" + n[4] + ")."
                                    });
                                    var s = ds(i.shape, n, r, 1, o);
                                    return Zt.engine.runKernel(function (t) {
                                        return t.conv3dDerFilter(i, a, s)
                                    }, {
                                        x5D: i,
                                        dy5D: a
                                    })
                                }(n, t, r.shape, o, i)
                            }
                        }
                    });
                return l ? p.as4D(p.shape[1], p.shape[2], p.shape[3], p.shape[4]) : p
            }
        }),
        Ns = Fe({
            conv2dDerFilter_: Es
        }),
        ks = Fe({
            depthwiseConv2d_: function (t, e, n, r, o, i, a) {
                void 0 === o && (o = "NHWC"), void 0 === i && (i = [1, 1]);
                var s = re(t, "x", "depthwiseConv2d"),
                    u = re(e, "filter", "depthwiseConv2d"),
                    c = s,
                    l = !1;
                3 === s.rank && (l = !0, c = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), D(4 === c.rank, function () {
                    return "Error in depthwiseConv2d: input must be rank 4, but got rank " + c.rank + "."
                }), D(4 === u.rank, function () {
                    return "Error in depthwiseConv2d: filter must be rank 4, but got rank " + u.rank + "."
                }), D(c.shape[3] === u.shape[2], function () {
                    return "Error in depthwiseConv2d: number of input channels (" + c.shape[3] + ") must match the inChannels dimension in filter " + u.shape[2] + "."
                }), null == i && (i = [1, 1]), D(ws(n, i), function () {
                    return "Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + i + "'"
                }), null != a && D(T(r), function () {
                    return "Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode " + a + " but got pad " + r + "."
                });
                var h = fs(c.shape, u.shape, n, i, r, a, !0),
                    p = Zt.engine.runKernel(function (t, e) {
                        var n = t.depthwiseConv2D(c, u, h);
                        return e([c, u]), n
                    }, {
                        x: c,
                        $filter: u
                    }, function (t, e) {
                        D(xs(i), function () {
                            return "Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '" + i + "'"
                        });
                        var n = e[0],
                            r = e[1];
                        return {
                            x: function () {
                                return function (t, e, n, r) {
                                    var o = e,
                                        i = !1;
                                    3 === e.rank && (i = !0, o = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
                                    var a = Zt.engine.runKernel(function (t) {
                                        return t.depthwiseConv2DDerInput(o, n, r)
                                    }, {
                                        dy4D: o
                                    });
                                    return i ? a.as3D(a.shape[1], a.shape[2], a.shape[3]) : a
                                }(n.shape, t, r, h)
                            },
                            $filter: function () {
                                return function (t, e, n, r) {
                                    var o = t;
                                    3 === t.rank && (o = t.as4D(1, t.shape[0], t.shape[1], t.shape[2]));
                                    var i = e;
                                    return 3 === i.rank && (i = e.as4D(1, e.shape[0], e.shape[1], e.shape[2])), Zt.engine.runKernel(function (t) {
                                        return t.depthwiseConv2DDerFilter(o, i, r)
                                    }, {
                                        x4D: o,
                                        dy4D: i
                                    })
                                }(n, t, r.shape, h)
                            }
                        }
                    });
                return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
            }
        }),
        Is = Fe({
            separableConv2d_: function (t, e, n, r, o, i, a) {
                void 0 === i && (i = [1, 1]), void 0 === a && (a = "NHWC");
                var s = re(t, "x", "separableConv2d"),
                    u = re(e, "depthwiseFilter", "separableConv2d"),
                    c = re(n, "pointwiseFilter", "separableConv2d"),
                    l = s,
                    h = !1;
                if (3 === s.rank && (h = !0, l = s.as4D(1, s.shape[0], s.shape[1], s.shape[2])), "NCHW" === a) throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");
                D(4 === l.rank, function () {
                    return "Error in separableConv2d: input must be rank 4, but got rank " + l.rank + "."
                }), D(4 === u.rank, function () {
                    return "Error in separableConv2d: depthwise filter must be rank 4, but got rank " + u.rank + "."
                }), D(4 === c.rank, function () {
                    return "Error in separableConv2d: pointwise filter must be rank 4, but got rank " + u.rank + "."
                }), D(1 === c.shape[0], function () {
                    return "Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got " + c.shape[0] + "."
                }), D(1 === c.shape[1], function () {
                    return "Error in separableConv2d: the second dimension of pointwise filter must be 1, but got " + c.shape[1] + "."
                });
                var p = u.shape[2],
                    f = u.shape[3];
                D(c.shape[2] === p * f, function () {
                    return "Error in separableConv2d: the third dimension of pointwise filter must be " + p * f + ", but got " + c.shape[2] + "."
                });
                var d = ks(l, u, r, o, a, i),
                    v = Ss(d, c, 1, "valid", a);
                return h ? v.as3D(v.shape[1], v.shape[2], v.shape[3]) : v
            }
        }),
        Ts = Fe({
            conv2dTranspose_: function (t, e, n, r, o, i) {
                return bs(n, re(t, "x", "conv2dTranspose"), re(e, "filter", "conv2dTranspose"), r, o, i)
            }
        });
    var As = Fe({
            matMul_: function (t, e, i, a) {
                var n;
                void 0 === i && (i = !1), void 0 === a && (a = !1);
                var r = re(t, "a", "matMul"),
                    o = re(e, "b", "matMul");
                n = Tt(r, o), r = n[0], o = n[1];
                var s = i ? r.shape[r.rank - 2] : r.shape[r.rank - 1],
                    u = a ? o.shape[o.rank - 1] : o.shape[o.rank - 2],
                    c = i ? r.shape[r.rank - 1] : r.shape[r.rank - 2],
                    l = a ? o.shape[o.rank - 2] : o.shape[o.rank - 1],
                    h = r.shape.slice(0, -2),
                    p = o.shape.slice(0, -2),
                    f = B(h),
                    d = B(p);
                D(2 <= r.rank && 2 <= o.rank && r.rank === o.rank, function () {
                    return "Error in matMul: inputs must have the same rank of at least 2, got ranks " + r.rank + " and " + o.rank + "."
                }), D(E(h, p), function () {
                    return "Error in matMul: outer dimensions (" + h + ") and (" + p + ") of Tensors with shapes " + r.shape + " and " + o.shape + " must match."
                }), D(s === u, function () {
                    return "Error in matMul: inner shapes (" + s + ") and (" + u + ") of Tensors with shapes " + r.shape + " and " + o.shape + " and transposeA=" + i + " and transposeB=" + a + " must match."
                });
                var v = r.shape.slice(0, -2).concat([c, l]),
                    m = i ? r.as3D(f, s, c) : r.as3D(f, c, s),
                    g = a ? o.as3D(d, l, u) : o.as3D(d, u, l);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.batchMatMul(m, g, i, a);
                    return e([m, g]), n
                }, {
                    $a: m,
                    $b: g
                }, function (t, e) {
                    var n = e,
                        r = n[0],
                        o = n[1];
                    return i || a ? !i && a ? {
                        $a: function () {
                            return t.matMul(o, !1, !1)
                        },
                        $b: function () {
                            return t.matMul(r, !0, !1)
                        }
                    } : i && !a ? {
                        $a: function () {
                            return o.matMul(t, !1, !0)
                        },
                        $b: function () {
                            return r.matMul(t, !1, !1)
                        }
                    } : {
                        $a: function () {
                            return o.matMul(t, !0, !0)
                        },
                        $b: function () {
                            return t.matMul(r, !0, !0)
                        }
                    } : {
                        $a: function () {
                            return t.matMul(o, !1, !0)
                        },
                        $b: function () {
                            return r.matMul(t, !0, !1)
                        }
                    }
                }).reshape(v)
            }
        }),
        Ds = Fe({
            dot_: function (t, e) {
                var n = re(t, "t1", "dot"),
                    r = re(e, "t2", "dot");
                D(!(1 !== n.rank && 2 !== n.rank || 1 !== r.rank && 2 !== r.rank), function () {
                    return "Error in dot: inputs must all be rank 1 or 2, but got ranks " + n.rank + " and " + r.rank + "."
                });
                var o = 1 === n.rank ? n.size : n.shape[1],
                    i = 1 === r.rank ? r.size : r.shape[0];
                return D(o === i, function () {
                    return "Error in dot: inner dimensions of inputs must match, but got " + o + " and " + i + "."
                }), 1 === n.rank && 1 === r.rank ? n.as2D(1, -1).matMul(r.as2D(-1, 1)).asScalar() : 1 === n.rank && 2 === r.rank ? n.as2D(1, -1).matMul(r.as2D(r.shape[0], r.shape[1])).as1D() : 2 === n.rank && 1 === r.rank ? n.matMul(r.as2D(-1, 1)).as1D() : n.matMul(r.as2D(r.shape[0], r.shape[1]))
            }
        }),
        Ms = Fe({
            outerProduct_: function (t, e) {
                var n = re(t, "v1", "outerProduct"),
                    r = re(e, "v2", "outerProduct");
                return D(1 === n.rank && 1 === r.rank, function () {
                    return "Error in outerProduct: inputs must be rank 1, but got ranks " + n.rank + " and " + r.rank + "."
                }), n.as2D(-1, 1).matMul(r.as2D(1, -1))
            }
        });
    var Os = Fe({
            reverse_: function (t, e) {
                var n = re(t, "x", "reverse");
                if (0 === n.rank) return n.clone();
                var r = k(e, n.shape);
                return Zt.engine.runKernel(function (t) {
                    return t.reverse(n, r)
                }, {
                    $x: n
                }, function (t) {
                    return {
                        $x: function () {
                            return t.reverse(r)
                        }
                    }
                }).reshapeAs(n)
            }
        }),
        Ps = Fe({
            reverse1d_: function (t) {
                var e = re(t, "x", "reverse");
                return D(1 === e.rank, function () {
                    return "Error in reverse1D: x must be rank 1 but got rank " + e.rank + "."
                }), Os(e, 0)
            }
        }),
        Fs = Fe({
            reverse2d_: function (t, e) {
                var n = re(t, "x", "reverse");
                return D(2 === n.rank, function () {
                    return "Error in reverse2D: x must be rank 2 but got rank " + n.rank + "."
                }), Os(n, e)
            }
        }),
        Ls = Fe({
            reverse3d_: function (t, e) {
                var n = re(t, "x", "reverse");
                return D(3 === n.rank, function () {
                    return "Error in reverse3D: x must be rank 3 but got rank " + n.rank + "."
                }), Os(n, e)
            }
        }),
        Bs = Fe({
            reverse4d_: function (t, e) {
                var n = re(t, "x", "reverse");
                return D(4 === n.rank, function () {
                    return "Error in reverse4D: x must be rank 4 but got rank " + n.rank + "."
                }), Os(n, e)
            }
        });

    function Ws(t, o, i, a, s, e) {
        var n = re(t, "x", "maxPool"),
            r = n,
            u = !1;
        3 === n.rank && (u = !0, r = n.as4D(1, n.shape[0], n.shape[1], n.shape[2])), null == a && (a = [1, 1]), D(4 === r.rank, function () {
            return "Error in maxPool: input must be rank 4 but got rank " + r.rank + "."
        }), D(ws(i, a), function () {
            return "Error in maxPool: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + a + "'"
        }), null != e && D(T(s), function () {
            return "Error in maxPool: pad must be an integer when using, dimRoundingMode " + e + " but got pad " + s + "."
        });
        var c = ps(r.shape, o, i, a, s, e),
            l = Zt.engine.runKernel(function (t, e) {
                var n = t.maxPool(r, c);
                return e([r, n]), n
            }, {
                x: r
            }, function (t, e) {
                var n = e[0],
                    r = e[1];
                return {
                    x: function () {
                        return function (t, e, n, r, o, i, a, s) {
                            var u = re(t, "dy", "maxPoolBackprop"),
                                c = re(e, "input", "maxPoolBackprop"),
                                l = re(n, "output", "maxPoolBackprop");
                            D(c.rank === u.rank, function () {
                                return "Rank of input (" + c.rank + ") does not match rank of dy (" + u.rank + ")"
                            }), null == i && (i = [1, 1]), D(ws(o, i), function () {
                                return "Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides " + o + " and dilations '" + i + "'"
                            }), D(4 === u.rank, function () {
                                return "Error in maxPoolBackprop: dy must be rank 4 but got rank " + u.rank + "."
                            }), D(4 === c.rank, function () {
                                return "Error in maxPoolBackprop: input must be rank 4 but got rank " + c.rank + "."
                            }), null != s && D(T(a), function () {
                                return "Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode " + s + " but got pad " + a + "."
                            });
                            var h = ps(c.shape, r, o, i, a, s);
                            return Zt.engine.runKernel(function (t) {
                                return t.maxPoolBackprop(u, c, l, h)
                            }, {
                                $dy: u,
                                $input: c
                            })
                        }(t, n, r, o, i, a, s)
                    }
                }
            });
        return u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
    }

    function zs(t, e, n, r, o, i) {
        var a = re(t, "x", "avgPool", "float32");
        null == r && (r = [1, 1]), D(ws(n, r), function () {
            return "Error in avgPool: Either strides or dilations must be 1. Got strides " + n + " and dilations '" + r + "'"
        });
        var s = a,
            u = !1;
        3 === a.rank && (u = !0, s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), D(4 === s.rank, function () {
            return "Error in avgPool: x must be rank 4 but got rank " + s.rank + "."
        }), null != i && D(T(o), function () {
            return "Error in avgPool: pad must be an integer when using, dimRoundingMode " + i + " but got pad " + o + "."
        });
        var c = ps(s.shape, e, n, r, o, i),
            l = Zt.engine.runKernel(function (t) {
                return t.avgPool(s, c)
            }, {
                x: s
            }, function (t) {
                return {
                    x: function () {
                        return function (t, e, n, r, o, i) {
                            var a = re(t, "dy", "avgPoolBackprop"),
                                s = re(e, "input", "avgPoolBackprop");
                            D(s.rank === a.rank, function () {
                                return "Rank of input (" + s.rank + ") does not match rank of dy (" + a.rank + ")"
                            }), null == o && (o = [1, 1]), D(ws(r, o), function () {
                                return "Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides " + r + " and dilations '" + o + "'"
                            });
                            var u = s,
                                c = a,
                                l = !1;
                            3 === s.rank && (l = !0, u = s.as4D(1, s.shape[0], s.shape[1], s.shape[2]), c = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), D(4 === c.rank, function () {
                                return "Error in avgPoolBackprop: dy must be rank 4 but got rank " + c.rank + "."
                            }), D(4 === u.rank, function () {
                                return "Error in avgPoolBackprop: input must be rank 4 but got rank " + u.rank + "."
                            });
                            var h = ps(u.shape, n, r, o, i),
                                p = Zt.engine.runKernel(function (t) {
                                    return t.avgPoolBackprop(c, u, h)
                                }, {
                                    dy4D: c,
                                    input4D: u
                                });
                            return l ? p.as3D(p.shape[1], p.shape[2], p.shape[3]) : p
                        }(t, s, e, n, r, o)
                    }
                }
            });
        return l = l.cast(a.dtype), u ? l.as3D(l.shape[1], l.shape[2], l.shape[3]) : l
    }
    var Us = Fe({
            maxPool_: function (t, e, n, r, o) {
                return Ws(t, e, n, 1, r, o)
            }
        }),
        Gs = Fe({
            avgPool_: function (t, e, n, r, o) {
                return zs(t, e, n, 1, r, o)
            }
        }),
        Vs = Fe({
            pool_: function (t, e, n, r, o, i) {
                null == o && (o = [1, 1]), null == i && (i = 1), 0 === r && (r = "valid");
                var a = re(t, "x", "maxPool"),
                    s = a,
                    u = !1;
                3 === a.rank && (u = !0, s = a.as4D(1, a.shape[0], a.shape[1], a.shape[2])), D(ws(i, o), function () {
                    return "Error in pool: Either strides or dilations must be 1. Got strides " + i + " and dilations '" + o + "'"
                });
                var c, l, h, p, f, d, v = ps(s.shape, e, i, o, r),
                    m = [v.dilationHeight, v.dilationWidth];
                c = "same" === r ? (l = [v.filterHeight, v.filterWidth], h = m, p = l.map(function (t, e) {
                    return t + (t - 1) * (h[e] - 1)
                }).map(function (t) {
                    return t - 1
                }), f = p.map(function (t) {
                    return Math.floor(t / 2)
                }), d = p.map(function (t, e) {
                    return t - f[e]
                }), p.map(function (t, e) {
                    return [f[e], d[e]]
                })) : [
                    [0, 0],
                    [0, 0]
                ];
                var g, y, x, w, b, E, C, _, S = 1 === m[0] && 1 === m[1],
                    R = (g = [v.inHeight, v.inWidth], y = m, w = (x = c).map(function (t) {
                        return t[0]
                    }), b = x.map(function (t) {
                        return t[1]
                    }), E = g.concat(w, b), C = y.map(function (t, e) {
                        return (t - E[e] % t) % t
                    }), _ = b.map(function (t, e) {
                        return t + C[e]
                    }), [y.map(function (t, e) {
                        return [w[e], _[e]]
                    }), y.map(function (t, e) {
                        return [0, C[e]]
                    })]),
                    N = R[1],
                    k = S ? r : "valid",
                    I = S ? s : aa(s, m, R[0]),
                    T = ("avg" === n ? function () {
                        return zs(I, e, i, 1, k)
                    } : function () {
                        return Ws(I, e, i, 1, k)
                    })(),
                    A = S ? T : Gi(T, m, N);
                return u ? A.as3D(A.shape[1], A.shape[2], A.shape[3]) : A
            }
        });
    var Hs = Fe({
            slice_: function (t, e, n) {
                var r, o, i = re(t, "x", "slice");
                if (0 === i.rank) throw new Error("Slicing scalar is not possible");
                r = "number" == typeof e ? [e].concat(new Array(i.rank - 1).fill(0)) : e.length < i.rank ? e.concat(new Array(i.rank - e.length).fill(0)) : e.slice(), o = (o = null == n ? new Array(i.rank).fill(-1) : "number" == typeof n ? [n].concat(new Array(i.rank - 1).fill(-1)) : n.length < i.rank ? n.concat(new Array(i.rank - n.length).fill(-1)) : n).map(function (t, e) {
                        return 0 <= t ? t : (D(-1 === t, function () {
                            return "Bad value in size"
                        }), i.shape[e] - r[e])
                    }),
                    function (e, n, r) {
                        D(e.rank === n.length, function () {
                            return "Error in slice" + e.rank + "D: Length of begin " + n + " must match the rank of the array (" + e.rank + ")."
                        }), D(e.rank === r.length, function () {
                            return "Error in slice" + e.rank + "D: Length of size " + r + " must match the rank of the array (" + e.rank + ")."
                        });
                        for (var t = function (t) {
                                D(n[t] + r[t] <= e.shape[t], function () {
                                    return "Error in slice" + e.rank + "D: begin[" + t + "] + size[" + t + "] (" + (n[t] + r[t]) + ") would overflow input.shape[" + t + "] (" + e.shape[t] + ")"
                                })
                            }, o = 0; o < e.rank; ++o) t(o)
                    }(i, r, o);
                var a = i.shape;
                return Zt.engine.runKernel(function (t) {
                    return t.slice(i, r, o)
                }, {
                    $x: i
                }, function (t) {
                    for (var e = [], n = 0; n < t.rank; n++) e.push([r[n], a[n] - r[n] - o[n]]);
                    return {
                        $x: function () {
                            return t.pad(e)
                        }
                    }
                })
            }
        }),
        qs = Fe({
            slice1d_: function (t, e, n) {
                var r = re(t, "x", "slice1d");
                return D(1 === r.rank, function () {
                    return "slice1d expects a rank-1 tensor, but got a rank-" + r.rank + " tensor"
                }), Hs(r, [e], [n])
            }
        }),
        js = Fe({
            slice2d_: function (t, e, n) {
                var r = re(t, "x", "slice2d");
                return D(2 === r.rank, function () {
                    return "slice2d expects a rank-2 tensor, but got a rank-" + r.rank + " tensor"
                }), Hs(r, e, n)
            }
        }),
        $s = Fe({
            slice3d_: function (t, e, n) {
                var r = re(t, "x", "slice3d");
                return D(3 === r.rank, function () {
                    return "slice3d expects a rank-3 tensor, but got a rank-" + r.rank + " tensor"
                }), Hs(r, e, n)
            }
        }),
        Ks = Fe({
            slice4d_: function (t, e, n) {
                var r = re(t, "x", "slice4d");
                return D(4 === r.rank, function () {
                    return "slice4d expects a rank-4 tensor, but got a rank-" + r.rank + " tensor"
                }), Hs(r, e, n)
            }
        });

    function Xs(e, n, r, t, o) {
        return n.rank < r.rank && (n = n.reshape(be(n.shape, t))), e.rank < r.rank && (e = e.reshape(be(e.shape, t))), {
            $x: function () {
                var t = e.mul(r.equal(n).cast(e.dtype));
                return null == o ? t : t.transpose(o)
            }
        }
    }
    var Ys = Fe({
            all_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "all", "bool"),
                    o = k(e, r.shape),
                    i = o,
                    a = Ce(i, r.rank);
                null != a && (r = r.transpose(a), i = Se(i.length, r.rank));
                var s = Zt.engine.runKernel(function (t) {
                    return t.all(r, i)
                }, {
                    $x: r
                });
                if (n) {
                    var u = be(s.shape, o);
                    return s.reshape(u)
                }
                return s
            }
        }),
        Qs = Fe({
            any_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "any", "bool"),
                    o = k(e, r.shape),
                    i = o,
                    a = Ce(i, r.rank);
                null != a && (r = r.transpose(a), i = Se(i.length, r.rank));
                var s = Zt.engine.runKernel(function (t) {
                    return t.any(r, i)
                }, {
                    $x: r
                });
                if (n) {
                    var u = be(s.shape, o);
                    return s.reshape(u)
                }
                return s
            }
        }),
        Js = Fe({
            argMax_: function (t, e) {
                void 0 === e && (e = 0);
                var r = re(t, "x", "argMax");
                null == e && (e = 0);
                var o = k(e, r.shape),
                    n = Ce(o, r.rank);
                return null != n && (r = r.transpose(n), o = Se(o.length, r.rank)), Zt.engine.runKernel(function (t, e) {
                    var n = t.argMax(r, o[0]);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return nn(n)
                        }
                    }
                })
            }
        }),
        Zs = Fe({
            argMin_: function (t, e) {
                void 0 === e && (e = 0);
                var r = re(t, "x", "argMin");
                null == e && (e = 0);
                var o = k(e, r.shape),
                    n = Ce(o, r.rank);
                return null != n && (r = r.transpose(n), o = Se(o.length, r.rank)), Zt.engine.runKernel(function (t, e) {
                    var n = t.argMin(r, o[0]);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return nn(n)
                        }
                    }
                })
            }
        }),
        tu = Fe({
            logSumExp_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "logSumExp"),
                    o = k(e, r.shape),
                    i = r.max(o, !0),
                    a = r.sub(i).exp().sum(o).log(),
                    s = i.reshape(a.shape).add(a);
                if (n) {
                    var u = be(s.shape, o);
                    return s.reshape(u)
                }
                return s
            }
        }),
        eu = Fe({
            max_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "max"),
                    o = r,
                    i = k(e, r.shape),
                    a = i,
                    s = Ce(a, r.rank);
                null != s && (r = r.transpose(s), a = Se(a.length, r.rank));
                var u = Zt.engine.runKernel(function (t, e) {
                    var n = t.max(r, a);
                    return e([o, n]), n
                }, {
                    $x: r
                }, function (t, e) {
                    return Xs(t, e[1], e[0], i, s)
                });
                if (n) {
                    var c = be(u.shape, i);
                    u = u.reshape(c)
                }
                return u
            }
        }),
        nu = Fe({
            mean_: function (t, e, r) {
                void 0 === e && (e = null), void 0 === r && (r = !1);
                var n = re(t, "x", "mean"),
                    o = k(e, n.shape),
                    i = B(we(n.shape, o)[1]);
                return ae(function (n) {
                    var t = Ve(i);
                    return {
                        value: (t.dtype === n.dtype ? n : n.cast(t.dtype)).div(t).sum(e, r),
                        gradFunc: function (t) {
                            var e = n.shape.slice();
                            return o.forEach(function (t) {
                                e[t] = 1
                            }), t.reshape(e).mul(Ye(n.shape, "float32")).div(i)
                        }
                    }
                })(n)
            }
        }),
        ru = Fe({
            min_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "min"),
                    o = r,
                    i = k(e, r.shape),
                    a = i,
                    s = Ce(a, r.rank);
                null != s && (r = r.transpose(s), a = Se(a.length, r.rank));
                var u = Zt.engine.runKernel(function (t, e) {
                    var n = t.min(r, a);
                    return e([o, n]), n
                }, {
                    $x: r
                }, function (t, e) {
                    return Xs(t, e[1], e[0], i, s)
                });
                if (n) {
                    var c = be(u.shape, i);
                    u = u.reshape(c)
                }
                return u
            }
        }),
        ou = Fe({
            moments_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = k(e, (t = re(t, "x", "moments")).shape),
                    o = t.mean(r, n),
                    i = o.shape;
                return n || (i = be(o.shape, r)), {
                    mean: o,
                    variance: t.toFloat().sub(o.reshape(i)).square().mean(r, n)
                }
            }
        }),
        iu = Fe({
            sum_: function (t, e, a) {
                void 0 === e && (e = null), void 0 === a && (a = !1);
                var n = re(t, "x", "sum");
                "bool" === n.dtype && (n = n.toInt());
                var s = k(e, n.shape);
                return ae(function (n) {
                    var t = Ce(s, n.rank),
                        e = s,
                        r = n;
                    null != t && (r = n.transpose(t), e = Se(e.length, n.rank));
                    var o = Zt.engine.runKernel(function (t) {
                        return t.sum(r, e)
                    }, {
                        permutedX: r
                    });
                    if (a) {
                        var i = be(o.shape, s);
                        o = o.reshape(i)
                    }
                    return {
                        value: o,
                        gradFunc: function (t) {
                            var e = n.shape.slice();
                            return s.forEach(function (t) {
                                e[t] = 1
                            }), t.reshape(e).mul(Ye(n.shape, "float32"))
                        }
                    }
                })(n)
            }
        }),
        au = Fe({
            prod_: function (t, e, n) {
                void 0 === e && (e = null), void 0 === n && (n = !1);
                var r = re(t, "x", "prod");
                "bool" === r.dtype && (r = r.toInt());
                var o = k(e, r.shape),
                    i = Ce(o, r.rank),
                    a = o,
                    s = r;
                null != i && (s = r.transpose(i), a = Se(a.length, r.rank));
                var u = Zt.engine.runKernel(function (t) {
                    return t.prod(s, a)
                }, {
                    permutedX: s
                });
                if (n) {
                    var c = be(u.shape, o);
                    u = u.reshape(c)
                }
                return u
            }
        });
    var su = Fe({
            equal_: function (t, e) {
                var n, r = re(t, "a", "equal"),
                    o = re(e, "b", "equal");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t) {
                    return t.equal(r, o)
                }, {
                    $a: r,
                    $b: o
                })
            }
        }),
        uu = Fe({
            equalStrict_: function (t, e) {
                var n = re(t, "a", "equalStrict"),
                    r = re(e, "b", "equalStrict");
                return g(n.shape, r.shape, "Error in equalStrict: "), n.equal(r)
            }
        }),
        cu = Fe({
            greater_: function (t, e) {
                var n, r = re(t, "a", "greater"),
                    o = re(e, "b", "greater");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t) {
                    return t.greater(r, o)
                }, {
                    $a: r,
                    $b: o
                })
            }
        }),
        lu = Fe({
            greaterEqual_: function (t, e) {
                var n, r = re(t, "a", "greaterEqual"),
                    o = re(e, "b", "greaterEqual");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t, e) {
                    var n = t.greaterEqual(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (t, e) {
                    var n = e[0],
                        r = e[1];
                    return {
                        $a: function () {
                            return nn(n)
                        },
                        $b: function () {
                            return nn(r)
                        }
                    }
                })
            }
        }),
        hu = Fe({
            greaterEqualStrict_: function (t, e) {
                var n = re(t, "a", "greaterEqualStrict"),
                    r = re(e, "b", "greaterEqualStrict");
                return g(n.shape, r.shape, "Error in greaterEqualStrict: "), n.greaterEqual(r)
            }
        }),
        pu = Fe({
            greaterStrict_: function (t, e) {
                var n = re(t, "a", "greaterStrict"),
                    r = re(e, "b", "greaterStrict");
                return g(n.shape, r.shape, "Error in greaterStrict: "), n.greater(r)
            }
        }),
        fu = Fe({
            less_: function (t, e) {
                var n, r = re(t, "a", "less"),
                    o = re(e, "b", "less");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t) {
                    return t.less(r, o)
                }, {
                    $a: r,
                    $b: o
                })
            }
        }),
        du = Fe({
            lessEqual_: function (t, e) {
                var n, r = re(t, "a", "lessEqual"),
                    o = re(e, "b", "lessEqual");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t) {
                    return t.lessEqual(r, o)
                }, {
                    $a: r,
                    $b: o
                })
            }
        }),
        vu = Fe({
            lessEqualStrict_: function (t, e) {
                var n = re(t, "a", "lessEqualStrict"),
                    r = re(e, "b", "lessEqualStrict");
                return g(n.shape, r.shape, "Error in lessEqualStrict: "), n.lessEqual(r)
            }
        }),
        mu = Fe({
            lessStrict_: function (t, e) {
                var n = re(t, "a", "lessStrict"),
                    r = re(e, "b", "lessStrict");
                return g(n.shape, r.shape, "Error in lessStrict: "), n.less(r)
            }
        }),
        gu = Fe({
            notEqual_: function (t, e) {
                var n, r = re(t, "a", "notEqual"),
                    o = re(e, "b", "notEqual");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t) {
                    return t.notEqual(r, o)
                }, {
                    $a: r,
                    $b: o
                })
            }
        }),
        yu = Fe({
            notEqualStrict_: function (t, e) {
                var n = re(t, "a", "notEqualStrict"),
                    r = re(e, "b", "notEqualStrict");
                return g(n.shape, r.shape, "Error in notEqualStrict: "), n.notEqual(r)
            }
        });
    var xu = Fe({
            add_: function (t, e) {
                var n, r = re(t, "a", "add"),
                    o = re(e, "b", "add");
                n = Tt(r, o), r = n[0], o = n[1];
                var i = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t) {
                    return t.add(r, o)
                }, {
                    $a: r,
                    $b: o
                }, function (n) {
                    return {
                        $a: function () {
                            var t = n,
                                e = yn(r.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape)
                        },
                        $b: function () {
                            var t = n,
                                e = yn(o.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape)
                        }
                    }
                })
            }
        }),
        wu = Fe({
            addN_: function (t) {
                D(Array.isArray(t), function () {
                    return "The argument passed to tf.addN() must be a list of tensors"
                }), D(1 <= t.length, function () {
                    return "Must pass at least one tensor to tf.addN(), but got " + t.length
                });
                var e = t.map(function (t, e) {
                        return re(t, "tensors" + e, "addN")
                    }),
                    n = e[0];
                e.forEach(function (t) {
                    if (t.dtype !== n.dtype) throw new Error("All tensors passed to tf.addN() must have the same dtype")
                }), e.forEach(function (t) {
                    if (!E(t.shape, n.shape)) throw new Error("All tensors passed to tf.addN() must have the same shape")
                });
                var r = e;
                return Zt.engine.runKernel(function (t) {
                    return t.addN(e)
                }, r, function (n) {
                    var r = {};
                    return e.forEach(function (t, e) {
                        r[e] = function () {
                            return n.clone()
                        }
                    }), r
                })
            }
        }),
        bu = Fe({
            addStrict_: function (t, e) {
                var n = re(t, "a", "addStrict"),
                    r = re(e, "b", "addStrict");
                return g(n.shape, r.shape, "Error in addStrict: "), n.add(r)
            }
        }),
        Eu = Fe({
            atan2_: function (t, e) {
                var n, r = re(t, "a", "atan2"),
                    o = re(e, "b", "atan2");
                n = Tt(r, o), r = n[0], o = n[1];
                var a = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.atan2(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (r, t) {
                    var o = t[0],
                        i = t[1];
                    return {
                        $a: function () {
                            var t = xu(o.square(), i.square()),
                                e = r.mul(i.div(t)),
                                n = yn(o.shape, a);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(o.shape)
                        },
                        $b: function () {
                            var t = xu(o.square(), i.square()),
                                e = Pa(r.mul(o.div(t))),
                                n = yn(i.shape, a);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape)
                        }
                    }
                })
            }
        }),
        Cu = Fe({
            div_: function (t, e) {
                var n, r = re(t, "a", "div"),
                    o = re(e, "b", "div");
                if (n = Tt(r, o), r = n[0], o = n[1], "int32" === r.dtype && "int32" === o.dtype) return Su(r, o);
                var a = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.realDivide(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (r, t) {
                    var o = t[0],
                        i = t[1];
                    return {
                        $a: function () {
                            var t = r.div(i.toFloat()),
                                e = yn(o.shape, a);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        },
                        $b: function () {
                            var t = r.mul(o.toFloat()),
                                e = yn(i.shape, a);
                            0 < e.length && (t = t.sum(e).reshape(i.shape));
                            var n = i.square();
                            return t.div(n.toFloat()).neg()
                        }
                    }
                })
            }
        }),
        _u = Fe({
            divStrict_: function (t, e) {
                var n = re(t, "a", "div"),
                    r = re(e, "b", "div");
                return g(n.shape, r.shape, "Error in divideStrict: "), n.div(r)
            }
        }),
        Su = Fe({
            floorDiv_: function (t, e) {
                var n, r = re(t, "a", "floorDiv"),
                    o = re(e, "b", "floorDiv");
                n = Tt(r, o), r = n[0], o = n[1];
                var a = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.floorDiv(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (r, t) {
                    var o = t[0],
                        i = t[1];
                    return {
                        $a: function () {
                            var t = r.div(i.toFloat()),
                                e = yn(o.shape, a);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        },
                        $b: function () {
                            var t = r.mul(o.toFloat()),
                                e = yn(i.shape, a);
                            0 < e.length && (t = t.sum(e).reshape(i.shape));
                            var n = i.square();
                            return t.div(n.toFloat()).neg()
                        }
                    }
                })
            }
        }),
        Ru = Fe({
            maximum_: function (t, e) {
                var n, r = re(t, "a", "maximum"),
                    o = re(e, "b", "maximum");
                return n = Tt(r, o), r = n[0], o = n[1], "bool" === r.dtype && (r = r.toInt(), o = o.toInt()), xn(r.shape, o.shape), Zt.engine.runKernel(function (t, e) {
                    var n = t.maximum(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (t, e) {
                    var n = e[0],
                        r = e[1];
                    return {
                        $a: function () {
                            return t.mul(n.greaterEqual(r).toFloat())
                        },
                        $b: function () {
                            return t.mul(n.less(r).toFloat())
                        }
                    }
                })
            }
        }),
        Nu = Fe({
            maximumStrict_: function (t, e) {
                var n = re(t, "a", "maximumStrict"),
                    r = re(e, "b", "maximumStrict");
                return g(n.shape, r.shape, "Error in maximumStrict: "), n.maximum(r)
            }
        }),
        ku = Fe({
            minimum_: function (t, e) {
                var n, r = re(t, "a", "minimum"),
                    o = re(e, "b", "minimum");
                return n = Tt(r, o), r = n[0], o = n[1], "bool" === r.dtype && (r = r.toInt(), o = o.toInt()), xn(r.shape, o.shape), Zt.engine.runKernel(function (t, e) {
                    var n = t.minimum(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (t, e) {
                    var n = e[0],
                        r = e[1];
                    return {
                        $a: function () {
                            return t.mul(n.lessEqual(r).toFloat())
                        },
                        $b: function () {
                            return t.mul(n.greater(r).toFloat())
                        }
                    }
                })
            }
        }),
        Iu = Fe({
            minimumStrict_: function (t, e) {
                var n = re(t, "a", "minimumStrict"),
                    r = re(e, "b", "minimumStrict");
                return g(n.shape, r.shape, "Error in minimumStrict: "), n.minimum(r)
            }
        }),
        Tu = Fe({
            mod_: function (t, e) {
                var n, r = re(t, "a", "mod"),
                    o = re(e, "b", "mod");
                n = Tt(r, o), r = n[0], o = n[1];
                var i = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.mod(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (n, t) {
                    var r = t[0],
                        o = t[1];
                    return {
                        $a: function () {
                            var t = yn(r.shape, i);
                            return 0 < t.length ? n.sum(t).reshape(r.shape) : n
                        },
                        $b: function () {
                            var t = n.mul(r.div(o).floor().neg()),
                                e = yn(o.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }
                    }
                })
            }
        }),
        Au = Fe({
            modStrict_: function (t, e) {
                var n = re(t, "a", "modStrict"),
                    r = re(e, "b", "modStrict");
                return g(n.shape, r.shape, "Error in modStrict: "), n.mod(r)
            }
        }),
        Du = Fe({
            mul_: function (t, e) {
                var n, r = re(t, "a", "mul"),
                    o = re(e, "b", "mul");
                n = Tt(r, o), r = n[0], o = n[1];
                var i = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.multiply(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (n, t) {
                    var r = t[0],
                        o = t[1];
                    return {
                        $a: function () {
                            var t = n.mul(o.toFloat()),
                                e = yn(r.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(r.shape) : t
                        },
                        $b: function () {
                            var t = n.mul(r.toFloat()),
                                e = yn(o.shape, i);
                            return 0 < e.length ? t.sum(e).reshape(o.shape) : t
                        }
                    }
                })
            }
        }),
        Mu = Fe({
            mulStrict_: function (t, e) {
                var n = re(t, "a", "mul"),
                    r = re(e, "b", "mul");
                return g(n.shape, r.shape, "Error in multiplyStrict: "), n.mul(r)
            }
        }),
        Ou = Fe({
            pow_: function (t, e) {
                var r = re(t, "base", "pow"),
                    o = re(e, "exp", "pow"),
                    u = xn(r.shape, o.shape);
                return t = r.cast(kt(r.dtype, o.dtype)), e = o.cast(kt(r.dtype, o.dtype)), Zt.engine.runKernel(function (t, e) {
                    var n = t.pow(r, o);
                    return e([r, o, n]), n
                }, {
                    $base: r,
                    $exp: o
                }, function (o, t) {
                    var i = t[0],
                        a = t[1],
                        s = t[2];
                    return {
                        $base: function () {
                            var t = a.toFloat(),
                                e = o.mul(t.mul(i.pow(t.sub(Ve(1))))),
                                n = yn(i.shape, u);
                            return 0 < n.length && (e = e.sum(n)), e.reshape(i.shape)
                        },
                        $exp: function () {
                            var t = i.greater(0),
                                e = i.log().where(t, nn(i)),
                                n = o.mul(s.mul(e)),
                                r = yn(a.shape, u);
                            return 0 < r.length && (n = n.sum(r)), n.reshape(a.shape)
                        }
                    }
                })
            }
        }),
        Pu = Fe({
            powStrict_: function (t, e) {
                return g(t.shape, e.shape, "Error in powStrict: "), t.pow(e)
            }
        }),
        Fu = Fe({
            squaredDifference_: function (t, e) {
                var n, r = re(t, "a", "squaredDifference"),
                    o = re(e, "b", "squaredDifference");
                return n = Tt(r, o), r = n[0], o = n[1], xn(r.shape, o.shape), Zt.engine.runKernel(function (t, e) {
                    var n = t.squaredDifference(r, o);
                    return e([r, o]), n
                }, {
                    $a: r,
                    $b: o
                }, function (t, e) {
                    var n = e[0],
                        r = e[1],
                        o = Ve(2);
                    return {
                        $a: function () {
                            return t.mul(n.sub(r).mul(o))
                        },
                        $b: function () {
                            return t.mul(r.sub(n).mul(o))
                        }
                    }
                })
            }
        }),
        Lu = Fe({
            squaredDifferenceStrict_: function (t, e) {
                var n = re(t, "a", "squaredDifferenceStrict"),
                    r = re(e, "b", "squaredDifferenceStrict");
                return g(n.shape, r.shape, "Error in squaredDifferenceStrict: "), n.squaredDifference(r)
            }
        }),
        Bu = Fe({
            sub_: function (t, e) {
                var n, r = re(t, "a", "sub"),
                    o = re(e, "b", "sub");
                n = Tt(r, o), r = n[0], o = n[1];
                var i = xn(r.shape, o.shape);
                return Zt.engine.runKernel(function (t) {
                    return t.subtract(r, o)
                }, {
                    $a: r,
                    $b: o
                }, function (n) {
                    return {
                        $a: function () {
                            var t = n,
                                e = yn(r.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(r.shape)
                        },
                        $b: function () {
                            var t = n,
                                e = yn(o.shape, i);
                            return 0 < e.length && (t = t.sum(e)), t.neg().reshape(o.shape)
                        }
                    }
                })
            }
        }),
        Wu = Fe({
            subStrict_: function (t, e) {
                var n = re(t, "a", "subStrict"),
                    r = re(e, "b", "subStrict");
                return g(n.shape, r.shape, "Error in subStrict: "), n.sub(r)
            }
        });
    var zu = Fe({
            logicalAnd_: function (t, e) {
                var n = re(t, "a", "logicalAnd", "bool"),
                    r = re(e, "b", "logicalAnd", "bool");
                return xn(n.shape, r.shape), Zt.engine.runKernel(function (t) {
                    return t.logicalAnd(n, r)
                }, {
                    $a: n,
                    $b: r
                })
            }
        }),
        Uu = Fe({
            logicalNot_: function (t) {
                var e = re(t, "x", "logicalNot", "bool");
                return Zt.engine.runKernel(function (t) {
                    return t.logicalNot(e)
                }, {
                    $x: e
                })
            }
        }),
        Gu = Fe({
            logicalOr_: function (t, e) {
                var n = re(t, "a", "logicalOr", "bool"),
                    r = re(e, "b", "logicalOr", "bool");
                return xn(n.shape, r.shape), Zt.engine.runKernel(function (t) {
                    return t.logicalOr(n, r)
                }, {
                    $a: n,
                    $b: r
                })
            }
        }),
        Vu = Fe({
            logicalXor_: function (t, e) {
                var n = re(t, "a", "logicalXor", "bool"),
                    r = re(e, "b", "logicalXor", "bool");
                return xn(n.shape, r.shape), Gu(t, e).logicalAnd(zu(t, e).logicalNot())
            }
        }),
        Hu = Fe({
            where_: function (t, e, n) {
                var r = re(e, "a", "where"),
                    o = re(n, "b", "where"),
                    i = re(t, "condition", "where", "bool");
                return g(r.shape, o.shape, "Error in where: "), 1 === i.rank ? D(i.shape[0] === r.shape[0], function () {
                    return "The first dimension of `a` must match the size of `condition`."
                }) : g(i.shape, o.shape, "Error in where: "), Zt.engine.runKernel(function (t, e) {
                    var n = t.select(i, r, o);
                    return e([i]), n
                }, {
                    $condition: i,
                    $a: r,
                    $b: o
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $condition: function () {
                            return nn(n).toFloat()
                        },
                        $a: function () {
                            return t.mul(n.cast(t.dtype))
                        },
                        $b: function () {
                            return t.mul(n.logicalNot().cast(t.dtype))
                        }
                    }
                })
            }
        }),
        qu = function (o) {
            return m(this, void 0, void 0, function () {
                var e, n, r;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, (e = re(o, "condition", "whereAsync", "bool")).data()];
                        case 1:
                            return n = t.sent(), r = fa(e.shape, n), o !== e && e.dispose(), [2, r]
                    }
                })
            })
        };
    var ju = Fe({
            elu_: function (t) {
                var r = re(t, "x", "elu");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.elu(r);
                    return e([n]), n
                }, {
                    $x: r
                }, function (e, t) {
                    var n = t[0];
                    return {
                        $x: function () {
                            return Zt.engine.runKernel(function (t) {
                                return t.eluDer(e, n)
                            }, {
                                dy: e,
                                y: n
                            })
                        }
                    }
                })
            }
        }),
        $u = Fe({
            leakyRelu_: function (t, e) {
                void 0 === e && (e = .2);
                var n = re(t, "x", "leakyRelu");
                return Ru(Ve(e).mul(n), n)
            }
        }),
        Ku = Fe({
            prelu_: function (t, e) {
                var r = re(t, "x", "prelu"),
                    o = re(e, "alpha", "prelu");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.prelu(r, o);
                    return e([r, o]), n
                }, {
                    $x: r,
                    $alpha: o
                }, function (n, t) {
                    var r = t[0],
                        o = t[1],
                        i = r.greater(0);
                    return {
                        $x: function () {
                            return Hu(i, n, n.mul(o))
                        },
                        $alpha: function () {
                            var t = Hu(i, nn(n), n.mul(r)),
                                e = yn(o.shape, n.shape);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(o.shape)
                        }
                    }
                })
            }
        }),
        Xu = Fe({
            relu_: function (t) {
                var r = re(t, "x", "relu");
                return "bool" === r.dtype ? r.toInt() : Zt.engine.runKernel(function (t, e) {
                    var n = t.relu(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return t.mulStrict(n.step().toFloat())
                        }
                    }
                })
            }
        }),
        Yu = Fe({
            selu_: function (t) {
                var r = re(t, "x", "selu");
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.selu(r);
                    return e([r]), n
                }, {
                    $x: r
                }, function (i, t) {
                    var a = t[0];
                    return {
                        $x: function () {
                            var t = a.greater(Ve(0)),
                                e = Ve(di),
                                n = Ve(vi),
                                r = i.mul(n),
                                o = i.mul(e).mul(a.toFloat().exp());
                            return Hu(t, r, o)
                        }
                    }
                })
            }
        });
    var Qu = Fe({
        transpose_: function (t, n) {
            var e = re(t, "x", "transpose");
            return null == n && (n = e.shape.map(function (t, e) {
                return e
            }).reverse()), D(e.rank === n.length, function () {
                return "Error in transpose: rank of input " + e.rank + " must match length of perm " + n + "."
            }), n.forEach(function (t) {
                D(0 <= t && t < e.rank, function () {
                    return "All entries in 'perm' must be between 0 and " + (e.rank - 1) + " but got " + n
                })
            }), e.rank <= 1 ? e.clone() : Zt.engine.runKernel(function (t) {
                return t.transpose(e, n)
            }, {
                $x: e
            }, function (t) {
                var e = _e(n);
                return {
                    $x: function () {
                        return t.transpose(e)
                    }
                }
            })
        }
    });
    var Ju = Fe({
        localResponseNormalization_: function (t, o, i, a, s) {
            void 0 === o && (o = 5), void 0 === i && (i = 1), void 0 === a && (a = 1), void 0 === s && (s = .5);
            var e = re(t, "x", "localResponseNormalization");
            D(4 === e.rank || 3 === e.rank, function () {
                return "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + e.rank + "."
            }), D(T(o), function () {
                return "Error in localResponseNormalization: depthRadius must be an integer but got depthRadius " + o + "."
            });
            var r = e,
                n = !1;
            3 === e.rank && (n = !0, r = e.as4D(1, e.shape[0], e.shape[1], e.shape[2]));
            var u = Zt.engine.runKernel(function (t, e) {
                var n = t.localResponseNormalization4D(r, o, i, a, s);
                return e([r, n]), n
            }, {
                x4D: r
            }, function (e, t) {
                var n = t[0],
                    r = t[1];
                return {
                    x4D: function () {
                        return Zt.engine.runKernel(function (t) {
                            return t.LRNGrad(e, n, r, o, i, a, s)
                        }, {})
                    }
                }
            });
            return n ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
        }
    });
    var Zu = Fe({
        norm_: function (t, e, n, r) {
            void 0 === e && (e = "euclidean"), void 0 === n && (n = null), void 0 === r && (r = !1);
            var o = function t(e, n, r) {
                    if (void 0 === r && (r = null), 0 === e.rank) return e.abs();
                    if (1 !== e.rank && null === r) return t(e.reshape([-1]), n, r);
                    if (1 === e.rank || "number" == typeof r || Array.isArray(r) && 1 === r.length) {
                        if (1 === n) return e.abs().sum(r);
                        if (n === 1 / 0) return e.abs().max(r);
                        if (n === -1 / 0) return e.abs().min(r);
                        if ("euclidean" === n || 2 === n) return e.abs().pow(Ve(2, "int32")).sum(r).sqrt();
                        throw new Error("Error in norm: invalid ord value: " + n)
                    }
                    if (Array.isArray(r) && 2 === r.length) {
                        if (1 === n) return e.abs().sum(r[0]).max(r[1] - 1);
                        if (n === 1 / 0) return e.abs().sum(r[1]).max(r[0]);
                        if (n === -1 / 0) return e.abs().sum(r[1]).min(r[0]);
                        if ("fro" === n || "euclidean" === n) return e.square().sum(r).sqrt();
                        throw new Error("Error in norm: invalid ord value: " + n)
                    }
                    throw new Error("Error in norm: invalid axis: " + r)
                }(t = re(t, "x", "norm"), e, n),
                i = o.shape;
            if (r) {
                var a = k(n, t.shape);
                i = be(o.shape, a)
            }
            return o.reshape(i)
        }
    });

    function tc(t, e) {
        for (var n = [], r = t; r < e; ++r) n.push(r);
        return n
    }

    function ec(t) {
        for (var e = [], n = 0; n < t.length; ++n)
            for (var r = 0; r < t[n].length; ++r) e.push(t[n][r]);
        return e
    }
    var nc = Fe({
            gather_: function (t, e, g) {
                void 0 === g && (g = 0);
                var y = re(t, "x", "gather"),
                    r = re(e, "indices", "gather", "int32");
                g = k(g, y.shape)[0];
                var n = function (t, e, n) {
                    for (var r = t.shape[n], o = [], i = 1, a = 1, s = 0; s < n; s++) o.push(t.shape[s]), i *= t.shape[s];
                    for (s = 0; s < e.rank; s++) o.push(e.shape[s]);
                    for (s = n + 1; s < t.rank; s++) o.push(t.shape[s]), a *= t.shape[s];
                    return {
                        batchSize: i,
                        sliceSize: a,
                        dimSize: r,
                        outputShape: o
                    }
                }(y, r, g);
                return Zt.engine.runKernel(function (t, e) {
                    var n = t.gather(y, r.flatten(), g);
                    return e([r]), n
                }, {
                    $x: y
                }, function (v, t) {
                    var m = t[0];
                    return {
                        $x: function () {
                            var t = y.shape,
                                e = m.size,
                                n = t.slice(0, g),
                                r = n.length,
                                o = t.slice(g, t.length).slice(1),
                                i = o.length,
                                a = tc(0, r),
                                s = tc(r + 1, r + 1 + i),
                                u = ec([n, [e], o]),
                                c = v.reshape(u),
                                l = m.reshape([e]),
                                h = ec([
                                    [r], a, s
                                ]),
                                p = c.transpose(h),
                                f = rc(p, l, y.shape[g]),
                                d = _e(h);
                            return f.transpose(d)
                        }
                    }
                }).reshape(n.outputShape)
            }
        }),
        rc = Fe({
            unsortedSegmentSum_: function (t, e, r) {
                var o = re(t, "x", "unsortedSegmentSum"),
                    i = re(e, "segmentIds", "unsortedSegmentSum", "int32");
                return D(T(r), function () {
                    return "numSegments must be of dtype int"
                }), Zt.engine.runKernel(function (t, e) {
                    var n = t.unsortedSegmentSum(o, i, r);
                    return e([i]), n
                }, {
                    $x: o
                }, function (t, e) {
                    var n = e[0];
                    return {
                        $x: function () {
                            return function (t, e) {
                                for (var n = Ru(e, nn(e)), r = nc(t, n), o = lu(e, Ve(0, "int32")), i = r.rank - o.rank, a = 0; a < i; ++a) o = $i(o, a + 1);
                                o = zu(o, Ye(r.shape, "bool"));
                                var s = nn(r);
                                return Hu(o, r, s)
                            }(t, n)
                        }
                    }
                })
            }
        });
    var oc = Fe({
            basicLSTMCell_: function (t, e, n, r, o, i) {
                var a = re(t, "forgetBias", "basicLSTMCell"),
                    s = re(e, "lstmKernel", "basicLSTMCell"),
                    u = re(n, "lstmBias", "basicLSTMCell"),
                    c = re(r, "data", "basicLSTMCell"),
                    l = re(o, "c", "basicLSTMCell"),
                    h = re(i, "h", "basicLSTMCell"),
                    p = c.concat(h, 1).matMul(s).add(u),
                    f = p.shape[0],
                    d = p.shape[1] / 4,
                    v = [f, d],
                    m = p.slice([0, 0], v),
                    g = p.slice([0, d], v),
                    y = p.slice([0, 2 * d], v),
                    x = p.slice([0, 3 * d], v),
                    w = m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid()));
                return [w, w.tanh().mulStrict(x.sigmoid())]
            }
        }),
        ic = Fe({
            multiRNNCell_: function (t, e, n, r) {
                for (var o = re(e, "data", "multiRNNCell"), i = oe(n, "c", "multiRNNCell"), a = oe(r, "h", "multiRNNCell"), s = o, u = [], c = 0; c < t.length; c++) {
                    var l = t[c](s, i[c], a[c]);
                    u.push(l[0]), u.push(l[1]), s = l[1]
                }
                var h = [],
                    p = [];
                for (c = 0; c < u.length; c += 2) h.push(u[c]), p.push(u[c + 1]);
                return [h, p]
            }
        });
    var ac = Fe({
        movingAverage_: function (t, e, n, r, o) {
            void 0 === o && (o = !0);
            var i = re(t, "v", "movingAverage"),
                a = re(e, "x", "movingAverage"),
                s = re(n, "decay", "movingAverage");
            At(i, a), D(E(i.shape, a.shape), function () {
                return "Shape mismatch in v and x"
            });
            var u = Ve(1),
                c = u.sub(s),
                l = a.sub(i).mul(c);
            if (o) {
                D(null != r, function () {
                    return "When using zeroDebias: true, step is required."
                });
                var h = re(r, "step", "movingAverage");
                l = l.div(u.sub(Ou(s, h)))
            }
            return i.add(l)
        }
    });
    var sc = Fe({
        stridedSlice_: function (t, e, n, r, o, i, a, s, u) {
            if (void 0 === o && (o = 0), void 0 === i && (i = 0), void 0 === a && (a = 0), void 0 === s && (s = 0), void 0 === u && (u = 0), 0 !== a) throw new Error("ellipsis mask is not yet supported");
            if (0 !== s) throw new Error("new axis mask is not yet supported");
            var c = re(t, "x", "stridedSlice");
            if (r.every(function (t) {
                    return 1 === t
                })) {
                var l = Ae(c.shape, e, n, r, o, i, a, s, u),
                    h = l[0],
                    p = l[1],
                    f = l[2],
                    d = p.filter(function (t, e) {
                        return -1 === f.indexOf(e)
                    });
                return Hs(c, h, p).reshape(d)
            }
            return Zt.engine.runKernel(function (t) {
                return t.stridedSlice(c, e, n, r, o, i, a, s, u)
            }, {
                $x: c
            })
        }
    });
    var uc = Fe({
        topk_: function (t, e, n) {
            void 0 === e && (e = 1), void 0 === n && (n = !0);
            var r = re(t, "x", "topk");
            if (0 === r.rank) throw new Error("topk() expects the input to be of rank 1 or higher");
            var o = r.shape[r.shape.length - 1];
            if (o < e) throw new Error("'k' passed to topk() must be <= the last dimension (" + o + ") but got " + e);
            var i = Zt.engine.runKernel(function (t) {
                return t.topk(r, e, n)
            }, {
                $x: r
            });
            return {
                values: i[0],
                indices: i[1]
            }
        }
    });
    var cc = Fe({
        scatterND_: function (t, e, n) {
            var r = re(t, "indices", "scatterND", "int32"),
                o = re(e, "updates", "scatterND");
            return Ie(o, r, n), Zt.engine.runKernel(function (t) {
                return t.scatterND(r, o, n)
            }, {
                $indices: r,
                $updates: o
            })
        }
    });
    var lc = Fe({
            fft_: function (t) {
                D("complex64" === t.dtype, function () {
                    return "The dtype for tf.spectral.fft() must be complex64 but got " + t.dtype + "."
                });
                var e = t.shape[t.shape.length - 1],
                    n = t.size / e,
                    r = t.as2D(n, e);
                return Zt.engine.runKernel(function (t) {
                    return t.fft(r)
                }, {
                    input: t
                }).reshape(t.shape)
            }
        }),
        hc = Fe({
            ifft_: function (t) {
                D("complex64" === t.dtype, function () {
                    return "The dtype for tf.spectral.ifft() must be complex64 but got " + t.dtype + "."
                });
                var e = t.shape[t.shape.length - 1],
                    n = t.size / e,
                    r = t.as2D(n, e);
                return Zt.engine.runKernel(function (t) {
                    return t.ifft(r)
                }, {
                    input: t
                }).reshape(t.shape)
            }
        }),
        pc = Fe({
            rfft_: function (t) {
                D("float32" === t.dtype, function () {
                    return "The dtype for rfft() must be real value but got " + t.dtype
                });
                var e = t.shape[t.shape.length - 1],
                    n = t.size / e,
                    r = t.zerosLike(),
                    o = We(t, r).as2D(n, e),
                    i = lc(o),
                    a = Math.floor(e / 2) + 1,
                    s = ze(i),
                    u = Ue(i),
                    c = s.split([a, e - a], s.shape.length - 1),
                    l = u.split([a, e - a], u.shape.length - 1),
                    h = t.shape.slice();
                return h[t.shape.length - 1] = a, We(c[0], l[0]).reshape(h)
            }
        }),
        fc = Fe({
            irfft_: function (t) {
                var e = t.shape[t.shape.length - 1],
                    n = t.size / e;
                if (e <= 2) {
                    var r = t.as2D(n, e),
                        o = hc(r);
                    return ze(o)
                }
                var i = [n, 2 * (e - 1)],
                    a = ze(t).as2D(n, e),
                    s = Ue(t).as2D(n, e),
                    u = a.slice([0, 1], [n, e - 2]).reverse(1),
                    c = s.slice([0, 1], [n, e - 2]).reverse(1).mul(Ve(-1)),
                    l = a.concat(u, 1),
                    h = s.concat(c, 1);
                return r = We(l, h).as2D(i[0], i[1]), o = hc(r), ze(o)
            }
        }),
        dc = Object.freeze({
            fft: lc,
            ifft: hc,
            rfft: pc,
            irfft: fc
        });
    var vc = Fe({
        sparseToDense_: function (t, e, n, r) {
            void 0 === r && (r = 0);
            var o = re(t, "sparseIndices", "sparseToDense", "int32"),
                i = re(e, "sparseValues", "sparseToDense"),
                a = re(r, "defaultValue", "sparseToDense", i.dtype);
            return function (t, e, n, r) {
                if ("int32" !== t.dtype) throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was " + t.dtype + ".");
                if (2 < t.rank) throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape " + t.shape + ".");
                var o = 0 < t.rank ? t.shape[0] : 1,
                    i = 1 < t.rank ? t.shape[1] : 1;
                if (n.length !== i) throw new Error("outputShape has incorrect number of elements:, " + n.length + ", should be: " + i + ".");
                var a = e.size;
                if (0 !== e.rank && (1 !== e.rank || a !== o)) throw new Error("sparseValues has incorrect shape " + e.shape + ", should be [] or [" + o + "]");
                if (e.dtype !== r.dtype) throw new Error("sparseValues.dtype must match defaultValues.dtype")
            }(o, i, n, a), Zt.engine.runKernel(function (t) {
                return t.sparseToDense(o, i, n, a)
            }, {
                $sparseIndices: o,
                $sparseValues: i,
                $defaultValue: a
            })
        }
    });
    var mc, gc, yc = Fe({
        gatherND_: function (t, e) {
            var n = re(e, "indices", "gatherND", "int32"),
                r = re(t, "x", "gatherND");
            return Zt.engine.runKernel(function (t) {
                return t.gatherND(r, n)
            }, {
                $x: r,
                $indices: n
            })
        }
    });
    (gc = mc || (mc = {}))[gc.NONE = 0] = "NONE", gc[gc.MEAN = 1] = "MEAN", gc[gc.SUM = 2] = "SUM", gc[gc.SUM_BY_NONZERO_WEIGHTS = 3] = "SUM_BY_NONZERO_WEIGHTS";
    var xc = Fe({
            absoluteDifference_: function (t, e, n, r) {
                void 0 === r && (r = mc.SUM_BY_NONZERO_WEIGHTS);
                var o = re(t, "labels", "absoluteDifference"),
                    i = re(e, "predictions", "absoluteDifference"),
                    a = null;
                null != n && (a = re(n, "weights", "absoluteDifference")), g(o.shape, i.shape, "Error in absoluteDifference: ");
                var s = o.sub(i).abs();
                return wc(s, a, r)
            }
        }),
        wc = Fe({
            computeWeightedLoss_: function (t, e, n) {
                void 0 === n && (n = mc.SUM_BY_NONZERO_WEIGHTS);
                var r = re(t, "losses", "computeWeightedLoss"),
                    o = null;
                null != e && (o = re(e, "weights", "computeWeightedLoss"));
                var i = null == o ? r : r.mul(o);
                if (n === mc.NONE) return i;
                if (n === mc.SUM) return i.sum();
                if (n === mc.MEAN) {
                    if (null == o) return i.mean();
                    var a = r.size / o.size,
                        s = i.sum().div(o.sum());
                    return 1 < a ? s.div(Ve(a)) : s
                }
                if (n !== mc.SUM_BY_NONZERO_WEIGHTS) throw Error("Unknown reduction: " + n);
                if (null == o) return i.sum().div(Ve(r.size));
                var u = o.mul(Ye(r.shape)).notEqual(Ve(0)).sum().toFloat();
                return i.sum().div(u)
            }
        }),
        bc = Fe({
            cosineDistance_: function (t, e, n, r, o) {
                void 0 === o && (o = mc.SUM_BY_NONZERO_WEIGHTS);
                var i = re(t, "labels", "cosineDistance"),
                    a = re(e, "predictions", "cosineDistance"),
                    s = null;
                null != r && (s = re(r, "weights", "cosineDistance")), g(i.shape, a.shape, "Error in cosineDistance: ");
                var u = Ve(1).sub(i.mul(a).sum(n, !0));
                return wc(u, s, o)
            }
        }),
        Ec = Fe({
            hingeLoss_: function (t, e, n, r) {
                void 0 === r && (r = mc.SUM_BY_NONZERO_WEIGHTS);
                var o = re(t, "labels", "hingeLoss"),
                    i = re(e, "predictions", "hingeLoss"),
                    a = null;
                null != n && (a = re(n, "weights", "hingeLoss")), g(o.shape, i.shape, "Error in hingeLoss: ");
                var s = Ve(1);
                o = Ve(2).mul(o).sub(s);
                var u = s.sub(o.mul(i)).relu();
                return wc(u, a, r)
            }
        }),
        Cc = Fe({
            huberLoss_: function (t, e, n, r, o) {
                void 0 === r && (r = 1), void 0 === o && (o = mc.SUM_BY_NONZERO_WEIGHTS);
                var i = re(t, "labels", "huberLoss"),
                    a = re(e, "predictions", "huberLoss"),
                    s = null;
                null != n && (s = re(n, "weights", "huberLoss")), g(i.shape, a.shape, "Error in huberLoss: ");
                var u = Ve(r),
                    c = a.sub(i).abs(),
                    l = ku(c, u),
                    h = c.sub(l),
                    p = Ve(.5).mul(l.square()).add(u.mul(h));
                return wc(p, s, o)
            }
        }),
        _c = Fe({
            logLoss_: function (t, e, n, r, o) {
                void 0 === r && (r = 1e-7), void 0 === o && (o = mc.SUM_BY_NONZERO_WEIGHTS);
                var i = re(t, "labels", "logLoss"),
                    a = re(e, "predictions", "logLoss"),
                    s = null;
                null != n && (s = re(n, "weights", "logLoss")), g(i.shape, a.shape, "Error in logLoss: ");
                var u = Ve(1),
                    c = Ve(r),
                    l = i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));
                return wc(l, s, o)
            }
        }),
        Sc = Fe({
            meanSquaredError_: function (t, e, n, r) {
                void 0 === r && (r = mc.SUM_BY_NONZERO_WEIGHTS);
                var o = re(t, "labels", "meanSquaredError"),
                    i = re(e, "predictions", "meanSquaredError"),
                    a = null;
                null != n && (a = re(n, "weights", "meanSquaredError")), g(o.shape, i.shape, "Error in meanSquaredError: ");
                var s = o.squaredDifference(i);
                return wc(s, a, r)
            }
        }),
        Rc = Fe({
            sigmoidCrossEntropy_: function (t, e, n, r, o) {
                void 0 === r && (r = 0), void 0 === o && (o = mc.SUM_BY_NONZERO_WEIGHTS);
                var i = re(t, "multiClassLabels", "sigmoidCrossEntropy"),
                    a = re(e, "logits", "sigmoidCrossEntropy"),
                    s = null;
                if (null != n && (s = re(n, "weights", "sigmoidCrossEntropy")), g(i.shape, a.shape, "Error in sigmoidCrossEntropy: "), 0 < r) {
                    var u = Ve(r),
                        c = Ve(1),
                        l = Ve(.5);
                    i = i.mul(c.sub(u)).add(l.mul(u))
                }
                var h = function (t, e) {
                    var n = re(t, "labels", "sigmoidCrossEntropyWithLogits"),
                        r = re(e, "logits", "sigmoidCrossEntropyWithLogits");
                    g(n.shape, r.shape, "Error in sigmoidCrossEntropyWithLogits: ");
                    var o = r.relu(),
                        i = r.mul(n),
                        a = r.abs().neg().exp().log1p();
                    return o.sub(i).add(a)
                }(i, a);
                return wc(h, s, o)
            }
        }),
        Nc = Fe({
            softmaxCrossEntropy_: function (t, e, n, r, o) {
                void 0 === r && (r = 0), void 0 === o && (o = mc.SUM_BY_NONZERO_WEIGHTS);
                var i = re(t, "onehotLabels", "softmaxCrossEntropy"),
                    a = re(e, "logits", "softmaxCrossEntropy"),
                    s = null;
                if (null != n && (s = re(n, "weights", "softmaxCrossEntropy")), g(i.shape, a.shape, "Error in softmaxCrossEntropy: "), 0 < r) {
                    var u = Ve(r),
                        c = Ve(1),
                        l = Ve(i.shape[1]);
                    i = i.mul(c.sub(u)).add(u.div(l))
                }
                var h = function (t, e, i) {
                    if (void 0 === i && (i = -1), -1 === i && (i = e.rank - 1), i !== e.rank - 1) throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank " + e.rank + " and dim was " + i);
                    return ae(function (t, e, n) {
                        var r = e.logSumExp([i], !0),
                            o = e.toFloat().sub(r);
                        return n([t, o]), {
                            value: o.mul(t).neg().sum([i]),
                            gradFunc: function (t, e) {
                                var n = e[0],
                                    r = e[1],
                                    o = be(t.shape, [i]);
                                return [t.reshape(o).mul(n.toFloat().sub(r.exp())), t.reshape(o).mul(r.exp().sub(n.toFloat()))]
                            }
                        }
                    })(t, e)
                }(i, a);
                return wc(h, s, o)
            }
        }),
        kc = Object.freeze({
            get Reduction() {
                return mc
            },
            absoluteDifference: xc,
            computeWeightedLoss: wc,
            cosineDistance: bc,
            hingeLoss: Ec,
            huberLoss: Cc,
            logLoss: _c,
            meanSquaredError: Sc,
            sigmoidCrossEntropy: Rc,
            softmaxCrossEntropy: Nc
        });

    function Ic(r, o) {
        return void 0 === o && (o = !1), Zt.engine.tidy(function () {
            if (2 !== r.shape.length) throw new Error("qr2d() requires a 2D Tensor, but got a " + r.shape.length + "D Tensor.");
            for (var h = r.shape[0], p = r.shape[1], f = Ki(h), d = r.clone(), v = qe([
                    [1]
                ], [1, 1]), m = v.clone(), t = p <= h ? p : h, e = function (l) {
                    var t, e = d,
                        n = m,
                        r = f;
                    m = (t = Zt.engine.tidy(function () {
                        var t = d.slice([l, l], [h - l, 1]),
                            e = t.norm(),
                            n = d.slice([l, l], [1, 1]),
                            r = n.sign().neg(),
                            o = n.sub(r.mul(e)),
                            i = t.div(o);
                        m = 1 === i.shape[0] ? v.clone() : v.concat(i.slice([1, 0], [i.shape[0] - 1, i.shape[1]]), 0);
                        var a = r.matMul(o).div(e).neg(),
                            s = d.slice([l, 0], [h - l, p]),
                            u = a.mul(m);
                        d = 0 === l ? s.sub(u.matMul(m.transpose().matMul(s))) : d.slice([0, 0], [l, p]).concat(s.sub(u.matMul(m.transpose().matMul(s))), 0);
                        var c = f.slice([0, l], [h, f.shape[1] - l]);
                        return f = 0 === l ? c.sub(c.matMul(m).matMul(u.transpose())) : f.slice([0, 0], [h, l]).concat(c.sub(c.matMul(m).matMul(u.transpose())), 1), [m, d, f]
                    }))[0], d = t[1], f = t[2], le([e, n, r])
                }, n = 0; n < t; ++n) e(n);
            return !o && p < h && (f = f.slice([0, 0], [h, p]), d = d.slice([0, 0], [p, p])), [f, d]
        })
    }
    var Tc = Fe({
            gramSchmidt_: function (e) {
                var t;
                if (Array.isArray(e)) {
                    t = !1, D(null != e && 0 < e.length, function () {
                        return "Gram-Schmidt process: input must not be null, undefined, or empty"
                    });
                    for (var n = e[0].shape[0], r = function (t) {
                            D(e[t].shape[0] === n, function () {
                                return "Gram-Schmidt: Non-unique lengths found in the input vectors: (" + e[t].shape[0] + " vs. " + n + ")"
                            })
                        }, o = 1; o < e.length; ++o) r(o)
                } else t = !0, e = Ii(e, e.shape[0], 0).map(function (t) {
                    return sa(t, [0])
                });
                D(e.length <= e[0].shape[0], function () {
                    return "Gram-Schmidt: Number of vectors (" + e.length + ") exceeds number of dimensions (" + e[0].shape[0] + ")."
                });
                var i = [],
                    a = e,
                    s = function (r) {
                        i.push(Zt.engine.tidy(function () {
                            var t = a[r];
                            if (0 < r)
                                for (var e = 0; e < r; ++e) {
                                    var n = iu(i[e].mulStrict(t)).mul(i[e]);
                                    t = t.sub(n)
                                }
                            return t.div(Zu(t, "euclidean"))
                        }))
                    };
                for (o = 0; o < e.length; ++o) s(o);
                return t ? ua(i, 0) : i
            }
        }),
        Ac = Fe({
            qr_: function (t, o) {
                if (void 0 === o && (o = !1), t.rank < 2) throw new Error("qr() requires input tensor to have a rank >= 2, but got rank " + t.rank);
                if (2 === t.rank) return Ic(t, o);
                var e = t.shape.slice(0, t.shape.length - 2).reduce(function (t, e) {
                        return t * e
                    }),
                    i = [],
                    a = [];
                return ha(t.reshape([e, t.shape[t.shape.length - 2], t.shape[t.shape.length - 1]]), 0).forEach(function (t) {
                    var e = Ic(t, o),
                        n = e[0],
                        r = e[1];
                    i.push(n), a.push(r)
                }), [ua(i, 0).reshape(t.shape), ua(a, 0).reshape(t.shape)]
            }
        }),
        Dc = Object.freeze({
            gramSchmidt: Tc,
            qr: Ac
        });

    function Mc(t, e, n, r, o) {
        null == r && (r = .5), null == o && (o = Number.NEGATIVE_INFINITY);
        var i = t.shape[0];
        return n = Math.min(n, i), D(0 <= r && r <= 1, function () {
            return "iouThreshold must be in [0, 1], but was '" + r + "'"
        }), D(2 === t.rank, function () {
            return "boxes must be a 2D tensor, but was of rank '" + t.rank + "'"
        }), D(4 === t.shape[1], function () {
            return "boxes must have 4 columns, but 2nd dimension was " + t.shape[1]
        }), D(1 === e.rank, function () {
            return "scores must be a 1D tensor"
        }), D(e.shape[0] === i, function () {
            return "scores has incompatible shape with boxes. Expected " + i + ", but was " + e.shape[0]
        }), {
            maxOutputSize: n,
            iouThreshold: r,
            scoreThreshold: o
        }
    }
    var Oc = Fe({
            resizeBilinear_: function (t, e, r) {
                void 0 === r && (r = !1);
                var n = re(t, "images", "resizeBilinear");
                D(3 === n.rank || 4 === n.rank, function () {
                    return "Error in resizeBilinear: x must be rank 3 or 4, but got rank " + n.rank + "."
                }), D(2 === e.length, function () {
                    return "Error in resizeBilinear: new shape must 2D, but got shape " + e + "."
                });
                var o = n,
                    i = !1;
                3 === n.rank && (i = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
                var a = e[0],
                    s = e[1],
                    u = Zt.engine.runKernel(function (t, e) {
                        return e([o]), t.resizeBilinear(o, a, s, r)
                    }, {
                        batchImages: o
                    }, function (e, n) {
                        return {
                            batchImages: function () {
                                return Zt.engine.runKernel(function (t) {
                                    return t.resizeBilinearBackprop(e, n[0], r)
                                }, {})
                            }
                        }
                    });
                return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
            }
        }),
        Pc = Fe({
            resizeNearestNeighbor_: function (t, e, r) {
                void 0 === r && (r = !1);
                var n = re(t, "images", "resizeNearestNeighbor");
                D(3 === n.rank || 4 === n.rank, function () {
                    return "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank " + n.rank + "."
                }), D(2 === e.length, function () {
                    return "Error in resizeNearestNeighbor: new shape must 2D, but got shape " + e + "."
                }), D("float32" === n.dtype || "int32" === n.dtype, function () {
                    return "`images` must have `int32` or `float32` as dtype"
                });
                var o = n,
                    i = !1;
                3 === n.rank && (i = !0, o = n.as4D(1, n.shape[0], n.shape[1], n.shape[2]));
                var a = e[0],
                    s = e[1],
                    u = Zt.engine.runKernel(function (t, e) {
                        return e([o]), t.resizeNearestNeighbor(o, a, s, r)
                    }, {
                        batchImages: o
                    }, function (e, n) {
                        return {
                            batchImages: function () {
                                return Zt.engine.runKernel(function (t) {
                                    return t.resizeNearestNeighborBackprop(e, n[0], r)
                                }, {})
                            }
                        }
                    });
                return i ? u.as3D(u.shape[1], u.shape[2], u.shape[3]) : u
            }
        }),
        Fc = Fe({
            nonMaxSuppression_: function (t, e, n, r, o) {
                void 0 === r && (r = .5), void 0 === o && (o = Number.NEGATIVE_INFINITY);
                var i = re(t, "boxes", "nonMaxSuppression"),
                    a = re(e, "scores", "nonMaxSuppression"),
                    s = Mc(i, a, n, r, o);
                return n = s.maxOutputSize, r = s.iouThreshold, o = s.scoreThreshold, Zt.engine.runKernel(function (t) {
                    return t.nonMaxSuppression(i, a, n, r, o)
                }, {
                    $boxes: i
                })
            }
        }),
        Lc = function (s, u, c, l, h) {
            return void 0 === l && (l = .5), void 0 === h && (h = Number.NEGATIVE_INFINITY), m(this, void 0, void 0, function () {
                var e, n, r, o, i, a;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = re(s, "boxes", "nonMaxSuppressionAsync"), n = re(u, "scores", "nonMaxSuppressionAsync"), r = Mc(e, n, c, l, h), c = r.maxOutputSize, l = r.iouThreshold, h = r.scoreThreshold, [4, e.data()];
                        case 1:
                            return o = t.sent(), [4, n.data()];
                        case 2:
                            return i = t.sent(), a = ln(o, i, c, l, h), e !== s && e.dispose(), n !== u && n.dispose(), [2, a]
                    }
                })
            })
        },
        Bc = Fe({
            cropAndResize_: function (t, e, n, r, o, i) {
                var a = re(t, "image", "cropAndResize", "float32"),
                    s = re(e, "boxes", "cropAndResize", "float32"),
                    u = re(n, "boxInd", "cropAndResize", "int32");
                o = o || "bilinear", i = i || 0;
                var c = s.shape[0];
                return D(4 === a.rank, function () {
                    return "Error in cropAndResize: image must be rank 4,but got rank " + a.rank + "."
                }), D(2 === s.rank && 4 === s.shape[1], function () {
                    return "Error in cropAndResize: boxes must be have size [" + c + ",4] but had shape " + s.shape + "."
                }), D(1 === u.rank && u.shape[0] === c, function () {
                    return "Error in cropAndResize: boxInd must be have size [" + c + "] but had shape " + s.shape + "."
                }), D(2 === r.length, function () {
                    return "Error in cropAndResize: cropSize must be of length 2, but got length " + r.length + "."
                }), D(1 <= r[0] && 1 <= r[1], function () {
                    return "cropSize must be atleast [1,1], but was " + r
                }), D("bilinear" === o || "nearest" === o, function () {
                    return "method must be bilinear or nearest, but was " + o
                }), Zt.engine.runKernel(function (t, e) {
                    return t.cropAndResize(a, s, u, r, o, i)
                }, {
                    $image: a,
                    $boxes: s
                })
            }
        }),
        Wc = Object.freeze({
            resizeBilinear: Oc,
            resizeNearestNeighbor: Pc,
            nonMaxSuppression: Fc,
            nonMaxSuppressionAsync: Lc,
            cropAndResize: Bc
        });
    var zc = Fe({
            matMul_: function (t, e, s, u, c, l) {
                var n;
                void 0 === s && (s = !1), void 0 === u && (u = !1), void 0 === l && (l = "linear");
                var r = re(t, "a", "fused matMul"),
                    o = re(e, "b", "fused matMul");
                n = Tt(r, o), r = n[0], o = n[1];
                var i = s ? r.shape[r.rank - 2] : r.shape[r.rank - 1],
                    a = u ? o.shape[o.rank - 1] : o.shape[o.rank - 2],
                    h = s ? r.shape[r.rank - 1] : r.shape[r.rank - 2],
                    p = u ? o.shape[o.rank - 2] : o.shape[o.rank - 1],
                    f = r.shape.slice(0, -2),
                    d = o.shape.slice(0, -2),
                    v = B(f),
                    m = B(d);
                D(2 <= r.rank && 2 <= o.rank && r.rank === o.rank, function () {
                    return "Error in fused matMul: inputs must have the same rank of at least 2, got ranks " + r.rank + " and " + o.rank + "."
                }), D(E(f, d), function () {
                    return "Error in fused matMul: outer dimensions (" + f + ") and (" + d + ") of Tensors with shapes " + r.shape + " and " + o.shape + " must match."
                }), D(i === a, function () {
                    return "Error in fused matMul: inner shapes (" + i + ") and (" + a + ") of Tensors with shapes " + r.shape + " and " + o.shape + " and transposeA=" + s + " and transposeB=" + u + " must match."
                });
                var g, y = r.shape.slice(0, -2).concat([h, p]),
                    x = s ? r.as3D(v, i, h) : r.as3D(v, h, i),
                    w = u ? o.as3D(m, p, a) : o.as3D(m, a, p);
                null != c && xn(y, (g = Tt(g = re(c, "bias", "fused matMul"), r)[0]).shape);
                var b = {
                    $a: x,
                    $b: w
                };
                return null != c && (b.$bias = g), Zt.engine.runKernel(function (t, e) {
                    var n = t.fusedBatchMatMul(x, w, s, u, g, l);
                    return e([x, w, n]), n
                }, b, function (t, e) {
                    var n, r = e[0],
                        o = e[1],
                        i = e[2];
                    if (null == l || "linear" === l) n = t;
                    else {
                        if ("relu" !== l) throw new Error("Gradient for activation " + l + " has not been implemented yet.");
                        n = t.mul(i.step())
                    }
                    var a = {};
                    return null != c && (a = {
                        $bias: function () {
                            var t = n,
                                e = yn(g.shape, n.shape);
                            return 0 < e.length && (t = t.sum(e)), t.reshape(g.shape)
                        }
                    }), s || u ? !s && u ? Object.assign({
                        $a: function () {
                            return n.matMul(o, !1, !1)
                        },
                        $b: function () {
                            return n.matMul(r, !0, !1)
                        }
                    }, a) : s && !u ? Object.assign({
                        $a: function () {
                            return o.matMul(n, !1, !0)
                        },
                        $b: function () {
                            return r.matMul(n, !1, !1)
                        }
                    }, a) : Object.assign({
                        $a: function () {
                            return o.matMul(n, !0, !0)
                        },
                        $b: function () {
                            return n.matMul(r, !0, !0)
                        }
                    }, a) : Object.assign({
                        $a: function () {
                            return n.matMul(o, !1, !0)
                        },
                        $b: function () {
                            return r.matMul(n, !0, !1)
                        }
                    }, a)
                }).reshape(y)
            }
        }),
        Uc = Object.freeze({
            matMul: zc
        }),
        Gc = Object.freeze({
            image: Wc,
            linalg: Dc,
            losses: kc,
            spectral: dc,
            fused: Uc,
            op: Fe,
            batchNormalization2d: os,
            batchNormalization3d: is,
            batchNormalization4d: as,
            batchNormalization: ss,
            batchNorm: us,
            batchNorm2d: cs,
            batchNorm3d: ls,
            batchNorm4d: hs,
            complex: We,
            real: ze,
            imag: Ue,
            concat: _i,
            concat1d: Si,
            concat2d: Ri,
            concat3d: Ni,
            concat4d: ki,
            split: Ii,
            conv1d: _s,
            conv2d: Ss,
            conv3d: Rs,
            conv2dDerFilter: Ns,
            depthwiseConv2d: ks,
            separableConv2d: Is,
            conv2dTranspose: Ts,
            matMul: As,
            dot: Ds,
            outerProduct: Ms,
            reverse: Os,
            reverse1d: Ps,
            reverse2d: Fs,
            reverse3d: Ls,
            reverse4d: Bs,
            maxPool: Us,
            avgPool: Gs,
            pool: Vs,
            slice: Hs,
            slice1d: qs,
            slice2d: js,
            slice3d: $s,
            slice4d: Ks,
            abs: ga,
            acos: ya,
            acosh: xa,
            asin: wa,
            asinh: ba,
            atan: Ea,
            atanh: Ca,
            ceil: _a,
            clipByValue: Sa,
            cos: Ra,
            cosh: Na,
            erf: ka,
            exp: Ia,
            expm1: Ta,
            floor: Aa,
            log: Da,
            log1p: Ma,
            logSigmoid: Oa,
            neg: Pa,
            reciprocal: Fa,
            round: La,
            rsqrt: Ba,
            sigmoid: Wa,
            sign: za,
            isNaN: Ua,
            isInf: Ga,
            isFinite: Va,
            sin: Ha,
            sinh: qa,
            softplus: ja,
            sqrt: $a,
            square: Ka,
            step: Xa,
            tan: Ya,
            tanh: Qa,
            all: Ys,
            any: Qs,
            argMax: Js,
            argMin: Zs,
            logSumExp: tu,
            max: eu,
            mean: nu,
            min: ru,
            moments: ou,
            sum: iu,
            prod: au,
            equal: su,
            equalStrict: uu,
            greater: cu,
            greaterEqual: lu,
            greaterEqualStrict: hu,
            greaterStrict: pu,
            less: fu,
            lessEqual: du,
            lessEqualStrict: vu,
            lessStrict: mu,
            notEqual: gu,
            notEqualStrict: yu,
            add: xu,
            addN: wu,
            addStrict: bu,
            atan2: Eu,
            div: Cu,
            divStrict: _u,
            floorDiv: Su,
            maximum: Ru,
            maximumStrict: Nu,
            minimum: ku,
            minimumStrict: Iu,
            mod: Tu,
            modStrict: Au,
            mul: Du,
            mulStrict: Mu,
            pow: Ou,
            powStrict: Pu,
            squaredDifference: Fu,
            squaredDifferenceStrict: Lu,
            sub: Bu,
            subStrict: Wu,
            elu: ju,
            leakyRelu: $u,
            prelu: Ku,
            relu: Xu,
            selu: Yu,
            logicalAnd: zu,
            logicalNot: Uu,
            logicalOr: Gu,
            logicalXor: Vu,
            where: Hu,
            whereAsync: qu,
            buffer: zi,
            print: Ui,
            batchToSpaceND: Gi,
            cast: Vi,
            clone: Hi,
            cumsum: qi,
            depthToSpace: ji,
            expandDims: $i,
            eye: Ki,
            multinomial: Xi,
            oneHot: Yi,
            pad: Qi,
            pad1d: Ji,
            pad2d: Zi,
            pad3d: ta,
            pad4d: ea,
            rand: na,
            randomNormal: ra,
            randomUniform: oa,
            reshape: ia,
            spaceToBatchND: aa,
            squeeze: sa,
            stack: ua,
            tile: ca,
            truncatedNormal: la,
            unstack: ha,
            setdiff1dAsync: pa,
            fill: Je,
            linspace: Ze,
            ones: Ye,
            range: tn,
            scalar: Ve,
            tensor: Ge,
            tensor1d: He,
            tensor2d: qe,
            tensor3d: je,
            tensor4d: $e,
            tensor5d: Ke,
            tensor6d: Xe,
            zeros: Qe,
            onesLike: en,
            zerosLike: nn,
            transpose: Qu,
            softmax: Le,
            logSoftmax: Be,
            localResponseNormalization: Ju,
            norm: Zu,
            gather: nc,
            unsortedSegmentSum: rc,
            basicLSTMCell: oc,
            multiRNNCell: ic,
            movingAverage: ac,
            stridedSlice: sc,
            topk: uc,
            scatterND: cc,
            fft: lc,
            ifft: hc,
            rfft: pc,
            irfft: fc,
            sparseToDense: vc,
            gatherND: yc
        });
    var Vc = function () {
        function t() {
            this.blockSize = 48, this.firstUse = !0, Zt.get("IS_BROWSER") && (this.fromPixels2DContext = document.createElement("canvas").getContext("2d"))
        }
        return t.prototype.setDataMover = function (t) {
            this.data = new rn(t)
        }, t.prototype.register = function (t, e, n) {
            if (this.firstUse && (this.firstUse = !1, Zt.get("IS_NODE") && fe("\n============================\nHi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.\n============================\n")), this.data.has(t)) throw new Error("Data buffer is already registered");
            this.data.set(t, {
                dtype: n
            })
        }, t.prototype.write = function (t, e) {
            if (null == e) throw new Error("MathBackendCPU.write(): values can not be null");
            this.data.get(t).values = e
        }, t.prototype.fromPixels = function (t, e) {
            if (null == t) throw new Error("pixels passed to tf.browser.fromPixels() can not be null");
            var n, r;
            if (Zt.get("IS_NODE") && null == t.getContext) throw new Error("When running in node, pixels must be an HTMLCanvasElement like the one returned by the `canvas` npm package");
            if (null != t.getContext) n = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
            else if (t instanceof ImageData) n = t.data;
            else {
                if (!(t instanceof HTMLImageElement || t instanceof HTMLVideoElement)) throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement or ImageData, but was " + t.constructor.name);
                if (null == this.fromPixels2DContext) throw new Error("Can't read pixels from HTMLImageElement outside the browser.");
                this.fromPixels2DContext.canvas.width = t.width, this.fromPixels2DContext.canvas.height = t.height, this.fromPixels2DContext.drawImage(t, 0, 0, t.width, t.height), n = this.fromPixels2DContext.getImageData(0, 0, t.width, t.height).data
            }
            if (4 === e) r = new Int32Array(n);
            else {
                var o = t.width * t.height;
                r = new Int32Array(o * e);
                for (var i = 0; i < o; i++)
                    for (var a = 0; a < e; ++a) r[i * e + a] = n[4 * i + a]
            }
            return je(r, [t.height, t.width, e], "int32")
        }, t.prototype.read = function (e) {
            return m(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return [2, this.readSync(e)]
                })
            })
        }, t.prototype.readSync = function (t) {
            var e = this.data.get(t),
                n = e.dtype,
                r = e.complexTensors;
            return "complex64" === n ? un(r.real.dataSync(), r.imag.dataSync()) : this.data.get(t).values
        }, t.prototype.disposeData = function (t) {
            if (this.data.has(t)) {
                var e = this.data.get(t).complexTensors;
                null != e && (e.real.dispose(), e.imag.dispose()), this.data.delete(t)
            }
        }, t.prototype.time = function (n) {
            return m(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    return e = Z(), n(), [2, {
                        kernelMs: Z() - e
                    }]
                })
            })
        }, t.prototype.memory = function () {
            return {
                unreliable: !0,
                reasons: ["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]
            }
        }, t.prototype.complex = function (t, e) {
            var n = dt.make(t.shape, {}, "complex64");
            return this.data.get(n.dataId).complexTensors = {
                real: Zt.engine.keep(t.clone()),
                imag: Zt.engine.keep(e.clone())
            }, n
        }, t.prototype.real = function (t) {
            return this.data.get(t.dataId).complexTensors.real.clone()
        }, t.prototype.imag = function (t) {
            return this.data.get(t.dataId).complexTensors.imag.clone()
        }, t.prototype.assertNotComplex = function (t, e) {
            Array.isArray(t) || (t = [t]), t.forEach(function (t) {
                null != t && D("complex64" !== t.dtype, function () {
                    return e + " does not support complex64 tensors."
                })
            })
        }, t.prototype.slice = function (t, n, e) {
            if (this.assertNotComplex(t, "slice"), Oe(t.shape, n, e)) {
                var r = Pe(n, t.strides),
                    o = B(e);
                return Ge(t.dataSync().subarray(r, r + o), e, t.dtype)
            }
            for (var i = zi(e, t.dtype), a = t.bufferSync(), s = 0; s < i.size; ++s) {
                var u = i.indexToLoc(s).map(function (t, e) {
                    return t + n[e]
                });
                i.values[s] = a.get.apply(a, u)
            }
            return i.toTensor()
        }, t.prototype.stridedSlice = function (t, e, n, r, o, i, a, s, u) {
            this.assertNotComplex(t, "stridedSlice");
            var c = Ae(t.shape, e, n, r, o, i, a, s, u),
                l = c[0],
                h = c[1],
                p = c[2],
                f = h.filter(function (t, e) {
                    return -1 === p.indexOf(e)
                });
            if (f.some(function (t) {
                    return 0 === t
                })) return Ge([], f);
            for (var d = zi(h, t.dtype), v = t.bufferSync(), m = 0; m < d.size; m++) {
                for (var g = d.indexToLoc(m), y = new Array(g.length), x = 0; x < y.length; x++) y[x] = g[x] * r[x] + l[x];
                d.set.apply(d, [v.get.apply(v, y)].concat(g))
            }
            return d.toTensor().reshape(f)
        }, t.prototype.unstack = function (t, e) {
            for (var n = t.shape[e], r = new Array(t.rank - 1), o = 0, i = 0; i < t.rank; i++) i !== e && (r[o++] = t.shape[i]);
            var a = new Array(t.rank).fill(0),
                s = t.shape.slice();
            s[e] = 1;
            var u = new Array(n);
            for (i = 0; i < u.length; i++) u[a[e] = i] = this.slice(t, a, s).reshape(r);
            return u
        }, t.prototype.reverse = function (r, o) {
            this.assertNotComplex(r, "reverse");
            for (var i = zi(r.shape, r.dtype), a = r.bufferSync(), t = function (t) {
                    var e = i.indexToLoc(t),
                        n = e.slice();
                    o.forEach(function (t) {
                        return n[t] = r.shape[t] - 1 - n[t]
                    }), i.set.apply(i, [a.get.apply(a, n)].concat(e))
                }, e = 0; e < i.size; e++) t(e);
            return i.toTensor()
        }, t.prototype.concat = function (t, n) {
            this.assertNotComplex(t, "concat");
            var e = t.map(function (t) {
                    var e = B(t.shape.slice(n));
                    return t.as2D(-1, e)
                }),
                a = Re(e.map(function (t) {
                    return t.shape
                }), 1),
                s = zi(a, t[0].dtype).values;
            if (1 === e[0].shape[0]) {
                var r = 0;
                e.forEach(function (t) {
                    s.set(t.dataSync(), r), r += t.size
                })
            } else {
                var u = 0;
                e.forEach(function (t) {
                    for (var e = t.dataSync(), n = 0, r = 0; r < t.shape[0]; ++r)
                        for (var o = r * a[1] + u, i = 0; i < t.shape[1]; ++i) s[o + i] = e[n++];
                    u += t.shape[1]
                })
            }
            var o = Re(t.map(function (t) {
                return t.shape
            }), n);
            return Ge(s, o, t[0].dtype)
        }, t.prototype.neg = function (t) {
            return this.assertNotComplex(t, "neg"), this.multiply(Ve(-1), t)
        }, t.prototype.add = function (t, e) {
            return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
                return {
                    real: t + n,
                    imag: e + r
                }
            }) : this.broadcastedBinaryOp(t, e, kt(t.dtype, e.dtype), function (t, e) {
                return t + e
            })
        }, t.prototype.addN = function (t) {
            this.assertNotComplex(t, "addN");
            for (var e = t.map(function (t) {
                    return t.dataSync()
                }), n = zi(t[0].shape, t[0].dtype), r = n.values, o = 0; o < t.length; o++)
                for (var i = e[o], a = 0; a < r.length; a++) r[a] += i[a];
            return n.toTensor()
        }, t.prototype.subtract = function (t, e) {
            return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
                return {
                    real: t - n,
                    imag: e - r
                }
            }) : this.broadcastedBinaryOp(t, e, kt(t.dtype, e.dtype), function (t, e) {
                return t - e
            })
        }, t.prototype.pow = function (t, e) {
            return this.assertNotComplex([t, e], "pow"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                return Math.pow(t, e)
            })
        }, t.prototype.batchMatMul = function (t, e, n, r) {
            this.assertNotComplex([t, e], "matMul");
            for (var o = n ? t.shape[1] : t.shape[2], i = n ? t.shape[2] : t.shape[1], a = r ? e.shape[1] : e.shape[2], s = t.shape[0], u = t.dataSync(), c = e.dataSync(), l = n ? [t.strides[0], 1, t.strides[1]] : [t.strides[0], t.strides[1], 1], h = l[0], p = l[1], f = l[2], d = r ? [1, e.strides[1], e.strides[0]] : [e.strides[1], 1, e.strides[0]], v = d[0], m = d[1], g = d[2], y = i * a, x = zi([s, i, a], t.dtype), w = x.values, b = this.blockSize, E = 0; E < s; E++)
                for (var C = 0; C < i; C += b)
                    for (var _ = 0; _ < a; _ += b)
                        for (var S = 0; S < o; S += b)
                            for (var R = Math.min(C + b, i), N = Math.min(_ + b, a), k = Math.min(S + b, o), I = C; I < R; I++)
                                for (var T = _; T < N; T++) {
                                    for (var A = 0, D = S; D < k; D++) A += u[E * h + I * p + D * f] * c[D * v + T * m + E * g];
                                    w[E * y + (I * a + T)] += A
                                }
            return x.toTensor()
        }, t.prototype.fusedBatchMatMul = function (t, e, n, r, o, i) {
            var a = this.batchMatMul(t, e, n, r);
            return o && (a = this.add(a, o)), i && (a = function (t, e, n) {
                if ("linear" === e) return t.linear(n);
                if ("relu" === e) return t.relu(n);
                throw new Error("Activation " + e + " has not been implemented for the CPU backend.")
            }(this, i, a)), a
        }, t.prototype.multiply = function (t, e) {
            return "complex64" === t.dtype || "complex64" === e.dtype ? this.broadcastedBinaryComplexOp(t.cast("complex64"), e.cast("complex64"), function (t, e, n, r) {
                return {
                    real: t * n - e * r,
                    imag: t * r + e * n
                }
            }) : this.broadcastedBinaryOp(t, e, kt(t.dtype, e.dtype), function (t, e) {
                return t * e
            })
        }, t.prototype.realDivide = function (t, e) {
            return this.assertNotComplex([t, e], "realDivide"), this.broadcastedBinaryOp(t, e, "float32", function (t, e) {
                return t / e
            })
        }, t.prototype.floorDiv = function (t, e) {
            return this.assertNotComplex([t, e], "floorDiv"), this.broadcastedBinaryOp(t, e, "int32", function (t, e) {
                return Math.floor(t / e)
            })
        }, t.prototype.sum = function (t, e) {
            this.assertNotComplex(t, "sum"), Ee("sum", e, t.rank);
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, kt(t.dtype, "int32")), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = 0, p = 0; p < a; ++p) h += u[l + p];
                s[c] = h
            }
            return i
        }, t.prototype.prod = function (t, e) {
            this.assertNotComplex(t, "sum");
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, kt(t.dtype, "int32")), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = 1, p = 0; p < a; ++p) h *= u[l + p];
                s[c] = h
            }
            return i
        }, t.prototype.unsortedSegmentSum = function (t, e, n) {
            this.assertNotComplex(t, "unsortedSegmentSum");
            for (var r = [], o = t.rank - e.rank, i = 0; i < o; ++i) e = e.expandDims(i + 1);
            for (i = 0; i < n; ++i) {
                var a = Ve(i, "int32"),
                    s = su(a, e).asType("float32").mul(t).sum(0);
                r.push(s)
            }
            return ua(r)
        }, t.prototype.argMin = function (t, e) {
            this.assertNotComplex(t, "argMin");
            var n = [e];
            Ee("argMin", n, t.rank);
            for (var r = we(t.shape, n), o = r[0], i = r[1], a = Qe(o, "int32"), s = B(i), u = a.dataSync(), c = t.dataSync(), l = 0; l < u.length; ++l) {
                for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
                    var v = c[h + d];
                    v < p && (p = v, f = d)
                }
                u[l] = f
            }
            return a
        }, t.prototype.argMax = function (t, e) {
            this.assertNotComplex(t, "argMax");
            var n = [e];
            Ee("argMax", n, t.rank);
            for (var r = we(t.shape, n), o = r[0], i = r[1], a = Qe(o, "int32"), s = B(i), u = a.dataSync(), c = t.dataSync(), l = 0; l < u.length; ++l) {
                for (var h = l * s, p = c[h], f = 0, d = 0; d < s; ++d) {
                    var v = c[h + d];
                    p < v && (p = v, f = d)
                }
                u[l] = f
            }
            return a
        }, t.prototype.cumsum = function (t, e, n, r) {
            if (this.assertNotComplex(t, "cumsum"), e !== t.rank - 1) throw new Error("backend.cumsum in CPU expects an inner-most axis=" + (t.rank - 1) + " but got axis=" + e);
            for (var o = kt(t.dtype, "int32"), i = Qe(t.shape, o), a = i.dataSync(), s = t.dataSync(), u = t.shape[t.rank - 1], c = r ? function (t, e) {
                    return t + u - e - 1
                } : function (t, e) {
                    return t + e
                }, l = 0; l < s.length; l += u)
                for (var h = 0; h < u; h++) {
                    var p = c(l, h);
                    if (0 === h) a[p] = n ? 0 : s[p];
                    else {
                        var f = c(l, h - 1);
                        a[p] = n ? s[f] + a[f] : s[p] + a[f]
                    }
                }
            return i
        }, t.prototype.equal = function (t, e) {
            return this.assertNotComplex([t, e], "equal"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t === e ? 1 : 0
            })
        }, t.prototype.notEqual = function (t, e) {
            return this.assertNotComplex([t, e], "notEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t !== e ? 1 : 0
            })
        }, t.prototype.less = function (t, e) {
            return this.assertNotComplex([t, e], "less"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t < e ? 1 : 0
            })
        }, t.prototype.lessEqual = function (t, e) {
            return this.assertNotComplex([t, e], "lessEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t <= e ? 1 : 0
            })
        }, t.prototype.greater = function (t, e) {
            return this.assertNotComplex([t, e], "greater"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return e < t ? 1 : 0
            })
        }, t.prototype.greaterEqual = function (t, e) {
            return this.assertNotComplex([t, e], "greaterEqual"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return e <= t ? 1 : 0
            })
        }, t.prototype.logicalNot = function (t) {
            this.assertNotComplex(t, "logicalNot");
            for (var e = t.dataSync(), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) n[r] = e[r] ? 0 : 1;
            return dt.make(t.shape, {
                values: n
            }, "bool")
        }, t.prototype.logicalAnd = function (t, e) {
            return this.assertNotComplex([t, e], "logicalAnd"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t && e
            })
        }, t.prototype.logicalOr = function (t, e) {
            return this.assertNotComplex([t, e], "logicalOr"), this.broadcastedBinaryOp(t, e, "bool", function (t, e) {
                return t || e
            })
        }, t.prototype.select = function (t, e, n) {
            this.assertNotComplex([t, e, n], "select");
            for (var r = t.dataSync(), o = e.dataSync(), i = n.dataSync(), a = Qe(e.shape, kt(e.dtype, n.dtype)), s = a.dataSync(), u = 0, c = 0 === t.rank || 1 < t.rank || 1 === e.rank ? 1 : e.shape[1], l = 0; l < r.length; l++)
                for (var h = 0; h < c; h++) 1 === r[l] ? s[u++] = o[l] : s[u++] = i[l];
            return a
        }, t.prototype.where = function (t) {
            this.assertNotComplex([t], "where");
            var e = t.dataSync();
            return fa(t.shape, e)
        }, t.prototype.topk = function (t, e, n) {
            return this.assertNotComplex(t, "topk"), fn(t.dataSync(), t.shape, t.dtype, e)
        }, t.prototype.min = function (t, e) {
            this.assertNotComplex(t, "min"), Ee("min", e, t.rank);
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, t.dtype), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
                    var f = u[l + p];
                    f < h && (h = f)
                }
                s[c] = h
            }
            return i
        }, t.prototype.minimum = function (t, e) {
            return this.assertNotComplex([t, e], "minimum"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                return Math.min(t, e)
            })
        }, t.prototype.mod = function (t, e) {
            return this.assertNotComplex([t, e], "mod"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                var n = t % e;
                return t < 0 && e < 0 || 0 <= t && 0 <= e ? n : (n + e) % e
            })
        }, t.prototype.max = function (t, e) {
            this.assertNotComplex(t, "max"), Ee("max", e, t.rank);
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, t.dtype), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
                    var f = u[l + p];
                    h < f && (h = f)
                }
                s[c] = h
            }
            return i
        }, t.prototype.maximum = function (t, e) {
            return this.assertNotComplex([t, e], "maximum"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                return Math.max(t, e)
            })
        }, t.prototype.all = function (t, e) {
            this.assertNotComplex(t, "all"), Ee("all", e, t.rank);
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, t.dtype), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
                    var f = u[l + p];
                    h = h && f
                }
                s[c] = h
            }
            return i
        }, t.prototype.any = function (t, e) {
            this.assertNotComplex(t, "any"), Ee("any", e, t.rank);
            for (var n = we(t.shape, e), r = n[0], o = n[1], i = Qe(r, t.dtype), a = B(o), s = i.dataSync(), u = t.dataSync(), c = 0; c < s.length; ++c) {
                for (var l = c * a, h = u[l], p = 0; p < a; ++p) {
                    var f = u[l + p];
                    h = h || f
                }
                s[c] = h
            }
            return i
        }, t.prototype.squaredDifference = function (t, e) {
            return this.assertNotComplex([t, e], "squaredDifference"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                var n = t - e;
                return n * n
            })
        }, t.prototype.ceil = function (t) {
            this.assertNotComplex(t, "ceil");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.ceil(e[r]);
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.floor = function (t) {
            this.assertNotComplex(t, "floor");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.floor(e[r]);
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.sign = function (t) {
            this.assertNotComplex(t, "x");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) e[r] < 0 ? n[r] = -1 : 0 < e[r] ? n[r] = 1 : n[r] = 0;
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.isNaN = function (t) {
            this.assertNotComplex(t, "x");
            for (var e = t.dataSync(), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Number.isNaN(e[r]) && (n[r] = 1);
            return dt.make(t.shape, {
                values: n
            }, "bool")
        }, t.prototype.isInf = function (t) {
            this.assertNotComplex(t, "x");
            for (var e = t.dataSync(), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Math.abs(e[r]) === 1 / 0 && (n[r] = 1);
            return dt.make(t.shape, {
                values: n
            }, "bool")
        }, t.prototype.isFinite = function (t) {
            this.assertNotComplex(t, "x");
            for (var e = t.dataSync(), n = new Uint8Array(e.length), r = 0; r < e.length; ++r) Number.isFinite(e[r]) && (n[r] = 1);
            return dt.make(t.shape, {
                values: n
            }, "bool")
        }, t.prototype.round = function (t) {
            this.assertNotComplex(t, "round");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = Math.floor(e[r]);
                e[r] - o < .5 ? n[r] = Math.floor(e[r]) : .5 < e[r] - o ? n[r] = Math.ceil(e[r]) : n[r] = o % 2 == 0 ? o : o + 1
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.exp = function (t) {
            this.assertNotComplex(t, "exp");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.exp(e[r]);
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.expm1 = function (t) {
            this.assertNotComplex(t, "expm1");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = Math.expm1(e[r]);
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.log = function (t) {
            this.assertNotComplex(t, "log");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = e[r];
                n[r] = Math.log(o)
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.log1p = function (t) {
            this.assertNotComplex(t, "log1p");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = e[r];
                n[r] = Math.log1p(o)
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.sqrt = function (t) {
            this.assertNotComplex(t, "sqrt");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = e[r];
                n[r] = Math.sqrt(o)
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.rsqrt = function (t) {
            this.assertNotComplex(t, "rsqrt");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = e[r];
                n[r] = 1 / Math.sqrt(o)
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.square = function (t) {
            this.assertNotComplex(t, "square");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) {
                var o = e[r];
                n[r] = o * o
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.reciprocal = function (t) {
            this.assertNotComplex(t, "reciprocal");
            for (var e = t.dataSync(), n = new Float32Array(e.length), r = 0; r < e.length; ++r) n[r] = 1 / e[r];
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.linear = function (t) {
            return t
        }, t.prototype.relu = function (t) {
            this.assertNotComplex(t, "relu");
            for (var e = Qe(t.shape, t.dtype), n = e.dataSync(), r = t.dataSync(), o = 0; o < r.length; ++o) n[o] = Math.max(0, r[o]);
            return e
        }, t.prototype.prelu = function (t, e) {
            return this.assertNotComplex([t, e], "prelu"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                return t < 0 ? e * t : t
            })
        }, t.prototype.elu = function (t) {
            this.assertNotComplex(t, "elu");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
                var o = n[r];
                e[r] = 0 <= o ? o : Math.exp(o) - 1
            }
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.eluDer = function (t, e) {
            this.assertNotComplex([t, e], "eluDer");
            for (var n = new Float32Array(e.size), r = e.dataSync(), o = t.dataSync(), i = 0; i < r.length; ++i) {
                var a = r[i];
                n[i] = 1 <= a ? o[i] : o[i] * (a + 1)
            }
            return dt.make(e.shape, {
                values: n
            })
        }, t.prototype.selu = function (t) {
            this.assertNotComplex(t, "selu");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
                var o = n[r];
                e[r] = 0 <= o ? 1.0507009873554805 * o : 1.7580993408473768 * (Math.exp(o) - 1)
            }
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.clip = function (t, e, n) {
            this.assertNotComplex(t, "clip");
            for (var r = new Float32Array(t.size), o = t.dataSync(), i = 0; i < o.length; ++i) {
                var a = o[i];
                r[i] = n < a ? n : a < e ? e : a
            }
            return dt.make(t.shape, {
                values: r
            })
        }, t.prototype.abs = function (t) {
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.abs(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.complexAbs = function (t) {
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < t.size; ++r) {
                var o = n[2 * r],
                    i = n[2 * r + 1];
                e[r] = Math.hypot(o, i)
            }
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.int = function (t) {
            this.assertNotComplex(t, "int");
            for (var e = new Int32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = n[r];
            return dt.make(t.shape, {
                values: e
            }, "int32")
        }, t.prototype.sigmoid = function (t) {
            this.assertNotComplex(t, "sigmoid");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = 1 / (1 + Math.exp(-n[r]));
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.softplus = function (t) {
            this.assertNotComplex(t, "softplus");
            for (var e = Math.log(1.1920928955078125e-7) + 2, n = new Float32Array(t.size), r = t.dataSync(), o = 0; o < r.length; ++o) {
                var i, a = r[o] > -e,
                    s = r[o] < e,
                    u = Math.exp(r[o]);
                i = s ? u : a ? r[o] : Math.log(1 + u), n[o] = i
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.sin = function (t) {
            this.assertNotComplex(t, "sin");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.sin(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.cos = function (t) {
            this.assertNotComplex(t, "cos");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.cos(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.tan = function (t) {
            this.assertNotComplex(t, "tan");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.tan(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.asin = function (t) {
            this.assertNotComplex(t, "asin");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.asin(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.acos = function (t) {
            this.assertNotComplex(t, "acos");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.acos(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.atan = function (t) {
            this.assertNotComplex(t, "atan");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.atan(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.atan2 = function (t, e) {
            return this.assertNotComplex([t, e], "atan2"), this.broadcastedBinaryOp(t, e, t.dtype, function (t, e) {
                return Math.atan2(t, e)
            })
        }, t.prototype.sinh = function (t) {
            this.assertNotComplex(t, "sinh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.sinh(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.cosh = function (t) {
            this.assertNotComplex(t, "cosh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.cosh(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.tanh = function (t) {
            this.assertNotComplex(t, "tanh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = w(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.asinh = function (t) {
            this.assertNotComplex(t, "asinh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.asinh(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.acosh = function (t) {
            this.assertNotComplex(t, "acosh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.acosh(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.atanh = function (t) {
            this.assertNotComplex(t, "atanh");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) e[r] = Math.atanh(n[r]);
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.erf = function (t) {
            this.assertNotComplex(t, "erf");
            for (var e = new Float32Array(t.size), n = t.dataSync(), r = 0; r < n.length; ++r) {
                var o = n[r],
                    i = 1 / (1 + .3275911 * o);
                e[r] = 1 - ((((1.061405429 * i - 1.453152027) * i + 1.421413741) * i - .284496736) * i + .254829592) * i * Math.exp(-o * o)
            }
            return dt.make(t.shape, {
                values: e
            })
        }, t.prototype.step = function (t, e) {
            void 0 === e && (e = 0), this.assertNotComplex(t, "step");
            for (var n = new Float32Array(t.size), r = t.dataSync(), o = 0; o < r.length; ++o) {
                var i = r[o];
                isNaN(i) ? n[o] = NaN : n[o] = 0 < i ? 1 : e
            }
            return dt.make(t.shape, {
                values: n
            })
        }, t.prototype.conv2d = function (t, e, n) {
            this.assertNotComplex([t, e], "conv2d");
            for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = zi(n.outShape, t.dtype), l = t.dataSync(), h = e.dataSync(), p = c.values, f = 0; f < n.batchSize; ++f)
                for (var d = f * t.strides[0], v = f * c.strides[0], m = 0; m < n.outHeight; ++m)
                    for (var g = v + m * c.strides[1], y = m * n.strideHeight - s, x = 0; x < r; x++) {
                        var w = y + x * i;
                        if (!(w < 0 || w >= n.inHeight))
                            for (var b = x * e.strides[0], E = d + w * t.strides[1], C = 0; C < n.outWidth; ++C)
                                for (var _ = g + C * n.outChannels, S = C * n.strideWidth - u, R = 0; R < o; R++) {
                                    var N = S + R * a;
                                    if (!(N < 0 || N >= n.inWidth))
                                        for (var k = b + R * e.strides[1], I = E + N * n.inChannels, T = k, A = 0; A < n.inChannels; ++A) {
                                            for (var D = l[I + A], M = 0; M < n.outChannels; ++M) p[_ + M] += D * h[T + M];
                                            T += n.outChannels
                                        }
                                }
                    }
            return c.toTensor()
        }, t.prototype.conv3d = function (t, e, n) {
            for (var r = n.filterDepth, o = n.filterHeight, i = n.filterWidth, a = n.dilationDepth, s = n.dilationHeight, u = n.dilationWidth, c = n.padInfo.front, l = n.padInfo.left, h = n.padInfo.top, p = zi(n.outShape, t.dtype), f = t.dataSync(), d = e.dataSync(), v = p.values, m = 0; m < n.batchSize; ++m)
                for (var g = m * t.strides[0], y = m * p.strides[0], x = 0; x < n.outDepth; ++x)
                    for (var w = y + x * p.strides[1], b = x * n.strideDepth - c, E = 0; E < r; E++) {
                        var C = b + E * a;
                        if (!(C < 0 || C >= n.inDepth))
                            for (var _ = E * e.strides[0], S = g + C * t.strides[1], R = 0; R < n.outHeight; ++R)
                                for (var N = w + R * p.strides[2], k = R * n.strideHeight - h, I = 0; I < o; I++) {
                                    var T = k + I * s;
                                    if (!(T < 0 || T >= n.inHeight))
                                        for (var A = _ + I * e.strides[1], D = S + T * t.strides[2], M = 0; M < n.outWidth; ++M)
                                            for (var O = N + M * n.outChannels, P = M * n.strideWidth - l, F = 0; F < i; F++) {
                                                var L = P + F * u;
                                                if (!(L < 0 || L >= n.inWidth))
                                                    for (var B = A + F * e.strides[2], W = D + L * n.inChannels, z = B, U = 0; U < n.inChannels; ++U) {
                                                        for (var G = f[W + U], V = 0; V < n.outChannels; ++V) v[O + V] += G * d[z + V];
                                                        z += n.outChannels
                                                    }
                                            }
                                }
                    }
            return p.toTensor()
        }, t.prototype.conv2dDerInput = function (t, e, n) {
            this.assertNotComplex([t, e], "conv2dDerInput");
            for (var r = zi(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = t.dataSync(), l = t.strides, h = l[0], p = l[1], f = l[2], d = e.dataSync(), v = e.strides, m = v[0], g = v[1], y = v[2], x = n.batchSize, w = n.filterHeight, b = n.filterWidth, E = n.inChannels, C = n.inHeight, _ = n.inWidth, S = n.outChannels, R = n.outHeight, N = n.outWidth, k = n.strideHeight, I = n.strideWidth, T = w - 1 - n.padInfo.top, A = b - 1 - n.padInfo.left, D = 0; D < x; ++D)
                for (var M = 0; M < E; ++M)
                    for (var O = 0; O < C; ++O)
                        for (var P = O - T, F = Math.max(0, Math.ceil(P / k)), L = Math.min(R, (w + P) / k), B = 0; B < _; ++B) {
                            for (var W = B - A, z = Math.max(0, Math.ceil(W / I)), U = Math.min(N, (b + W) / I), G = 0, V = F; V < L; ++V)
                                for (var H = V * k - P, q = z; q < U; ++q)
                                    for (var j = h * D + p * V + f * q, $ = m * (w - 1 - H) + g * (b - 1 - (q * I - W)) + y * M, K = 0; K < S; ++K) G += c[j + K] * d[$ + K];
                            o[a * D + s * O + u * B + M] = G
                        }
            return r.toTensor()
        }, t.prototype.conv3dDerInput = function (t, e, n) {
            for (var r = zi(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = i[3], l = t.dataSync(), h = t.strides, p = h[0], f = h[1], d = h[2], v = h[3], m = e.dataSync(), g = e.strides, y = g[0], x = g[1], w = g[2], b = g[3], E = n.batchSize, C = n.filterDepth, _ = n.filterHeight, S = n.filterWidth, R = n.inChannels, N = n.inDepth, k = n.inHeight, I = n.inWidth, T = n.outChannels, A = n.outDepth, D = n.outHeight, M = n.outWidth, O = n.strideDepth, P = n.strideHeight, F = n.strideWidth, L = C - 1 - n.padInfo.front, B = _ - 1 - n.padInfo.top, W = S - 1 - n.padInfo.left, z = 0; z < E; ++z)
                for (var U = 0; U < R; ++U)
                    for (var G = 0; G < N; ++G)
                        for (var V = G - L, H = Math.max(0, Math.ceil(V / O)), q = Math.min(A, (C + V) / O), j = 0; j < k; ++j)
                            for (var $ = j - B, K = Math.max(0, Math.ceil($ / P)), X = Math.min(D, (_ + $) / P), Y = 0; Y < I; ++Y) {
                                for (var Q = Y - W, J = Math.max(0, Math.ceil(Q / F)), Z = Math.min(M, (S + Q) / F), tt = 0, et = H; et < q; ++et)
                                    for (var nt = et * O - V, rt = K; rt < X; ++rt)
                                        for (var ot = rt * P - $, it = J; it < Z; ++it)
                                            for (var at = p * z + f * et + d * rt + v * it, st = y * (C - 1 - nt) + x * (_ - 1 - ot) + w * (S - 1 - (it * F - Q)) + b * U, ut = 0; ut < T; ++ut) tt += l[at + ut] * m[st + ut];
                                o[a * z + s * G + u * j + c * Y + U] = tt
                            }
            return r.toTensor()
        }, t.prototype.conv2dDerFilter = function (t, e, n) {
            this.assertNotComplex([t, e], "conv2dDerFilter");
            for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = zi(n.filterShape, "float32"), u = n.padInfo.left, c = n.padInfo.top, l = t.bufferSync(), h = e.bufferSync(), p = 0; p < i; ++p)
                for (var f = Math.max(0, Math.ceil((c - p) / r)), d = Math.min(n.outHeight, (n.inHeight + c - p) / r), v = 0; v < a; ++v)
                    for (var m = Math.max(0, Math.ceil((u - v) / o)), g = Math.min(n.outWidth, (n.inWidth + u - v) / o), y = 0; y < n.inChannels; ++y)
                        for (var x = 0; x < n.outChannels; ++x) {
                            for (var w = 0, b = 0; b < n.batchSize; ++b)
                                for (var E = f; E < d; ++E)
                                    for (var C = p + E * r - c, _ = m; _ < g; ++_) {
                                        var S = v + _ * o - u;
                                        w += l.get(b, C, S, y) * h.get(b, E, _, x)
                                    }
                            s.set(w, p, v, y, x)
                        }
            return s.toTensor()
        }, t.prototype.conv3dDerFilter = function (t, e, n) {
            for (var r = n.strideDepth, o = n.strideHeight, i = n.strideWidth, a = n.filterDepth, s = n.filterHeight, u = n.filterWidth, c = zi(n.filterShape, "float32"), l = c.values, h = c.strides, p = h[0], f = h[1], d = h[2], v = h[3], m = e.dataSync(), g = e.strides, y = g[0], x = g[1], w = g[2], b = g[3], E = t.dataSync(), C = t.strides, _ = C[0], S = C[1], R = C[2], N = C[3], k = n.padInfo.front, I = n.padInfo.left, T = n.padInfo.top, A = 0; A < a; ++A)
                for (var D = Math.max(0, Math.ceil((k - A) / r)), M = Math.min(n.outDepth, (n.inDepth + k - A) / r), O = A * p, P = 0; P < s; ++P)
                    for (var F = Math.max(0, Math.ceil((T - P) / o)), L = Math.min(n.outHeight, (n.inHeight + T - P) / o), B = P * f + O, W = 0; W < u; ++W)
                        for (var z = Math.max(0, Math.ceil((I - W) / i)), U = Math.min(n.outWidth, (n.inWidth + I - W) / i), G = W * d + B, V = 0; V < n.inChannels; ++V)
                            for (var H = V * v + G, q = 0; q < n.outChannels; ++q) {
                                for (var j = 0, $ = 0; $ < n.batchSize; ++$)
                                    for (var K = $ * _, X = $ * y, Y = D; Y < M; ++Y)
                                        for (var Q = (A + Y * r - k) * S + K, J = Y * x + X, Z = F; Z < L; ++Z)
                                            for (var tt = (P + Z * o - T) * R + Q, et = Z * w + J, nt = z; nt < U; ++nt) {
                                                var rt = nt * b + et;
                                                j += E[(W + nt * i - I) * N + tt + V] * m[rt + q]
                                            }
                                l[H + q] = j
                            }
            return c.toTensor()
        }, t.prototype.depthwiseConv2D = function (t, e, n) {
            this.assertNotComplex([t, e], "depthwiseConv2D");
            for (var r = n.filterHeight, o = n.filterWidth, i = n.dilationHeight, a = n.dilationWidth, s = n.padInfo.left, u = n.padInfo.top, c = n.outChannels / n.inChannels, l = zi(n.outShape, t.dtype), h = t.dataSync(), p = e.dataSync(), f = l.values, d = 0; d < n.batchSize; ++d)
                for (var v = d * t.strides[0], m = d * l.strides[0], g = 0; g < n.outHeight; ++g)
                    for (var y = m + g * l.strides[1], x = g * n.strideHeight - s, w = 0; w < r; ++w) {
                        var b = x + w * i;
                        if (!(b < 0 || b >= n.inHeight))
                            for (var E = w * e.strides[0], C = v + b * t.strides[1], _ = 0; _ < n.outWidth; ++_)
                                for (var S = y + _ * l.strides[2], R = _ * n.strideWidth - u, N = 0; N < o; ++N) {
                                    var k = R + N * a;
                                    if (!(k < 0 || k >= n.inWidth))
                                        for (var I = E + N * e.strides[1], T = C + k * n.inChannels, A = S, D = I, M = 0; M < n.inChannels; ++M) {
                                            for (var O = h[T + M], P = 0; P < c; ++P) f[A + P] += O * p[D + P];
                                            A += c, D += c
                                        }
                                }
                    }
            return l.toTensor()
        }, t.prototype.depthwiseConv2DDerInput = function (t, e, n) {
            this.assertNotComplex([t, e], "depthwiseConv2DDerInput");
            for (var r = zi(n.inShape, "float32"), o = r.values, i = r.strides, a = i[0], s = i[1], u = i[2], c = t.dataSync(), l = t.strides, h = l[0], p = l[1], f = l[2], d = e.dataSync(), v = e.strides, m = v[0], g = v[1], y = v[2], x = n.batchSize, w = n.filterHeight, b = n.filterWidth, E = n.inChannels, C = n.inHeight, _ = n.inWidth, S = n.outChannels, R = n.outHeight, N = n.outWidth, k = n.strideHeight, I = n.strideWidth, T = w - 1 - n.padInfo.top, A = b - 1 - n.padInfo.left, D = S / E, M = 0; M < x; ++M)
                for (var O = 0; O < E; ++O)
                    for (var P = 0; P < C; ++P)
                        for (var F = P - T, L = Math.max(0, Math.ceil(F / k)), B = Math.min(R, (w + F) / k), W = 0; W < _; ++W) {
                            for (var z = W - A, U = Math.max(0, Math.ceil(z / I)), G = Math.min(N, (b + z) / I), V = 0, H = L; H < B; ++H)
                                for (var q = H * k - F, j = U; j < G; ++j)
                                    for (var $ = h * M + p * H + f * j, K = m * (w - 1 - q) + g * (b - 1 - (j * I - z)) + y * O, X = 0; X < D; ++X) V += c[$ + (O * D + X)] * d[K + X];
                            o[a * M + s * P + u * W + O] = V
                        }
            return r.toTensor()
        }, t.prototype.depthwiseConv2DDerFilter = function (t, e, n) {
            this.assertNotComplex([t, e], "depthwiseConv2DDerFilter");
            for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = zi(n.filterShape, "float32"), u = n.padInfo.left, c = n.padInfo.top, l = n.outChannels / n.inChannels, h = t.bufferSync(), p = e.bufferSync(), f = 0; f < i; ++f)
                for (var d = Math.max(0, Math.ceil((c - f) / r)), v = Math.min(n.outHeight, (n.inHeight + c - f) / r), m = 0; m < a; ++m)
                    for (var g = Math.max(0, Math.ceil((u - m) / o)), y = Math.min(n.outWidth, (n.inWidth + u - m) / o), x = 0; x < n.outChannels; ++x) {
                        for (var w = Math.trunc(x / l), b = x % l, E = 0, C = 0; C < n.batchSize; ++C)
                            for (var _ = d; _ < v; ++_)
                                for (var S = f + _ * r - c, R = g; R < y; ++R) {
                                    var N = m + R * o - u;
                                    E += h.get(C, S, N, w) * p.get(C, _, R, x)
                                }
                        s.set(E, f, m, w, b)
                    }
            return s.toTensor()
        }, t.prototype.tile = function (t, e) {
            this.assertNotComplex(t, "tile");
            for (var n = new Array(t.rank), r = 0; r < n.length; r++) n[r] = t.shape[r] * e[r];
            var o = zi(n, t.dtype),
                i = t.bufferSync();
            for (r = 0; r < o.values.length; ++r) {
                for (var a = o.indexToLoc(r), s = new Array(t.rank), u = 0; u < s.length; u++) s[u] = a[u] % t.shape[u];
                var c = i.locToIndex(s);
                o.values[r] = i.values[c]
            }
            return o.toTensor()
        }, t.prototype.pad = function (n, t, e) {
            this.assertNotComplex(n, "pad");
            var r = t.map(function (t, e) {
                    return t[0] + n.shape[e] + t[1]
                }),
                o = t.map(function (t) {
                    return t[0]
                }),
                i = n.bufferSync(),
                a = zi(r, n.dtype);
            0 !== e && a.values.fill(e);
            for (var s = 0; s < n.size; s++) {
                var u = i.indexToLoc(s),
                    c = u.map(function (t, e) {
                        return t + o[e]
                    });
                a.set.apply(a, [i.get.apply(i, u)].concat(c))
            }
            return a.toTensor()
        }, t.prototype.transpose = function (t, e) {
            this.assertNotComplex(t, "transpose");
            for (var n = new Array(t.rank), r = 0; r < n.length; r++) n[r] = t.shape[e[r]];
            var o = t.dataSync(),
                i = zi(n, t.dtype),
                a = t.bufferSync();
            for (r = 0; r < t.size; ++r) {
                for (var s = a.indexToLoc(r), u = new Array(s.length), c = 0; c < u.length; c++) u[c] = s[e[c]];
                var l = i.locToIndex(u);
                i.values[l] = o[r]
            }
            return i.toTensor()
        }, t.prototype.gather = function (t, e, n) {
            this.assertNotComplex([t, e], "gather");
            var r = t.shape.slice(),
                o = e.dataSync();
            r[n] = o.length;
            for (var i = zi(r, t.dtype), a = t.bufferSync(), s = 0; s < i.size; ++s) {
                var u = i.indexToLoc(s),
                    c = u.slice();
                c[n] = o[u[n]];
                var l = a.locToIndex(c);
                i.values[s] = a.values[l]
            }
            return i.toTensor()
        }, t.prototype.batchToSpaceND = function (t, e, n) {
            this.assertNotComplex([t], "batchToSpaceND");
            var r = e.reduce(function (t, e) {
                    return t * e
                }),
                o = de(t.shape, e, r),
                i = ve(o.length, e.length),
                a = me(t.shape, e, r),
                s = ge(n, e.length),
                u = ye(a, n, e.length);
            return t.reshape(o).transpose(i).reshape(a).slice(s, u)
        }, t.prototype.spaceToBatchND = function (t, e, n) {
            this.assertNotComplex([t], "spaceToBatchND");
            var r = e.reduce(function (t, e) {
                    return t * e
                }),
                o = [
                    [0, 0]
                ];
            o.push.apply(o, n);
            for (var i = 1 + e.length; i < t.shape.length; ++i) o.push([0, 0]);
            var a = t.pad(o),
                s = de(a.shape, e, r, !1),
                u = ve(s.length, e.length, !1),
                c = me(a.shape, e, r, !1);
            return a.reshape(s).transpose(u).reshape(c)
        }, t.prototype.pool = function (t, e, n) {
            this.assertNotComplex(t, "pool");
            for (var r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = "max" === n ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, p = t.dataSync(), f = zi(e.outShape, t.dtype), d = f.values, v = e.outShape[1] * e.outShape[2] * e.outShape[3], m = e.outShape[2] * e.outShape[3], g = e.outShape[3], y = 0; y < e.batchSize; ++y)
                for (var x = y * v, w = y * t.strides[0], b = 0; b < e.inChannels; ++b)
                    for (var E = 0; E < e.outHeight; ++E)
                        for (var C = E * r - c, _ = Math.max(0, C), S = Math.min(e.inHeight, s + C), R = x + E * m, N = 0; N < e.outWidth; ++N) {
                            for (var k = N * o - l, I = Math.max(0, k), T = Math.min(e.inWidth, u + k), A = h, D = 0, M = 0, O = _; O < S; O += i) {
                                for (var P = w + O * t.strides[1], F = I; F < T; F += a) {
                                    var L = p[P + F * t.strides[2] + b];
                                    "max" === n && A < L ? A = L : "avg" === n && (D += L, M++)
                                }
                                if (isNaN(A)) break
                            }
                            d[R + N * g + b] = "avg" === n ? D / M : A
                        }
            return f.toTensor()
        }, t.prototype.maxPool = function (t, e) {
            return this.pool(t, e, "max")
        }, t.prototype.maxPoolPositions = function (t, e) {
            for (var n = zi(e.outShape, "int32"), r = e.strideHeight, o = e.strideWidth, i = e.dilationHeight, a = e.dilationWidth, s = e.effectiveFilterHeight, u = e.effectiveFilterWidth, c = e.padInfo.top, l = e.padInfo.left, h = t.bufferSync(), p = 0; p < e.batchSize; ++p)
                for (var f = 0; f < e.inChannels; ++f)
                    for (var d = 0; d < e.outHeight; ++d) {
                        for (var v = d * r - c, m = v; m < 0;) m += i;
                        for (var g = Math.min(e.inHeight, s + v), y = 0; y < e.outWidth; ++y) {
                            for (var x = y * o - l, w = x; w < 0;) w += a;
                            for (var b = Math.min(e.inWidth, u + x), E = Number.NEGATIVE_INFINITY, C = -1, _ = m; _ < g; _ += i)
                                for (var S = _ - v, R = w; R < b; R += a) {
                                    var N = R - x,
                                        k = h.get(p, _, R, f);
                                    E < k && (E = k, C = S * u + N)
                                }
                            n.set(C, p, d, y, f)
                        }
                    }
            return n.toTensor()
        }, t.prototype.maxPoolBackprop = function (t, e, n, r) {
            this.assertNotComplex([e, n], "maxPoolBackprop");
            for (var o = this.maxPoolPositions(e, r), i = r.strideHeight, a = r.strideWidth, s = r.dilationHeight, u = r.dilationWidth, c = r.effectiveFilterHeight, l = r.effectiveFilterWidth, h = l - 1 - r.padInfo.left, p = c - 1 - r.padInfo.top, f = zi(e.shape, "float32"), d = o.bufferSync(), v = t.bufferSync(), m = 0; m < r.batchSize; ++m)
                for (var g = 0; g < r.inChannels; ++g)
                    for (var y = 0; y < r.inHeight; ++y)
                        for (var x = 0; x < r.inWidth; ++x) {
                            for (var w = y - p, b = x - h, E = 0, C = 0; C < c; C += s) {
                                var _ = (w + C) / i;
                                if (!(_ < 0 || _ >= r.outHeight || Math.floor(_) !== _))
                                    for (var S = 0; S < l; S += u) {
                                        var R = (b + S) / a;
                                        if (!(R < 0 || R >= r.outWidth || Math.floor(R) !== R)) {
                                            var N = c * l - 1 - d.get(m, _, R, g) === C * l + S ? 1 : 0;
                                            0 !== N && (E += v.get(m, _, R, g) * N)
                                        }
                                    }
                            }
                            f.set(E, m, y, x, g)
                        }
            return f.toTensor()
        }, t.prototype.avgPoolBackprop = function (t, e, n) {
            this.assertNotComplex([t, e], "avgPoolBackprop");
            for (var r = n.strideHeight, o = n.strideWidth, i = n.filterHeight, a = n.filterWidth, s = n.dilationHeight, u = n.dilationWidth, c = n.effectiveFilterHeight, l = n.effectiveFilterWidth, h = l - 1 - n.padInfo.left, p = c - 1 - n.padInfo.top, f = zi(e.shape, "float32"), d = 1 / (i * a), v = t.bufferSync(), m = 0; m < n.batchSize; ++m)
                for (var g = 0; g < n.inChannels; ++g)
                    for (var y = 0; y < n.inHeight; ++y)
                        for (var x = 0; x < n.inWidth; ++x) {
                            for (var w = y - p, b = x - h, E = 0, C = 0; C < c; C += s) {
                                var _ = (w + C) / r;
                                if (!(_ < 0 || _ >= n.outHeight || Math.floor(_) !== _))
                                    for (var S = 0; S < l; S += u) {
                                        var R = (b + S) / o;
                                        R < 0 || R >= n.outWidth || Math.floor(R) !== R || (E += v.get(m, _, R, g))
                                    }
                            }
                            f.set(E * d, m, y, x, g)
                        }
            return f.toTensor()
        }, t.prototype.cast = function (t, e) {
            return an(t, e, this)
        }, t.prototype.reshape = function (t, e) {
            return sn(t, e)
        }, t.prototype.avgPool = function (t, e) {
            return this.assertNotComplex(t, "avgPool"), this.pool(t, e, "avg").toFloat()
        }, t.prototype.resizeBilinear = function (t, e, n, r) {
            this.assertNotComplex(t, "resizeBilinear");
            for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = t.dataSync(), l = new Float32Array(B([i, e, n, u])), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], f = 0, d = h[0] / p[0], v = h[1] / p[1], m = 0; m < i; m++)
                for (var g = 0; g < e; g++)
                    for (var y = d * g, x = Math.floor(y), w = y - x, b = Math.min(a - 1, Math.ceil(y)), E = m * t.strides[0] + x * t.strides[1], C = m * t.strides[0] + b * t.strides[1], _ = 0; _ < n; _++)
                        for (var S = v * _, R = Math.floor(S), N = S - R, k = Math.min(s - 1, Math.ceil(S)), I = E + R * t.strides[2], T = C + R * t.strides[2], A = E + +k * t.strides[2], D = C + k * t.strides[2], M = 0; M < u; M++) {
                            var O = c[I + M],
                                P = c[T + M],
                                F = O + (c[A + M] - O) * N,
                                L = F + (P + (c[D + M] - P) * N - F) * w;
                            l[f++] = L
                        }
            return Ge(l, [i, e, n, u])
        }, t.prototype.resizeBilinearBackprop = function (t, e, n) {
            this.assertNotComplex([t, e], "resizeBilinearBackprop");
            for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), p = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], f = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], d = p[0] / f[0], v = p[1] / f[1], m = t.dataSync(), g = 0, y = 0; y < o; y++)
                for (var x = y * e.strides[0], w = 0; w < c; w++)
                    for (var b = w * d, E = Math.floor(b), C = Math.min(Math.ceil(b), i - 1), _ = x + E * e.strides[1], S = x + C * e.strides[1], R = b - E, N = 1 - R, k = 0; k < l; k++)
                        for (var I = k * v, T = Math.floor(I), A = Math.min(Math.ceil(I), a - 1), D = I - T, M = 1 - D, O = _ + T * e.strides[2], P = _ + A * e.strides[2], F = S + T * e.strides[2], L = S + A * e.strides[2], B = N * M, W = N * D, z = R * M, U = R * D, G = 0; G < s; G++) {
                            var V = m[g++];
                            h[O + G] += V * B, h[P + G] += V * W, h[F + G] += V * z, h[L + G] += V * U
                        }
            return $e(h, [o, a, i, s], e.dtype)
        }, t.prototype.resizeNearestNeighbor = function (t, e, n, r) {
            this.assertNotComplex(t, "resizeNearestNeighbor");
            for (var o = t.shape, i = o[0], a = o[1], s = o[2], u = o[3], c = t.dataSync(), l = new Float32Array(i * e * n * u), h = [r && 1 < e ? a - 1 : a, r && 1 < n ? s - 1 : s], p = [r && 1 < e ? e - 1 : e, r && 1 < n ? n - 1 : n], f = h[0] / p[0], d = h[1] / p[1], v = 0, m = 0; m < i; m++)
                for (var g = m * t.strides[0], y = 0; y < e; y++)
                    for (var x = f * y, w = g + Math.min(a - 1, r ? Math.round(x) : Math.floor(x)) * t.strides[1], b = 0; b < n; b++)
                        for (var E = d * b, C = w + Math.min(s - 1, r ? Math.round(E) : Math.floor(E)) * t.strides[2], _ = 0; _ < u; _++) {
                            var S = c[C + _];
                            l[v++] = S
                        }
            return Ge(l, [i, e, n, u], t.dtype)
        }, t.prototype.resizeNearestNeighborBackprop = function (t, e, n) {
            this.assertNotComplex([t, e], "resizeNearestNeighborBackprop");
            for (var r = e.shape, o = r[0], i = r[1], a = r[2], s = r[3], u = t.shape, c = u[1], l = u[2], h = new Float32Array(o * i * a * s), p = t.dataSync(), f = [n && 1 < c ? i - 1 : i, n && 1 < l ? a - 1 : a], d = [n && 1 < c ? c - 1 : c, n && 1 < l ? l - 1 : l], v = f[0] / d[0], m = f[1] / d[1], g = 1 / v, y = 1 / m, x = 2 * Math.ceil(g) + 2, w = 2 * Math.ceil(y) + 2, b = 0; b < o; b++)
                for (var E = b * e.strides[0], C = 0; C < i; C++)
                    for (var _ = E + C * e.strides[1], S = Math.floor(C * g), R = Math.floor(S - x / 2), N = 0; N < a; N++)
                        for (var k = _ + N * e.strides[2], I = Math.floor(N * y), T = Math.floor(I - w / 2), A = 0; A < s; A++) {
                            for (var D = 0, M = 0; M < x; M++) {
                                var O = M + R;
                                if (!(O < 0 || c <= O)) {
                                    var P = E + O * t.strides[1],
                                        F = O * v;
                                    if (C === Math.min(i - 1, n ? Math.round(F) : Math.floor(F)))
                                        for (var L = 0; L < w; L++) {
                                            var B = L + T;
                                            if (!(B < 0 || l <= B)) {
                                                var W = P + B * t.strides[2],
                                                    z = B * m;
                                                N === Math.min(a - 1, n ? Math.round(z) : Math.floor(z)) && (D += p[W + A])
                                            }
                                        }
                                }
                            }
                            h[k + A] = D
                        }
            return $e(h, e.shape, e.dtype)
        }, t.prototype.batchNormalization = function (t, e, n, r, o, i) {
            this.assertNotComplex([t, e, n, o, i], "batchNorm");
            for (var a = t.dataSync(), s = e.dataSync(), u = n.dataSync(), c = o ? o.dataSync() : new Float32Array([1]), l = i ? i.dataSync() : new Float32Array([0]), h = new Float32Array(a.length), p = l.length, f = c.length, d = u.length, v = s.length, m = 0, g = 0, y = 0, x = 0, w = 0; w < a.length; ++w) h[w] = l[m++] + (a[w] - s[g++]) * c[y++] / Math.sqrt(u[x++] + r), p <= m && (m = 0), v <= g && (g = 0), f <= y && (y = 0), d <= x && (x = 0);
            return $e(h, t.shape)
        }, t.prototype.localResponseNormalization4D = function (t, a, e, n, r) {
            this.assertNotComplex(t, "localResponseNormalization4D");
            var s = t.shape[3],
                u = s - 1,
                c = t.dataSync(),
                o = t.size,
                i = new Float32Array(o);

            function l(t) {
                for (var e = t % s, n = t - e + Math.max(0, e - a), r = t - e + Math.min(e + a, u), o = 0; n <= r; n++) {
                    var i = c[n];
                    o += i * i
                }
                return o
            }
            for (var h = 0; h < o; h++) {
                var p = l(h),
                    f = c[h] * Math.pow(e + n * p, -r);
                i[h] = f
            }
            return $e(i, t.shape)
        }, t.prototype.LRNGrad = function (t, e, n, r, o, i, a) {
            this.assertNotComplex(t, "LRNGrad");
            for (var s = t.shape[3], u = t.dataSync(), c = e.dataSync(), l = n.dataSync(), h = new Float32Array(t.size), p = t.size, f = 0; f < p; f++) {
                for (var d = f % s, v = f - d + Math.max(0, d - r), m = f - d + Math.min(s, d + r + 1), g = 0, y = v; y < m; y++) g += Math.pow(c[y], 2);
                for (g = i * g + o, y = v; y < m; y++) {
                    var x = -2 * i * a * c[y] * l[f] / g;
                    f === y && (x += Math.pow(g, -a)), x *= u[f], h[y] += x
                }
            }
            return $e(h, t.shape)
        }, t.prototype.multinomial = function (t, e, n, r) {
            this.assertNotComplex(t, "multinomial");
            for (var o = e ? t : Le(t), i = o.shape[0], a = o.shape[1], s = Qe([i, n], "int32"), u = s.dataSync(), c = o.dataSync(), l = 0; l < i; ++l) {
                var h = l * a,
                    p = new Float32Array(a - 1);
                p[0] = c[h];
                for (var f = 1; f < p.length; ++f) p[f] = p[f - 1] + c[h + f];
                for (var d = Bi(r.toString()), v = l * n, m = 0; m < n; ++m) {
                    var g = d();
                    u[v + m] = p.length;
                    for (var y = 0; y < p.length; y++)
                        if (g < p[y]) {
                            u[v + m] = y;
                            break
                        }
                }
            }
            return s
        }, t.prototype.oneHot = function (t, e, n, r) {
            this.assertNotComplex(t, "oneHot");
            var o = new Float32Array(t.size * e);
            o.fill(r);
            for (var i = t.dataSync(), a = 0; a < t.size; ++a) 0 <= i[a] && i[a] < e && (o[a * e + i[a]] = n);
            return qe(o, [t.size, e], "int32")
        }, t.prototype.nonMaxSuppression = function (t, e, n, r, o) {
            return this.assertNotComplex(t, "nonMaxSuppression"), ln(t.dataSync(), e.dataSync(), n, r, o)
        }, t.prototype.fft = function (t) {
            return this.fftBatch(t, !1)
        }, t.prototype.ifft = function (t) {
            return this.fftBatch(t, !0)
        }, t.prototype.fftBatch = function (t, e) {
            for (var n = t.shape[0], r = t.shape[1], o = zi(t.shape, "float32"), i = zi(t.shape, "float32"), a = ze(t).as2D(n, r), s = Ue(t).as2D(n, r), u = 0; u < n; u++)
                for (var c = a.slice([u, 0], [1, r]), l = s.slice([u, 0], [1, r]), h = We(c, l), p = this.fftImpl(h, e).dataSync(), f = 0; f < r; f++) {
                    var d = cn(p, f);
                    o.values[u * r + f] = d.real, i.values[u * r + f] = d.imag
                }
            return We(o.toTensor(), i.toTensor()).as2D(n, r)
        }, t.prototype.fftImpl = function (t, e) {
            var n = t.as1D(),
                r = n.size;
            if (this.isExponentOf2(r)) {
                var o = this.fftRadix2(n, r, e).as2D(t.shape[0], t.shape[1]);
                return e && (o = We(ze(o).div(Ve(r)), Ue(o).div(Ve(r)))), o
            }
            var i = t.dataSync(),
                a = function (t) {
                    for (var e = new Float32Array(t.length / 2), n = new Float32Array(t.length / 2), r = 0; r < t.length; r += 2) e[r / 2] = t[r], n[r / 2] = t[r + 1];
                    return {
                        real: e,
                        imag: n
                    }
                }(this.fourierTransformByMatmul(i, r, e));
            return We(a.real, a.imag).as2D(t.shape[0], t.shape[1])
        }, t.prototype.isExponentOf2 = function (t) {
            return 0 == (t & t - 1)
        }, t.prototype.fftRadix2 = function (t, e, n) {
            if (1 === e) return t;
            var r = t.dataSync(),
                o = e / 2,
                i = function (t) {
                    for (var e = Math.ceil(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 0; o < t.length; o += 4) n[Math.floor(o / 4)] = t[o], r[Math.floor(o / 4)] = t[o + 1];
                    return {
                        real: n,
                        imag: r
                    }
                }(r),
                a = We(i.real, i.imag).as1D(),
                s = function (t) {
                    for (var e = Math.floor(t.length / 4), n = new Float32Array(e), r = new Float32Array(e), o = 2; o < t.length; o += 4) n[Math.floor(o / 4)] = t[o], r[Math.floor(o / 4)] = t[o + 1];
                    return {
                        real: n,
                        imag: r
                    }
                }(r),
                u = We(s.real, s.imag).as1D();
            a = this.fftRadix2(a, o, n), u = this.fftRadix2(u, o, n);
            var c = function (t, e) {
                    for (var n = new Float32Array(t / 2), r = new Float32Array(t / 2), o = 0; o < Math.ceil(t / 2); o++) {
                        var i = (e ? 2 : -2) * Math.PI * (o / t);
                        n[o] = Math.cos(i), r[o] = Math.sin(i)
                    }
                    return {
                        real: n,
                        imag: r
                    }
                }(e, n),
                l = We(c.real, c.imag).mul(u),
                h = a.add(l),
                p = a.sub(l),
                f = ze(h).concat(ze(p)),
                d = Ue(h).concat(Ue(p));
            return We(f, d).as1D()
        }, t.prototype.fourierTransformByMatmul = function (t, e, n) {
            for (var r = new Float32Array(2 * e), o = 0; o < e; o++) {
                for (var i = 0, a = 0, s = 0; s < e; s++) {
                    var u = (d = o * s, v = e, void 0, m = (n ? 2 : -2) * Math.PI * (d / v), {
                            real: Math.cos(m),
                            imag: Math.sin(m)
                        }),
                        c = cn(t, s);
                    i += c.real * u.real - c.imag * u.imag, a += c.real * u.imag + c.imag * u.real
                }
                n && (i /= e, a /= e), h = i, p = a, (l = r)[2 * (f = o)] = h, l[2 * f + 1] = p
            }
            var l, h, p, f, d, v, m;
            return r
        }, t.prototype.depthToSpace = function (t, e, n) {
            D("NHWC" === n, function () {
                return "Only NHWC dataFormat supported on CPU for depthToSpace. Got " + n
            }), D(1 < e, function () {
                return "blockSize should be > 1 for depthToSpace, but was: " + e
            });
            for (var r = t.shape[0], o = t.shape[1], i = t.shape[2], a = t.shape[3], s = o * e, u = i * e, c = a / (e * e), l = t.dataSync(), h = new Float32Array(r * s * u * c), p = 0, f = 0; f < r; ++f)
                for (var d = 0; d < s; ++d)
                    for (var v = Math.floor(d / e), m = d % e, g = 0; g < u; ++g)
                        for (var y = Math.floor(g / e), x = (m * e + g % e) * c, w = 0; w < c; ++w) {
                            var b = w + x + a * (y + i * (v + o * f));
                            h[p++] = l[b]
                        }
            return $e(h, [r, s, u, c])
        }, t.prototype.broadcastedBinaryOp = function (a, s, t, u) {
            var e = xn(a.shape, s.shape),
                c = zi(e, t),
                l = a.dataSync(),
                h = s.dataSync(),
                p = gn(a.shape, e),
                f = gn(s.shape, e),
                d = c.values;
            if (p.length + f.length === 0)
                for (var n = 0; n < d.length; ++n) d[n] = u(l[n % l.length], h[n % h.length]);
            else {
                var v = a.bufferSync(),
                    m = s.bufferSync(),
                    r = function (t) {
                        var e = c.indexToLoc(t),
                            n = e.slice(-a.rank);
                        p.forEach(function (t) {
                            return n[t] = 0
                        });
                        var r = v.locToIndex(n),
                            o = e.slice(-s.rank);
                        f.forEach(function (t) {
                            return o[t] = 0
                        });
                        var i = m.locToIndex(o);
                        d[t] = u(l[r], h[i])
                    };
                for (n = 0; n < d.length; ++n) r(n)
            }
            return c.toTensor()
        }, t.prototype.broadcastedBinaryComplexOp = function (s, u, c) {
            var t = xn(s.shape, u.shape),
                l = zi(t, "float32"),
                e = zi(t, "float32"),
                h = s.dataSync(),
                p = u.dataSync(),
                f = gn(s.shape, t),
                d = gn(u.shape, t),
                v = l.values,
                m = e.values;
            if (f.length + d.length === 0)
                for (var n = 0; n < v.length; n++) {
                    var r = n % h.length,
                        o = n % p.length,
                        i = c(h[2 * r], h[2 * r + 1], p[2 * o], p[2 * o + 1]);
                    v[n] = i.real, m[n] = i.imag
                } else {
                    var g = this.data.get(s.dataId).complexTensors.real.bufferSync(),
                        y = this.data.get(u.dataId).complexTensors.real.bufferSync(),
                        a = function (t) {
                            var e = l.indexToLoc(t),
                                n = e.slice(-s.rank);
                            f.forEach(function (t) {
                                return n[t] = 0
                            });
                            var r = g.locToIndex(n),
                                o = e.slice(-u.rank);
                            d.forEach(function (t) {
                                return o[t] = 0
                            });
                            var i = y.locToIndex(o),
                                a = c(h[2 * r], h[2 * r + 1], p[2 * i], p[2 * i + 1]);
                            v[t] = a.real, m[t] = a.imag
                        };
                    for (n = 0; n < v.length; n++) a(n)
                }
            return this.complex(l.toTensor(), e.toTensor())
        }, t.prototype.split = function (t, e, n) {
            return pn(t, e, n)
        }, t.prototype.dispose = function () {}, t.prototype.floatPrecision = function () {
            return 32
        }, t.prototype.cropAndResize = function (t, e, n, r, o, i) {
            for (var a = t.shape, s = a[0], u = a[1], c = a[2], l = a[3], h = e.shape[0], p = r[0], f = r[1], d = zi([h, p, f, l], t.dtype), v = e.dataSync(), m = n.dataSync(), g = t.dataSync(), y = t.strides, x = d.strides, w = 0; w < h; w++) {
                var b = 4 * w,
                    E = v[b],
                    C = v[b + 1],
                    _ = v[b + 2],
                    S = v[b + 3],
                    R = m[w];
                if (!(s <= R))
                    for (var N = 1 < p ? (_ - E) * (u - 1) / (p - 1) : 0, k = 1 < f ? (S - C) * (c - 1) / (f - 1) : 0, I = 0; I < p; I++) {
                        var T = 1 < p ? E * (u - 1) + I * N : .5 * (E + _) * (u - 1);
                        if (T < 0 || u - 1 < T)
                            for (var A = 0; A < f; A++)
                                for (var D = 0; D < l; D++) {
                                    var M = D + A * x[2] + I * x[1] + w * x[0];
                                    d.values[M] = i
                                } else if ("bilinear" === o) {
                                    var O = Math.floor(T),
                                        P = Math.ceil(T),
                                        F = T - O;
                                    for (A = 0; A < f; A++)
                                        if ((q = 1 < f ? C * (c - 1) + A * k : .5 * (C + S) * (c - 1)) < 0 || c - 1 < q)
                                            for (D = 0; D < l; D++) M = D + A * x[2] + I * x[1] + w * x[0], d.values[M] = i;
                                        else {
                                            var L = Math.floor(q),
                                                B = Math.ceil(q),
                                                W = q - L;
                                            for (D = 0; D < l; D++) {
                                                var z = g[M = D + L * y[2] + O * y[1] + R * y[0]],
                                                    U = g[M = D + B * y[2] + O * y[1] + R * y[0]],
                                                    G = g[M = D + L * y[2] + P * y[1] + R * y[0]],
                                                    V = z + (U - z) * W,
                                                    H = G + (g[M = D + B * y[2] + P * y[1] + R * y[0]] - G) * W;
                                                M = D + A * x[2] + I * x[1] + w * x[0], d.values[M] = V + (H - V) * F
                                            }
                                        }
                                } else
                                    for (A = 0; A < f; ++A) {
                                        var q;
                                        if ((q = 1 < f ? C * (c - 1) + A * k : .5 * (C + S) * (c - 1)) < 0 || c - 1 < q)
                                            for (D = 0; D < l; D++) M = D + A * x[2] + I * x[1] + w * x[0], d.values[M] = i;
                                        else {
                                            var j = Math.round(q),
                                                $ = Math.round(T);
                                            for (D = 0; D < l; D++) {
                                                var K = D + j * y[2] + $ * y[1] + R * y[0],
                                                    X = D + A * x[2] + I * x[1] + w * x[0];
                                                d.values[X] = g[K]
                                            }
                                        }
                                    }
                    }
            }
            return d.toTensor()
        }, t.prototype.sparseToDense = function (t, e, n, r) {
            var o = Te(0, t, n),
                i = o.sliceRank,
                a = o.numUpdates,
                s = o.sliceSize,
                u = o.strides,
                c = o.outputSize;
            return this.scatter(t, e, n, c, s, a, i, u, r, !1)
        }, t.prototype.gatherND = function (t, e) {
            var n = e.shape,
                r = n[n.length - 1],
                o = Ne(t, e),
                i = o[0],
                a = o[1],
                s = o[2],
                u = o[3];
            if (0 === a) return Ge([], i, t.dtype);
            for (var c = new lt([a, s], t.dtype), l = e.dataSync(), h = t.dataSync(), p = 0; p < a; p++) {
                for (var f = [], d = 0, v = 0; v < r; v++) {
                    var m = l[p * r + v];
                    d += m * u[v], f.push(m)
                }
                if (d < 0 || d >= t.size / s) throw new Error("Invalid indices: " + f + " does not index into " + t.shape);
                for (var g = 0; g < s; g++) c.values[p * s + g] = h[d * s + g]
            }
            return c.toTensor().reshape(i)
        }, t.prototype.scatterND = function (t, e, n) {
            var r = Te(0, t, n),
                o = r.sliceRank,
                i = r.numUpdates,
                a = r.sliceSize,
                s = r.strides,
                u = r.outputSize,
                c = Ve(0);
            return this.scatter(t, e, n, u, a, i, o, s, c, !0)
        }, t.prototype.fill = function (t, e, n) {
            var r = M(n = n || q(e), B(t));
            return r.fill(e), dt.make(t, {
                values: r
            }, n)
        }, t.prototype.onesLike = function (t) {
            if ("string" === t.dtype) throw new Error("onesLike is not supported for string tensors");
            return this.fill(t.shape, 1, t.dtype)
        }, t.prototype.zerosLike = function (t) {
            var e = M(t.dtype, B(t.shape));
            return dt.make(t.shape, {
                values: e
            }, t.dtype)
        }, t.prototype.scatter = function (t, e, n, r, o, i, a, s, u, c) {
            var l = [r / o, o],
                h = t.dataSync(),
                p = e.dataSync();
            if (0 === r) return Ge([], n, e.dtype);
            var f = new lt(l, e.dtype);
            f.values.fill(u.dataSync()[0]);
            for (var d = 0; d < i; d++) {
                for (var v = [], m = 0, g = 0; g < a; g++) {
                    var y = h[d * a + g];
                    v.push(y), m += y * s[g]
                }
                if (m < 0 || r / o <= m) throw new Error("Invalid indices: " + v + " does not index into " + n);
                for (var x = 0; x < o; x++) c ? f.values[m * o + x] += p[d * o + x] : f.values[m * o + x] = 0 === e.rank ? p[0] : p[d * o + x]
            }
            return f.toTensor().reshape(n)
        }, t
    }();
    Zt.registerBackend("cpu", function () {
        return new Vc
    }, 1);
    var Hc = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : "undefined" != typeof setImmediate ? setImmediate : function (t) {
        return t()
    };
    var qc = {
        float32: 4,
        int32: 4,
        uint16: 2,
        uint8: 1,
        bool: 1
    };

    function jc(p, t) {
        for (var f = {}, d = 0, e = function (t) {
                var e = t.name,
                    n = t.dtype,
                    r = t.shape,
                    o = B(r),
                    i = void 0;
                if ("quantization" in t) {
                    var a = t.quantization;
                    if ("uint8" !== a.dtype && "uint16" !== a.dtype) throw new Error("Weight " + t.name + " has unknown quantization dtype " + a.dtype + ". Supported quantization dtypes are: 'uint8' and 'uint16'.");
                    var s = qc[a.dtype],
                        u = p.slice(d, d + o * s),
                        c = "uint8" === a.dtype ? new Uint8Array(u) : new Uint16Array(u);
                    if ("float32" === n) i = Float32Array.from(c, function (t) {
                        return t * a.scale + a.min
                    });
                    else {
                        if ("int32" !== n) throw new Error("Unsupported dtype in weight '" + e + "': " + n);
                        i = Int32Array.from(c, function (t) {
                            return Math.round(t * a.scale + a.min)
                        })
                    }
                    d += o * s
                } else {
                    var l = qc[n];
                    if (u = p.slice(d, d + o * l), "float32" === n) i = new Float32Array(u);
                    else if ("int32" === n) i = new Int32Array(u);
                    else {
                        if ("bool" !== n) throw new Error("Unsupported dtype in weight '" + e + "': " + n);
                        i = new Uint8Array(u)
                    }
                    d += o * l
                }
                var h = void 0;
                if ("float32" === n) h = Ge(i, r, "float32");
                else if ("int32" === n) h = Ge(i, r, "int32");
                else {
                    if ("bool" !== n) throw new Error("Unsupported dtype in weight '" + e + "': " + n);
                    h = Ge(i, r, "bool")
                }
                f[e] = h
            }, n = 0, r = t; n < r.length; n++) e(r[n]);
        return f
    }
    var $c = "undefined" != typeof Buffer && ("undefined" == typeof Blob || "undefined" == typeof atob || "undefined" == typeof btoa);

    function Kc(t) {
        return $c ? Buffer.byteLength(t) : new Blob([t]).size
    }

    function Xc(t) {
        var e = 0;
        t.forEach(function (t) {
            e += t.byteLength
        });
        var n = new Uint8Array(e),
            r = 0;
        return t.forEach(function (t) {
            n.set(new Uint8Array(t), r), r += t.byteLength
        }), n.buffer
    }

    function Yc(t) {
        for (t = t.trim(); t.endsWith("/");) t = t.slice(0, t.length - 1);
        var e = t.split("/");
        return e[e.length - 1]
    }

    function Qc(t) {
        if (t.modelTopology instanceof ArrayBuffer) throw new Error("Expected JSON model topology, received ArrayBuffer.");
        return {
            dateSaved: new Date,
            modelTopologyType: "JSON",
            modelTopologyBytes: null == t.modelTopology ? 0 : Kc(JSON.stringify(t.modelTopology)),
            weightSpecsBytes: null == t.weightSpecs ? 0 : Kc(JSON.stringify(t.weightSpecs)),
            weightDataBytes: null == t.weightData ? 0 : t.weightData.byteLength
        }
    }
    var Jc = function () {
            function i() {
                this.saveRouters = [], this.loadRouters = []
            }
            return i.getInstance = function () {
                return null == i.instance && (i.instance = new i), i.instance
            }, i.registerSaveRouter = function (t) {
                i.getInstance().saveRouters.push(t)
            }, i.registerLoadRouter = function (t) {
                i.getInstance().loadRouters.push(t)
            }, i.getSaveHandlers = function (t) {
                return i.getHandlers(t, "save")
            }, i.getLoadHandlers = function (t, e) {
                return i.getHandlers(t, "load", e)
            }, i.getHandlers = function (n, t, r) {
                var o = [];
                return ("load" === t ? i.getInstance().loadRouters : i.getInstance().saveRouters).forEach(function (t) {
                    var e = t(n, r);
                    null !== e && o.push(e)
                }), o
            }, i
        }(),
        Zc = "://",
        tl = function () {
            function r() {
                this.managers = {}
            }
            return r.getInstance = function () {
                return null == r.instance && (r.instance = new r), r.instance
            }, r.registerManager = function (t, e) {
                D(null != t, function () {
                    return "scheme must not be undefined or null."
                }), t.endsWith(Zc) && (t = t.slice(0, t.indexOf(Zc))), D(0 < t.length, function () {
                    return "scheme must not be an empty string."
                });
                var n = r.getInstance();
                D(null == n.managers[t], function () {
                    return "A model store manager is already registered for scheme '" + t + "'."
                }), n.managers[t] = e
            }, r.getManager = function (t) {
                var e = this.getInstance().managers[t];
                if (null == e) throw new Error("Cannot find model manager for scheme '" + t + "'");
                return e
            }, r.getSchemes = function () {
                return Object.keys(this.getInstance().managers)
            }, r
        }();

    function el(t) {
        if (-1 === t.indexOf(Zc)) throw new Error("The url string provided does not contain a scheme. Supported schemes are: " + tl.getSchemes().join(","));
        return {
            scheme: t.split(Zc)[0],
            path: t.split(Zc)[1]
        }
    }

    function nl(l, h, p) {
        return void 0 === p && (p = !1), m(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return D(l !== h, function () {
                            return "Old path and new path are the same: '" + l + "'"
                        }), D(0 < (e = Jc.getLoadHandlers(l)).length, function () {
                            return "Copying failed because no load handler is found for source URL " + l + "."
                        }), D(e.length < 2, function () {
                            return "Copying failed because more than one (" + e.length + ") load handlers for source URL " + l + "."
                        }), n = e[0], D(0 < (r = Jc.getSaveHandlers(h)).length, function () {
                            return "Copying failed because no save handler is found for destination URL " + h + "."
                        }), D(r.length < 2, function () {
                            return "Copying failed because more than one (" + e.length + ") save handlers for destination URL " + h + "."
                        }), o = r[0], i = el(l).scheme, a = el(l).path, s = i === el(l).scheme, [4, n.load()];
                    case 1:
                        return u = t.sent(), p && s ? [4, tl.getManager(i).removeModel(a)] : [3, 3];
                    case 2:
                        t.sent(), t.label = 3;
                    case 3:
                        return [4, o.save(u)];
                    case 4:
                        return c = t.sent(), !p || s ? [3, 6] : [4, tl.getManager(i).removeModel(a)];
                    case 5:
                        t.sent(), t.label = 6;
                    case 6:
                        return [2, c.modelArtifactsInfo]
                }
            })
        })
    }
    var rl = "tensorflowjs",
        ol = "models_store",
        il = "model_info_store";

    function al() {
        if (!Zt.get("IS_BROWSER")) throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");
        var t = window,
            e = t.indexedDB || t.mozIndexedDB || t.webkitIndexedDB || t.msIndexedDB || t.shimIndexedDB;
        if (null == e) throw new Error("The current browser does not appear to support IndexedDB.");
        return e
    }

    function sl(t) {
        var e = t.result;
        e.createObjectStore(ol, {
            keyPath: "modelPath"
        }), e.createObjectStore(il, {
            keyPath: "modelPath"
        })
    }
    var ul = function () {
            function t(t) {
                if (this.indexedDB = al(), null == t || !t) throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");
                this.modelPath = t
            }
            return t.prototype.save = function (e) {
                return m(this, void 0, void 0, function () {
                    return R(this, function (t) {
                        if (e.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                        return [2, this.databaseAction(this.modelPath, e)]
                    })
                })
            }, t.prototype.load = function () {
                return m(this, void 0, void 0, function () {
                    return R(this, function (t) {
                        return [2, this.databaseAction(this.modelPath)]
                    })
                })
            }, t.prototype.databaseAction = function (t, h) {
                var p = this;
                return new Promise(function (u, c) {
                    var l = p.indexedDB.open(rl, 1);
                    l.onupgradeneeded = function () {
                        return sl(l)
                    }, l.onsuccess = function () {
                        var r = l.result;
                        if (null == h) {
                            var t = r.transaction(ol, "readonly"),
                                e = t.objectStore(ol).get(p.modelPath);
                            e.onsuccess = function () {
                                if (null == e.result) return r.close(), c(new Error("Cannot find model with path '" + p.modelPath + "' in IndexedDB."));
                                u(e.result.modelArtifacts)
                            }, e.onerror = function (t) {
                                return r.close(), c(e.error)
                            }, t.oncomplete = function () {
                                return r.close()
                            }
                        } else {
                            var o, i = Qc(h),
                                a = r.transaction(il, "readwrite"),
                                s = a.objectStore(il),
                                n = s.put({
                                    modelPath: p.modelPath,
                                    modelArtifactsInfo: i
                                });
                            n.onsuccess = function () {
                                var n = (o = r.transaction(ol, "readwrite")).objectStore(ol).put({
                                    modelPath: p.modelPath,
                                    modelArtifacts: h,
                                    modelArtifactsInfo: i
                                });
                                n.onsuccess = function () {
                                    return u({
                                        modelArtifactsInfo: i
                                    })
                                }, n.onerror = function (t) {
                                    var e = (s = a.objectStore(il)).delete(p.modelPath);
                                    e.onsuccess = function () {
                                        return r.close(), c(n.error)
                                    }, e.onerror = function (t) {
                                        return r.close(), c(n.error)
                                    }
                                }
                            }, n.onerror = function (t) {
                                return r.close(), c(n.error)
                            }, a.oncomplete = function () {
                                null == o ? r.close() : o.oncomplete = function () {
                                    return r.close()
                                }
                            }
                        }
                    }, l.onerror = function (t) {
                        return c(l.error)
                    }
                })
            }, t.URL_SCHEME = "indexeddb://", t
        }(),
        cl = function (t) {
            return Zt.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(ul.URL_SCHEME) ? (e = t.slice(ul.URL_SCHEME.length), new ul(e)) : null;
            var e
        };
    Jc.registerSaveRouter(cl), Jc.registerLoadRouter(cl);
    var ll = function () {
        function t() {
            this.indexedDB = al()
        }
        return t.prototype.listModels = function () {
            return m(this, void 0, void 0, function () {
                var e = this;
                return R(this, function (t) {
                    return [2, new Promise(function (i, n) {
                        var r = e.indexedDB.open(rl, 1);
                        r.onupgradeneeded = function () {
                            return sl(r)
                        }, r.onsuccess = function () {
                            var e = r.result,
                                t = e.transaction(il, "readonly"),
                                o = t.objectStore(il).getAll();
                            o.onsuccess = function () {
                                for (var t = {}, e = 0, n = o.result; e < n.length; e++) {
                                    var r = n[e];
                                    t[r.modelPath] = r.modelArtifactsInfo
                                }
                                i(t)
                            }, o.onerror = function (t) {
                                return e.close(), n(o.error)
                            }, t.oncomplete = function () {
                                return e.close()
                            }
                        }, r.onerror = function (t) {
                            return n(r.error)
                        }
                    })]
                })
            })
        }, t.prototype.removeModel = function (u) {
            return m(this, void 0, void 0, function () {
                var n = this;
                return R(this, function (t) {
                    return u = (e = u).startsWith(ul.URL_SCHEME) ? e.slice(ul.URL_SCHEME.length) : e, [2, new Promise(function (a, s) {
                        var e = n.indexedDB.open(rl, 1);
                        e.onupgradeneeded = function () {
                            return sl(e)
                        }, e.onsuccess = function () {
                            var n, r = e.result,
                                t = r.transaction(il, "readwrite"),
                                o = t.objectStore(il),
                                i = o.get(u);
                            i.onsuccess = function () {
                                if (null == i.result) return r.close(), s(new Error("Cannot find model with path '" + u + "' in IndexedDB."));
                                var t = o.delete(u),
                                    e = function () {
                                        var t = (n = r.transaction(ol, "readwrite")).objectStore(ol).delete(u);
                                        t.onsuccess = function () {
                                            return a(i.result.modelArtifactsInfo)
                                        }, t.onerror = function (t) {
                                            return s(i.error)
                                        }
                                    };
                                t.onsuccess = e, t.onerror = function (t) {
                                    return e(), r.close(), s(i.error)
                                }
                            }, i.onerror = function (t) {
                                return r.close(), s(i.error)
                            }, t.oncomplete = function () {
                                null == n ? r.close() : n.oncomplete = function () {
                                    return r.close()
                                }
                            }
                        }, e.onerror = function (t) {
                            return s(e.error)
                        }
                    })];
                    var e
                })
            })
        }, t
    }();
    if (Zt.get("IS_BROWSER")) try {
        tl.registerManager(ul.URL_SCHEME, new ll)
    } catch (t) {}
    var hl = "/",
        pl = "tensorflowjs_models",
        fl = "info",
        dl = "model_topology",
        vl = "weight_specs",
        ml = "weight_data",
        gl = "model_metadata";

    function yl(t) {
        return {
            info: [pl, t, fl].join(hl),
            topology: [pl, t, dl].join(hl),
            weightSpecs: [pl, t, vl].join(hl),
            weightData: [pl, t, ml].join(hl),
            modelMetadata: [pl, t, gl].join(hl)
        }
    }

    function xl(t) {
        var e = t.split(hl);
        if (e.length < 3) throw new Error("Invalid key format: " + t);
        return e.slice(1, e.length - 1).join(hl)
    }
    var wl = function () {
            function t(t) {
                if (!Zt.get("IS_BROWSER") || void 0 === window.localStorage) throw new Error("The current environment does not support local storage.");
                if (this.LS = window.localStorage, null == t || !t) throw new Error("For local storage, modelPath must not be null, undefined or empty.");
                this.modelPath = t, this.keys = yl(this.modelPath)
            }
            return t.prototype.save = function (i) {
                return m(this, void 0, void 0, function () {
                    var n, r, o;
                    return R(this, function (t) {
                        if (i.modelTopology instanceof ArrayBuffer) throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");
                        n = JSON.stringify(i.modelTopology), r = JSON.stringify(i.weightSpecs), o = Qc(i);
                        try {
                            return this.LS.setItem(this.keys.info, JSON.stringify(o)), this.LS.setItem(this.keys.topology, n), this.LS.setItem(this.keys.weightSpecs, r), this.LS.setItem(this.keys.weightData, (e = i.weightData, $c ? Buffer.from(e).toString("base64") : btoa(String.fromCharCode.apply(null, new Uint8Array(e))))), this.LS.setItem(this.keys.modelMetadata, JSON.stringify({
                                format: i.format,
                                generatedBy: i.generatedBy,
                                convertedBy: i.convertedBy
                            })), [2, {
                                modelArtifactsInfo: o
                            }]
                        } catch (t) {
                            throw this.LS.removeItem(this.keys.info), this.LS.removeItem(this.keys.topology), this.LS.removeItem(this.keys.weightSpecs), this.LS.removeItem(this.keys.weightData), this.LS.removeItem(this.keys.modelMetadata), new Error("Failed to save model '" + this.modelPath + "' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=" + o.modelTopologyBytes + ", weightSpecsBytes=" + o.weightSpecsBytes + ", weightDataBytes=" + o.weightDataBytes + ".")
                        }
                        var e;
                        return [2]
                    })
                })
            }, t.prototype.load = function () {
                return m(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, s;
                    return R(this, function (t) {
                        if (null == (e = JSON.parse(this.LS.getItem(this.keys.info)))) throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                        if ("JSON" !== e.modelTopologyType) throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");
                        if (n = {}, null == (r = JSON.parse(this.LS.getItem(this.keys.topology)))) throw new Error("In local storage, the topology of model '" + this.modelPath + "' is missing.");
                        if (n.modelTopology = r, null == (o = JSON.parse(this.LS.getItem(this.keys.weightSpecs)))) throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' are missing.");
                        if (n.weightSpecs = o, null != (i = this.LS.getItem(this.keys.modelMetadata)) && (a = JSON.parse(i), n.format = a.format, n.generatedBy = a.generatedBy, n.convertedBy = a.convertedBy), null == (s = this.LS.getItem(this.keys.weightData))) throw new Error("In local storage, the binary weight values of model '" + this.modelPath + "' are missing.");
                        return n.weightData = function (t) {
                            if ($c) {
                                var e = Buffer.from(t, "base64");
                                return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
                            }
                            for (var n = atob(t), r = new Uint8Array(n.length), o = 0; o < n.length; ++o) r.set([n.charCodeAt(o)], o);
                            return r.buffer
                        }(s), [2, n]
                    })
                })
            }, t.URL_SCHEME = "localstorage://", t
        }(),
        bl = function (t) {
            return Zt.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(wl.URL_SCHEME) ? (e = t.slice(wl.URL_SCHEME.length), new wl(e)) : null;
            var e
        };
    Jc.registerSaveRouter(bl), Jc.registerLoadRouter(bl);
    var El = function () {
        function t() {
            D(Zt.get("IS_BROWSER"), function () {
                return "Current environment is not a web browser"
            }), D(void 0 !== window.localStorage, function () {
                return "Current browser does not appear to support localStorage"
            }), this.LS = window.localStorage
        }
        return t.prototype.listModels = function () {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a;
                return R(this, function (t) {
                    for (e = {}, n = pl + hl, r = hl + fl, o = 0; o < this.LS.length; ++o)(i = this.LS.key(o)).startsWith(n) && i.endsWith(r) && (a = xl(i), e[a] = JSON.parse(this.LS.getItem(i)));
                    return [2, e]
                })
            })
        }, t.prototype.removeModel = function (o) {
            return m(this, void 0, void 0, function () {
                var n, r;
                return R(this, function (t) {
                    if (o = (e = o).startsWith(wl.URL_SCHEME) ? e.slice(wl.URL_SCHEME.length) : e, n = yl(o), null == this.LS.getItem(n.info)) throw new Error("Cannot find model at path '" + o + "'");
                    var e;
                    return r = JSON.parse(this.LS.getItem(n.info)), this.LS.removeItem(n.info), this.LS.removeItem(n.topology), this.LS.removeItem(n.weightSpecs), this.LS.removeItem(n.weightData), [2, r]
                })
            })
        }, t
    }();
    if (Zt.get("IS_BROWSER")) try {
        tl.registerManager(wl.URL_SCHEME, new El)
    } catch (t) {}
    var Cl = function () {
            function e(t) {
                if (!Zt.get("IS_BROWSER")) throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
                t.startsWith(e.URL_SCHEME) && (t = t.slice(e.URL_SCHEME.length)), null != t && 0 !== t.length || (t = "model"), this.modelTopologyFileName = t + ".json", this.weightDataFileName = t + ".weights.bin"
            }
            return e.prototype.save = function (s) {
                return m(this, void 0, void 0, function () {
                    var e, n, r, o, i, a;
                    return R(this, function (t) {
                        if (e = window.URL.createObjectURL(new Blob([s.weightData], {
                                type: "application/octet-stream"
                            })), s.modelTopology instanceof ArrayBuffer) throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
                        return n = [{
                            paths: ["./" + this.weightDataFileName],
                            weights: s.weightSpecs
                        }], r = {
                            modelTopology: s.modelTopology,
                            format: s.format,
                            generatedBy: s.generatedBy,
                            convertedBy: s.convertedBy,
                            weightsManifest: n
                        }, o = window.URL.createObjectURL(new Blob([JSON.stringify(r)], {
                            type: "application/json"
                        })), (i = null == this.jsonAnchor ? document.createElement("a") : this.jsonAnchor).download = this.modelTopologyFileName, i.href = o, i.click(), null != s.weightData && ((a = null == this.weightDataAnchor ? document.createElement("a") : this.weightDataAnchor).download = this.weightDataFileName, a.href = e, a.click()), [2, {
                            modelArtifactsInfo: Qc(s)
                        }]
                    })
                })
            }, e.URL_SCHEME = "downloads://", e
        }(),
        _l = function () {
            function t(t) {
                if (null == t || t.length < 1) throw new Error("When calling browserFiles, at least 1 file is required, but received " + t);
                this.files = t
            }
            return t.prototype.load = function () {
                return m(this, void 0, void 0, function () {
                    var r, h, p = this;
                    return R(this, function (t) {
                        return r = this.files[0], h = this.files.slice(1), [2, new Promise(function (c, l) {
                            var t = new FileReader;
                            t.onload = function (t) {
                                var e = JSON.parse(t.target.result),
                                    o = e.modelTopology;
                                if (null != o) {
                                    0 === h.length && c({
                                        modelTopology: o
                                    });
                                    var n = e.weightsManifest;
                                    if (null != n) {
                                        var i;
                                        try {
                                            i = p.checkManifestAndWeightFiles(n, h)
                                        } catch (t) {
                                            return void l(t)
                                        }
                                        var a = [],
                                            s = [],
                                            u = [];
                                        n.forEach(function (t) {
                                            t.paths.forEach(function (t) {
                                                s.push(t), u.push(null)
                                            }), a.push.apply(a, t.weights)
                                        }), n.forEach(function (t) {
                                            t.paths.forEach(function (r) {
                                                var t = new FileReader;
                                                t.onload = function (t) {
                                                    var e = t.target.result,
                                                        n = s.indexOf(r);
                                                    u[n] = e, -1 === u.indexOf(null) && c({
                                                        modelTopology: o,
                                                        weightSpecs: a,
                                                        weightData: Xc(u)
                                                    })
                                                }, t.onerror = function (t) {
                                                    return l("Failed to weights data from file of path '" + r + "'.")
                                                }, t.readAsArrayBuffer(i[r])
                                            })
                                        })
                                    } else l(new Error("weightManifest field is missing from file " + r.name))
                                } else l(new Error("modelTopology field is missing from file " + r.name))
                            }, t.onerror = function (t) {
                                return l("Failed to read model topology and weights manifest JSON from file '" + r.name + "'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")
                            }, t.readAsText(r)
                        })]
                    })
                })
            }, t.prototype.checkManifestAndWeightFiles = function (t, n) {
                for (var r = [], o = n.map(function (t) {
                        return Yc(t.name)
                    }), i = {}, e = 0, a = t; e < a.length; e++) a[e].paths.forEach(function (t) {
                    var e = Yc(t);
                    if (-1 !== r.indexOf(e)) throw new Error("Duplicate file basename found in weights manifest: '" + e + "'");
                    if (r.push(e), -1 === o.indexOf(e)) throw new Error("Weight file with basename '" + e + "' is not provided.");
                    i[t] = n[o.indexOf(e)]
                });
                if (r.length !== n.length) throw new Error("Mismatch in the number of files in weights manifest (" + r.length + ") and the number of weight files provided (" + n.length + ").");
                return i
            }, t
        }();

    function Sl(n, r, o, i) {
        var t, e, a;
        D(null != (a = n) && Array.isArray(a) && 0 < a.length, function () {
            return "promises must be a none empty array"
        }), t = o = null == o ? 0 : o, e = i = null == i ? 1 : i, D(0 <= t && t <= 1, function () {
            return "Progress fraction must be in range [0, 1], but got startFraction " + t
        }), D(0 <= e && e <= 1, function () {
            return "Progress fraction must be in range [0, 1], but got endFraction " + e
        }), D(t <= e, function () {
            return "startFraction must be no more than endFraction, but got startFraction " + t + " and endFraction " + e
        });
        var s = 0;
        return Promise.all(n.map(function (t) {
            return t.then(function (t) {
                var e = o + ++s / n.length * (i - o);
                return r(e), t
            }), t
        }))
    }

    function Rl(l, h) {
        return m(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c;
            return R(this, function (t) {
                switch (t.label) {
                    case 0:
                        return null == h && (h = {}), e = null == h.fetchFunc ? fetch : h.fetchFunc, n = l.map(function (t) {
                            return e(t, h.requestInit)
                        }), r = 0, o = .5, null != h.onProgress ? [3, 2] : [4, Promise.all(n)];
                    case 1:
                        return i = t.sent(), [3, 4];
                    case 2:
                        return [4, Sl(n, h.onProgress, r, o)];
                    case 3:
                        i = t.sent(), t.label = 4;
                    case 4:
                        return a = i.map(function (t) {
                            return t.arrayBuffer()
                        }), s = .5, u = 1, null != h.onProgress ? [3, 6] : [4, Promise.all(a)];
                    case 5:
                        return c = t.sent(), [3, 8];
                    case 6:
                        return [4, Sl(a, h.onProgress, s, u)];
                    case 7:
                        c = t.sent(), t.label = 8;
                    case 8:
                        return [2, c]
                }
            })
        })
    }

    function Nl(i) {
        var t = this;
        return function (f, o, d) {
            return void 0 === o && (o = ""), m(t, void 0, void 0, function () {
                var a, c, s, u, e, n, r, l, h, p;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (a = f.map(function () {
                                    return !1
                                }), c = {}, s = null != d ? d.map(function () {
                                    return !1
                                }) : [], u = [], f.forEach(function (t, o) {
                                    var i = 0;
                                    t.weights.forEach(function (n) {
                                        var t = "quantization" in n ? n.quantization.dtype : n.dtype,
                                            e = qc[t] * B(n.shape),
                                            r = function () {
                                                a[o] = !0, null == c[o] && (c[o] = []), c[o].push({
                                                    manifestEntry: n,
                                                    groupOffset: i,
                                                    sizeBytes: e
                                                })
                                            };
                                        null != d ? d.forEach(function (t, e) {
                                            t === n.name && (r(), s[e] = !0)
                                        }) : r(), u.push(n.name), i += e
                                    })
                                }), !s.every(function (t) {
                                    return t
                                })) throw e = d.filter(function (t, e) {
                                return !s[e]
                            }), new Error("Could not find weights in manifest with names: " + e.join(", ") + ". \nManifest JSON has weights with names: " + u.join(", ") + ".");
                            return n = a.reduce(function (t, e, n) {
                                return e && t.push(n), t
                            }, []), r = [], n.forEach(function (t) {
                                f[t].paths.forEach(function (t) {
                                    var e = o + (o.endsWith("/") ? "" : "/") + t;
                                    r.push(e)
                                })
                            }), [4, i(r)];
                        case 1:
                            return l = t.sent(), h = {}, p = 0, n.forEach(function (t) {
                                for (var e = f[t].paths.length, n = 0, r = 0; r < e; r++) n += l[p + r].byteLength;
                                for (var o = new ArrayBuffer(n), i = new Uint8Array(o), a = 0, s = 0; s < e; s++) {
                                    var u = new Uint8Array(l[p + s]);
                                    i.set(u, a), a += u.byteLength
                                }
                                c[t].forEach(function (t) {
                                    var e = jc(o.slice(t.groupOffset, t.groupOffset + t.sizeBytes), [t.manifestEntry]);
                                    for (var n in e) h[n] = e[n]
                                }), p += e
                            }), [2, h]
                    }
                })
            })
        }
    }
    Jc.registerSaveRouter(function (t) {
        return Zt.get("IS_BROWSER") && !Array.isArray(t) && t.startsWith(Cl.URL_SCHEME) ? (void 0 === (e = t.slice(Cl.URL_SCHEME.length)) && (e = "model"), new Cl(e)) : null;
        var e
    });
    var kl = function () {
        function t(t, n) {
            if (this.DEFAULT_METHOD = "POST", null == n && (n = {}), this.weightPathPrefix = n.weightPathPrefix, this.onProgress = n.onProgress, null == n.fetchFunc) {
                var e = Zt.global.fetch;
                if (void 0 === e) throw new Error("browserHTTPRequest is not supported outside the web browser without a fetch polyfill.");
                n.fetchFunc = e.bind(Zt.global)
            } else D("function" == typeof n.fetchFunc, function () {
                return "Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"
            });
            if (this.fetchFunc = function (e, t) {
                    return n.fetchFunc(e, t).catch(function (t) {
                        throw new Error("Request for " + e + " failed due to error: " + t)
                    })
                }, D(null != t && 0 < t.length, function () {
                    return "URL path for browserHTTPRequest must not be null, undefined or empty."
                }), Array.isArray(t) && D(2 === t.length, function () {
                    return "URL paths for browserHTTPRequest must have a length of 2, (actual length is " + t.length + ")."
                }), this.path = t, null != n.requestInit && null != n.requestInit.body) throw new Error("requestInit is expected to have no pre-existing body, but has one.");
            this.requestInit = n.requestInit || {}
        }
        return t.prototype.save = function (i) {
            return m(this, void 0, void 0, function () {
                var e, n, r, o;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (i.modelTopology instanceof ArrayBuffer) throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");
                            return (e = Object.assign({
                                method: this.DEFAULT_METHOD
                            }, this.requestInit)).body = new FormData, n = [{
                                paths: ["./model.weights.bin"],
                                weights: i.weightSpecs
                            }], r = {
                                modelTopology: i.modelTopology,
                                format: i.format,
                                generatedBy: i.generatedBy,
                                convertedBy: i.convertedBy,
                                weightsManifest: n
                            }, e.body.append("model.json", new Blob([JSON.stringify(r)], {
                                type: "application/json"
                            }), "model.json"), null != i.weightData && e.body.append("model.weights.bin", new Blob([i.weightData], {
                                type: "application/octet-stream"
                            }), "model.weights.bin"), [4, this.getFetchFunc()(this.path, e)];
                        case 1:
                            if ((o = t.sent()).ok) return [2, {
                                modelArtifactsInfo: Qc(i),
                                responses: [o]
                            }];
                            throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " + o.status + ".")
                    }
                })
            })
        }, t.prototype.load = function () {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s, u;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.getFetchFunc()(this.path, this.requestInit)];
                        case 1:
                            if (!(e = t.sent()).ok) throw new Error("Request to " + this.path + " failed with status code " + e.status + ". Please verify this URL points to the model JSON of the model to load.");
                            t.label = 2;
                        case 2:
                            return t.trys.push([2, 4, , 5]), [4, e.json()];
                        case 3:
                            return n = t.sent(), [3, 5];
                        case 4:
                            throw t.sent(), r = "Failed to parse model JSON of response from " + this.path + ".", this.path.endsWith(".pb") ? r += " Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository." : r += " Please make sure the server is serving valid JSON for this request.", new Error(r);
                        case 5:
                            if (o = n.modelTopology, i = n.weightsManifest, null == o && null == i) throw new Error("The JSON from HTTP path " + this.path + " contains neither model topology or manifest for weights.");
                            return null == i ? [3, 7] : [4, this.loadWeights(i)];
                        case 6:
                            u = t.sent(), a = u[0], s = u[1], t.label = 7;
                        case 7:
                            return [2, {
                                modelTopology: o,
                                weightSpecs: a,
                                weightData: s
                            }]
                    }
                })
            })
        }, t.prototype.loadWeights = function (v) {
            return m(this, void 0, void 0, function () {
                var o, i, a, s, u, c, l, h, p, f, d;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (o = Array.isArray(this.path) ? this.path[1] : this.path, r = n = void 0, n = (e = o).lastIndexOf("/"), r = e.lastIndexOf("?"), i = [e.substring(0, n) + "/", n < r ? e.substring(r) : ""], a = i[0], s = i[1], u = this.weightPathPrefix || a, c = [], l = 0, h = v; l < h.length; l++) p = h[l], c.push.apply(c, p.weights);
                            return f = [], v.forEach(function (t) {
                                t.paths.forEach(function (t) {
                                    f.push(u + t + s)
                                })
                            }), [4, Rl(f, {
                                requestInit: this.requestInit,
                                fetchFunc: this.getFetchFunc(),
                                onProgress: this.onProgress
                            })];
                        case 1:
                            return d = t.sent(), [2, [c, Xc(d)]]
                    }
                    var e, n, r
                })
            })
        }, t.prototype.getFetchFunc = function () {
            return this.fetchFunc
        }, t.URL_SCHEME_REGEX = /^https?:\/\//, t
    }();

    function Il(t) {
        return null != t.match(kl.URL_SCHEME_REGEX)
    }
    var Tl = function (t, e) {
        return "undefined" == typeof fetch ? null : (Array.isArray(t) ? t.every(function (t) {
            return Il(t)
        }) : Il(t)) ? Al(t, {
            onProgress: e
        }) : null
    };

    function Al(t, e) {
        return new kl(t, e)
    }
    Jc.registerSaveRouter(Tl), Jc.registerLoadRouter(Tl);
    var Dl = function () {
            function t(t, e, n) {
                this.modelTopology = t, this.weightSpecs = e, this.weightData = n
            }
            return t.prototype.load = function () {
                return m(this, void 0, void 0, function () {
                    var e;
                    return R(this, function (t) {
                        return e = {}, null != this.modelTopology && (e = n({
                            modelTopology: this.modelTopology
                        }, e)), null != this.weightSpecs && 0 < this.weightSpecs.length && (e = n({
                            weightSpecs: this.weightSpecs
                        }, e)), null != this.weightData && 0 < this.weightData.byteLength && (e = n({
                            weightData: this.weightData
                        }, e)), [2, e]
                    })
                })
            }, t
        }(),
        Ml = function () {
            function t(t) {
                this.saveHandler = t
            }
            return t.prototype.save = function (e) {
                return m(this, void 0, void 0, function () {
                    return R(this, function (t) {
                        return [2, this.saveHandler(e)]
                    })
                })
            }, t
        }();
    var Ol = Object.freeze({
        browserFiles: function (t) {
            return new _l(t)
        },
        browserHTTPRequest: Al,
        concatenateArrayBuffers: Xc,
        decodeWeights: jc,
        encodeWeights: function (i) {
            return m(this, void 0, void 0, function () {
                var e, n, r, o;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            for (r in e = [], n = [], i) {
                                if ("float32" !== (o = i[r]).dtype && "int32" !== o.dtype && "bool" !== o.dtype) throw new Error("Unsupported dtype in weight '" + r + "': " + o.dtype);
                                e.push({
                                    name: r,
                                    shape: o.shape,
                                    dtype: o.dtype
                                }), n.push(o.data())
                            }
                            return [4, Promise.all(n)];
                        case 1:
                            return [2, {
                                data: function (t) {
                                    if (null === t) throw new Error("Invalid input value: " + JSON.stringify(t));
                                    var e = 0,
                                        n = [];
                                    t.forEach(function (t) {
                                        if (e += t.byteLength, n.push(t.byteLength === t.buffer.byteLength ? t : new t.constructor(t)), !(t instanceof Float32Array || t instanceof Int32Array || t instanceof Uint8Array)) throw new Error("Unsupported TypedArray subtype: " + t.constructor.name)
                                    });
                                    var r = new Uint8Array(e),
                                        o = 0;
                                    return n.forEach(function (t) {
                                        r.set(new Uint8Array(t.buffer), o), o += t.byteLength
                                    }), r.buffer
                                }(t.sent()),
                                specs: e
                            }]
                    }
                })
            })
        },
        fromMemory: function (t, e, n) {
            return new Dl(t, e, n)
        },
        getLoadHandlers: function (t, e) {
            return Jc.getLoadHandlers(t)
        },
        getModelArtifactsInfoForJSON: Qc,
        getSaveHandlers: function (t) {
            return Jc.getSaveHandlers(t)
        },
        isHTTPScheme: Il,
        loadWeights: function (e, n, r, o) {
            return void 0 === n && (n = ""), m(this, void 0, void 0, function () {
                return R(this, function (t) {
                    return [2, Nl(function (t) {
                        return Rl(t, {
                            requestInit: o
                        })
                    })(e, n, r)]
                })
            })
        },
        registerLoadRouter: function (t) {
            return Jc.registerLoadRouter(t)
        },
        registerSaveRouter: function (t) {
            return Jc.registerSaveRouter(t)
        },
        weightsLoaderFactory: Nl,
        withSaveHandler: function (t) {
            return new Ml(t)
        },
        copyModel: function (e, n) {
            return m(this, void 0, void 0, function () {
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, nl(e, n, !1)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        },
        listModels: function () {
            return m(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            e = tl.getSchemes(), n = {}, r = 0, o = e, t.label = 1;
                        case 1:
                            return r < o.length ? (i = o[r], [4, tl.getManager(i).listModels()]) : [3, 4];
                        case 2:
                            for (s in a = t.sent()) n[i + Zc + s] = a[s];
                            t.label = 3;
                        case 3:
                            return r++, [3, 1];
                        case 4:
                            return [2, n]
                    }
                })
            })
        },
        moveModel: function (e, n) {
            return m(this, void 0, void 0, function () {
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, nl(e, n, !0)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        },
        removeModel: function (n) {
            return m(this, void 0, void 0, function () {
                var e;
                return R(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = el(n), [4, tl.getManager(e.scheme).removeModel(e.path)];
                        case 1:
                            return [2, t.sent()]
                    }
                })
            })
        }
    });
    var Pl = Fe({
            confusionMatrix_: function (t, e, n) {
                var r = re(t, "labels", "confusionMatrix"),
                    o = re(e, "predictions", "confusionMatrix");
                D(null == n || 0 < n && Number.isInteger(n), function () {
                    return "If provided, numClasses must be a positive integer, but got " + n
                }), D(1 === r.rank, function () {
                    return "Expected the rank of labels to be 1, but got " + r.rank
                }), D(1 === o.rank, function () {
                    return "Expected the rank of predictions to be 1, but got " + o.rank
                }), D(r.shape[0] === o.shape[0], function () {
                    return "Mismatch in the number of examples: " + r.shape[0] + " vs. " + o.shape[0] + ". Labels and predictions should have the same number of elements."
                }), D(0 < n && Number.isInteger(n), function () {
                    return "numClasses is required to be a positive integer, but got " + n
                });
                var i = Yi(r.asType("int32"), n),
                    a = Yi(o.asType("int32"), n);
                return i.transpose().matMul(a).asType("int32")
            }
        }),
        Fl = Object.freeze({
            confusionMatrix: Pl
        });
    var Ll = Fe({
            fromPixels_: function (t, e) {
                if (void 0 === e && (e = 3), 4 < e) throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");
                return Zt.engine.fromPixels(t, e)
            }
        }),
        Bl = Object.freeze({
            toPixels: function (b, E) {
                return m(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, w;
                    return R(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (e = re(b, "img", "toPixels"), b instanceof dt || (e = e.toInt()), 2 !== e.rank && 3 !== e.rank) throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + e.rank + ".");
                                if (n = e.shape.slice(0, 2), r = n[0], o = n[1], 4 < (i = 2 === e.rank ? 1 : e.shape[2]) || 2 === i) throw new Error("toPixels only supports depth of size 1, 3 or 4 but got " + i);
                                return a = e.min(), s = e.max(), [4, a.data()];
                            case 1:
                                return u = t.sent()[0], [4, s.data()];
                            case 2:
                                if (c = t.sent()[0], a.dispose(), s.dispose(), "float32" === e.dtype) {
                                    if (u < 0 || 1 < c) throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range [" + u + " - " + c + "].")
                                } else {
                                    if ("int32" !== e.dtype) throw new Error("Unsupported type for toPixels: " + e.dtype + ". Please use float32 or int32 tensors.");
                                    if (u < 0 || 255 < c) throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range [" + u + " - " + c + "].")
                                }
                                return [4, e.data()];
                            case 3:
                                for (l = t.sent(), h = "float32" === e.dtype ? 255 : 1, p = new Uint8ClampedArray(o * r * 4), f = 0; f < r * o; ++f) g = m = v = d = void 0, 1 === i ? (d = l[f] * h, v = l[f] * h, m = l[f] * h, g = 255) : 3 === i ? (d = l[3 * f] * h, v = l[3 * f + 1] * h, m = l[3 * f + 2] * h, g = 255) : 4 === i && (d = l[4 * f] * h, v = l[4 * f + 1] * h, m = l[4 * f + 2] * h, g = l[4 * f + 3] * h), p[0 + (y = 4 * f)] = Math.round(d), p[y + 1] = Math.round(v), p[y + 2] = Math.round(m), p[y + 3] = Math.round(g);
                                return null != E && (E.width = o, E.height = r, x = E.getContext("2d"), w = new ImageData(p, o, r), x.putImageData(w, 0, 0)), e !== b && e.dispose(), [2, p]
                        }
                    })
                })
            },
            fromPixels: Ll
        }),
        Wl = function () {
            function t() {}
            return t.prototype.getClassName = function () {
                return this.constructor.className
            }, t.fromConfig = function (t, e) {
                return new t(e)
            }, t
        }(),
        zl = function () {
            function e() {
                this.classNameMap = {}
            }
            return e.getMap = function () {
                return null == e.instance && (e.instance = new e), e.instance
            }, e.register = function (t) {
                e.getMap().classNameMap[t.className] = [t, t.fromConfig]
            }, e
        }();

    function Ul(t) {
        D(null != t.className, function () {
            return "Class being registered does not have the static className property defined."
        }), D("string" == typeof t.className, function () {
            return "className is required to be a string, but got type " + typeof t.className
        }), D(0 < t.className.length, function () {
            return "Class being registered has an empty-string as its className, which is disallowed."
        }), zl.register(t)
    }
    var Gl = Object.freeze({
        Serializable: Wl,
        SerializationMap: zl,
        registerClass: Ul
    });

    function Vl(t, e, n) {
        return null == n && (n = Zt.get("TEST_EPSILON")), Hl(t, "number" == typeof e || "boolean" == typeof e ? [e] : e, function (t, e) {
            return ql(t, Number(e), n)
        })
    }

    function Hl(t, e, n) {
        if (t instanceof dt || e instanceof dt) {
            if (t instanceof dt && e instanceof dt) {
                if (t.dtype !== e.dtype) throw new Error("Arrays are of different type actual: " + t.dtype + " vs expected: " + e.dtype + ".");
                if (!E(t.shape, e.shape)) throw new Error("Arrays are of different shape actual: " + t.shape + " vs expected: " + e.shape + ".")
            }
        } else {
            var r = t.constructor.name,
                o = e.constructor.name;
            if (r !== o) throw new Error("Arrays are of different type actual: " + r + " vs expected: " + o)
        }
        var i, a;
        if (i = t instanceof dt ? t.dataSync() : t, a = e instanceof dt ? e.dataSync() : e, i.length !== a.length) throw new Error("Arrays have different lengths actual: " + i.length + " vs expected: " + a.length + ".\nActual:   " + i + ".\nExpected: " + a + ".");
        for (var s = 0; s < a.length; ++s) {
            var u = i[s],
                c = a[s];
            if (!n(u, c)) throw new Error("Arrays differ: actual[" + s + "] = " + u + ", expected[" + s + "] = " + c + ".\nActual:   " + i + ".\nExpected: " + a + ".")
        }
    }

    function ql(t, e, n) {
        return !(!isNaN(t) || !isNaN(e)) || !(isNaN(t) || isNaN(e) || Math.abs(t - e) > n)
    }
    var jl = Object.freeze({
            WEBGL_ENVS: {
                HAS_WEBGL: !0
            },
            PACKED_ENVS: {
                WEBGL_PACK: !0
            },
            NODE_ENVS: {
                IS_NODE: !0
            },
            CHROME_ENVS: {
                IS_CHROME: !0
            },
            BROWSER_ENVS: {
                IS_BROWSER: !0
            },
            CPU_ENVS: {
                HAS_WEBGL: !1
            },
            ALL_ENVS: {},
            expectArraysClose: Vl,
            expectPromiseToFail: function (t, e) {
                t().then(function () {
                    return e.fail()
                }, function () {
                    return e()
                })
            },
            expectArraysEqual: function (t, e) {
                var n = "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? [e] : e;
                return t instanceof dt && "string" === t.dtype || e instanceof dt && "string" === e.dtype || Array.isArray(t) && V(t[0]) || Array.isArray(e) && V(e[0]) ? Hl(t, n, function (t, e) {
                    return t == e
                }) : Vl(t, e, 0)
            },
            expectNumbersClose: function (t, e, n) {
                if (null == n && (n = Zt.get("TEST_EPSILON")), !ql(t, e, n)) throw new Error("Numbers differ: actual === " + t + ", expected === " + e)
            },
            expectValuesInRange: function (t, e, n) {
                var r;
                r = t instanceof dt ? t.dataSync() : t;
                for (var o = 0; o < r.length; o++)
                    if (r[o] < e || r[o] > n) throw new Error("Value out of range:" + r[o] + " low: " + e + ", high: " + n)
            },
            expectArrayBuffersEqual: function (t, e) {
                expect(new Float32Array(t)).toEqual(new Float32Array(e))
            }
        }),
        $l = Object.freeze({
            gpgpu_util: Do,
            webgl_util: co,
            MathBackendWebGL: va,
            GPGPUContext: Mo
        }),
        Kl = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return s(e, t), e.prototype.minimize = function (t, e, n) {
                void 0 === e && (e = !1);
                var r = this.computeGradients(t, n),
                    o = r.value,
                    i = r.grads;
                return this.applyGradients(i), Object.keys(i).forEach(function (t) {
                    return i[t].dispose()
                }), e ? o : (o.dispose(), null)
            }, e.prototype.computeGradients = function (t, e) {
                return ie(t, e)
            }, e.prototype.dispose = function () {}, e
        }(Wl);
    Object.defineProperty(Kl, Symbol.hasInstance, {
        value: function (t) {
            return null != t.minimize && null != t.computeGradients && null != t.applyGradients
        }
    });
    var Xl = function (o) {
        function t(t, e, n) {
            void 0 === n && (n = null);
            var r = o.call(this) || this;
            return r.learningRate = t, r.rho = e, r.epsilon = n, r.accumulatedGrads = {}, r.accumulatedUpdates = {}, r.c = ce(Ve(-t)), r.rhoScalar = ce(Ve(e)), r.oneMinusRho = ce(Ve(1 - e)), null === n && (n = Zt.get("EPSILON")), r.epsilonScalar = ce(Ve(n)), r
        }
        return s(t, o), t.prototype.applyGradients = function (t) {
            var c = this,
                e = function (o) {
                    var i = Zt.engine.registeredVariables[o];
                    null == n.accumulatedGrads[o] && ue(function () {
                        c.accumulatedGrads[o] = nn(i).variable(!1)
                    }), null == n.accumulatedUpdates[o] && ue(function () {
                        c.accumulatedUpdates[o] = nn(i).variable(!1)
                    });
                    var a = t[o],
                        s = n.accumulatedGrads[o],
                        u = n.accumulatedUpdates[o];
                    ue(function () {
                        var t = c.rhoScalar.mul(s).add(c.oneMinusRho.mul(a.square())),
                            e = u.add(c.epsilonScalar).sqrt().div(s.add(c.epsilonScalar).sqrt()).mul(a),
                            n = c.rhoScalar.mul(u).add(c.oneMinusRho.mul(e.square()));
                        c.accumulatedGrads[o].assign(t), c.accumulatedUpdates[o].assign(n);
                        var r = c.c.mul(e).add(i);
                        i.assign(r)
                    })
                },
                n = this;
            for (var r in t) e(r)
        }, t.prototype.dispose = function () {
            var e = this;
            this.c.dispose(), this.epsilonScalar.dispose(), this.rhoScalar.dispose(), this.oneMinusRho.dispose(), null != this.accumulatedUpdates && (Object.keys(this.accumulatedUpdates).forEach(function (t) {
                return e.accumulatedUpdates[t].dispose()
            }), Object.keys(this.accumulatedGrads).forEach(function (t) {
                return e.accumulatedGrads[t].dispose()
            }))
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                rho: this.rho,
                epsilon: this.epsilon
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.rho, e.epsilon)
        }, t.className = "AdadeltaOptimizer", t
    }(Kl);
    Ul(Xl);
    var Yl = function (r) {
        function t(t, e) {
            void 0 === e && (e = .1);
            var n = r.call(this) || this;
            return n.learningRate = t, n.initialAccumulatorValue = e, n.accumulatedGrads = {}, n.c = ce(Ve(-t)), n.epsilon = ce(Ve(Zt.get("EPSILON"))), n
        }
        return s(t, r), t.prototype.applyGradients = function (t) {
            var a = this,
                e = function (n) {
                    var r = Zt.engine.registeredVariables[n];
                    null == s.accumulatedGrads[n] && ue(function () {
                        a.accumulatedGrads[n] = Je(r.shape, a.initialAccumulatorValue).variable(!1)
                    });
                    var o = t[n],
                        i = s.accumulatedGrads[n];
                    ue(function () {
                        var t = i.add(o.square());
                        a.accumulatedGrads[n].assign(t);
                        var e = a.c.mul(o.div(t.add(a.epsilon).sqrt())).add(r);
                        r.assign(e)
                    })
                },
                s = this;
            for (var n in t) e(n)
        }, t.prototype.dispose = function () {
            var e = this;
            this.epsilon.dispose(), this.c.dispose(), null != this.accumulatedGrads && Object.keys(this.accumulatedGrads).forEach(function (t) {
                return e.accumulatedGrads[t].dispose()
            })
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                initialAccumulatorValue: this.initialAccumulatorValue
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.initialAccumulatorValue)
        }, t.className = "AdagradOptimizer", t
    }(Kl);
    Ul(Yl);
    var Ql = function (i) {
        function t(t, e, n, r) {
            void 0 === r && (r = null);
            var o = i.call(this) || this;
            return o.learningRate = t, o.beta1 = e, o.beta2 = n, o.epsilon = r, o.accumulatedFirstMoment = {}, o.accumulatedSecondMoment = {}, o.c = ce(Ve(-t)), o.beta1Scalar = ce(Ve(e)), o.beta2Scalar = ce(Ve(n)), ue(function () {
                o.accBeta1 = Ve(e).variable(), o.accBeta2 = Ve(n).variable()
            }), o.oneMinusBeta1 = ce(Ve(1 - e)), o.oneMinusBeta2 = ce(Ve(1 - n)), o.one = ce(Ve(1)), null === r && (r = Zt.get("EPSILON")), o.epsScalar = ce(Ve(r)), o
        }
        return s(t, i), t.prototype.applyGradients = function (f) {
            var d = this;
            ue(function () {
                var t = d.one.sub(d.accBeta1),
                    e = d.one.sub(d.accBeta2);
                for (var n in f) {
                    var r = Zt.engine.registeredVariables[n];
                    if (null == d.accumulatedFirstMoment[n]) {
                        var o = !1;
                        d.accumulatedFirstMoment[n] = nn(r).variable(o)
                    }
                    null == d.accumulatedSecondMoment[n] && (o = !1, d.accumulatedSecondMoment[n] = nn(r).variable(o));
                    var i = f[n],
                        a = d.accumulatedFirstMoment[n],
                        s = d.accumulatedSecondMoment[n],
                        u = d.beta1Scalar.mul(a).add(d.oneMinusBeta1.mul(i)),
                        c = d.beta2Scalar.mul(s).add(d.oneMinusBeta2.mul(i.square())),
                        l = u.div(t),
                        h = c.div(e);
                    d.accumulatedFirstMoment[n].assign(u), d.accumulatedSecondMoment[n].assign(c);
                    var p = d.c.mul(l.div(d.epsScalar.add(h.sqrt()))).add(r);
                    r.assign(p)
                }
                d.accBeta1.assign(d.accBeta1.mul(d.beta1Scalar)), d.accBeta2.assign(d.accBeta2.mul(d.beta2Scalar))
            })
        }, t.prototype.dispose = function () {
            var e = this;
            this.c.dispose(), this.epsScalar.dispose(), this.beta1Scalar.dispose(), this.beta2Scalar.dispose(), this.accBeta1.dispose(), this.accBeta2.dispose(), this.oneMinusBeta1.dispose(), this.oneMinusBeta2.dispose(), this.one.dispose(), null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function (t) {
                return e.accumulatedFirstMoment[t].dispose()
            }), null != this.accumulatedSecondMoment && Object.keys(this.accumulatedSecondMoment).forEach(function (t) {
                return e.accumulatedSecondMoment[t].dispose()
            })
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon)
        }, t.className = "AdamOptimizer", t
    }(Kl);
    Ul(Ql);
    var Jl = function (a) {
        function t(t, e, n, r, o) {
            void 0 === r && (r = null), void 0 === o && (o = 0);
            var i = a.call(this) || this;
            return i.learningRate = t, i.beta1 = e, i.beta2 = n, i.epsilon = r, i.decay = o, i.accumulatedFirstMoment = {}, i.accumulatedWeightedInfNorm = {}, i.c = ce(Ve(-t)), i.beta1Scalar = ce(Ve(e)), i.beta2Scalar = ce(Ve(n)), i.decayScalar = ce(Ve(o)), ue(function () {
                i.iteration = Ve(0).variable(), i.accBeta1 = Ve(e).variable()
            }), i.oneMinusBeta1 = ce(Ve(1 - e)), i.one = ce(Ve(1)), null === r && (r = Zt.get("EPSILON")), i.epsScalar = ce(Ve(r)), i
        }
        return s(t, a), t.prototype.applyGradients = function (f) {
            var d = this;
            ue(function () {
                var t = d.one.sub(d.accBeta1),
                    e = d.c.div(d.one.add(d.decayScalar.mul(d.iteration)));
                for (var n in f) {
                    var r = Zt.engine.registeredVariables[n];
                    if (null == d.accumulatedFirstMoment[n]) {
                        var o = !1;
                        d.accumulatedFirstMoment[n] = nn(r).variable(o)
                    }
                    null == d.accumulatedWeightedInfNorm[n] && (o = !1, d.accumulatedWeightedInfNorm[n] = nn(r).variable(o));
                    var i = f[n],
                        a = d.accumulatedFirstMoment[n],
                        s = d.accumulatedWeightedInfNorm[n],
                        u = d.beta1Scalar.mul(a).add(d.oneMinusBeta1.mul(i)),
                        c = d.beta2Scalar.mul(s),
                        l = i.abs(),
                        h = c.maximum(l);
                    d.accumulatedFirstMoment[n].assign(u), d.accumulatedWeightedInfNorm[n].assign(h);
                    var p = e.div(t).mul(u.div(d.epsScalar.add(h))).add(r);
                    r.assign(p)
                }
                d.iteration.assign(d.iteration.add(d.one)), d.accBeta1.assign(d.accBeta1.mul(d.beta1Scalar))
            })
        }, t.prototype.dispose = function () {
            var e = this;
            this.c.dispose(), this.epsScalar.dispose(), this.accBeta1.dispose(), this.beta1Scalar.dispose(), this.beta2Scalar.dispose(), this.oneMinusBeta1.dispose(), this.decayScalar.dispose(), this.iteration.dispose(), this.one.dispose(), null != this.accumulatedFirstMoment && Object.keys(this.accumulatedFirstMoment).forEach(function (t) {
                return e.accumulatedFirstMoment[t].dispose()
            }), null != this.accumulatedWeightedInfNorm && Object.keys(this.accumulatedWeightedInfNorm).forEach(function (t) {
                return e.accumulatedWeightedInfNorm[t].dispose()
            })
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                beta1: this.beta1,
                beta2: this.beta2,
                epsilon: this.epsilon,
                decay: this.decay
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.beta1, e.beta2, e.epsilon, e.decay)
        }, t.className = "AdamaxOptimizer", t
    }(Kl);
    Ul(Jl);
    var Zl = function (n) {
        function t(t) {
            var e = n.call(this) || this;
            return e.learningRate = t, e.setLearningRate(t), e
        }
        return s(t, n), t.prototype.applyGradients = function (r) {
            var o = this;
            Object.keys(r).forEach(function (t) {
                var e = r[t],
                    n = Zt.engine.registeredVariables[t];
                ue(function () {
                    var t = o.c.mul(e).add(n);
                    n.assign(t)
                })
            })
        }, t.prototype.setLearningRate = function (t) {
            this.learningRate = t, null != this.c && this.c.dispose(), this.c = ce(Ve(-t))
        }, t.prototype.dispose = function () {
            this.c.dispose()
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate)
        }, t.className = "SGDOptimizer", t
    }(Kl);
    Ul(Zl);
    var th = function (o) {
        function t(t, e, n) {
            void 0 === n && (n = !1);
            var r = o.call(this, t) || this;
            return r.learningRate = t, r.momentum = e, r.useNesterov = n, r.m = Ve(r.momentum), r.accumulations = {}, r
        }
        return s(t, o), t.prototype.applyGradients = function (t) {
            var a = this,
                e = function (n) {
                    var r = Zt.engine.registeredVariables[n];
                    null == s.accumulations[n] && ue(function () {
                        a.accumulations[n] = nn(r).variable(!1)
                    });
                    var o = s.accumulations[n],
                        i = t[n];
                    ue(function () {
                        var t, e = a.m.mul(o).add(i);
                        t = a.useNesterov ? a.c.mul(i.add(e.mul(a.m))).add(r) : a.c.mul(e).add(r), a.accumulations[n].assign(e), r.assign(t)
                    })
                },
                s = this;
            for (var n in t) e(n)
        }, t.prototype.dispose = function () {
            if (o.prototype.dispose.call(this), this.m.dispose(), null != this.accumulations)
                for (var t in this.accumulations) this.accumulations[t].dispose()
        }, t.prototype.setMomentum = function (t) {
            this.momentum = t
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                momentum: this.momentum,
                useNesterov: this.useNesterov
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.momentum, e.useNesterov)
        }, t.className = "MomentumOptimizer", t
    }(Zl);
    Ul(th);
    var eh = function (a) {
        function t(t, e, n, r, o) {
            void 0 === e && (e = .9), void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === o && (o = !1);
            var i = a.call(this) || this;
            return i.learningRate = t, i.decay = e, i.momentum = n, i.epsilon = r, i.accumulatedMeanSquares = {}, i.accumulatedMeanGrads = {}, i.accumulatedMoments = {}, i.c = ce(Ve(t)), i.decayScalar = ce(Ve(e)), i.momentumScalar = ce(Ve(n)), i.oneMinusDecay = ce(Ve(1 - e)), i.centered = o, null === r && (r = Zt.get("EPSILON")), i.epsilonScalar = ce(Ve(r)), i
        }
        return s(t, a), t.prototype.applyGradients = function (t) {
            var h = this,
                e = function (i) {
                    var a = Zt.engine.registeredVariables[i];
                    null == n.accumulatedMeanSquares[i] && ue(function () {
                        h.accumulatedMeanSquares[i] = nn(a).variable(!1)
                    }), null == n.accumulatedMeanGrads[i] && n.centered && ue(function () {
                        h.accumulatedMeanGrads[i] = nn(a).variable(!1)
                    }), null == n.accumulatedMoments[i] && ue(function () {
                        h.accumulatedMoments[i] = nn(a).variable(!1)
                    });
                    var s = n.accumulatedMeanSquares[i],
                        u = n.accumulatedMeanGrads[i],
                        c = n.accumulatedMoments[i],
                        l = t[i];
                    ue(function () {
                        var t = h.decayScalar.mul(s).add(h.oneMinusDecay.mul(l.square()));
                        if (h.centered) {
                            var e = h.decayScalar.mul(u).add(h.oneMinusDecay.mul(l)),
                                n = h.momentumScalar.mul(c).add(h.c.mul(l).div(t.sub(e.square().add(h.epsilonScalar)).sqrt()));
                            h.accumulatedMeanSquares[i].assign(t), h.accumulatedMeanGrads[i].assign(e), h.accumulatedMoments[i].assign(n);
                            var r = a.sub(n);
                            a.assign(r)
                        } else {
                            var o = h.decayScalar.mul(s).add(h.oneMinusDecay.mul(l.square()));
                            n = h.momentumScalar.mul(c).add(h.c.mul(l).div(o.add(h.epsilonScalar).sqrt())), h.accumulatedMeanSquares[i].assign(o), h.accumulatedMoments[i].assign(n), r = a.sub(n), a.assign(r)
                        }
                    })
                },
                n = this;
            for (var r in t) e(r)
        }, t.prototype.dispose = function () {
            var e = this;
            this.c.dispose(), this.epsilonScalar.dispose(), this.decayScalar.dispose(), this.momentumScalar.dispose(), this.oneMinusDecay.dispose(), null != this.accumulatedMeanSquares && Object.keys(this.accumulatedMeanSquares).forEach(function (t) {
                return e.accumulatedMeanSquares[t].dispose()
            }), null != this.accumulatedMeanGrads && this.centered && Object.keys(this.accumulatedMeanGrads).forEach(function (t) {
                return e.accumulatedMeanGrads[t].dispose()
            }), null != this.accumulatedMoments && Object.keys(this.accumulatedMoments).forEach(function (t) {
                return e.accumulatedMoments[t].dispose()
            })
        }, t.prototype.getConfig = function () {
            return {
                learningRate: this.learningRate,
                decay: this.decay,
                momentum: this.momentum,
                epsilon: this.epsilon,
                centered: this.centered
            }
        }, t.fromConfig = function (t, e) {
            return new t(e.learningRate, e.decay, e.momentum, e.epsilon, e.centered)
        }, t.className = "RMSPropOptimizer", t
    }(Kl);
    Ul(eh);
    var nh = function () {
            function t() {}
            return t.sgd = function (t) {
                return new Zl(t)
            }, t.momentum = function (t, e, n) {
                return void 0 === n && (n = !1), new th(t, e, n)
            }, t.rmsprop = function (t, e, n, r, o) {
                return void 0 === e && (e = .9), void 0 === n && (n = 0), void 0 === r && (r = null), void 0 === o && (o = !1), new eh(t, e, n, r, o)
            }, t.adam = function (t, e, n, r) {
                return void 0 === t && (t = .001), void 0 === e && (e = .9), void 0 === n && (n = .999), void 0 === r && (r = null), new Ql(t, e, n, r)
            }, t.adadelta = function (t, e, n) {
                return void 0 === t && (t = .001), void 0 === e && (e = .95), void 0 === n && (n = null), new Xl(t, e, n)
            }, t.adamax = function (t, e, n, r, o) {
                return void 0 === t && (t = .002), void 0 === e && (e = .9), void 0 === n && (n = .999), void 0 === r && (r = null), void 0 === o && (o = 0), new Jl(t, e, n, r, o)
            }, t.adagrad = function (t, e) {
                return void 0 === e && (e = .1), new Yl(t, e)
            }, t
        }(),
        rh = {
            sgd: nh.sgd,
            momentum: nh.momentum,
            adadelta: nh.adadelta,
            adagrad: nh.adagrad,
            rmsprop: nh.rmsprop,
            adamax: nh.adamax,
            adam: nh.adam
        },
        oh = jt.setBackend,
        ih = jt.getBackend,
        ah = jt.disposeVariables,
        sh = jt.memory;
    pt = Gc;
    var uh = Object.freeze({
            setBackend: oh,
            getBackend: ih,
            disposeVariables: ah,
            memory: sh,
            version_core: "1.0.3",
            nextFrame: function () {
                return new Promise(function (t) {
                    return Hc(function () {
                        return t()
                    })
                })
            },
            enableProdMode: Kt,
            enableDebugMode: Xt,
            disableDeprecationWarnings: Yt,
            deprecationWarn: Qt,
            browser: Bl,
            environment: te,
            io: Ol,
            math: Fl,
            serialization: Gl,
            test_util: jl,
            util: t,
            webgl: $l,
            tensor_util: Pt,
            AdadeltaOptimizer: Xl,
            AdagradOptimizer: Yl,
            AdamOptimizer: Ql,
            AdamaxOptimizer: Jl,
            MomentumOptimizer: th,
            Optimizer: Kl,
            RMSPropOptimizer: eh,
            SGDOptimizer: Zl,
            Tensor: dt,
            TensorBuffer: lt,
            variable: Rt,
            Variable: vt,
            get Rank() {
                return mt
            },
            get Reduction() {
                return mc
            },
            ENV: Zt,
            Environment: jt,
            KernelBackend: on,
            DataStorage: rn,
            image: Wc,
            linalg: Dc,
            losses: kc,
            spectral: dc,
            fused: Uc,
            op: Fe,
            batchNormalization2d: os,
            batchNormalization3d: is,
            batchNormalization4d: as,
            batchNormalization: ss,
            batchNorm: us,
            batchNorm2d: cs,
            batchNorm3d: ls,
            batchNorm4d: hs,
            complex: We,
            real: ze,
            imag: Ue,
            concat: _i,
            concat1d: Si,
            concat2d: Ri,
            concat3d: Ni,
            concat4d: ki,
            split: Ii,
            conv1d: _s,
            conv2d: Ss,
            conv3d: Rs,
            conv2dDerFilter: Ns,
            depthwiseConv2d: ks,
            separableConv2d: Is,
            conv2dTranspose: Ts,
            matMul: As,
            dot: Ds,
            outerProduct: Ms,
            reverse: Os,
            reverse1d: Ps,
            reverse2d: Fs,
            reverse3d: Ls,
            reverse4d: Bs,
            maxPool: Us,
            avgPool: Gs,
            pool: Vs,
            slice: Hs,
            slice1d: qs,
            slice2d: js,
            slice3d: $s,
            slice4d: Ks,
            abs: ga,
            acos: ya,
            acosh: xa,
            asin: wa,
            asinh: ba,
            atan: Ea,
            atanh: Ca,
            ceil: _a,
            clipByValue: Sa,
            cos: Ra,
            cosh: Na,
            erf: ka,
            exp: Ia,
            expm1: Ta,
            floor: Aa,
            log: Da,
            log1p: Ma,
            logSigmoid: Oa,
            neg: Pa,
            reciprocal: Fa,
            round: La,
            rsqrt: Ba,
            sigmoid: Wa,
            sign: za,
            isNaN: Ua,
            isInf: Ga,
            isFinite: Va,
            sin: Ha,
            sinh: qa,
            softplus: ja,
            sqrt: $a,
            square: Ka,
            step: Xa,
            tan: Ya,
            tanh: Qa,
            all: Ys,
            any: Qs,
            argMax: Js,
            argMin: Zs,
            logSumExp: tu,
            max: eu,
            mean: nu,
            min: ru,
            moments: ou,
            sum: iu,
            prod: au,
            equal: su,
            equalStrict: uu,
            greater: cu,
            greaterEqual: lu,
            greaterEqualStrict: hu,
            greaterStrict: pu,
            less: fu,
            lessEqual: du,
            lessEqualStrict: vu,
            lessStrict: mu,
            notEqual: gu,
            notEqualStrict: yu,
            add: xu,
            addN: wu,
            addStrict: bu,
            atan2: Eu,
            div: Cu,
            divStrict: _u,
            floorDiv: Su,
            maximum: Ru,
            maximumStrict: Nu,
            minimum: ku,
            minimumStrict: Iu,
            mod: Tu,
            modStrict: Au,
            mul: Du,
            mulStrict: Mu,
            pow: Ou,
            powStrict: Pu,
            squaredDifference: Fu,
            squaredDifferenceStrict: Lu,
            sub: Bu,
            subStrict: Wu,
            elu: ju,
            leakyRelu: $u,
            prelu: Ku,
            relu: Xu,
            selu: Yu,
            logicalAnd: zu,
            logicalNot: Uu,
            logicalOr: Gu,
            logicalXor: Vu,
            where: Hu,
            whereAsync: qu,
            buffer: zi,
            print: Ui,
            batchToSpaceND: Gi,
            cast: Vi,
            clone: Hi,
            cumsum: qi,
            depthToSpace: ji,
            expandDims: $i,
            eye: Ki,
            multinomial: Xi,
            oneHot: Yi,
            pad: Qi,
            pad1d: Ji,
            pad2d: Zi,
            pad3d: ta,
            pad4d: ea,
            rand: na,
            randomNormal: ra,
            randomUniform: oa,
            reshape: ia,
            spaceToBatchND: aa,
            squeeze: sa,
            stack: ua,
            tile: ca,
            truncatedNormal: la,
            unstack: ha,
            setdiff1dAsync: pa,
            fill: Je,
            linspace: Ze,
            ones: Ye,
            range: tn,
            scalar: Ve,
            tensor: Ge,
            tensor1d: He,
            tensor2d: qe,
            tensor3d: je,
            tensor4d: $e,
            tensor5d: Ke,
            tensor6d: Xe,
            zeros: Qe,
            onesLike: en,
            zerosLike: nn,
            transpose: Qu,
            softmax: Le,
            logSoftmax: Be,
            localResponseNormalization: Ju,
            norm: Zu,
            gather: nc,
            unsortedSegmentSum: rc,
            basicLSTMCell: oc,
            multiRNNCell: ic,
            movingAverage: ac,
            stridedSlice: sc,
            topk: uc,
            scatterND: cc,
            fft: lc,
            ifft: hc,
            rfft: pc,
            irfft: fc,
            sparseToDense: vc,
            gatherND: yc,
            train: rh,
            tidy: ue,
            keep: ce,
            dispose: le,
            time: he,
            profile: pe,
            customGrad: ae,
            grad: function (i) {
                return D(j(i), function () {
                        return "The f passed in grad(f) must be a function"
                    }),
                    function (t, e) {
                        var r = re(t, "x", "tf.grad", null),
                            o = null != e ? re(e, "dy", "tf.grad") : null;
                        return Zt.engine.tidy(function () {
                            var t = Zt.engine.gradients(function () {
                                    return i(r)
                                }, [r], o),
                                e = t.value,
                                n = t.grads;
                            return null != o && g(e.shape, o.shape, "The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"), se(n), n[0]
                        })
                    }
            },
            grads: function (i) {
                return D(j(i), function () {
                        return "The f passed in grads(f) must be a function"
                    }),
                    function (t, e) {
                        D(Array.isArray(t), function () {
                            return "The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"
                        });
                        var r = oe(t, "args", "tf.grads", null),
                            o = null != e ? re(e, "dy", "tf.grads") : null;
                        return Zt.engine.tidy(function () {
                            var t = Zt.engine.gradients(function () {
                                    return i.apply(void 0, r)
                                }, r, o),
                                e = t.value,
                                n = t.grads;
                            return null != o && g(e.shape, o.shape, "The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), se(n), n
                        })
                    }
            },
            valueAndGrad: function (i) {
                return D(j(i), function () {
                        return "The f passed in valueAndGrad(f) must be a function"
                    }),
                    function (t, e) {
                        D(t instanceof dt, function () {
                            return "The x passed in valueAndGrad(f)(x) must be a tensor"
                        }), D(null == e || e instanceof dt, function () {
                            return "The dy passed in valueAndGrad(f)(x, dy) must be a tensor"
                        });
                        var n = Zt.engine.gradients(function () {
                                return i(t)
                            }, [t], e),
                            r = n.grads,
                            o = n.value;
                        return se(r), {
                            grad: r[0],
                            value: o
                        }
                    }
            },
            valueAndGrads: function (r) {
                return D(j(r), function () {
                        return "The f passed in valueAndGrads(f) must be a function"
                    }),
                    function (t, e) {
                        D(Array.isArray(t) && t.every(function (t) {
                            return t instanceof dt
                        }), function () {
                            return "The args passed in valueAndGrads(f)(args) must be array of tensors"
                        }), D(null == e || e instanceof dt, function () {
                            return "The dy passed in valueAndGrads(f)(args, dy) must be a tensor"
                        });
                        var n = Zt.engine.gradients(function () {
                            return r.apply(void 0, t)
                        }, t, e);
                        return null != e && g(n.value.shape, e.shape, "The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"), se(n.grads), n
                    }
            },
            variableGrads: ie
        }),
        ch = function () {
            function t(t, e) {
                if (!Eh(t) || !Eh(e)) throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({
                    width: t,
                    height: e
                }));
                this._width = t, this._height = e
            }
            return Object.defineProperty(t.prototype, "width", {
                get: function () {
                    return this._width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "height", {
                get: function () {
                    return this._height
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.reverse = function () {
                return new t(1 / this.width, 1 / this.height)
            }, t
        }(),
        lh = function () {
            function e(t, e) {
                this._x = t, this._y = e
            }
            return Object.defineProperty(e.prototype, "x", {
                get: function () {
                    return this._x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "y", {
                get: function () {
                    return this._y
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.add = function (t) {
                return new e(this.x + t.x, this.y + t.y)
            }, e.prototype.sub = function (t) {
                return new e(this.x - t.x, this.y - t.y)
            }, e.prototype.mul = function (t) {
                return new e(this.x * t.x, this.y * t.y)
            }, e.prototype.div = function (t) {
                return new e(this.x / t.x, this.y / t.y)
            }, e.prototype.abs = function () {
                return new e(Math.abs(this.x), Math.abs(this.y))
            }, e.prototype.magnitude = function () {
                return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
            }, e.prototype.floor = function () {
                return new e(Math.floor(this.x), Math.floor(this.y))
            }, e
        }();

    function hh(t, e) {
        return t instanceof dt && t.shape.length === e
    }

    function ph(t) {
        return hh(t, 2)
    }

    function fh(t) {
        return hh(t, 3)
    }

    function dh(t) {
        return hh(t, 4)
    }

    function vh(t) {
        return t % 1 != 0
    }

    function mh(t) {
        return t % 2 == 0
    }

    function gh(t, e) {
        void 0 === e && (e = 2);
        var n = Math.pow(10, e);
        return Math.floor(t * n) / n
    }

    function yh(t) {
        return t && t.width && t.height
    }

    function xh(t, e) {
        var n = t.width,
            r = t.height,
            o = e / Math.max(r, n);
        return new ch(Math.round(n * o), Math.round(r * o))
    }

    function wh(t) {
        return t.reduce(function (t, e) {
            return t.add(e)
        }, new lh(0, 0)).div(new lh(t.length, t.length))
    }

    function bh(t, n, r) {
        return Array(t).fill(0).map(function (t, e) {
            return n + e * r
        })
    }

    function Eh(t) {
        return !!t && t !== 1 / 0 && t !== -1 / 0 && !isNaN(t) || 0 === t
    }

    function Ch(t) {
        return Eh(t) && 0 <= t && t <= 1
    }
    var _h, Sh = function () {
            function l(t, e) {
                void 0 === e && (e = !0);
                var n = t || {},
                    r = [n.left, n.top, n.right, n.bottom].every(Eh),
                    o = [n.x, n.y, n.width, n.height].every(Eh);
                if (!o && !r) throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(n));
                var i = o ? [n.x, n.y, n.width, n.height] : [n.left, n.top, n.right - n.left, n.bottom - n.top],
                    a = i[0],
                    s = i[1],
                    u = i[2],
                    c = i[3];
                l.assertIsValidBox({
                    x: a,
                    y: s,
                    width: u,
                    height: c
                }, "Box.constructor", e), this._x = a, this._y = s, this._width = u, this._height = c
            }
            return l.isRect = function (t) {
                return !!t && [t.x, t.y, t.width, t.height].every(Eh)
            }, l.assertIsValidBox = function (t, e, n) {
                if (void 0 === n && (n = !1), !l.isRect(t)) throw new Error(e + " - invalid box: " + JSON.stringify(t) + ", expected object with properties x, y, width, height");
                if (!n && (t.width < 0 || t.height < 0)) throw new Error(e + " - width (" + t.width + ") and height (" + t.height + ") must be positive numbers")
            }, Object.defineProperty(l.prototype, "x", {
                get: function () {
                    return this._x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "y", {
                get: function () {
                    return this._y
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "width", {
                get: function () {
                    return this._width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "height", {
                get: function () {
                    return this._height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "left", {
                get: function () {
                    return this.x
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "top", {
                get: function () {
                    return this.y
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "right", {
                get: function () {
                    return this.x + this.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "bottom", {
                get: function () {
                    return this.y + this.height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "area", {
                get: function () {
                    return this.width * this.height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "topLeft", {
                get: function () {
                    return new lh(this.left, this.top)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "topRight", {
                get: function () {
                    return new lh(this.right, this.top)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "bottomLeft", {
                get: function () {
                    return new lh(this.left, this.bottom)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(l.prototype, "bottomRight", {
                get: function () {
                    return new lh(this.right, this.bottom)
                },
                enumerable: !0,
                configurable: !0
            }), l.prototype.round = function () {
                var t = [this.x, this.y, this.width, this.height].map(function (t) {
                    return Math.round(t)
                });
                return new l({
                    x: t[0],
                    y: t[1],
                    width: t[2],
                    height: t[3]
                })
            }, l.prototype.floor = function () {
                var t = [this.x, this.y, this.width, this.height].map(function (t) {
                    return Math.floor(t)
                });
                return new l({
                    x: t[0],
                    y: t[1],
                    width: t[2],
                    height: t[3]
                })
            }, l.prototype.toSquare = function () {
                var t = this.x,
                    e = this.y,
                    n = this.width,
                    r = this.height,
                    o = Math.abs(n - r);
                return n < r && (t -= o / 2, n += o), r < n && (e -= o / 2, r += o), new l({
                    x: t,
                    y: e,
                    width: n,
                    height: r
                })
            }, l.prototype.rescale = function (t) {
                var e = yh(t) ? t.width : t,
                    n = yh(t) ? t.height : t;
                return new l({
                    x: this.x * e,
                    y: this.y * n,
                    width: this.width * e,
                    height: this.height * n
                })
            }, l.prototype.pad = function (t, e) {
                var n = [this.x - t / 2, this.y - e / 2, this.width + t, this.height + e];
                return new l({
                    x: n[0],
                    y: n[1],
                    width: n[2],
                    height: n[3]
                })
            }, l.prototype.clipAtImageBorders = function (t, e) {
                var n = this.x,
                    r = this.y,
                    o = this.right,
                    i = this.bottom,
                    a = Math.max(n, 0),
                    s = Math.max(r, 0),
                    u = o - a,
                    c = i - s;
                return new l({
                    x: a,
                    y: s,
                    width: Math.min(u, t - a),
                    height: Math.min(c, e - s)
                }).floor()
            }, l.prototype.shift = function (t, e) {
                var n = this.width,
                    r = this.height;
                return new l({
                    x: this.x + t,
                    y: this.y + e,
                    width: n,
                    height: r
                })
            }, l.prototype.padAtBorders = function (t, e) {
                var n = this.width + 1,
                    r = this.height + 1,
                    o = n,
                    i = r,
                    a = this.left,
                    s = this.top,
                    u = this.right,
                    c = this.bottom;
                return e < u && (o = -u + e + n, u = e), t < c && (i = -c + t + r, c = t), a < 1 && (i = 2 - a, a = 1), s < 1 && (i = 2 - s, s = 1), {
                    dy: 1,
                    edy: i,
                    dx: 1,
                    edx: o,
                    y: s,
                    ey: c,
                    x: a,
                    ex: u,
                    w: n,
                    h: r
                }
            }, l.prototype.calibrate = function (t) {
                return new l({
                    left: this.left + t.left * this.width,
                    top: this.top + t.top * this.height,
                    right: this.right + t.right * this.width,
                    bottom: this.bottom + t.bottom * this.height
                }).toSquare().round()
            }, l
        }(),
        Rh = function (i) {
            function t(t, e, n, r, o) {
                return void 0 === o && (o = !1), i.call(this, {
                    left: t,
                    top: e,
                    right: n,
                    bottom: r
                }, o) || this
            }
            return a(t, i), t
        }(Sh),
        Nh = function (r) {
            function t(t, e) {
                var n = r.call(this, t) || this;
                return n._label = e, n
            }
            return a(t, r), t.assertIsValidLabeledBox = function (t, e) {
                if (Sh.assertIsValidBox(t, e), !Eh(t.label)) throw new Error(e + " - expected property label (" + t.label + ") to be a number")
            }, Object.defineProperty(t.prototype, "label", {
                get: function () {
                    return this._label
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(Sh),
        kh = function () {
            function n(t, e, n, r, o) {
                this._imageDims = new ch(o.width, o.height), this._score = t, this._classScore = e, this._className = n, this._box = new Sh(r).rescale(this._imageDims)
            }
            return Object.defineProperty(n.prototype, "score", {
                get: function () {
                    return this._score
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "classScore", {
                get: function () {
                    return this._classScore
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "className", {
                get: function () {
                    return this._className
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "box", {
                get: function () {
                    return this._box
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "imageDims", {
                get: function () {
                    return this._imageDims
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "imageWidth", {
                get: function () {
                    return this.imageDims.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "imageHeight", {
                get: function () {
                    return this.imageDims.height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "relativeBox", {
                get: function () {
                    return new Sh(this._box).rescale(this.imageDims.reverse())
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.forSize = function (t, e) {
                return new n(this.score, this.classScore, this.className, this.relativeBox, {
                    width: t,
                    height: e
                })
            }, n
        }(),
        Ih = function (i) {
            function t(t, e, n, r) {
                var o = i.call(this, t, e) || this;
                return o._score = n, o._classScore = r, o
            }
            return a(t, i), t.assertIsValidPredictedBox = function (t, e) {
                if (Nh.assertIsValidLabeledBox(t, e), !Ch(t.score) || !Ch(t.classScore)) throw new Error(e + " - expected properties score (" + t.score + ") and (" + t.classScore + ") to be a number between [0, 1]")
            }, Object.defineProperty(t.prototype, "score", {
                get: function () {
                    return this._score
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "classScore", {
                get: function () {
                    return this._classScore
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(Nh),
        Th = function (i) {
            function t(t, e, n, r, o) {
                return void 0 === o && (o = !1), i.call(this, {
                    x: t,
                    y: e,
                    width: n,
                    height: r
                }, o) || this
            }
            return a(t, i), t
        }(Sh);

    function Ah() {
        var t = window.fetch || function () {
            throw new Error("fetch - missing fetch implementation for browser environment")
        };
        return {
            Canvas: HTMLCanvasElement,
            CanvasRenderingContext2D: CanvasRenderingContext2D,
            Image: HTMLImageElement,
            ImageData: ImageData,
            Video: HTMLVideoElement,
            createCanvasElement: function () {
                return document.createElement("canvas")
            },
            createImageElement: function () {
                return document.createElement("img")
            },
            fetch: t,
            readFile: function () {
                throw new Error("readFile - filesystem not available for browser environment")
            }
        }
    }

    function Dh(e) {
        var n = "";
        if (!e) try {
            e = require("fs")
        } catch (t) {
            n = t.toString()
        }
        return {
            readFile: e ? function (t) {
                return new Promise(function (n, r) {
                    e.readFile(t, function (t, e) {
                        return t ? r(t) : n(e)
                    })
                })
            } : function () {
                throw new Error("readFile - failed to require fs in nodejs environment with error: " + n)
            }
        }
    }

    function Mh() {
        var t = global.Canvas || global.HTMLCanvasElement,
            e = global.Image || global.HTMLImageElement,
            n = global.fetch || function () {
                throw new Error("fetch - missing fetch implementation for nodejs environment")
            },
            r = Dh();
        return O({
            Canvas: t || function () {},
            CanvasRenderingContext2D: global.CanvasRenderingContext2D || function () {},
            Image: e || function () {},
            ImageData: global.ImageData || function () {},
            Video: global.HTMLVideoElement || function () {},
            createCanvasElement: function () {
                if (t) return new t;
                throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")
            },
            createImageElement: function () {
                if (e) return new e;
                throw new Error("createImageElement - missing Image implementation for nodejs environment")
            },
            fetch: n
        }, r)
    }

    function Oh() {
        return "object" == typeof window && "undefined" != typeof document && "undefined" != typeof HTMLImageElement && "undefined" != typeof HTMLCanvasElement && "undefined" != typeof HTMLVideoElement && "undefined" != typeof ImageData && "undefined" != typeof CanvasRenderingContext2D
    }

    function Ph() {
        return "object" == typeof global && "function" == typeof require && "undefined" != typeof module && "undefined" != typeof process && !!process.version
    }

    function Fh(t) {
        _h = t
    }

    function Lh() {
        Oh() && Fh(Ah()), Ph() && Fh(Mh())
    }
    var Bh, Wh, zh = {
        getEnv: function () {
            if (!_h) throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");
            return _h
        },
        setEnv: Fh,
        initialize: Lh,
        createBrowserEnv: Ah,
        createFileSystem: Dh,
        createNodejsEnv: Mh,
        monkeyPatch: function (t) {
            if (_h || Lh(), !_h) throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");
            var e = t.Canvas,
                n = void 0 === e ? _h.Canvas : e,
                r = t.Image,
                o = void 0 === r ? _h.Image : r;
            _h.Canvas = n, _h.Image = o, _h.createCanvasElement = t.createCanvasElement || function () {
                return new n
            }, _h.createImageElement = t.createImageElement || function () {
                return new o
            }, _h.ImageData = t.ImageData || _h.ImageData, _h.Video = t.Video || _h.Video, _h.fetch = t.fetch || _h.fetch, _h.readFile = t.readFile || _h.readFile
        },
        isBrowser: Oh,
        isNodejs: Ph
    };

    function Uh(t) {
        return zh.isNodejs() || "string" != typeof t ? t : document.getElementById(t)
    }

    function Gh(t) {
        var e = zh.getEnv(),
            n = e.Canvas;
        if (t instanceof e.CanvasRenderingContext2D) return t;
        var r = Uh(t);
        if (!(r instanceof n)) throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");
        var o = r.getContext("2d");
        if (!o) throw new Error("resolveContext2d - canvas 2d context is null");
        return o
    }
    Lh(), (Wh = Bh || (Bh = {})).TOP_LEFT = "TOP_LEFT", Wh.TOP_RIGHT = "TOP_RIGHT", Wh.BOTTOM_LEFT = "BOTTOM_LEFT", Wh.BOTTOM_RIGHT = "BOTTOM_RIGHT";
    var Vh = function (t) {
            void 0 === t && (t = {});
            var e = t.anchorPosition,
                n = t.backgroundColor,
                r = t.fontColor,
                o = t.fontSize,
                i = t.fontStyle,
                a = t.padding;
            this.anchorPosition = e || Bh.TOP_LEFT, this.backgroundColor = n || "rgba(0, 0, 0, 0.5)", this.fontColor = r || "rgba(255, 255, 255, 1)", this.fontSize = o || 14, this.fontStyle = i || "Georgia", this.padding = a || 4
        },
        Hh = function () {
            function r(t, e, n) {
                void 0 === n && (n = {}), this.text = "string" == typeof t ? [t] : t instanceof r ? t.text : t, this.anchor = e, this.options = new Vh(n)
            }
            return r.prototype.measureWidth = function (e) {
                var t = this.options.padding;
                return this.text.map(function (t) {
                    return e.measureText(t).width
                }).reduce(function (t, e) {
                    return t < e ? e : t
                }, 0) + 2 * t
            }, r.prototype.measureHeight = function () {
                var t = this.options,
                    e = t.fontSize,
                    n = t.padding;
                return this.text.length * e + 2 * n
            }, r.prototype.getUpperLeft = function (t, e) {
                var n = this.options.anchorPosition,
                    r = n === Bh.BOTTOM_RIGHT || n === Bh.TOP_RIGHT,
                    o = n === Bh.BOTTOM_LEFT || n === Bh.BOTTOM_RIGHT,
                    i = this.measureWidth(t),
                    a = this.measureHeight(),
                    s = r ? this.anchor.x - i : this.anchor.x,
                    u = o ? this.anchor.y - a : this.anchor.y;
                if (e) {
                    var c = e.width,
                        l = e.height;
                    return {
                        x: Math.max(Math.min(s, c - i), 0),
                        y: Math.max(Math.min(u, l - a), 0)
                    }
                }
                return {
                    x: s,
                    y: u
                }
            }, r.prototype.draw = function (t) {
                var e = Uh(t),
                    o = Gh(e),
                    n = this.options,
                    r = n.backgroundColor,
                    i = n.fontColor,
                    a = n.fontSize,
                    s = n.fontStyle,
                    u = n.padding;
                o.font = a + "px " + s;
                var c = this.measureWidth(o),
                    l = this.measureHeight();
                o.fillStyle = r;
                var h = this.getUpperLeft(o, e);
                o.fillRect(h.x, h.y, c, l), o.fillStyle = i, this.text.forEach(function (t, e) {
                    var n = u + h.x,
                        r = u + h.y + (e + 1) * a;
                    o.fillText(t, n, r)
                })
            }, r
        }(),
        qh = function (t) {
            void 0 === t && (t = {});
            var e = t.boxColor,
                n = t.lineWidth,
                r = t.label,
                o = t.drawLabelOptions;
            this.boxColor = e || "rgba(0, 0, 255, 1)", this.lineWidth = n || 2, this.label = r;
            var i = {
                anchorPosition: Bh.BOTTOM_LEFT,
                backgroundColor: this.boxColor
            };
            this.drawLabelOptions = new Vh(Object.assign({}, i, o))
        },
        jh = function () {
            function t(t, e) {
                void 0 === e && (e = {}), this.box = new Sh(t), this.options = new qh(e)
            }
            return t.prototype.draw = function (t) {
                var e = Gh(t),
                    n = this.options,
                    r = n.boxColor,
                    o = n.lineWidth,
                    i = this.box,
                    a = i.x,
                    s = i.y,
                    u = i.width,
                    c = i.height;
                e.strokeStyle = r, e.lineWidth = o, e.strokeRect(a, s, u, c);
                var l = this.options.label;
                l && new Hh([l], {
                    x: a - o / 2,
                    y: s
                }, this.options.drawLabelOptions).draw(t)
            }, t
        }(),
        $h = Object.freeze({
            DrawBoxOptions: qh,
            DrawBox: jh,
            get AnchorPosition() {
                return Bh
            },
            DrawTextFieldOptions: Vh,
            DrawTextField: Hh
        });

    function Kh(e, n, r, o) {
        return void 0 === r && (r = "same"), void 0 === o && (o = !1), ue(function () {
            var t = xu(Ss(e, n.filters, [1, 1], r), n.bias);
            return o ? Xu(t) : t
        })
    }

    function Xh(t, n) {
        Object.keys(t).forEach(function (e) {
            n.some(function (t) {
                return t.originalPath === e
            }) || t[e].dispose()
        })
    }

    function Yh(a, s) {
        return function (t, e, n, r) {
            var o = $e(a(t * e * n * n), [n, n, t, e]),
                i = He(a(e));
            return s.push({
                paramPath: r + "/filters"
            }, {
                paramPath: r + "/bias"
            }), {
                filters: o,
                bias: i
            }
        }
    }

    function Qh(i, a) {
        return function (t, e, n) {
            var r = qe(i(t * e), [t, e]),
                o = He(i(e));
            return a.push({
                paramPath: n + "/weights"
            }, {
                paramPath: n + "/bias"
            }), {
                weights: r,
                bias: o
            }
        }
    }
    var Jh = function (t, e, n) {
        this.depthwise_filter = t, this.pointwise_filter = e, this.bias = n
    };

    function Zh(a, s) {
        return function (t, e, n) {
            var r = $e(a(9 * t), [3, 3, t, 1]),
                o = $e(a(t * e), [1, 1, t, e]),
                i = He(a(e));
            return s.push({
                paramPath: n + "/depthwise_filter"
            }, {
                paramPath: n + "/pointwise_filter"
            }, {
                paramPath: n + "/bias"
            }), new Jh(r, o, i)
        }
    }

    function tp(o) {
        return function (t) {
            var e = o(t + "/depthwise_filter", 4),
                n = o(t + "/pointwise_filter", 4),
                r = o(t + "/bias", 1);
            return new Jh(e, n, r)
        }
    }

    function ep(o, i) {
        return function (t, e, n) {
            var r = o[t];
            if (!hh(r, e)) throw new Error("expected weightMap[" + t + "] to be a Tensor" + e + "D, instead have " + r);
            return i.push({
                originalPath: t,
                paramPath: n || t
            }), r
        }
    }

    function np(t) {
        var n = t;
        return {
            extractWeights: function (t) {
                var e = n.slice(0, t);
                return n = n.slice(t), e
            },
            getRemainingWeights: function () {
                return n
            }
        }
    }

    function rp(t, e) {
        var n = e + "-weights_manifest.json";
        if (!t) return {
            modelBaseUri: "",
            manifestUri: n
        };
        if ("/" === t) return {
            modelBaseUri: "/",
            manifestUri: "/" + n
        };
        var r = t.startsWith("http://") ? "http://" : t.startsWith("https://") ? "https://" : "",
            o = (t = t.replace(r, "")).split("/").filter(function (t) {
                return t
            }),
            i = t.endsWith(".json") ? o[o.length - 1] : n,
            a = r + (t.endsWith(".json") ? o.slice(0, o.length - 1) : o).join("/");
        return {
            modelBaseUri: a = t.startsWith("/") ? "/" + a : a,
            manifestUri: "/" === a ? "/" + i : a + "/" + i
        }
    }

    function op(t) {
        var e = zh.getEnv(),
            n = e.Image,
            r = e.Video;
        return t instanceof n && t.complete || t instanceof r && 3 <= t.readyState
    }

    function ip(t) {
        return new Promise(function (e, n) {
            if (t instanceof zh.getEnv().Canvas || op(t)) return e();

            function r(t) {
                t.currentTarget && (t.currentTarget.removeEventListener("load", r), t.currentTarget.removeEventListener("error", o), e(t))
            }

            function o(t) {
                t.currentTarget && (t.currentTarget.removeEventListener("load", r), t.currentTarget.removeEventListener("error", o), n(t))
            }
            t.addEventListener("load", r), t.addEventListener("error", o)
        })
    }

    function ap(t) {
        return new Promise(function (e, n) {
            if (!(t instanceof Blob)) return n("bufferToImage - expected buf to be of type: Blob");
            var r = new FileReader;
            r.onload = function () {
                if ("string" != typeof r.result) return n("bufferToImage - expected reader.result to be a string, in onload");
                var t = zh.getEnv().createImageElement();
                t.onload = function () {
                    return e(t)
                }, t.onerror = n, t.src = r.result
            }, r.onerror = n, r.readAsDataURL(t)
        })
    }

    function sp(t) {
        var e = zh.getEnv(),
            n = e.Image,
            r = e.Video;
        return t instanceof n ? new ch(t.naturalWidth, t.naturalHeight) : t instanceof r ? new ch(t.videoWidth, t.videoHeight) : new ch(t.width, t.height)
    }

    function up(t) {
        var e = t.width,
            n = t.height,
            r = (0, zh.getEnv().createCanvasElement)();
        return r.width = e, r.height = n, r
    }

    function cp(t, e) {
        var n = zh.getEnv().ImageData;
        if (!(t instanceof n || op(t))) throw new Error("createCanvasFromMedia - media has not finished loading yet");
        var r = e || sp(t),
            o = r.width,
            i = r.height,
            a = up({
                width: o,
                height: i
            });
        return t instanceof n ? Gh(a).putImageData(t, 0, 0) : Gh(a).drawImage(t, 0, 0, o, i), a
    }

    function lp(n, r) {
        return p(this, void 0, void 0, function () {
            var e;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, (0, zh.getEnv().fetch)(n, r)];
                    case 1:
                        if (!((e = t.sent()).status < 400)) throw new Error("failed to fetch: (" + e.status + ") " + e.statusText + ", from url: " + e.url);
                        return [2, e]
                }
            })
        })
    }

    function hp(e) {
        return p(this, void 0, void 0, function () {
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, lp(e)];
                    case 1:
                        return [2, t.sent().json()]
                }
            })
        })
    }

    function pp(s, u) {
        return p(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = u || zh.getEnv().createCanvasElement(), n = s.shape.slice(dh(s) ? 1 : 0), r = n[0], o = n[1], i = n[2], a = ue(function () {
                            return s.as3D(r, o, i).toInt()
                        }), [4, Bl.toPixels(a, e)];
                    case 1:
                        return t.sent(), a.dispose(), [2, e]
                }
            })
        })
    }

    function fp(t, e, n) {
        void 0 === n && (n = !1);
        var r = zh.getEnv(),
            o = r.Image,
            i = r.Canvas;
        if (!(t instanceof o || t instanceof i)) throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");
        var a = sp(t),
            s = e / Math.max(a.height, a.width),
            u = s * a.width,
            c = s * a.height,
            l = up({
                width: e,
                height: e
            }),
            h = t instanceof i ? t : cp(t),
            p = Math.abs(u - c) / 2,
            f = n && u < c ? p : 0,
            d = n && c < u ? p : 0;
        return Gh(l).drawImage(h, f, d, u, c), l
    }

    function dp(t) {
        var e = zh.getEnv(),
            n = e.Image,
            r = e.Canvas,
            o = e.Video;
        return t instanceof n || t instanceof r || t instanceof o
    }

    function vp(i, a) {
        return p(this, void 0, void 0, function () {
            var e, n, r, o;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = rp(i, a), n = e.manifestUri, r = e.modelBaseUri, [4, hp(n)];
                    case 1:
                        return o = t.sent(), [2, Ol.loadWeights(o, r)]
                }
            })
        })
    }

    function mp(l, h) {
        return void 0 === h && (h = !1), ue(function () {
            var t = l.shape.slice(1),
                e = t[0],
                n = t[1];
            if (e === n) return l;
            var r = Math.abs(e - n),
                o = Math.round(r * (h ? .5 : 1)),
                i = n < e ? 2 : 1,
                a = function (t) {
                    var e = l.shape.slice();
                    return e[i] = t, Je(e, 0)
                },
                s = a(o),
                u = r - s.shape[i],
                c = [h && u ? a(u) : null, l, s].filter(function (t) {
                    return !!t
                }).map(function (t) {
                    return t.toFloat()
                });
            return _i(c, i)
        })
    }
    var gp = function () {
        function t(t, e) {
            void 0 === e && (e = !1);
            var o = this;
            if (this._imageTensors = [], this._canvases = [], this._treatAsBatchInput = !1, this._inputDimensions = [], !Array.isArray(t)) throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + t);
            this._treatAsBatchInput = e, this._batchSize = t.length, t.forEach(function (t, e) {
                if (fh(t)) return o._imageTensors[e] = t, void(o._inputDimensions[e] = t.shape);
                if (dh(t)) {
                    var n = t.shape[0];
                    if (1 !== n) throw new Error("NetInput - tf.Tensor4D with batchSize " + n + " passed, but not supported in input array");
                    return o._imageTensors[e] = t, void(o._inputDimensions[e] = t.shape.slice(1))
                }
                var r = t instanceof zh.getEnv().Canvas ? t : cp(t);
                o._canvases[e] = r, o._inputDimensions[e] = [r.height, r.width, 3]
            })
        }
        return Object.defineProperty(t.prototype, "imageTensors", {
            get: function () {
                return this._imageTensors
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "canvases", {
            get: function () {
                return this._canvases
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isBatchInput", {
            get: function () {
                return 1 < this.batchSize || this._treatAsBatchInput
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "batchSize", {
            get: function () {
                return this._batchSize
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "inputDimensions", {
            get: function () {
                return this._inputDimensions
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "inputSize", {
            get: function () {
                return this._inputSize
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "reshapedInputDimensions", {
            get: function () {
                var n = this;
                return bh(this.batchSize, 0, 1).map(function (t, e) {
                    return n.getReshapedInputDimensions(e)
                })
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getInput = function (t) {
            return this.canvases[t] || this.imageTensors[t]
        }, t.prototype.getInputDimensions = function (t) {
            return this._inputDimensions[t]
        }, t.prototype.getInputHeight = function (t) {
            return this._inputDimensions[t][0]
        }, t.prototype.getInputWidth = function (t) {
            return this._inputDimensions[t][1]
        }, t.prototype.getReshapedInputDimensions = function (t) {
            if ("number" != typeof this.inputSize) throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");
            return xh({
                width: this.getInputWidth(t),
                height: this.getInputHeight(t)
            }, this.inputSize)
        }, t.prototype.toBatchTensor = function (r, o) {
            var i = this;
            return void 0 === o && (o = !0), this._inputSize = r, ue(function () {
                var t = bh(i.batchSize, 0, 1).map(function (t) {
                    var e = i.getInput(t);
                    if (e instanceof dt) {
                        var n = dh(e) ? e : e.expandDims();
                        return (n = mp(n, o)).shape[1] === r && n.shape[2] === r || (n = Wc.resizeBilinear(n, [r, r])), n.as3D(r, r, 3)
                    }
                    if (e instanceof zh.getEnv().Canvas) return Bl.fromPixels(fp(e, r, o));
                    throw new Error("toBatchTensor - at batchIdx " + t + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + e)
                });
                return ua(t.map(function (t) {
                    return t.toFloat()
                })).as4D(i.batchSize, r, r, 3)
            })
        }, t
    }();

    function yp(n) {
        return p(this, void 0, void 0, function () {
            var r, o, e;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        if (n instanceof gp) return [2, n];
                        if (!(r = Array.isArray(n) ? n : [n]).length) throw new Error("toNetInput - empty array passed as input");
                        return o = function (t) {
                            return Array.isArray(n) ? " at input index " + t + ":" : ""
                        }, (e = r.map(Uh)).forEach(function (t, e) {
                            if (!dp(t) && !fh(t) && !dh(t)) {
                                if ("string" == typeof r[e]) throw new Error("toNetInput -" + o(e) + " string passed, but could not resolve HTMLElement for element id " + r[e]);
                                throw new Error("toNetInput -" + o(e) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id")
                            }
                            if (dh(t)) {
                                var n = t.shape[0];
                                if (1 !== n) throw new Error("toNetInput -" + o(e) + " tf.Tensor4D with batchSize " + n + " passed, but not supported in input array")
                            }
                        }), [4, Promise.all(e.map(function (t) {
                            return dp(t) && ip(t)
                        }))];
                    case 1:
                        return t.sent(), [2, new gp(e, Array.isArray(n))]
                }
            })
        })
    }
    var xp = function () {
        function t(t) {
            this._name = t, this._params = void 0, this._paramMappings = []
        }
        return Object.defineProperty(t.prototype, "params", {
            get: function () {
                return this._params
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "paramMappings", {
            get: function () {
                return this._paramMappings
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isLoaded", {
            get: function () {
                return !!this.params
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getParamFromPath = function (t) {
            var e = this.traversePropertyPath(t);
            return e.obj[e.objProp]
        }, t.prototype.reassignParamFromPath = function (t, e) {
            var n = this.traversePropertyPath(t),
                r = n.obj,
                o = n.objProp;
            r[o].dispose(), r[o] = e
        }, t.prototype.getParamList = function () {
            var n = this;
            return this._paramMappings.map(function (t) {
                var e = t.paramPath;
                return {
                    path: e,
                    tensor: n.getParamFromPath(e)
                }
            })
        }, t.prototype.getTrainableParams = function () {
            return this.getParamList().filter(function (t) {
                return t.tensor instanceof vt
            })
        }, t.prototype.getFrozenParams = function () {
            return this.getParamList().filter(function (t) {
                return !(t.tensor instanceof vt)
            })
        }, t.prototype.variable = function () {
            var r = this;
            this.getFrozenParams().forEach(function (t) {
                var e = t.path,
                    n = t.tensor;
                r.reassignParamFromPath(e, n.variable())
            })
        }, t.prototype.freeze = function () {
            var o = this;
            this.getTrainableParams().forEach(function (t) {
                var e = t.path,
                    n = t.tensor,
                    r = Ge(n.dataSync());
                n.dispose(), o.reassignParamFromPath(e, r)
            })
        }, t.prototype.dispose = function (e) {
            void 0 === e && (e = !0), this.getParamList().forEach(function (t) {
                if (e && t.tensor.isDisposed) throw new Error("param tensor has already been disposed for path " + t.path);
                t.tensor.dispose()
            }), this._params = void 0
        }, t.prototype.serializeParams = function () {
            return new Float32Array(this.getParamList().map(function (t) {
                var e = t.tensor;
                return Array.from(e.dataSync())
            }).reduce(function (t, e) {
                return t.concat(e)
            }))
        }, t.prototype.load = function (e) {
            return p(this, void 0, void 0, function () {
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e instanceof Float32Array ? (this.extractWeights(e), [2]) : [4, this.loadFromUri(e)];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })
        }, t.prototype.loadFromUri = function (n) {
            return p(this, void 0, void 0, function () {
                var e;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (n && "string" != typeof n) throw new Error(this._name + ".loadFromUri - expected model uri");
                            return [4, vp(n, this.getDefaultModelName())];
                        case 1:
                            return e = t.sent(), this.loadFromWeightMap(e), [2]
                    }
                })
            })
        }, t.prototype.loadFromDisk = function (h) {
            return p(this, void 0, void 0, function () {
                var e, n, r, o, i, a, s, u, c, l;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            if (h && "string" != typeof h) throw new Error(this._name + ".loadFromDisk - expected model file path");
                            return e = zh.getEnv().readFile, n = rp(h, this.getDefaultModelName()), r = n.manifestUri, o = n.modelBaseUri, i = function (t) {
                                return Promise.all(t.map(function (t) {
                                    return e(t).then(function (t) {
                                        return t.buffer
                                    })
                                }))
                            }, a = Ol.weightsLoaderFactory(i), c = (u = JSON).parse, [4, e(r)];
                        case 1:
                            return s = c.apply(u, [t.sent().toString()]), [4, a(s, o)];
                        case 2:
                            return l = t.sent(), this.loadFromWeightMap(l), [2]
                    }
                })
            })
        }, t.prototype.loadFromWeightMap = function (t) {
            var e = this.extractParamsFromWeigthMap(t),
                n = e.paramMappings,
                r = e.params;
            this._paramMappings = n, this._params = r
        }, t.prototype.extractWeights = function (t) {
            var e = this.extractParams(t),
                n = e.paramMappings,
                r = e.params;
            this._paramMappings = n, this._params = r
        }, t.prototype.traversePropertyPath = function (n) {
            if (!this.params) throw new Error("traversePropertyPath - model has no loaded params");
            var t = n.split("/").reduce(function (t, e) {
                    if (!t.nextObj.hasOwnProperty(e)) throw new Error("traversePropertyPath - object does not have property " + e + ", for path " + n);
                    return {
                        obj: t.nextObj,
                        objProp: e,
                        nextObj: t.nextObj[e]
                    }
                }, {
                    nextObj: this.params
                }),
                e = t.obj,
                r = t.objProp;
            if (!(e && r && e[r] instanceof dt)) throw new Error("traversePropertyPath - parameter is not a tensor, for path " + n);
            return {
                obj: e,
                objProp: r
            }
        }, t
    }();

    function wp(t, e, n) {
        void 0 === n && (n = !0);
        var r = Math.max(0, Math.min(t.right, e.right) - Math.max(t.left, e.left)) * Math.max(0, Math.min(t.bottom, e.bottom) - Math.max(t.top, e.top));
        return n ? r / (t.area + e.area - r) : r / Math.min(t.area, e.area)
    }

    function bp(s, t, u, c) {
        void 0 === c && (c = !0);
        for (var l = t.map(function (t, e) {
                return {
                    score: t,
                    boxIndex: e
                }
            }).sort(function (t, e) {
                return t.score - e.score
            }).map(function (t) {
                return t.boxIndex
            }), h = [], e = function () {
                var t = l.pop();
                h.push(t);
                for (var e = l, n = [], r = 0; r < e.length; r++) {
                    var o = e[r],
                        i = s[t],
                        a = s[o];
                    n.push(wp(i, a, c))
                }
                l = l.filter(function (t, e) {
                    return n[e] <= u
                })
            }; 0 < l.length;) e();
        return h
    }

    function Ep(s, u) {
        return ue(function () {
            var t = u[0],
                e = u[1],
                n = u[2],
                r = Je(s.shape.slice(0, 3).concat([1]), t),
                o = Je(s.shape.slice(0, 3).concat([1]), e),
                i = Je(s.shape.slice(0, 3).concat([1]), n),
                a = _i([r, o, i], 3);
            return Bu(s, a)
        })
    }

    function Cp(t) {
        return 1 / (1 + Math.exp(-t))
    }
    var _p, Sp, Rp = function (t) {
        return "number" == typeof t
    };

    function Np(t) {
        if (!t) throw new Error("invalid config: " + t);
        if ("boolean" != typeof t.withSeparableConvs) throw new Error("config.withSeparableConvs has to be a boolean, have: " + t.withSeparableConvs);
        if (!Rp(t.iouThreshold) || t.iouThreshold < 0 || 1 < t.iouThreshold) throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + t.iouThreshold);
        if (!Array.isArray(t.classes) || !t.classes.length || !t.classes.every(function (t) {
                return "string" == typeof t
            })) throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(t.classes));
        if (!Array.isArray(t.anchors) || !t.anchors.length || !t.anchors.map(function (t) {
                return t || {}
            }).every(function (t) {
                return Rp(t.x) && Rp(t.y)
            })) throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(t.anchors));
        if (t.meanRgb && (!Array.isArray(t.meanRgb) || 3 !== t.meanRgb.length || !t.meanRgb.every(Rp))) throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(t.meanRgb))
    }

    function kp(e) {
        return ue(function () {
            var t = Du(e, Ve(.10000000149011612));
            return xu(Xu(Bu(e, t)), t)
        })
    }

    function Ip(e, n) {
        return ue(function () {
            var t = Qi(e, [
                [0, 0],
                [1, 1],
                [1, 1],
                [0, 0]
            ]);
            return t = Ss(t, n.conv.filters, [1, 1], "valid"), t = Bu(t, n.bn.sub), t = Du(t, n.bn.truediv), kp(t = xu(t, n.conv.bias))
        })
    }

    function Tp(e, n) {
        return ue(function () {
            var t = Qi(e, [
                [0, 0],
                [1, 1],
                [1, 1],
                [0, 0]
            ]);
            return t = Is(t, n.depthwise_filter, n.pointwise_filter, [1, 1], "valid"), kp(t = xu(t, n.bias))
        })
    }

    function Ap(s, u) {
        var c = Yh(s, u);
        var t = Zh(s, u);
        return {
            extractConvParams: c,
            extractConvWithBatchNormParams: function (t, e, n) {
                var r, o, i, a;
                return {
                    conv: c(t, e, 3, n + "/conv"),
                    bn: (o = n + "/bn", i = He(s(r = e)), a = He(s(r)), u.push({
                        paramPath: o + "/sub"
                    }, {
                        paramPath: o + "/truediv"
                    }), {
                        sub: i,
                        truediv: a
                    })
                }
            },
            extractSeparableConvParams: t
        }
    }

    function Dp(t, e) {
        var n = ep(t, e);

        function r(t) {
            return {
                filters: n(t + "/filters", 4),
                bias: n(t + "/bias", 1)
            }
        }
        return {
            extractConvParams: r,
            extractConvWithBatchNormParams: function (t) {
                var e;
                return {
                    conv: r(t + "/conv"),
                    bn: {
                        sub: n((e = t + "/bn") + "/sub", 1),
                        truediv: n(e + "/truediv", 1)
                    }
                }
            },
            extractSeparableConvParams: tp(n)
        }
    }(Sp = _p || (_p = {}))[Sp.XS = 224] = "XS", Sp[Sp.SM = 320] = "SM", Sp[Sp.MD = 416] = "MD", Sp[Sp.LG = 608] = "LG";
    var Mp = function () {
            function t(t) {
                var e = void 0 === t ? {} : t,
                    n = e.inputSize,
                    r = e.scoreThreshold;
                if (this._name = "TinyYolov2Options", this._inputSize = n || 416, this._scoreThreshold = r || .5, "number" != typeof this._inputSize || this._inputSize % 32 != 0) throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
                if ("number" != typeof this._scoreThreshold || this._scoreThreshold <= 0 || 1 <= this._scoreThreshold) throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1")
            }
            return Object.defineProperty(t.prototype, "inputSize", {
                get: function () {
                    return this._inputSize
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "scoreThreshold", {
                get: function () {
                    return this._scoreThreshold
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(),
        Op = function (n) {
            function r(t) {
                var e = n.call(this, "TinyYolov2") || this;
                return Np(t), e._config = t, e
            }
            return a(r, n), Object.defineProperty(r.prototype, "config", {
                get: function () {
                    return this._config
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "withClassScores", {
                get: function () {
                    return this.config.withClassScores || 1 < this.config.classes.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "boxEncodingSize", {
                get: function () {
                    return 5 + (this.withClassScores ? this.config.classes.length : 0)
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.runTinyYolov2 = function (t, e) {
                var n = Ip(t, e.conv0);
                return n = Ip(n = Us(n, [2, 2], [2, 2], "same"), e.conv1), n = Ip(n = Us(n, [2, 2], [2, 2], "same"), e.conv2), n = Ip(n = Us(n, [2, 2], [2, 2], "same"), e.conv3), n = Ip(n = Us(n, [2, 2], [2, 2], "same"), e.conv4), n = Ip(n = Us(n, [2, 2], [2, 2], "same"), e.conv5), Kh(n = Ip(n = Ip(n = Us(n, [2, 2], [1, 1], "same"), e.conv6), e.conv7), e.conv8, "valid", !1)
            }, r.prototype.runMobilenet = function (t, e) {
                var n = this.config.isFirstLayerConv2d ? kp(Kh(t, e.conv0, "valid", !1)) : Tp(t, e.conv0);
                return n = Tp(n = Us(n, [2, 2], [2, 2], "same"), e.conv1), n = Tp(n = Us(n, [2, 2], [2, 2], "same"), e.conv2), n = Tp(n = Us(n, [2, 2], [2, 2], "same"), e.conv3), n = Tp(n = Us(n, [2, 2], [2, 2], "same"), e.conv4), n = Tp(n = Us(n, [2, 2], [2, 2], "same"), e.conv5), n = Us(n, [2, 2], [1, 1], "same"), n = e.conv6 ? Tp(n, e.conv6) : n, Kh(n = e.conv7 ? Tp(n, e.conv7) : n, e.conv8, "valid", !1)
            }, r.prototype.forwardInput = function (e, n) {
                var r = this,
                    o = this.params;
                if (!o) throw new Error("TinyYolov2 - load model before inference");
                return ue(function () {
                    var t = e.toBatchTensor(n, !1).toFloat();
                    return t = (t = r.config.meanRgb ? Ep(t, r.config.meanRgb) : t).div(Ve(256)), r.config.withSeparableConvs ? r.runMobilenet(t, o) : r.runTinyYolov2(t, o)
                })
            }, r.prototype.forward = function (n, r) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [4, e.apply(this, [t.sent(), r])];
                            case 2:
                                return [2, t.sent()]
                        }
                    })
                })
            }, r.prototype.detect = function (v, m) {
                return void 0 === m && (m = {}), p(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, s, u, c, l, h, p, f, d = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = new Mp(m), n = e.inputSize, r = e.scoreThreshold, [4, yp(v)];
                            case 1:
                                return o = t.sent(), [4, this.forwardInput(o, n)];
                            case 2:
                                return i = t.sent(), a = ue(function () {
                                    return ha(i)[0].expandDims()
                                }), s = {
                                    width: o.getInputWidth(0),
                                    height: o.getInputHeight(0)
                                }, [4, this.extractBoxes(a, o.getReshapedInputDimensions(0), r)];
                            case 3:
                                return u = t.sent(), i.dispose(), a.dispose(), c = u.map(function (t) {
                                    return t.box
                                }), l = u.map(function (t) {
                                    return t.score
                                }), h = u.map(function (t) {
                                    return t.classScore
                                }), p = u.map(function (t) {
                                    return d.config.classes[t.label]
                                }), f = bp(c.map(function (t) {
                                    return t.rescale(n)
                                }), l, this.config.iouThreshold, !0), [2, f.map(function (t) {
                                    return new kh(l[t], h[t], p[t], c[t], s)
                                })]
                        }
                    })
                })
            }, r.prototype.getDefaultModelName = function () {
                return ""
            }, r.prototype.extractParamsFromWeigthMap = function (t) {
                return function (t, e) {
                    var n, r = [],
                        o = Dp(t, r),
                        i = o.extractConvParams,
                        a = o.extractConvWithBatchNormParams,
                        s = o.extractSeparableConvParams;
                    if (e.withSeparableConvs) {
                        var u = e.filterSizes && e.filterSizes.length || 9;
                        n = {
                            conv0: e.isFirstLayerConv2d ? i("conv0") : s("conv0"),
                            conv1: s("conv1"),
                            conv2: s("conv2"),
                            conv3: s("conv3"),
                            conv4: s("conv4"),
                            conv5: s("conv5"),
                            conv6: 7 < u ? s("conv6") : void 0,
                            conv7: 8 < u ? s("conv7") : void 0,
                            conv8: i("conv8")
                        }
                    } else n = {
                        conv0: a("conv0"),
                        conv1: a("conv1"),
                        conv2: a("conv2"),
                        conv3: a("conv3"),
                        conv4: a("conv4"),
                        conv5: a("conv5"),
                        conv6: a("conv6"),
                        conv7: a("conv7"),
                        conv8: i("conv8")
                    };
                    return Xh(t, r), {
                        params: n,
                        paramMappings: r
                    }
                }(t, this.config)
            }, r.prototype.extractParams = function (t) {
                var e = this.config.filterSizes || r.DEFAULT_FILTER_SIZES,
                    n = e ? e.length : void 0;
                if (7 !== n && 8 !== n && 9 !== n) throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + n + " filterSizes in config");
                return function (t, e, n, r) {
                    var o, i = np(t),
                        a = i.extractWeights,
                        s = i.getRemainingWeights,
                        u = [],
                        c = Ap(a, u),
                        l = c.extractConvParams,
                        h = c.extractConvWithBatchNormParams,
                        p = c.extractSeparableConvParams;
                    if (e.withSeparableConvs) {
                        var f = r[0],
                            d = r[1],
                            v = r[2],
                            m = r[3],
                            g = r[4],
                            y = r[5],
                            x = r[6],
                            w = r[7],
                            b = r[8];
                        o = {
                            conv0: e.isFirstLayerConv2d ? l(f, d, 3, "conv0") : p(f, d, "conv0"),
                            conv1: p(d, v, "conv1"),
                            conv2: p(v, m, "conv2"),
                            conv3: p(m, g, "conv3"),
                            conv4: p(g, y, "conv4"),
                            conv5: p(y, x, "conv5"),
                            conv6: w ? p(x, w, "conv6") : void 0,
                            conv7: b ? p(w, b, "conv7") : void 0,
                            conv8: l(b || w || x, 5 * n, 1, "conv8")
                        }
                    } else f = r[0], d = r[1], v = r[2], m = r[3], g = r[4], y = r[5], x = r[6], w = r[7], b = r[8], o = {
                        conv0: h(f, d, "conv0"),
                        conv1: h(d, v, "conv1"),
                        conv2: h(v, m, "conv2"),
                        conv3: h(m, g, "conv3"),
                        conv4: h(g, y, "conv4"),
                        conv5: h(y, x, "conv5"),
                        conv6: h(x, w, "conv6"),
                        conv7: h(w, b, "conv7"),
                        conv8: l(b, 5 * n, 1, "conv8")
                    };
                    if (0 !== s().length) throw new Error("weights remaing after extract: " + s().length);
                    return {
                        params: o,
                        paramMappings: u
                    }
                }(t, this.config, this.boxEncodingSize, e)
            }, r.prototype.extractBoxes = function (A, D, M) {
                return p(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, w, b, E, C, _, S, R, N, k, I, T = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = D.width, n = D.height, r = Math.max(e, n), o = r / e, i = r / n, a = A.shape[1], s = this.config.anchors.length, u = ue(function () {
                                    var t = A.reshape([a, a, s, T.boxEncodingSize]);
                                    return [t.slice([0, 0, 0, 0], [a, a, s, 4]), t.slice([0, 0, 0, 4], [a, a, s, 1]), T.withClassScores ? Le(t.slice([0, 0, 0, 5], [a, a, s, T.config.classes.length]), 3) : Ve(0)]
                                }), c = u[0], l = u[1], h = u[2], p = [], [4, l.array()];
                            case 1:
                                return f = t.sent(), [4, c.array()];
                            case 2:
                                d = t.sent(), v = 0, t.label = 3;
                            case 3:
                                if (!(v < a)) return [3, 12];
                                m = 0, t.label = 4;
                            case 4:
                                if (!(m < a)) return [3, 11];
                                g = 0, t.label = 5;
                            case 5:
                                return g < s ? (y = Cp(f[v][m][g][0]), !M || M < y ? (x = (m + Cp(d[v][m][g][0])) / a * o, w = (v + Cp(d[v][m][g][1])) / a * i, b = Math.exp(d[v][m][g][2]) * this.config.anchors[g].x / a * o, E = Math.exp(d[v][m][g][3]) * this.config.anchors[g].y / a * i, C = x - b / 2, _ = w - E / 2, S = {
                                    row: v,
                                    col: m,
                                    anchor: g
                                }, this.withClassScores ? [4, this.extractPredictedClass(h, S)] : [3, 7]) : [3, 9]) : [3, 10];
                            case 6:
                                return I = t.sent(), [3, 8];
                            case 7:
                                I = {
                                    classScore: 1,
                                    label: 0
                                }, t.label = 8;
                            case 8:
                                N = (R = I).classScore, k = R.label, p.push(O({
                                    box: new Rh(C, _, C + b, _ + E),
                                    score: y,
                                    classScore: y * N,
                                    label: k
                                }, S)), t.label = 9;
                            case 9:
                                return g++, [3, 5];
                            case 10:
                                return m++, [3, 4];
                            case 11:
                                return v++, [3, 3];
                            case 12:
                                return c.dispose(), l.dispose(), h.dispose(), [2, p]
                        }
                    })
                })
            }, r.prototype.extractPredictedClass = function (e, a) {
                return p(this, void 0, void 0, function () {
                    var n, r, o, i;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return n = a.row, r = a.col, o = a.anchor, [4, e.array()];
                            case 1:
                                return i = t.sent(), [2, Array(this.config.classes.length).fill(0).map(function (t, e) {
                                    return i[n][r][o][e]
                                }).map(function (t, e) {
                                    return {
                                        classScore: t,
                                        label: e
                                    }
                                }).reduce(function (t, e) {
                                    return t.classScore > e.classScore ? t : e
                                })]
                        }
                    })
                })
            }, r.DEFAULT_FILTER_SIZES = [3, 16, 32, 64, 128, 256, 512, 1024, 1024], r
        }(xp),
        Pp = Object.freeze({
            convLayer: Kh,
            disposeUnusedWeightTensors: Xh,
            extractConvParamsFactory: Yh,
            extractFCParamsFactory: Qh,
            extractSeparableConvParamsFactory: Zh,
            loadSeparableConvParamsFactory: tp,
            extractWeightEntryFactory: ep,
            extractWeightsFactory: np,
            getModelUris: rp,
            SeparableConvParams: Jh,
            TinyYolov2: Op,
            get TinyYolov2SizeType() {
                return _p
            },
            TinyYolov2Options: Mp,
            validateConfig: Np
        });

    function Fp(i, a, t) {
        if (void 0 === t && (t = !1), i.beginPath(), a.slice(1).forEach(function (t, e) {
                var n = t.x,
                    r = t.y,
                    o = a[e];
                i.moveTo(o.x, o.y), i.lineTo(n, r)
            }), t) {
            var e = a[a.length - 1],
                n = a[0];
            if (!e || !n) return;
            i.moveTo(e.x, e.y), i.lineTo(n.x, n.y)
        }
        i.stroke()
    }
    var Lp = function (r) {
        function o(t, e, n) {
            return r.call(this, t, t, "", e, n) || this
        }
        return a(o, r), o.prototype.forSize = function (t, e) {
            var n = r.prototype.forSize.call(this, t, e);
            return new o(n.score, n.relativeBox, n.imageDims)
        }, o
    }(kh);

    function Bp(t) {
        return t.detection instanceof Lp
    }

    function Wp(t, e) {
        var n = {
            detection: e
        };
        return Object.assign({}, t, n)
    }

    function zp(e, n, r) {
        return ue(function () {
            var t = Is(e, n.depthwise_filter, n.pointwise_filter, r, "same");
            return t = xu(t, n.bias)
        })
    }

    function Up(r, o, i) {
        return void 0 === i && (i = !1), ue(function () {
            var t = Xu(i ? xu(Ss(r, o.conv0.filters, [2, 2], "same"), o.conv0.bias) : zp(r, o.conv0, [2, 2])),
                e = zp(t, o.conv1, [1, 1]),
                n = zp(Xu(xu(t, e)), o.conv2, [1, 1]);
            return Xu(xu(t, xu(e, n)))
        })
    }

    function Gp(o, i, a, s) {
        return void 0 === a && (a = !1), void 0 === s && (s = !0), ue(function () {
            var t = Xu(a ? xu(Ss(o, i.conv0.filters, s ? [2, 2] : [1, 1], "same"), i.conv0.bias) : zp(o, i.conv0, s ? [2, 2] : [1, 1])),
                e = zp(t, i.conv1, [1, 1]),
                n = zp(Xu(xu(t, e)), i.conv2, [1, 1]),
                r = zp(Xu(xu(t, xu(e, n))), i.conv3, [1, 1]);
            return Xu(xu(t, xu(e, xu(n, r))))
        })
    }

    function Vp(t, e) {
        var o = Yh(t, e),
            i = Zh(t, e);

        function a(t, e, n, r) {
            return void 0 === r && (r = !1), {
                conv0: r ? o(t, e, 3, n + "/conv0") : i(t, e, n + "/conv0"),
                conv1: i(e, e, n + "/conv1"),
                conv2: i(e, e, n + "/conv2")
            }
        }
        return {
            extractDenseBlock3Params: a,
            extractDenseBlock4Params: function (t, e, n, r) {
                void 0 === r && (r = !1);
                var o = a(t, e, n, r);
                return {
                    conv0: o.conv0,
                    conv1: o.conv1,
                    conv2: o.conv2,
                    conv3: i(e, e, n + "/conv3")
                }
            }
        }
    }

    function Hp(e) {
        return function (t) {
            return {
                filters: e(t + "/filters", 4),
                bias: e(t + "/bias", 1)
            }
        }
    }

    function qp(t, e) {
        var n = ep(t, e),
            r = Hp(n),
            o = tp(n);
        return {
            extractDenseBlock3Params: function (t, e) {
                return void 0 === e && (e = !1), {
                    conv0: e ? r(t + "/conv0") : o(t + "/conv0"),
                    conv1: o(t + "/conv1"),
                    conv2: o(t + "/conv2")
                }
            },
            extractDenseBlock4Params: function (t, e) {
                return void 0 === e && (e = !1), {
                    conv0: e ? r(t + "/conv0") : o(t + "/conv0"),
                    conv1: o(t + "/conv1"),
                    conv2: o(t + "/conv2"),
                    conv3: o(t + "/conv3")
                }
            }
        }
    }
    var jp = function (t) {
        function e() {
            return t.call(this, "FaceFeatureExtractor") || this
        }
        return a(e, t), e.prototype.forwardInput = function (e) {
            var n = this.params;
            if (!n) throw new Error("FaceFeatureExtractor - load model before inference");
            return ue(function () {
                var t = Gp(Ep(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(Ve(255)), n.dense0, !0);
                return t = Gp(t = Gp(t = Gp(t, n.dense1), n.dense2), n.dense3), t = Gs(t, [7, 7], [2, 2], "valid")
            })
        }, e.prototype.forward = function (n) {
            return p(this, void 0, void 0, function () {
                var e;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = this.forwardInput, [4, yp(n)];
                        case 1:
                            return [2, e.apply(this, [t.sent()])]
                    }
                })
            })
        }, e.prototype.getDefaultModelName = function () {
            return "face_feature_extractor_model"
        }, e.prototype.extractParamsFromWeigthMap = function (t) {
            return r = qp(e = t, n = []).extractDenseBlock4Params, o = {
                dense0: r("dense0", !0),
                dense1: r("dense1"),
                dense2: r("dense2"),
                dense3: r("dense3")
            }, Xh(e, n), {
                params: o,
                paramMappings: n
            };
            var e, n, r, o
        }, e.prototype.extractParams = function (t) {
            return function (t) {
                var e = [],
                    n = np(t),
                    r = n.extractWeights,
                    o = n.getRemainingWeights,
                    i = Vp(r, e).extractDenseBlock4Params,
                    a = i(3, 32, "dense0", !0),
                    s = i(32, 64, "dense1"),
                    u = i(64, 128, "dense2"),
                    c = i(128, 256, "dense3");
                if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
                return {
                    paramMappings: e,
                    params: {
                        dense0: a,
                        dense1: s,
                        dense2: u,
                        dense3: c
                    }
                }
            }(t)
        }, e
    }(xp);

    function $p(t, e) {
        return ue(function () {
            return xu(As(t, e.weights), e.bias)
        })
    }

    function Kp(e) {
        var n = {},
            r = {};
        return Object.keys(e).forEach(function (t) {
            (t.startsWith("fc") ? r : n)[t] = e[t]
        }), {
            featureExtractorMap: n,
            classifierMap: r
        }
    }
    var Xp = function (r) {
            function t(t, e) {
                var n = r.call(this, t) || this;
                return n._faceFeatureExtractor = e, n
            }
            return a(t, r), Object.defineProperty(t.prototype, "faceFeatureExtractor", {
                get: function () {
                    return this._faceFeatureExtractor
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.runNet = function (e) {
                var n = this,
                    r = this.params;
                if (!r) throw new Error(this._name + " - load model before inference");
                return ue(function () {
                    var t = e instanceof gp ? n.faceFeatureExtractor.forwardInput(e) : e;
                    return $p(t.as2D(t.shape[0], -1), r.fc)
                })
            }, t.prototype.dispose = function (t) {
                void 0 === t && (t = !0), this.faceFeatureExtractor.dispose(t), r.prototype.dispose.call(this, t)
            }, t.prototype.loadClassifierParams = function (t) {
                var e = this.extractClassifierParams(t),
                    n = e.params,
                    r = e.paramMappings;
                this._params = n, this._paramMappings = r
            }, t.prototype.extractClassifierParams = function (t) {
                return function (t, e, n) {
                    var r = [],
                        o = np(t),
                        i = o.extractWeights,
                        a = o.getRemainingWeights,
                        s = Qh(i, r)(e, n, "fc");
                    if (0 !== a().length) throw new Error("weights remaing after extract: " + a().length);
                    return {
                        paramMappings: r,
                        params: {
                            fc: s
                        }
                    }
                }(t, this.getClassifierChannelsIn(), this.getClassifierChannelsOut())
            }, t.prototype.extractParamsFromWeigthMap = function (t) {
                var e, n, r, o, i, a = Kp(t),
                    s = a.featureExtractorMap,
                    u = a.classifierMap;
                return this.faceFeatureExtractor.loadFromWeightMap(s), o = ep(e = u, r = []), i = {
                    fc: (n = "fc", {
                        weights: o(n + "/weights", 2),
                        bias: o(n + "/bias", 1)
                    })
                }, Xh(e, r), {
                    params: i,
                    paramMappings: r
                }
            }, t.prototype.extractParams = function (t) {
                var e = this.getClassifierChannelsIn(),
                    n = this.getClassifierChannelsOut(),
                    r = n * e + n,
                    o = t.slice(0, t.length - r),
                    i = t.slice(t.length - r);
                return this.faceFeatureExtractor.extractWeights(o), this.extractClassifierParams(i)
            }, t
        }(xp),
        Yp = ["neutral", "happy", "sad", "angry", "fearful", "disgusted", "surprised"],
        Qp = function () {
            function t(n) {
                var r = this;
                if (7 !== n.length) throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + n.length);
                Yp.forEach(function (t, e) {
                    r[t] = n[e]
                })
            }
            return t.prototype.asSortedArray = function () {
                var e = this;
                return Yp.map(function (t) {
                    return {
                        expression: t,
                        probability: e[t]
                    }
                }).sort(function (t, e) {
                    return e.probability - t.probability
                })
            }, t
        }(),
        Jp = function (e) {
            function t(t) {
                return void 0 === t && (t = new jp), e.call(this, "FaceExpressionNet", t) || this
            }
            return a(t, e), t.prototype.forwardInput = function (t) {
                var e = this;
                return ue(function () {
                    return Le(e.runNet(t))
                })
            }, t.prototype.forward = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent()])]
                        }
                    })
                })
            }, t.prototype.predictExpressions = function (a) {
                return p(this, void 0, void 0, function () {
                    var e, n, r, o, i = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, yp(a)];
                            case 1:
                                return e = t.sent(), [4, this.forwardInput(e)];
                            case 2:
                                return n = t.sent(), [4, Promise.all(ha(n).map(function (n) {
                                    return p(i, void 0, void 0, function () {
                                        var e;
                                        return P(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, n.data()];
                                                case 1:
                                                    return e = t.sent(), n.dispose(), [2, e]
                                            }
                                        })
                                    })
                                }))];
                            case 3:
                                return r = t.sent(), n.dispose(), o = r.map(function (t) {
                                    return new Qp(t)
                                }), [2, e.isBatchInput ? o : o[0]]
                        }
                    })
                })
            }, t.prototype.getDefaultModelName = function () {
                return "face_expression_model"
            }, t.prototype.getClassifierChannelsIn = function () {
                return 256
            }, t.prototype.getClassifierChannelsOut = function () {
                return 7
            }, t
        }(Xp);

    function Zp(t) {
        return t.expressions instanceof Qp
    }

    function tf(t, e) {
        var n = {
            expressions: e
        };
        return Object.assign({}, t, n)
    }
    var ef = function () {
            function t(t, e, n) {
                void 0 === n && (n = new lh(0, 0));
                var r = e.width,
                    o = e.height;
                this._imgDims = new ch(r, o), this._shift = n, this._positions = t.map(function (t) {
                    return t.mul(new lh(r, o)).add(n)
                })
            }
            return Object.defineProperty(t.prototype, "shift", {
                get: function () {
                    return new lh(this._shift.x, this._shift.y)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "imageWidth", {
                get: function () {
                    return this._imgDims.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "imageHeight", {
                get: function () {
                    return this._imgDims.height
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "positions", {
                get: function () {
                    return this._positions
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "relativePositions", {
                get: function () {
                    var e = this;
                    return this._positions.map(function (t) {
                        return t.sub(e._shift).div(new lh(e.imageWidth, e.imageHeight))
                    })
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.forSize = function (t, e) {
                return new this.constructor(this.relativePositions, {
                    width: t,
                    height: e
                })
            }, t.prototype.shiftBy = function (t, e) {
                return new this.constructor(this.relativePositions, this._imgDims, new lh(t, e))
            }, t.prototype.shiftByPoint = function (t) {
                return this.shiftBy(t.x, t.y)
            }, t.prototype.align = function (t, e) {
                if (void 0 === e && (e = {}), t) {
                    var n = t instanceof Lp ? t.box.floor() : new Sh(t);
                    return this.shiftBy(n.x, n.y).align(null, e)
                }
                var r = Object.assign({}, {
                        useDlibAlignment: !1,
                        minBoxPadding: .2
                    }, e),
                    o = r.useDlibAlignment,
                    i = r.minBoxPadding;
                return o ? this.alignDlib() : this.alignMinBbox(i)
            }, t.prototype.alignDlib = function () {
                var t = this.getRefPointsForAlignment(),
                    e = t[0],
                    n = t[1],
                    r = t[2],
                    o = function (t) {
                        return r.sub(t).magnitude()
                    },
                    i = (o(e) + o(n)) / 2,
                    a = Math.floor(i / .45),
                    s = wh(t),
                    u = Math.floor(Math.max(0, s.x - .5 * a)),
                    c = Math.floor(Math.max(0, s.y - .43 * a));
                return new Th(u, c, Math.min(a, this.imageWidth + u), Math.min(a, this.imageHeight + c))
            }, t.prototype.alignMinBbox = function (t) {
                var e, n, r, o, i, a, s, u = (e = this.positions, n = e.map(function (t) {
                    return t.x
                }), r = e.map(function (t) {
                    return t.y
                }), o = n.reduce(function (t, e) {
                    return e < t ? e : t
                }, 1 / 0), i = r.reduce(function (t, e) {
                    return e < t ? e : t
                }, 1 / 0), a = n.reduce(function (t, e) {
                    return t < e ? e : t
                }, 0), s = r.reduce(function (t, e) {
                    return t < e ? e : t
                }, 0), new Rh(o, i, a, s));
                return u.pad(u.width * t, u.height * t)
            }, t.prototype.getRefPointsForAlignment = function () {
                throw new Error("getRefPointsForAlignment not implemented by base class")
            }, t
        }(),
        nf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.getJawOutline = function () {
                return this.positions.slice(0, 17)
            }, e.prototype.getLeftEyeBrow = function () {
                return this.positions.slice(17, 22)
            }, e.prototype.getRightEyeBrow = function () {
                return this.positions.slice(22, 27)
            }, e.prototype.getNose = function () {
                return this.positions.slice(27, 36)
            }, e.prototype.getLeftEye = function () {
                return this.positions.slice(36, 42)
            }, e.prototype.getRightEye = function () {
                return this.positions.slice(42, 48)
            }, e.prototype.getMouth = function () {
                return this.positions.slice(48, 68)
            }, e.prototype.getRefPointsForAlignment = function () {
                return [this.getLeftEye(), this.getRightEye(), this.getMouth()].map(wh)
            }, e
        }(ef);

    function rf(t) {
        return Bp(t) && t.landmarks instanceof ef && t.unshiftedLandmarks instanceof ef && t.alignedRect instanceof Lp
    }

    function of (t, e) {
        var n = t.detection.box,
            r = e.shiftBy(n.x, n.y),
            o = r.align(),
            i = t.detection.imageDims,
            a = {
                landmarks: r,
                unshiftedLandmarks: e,
                alignedRect: new Lp(t.detection.score, o.rescale(i.reverse()), i)
            };
        return Object.assign({}, t, a)
    }
    var af = function (t) {
            void 0 === t && (t = {});
            var e = t.drawLines,
                n = void 0 === e || e,
                r = t.drawPoints,
                o = void 0 === r || r,
                i = t.lineWidth,
                a = t.lineColor,
                s = t.pointSize,
                u = t.pointColor;
            this.drawLines = n, this.drawPoints = o, this.lineWidth = i || 1, this.pointSize = s || 2, this.lineColor = a || "rgba(0, 255, 255, 1)", this.pointColor = u || "rgba(255, 0, 255, 1)"
        },
        sf = function () {
            function t(t, e) {
                void 0 === e && (e = {}), this.faceLandmarks = t, this.options = new af(e)
            }
            return t.prototype.draw = function (t) {
                var e = Gh(t),
                    n = this.options,
                    r = n.drawLines,
                    o = n.drawPoints,
                    i = n.lineWidth,
                    a = n.lineColor,
                    s = n.pointSize,
                    u = n.pointColor;
                if (r && this.faceLandmarks instanceof nf && (e.strokeStyle = a, e.lineWidth = i, Fp(e, this.faceLandmarks.getJawOutline()), Fp(e, this.faceLandmarks.getLeftEyeBrow()), Fp(e, this.faceLandmarks.getRightEyeBrow()), Fp(e, this.faceLandmarks.getNose()), Fp(e, this.faceLandmarks.getLeftEye(), !0), Fp(e, this.faceLandmarks.getRightEye(), !0), Fp(e, this.faceLandmarks.getMouth(), !0)), o) {
                    e.strokeStyle = u, e.fillStyle = u;
                    this.faceLandmarks.positions.forEach(function (t) {
                        e.beginPath(), e.arc(t.x, t.y, s, 0, 2 * Math.PI), e.fill()
                    })
                }
            }, t
        }();
    var uf = Object.freeze({
        drawContour: Fp,
        drawDetections: function (o, t) {
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof Lp ? t.score : Bp(t) ? t.detection.score : void 0,
                    n = t instanceof Lp ? t.box : Bp(t) ? t.detection.box : new Sh(t),
                    r = e ? "" + gh(e) : void 0;
                new jh(n, {
                    label: r
                }).draw(o)
            })
        },
        drawFaceExpressions: function (o, t, i, a) {
            void 0 === i && (i = .1), (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof Qp ? t : Zp(t) ? t.expressions : void 0;
                if (!e) throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");
                var n = e.asSortedArray().filter(function (t) {
                        return t.probability > i
                    }),
                    r = Bp(t) ? t.detection.box.bottomLeft : a || new lh(0, 0);
                new Hh(n.map(function (t) {
                    return t.expression + " (" + gh(t.probability) + ")"
                }), r).draw(o)
            })
        },
        DrawFaceLandmarksOptions: af,
        DrawFaceLandmarks: sf,
        drawFaceLandmarks: function (n, t) {
            (Array.isArray(t) ? t : [t]).forEach(function (t) {
                var e = t instanceof ef ? t : rf(t) ? t.landmarks : void 0;
                if (!e) throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");
                new sf(e).draw(n)
            })
        }
    });

    function cf(t, e) {
        var n, r, o, i, a = [],
            s = np(t),
            u = s.extractWeights,
            c = s.getRemainingWeights,
            l = (o = Yh(n = u, r = a), i = Zh(n, r), {
                extractConvParams: o,
                extractSeparableConvParams: i,
                extractReductionBlockParams: function (t, e, n) {
                    return {
                        separable_conv0: i(t, e, n + "/separable_conv0"),
                        separable_conv1: i(e, e, n + "/separable_conv1"),
                        expansion_conv: o(t, e, 1, n + "/expansion_conv")
                    }
                },
                extractMainBlockParams: function (t, e) {
                    return {
                        separable_conv0: i(t, t, e + "/separable_conv0"),
                        separable_conv1: i(t, t, e + "/separable_conv1"),
                        separable_conv2: i(t, t, e + "/separable_conv2")
                    }
                }
            }),
            h = l.extractSeparableConvParams,
            p = l.extractReductionBlockParams,
            f = l.extractMainBlockParams,
            d = {
                conv_in: (0, l.extractConvParams)(3, 32, 3, "entry_flow/conv_in"),
                reduction_block_0: p(32, 64, "entry_flow/reduction_block_0"),
                reduction_block_1: p(64, 128, "entry_flow/reduction_block_1")
            },
            v = {};
        bh(e, 0, 1).forEach(function (t) {
            v["main_block_" + t] = f(128, "middle_flow/main_block_" + t)
        });
        var m = {
            reduction_block: p(128, 256, "exit_flow/reduction_block"),
            separable_conv: h(256, 512, "exit_flow/separable_conv")
        };
        if (0 !== c().length) throw new Error("weights remaing after extract: " + c().length);
        return {
            paramMappings: a,
            params: {
                entry_flow: d,
                middle_flow: v,
                exit_flow: m
            }
        }
    }

    function lf(t, e) {
        var n, r, o, i = [],
            a = (n = ep(t, i), r = Hp(n), o = tp(n), {
                extractConvParams: r,
                extractSeparableConvParams: o,
                extractReductionBlockParams: function (t) {
                    return {
                        separable_conv0: o(t + "/separable_conv0"),
                        separable_conv1: o(t + "/separable_conv1"),
                        expansion_conv: r(t + "/expansion_conv")
                    }
                },
                extractMainBlockParams: function (t) {
                    return {
                        separable_conv0: o(t + "/separable_conv0"),
                        separable_conv1: o(t + "/separable_conv1"),
                        separable_conv2: o(t + "/separable_conv2")
                    }
                }
            }),
            s = a.extractSeparableConvParams,
            u = a.extractReductionBlockParams,
            c = a.extractMainBlockParams,
            l = {
                conv_in: (0, a.extractConvParams)("entry_flow/conv_in"),
                reduction_block_0: u("entry_flow/reduction_block_0"),
                reduction_block_1: u("entry_flow/reduction_block_1")
            },
            h = {};
        bh(e, 0, 1).forEach(function (t) {
            h["main_block_" + t] = c("middle_flow/main_block_" + t)
        });
        var p = {
            reduction_block: u("exit_flow/reduction_block"),
            separable_conv: s("exit_flow/separable_conv")
        };
        return Xh(t, i), {
            params: {
                entry_flow: l,
                middle_flow: h,
                exit_flow: p
            },
            paramMappings: i
        }
    }

    function hf(t, e, n) {
        return xu(Ss(t, e.filters, n, "same"), e.bias)
    }

    function pf(t, e, n) {
        void 0 === n && (n = !0);
        var r = n ? Xu(t) : t;
        return r = zp(r, e.separable_conv0, [1, 1]), r = zp(Xu(r), e.separable_conv1, [1, 1]), r = Us(r, [3, 3], [2, 2], "same"), r = xu(r, hf(t, e.expansion_conv, [2, 2]))
    }
    var ff, df = function (n) {
        function t(t) {
            var e = n.call(this, "TinyXception") || this;
            return e._numMainBlocks = t, e
        }
        return a(t, n), t.prototype.forwardInput = function (e) {
            var n = this,
                i = this.params;
            if (!i) throw new Error("TinyXception - load model before inference");
            return ue(function () {
                var t = Ep(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(Ve(256)),
                    o = Xu(hf(t, i.entry_flow.conv_in, [2, 2]));
                return o = pf(o = pf(o, i.entry_flow.reduction_block_0, !1), i.entry_flow.reduction_block_1), bh(n._numMainBlocks, 0, 1).forEach(function (t) {
                    var e, n, r;
                    e = o, n = i.middle_flow["main_block_" + t], r = zp(Xu(e), n.separable_conv0, [1, 1]), r = zp(Xu(r), n.separable_conv1, [1, 1]), r = zp(Xu(r), n.separable_conv2, [1, 1]), o = r = xu(r, e)
                }), o = pf(o, i.exit_flow.reduction_block), o = Xu(zp(o, i.exit_flow.separable_conv, [1, 1]))
            })
        }, t.prototype.forward = function (n) {
            return p(this, void 0, void 0, function () {
                var e;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = this.forwardInput, [4, yp(n)];
                        case 1:
                            return [2, e.apply(this, [t.sent()])]
                    }
                })
            })
        }, t.prototype.getDefaultModelName = function () {
            return "tiny_xception_model"
        }, t.prototype.extractParamsFromWeigthMap = function (t) {
            return lf(t, this._numMainBlocks)
        }, t.prototype.extractParams = function (t) {
            return cf(t, this._numMainBlocks)
        }, t
    }(xp);
    (ff = c.Gender || (c.Gender = {})).FEMALE = "female", ff.MALE = "male";
    var vf = function (n) {
            function t(t) {
                void 0 === t && (t = new df(2));
                var e = n.call(this, "AgeGenderNet") || this;
                return e._faceFeatureExtractor = t, e
            }
            return a(t, n), Object.defineProperty(t.prototype, "faceFeatureExtractor", {
                get: function () {
                    return this._faceFeatureExtractor
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.runNet = function (n) {
                var r = this,
                    o = this.params;
                if (!o) throw new Error(this._name + " - load model before inference");
                return ue(function () {
                    var t = n instanceof gp ? r.faceFeatureExtractor.forwardInput(n) : n,
                        e = Gs(t, [7, 7], [2, 2], "valid").as2D(t.shape[0], -1);
                    return {
                        age: $p(e, o.fc.age).as1D(),
                        gender: $p(e, o.fc.gender)
                    }
                })
            }, t.prototype.forwardInput = function (r) {
                var o = this;
                return ue(function () {
                    var t = o.runNet(r),
                        e = t.age,
                        n = t.gender;
                    return {
                        age: e,
                        gender: Le(n)
                    }
                })
            }, t.prototype.forward = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent()])]
                        }
                    })
                })
            }, t.prototype.predictAgeAndGender = function (s) {
                return p(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, u = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, yp(s)];
                            case 1:
                                return e = t.sent(), [4, this.forwardInput(e)];
                            case 2:
                                return n = t.sent(), r = ha(n.age), o = ha(n.gender), i = r.map(function (t, e) {
                                    return {
                                        ageTensor: t,
                                        genderTensor: o[e]
                                    }
                                }), [4, Promise.all(i.map(function (t) {
                                    var a = t.ageTensor,
                                        s = t.genderTensor;
                                    return p(u, void 0, void 0, function () {
                                        var e, n, r, o, i;
                                        return P(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, a.data()];
                                                case 1:
                                                    return e = t.sent()[0], [4, s.data()];
                                                case 2:
                                                    return n = t.sent()[0], o = (r = .5 < n) ? c.Gender.MALE : c.Gender.FEMALE, i = r ? n : 1 - n, a.dispose(), s.dispose(), [2, {
                                                        age: e,
                                                        gender: o,
                                                        genderProbability: i
                                                    }]
                                            }
                                        })
                                    })
                                }))];
                            case 3:
                                return a = t.sent(), n.age.dispose(), n.gender.dispose(), [2, e.isBatchInput ? a : a[0]]
                        }
                    })
                })
            }, t.prototype.getDefaultModelName = function () {
                return "age_gender_model"
            }, t.prototype.dispose = function (t) {
                void 0 === t && (t = !0), this.faceFeatureExtractor.dispose(t), n.prototype.dispose.call(this, t)
            }, t.prototype.loadClassifierParams = function (t) {
                var e = this.extractClassifierParams(t),
                    n = e.params,
                    r = e.paramMappings;
                this._params = n, this._paramMappings = r
            }, t.prototype.extractClassifierParams = function (t) {
                return function (t) {
                    var e = [],
                        n = np(t),
                        r = n.extractWeights,
                        o = n.getRemainingWeights,
                        i = Qh(r, e),
                        a = i(512, 1, "fc/age"),
                        s = i(512, 2, "fc/gender");
                    if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
                    return {
                        paramMappings: e,
                        params: {
                            fc: {
                                age: a,
                                gender: s
                            }
                        }
                    }
                }(t)
            }, t.prototype.extractParamsFromWeigthMap = function (t) {
                var e = Kp(t),
                    n = e.featureExtractorMap,
                    r = e.classifierMap;
                return this.faceFeatureExtractor.loadFromWeightMap(n),
                    function (t) {
                        var e = [],
                            n = ep(t, e);

                        function r(t) {
                            return {
                                weights: n(t + "/weights", 2),
                                bias: n(t + "/bias", 1)
                            }
                        }
                        var o = {
                            fc: {
                                age: r("fc/age"),
                                gender: r("fc/gender")
                            }
                        };
                        return Xh(t, e), {
                            params: o,
                            paramMappings: e
                        }
                    }(r)
            }, t.prototype.extractParams = function (t) {
                var e = t.slice(0, t.length - 1539),
                    n = t.slice(t.length - 1539);
                return this.faceFeatureExtractor.extractWeights(e), this.extractClassifierParams(n)
            }, t
        }(xp),
        mf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.getRefPointsForAlignment = function () {
                var t = this.positions;
                return [t[0], t[1], wh([t[3], t[4]])]
            }, e
        }(ef),
        gf = function () {
            function t(t, e) {
                this._label = t, this._distance = e
            }
            return Object.defineProperty(t.prototype, "label", {
                get: function () {
                    return this._label
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "distance", {
                get: function () {
                    return this._distance
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.toString = function (t) {
                return void 0 === t && (t = !0), this.label + (t ? " (" + gh(this.distance) + ")" : "")
            }, t
        }(),
        yf = function () {
            function t(t, e) {
                if ("string" != typeof t) throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");
                if (!Array.isArray(e) || e.some(function (t) {
                        return !(t instanceof Float32Array)
                    })) throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");
                this._label = t, this._descriptors = e
            }
            return Object.defineProperty(t.prototype, "label", {
                get: function () {
                    return this._label
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "descriptors", {
                get: function () {
                    return this._descriptors
                },
                enumerable: !0,
                configurable: !0
            }), t
        }();

    function xf(s, u) {
        return p(this, void 0, void 0, function () {
            var e, n, r, o, i, a;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = zh.getEnv().Canvas, (n = s) instanceof e ? [3, 5] : [4, yp(s)];
                    case 1:
                        if (1 < (r = t.sent()).batchSize) throw new Error("extractFaces - batchSize > 1 not supported");
                        return (o = r.getInput(0)) instanceof e ? (i = o, [3, 4]) : [3, 2];
                    case 2:
                        return [4, pp(o)];
                    case 3:
                        i = t.sent(), t.label = 4;
                    case 4:
                        n = i, t.label = 5;
                    case 5:
                        return a = Gh(n), [2, u.map(function (t) {
                            return t instanceof Lp ? t.forSize(n.width, n.height).box.floor() : t
                        }).map(function (t) {
                            return t.clipAtImageBorders(n.width, n.height)
                        }).map(function (t) {
                            var e = t.x,
                                n = t.y,
                                r = t.width,
                                o = t.height,
                                i = up({
                                    width: r,
                                    height: o
                                });
                            return Gh(i).putImageData(a.getImageData(e, n, r, o), 0, 0), i
                        })]
                }
            })
        })
    }

    function wf(u, e) {
        return p(this, void 0, void 0, function () {
            return P(this, function (t) {
                if (!fh(u) && !dh(u)) throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");
                if (dh(u) && 1 < u.shape[0]) throw new Error("extractFaceTensors - batchSize > 1 not supported");
                return [2, ue(function () {
                    var t = u.shape.slice(dh(u) ? 1 : 0),
                        i = t[0],
                        a = t[1],
                        s = t[2];
                    return e.map(function (t) {
                        return t instanceof Lp ? t.forSize(a, i).box : t
                    }).map(function (t) {
                        return t.clipAtImageBorders(a, i)
                    }).map(function (t) {
                        var e = t.x,
                            n = t.y,
                            r = t.width,
                            o = t.height;
                        return $s(u.as3D(i, a, s), [n, e, 0], [o, r, s])
                    })
                })]
            })
        })
    }
    var bf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.postProcess = function (t, o, e) {
                var i = e.map(function (t) {
                        var e = t.width,
                            n = t.height,
                            r = o / Math.max(n, e);
                        return {
                            width: e * r,
                            height: n * r
                        }
                    }),
                    a = i.length;
                return ue(function () {
                    var n = function (t, e) {
                            return ua([Je([68], t), Je([68], e)], 1).as2D(1, 136).as1D()
                        },
                        r = function (t, e) {
                            var n = i[t],
                                r = n.width,
                                o = n.height;
                            return e(r, o) ? Math.abs(r - o) / 2 : 0
                        };
                    return t.mul(Je([a, 136], o)).sub(ua(Array.from(Array(a), function (t, e) {
                        return n(r(e, function (t, e) {
                            return t < e
                        }), r(e, function (t, e) {
                            return e < t
                        }))
                    }))).div(ua(Array.from(Array(a), function (t, e) {
                        return n(i[e].width, i[e].height)
                    })))
                })
            }, e.prototype.forwardInput = function (e) {
                var n = this;
                return ue(function () {
                    var t = n.runNet(e);
                    return n.postProcess(t, e.inputSize, e.inputDimensions.map(function (t) {
                        return {
                            height: t[0],
                            width: t[1]
                        }
                    }))
                })
            }, e.prototype.forward = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent()])]
                        }
                    })
                })
            }, e.prototype.detectLandmarks = function (o) {
                return p(this, void 0, void 0, function () {
                    var u, e, n, r = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, yp(o)];
                            case 1:
                                return u = t.sent(), e = ue(function () {
                                    return ha(r.forwardInput(u))
                                }), [4, Promise.all(e.map(function (a, s) {
                                    return p(r, void 0, void 0, function () {
                                        var e, n, r, o, i;
                                        return P(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return r = (n = Array).from, [4, a.data()];
                                                case 1:
                                                    return e = r.apply(n, [t.sent()]), o = e.filter(function (t, e) {
                                                        return mh(e)
                                                    }), i = e.filter(function (t, e) {
                                                        return !mh(e)
                                                    }), [2, new nf(Array(68).fill(0).map(function (t, e) {
                                                        return new lh(o[e], i[e])
                                                    }), {
                                                        height: u.getInputHeight(s),
                                                        width: u.getInputWidth(s)
                                                    })]
                                            }
                                        })
                                    })
                                }))];
                            case 2:
                                return n = t.sent(), e.forEach(function (t) {
                                    return t.dispose()
                                }), [2, u.isBatchInput ? n : n[0]]
                        }
                    })
                })
            }, e.prototype.getClassifierChannelsOut = function () {
                return 136
            }, e
        }(Xp),
        Ef = function (e) {
            function t(t) {
                return void 0 === t && (t = new jp), e.call(this, "FaceLandmark68Net", t) || this
            }
            return a(t, e), t.prototype.getDefaultModelName = function () {
                return "face_landmark_68_model"
            }, t.prototype.getClassifierChannelsIn = function () {
                return 256
            }, t
        }(bf);
    var Cf = function (t) {
            function e() {
                return t.call(this, "TinyFaceFeatureExtractor") || this
            }
            return a(e, t), e.prototype.forwardInput = function (e) {
                var n = this.params;
                if (!n) throw new Error("TinyFaceFeatureExtractor - load model before inference");
                return ue(function () {
                    var t = Up(Ep(e.toBatchTensor(112, !0), [122.782, 117.001, 104.298]).div(Ve(255)), n.dense0, !0);
                    return t = Up(t = Up(t, n.dense1), n.dense2), t = Gs(t, [14, 14], [2, 2], "valid")
                })
            }, e.prototype.forward = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent()])]
                        }
                    })
                })
            }, e.prototype.getDefaultModelName = function () {
                return "face_feature_extractor_tiny_model"
            }, e.prototype.extractParamsFromWeigthMap = function (t) {
                return r = qp(e = t, n = []).extractDenseBlock3Params, o = {
                    dense0: r("dense0", !0),
                    dense1: r("dense1"),
                    dense2: r("dense2")
                }, Xh(e, n), {
                    params: o,
                    paramMappings: n
                };
                var e, n, r, o
            }, e.prototype.extractParams = function (t) {
                return function (t) {
                    var e = [],
                        n = np(t),
                        r = n.extractWeights,
                        o = n.getRemainingWeights,
                        i = Vp(r, e).extractDenseBlock3Params,
                        a = i(3, 32, "dense0", !0),
                        s = i(32, 64, "dense1"),
                        u = i(64, 128, "dense2");
                    if (0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
                    return {
                        paramMappings: e,
                        params: {
                            dense0: a,
                            dense1: s,
                            dense2: u
                        }
                    }
                }(t)
            }, e
        }(xp),
        _f = function (e) {
            function t(t) {
                return void 0 === t && (t = new Cf), e.call(this, "FaceLandmark68TinyNet", t) || this
            }
            return a(t, e), t.prototype.getDefaultModelName = function () {
                return "face_landmark_68_tiny_model"
            }, t.prototype.getClassifierChannelsIn = function () {
                return 128
            }, t
        }(bf),
        Sf = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e
        }(Ef);

    function Rf(t, e, n, r, o) {
        void 0 === o && (o = "same");
        var i, a, s = e.conv,
            u = s.filters,
            c = s.bias,
            l = Ss(t, u, n, o);
        return l = xu(l, c), i = l, a = e.scale, l = xu(Du(i, a.weights), a.biases), r ? Xu(l) : l
    }

    function Nf(t, e) {
        return Rf(t, e, [1, 1], !1)
    }

    function kf(t, e) {
        return Rf(t, e, [2, 2], !0, "valid")
    }

    function If(u, c) {
        function l(t, e, n, r) {
            var o = function (t, e, n) {
                    var r = u(t),
                        o = r.length / (e * n * n);
                    if (vh(o)) throw new Error("depth has to be an integer: " + o + ", weights.length: " + r.length + ", numFilters: " + e + ", filterSize: " + n);
                    return ue(function () {
                        return Qu($e(r, [e, o, n, n]), [2, 3, 1, 0])
                    })
                }(t, e, n),
                i = He(u(e));
            return c.push({
                paramPath: r + "/filters"
            }, {
                paramPath: r + "/bias"
            }), {
                filters: o,
                bias: i
            }
        }

        function i(t, e, n, r) {
            var o, i, a, s;
            return {
                conv: l(t, e, n, r + "/conv"),
                scale: (i = r + "/scale", a = He(u(o = e)), s = He(u(o)), c.push({
                    paramPath: i + "/weights"
                }, {
                    paramPath: i + "/biases"
                }), {
                    weights: a,
                    biases: s
                })
            }
        }
        return {
            extractConvLayerParams: i,
            extractResidualLayerParams: function (t, e, n, r, o) {
                return void 0 === o && (o = !1), {
                    conv1: i((o ? .5 : 1) * t, e, n, r + "/conv1"),
                    conv2: i(t, e, n, r + "/conv2")
                }
            }
        }
    }

    function Tf(t, e) {
        var n = ep(t, e);

        function r(t) {
            var e;
            return {
                conv: {
                    filters: n(t + "/conv/filters", 4),
                    bias: n(t + "/conv/bias", 1)
                },
                scale: {
                    weights: n((e = t) + "/scale/weights", 1),
                    biases: n(e + "/scale/biases", 1)
                }
            }
        }
        return {
            extractConvLayerParams: r,
            extractResidualLayerParams: function (t) {
                return {
                    conv1: r(t + "/conv1"),
                    conv2: r(t + "/conv2")
                }
            }
        }
    }

    function Af(t, e) {
        var n, r, o = (n = t, r = e.conv1, Rf(n, r, [1, 1], !0));
        return o = Nf(o, e.conv2), o = xu(o, t), o = Xu(o)
    }

    function Df(t, e) {
        var n = kf(t, e.conv1);
        n = Nf(n, e.conv2);
        var r = Gs(t, 2, 2, "valid"),
            o = Qe(r.shape),
            i = r.shape[3] !== n.shape[3];
        if (r.shape[1] !== n.shape[1] || r.shape[2] !== n.shape[2]) {
            var a = n.shape.slice();
            a[1] = 1;
            var s = Qe(a),
                u = (n = _i([n, s], 1)).shape.slice();
            u[2] = 1;
            var c = Qe(u);
            n = _i([n, c], 2)
        }
        return r = i ? _i([r, o], 3) : r, n = xu(r, n), n = Xu(n)
    }
    var Mf = function (t) {
        function e() {
            return t.call(this, "FaceRecognitionNet") || this
        }
        return a(e, t), e.prototype.forwardInput = function (n) {
            var r = this.params;
            if (!r) throw new Error("FaceRecognitionNet - load model before inference");
            return ue(function () {
                var t = kf(Ep(n.toBatchTensor(150, !0).toFloat(), [122.782, 117.001, 104.298]).div(Ve(256)), r.conv32_down),
                    e = (t = Df(t = Af(t = Af(t = Df(t = Af(t = Af(t = Df(t = Af(t = Af(t = Af(t = Df(t = Af(t = Af(t = Af(t = Us(t, 3, 2, "valid"), r.conv32_1), r.conv32_2), r.conv32_3), r.conv64_down), r.conv64_1), r.conv64_2), r.conv64_3), r.conv128_down), r.conv128_1), r.conv128_2), r.conv256_down), r.conv256_1), r.conv256_2), r.conv256_down_out)).mean([1, 2]);
                return As(e, r.fc)
            })
        }, e.prototype.forward = function (n) {
            return p(this, void 0, void 0, function () {
                var e;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return e = this.forwardInput, [4, yp(n)];
                        case 1:
                            return [2, e.apply(this, [t.sent()])]
                    }
                })
            })
        }, e.prototype.computeFaceDescriptor = function (i) {
            return p(this, void 0, void 0, function () {
                var e, n, r, o = this;
                return P(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return [4, yp(i)];
                        case 1:
                            return e = t.sent(), n = ue(function () {
                                return ha(o.forwardInput(e))
                            }), [4, Promise.all(n.map(function (t) {
                                return t.data()
                            }))];
                        case 2:
                            return r = t.sent(), n.forEach(function (t) {
                                return t.dispose()
                            }), [2, e.isBatchInput ? r : r[0]]
                    }
                })
            })
        }, e.prototype.getDefaultModelName = function () {
            return "face_recognition_model"
        }, e.prototype.extractParamsFromWeigthMap = function (t) {
            return function (t) {
                var e = [],
                    n = Tf(t, e),
                    r = n.extractConvLayerParams,
                    o = n.extractResidualLayerParams,
                    i = r("conv32_down"),
                    a = o("conv32_1"),
                    s = o("conv32_2"),
                    u = o("conv32_3"),
                    c = o("conv64_down"),
                    l = o("conv64_1"),
                    h = o("conv64_2"),
                    p = o("conv64_3"),
                    f = o("conv128_down"),
                    d = o("conv128_1"),
                    v = o("conv128_2"),
                    m = o("conv256_down"),
                    g = o("conv256_1"),
                    y = o("conv256_2"),
                    x = o("conv256_down_out"),
                    w = t.fc;
                if (e.push({
                        originalPath: "fc",
                        paramPath: "fc"
                    }), !ph(w)) throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + w);
                var b = {
                    conv32_down: i,
                    conv32_1: a,
                    conv32_2: s,
                    conv32_3: u,
                    conv64_down: c,
                    conv64_1: l,
                    conv64_2: h,
                    conv64_3: p,
                    conv128_down: f,
                    conv128_1: d,
                    conv128_2: v,
                    conv256_down: m,
                    conv256_1: g,
                    conv256_2: y,
                    conv256_down_out: x,
                    fc: w
                };
                return Xh(t, e), {
                    params: b,
                    paramMappings: e
                }
            }(t)
        }, e.prototype.extractParams = function (t) {
            return function (t) {
                var e = np(t),
                    n = e.extractWeights,
                    r = e.getRemainingWeights,
                    o = [],
                    i = If(n, o),
                    a = i.extractConvLayerParams,
                    s = i.extractResidualLayerParams,
                    u = a(4704, 32, 7, "conv32_down"),
                    c = s(9216, 32, 3, "conv32_1"),
                    l = s(9216, 32, 3, "conv32_2"),
                    h = s(9216, 32, 3, "conv32_3"),
                    p = s(36864, 64, 3, "conv64_down", !0),
                    f = s(36864, 64, 3, "conv64_1"),
                    d = s(36864, 64, 3, "conv64_2"),
                    v = s(36864, 64, 3, "conv64_3"),
                    m = s(147456, 128, 3, "conv128_down", !0),
                    g = s(147456, 128, 3, "conv128_1"),
                    y = s(147456, 128, 3, "conv128_2"),
                    x = s(589824, 256, 3, "conv256_down", !0),
                    w = s(589824, 256, 3, "conv256_1"),
                    b = s(589824, 256, 3, "conv256_2"),
                    E = s(589824, 256, 3, "conv256_down_out"),
                    C = ue(function () {
                        return Qu(qe(n(32768), [128, 256]), [1, 0])
                    });
                if (o.push({
                        paramPath: "fc"
                    }), 0 !== r().length) throw new Error("weights remaing after extract: " + r().length);
                return {
                    params: {
                        conv32_down: u,
                        conv32_1: c,
                        conv32_2: l,
                        conv32_3: h,
                        conv64_down: p,
                        conv64_1: f,
                        conv64_2: d,
                        conv64_3: v,
                        conv128_down: m,
                        conv128_1: g,
                        conv128_2: y,
                        conv256_down: x,
                        conv256_1: w,
                        conv256_2: b,
                        conv256_down_out: E,
                        fc: C
                    },
                    paramMappings: o
                }
            }(t)
        }, e
    }(xp);

    function Of(t, e) {
        var n = {
            descriptor: e
        };
        return Object.assign({}, t, n)
    }
    var Pf = function () {
        function t(t) {
            var e = void 0 === t ? {} : t,
                n = e.minFaceSize,
                r = e.scaleFactor,
                o = e.maxNumScales,
                i = e.scoreThresholds,
                a = e.scaleSteps;
            if (this._name = "MtcnnOptions", this._minFaceSize = n || 20, this._scaleFactor = r || .709, this._maxNumScales = o || 10, this._scoreThresholds = i || [.6, .7, .7], this._scaleSteps = a, "number" != typeof this._minFaceSize || this._minFaceSize < 0) throw new Error(this._name + " - expected minFaceSize to be a number > 0");
            if ("number" != typeof this._scaleFactor || this._scaleFactor <= 0 || 1 <= this._scaleFactor) throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
            if ("number" != typeof this._maxNumScales || this._maxNumScales < 0) throw new Error(this._name + " - expected maxNumScales to be a number > 0");
            if (!Array.isArray(this._scoreThresholds) || 3 !== this._scoreThresholds.length || this._scoreThresholds.some(function (t) {
                    return "number" != typeof t
                })) throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
            if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function (t) {
                    return "number" != typeof t
                }))) throw new Error(this._name + " - expected scaleSteps to be an array of numbers")
        }
        return Object.defineProperty(t.prototype, "minFaceSize", {
            get: function () {
                return this._minFaceSize
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "scaleFactor", {
            get: function () {
                return this._scaleFactor
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "maxNumScales", {
            get: function () {
                return this._maxNumScales
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "scoreThresholds", {
            get: function () {
                return this._scoreThresholds
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "scaleSteps", {
            get: function () {
                return this._scaleSteps
            },
            enumerable: !0,
            configurable: !0
        }), t
    }();

    function Ff(l, h) {
        function i(t, e, n, r, o) {
            var i = $e(l(t * e * n * n), [n, n, t, e]),
                a = He(l(e));
            return h.push({
                paramPath: r + "/filters"
            }, {
                paramPath: r + "/" + (o ? "batch_norm_offset" : "bias")
            }), {
                filters: i,
                bias: a
            }
        }

        function p(t, e, n, r) {
            var o = i(t, e, n, r, !0);
            return {
                filters: o.filters,
                batch_norm_offset: o.bias
            }
        }

        function t(t, e, n) {
            var r, o, i, a, s, u, c;
            return {
                depthwise_conv: (o = n + "/depthwise_conv", i = $e(l(9 * (r = t)), [3, 3, r, 1]), a = He(l(r)), s = He(l(r)), u = He(l(r)), c = He(l(r)), h.push({
                    paramPath: o + "/filters"
                }, {
                    paramPath: o + "/batch_norm_scale"
                }, {
                    paramPath: o + "/batch_norm_offset"
                }, {
                    paramPath: o + "/batch_norm_mean"
                }, {
                    paramPath: o + "/batch_norm_variance"
                }), {
                    filters: i,
                    batch_norm_scale: a,
                    batch_norm_offset: s,
                    batch_norm_mean: u,
                    batch_norm_variance: c
                }),
                pointwise_conv: p(t, e, 1, n + "/pointwise_conv")
            }
        }
        return {
            extractMobilenetV1Params: function () {
                return {
                    conv_0: p(3, 32, 3, "mobilenetv1/conv_0"),
                    conv_1: t(32, 64, "mobilenetv1/conv_1"),
                    conv_2: t(64, 128, "mobilenetv1/conv_2"),
                    conv_3: t(128, 128, "mobilenetv1/conv_3"),
                    conv_4: t(128, 256, "mobilenetv1/conv_4"),
                    conv_5: t(256, 256, "mobilenetv1/conv_5"),
                    conv_6: t(256, 512, "mobilenetv1/conv_6"),
                    conv_7: t(512, 512, "mobilenetv1/conv_7"),
                    conv_8: t(512, 512, "mobilenetv1/conv_8"),
                    conv_9: t(512, 512, "mobilenetv1/conv_9"),
                    conv_10: t(512, 512, "mobilenetv1/conv_10"),
                    conv_11: t(512, 512, "mobilenetv1/conv_11"),
                    conv_12: t(512, 1024, "mobilenetv1/conv_12"),
                    conv_13: t(1024, 1024, "mobilenetv1/conv_13")
                }
            },
            extractPredictionLayerParams: function () {
                return {
                    conv_0: p(1024, 256, 1, "prediction_layer/conv_0"),
                    conv_1: p(256, 512, 3, "prediction_layer/conv_1"),
                    conv_2: p(512, 128, 1, "prediction_layer/conv_2"),
                    conv_3: p(128, 256, 3, "prediction_layer/conv_3"),
                    conv_4: p(256, 128, 1, "prediction_layer/conv_4"),
                    conv_5: p(128, 256, 3, "prediction_layer/conv_5"),
                    conv_6: p(256, 64, 1, "prediction_layer/conv_6"),
                    conv_7: p(64, 128, 3, "prediction_layer/conv_7"),
                    box_predictor_0: {
                        box_encoding_predictor: i(512, 12, 1, "prediction_layer/box_predictor_0/box_encoding_predictor"),
                        class_predictor: i(512, 9, 1, "prediction_layer/box_predictor_0/class_predictor")
                    },
                    box_predictor_1: {
                        box_encoding_predictor: i(1024, 24, 1, "prediction_layer/box_predictor_1/box_encoding_predictor"),
                        class_predictor: i(1024, 18, 1, "prediction_layer/box_predictor_1/class_predictor")
                    },
                    box_predictor_2: {
                        box_encoding_predictor: i(512, 24, 1, "prediction_layer/box_predictor_2/box_encoding_predictor"),
                        class_predictor: i(512, 18, 1, "prediction_layer/box_predictor_2/class_predictor")
                    },
                    box_predictor_3: {
                        box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_3/box_encoding_predictor"),
                        class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_3/class_predictor")
                    },
                    box_predictor_4: {
                        box_encoding_predictor: i(256, 24, 1, "prediction_layer/box_predictor_4/box_encoding_predictor"),
                        class_predictor: i(256, 18, 1, "prediction_layer/box_predictor_4/class_predictor")
                    },
                    box_predictor_5: {
                        box_encoding_predictor: i(128, 24, 1, "prediction_layer/box_predictor_5/box_encoding_predictor"),
                        class_predictor: i(128, 18, 1, "prediction_layer/box_predictor_5/class_predictor")
                    }
                }
            }
        }
    }

    function Lf(t) {
        var e = [],
            n = function (t, e) {
                var i = ep(t, e);

                function a(t, e, n) {
                    return {
                        filters: i(t + "/Conv2d_" + e + "_pointwise/weights", 4, n + "/filters"),
                        batch_norm_offset: i(t + "/Conv2d_" + e + "_pointwise/convolution_bn_offset", 1, n + "/batch_norm_offset")
                    }
                }

                function n(t) {
                    var e = "mobilenetv1/conv_" + t,
                        n = "MobilenetV1/Conv2d_" + t + "_depthwise",
                        r = e + "/depthwise_conv",
                        o = e + "/pointwise_conv";
                    return {
                        depthwise_conv: {
                            filters: i(n + "/depthwise_weights", 4, r + "/filters"),
                            batch_norm_scale: i(n + "/BatchNorm/gamma", 1, r + "/batch_norm_scale"),
                            batch_norm_offset: i(n + "/BatchNorm/beta", 1, r + "/batch_norm_offset"),
                            batch_norm_mean: i(n + "/BatchNorm/moving_mean", 1, r + "/batch_norm_mean"),
                            batch_norm_variance: i(n + "/BatchNorm/moving_variance", 1, r + "/batch_norm_variance")
                        },
                        pointwise_conv: a("MobilenetV1", t, o)
                    }
                }

                function r(t, e) {
                    return {
                        filters: i(t + "/weights", 4, e + "/filters"),
                        bias: i(t + "/biases", 1, e + "/bias")
                    }
                }

                function o(t) {
                    return {
                        box_encoding_predictor: r("Prediction/BoxPredictor_" + t + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + t + "/box_encoding_predictor"),
                        class_predictor: r("Prediction/BoxPredictor_" + t + "/ClassPredictor", "prediction_layer/box_predictor_" + t + "/class_predictor")
                    }
                }
                return {
                    extractMobilenetV1Params: function () {
                        return {
                            conv_0: a("MobilenetV1", 0, "mobilenetv1/conv_0"),
                            conv_1: n(1),
                            conv_2: n(2),
                            conv_3: n(3),
                            conv_4: n(4),
                            conv_5: n(5),
                            conv_6: n(6),
                            conv_7: n(7),
                            conv_8: n(8),
                            conv_9: n(9),
                            conv_10: n(10),
                            conv_11: n(11),
                            conv_12: n(12),
                            conv_13: n(13)
                        }
                    },
                    extractPredictionLayerParams: function () {
                        return {
                            conv_0: a("Prediction", 0, "prediction_layer/conv_0"),
                            conv_1: a("Prediction", 1, "prediction_layer/conv_1"),
                            conv_2: a("Prediction", 2, "prediction_layer/conv_2"),
                            conv_3: a("Prediction", 3, "prediction_layer/conv_3"),
                            conv_4: a("Prediction", 4, "prediction_layer/conv_4"),
                            conv_5: a("Prediction", 5, "prediction_layer/conv_5"),
                            conv_6: a("Prediction", 6, "prediction_layer/conv_6"),
                            conv_7: a("Prediction", 7, "prediction_layer/conv_7"),
                            box_predictor_0: o(0),
                            box_predictor_1: o(1),
                            box_predictor_2: o(2),
                            box_predictor_3: o(3),
                            box_predictor_4: o(4),
                            box_predictor_5: o(5)
                        }
                    }
                }
            }(t, e),
            r = n.extractMobilenetV1Params,
            o = n.extractPredictionLayerParams,
            i = t["Output/extra_dim"];
        if (e.push({
                originalPath: "Output/extra_dim",
                paramPath: "output_layer/extra_dim"
            }), !fh(i)) throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + i);
        var a = {
            mobilenetv1: r(),
            prediction_layer: o(),
            output_layer: {
                extra_dim: i
            }
        };
        return Xh(t, e), {
            params: a,
            paramMappings: e
        }
    }

    function Bf(e, n, r) {
        return ue(function () {
            var t = Ss(e, n.filters, r, "same");
            return t = xu(t, n.batch_norm_offset), Sa(t, 0, 6)
        })
    }
    var Wf = .0010000000474974513;

    function zf(t, e) {
        return ue(function () {
            var u = null,
                c = Bf(t, e.conv_0, [2, 2]);
            if ([e.conv_1, e.conv_2, e.conv_3, e.conv_4, e.conv_5, e.conv_6, e.conv_7, e.conv_8, e.conv_9, e.conv_10, e.conv_11, e.conv_12, e.conv_13].forEach(function (t, e) {
                    var n, r, o, i, a = e + 1,
                        s = (n = a, [2, 4, 6, 12].some(function (t) {
                            return t === n
                        }) ? [2, 2] : [1, 1]);
                    r = c, o = t.depthwise_conv, i = s, c = Bf(c = ue(function () {
                        var t = ks(r, o.filters, i, "same");
                        return t = us(t, o.batch_norm_mean, o.batch_norm_variance, o.batch_norm_offset, o.batch_norm_scale, Wf), Sa(t, 0, 6)
                    }), t.pointwise_conv, [1, 1]), 11 === a && (u = c)
                }), null === u) throw new Error("mobileNetV1 - output of conv layer 11 is null");
            return {
                out: c,
                conv11: u
            }
        })
    }

    function Uf(t, e, n) {
        var r = t.arraySync(),
            o = Math.min(r[e][0], r[e][2]),
            i = Math.min(r[e][1], r[e][3]),
            a = Math.max(r[e][0], r[e][2]),
            s = Math.max(r[e][1], r[e][3]),
            u = Math.min(r[n][0], r[n][2]),
            c = Math.min(r[n][1], r[n][3]),
            l = Math.max(r[n][0], r[n][2]),
            h = Math.max(r[n][1], r[n][3]),
            p = (a - o) * (s - i),
            f = (l - u) * (h - c);
        if (p <= 0 || f <= 0) return 0;
        var d = Math.max(o, u),
            v = Math.max(i, c),
            m = Math.min(a, l),
            g = Math.min(s, h),
            y = Math.max(m - d, 0) * Math.max(g - v, 0);
        return y / (p + f - y)
    }

    function Gf(t, e) {
        var n, r, o = (n = ha(Qu(t, [1, 0])), {
                sizes: r = [Bu(n[2], n[0]), Bu(n[3], n[1])],
                centers: [xu(n[0], Cu(r[0], Ve(2))), xu(n[1], Cu(r[1], Ve(2)))]
            }),
            i = o.sizes,
            a = o.centers,
            s = ha(Qu(e, [1, 0])),
            u = Cu(Du(Ia(Cu(s[2], Ve(5))), i[0]), Ve(2)),
            c = xu(Du(Cu(s[0], Ve(10)), i[0]), a[0]),
            l = Cu(Du(Ia(Cu(s[3], Ve(5))), i[1]), Ve(2)),
            h = xu(Du(Cu(s[1], Ve(10)), i[1]), a[1]);
        return Qu(ua([Bu(c, u), Bu(h, l), xu(c, u), xu(h, l)]), [1, 0])
    }

    function Vf(e, n) {
        return ue(function () {
            var t = e.shape[0];
            return {
                boxPredictionEncoding: ia(Kh(e, n.box_encoding_predictor), [t, -1, 1, 4]),
                classPrediction: ia(Kh(e, n.class_predictor), [t, -1, 3])
            }
        })
    }
    var Hf = function () {
            function t(t) {
                var e = void 0 === t ? {} : t,
                    n = e.minConfidence,
                    r = e.maxResults;
                if (this._name = "SsdMobilenetv1Options", this._minConfidence = n || .5, this._maxResults = r || 100, "number" != typeof this._minConfidence || this._minConfidence <= 0 || 1 <= this._minConfidence) throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
                if ("number" != typeof this._maxResults) throw new Error(this._name + " - expected maxResults to be a number")
            }
            return Object.defineProperty(t.prototype, "minConfidence", {
                get: function () {
                    return this._minConfidence
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "maxResults", {
                get: function () {
                    return this._maxResults
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(),
        qf = function (t) {
            function e() {
                return t.call(this, "SsdMobilenetv1") || this
            }
            return a(e, t), e.prototype.forwardInput = function (u) {
                var c = this.params;
                if (!c) throw new Error("SsdMobilenetv1 - load model before inference");
                return ue(function () {
                    var l, h, p, o, i, a, t = u.toBatchTensor(512, !1).toFloat(),
                        e = zf(Bu(Du(t, Ve(.007843137718737125)), Ve(1)), c.mobilenetv1),
                        n = (l = e.out, h = e.conv11, p = c.prediction_layer, ue(function () {
                            var t = Bf(Bf(l, p.conv_0, [1, 1]), p.conv_1, [2, 2]),
                                e = Bf(Bf(t, p.conv_2, [1, 1]), p.conv_3, [2, 2]),
                                n = Bf(Bf(e, p.conv_4, [1, 1]), p.conv_5, [2, 2]),
                                r = Bf(Bf(n, p.conv_6, [1, 1]), p.conv_7, [2, 2]),
                                o = Vf(h, p.box_predictor_0),
                                i = Vf(l, p.box_predictor_1),
                                a = Vf(t, p.box_predictor_2),
                                s = Vf(e, p.box_predictor_3),
                                u = Vf(n, p.box_predictor_4),
                                c = Vf(r, p.box_predictor_5);
                            return {
                                boxPredictions: _i([o.boxPredictionEncoding, i.boxPredictionEncoding, a.boxPredictionEncoding, s.boxPredictionEncoding, u.boxPredictionEncoding, c.boxPredictionEncoding], 1),
                                classPredictions: _i([o.classPrediction, i.classPrediction, a.classPrediction, s.classPrediction, u.classPrediction, c.classPrediction], 1)
                            }
                        })),
                        r = n.boxPredictions,
                        s = n.classPredictions;
                    return o = r, i = s, a = c.output_layer, ue(function () {
                        var t = o.shape[0],
                            e = Gf(ia(ca(a.extra_dim, [t, 1, 1]), [-1, 4]), ia(o, [-1, 4]));
                        e = ia(e, [t, e.shape[0] / t, 4]);
                        var n = Wa(Hs(i, [0, 0, 1], [-1, -1, -1])),
                            r = Hs(n, [0, 0, 0], [-1, -1, 1]);
                        return r = ia(r, [t, r.shape[1]]), {
                            boxes: ha(e),
                            scores: ha(r)
                        }
                    })
                })
            }, e.prototype.forward = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent()])]
                        }
                    })
                })
            }, e.prototype.locateFaces = function (T, A) {
                return void 0 === A && (A = {}), p(this, void 0, void 0, function () {
                    var l, h, p, f, d, v, m, g, y, x, w, b, E, C, _, S, R, N, k, I;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return l = new Hf(A), h = l.maxResults, p = l.minConfidence, [4, yp(T)];
                            case 1:
                                for (f = t.sent(), d = this.forwardInput(f), v = d.boxes, m = d.scores, g = v[0], y = m[0], x = 1; x < v.length; x++) v[x].dispose(), m[x].dispose();
                                return E = (b = Array).from, [4, y.data()];
                            case 2:
                                return w = E.apply(b, [t.sent()]), e = w, n = h, i = .5, a = p, r = (o = g).shape[0], s = Math.min(n, r), u = e.map(function (t, e) {
                                    return {
                                        score: t,
                                        boxIndex: e
                                    }
                                }).filter(function (t) {
                                    return t.score > a
                                }).sort(function (t, e) {
                                    return e.score - t.score
                                }), c = [], u.forEach(function (t) {
                                    if (!(c.length >= s)) {
                                        for (var e = t.score, n = c.length - 1; 0 <= n; --n) {
                                            var r = Uf(o, t.boxIndex, c[n]);
                                            if (0 !== r && (t.score *= r <= i ? 1 : 0, t.score <= a)) break
                                        }
                                        e === t.score && c.push(t.boxIndex)
                                    }
                                }), C = c, _ = f.getReshapedInputDimensions(0), S = f.inputSize, R = S / _.width, N = S / _.height, k = g.arraySync(), I = C.map(function (t) {
                                    var e = [Math.max(0, k[t][0]), Math.min(1, k[t][2])].map(function (t) {
                                            return t * N
                                        }),
                                        n = e[0],
                                        r = e[1],
                                        o = [Math.max(0, k[t][1]), Math.min(1, k[t][3])].map(function (t) {
                                            return t * R
                                        }),
                                        i = o[0],
                                        a = o[1];
                                    return new Lp(w[t], new Th(i, n, a - i, r - n), {
                                        height: f.getInputHeight(0),
                                        width: f.getInputWidth(0)
                                    })
                                }), g.dispose(), y.dispose(), [2, I]
                        }
                        var o, e, n, i, a, r, s, u, c
                    })
                })
            }, e.prototype.getDefaultModelName = function () {
                return "ssd_mobilenetv1_model"
            }, e.prototype.extractParamsFromWeigthMap = function (t) {
                return Lf(t)
            }, e.prototype.extractParams = function (t) {
                return function (t) {
                    var e = [],
                        n = np(t),
                        r = n.extractWeights,
                        o = n.getRemainingWeights,
                        i = Ff(r, e),
                        a = i.extractMobilenetV1Params,
                        s = i.extractPredictionLayerParams,
                        u = a(),
                        c = s(),
                        l = {
                            extra_dim: je(r(20472), [1, 5118, 4])
                        };
                    if (e.push({
                            paramPath: "output_layer/extra_dim"
                        }), 0 !== o().length) throw new Error("weights remaing after extract: " + o().length);
                    return {
                        params: {
                            mobilenetv1: u,
                            prediction_layer: c,
                            output_layer: l
                        },
                        paramMappings: e
                    }
                }(t)
            }, e
        }(xp);

    function jf(t) {
        var e = new qf;
        return e.extractWeights(t), e
    }
    var $f = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e
        }(qf),
        Kf = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._name = "TinyFaceDetectorOptions", t
            }
            return a(t, e), t
        }(Mp),
        Xf = function () {
            function t() {}
            return t.prototype.then = function (n) {
                return p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = n, [4, this.run()];
                            case 1:
                                return [2, e.apply(void 0, [t.sent()])]
                        }
                    })
                })
            }, t.prototype.run = function () {
                return p(this, void 0, void 0, function () {
                    return P(this, function (t) {
                        throw new Error("ComposableTask - run is not implemented")
                    })
                })
            }, t
        }();

    function Yf(a, s, u, c, l) {
        return void 0 === l && (l = function (t) {
            return t.alignedRect
        }), p(this, void 0, void 0, function () {
            var e, n, r, o, i;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = a.map(function (t) {
                            return rf(t) ? l(t) : t.detection
                        }), (r = c) ? [3, 5] : s instanceof dt ? [4, wf(s, e)] : [3, 2];
                    case 1:
                        return o = t.sent(), [3, 4];
                    case 2:
                        return [4, xf(s, e)];
                    case 3:
                        o = t.sent(), t.label = 4;
                    case 4:
                        r = o, t.label = 5;
                    case 5:
                        return [4, u(n = r)];
                    case 6:
                        return i = t.sent(), n.forEach(function (t) {
                            return t instanceof dt && t.dispose()
                        }), [2, i]
                }
            })
        })
    }

    function Qf(e, r, o, i, a) {
        return p(this, void 0, void 0, function () {
            var n = this;
            return P(this, function (t) {
                return [2, Yf([e], r, function (e) {
                    return p(n, void 0, void 0, function () {
                        return P(this, function (t) {
                            return [2, o(e[0])]
                        })
                    })
                }, i, a)]
            })
        })
    }
    var Jf = 2,
        Zf = 12;

    function td(t) {
        var e = np(t),
            n = e.extractWeights,
            r = e.getRemainingWeights,
            o = [],
            i = function (r, o) {
                var u = Yh(r, o),
                    c = Qh(r, o);

                function l(t, e) {
                    var n = He(r(t));
                    return o.push({
                        paramPath: e
                    }), n
                }

                function h(t, e, n) {
                    return void 0 === n && (n = !1), {
                        conv1: u(t[0], t[1], 3, e + "/conv1"),
                        prelu1_alpha: l(t[1], e + "/prelu1_alpha"),
                        conv2: u(t[1], t[2], 3, e + "/conv2"),
                        prelu2_alpha: l(t[2], e + "/prelu2_alpha"),
                        conv3: u(t[2], t[3], n ? 2 : 3, e + "/conv3"),
                        prelu3_alpha: l(t[3], e + "/prelu3_alpha")
                    }
                }
                return {
                    extractPNetParams: function () {
                        var t = h([3, 10, 16, 32], "pnet"),
                            e = u(32, 2, 1, "pnet/conv4_1"),
                            n = u(32, 4, 1, "pnet/conv4_2");
                        return O({}, t, {
                            conv4_1: e,
                            conv4_2: n
                        })
                    },
                    extractRNetParams: function () {
                        var t = h([3, 28, 48, 64], "rnet", !0),
                            e = c(576, 128, "rnet/fc1"),
                            n = l(128, "rnet/prelu4_alpha"),
                            r = c(128, 2, "rnet/fc2_1"),
                            o = c(128, 4, "rnet/fc2_2");
                        return O({}, t, {
                            fc1: e,
                            prelu4_alpha: n,
                            fc2_1: r,
                            fc2_2: o
                        })
                    },
                    extractONetParams: function () {
                        var t = h([3, 32, 64, 64], "onet"),
                            e = u(64, 128, 2, "onet/conv4"),
                            n = l(128, "onet/prelu4_alpha"),
                            r = c(1152, 256, "onet/fc1"),
                            o = l(256, "onet/prelu5_alpha"),
                            i = c(256, 2, "onet/fc2_1"),
                            a = c(256, 4, "onet/fc2_2"),
                            s = c(256, 10, "onet/fc2_3");
                        return O({}, t, {
                            conv4: e,
                            prelu4_alpha: n,
                            fc1: r,
                            prelu5_alpha: o,
                            fc2_1: i,
                            fc2_2: a,
                            fc2_3: s
                        })
                    }
                }
            }(n, o),
            a = i.extractPNetParams,
            s = i.extractRNetParams,
            u = i.extractONetParams,
            c = a(),
            l = s(),
            h = u();
        if (0 !== r().length) throw new Error("weights remaing after extract: " + r().length);
        return {
            params: {
                pnet: c,
                rnet: l,
                onet: h
            },
            paramMappings: o
        }
    }

    function ed(t) {
        var e = [],
            n = function (t, e) {
                var n = ep(t, e);

                function u(t) {
                    return {
                        filters: n(t + "/weights", 4, t + "/filters"),
                        bias: n(t + "/bias", 1)
                    }
                }

                function c(t) {
                    return {
                        weights: n(t + "/weights", 2),
                        bias: n(t + "/bias", 1)
                    }
                }

                function l(t) {
                    return n(t, 1)
                }

                function h(t) {
                    return {
                        conv1: u(t + "/conv1"),
                        prelu1_alpha: l(t + "/prelu1_alpha"),
                        conv2: u(t + "/conv2"),
                        prelu2_alpha: l(t + "/prelu2_alpha"),
                        conv3: u(t + "/conv3"),
                        prelu3_alpha: l(t + "/prelu3_alpha")
                    }
                }
                return {
                    extractPNetParams: function () {
                        var t = h("pnet"),
                            e = u("pnet/conv4_1"),
                            n = u("pnet/conv4_2");
                        return O({}, t, {
                            conv4_1: e,
                            conv4_2: n
                        })
                    },
                    extractRNetParams: function () {
                        var t = h("rnet"),
                            e = c("rnet/fc1"),
                            n = l("rnet/prelu4_alpha"),
                            r = c("rnet/fc2_1"),
                            o = c("rnet/fc2_2");
                        return O({}, t, {
                            fc1: e,
                            prelu4_alpha: n,
                            fc2_1: r,
                            fc2_2: o
                        })
                    },
                    extractONetParams: function () {
                        var t = h("onet"),
                            e = u("onet/conv4"),
                            n = l("onet/prelu4_alpha"),
                            r = c("onet/fc1"),
                            o = l("onet/prelu5_alpha"),
                            i = c("onet/fc2_1"),
                            a = c("onet/fc2_2"),
                            s = c("onet/fc2_3");
                        return O({}, t, {
                            conv4: e,
                            prelu4_alpha: n,
                            fc1: r,
                            prelu5_alpha: o,
                            fc2_1: i,
                            fc2_2: a,
                            fc2_3: s
                        })
                    }
                }
            }(t, e),
            r = n.extractPNetParams,
            o = n.extractRNetParams,
            i = n.extractONetParams,
            a = r(),
            s = o(),
            u = i();
        return Xh(t, e), {
            params: {
                pnet: a,
                rnet: s,
                onet: u
            },
            paramMappings: e
        }
    }

    function nd(t, e) {
        var n = e[0],
            r = e[1];
        return {
            height: Math.floor(n * t),
            width: Math.floor(r * t)
        }
    }
    var rd = function (o) {
        function t(t, e, n, r) {
            return o.call(this, {
                left: t,
                top: e,
                right: n,
                bottom: r
            }, !0) || this
        }
        return a(t, o), t
    }(Sh);

    function od(t) {
        return ue(function () {
            return Du(Bu(t, Ve(127.5)), Ve(.0078125))
        })
    }

    function id(t, e) {
        return ue(function () {
            return xu(Xu(t), Du(e, Pa(Xu(Pa(t)))))
        })
    }

    function ad(e, n, r) {
        return void 0 === r && (r = !1), ue(function () {
            var t = Kh(e, n.conv1, "valid");
            return t = id(t, n.prelu1_alpha), t = id(t = Kh(t = Us(t, r ? [2, 2] : [3, 3], [2, 2], "same"), n.conv2, "valid"), n.prelu2_alpha), t = id(t = Kh(t = r ? t : Us(t, [3, 3], [2, 2], "valid"), n.conv3, "valid"), n.prelu3_alpha)
        })
    }

    function sd(h, t, u, p, c) {
        c.stage1 = [];
        var e = t.map(function (l) {
                return ue(function () {
                    var o, i, r, a, t = {
                            scale: l
                        },
                        e = (o = h, i = l, ue(function () {
                            var t = nd(i, o.shape.slice(1)),
                                e = t.height,
                                n = t.width,
                                r = od(Wc.resizeBilinear(o, [e, n]));
                            return Qu(r, [0, 2, 1, 3])
                        })),
                        n = Date.now(),
                        s = (r = e, a = p, ue(function () {
                            var t = ad(r, a, !0),
                                e = Kh(t, a.conv4_1, "valid"),
                                n = $i(eu(e, 3), 3);
                            return {
                                prob: Le(Bu(e, n), 3),
                                regions: Kh(t, a.conv4_2, "valid")
                            }
                        })),
                        u = s.prob,
                        c = s.regions;
                    return t.pnet = Date.now() - n, {
                        scoresTensor: ha(ha(u, 3)[1])[0],
                        regionsTensor: ha(c)[0],
                        scale: l,
                        statsForScale: t
                    }
                })
            }).map(function (t) {
                var e = t.scoresTensor,
                    n = t.regionsTensor,
                    r = t.scale,
                    o = t.statsForScale,
                    i = function (t, o, i, e) {
                        for (var n = [], a = t.arraySync(), r = 0; r < t.shape[0]; r++)
                            for (var s = 0; s < t.shape[1]; s++) a[r][s] >= e && n.push(new lh(s, r));
                        return n.map(function (t) {
                            var e = new Rh(Math.round((t.y * Jf + 1) / i), Math.round((t.x * Jf + 1) / i), Math.round((t.y * Jf + Zf) / i), Math.round((t.x * Jf + Zf) / i)),
                                n = a[t.y][t.x],
                                r = o.arraySync();
                            return {
                                cell: e,
                                score: n,
                                region: new rd(r[t.y][t.x][0], r[t.y][t.x][1], r[t.y][t.x][2], r[t.y][t.x][3])
                            }
                        })
                    }(e, n, r, u);
                if (e.dispose(), n.dispose(), !i.length) return c.stage1.push(o), [];
                var a = Date.now(),
                    s = bp(i.map(function (t) {
                        return t.cell
                    }), i.map(function (t) {
                        return t.score
                    }), .5);
                return o.nms = Date.now() - a, o.numBoxes = s.length, c.stage1.push(o), s.map(function (t) {
                    return i[t]
                })
            }).reduce(function (t, e) {
                return t.concat(e)
            }, []),
            n = [],
            r = [];
        if (0 < e.length) {
            var o = Date.now(),
                i = bp(e.map(function (t) {
                    return t.cell
                }), e.map(function (t) {
                    return t.score
                }), .7);
            c.stage1_nms = Date.now() - o, r = i.map(function (t) {
                return e[t].score
            }), n = i.map(function (t) {
                return e[t]
            }).map(function (t) {
                var e = t.cell,
                    n = t.region;
                return new Rh(e.left + n.left * e.width, e.top + n.top * e.height, e.right + n.right * e.width, e.bottom + n.bottom * e.height).toSquare().round()
            })
        }
        return {
            boxes: n,
            scores: r
        }
    }

    function ud(h, r, t) {
        var a = t.width,
            s = t.height;
        return p(this, void 0, void 0, function () {
            var l, e, i, n = this;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return l = Gh(h), [4, Promise.all(r.map(function (c) {
                            return p(n, void 0, void 0, function () {
                                var e, n, r, o, i, a, s, u;
                                return P(this, function (t) {
                                    return e = c.padAtBorders(h.height, h.width), n = e.y, r = e.ey, o = e.x, i = e.ex, a = o - 1, s = n - 1, u = l.getImageData(a, s, i - a, r - s), [2, zh.isNodejs() ? cp(u) : createImageBitmap(u)]
                                })
                            })
                        }))];
                    case 1:
                        return e = t.sent(), i = [], e.forEach(function (t) {
                            var e = Gh(up({
                                width: a,
                                height: s
                            }));
                            e.drawImage(t, 0, 0, a, s);
                            for (var n = e.getImageData(0, 0, a, s).data, r = [], o = 0; o < n.length; o += 4) r.push(n[o + 2]), r.push(n[o + 1]), r.push(n[o]);
                            i.push(r)
                        }), [2, i.map(function (t) {
                            return ue(function () {
                                return od(Qu($e(t, [1, a, s, 3]), [0, 2, 1, 3]).toFloat())
                            })
                        })]
                }
            })
        })
    }

    function cd(v, m, g, y, x) {
        return p(this, void 0, void 0, function () {
            var e, n, r, o, i, a, s, u, c, l, h, p, f, d;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Date.now(), [4, ud(v, m, {
                            width: 24,
                            height: 24
                        })];
                    case 1:
                        return n = t.sent(), x.stage2_extractImagePatches = Date.now() - e, e = Date.now(), r = n.map(function (t) {
                            var a, s, e = (a = t, s = y, ue(function () {
                                var t = ad(a, s),
                                    e = id($p(ia(t, [t.shape[0], s.fc1.weights.shape[0]]), s.fc1), s.prelu4_alpha),
                                    n = $p(e, s.fc2_1),
                                    r = $i(eu(n, 1), 1),
                                    o = Le(Bu(n, r), 1),
                                    i = $p(e, s.fc2_2);
                                return {
                                    scores: ha(o, 1)[1],
                                    regions: i
                                }
                            }));
                            return t.dispose(), e
                        }), x.stage2_rnet = Date.now() - e, o = 1 < r.length ? _i(r.map(function (t) {
                            return t.scores
                        })) : r[0].scores, s = (a = Array).from, [4, o.data()];
                    case 2:
                        return i = s.apply(a, [t.sent()]), o.dispose(), u = i.map(function (t, e) {
                            return {
                                score: t,
                                idx: e
                            }
                        }).filter(function (t) {
                            return t.score > g
                        }).map(function (t) {
                            return t.idx
                        }), c = u.map(function (t) {
                            return m[t]
                        }), l = u.map(function (t) {
                            return i[t]
                        }), h = [], p = [], 0 < c.length && (e = Date.now(), f = bp(c, l, .7), x.stage2_nms = Date.now() - e, d = f.map(function (t) {
                            var e = r[u[t]].regions.arraySync();
                            return new rd(e[0][0], e[0][1], e[0][2], e[0][3])
                        }), p = f.map(function (t) {
                            return l[t]
                        }), h = f.map(function (t, e) {
                            return c[t].calibrate(d[e])
                        })), r.forEach(function (t) {
                            t.regions.dispose(), t.scores.dispose()
                        }), [2, {
                            boxes: h,
                            scores: p
                        }]
                }
            })
        })
    }

    function ld(m, g, y, x, w) {
        return p(this, void 0, void 0, function () {
            var e, n, i, r, o, a, s, u, c, l, h, p, f, d, v;
            return P(this, function (t) {
                switch (t.label) {
                    case 0:
                        return e = Date.now(), [4, ud(m, g, {
                            width: 48,
                            height: 48
                        })];
                    case 1:
                        return n = t.sent(), w.stage3_extractImagePatches = Date.now() - e, e = Date.now(), i = n.map(function (t) {
                            var s, u, e = (s = t, u = x, ue(function () {
                                var t = ad(s, u);
                                t = id(t = Kh(t = Us(t, [2, 2], [2, 2], "same"), u.conv4, "valid"), u.prelu4_alpha);
                                var e = id($p(ia(t, [t.shape[0], u.fc1.weights.shape[0]]), u.fc1), u.prelu5_alpha),
                                    n = $p(e, u.fc2_1),
                                    r = $i(eu(n, 1), 1),
                                    o = Le(Bu(n, r), 1),
                                    i = $p(e, u.fc2_2),
                                    a = $p(e, u.fc2_3);
                                return {
                                    scores: ha(o, 1)[1],
                                    regions: i,
                                    points: a
                                }
                            }));
                            return t.dispose(), e
                        }), w.stage3_onet = Date.now() - e, r = 1 < i.length ? _i(i.map(function (t) {
                            return t.scores
                        })) : i[0].scores, s = (a = Array).from, [4, r.data()];
                    case 2:
                        return o = s.apply(a, [t.sent()]), r.dispose(), u = o.map(function (t, e) {
                            return {
                                score: t,
                                idx: e
                            }
                        }).filter(function (t) {
                            return t.score > y
                        }).map(function (t) {
                            return t.idx
                        }), c = u.map(function (t) {
                            var e = i[t].regions.arraySync();
                            return new rd(e[0][0], e[0][1], e[0][2], e[0][3])
                        }), l = u.map(function (t, e) {
                            return g[t].calibrate(c[e])
                        }), h = u.map(function (t) {
                            return o[t]
                        }), p = [], f = [], d = [], 0 < l.length && (e = Date.now(), v = bp(l, h, .7, !1), w.stage3_nms = Date.now() - e, p = v.map(function (t) {
                            return l[t]
                        }), f = v.map(function (t) {
                            return h[t]
                        }), d = v.map(function (r, o) {
                            return Array(5).fill(0).map(function (t, e) {
                                var n = i[r].points.arraySync();
                                return new lh(n[0][e] * (p[o].width + 1) + p[o].left, n[0][e + 5] * (p[o].height + 1) + p[o].top)
                            })
                        })), i.forEach(function (t) {
                            t.regions.dispose(), t.scores.dispose(), t.points.dispose()
                        }), [2, {
                            boxes: p,
                            scores: f,
                            points: d
                        }]
                }
            })
        })
    }
    var hd = function (t) {
            function e() {
                return t.call(this, "Mtcnn") || this
            }
            return a(e, t), e.prototype.forwardInput = function (E, C) {
                return void 0 === C && (C = {}), p(this, void 0, void 0, function () {
                    var e, n, r, o, i, a, s, u, c, l, h, p, f, d, v, m, g, y, x, w, b;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!(e = this.params)) throw new Error("Mtcnn - load model before inference");
                                if (!(n = E.canvases[0])) throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");
                                return r = {}, o = Date.now(), i = ue(function () {
                                    return t = $i(Bl.fromPixels(n)).toFloat(), ue(function () {
                                        return ua(ha(t, 3).reverse(), 3)
                                    });
                                    var t
                                }), a = function (t) {
                                    return i.dispose(), r.total = Date.now() - o, t
                                }, s = i.shape.slice(1), u = s[0], c = s[1], l = new Pf(C), h = l.minFaceSize, p = l.scaleFactor, f = l.maxNumScales, d = l.scoreThresholds, v = l.scaleSteps, m = (v || function (t, e, n) {
                                    for (var r = n[0], o = n[1], i = Zf / t, a = [], s = Math.min(r, o) * i, u = 0; 12 <= s;) a.push(i * Math.pow(e, u)), s *= e, u += 1;
                                    return a
                                }(h, p, [u, c])).filter(function (t) {
                                    var e = nd(t, [u, c]);
                                    return Math.min(e.width, e.height) > Zf
                                }).slice(0, f), r.scales = m, r.pyramid = m.map(function (t) {
                                    return nd(t, [u, c])
                                }), g = Date.now(), [4, sd(i, m, d[0], e.pnet, r)];
                            case 1:
                                return y = t.sent(), r.total_stage1 = Date.now() - g, y.boxes.length ? (r.stage2_numInputBoxes = y.boxes.length, g = Date.now(), [4, cd(n, y.boxes, d[1], e.rnet, r)]) : [2, a({
                                    results: [],
                                    stats: r
                                })];
                            case 2:
                                return x = t.sent(), r.total_stage2 = Date.now() - g, x.boxes.length ? (r.stage3_numInputBoxes = x.boxes.length, g = Date.now(), [4, ld(n, x.boxes, d[2], e.onet, r)]) : [2, a({
                                    results: [],
                                    stats: r
                                })];
                            case 3:
                                return w = t.sent(), r.total_stage3 = Date.now() - g, b = w.boxes.map(function (e, t) {
                                    return of(Wp({}, new Lp(w.scores[t], new Th(e.left / c, e.top / u, e.width / c, e.height / u), {
                                        height: u,
                                        width: c
                                    })), new mf(w.points[t].map(function (t) {
                                        return t.sub(new lh(e.left, e.top)).div(new lh(e.width, e.height))
                                    }), {
                                        width: e.width,
                                        height: e.height
                                    }))
                                }), [2, a({
                                    results: b,
                                    stats: r
                                })]
                        }
                    })
                })
            }, e.prototype.forward = function (n, r) {
                return void 0 === r && (r = {}), p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [4, e.apply(this, [t.sent(), r])];
                            case 2:
                                return [2, t.sent().results]
                        }
                    })
                })
            }, e.prototype.forwardWithStats = function (n, r) {
                return void 0 === r && (r = {}), p(this, void 0, void 0, function () {
                    var e;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return e = this.forwardInput, [4, yp(n)];
                            case 1:
                                return [2, e.apply(this, [t.sent(), r])]
                        }
                    })
                })
            }, e.prototype.getDefaultModelName = function () {
                return "mtcnn_model"
            }, e.prototype.extractParamsFromWeigthMap = function (t) {
                return ed(t)
            }, e.prototype.extractParams = function (t) {
                return td(t)
            }, e
        }(xp),
        pd = [new lh(1.603231, 2.094468), new lh(6.041143, 7.080126), new lh(2.882459, 3.518061), new lh(4.266906, 5.178857), new lh(9.041765, 10.66308)],
        fd = [117.001, 114.697, 97.404],
        dd = function (e) {
            function t() {
                var t = {
                    withSeparableConvs: !0,
                    iouThreshold: .4,
                    classes: ["face"],
                    anchors: pd,
                    meanRgb: fd,
                    isFirstLayerConv2d: !0,
                    filterSizes: [3, 16, 32, 64, 128, 256, 512]
                };
                return e.call(this, t) || this
            }
            return a(t, e), Object.defineProperty(t.prototype, "anchors", {
                get: function () {
                    return this.config.anchors
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.locateFaces = function (e, n) {
                return p(this, void 0, void 0, function () {
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.detect(e, n)];
                            case 1:
                                return [2, t.sent().map(function (t) {
                                    return new Lp(t.score, t.relativeBox, {
                                        width: t.imageWidth,
                                        height: t.imageHeight
                                    })
                                })]
                        }
                    })
                })
            }, t.prototype.getDefaultModelName = function () {
                return "tiny_face_detector_model"
            }, t.prototype.extractParamsFromWeigthMap = function (t) {
                return e.prototype.extractParamsFromWeigthMap.call(this, t)
            }, t
        }(Op),
        vd = [new lh(.738768, .874946), new lh(2.42204, 2.65704), new lh(4.30971, 7.04493), new lh(10.246, 4.59428), new lh(12.6868, 11.8741)],
        md = [new lh(1.603231, 2.094468), new lh(6.041143, 7.080126), new lh(2.882459, 3.518061), new lh(4.266906, 5.178857), new lh(9.041765, 10.66308)],
        gd = [117.001, 114.697, 97.404],
        yd = function (n) {
            function t(t) {
                void 0 === t && (t = !0);
                var e = Object.assign({}, {
                    withSeparableConvs: t,
                    iouThreshold: .4,
                    classes: ["face"]
                }, t ? {
                    anchors: md,
                    meanRgb: gd
                } : {
                    anchors: vd,
                    withClassScores: !0
                });
                return n.call(this, e) || this
            }
            return a(t, n), Object.defineProperty(t.prototype, "withSeparableConvs", {
                get: function () {
                    return this.config.withSeparableConvs
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "anchors", {
                get: function () {
                    return this.config.anchors
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.locateFaces = function (e, n) {
                return p(this, void 0, void 0, function () {
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.detect(e, n)];
                            case 1:
                                return [2, t.sent().map(function (t) {
                                    return new Lp(t.score, t.relativeBox, {
                                        width: t.imageWidth,
                                        height: t.imageHeight
                                    })
                                })]
                        }
                    })
                })
            }, t.prototype.getDefaultModelName = function () {
                return this.withSeparableConvs ? "tiny_yolov2_separable_conv_model" : "tiny_yolov2_model"
            }, t.prototype.extractParamsFromWeigthMap = function (t) {
                return n.prototype.extractParamsFromWeigthMap.call(this, t)
            }, t
        }(Op);
    var xd = {
            ssdMobilenetv1: new qf,
            tinyFaceDetector: new dd,
            tinyYolov2: new yd,
            mtcnn: new hd,
            faceLandmark68Net: new Ef,
            faceLandmark68TinyNet: new _f,
            faceRecognitionNet: new Mf,
            faceExpressionNet: new Jp,
            ageGenderNet: new vf
        },
        wd = function (t, e) {
            return xd.ssdMobilenetv1.locateFaces(t, e)
        },
        bd = function (t) {
            return xd.faceLandmark68Net.detectLandmarks(t)
        },
        Ed = function (t) {
            return xd.ssdMobilenetv1.load(t)
        },
        Cd = Ed,
        _d = wd,
        Sd = bd;

    function Rd(t, e) {
        var n = {
            age: e
        };
        return Object.assign({}, t, n)
    }

    function Nd(t, e, n) {
        var r = {
            gender: e,
            genderProbability: n
        };
        return Object.assign({}, t, r)
    }
    var kd = function (o) {
            function t(t, e, n) {
                var r = o.call(this) || this;
                return r.parentTask = t, r.input = e, r.extractedFaces = n, r
            }
            return a(t, o), t
        }(Xf),
        Id = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.run = function () {
                return p(this, void 0, void 0, function () {
                    var e, n, r = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.parentTask];
                            case 1:
                                return [4, Yf(e = t.sent(), this.input, function (e) {
                                    return p(r, void 0, void 0, function () {
                                        return P(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Promise.all(e.map(function (t) {
                                                        return xd.faceExpressionNet.predictExpressions(t)
                                                    }))];
                                                case 1:
                                                    return [2, t.sent()]
                                            }
                                        })
                                    })
                                }, this.extractedFaces)];
                            case 2:
                                return n = t.sent(), [2, e.map(function (t, e) {
                                    return tf(t, n[e])
                                })]
                        }
                    })
                })
            }, e.prototype.withAgeAndGender = function () {
                return new Od(this, this.input)
            }, e
        }(kd),
        Td = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.run = function () {
                return p(this, void 0, void 0, function () {
                    var e, n;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.parentTask];
                            case 1:
                                return (e = t.sent()) ? [4, Qf(e, this.input, function (t) {
                                    return xd.faceExpressionNet.predictExpressions(t)
                                }, this.extractedFaces)] : [2];
                            case 2:
                                return n = t.sent(), [2, tf(e, n)]
                        }
                    })
                })
            }, e.prototype.withAgeAndGender = function () {
                return new Pd(this, this.input)
            }, e
        }(kd),
        Ad = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.withAgeAndGender = function () {
                return new Fd(this, this.input)
            }, e.prototype.withFaceDescriptors = function () {
                return new Wd(this, this.input)
            }, e
        }(Id),
        Dd = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.withAgeAndGender = function () {
                return new Ld(this, this.input)
            }, e.prototype.withFaceDescriptor = function () {
                return new zd(this, this.input)
            }, e
        }(Td),
        Md = function (o) {
            function t(t, e, n) {
                var r = o.call(this) || this;
                return r.parentTask = t, r.input = e, r.extractedFaces = n, r
            }
            return a(t, o), t
        }(Xf),
        Od = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.run = function () {
                return p(this, void 0, void 0, function () {
                    var e, o, n = this;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.parentTask];
                            case 1:
                                return [4, Yf(e = t.sent(), this.input, function (e) {
                                    return p(n, void 0, void 0, function () {
                                        return P(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, Promise.all(e.map(function (t) {
                                                        return xd.ageGenderNet.predictAgeAndGender(t)
                                                    }))];
                                                case 1:
                                                    return [2, t.sent()]
                                            }
                                        })
                                    })
                                }, this.extractedFaces)];
                            case 2:
                                return o = t.sent(), [2, e.map(function (t, e) {
                                    var n = o[e],
                                        r = n.age;
                                    return Rd(Nd(t, n.gender, n.genderProbability), r)
                                })]
                        }
                    })
                })
            }, e.prototype.withFaceExpressions = function () {
                return new Id(this, this.input)
            }, e
        }(Md),
        Pd = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.run = function () {
                return p(this, void 0, void 0, function () {
                    var e, n, r, o, i;
                    return P(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.parentTask];
                            case 1:
                                return (e = t.sent()) ? [4, Qf(e, this.input, function (t) {
                                    return xd.ageGenderNet.predictAgeAndGender(t)
                                }, this.extractedFaces)] : [2];
                            case 2:
                                return n = t.sent(), r = n.age, o = n.gender, i = n.genderProbability, [2, Rd(Nd(e, o, i), r)]
                        }
                    })
                })
            }, e.prototype.withFaceExpressions = function () {
                return new Td(this, this.input)
            }, e
        }(Md),
        Fd = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.withFaceExpressions = function () {
                return new Ad(this, this.input)
            }, e.prototype.withFaceDescriptors = function () {
                return new Wd(this, this.input)
            }, e
        }(Od),
        Ld = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return a(e, t), e.prototype.withFaceExpressions = function () {
                return new Dd(this, this.input)
            }, e.prototype.withFaceDescriptor = function () {
                return new zd(this, this.input)
            }, e
        }(Pd),
        Bd = function (r) {
            function t(t, e) {
                var n = r.call(this) || this;
                return n.parentTask = t, n.input = e, n

//video_variable
const video = document.getElementById("video");
//////////////////////promise.all_function
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)
///////////////////////start_Video_function
function startVideo() {
    navigator.getUserMedia({
            video: {}
        },
        stream => video.srcObject = stream,
        err => console.log(err)
    )
}
////////////////////////Event_Listner_to_play
video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video)
    document.body.append(canvas)
    const displaySize = {
        width: video.width,
        height: video.height
    }
    faceapi.matchDimensions(canvas, displaySize)
    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
        console.log(detections)
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections)

    }, 1)
})
