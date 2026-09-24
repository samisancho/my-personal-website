
const experience = () => {
  return (
    <>
        <div className="experience">
            <h4 >Professional Experience & Journey <a href="#home"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width={30} height={30} className="uparrow" ><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7C149.8 291.2 170.1 291.2 182.6 278.7L288 173.3L288 544C288 561.7 302.3 576 320 576C337.7 576 352 561.7 352 544L352 173.3L457.4 278.7C469.9 291.2 490.2 291.2 502.7 278.7C515.2 266.2 515.2 245.9 502.7 233.4L342.7 73.4z"/></svg></a></h4>
        </div>
        <div className="timeline-arrow">
            <span className="dot"></span>
            <span className="arrow-head"></span>
        </div>
        <div className="experience-item">
            <span className="year">2024 — Present</span>

            <h3>Researcher & Web Developer</h3>
            <h4>Independent Projects & Academic Research</h4>
            <ul>
                <li>Conducting research in Artificial Intelligence, Machine Learning, and Explainable OCR for low-resource languages.</li>
                <li>Developing intelligent document analysis and text classification systems using Python and Deep Learning frameworks.</li>
                <li>Designing and building full-stack web applications with Django, Node.js, PostgreSQL, and modern frontend technologies.</li>
                <li>Working on NLP solutions for automated news classification and information extraction.</li>
                <li>Bridging academic research and software engineering to create practical, real-world solutions.</li>
            </ul>

            <div className="skills ">
                Python · Django · Node.js · PostgreSQL · Machine Learning · Deep Learning · NLP · OCR
            </div>
        </div>
        <div className="experience-item position-absolute start-50">
            <span className="year">2022 — Present</span>

            <h3>Lecturer</h3>
            <h4>Higher Education Institution</h4>

            <ul>
                <li>Delivered courses in computer science, programming, database systems, and software engineering.</li>
                <li>Mentored undergraduate students in research and software development projects.</li>
                <li>Supervised academic projects and provided technical guidance on emerging technologies.</li>
                <li>Developed course materials, assessments, and practical laboratory sessions.</li>
                <li>Promoted problem-solving, innovation, and hands-on learning among students.</li>
            </ul>

            <div className="skills">
                Teaching · Research · Mentoring · Python · Database Systems · Software Engineering
            </div>
        </div>
        <div className="timeline-arrow position-relative">
            <span className="dot"></span>
            <span className="arrow-head"></span>
        </div>
        <div className="experience-item">
            <span className="year">2021 — Present</span>

            <h3>Research & Project Advisor</h3>
            <h4>Academic and Technical Projects</h4>

            <ul>
                <li>Advised students and researchers on AI, Machine Learning, and software development projects.</li>
                <li>Provided guidance on research methodologies, data analysis, and model evaluation.</li>
                <li>Supported project planning, implementation, and technical documentation.</li>
                <li>Assisted teams in selecting appropriate technologies and development strategies.</li>
                <li>Reviewed research outputs and contributed to quality improvement initiatives.</li>
            </ul>

            <div className="skills">
                Research Methods · Data Analysis · AI · Project Supervision · Technical Writing
            </div>
        </div>
       
    </>
  )
}

export default experience
