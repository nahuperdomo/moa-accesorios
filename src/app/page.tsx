import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ShippingBanner from '@/components/home/ShippingBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ShippingBanner />
    </>
  );
}
