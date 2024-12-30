import NavBar from "@/components/NavBar";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import AuthoreCard from "@/components/AuthoreCard";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Feature />
      <Mega />
      <AuthoreCard />
      <Footer />
    </div>
  );
}
