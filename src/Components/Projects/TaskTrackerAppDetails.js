import React from 'react';
import { Link } from 'react-router-dom';

const TaskTrackerAppDetails = () => {
    return (
        <section id="project-detail" className="py-5">
            <div className="container">
                <h1 className="text-center mb-4">Task Tracker App</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img
                            src="images/tasktrackerapp.png"
                            alt="Project Screenshot"
                            className="img-fluid rounded mb-4"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-3">Project Overview</h2>
                        <p>
                            The task tracker application described about a React-based tool for managing tasks with features to add, update, delete, and sort tasks.
                        </p>
                        <p>
                            <h4>Key Features:</h4>
                            <i><b>Web Application Static (React.js)</b></i>
                            <ul>
                                <li><b>Add Tasks:</b> Users can add new tasks to the tracker by entering a task description</li>
                                <li><b>Update Tasks:</b> Existing tasks can be edited. Users can modify the task description</li>
                                <li><b>Delete Tasks:</b> Tasks can be removed from the list, both from the UI and the local storage.</li>
                                <li><b>Mark Tasks as Complete:</b> Users can toggle the completion status of tasks. Completed tasks can be marked with a check icon or a completion label.</li>
                                <li><b>Sort Tasks:</b> Tasks can be sorted based on various criteria: Date, Completion Status, Text.</li>
                                <li><b>Clear All Tasks:</b> Provides an option to clear all tasks from the list and remove them from local storage.</li>

                            </ul>
                        </p>
                        <div className="mt-4 button-group">
                            <Link to="https://github.com/sanikant20/task-tracker-app" className="btn btn-primary">
                                View Code
                            </Link>
                            <Link to="https://simple-task-tracker-app.netlify.app/" className="btn btn-secondary">
                                Live Demo
                            </Link>
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

export default TaskTrackerAppDetails;
