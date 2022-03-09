import React, { PureComponent} from "react";
import { Navbar, NavItem} from "react-bootstrap";
import { HashLink} from "react-router-hash-link";
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Marc from '../assets/marc2.png';
import Projects from "./Projects";
import BottomPage from "./BottomPage";gi
import Artwork from "./Artwork";
import Resume from "./Resume"
import {BsInstagram} from 'react-icons/bs'
import About from "./About"

	
class HomePage extends PureComponent{

	render(){
		const instagram = <BsInstagram size={25} color={'rgb(48, 46, 46)'} />
		return(	
			<div className="home-page-container">

				<div className="the-nav">
					<Navbar className="fixed-top" bg="secondary"  expand="lg">
				        <NavItem ><HashLink style={{color: 'white', fontFamily: 'Open Sans Condensed'}} to="#home" className="nav-link">HOME</HashLink></NavItem>
				        <NavItem><HashLink style={{color: 'white', fontFamily: 'Open Sans Condensed'}} to="#projects" className="nav-link">PROJECTS</HashLink></NavItem>
				        <NavItem><HashLink style={{color: 'white', fontFamily: 'Open Sans Condensed'}} to="#artwork" className="nav-link">ART</HashLink></NavItem>
				        <NavItem><HashLink style={{color: 'white', fontFamily: 'Open Sans Condensed'}} to="#resume" className="nav-link">RESUME</HashLink></NavItem>
						 <NavItem><HashLink style={{color: 'white', fontFamily: 'Open Sans Condensed'}} to="#bottom" className="nav-link">CONTACT</HashLink></NavItem>
					</Navbar>
				</div>
				
				<div className="marc-container" id="home">
					<br/><br/><br/>
					<br/>
					<h2 className="marc-krivitzky">MARC KRIVITZKY</h2>
					<br/>
					<h3 className="front-end-developer">FRONT END DEVELOPER</h3>
					<br/><br/> 
				</div>
				<br/><br/>
				<img className="marc-image" src={Marc} alt='image' style={{width: '200px'}} />
				<br/><br/>
				<About />
				<br/><br/>
				<div id="projects">
					<br /><br /><br /><br />
					<h2 className="projects-underline">PROJECTS</h2>
					<div className="underline"></div>
					<br /><br />
					<Projects />
  				</div>
				<br/><br/>
				<div id="artwork">
					<br /><br/><br/><br/>
					<h2 className="projects-underline">ARTWORK <a href="https://www.instagram.com/digital.art.marc/"> {instagram}</a></h2>
					<div className="underline"></div>
					<br/>
					<Artwork />
				</div>
				<br/><br/>
				<div id="resume">
					<br /><br/><br/><br/>
					<h2 className="projects-underline">RESUME</h2>
					<div className="underline"></div>
					<br/><br/>
					<Resume />
				</div>
				<br/><br />
				<div id="bottom">
					<BottomPage />
				</div>
				
			</div>
		);
	}
}
export default withRouter(HomePage)