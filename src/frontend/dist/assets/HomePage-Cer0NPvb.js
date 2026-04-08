import { r as reactExports, j as jsxRuntimeExports } from "./index-DounFOxx.js";
import { u as useAddLead } from "./useQueries-Dc_QJZ9Q.js";
const SERVICES = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Portfolio, business, landing pages — responsive, blazing fast."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Modern, purposeful interfaces aligned with your brand identity."
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Speed, SEO, and Core Web Vitals — built to rank and convert."
  },
  {
    icon: "🛠",
    title: "Custom Solutions",
    desc: "Tailored features, API integrations, and scalable systems."
  },
  {
    icon: "📈",
    title: "SEO & Marketing",
    desc: "Rank higher, attract more visitors, and grow your audience."
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    desc: "Flawless, pixel-perfect experience on every device and screen."
  }
];
const WHY_ITEMS = [
  {
    icon: "💰",
    title: "Affordable Quality",
    desc: "Enterprise-grade quality at startup-friendly rates."
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "3x faster turnaround without compromising on quality."
  },
  {
    icon: "🎯",
    title: "Client Focus",
    desc: "Your vision and goals drive every decision we make."
  },
  {
    icon: "🧱",
    title: "Modern Stack",
    desc: "Built with cutting-edge technologies for future-proof results."
  },
  {
    icon: "📐",
    title: "Scalable Solutions",
    desc: "Architecture designed to grow as your business expands."
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "We stay with you after launch — always responsive, always caring."
  }
];
const STATS = [
  { num: "100+", label: "Happy Clients" },
  { num: "50+", label: "Projects Done" },
  { num: "3x", label: "Faster Delivery" }
];
const PRICING = [
  {
    tier: "Starter",
    price: "₹2,999",
    note: "one-time",
    featured: false,
    features: [
      "1-Page Portfolio / Landing",
      "Mobile-Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "1 Revision Round",
      "3-Day Delivery"
    ],
    cta: "Get Started"
  },
  {
    tier: "Growth",
    price: "₹6,999",
    note: "one-time",
    featured: true,
    badge: "Best Value",
    features: [
      "Up to 5-Page Website",
      "Custom UI/UX Design",
      "Advanced SEO",
      "CMS Integration",
      "Performance Optimization",
      "3 Revision Rounds",
      "7-Day Delivery",
      "1 Month Support"
    ],
    cta: "Most Popular →"
  },
  {
    tier: "Pro",
    price: "₹14,999+",
    note: "custom quote",
    featured: false,
    features: [
      "Full Custom Web Application",
      "Premium UI/UX + Branding",
      "API & Third-Party Integrations",
      "Advanced Analytics",
      "Priority Support",
      "Unlimited Revisions",
      "Custom Timeline",
      "Ongoing Maintenance"
    ],
    cta: "Contact Us"
  }
];
const PROCESS_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Discover your vision, goals & requirements"
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "Strategy, wireframes & UI/UX design"
  },
  { num: "03", title: "Develop", desc: "Build with clean, scalable code" },
  { num: "04", title: "Launch", desc: "Optimize, test & go live" },
  { num: "05", title: "Scale", desc: "Ongoing support & growth" }
];
const SERVICE_OPTIONS = [
  "Website Development",
  "UI/UX Design",
  "Performance Optimization",
  "Custom Solution",
  "SEO & Marketing",
  "Full Package"
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
function AuroraOrbs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full pointer-events-none animate-float-orb",
        style: {
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          top: -120,
          right: -100,
          filter: "blur(60px)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full pointer-events-none",
        style: {
          width: 340,
          height: 340,
          background: "radial-gradient(circle, rgba(240,180,41,0.1) 0%, transparent 70%)",
          bottom: 0,
          left: -60,
          filter: "blur(60px)",
          animation: "orbFloat 6s ease-in-out infinite reverse"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute rounded-full pointer-events-none",
        style: {
          width: 280,
          height: 280,
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "30%",
          filter: "blur(50px)",
          animation: "orbFloat 10s ease-in-out infinite"
        }
      }
    )
  ] });
}
function ContactForm() {
  const addLead = useAddLead();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await addLead.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message
      });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError(
        "Something went wrong. Please try again or contact us directly."
      );
    }
  };
  const inputStyle = {
    background: "rgba(13,18,64,0.6)",
    border: "1px solid rgba(240,180,41,0.15)",
    borderRadius: "0.75rem",
    color: "var(--white-text)",
    padding: "14px 18px",
    fontSize: "0.92rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.25s"
  };
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-12 text-center", "data-ocid": "contact-success", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-5", children: "✅" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "text-2xl font-black mb-3",
          style: { fontFamily: "var(--font-display)", color: "var(--gold)" },
          children: "Message Received!"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-light mb-6", style: { color: "var(--muted-text)" }, children: "Thank you for reaching out. We'll get back to you within 24 hours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSubmitted(false),
          className: "px-8 py-3 rounded-full font-bold text-sm transition-smooth",
          style: {
            background: "var(--gold)",
            color: "var(--navy-darkest)",
            fontFamily: "var(--font-display)"
          },
          children: "Send Another →"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "glass-card p-9 flex flex-col gap-5",
      "data-ocid": "contact-form",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-name-input",
              className: "block text-xs font-semibold uppercase tracking-widest mb-2",
              style: { color: "var(--gold)" },
              children: "Full Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "contact-name-input",
              name: "name",
              type: "text",
              required: true,
              placeholder: "Your full name",
              value: form.name,
              onChange: handleChange,
              style: inputStyle,
              "data-ocid": "contact-name",
              onFocus: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
              },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "contact-email-input",
                className: "block text-xs font-semibold uppercase tracking-widest mb-2",
                style: { color: "var(--gold)" },
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "contact-email-input",
                name: "email",
                type: "email",
                required: true,
                placeholder: "you@email.com",
                value: form.email,
                onChange: handleChange,
                style: inputStyle,
                "data-ocid": "contact-email",
                onFocus: (e) => {
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
                },
                onBlur: (e) => {
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
                }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "contact-phone-input",
                className: "block text-xs font-semibold uppercase tracking-widest mb-2",
                style: { color: "var(--gold)" },
                children: "Phone"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: "contact-phone-input",
                name: "phone",
                type: "tel",
                placeholder: "+91 00000 00000",
                value: form.phone,
                onChange: handleChange,
                style: inputStyle,
                "data-ocid": "contact-phone",
                onFocus: (e) => {
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
                },
                onBlur: (e) => {
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
                }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-service-select",
              className: "block text-xs font-semibold uppercase tracking-widest mb-2",
              style: { color: "var(--gold)" },
              children: "Service / Package"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "contact-service-select",
              name: "service",
              value: form.service,
              onChange: handleChange,
              style: { ...inputStyle, cursor: "pointer" },
              "data-ocid": "contact-service",
              onFocus: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
              },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", style: { background: "#0d1240" }, children: "Select a service…" }),
                SERVICE_OPTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, style: { background: "#0d1240" }, children: s }, s))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "contact-message-textarea",
              className: "block text-xs font-semibold uppercase tracking-widest mb-2",
              style: { color: "var(--gold)" },
              children: "Message"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              id: "contact-message-textarea",
              name: "message",
              required: true,
              rows: 4,
              placeholder: "Tell us about your project…",
              value: form.message,
              onChange: handleChange,
              style: { ...inputStyle, resize: "vertical" },
              "data-ocid": "contact-message",
              onFocus: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
              },
              onBlur: (e) => {
                e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
              }
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-400 font-light", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: addLead.isPending,
            "data-ocid": "contact-submit",
            className: "w-full py-4 rounded-full font-black text-sm transition-smooth",
            style: {
              background: addLead.isPending ? "rgba(240,180,41,0.4)" : "var(--gold)",
              color: "var(--navy-darkest)",
              fontFamily: "var(--font-display)",
              boxShadow: addLead.isPending ? "none" : "0 0 30px rgba(240,180,41,0.3)",
              cursor: addLead.isPending ? "not-allowed" : "pointer"
            },
            children: addLead.isPending ? "Sending…" : "Send Message →"
          }
        )
      ]
    }
  );
}
function HomePage() {
  const cursorRef = reactExports.useRef(null);
  const ringRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx}px`;
        cursorRef.current.style.top = `${my}px`;
      }
    };
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    document.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);
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
      { threshold: 0.08 }
    );
    for (const el of els) {
      obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: cursorRef, className: "cursor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: ringRef, className: "cursor-ring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "hero",
        className: "relative min-h-screen flex items-center overflow-hidden",
        style: { padding: "120px 5% 80px", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0",
              style: {
                backgroundImage: "linear-gradient(rgba(240,180,41,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,180,41,0.04) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage: "radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AuroraOrbs, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest animate-fade-up",
                style: {
                  background: "rgba(240,180,41,0.08)",
                  border: "1px solid rgba(240,180,41,0.2)",
                  color: "var(--gold)",
                  backdropFilter: "blur(10px)",
                  fontFamily: "var(--font-display)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-1.5 h-1.5 rounded-full animate-pulse-dot",
                      style: { background: "var(--gold)" }
                    }
                  ),
                  "Premium Digital Solutions"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "font-black leading-[1.04] tracking-tight mb-7 animate-fade-up delay-100",
                style: {
                  fontSize: "clamp(2.8rem, 7vw, 5.4rem)",
                  fontFamily: "var(--font-display)"
                },
                children: [
                  "Build Your",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Digital Presence." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        WebkitTextStroke: "1.5px var(--gold)",
                        color: "transparent"
                      },
                      children: "Dominate Online."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mb-10 leading-relaxed font-light animate-fade-up delay-200",
                style: {
                  fontSize: "1.1rem",
                  color: "var(--muted-text)",
                  maxWidth: 520
                },
                children: "We help individuals, creators, and businesses turn ideas into powerful, high-performing websites that drive real growth."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 animate-fade-up delay-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#contact",
                  "data-ocid": "hero-cta-primary",
                  className: "inline-block no-underline px-9 py-4 rounded-full font-bold text-sm transition-smooth",
                  style: {
                    background: "var(--gold)",
                    color: "var(--navy-darkest)",
                    fontFamily: "var(--font-display)",
                    boxShadow: "0 0 32px rgba(240,180,41,0.35)"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(0)";
                  },
                  children: "Get Started →"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#services",
                  "data-ocid": "hero-cta-secondary",
                  className: "inline-block no-underline px-9 py-4 rounded-full font-semibold text-sm transition-smooth",
                  style: {
                    border: "1.5px solid rgba(240,180,41,0.4)",
                    color: "var(--white-text)",
                    fontFamily: "var(--font-display)",
                    backdropFilter: "blur(5px)"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                    e.currentTarget.style.color = "var(--white-text)";
                    e.currentTarget.style.transform = "translateY(0)";
                  },
                  children: "View Services"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-14 right-[5%] z-10 flex gap-10 animate-fade-up delay-400 max-sm:hidden", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-3xl font-black",
                style: {
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)"
                },
                children: s.num
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-[0.7rem] uppercase tracking-widest mt-1",
                style: { color: "var(--muted-text)" },
                children: s.label
              }
            )
          ] }, s.label)) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "about",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-mid)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 65% 55% at 80% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "About Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: [
                    "About ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Webora" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "leading-relaxed font-light mb-5",
                  style: { color: "var(--muted-text)", fontSize: "1.02rem" },
                  children: "Webora Digital Solutions is dedicated to helping individuals, creators, startups, and businesses build a powerful and professional online presence."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "leading-relaxed font-light mb-5",
                  style: { color: "var(--muted-text)", fontSize: "1.02rem" },
                  children: "We combine design, performance, and strategy to create visually stunning and highly effective digital experiences — transforming ideas into scalable digital products."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "p",
                {
                  className: "leading-relaxed font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.02rem" },
                  children: [
                    "We believe technology should be accessible to everyone. That's why we provide",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--gold)", fontWeight: 600 }, children: "affordable, high-quality, and impactful" }),
                    " ",
                    "solutions for every budget."
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-right relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-top-border p-10 animate-float-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-6", children: "🌐" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-bold mb-4",
                    style: { fontFamily: "var(--font-display)" },
                    children: "From Idea to Digital Reality"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "leading-relaxed font-light",
                    style: { color: "var(--muted-text)", fontSize: "0.95rem" },
                    children: "We handle everything — from initial concept and UX strategy to pixel-perfect development and launch. Your vision, expertly executed."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm",
                  style: {
                    background: "var(--gradient-gold)",
                    color: "var(--navy-darkest)",
                    fontFamily: "var(--font-display)",
                    boxShadow: "0 20px 60px rgba(240,180,41,0.4)"
                  },
                  children: "✨ Premium Quality. Affordable Price."
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "mission",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Mission & Vision" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "What Drives Us Forward"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
              {
                label: "🎯 Our Mission",
                title: "Accessible Digital Excellence",
                text: "To make high-quality digital solutions accessible, affordable, and impactful for everyone — from solo creators to growing enterprises."
              },
              {
                label: "🔭 Our Vision",
                title: "A Global Digital Ecosystem",
                text: "To build a global ecosystem where anyone can launch, grow, and monetize their online presence — breaking barriers and creating opportunity."
              }
            ].map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-card glass-card-top-border p-11 reveal",
                style: { transitionDelay: `${i * 120}ms` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-xs uppercase tracking-[2px] font-bold mb-5",
                      style: {
                        color: "var(--gold)",
                        fontFamily: "var(--font-display)"
                      },
                      children: m.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-2xl font-black mb-4",
                      style: { fontFamily: "var(--font-display)" },
                      children: m.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "leading-[1.8] font-light",
                      style: { color: "var(--muted-text)", fontSize: "0.95rem" },
                      children: m.text
                    }
                  )
                ]
              },
              m.title
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "services",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-mid)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 50% 60% at 20% 60%, rgba(240,180,41,0.05) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "What We Do" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "Our Services"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "max-w-lg mx-auto font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "Everything you need to build, launch, and scale your digital presence."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `service-card-${i}`,
                className: "glass-card p-9 transition-smooth reveal cursor-default",
                style: { transitionDelay: `${i * 80}ms` },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(240,180,41,0.12)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-5", children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-bold mb-3 text-lg",
                      style: { fontFamily: "var(--font-display)" },
                      children: s.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-light",
                      style: { color: "var(--muted-text)" },
                      children: s.desc
                    }
                  )
                ]
              },
              s.title
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "why",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Why Webora" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "Why Choose Us"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "Six reasons businesses trust Webora to power their digital growth."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: WHY_ITEMS.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `why-card-${i}`,
                className: "glass-card p-9 transition-smooth reveal",
                style: { transitionDelay: `${i * 80}ms` },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(240,180,41,0.12)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl block mb-4", children: w.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-bold text-base mb-2",
                      style: {
                        fontFamily: "var(--font-display)",
                        color: "var(--gold)"
                      },
                      children: w.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-light",
                      style: { color: "var(--muted-text)" },
                      children: w.desc
                    }
                  )
                ]
              },
              w.title
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "pricing",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-mid)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(240,180,41,0.07) 0%, transparent 60%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Pricing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "Simple, Transparent Pricing"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "No hidden fees. No surprises. Just great value."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch", children: PRICING.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `pricing-${p.tier.toLowerCase()}`,
                className: "glass-card flex flex-col reveal transition-smooth",
                style: {
                  transitionDelay: `${i * 100}ms`,
                  transform: p.featured ? "scale(1.04)" : "scale(1)",
                  border: p.featured ? "2px solid rgba(240,180,41,0.6)" : "1px solid rgba(240,180,41,0.12)",
                  boxShadow: p.featured ? "0 0 70px rgba(240,180,41,0.2)" : "none",
                  padding: "2.5rem"
                },
                onMouseEnter: (e) => {
                  if (!p.featured) {
                    e.currentTarget.style.borderColor = "rgba(240,180,41,0.4)";
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(240,180,41,0.1)";
                  }
                },
                onMouseLeave: (e) => {
                  if (!p.featured) {
                    e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-sm font-bold uppercase tracking-[2px]",
                        style: {
                          color: "var(--gold)",
                          fontFamily: "var(--font-display)"
                        },
                        children: p.tier
                      }
                    ),
                    p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-[0.65rem] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                        style: {
                          background: "var(--gold)",
                          color: "var(--navy-darkest)",
                          fontFamily: "var(--font-display)"
                        },
                        children: p.badge
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-4xl font-black",
                        style: { fontFamily: "var(--font-display)" },
                        children: p.price
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "ml-2 text-sm font-light",
                        style: { color: "var(--muted-text)" },
                        children: p.note
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex-1 flex flex-col gap-3 mb-8", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "li",
                    {
                      className: "flex items-start gap-3 text-sm font-light",
                      style: { color: "var(--muted-text)" },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)", flexShrink: 0 }, children: "✓" }),
                        f
                      ]
                    },
                    f
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#contact",
                      "data-ocid": `pricing-cta-${p.tier.toLowerCase()}`,
                      className: "block text-center no-underline py-3.5 rounded-full font-bold text-sm transition-smooth",
                      style: p.featured ? {
                        background: "var(--gold)",
                        color: "var(--navy-darkest)",
                        fontFamily: "var(--font-display)",
                        boxShadow: "0 0 28px rgba(240,180,41,0.35)"
                      } : {
                        border: "1.5px solid rgba(240,180,41,0.35)",
                        color: "var(--white-text)",
                        fontFamily: "var(--font-display)"
                      },
                      onMouseEnter: (e) => {
                        if (p.featured) {
                          e.currentTarget.style.background = "#fff";
                        } else {
                          e.currentTarget.style.background = "var(--gold)";
                          e.currentTarget.style.color = "var(--navy-darkest)";
                        }
                        e.currentTarget.style.transform = "translateY(-1px)";
                      },
                      onMouseLeave: (e) => {
                        if (p.featured) {
                          e.currentTarget.style.background = "var(--gold)";
                        } else {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--white-text)";
                        }
                        e.currentTarget.style.transform = "translateY(0)";
                      },
                      children: p.cta
                    }
                  )
                ]
              },
              p.tier
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "process",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(240,180,41,0.06) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "How It Works" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "Our Process"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "A clear, transparent workflow from idea to launch."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col lg:flex-row gap-0", children: PROCESS_STEPS.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex-1 px-6 py-9 text-center relative reveal",
                style: { transitionDelay: `${i * 100}ms` },
                children: [
                  i < PROCESS_STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
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
                        e.currentTarget.style.boxShadow = "0 0 30px rgba(240,180,41,0.4)";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.background = "rgba(240,180,41,0.06)";
                        e.currentTarget.style.color = "var(--gold)";
                        e.currentTarget.style.boxShadow = "none";
                      },
                      children: step.num
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-bold mb-2 text-base",
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
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "team",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-mid)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.06) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Our Team" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: "The Builders Behind Webora"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "Two passionate founders united by a mission to make digital excellence accessible."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-9 max-w-3xl mx-auto", children: [
              {
                initials: "SK",
                name: "S. Sai Krishna",
                role: "Founder",
                bio: "A visionary entrepreneur passionate about innovation and technology, leading Webora with the mission to empower individuals and businesses through strong digital presence."
              },
              {
                initials: "SV",
                name: "Suvaabann",
                role: "Technical Founder",
                bio: "A student entrepreneur and tech-driven builder responsible for development, system design, and execution — focused on building modern, scalable, high-performance digital solutions."
              }
            ].map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `team-card-${i}`,
                className: "glass-card p-11 text-center relative transition-smooth reveal",
                style: { transitionDelay: `${i * 120}ms` },
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.35)";
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(240,180,41,0.12)";
                  const a = e.currentTarget.querySelector(".team-accent");
                  if (a) {
                    a.style.opacity = "1";
                  }
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(240,180,41,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                  const a = e.currentTarget.querySelector(".team-accent");
                  if (a) {
                    a.style.opacity = "0";
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "team-accent absolute bottom-0 left-0 right-0 h-[3px] transition-smooth",
                      style: {
                        background: "linear-gradient(90deg, transparent, var(--gold), rgba(6,182,212,0.8), transparent)",
                        opacity: 0
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-5",
                      style: {
                        background: "var(--gradient-gold)",
                        color: "var(--navy-darkest)",
                        fontFamily: "var(--font-display)",
                        boxShadow: "0 0 40px rgba(240,180,41,0.3)"
                      },
                      children: member.initials
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "font-bold text-xl mb-1",
                      style: { fontFamily: "var(--font-display)" },
                      children: member.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-[0.75rem] uppercase tracking-[1.5px] font-semibold mb-5",
                      style: {
                        color: "var(--gold)",
                        fontFamily: "var(--font-display)"
                      },
                      children: member.role
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm leading-[1.75] font-light",
                      style: { color: "var(--muted-text)" },
                      children: member.bio
                    }
                  )
                ]
              },
              member.name
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        id: "contact",
        className: "relative overflow-hidden",
        style: { padding: "100px 5%", background: "var(--navy-darkest)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 z-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Get In Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h2",
                {
                  className: "text-4xl lg:text-5xl font-black tracking-tight mb-4",
                  style: {
                    fontFamily: "var(--font-display)",
                    letterSpacing: "-1.5px"
                  },
                  children: [
                    "Let's Build Something",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Great" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-light",
                  style: { color: "var(--muted-text)", fontSize: "1.05rem" },
                  children: "Reach out and we'll get back to you within 24 hours."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-black mb-8",
                    style: { fontFamily: "var(--font-display)" },
                    children: "Contact Information"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: [
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "sai.krishna.2008a3@gmail.com",
                    href: "mailto:sai.krishna.2008a3@gmail.com"
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "suvaabann@gmail.com",
                    href: "mailto:suvaabann@gmail.com"
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 91107 66102",
                    href: "tel:+919110766102"
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 90147 31107",
                    href: "tel:+919014731107"
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Chat with Sai Krishna",
                    href: "https://wa.me/919110766102"
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Chat with Suvaabann",
                    href: "https://wa.me/919014731107"
                  },
                  {
                    icon: "🔗",
                    label: "LinkedIn",
                    value: "v-suvaabann-6321313b1",
                    href: "https://www.linkedin.com/in/v-suvaabann-6321313b1"
                  }
                ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: c.href,
                    target: c.href.startsWith("http") ? "_blank" : void 0,
                    rel: c.href.startsWith("http") ? "noopener noreferrer" : void 0,
                    "data-ocid": `contact-info-${c.label.toLowerCase()}`,
                    className: "flex items-center gap-4 no-underline group transition-smooth",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-smooth",
                          style: {
                            background: "rgba(240,180,41,0.08)",
                            border: "1px solid rgba(240,180,41,0.15)"
                          },
                          children: c.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-[0.68rem] uppercase tracking-widest font-semibold mb-0.5",
                            style: { color: "var(--gold)" },
                            children: c.label
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "text-sm font-light transition-smooth",
                            style: { color: "var(--white-text)" },
                            children: c.value
                          }
                        )
                      ] })
                    ]
                  },
                  c.href
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactForm, {}) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "relative overflow-hidden",
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
                "Ready to Build Something",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Amazing?" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-light mb-8", style: { color: "var(--muted-text)" }, children: "Let's turn your vision into a powerful digital reality." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              "data-ocid": "home-cta",
              className: "inline-block no-underline px-10 py-4 rounded-full font-black text-sm transition-smooth",
              style: {
                background: "var(--gold)",
                color: "var(--navy-darkest)",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 40px rgba(240,180,41,0.35)"
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-2px)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.transform = "translateY(0)";
              },
              children: "Start Your Project →"
            }
          )
        ] })
      }
    )
  ] });
}
export {
  HomePage as default
};
