import React from 'react';
import { Link } from 'react-router-dom';

const ProjectMain = () => {
    return (
        <section id="projects" className="projects-bg py-5">
            <div className="container" style={{ marginTop: "5px" }}>
                <h2 className="text-center mb-4">My Projects</h2>

                <div className="row">
                    {/* AgroMart App System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="images/agromart.png"
                                className="card-img-top"
                                alt="AgroMart App"
                                style={{ height: '200px', objectFit: 'contain' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">AgroMart App / Full Stack Web & Mobile App</h5>
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

                    {/* Profile Management System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="images/profilemanagementsystem.png"
                                className="card-img-top"
                                alt="Profile Management System"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Profile Management System / Frontend</h5>
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

                    {/* Task Tracker Application Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="images/tasktrackerapp.png"
                                className="card-img-top"
                                alt="Task Tracker Application"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Task Tracker Application / Frontend</h5>
                                <div className="card-text-wrapper">
                                    <p className="card-text">
                                        A Task Tracker Application allows users to add task as to-do list,
                                        view, update, delete and sort task with date, inComplete task, etc.
                                    </p>
                                </div>
                                <div className="mt-auto d-flex justify-content-between">
                                    <Link to="/task-tracker-app-details" className="btn btn-primary mt-3">View Details</Link>
                                    <Link to="https://simple-task-tracker-app.netlify.app/" className="btn btn-secondary mt-3">Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    {/* Food Ordering System Project */}
                    <div className="col-md-4 col-sm-6 col-12" style={{ marginTop: "10px" }}>
                        <div className="card shadow-lg mb-4 h-100">
                            <img
                                src="images/foodorderingsystem.png"
                                className="card-img-top"
                                alt="Food Ordering System"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Food Ordering System / Full Stack Web App</h5>
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
