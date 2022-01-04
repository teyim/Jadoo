import React,{useEffect} from "react";
import NavBar from "Components/Layout/NavBar/NavBar";
import Header from "Components/Layout/Header/Header";
import AboutSection from "Components/Layout/AboutSection/AboutSection";
import TestimonialSection from "Components/Layout/TestimonialSection/TestimonialSection";
import Footer from "Components/Layout/Footer/Footer";
import { ModalProvider } from '../Context/context';
import { useLocation } from "react-router";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
    <ModalProvider>
      <NavBar></NavBar>
      <Header></Header>
      <AboutSection></AboutSection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
      </ModalProvider>
    </>
  );
}
