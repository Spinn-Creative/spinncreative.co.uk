import Image from "next/image";
import Hero from '@/components/Hero';
import OurServices from '@/components/OurServices';
import ClientReviews from "@/components/ClientReviews";
import Jumbotron from "@/components/Jumbotron";

export default function Home() {
  return (
    <>
    <Hero />
    <OurServices />
    <ClientReviews />
    <Jumbotron />
    </>
  );
}
