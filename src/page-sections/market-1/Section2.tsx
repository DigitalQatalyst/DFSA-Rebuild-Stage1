"use client";

import Link from "next/link"; 
import Box from "@component/Box";
import { Carousel } from "@component/carousel";
import ProductCard1 from "@component/product-cards/ProductCard1";
import CategorySectionCreator from "@component/CategorySectionCreator";
import { redirect } from "next/navigation";
// API FUNCTIONS
import api from "@utils/__api__/market-1";

export default async function Section2() {
  const products = await api.getFlashDeals();

  const responsive = [
    { breakpoint: 1279, settings: { slidesToShow: 4 } },
    { breakpoint: 959, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 500, settings: { slidesToShow: 1 } }
  ];

  // Function to handle redirection
  const handleRedirect = () => {
    redirect("/market-2");
  };

  return (
    <CategorySectionCreator iconName="light" title="Flash Deals" seeMoreLink="#">
      <Box mt="-0.25rem" mb="-0.25rem">
        <Carousel slidesToShow={4} responsive={responsive}>
          {products.map((item, ind) => (
            <Box py="0.25rem" key={ind} onClick={handleRedirect} style={{ cursor: "pointer" }}>
              <ProductCard1
                id={item.id}
                slug={item.slug}
                price={item.price}
                title={item.title}
                images={item.images}
                imgUrl={item.thumbnail}
                rating={item.rating || 4}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </CategorySectionCreator>
  );
}
