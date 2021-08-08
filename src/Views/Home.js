import React from "react";
import NavBar from "Components/Layout/NavBar/NavBar";
import Header from "Components/Layout/Header/Header";
import AboutSection from "Components/Layout/AboutSection/AboutSection";
import TestimonialSection from "Components/Layout/TestimonialSection/TestimonialSection";
import Footer from "Components/Layout/Footer/Footer";
export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <AboutSection></AboutSection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </>
  );
}
