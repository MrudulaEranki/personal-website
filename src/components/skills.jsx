// import '../styles/skills.css'
// import  Card  from 'react-bootstrap/Card';
// import  CardGroup  from 'react-bootstrap/CardGroup';

// // function SkillCard({image},alti,text){
// //     return(
// //         <div className='skill_card'>
// //             <img src={image} alt={alti}  className="skill_image" />
// //             <p className='skill_name'>{text}</p>
// //         </div>
// //     );
// // }

// export default function Skills(){
//     return(
//         <section className='skills' id='skills'>
//             <h1>Skills, Languages, Tools, Frameworks, Fundamentals</h1>
//             <CardGroup>
//                 <Card className='card_container'>   
//                     <Card.Body>
//                         <div className='cardo'>
//                             <Card.Title className='big_letters'>Languages</Card.Title>
                        
//                              <Card.Text className='small_letters'>
//                           C, C++, Java, Python, JavaScript
//                         </Card.Text>
//                         </div>
                         
//                         <div className='cardo'>
//                              <Card.Title className='big_letters'>Frameworks/Libraries</Card.Title>
//                         <Card.Text className='small_letters'>
//                            Flutter, ReactJS, Material UI, HTML, CSS
//                         </Card.Text>
//                         </div>
                       
                        
//                         <div className='cardo'>
//                             <Card.Title className='big_letters'>Developer Tools & Databases</Card.Title>
//                         <Card.Text className='small_letters'>
//                             Git, Firebase, MySQL, MongoDB
//                         </Card.Text>
//                         </div>
                        
                        
//                         <div className='cardo'>
//                             <Card.Title className='big_letters'>Core Fundamentals</Card.Title>
//                         <Card.Text className='small_letters'>
//                             Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP),
// DBMS, Software Engineering
//                         </Card.Text>
//                         </div>
                         
//                     </Card.Body>
//                 </Card>
//             </CardGroup>
//         </section>
//     );

// }





import '../styles/skills.css'
import Card from 'react-bootstrap/Card';

export default function Skills() {
  return (
    <section className='skills' id='skills'>
      <h1 className="skills_title">Skills, Technologies, Tools, Languages</h1>

      <div className="skills_grid">
        <Card className='cardo'>
          <Card.Body>
            <Card.Title className='big_letters'>Languages</Card.Title>
            <Card.Text className='small_letters'>
              C, C++, Java, Python, JavaScript
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='cardo'>
          <Card.Body>
            <Card.Title className='big_letters'>Frameworks & Libraries</Card.Title>
            <Card.Text className='small_letters'>
              Flutter, ReactJS, Material UI, HTML, CSS, NodeJS
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='cardo'>
          <Card.Body>
            <Card.Title className='big_letters'>Tools & Databases</Card.Title>
            <Card.Text className='small_letters'>
              Git, Firebase, MySQL, MongoDB
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='cardo'>
          <Card.Body>
            <Card.Title className='big_letters'>Core Fundamentals</Card.Title>
            <Card.Text className='small_letters'>
              DSA, OOP, DBMS, Software Engineering, Operating Systems, Computer Networks
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
