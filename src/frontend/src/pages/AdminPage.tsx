import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Loader2,
  RefreshCw,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { Lead } from "../backend";
import { useLeads } from "../hooks/useQueries";

/* ─── Types ─── */
type SortKey =
  | "index"
  | "name"
  | "email"
  | "phone"
  | "service"
  | "message"
  | "timestamp";
type SortDir = "asc" | "desc";

/* ─── Helpers ─── */
function formatTimestamp(ts: bigint): string {
  const ms = Number(ts / 1_000_000n);
  return new Date(ms).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

/* ─── Sort icon ─── */
function SortIcon({
  col,
  sortKey,
  sortDir,
}: { col: SortKey; sortKey: SortKey; sortDir: SortDir }) {
  if (col !== sortKey)
    return <ChevronsUpDown className="w-3.5 h-3.5 opacity-40 inline ml-1" />;
  return sortDir === "asc" ? (
    <ChevronUp
      className="w-3.5 h-3.5 inline ml-1"
      style={{ color: "var(--gold)" }}
    />
  ) : (
    <ChevronDown
      className="w-3.5 h-3.5 inline ml-1"
      style={{ color: "var(--gold)" }}
    />
  );
}

/* ─── Expandable message cell ─── */
function MessageCell({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const short = text.length > 60;
  return (
    <div style={{ maxWidth: 240 }}>
      <p
        className="text-sm leading-relaxed"
        style={{
          color: "rgba(240,248,255,0.72)",
          display: "-webkit-box",
          WebkitLineClamp: open || !short ? undefined : 2,
          WebkitBoxOrient: "vertical",
          overflow: open ? "visible" : short ? "hidden" : "visible",
        }}
      >
        {text}
      </p>
      {short && (
        <button
          type="button"
          onClick={() => {
            setOpen(!open);
          }}
          className="mt-1 flex items-center gap-1 text-xs transition-smooth"
          style={{ color: "var(--gold)" }}
          data-ocid="expand-message"
        >
          <ChevronDown
            className="w-3 h-3 transition-transform"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
          {open ? "Less" : "More"}
        </button>
      )}
    </div>
  );
}

/* ─── Mobile lead card ─── */
function LeadCard({ lead, idx }: { lead: Lead; idx: number }) {
  return (
    <div
      className="glass-card glass-card-top-border p-5 space-y-3 transition-smooth"
      data-ocid="lead-card"
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-mono px-2 py-0.5 rounded-full"
          style={{
            color: "var(--gold)",
            background: "rgba(240,180,41,0.09)",
            border: "1px solid rgba(240,180,41,0.2)",
          }}
        >
          #{idx + 1}
        </span>
        <span className="text-xs" style={{ color: "rgba(240,248,255,0.45)" }}>
          {formatTimestamp(lead.timestamp)}
        </span>
      </div>

      <div>
        <p
          className="font-display font-semibold text-base"
          style={{ color: "var(--white-text)" }}
        >
          {lead.name}
        </p>
        <a
          href={`mailto:${lead.email}`}
          className="text-sm transition-smooth"
          style={{ color: "rgba(240,248,255,0.62)" }}
        >
          {lead.email}
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        {lead.phone && (
          <span
            className="text-xs px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(240,180,41,0.08)",
              border: "1px solid rgba(240,180,41,0.15)",
              color: "rgba(240,248,255,0.72)",
            }}
          >
            📞 {lead.phone}
          </span>
        )}
        {lead.service && (
          <span
            className="text-xs px-2.5 py-1 rounded-lg"
            style={{
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.22)",
              color: "rgba(240,248,255,0.72)",
            }}
          >
            {lead.service}
          </span>
        )}
      </div>

      {lead.message && (
        <div
          className="pt-3"
          style={{ borderTop: "1px solid rgba(240,180,41,0.1)" }}
        >
          <MessageCell text={lead.message} />
        </div>
      )}

      <div className="flex gap-3 pt-1">
        <a
          href={`mailto:${lead.email}`}
          className="text-xs px-4 py-1.5 rounded-lg font-semibold transition-smooth"
          style={{
            background: "var(--gold)",
            color: "var(--navy-darkest)",
            fontFamily: "var(--font-display)",
          }}
        >
          Reply
        </a>
        {lead.phone && (
          <a
            href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-1.5 rounded-lg font-semibold transition-smooth"
            style={{
              background: "rgba(37,211,102,0.12)",
              color: "#25d366",
              border: "1px solid rgba(37,211,102,0.28)",
            }}
          >
            WhatsApp
          </a>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function AdminPage() {
  const {
    data: leads = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useLeads();
  const [sortKey, setSortKey] = useState<SortKey>("timestamp");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  function handleSort(key: SortKey) {
    if (key === "index") return;
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const sorted = useMemo(() => {
    if (sortKey === "index") return [...leads];
    return [...leads].sort((a, b) => {
      const av = a[sortKey as keyof Lead];
      const bv = b[sortKey as keyof Lead];
      if (typeof av === "bigint" && typeof bv === "bigint") {
        return sortDir === "asc" ? (av < bv ? -1 : 1) : av > bv ? -1 : 1;
      }
      const as = String(av ?? "").toLowerCase();
      const bs = String(bv ?? "").toLowerCase();
      return sortDir === "asc" ? as.localeCompare(bs) : bs.localeCompare(as);
    });
  }, [leads, sortKey, sortDir]);

  const columns: { label: string; key: SortKey; align?: "right" }[] = [
    { label: "#", key: "index" },
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Service / Package", key: "service" },
    { label: "Message", key: "message" },
    { label: "Submitted At", key: "timestamp", align: "right" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--navy-darkest)" }}>
      {/* Aurora background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "var(--gradient-aurora)",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 py-12">
        {/* ─── Header ─── */}
        <div className="mb-10 animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div>
              <p
                className="text-xs uppercase tracking-[3px] font-semibold mb-2"
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)",
                }}
              >
                Webora
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold gradient-gold-text leading-tight">
                Admin Dashboard
              </h1>
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--muted-text)" }}
              >
                Contact Form Submissions
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Count badge */}
              <div
                className="glass-gold flex items-center gap-2 px-4 py-2 rounded-full"
                data-ocid="leads-count-badge"
              >
                <Users className="w-4 h-4" style={{ color: "var(--gold)" }} />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--gold)" }}
                >
                  {leads.length} Lead{leads.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Refresh button */}
              <button
                type="button"
                onClick={() => {
                  void refetch();
                }}
                disabled={isFetching}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-gold text-sm font-medium transition-smooth hover:shadow-gold disabled:opacity-50"
                style={{ color: "var(--gold)" }}
                data-ocid="refresh-btn"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isFetching ? "animate-spin" : ""}`}
                />
                Refresh
              </button>
            </div>
          </div>

          {/* Gold divider */}
          <div
            className="mt-6 h-px"
            style={{
              background:
                "linear-gradient(90deg, var(--gold), rgba(240,180,41,0.25), transparent)",
            }}
          />
        </div>

        {/* ─── Loading ─── */}
        {isLoading && (
          <div
            className="flex flex-col items-center justify-center py-40 gap-4"
            data-ocid="loading-state"
          >
            <Loader2
              className="w-10 h-10 animate-spin"
              style={{ color: "var(--gold)" }}
            />
            <p className="text-sm" style={{ color: "var(--muted-text)" }}>
              Loading submissions…
            </p>
          </div>
        )}

        {/* ─── Error ─── */}
        {isError && !isLoading && (
          <div
            className="glass-card flex flex-col items-center justify-center py-28 gap-4"
            data-ocid="error-state"
          >
            <AlertCircle className="w-12 h-12" style={{ color: "#ef4444" }} />
            <p
              className="text-base font-medium"
              style={{ color: "rgba(240,248,255,0.75)" }}
            >
              Failed to load submissions.
            </p>
            <button
              type="button"
              onClick={() => {
                void refetch();
              }}
              className="mt-2 px-6 py-2.5 rounded-full glass-gold text-sm font-medium transition-smooth hover:shadow-gold"
              style={{ color: "var(--gold)" }}
              data-ocid="retry-btn"
            >
              Retry
            </button>
          </div>
        )}

        {/* ─── Empty ─── */}
        {!isLoading && !isError && leads.length === 0 && (
          <div
            className="glass-card flex flex-col items-center justify-center py-36 gap-4"
            data-ocid="empty-state"
          >
            <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center">
              <Users className="w-7 h-7" style={{ color: "var(--gold)" }} />
            </div>
            <p
              className="font-display text-xl font-semibold"
              style={{ color: "rgba(240,248,255,0.85)" }}
            >
              No submissions yet
            </p>
            <p
              className="text-sm text-center max-w-xs"
              style={{ color: "var(--muted-text)" }}
            >
              Contact form submissions will appear here once visitors reach out.
            </p>
          </div>
        )}

        {/* ─── Desktop Table ─── */}
        {!isLoading && !isError && leads.length > 0 && (
          <div className="hidden md:block">
            <div
              className="overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(240,180,41,0.2)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-ocid="leads-table">
                  <thead>
                    <tr style={{ background: "rgba(13,18,64,0.85)" }}>
                      {columns.map((col) => (
                        <th
                          key={col.key}
                          className={`px-5 py-4 font-semibold uppercase tracking-widest text-xs select-none whitespace-nowrap ${col.align === "right" ? "text-right" : "text-left"} ${col.key !== "index" ? "cursor-pointer" : ""}`}
                          style={{ color: "rgba(240,248,255,0.52)" }}
                          onClick={() => {
                            handleSort(col.key);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              handleSort(col.key);
                            }
                          }}
                          tabIndex={col.key !== "index" ? 0 : undefined}
                          data-ocid={`sort-${col.key}`}
                        >
                          {col.label}
                          {col.key !== "index" && (
                            <SortIcon
                              col={col.key}
                              sortKey={sortKey}
                              sortDir={sortDir}
                            />
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((lead, idx) => (
                      <tr
                        key={String(lead.id)}
                        className="transition-smooth group"
                        style={{
                          background:
                            idx % 2 === 0
                              ? "rgba(5,8,26,0.62)"
                              : "rgba(13,18,64,0.32)",
                          borderBottom: "1px solid rgba(240,180,41,0.07)",
                        }}
                        data-ocid="lead-row"
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLTableRowElement
                          ).style.background = "rgba(240,180,41,0.05)";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLTableRowElement
                          ).style.background =
                            idx % 2 === 0
                              ? "rgba(5,8,26,0.62)"
                              : "rgba(13,18,64,0.32)";
                        }}
                      >
                        <td className="px-5 py-4">
                          <span
                            className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{
                              color: "var(--gold)",
                              background: "rgba(240,180,41,0.08)",
                            }}
                          >
                            {idx + 1}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                              style={{
                                background: "var(--gradient-gold)",
                                color: "var(--navy-darkest)",
                                fontFamily: "var(--font-display)",
                              }}
                            >
                              {lead.name.charAt(0).toUpperCase()}
                            </div>
                            <p
                              className="font-medium whitespace-nowrap"
                              style={{ color: "var(--white-text)" }}
                            >
                              {lead.name}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href={`mailto:${lead.email}`}
                            className="transition-smooth whitespace-nowrap"
                            style={{ color: "rgba(240,248,255,0.72)" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--gold)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "rgba(240,248,255,0.72)";
                            }}
                          >
                            {lead.email}
                          </a>
                        </td>
                        <td
                          className="px-5 py-4 whitespace-nowrap"
                          style={{ color: "rgba(240,248,255,0.62)" }}
                        >
                          {lead.phone || "—"}
                        </td>
                        <td className="px-5 py-4">
                          {lead.service ? (
                            <span
                              className="inline-block text-xs px-3 py-1 rounded-full whitespace-nowrap"
                              style={{
                                background: "rgba(124,58,237,0.14)",
                                border: "1px solid rgba(124,58,237,0.24)",
                                color: "rgba(240,248,255,0.8)",
                              }}
                            >
                              {lead.service}
                            </span>
                          ) : (
                            <span style={{ color: "rgba(240,248,255,0.35)" }}>
                              —
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          {lead.message ? (
                            <MessageCell text={lead.message} />
                          ) : (
                            <span style={{ color: "rgba(240,248,255,0.35)" }}>
                              —
                            </span>
                          )}
                        </td>
                        <td
                          className="px-5 py-4 text-right text-xs whitespace-nowrap"
                          style={{ color: "rgba(240,248,255,0.48)" }}
                        >
                          {formatTimestamp(lead.timestamp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p
              className="mt-3 text-xs text-right"
              style={{ color: "rgba(240,248,255,0.3)" }}
            >
              {sorted.length} submission{sorted.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {/* ─── Mobile Cards ─── */}
        {!isLoading && !isError && leads.length > 0 && (
          <div className="md:hidden space-y-4" data-ocid="leads-cards">
            {sorted.map((lead, idx) => (
              <LeadCard key={String(lead.id)} lead={lead} idx={idx} />
            ))}
          </div>
        )}

        {/* ─── Footer ─── */}
        <div
          className="mt-14 text-center text-xs"
          style={{ color: "rgba(240,248,255,0.28)" }}
        >
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-smooth"
            style={{ color: "var(--gold)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--gold-light)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            }}
          >
            caffeine.ai
          </a>
        </div>
      </div>
    </div>
  );
}
