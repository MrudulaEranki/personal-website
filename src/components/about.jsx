import { Row , Container, Col} from "react-bootstrap"
import '../styles/about.css'

export default function About(){
    return(
        <section id="about"> 
        <Container className="about_container">
            {/* <h1 className="abouttitle">About me</h1>
            <br /> */}
            <Row>
                <Col>
                <h1 className="abouttitle">About me</h1>
                </Col>
                <Col className="aboutcol">
                <h3>Final-year Computer Engineering student specializing in building
                    scalable applications, with practical experience in 
                    machine learning research and model implementation.
                </h3>
                <h3>I enjoy solving problems and developing creative,
                     efficient solutions.</h3>
                {/* <p> Currently, I am focused on Flutter full-stack development and conducting research
    in deep generative models, VAEs and GANs.</p> */}
                </Col>
            </Row>
        </Container>
        </section>
    );
}