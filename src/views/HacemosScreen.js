import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col } from "react-bootstrap";
import bg from "../assets/img/brand/quehacemos.png";
import Cimg from "../assets/img/brand/Comunicacion-image.png";
import Mimg from "../assets/img/brand/Medios-de-vida.png";
import Simg from "../assets/img/brand/social.png";
import Iimg from "../assets/img/brand/infraestructura.png";
import icon1 from "../assets/img/brand/Comunicacon.svg";
import icon2 from '../assets/img/brand/Medios-de-vida-icon.svg'
import icon3 from '../assets/img/brand/Social-icon.svg'
import icon4 from '../assets/img/brand/infraestructura-icon.svg'
function HacemosScreen() {
  return (
    <div>
      <DemoNavbar />
      <section className="pt-5">
        <Container className="pt-5" style={{
                background:
                  "-webkit-linear-gradient(90deg, #fff 15%, rgba(0, 0, 0, 0) 15%), -webkit-linear-gradient(90deg, #A6CE44 85%, #FFF 66%)"
              }} fluid>
          <Row >
            <Col
              className="px-0"
              lg="6"

            >
                <Row style={{height:'100%'}}>
                    <Col className='text-center' lg='9'>
                    <h1 style={{ color: "white"}}>
                Fomentamos el crecimiento colectivo desde las fortalezas
                individuales
              </h1></Col>
                </Row>

            </Col>
            <Col lg="6" className="p-0">
              <img alt="..." src={bg} style={{ width: "100%" }}></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-5 pt-5">
        <Container className="mb-5" fluid>
          <Row className="justify-content-center text-center">
            <Col lg="8" xl='6'>
              <h2 style={{ color: "#0A81C4" }}>
                Aportar desde diferentes frentes hace la diferencia.
              </h2>
              <h2 style={{ color: "#0A81C4", fontWeight:'bold'}}> Conóce
                nuestro portafolio de proyectos</h2>
            </Col>
          </Row>
        </Container>

        <div style={{ backgroundColor: "#CEE6F3" }} className="py-5 px-3">
            <Container></Container>
          <Row className="w-100 px-5">
            <Col lg="6">
              <img alt="..." src={Cimg} style={{ width: "100%" }}></img>
            </Col>
            <Col lg="6" className="pl-5" style={{ alignSelf: "center" }}>
              <div>
                <img alt="..." src={icon1}></img>
                <h3>Comunicación</h3>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: "#fff" }} className="py-5 px-3">
          <Row className="w-100 px-5">
            <Col lg="6" className="pl-5" style={{ alignSelf: "center" }}>
              <div>
                <img alt="..." src={icon2}></img>
                <h3>Medios de vida</h3>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </Col>
            <Col lg="6">
              <img alt="..." src={Mimg} style={{ width: "100%" }}></img>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: "#CEE6F3" }} className="py-5 px-3">
          <Row className="w-100 px-5">
            <Col lg="6">
              <img alt="..." src={Simg} style={{ width: "100%" }}></img>
            </Col>
            <Col lg="6" className="pl-5" style={{ alignSelf: "center" }}>
              <div>
                <img alt="..." src={icon3}></img>
                <h3>Comunicación</h3>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </Col>
          </Row>
        </div>
        <div style={{ backgroundColor: "#fff" }} className="py-5 px-3">
          <Row className="w-100 px-5">
            <Col lg="6" className="pl-5" style={{ alignSelf: "center" }}>
              <div>
                <img alt="..." src={icon4}></img>
                <h3>Comunicación</h3>
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem.
              </p>
            </Col>
            <Col lg="6">
              <img alt="..." src={Iimg} style={{ width: "100%" }}></img>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HacemosScreen;
