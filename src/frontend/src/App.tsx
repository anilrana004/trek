import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { BottomNav } from "./components/BottomNav";
import { CallbackButton } from "./components/CallbackButton";
import { Footer } from "./components/layout/Footer";
import { Nav } from "./components/layout/Nav";
import { WhatsAppButton } from "./components/layout/WhatsAppButton";

// Global Trek pages — lazy-loaded
const TreksPageLazy = lazy(() =>
  import("./pages/TreksPage")
    .then((m) => ({ default: m.TreksPage }))
    .catch(() => ({ default: ComingSoon })),
);
const UttarakhandHubPage = lazy(() =>
  import("./pages/UttarakhandHubPage")
    .then((m) => ({ default: m.UttarakhandHubPage }))
    .catch(() => ({ default: ComingSoon })),
);
const HimachalHubPage = lazy(() =>
  import("./pages/HimachalHubPage")
    .then((m) => ({ default: m.HimachalHubPage }))
    .catch(() => ({ default: ComingSoon })),
);
const TrekDetailPage = lazy(() =>
  import("./pages/TrekDetailPage")
    .then((m) => ({ default: m.TrekDetailPage }))
    .catch(() => ({ default: ComingSoon })),
);
const YatraPage = lazy(() =>
  import("./pages/YatraPage")
    .then((m) => ({ default: m.YatraPage }))
    .catch(() => ({ default: ComingSoon })),
);
const YatraDetailPage = lazy(() =>
  import("./pages/YatraDetailPage")
    .then((m) => ({ default: m.YatraDetailPage }))
    .catch(() => ({ default: ComingSoon })),
);
const PackagesPage = lazy(() =>
  import("./pages/PackagesPage")
    .then((m) => ({ default: m.PackagesPage }))
    .catch(() => ({ default: ComingSoon })),
);
const PackageDetailPage = lazy(() =>
  import("./pages/PackageDetailPage")
    .then((m) => ({ default: m.PackageDetailPage }))
    .catch(() => ({ default: ComingSoon })),
);
const GearRentalPage = lazy(() =>
  import("./pages/GearRentalPage")
    .then((m) => ({ default: m.GearRentalPage }))
    .catch(() => ({ default: ComingSoon })),
);
const BookingPage = lazy(() =>
  import("./pages/BookingPage")
    .then((m) => ({ default: m.BookingPage }))
    .catch(() => ({ default: ComingSoon })),
);
const BookingConfirmationPage = lazy(() =>
  import("./pages/BookingConfirmationPage")
    .then((m) => ({ default: m.BookingConfirmationPage }))
    .catch(() => ({ default: ComingSoon })),
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage")
    .then((m) => ({ default: m.LoginPage }))
    .catch(() => ({ default: ComingSoon })),
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage")
    .then((m) => ({ default: m.RegisterPage }))
    .catch(() => ({ default: ComingSoon })),
);
const DashboardPage = lazy(() =>
  import("./pages/DashboardPage")
    .then((m) => ({ default: m.DashboardPage }))
    .catch(() => ({ default: ComingSoon })),
);
const MyBookingsPage = lazy(() =>
  import("./pages/MyBookingsPage")
    .then((m) => ({ default: m.MyBookingsPage }))
    .catch(() => ({ default: ComingSoon })),
);
const ProfilePage = lazy(() =>
  import("./pages/ProfilePage")
    .then((m) => ({ default: m.ProfilePage }))
    .catch(() => ({ default: ComingSoon })),
);
const BlogPostPage = lazy(() =>
  import("./pages/BlogPostPage")
    .then((m) => ({ default: m.BlogPostPage }))
    .catch(() => ({ default: ComingSoon })),
);
const GalleryPage = lazy(() =>
  import("./pages/GalleryPage")
    .then((m) => ({ default: m.GalleryPage }))
    .catch(() => ({ default: ComingSoon })),
);
const PaymentSuccessPage = lazy(() =>
  import("./pages/PaymentSuccessPage")
    .then((m) => ({ default: m.PaymentSuccessPage }))
    .catch(() => ({ default: ComingSoon })),
);
const PaymentFailedPage = lazy(() =>
  import("./pages/PaymentFailedPage")
    .then((m) => ({ default: m.PaymentFailedPage }))
    .catch(() => ({ default: ComingSoon })),
);

// Lazy-load page components
const HomePage = lazy(() =>
  import("./pages/Home").catch(() => ({ default: NotFoundPage })),
);
const TripsPage = lazy(() =>
  import("./pages/Trips").catch(() => ({ default: ComingSoon })),
);
const TripDetailPage = lazy(() =>
  import("./pages/TripDetail").catch(() => ({ default: ComingSoon })),
);
const GHTIndiaPage = lazy(() =>
  import("./pages/GHTIndia").catch(() => ({ default: ComingSoon })),
);
const WMLitePage = lazy(() =>
  import("./pages/WMLite").catch(() => ({ default: ComingSoon })),
);
const TailorMadePage = lazy(() =>
  import("./pages/TailorMade").catch(() => ({ default: ComingSoon })),
);
const AboutPage = lazy(() =>
  import("./pages/About").catch(() => ({ default: ComingSoon })),
);
const FAQsPage = lazy(() =>
  import("./pages/FAQs").catch(() => ({ default: ComingSoon })),
);
const ContactPage = lazy(() =>
  import("./pages/Contact").catch(() => ({ default: ComingSoon })),
);
const BlogPage = lazy(() =>
  import("./pages/Blog").catch(() => ({ default: NotFoundPage })),
);
const NewsPage = lazy(() =>
  import("./pages/News").catch(() => ({ default: NotFoundPage })),
);
const BookCustomTripPage = lazy(() =>
  import("./pages/BookCustomTrip").catch(() => ({ default: NotFoundPage })),
);
const BookingTermsPage = lazy(() =>
  import("./pages/BookingTerms").catch(() => ({ default: NotFoundPage })),
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicy").catch(() => ({ default: NotFoundPage })),
);
const DisclaimerPage = lazy(() =>
  import("./pages/Disclaimer").catch(() => ({ default: NotFoundPage })),
);
const PaymentInstructionsPage = lazy(() =>
  import("./pages/PaymentInstructions").catch(() => ({
    default: NotFoundPage,
  })),
);
const FixedDeparturesPage = lazy(() =>
  import("./pages/FixedDepartures").catch(() => ({ default: NotFoundPage })),
);

function PageLoader() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 36 36"
          fill="none"
          role="presentation"
          aria-hidden="true"
        >
          <path
            d="M3 30 L12 12 L18 20 L22 14 L33 30 Z"
            fill="none"
            stroke="var(--accent-blue)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--text-muted)",
          }}
        >
          Loading...
        </span>
      </div>
    </div>
  );
}

function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        gap: "20px",
        paddingTop: "var(--nav-height)",
      }}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 36 36"
        fill="none"
        role="presentation"
        aria-hidden="true"
      >
        <path
          d="M3 30 L12 12 L18 20 L22 14 L33 30 Z"
          fill="none"
          stroke="var(--accent-blue)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "36px",
          color: "var(--text-primary)",
        }}
      >
        Coming Soon
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--text-secondary)",
        }}
      >
        This page is being crafted with care.
      </p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg-primary)",
        gap: "20px",
        paddingTop: "var(--nav-height)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "80px",
          color: "var(--accent-blue)",
          lineHeight: 1,
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          fontSize: "36px",
          color: "var(--text-primary)",
        }}
      >
        Page Not Found
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "16px",
          color: "var(--text-secondary)",
        }}
      >
        The peak you're looking for doesn't exist on this route.
      </p>
      <a
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: "44px",
          padding: "0 28px",
          background: "var(--accent-blue)",
          color: "var(--text-inverse)",
          borderRadius: "var(--btn-radius)",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          fontSize: "14px",
          textDecoration: "none",
          transition: "background 150ms ease",
        }}
      >
        Back to Home
      </a>
    </div>
  );
}

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-primary)",
      }}
    >
      <Nav />
      <main style={{ flex: 1 }}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <CallbackButton />
      <BottomNav />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});
const tripsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TripsPage />
    </Suspense>
  ),
});
const tripDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trips/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TripDetailPage />
    </Suspense>
  ),
});
const ghtIndiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ght-india",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GHTIndiaPage />
    </Suspense>
  ),
});
const wmLiteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/wm-lite",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <WMLitePage />
    </Suspense>
  ),
});
const tailorMadeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/tailor-made",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TailorMadePage />
    </Suspense>
  ),
});
const fixedDeparturesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fixed-departures",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FixedDeparturesPage />
    </Suspense>
  ),
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AboutPage />
    </Suspense>
  ),
});
const faqsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faqs",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <FAQsPage />
    </Suspense>
  ),
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BlogPage />
    </Suspense>
  ),
});
const blogSlugRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BlogPostPage />
    </Suspense>
  ),
});
// Global Trek new routes
const treksRoute2 = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TreksPageLazy />
    </Suspense>
  ),
});
const uttarakhandHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/uttarakhand",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <UttarakhandHubPage />
    </Suspense>
  ),
});
const himachalHubRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/himachal-pradesh",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HimachalHubPage />
    </Suspense>
  ),
});
const uttarakhandTrekDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/uttarakhand/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TrekDetailPage />
    </Suspense>
  ),
});
const himachalTrekDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/treks/himachal-pradesh/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <TrekDetailPage />
    </Suspense>
  ),
});
const yatraRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/yatra",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <YatraPage />
    </Suspense>
  ),
});
const yatraDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/yatra/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <YatraDetailPage />
    </Suspense>
  ),
});
const packagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PackagesPage />
    </Suspense>
  ),
});
const packageDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/packages/$slug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PackageDetailPage />
    </Suspense>
  ),
});
const gearRentalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gear-rental",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GearRentalPage />
    </Suspense>
  ),
});
const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/$trekSlug",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BookingPage />
    </Suspense>
  ),
});
const bookingConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking/confirmation",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BookingConfirmationPage />
    </Suspense>
  ),
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/login",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <LoginPage />
    </Suspense>
  ),
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/register",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <RegisterPage />
    </Suspense>
  ),
});
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/dashboard",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  ),
});
const myBookingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/my-bookings",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <MyBookingsPage />
    </Suspense>
  ),
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account/profile",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ProfilePage />
    </Suspense>
  ),
});
const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gallery",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <GalleryPage />
    </Suspense>
  ),
});
const paymentSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment/success",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PaymentSuccessPage />
    </Suspense>
  ),
});
const paymentFailedRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment/failed",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PaymentFailedPage />
    </Suspense>
  ),
});
const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <NewsPage />
    </Suspense>
  ),
});
const bookCustomTripRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/book-custom-trip",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BookCustomTripPage />
    </Suspense>
  ),
});
const bookingTermsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking-terms",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <BookingTermsPage />
    </Suspense>
  ),
});
const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PrivacyPolicyPage />
    </Suspense>
  ),
});
const disclaimerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/disclaimer",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <DisclaimerPage />
    </Suspense>
  ),
});
const paymentInstructionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-instructions",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <PaymentInstructionsPage />
    </Suspense>
  ),
});
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFoundPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  // Global Trek routes (specific paths before wildcards)
  bookingConfirmationRoute,
  bookingRoute,
  uttarakhandHubRoute,
  himachalHubRoute,
  uttarakhandTrekDetailRoute,
  himachalTrekDetailRoute,
  treksRoute2,
  yatraRoute,
  yatraDetailRoute,
  packagesRoute,
  packageDetailRoute,
  gearRentalRoute,
  galleryRoute,
  loginRoute,
  registerRoute,
  dashboardRoute,
  myBookingsRoute,
  profileRoute,
  paymentSuccessRoute,
  paymentFailedRoute,
  // Legacy / existing routes
  tripsRoute,
  tripDetailRoute,
  ghtIndiaRoute,
  wmLiteRoute,
  tailorMadeRoute,
  fixedDeparturesRoute,
  aboutRoute,
  faqsRoute,
  contactRoute,
  blogRoute,
  blogSlugRoute,
  newsRoute,
  bookCustomTripRoute,
  bookingTermsRoute,
  privacyPolicyRoute,
  disclaimerRoute,
  paymentInstructionsRoute,
  notFoundRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
