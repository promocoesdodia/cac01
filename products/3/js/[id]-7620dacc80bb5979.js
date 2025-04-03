(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [790],
  {
    86: (e, s, a) => {
      "use strict";
      a.d(s, { A: () => t });
      let t = {
        src: "/_next/static/media/logo.d4d439d4.svg",
        height: 46,
        width: 180,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    1215: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { default: () => D });
      var t = a(7876),
        i = a(3394),
        l = a.n(i),
        r = a(7328),
        o = a.n(r),
        c = a(9099),
        n = a(8230),
        d = a.n(n),
        m = a(4587),
        x = a.n(m),
        h = a(4232),
        p = a(3219),
        u = a(9724),
        f = a(5429),
        j = a(2451),
        g = a(2009),
        b = a(1466),
        v = a(4059),
        N = a(1780),
        w = a(2580),
        y = a(5463),
        k = a(6901),
        C = a(2422),
        z = a(2576),
        S = a(3596),
        A = a(9357),
        q = a(5544),
        E = a(2161),
        P = a(4964),
        F = a(4996);
      let _ = [
        {
          id: 1,
          name: "Carlos Mendes",
          stars: 5,
          comment:
            'Comprei a caixa branca de ovo de pascoa para presentear minha m\xe3e e ela adorou! Os chocolates s\xe3o muito saborosos e a apresenta\xe7\xe3o da caixa \xe9 linda. Valeu cada centavo!"',
          timeAgo: "13 horas atr\xe1s",
          likes: 21,
          dislikes: 0,
          image: "/dep3.webp",
        },
        {
          id: 2,
          name: "Joana Silva",
          stars: 5,
          comment:
            "achei que os ovos viriam estragados ou vencidos mas n\xe3o, muito bom mesmo, \xe9 apenas pequenos detalhes, a borda do ovo veio quebrada, mas nada que interfira na hora de comer",
          timeAgo: "18 horas atr\xe1s",
          likes: 14,
          dislikes: 1,
        },
        {
          id: 3,
          name: "Camila Duarte",
          stars: 5,
          comment:
            "Jurava que n\xe3o ia chegar, mas chega sim, agora tem chocolate pra fam\xedlia toda \uD83D\uDE02",
          timeAgo: "1 dia atr\xe1s",
          likes: 18,
          dislikes: 0,
          image: "/dep2.webp",
        },
        {
          id: 4,
          name: "Rafaela Oliveira",
          stars: 5,
          comment:
            "Os chocolates da caixa branca s\xe3o incr\xedveis! um sabor \xfanico e delicioso, \xf3tima para presentear ou para se mimar. Super aprovado!",
          timeAgo: "1 dia atr\xe1s",
          likes: 12,
          dislikes: 2,
        },
        {
          id: 5,
          name: "Fernanda Lopes",
          stars: 5,
          comment:
            "A caixa branca da Cacau Show \xe9 perfeita para quem ama chocolate. porque vem muito kkkkkkkk, ideal para dar de presente ou para curtir um momento especial.",
          timeAgo: "3 dias atr\xe1s",
          likes: 26,
          dislikes: 3,
          image: "/dep1.webp",
        },
        {
          id: 6,
          name: "Lucas Rosseto",
          stars: 5,
          comment:
            "Os chocolates s\xe3o excepcionais, n\xe3o interferem em nada no sabor; s\xe3o pequenos detalhes na apar\xeancia.",
          timeAgo: "2 semanas atr\xe1s",
          likes: 23,
          dislikes: 0,
        },
      ];
      function T() {
        let [e, s] = (0, h.useState)(_),
          [a, i] = (0, h.useState)({}),
          [l, r] = (0, h.useState)(2),
          o = (e, t) => {
            s((s) =>
              s.map((s) =>
                s.id === e
                  ? a[e] === t
                    ? "like" === t
                      ? { ...s, likes: s.likes - 1 }
                      : { ...s, dislikes: s.dislikes - 1 }
                    : "like" === t
                    ? {
                        ...s,
                        likes: s.likes + 1,
                        dislikes:
                          "dislike" === a[e] ? s.dislikes - 1 : s.dislikes,
                      }
                    : {
                        ...s,
                        dislikes: s.dislikes + 1,
                        likes: "like" === a[e] ? s.likes - 1 : s.likes,
                      }
                  : s
              )
            ),
              i((s) => ({ ...s, [e]: a[e] === t ? null : t }));
          };
        return (0, t.jsxs)("div", {
          className: "flex flex-col gap-4",
          children: [
            e
              .slice(0, l)
              .map((e) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: "w-full bg-white rounded-lg shadow-md p-4",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex justify-between items-center",
                        children: (0, t.jsxs)("div", {
                          className:
                            "w-full flex items-center justify-between gap-2",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "flex gap-1",
                                  children: Array.from({ length: e.stars }).map(
                                    (e, s) =>
                                      (0, t.jsx)(
                                        v.F,
                                        {
                                          size: 16,
                                          weight: "fill",
                                          color: "#fcc433",
                                        },
                                        s
                                      )
                                  ),
                                }),
                                (0, t.jsxs)("p", {
                                  className: "text-sm font-semibold",
                                  children: [e.stars, " estrelas"],
                                }),
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className: "text-xs text-gray-500",
                              children: e.timeAgo,
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: "text-sm text-gray-700 mt-2",
                        children: e.comment,
                      }),
                      e.image &&
                        (0, t.jsx)("img", {
                          src: e.image,
                          alt: "Depoimento de ".concat(e.name),
                          className: "w-[50%] h-auto mt-4 rounded-lg",
                        }),
                      (0, t.jsxs)("div", {
                        className: "flex justify-between items-center mt-4",
                        children: [
                          (0, t.jsxs)("p", {
                            className: "text-sm text-gray-500",
                            children: ["por ", e.name],
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                              (0, t.jsxs)("button", {
                                className: "flex items-center ".concat(
                                  "like" === a[e.id]
                                    ? "text-green-600"
                                    : "text-green-500 hover:text-green-600"
                                ),
                                onClick: () => o(e.id, "like"),
                                children: [
                                  (0, t.jsx)(P.t, { size: 16 }),
                                  (0, t.jsx)("span", {
                                    className: "ml-1 text-sm",
                                    children: e.likes,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("button", {
                                className: "flex items-center ".concat(
                                  "dislike" === a[e.id]
                                    ? "text-red-600"
                                    : "text-red-500 hover:text-red-600"
                                ),
                                onClick: () => o(e.id, "dislike"),
                                children: [
                                  (0, t.jsx)(F.S, { size: 16 }),
                                  (0, t.jsx)("span", {
                                    className: "ml-1 text-sm",
                                    children: e.dislikes,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  e.id
                )
              ),
            (0, t.jsx)("button", {
              className: "text-blue-500 hover:text-blue-700",
              onClick: () => {
                l >= _.length ? r(2) : r((e) => Math.min(e + 2, _.length));
              },
              children: l >= _.length ? "Mostrar menos" : "Mostrar mais",
            }),
          ],
        });
      }
      function O(e) {
        var s;
        let { title: a, desc: i } = e,
          [l, r] = (0, h.useState)(!1),
          o = (0, h.useRef)(null);
        return (0, t.jsxs)("div", {
          className: "w-full border-b border-[#e5e7eb]",
          children: [
            (0, t.jsxs)("div", {
              className:
                "w-full flex justify-between items-center text-left gap-2 p-4 cursor-pointer",
              onClick: () => {
                let e = o.current;
                e &&
                  (l
                    ? ((e.style.height = "".concat(e.scrollHeight, "px")),
                      requestAnimationFrame(() => {
                        e && (e.style.height = "0px");
                      }))
                    : ((e.style.height = "0px"),
                      requestAnimationFrame(() => {
                        e && (e.style.height = "".concat(e.scrollHeight, "px"));
                      }))),
                  r(!l);
              },
              children: [
                (0, t.jsx)("h1", {
                  className: "text-sm font-bold",
                  children: a,
                }),
                l
                  ? (0, t.jsx)(C.Z, { size: 22, weight: "regular" })
                  : (0, t.jsx)(z.a, { size: 22, weight: "regular" }),
              ],
            }),
            (0, t.jsx)("div", {
              ref: o,
              className:
                "overflow-hidden transition-height duration-300 ease-in-out",
              style: {
                height: l
                  ? "".concat(
                      (null === (s = o.current) || void 0 === s
                        ? void 0
                        : s.scrollHeight) || 0,
                      "px"
                    )
                  : "0px",
              },
              children: (0, t.jsx)("div", {
                className: "pb-4",
                children: (0, t.jsx)("div", {
                  className: "p-6 text-sm text-left bg-[#fafafa] rounded-lg",
                  children: (0, t.jsx)("p", { children: i }),
                }),
              }),
            }),
          ],
        });
      }
      var R = a(86);
      function D() {
        let [e, s] = (0, h.useState)(!1),
          [a, i] = (0, h.useState)(""),
          [r, n] = (0, h.useState)(!1),
          [m, P] = (0, h.useState)(""),
          [F, _] = (0, h.useState)(!1),
          [D, L] = (0, h.useState)(!0),
          B = (0, h.useRef)(null),
          I = (0, c.useRouter)(),
          { id: M } = I.query,
          [H, X] = (0, h.useState)(!1),
          [J, V] = (0, h.useState)(!1),
          [Z, $] = (0, h.useState)(null),
          [G, K] = (0, h.useState)(null),
          [U, W] = (0, h.useState)(!1);
        (0, h.useEffect)(() => {
          (async () => {
            try {
              let e = await fetch(
                  "https://ipinfo.io/json?token=4e9e6678fcaeb7"
                ),
                s = await e.json();
              s && s.city && $(s.city);
            } catch (e) {
              console.error("Erro ao buscar cidade:", e);
            }
          })();
        }, []);
        let Q = async () => {
            try {
              let e = await fetch(
                  "https://viacep.com.br/ws/".concat(a, "/json/")
                ),
                s = await e.json();
              s.erro
                ? (K(null), n(!1), alert("CEP inv\xe1lido"))
                : (K(s), $(s.localidade), n(!0), _(!1));
            } catch (e) {
              console.error("Erro ao buscar CEP:", e);
            }
          },
          Y = (e) => {
            (e = e.replace(/\D/g, "")).length > 5 &&
              (e = e.replace(/^(\d{5})(\d)/, "$1-$2")),
              P(e),
              i(e);
          },
          ee = q.Z.find((e) => e.id === parseInt(M));
        if (!ee)
          return (0, t.jsx)("p", { children: "produto n\xe3o encontrado" });
        if (!ee.images || 0 === ee.images.length)
          return (0, t.jsx)("p", {
            children: "Imagens n\xe3o dispon\xedveis para este produto",
          });
        let es = () => {
            _((e) => !e);
          },
          ea = ee.discount;
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(o(), {
              children: [
                (0, t.jsx)("title", { children: ee.title }),
                (0, t.jsx)("meta", { name: "description", content: "sss" }),
                (0, t.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, t.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                (0, t.jsx)("script", {
                  src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
                  "data-utmify-prevent-subids": !0,
                  async: !0,
                  defer: !0,
                }),
              ],
            }),
            (0, t.jsxs)("main", {
              className:
                "w-full min-h-screen flex flex-col justify-between items-center ".concat(
                  l().className
                ),
              children: [
                U &&
                  (0, t.jsxs)("div", {
                    className:
                      "fixed w-full h-full flex flex-col gap-4 justify-center items-center bg-white z-20",
                    children: [
                      (0, t.jsx)("h1", {
                        children: "Preparando seu pedido...",
                      }),
                      (0, t.jsx)(S.A, { color: "#4a2511" }),
                    ],
                  }),
                (J || H) &&
                  (0, t.jsx)("div", {
                    id: "overlay",
                    className: "fixed inset-0 bg-[#00000050] z-20",
                    onClick: (e) => {
                      e.target instanceof HTMLDivElement &&
                        "overlay" === e.target.id &&
                        (X(!1), V(!1));
                    },
                  }),
                (0, t.jsxs)("div", {
                  className:
                    "fixed top-0 left-0 w-64 h-full flex flex-col items-center bg-white z-30 shadow-lg transform transition-transform ".concat(
                      H ? "translate-x-0" : "-translate-x-full"
                    ),
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "w-full flex items-center justify-between p-4 mb-5 border-b",
                      children: [
                        (0, t.jsx)(x(), {
                          alt: "logo",
                          src: R.A,
                          quality: 100,
                          width: 140,
                          className: "invert",
                        }),
                        (0, t.jsx)(p.X, {
                          size: 24,
                          className: "cursor-pointer",
                          onClick: () => X(!1),
                        }),
                      ],
                    }),
                    (0, t.jsx)(d(), {
                      className: "w-full text-center underline",
                      href: "/products",
                      children: "Ovos de P\xe1scoa!",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "fixed top-0 right-0 w-64 h-full bg-white z-30 shadow-lg transform transition-transform ".concat(
                      J ? "translate-x-0" : "translate-x-full"
                    ),
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "flex items-center justify-between p-4 border-b",
                      children: [
                        (0, t.jsx)(x(), {
                          alt: "logo",
                          src: R.A,
                          quality: 100,
                          width: 140,
                          className: "invert",
                        }),
                        (0, t.jsx)(p.X, {
                          size: 24,
                          className: "cursor-pointer",
                          onClick: () => V(!1),
                        }),
                      ],
                    }),
                    (0, t.jsx)("ul", {
                      className: "p-4",
                      children: (0, t.jsx)("li", {
                        className: "mb-4",
                        children: "Seu carrinho est\xe1 vazio.",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("header", {
                  className:
                    "w-full relative flex flex-col justify-center items-center gap-5 py-6 px-4 shadow-lg bg-[#1c1c1b]",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "w-full flex justify-between items-center",
                      children: [
                        (0, t.jsx)(u.B, {
                          size: 32,
                          weight: "regular",
                          color: "#eae3da",
                          onClick: () => X(!0),
                          className: "cursor-pointer",
                        }),
                        (0, t.jsx)(d(), {
                          href: "/products",
                          children: (0, t.jsx)(x(), {
                            alt: "logo",
                            src: R.A,
                            quality: 100,
                            width: 150,
                          }),
                        }),
                        (0, t.jsx)(f.J, {
                          size: 32,
                          weight: "regular",
                          color: "#eae3da",
                          onClick: () => V(!0),
                          className: "cursor-pointer",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      onClick: es,
                      className:
                        "w-full py-1 px-[14px] border border-[#30302b] rounded-[.25em] text-sm font-bold",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex items-center gap-2 mb-[7px] text-[#bdb7af]",
                          children: [
                            (0, t.jsx)(j.B, { size: 17, weight: "bold" }),
                            Z
                              ? (0, t.jsx)(t.Fragment, { children: Z })
                              : (0, t.jsx)(t.Fragment, {
                                  children: (0, t.jsx)("p", {
                                    children: "digite seu cep...",
                                  }),
                                }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "text-white",
                          children: "ALTERAR",
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "w-full h-[4px] absolute bottom-0 bg-primary",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "w-full flex items-center gap-2 p-4 text-[13px]",
                  children: [
                    (0, t.jsxs)(d(), {
                      href: "/products",
                      className:
                        "flex items-center gap-2 hover:border-b border-secondary hover:bold",
                      children: [
                        (0, t.jsx)(g.n, {
                          size: 24,
                          weight: "bold",
                          color: "#90865f",
                          className: "mr-[7px]",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-[#999] uppercase",
                          children: "promo\xe7\xf5es",
                        }),
                      ],
                    }),
                    (0, t.jsx)(b.K, { size: 13, color: "#999" }),
                    (0, t.jsx)("p", {
                      className: "text-secondary uppercase",
                      children: "P\xe1scoa",
                    }),
                  ],
                }),
                (0, t.jsx)(A.A, {
                  arrows: !1,
                  dots: !0,
                  infinite: !0,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  speed: 600,
                  adaptiveHeight: !0,
                  className: "w-[90%] border rounded-lg",
                  children: ee.images.map((e, s) =>
                    (0, t.jsx)(
                      "img",
                      {
                        src: e,
                        alt: "Imagem ".concat(s + 1),
                        className: "max-w-full h-auto",
                      },
                      s
                    )
                  ),
                }),
                (0, t.jsx)("div", {
                  className:
                    "w-full bg-primary p-4 mt-[27px] text-center text-lg text-white font-bold",
                  children: (0, t.jsxs)("p", {
                    children: ["Restam apenas ", ee.stock, " unidades!"],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "w-full flex flex-col gap-4 p-4",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        (0, t.jsx)("p", {
                          className: "text-xs text-[#8c8c8c]",
                          children: ee.cod,
                        }),
                        (0, t.jsxs)("div", {
                          className: "w-full flex justify-between",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(N.q, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mx-1",
                                  children: "4.5",
                                }),
                                (0, t.jsx)("button", {
                                  className: "text-[#227bbd] cursor-pointer",
                                  onClick: () => {
                                    B.current &&
                                      B.current.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                  },
                                  children: "ler avalia\xe7\xf5es",
                                }),
                                " ",
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "p-1 rounded-full bg-[#fff] shadow-md cursor-pointer",
                              onClick: () => {
                                s((e) => !e);
                              },
                              children: (0, t.jsx)(w.Z, {
                                size: 22,
                                weight: e ? "fill" : "light",
                                color: e ? "#eb2c44" : "#333",
                                className: "transition-colors duration-150",
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("h1", {
                          className: "text-2xl",
                          children: ee.title,
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, t.jsx)("div", {
                              className: "flex items-center gap-1 py-1",
                              children: (0, t.jsxs)("h6", {
                                className: "text-3xl font-bold text-secondary",
                                children: [
                                  "R$",
                                  " ",
                                  ea.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, t.jsx)(y.h, {
                                  size: 22,
                                  weight: "fill",
                                  className: "text-primary",
                                }),
                                (0, t.jsx)("p", {
                                  className: "text-[15px]",
                                  children: (0, t.jsx)("b", {
                                    children: "\xc0 vista no pix",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("p", {
                          className: "text-md font-bold",
                          children: [
                            (0, t.jsx)("b", {
                              children: "50% do valor arrecadado",
                            }),
                            " ser\xe1 destinado para",
                            " ",
                            (0, t.jsx)("span", {
                              className: "text-primary",
                              children: "doar Ovos de P\xe1scoa",
                            }),
                            " para crian\xe7as.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      onClick: es,
                      className:
                        "flex items-center justify-between gap-2 py-4 px-6 rounded-lg bg-white shadow-md",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, t.jsx)(k.s, { size: 24, weight: "light" }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("h2", {
                                  className: "text-left text-sm",
                                  children: "op\xe7\xf5es de entrega",
                                }),
                                (0, t.jsx)("h2", {
                                  className: "text-xs text-[#737373]",
                                  children: m,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className: "font-medium text-sm text-[#227bbd]",
                          children: "inserir CEP",
                        }),
                      ],
                    }),
                    F &&
                      (0, t.jsx)("div", {
                        className:
                          "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",
                        children: (0, t.jsxs)("div", {
                          className:
                            "relative w-[80%] flex flex-col bg-white text-[#363636] p-6 rounded-lg shadow-lg text-center",
                          children: [
                            (0, t.jsx)(p.X, {
                              size: 24,
                              weight: "light",
                              color: "#000",
                              className: "absolute right-2 top-2",
                              onClick: es,
                            }),
                            (0, t.jsx)("h1", {
                              className:
                                "text-xl text-secondary font-semibold mb-5",
                              children: "Bem-vindo \xe0 Cacau Show",
                            }),
                            (0, t.jsxs)("p", {
                              className: "text-sm mb-5",
                              children: [
                                "Para encontrarmos os",
                                " ",
                                (0, t.jsx)("strong", {
                                  children: "melhores pre\xe7os e o estoque",
                                }),
                                " mais perto de voc\xea, por gentileza ",
                                (0, t.jsx)("strong", {
                                  children: "informe seu CEP:",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex flex-col items-start",
                              children: [
                                (0, t.jsx)("label", {
                                  className: "text-[#737373]",
                                  children: "CEP",
                                }),
                                (0, t.jsx)("input", {
                                  className:
                                    "w-full p-[8px] border text-[#808080] border-[#cdcdcd70] outline-primary rounded-[5px]",
                                  placeholder: "Digite seu CEP",
                                  value: m,
                                  onChange: (e) => Y(e.target.value),
                                  maxLength: 9,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "flex",
                              children: (0, t.jsx)(d(), {
                                href: "https://buscacepinter.correios.com.br/app/endereco/index.php",
                                target: "_blank",
                                className: "my-6 text-[#227bbd]",
                                children: "n\xe3o sei meu CEP",
                              }),
                            }),
                            (0, t.jsx)("button", {
                              className:
                                "w-full h-[42px] bg-[#659c57] text-white font-semibold rounded-[5px] cursor-pointer disabled:bg-[#9ca3af]",
                              onClick: () => {
                                Q();
                              },
                              disabled: !/^\d{5}-\d{3}$/.test(m),
                              children: "Confirmar",
                            }),
                          ],
                        }),
                      }),
                    r &&
                      G &&
                      (0, t.jsx)("div", {
                        className:
                          "w-full flex flex-col gap-4 p-4 border bg-white rounded-lg shadow-md",
                        children: (0, t.jsxs)("div", {
                          className: "flex flex-col items-center gap-4",
                          children: [
                            (0, t.jsxs)("p", {
                              className:
                                "flex items-center gap-1 font-semibold",
                              children: [
                                (0, t.jsx)(k.s, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#9c7561",
                                }),
                                ""
                                  .concat(G.logradouro, " - ")
                                  .concat(G.localidade),
                              ],
                            }),
                            (0, t.jsxs)("table", {
                              className:
                                "min-w-full border-collapse border border-gray-200",
                              children: [
                                (0, t.jsx)("thead", {
                                  children: (0, t.jsxs)("tr", {
                                    children: [
                                      (0, t.jsx)("th", {
                                        className: "border border-gray-300 p-2",
                                        children: "Entrega",
                                      }),
                                      (0, t.jsx)("th", {
                                        className: "border border-gray-300 p-2",
                                        children: "Prazo",
                                      }),
                                      (0, t.jsx)("th", {
                                        className: "border border-gray-300 p-2",
                                        children: "Pre\xe7o",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)("tbody", {
                                  children: (0, t.jsxs)("tr", {
                                    className: "text-center",
                                    children: [
                                      (0, t.jsx)("td", {
                                        className:
                                          "border border-gray-300 p-2 font-bold",
                                        children: "Correios - Sedex",
                                      }),
                                      (0, t.jsx)("td", {
                                        className: "border border-gray-300 p-2",
                                        children: "2 at\xe9 5 dias",
                                      }),
                                      (0, t.jsx)("td", {
                                        className:
                                          "border border-gray-300 p-2 font-bold text-[#9c7561]",
                                        children: "Gr\xe1tis",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    (0, t.jsxs)("button", {
                      onClick: () => {
                        ee &&
                          (W(!0),
                          setTimeout(() => {
                            I.push({
                              pathname: "/sacola",
                              query: {
                                id: ee.id,
                                title: ee.title,
                                price: ee.price,
                                discount: ee.discount,
                                image: ee.bannerImg,
                                link: ee.link,
                              },
                            });
                          }, 1e3));
                      },
                      className:
                        "w-full flex justify-center items-center gap-2 py-3 text-white text-lg bg-[#659c57] hover:bg-green-700 rounded-lg hover:scale-105 transition-all",
                      children: [
                        "Comprar Agora",
                        (0, t.jsx)(f.J, { size: 22 }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "w-full px-6 bg-white rounded-lg shadow-md",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex justify-between py-4 cursor-pointer",
                          onClick: () => L(!D),
                          children: [
                            (0, t.jsx)("p", {
                              className: "font-semibold",
                              children: "Descri\xe7\xe3o",
                            }),
                            D
                              ? (0, t.jsx)(C.Z, { size: 22 })
                              : (0, t.jsx)(z.a, { size: 22 }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "overflow-hidden transition-max-height duration-500 ease-in-out ".concat(
                              D ? "max-h-[1580px]" : "max-h-0"
                            ),
                          children: (0, t.jsxs)("div", {
                            className:
                              " py-4 text-sm border-t border-[#e5e7eb] space-y-5",
                            children: [
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsxs)("p", {
                                    className: "font-bold mb-2",
                                    children: [
                                      "Experimente a ",
                                      ee.title,
                                      " da Cacau Show",
                                    ],
                                  }),
                                  (0, t.jsxs)("p", {
                                    className: "",
                                    children: [
                                      "A ",
                                      (0, t.jsx)("span", {
                                        className: "font-bold",
                                        children: ee.title,
                                      }),
                                      " ",
                                      ee.desc,
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("p", {
                                    className: "font-bold mb-1",
                                    children: "Sabor inigual\xe1vel",
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "",
                                    children: ee.descFlavor,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsxs)("p", {
                                    className: "font-bold mb-1",
                                    children: [
                                      "Por que escolher a ",
                                      ee.title,
                                      "?",
                                    ],
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "",
                                    children: ee.descWhy,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      ref: B,
                      className: "flex flex-col items-center gap-6 mt-6",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex flex-col items-center gap-2",
                          children: [
                            (0, t.jsx)("h1", {
                              className: "text-lg text-black font-medium",
                              children: "Avalia\xe7\xf5es Dos Clientes",
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-1",
                              children: [
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(v.F, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)(N.q, {
                                  size: 16,
                                  weight: "fill",
                                  color: "#fcc433",
                                }),
                                (0, t.jsx)("p", {
                                  className: "mx-1",
                                  children: "4.5 estrelas",
                                }),
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className: "text-sm text-[#737373]",
                              children: "228 avalia\xe7\xf5es",
                            }),
                          ],
                        }),
                        (0, t.jsx)(T, {}),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "w-full flex flex-col items-center gap-1 px-4 py-8 bg-white",
                  children: [
                    (0, t.jsx)("h1", {
                      className: "font-bold underline",
                      children: "Perguntas Frequentes",
                    }),
                    (0, t.jsx)(O, {
                      title: "O chocolate chega fresco e bem conservado?",
                      desc: "Sim! Nossos chocolates s\xe3o embalados cuidadosamente para garantir frescor e qualidade durante o transporte. Utilizamos embalagens resistentes e prote\xe7\xe3o t\xe9rmica para evitar danos e derretimento.",
                    }),
                    (0, t.jsx)(O, {
                      title:
                        "Quanto tempo demora para minha caixa branca chegar?",
                      desc: "O prazo de entrega depende da sua regi\xe3o. Normalmente, entregamos em at\xe9 2 a 7 dias \xfateis ap\xf3s a confirma\xe7\xe3o do pagamento. Voc\xea pode consultar prazos nas op\xe7\xf5es de entrega ao finalizar a compra.",
                    }),
                    (0, t.jsx)(O, {
                      title:
                        "O que acontece se meu chocolate chegar danificado?",
                      desc: "Caso seu chocolate chegue com qualquer problema, como embalagem violada ou avarias, entre em contato com nossa equipe de suporte em at\xe9 48 horas ap\xf3s o recebimento. Vamos substituir ou reembolsar o valor imediatamente.",
                    }),
                    (0, t.jsx)(O, {
                      title:
                        "Posso cancelar ou alterar meu pedido ap\xf3s a compra?",
                      desc: "Pedidos podem ser alterados ou cancelados dentro de um prazo de 24 horas ap\xf3s a confirma\xe7\xe3o da compra. Ap\xf3s esse per\xedodo, j\xe1 iniciamos o processo de envio e n\xe3o ser\xe1 poss\xedvel realizar modifica\xe7\xf5es.",
                    }),
                    (0, t.jsx)(O, {
                      title: "\xc9 seguro comprar chocolates pelo site?",
                      desc: "Sim, nosso site \xe9 100% seguro! Todas as informa\xe7\xf5es pessoais e de pagamento s\xe3o protegidas por tecnologia de criptografia SSL. Contamos com avalia\xe7\xf5es positivas de nossos clientes, que voc\xea pode conferir na se\xe7\xe3o de avalia\xe7\xf5es do site ou nas nossas redes sociais.",
                    }),
                    (0, t.jsx)(O, {
                      title: "Como posso rastrear meu pedido?",
                      desc: "Assim que o pedido for enviado, voc\xea receber\xe1 um c\xf3digo de rastreamento por e-mail. Com esse c\xf3digo, poder\xe1 acompanhar todas as etapas da entrega at\xe9 o ovo de P\xe1scoa chegar \xe0 sua casa.",
                    }),
                    (0, t.jsx)(O, {
                      title: "E se eu me arrepender da compra? Posso devolver?",
                      desc: "Sim, voc\xea pode devolver em at\xe9 7 dias corridos ap\xf3s o recebimento, conforme o C\xf3digo de Defesa do Consumidor. O produto precisa estar lacrado e em perfeitas condi\xe7\xf5es. Entre em contato com nosso suporte para orienta\xe7\xf5es sobre a devolu\xe7\xe3o.",
                    }),
                  ],
                }),
                (0, t.jsx)(E.I, {}),
              ],
            }),
          ],
        });
      }
    },
    2161: (e, s, a) => {
      "use strict";
      a.d(s, { I: () => d, w: () => n });
      var t = a(7876),
        i = a(4587),
        l = a.n(i),
        r = a(86),
        o = a(8230),
        c = a.n(o);
      function n() {
        return (0, t.jsxs)("footer", {
          className:
            "w-full flex flex-col items-center justify-center gap-4 px-4 py-5 bg-[#260801]",
          children: [
            (0, t.jsx)(l(), {
              alt: "apple",
              src: r.A,
              quality: 100,
              width: 150,
            }),
            (0, t.jsx)("p", {
              className: "text-white text-xs text-center",
              children:
                "\xa9 Copyright 2025. Todos os direitos reservados. | Cacau Com\xe9rcio Eletr\xf4nico LTDA 32.143.933/0003-96 | Endere\xe7o: Rodovia Anhanguera KM 31,7, 800, Bloco 300 Galp\xe3o 20, 21 e 22 - Area Selia, Bairro Empresarial Anhanguera, Cajamar – SP, CEP 07.753-580",
            }),
          ],
        });
      }
      function d() {
        return (0, t.jsxs)("footer", {
          className:
            "w-full flex flex-col items-center justify-center gap-4 px-4 py-5 bg-[#260801]",
          children: [
            (0, t.jsx)(l(), {
              alt: "apple",
              src: r.A,
              quality: 100,
              width: 150,
            }),
            (0, t.jsxs)("div", {
              className: "w-full flex justify-around text-white underline",
              children: [
                (0, t.jsx)(c(), {
                  href: "/termos-uso",
                  children: "Termos de Uso",
                }),
                (0, t.jsx)(c(), {
                  href: "/politica-privacidade",
                  children: "Pol\xedticas de Privacidade",
                }),
              ],
            }),
            (0, t.jsx)("p", {
              className: "text-white text-xs text-center",
              children:
                "\xa9 Copyright 2025. Todos os direitos reservados. | Cacau Com\xe9rcio Eletr\xf4nico LTDA 32.143.933/0003-96 | Endere\xe7o: Rodovia Anhanguera KM 31,7, 800, Bloco 300 Galp\xe3o 20, 21 e 22 - Area Selia, Bairro Empresarial Anhanguera, Cajamar – SP, CEP 07.753-580",
            }),
          ],
        });
      }
    },
    8404: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[id]",
        function () {
          return a(1215);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [508, 154, 636, 593, 792], () => s(8404)), (_N_E = e.O());
  },
]);
