import React from 'react';
import { Link } from 'react-router-dom';

const AgromartProjectDetail = () => {
    return (
        <section id="project-detail" className="py-5">
            <div className="container">
                <h1 className="text-center mb-4">AgroMart</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="agromart.png"
                            alt="Project Screenshot"
                            className="img-fluid rounded mb-4"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Project Overview</h2>
                        <p>
                            AgroMart is a complete online platform that facilitates selling of agricultural and agriculture products. AgroMart, built with a solid technology stack that includes React, Node.js, Express, MongoDB, and React Native, provides a seamless experience for both administrators and customers.
                        </p>

                        <p>
                            <h4>Key Features:</h4>
                            <i><b>Admin Dashboard Web Application (React.js)</b></i>
                            <ul>
                                <li><b>Register and Login Authentication:</b> Admin can Register and can login to the system securely with encryption.</li>
                                <li><b>Product Management:</b> Admins can add, edit, and remove products, ensuring the catalog is up-to-date with the latest farming tools, seeds, and other essentials.</li>
                                <li><b>Category Management:</b> Products can be organized into categories, making it easier for customers to navigate and find what they need.</li>
                                <li><b>Order Management:</b> Admins can view, process, and manage orders, ensuring smooth operations from order placement to fulfillment.</li>
                                <li><b>User Profile Management:</b> Admins can view customer profiles.</li>
                                <li><b>Admin Profile Management:</b> Admins can manage their profile and can modify their details and change login password</li>
                                <li><b>Analysis:</b> The dashboard includes analytics tools that provide insights into sales, customer behavior, and product performance.</li>
                                <li><b>Rating and Reviews: </b> Admins can view customer feedback on products, helping them to maintain product quality and customer satisfaction.</li>
                            </ul>

                            <br />
                            <i><b>Customer Mobile App (React Native)</b></i>
                            <ul>
                                <li><b>Register and Login Authentication:</b> Customer can Register and can login to the system securely with encryption.</li>
                                <li><b>Product Browsing:</b> Customers can easily browse through the product catalog, view detailed descriptions, and check prices.</li>
                                <li><b>Search:</b> Advanced search and filtering options allow customers to find specific products quickly.</li>
                                <li><b>Product Reviews and Ratings:</b> Customers can read reviews and ratings from other users and leave their own feedback after purchase.</li>
                                <li><b>Shopping Cart and Order Placement:</b> Users can add products to their cart, place orders, and make secure payments directly through the app.</li>
                                <li><b>Order Tracking:</b> Customers can track the status of their orders and payments in real-time, ensuring transparency throughout the purchasing process.</li>
                                <li><b>Profile Management: </b> Users can manage their profiles, including updating personal information and viewing order history.</li>
                                <li><b>Payment Integration: </b> Secure payment options are integrated, providing customers with a smooth checkout experience.</li>
                            </ul>
                        </p>
                        <div className="mt-4 button-group">
                            <a
                                href="https://github.com/sanikant20/Agromart/tree/main/Development"
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

export default AgromartProjectDetail;
