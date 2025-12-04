import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Style /> */}
      {/* <PopularCategories /> у нас пока нет в бекеде поп категорий и поп товаров
      <PopularGoods /> */}
      {/* <Reviews /> */}
    </main>
  );
}
