import React from "react";
import DemoNavbar from "components/navbars/DemoNavbar.js";
import Footer from "components/footers/Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
import bg from "../assets/img/brand/bg-nosotros.png";
import vision from "../assets/img/brand/Vision.png";
import mision from "../assets/img/brand/Mision.png";
import ayudamis from "../assets/img/a-quien-ayudamos.png";
import putumayo from "../assets/img/Putumayo.png";
import politicas from "../assets/img/Politicas-de-transparencia.png";
import nosotrosContact from "../assets/img/nosotros-contact.png";
import envelopIcon from "../assets/img/contact-envelop.svg";
import phoneIcon from "../assets/img/contact-phone.svg";
import smartphone from "../assets/img/smart-phone-icon.svg";
function NosotrosScreen() {
  return (
    <div>
      <DemoNavbar />
      <section className="pt-5">
        <Container className="pt-5" fluid>
          <Row className="justify-content-center">
            <Col className="text-center py-3" lg="8" xl="6">
              <h1 style={{ color: "#0A81C4", fontWeight: "bold" }}>
                Somos una fundación que crée en el empoderamiento
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className="p-0">
              <img
                alt="..."
                style={{
                  height: "55vh",
                  width: "100%",
                  objectFit: "cover",
                }}
                src={bg}
              ></img>
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{ backgroundColor: "#0A81C4" }}
          >
            <Col className="py-5" lg="6" xl="4">
              <Container>
                <p className="text-center" style={{ color: "white" }}>
                  La integración local y la generación de medios de vida,
                  mediante el acceso a la oferta local y la formación específica
                  requerida para el desarrollo personal y empresarial, aportando
                  a la disminución de las brechas y barreras para el desarrollo
                  social y económico.{" "}
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center py-5" lg="8">
              <h2 style={{ fontWeight: "bold" }}>
                Trabajamos fuertemente para asistir, proteger y empoderar a
                comunidades vulnerables
              </h2>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col lg="5">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={mision}
              ></img>
              <h3>Misión</h3>
              <p>
                La Fundación Makikuna es una ONG que reconoce e interviene la
                transformación social mediante acciones sostenibles para el
                mejoramiento de la calidad de vida de las personas desplazadas y
                vulnerables, respondiendo a las necesidades y derechos sin
                distinción de su edad, género, condición social, étnica,
                religiosa o nacionalidad.
              </p>
            </Col>
            <Col lg="5">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={vision}
              ></img>
              <h3>Visión</h3>
              <p>
                En el 2025, la Fundación Makikuna será un referente clave en el
                suroccidente y la amazonia colombiana, con procesos inclusivos e
                integrales para el desarrollo sustentable de las comunidades en
                sus territorios. La Fundación Makikuna, en nuestro compromiso
                con los territorios y comunidades contempla como ejes
                transversales; el enfoque de derechos humanos, la equidad de
                género, la educación ambiental, la gestión del riesgo, la
                política pública e incidencia institucional, trabajando en 3
                líneas específicas:
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        style={{
          background:
            "-webkit-linear-gradient(90deg, #fff 15%, rgba(0, 0, 0, 0) 15%), -webkit-linear-gradient(90deg, #A6CE44 85%, #FFF 66%)",
        }}
      >
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col lg="6">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={ayudamis}
              ></img>
            </Col>
            <Col lg="6">
              <h3>A quién ayudamos</h3>
              <p>
                Nuestras acciones están dirigidas a poblaciones con mayor
                vulnerabilidad en el territorio nacional, que incluyen:
              </p>
              <ul>
                <li type="disc">Niños, niñas, adolescentes y jóvenes</li>
                <li type="disc">Mujeres</li>
                <li type="disc">Personas LGTBIQ+</li>
                <li type="disc">Comunidades étnicas</li>
                <li type="disc">
                  Personas desplazadas y víctimas del conflicto
                </li>
                <li type="disc">Personas migrantes y refugiadas y personas</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className="text-center">
              <h2 style={{ color: "#0A81C4", fontWeight: "bold" }}>
                Nuestra área de impacto
              </h2>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col lg="8" xl="10">
              <img
                src={putumayo}
                style={{ width: "100%", objectFit: "cover" }}
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="py-4"
        style={{ backgroundColor: "#CEE6F3", display:'none'}}

      >
        <Container>
          <Row className="mt-4">
            <Col lg="6">
              <img
                src={politicas}
                style={{ width: "100%", objectFit: "cover" }}
              ></img>
            </Col>
            <Col lg="6" className="text-center">
              <h2 style={{ fontWeight: "bold" }}>Políticas de transparencia</h2>
              <p>descripcion</p>
              <Button
                style={{
                  backgroundColor: "#0A81C4",
                  color: "white",
                }}
              >
                Descarga la información aquí
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="py-4 my-4">
          <Row style={{ justifyContent: "center" }}>
            <Col className="text-center" lg="8" xl="7">
              <h2 style={{ color: "#0A81C4", fontWeight: "bold" }}>
                Calificación al Régimen Tributario Especial 2022
              </h2>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-around" }}>
            <Col lg="5">
              <p style={{ fontWeight: "400" }}>
                Para continuar recibiendo los beneficios tributarios por el
                trabajo que realizamos en Colombia y en especial en Putumayo
                desde el año 2013, en las actividades de:
              </p>
              <ul>
                <li type="disc">Grupos y comunidades étnicas</li>
                <li type="disc">Víctimas del conflicto</li>
                <li type="disc">Población Rural o Campesina</li>
                <li type="disc">
                  Personas con Necesidades de Protección Internacional
                </li>
                <li type="disc">
                  Conservación, recuperación y protección de los recursos
                  naturales
                </li>
              </ul>
              <p style={{ fontWeight: "400" }}>
                Trabajando siempre con nuestros aliados y con los niños, niñas,
                adolescentes y jóvenes en mayor riesgo del país, debemos ser
                reconocidos por la DIAN (Dirección de Impuestos y Aduanas
                Nacionales) como una organización sin ánimo de lucro que
                pertenece al Régimen Tributario Especial. Para esto, hacemos
                públicos durante 10 días, los siguientes documentos que pueden
                ser revisados por cualquier persona interesada:
              </p>
              <a  href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F1%2EInformacion%20Financiera%20a%C3%B1o%20fiscal%202021%20bajo%20NIIF%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">
                <p style={{ fontWeight: "400" }}>
                  1.Informacion Financiera año fiscal 2021 bajo NIIF.pdf
                </p>
              </a>
              <p style={{ fontWeight: "400" }}>
                <span>
                  <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F2%20Certificado%20de%20cumplimiento%20de%20los%20requisitos%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">2 Certificado de cumplimiento de los requisitos.pdf: </a>
                </span>
                Certificación de Representante legal de cumplimiento de
                requisitos durante el año 2020, conforme lo ordena el numeral 13
                del parágrafo 2 del artículo 364-5 E.T. Se adjunta declaración
                de renta año 2020.
              </p>
            </Col>
            <Col lg="5">
              <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F3%20Acta%20de%20Constitucion%20Fundacion%20Makikuna%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">
                <p style={{ fontWeight: "400" }}>
                  3 Acta de Constitucion Fundacion Makikuna.pdf
                </p>
              </a>
              <p style={{ fontWeight: "400" }}>
                <span>
                  <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F4%20Certificado%20de%20existencia%20y%20representacion%20legal%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">
                    4 Certificado de existencia y representacion legal.pdf:{" "}
                  </a>
                </span>
                Cámara de comercio - Certificado de existencia y representación
                legal
              </p>
              <p style={{ fontWeight: "400" }}>
                <span>
                  <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F5%20Acta%20No%2E%20027%20%20Acta%20Calificaci%C3%B3n%20%20RTE%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">5 Acta No. 027 Acta Calificación RTE.pdf: </a>
                </span>
                Acta de máximo órgano de dirección, en donde se autoriza al
                representante legal para que solicite que la fundación sea
                calificada como entidad del Régimen Tributario Especial del
                Impuesto sobre la Renta.
              </p>
              <p style={{ fontWeight: "400" }}>
                <span>
                  <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F6%20Acta%20No%2E%20027%20Acta%20del%20m%C3%A1ximo%20%C3%B3rgano%20directivo%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">6 Acta No. 027 Acta del máximo órgano directivo.pdf: </a>
                </span>
                donde se indica: a) actividad meritoria de libre acceso a la
                comunidad, b) que sus aportes no sean rembolsables, c) que sus
                excedentes no sean distribuidos bajo ninguna modalidad y d)
                identificación de los cargos directivos. Decreto 2150 de 2017,
                Artículo 1.2.1.5.1.8, numeral 4.
              </p>
              <p style={{ fontWeight: "400" }}>
                <span>
                  <a href="https://makikuna-my.sharepoint.com/personal/coordputumayo_makikuna_org/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022%2F7%20Certificado%20Antecedentes%2Epdf&parent=%2Fpersonal%2Fcoordputumayo%5Fmakikuna%5Forg%2FDocuments%2FDatos%20adjuntos%2FDIAN%20RTE%202022&ga=1" target="_blank"  rel="noopener noreferrer">7 Certificado Antecedentes.pdf: </a>
                </span>
                Certificación del Representante Legal de los antecedentes
                judiciales y declaración de caducidad de contratos estatales de
                los miembros de la junta directiva, fundadores, representantes
                legales o miembros de los órganos de dirección de conformidad
                con el numeral 3 artículo 364-3 E.T
              </p>
            </Col>
          </Row>

        </Container>
      </section>
      <section style={{ backgroundColor: "#CEE6F3" }}>
        <Container className="py-5" fluid>
          <Row className="py-5">
            <Col className="text-center" lg="5">
              <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',height:'100%', gap:'10px'}}>
                <h2 style={{ fontWeight: "bold" }}>Contáctanos</h2>
                <img src={phoneIcon}></img>
                <p>(+57) 8 429 63 52</p>
                <img src={envelopIcon}></img>
                <p>coordputumayo@makikuna.org</p>
                <p>makikuna@makikuna.org</p>
                <img src={smartphone}></img>
                <p>310 571 55 35</p>
              </div>
            </Col>
            <Col lg="7">
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={nosotrosContact}
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default NosotrosScreen;
