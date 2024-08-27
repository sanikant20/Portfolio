import React from 'react';

const AboutMain = () => {
    return (
        <section id="about" className="about-bg py-5">
            <div className="container">
                <h2 className="text-center mb-4">About Me</h2>

                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h3>Hi, I'm Sanikant Kushwaha</h3>
                            <p>
                                I'm a passionate Software Developer with experience in web development, front-end technologies, etc. I specialize in creating dynamic and responsive web applications using the latest technologies. My goal is to deliver high-quality solutions that meet the needs of my clients.
                            </p>
                            <p>
                                With a strong background in Relevant Skills, e.g., React, Node.js, etc., I have worked on various projects that involve building scalable web applications, designing user interfaces, etc. I enjoy solving complex problems and continuously learning new technologies to stay up-to-date with industry trends.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, reading tech blogs, or enjoying outdoor activities. I’m always open to new opportunities and collaborations, so feel free to get in touch!
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <div className="about-image">
                            <img
                                src="images/sani.jpg"
                                alt="Sanikant"
                                className="img-fluid rounded-circle mx-auto d-block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMain;
