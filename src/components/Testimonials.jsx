import React from "react";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto px-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customers{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those who found Home with Us
      </p>
    </div>
  );
};

export default Testimonials;
