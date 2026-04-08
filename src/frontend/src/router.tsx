import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

/* ─── Lazy page imports ─── */
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

function PageSkeleton() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--navy-darkest)" }}
    >
      <div
        className="text-3xl font-black animate-pulse"
        style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
      >
        Webora<span style={{ color: "var(--white-text)" }}>.</span>
      </div>
    </div>
  );
}

/* ─── Root route with Layout wrapper ─── */
const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageSkeleton />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

/* ─── Child routes ─── */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminPage,
});

/* ─── Route tree ─── */
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  pricingRoute,
  contactRoute,
  adminRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
