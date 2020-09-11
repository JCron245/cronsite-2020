/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { GitHub, Linkedin, PenTool } from 'react-feather';
import './Header.scss';

export const Header: FC = (): ReactElement => {
	return (
		<Navbar expand="lg">
			<Navbar.Brand href="/">Jon Cornwell</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="https://github.com/JCron245">
						<GitHub className="header-icon" />
						Github
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/jonathon-r-cornwell/">
						<Linkedin className="header-icon" />
						LinkedIn
					</Nav.Link>
					<Nav.Link href="https://croncolor.com">
						<PenTool className="header-icon" />
						Color Tool
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
