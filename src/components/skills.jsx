import '../styles/skills.css'
import  Card  from 'react-bootstrap/Card';
import  CardGroup  from 'react-bootstrap/CardGroup';

// function SkillCard({image},alti,text){
//     return(
//         <div className='skill_card'>
//             <img src={image} alt={alti}  className="skill_image" />
//             <p className='skill_name'>{text}</p>
//         </div>
//     );
// }

export default function Skills(){
    return(
        <section className='skills' id='skills'>
            <h1>Skills, Languages, Tools, Frameworks, Fundamentals</h1>
            <CardGroup>
                <Card className='card_container'>
                    <Card.Body>
                        <Card.Title className='big_letters'>Languages</Card.Title>
                        
                             <Card.Text className='small_letters'>
                          C, C++, Java, Python, JavaScript
                        </Card.Text>

                        <Card.Title className='big_letters'>Frameworks/Libraries</Card.Title>
                        <Card.Text className='small_letters'>
                           Flutter, ReactJS, Material UI, HTML, CSS
                        </Card.Text>

                        <Card.Title className='big_letters'>Developer Tools & Databases</Card.Title>
                        <Card.Text className='small_letters'>
                            Git, Firebase, MySQL, MongoDB
                        </Card.Text>

                         <Card.Title className='big_letters'>Core Fundamentals</Card.Title>
                        <Card.Text className='small_letters'>
                            Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP),
DBMS, Software Engineering
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </section>
    );

}
