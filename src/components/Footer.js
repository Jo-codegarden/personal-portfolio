import { Col, Container, Row } from "react-bootstrap";
import Message from "./Message";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container className="footer">
                <Row className="align-item-center">
                    <Message />
                    <Col size={12} sm={6} className="text-center text-sm-start">
                            <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ioana-jo-vincze-4aa9b4197/"><img src={navIcon1} alt="social icon" /></a>
                            <a href="https://github.com/Jo-codegarden"><img src={navIcon2} alt="social icon"/></a>
                            <a href="https://www.instagram.com/ioana_colors/"><img src={navIcon3} alt="social icon"/></a>
                        </div>
                        <p>Copyright ⓒ {year} Jo Vincze</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}