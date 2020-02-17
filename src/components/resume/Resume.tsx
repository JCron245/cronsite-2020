import React, { FC, ReactElement } from 'react';
import Education from '../../assets/education.json';
import Employment from '../../assets/employment.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusSquare } from 'react-feather';
import './Resume.scss';

const Resume: FC = (): ReactElement => {
	return (
		<main className="resume container">
			<h1 className="sr-only">Jon Cornwell's Resume</h1>
			<Row>
				<Col>
					{/* Personal Info */}
					<address className="info">
						<p>1740 Depew St. Edgewater, CO</p>
						<a className="info-link" target="_blank" rel="noopener noreferrer" href="mailto:jonnmb@gmail.com">
							jonnmb@gmail.com
						</a>
						<a className="info-link" href="tel:+14358621179">
							(435)862-1179
						</a>
					</address>
				</Col>
			</Row>
			{/* Summary */}
			<Row className="summary">
				<Col>
					<h2 className="page-header">Summary</h2>
					<p className="summary-text">
						I am a full-stack developer familiar with a variety of platforms and languages. I’m experienced with the entire application
						lifecycle from the conception of the application, development, all the way to the deployment.
					</p>
				</Col>
			</Row>

			{/* Skills */}
			<Row className="skills">
				<Col>
					<h2 className="page-header" id="skills">
						Skills
					</h2>
					<ul className="skills-list" aria-labelledby="skills">
						<li>Languages: Javascript, Typescript, Java</li>
						<li>Frameworks: Angular, ReactJS, React Native, Bootstrap, Materialize</li>
						<li>System: Linux, OSX, Windows, Node</li>
						<li>Other: JSX/TSX, HTML, CSS, SASS/SCSS, REST, Accessibility Compliance</li>
					</ul>
				</Col>
			</Row>

			{/* {/* Employment History */}
			<Row className="employment-title">
				<Col>
					<h2 className="page-header">Employment History</h2>
				</Col>
			</Row>
			{Employment.jobs.map((job, index) => {
				const jobName = job.name.replace(/\s+/g, '-');
				return (
					<Row className="employment-body" key={`${jobName}-${index}`}>
						<Col className="employment-head" sm={4} xs={12}>
							<h3 className="page-sub-header" id={`${jobName}-${index}`}>
								{job.name}
							</h3>
							<p>{job.title}</p>
							<p>
								{job.startDate} - {job.endDate}
							</p>
						</Col>
						<Col className="employment-info" sm={8} xs={12}>
							<ul className="jobs-list list" aria-labelledby={`${jobName}-${index}`}>
								{job.infoList.map((jobInfo, index) => {
									return (
										<li key={`jobinfo-${jobName}-${index}`}>
											<PlusSquare aria-hidden={true} className='icon' />
											{jobInfo}
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				);
			})}

			{/* Education */}
			<Row className="education-title">
				<Col>
					<h2 className="page-header">Education</h2>
				</Col>
			</Row>
			{Education.schools.map((school, index) => {
				const schoolName = school.name.replace(/\s+/g, '-');
				return (
					<Row className="education-body" key={`${schoolName}-${index}`}>
						<Col className="education-head" sm={4} xs={12}>
							<h3 className="page-sub-header" id={`${schoolName}-${index}`}>
								{school.name}
							</h3>
							<p>{school.degree}</p>
							<p>
								{school.startDate} - {school.endDate}
							</p>
						</Col>
						<Col className="education-info" sm={8} xs={12}>
							<ul className="education-list list" aria-labelledby={`${schoolName}-${index}`}>
								{school.infoList.map((schoolInfo, index) => {
									return (
										<li key={`schoolInfo-${schoolName}-${index}`}>
											<PlusSquare aria-hidden={true} className='icon' />
											{schoolInfo}
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				);
			})}
		</main>
	);
};

export default Resume;
