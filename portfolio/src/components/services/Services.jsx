import React from 'react'
import "./services.css"
import IconNode from "../../assets/icon-node.png"
import IconPrisma from "../../assets/icon-prisma.png"
import IconGo from "../../assets/icon-go.png"
import IconDocker from "../../assets/icon-docker.png" 
import IconHTML from "../../assets/icon-html.png"
import IconCSS from "../../assets/icon-css.png"
import IconReact from "../../assets/icon-react.png"
import IconUIUX from "../../assets/icon-ui.png"
import IconEN from "../../assets/icon-en.png"
import IconGoogle from "../../assets/icon-google.png"
import IconComm from "../../assets/icon-comm.png"



const backendData = [
  {
    id: 1,
    image: IconNode,
    title: "Node",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 8,
  },
  {
    id: 2,
    image: IconPrisma,
    title: "Prisma",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 7,
  },
  {
    id: 3,
    image: IconGo, 
    title: "Golang",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 5,
  },
  {
    id: 4,
    image: IconDocker, 
    title: "Docker",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 6,
  },
];

const frontendData = [
  {
    id: 1,
    image: IconHTML,
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 6,
  },
  {
    id: 2,
    image: IconCSS,
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 5,
  },
  {
    id: 3,
    image: IconReact, 
    title: "React",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 7,
  },
  {
    id: 4,
    image: IconUIUX, 
    title: "UIUX",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 4,
  },
];

const generalData = [
  {
    id: 1,
    image: IconEN,
    title: "English",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 9,
  },
  {
    id: 2,
    image: IconGoogle,
    title: "Googling",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
      level: 10,
  },
  {
    id: 3,
    image: IconComm, 
    title: "Communication",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
    level: 10,
  },
];

const Services = () => {
  return <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>
    <div className="backend__section">
    <h3 className="section__subtitle">Back-end proficiencies</h3>
    <div className="services__container grid">
      {backendData.map(({id, image, title, description, level}) => {
        const customClassName = `services__card ${title.toLowerCase().replace(/\s/g, '-')}`;
        return (
          <div className={customClassName} key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>

              <div className="star-container">
           
                 {[...Array(10)].map((_, index) => (
                    <span key={index} className={`star ${index < level ? 'filled' : ''}`}>&#9733;</span>
                 ))}
              </div>
          </div>
        )
      })}
    </div>
    </div>

    <div className="frontend__section">
    <h3 className="section__subtitle">Front-end proficiencies</h3>
    <div className="services__container grid">
    {frontendData.map(({id, image, title, description, level}) => {
        const customClassName = `services__card ${title.toLowerCase().replace(/\s/g, '-')}`;
        return (
          <div className={customClassName} key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>

              <div className="star-container">
           
                 {[...Array(10)].map((_, index) => (
                    <span key={index} className={`star ${index < level ? 'filled' : ''}`}>&#9733;</span>
                 ))}
              </div>
          </div>
        )
      })}
    </div>
    </div>
    
    <div className="general__section">
    <h3 className="section__subtitle">General proficiencies</h3>
    <div className="services__container grid">
    {generalData.map(({id, image, title, description, level}) => {
        const customClassName = `services__card ${title.toLowerCase().replace(/\s/g, '-')}`;
        return (
          <div className={customClassName} key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>

              <p className="services__description">{description}</p>

              <div className="star-container">
           
                 {[...Array(10)].map((_, index) => (
                    <span key={index} className={`star ${index < level ? 'filled' : ''}`}>&#9733;</span>
                 ))}
              </div>
          </div>
        )
      })}
    </div>
    </div>

  </section>;
}

export default Services