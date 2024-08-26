import React from 'react';

const Homemain = () => {
    return (
        <div>
            {/* Header Section */}
            <header className="header-bg text-white text-center py-5">
                <div className="container">
                    <h1>Welcome to My Portfolio</h1>
                    <h3>It's me Sanikant Kushwaha</h3>
                    <p className="lead">I'm a passionate developer with skills in React, Node, and more!</p>
                    <a href="/projects" className="btn btn-primary mt-3">View My Work</a>
                </div>
            </header>

            {/* Skills Section */}
            <section id="skills" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">My Skills</h2>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <i className="fas fa-code fa-3x mb-3 text-primary"></i>
                            <h4>Web Development</h4>
                            <p>Experienced in HTML, CSS, JavaScript, and React for building responsive and dynamic websites.</p>
                        </div>

                        <div className="col-md-4">
                            <i className="fas fa-server fa-3x mb-3 text-primary"></i>
                            <h4>Backend Development</h4>
                            <p>Knowledgeable in Node.js, Express, and databases for creating robust backend solutions.</p>
                        </div>

                        <div className="col-md-4">
                            <i className="fas fa-database fa-3x mb-3 text-primary"></i>
                            <h4>Database Management</h4>
                            <p>
                                Experienced in designing, managing, and optimizing relational and non-relational databases.
                                Proficient with MySQL, MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Homemain;
