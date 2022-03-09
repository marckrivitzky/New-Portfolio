import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  {Card} from "react-bootstrap"

function About (){
	return(
		<div className="about-container">
			
			<Card style={{width: '70%', padding: '15px', color: 'white', fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', opacity: '80%', position:"relative", marginLeft:"auto", marginRight:"auto", borderRadius:"10% 10% 10% 10% / 10% 10% 10% 10% "}}>
				<h5 className="about-me">
					Hi! Thank you for visiting my website! My name is Marc Krivitzky and I'm a 
					creative, organized, and hard working individual looking to begin my career 
					in front-end development. Before beginning my journey into developing,
					I worked as an accounting administrator at AKRF, Inc., 
					an environmental engineering and consulting firm. This experience 
					provided a strong foundation in interpersonal, analytical, and collaborative 
					problem solving. During my time working at AKRF, I dreamed of finding 
					a career path that excited me and made me want to jump out of bed everyday. 
					In 2020, during the height of the COVID pandemic, I began to think about my 
					long term career goals more and decided to leave AKRF. I was passionate about art 
					and using my creative talents to build and develop something new and unique, which 
					lead me to coding and web development. In the beginning of 2021, I started my journey 
					to learn how to code by enrolling in Promineo Tech, an intensive coding bootcamp 
					I instantly fell in love with everything about coding and have been working actively to 
					expand my skillset and grow my career in this space ever since. At Promineo Tech, I  primarily 
					focused on building and developing my frontend skills such as: ReactJS, Javascript, HTML, CSS, JSX, Jquery, 
					Bootstrap, AJAX, and more. I look forward to continuing to grow my skills and work for a company that values creative 
					and entrepreneurial thinkers like myself.  Please feel free to explore everything my website has to offer!  
				</h5>
			</Card>		
		</div>
	)
}
export default About