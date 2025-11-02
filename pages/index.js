import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Jealous Affectionate Chough</title>
          <meta property="og:title" content="Jealous Affectionate Chough" />
        </Head>
        <Navigation locale={props?.locale ?? ''}></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes hero-blob {0% {transform: translate(0, 0) scale(1);}
100% {transform: translate(-10px, 10px) scale(1.05);}}@keyframes panel-entrance {0% {opacity: 0;
transform: translateY(20px);}
100% {opacity: 1;
transform: translateY(0);}}@keyframes card-entrance {0% {opacity: 0;
transform: translateX(var(--spacing-md)) translateY(20px) scale(0.95);}
100% {opacity: 1;
transform: translateX(var(--spacing-md)) translateY(0) scale(1);}}@keyframes float-1 {0%,100% {transform: translate(0, 0);}
50% {transform: translate(10px, -10px);}}@keyframes float-2 {0%,100% {transform: translate(0, 0);}
50% {transform: translate(-10px, 10px);}}@keyframes float {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-15px) rotate(5deg);}}@keyframes float-gentle {0%,100% {transform: translateY(0);}
50% {transform: translateY(-6px);}}@keyframes card-fade-in {0% {opacity: 0;
transform: translateY(8px) scale(0.995);}
100% {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes mascot-entrance {0% {opacity: 0;
transform: translateY(20px) scale(0.9);}
100% {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes pulse {0%,100% {transform: scale(1);
opacity: 0.2;}
50% {transform: scale(1.1);
opacity: 0.3;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script defer data-name="homepage-interactions">
(function(){
  // Gallery tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button")
  const galleryFeatured = document.getElementById("panel-games")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => {
        btn.classList.remove("active")
        btn.setAttribute("aria-selected", "false")
      })

      button.classList.add("active")
      button.setAttribute("aria-selected", "true")
    })
  })

  // Testimonials carousel functionality
  const carousel = document.querySelector(".carousel")
  const prevBtn = document.querySelector(".carousel-btn-prev")
  const nextBtn = document.querySelector(".carousel-btn-next")
  const cards = document.querySelectorAll(".testimonial-card")

  if (carousel && prevBtn && nextBtn && cards.length > 0) {
    const cardWidth =
      cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap)

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      })
    })

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      })
    })
  }

  // Add floating animation trigger on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    ".feature-card, .update-card, .gallery-card"
  )
  animatedElements.forEach((el) => {
    animateOnScroll.observe(el)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <main>
          <section
            id="hero-section"
            role="region"
            aria-labelledby="hero-heading"
            className="hero-section"
          >
            <div className="hero-container">
              <div className="home-hero-panel hero-panel">
                <div className="logo-wrapper">
                  <h1 id="hero-heading" className="hero-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroTitle_Ma4eE7'),
                      }}
                    ></span>
                  </h1>
                </div>
                <p className="hero-subtitle">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('HeroSubtitle_eg5g2L'),
                    }}
                  ></span>
                </p>
                <p className="hero-body">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('HeroBody_u5OOYr'),
                    }}
                  ></span>
                </p>
                <div className="hero-cta-group">
                  <button
                    aria-label="Get Started"
                    className="btn-lg btn-primary btn"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Btn_zDJyns'),
                      }}
                    ></span>
                  </button>
                  <button
                    aria-label="Sign Up"
                    className="btn-lg btn-outline btn"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Btn_Ghtep1'),
                      }}
                    ></span>
                  </button>
                </div>
                <div className="trust-row">
                  <div className="trust-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_UD-G3k'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="trust-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HYjRCa'),
                        }}
                      ></span>
                    </span>
                  </div>
                  <div className="trust-badge">
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IHl5Vv'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="home-illustrative-card illustrative-card"
              >
                <div className="card-decoration-1 card-decoration"></div>
                <div className="card-decoration-2 card-decoration"></div>
                <div className="home-card-content card-content">
                  <div className="platform-badge">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </g>
                    </svg>
                    <h3>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-TIYxH'),
                        }}
                      ></span>
                    </h3>
                  </div>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_BzXxe_'),
                      }}
                    ></span>
                  </p>
                  <div className="card-features">
                    <div className="feature-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"></path>
                          <rect
                            x="2"
                            y="6"
                            rx="2"
                            width="20"
                            height="12"
                          ></rect>
                        </g>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NlTWcF'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="feature-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nkM48v'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="feature-item">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                          <circle r="6" cx="12" cy="8"></circle>
                        </g>
                      </svg>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_s57sZN'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                  <h1 id="hero-heading" className="hero-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('HeroTitle_HoJFiA'),
                      }}
                    ></span>
                  </h1>
                  <div className="home-platform-badge2 platform-badge">
                    <h3 className="home-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iPRDOT'),
                        }}
                      ></span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="onboarding-section"
            role="region"
            aria-labelledby="onboarding-heading"
            className="onboarding-section"
          >
            <div className="onboarding-container">
              <div className="onboarding-illustration">
                <div className="illustration-shape-1 illustration-shape"></div>
                <div className="illustration-shape-2 illustration-shape"></div>
                <div className="illustration-shape-3 illustration-shape"></div>
              </div>
              <div className="home-onboarding-content onboarding-content">
                <h2 id="onboarding-heading" className="section-title">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionTitle_H03HYP'),
                    }}
                  ></span>
                </h2>
                <p className="home-section-content section-content">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('SectionContent_dWkC2j'),
                    }}
                  ></span>
                </p>
                <div className="onboarding-cta-group">
                  <button
                    role="button"
                    aria-label="Get started"
                    className="btn-lg btn-primary btn"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Btn_YX4TBq'),
                      }}
                    ></span>
                  </button>
                  <button
                    role="button"
                    aria-label="Sign up"
                    className="btn-lg btn-outline btn"
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Btn_3pWm2Y'),
                      }}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section
            id="features-section"
            role="region"
            aria-labelledby="features-heading"
            className="features-section"
          >
            <div className="features-container">
              <h2 id="features-heading" className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_BkED_J'),
                  }}
                ></span>
              </h2>
              <div className="features-grid">
                <article className="feature-card">
                  <div className="feature-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_0fv8Zw'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2UiXM-'),
                      }}
                    ></span>
                  </p>
                </article>
                <article className="feature-card card-offset">
                  <div className="feature-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 12h4m-2-2v4m7-1h.01M18 11h.01"></path>
                        <rect x="2" y="6" rx="2" width="20" height="12"></rect>
                      </g>
                    </svg>
                  </div>
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Vr0mLH'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_IRXBSs'),
                      }}
                    ></span>
                  </p>
                </article>
                <article className="feature-card">
                  <div className="feature-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                        <circle r="6" cx="12" cy="8"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2iwvcE'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pRfYHt'),
                      }}
                    ></span>
                  </p>
                </article>
                <article className="feature-card">
                  <div className="feature-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mqThE_'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8Rsw4a'),
                      }}
                    ></span>
                  </p>
                </article>
                <article className="feature-card card-offset">
                  <div className="feature-icon">
                    <svg
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                        <circle r="2" cx="4" cy="20"></circle>
                      </g>
                    </svg>
                  </div>
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_k4MLZp'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_YUuaNI'),
                      }}
                    ></span>
                  </p>
                </article>
                <article className="feature-card feature-cta-card card-offset">
                  <h3>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_o4-d_q'),
                      }}
                    ></span>
                  </h3>
                  <p>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_9hvVHc'),
                      }}
                    ></span>
                  </p>
                  <button aria-label="Join now" className="btn-primary btn">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Btn_7ZmfyI'),
                      }}
                    ></span>
                  </button>
                </article>
                <article className="feature-trust-card feature-card">
                  <div className="trust-stats">
                    <div className="stat">
                      <span className="stat-number">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('StatNumber_yYWuyN'),
                          }}
                        ></span>
                      </span>
                      <span className="stat-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('StatLabel_eVAEle'),
                          }}
                        ></span>
                      </span>
                    </div>
                    <div className="stat">
                      <span className="stat-number">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('StatNumber_h60atl'),
                          }}
                        ></span>
                      </span>
                      <span className="stat-label">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('StatLabel_0Qxbsd'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section
            id="testimonials-section"
            role="region"
            aria-label="Depoimentos"
            className="home-testimonials-section testimonials-section"
          >
            <div className="testimonials-container">
              <h2 className="section-title">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionTitle_Q3mpHB'),
                  }}
                ></span>
              </h2>
              <p className="section-subtitle">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('SectionSubtitle_yNWI35'),
                  }}
                ></span>
              </p>
              <div role="list" aria-live="polite" className="carousel">
                <article
                  role="article"
                  aria-label="Testemunho"
                  className="home-testimonial-card1 testimonial-card"
                >
                  <div className="testimonial-avatar">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-quote">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TestimonialQuote_3McNZR'),
                        }}
                      ></span>
                    </p>
                    <div className="testimonial-author">
                      <span className="author-name">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_NLW4wX'),
                          }}
                        ></span>
                      </span>
                      <span className="author-role">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_GWvFPn'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </article>
                <article
                  role="article"
                  aria-label="Testemunho"
                  className="testimonial-card"
                >
                  <div className="testimonial-avatar">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-quote">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TestimonialQuote_CBN23j'),
                        }}
                      ></span>
                    </p>
                    <div className="testimonial-author">
                      <span className="author-name">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_l2H8ju'),
                          }}
                        ></span>
                      </span>
                      <span className="author-role">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_pNTIs2'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </article>
                <article
                  role="article"
                  aria-label="Testemunho"
                  className="testimonial-card"
                >
                  <div className="testimonial-avatar">
                    <svg
                      width="48"
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle r="4" cx="9" cy="7"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-quote">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('TestimonialQuote_oQ4WcJ'),
                        }}
                      ></span>
                    </p>
                    <div className="testimonial-author">
                      <span className="author-name">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorName_AmtlXM'),
                          }}
                        ></span>
                      </span>
                      <span className="author-role">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('AuthorRole_S6FRSK'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <div className="carousel-controls"></div>
            </div>
          </section>
        </main>
        <Footer locale={props?.locale ?? ''}></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container9">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon58"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text31">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          .home-hero-panel {
            width: 651px;
          }
          .home-illustrative-card {
            height: 619px;
          }
          .home-card-content {
            width: 481px;
            height: 587px;
          }
          .home-platform-badge2 {
            width: 174px;
            height: 58px;
          }
          .home-text18 {
            width: 96px;
            height: 39px;
          }
          .home-onboarding-content {
            height: 598px;
            padding-top: 0px;
            padding-bottom: 0px;
          }
          .home-section-content {
            text-align: left;
          }
          .home-testimonials-section {
            padding-right: 0px;
          }
          .home-testimonial-card1 {
            width: 354px;
          }
          .home-container9 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon58 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text31 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
