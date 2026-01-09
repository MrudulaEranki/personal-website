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
                <p>I am a final year student majoring in Computer Engineering, focusing on building applications, both mobile and web, and working with ML models.</p>
                <p>I enjoy solving problems and finding creative solutions.</p>
                <p>Currently, I am into Flutter full stack development and research work related to variational autoencoders and generative adversarial nets.</p>
                </Col>
            </Row>
        </Container>
        </section>
    );
}