import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useAddLead } from "../hooks/useQueries";

/* ═══ DATA ═══ */
const SERVICES = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Portfolio, business, landing pages — responsive, blazing fast.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Modern, purposeful interfaces aligned with your brand identity.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Speed, SEO, and Core Web Vitals — built to rank and convert.",
  },
  {
    icon: "🛠",
    title: "Custom Solutions",
    desc: "Tailored features, API integrations, and scalable systems.",
  },
  {
    icon: "📈",
    title: "SEO & Marketing",
    desc: "Rank higher, attract more visitors, and grow your audience.",
  },
  {
    icon: "📱",
    title: "Mobile-First Design",
    desc: "Flawless, pixel-perfect experience on every device and screen.",
  },
];

const WHY_ITEMS = [
  {
    icon: "💰",
    title: "Affordable Quality",
    desc: "Enterprise-grade quality at startup-friendly rates.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "3x faster turnaround without compromising on quality.",
  },
  {
    icon: "🎯",
    title: "Client Focus",
    desc: "Your vision and goals drive every decision we make.",
  },
  {
    icon: "🧱",
    title: "Modern Stack",
    desc: "Built with cutting-edge technologies for future-proof results.",
  },
  {
    icon: "📐",
    title: "Scalable Solutions",
    desc: "Architecture designed to grow as your business expands.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "We stay with you after launch — always responsive, always caring.",
  },
];

const STATS = [
  { num: "100+", label: "Happy Clients" },
  { num: "50+", label: "Projects Done" },
  { num: "3x", label: "Faster Delivery" },
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
      "3-Day Delivery",
    ],
    cta: "Get Started",
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
      "1 Month Support",
    ],
    cta: "Most Popular →",
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
      "Ongoing Maintenance",
    ],
    cta: "Contact Us",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Understand",
    desc: "Discover your vision, goals & requirements",
  },
  {
    num: "02",
    title: "Plan & Design",
    desc: "Strategy, wireframes & UI/UX design",
  },
  { num: "03", title: "Develop", desc: "Build with clean, scalable code" },
  { num: "04", title: "Launch", desc: "Optimize, test & go live" },
  { num: "05", title: "Scale", desc: "Ongoing support & growth" },
];

const SERVICE_OPTIONS = [
  "Website Development",
  "UI/UX Design",
  "Performance Optimization",
  "Custom Solution",
  "SEO & Marketing",
  "Full Package",
];

/* ═══ SUB-COMPONENTS ═══ */
function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs uppercase tracking-[3px] font-semibold mb-4"
      style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
    >
      {children}
    </span>
  );
}

function AuroraOrbs() {
  return (
    <>
      <div
        className="absolute rounded-full pointer-events-none animate-float-orb"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(124,58,237,0.14) 0%, transparent 70%)",
          top: -120,
          right: -100,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, rgba(240,180,41,0.1) 0%, transparent 70%)",
          bottom: 0,
          left: -60,
          filter: "blur(60px)",
          animation: "orbFloat 6s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          background:
            "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "20%",
          right: "30%",
          filter: "blur(50px)",
          animation: "orbFloat 10s ease-in-out infinite",
        }}
      />
    </>
  );
}

/* ═══ CONTACT FORM ═══ */
function ContactForm() {
  const addLead = useAddLead();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await addLead.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setError(
        "Something went wrong. Please try again or contact us directly.",
      );
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(13,18,64,0.6)",
    border: "1px solid rgba(240,180,41,0.15)",
    borderRadius: "0.75rem",
    color: "var(--white-text)",
    padding: "14px 18px",
    fontSize: "0.92rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.25s",
  };

  if (submitted) {
    return (
      <div className="glass-card p-12 text-center" data-ocid="contact-success">
        <div className="text-5xl mb-5">✅</div>
        <h3
          className="text-2xl font-black mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
        >
          Message Received!
        </h3>
        <p className="font-light mb-6" style={{ color: "var(--muted-text)" }}>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 rounded-full font-bold text-sm transition-smooth"
          style={{
            background: "var(--gold)",
            color: "var(--navy-darkest)",
            fontFamily: "var(--font-display)",
          }}
        >
          Send Another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-9 flex flex-col gap-5"
      data-ocid="contact-form"
    >
      <div>
        <label
          htmlFor="contact-name-input"
          className="block text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--gold)" }}
        >
          Full Name
        </label>
        <input
          id="contact-name-input"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          data-ocid="contact-name"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
          }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email-input"
            className="block text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--gold)" }}
          >
            Email
          </label>
          <input
            id="contact-email-input"
            name="email"
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            data-ocid="contact-email"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
            }}
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone-input"
            className="block text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "var(--gold)" }}
          >
            Phone
          </label>
          <input
            id="contact-phone-input"
            name="phone"
            type="tel"
            placeholder="+91 00000 00000"
            value={form.phone}
            onChange={handleChange}
            style={inputStyle}
            data-ocid="contact-phone"
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
            }}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-service-select"
          className="block text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--gold)" }}
        >
          Service / Package
        </label>
        <select
          id="contact-service-select"
          name="service"
          value={form.service}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: "pointer" }}
          data-ocid="contact-service"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
          }}
        >
          <option value="" style={{ background: "#0d1240" }}>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} style={{ background: "#0d1240" }}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="contact-message-textarea"
          className="block text-xs font-semibold uppercase tracking-widest mb-2"
          style={{ color: "var(--gold)" }}
        >
          Message
        </label>
        <textarea
          id="contact-message-textarea"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project…"
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
          data-ocid="contact-message"
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.5)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "rgba(240,180,41,0.15)";
          }}
        />
      </div>
      {error && <p className="text-sm text-red-400 font-light">{error}</p>}
      <button
        type="submit"
        disabled={addLead.isPending}
        data-ocid="contact-submit"
        className="w-full py-4 rounded-full font-black text-sm transition-smooth"
        style={{
          background: addLead.isPending
            ? "rgba(240,180,41,0.4)"
            : "var(--gold)",
          color: "var(--navy-darkest)",
          fontFamily: "var(--font-display)",
          boxShadow: addLead.isPending
            ? "none"
            : "0 0 30px rgba(240,180,41,0.3)",
          cursor: addLead.isPending ? "not-allowed" : "pointer",
        }}
      >
        {addLead.isPending ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}

/* ═══ PAGE ═══ */
export default function HomePage() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  /* Custom cursor */
  useEffect(() => {
    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frame: number;

    const onMove = (e: MouseEvent) => {
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

  /* Scroll reveals */
  useEffect(() => {
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
      { threshold: 0.08 },
    );
    for (const el of els) {
      obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ padding: "120px 5% 80px", background: "var(--navy-darkest)" }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,180,41,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,180,41,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at 60% 40%, black 30%, transparent 75%)",
          }}
        />
        <AuroraOrbs />

        <div className="relative z-10 max-w-2xl">
          <div
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest animate-fade-up"
            style={{
              background: "rgba(240,180,41,0.08)",
              border: "1px solid rgba(240,180,41,0.2)",
              color: "var(--gold)",
              backdropFilter: "blur(10px)",
              fontFamily: "var(--font-display)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: "var(--gold)" }}
            />
            Premium Digital Solutions
          </div>
          <h1
            className="font-black leading-[1.04] tracking-tight mb-7 animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.4rem)",
              fontFamily: "var(--font-display)",
            }}
          >
            Build Your
            <br />
            <span style={{ color: "var(--gold)" }}>Digital Presence.</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "1.5px var(--gold)",
                color: "transparent",
              }}
            >
              Dominate Online.
            </span>
          </h1>
          <p
            className="mb-10 leading-relaxed font-light animate-fade-up delay-200"
            style={{
              fontSize: "1.1rem",
              color: "var(--muted-text)",
              maxWidth: 520,
            }}
          >
            We help individuals, creators, and businesses turn ideas into
            powerful, high-performing websites that drive real growth.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href="#contact"
              data-ocid="hero-cta-primary"
              className="inline-block no-underline px-9 py-4 rounded-full font-bold text-sm transition-smooth"
              style={{
                background: "var(--gold)",
                color: "var(--navy-darkest)",
                fontFamily: "var(--font-display)",
                boxShadow: "0 0 32px rgba(240,180,41,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              Get Started →
            </a>
            <a
              href="#services"
              data-ocid="hero-cta-secondary"
              className="inline-block no-underline px-9 py-4 rounded-full font-semibold text-sm transition-smooth"
              style={{
                border: "1.5px solid rgba(240,180,41,0.4)",
                color: "var(--white-text)",
                fontFamily: "var(--font-display)",
                backdropFilter: "blur(5px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(240,180,41,0.4)";
                (e.currentTarget as HTMLElement).style.color =
                  "var(--white-text)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              View Services
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-14 right-[5%] z-10 flex gap-10 animate-fade-up delay-400 max-sm:hidden">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black"
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {s.num}
              </div>
              <div
                className="text-[0.7rem] uppercase tracking-widest mt-1"
                style={{ color: "var(--muted-text)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-mid)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 80% 50%, rgba(124,58,237,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal-left">
            <SectionTag>About Us</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              About <span style={{ color: "var(--gold)" }}>Webora</span>
            </h2>
            <p
              className="leading-relaxed font-light mb-5"
              style={{ color: "var(--muted-text)", fontSize: "1.02rem" }}
            >
              Webora Digital Solutions is dedicated to helping individuals,
              creators, startups, and businesses build a powerful and
              professional online presence.
            </p>
            <p
              className="leading-relaxed font-light mb-5"
              style={{ color: "var(--muted-text)", fontSize: "1.02rem" }}
            >
              We combine design, performance, and strategy to create visually
              stunning and highly effective digital experiences — transforming
              ideas into scalable digital products.
            </p>
            <p
              className="leading-relaxed font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.02rem" }}
            >
              We believe technology should be accessible to everyone. That's why
              we provide{" "}
              <strong style={{ color: "var(--gold)", fontWeight: 600 }}>
                affordable, high-quality, and impactful
              </strong>{" "}
              solutions for every budget.
            </p>
          </div>
          <div className="reveal-right relative">
            <div className="glass-card glass-card-top-border p-10 animate-float-card">
              <div className="text-5xl mb-6">🌐</div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From Idea to Digital Reality
              </h3>
              <p
                className="leading-relaxed font-light"
                style={{ color: "var(--muted-text)", fontSize: "0.95rem" }}
              >
                We handle everything — from initial concept and UX strategy to
                pixel-perfect development and launch. Your vision, expertly
                executed.
              </p>
            </div>
            <div
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm"
              style={{
                background: "var(--gradient-gold)",
                color: "var(--navy-darkest)",
                fontFamily: "var(--font-display)",
                boxShadow: "0 20px 60px rgba(240,180,41,0.4)",
              }}
            >
              ✨ Premium Quality. Affordable Price.
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section
        id="mission"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-darkest)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>Mission & Vision</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                label: "🎯 Our Mission",
                title: "Accessible Digital Excellence",
                text: "To make high-quality digital solutions accessible, affordable, and impactful for everyone — from solo creators to growing enterprises.",
              },
              {
                label: "🔭 Our Vision",
                title: "A Global Digital Ecosystem",
                text: "To build a global ecosystem where anyone can launch, grow, and monetize their online presence — breaking barriers and creating opportunity.",
              },
            ].map((m, i) => (
              <div
                key={m.title}
                className="glass-card glass-card-top-border p-11 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div
                  className="text-xs uppercase tracking-[2px] font-bold mb-5"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {m.label}
                </div>
                <h3
                  className="text-2xl font-black mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {m.title}
                </h3>
                <p
                  className="leading-[1.8] font-light"
                  style={{ color: "var(--muted-text)", fontSize: "0.95rem" }}
                >
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section
        id="services"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-mid)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 20% 60%, rgba(240,180,41,0.05) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>What We Do</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              Our Services
            </h2>
            <p
              className="max-w-lg mx-auto font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              Everything you need to build, launch, and scale your digital
              presence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                data-ocid={`service-card-${i}`}
                className="glass-card p-9 transition-smooth reveal cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 20px 60px rgba(240,180,41,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span className="text-4xl block mb-5">{s.icon}</span>
                <h3
                  className="font-bold mb-3 text-lg"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: "var(--muted-text)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section
        id="why"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-darkest)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>Why Webora</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              Why Choose Us
            </h2>
            <p
              className="font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              Six reasons businesses trust Webora to power their digital growth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ITEMS.map((w, i) => (
              <div
                key={w.title}
                data-ocid={`why-card-${i}`}
                className="glass-card p-9 transition-smooth reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.4)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 40px rgba(240,180,41,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <span className="text-4xl block mb-4">{w.icon}</span>
                <h3
                  className="font-bold text-base mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--gold)",
                  }}
                >
                  {w.title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: "var(--muted-text)" }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        id="pricing"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-mid)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(240,180,41,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>Pricing</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              className="font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              No hidden fees. No surprises. Just great value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {PRICING.map((p, i) => (
              <div
                key={p.tier}
                data-ocid={`pricing-${p.tier.toLowerCase()}`}
                className="glass-card flex flex-col reveal transition-smooth"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  transform: p.featured ? "scale(1.04)" : "scale(1)",
                  border: p.featured
                    ? "2px solid rgba(240,180,41,0.6)"
                    : "1px solid rgba(240,180,41,0.12)",
                  boxShadow: p.featured
                    ? "0 0 70px rgba(240,180,41,0.2)"
                    : "none",
                  padding: "2.5rem",
                }}
                onMouseEnter={(e) => {
                  if (!p.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(240,180,41,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 40px rgba(240,180,41,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!p.featured) {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(240,180,41,0.12)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-sm font-bold uppercase tracking-[2px]"
                    style={{
                      color: "var(--gold)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {p.tier}
                  </span>
                  {p.badge && (
                    <span
                      className="text-[0.65rem] font-black uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{
                        background: "var(--gold)",
                        color: "var(--navy-darkest)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <span
                    className="text-4xl font-black"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="ml-2 text-sm font-light"
                    style={{ color: "var(--muted-text)" }}
                  >
                    {p.note}
                  </span>
                </div>
                <ul className="flex-1 flex flex-col gap-3 mb-8">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm font-light"
                      style={{ color: "var(--muted-text)" }}
                    >
                      <span style={{ color: "var(--gold)", flexShrink: 0 }}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  data-ocid={`pricing-cta-${p.tier.toLowerCase()}`}
                  className="block text-center no-underline py-3.5 rounded-full font-bold text-sm transition-smooth"
                  style={
                    p.featured
                      ? {
                          background: "var(--gold)",
                          color: "var(--navy-darkest)",
                          fontFamily: "var(--font-display)",
                          boxShadow: "0 0 28px rgba(240,180,41,0.35)",
                        }
                      : {
                          border: "1.5px solid rgba(240,180,41,0.35)",
                          color: "var(--white-text)",
                          fontFamily: "var(--font-display)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (p.featured) {
                      (e.currentTarget as HTMLElement).style.background =
                        "#fff";
                    } else {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--gold)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--navy-darkest)";
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    if (p.featured) {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--gold)";
                    } else {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--white-text)";
                    }
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section
        id="process"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-darkest)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(240,180,41,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>How It Works</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              Our Process
            </h2>
            <p
              className="font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              A clear, transparent workflow from idea to launch.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                className="flex-1 px-6 py-9 text-center relative reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 text-2xl z-10"
                    style={{ color: "var(--gold)" }}
                  >
                    →
                  </span>
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg mx-auto mb-5 transition-smooth"
                  style={{
                    border: "2px solid var(--gold)",
                    color: "var(--gold)",
                    background: "rgba(240,180,41,0.06)",
                    fontFamily: "var(--font-display)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--gold)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--navy-darkest)";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 30px rgba(240,180,41,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(240,180,41,0.06)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--gold)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold mb-2 text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm font-light"
                  style={{ color: "var(--muted-text)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section
        id="team"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-mid)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.06) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>Our Team</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              The Builders Behind Webora
            </h2>
            <p
              className="font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              Two passionate founders united by a mission to make digital
              excellence accessible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-3xl mx-auto">
            {[
              {
                initials: "SK",
                name: "S. Sai Krishna",
                role: "Founder",
                bio: "A visionary entrepreneur passionate about innovation and technology, leading Webora with the mission to empower individuals and businesses through strong digital presence.",
              },
              {
                initials: "SV",
                name: "Suvaabann",
                role: "Technical Founder",
                bio: "A student entrepreneur and tech-driven builder responsible for development, system design, and execution — focused on building modern, scalable, high-performance digital solutions.",
              },
            ].map((member, i) => (
              <div
                key={member.name}
                data-ocid={`team-card-${i}`}
                className="glass-card p-11 text-center relative transition-smooth reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 50px rgba(240,180,41,0.12)";
                  const a = (
                    e.currentTarget as HTMLElement
                  ).querySelector<HTMLElement>(".team-accent");
                  if (a) {
                    a.style.opacity = "1";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(240,180,41,0.12)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  const a = (
                    e.currentTarget as HTMLElement
                  ).querySelector<HTMLElement>(".team-accent");
                  if (a) {
                    a.style.opacity = "0";
                  }
                }}
              >
                <div
                  className="team-accent absolute bottom-0 left-0 right-0 h-[3px] transition-smooth"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--gold), rgba(6,182,212,0.8), transparent)",
                    opacity: 0,
                  }}
                />
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-5"
                  style={{
                    background: "var(--gradient-gold)",
                    color: "var(--navy-darkest)",
                    fontFamily: "var(--font-display)",
                    boxShadow: "0 0 40px rgba(240,180,41,0.3)",
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  className="font-bold text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <div
                  className="text-[0.75rem] uppercase tracking-[1.5px] font-semibold mb-5"
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {member.role}
                </div>
                <p
                  className="text-sm leading-[1.75] font-light"
                  style={{ color: "var(--muted-text)" }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="relative overflow-hidden"
        style={{ padding: "100px 5%", background: "var(--navy-darkest)" }}
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <div className="text-center mb-16 reveal">
            <SectionTag>Get In Touch</SectionTag>
            <h2
              className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-1.5px",
              }}
            >
              Let's Build Something{" "}
              <span style={{ color: "var(--gold)" }}>Great</span>
            </h2>
            <p
              className="font-light"
              style={{ color: "var(--muted-text)", fontSize: "1.05rem" }}
            >
              Reach out and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-5xl mx-auto items-start">
            {/* Left — contact info */}
            <div className="reveal-left">
              <h3
                className="text-xl font-black mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "sai.krishna.2008a3@gmail.com",
                    href: "mailto:sai.krishna.2008a3@gmail.com",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "suvaabann@gmail.com",
                    href: "mailto:suvaabann@gmail.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 91107 66102",
                    href: "tel:+919110766102",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "+91 90147 31107",
                    href: "tel:+919014731107",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Chat with Sai Krishna",
                    href: "https://wa.me/919110766102",
                  },
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "Chat with Suvaabann",
                    href: "https://wa.me/919014731107",
                  },
                  {
                    icon: "🔗",
                    label: "LinkedIn",
                    value: "v-suvaabann-6321313b1",
                    href: "https://www.linkedin.com/in/v-suvaabann-6321313b1",
                  },
                ].map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    data-ocid={`contact-info-${c.label.toLowerCase()}`}
                    className="flex items-center gap-4 no-underline group transition-smooth"
                  >
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-smooth"
                      style={{
                        background: "rgba(240,180,41,0.08)",
                        border: "1px solid rgba(240,180,41,0.15)",
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <div
                        className="text-[0.68rem] uppercase tracking-widest font-semibold mb-0.5"
                        style={{ color: "var(--gold)" }}
                      >
                        {c.label}
                      </div>
                      <div
                        className="text-sm font-light transition-smooth"
                        style={{ color: "var(--white-text)" }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — contact form */}
            <div className="reveal-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: "80px 5%",
          background: "var(--navy-mid)",
          borderTop: "1px solid rgba(240,180,41,0.08)",
        }}
      >
        <div className="text-center reveal">
          <h2
            className="text-3xl lg:text-4xl font-black mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Build Something{" "}
            <span style={{ color: "var(--gold)" }}>Amazing?</span>
          </h2>
          <p className="font-light mb-8" style={{ color: "var(--muted-text)" }}>
            Let's turn your vision into a powerful digital reality.
          </p>
          <a
            href="#contact"
            data-ocid="home-cta"
            className="inline-block no-underline px-10 py-4 rounded-full font-black text-sm transition-smooth"
            style={{
              background: "var(--gold)",
              color: "var(--navy-darkest)",
              fontFamily: "var(--font-display)",
              boxShadow: "0 0 40px rgba(240,180,41,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Start Your Project →
          </a>
        </div>
      </section>
    </>
  );
}
