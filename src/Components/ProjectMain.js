import React from 'react';
import { Link } from 'react-router-dom';

const ProjectMain = () => {
    return (
        <section id="projects" className="projects-bg py-5">
            <div className="container" style={{ marginTop: "5px" }}>
                <h2 className="text-center mb-4">My Projects</h2>

                <div className="row">
                    {/* Profile Management System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="profilemanagementsystem.png"
                                className="card-img-top"
                                alt="Profile Management System"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Profile Management System</h5>
                                <div className="card-text-wrapper">
                                    <p className="card-text">
                                        A Profile Management System allows users to
                                        create, view, update, and manage profiles for multiple users.
                                    </p>
                                </div>
                                <div className="mt-auto d-flex justify-content-between">
                                    <Link to="/profile-management-project-details" className="btn btn-primary mt-3">View Details</Link>
                                    <Link to="https://profile-management-system.netlify.app/" className="btn btn-secondary mt-3">Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AgroMart App System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="agromart.png"
                                className="card-img-top"
                                alt="AgroMart App"
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">AgroMart App</h5>
                                <div className="card-text-wrapper">
                                    <p className="card-text">
                                        AgroMart is an online platform for selling
                                        agricultural products such as cultivation tools,
                                        seeds, and other farming essentials.
                                    </p>
                                </div>
                                <div className="mt-auto d-flex justify-content-between">
                                    <Link to="/agromart-project-details" className="btn btn-primary mt-3">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Food Ordering System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="foodorderingsystem.png"
                                className="card-img-top"
                                alt="Food Ordering System"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Food Ordering System</h5>
                                <div className="card-text-wrapper">
                                    <p className="card-text">
                                        A Food ordering System is a platform that facilitates
                                        the ordering and ordering of food from restaurants to customers.
                                    </p>
                                </div>
                                <div className="mt-auto d-flex justify-content-between">
                                    <Link to="/food-ordering-project-details" className="btn btn-primary mt-3">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectMain;
