import React from "react";
import { NavBar } from "./NavBar";
import CarouselComponent from "./Carousel";
import { Button } from "flowbite-react";

export const LandingPage = () => {
  function reservation(){
    window.location.href = '/reservation';
  }
  return (
    <div className="flex flex-col space-y-10
    justify-center items-center">
      <div className="w-full">
        <NavBar/>
      </div>
      <div>
        <CarouselComponent />
      </div>
      <div>
        <Button onClick={reservation}>
          Reserva Ahora
        </Button>
      </div>
    </div>
  );
}

export const AboutPage = () => {
  return (
    <NavBar />
  );
}

export const ActivitiesPage = () => {
  return (
    <NavBar />
  );
}

export const ContactPage = () => {
  return (
    <NavBar />
  );
}
