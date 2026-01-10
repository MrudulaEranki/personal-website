import "../styles/projects.css";

function ProjectCard({ title, image, description , link}) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-text">{description}</p>
        {link && (
            <a
            href={link}
            className="project-link"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
             >
                view project
            </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">Things I’ve Built</h1>

      <div className="projects-grid">
        <ProjectCard
          title="Chitraktha"
          image="/images/ck.png"
          description="Utilized the Ren’Py game engine to develop narrative-based gameplay mechanics and interactive features."
          link = 'https://github.com/MrudulaEranki/ChitraKatha'
        />
        

        <ProjectCard
          title="Farmers Forum"
          image="/images/ff.png"
          description="Built a unified web portal to streamline access to government and NGO schemes for agricultural workers."
          link="https://github.com/MrudulaEranki/FARMERS-FORUM"
        />

        <ProjectCard
          title="Handwritten Digit Recognition Pipeline"
          image="/images/hw.png"
          description="Built a CNN in Keras to classify MNIST handwritten digits, achieving 98.24% accuracy with a full ML pipeline."
          link="https://github.com/MrudulaEranki/handwrittenDigits"
        />
      </div>
      <h3><a href="https://github.com/MrudulaEranki" target="_blank" className="button">My Github</a></h3>
    </section>
  );
}
