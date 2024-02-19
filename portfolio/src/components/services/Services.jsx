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
      "Web application development and maintenance with containerization and integration for databases and other services.",
    level: 4,
  },
  {
    id: 2,
    image: IconPrisma,
    title: "Prisma",
    description:
      "Experience in creating CRUD applications and dynamic development for direct problem-solving and specific rule-focused scenarios.",
    level: 4,
  },
  {
    id: 3,
    image: IconGo, 
    title: "Golang",
    description:
      "Web application development and maintenance similar to the services provided in Node.",
    level: 3,
  },
  {
    id: 4,
    image: IconDocker, 
    title: "Docker",
    description:
      "Direct containerization for development, testing, and deployment.",
    level: 4,
  },
];

const frontendData = [
  {
    id: 1,
    image: IconHTML,
    title: "HTML",
    description:
      "Full understanding of advanced functionalities and utilities regarding HTML.",
    level: 3,
  },
  {
    id: 2,
    image: IconCSS,
    title: "CSS",
    description:
      "Full understanding of intermediate functionalities and utilities regarding CSS.",
    level: 3,
  },
  {
    id: 3,
    image: IconReact, 
    title: "React",
    description:
      "Experience creating responsive SPAs, MPAs, and general components with React.",
    level: 4,
  },
  {
    id: 4,
    image: IconUIUX, 
    title: "UIUX",
    description:
      "Basic knowledge for dynamic and practical development.",
    level: 2,
  },
];

const generalData = [
  {
    id: 1,
    image: IconEN,
    title: "English",
    description:
      "Fluent English skills, both spoken and written, with professional experience using English in the work environment.",
    level: 5,
  },
  {
    id: 2,
    image: IconGoogle,
    title: "Googling",
    description:
      "Learning and researching any necessary and complementary topics regarding a subject. Always striving to learn independently, asking questions and seeking assistance only when absolutely necessary.",
      level: 5,
  },
  {
    id: 3,
    image: IconComm, 
    title: "Communication",
    description:
      "Communicative and outspoken, always ready to listen and understand the topics and culture of the team. Ready to follow as well as lead.",
    level: 5,
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
           
                 {[...Array(5)].map((_, index) => (
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
           
                 {[...Array(5)].map((_, index) => (
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
           
                 {[...Array(5)].map((_, index) => (
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