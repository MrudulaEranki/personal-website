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
                <p>Final-year Computer Engineering student specializing in building
                    scalable applications, with practical experience in 
                    machine learning research and model implementation.
                </p>
                <p>I enjoy solving complex problems and developing creative, efficient solutions.</p>
                <p> Currently, I am focused on Flutter full-stack development and conducting research
    in deep generative models, VAEs and GANs.</p>
                </Col>
            </Row>
        </Container>
        </section>
    );
}