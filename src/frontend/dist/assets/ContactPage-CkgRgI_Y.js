import { r as reactExports, j as jsxRuntimeExports } from "./index-DounFOxx.js";
import { u as useAddLead } from "./useQueries-Dc_QJZ9Q.js";
const CONTACT_ITEMS = [
  {
    icon: "📧",
    label: "Email — Sai Krishna",
    value: "sai.krishna.2008a3@gmail.com",
    href: "mailto:sai.krishna.2008a3@gmail.com"
  },
  {
    icon: "📧",
    label: "Email — Suvaabann",
    value: "suvaabann@gmail.com",
    href: "mailto:suvaabann@gmail.com"
  },
  {
    icon: "📱",
    label: "Call Us — Sai Krishna",
    value: "+91 91107 66102",
    href: "tel:+919110766102"
  },
  {
    icon: "📱",
    label: "Call Us — Suvaabann",
    value: "+91 90147 31107",
    href: "tel:+919014731107"
  },
  {
    icon: "💬",
    label: "WhatsApp — Sai Krishna",
    value: "+91 91107 66102",
    href: "https://wa.me/919110766102"
  },
  {
    icon: "💬",
    label: "WhatsApp — Suvaabann",
    value: "+91 90147 31107",
    href: "https://wa.me/919014731107"
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/v-suvaabann",
    href: "https://www.linkedin.com/in/v-suvaabann-6321313b1"
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
function ContactPage() {
  const addLead = useAddLead();
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
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
  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    setError("");
    try {
      await addLead.mutateAsync({ ...formData });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or reach out directly.");
    }
  };
  const inputStyle = {
    background: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(240,180,41,0.2)",
    color: "var(--white-text)",
    fontFamily: "var(--font-body)"
  };
  const labelStyle = {
    color: "var(--gold)",
    fontFamily: "var(--font-display)"
  };
  const onFocus = (e) => {
    e.currentTarget.style.borderColor = "var(--gold)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(240,180,41,0.1)";
  };
  const onBlur = (e) => {
    e.currentTarget.style.borderColor = "rgba(240,180,41,0.2)";
    e.currentTarget.style.boxShadow = "none";
  };
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
                background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(240,180,41,0.1) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 55%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SectionTag, { children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 animate-fade-up",
                style: { fontFamily: "var(--font-display)", letterSpacing: "-2px" },
                children: [
                  "Let's Build Something",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--gold)" }, children: "Amazing 🚀" })
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
                children: "Ready to turn your vision into a powerful digital reality? Reach out today — we'd love to work with you."
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { style: { padding: "100px 5%", background: "var(--navy-mid)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "font-bold text-xl mb-8",
            style: { fontFamily: "var(--font-display)" },
            children: "Get In Touch"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: CONTACT_ITEMS.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: item.href,
            target: item.href.startsWith("http") ? "_blank" : void 0,
            rel: item.href.startsWith("http") ? "noopener noreferrer" : void 0,
            "data-ocid": "contact-item",
            className: "flex items-center gap-4 p-4 rounded-2xl no-underline transition-smooth",
            style: {
              background: "rgba(13,18,64,0.4)",
              border: "1px solid rgba(240,180,41,0.1)",
              color: "var(--white-text)",
              backdropFilter: "blur(10px)"
            },
            onMouseEnter: (e) => {
              e.currentTarget.style.borderColor = "var(--gold)";
              e.currentTarget.style.background = "rgba(240,180,41,0.06)";
              e.currentTarget.style.transform = "translateX(4px)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.1)";
              e.currentTarget.style.background = "rgba(13,18,64,0.4)";
              e.currentTarget.style.transform = "translateX(0)";
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0",
                  style: { background: "rgba(240,180,41,0.1)" },
                  children: item.icon
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "block text-[0.7rem] uppercase tracking-widest font-semibold mb-0.5",
                    style: {
                      color: "var(--gold)",
                      fontFamily: "var(--font-display)"
                    },
                    children: item.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-light truncate",
                    style: { color: "var(--muted-text)" },
                    children: item.value
                  }
                )
              ] })
            ]
          },
          `${item.label}-${item.href}`
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-top-border p-11", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: "font-bold text-xl mb-7",
            style: { fontFamily: "var(--font-display)" },
            children: "Start Your Project"
          }
        ),
        submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", "data-ocid": "form-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4", children: "✅" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-bold text-lg mb-2",
              style: {
                color: "var(--gold)",
                fontFamily: "var(--font-display)"
              },
              children: "Thanks! We'll be in touch shortly."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm font-light",
              style: { color: "var(--muted-text)" },
              children: "Your message has been saved. We typically respond within 24 hours."
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact-form", children: [
          error && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mb-5 px-4 py-3 rounded-xl text-sm",
              style: {
                background: "rgba(239,68,68,0.1)",
                border: "1px solid rgba(239,68,68,0.3)",
                color: "#f87171"
              },
              children: error
            }
          ),
          ["name", "email", "phone"].map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: `f-${key}`,
                className: "block text-[0.75rem] uppercase tracking-widest font-semibold mb-2",
                style: labelStyle,
                children: key === "name" ? "Your Name" : key === "email" ? "Email Address" : "Phone / WhatsApp"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                id: `f-${key}`,
                type: key === "email" ? "email" : key === "phone" ? "tel" : "text",
                placeholder: key === "name" ? "e.g. Rahul Sharma" : key === "email" ? "your@email.com" : "+91 98765 43210",
                value: formData[key],
                onChange: (e) => {
                  setFormData((p) => ({ ...p, [key]: e.target.value }));
                },
                "data-ocid": `form-${key}`,
                className: "w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-smooth",
                style: inputStyle,
                onFocus,
                onBlur
              }
            )
          ] }, key)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "f-service",
                className: "block text-[0.75rem] uppercase tracking-widest font-semibold mb-2",
                style: labelStyle,
                children: "Service Needed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                id: "f-service",
                value: formData.service,
                onChange: (e) => {
                  setFormData((p) => ({ ...p, service: e.target.value }));
                },
                "data-ocid": "form-service",
                className: "w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-smooth appearance-none",
                style: {
                  ...inputStyle,
                  color: formData.service ? "var(--white-text)" : "var(--muted-text)"
                },
                onFocus,
                onBlur,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "website", children: "Website Development" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "design", children: "UI/UX Design" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "seo", children: "Performance & SEO" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom", children: "Custom Solution" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "f-message",
                className: "block text-[0.75rem] uppercase tracking-widest font-semibold mb-2",
                style: labelStyle,
                children: "Tell Us About Your Project"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "f-message",
                rows: 4,
                placeholder: "Briefly describe what you need...",
                value: formData.message,
                onChange: (e) => {
                  setFormData((p) => ({ ...p, message: e.target.value }));
                },
                "data-ocid": "form-message",
                className: "w-full px-5 py-3.5 rounded-xl text-sm font-light outline-none transition-smooth resize-none",
                style: inputStyle,
                onFocus,
                onBlur
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handleSubmit,
              "data-ocid": "form-submit",
              disabled: addLead.isPending,
              className: "w-full py-4 rounded-full font-black text-base tracking-wide transition-smooth",
              style: {
                background: "var(--gold)",
                color: "var(--navy-darkest)",
                border: "none",
                cursor: addLead.isPending ? "wait" : "none",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 30px rgba(240,180,41,0.3)",
                opacity: addLead.isPending ? 0.7 : 1
              },
              onMouseEnter: (e) => {
                if (!addLead.isPending) {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.transform = "translateY(0)";
              },
              children: addLead.isPending ? "Sending..." : "Send Message →"
            }
          )
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  ContactPage as default
};
