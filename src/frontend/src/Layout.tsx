import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
  { label: "Admin", path: "/admin" },
];

function WhatsAppFloat() {
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3">
      <a
        href="https://wa.me/919110766102"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp-sai"
        className="group flex items-center gap-3 no-underline animate-wa-bounce"
        title="Chat with Sai Krishna"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = "running";
        }}
      >
        <span
          className="hidden group-hover:block bg-[#25d366] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Sai Krishna
        </span>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            boxShadow: "0 8px 32px rgba(37,211,102,0.5)",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="white"
            aria-label="WhatsApp"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
      <a
        href="https://wa.me/919014731107"
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp-suvaabann"
        className="group flex items-center gap-3 no-underline"
        title="Chat with Suvaabann"
      >
        <span
          className="hidden group-hover:block bg-[#25d366] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Suvaabann
        </span>
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 opacity-80 hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, #128c7e, #075e54)",
            boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="white"
            aria-label="WhatsApp"
          >
            <title>WhatsApp</title>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
    </div>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — close menu whenever route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled ? "rgba(5,8,26,0.97)" : "rgba(5,8,26,0.80)";

  return (
    <>
      {/* ─── NAV ─── */}
      <nav
        data-ocid="nav"
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-300"
        style={{
          padding: scrolled ? "10px 5%" : "16px 5%",
          background: navBg,
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(240,180,41,0.09)",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-black text-2xl tracking-tight no-underline"
          style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
        >
          Webora<span style={{ color: "var(--white-text)" }}>.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0 items-center">
          {NAV_LINKS.filter((l) => l.label !== "Admin").map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  data-ocid={`nav-${link.label.toLowerCase()}`}
                  className="text-sm font-medium no-underline transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--gold)" : "var(--muted-text)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isActive
                      ? "var(--gold)"
                      : "var(--muted-text)";
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/admin"
            data-ocid="nav-admin"
            className="text-xs font-semibold no-underline px-4 py-2 rounded-full transition-smooth"
            style={{
              border: "1px solid rgba(240,180,41,0.25)",
              color: "var(--muted-text)",
              fontFamily: "var(--font-display)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(240,180,41,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--muted-text)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(240,180,41,0.25)";
            }}
          >
            Admin
          </Link>
          <Link
            to="/contact"
            data-ocid="nav-cta"
            className="text-xs font-bold no-underline px-6 py-2.5 rounded-full transition-smooth"
            style={{
              background: "var(--gold)",
              color: "var(--navy-darkest)",
              fontFamily: "var(--font-display)",
              boxShadow: "0 0 24px rgba(240,180,41,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Start Project
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          onClick={() => {
            setMobileOpen(true);
          }}
          aria-label="Open menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-[2px] rounded-sm"
              style={{ background: "var(--gold)" }}
            />
          ))}
        </button>
      </nav>

      {/* ─── MOBILE MENU ─── */}
      <div
        className="fixed inset-0 z-[1100] flex flex-col items-center justify-center gap-7 transition-transform duration-300 md:hidden"
        style={{
          background: "rgba(5,8,26,0.98)",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <button
          type="button"
          className="absolute top-6 right-6 bg-transparent border-none text-3xl cursor-pointer"
          style={{ color: "var(--gold)" }}
          onClick={() => {
            setMobileOpen(false);
          }}
          aria-label="Close menu"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
              className="text-2xl font-bold no-underline transition-colors duration-200"
              style={{
                color: isActive ? "var(--gold)" : "var(--white-text)",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </Link>
          );
        })}
        <Link
          to="/contact"
          className="mt-4 px-10 py-3.5 rounded-full font-black text-base no-underline"
          style={{
            background: "var(--gold)",
            color: "var(--navy-darkest)",
            fontFamily: "var(--font-display)",
          }}
        >
          Start Project
        </Link>
      </div>

      {/* ─── PAGE CONTENT ─── */}
      <main style={{ paddingTop: "72px" }}>{children}</main>

      {/* ─── FOOTER ─── */}
      <footer
        className="relative"
        style={{
          background: "var(--navy-mid)",
          borderTop: "1px solid rgba(240,180,41,0.08)",
          padding: "60px 5% 32px",
        }}
      >
        <div className="text-center">
          <div
            className="text-3xl font-black mb-4"
            style={{
              color: "var(--gold)",
              fontFamily: "var(--font-display)",
              letterSpacing: "-1px",
            }}
          >
            Webora<span style={{ color: "var(--white-text)" }}>.</span>
          </div>
          <p
            className="mb-8 font-light text-sm"
            style={{ color: "var(--muted-text)" }}
          >
            Build Your Digital Presence. Dominate Online.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {[
              { label: "Home", to: "/" as const },
              { label: "Services", to: "/services" as const },
              { label: "Pricing", to: "/pricing" as const },
              { label: "Contact", to: "/contact" as const },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm no-underline transition-colors duration-200"
                style={{ color: "var(--muted-text)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--muted-text)";
                }}
              >
                {link.label}
              </Link>
            ))}
            {[
              { label: "WhatsApp", href: "https://wa.me/919110766102" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/v-suvaabann-6321313b1",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm no-underline transition-colors duration-200"
                style={{ color: "var(--muted-text)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--muted-text)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <hr
            style={{
              border: "none",
              borderTop: "1px solid rgba(240,180,41,0.08)",
              marginBottom: "24px",
            }}
          />
          <p className="text-xs" style={{ color: "rgba(240,248,255,0.3)" }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "var(--gold)" }}>
              Webora Digital Solutions
            </span>
            . All rights reserved. Built with ❤️ in India. &nbsp;|&nbsp;{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "webora")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors duration-200"
              style={{ color: "rgba(240,248,255,0.3)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(240,248,255,0.3)";
              }}
            >
              Built with caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <WhatsAppFloat />
    </>
  );
}
