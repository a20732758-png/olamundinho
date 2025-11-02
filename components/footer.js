import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer-container1">
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
        @keyframes footer-wave-animation {0%,100% {d: path(
        "M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
      );}
50% {d: path(
        "M0,20 C200,0 400,80 600,20 C800,0 1000,80 1200,20 L1200,120 L0,120 Z"
      );}}@keyframes footer-sparkle-rotate {0% {transform: rotate(0deg) scale(1);}
25% {transform: rotate(90deg) scale(1.2);}
50% {transform: rotate(180deg) scale(1);}
75% {transform: rotate(270deg) scale(1.2);}
100% {transform: rotate(360deg) scale(1);}}@keyframes footer-heart-pulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.05);}}@keyframes footer-underline-bounce {0%,100% {width: 40px;}
50% {width: 60px;}}@keyframes footer-float-1 {0%,100% {transform: translateY(0) scale(1);}
50% {transform: translateY(-20px) scale(1.1);}}@keyframes footer-float-2 {0%,100% {transform: translateY(0) rotate(0deg);}
50% {transform: translateY(-30px) rotate(180deg);}}@keyframes footer-float-3 {0%,100% {transform: rotate(15deg) translateY(0);}
50% {transform: rotate(195deg) translateY(-25px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-wave path, .footer-sparkle-rotate, .footer-heart-pulse, .footer-underline-bounce, .footer-shape-circle, .footer-shape-triangle, .footer-shape-square {
  animation: none;
}
.footer-link-item:hover, .footer-social-link:hover {
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="footer-container6">
          <div className="footer-container7">
            <Script
              html={`<script defer data-name="footer-kifit">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")
  const footerSocialLinks = document.querySelectorAll(".footer-social-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.letterSpacing = "var(--letter-spacing-friendly)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.letterSpacing = "var(--letter-spacing-normal)"
    })
  })

  footerSocialLinks.forEach((link, index) => {
    link.style.animationDelay = \`\${index * 0.1}s\`

    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href.startsWith("#")) {
        e.preventDefault()
      }
    })
  })

  const footerHeartBadge = document.querySelector(".footer-heart-badge")
  if (footerHeartBadge) {
    footerHeartBadge.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(-3deg)"
    })

    footerHeartBadge.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
    })
  }

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const footerSections = document.querySelectorAll(
    ".footer-links-section, .footer-contact-section"
  )
  footerSections.forEach((section, index) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = \`all 0.6s ease \${index * 0.1}s\`
    footerObserver.observe(section)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <footer id="footer-kifit" className="footer">
          <div className="footer-wave-container">
            <svg
              viewBox="0 0 1200 120"
              aria-hidden="true"
              preserveAspectRatio="none"
              className="footer-wave"
            >
              <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"></path>
            </svg>
          </div>
          <div className="footer-content-wrapper">
            <div className="footer-main-content">
              <div className="footer-grid">
                <div className="footer-brand-section">
                  <div className="footer-logo-container">
                    <div className="footer-logo-sparkle">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
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
                    <h2 className="footer-logo">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FooterLogo_fgi60H'),
                        }}
                      ></span>
                    </h2>
                  </div>
                  <p className="footer-tagline">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FooterTagline_Iy2AHo'),
                      }}
                    ></span>
                  </p>
                  <p className="footer-tagline">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FooterTagline_rquzKJ'),
                      }}
                    ></span>
                  </p>
                  <div className="footer-heart-badge">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
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
                          __html: translate.raw('text_bWWT2f'),
                        }}
                      ></span>
                    </span>
                  </div>
                </div>
                <div className="footer-contact-section">
                  <h3 className="footer-column-title">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FooterColumnTitle_GaIpTk'),
                      }}
                    ></span>
                  </h3>
                  <ul className="footer-contact-list">
                    <li className="footer-contact-item">
                      <div className="footer-contact-icon">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect
                              x="2"
                              y="4"
                              rx="2"
                              width="20"
                              height="16"
                            ></rect>
                          </g>
                        </svg>
                      </div>
                      <a href="mailto:hello@kifitkids.com?subject=">
                        <div className="footer-contact-link">
                          <span>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_oWPpjO'),
                              }}
                            ></span>
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-contact-item">
                      <a href="tel:+1234567890">
                        <div className="footer-footer-contact-link2 footer-contact-link"></div>
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social-container">
                    <h4 className="footer-social-title">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('FooterSocialTitle_k7qBCp'),
                        }}
                      ></span>
                    </h4>
                    <div className="footer-social-icons">
                      <a href="#instagram">
                        <div
                          aria-label="Instagram"
                          className="footer-social-link"
                        >
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="2"
                                y="2"
                                rx="5"
                                ry="5"
                                width="20"
                                height="20"
                              ></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-section">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('FooterCopyright_SVEEc7'),
                    }}
                  ></span>
                </p>
                <div className="footer-legal-links">
                  <a href="#privacy">
                    <div className="footer-legal-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_79bAcW'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <span className="footer-legal-divider">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FooterLegalDivider_zApl9f'),
                      }}
                    ></span>
                  </span>
                  <a href="#terms">
                    <div className="footer-legal-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_aAO9gX'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                  <span className="footer-legal-divider">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('FooterLegalDivider_-X3SfO'),
                      }}
                    ></span>
                  </span>
                  <a href="#cookies">
                    <div className="footer-legal-link">
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8VUD-M'),
                          }}
                        ></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div aria-hidden="true" className="footer-floating-shapes">
                <div className="footer-shape footer-shape-circle"></div>
                <div className="footer-shape footer-shape-triangle"></div>
                <div className="footer-shape footer-shape-square"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          .footer-container6 {
            display: none;
          }
          .footer-container7 {
            display: contents;
          }
          .footer-footer-contact-link2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
        `}
      </style>
    </>
  )
}

export default Footer
