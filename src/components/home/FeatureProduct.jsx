import React, {useEffect, useState} from "react";
import ProductCard from "../common/ProductCard";
import Link from "next/link";
import ViewAllLink from "../common/VIewAllLink";
// import { useGetProductsQuery } from "../../redux/api/ProductApi";
import { useGetAllProductsShopQuery } from "../../redux/features/products/productApi";


const FeatureProduct = ({ props }) => {

   const pageSize = 8;
   const page = 1;
  //  const[products, setProducts] = useState([]);
  const {isLoading,data, error} = useGetAllProductsShopQuery({page, pageSize});

  // useEffect(() => {
  //   if(isLoading){
  //     return;
  //   }
  //   else if(data){
  //     console.log('here :',data)
  //     const productsData = data.products.map(((item) => ({
  //       _id: item._id,
  //       name: item.name,
  //       category: item.category,
  //       brand: item.brand,
  //       price: item.price,
  //       discountPrice: item.discountPrice,
  //       images: item.images,
  //       stock: item.stock,
  //       ratings: item.ratings,
  //       commentsCount: item.commentsCount,
  //       purchased: item.purchased,
  //       isNew: item.isNew,
  //       isHot: item.isHot,
  //       discount: item.discount
  //     })))
  //     setProducts(productsData);
  //   }
  //   else{
  //     console.log(error);
  //   }
  // }, [data])
  

const products = [
  {
    name: 'Crystal-Infused Highlighter',
    slug: 'crystal-infused-highlighter',
    image: '/assets/img/products/product-img-1.png',
    category: 'Makeup',
    price: 150.00,
    originalPrice: 200.00,
    sizes: ['250 ml', '500 ml', '1000 ml', '1500 ml'],
    isHot: true,
    discount: 15,
    isNew: false,
  },
  {
    name: 'Makeup Smooth Brushes',
    slug: 'makeup-smooth-brushes',
    image: '/assets/img/products/product-img-2.png',
    category: 'Makeup',
    price: 132.00,
    originalPrice: 200.00,
    sizes: [],
    isHot: false,
    discount: 0,
    isNew: true,
  },
  {
    name: 'Eyeshadow Palette',
    slug: 'eyeshadow-palette',
    image: '/assets/img/products/product-img-3.png',
    category: 'Makeup',
    price: 25.00,
    originalPrice: 30.00,
    sizes: [],
    isHot: false,
    discount: 0,
    isNew: true,
  },
  {
    name: 'Moisturizing Cream',
    slug: 'moisturizing-cream',
    image: '/assets/img/products/product-img-4.png',
    category: 'Skincare',
    price: 45.00,
    originalPrice: 50.00,
    sizes: ['50 ml', '100 ml'],
    isHot: false,
    discount: 10,
    isNew: false,
  },
  {
    name: 'Hair Conditioner',
    slug: 'hair-conditioner',
    image: '/assets/img/products/product-img-5.png',
    category: 'Hair Care',
    price: 12.00,
    originalPrice: 15.00,
    sizes: ['250 ml'],
    isHot: true,
    discount: 20,
    isNew: false,
  },
  {
    name: 'Moisturizing Cream',
    slug: 'moisturizing-cream',
    image: '/assets/img/products/product-img-4.png',
    category: 'Skincare',
    price: 45.00,
    originalPrice: 50.00,
    sizes: ['50 ml', '100 ml'],
    isHot: false,
    discount: 10,
    isNew: false,
  },
  {
    name: 'Hair Conditioner',
    slug: 'hair-conditioner',
    image: '/assets/img/products/product-img-5.png',
    category: 'Hair Care',
    price: 12.00,
    originalPrice: 15.00,
    sizes: ['250 ml'],
    isHot: true,
    discount: 20,
    isNew: false,
  },
  {
    name: 'Eyeshadow Palette',
    slug: 'eyeshadow-palette',
    image: '/assets/img/products/product-img-3.png',
    category: 'Makeup',
    price: 25.00,
    originalPrice: 30.00,
    sizes: [],
    isHot: false,
    discount: 0,
    isNew: true,
  },
];

  return (
    <div className="feature-product-section mb-110">
      <div className="container">
        <div className="section-title3">
          <h3>
            Featured <span>Products</span>{" "}
          </h3>
          <ViewAllLink lastWord={'Products'} path='shop/products' />
        </div>
        <div className="row g-4 justify-content-center">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeatureProduct;
