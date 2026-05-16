import { useState, useLayoutEffect, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────
function IconFinova() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <path d="M3 9h18M9 21V9"/>
    </svg>
  )
}
function IconFlutter() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.5 2L4 12l3.5 3.5L20 3l-6.5-1z"/>
      <path d="M7.5 15.5L12 20l8-5-4.5-4.5-8 5z"/>
    </svg>
  )
}
function IconReact() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  )
}
function IconServer() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  )
}
function IconFire() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z"/>
      <path d="M12 12c0 3-2 4-2 6a2 2 0 004 0c0-2-2-3-2-6z"/>
    </svg>
  )
}
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

// ─── Card Data ────────────────────────────────────────────────────────────────
const CARDS = [
  {
    id: 'finova',
    title: 'Finova',
    tagline: 'Offline-first personal finance & investment tracking app built with Flutter for iOS & Android.',
    category: 'Featured Project',
    Icon: IconFinova,
    slotClass: 'bento-slot--1',
    accentHue: 'accent',
    previewTech: ['Flutter', 'Provider', 'Drift (SQLite)', 'Firebase'],
    overview:
      'Finova is a modern fintech-style mobile application focused on expense tracking, investment portfolio management, and financial analytics. Built entirely with Flutter, it combines a clean UI with scalable architecture, offline-first persistence, and synchronized cloud data via Firebase and SQLite. Users can track daily expenses, categorize transactions, monitor mock stock & crypto investments, view spending analytics, and access all data offline with automatic cloud sync.',
    approach:
      'Built using Clean Architecture with a feature-first modular structure to ensure scalability, maintainability, and separation of concerns. The app follows an MVVM pattern powered by Provider for reactive state management and dependency-driven UI updates. The data layer is designed around an offline-first strategy — local Drift (SQLite) persistence acts as the primary source while Firebase handles cloud synchronization and backup.',
    architectureNote:
      'Feature-first modular architecture · MVVM pattern · Provider state management · Repository abstraction · Drift (SQLite) offline persistence · Firebase Authentication · Cloud Firestore sync · Dependency Injection · Offline-first data flow',
    challenges: [
      'Designed a scalable offline-first architecture using Drift (SQLite) with Firebase synchronization',
      'Implemented financial analytics — expense aggregation, category filtering, and investment profit/loss calculations',
      'Built a modular repository-driven data layer supporting local caching and future API integrations',
      'Simulated dynamic investment price updates for stock & crypto portfolios without live market APIs',
      'Structured the app with reusable widgets, centralized theming, and feature isolation for long-term scalability',
    ],
    results: [
      'Production-style fintech architecture with scalable feature modules',
      'Fully offline-capable financial tracking experience',
      'Clean, maintainable codebase following industry-standard architecture principles',
      'Real-time-ready sync structure prepared for future cloud expansion',
      'Responsive cross-platform UI optimized for Android & iOS',
    ],
  },
  {
    id: 'flutter-eng',
    title: 'Flutter Engineering',
    tagline: 'Deep architecture expertise — clean, scalable, testable Flutter from day one.',
    category: 'Core Expertise',
    Icon: IconFlutter,
    slotClass: 'bento-slot--2',
    accentHue: 'accent',
    previewTech: ['Flutter', 'Dart', 'BLoC', 'Clean Arch'],
    overview:
      'Six years engineering Flutter applications across fintech, health, and logistics verticals. The work covers full ownership: architecture design, state management selection, performance profiling, and final App Store submission.',
    approach:
      'Every project starts with architecture — not a screen. Feature-first structure, clearly bounded dependencies, and a testing strategy agreed upfront. Animation budgets are set early and enforced through DevTools profiling.',
    architectureNote:
      'Custom widget lifecycles · render object optimization · shader pre-compilation · isolate architecture for heavy computation · dependency injection with GetIt / Riverpod',
    challenges: [
      'Custom render pipelines for high-fidelity design implementations',
      'Jank elimination on mid-range devices with complex list scrolling',
      'Memory management and leak detection in long-running session apps',
      'Multi-flavour build systems for white-label product lines',
    ],
    results: ['Consistent 60fps on mid-range Android', '8+ production apps shipped end-to-end', '80%+ test coverage across business logic', 'Zero critical regressions in release history'],
  },
  {
    id: 'react-native',
    title: 'React Native',
    tagline: 'Bridge-optimized RN with Reanimated 3 and New Architecture.',
    category: 'Technology',
    Icon: IconReact,
    slotClass: 'bento-slot--3',
    accentHue: 'accent',
    previewTech: ['React Native', 'Expo', 'TypeScript'],
    overview:
      'Production experience delivering React Native applications with native module bridging, Hermes engine configuration, and Reanimated 3 for 60fps animations that never touch the JS thread.',
    approach:
      'New Architecture (Fabric + JSI) adoption removes the async bridge bottleneck. Turbo Modules provide synchronous native access. Reanimated 3 worklets run entirely on the UI thread for fluid gesture-driven interfaces.',
    architectureNote:
      'New Architecture (Fabric/JSI) · Reanimated 3 worklets · Turbo Modules · Hermes engine · MMKV for sync storage',
    challenges: [
      'JS bridge elimination using JSI and Turbo Modules',
      'Complex gesture systems with Reanimated 3 and Gesture Handler',
      'Bundle splitting and code push for incremental OTA updates',
    ],
    results: ['5+ RN apps shipped to production', 'Bridge-free architecture on New Arch', 'Native-grade animation performance'],
  },
  {
    id: 'backend',
    title: 'Backend APIs',
    tagline: 'Mobile-first REST APIs engineered for offline sync and resilience.',
    category: 'Technology',
    Icon: IconServer,
    slotClass: 'bento-slot--4',
    accentHue: 'accent',
    previewTech: ['Node.js', 'Express', 'PostgreSQL'],
    overview:
      'End-to-end API development for mobile backends — JWT authentication, pagination, delta sync endpoints, and integration layers designed around mobile consumption patterns.',
    approach:
      'Service layer pattern with repository abstraction keeps business logic portable. Delta-sync endpoints minimize bandwidth. Rate limiting and circuit breakers protect against mobile retry storms.',
    architectureNote:
      'Service / repository pattern · JWT + refresh token auth · Delta sync endpoints · PostgreSQL with Knex · Docker + CI/CD deployment',
    challenges: [
      'Delta sync protocol for offline-first mobile clients',
      'Idempotent endpoints handling mobile network retries safely',
      'Payload optimization for low-bandwidth mobile connections',
    ],
    results: ['APIs serving 500k+ mobile requests/day', 'Sub-100ms average response time', 'Zero-downtime rolling deployments'],
  },
  {
    id: 'firebase',
    title: 'Firebase Systems',
    tagline: 'Auth, Firestore, Functions, and remote config done right.',
    category: 'Technology',
    Icon: IconFire,
    slotClass: 'bento-slot--5',
    accentHue: 'accent',
    previewTech: ['Firebase', 'Firestore', 'Cloud Functions'],
    overview:
      'Full Firebase ecosystem implementation — security rules as code, Firestore data modeling for minimal reads, and Cloud Functions for server-side business logic that mobile clients should never own.',
    approach:
      'Security rules are tested with the Firebase Emulator Suite before deployment. Firestore schemas are designed around query patterns first. Cloud Functions are composed as small, single-responsibility handlers.',
    architectureNote:
      'Emulator Suite testing · Composite indexes · Subcollection modeling · Functions composition · Remote Config feature flags',
    challenges: [
      'Firestore cost optimization through query pattern analysis and denormalization',
      'Complex security rules that enforce business logic without compromising performance',
      'Offline data consistency with Firestore optimistic updates and conflict handling',
    ],
    results: ['70% read cost reduction through query optimization', '100% rule coverage via emulator tests', 'Real-time sync at 10k+ concurrent connections'],
  },
  {
    id: 'performance',
    title: 'Performance',
    tagline: 'Frame-perfect profiling — jank removed, frame budgets enforced.',
    category: 'Specialty',
    Icon: IconZap,
    slotClass: 'bento-slot--6',
    accentHue: 'accent',
    previewTech: ['DevTools', 'Instruments', 'Android Profiler'],
    overview:
      'Systematic performance engineering for Flutter and React Native — from frame timeline analysis and shader compilation elimination to startup time reduction and memory footprint optimization.',
    approach:
      'Metrics-first cycle: establish baseline → profile production traces → identify root cause → fix → verify regression test. No guesswork, no premature optimization.',
    architectureNote:
      'Frame timeline analysis · Shader warm-up strategy · Isolate offloading · Image cache tuning · Lazy loading pipeline',
    challenges: [
      'Shader compilation jank on first interaction — eliminated via warm-up strategy',
      'ListView jank with heterogeneous item types and complex widgets',
      'Memory growth in image-heavy apps over long sessions',
    ],
    results: ['App startup 40% faster post-optimization', 'All identified jank sources eliminated', '99.8% crash-free sessions maintained'],
  },
  {
    id: 'ui-engineering',
    title: 'UI Engineering',
    tagline: 'Design systems, pixel-perfect implementation, and physics-based animation.',
    category: 'Core Expertise',
    Icon: IconLayers,
    slotClass: 'bento-slot--7',
    accentHue: 'accent',
    previewTech: ['Flutter Animations', 'Figma', 'Design Tokens'],
    overview:
      'UI engineering that treats a design system as a product in itself — token architecture, composable components, accessibility-first semantics, and animation choreography that respects platform conventions.',
    approach:
      'Design tokens are the contract between design and code. Component APIs are designed for composability before implementation begins. Custom animation controllers give precise control over physics and timing.',
    architectureNote:
      'Token-based theming package · Custom implicit/explicit animation controllers · Semantic widget tree · WCAG 2.1 AA compliance · Figma variable sync',
    challenges: [
      'Multi-step choreographed animations across screen transitions',
      'Design token maintenance synced across Figma and Flutter',
      'Accessibility compliance with custom interactive widgets',
    ],
    results: ['Design system powering 3+ product lines', 'WCAG 2.1 AA compliance achieved', 'Pixel-perfect Figma → production fidelity'],
  },
  {
    id: 'cross-platform',
    title: 'Cross Platform',
    tagline: 'One codebase, native-grade iOS and Android experiences.',
    category: 'Specialty',
    Icon: IconGlobe,
    slotClass: 'bento-slot--8',
    accentHue: 'accent',
    previewTech: ['iOS', 'Android', 'Platform Channels'],
    overview:
      'Engineering mobile products that behave natively on both iOS and Android — platform-adaptive UI patterns, native payment SDK integration, and platform channel architecture for capabilities beyond the Flutter SDK.',
    approach:
      'Platform-adaptive widgets respect iOS HIG and Material You simultaneously. MethodChannel and EventChannel bridge native SDKs. Each platform is treated as a first-class citizen, not an afterthought.',
    architectureNote:
      'Platform-adaptive widgets · MethodChannel / EventChannel patterns · Native payment SDK integration · Background service management · Deep link handling',
    challenges: [
      'Platform-specific biometric and camera permission flows',
      'Native payment SDKs (Stripe iOS / Android) with unified Flutter API',
      'Background processing with WorkManager (Android) and BGTaskScheduler (iOS)',
    ],
    results: ['Zero platform-specific critical bugs shipped', 'App Store & Play Store approvals on first submission', 'Native-equivalent UX on both platforms'],
  },
]

// ─── Spring transition config ─────────────────────────────────────────────────
const springConfig = { type: 'spring', stiffness: 210, damping: 30, mass: 1 }

// ─── Bento Card (grid item) ───────────────────────────────────────────────────
function BentoCard({ card, isSelected, onClick }) {
  return (
    <div className={`bento-slot ${card.slotClass}`}>
      <motion.div
        layoutId={`bento-card-${card.id}`}
        className="bento-card glass"
        style={{ visibility: isSelected ? 'hidden' : 'visible' }}
        onClick={onClick}
        whileHover={{ y: -5, transition: { duration: 0.35, ease: 'easeOut' } }}
        transition={springConfig}
      >
        <div className="bento-card__header">
          <div className="bento-card__icon">
            <card.Icon />
          </div>
          <span className="bento-card__category">{card.category}</span>
        </div>

        <h3 className="bento-card__title">{card.title}</h3>
        <p className="bento-card__tagline text-secondary">{card.tagline}</p>

        <div className="bento-card__footer">
          <ul className="bento-card__pills">
            {card.previewTech.map((t) => (
              <li key={t} className="pill pill--sm">
                {t}
              </li>
            ))}
          </ul>
          <span className="bento-card__cta" aria-hidden>
            Explore
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </motion.div>
    </div>
  )
}

// ─── Expanded Panel (portal) ──────────────────────────────────────────────────
function BentoExpandedInner({ card, onClose }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="bento-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0.15, duration: 0.25 } }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        aria-hidden
      />

      {/* Expanded panel wrapper (not clickable — prevents close on panel click) */}
      <div className="bento-expanded-wrap" aria-modal role="dialog" aria-label={card.title}>
        <motion.div
          layoutId={`bento-card-${card.id}`}
          className="bento-expanded glass"
          transition={springConfig}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top bar */}
          <div className="bento-expanded__topbar">
            <div className="bento-expanded__topbar-left">
              <div className="bento-card__icon">
                <card.Icon />
              </div>
              <span className="bento-card__category">{card.category}</span>
            </div>
            <button
              type="button"
              className="bento-expanded__close"
              onClick={onClose}
              aria-label="Close"
            >
              <IconClose />
            </button>
          </div>

          {/* Title & tagline */}
          <h2 className="bento-expanded__title">{card.title}</h2>
          <p className="bento-expanded__tagline text-secondary">{card.tagline}</p>

          {/* Body — fades in after layout animation settles */}
          <motion.div
            className="bento-expanded__body"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            transition={{ delay: 0.28, duration: 0.45, ease: 'easeOut' }}
          >
            <div className="bento-expanded__divider" />

            {/* Overview */}
            <div className="bento-expanded__section">
              <span className="bento-expanded__label">Overview</span>
              <p className="bento-expanded__text text-secondary">{card.overview}</p>
            </div>

            <div className="bento-expanded__cols">
              {/* Engineering Approach */}
              <div className="bento-expanded__section">
                <span className="bento-expanded__label">Engineering Approach</span>
                <p className="bento-expanded__text text-secondary">{card.approach}</p>
              </div>

              {/* Architecture */}
              <div className="bento-expanded__section">
                <span className="bento-expanded__label">Architecture</span>
                <p className="bento-expanded__text text-secondary bento-expanded__arch">{card.architectureNote}</p>
              </div>
            </div>

            {/* Challenges */}
            <div className="bento-expanded__section">
              <span className="bento-expanded__label">Challenges Solved</span>
              <ul className="bento-expanded__list">
                {card.challenges.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="bento-expanded__divider" />

            {/* Results */}
            <div className="bento-expanded__section">
              <span className="bento-expanded__label">Results & Impact</span>
              <div className="bento-expanded__results">
                {card.results.map((r) => (
                  <div key={r} className="bento-expanded__result-item">
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bento-expanded__section">
              <span className="bento-expanded__label">Technologies</span>
              <div className="bento-expanded__tech">
                {card.previewTech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

function BentoExpanded(props) {
  if (typeof document === 'undefined') return null
  return createPortal(<BentoExpandedInner {...props} />, document.body)
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function BentoGrid() {
  const [selected, setSelected] = useState(null)
  const sectionRef = useRef(null)

  const selectedCard = CARDS.find((c) => c.id === selected) ?? null

  useLayoutEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined
    const ctx = gsap.context(() => {
      const slots = root.querySelectorAll('.bento-slot')
      gsap.from(slots, {
        opacity: 0,
        y: 44,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power3.out',
        stagger: { each: 0.07, from: 'start' },
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          once: true,
        },
        onComplete() {
          // Clear inline filter so no stacking context blocks backdrop-filter in Chromium
          gsap.set(slots, { filter: 'none', clearProps: 'filter' })
        },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="section bento-grid-section">
      <div className="container">
        <header className="section-header">
          <p className="section-eyebrow">Work &amp; Expertise</p>
          <h2 className="section-title">Selected work</h2>
          <p className="section-lead text-secondary">
            Projects, services, and engineering capabilities — click any card to explore the full
            case study.
          </p>
        </header>

        <div className="bento-main-grid">
          {CARDS.map((card) => (
            <BentoCard
              key={card.id}
              card={card}
              isSelected={selected === card.id}
              onClick={() => setSelected(card.id)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <BentoExpanded
            key={selectedCard.id}
            card={selectedCard}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
