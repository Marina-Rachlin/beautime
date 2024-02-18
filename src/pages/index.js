import React from "react";
import Head from "next/head";
import Script from "next/script";
import Banner from "../components/banner/Banner";
import PopularCategory from "../components/home/PopularCategory";
import ProductBanner from "../components/home/ProductBanner";
import SuggestSection from "../components/home/SuggestSection";
import OfferBanner from "../components/home/OfferBanner";
import TopSellingProduct from "../components/home/TopSellingProduct";
import BrandSection from "../components/home/BrandSection";
import BannerFooter from "../components/home/BannerFooter";
import ProductViewModal from "../components/common/ProductViewModal";
import FeatureProduct from "../components/home/FeatureProduct";


export default function Home() {

  return (
    <>
      <Head>
        <title>Beautime Global | Health & Beauty Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-81GLR4VQK9"></Script>
      <Script>
        {
          ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-81GLR4VQK9');`
        }
      </Script>
      </Head>

      <ProductViewModal />
      <Banner />
      <PopularCategory />
      <FeatureProduct />
      <ProductBanner />
      <SuggestSection />
      <OfferBanner />
      <TopSellingProduct />
      <BrandSection />
      <BannerFooter />
    </>
  );
}



