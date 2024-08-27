import React from 'react';
import { Link } from 'react-router-dom';

const FoodOrderingSystem = () => {
    return (
        <section id="project-detail" className="py-5">
            <div className="container">
                <h1 className="text-center mb-4">Profile Management System</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="profilemanagementsystem.png"
                            alt="Project Screenshot"
                            className="img-fluid rounded mb-4"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Project Overview</h2>
                        <p>
                            The Profile Management System is a fully responsive static web application designed to help users create, manage, and organize multiple profiles efficiently.
                            Built with a modern and user-friendly interface, this application allows users to add detailed profiles, including a profile image,
                            which can be updated or deleted as needed.
                        </p>
                        <p>
                            Developed using modern technologies like React.js, this application is designed to be both scalable and user-friendly. The project follows best practices in software development to ensure high performance and reliability.
                        </p>
                        <p>
                            <h4>Key Features:</h4>
                            <i><b>Web Application Static (React.js)</b></i>
                            <ul>
                                <li><b>Profile Creation:</b> Users can create multiple profiles, entering essential details like name, contact information, and more.</li>
                                <li><b>Profile Image Management:</b> Each profile can include an image, making it easy to visually identify and organize profiles.</li>
                                <li><b>Edit and Update Profiles:</b>Users can easily update profile information and change the profile image, ensuring the profiles are always current.</li>
                                <li><b>Delete Profiles:</b> Unwanted profiles can be removed from the system, keeping the profile list clean and relevant.</li>
                                <li><b>Fully responsive Design:</b> The application is designed to work seamlessly across all devices, from desktops to mobile phones, ensuring a consistent user experience.</li>

                            </ul>
                        </p>
                        <div className="mt-4 button-group">
                            <a
                                href="https://github.com/sanikant20/crudprofilemanager"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                            <a
                                href="https://crud-profile-manager.netlify.app/"
                                className="btn btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/projects" className="btn btn-info">
                        Back to Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default FoodOrderingSystem;
