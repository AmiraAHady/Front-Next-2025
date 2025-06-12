
// "use client"
import Link from "next/link";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="/contactus">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/todo">
                  Todo
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="/login">
                  Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" href="/csr">
                  CSR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ssr">
                  SSR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/isr">
                  ISR
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/ssg">
                  SSG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
