(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3047);
        },
      ]);
    },
    1210: function (e, t) {
      "use strict";
      function n(e, t, n, o) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = n),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8418: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      n(5753).default,
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = n(2648).Z,
        a = n(7273).Z,
        c = r(n(7294)),
        s = n(6273),
        i = n(2725),
        l = n(3462),
        u = n(1018),
        f = n(7190),
        d = n(1210),
        h = n(8684),
        p = {};
      function m(e, t, n, o) {
        if (e && s.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, n, o)).catch(function (e) {});
          var r = o && void 0 !== o.locale ? o.locale : e && e.locale;
          p[t + "%" + n + (r ? "%" + r : "")] = !0;
        }
      }
      var x = c.default.forwardRef(function (e, t) {
        var n,
          r,
          x = e.href,
          j = e.as,
          v = e.children,
          g = e.prefetch,
          _ = e.passHref,
          b = e.replace,
          y = e.shallow,
          N = e.scroll,
          C = e.locale,
          w = e.onClick,
          S = e.onMouseEnter,
          M = e.onTouchStart,
          k = e.legacyBehavior,
          L = void 0 === k ? !0 !== Boolean(!1) : k,
          O = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = v),
          L &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = c.default.createElement("a", null, n));
        var E = !1 !== g,
          T = c.default.useContext(l.RouterContext),
          B = c.default.useContext(u.AppRouterContext);
        B && (T = B);
        var I = c.default.useMemo(
            function () {
              var e = o(s.resolveHref(T, x, !0), 2),
                t = e[0],
                n = e[1];
              return { href: t, as: j ? s.resolveHref(T, j) : n || t };
            },
            [T, x, j]
          ),
          P = I.href,
          R = I.as,
          D = c.default.useRef(P),
          A = c.default.useRef(R);
        L && (r = c.default.Children.only(n));
        var U = L ? r && "object" == typeof r && r.ref : t,
          q = o(f.useIntersection({ rootMargin: "200px" }), 3),
          J = q[0],
          K = q[1],
          H = q[2],
          Q = c.default.useCallback(
            function (e) {
              (A.current !== R || D.current !== P) &&
                (H(), (A.current = R), (D.current = P)),
                J(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [R, U, P, H, J]
          );
        c.default.useEffect(
          function () {
            var e = K && E && s.isLocalURL(P),
              t = void 0 !== C ? C : T && T.locale,
              n = p[P + "%" + R + (t ? "%" + t : "")];
            e && !n && m(T, P, R, { locale: t });
          },
          [R, P, K, C, E, T]
        );
        var W = {
          ref: Q,
          onClick: function (e) {
            L || "function" != typeof w || w(e),
              L &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, n, o, r, a, i, l, u, f) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    ((!(h = (d = e).currentTarget.target) || "_self" === h) &&
                      !d.metaKey &&
                      !d.ctrlKey &&
                      !d.shiftKey &&
                      !d.altKey &&
                      (!d.nativeEvent || 2 !== d.nativeEvent.which) &&
                      s.isLocalURL(n))
                  ) {
                    e.preventDefault();
                    var d,
                      h,
                      p = function () {
                        "beforePopState" in t
                          ? t[r ? "replace" : "push"](n, o, {
                              shallow: a,
                              locale: l,
                              scroll: i,
                            })
                          : t[r ? "replace" : "push"](n, {
                              forceOptimisticNavigation: !f,
                            });
                      };
                    u ? c.default.startTransition(p) : p();
                  }
                })(e, T, P, R, b, y, N, C, Boolean(B), E);
          },
          onMouseEnter: function (e) {
            L || "function" != typeof S || S(e),
              L &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              !(!E && B) && s.isLocalURL(P) && m(T, P, R, { priority: !0 });
          },
          onTouchStart: function (e) {
            L || "function" != typeof M || M(e),
              L &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              !(!E && B) && s.isLocalURL(P) && m(T, P, R, { priority: !0 });
          },
        };
        if (!L || _ || ("a" === r.type && !("href" in r.props))) {
          var Z = void 0 !== C ? C : T && T.locale,
            z =
              T &&
              T.isLocaleDomain &&
              d.getDomainLocale(R, Z, T.locales, T.domainLocales);
          W.href = z || h.addBasePath(i.addLocale(R, Z, T && T.defaultLocale));
        }
        return L
          ? c.default.cloneElement(r, W)
          : c.default.createElement("a", Object.assign({}, O, W), n);
      });
      (t.default = x),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7190: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(4941).Z;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            n = e.rootMargin,
            l = e.disabled || !c,
            u = o(r.useState(!1), 2),
            f = u[0],
            d = u[1],
            h = o(r.useState(null), 2),
            p = h[0],
            m = h[1];
          return (
            r.useEffect(
              function () {
                if (c) {
                  if (!l && !f && p && p.tagName) {
                    var e, o, r, u, h, m, x;
                    return (
                      (o = function (e) {
                        return e && d(e);
                      }),
                      (h = (u = (function (e) {
                        var t,
                          n = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          o = i.find(function (e) {
                            return e.root === n.root && e.margin === n.margin;
                          });
                        if (o && (t = s.get(o))) return t;
                        var r = new Map();
                        return (
                          (t = {
                            id: n,
                            observer: new IntersectionObserver(function (e) {
                              e.forEach(function (e) {
                                var t = r.get(e.target),
                                  n =
                                    e.isIntersecting || e.intersectionRatio > 0;
                                t && n && t(n);
                              });
                            }, e),
                            elements: r,
                          }),
                          i.push(n),
                          s.set(n, t),
                          t
                        );
                      })(
                        (r = {
                          root: null == t ? void 0 : t.current,
                          rootMargin: n,
                        })
                      )).id),
                      (m = u.observer),
                      (x = u.elements).set(p, o),
                      m.observe(p),
                      function () {
                        if ((x.delete(p), m.unobserve(p), 0 === x.size)) {
                          m.disconnect(), s.delete(h);
                          var e = i.findIndex(function (e) {
                            return e.root === h.root && e.margin === h.margin;
                          });
                          e > -1 && i.splice(e, 1);
                        }
                      }
                    );
                  }
                } else if (!f) {
                  var j = a.requestIdleCallback(function () {
                    return d(!0);
                  });
                  return function () {
                    return a.cancelIdleCallback(j);
                  };
                }
              },
              [p, l, n, t, f]
            ),
            [
              m,
              f,
              r.useCallback(function () {
                d(!1);
              }, []),
            ]
          );
        });
      var r = n(7294),
        a = n(9311),
        c = "function" == typeof IntersectionObserver,
        s = new Map(),
        i = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1018: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var o = (0, n(2648).Z)(n(7294)),
        r = o.default.createContext(null);
      t.AppRouterContext = r;
      var a = o.default.createContext(null);
      t.LayoutRouterContext = a;
      var c = o.default.createContext(null);
      t.GlobalLayoutRouterContext = c;
      var s = o.default.createContext(null);
      t.TemplateContext = s;
    },
    3047: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var o = n(1799),
        r = n(5893),
        a = n(7294);
      n(4534), n(5880), n(8628);
      var c = n(1785),
        s = n.n(c),
        i = n(9008),
        l = n.n(i),
        u = n(2603),
        f = n.n(u),
        d = n(1664),
        h = n.n(d);
      function p() {
        var e = (0, a.useState)(!1),
          t = e[0],
          n = e[1];
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "".concat(f().header, " ").concat(f().backColor1),
            children: [
              (0, r.jsxs)("div", {
                className: "".concat(f().headerContents, " grid1"),
                children: [
                  (0, r.jsx)("div", {
                    className: "".concat(f().headerLogo),
                    children: (0, r.jsx)(h(), {
                      href: "/",
                      children: (0, r.jsx)("img", {
                        src: "/img/logo_tendency.png",
                        alt: "",
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(f().headerMenuColumn),
                    children: [
                      (0, r.jsx)("div", {
                        className: "".concat(f().headerMenu, " "),
                        children: (0, r.jsx)(h(), {
                          href: "/",
                          children: (0, r.jsx)("h5", {
                            className: "fon5 fon4Sp",
                            children: "Top",
                          }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(f().headerMenu, " "),
                        children: (0, r.jsx)(h(), {
                          href: "/about",
                          children: (0, r.jsx)("h5", {
                            className: "fon5 fon4Sp",
                            children: "About",
                          }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(f().headerMenu, " "),
                        children: (0, r.jsx)(h(), {
                          href: "/news",
                          children: (0, r.jsx)("h5", {
                            className: "fon5 fon4Sp",
                            children: "News",
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: ""
                          .concat(f().headerMenu, " ")
                          .concat(f().headerCollectionMenu),
                        children: [
                          (0, r.jsx)("h5", {
                            className: "fon5 fon4Sp",
                            children: "Collection",
                          }),
                          (0, r.jsxs)("div", {
                            className: "".concat(f().headerCollectionSubMenu),
                            children: [
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  f().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/brandNew",
                                    children: (0, r.jsx)("h5", {
                                      className: "fon5 fon4Sp",
                                      children: "Brand-New",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(f().border),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  f().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/miwakoTiqueSeries",
                                    children: (0, r.jsx)("h5", {
                                      className: "fon5 fon4Sp",
                                      children: "MIWAKO TIQUE Serious",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(f().border),
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "".concat(
                                  f().headerCollectionSubMenuDetail
                                ),
                                children: [
                                  (0, r.jsx)(h(), {
                                    href: "/varietyList",
                                    children: (0, r.jsx)("h5", {
                                      className: "fon5 fon4Sp",
                                      children: "Variety",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "".concat(f().border),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "".concat(f().headerMenu),
                        children: (0, r.jsx)(h(), {
                          href: "/contact",
                          children: (0, r.jsx)("h5", {
                            className: "fon5 fon4Sp",
                            children: "Contact",
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "".concat(f().humburgerMenu),
                    children: (0, r.jsxs)("div", {
                      onClick: function () {
                        n(function (e) {
                          return !e;
                        });
                      },
                      className: ""
                        .concat(f().humburgerbutton, " ")
                        .concat(t ? f().active : ""),
                      children: [
                        (0, r.jsx)("div", {
                          className: "".concat(f().humburgerBorder),
                        }),
                        (0, r.jsx)("div", {
                          className: "".concat(f().humburgerBorder),
                        }),
                        (0, r.jsx)("div", {
                          className: "".concat(f().humburgerBorder),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: ""
                  .concat(f().humburgerContents, " ")
                  .concat(t ? f().active : "", " pos-r"),
                children: (0, r.jsxs)("div", {
                  className: "".concat(f().humburgerMenuColumn, " pos-a"),
                  children: [
                    (0, r.jsx)(h(), {
                      href: "/",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fonSp3",
                        children: "Top",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(f().humburgerBorder),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/about",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fonSp3",
                        children: "About",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(f().humburgerBorder),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/news",
                      children: (0, r.jsx)("h3", {
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        className: "fonSp3",
                        children: "News",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(f().humburgerBorder),
                    }),
                    (0, r.jsx)("h3", {
                      className: "fonSp3",
                      children: "Collection",
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(f().humburgerBorder),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/brandNew",
                      children: (0, r.jsx)("h5", {
                        className: "fonSp4",
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "Brand-New",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/miwakoTiqueSeries",
                      children: (0, r.jsx)("h5", {
                        className: "fonSp4",
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "MIWAKO TIQUE Serious",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/varietyList",
                      children: (0, r.jsx)("h5", {
                        className: "fonSp4",
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "Variety",
                      }),
                    }),
                    (0, r.jsx)(h(), {
                      href: "/contact",
                      children: (0, r.jsx)("h3", {
                        className: "fonSp3",
                        onClick: function () {
                          n(function (e) {
                            return !e;
                          });
                        },
                        children: "Contact",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "".concat(f().humburgerBorder),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var m = n(3812),
        x = n.n(m);
      function j() {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("footer", {
            className: "".concat(x().footer),
            children: [
              (0, r.jsxs)("div", {
                className: "".concat(x().footerColumn, " grid3"),
                children: [
                  (0, r.jsxs)("div", {
                    className: "".concat(x().rosetiqueInfo),
                    children: [
                      (0, r.jsx)("h5", {
                        className: "fon4 fonSp5",
                        children: "Cut Rose Collection",
                      }),
                      (0, r.jsx)("h1", {
                        className: "fon3 fonSp2 ".concat(x().footerTitle),
                        children: "ROSETIQUE JAPAN",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(x().footerContents),
                    children: [
                      (0, r.jsx)("h3", {
                        className: "fon3 fonSp3 bold",
                        children: "Contents",
                      }),
                      (0, r.jsxs)("div", {
                        className: "".concat(x().footerContentsDetail),
                        children: [
                          (0, r.jsx)(h(), {
                            href: "/",
                            children: (0, r.jsx)("h5", {
                              className: "fon4 fonSp4 cursor",
                              children: "TOP",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/about",
                            children: (0, r.jsx)("h5", {
                              className: "fon4 fonSp4 cursor",
                              children: "About",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/news",
                            children: (0, r.jsx)("h5", {
                              className: "fon4 fonSp4 cursor",
                              children: "NEWS",
                            }),
                          }),
                          (0, r.jsx)("h5", {
                            className: "fon4 fonSp4",
                            children: "Collection",
                          }),
                          (0, r.jsx)(h(), {
                            href: "/brandNew",
                            children: (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 cursor",
                              children: "\xa0\xa0Brand-New",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/miwakoTiqueSeries",
                            children: (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 cursor",
                              children: "\xa0\xa0MIWAKO TIQUE Serious",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/varietyList",
                            children: (0, r.jsx)("h5", {
                              className: "fon5 fonSp5 cursor",
                              children: "\xa0\xa0Variety",
                            }),
                          }),
                          (0, r.jsx)(h(), {
                            href: "/company",
                            children: (0, r.jsx)("h5", {
                              className: "fon4 fonSp4 cursor",
                              children: "Company",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "".concat(x().footerContact),
                    children: [
                      (0, r.jsx)("h3", {
                        className: "fon3 fonSp3 bold",
                        children: "Contact",
                      }),
                      (0, r.jsxs)("div", {
                        className: "".concat(x().footerContactDetail),
                        children: [
                          (0, r.jsxs)("p", {
                            className: "fon5 fonSp5 cursor",
                            children: [
                              "品種に関するお問い合わせ、",
                              (0, r.jsx)("br", {}),
                              "取材などはこちらからお願いいたします。",
                            ],
                          }),
                          (0, r.jsx)(h(), {
                            href: "/contact",
                            children: (0, r.jsx)("div", {
                              className: ""
                                .concat(x().contactButton, " ")
                                .concat(x().footerMenu, " mar-t1"),
                              children: (0, r.jsx)("img", {
                                src: "/img/contactButton.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "".concat(x().snsColumn, " mar-t2"),
                            children: [
                              (0, r.jsx)("div", {
                                className: "".concat(x().snsIcon),
                                children: (0, r.jsx)("a", {
                                  href: "https://m.facebook.com/people/Rosetique-by-Miwako/100063798622514/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, r.jsx)("img", {
                                    src: "/img/facebook.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "".concat(x().snsIcon),
                                children: (0, r.jsx)("a", {
                                  href: "https://twitter.com/_rosetique_",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: (0, r.jsx)("img", {
                                    src: "/img/twitter.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "".concat(x().footerCopilight),
                children: (0, r.jsx)("h5", {
                  className: "fon5 fonSp5 cursor",
                  children: "\xa9 2023 ROSETIQUE JAPAN Inc.",
                }),
              }),
            ],
          }),
        });
      }
      function v(e) {
        var t = e.Component,
          n = e.pageProps;
        (0, a.useEffect)(function () {
          s().initialize({ gtmId: "GTM-W5Q8GBS" });
        }, []);
        var c = "Rosetique カタログサイト";
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(l(), {
              children: [
                (0, r.jsx)("title", {
                  children:
                    "ROSETIQUE JAPAN | 日本発、お花に特化したライフスタイルブランド",
                }),
                (0, r.jsx)("meta", {
                  name: "description",
                  content:
                    "日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。",
                }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "initial-scale=1.0, width=device-width",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: !0,
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: !0,
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Alkalami&family=Arbutus+Slab&family=Noto+Serif+JP:wght@300;600&family=Zen+Kaku+Gothic+New:wght@700&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossorigin: !0,
                }),
                (0, r.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap",
                  rel: "stylesheet",
                }),
                (0, r.jsx)("meta", { property: "og:site_name", content: c }),
                (0, r.jsx)("meta", { property: "og:locale", content: "ja_JP" }),
                (0, r.jsx)("meta", { property: "og:title", content: c }),
                (0, r.jsx)("meta", {
                  property: "og:description",
                  content:
                    "日本を代表する育種家、今井清氏のバラを日本全国へ世界へと普及する東京のアンテナショップです。今井清氏の種苗普及を通して、海外品種バラが大半を占める日本の花市場を活性化させ、国産バラ普及に向けて様々な取り組みを展開しています。",
                }),
                (0, r.jsx)("meta", {
                  property: "og:url",
                  content: "https://lordsmobile-g1.com/",
                }),
                (0, r.jsx)("meta", {
                  property: "og:image",
                  content: "/img/ogp.jpg",
                }),
                (0, r.jsx)("meta", { property: "og:type", content: "website" }),
                (0, r.jsx)("meta", {
                  name: "robots",
                  content: "noindex,nofollow",
                }),
                (0, r.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/fav/apple-touch-icon.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/fav/favicon-32x32.png",
                }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/fav/favicon-16x16.png",
                }),
                (0, r.jsx)("link", {
                  rel: "manifest",
                  href: "/fav/site.webmanifest",
                }),
                (0, r.jsx)("link", {
                  rel: "mask-icon",
                  href: "/fav/safari-pinned-tab.svg",
                  color: "#d9795a",
                }),
                (0, r.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/fav/favicon.ico",
                }),
                (0, r.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#da532c",
                }),
                (0, r.jsx)("meta", {
                  name: "msapplication-config",
                  content: "/fav/browserconfig.xml",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
              ],
            }),
            (0, r.jsx)(p, {}),
            (0, r.jsx)(t, (0, o.Z)({}, n)),
            (0, r.jsx)(j, {}),
          ],
        });
      }
    },
    3812: function (e) {
      e.exports = {
        footer: "footer_footer__WCChH",
        footerTitle: "footer_footerTitle____8nY",
        footerColumn: "footer_footerColumn__nZhLm",
        footerContentsDetail: "footer_footerContentsDetail__ATVp3",
        footerContactDetail: "footer_footerContactDetail__BfOLE",
        contactButton: "footer_contactButton__EnXIp",
        snsColumn: "footer_snsColumn__w06_l",
        snsIcon: "footer_snsIcon__iiV2O",
        rosetiqueInfo: "footer_rosetiqueInfo__SW7Dr",
        footerContents: "footer_footerContents__lCxNq",
        footerCopilight: "footer_footerCopilight__ubYtB",
      };
    },
    2603: function (e) {
      e.exports = {
        backColor1: "header_backColor1__6U7l2",
        header: "header_header__pKEQL",
        headerContents: "header_headerContents__eIMai",
        headerLogo: "header_headerLogo__W6GOb",
        headerMenuColumn: "header_headerMenuColumn__XLLrK",
        headerMenu: "header_headerMenu__hhFkz",
        headerCollectionMenu: "header_headerCollectionMenu__QOpBX",
        headerCollectionSubMenu: "header_headerCollectionSubMenu__HBi4h",
        headerCollectionSubMenuDetail:
          "header_headerCollectionSubMenuDetail__cFJ00",
        border: "header_border__SuE_u",
        humburgerMenu: "header_humburgerMenu__8CWUn",
        humburgerbutton: "header_humburgerbutton__5md_J",
        humburgerBorder: "header_humburgerBorder__T_m_P",
        active: "header_active__6SwzS",
        humburgerContents: "header_humburgerContents__8mpCL",
        humburgerMenuColumn: "header_humburgerMenuColumn__3FaMD",
      };
    },
    4534: function () {},
    5880: function () {},
    8628: function () {},
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    1664: function (e, t, n) {
      e.exports = n(8418);
    },
    6421: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(6425)), o && o.__esModule ? o : { default: o });
      e.exports = {
        tags: function (e) {
          var t = e.id,
            n = e.events,
            o = e.dataLayer,
            r = e.dataLayerName,
            c = e.preview,
            s = "&gtm_auth=" + e.auth,
            i = "&gtm_preview=" + c;
          t || (0, a.default)("GTM Id is required");
          var l =
            "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " +
            JSON.stringify(n).slice(1, -1) +
            "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" +
            s +
            i +
            "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" +
            r +
            "','" +
            t +
            "');";
          return {
            iframe:
              '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' +
              t +
              s +
              i +
              '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
            script: l,
            dataLayerVar: this.dataLayer(o, r),
          };
        },
        dataLayer: function (e, t) {
          return (
            "\n      window." +
            t +
            " = window." +
            t +
            " || [];\n      window." +
            t +
            ".push(" +
            JSON.stringify(e) +
            ")"
          );
        },
      };
    },
    8676: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(6421)), o && o.__esModule ? o : { default: o });
      e.exports = {
        dataScript: function (e) {
          var t = document.createElement("script");
          return (t.innerHTML = e), t;
        },
        gtm: function (e) {
          var t,
            n,
            o = a.default.tags(e);
          return {
            noScript: function () {
              var e = document.createElement("noscript");
              return (e.innerHTML = o.iframe), e;
            },
            script: function () {
              var e = document.createElement("script");
              return (e.innerHTML = o.script), e;
            },
            dataScript: this.dataScript(o.dataLayerVar),
          };
        },
        initialize: function (e) {
          var t = e.gtmId,
            n = e.events,
            o = e.dataLayer,
            r = e.dataLayerName,
            a = e.auth,
            c = e.preview,
            s = this.gtm({
              id: t,
              events: void 0 === n ? {} : n,
              dataLayer: o || void 0,
              dataLayerName: void 0 === r ? "dataLayer" : r,
              auth: void 0 === a ? "" : a,
              preview: void 0 === c ? "" : c,
            });
          o && document.head.appendChild(s.dataScript),
            document.head.insertBefore(s.script(), document.head.childNodes[0]),
            document.body.insertBefore(
              s.noScript(),
              document.body.childNodes[0]
            );
        },
        dataLayer: function (e) {
          var t = e.dataLayer,
            n = e.dataLayerName,
            o = void 0 === n ? "dataLayer" : n;
          if (window[o]) return window[o].push(t);
          var r = a.default.dataLayer(t, o),
            c = this.dataScript(r);
          document.head.insertBefore(c, document.head.childNodes[0]);
        },
      };
    },
    1785: function (e, t, n) {
      "use strict";
      var o,
        r,
        a = ((o = n(8676)), o && o.__esModule ? o : { default: o });
      e.exports = a.default;
    },
    6425: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = function (e) {
        console.warn("[react-gtm]", e);
      };
      t.default = n;
    },
    1799: function (e, t, n) {
      "use strict";
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            r.forEach(function (t) {
              o(e, t, n[t]);
            });
        }
        return e;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(387);
    }),
      (_N_E = e.O());
  },
]);
