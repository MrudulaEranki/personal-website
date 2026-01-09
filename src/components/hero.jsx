// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Image  from "react-bootstrap/Image"; 
// import me from '/images/me.jpeg' ; 
// import '../styles/hero.css'
// import React from 'react';


// export default function Hero(){
//     return(
//         <div className='hero_container'>
        
//             <Row>
//                 <Col>
//                 <h1 className='name'>Hi, this is Mrudula Eranki!</h1>
            
//                 <h3 className='intro'>developer?</h3>
//                 </Col>
//                 <Col>
//                 <Image src={me} roundedCircle className="hero_image"/>
//                 </Col>
                
//             </Row>
     
//         </div>
//     );
    
// }

import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
// import me from 'public/images/pfp.jpg';
import TextPressure from "./TextPressure";
import '../styles/hero.css';

export default function Hero() {
    return (
        <div className="hero_container">
            <Container>
                <Row className="hero_row align-items-center">
                    <Col md={6} className="hero_text">
                        <h1 className="name">Hi, this is Mrudula Eranki.</h1>
                        <h3 className="intro">React and Mobile App developer.</h3>
                    
                    </Col>
                   <Col md={6} className="d-flex justify-content-end">
                        <button
                        style={{ marginLeft: "auto" }}
                        onClick={() => {
                            document.getElementById("about")?.scrollIntoView({
                            behavior: "smooth",
                            });
                        }}
                        >
                        More about me
                        </button>
                   </Col>
                </Row>
            </Container>
        </div>
    );
}
