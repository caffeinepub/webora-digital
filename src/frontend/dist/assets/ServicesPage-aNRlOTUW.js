import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DounFOxx.js";
const SERVICES = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "From portfolio sites to full business websites — pixel-perfect, blazing fast, and fully responsive.",
    items: [
      "Portfolio Websites",
      "Business Websites",
      "Landing Pages",
      "Startup Websites",
      "Fully Responsive Designs"
    ],
    color: "rgba(240,180,41,0.06)"
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Modern, purposeful interfaces with clean layouts, user-focused experience, and brand-aligned aesthetics.",
    items: [
      "Modern Interfaces",
      "Clean, Purposeful Layouts",
      "User-Focused Experience",
      "Brand-Aligned Aesthetics",
      "Design Systems"
    ],
    color: "rgba(124,58,237,0.06)"
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Fast loading speed, SEO-friendly structure, and Core Web Vitals — built to rank and convert.",
    items: [
      "Fast Loading Speed",
      "SEO-Friendly Structure",
      "Smooth Animations",
      "Core Web Vitals",
      "Lighthouse Score 90+"
    ],
    color: "rgba(6,182,212,0.06)"
  },
  {
    icon: "🛠",
    title: "Custom Solutions",
    desc: "Tailored features, tool integrations, and scalable systems built for your specific requirements.",
    items: [
      "Tailored Features",
      "Scalable Systems",
      "Tool Integrations",
      "API Connections",
      "Backend Integrations"
    ],
    color: "rgba(240,180,41,0.06)"
  },
  {
    icon: "📱",
    title: "Mobile-First Development",
    desc: "Every project starts with mobile — ensuring flawless experiences on every screen size.",
    items: [
      "Responsive Layouts",
      "Touch-Optimized UI",
      "Progressive Web Apps",
      "Cross-Browser Testing",
      "Device Compatibility"
    ],
    color: "rgba(124,58,237,0.06)"
  },
  {
    icon: "📈",
    title: "Growth & SEO",
    desc: "Strategic digital foundations to help you rank higher, get found, and grow consistently.",
    items: [
      "On-Page SEO",
      "Meta & Schema Tags",
      "Sitemap Generation",
      "Analytics Setup",
      "Conversion Optimization"
    ],
    color: "rgba(6,182,212,0.06)"
  }
];
function SectionTag({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block text-xs uppercase tracking-[3px] font-semibold mb-4",
      style: { color: "var(--gold)", fontFamily: "var(--font-display)" },
      children
    }
  );
}
function ServicesPage() {
  reactExports.useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-left,.reveal-right");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    for (const el of els) {
      obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden",
        style: {
          padding: "100px 5% 80px",
          background: "var(--navy-darkest)",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(240,180,41,0.08) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 80% 30%, rgba(124,58,237,0.1) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "What We Offer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 animate-fade-up",
                style: { fontFamily: "var(--font-display)", letterSpacing: "-2px" },
                children: [
                  "Services Built for",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Digital Success." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "leading-relaxed font-light animate-fade-up delay-100",
                style: {
                  color: "var(--muted-text)",
                  fontSize: "1.1rem",
                  maxWidth: 560
                },
                children: "Everything you need to build, launch, and scale your digital presence — under one roof. Crafted with care, delivered with precision."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "100px 5%", background: "var(--navy-mid)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-x-0 pointer-events-none",
          style: {
            height: "100%",
            background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(240,180,41,0.04) 0%, transparent 65%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-interactive": true,
          className: "glass-card glass-card-top-border p-10 transition-smooth reveal",
          style: { transitionDelay: `${i * 80}ms`, background: s.color },
          onMouseEnter: (e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.45)";
            e.currentTarget.style.boxShadow = "0 24px 60px rgba(240,180,41,0.12)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
            e.currentTarget.style.boxShadow = "none";
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl block mb-6", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "text-xl font-bold mb-3",
                style: { fontFamily: "var(--font-display)" },
                children: s.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-light leading-relaxed mb-6",
                style: { color: "var(--muted-text)" },
                children: s.desc
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-none p-0 m-0 space-y-2", children: s.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "relative pl-5 text-sm font-light",
                style: { color: "var(--muted-text)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute left-0 text-xs",
                      style: { color: "var(--gold)" },
                      children: "→"
                    }
                  ),
                  item
                ]
              },
              item
            )) })
          ]
        },
        s.title
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "How We Work" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                style: {
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-1.5px"
                },
                children: "Our Delivery Process"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-light",
                style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                children: "A clear, transparent workflow — no surprises, just results."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row gap-0 max-w-5xl mx-auto", children: [
            {
              num: "01",
              title: "Discovery",
              desc: "We learn your business, goals, and requirements in detail."
            },
            {
              num: "02",
              title: "Design",
              desc: "Wireframes, mockups, and final UI/UX design sign-off."
            },
            {
              num: "03",
              title: "Development",
              desc: "Clean, scalable code built to perform and last."
            },
            {
              num: "04",
              title: "Launch",
              desc: "QA, optimization, and go-live with full support."
            }
          ].map((step, i, arr) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex-1 px-6 py-10 text-center relative reveal",
              style: { transitionDelay: `${i * 100}ms` },
              children: [
                i < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-2xl z-10",
                    style: { color: "var(--gold)" },
                    children: "→"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-5 transition-smooth",
                    style: {
                      border: "2px solid var(--gold)",
                      color: "var(--gold)",
                      background: "rgba(240,180,41,0.06)",
                      fontFamily: "var(--font-display)"
                    },
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "var(--gold)";
                      e.currentTarget.style.color = "var(--navy-darkest)";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "rgba(240,180,41,0.06)";
                      e.currentTarget.style.color = "var(--gold)";
                    },
                    children: step.num
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold mb-2",
                    style: { fontFamily: "var(--font-display)" },
                    children: step.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-light",
                    style: { color: "var(--muted-text)" },
                    children: step.desc
                  }
                )
              ]
            },
            step.num
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: {
          padding: "80px 5%",
          background: "var(--navy-mid)",
          borderTop: "1px solid rgba(240,180,41,0.08)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h2",
            {
              className: "text-3xl lg:text-4xl font-black mb-4",
              style: { fontFamily: "var(--font-display)" },
              children: [
                "Ready to Get ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Started?" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-light mb-8", style: { color: "var(--muted-text)" }, children: "Choose a package or reach out for a custom quote." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/pricing",
                "data-ocid": "services-pricing-link",
                className: "inline-block no-underline px-9 py-4 rounded-full font-bold text-sm transition-smooth",
                style: {
                  background: "var(--gold)",
                  color: "var(--navy-darkest)",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 0 32px rgba(240,180,41,0.3)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.transform = "translateY(0)";
                },
                children: "View Pricing →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": "services-contact-link",
                className: "inline-block no-underline px-9 py-4 rounded-full font-semibold text-sm transition-smooth",
                style: {
                  border: "1.5px solid rgba(240,180,41,0.4)",
                  color: "var(--white-text)",
                  fontFamily: "var(--font-display)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                  e.currentTarget.style.color = "var(--white-text)";
                },
                children: "Custom Quote"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  ServicesPage as default
};
