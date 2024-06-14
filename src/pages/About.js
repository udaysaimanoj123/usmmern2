import React from "react";
import Layout from "./../components/Layout/Layout";
const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to SUSSA CART At SUSSA CART, we are passionate about
            bringing you a seamless and delightful shopping experience. Our
            mission is to redefine the way you shop online, making it not just a
            transaction but an enjoyable journey. Who We Are: SUSSA CART is more
            than just an e-commerce platform; it's a destination where
            innovation meets convenience. We are a team of dedicated individuals
            committed to curating a diverse range of products, ensuring that our
            customers have access to the latest trends and timeless classics.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
