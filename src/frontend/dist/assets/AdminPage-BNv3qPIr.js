import { r as reactExports, j as jsxRuntimeExports } from "./index-DounFOxx.js";
import { a as useLeads } from "./useQueries-Dc_QJZ9Q.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
const ChevronUp = createLucideIcon("chevron-up", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
];
const ChevronsUpDown = createLucideIcon("chevrons-up-down", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const Users = createLucideIcon("users", __iconNode);
function formatTimestamp(ts) {
  const ms = Number(ts / 1000000n);
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}
function SortIcon({
  col,
  sortKey,
  sortDir
}) {
  if (col !== sortKey)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsUpDown, { className: "w-3.5 h-3.5 opacity-40 inline ml-1" });
  return sortDir === "asc" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    ChevronUp,
    {
      className: "w-3.5 h-3.5 inline ml-1",
      style: { color: "var(--gold)" }
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    ChevronDown,
    {
      className: "w-3.5 h-3.5 inline ml-1",
      style: { color: "var(--gold)" }
    }
  );
}
function MessageCell({ text }) {
  const [open, setOpen] = reactExports.useState(false);
  const short = text.length > 60;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: 240 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: "text-sm leading-relaxed",
        style: {
          color: "rgba(240,248,255,0.72)",
          display: "-webkit-box",
          WebkitLineClamp: open || !short ? void 0 : 2,
          WebkitBoxOrient: "vertical",
          overflow: open ? "visible" : short ? "hidden" : "visible"
        },
        children: text
      }
    ),
    short && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          setOpen(!open);
        },
        className: "mt-1 flex items-center gap-1 text-xs transition-smooth",
        style: { color: "var(--gold)" },
        "data-ocid": "expand-message",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronDown,
            {
              className: "w-3 h-3 transition-transform",
              style: { transform: open ? "rotate(180deg)" : "rotate(0deg)" }
            }
          ),
          open ? "Less" : "More"
        ]
      }
    )
  ] });
}
function LeadCard({ lead, idx }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card glass-card-top-border p-5 space-y-3 transition-smooth",
      "data-ocid": "lead-card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-xs font-mono px-2 py-0.5 rounded-full",
              style: {
                color: "var(--gold)",
                background: "rgba(240,180,41,0.09)",
                border: "1px solid rgba(240,180,41,0.2)"
              },
              children: [
                "#",
                idx + 1
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: { color: "rgba(240,248,255,0.45)" }, children: formatTimestamp(lead.timestamp) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-display font-semibold text-base",
              style: { color: "var(--white-text)" },
              children: lead.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `mailto:${lead.email}`,
              className: "text-sm transition-smooth",
              style: { color: "rgba(240,248,255,0.62)" },
              children: lead.email
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          lead.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "text-xs px-2.5 py-1 rounded-lg",
              style: {
                background: "rgba(240,180,41,0.08)",
                border: "1px solid rgba(240,180,41,0.15)",
                color: "rgba(240,248,255,0.72)"
              },
              children: [
                "📞 ",
                lead.phone
              ]
            }
          ),
          lead.service && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xs px-2.5 py-1 rounded-lg",
              style: {
                background: "rgba(124,58,237,0.12)",
                border: "1px solid rgba(124,58,237,0.22)",
                color: "rgba(240,248,255,0.72)"
              },
              children: lead.service
            }
          )
        ] }),
        lead.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pt-3",
            style: { borderTop: "1px solid rgba(240,180,41,0.1)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCell, { text: lead.message })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `mailto:${lead.email}`,
              className: "text-xs px-4 py-1.5 rounded-lg font-semibold transition-smooth",
              style: {
                background: "var(--gold)",
                color: "var(--navy-darkest)",
                fontFamily: "var(--font-display)"
              },
              children: "Reply"
            }
          ),
          lead.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/${lead.phone.replace(/\D/g, "")}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-xs px-4 py-1.5 rounded-lg font-semibold transition-smooth",
              style: {
                background: "rgba(37,211,102,0.12)",
                color: "#25d366",
                border: "1px solid rgba(37,211,102,0.28)"
              },
              children: "WhatsApp"
            }
          )
        ] })
      ]
    }
  );
}
function AdminPage() {
  const {
    data: leads = [],
    isLoading,
    isError,
    refetch,
    isFetching
  } = useLeads();
  const [sortKey, setSortKey] = reactExports.useState("timestamp");
  const [sortDir, setSortDir] = reactExports.useState("desc");
  function handleSort(key) {
    if (key === "index") return;
    if (sortKey === key) {
      setSortDir((d) => d === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }
  const sorted = reactExports.useMemo(() => {
    if (sortKey === "index") return [...leads];
    return [...leads].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (typeof av === "bigint" && typeof bv === "bigint") {
        return sortDir === "asc" ? av < bv ? -1 : 1 : av > bv ? -1 : 1;
      }
      const as = String(av ?? "").toLowerCase();
      const bs = String(bv ?? "").toLowerCase();
      return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [leads, sortKey, sortDir]);
  const columns = [
    { label: "#", key: "index" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Service / Package", key: "service" },
    { label: "Message", key: "message" },
    { label: "Submitted At", key: "timestamp", align: "right" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "var(--navy-darkest)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 pointer-events-none",
        style: {
          background: "var(--gradient-aurora)",
          opacity: 0.55,
          zIndex: 0
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-xs uppercase tracking-[3px] font-semibold mb-2",
                style: {
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)"
                },
                children: "Webora"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold gradient-gold-text leading-tight", children: "Admin Dashboard" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-2 text-sm",
                style: { color: "var(--muted-text)" },
                children: "Contact Form Submissions"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-gold flex items-center gap-2 px-4 py-2 rounded-full",
                "data-ocid": "leads-count-badge",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4", style: { color: "var(--gold)" } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-sm font-semibold",
                      style: { color: "var(--gold)" },
                      children: [
                        leads.length,
                        " Lead",
                        leads.length !== 1 ? "s" : ""
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  void refetch();
                },
                disabled: isFetching,
                className: "flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-sm font-medium transition-smooth hover:shadow-gold disabled:opacity-50",
                style: { color: "var(--gold)" },
                "data-ocid": "refresh-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    RefreshCw,
                    {
                      className: `w-4 h-4 ${isFetching ? "animate-spin" : ""}`
                    }
                  ),
                  "Refresh"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "mt-6 h-px",
            style: {
              background: "linear-gradient(90deg, var(--gold), rgba(240,180,41,0.25), transparent)"
            }
          }
        )
      ] }),
      isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center justify-center py-40 gap-4",
          "data-ocid": "loading-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              LoaderCircle,
              {
                className: "w-10 h-10 animate-spin",
                style: { color: "var(--gold)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", style: { color: "var(--muted-text)" }, children: "Loading submissions…" })
          ]
        }
      ),
      isError && !isLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card flex flex-col items-center justify-center py-28 gap-4",
          "data-ocid": "error-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-12 h-12", style: { color: "#ef4444" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-base font-medium",
                style: { color: "rgba(240,248,255,0.75)" },
                children: "Failed to load submissions."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  void refetch();
                },
                className: "mt-2 px-6 py-2.5 rounded-full glass-gold text-sm font-medium transition-smooth hover:shadow-gold",
                style: { color: "var(--gold)" },
                "data-ocid": "retry-btn",
                children: "Retry"
              }
            )
          ]
        }
      ),
      !isLoading && !isError && leads.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-card flex flex-col items-center justify-center py-36 gap-4",
          "data-ocid": "empty-state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full glass-gold flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-7 h-7", style: { color: "var(--gold)" } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display text-xl font-semibold",
                style: { color: "rgba(240,248,255,0.85)" },
                children: "No submissions yet"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm text-center max-w-xs",
                style: { color: "var(--muted-text)" },
                children: "Contact form submissions will appear here once visitors reach out."
              }
            )
          ]
        }
      ),
      !isLoading && !isError && leads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "overflow-hidden rounded-2xl",
            style: { border: "1px solid rgba(240,180,41,0.2)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", "data-ocid": "leads-table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: { background: "rgba(13,18,64,0.85)" }, children: columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "th",
                {
                  className: `px-5 py-4 font-semibold uppercase tracking-widest text-xs select-none whitespace-nowrap ${col.align === "right" ? "text-right" : "text-left"} ${col.key !== "index" ? "cursor-pointer" : ""}`,
                  style: { color: "rgba(240,248,255,0.52)" },
                  onClick: () => {
                    handleSort(col.key);
                  },
                  onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleSort(col.key);
                    }
                  },
                  tabIndex: col.key !== "index" ? 0 : void 0,
                  "data-ocid": `sort-${col.key}`,
                  children: [
                    col.label,
                    col.key !== "index" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      SortIcon,
                      {
                        col: col.key,
                        sortKey,
                        sortDir
                      }
                    )
                  ]
                },
                col.key
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((lead, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "transition-smooth group",
                  style: {
                    background: idx % 2 === 0 ? "rgba(5,8,26,0.62)" : "rgba(13,18,64,0.32)",
                    borderBottom: "1px solid rgba(240,180,41,0.07)"
                  },
                  "data-ocid": "lead-row",
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "rgba(240,180,41,0.05)";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = idx % 2 === 0 ? "rgba(5,8,26,0.62)" : "rgba(13,18,64,0.32)";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs font-mono px-2 py-0.5 rounded-full",
                        style: {
                          color: "var(--gold)",
                          background: "rgba(240,180,41,0.08)"
                        },
                        children: idx + 1
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black",
                          style: {
                            background: "var(--gradient-gold)",
                            color: "var(--navy-darkest)",
                            fontFamily: "var(--font-display)"
                          },
                          children: lead.name.charAt(0).toUpperCase()
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-medium whitespace-nowrap",
                          style: { color: "var(--white-text)" },
                          children: lead.name
                        }
                      )
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: `mailto:${lead.email}`,
                        className: "transition-smooth whitespace-nowrap",
                        style: { color: "rgba(240,248,255,0.72)" },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.color = "var(--gold)";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.color = "rgba(240,248,255,0.72)";
                        },
                        children: lead.email
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 whitespace-nowrap",
                        style: { color: "rgba(240,248,255,0.62)" },
                        children: lead.phone || "—"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: lead.service ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "inline-block text-xs px-3 py-1 rounded-full whitespace-nowrap",
                        style: {
                          background: "rgba(124,58,237,0.14)",
                          border: "1px solid rgba(124,58,237,0.24)",
                          color: "rgba(240,248,255,0.8)"
                        },
                        children: lead.service
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(240,248,255,0.35)" }, children: "—" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: lead.message ? /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCell, { text: lead.message }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "rgba(240,248,255,0.35)" }, children: "—" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        className: "px-5 py-4 text-right text-xs whitespace-nowrap",
                        style: { color: "rgba(240,248,255,0.48)" },
                        children: formatTimestamp(lead.timestamp)
                      }
                    )
                  ]
                },
                String(lead.id)
              )) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "mt-3 text-xs text-right",
            style: { color: "rgba(240,248,255,0.3)" },
            children: [
              sorted.length,
              " submission",
              sorted.length !== 1 ? "s" : ""
            ]
          }
        )
      ] }),
      !isLoading && !isError && leads.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden space-y-4", "data-ocid": "leads-cards", children: sorted.map((lead, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(LeadCard, { lead, idx }, String(lead.id))) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mt-14 text-center text-xs",
          style: { color: "rgba(240,248,255,0.28)" },
          children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            ". Built with love using",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "transition-smooth",
                style: { color: "var(--gold)" },
                onMouseEnter: (e) => {
                  e.currentTarget.style.color = "var(--gold-light)";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.color = "var(--gold)";
                },
                children: "caffeine.ai"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  AdminPage as default
};
