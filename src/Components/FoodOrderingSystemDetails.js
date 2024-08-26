import React from 'react';
import { Link } from 'react-router-dom';

const FoodOrderingSystem = () => {
    return (
        <section id="project-detail" className="py-5">
            <div className="container">
                <h1 className="text-center mb-4">Food Ordering System</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="foodorderingsystem.png"
                            alt="Project Screenshot"
                            className="img-fluid rounded mb-4"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Project Overview</h2>
                        <p>
                            The MERN stack project is a dynamic food ordering web application that provides users with a seamless experience for
                            browsing, selecting, and ordering food online. Built using MongoDB, Express, React, and Node.js,
                            this project offers a fully functional and responsive platform that allows users to
                            navigate through various food categories, customize their orders, and manage their profiles.
                        </p>
                        <p>
                            <h4>Key Features:</h4>
                            <i><b>Full Stack Web Application (MERN Stack)</b></i>
                            <ul>
                                <li><b>Category-Based Listing:</b> The application displays food items organized into categories, making it easy for users to find specific types of cuisine or dishes. </li>
                                <li><b>Dynamic Food Selection:</b> Each food item is listed with options to choose between a half plate or a full plate, with prices that automatically adjust based on the selection.</li>
                                <li><b>Add to Cart:</b> Users can add their selected food items to the shopping cart, with the option to choose the portion size (half plate or full plate), which influences the total price.</li>
                                <li><b>Order Summary:</b> The cart displays a summary of all selected items, quantities, portion sizes, and the total price, allowing users to review their order before checkout.</li>
                                <li><b>Place Order:</b> Users can proceed to place their order, with the application handling order submission and providing confirmation details.</li>
                                <li><b>View Orders:</b> Users can view their order, including details of orders, statuses.</li>
                            </ul>
                        </p>

                        <div className="mt-4 button-group">
                            <a
                                href="https://github.com/sanikant20/FoodDeliveryApp"
                                className="btn btn-primary mr-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Code
                            </a>
                            {/* <a
                                href="https://live-demo-link.com"
                                className="btn btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a> */}
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
