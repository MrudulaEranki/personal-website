import "../styles/expedu.css"

export default function ExperienceEducation(){
    return(
        <section className="expedu" id="experience-education">
            <div className="exp">
                <h1>Experience</h1>
            {/* ... Experience items ... */}
            <div>
                <h2>Software Developer Intern @ Infiposts Private Limited</h2>
                <ul>
                    <li>
                        Worked with Flutter framework and Material UI to create reusable components and pages for Infiposts Mobile App.
                    </li>
                    <li>
                        Tech and Tools used: Flutter, Dart, Material UI, Atlassian Jira, Zoho
                    </li>
                </ul>
            </div>
            </div>
            <br />

            <div className="edu">
                <h1>Education</h1>
            <div>
                <h2>Stanley College of Engineering and Technology for Women</h2>
               
                <div className="education-row">
                    <h3 style={{ margin: 0 }}>B.E. Computer Engineering</h3>
                    <span>2022-2026</span>
                </div>
                <div>
                    <p className="marks">
                        <i>CGPA: 8.59</i>
                    </p>
                </div>
            </div>
            <div>
                <h2>Stanley Junior College</h2>
              
                <div className="education-row">
                    <h3 style={{ margin: 0 }}>PCM</h3>
                    <span>2020-2022</span>
                </div>
                <div>
                    <p className="marks">
                        <i>858/1000</i>
                    </p>
                </div>
            </div>
            <div>
                <h2>Delhi Public School, Hyderabad</h2>
                
                <div className="education-row">
                    <h3 style={{ margin: 0 }}>Primary to High school</h3>
                    <span>2009-2020</span>
                </div>
                <div className="marks">
                    <p>
                        <i>90%</i>
                    </p>
                </div>
            </div>
            </div>
            

            
        </section>
    );
}