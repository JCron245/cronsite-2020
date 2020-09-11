import React, { FC, ReactElement } from 'react';
import Education from '../../assets/education.json';
import Employment from '../../assets/employment.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlusSquare } from 'react-feather';
import './Resume.scss';

interface InfoSectionArray {
	name: string;
	title: string;
	endDate: string;
	startDate: string;
	infoList: string[];
}

interface InfoSection {
	arr: InfoSectionArray[];
	title: string;
}

export const Resume: FC = (): ReactElement => {
	const InfoSection: FC<InfoSection> = (props): ReactElement => {
		const { arr, title } = props;
		return (
			<>
				<Row className={`${title}-title`}>
					<Col>
						<h2 className="page-header">{title}</h2>
					</Col>
				</Row>
				{arr.map((item, index) => {
					const infoTitle = item.name.replace(/\s+/g, '-');
					return (
						<Row className={`${title}-body`} key={`${infoTitle}-${index}`}>
							<Col className={`${title}-head`} sm={4} xs={12}>
								<h3 className="page-sub-header" id={`${infoTitle}-${index}`}>
									{item.name}
								</h3>
								<p>{item.title}</p>
								<p>
									{item.startDate} - {item.endDate}
								</p>
							</Col>
							<Col className={`${title}-info`} sm={8} xs={12}>
								<ul className={`${title}-list list`} aria-labelledby={`${infoTitle}-${index}`}>
									{item.infoList.map((itemInfo: string, index: number) => {
										return (
											<li key={`schoolInfo-${infoTitle}-${index}`}>
												<PlusSquare aria-hidden={true} className="icon" />
												<span>{itemInfo}</span>
											</li>
										);
									})}
								</ul>
							</Col>
						</Row>
					);
				})}
			</>
		);
	};

	return (
		<main className="resume container">
			<h1 className="sr-only">Jon Cornwell's Resume</h1>
			{/* Personal Info */}
			<Row>
				<Col>
					<address className="info">
						<p>Denver, CO</p>
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
			{/* Employment */}
			<InfoSection arr={Employment.jobs} title="employment"></InfoSection>
			{/* Education */}
			<InfoSection arr={Education.schools} title="education"></InfoSection>
		</main>
	);
};
