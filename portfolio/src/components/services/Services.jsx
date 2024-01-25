import React from 'react'
import "./services.css"
import Image2 from "../../assets/service-1.svg"
import Image1 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"
import Image4 from "../../assets/service-3.svg" //not right

const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3, //docker logo here
    title: "Containerization",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 4,
    image: Image4, // idk , smthg good
    title: "Deployment",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];


const Services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>
  </section>;
}

export default Services