import {
    _ as j
} from "./chunks/preload-helper-aa6bc0ce.js";
import {
    S as He,
    i as We,
    s as Xe,
    a as Ye,
    e as V,
    c as Qe,
    b as F,
    g as Y,
    t as N,
    d as Q,
    f as q,
    h as J,
    j as Ze,
    o as ve,
    k as et,
    l as tt,
    m as nt,
    n as ye,
    p as H,
    q as at,
    r as rt,
    u as it,
    v as K,
    w as z,
    x as re,
    y as x,
    z as G,
    A as Be
} from "./chunks/index-bc06f92d.js";
import {
    g as Je,
    f as Fe,
    s as X,
    a as Ee,
    b as ot,
    i as st
} from "./chunks/singletons-1a03e628.js";

function lt(a, e) {
    return a === "/" || e === "ignore" ? a : e === "never" ? a.endsWith("/") ? a.slice(0, -1) : a : e === "always" && !a.endsWith("/") ? a + "/" : a
}

function ct(a) {
    for (const e in a) a[e] = a[e].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
    return a
}
const ft = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];

function ut(a, e) {
    const t = new URL(a);
    for (const o of ft) {
        let i = t[o];
        Object.defineProperty(t, o, {
            get() {
                return e(), i
            },
            enumerable: !0,
            configurable: !0
        })
    }
    return t[Symbol.for("nodejs.util.inspect.custom")] = (o, i, d) => d(a, i), pt(t), t
}

function pt(a) {
    Object.defineProperty(a, "hash", {
        get() {
            throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")
        }
    })
}

function dt(a) {
    let e = 5381,
        t = a.length;
    if (typeof a == "string")
        for (; t;) e = e * 33 ^ a.charCodeAt(--t);
    else
        for (; t;) e = e * 33 ^ a[--t];
    return (e >>> 0).toString(36)
}
const Le = window.fetch;
window.fetch = (a, e) => {
    if ((a instanceof Request ? a.method : (e == null ? void 0 : e.method) || "GET") !== "GET") {
        const o = new URL(a instanceof Request ? a.url : a.toString(), document.baseURI).href;
        ue.delete(o)
    }
    return Le(a, e)
};
const ue = new Map;

function _t(a, e, t) {
    let i = `script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;
    t && typeof t.body == "string" && (i += `[data-hash="${dt(t.body)}"]`);
    const d = document.querySelector(i);
    if (d != null && d.textContent) {
        const {
            body: n,
            ...l
        } = JSON.parse(d.textContent), u = d.getAttribute("data-ttl");
        return u && ue.set(e, {
            body: n,
            init: l,
            ttl: 1e3 * Number(u)
        }), Promise.resolve(new Response(n, l))
    }
    return Le(a, t)
}

function ht(a, e) {
    const t = ue.get(a);
    if (t) {
        if (performance.now() < t.ttl) return new Response(t.body, t.init);
        ue.delete(a)
    }
    return Le(a, e)
}
const mt = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;

function gt(a) {
    const e = [],
        t = [];
    let o = !0;
    return {
        pattern: a === "" ? /^\/$/ : new RegExp(`^${a.split(/(?:\/|$)/).filter(wt).map((d,n,l)=>{const u=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const g=n===l.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((S,U)=>{if(U%2){const v=mt.exec(S);if(!v)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,B,M,C]=v;return e.push(M),t.push(C),B?"(.*?)":"([^/]+?)"}return g&&S.includes(".")&&(o=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),
        names: e,
        types: t
    }
}

function wt(a) {
    return !/^\([^)]+\)$/.test(a)
}

function yt(a, e, t, o) {
    const i = {};
    for (let d = 0; d < e.length; d += 1) {
        const n = e[d],
            l = t[d],
            u = a[d + 1] || "";
        if (l) {
            const _ = o[l];
            if (!_) throw new Error(`Missing "${l}" param matcher`);
            if (!_(u)) return
        }
        i[n] = u
    }
    return i
}

function bt(a, e, t, o) {
    const i = new Set(e);
    return Object.entries(t).map(([l, [u, _, g]]) => {
        const {
            pattern: S,
            names: U,
            types: v
        } = gt(l), B = {
            id: l,
            exec: M => {
                const C = S.exec(M);
                if (C) return yt(C, U, v, o)
            },
            errors: [1, ...g || []].map(M => a[M]),
            layouts: [0, ..._ || []].map(n),
            leaf: d(u)
        };
        return B.errors.length = B.layouts.length = Math.max(B.errors.length, B.layouts.length), B
    });

    function d(l) {
        const u = l < 0;
        return u && (l = ~l), [u, a[l]]
    }

    function n(l) {
        return l === void 0 ? l : [i.has(l), a[l]]
    }
}

function vt(a) {
    let e, t, o;
    var i = a[0][0];

    function d(n) {
        return {
            props: {
                data: n[2],
                form: n[1]
            }
        }
    }
    return i && (e = K(i, d(a))), {
        c() {
            e && z(e.$$.fragment), t = V()
        },
        l(n) {
            e && re(e.$$.fragment, n), t = V()
        },
        m(n, l) {
            e && x(e, n, l), F(n, t, l), o = !0
        },
        p(n, l) {
            const u = {};
            if (l & 4 && (u.data = n[2]), l & 2 && (u.form = n[1]), i !== (i = n[0][0])) {
                if (e) {
                    Y();
                    const _ = e;
                    N(_.$$.fragment, 1, 0, () => {
                        G(_, 1)
                    }), Q()
                }
                i ? (e = K(i, d(n)), z(e.$$.fragment), q(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null
            } else i && e.$set(u)
        },
        i(n) {
            o || (e && q(e.$$.fragment, n), o = !0)
        },
        o(n) {
            e && N(e.$$.fragment, n), o = !1
        },
        d(n) {
            n && J(t), e && G(e, n)
        }
    }
}

function Et(a) {
    let e, t, o;
    var i = a[0][0];

    function d(n) {
        return {
            props: {
                data: n[2],
                $$slots: {
                    default: [Lt]
                },
                $$scope: {
                    ctx: n
                }
            }
        }
    }
    return i && (e = K(i, d(a))), {
        c() {
            e && z(e.$$.fragment), t = V()
        },
        l(n) {
            e && re(e.$$.fragment, n), t = V()
        },
        m(n, l) {
            e && x(e, n, l), F(n, t, l), o = !0
        },
        p(n, l) {
            const u = {};
            if (l & 4 && (u.data = n[2]), l & 1051 && (u.$$scope = {
                    dirty: l,
                    ctx: n
                }), i !== (i = n[0][0])) {
                if (e) {
                    Y();
                    const _ = e;
                    N(_.$$.fragment, 1, 0, () => {
                        G(_, 1)
                    }), Q()
                }
                i ? (e = K(i, d(n)), z(e.$$.fragment), q(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null
            } else i && e.$set(u)
        },
        i(n) {
            o || (e && q(e.$$.fragment, n), o = !0)
        },
        o(n) {
            e && N(e.$$.fragment, n), o = !1
        },
        d(n) {
            n && J(t), e && G(e, n)
        }
    }
}

function kt(a) {
    let e, t, o;
    var i = a[0][1];

    function d(n) {
        return {
            props: {
                data: n[3],
                form: n[1]
            }
        }
    }
    return i && (e = K(i, d(a))), {
        c() {
            e && z(e.$$.fragment), t = V()
        },
        l(n) {
            e && re(e.$$.fragment, n), t = V()
        },
        m(n, l) {
            e && x(e, n, l), F(n, t, l), o = !0
        },
        p(n, l) {
            const u = {};
            if (l & 8 && (u.data = n[3]), l & 2 && (u.form = n[1]), i !== (i = n[0][1])) {
                if (e) {
                    Y();
                    const _ = e;
                    N(_.$$.fragment, 1, 0, () => {
                        G(_, 1)
                    }), Q()
                }
                i ? (e = K(i, d(n)), z(e.$$.fragment), q(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null
            } else i && e.$set(u)
        },
        i(n) {
            o || (e && q(e.$$.fragment, n), o = !0)
        },
        o(n) {
            e && N(e.$$.fragment, n), o = !1
        },
        d(n) {
            n && J(t), e && G(e, n)
        }
    }
}

function $t(a) {
    let e, t, o;
    var i = a[0][1];

    function d(n) {
        return {
            props: {
                data: n[3],
                $$slots: {
                    default: [Rt]
                },
                $$scope: {
                    ctx: n
                }
            }
        }
    }
    return i && (e = K(i, d(a))), {
        c() {
            e && z(e.$$.fragment), t = V()
        },
        l(n) {
            e && re(e.$$.fragment, n), t = V()
        },
        m(n, l) {
            e && x(e, n, l), F(n, t, l), o = !0
        },
        p(n, l) {
            const u = {};
            if (l & 8 && (u.data = n[3]), l & 1043 && (u.$$scope = {
                    dirty: l,
                    ctx: n
                }), i !== (i = n[0][1])) {
                if (e) {
                    Y();
                    const _ = e;
                    N(_.$$.fragment, 1, 0, () => {
                        G(_, 1)
                    }), Q()
                }
                i ? (e = K(i, d(n)), z(e.$$.fragment), q(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null
            } else i && e.$set(u)
        },
        i(n) {
            o || (e && q(e.$$.fragment, n), o = !0)
        },
        o(n) {
            e && N(e.$$.fragment, n), o = !1
        },
        d(n) {
            n && J(t), e && G(e, n)
        }
    }
}

function Rt(a) {
    let e, t, o;
    var i = a[0][2];

    function d(n) {
        return {
            props: {
                data: n[4],
                form: n[1]
            }
        }
    }
    return i && (e = K(i, d(a))), {
        c() {
            e && z(e.$$.fragment), t = V()
        },
        l(n) {
            e && re(e.$$.fragment, n), t = V()
        },
        m(n, l) {
            e && x(e, n, l), F(n, t, l), o = !0
        },
        p(n, l) {
            const u = {};
            if (l & 16 && (u.data = n[4]), l & 2 && (u.form = n[1]), i !== (i = n[0][2])) {
                if (e) {
                    Y();
                    const _ = e;
                    N(_.$$.fragment, 1, 0, () => {
                        G(_, 1)
                    }), Q()
                }
                i ? (e = K(i, d(n)), z(e.$$.fragment), q(e.$$.fragment, 1), x(e, t.parentNode, t)) : e = null
            } else i && e.$set(u)
        },
        i(n) {
            o || (e && q(e.$$.fragment, n), o = !0)
        },
        o(n) {
            e && N(e.$$.fragment, n), o = !1
        },
        d(n) {
            n && J(t), e && G(e, n)
        }
    }
}

function Lt(a) {
    let e, t, o, i;
    const d = [$t, kt],
        n = [];

    function l(u, _) {
        return u[0][2] ? 0 : 1
    }
    return e = l(a), t = n[e] = d[e](a), {
        c() {
            t.c(), o = V()
        },
        l(u) {
            t.l(u), o = V()
        },
        m(u, _) {
            n[e].m(u, _), F(u, o, _), i = !0
        },
        p(u, _) {
            let g = e;
            e = l(u), e === g ? n[e].p(u, _) : (Y(), N(n[g], 1, 1, () => {
                n[g] = null
            }), Q(), t = n[e], t ? t.p(u, _) : (t = n[e] = d[e](u), t.c()), q(t, 1), t.m(o.parentNode, o))
        },
        i(u) {
            i || (q(t), i = !0)
        },
        o(u) {
            N(t), i = !1
        },
        d(u) {
            n[e].d(u), u && J(o)
        }
    }
}

function Ke(a) {
    let e, t = a[6] && ze(a);
    return {
        c() {
            e = et("div"), t && t.c(), this.h()
        },
        l(o) {
            e = tt(o, "DIV", {
                id: !0,
                "aria-live": !0,
                "aria-atomic": !0,
                style: !0
            });
            var i = nt(e);
            t && t.l(i), i.forEach(J), this.h()
        },
        h() {
            ye(e, "id", "svelte-announcer"), ye(e, "aria-live", "assertive"), ye(e, "aria-atomic", "true"), H(e, "position", "absolute"), H(e, "left", "0"), H(e, "top", "0"), H(e, "clip", "rect(0 0 0 0)"), H(e, "clip-path", "inset(50%)"), H(e, "overflow", "hidden"), H(e, "white-space", "nowrap"), H(e, "width", "1px"), H(e, "height", "1px")
        },
        m(o, i) {
            F(o, e, i), t && t.m(e, null)
        },
        p(o, i) {
            o[6] ? t ? t.p(o, i) : (t = ze(o), t.c(), t.m(e, null)) : t && (t.d(1), t = null)
        },
        d(o) {
            o && J(e), t && t.d()
        }
    }
}

function ze(a) {
    let e;
    return {
        c() {
            e = at(a[7])
        },
        l(t) {
            e = rt(t, a[7])
        },
        m(t, o) {
            F(t, e, o)
        },
        p(t, o) {
            o & 128 && it(e, t[7])
        },
        d(t) {
            t && J(e)
        }
    }
}

function St(a) {
    let e, t, o, i, d;
    const n = [Et, vt],
        l = [];

    function u(g, S) {
        return g[0][1] ? 0 : 1
    }
    e = u(a), t = l[e] = n[e](a);
    let _ = a[5] && Ke(a);
    return {
        c() {
            t.c(), o = Ye(), _ && _.c(), i = V()
        },
        l(g) {
            t.l(g), o = Qe(g), _ && _.l(g), i = V()
        },
        m(g, S) {
            l[e].m(g, S), F(g, o, S), _ && _.m(g, S), F(g, i, S), d = !0
        },
        p(g, [S]) {
            let U = e;
            e = u(g), e === U ? l[e].p(g, S) : (Y(), N(l[U], 1, 1, () => {
                l[U] = null
            }), Q(), t = l[e], t ? t.p(g, S) : (t = l[e] = n[e](g), t.c()), q(t, 1), t.m(o.parentNode, o)), g[5] ? _ ? _.p(g, S) : (_ = Ke(g), _.c(), _.m(i.parentNode, i)) : _ && (_.d(1), _ = null)
        },
        i(g) {
            d || (q(t), d = !0)
        },
        o(g) {
            N(t), d = !1
        },
        d(g) {
            l[e].d(g), g && J(o), _ && _.d(g), g && J(i)
        }
    }
}

function Pt(a, e, t) {
    let {
        stores: o
    } = e, {
        page: i
    } = e, {
        components: d
    } = e, {
        form: n
    } = e, {
        data_0: l = null
    } = e, {
        data_1: u = null
    } = e, {
        data_2: _ = null
    } = e;
    Ze(o.page.notify);
    let g = !1,
        S = !1,
        U = null;
    return ve(() => {
        const v = o.page.subscribe(() => {
            g && (t(6, S = !0), t(7, U = document.title || "untitled page"))
        });
        return t(5, g = !0), v
    }), a.$$set = v => {
        "stores" in v && t(8, o = v.stores), "page" in v && t(9, i = v.page), "components" in v && t(0, d = v.components), "form" in v && t(1, n = v.form), "data_0" in v && t(2, l = v.data_0), "data_1" in v && t(3, u = v.data_1), "data_2" in v && t(4, _ = v.data_2)
    }, a.$$.update = () => {
        a.$$.dirty & 768 && o.page.set(i)
    }, [d, n, l, u, _, g, S, U, o, i]
}
class Ot extends He {
    constructor(e) {
        super(), We(this, e, Pt, St, Xe, {
            stores: 8,
            page: 9,
            components: 0,
            form: 1,
            data_0: 2,
            data_1: 3,
            data_2: 4
        })
    }
}
const It = {},
    pe = [() => j(() => import("./chunks/0-c240c04c.js"), ["chunks/0-c240c04c.js", "chunks/_layout-aee3c6a9.js", "chunks/utils-cfade855.js", "components/pages/_layout.svelte-b9b91c41.js", "assets/_layout-b3e7b51a.css", "chunks/index-bc06f92d.js"],
        import.meta.url), () => j(() => import("./chunks/1-15b82c00.js"), ["chunks/1-15b82c00.js", "components/error.svelte-1411b128.js", "chunks/index-bc06f92d.js", "chunks/stores-7383ffe7.js", "chunks/singletons-1a03e628.js", "chunks/index-2f558095.js"],
        import.meta.url), () => j(() => import("./chunks/2-66349501.js"), ["chunks/2-66349501.js", "chunks/_layout-e7795dba.js", "assets/_layout-f1ff27ee.css", "chunks/index-bc06f92d.js", "chunks/preload-helper-aa6bc0ce.js", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/MenuFooter-bd287791.js", "assets/MenuFooter-f4bc34cf.css", "chunks/WideButton-ab9b72c2.js", "assets/WideButton-39a677df.css", "chunks/DecorationLineSplit-2e4ba8a2.js", "assets/DecorationLineSplit-cbabae78.css", "chunks/index-43dc2d08.js", "chunks/utils-cfade855.js", "chunks/SplitText-d8f85d21.js", "chunks/AudioButton-55789cb9.js", "assets/AudioButton-61303e5c.css", "chunks/singletons-1a03e628.js", "chunks/stores-7383ffe7.js"],
        import.meta.url), () => j(() => import("./chunks/3-33e5cbfe.js"), ["chunks/3-33e5cbfe.js", "components/pages/(page)/_layout.svelte-576fa01e.js", "assets/_layout-73671367.css", "chunks/index-bc06f92d.js", "chunks/DecorationLineSplit-2e4ba8a2.js", "assets/DecorationLineSplit-cbabae78.css", "chunks/MenuFooter-bd287791.js", "assets/MenuFooter-f4bc34cf.css"],
        import.meta.url), () => j(() => import("./chunks/4-ab76f6c5.js"), ["chunks/4-ab76f6c5.js", "components/pages/(experience)/_page.svelte-e945731e.js", "chunks/index-bc06f92d.js"],
        import.meta.url), () => j(() => import("./chunks/5-aa5d223c.js"), ["chunks/5-aa5d223c.js", "chunks/_page-115ffbad.js", "chunks/utils-cfade855.js", "components/pages/(experience)/battlearena/_page.svelte-3a4bac93.js", "assets/_page-8f70dcaf.css", "chunks/index-bc06f92d.js", "chunks/IntroView-a336b6ee.js", "assets/IntroView-b4cc053d.css", "chunks/ArrowButton-8ba3948e.js", "assets/ArrowButton-e6fdb1fb.css", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js", "chunks/SplitText-d8f85d21.js", "chunks/index-43dc2d08.js"],
        import.meta.url), () => j(() => import("./chunks/6-9ee3cd08.js"), ["chunks/6-9ee3cd08.js", "chunks/_page-ad181cd6.js", "chunks/page-creatures-711ff2c0.js", "components/pages/(experience)/creatures/_page.svelte-ab1e8aad.js", "assets/_page-6e893747.css", "chunks/index-bc06f92d.js", "chunks/IntroView-a336b6ee.js", "assets/IntroView-b4cc053d.css", "chunks/ArrowButton-8ba3948e.js", "assets/ArrowButton-e6fdb1fb.css", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js", "chunks/SplitText-d8f85d21.js", "chunks/utils-cfade855.js", "chunks/DecorationLine-d75b98cc.js", "assets/DecorationLine-2ee2dc39.css"],
        import.meta.url), () => j(() => import("./chunks/7-a2651854.js"), ["chunks/7-a2651854.js", "chunks/_page-4f19ae88.js", "components/pages/(experience)/gameplay/_page.svelte-4bdd209b.js", "chunks/index-bc06f92d.js", "chunks/Gallery-970d79ec.js", "assets/Gallery-85555b25.css", "chunks/DecorationArrow-7af54352.js", "assets/DecorationArrow-5e778477.css", "chunks/ArrowButton-8ba3948e.js", "assets/ArrowButton-e6fdb1fb.css", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js", "chunks/utils-cfade855.js", "chunks/IntroView-a336b6ee.js", "assets/IntroView-b4cc053d.css", "chunks/SplitText-d8f85d21.js"],
        import.meta.url), () => j(() => import("./chunks/8-a2c01949.js"), ["chunks/8-a2c01949.js", "components/pages/(experience)/kitchensink/_page.svelte-edd17554.js", "assets/_page-fa751f79.css", "chunks/index-bc06f92d.js", "chunks/WideButton-ab9b72c2.js", "assets/WideButton-39a677df.css", "chunks/DecorationLineSplit-2e4ba8a2.js", "assets/DecorationLineSplit-cbabae78.css", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/index-43dc2d08.js", "chunks/index-2f558095.js", "chunks/utils-cfade855.js", "chunks/SplitText-d8f85d21.js", "chunks/ArrowButton-8ba3948e.js", "assets/ArrowButton-e6fdb1fb.css", "chunks/DecorationArrow-7af54352.js", "assets/DecorationArrow-5e778477.css", "chunks/DecorationLine-d75b98cc.js", "assets/DecorationLine-2ee2dc39.css", "chunks/AudioButton-55789cb9.js", "assets/AudioButton-61303e5c.css"],
        import.meta.url), () => j(() => import("./chunks/9-a7647271.js"), ["chunks/9-a7647271.js", "chunks/_page-5ce03881.js", "components/pages/(experience)/lore/_page.svelte-5b4990dc.js", "assets/_page-427ff351.css", "chunks/index-bc06f92d.js", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/AudioButton-55789cb9.js", "assets/AudioButton-61303e5c.css", "chunks/utils-cfade855.js", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js"],
        import.meta.url), () => j(() => import("./chunks/10-9f606f16.js"), ["chunks/10-9f606f16.js", "chunks/_page-477a0a70.js", "components/pages/(experience)/team/_page.svelte-db4318b5.js", "chunks/index-bc06f92d.js", "chunks/Gallery-970d79ec.js", "assets/Gallery-85555b25.css", "chunks/DecorationArrow-7af54352.js", "assets/DecorationArrow-5e778477.css", "chunks/ArrowButton-8ba3948e.js", "assets/ArrowButton-e6fdb1fb.css", "chunks/index-d954d85d.js", "assets/index-a07b92a8.css", "chunks/stores-d809ebdc.js", "chunks/index-2f558095.js", "chunks/utils-cfade855.js", "chunks/IntroView-a336b6ee.js", "assets/IntroView-b4cc053d.css", "chunks/SplitText-d8f85d21.js"],
        import.meta.url), () => j(() => import("./chunks/11-03f6abf0.js"), ["chunks/11-03f6abf0.js", "components/pages/(page)/disclaimer/_page.svelte-10707131.js", "assets/_page-7f92fd43.css", "chunks/index-bc06f92d.js"],
        import.meta.url), () => j(() => import("./chunks/12-d53d4ad9.js"), ["chunks/12-d53d4ad9.js", "components/pages/(page)/privacy-policy/_page.svelte-8d6a95c6.js", "assets/_page-95ed0315.css", "chunks/index-bc06f92d.js"],
        import.meta.url), () => j(() => import("./chunks/13-cf217ce5.js"), ["chunks/13-cf217ce5.js", "components/pages/(page)/terms-conditions/_page.svelte-ca4388ae.js", "assets/_page-962537fb.css", "chunks/index-bc06f92d.js"],
        import.meta.url)],
    At = [],
    Tt = {
        "(experience)": [4, [2]],
        "(experience)/battlearena": [5, [2]],
        "(experience)/creatures": [6, [2]],
        "(experience)/gameplay": [7, [2]],
        "(experience)/kitchensink": [8, [2]],
        "(experience)/lore": [9, [2]],
        "(experience)/team": [10, [2]],
        "(page)/disclaimer": [11, [3]],
        "(page)/privacy-policy": [12, [3]],
        "(page)/terms-conditions": [13, [3]]
    },
    Dt = {
        handleError: ({
            error: a
        }) => {
            console.error(a)
        }
    };
class ke {
    constructor(e, t) {
        this.status = e, typeof t == "string" ? this.body = {
            message: t
        } : t ? this.body = t : this.body = {
            message: `Error: ${e}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class xe {
    constructor(e, t) {
        this.status = e, this.location = t
    }
}
const Ut = "/__data.js";
async function jt(a) {
    var e;
    for (const t in a)
        if (typeof((e = a[t]) == null ? void 0 : e.then) == "function") return Object.fromEntries(await Promise.all(Object.entries(a).map(async ([o, i]) => [o, await i])));
    return a
}
const Me = "sveltekit:scroll",
    W = "sveltekit:index",
    le = bt(pe, At, Tt, It),
    $e = pe[0],
    Re = pe[1];
$e();
Re();
let ae = {};
try {
    ae = JSON.parse(sessionStorage[Me])
} catch {}

function be(a) {
    ae[a] = Ee()
}

function Vt({
    target: a,
    base: e,
    trailing_slash: t
}) {
    var Ne;
    const o = [];
    let i = null;
    const d = {
        before_navigate: [],
        after_navigate: []
    };
    let n = {
            branch: [],
            error: null,
            url: null
        },
        l = !1,
        u = !1,
        _ = !0,
        g = !1,
        S = !1,
        U, v = (Ne = history.state) == null ? void 0 : Ne[W];
    v || (v = Date.now(), history.replaceState({
        ...history.state,
        [W]: v
    }, "", location.href));
    const B = ae[v];
    B && (history.scrollRestoration = "manual", scrollTo(B.x, B.y));
    let M = !1,
        C, Se, ie;
    async function Pe() {
        ie = ie || Promise.resolve(), await ie, ie = null;
        const r = new URL(location.href),
            f = me(r, !0);
        i = null, await Ie(f, r, [])
    }
    async function de(r, {
        noscroll: f = !1,
        replaceState: p = !1,
        keepfocus: s = !1,
        state: c = {}
    }, h, m) {
        return typeof r == "string" && (r = new URL(r, Je(document))), ge({
            url: r,
            scroll: f ? Ee() : null,
            keepfocus: s,
            redirect_chain: h,
            details: {
                state: c,
                replaceState: p
            },
            nav_token: m,
            accepted: () => {},
            blocked: () => {},
            type: "goto"
        })
    }
    async function Oe(r) {
        const f = me(r, !1);
        if (!f) throw new Error("Attempted to prefetch a URL that does not belong to this app");
        return i = {
            id: f.id,
            promise: De(f)
        }, i.promise
    }
    async function Ie(r, f, p, s, c = {}, h) {
        var k, E;
        Se = c;
        let m = r && await De(r);
        if (m || (m = await Ve(f, null, ne(new Error(`Not found: ${f.pathname}`), {
                url: f,
                params: {},
                routeId: null
            }), 404)), f = (r == null ? void 0 : r.url) || f, Se !== c) return !1;
        if (m.type === "redirect")
            if (p.length > 10 || p.includes(f.pathname)) m = await oe({
                status: 500,
                error: ne(new Error("Redirect loop"), {
                    url: f,
                    params: {},
                    routeId: null
                }),
                url: f,
                routeId: null
            });
            else return de(new URL(m.location, f).href, {}, [...p, f.pathname], c), !1;
        else((E = (k = m.props) == null ? void 0 : k.page) == null ? void 0 : E.status) >= 400 && await X.updated.check() && await se(f);
        if (o.length = 0, S = !1, g = !0, s && s.details) {
            const {
                details: y
            } = s, b = y.replaceState ? 0 : 1;
            y.state[W] = v += b, history[y.replaceState ? "replaceState" : "pushState"](y.state, "", f)
        }
        if (i = null, u) {
            n = m.state, m.props.page && (m.props.page.url = f);
            const y = fe();
            U.$set(m.props), y()
        } else Ae(m);
        if (s) {
            const {
                scroll: y,
                keepfocus: b
            } = s;
            if (!b) {
                const R = document.body,
                    P = R.getAttribute("tabindex");
                R.tabIndex = -1, R.focus({
                    preventScroll: !0
                }), setTimeout(() => {
                    var O;
                    (O = getSelection()) == null || O.removeAllRanges()
                }), P !== null ? R.setAttribute("tabindex", P) : R.removeAttribute("tabindex")
            }
            if (await Be(), _) {
                const R = f.hash && document.getElementById(f.hash.slice(1));
                y ? scrollTo(y.x, y.y) : R ? R.scrollIntoView() : scrollTo(0, 0)
            }
        } else await Be();
        _ = !0, m.props.page && (C = m.props.page), h && h(), g = !1
    }

    function Ae(r) {
        var c, h;
        n = r.state;
        const f = document.querySelector("style[data-sveltekit]");
        f && f.remove(), C = r.props.page;
        const p = fe();
        U = new Ot({
            target: a,
            props: {
                ...r.props,
                stores: X
            },
            hydrate: !0
        }), p();
        const s = {
            from: null,
            to: ce("to", {
                params: n.params,
                routeId: (h = (c = n.route) == null ? void 0 : c.id) != null ? h : null,
                url: new URL(location.href)
            }),
            type: "load"
        };
        d.after_navigate.forEach(m => m(s)), u = !0
    }
    async function ee({
        url: r,
        params: f,
        branch: p,
        status: s,
        error: c,
        route: h,
        form: m
    }) {
        var P;
        const k = p.filter(Boolean),
            E = {
                type: "loaded",
                state: {
                    url: r,
                    params: f,
                    branch: p,
                    error: c,
                    route: h
                },
                props: {
                    components: k.map(O => O.node.component)
                }
            };
        m !== void 0 && (E.props.form = m);
        let y = {},
            b = !C;
        for (let O = 0; O < k.length; O += 1) {
            const T = k[O];
            y = {
                ...y,
                ...T.data
            }, (b || !n.branch.some(D => D === T)) && (E.props[`data_${O}`] = y, b = b || Object.keys((P = T.data) != null ? P : {}).length > 0)
        }
        if (b || (b = Object.keys(C.data).length !== Object.keys(y).length), !n.url || r.href !== n.url.href || n.error !== c || m !== void 0 || b) {
            E.props.page = {
                error: c,
                params: f,
                routeId: h && h.id,
                status: s,
                url: r,
                form: m,
                data: b ? y : C.data
            };
            const O = (T, D) => {
                Object.defineProperty(E.props.page, T, {
                    get: () => {
                        throw new Error(`$page.${T} has been replaced by $page.url.${D}`)
                    }
                })
            };
            O("origin", "origin"), O("path", "pathname"), O("query", "searchParams")
        }
        return E
    }
    async function _e({
        loader: r,
        parent: f,
        url: p,
        params: s,
        routeId: c,
        server_data_node: h
    }) {
        var y, b, R, P, O;
        let m = null;
        const k = {
                dependencies: new Set,
                params: new Set,
                parent: !1,
                url: !1
            },
            E = await r();
        if ((y = E.shared) != null && y.load) {
            let T = function(...L) {
                for (const w of L) {
                    const {
                        href: $
                    } = new URL(w, p);
                    k.dependencies.add($)
                }
            };
            const D = {
                routeId: c,
                params: new Proxy(s, {
                    get: (L, w) => (k.params.add(w), L[w])
                }),
                data: (b = h == null ? void 0 : h.data) != null ? b : null,
                url: ut(p, () => {
                    k.url = !0
                }),
                async fetch(L, w) {
                    let $;
                    L instanceof Request ? ($ = L.url, w = {
                        body: L.method === "GET" || L.method === "HEAD" ? void 0 : await L.blob(),
                        cache: L.cache,
                        credentials: L.credentials,
                        headers: L.headers,
                        integrity: L.integrity,
                        keepalive: L.keepalive,
                        method: L.method,
                        mode: L.mode,
                        redirect: L.redirect,
                        referrer: L.referrer,
                        referrerPolicy: L.referrerPolicy,
                        signal: L.signal,
                        ...w
                    }) : $ = L;
                    const A = new URL($, p).href;
                    return T(A), u ? ht(A, w) : _t($, A, w)
                },
                setHeaders: () => {},
                depends: T,
                parent() {
                    return k.parent = !0, f()
                }
            };
            Object.defineProperties(D, {
                props: {
                    get() {
                        throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")
                    },
                    enumerable: !1
                },
                session: {
                    get() {
                        throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")
                    },
                    enumerable: !1
                },
                stuff: {
                    get() {
                        throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")
                    },
                    enumerable: !1
                }
            }), m = (R = await E.shared.load.call(null, D)) != null ? R : null, m = m ? await jt(m) : null
        }
        return {
            node: E,
            loader: r,
            server: h,
            shared: (P = E.shared) != null && P.load ? {
                type: "data",
                data: m,
                uses: k
            } : null,
            data: (O = m != null ? m : h == null ? void 0 : h.data) != null ? O : null
        }
    }

    function Te(r, f, p, s) {
        if (S) return !0;
        if (!p) return !1;
        if (p.parent && f || p.url && r) return !0;
        for (const c of p.params)
            if (s[c] !== n.params[c]) return !0;
        for (const c of p.dependencies)
            if (o.some(h => h(new URL(c)))) return !0;
        return !1
    }

    function he(r, f) {
        var p, s;
        return (r == null ? void 0 : r.type) === "data" ? {
            type: "data",
            data: r.data,
            uses: {
                dependencies: new Set((p = r.uses.dependencies) != null ? p : []),
                params: new Set((s = r.uses.params) != null ? s : []),
                parent: !!r.uses.parent,
                url: !!r.uses.url
            }
        } : (r == null ? void 0 : r.type) === "skip" && f != null ? f : null
    }
    async function De({
        id: r,
        invalidating: f,
        url: p,
        params: s,
        route: c
    }) {
        var L;
        if ((i == null ? void 0 : i.id) === r) return i.promise;
        const {
            errors: h,
            layouts: m,
            leaf: k
        } = c, E = [...m, k];
        h.forEach(w => w == null ? void 0 : w().catch(() => {})), E.forEach(w => w == null ? void 0 : w[1]().catch(() => {}));
        let y = null;
        const b = n.url ? r !== n.url.pathname + n.url.search : !1,
            R = E.reduce((w, $, A) => {
                var te;
                const I = n.branch[A],
                    Z = !!($ != null && $[0]) && ((I == null ? void 0 : I.loader) !== $[1] || Te(b, w.some(Boolean), (te = I.server) == null ? void 0 : te.uses, s));
                return w.push(Z), w
            }, []);
        if (R.some(Boolean)) {
            try {
                y = await Ge(p, R)
            } catch (w) {
                return oe({
                    status: 500,
                    error: ne(w, {
                        url: p,
                        params: s,
                        routeId: c.id
                    }),
                    url: p,
                    routeId: c.id
                })
            }
            if (y.type === "redirect") return y
        }
        const P = y == null ? void 0 : y.nodes;
        let O = !1;
        const T = E.map(async (w, $) => {
            var te;
            if (!w) return;
            const A = n.branch[$],
                I = P == null ? void 0 : P[$];
            if ((!I || I.type === "skip") && w[1] === (A == null ? void 0 : A.loader) && !Te(b, O, (te = A.shared) == null ? void 0 : te.uses, s)) return A;
            if (O = !0, (I == null ? void 0 : I.type) === "error") throw I;
            return _e({
                loader: w[1],
                url: p,
                params: s,
                routeId: c.id,
                parent: async () => {
                    var Ce;
                    const qe = {};
                    for (let we = 0; we < $; we += 1) Object.assign(qe, (Ce = await T[we]) == null ? void 0 : Ce.data);
                    return qe
                },
                server_data_node: he(I === void 0 && w[0] ? {
                    type: "skip"
                } : I != null ? I : null, A == null ? void 0 : A.server)
            })
        });
        for (const w of T) w.catch(() => {});
        const D = [];
        for (let w = 0; w < E.length; w += 1)
            if (E[w]) try {
                D.push(await T[w])
            } catch ($) {
                if ($ instanceof xe) return {
                    type: "redirect",
                    location: $.location
                };
                let A = 500,
                    I;
                P != null && P.includes($) ? (A = (L = $.status) != null ? L : A, I = $.error) : $ instanceof ke ? (A = $.status, I = $.body) : I = ne($, {
                    params: s,
                    url: p,
                    routeId: c.id
                });
                const Z = await Ue(w, D, h);
                return Z ? await ee({
                    url: p,
                    params: s,
                    branch: D.slice(0, Z.idx).concat(Z.node),
                    status: A,
                    error: I,
                    route: c
                }) : await Ve(p, c.id, I, A)
            } else D.push(void 0);
        return await ee({
            url: p,
            params: s,
            branch: D,
            status: 200,
            error: null,
            route: c,
            form: f ? void 0 : null
        })
    }
    async function Ue(r, f, p) {
        for (; r--;)
            if (p[r]) {
                let s = r;
                for (; !f[s];) s -= 1;
                try {
                    return {
                        idx: s + 1,
                        node: {
                            node: await p[r](),
                            loader: p[r],
                            data: {},
                            server: null,
                            shared: null
                        }
                    }
                } catch {
                    continue
                }
            }
    }
    async function oe({
        status: r,
        error: f,
        url: p,
        routeId: s
    }) {
        var y;
        const c = {},
            h = await $e();
        let m = null;
        if (h.server) try {
            const b = await Ge(p, [!0]);
            if (b.type !== "data" || b.nodes[0] && b.nodes[0].type !== "data") throw 0;
            m = (y = b.nodes[0]) != null ? y : null
        } catch {
            (p.origin !== location.origin || p.pathname !== location.pathname || l) && await se(p)
        }
        const k = await _e({
                loader: $e,
                url: p,
                params: c,
                routeId: s,
                parent: () => Promise.resolve({}),
                server_data_node: he(m)
            }),
            E = {
                node: await Re(),
                loader: Re,
                shared: null,
                server: null,
                data: null
            };
        return await ee({
            url: p,
            params: c,
            branch: [k, E],
            status: r,
            error: f,
            route: null
        })
    }

    function me(r, f) {
        if (je(r)) return;
        const p = decodeURI(r.pathname.slice(e.length) || "/");
        for (const s of le) {
            const c = s.exec(p);
            if (c) {
                const h = new URL(r.origin + lt(r.pathname, t) + r.search + r.hash);
                return {
                    id: h.pathname + h.search,
                    invalidating: f,
                    route: s,
                    params: ct(c),
                    url: h
                }
            }
        }
    }

    function je(r) {
        return r.origin !== location.origin || !r.pathname.startsWith(e)
    }
    async function ge({
        url: r,
        scroll: f,
        keepfocus: p,
        redirect_chain: s,
        details: c,
        type: h,
        delta: m,
        nav_token: k,
        accepted: E,
        blocked: y
    }) {
        var T, D, L, w;
        let b = !1;
        const R = me(r, !1),
            P = {
                from: ce("from", {
                    params: n.params,
                    routeId: (D = (T = n.route) == null ? void 0 : T.id) != null ? D : null,
                    url: n.url
                }),
                to: ce("to", {
                    params: (L = R == null ? void 0 : R.params) != null ? L : null,
                    routeId: (w = R == null ? void 0 : R.route.id) != null ? w : null,
                    url: r
                }),
                type: h
            };
        m !== void 0 && (P.delta = m);
        const O = {
            ...P,
            cancel: () => {
                b = !0
            }
        };
        if (d.before_navigate.forEach($ => $(O)), b) {
            y();
            return
        }
        be(v), E(), u && X.navigating.set(P), await Ie(R, r, s, {
            scroll: f,
            keepfocus: p,
            details: c
        }, k, () => {
            d.after_navigate.forEach($ => $(P)), X.navigating.set(null)
        })
    }
    async function Ve(r, f, p, s) {
        return r.origin === location.origin && r.pathname === location.pathname && !l ? await oe({
            status: s,
            error: p,
            url: r,
            routeId: f
        }) : await se(r)
    }

    function se(r) {
        return location.href = r.href, new Promise(() => {})
    }
    return {
        after_navigate: r => {
            ve(() => (d.after_navigate.push(r), () => {
                const f = d.after_navigate.indexOf(r);
                d.after_navigate.splice(f, 1)
            }))
        },
        before_navigate: r => {
            ve(() => (d.before_navigate.push(r), () => {
                const f = d.before_navigate.indexOf(r);
                d.before_navigate.splice(f, 1)
            }))
        },
        disable_scroll_handling: () => {
            (g || !u) && (_ = !1)
        },
        goto: (r, f = {}) => de(r, f, []),
        invalidate: r => {
            if (r === void 0) throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");
            if (typeof r == "function") o.push(r);
            else {
                const {
                    href: f
                } = new URL(r, location.href);
                o.push(p => p.href === f)
            }
            return Pe()
        },
        invalidateAll: () => (S = !0, Pe()),
        prefetch: async r => {
            const f = new URL(r, Je(document));
            await Oe(f)
        },
        prefetch_routes: async r => {
            const p = (r ? le.filter(s => r.some(c => s.exec(c))) : le).map(s => Promise.all([...s.layouts, s.leaf].map(c => c == null ? void 0 : c[1]())));
            await Promise.all(p)
        },
        apply_action: async r => {
            if (r.type === "error") {
                const f = new URL(location.href),
                    {
                        branch: p,
                        route: s
                    } = n;
                if (!s) return;
                const c = await Ue(n.branch.length, p, s.errors);
                if (c) {
                    const h = await ee({
                        url: f,
                        params: n.params,
                        branch: p.slice(0, c.idx).concat(c.node),
                        status: 500,
                        error: r.error,
                        route: s
                    });
                    n = h.state;
                    const m = fe();
                    U.$set(h.props), m()
                }
            } else if (r.type === "redirect") de(r.location, {}, []);
            else {
                const f = {
                        form: r.data,
                        page: {
                            ...C,
                            form: r.data,
                            status: r.status
                        }
                    },
                    p = fe();
                U.$set(f), p()
            }
        },
        _start_router: () => {
            history.scrollRestoration = "manual", addEventListener("beforeunload", s => {
                var m, k;
                let c = !1;
                const h = {
                    from: ce("from", {
                        params: n.params,
                        routeId: (k = (m = n.route) == null ? void 0 : m.id) != null ? k : null,
                        url: n.url
                    }),
                    to: null,
                    type: "unload",
                    cancel: () => c = !0
                };
                d.before_navigate.forEach(E => E(h)), c ? (s.preventDefault(), s.returnValue = "") : history.scrollRestoration = "auto"
            }), addEventListener("visibilitychange", () => {
                if (document.visibilityState === "hidden") {
                    be(v);
                    try {
                        sessionStorage[Me] = JSON.stringify(ae)
                    } catch {}
                }
            });
            const r = s => {
                const {
                    url: c,
                    options: h
                } = Fe(s);
                if (c && h.prefetch) {
                    if (je(c)) return;
                    Oe(c)
                }
            };
            let f;
            const p = s => {
                clearTimeout(f), f = setTimeout(() => {
                    var c;
                    (c = s.target) == null || c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch", {
                        bubbles: !0
                    }))
                }, 20)
            };
            addEventListener("touchstart", r), addEventListener("mousemove", p), addEventListener("sveltekit:trigger_prefetch", r), addEventListener("click", s => {
                if (s.button || s.which !== 1 || s.metaKey || s.ctrlKey || s.shiftKey || s.altKey || s.defaultPrevented) return;
                const {
                    a: c,
                    url: h,
                    options: m
                } = Fe(s);
                if (!c || !h) return;
                const k = c instanceof SVGAElement;
                if (!k && !(h.protocol === "https:" || h.protocol === "http:")) return;
                const E = (c.getAttribute("rel") || "").split(/\s+/);
                if (c.hasAttribute("download") || E.includes("external") || m.reload || (k ? c.target.baseVal : c.target)) return;
                const [y, b] = h.href.split("#");
                if (b !== void 0 && y === location.href.split("#")[0]) {
                    M = !0, be(v), n.url = h, X.page.set({
                        ...C,
                        url: h
                    }), X.page.notify();
                    return
                }
                ge({
                    url: h,
                    scroll: m.noscroll ? Ee() : null,
                    keepfocus: !1,
                    redirect_chain: [],
                    details: {
                        state: {},
                        replaceState: h.href === location.href
                    },
                    accepted: () => s.preventDefault(),
                    blocked: () => s.preventDefault(),
                    type: "link"
                })
            }), addEventListener("popstate", s => {
                if (s.state) {
                    if (s.state[W] === v) return;
                    const c = s.state[W] - v;
                    ge({
                        url: new URL(location.href),
                        scroll: ae[s.state[W]],
                        keepfocus: !1,
                        redirect_chain: [],
                        details: null,
                        accepted: () => {
                            v = s.state[W]
                        },
                        blocked: () => {
                            history.go(-c)
                        },
                        type: "popstate",
                        delta: c
                    })
                }
            }), addEventListener("hashchange", () => {
                M && (M = !1, history.replaceState({
                    ...history.state,
                    [W]: ++v
                }, "", location.href))
            });
            for (const s of document.querySelectorAll("link")) s.rel === "icon" && (s.href = s.href);
            addEventListener("pageshow", s => {
                s.persisted && X.navigating.set(null)
            })
        },
        _hydrate: async ({
            status: r,
            error: f,
            node_ids: p,
            params: s,
            routeId: c,
            data: h,
            form: m
        }) => {
            var y;
            l = !0;
            const k = new URL(location.href);
            let E;
            try {
                const b = p.map(async (R, P) => {
                    const O = h[P];
                    return _e({
                        loader: pe[R],
                        url: k,
                        params: s,
                        routeId: c,
                        parent: async () => {
                            const T = {};
                            for (let D = 0; D < P; D += 1) Object.assign(T, (await b[D]).data);
                            return T
                        },
                        server_data_node: he(O)
                    })
                });
                E = await ee({
                    url: k,
                    params: s,
                    branch: await Promise.all(b),
                    status: r,
                    error: f,
                    form: m,
                    route: (y = le.find(R => R.id === c)) != null ? y : null
                })
            } catch (b) {
                if (b instanceof xe) {
                    await se(new URL(b.location, location.href));
                    return
                }
                E = await oe({
                    status: b instanceof ke ? b.status : 500,
                    error: ne(b, {
                        url: k,
                        params: s,
                        routeId: c
                    }),
                    url: k,
                    routeId: c
                })
            }
            Ae(E)
        }
    }
}
let Nt = 1;
async function Ge(a, e) {
    const t = new URL(a);
    t.pathname = a.pathname.replace(/\/$/, "") + Ut, t.searchParams.set("__invalid", e.map(i => i ? "y" : "n").join("")), t.searchParams.set("__id", String(Nt++)), await j(() => import(t.href), [],
        import.meta.url);
    const o = window.__sveltekit_data;
    return delete window.__sveltekit_data, o
}

function ne(a, e) {
    var t;
    return a instanceof ke ? a.body : (t = Dt.handleError({
        error: a,
        event: e
    })) != null ? t : {
        message: e.routeId != null ? "Internal Error" : "Not Found"
    }
}
const qt = ["hash", "href", "host", "hostname", "origin", "pathname", "port", "protocol", "search", "searchParams", "toString", "toJSON"];

function ce(a, e) {
    for (const t of qt) Object.defineProperty(e, t, {
        get() {
            throw new Error(`The navigation shape changed - ${a}.${t} should now be ${a}.url.${t}`)
        },
        enumerable: !1
    });
    return e
}

function fe() {
    return () => {}
}
async function Ft({
    env: a,
    hydrate: e,
    paths: t,
    target: o,
    trailing_slash: i
}) {
    ot(t);
    const d = Vt({
        target: o,
        base: t.base,
        trailing_slash: i
    });
    st({
        client: d
    }), e ? await d._hydrate(e) : d.goto(location.href, {
        replaceState: !0
    }), d._start_router()
}
export {
    Ft as start
};