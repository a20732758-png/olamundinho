import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="navigation-container1">
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
        @keyframes navigation-logo-shine {0%,100% {transform: translateX(-100%) translateY(-100%) rotate(45deg);}
50% {transform: translateX(100%) translateY(100%) rotate(45deg);}}@keyframes navigation-icon-bounce {0%,100% {transform: rotate(0deg) scale(1);}
25% {transform: rotate(-10deg) scale(1.2);}
50% {transform: rotate(10deg) scale(1.1);}
75% {transform: rotate(-5deg) scale(1.15);}}@keyframes navigation-btn-float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-3px);}}@keyframes navigation-mobile-slide-in {from {opacity: 0;
transform: translateX(30px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__logo, .navigation__link, .navigation__toggle, .navigation__mobile-menu, .navigation__mobile-item, .navigation__btn {
  animation: none;
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container6">
          <div className="navigation-container7">
            <Script
              html={`<script defer data-name="navigation">
(function(){
  const navToggle = document.getElementById("navToggle")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileLinks = mobileMenu.querySelectorAll(".navigation__mobile-link")

  function toggleMenu() {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
    navToggle.setAttribute("aria-expanded", !isExpanded)
    mobileMenu.classList.toggle("navigation__mobile-menu--active")

    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  navToggle.addEventListener("click", toggleMenu)

  // Close menu when clicking on a link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false")
      mobileMenu.classList.remove("navigation__mobile-menu--active")
      document.body.style.overflow = ""
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !navToggle.contains(e.target)) {
      if (navToggle.getAttribute("aria-expanded") === "true") {
        navToggle.setAttribute("aria-expanded", "false")
        mobileMenu.classList.remove("navigation__mobile-menu--active")
        document.body.style.overflow = ""
      }
    }
  })

  // Handle escape key to close menu
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      navToggle.getAttribute("aria-expanded") === "true"
    ) {
      navToggle.setAttribute("aria-expanded", "false")
      mobileMenu.classList.remove("navigation__mobile-menu--active")
      document.body.style.overflow = ""
      navToggle.focus()
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <nav id="mainNavigation" className="navigation">
          <div className="navigation__container">
            <img
              alt={props.pastedImageAlt2}
              src="/external/pastedimage-5y4m-200h-200h.png"
              className="navigation-pasted-image"
            />
            <div className="navigation__actions">
              <button className="navigation__btn btn-outline btn">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Btn_MxjysN'),
                  }}
                ></span>
              </button>
              <button className="navigation__btn btn-primary btn">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Btn_i53E3C'),
                  }}
                ></span>
              </button>
            </div>
            <button
              id="navToggle"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              className="navigation__toggle"
            >
              <span className="navigation-navigationtoggle-icon1 navigation__toggle-icon--menu">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Navigation__toggleIcon_2CBhMc'),
                  }}
                ></span>
              </span>
              <span className="navigation-navigationtoggle-icon2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Navigation__toggleIcon_buZBq9'),
                  }}
                ></span>
              </span>
            </button>
          </div>
          <div id="mobileMenu" className="navigation__mobile-menu">
            <ul className="navigation__mobile-links">
              <li className="navigation__mobile-item">
                <a href="#lessons">
                  <div className="navigation__mobile-link">
                    <span className="navigation__mobile-icon">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw(
                            'Navigation__mobileIcon_JjTm8p'
                          ),
                        }}
                      ></span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_epVm27'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#games">
                  <div className="navigation__mobile-link">
                    <span className="navigation__mobile-icon">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw(
                            'Navigation__mobileIcon_YLrVj-'
                          ),
                        }}
                      ></span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2p02rb'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#achievements">
                  <div className="navigation__mobile-link">
                    <span className="navigation__mobile-icon">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw(
                            'Navigation__mobileIcon_b4akqR'
                          ),
                        }}
                      ></span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_N2ORbK'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </li>
              <li className="navigation__mobile-item">
                <a href="#profile">
                  <div className="navigation__mobile-link">
                    <span className="navigation__mobile-icon">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw(
                            'Navigation__mobileIcon_6UkAA3'
                          ),
                        }}
                      ></span>
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__Kj1KE'),
                        }}
                      ></span>
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation__mobile-actions">
              <button className="navigation__mobile-btn btn-outline btn">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Btn_6w6Nl1'),
                  }}
                ></span>
              </button>
              <button className="navigation__mobile-btn btn-primary btn">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Btn_8lEPa5'),
                  }}
                ></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
          .navigation-container6 {
            display: none;
          }
          .navigation-container7 {
            display: contents;
          }
          .navigation-pasted-image {
            width: 76px;
            height: 100%;
          }
          .navigation-navigationtoggle-icon1 {
            top: 50%;
            left: 50%;
            display: flex;
            position: absolute;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--animation-curve-primary);
            align-items: center;
            justify-content: center;
          }
          .navigation-navigationtoggle-icon2 {
            top: 50%;
            left: 50%;
            display: flex;
            opacity: 0;
            position: absolute;
            transform: translate(-50%, -50%);
            transition: all 0.3s var(--animation-curve-primary);
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  pastedImageSrc2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3580e109-b7b8-461d-becb-1df8c805f1a4/cefba35e-e2d1-4804-a2cf-9a27de1b5438?org_if_sml=1&force_format=original',
  pastedImageAlt2: 'pastedImage',
}

Navigation.propTypes = {
  pastedImageSrc2: PropTypes.string,
  pastedImageAlt2: PropTypes.string,
}

export default Navigation
