"use client";
import React, { useEffect, useReducer, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cart from "../components/common/Cart";
import SelectComponent from "../components/common/SelectComponent";
import { useLoadUserQuery } from "../redux/features/api/apiSlice";
import CategoryMenuItem from "../components/header/menu/CategoryMenuItem";
import UserIcon from "../components/header/UserIcon";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

const Header = () => {
  const { data: userData } = useLoadUserQuery(undefined, {});

  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const faceLabels = [
    "Cleanser",
    "Exfoliator",
    "Serum",
    "Face Oil",
    "Sunscreen",
    "Moisturizer",
    "Chemical Peel",
    "Toner",
    "Face Mask",
    "Eye Cream",
    "Face Wash",
    "Setting Spray",
    "Concealer",
    "Exfoliant",
    "Primer",
  ];

  const bodyLabels = [
    "Body Wash",
    "Body Scrub",
    "Body Lotion",
    "Body Butter",
    "Body Oil",
    "Body Mist",
    "Body Serum",
    "Body Gel",
    "Body Cleanser",
    "Body Polish",
    "Body Balm ",
    "Shower Gel",
    "Bath Salts",
    "Exfoliating Gloves",
    "Cellilite Cream",
  ];

  const hairLabels = [
    "Shampoo",
    "Conditioner",
    "Hair Mask",
    "Hair Color",
    "Hair Treatment",
    "Hair Oil",
    "Hair Spray",
    "Hair Rollers",
    "Hair Mousse",
    "Hair Spray",
    "Hair Treatment",
    "Curling Iron",
    "Dry Shampoo",
    "Hair Detangler",
    "Hair Cream",
    "Hair Wax",
    "Hair Pomade",
    "Hair Texturizer",
  ];

  const makeupLabels = [
    "Primer",
    "Foundation",
    "Concealer",
    "Powder",
    "Blush",
    "Bronzer",
    "Highlighter",
    "Contour",
    "Eyeshadow",
    "Eyeliner",
    "Mascara",
    "Lip Balm",
    "Lipstick",
    "Lip Gloss",
    "Setting Spray",
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`header-area style-2 ${state.scrollY > 10 ? "sticky" : ""}`}
      >
        <div className="container-md position-relative  d-flex flex-nowrap align-items-center justify-content-between">
          <div className="header-logo d-lg-none d-flex">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="/assets/img/sm-logo.svg"
                />
                Beautime
              </a>
            </Link>
          </div>
          <div className="company-logo d-lg-flex d-none">
            <Link legacyBehavior href="/">
              <a>
                <img src="/assets/img/sm-logo.svg" alt="" />
                Beautime
              </a>
            </Link>
          </div>
          <div
            className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}
          >
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link legacyBehavior href="/">
                  <a>
                    <img alt="image" src="/assets/img/logo.svg" />
                  </a>
                </Link>
              </div>
            </div>

            <ul className="menu-list">
              <CategoryMenuItem category="Face" categoryLabels={faceLabels} />
              <CategoryMenuItem category="Body" categoryLabels={bodyLabels} />
              <CategoryMenuItem category="Hair" categoryLabels={hairLabels} />
              <CategoryMenuItem
                category="Makeup"
                categoryLabels={makeupLabels}
              />
            </ul>

            <div className="d-lg-none d-block">
              <form className="mobile-menu-form d-lg-none d-block pt-50">
                <div className="input-with-btn d-flex flex-column">
                  <input type="text" placeholder="Search here..." />
                  <button type="submit" className="primary-btn1 hover-btn3">
                    Search
                  </button>
                </div>
              </form>
              <form className="mobile-menu-form">
                <div className="hotline pt-40">
                  <div className="hotline-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.2333 11.1504C13.8642 10.7667 13.4191 10.5615 12.9473 10.5615C12.4794 10.5615 12.0304 10.7629 11.6462 11.1466L10.4439 12.3433C10.345 12.2901 10.2461 12.2407 10.151 12.1913C10.014 12.1229 9.88467 12.0583 9.77433 11.9899C8.64819 11.2757 7.62476 10.345 6.64319 9.14067C6.16762 8.54043 5.84804 8.03516 5.61596 7.52229C5.92793 7.23736 6.21708 6.94104 6.49861 6.65611C6.60514 6.54974 6.71167 6.43957 6.8182 6.33319C7.61715 5.5354 7.61715 4.50207 6.8182 3.70427L5.77955 2.66714C5.66161 2.54937 5.53987 2.4278 5.42573 2.30623C5.19746 2.07069 4.95777 1.82755 4.71047 1.59961C4.34143 1.2349 3.9001 1.04115 3.43595 1.04115C2.97179 1.04115 2.52286 1.2349 2.1424 1.59961L2.13479 1.60721L0.841243 2.91027C0.35426 3.39655 0.076528 3.9892 0.0156552 4.67682C-0.0756541 5.78614 0.251537 6.81947 0.502638 7.4957C1.11898 9.15587 2.03968 10.6945 3.41312 12.3433C5.07952 14.3301 7.08452 15.8991 9.37486 17.0047C10.2499 17.4187 11.4179 17.9088 12.7229 17.9924C12.8028 17.9962 12.8865 18 12.9626 18C13.8414 18 14.5795 17.6847 15.1578 17.0578C15.1616 17.0502 15.1692 17.0464 15.173 17.0388C15.3708 16.7995 15.5991 16.583 15.8388 16.3512C16.0024 16.1955 16.1698 16.0321 16.3334 15.8611C16.71 15.4698 16.9079 15.014 16.9079 14.5467C16.9079 14.0756 16.7062 13.6235 16.322 13.2436L14.2333 11.1504ZM15.5953 15.1507C15.5915 15.1545 15.5915 15.1507 15.5953 15.1507C15.4469 15.3103 15.2947 15.4547 15.1311 15.6142C14.8838 15.8498 14.6327 16.0967 14.3969 16.374C14.0126 16.7843 13.5599 16.9781 12.9664 16.9781C12.9093 16.9781 12.8484 16.9781 12.7913 16.9743C11.6614 16.9021 10.6113 16.4614 9.82379 16.0853C7.67042 15.0444 5.77955 13.5665 4.20827 11.6936C2.91092 10.1322 2.04348 8.68859 1.46899 7.13859C1.11517 6.19263 0.985816 5.45562 1.04288 4.7604C1.08093 4.31591 1.25214 3.94741 1.56791 3.63209L2.86527 2.33662C3.05169 2.16187 3.24953 2.06689 3.44356 2.06689C3.68324 2.06689 3.87728 2.21125 3.99902 2.33282L4.01044 2.34422C4.24251 2.56076 4.46318 2.78491 4.69526 3.02424C4.8132 3.14581 4.93494 3.26738 5.05669 3.39275L6.09533 4.42988C6.49861 4.83258 6.49861 5.20488 6.09533 5.60758C5.985 5.71775 5.87847 5.82792 5.76814 5.9343C5.44856 6.26101 5.14419 6.56494 4.8132 6.86126C4.80559 6.86886 4.79798 6.87266 4.79417 6.88025C4.46698 7.20697 4.52786 7.52609 4.59634 7.74263L4.60775 7.77682C4.87787 8.43026 5.25833 9.0457 5.83662 9.77891L5.84043 9.78271C6.89048 11.0744 7.99761 12.0811 9.21887 12.8523C9.37486 12.9511 9.53465 13.0309 9.68683 13.1069C9.82379 13.1752 9.95315 13.2398 10.0635 13.3082C10.0787 13.3158 10.0939 13.3272 10.1091 13.3348C10.2385 13.3994 10.3602 13.4298 10.4858 13.4298C10.8016 13.4298 10.9994 13.2322 11.0641 13.1676L12.3652 11.8684C12.4946 11.7392 12.7 11.5834 12.9397 11.5834C13.1756 11.5834 13.3696 11.7316 13.4876 11.8608L13.4952 11.8684L15.5915 13.9616C15.9834 14.3491 15.9834 14.748 15.5953 15.1507ZM9.72868 4.28172C10.7255 4.44888 11.631 4.91996 12.3538 5.64177C13.0767 6.36359 13.5446 7.26775 13.7159 8.2631C13.7577 8.51383 13.9746 8.68859 14.2219 8.68859C14.2523 8.68859 14.2789 8.68479 14.3094 8.68099C14.5909 8.6354 14.7773 8.36947 14.7317 8.08834C14.5262 6.88405 13.9555 5.78614 13.0843 4.91616C12.2131 4.04618 11.1135 3.47633 9.90749 3.27118C9.62596 3.22559 9.36344 3.41175 9.31398 3.68907C9.26452 3.9664 9.44714 4.23613 9.72868 4.28172ZM17.9922 7.94018C17.6536 5.95709 16.7176 4.15255 15.2795 2.71652C13.8414 1.28049 12.0342 0.345932 10.0483 0.00781895C9.77053 -0.0415684 9.50802 0.148383 9.45856 0.425712C9.4129 0.70684 9.59932 0.968972 9.88086 1.01836C11.6538 1.31848 13.2707 2.15807 14.5567 3.43834C15.8426 4.72241 16.6796 6.33699 16.9802 8.10734C17.022 8.35808 17.2389 8.53283 17.4862 8.53283C17.5166 8.53283 17.5432 8.52903 17.5737 8.52523C17.8514 8.48344 18.0416 8.21751 17.9922 7.94018Z" />
                    </svg>
                  </div>
                  <div className="hotline-info">
                    <span>Call Us Now</span>
                    <h6>
                      <a href="tel:+8801701111000">+880 170 1111 000</a>
                    </h6>
                  </div>
                </div>
                <div className="email pt-20 d-flex align-items-center">
                  <div className="email-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 20 20"
                    >
                      <path d="M19.9018 8.6153C19.5412 5.99522 18.1517 3.62536 16.0393 2.02707C13.9268 0.428777 11.2643 -0.267025 8.63745 0.0927308C6.01063 0.452486 3.63468 1.83833 2.03228 3.94539C0.42988 6.05245 -0.267711 8.70813 0.0929693 11.3282C0.388972 13.4966 1.38745 15.509 2.9363 17.0589C4.48516 18.6088 6.49948 19.6113 8.67243 19.9136C9.11786 19.9713 9.56656 20.0002 10.0157 20C11.8278 20.0033 13.606 19.5101 15.1563 18.5744C15.2358 18.5318 15.3058 18.4735 15.362 18.4031C15.4182 18.3326 15.4595 18.2516 15.4833 18.1648C15.5072 18.078 15.5131 17.9872 15.5007 17.8981C15.4884 17.8089 15.458 17.7232 15.4114 17.6461C15.3648 17.569 15.303 17.5021 15.2298 17.4496C15.1565 17.397 15.0733 17.3599 14.9853 17.3403C14.8972 17.3208 14.806 17.3193 14.7173 17.336C14.6287 17.3527 14.5443 17.3871 14.4694 17.4373C12.7129 18.4904 10.6392 18.8886 8.61629 18.5613C6.59339 18.2339 4.75224 17.2022 3.4197 15.6492C2.08717 14.0962 1.34948 12.1225 1.3376 10.0784C1.32573 8.03438 2.04043 6.05225 3.35483 4.48397C4.66923 2.91568 6.49828 1.86271 8.51723 1.512C10.5362 1.16129 12.6144 1.53554 14.383 2.56829C16.1515 3.60104 17.4959 5.22548 18.1776 7.1532C18.8592 9.08092 18.8338 11.1872 18.1061 13.0981C17.9873 13.4102 17.7626 13.6709 17.4711 13.8349C17.1795 13.999 16.8396 14.056 16.5104 13.996C16.1811 13.9361 15.8833 13.763 15.6687 13.5068C15.454 13.2506 15.3362 12.9275 15.3356 12.5936V5.37867C15.3356 5.2024 15.2654 5.03336 15.1404 4.90872C15.0155 4.78408 14.846 4.71406 14.6693 4.71406C14.4925 4.71406 14.3231 4.78408 14.1981 4.90872C14.0731 5.03336 14.0029 5.2024 14.0029 5.37867V6.52578C13.2819 5.70734 12.3261 5.12961 11.265 4.8708C10.204 4.61198 9.08877 4.68456 8.0704 5.07873C7.05203 5.47289 6.17966 6.16961 5.57134 7.07458C4.96303 7.97954 4.64814 9.04908 4.66929 10.1384C4.69045 11.2278 5.04663 12.2843 5.68962 13.1651C6.33262 14.0459 7.23139 14.7084 8.2643 15.0629C9.2972 15.4175 10.4144 15.4469 11.4646 15.1473C12.5149 14.8477 13.4475 14.2335 14.1362 13.3878C14.3015 13.9385 14.6358 14.4237 15.092 14.775C15.5482 15.1263 16.1033 15.326 16.6793 15.3461C17.2553 15.3662 17.8231 15.2057 18.3028 14.887C18.7825 14.5684 19.15 14.1078 19.3535 13.5699C19.9483 11.99 20.1368 10.2866 19.9018 8.6153ZM10.0051 14.0185C9.21436 14.0185 8.4414 13.7847 7.78396 13.3465C7.12651 12.9083 6.61409 12.2856 6.3115 11.5569C6.00891 10.8283 5.92974 10.0265 6.08399 9.25296C6.23825 8.47943 6.61902 7.7689 7.17813 7.21122C7.73724 6.65354 8.4496 6.27376 9.22511 6.1199C10.0006 5.96603 10.8045 6.045 11.535 6.34681C12.2655 6.64863 12.8899 7.15973 13.3292 7.8155C13.7685 8.47126 14.0029 9.24223 14.0029 10.0309C14.0019 11.0882 13.5803 12.1018 12.8308 12.8494C12.0813 13.597 11.065 14.0175 10.0051 14.0185Z" />
                    </svg>
                  </div>
                  <div className="email-info">
                    <span>Email Now</span>
                    <h6>
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                    </h6>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="nav-right position-inherit d-flex jsutify-content-end align-items-center">
            <div className="search-area">
              <div className="search-btn">
                <i className="bx bx-search" />
              </div>
              <div className="search-input">
                <div className="serch-close" />
                <form>
                  <div className="search-group">
                    <div className="form-inner">
                      <SelectComponent
                        placeholder="Al Category"
                        options={["Face", "Makeup", "Body", "Hair"]}
                      />
                    </div>
                    <div className="form-inner2">
                      <input type="text" placeholder="Search your products" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </div>
                  <div className="quick-search">
                    <h6>Quick Search :</h6>
                    <ul>
                      <li>
                        <Link legacyBehavior href="/shop">
                          <a>Face,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/shop">
                          <a>Body,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/shop">
                          <a>Makeup,</a>
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="/shop">
                          <a>Hair</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
            <div className="save-btn">
              <Link legacyBehavior href="/shop/cart">
                <a>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.0139 18H3.98532C1.86389 18 0.128174 16.2643 0.128174 14.1429V14.0143L0.513888 3.72857C0.578174 1.60714 2.31389 0 4.37103 0H13.6282C15.6853 0 17.421 1.60714 17.4853 3.72857L17.871 14.0143C17.9353 15.0429 17.5496 16.0071 16.8425 16.7786C16.1353 17.55 15.171 18 14.1425 18H14.0139ZM4.37103 1.28571C2.95675 1.28571 1.86389 2.37857 1.7996 3.72857L1.41389 14.1429C1.41389 15.5571 2.57103 16.7143 3.98532 16.7143H14.1425C14.8496 16.7143 15.4925 16.3929 15.9425 15.8786C16.3925 15.3643 16.6496 14.7214 16.6496 14.0143L16.2639 3.72857C16.1996 2.31429 15.1067 1.28571 13.6925 1.28571H4.37103Z" />
                    <path d="M8.99951 7.71427C6.49237 7.71427 4.49951 5.72141 4.49951 3.21427C4.49951 2.82855 4.75665 2.57141 5.14237 2.57141C5.52808 2.57141 5.78523 2.82855 5.78523 3.21427C5.78523 5.01427 7.19951 6.42855 8.99951 6.42855C10.7995 6.42855 12.2138 5.01427 12.2138 3.21427C12.2138 2.82855 12.4709 2.57141 12.8567 2.57141C13.2424 2.57141 13.4995 2.82855 13.4995 3.21427C13.4995 5.72141 11.5067 7.71427 8.99951 7.71427Z" />
                  </svg>
                  <span>02</span>
                </a>
              </Link>
            </div>
            <div className="save-btn">
              <Link legacyBehavior href="/shop/wishlist">
                <a>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_68_10)">
                      <path d="M16.528 2.20922C16.0674 1.71414 15.5099 1.31909 14.8902 1.04862C14.2704 0.778143 13.6017 0.638026 12.9255 0.636976C12.2487 0.637756 11.5794 0.777669 10.959 1.04803C10.3386 1.31839 9.78042 1.71341 9.31911 2.20857L9.00132 2.54439L8.68352 2.20857C6.83326 0.217182 3.71893 0.102819 1.72758 1.95309C1.63932 2.0351 1.5541 2.12032 1.47209 2.20857C-0.490696 4.32568 -0.490696 7.59756 1.47209 9.71466L8.5343 17.1622C8.77862 17.4201 9.18579 17.4312 9.44373 17.1869C9.45217 17.1789 9.46039 17.1707 9.46838 17.1622L16.528 9.71466C18.4907 7.59779 18.4907 4.32609 16.528 2.20922ZM15.5971 8.82882H15.5965L9.00132 15.7849L2.40553 8.82882C0.90608 7.21116 0.90608 4.71143 2.40553 3.09377C3.76722 1.61792 6.06755 1.52538 7.5434 2.88706C7.61505 2.95317 7.68401 3.02213 7.75012 3.09377L8.5343 3.92107C8.79272 4.17784 9.20995 4.17784 9.46838 3.92107L10.2526 3.09441C11.6142 1.61856 13.9146 1.52602 15.3904 2.8877C15.4621 2.95381 15.531 3.02277 15.5971 3.09441C17.1096 4.71464 17.1207 7.21893 15.5971 8.82882Z" />
                    </g>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="user-login">
              <UserIcon />
            </div>
            <div
              className={`sidebar-button mobile-menu-btn ${
                state.isSidebarOpen ? "active" : ""
              }`}
              onClick={toggleSidebar}
            >
              <span />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
