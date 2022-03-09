import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  {Card, CardGroup, Row } from "react-bootstrap"
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdOutlinePictureAsPdf} from 'react-icons/md'


function Resume (){
	


	const download = <MdOutlinePictureAsPdf size={24} color={'black'}/>
	const github = <AiFillGithub size={20} color={'black'} />
	const linkedin = <AiFillLinkedin size={20} color={'black'} />
	return(
		<div className="resume-container">
			<Card style={{width: '97%', padding: '10px', backgroundColor: 'white', opacity: '80%', position:"relative", marginLeft:"auto", marginRight:"auto"}}>
				<br/>
				<h2 className="resume-title">Marc Krivitzky</h2>
				<h5 className="resume-title"> Marckrivitzky@gmail.com | <a href="tel:7326148149"> 732-614-8149 </a>  | Github <a href="https://github.com/marckrivitzky">{github}</a> | Linkedin  <a href="https://www.linkedin.com/in/marc-krivitzky-1a47a9215/">{linkedin}</a> | <a href="https://docs.google.com/document/d/1pX4s5mDN29VBiPwFgVBXAsbWEyTRXlEdeKLPKuloi5s/edit?usp=sharing">{download}</a></h5>
				<br/>
				<h3 className="resume-title">Summary and Skills</h3>
				<div className="underline-resume"></div>
				<br/>
				<h5 className="resume-summary">
					I’m an enthusiastic, creative, organized and passionate individual currently seeking a new full-time, front-end web developer position. I’m seeking a role that will enable me to learn and continue building upon my computer programming skills, while contributing to the success of the company.
				</h5>
			
					<Row style={{width: 'fit-content', position: 'relative', marginRight:'auto', marginLeft:'auto'}}>
						
							<Card style={{width: 'fit-content',textAlign: 'left', border: 'none'}}>
								<ul className="resume-list">
									<li>ReactJs</li>
									<li>Java Script</li>
									<li>HTML</li>
									<li>CSS</li>
									
									<li> Microsoft Office Suite  </li>
								</ul>
							</Card>
				
							<Card style={{width: 'fit-content', textAlign: 'left', border: 'none'}}>
								<ul className="resume-list">
									<li>React-Router</li>
									<li>Debugging</li>
									<li>Photoshop</li>
									<li>Adobe Suites</li>
									<li>Jquery</li>
									
								</ul>
							</Card>
					
							<Card style={{width: 'fit-content', textAlign: 'left', border: 'none',}}>
								<ul className="resume-list">
									<li>JSX</li>
									<li>Bootstrap</li>
									<li>Github</li>
									<li>Node</li>
									
									<li>Development Cycles </li>
								</ul>
							</Card>
						
							<Card style={{width: 'fit-content', textAlign: 'left', border: 'none',}}>
								<ul className="resume-list">
									<li>AWS</li>
									<li>AJAX</li>
									<li>Spring boot</li>
									<li>Design Patterns</li>
									<li>ChartJS</li>
								</ul>
							</Card>
						

					</Row>
				
				<br/>
				<h3 className="resume-title">Programming Experience</h3>
				<div className="underline-resume"></div>
				<br/>
				<CardGroup style={{width:'90%', position:"relative", marginRight:'auto', marginLeft:'auto', border: 'none'}}>
					<br/>
					<Card style={{border: 'none'}}>
						<h5 className="resume-experience-text-title">CRUD Store App</h5>
						<h5 className="resume-experience-text">Using ReactJS, I created a functional store application with 13 components working together to perform all the aspects of a CRUD application.  I used a combination of class and functional components with hooks consisting of useState, setState, useHistory, and more.  In addition, I used React Router in order to create a multi page app with simple navigation.  Finally, I used React Bootstrap, React Icons, and CSS in order to design and layout my application.</h5>	
					</Card>
					<br/>
					<Card style={{border: 'none'}}>
						<h5 className="resume-experience-text-title">US Inflation Calculator</h5>
						<h5 className="resume-experience-text">Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Jquery, Forms, Photoshop, and more I created a unique application that incorporates a timeline of important events and the Inflation rate of the USD.  Each year represented on the timeline contains a button, after you type the dollar amount you want into the form, you click one of the buttons on the timeline which will tell you how much money you typed in would have been worth today.</h5>
					</Card>
					<br/>
					<Card style={{border: 'none'}}>
						<h5 className="resume-experience-text-title">US Currency Exchange Calculator</h5>
						<h5 className="resume-experience-text">Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Jquery, Forms, and more I created a unique application that incorporates a world map into comparing currency exchange rates from the USD to other countries.  The user types a dollar amount into the form at the top of the page, then they can click on one of the many buttons laid out on the world map.  Each button represents a different country.  Once you click a button, that countries exchange rate compared to the USD appears.</h5>
					</Card>
					<br/>
					<Card style={{border: 'none'}}>
						<h5 className="resume-experience-text-title">Fake Donation App</h5>
						<h5 className="resume-experience-text">Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Jquery, React-icons, and more I created a fake donation website that is supposed to emulate a real website!  This website/app uses a form in order to gather the users personal information and donation amount.  After you donate, you can navigate back to the home page where you will be provided a certifcate thanking you for your donation amount.</h5>
					</Card>
				</CardGroup>
				<br/><br/>
				<h3 className="resume-title">Work Experience</h3>
				<div className="underline-resume"></div>
				<br/>
				<Card style={{width:'90%', position:"relative", marginRight:'auto', marginLeft:'auto', border: 'none'}}>	
					<h5 className="resume-work">AKRF, Inc. (New York, NY)</h5>
					<h5 className="resume-work-text">Accounting Administrator (June 2017-2020) </h5>	
	
					<div className="resume-list-work">
						<ul className="work-info">
							<li>Reported to the Controller and ran audits in support of the company's financial health.</li>
							<li>Managed corporate credit card process, including the reconciliations of over 50 credit cards.</li>
							<li>Managed the employee expense process, including reviewing 200+ expense reports monthly.</li>
							<li>I left this company in 2020 to pursue a full time career and education in software engineering.</li>
				   		</ul>
					</div>
				</Card>
				<br />
				<h3 className="resume-title">Education</h3>
				<div className="underline-resume"></div>
				<br/>
				<Card style={{width:'90%', position:"relative", marginRight:'auto', marginLeft:'auto', border: 'none'}}>	
					<h5 className="resume-work">Ramapo College of New Jersey - 2017 </h5>
					<h5 className="resume-work-text">Major: Communications </h5>	
					<br />
					<h5 className="resume-work">Promineo Tech - 2021 </h5>
					<h5 className="resume-work-text">Certifcate: Front-end coding bootcamp </h5>	
					<br />
				
				</Card>

			</Card>		
		</div>
	)
}

export default Resume