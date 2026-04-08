import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DounFOxx.js";
const PRICING = [
  {
    tier: "Starter",
    emoji: "🟢",
    price: "₹2,999",
    period: "one-time",
    desc: "Perfect for individuals & early-stage projects",
    features: [
      "1–3 Pages",
      "Responsive Design",
      "Basic UI/UX",
      "Contact Form",
      "Fast Delivery (3–5 days)"
    ],
    notIncluded: ["Animations", "SEO Optimization", "Priority Support"],
    featured: false,
    service: "starter"
  },
  {
    tier: "Growth",
    emoji: "🔵",
    price: "₹6,999",
    period: "one-time",
    desc: "For growing brands that need more impact",
    features: [
      "4–7 Pages",
      "Advanced UI/UX",
      "Animations & Effects",
      "SEO Basics",
      "Priority Support",
      "Delivery (7–10 days)"
    ],
    notIncluded: ["Custom Features", "API Integration"],
    featured: true,
    service: "growth"
  },
  {
    tier: "Pro",
    emoji: "🔴",
    price: "₹14,999",
    period: "one-time",
    priceExtra: "+",
    desc: "Enterprise-level for maximum digital impact",
    features: [
      "8+ Pages",
      "Premium Design",
      "Custom Features",
      "Full SEO Optimization",
      "API Integrations",
      "Dedicated Support",
      "Delivery (14–21 days)"
    ],
    notIncluded: [],
    featured: false,
    service: "pro"
  }
];
const FAQS = [
  {
    q: "Do you offer revisions?",
    a: "Yes — all packages include at least 2 rounds of revisions. Pro includes unlimited revisions until you're fully satisfied."
  },
  {
    q: "What's your payment process?",
    a: "We take 50% upfront to begin and 50% upon final delivery. No hidden charges."
  },
  {
    q: "How fast can you deliver?",
    a: "Starter: 3–5 days. Growth: 7–10 days. Pro: 14–21 days. Rush delivery available on request."
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Absolutely! You can upgrade anytime. We'll apply a credit toward the difference."
  },
  {
    q: "Do you offer custom pricing?",
    a: "Yes — for enterprise clients with unique needs, we offer fully customized quotes. Reach out to discuss."
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
function PricingPage() {
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
          minHeight: "45vh",
          display: "flex",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(240,180,41,0.1) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(124,58,237,0.08) 0%, transparent 55%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 animate-fade-up",
                style: { fontFamily: "var(--font-display)", letterSpacing: "-2px" },
                children: [
                  "Transparent, Fair",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Pricing." })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-light animate-fade-up delay-100 mx-auto",
                style: {
                  color: "var(--muted-text)",
                  fontSize: "1.1rem",
                  maxWidth: 520
                },
                children: "Premium digital solutions at every budget. No hidden costs, no surprises. Ever."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { padding: "100px 5%", background: "var(--navy-mid)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto", children: PRICING.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-interactive": true,
          className: "glass-card glass-card-top-border relative reveal transition-smooth",
          style: {
            padding: "44px 36px",
            transitionDelay: `${i * 100}ms`,
            ...p.featured ? {
              borderColor: "rgba(240,180,41,0.6)",
              background: "rgba(240,180,41,0.06)",
              boxShadow: "0 0 60px rgba(240,180,41,0.2)",
              transform: "scale(1.04)"
            } : {}
          },
          onMouseEnter: (e) => {
            if (!p.featured) {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(240,180,41,0.12)";
            }
          },
          onMouseLeave: (e) => {
            if (!p.featured) {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
              e.currentTarget.style.boxShadow = "none";
            }
          },
          children: [
            p.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute top-4 right-4 text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                style: {
                  background: "var(--gold)",
                  color: "var(--navy-darkest)",
                  fontFamily: "var(--font-display)"
                },
                children: "Most Popular"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: p.emoji }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xs uppercase tracking-[2px] font-bold mb-3",
                style: {
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)"
                },
                children: p.tier
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-5xl font-black mb-1 leading-none",
                style: { fontFamily: "var(--font-display)" },
                children: [
                  p.price,
                  "priceExtra" in p && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-2xl",
                      style: { color: "var(--muted-text)" },
                      children: p.priceExtra
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-xs mb-2",
                style: { color: "var(--muted-text)" },
                children: p.period
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-light mb-8",
                style: { color: "var(--muted-text)" },
                children: p.desc
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-none p-0 m-0 space-y-3 mb-4", children: [
              p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-3 text-sm font-light pb-3",
                  style: {
                    borderBottom: "1px solid rgba(240,180,41,0.08)",
                    color: "var(--muted-text)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "font-bold flex-shrink-0 text-xs",
                        style: { color: "var(--gold)" },
                        children: "✓"
                      }
                    ),
                    f
                  ]
                },
                f
              )),
              p.notIncluded.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-center gap-3 text-sm font-light pb-3 opacity-40",
                  style: {
                    borderBottom: "1px solid rgba(240,180,41,0.05)",
                    color: "var(--muted-text)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold flex-shrink-0 text-xs", children: "✗" }),
                    f
                  ]
                },
                f
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                "data-ocid": `pricing-cta-${p.tier.toLowerCase()}`,
                className: "block text-center no-underline font-bold text-sm px-4 py-3.5 rounded-full transition-smooth",
                style: p.featured ? {
                  background: "var(--gold)",
                  color: "var(--navy-darkest)",
                  fontFamily: "var(--font-display)"
                } : {
                  border: "1.5px solid rgba(240,180,41,0.4)",
                  color: "var(--white-text)",
                  fontFamily: "var(--font-display)"
                },
                onMouseEnter: (e) => {
                  e.currentTarget.style.background = "var(--gold)";
                  e.currentTarget.style.color = "var(--navy-darkest)";
                  e.currentTarget.style.borderColor = "var(--gold)";
                },
                onMouseLeave: (e) => {
                  if (p.featured) {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.color = "var(--navy-darkest)";
                  } else {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--white-text)";
                    e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                  }
                },
                children: "Get Started"
              }
            ) })
          ]
        },
        p.tier
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-14 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm font-light mb-4",
            style: { color: "var(--muted-text)" },
            children: "Need something different?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            "data-ocid": "pricing-custom",
            className: "inline-block no-underline px-8 py-3.5 rounded-full font-bold text-sm transition-smooth",
            style: {
              border: "1.5px solid rgba(240,180,41,0.35)",
              color: "var(--white-text)",
              fontFamily: "var(--font-display)"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.color = "var(--gold)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.35)";
              e.currentTarget.style.color = "var(--white-text)";
            },
            children: "Request Custom Quote →"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "FAQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-4xl font-black tracking-tight",
                style: {
                  fontFamily: "var(--font-display)",
                  letterSpacing: "-1.5px"
                },
                children: "Common Questions"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: FAQS.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card p-8 reveal",
              style: { transitionDelay: `${i * 80}ms` },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-bold mb-3",
                    style: {
                      fontFamily: "var(--font-display)",
                      color: "var(--gold)"
                    },
                    children: faq.q
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-light leading-relaxed",
                    style: { color: "var(--muted-text)" },
                    children: faq.a
                  }
                )
              ]
            },
            faq.q
          )) })
        ] })
      }
    )
  ] });
}
export {
  PricingPage as default
};
