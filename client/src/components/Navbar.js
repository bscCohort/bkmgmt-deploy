import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning text-dark h-auto">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Book Management Project</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a className="nav-link" href="https://github.com/bscCohort/bkmgmt-deploy" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-alt" style={{ fontSize: '25px' }}></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link
                                to='/about'
                            >
                                About
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar