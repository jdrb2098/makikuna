import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import convocatoriaBG from '../assets/img/IMG_2506 1.png'
function ConvocatoriasScreen() {
    return (
        <div>
            <DemoNavbar />
           <section className="pt-5">
            <Container className="pt-5 px-0" fluid>
                <Container>
                <Row>
                    <Col className="text-center">
                        <h1 style={{color:'#0A81C4', fontWeight:'bold'}}>Conoce, revisa y participa de nuestras convocatorias</h1>
                    </Col>
                </Row>
                </Container>

                <Row>
                    <img src={convocatoriaBG}></img>
                </Row>
            </Container>
           </section>

            <Footer />
        </div>
    );
}

export default ConvocatoriasScreen;
