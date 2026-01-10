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
                <h3>I am a final year student majoring in Computer Engineering, focusing on building applications, both mobile and web, and working with ML models.</h3>
                <h3>I enjoy solving problems and finding creative solutions.</h3>
                <h3>Currently, I am into Flutter full stack development and research work related to variational autoencoders and generative adversarial nets.</h3>
                </Col>
            </Row>
        </Container>
        </section>
    );
}