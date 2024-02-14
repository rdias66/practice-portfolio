import React from 'react'
import "./services.css"
import Image2 from "../../assets/service-1.svg"
import Image1 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"
import Image4 from "../../assets/service-3.svg" 
import Image5 from "../../assets/service-1.svg"
import Image6 from "../../assets/service-1.svg"
import Image7 from "../../assets/service-1.svg"
import Image8 from "../../assets/service-1.svg"
import Image9 from "../../assets/service-1.svg"
import Image10 from "../../assets/service-1.svg"
import Image11 from "../../assets/service-1.svg"



const backendData = [
  {
    id: 1,
    image: Image1,
    title: "Node.js",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Prisma",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3, 
    title: "Golang",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 4,
    image: Image4, 
    title: "Docker",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const frontendData = [
  {
    id: 1,
    image: Image5,
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image6,
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image7, 
    title: "React.js",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 4,
    image: Image8, 
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const generalData = [
  {
    id: 1,
    image: Image9,
    title: "English",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image10,
    title: "Googling",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image11, 
    title: "Communication skills",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

const Services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>
    <div className="backend__section">
    <h3 className="section__subtitle">Back-end proficiencies</h3>
    <div className="services__container grid">
      {backendData.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
    </div>

    <div className="frontend__section">
    <h3 className="section__subtitle">Front-end proficiencies</h3>
    <div className="services__container grid">
      {frontendData.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
    </div>
    
    <div className="general__section">
    <h3 className="section__subtitle">General proficiencies</h3>
    <div className="services__container grid">
      {generalData.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
    </div>

  </section>;
}

export default Services