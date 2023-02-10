import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/img/Jo-resume.pdf";
import { FileEarmarkArrowDown } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Personal Project",
      description: "MERN Stack TODO List Application with Authentication. Using react-query, react-router-dom@6, mongoose, express, react, vite",
      imgUrl: projImg1,
      linkUrl: "https://mern-todo-app.codegarden.co.nz/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: ""
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: ""
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   linkUrl: ""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   linkUrl: ""
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   linkUrl: ""
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce": ""}>
                    <h2>Projects</h2>
                    <p>I always seek new opportunities for cooperation on projects around intersting dashboards, design systems or landing pages. Let's create something awsome together.</p>
                </div>}
            </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h4>About Me</h4>
                      <p>Hard-working, creative and proactive. Specialised in full stack web development. Ambitious, eager to keep growing and evolving in my profession. Constantly developing new skills and abilities.</p>
                      <a href={resume} download="Jo's Resume"><button>Resume <FileEarmarkArrowDown size={18} /></button> </a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Currently exploring and learning about Web3.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroung"></img>
    </section>
  )
}