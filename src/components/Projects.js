


import React, { PureComponent} from "react";
import { Card, Row, Col} from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import jaguar from "../assets/donation1.jpg"
import exchange from "../assets/exchangeCircle2.png"
import inflation from "../assets/myInflation.png"
import store from "../assets/store.jpg"
import {AiFillGithub} from 'react-icons/ai'

class Projects extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				hover: false,
				image: jaguar,
			}
	}
	
	

	
	render(){
		const github = <AiFillGithub size={30} color={'white'} />
	
		return(
			<div className="project-container">
				<Row style={{width: '65%',  position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>

					<Col>
						<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto', paddingBottom: '35px' }}>
							<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"70%", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px', fontSize:'25px'}}>Big Cat Donation App</Card.Title>
					
							<Card.Img style={{borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', paddingBottom: '10px'}} variant="top" src={jaguar} />
							

				

							<Card.Text style={{ opacity: '70%', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '20px', borderRadius: '100% 100% 100% 100% / 22% 22% 20% 20%', height:"40%"}}>
								<h5 className="description-projects">Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Jquery, React-icons, and more I created a fake donation website that is supposed to emulate a real website!  This website/app uses a form in order to gather the users personal information and donation amount.  After you donate, you can navigate back to the home page where you will be provided a certifcate thanking you for your donation amount. </h5> 
								<Card.Link style={{color: "pink" }} href="https://main.d2b1fjix3pi4e8.amplifyapp.com/">Click here to see the app! <br /> <a href="https://github.com/marckrivitzky/fake-donation-app">{github}</a></Card.Link>
							</Card.Text>
						</Card>
					</Col>
					
					<Col>
						<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
					
							<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"70%",fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px', fontSize:'25px'}}>US Exchange Rate App</Card.Title>
							
							<Card.Img style={{borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', paddingBottom: '10px'}} variant="top" src={exchange} />
						
							<Card.Text style={{opacity: '70%', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '20px', borderRadius: '100% 100% 100% 100% / 22% 22% 20% 20%', height:"40%"}}>
 							<h5 className="description-projects">	Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Jquery, Forms, and more I created a unique application that incorporates a world map into comparing currency exchange rates.  The user types a US dollar amount into the form at the top of the page, then they can click on one of the many buttons laid out on the world map.  Each button represents a different countries exchange rate compared to the USD.</h5> 
 								<Card.Link style={{color: "pink" }} href="https://main.d3mttvcp2agrir.amplifyapp.com/">Click here to see the app!<br /> <a href="https://github.com/marckrivitzky/US-Currency-Exchange-Rate">{github}</a></Card.Link>
 							</Card.Text>
						</Card>
					</Col>

				</Row>
				<br/><br/>
				<Row style={{width: '65%',  position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>

					<Col>
						<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto', paddingBottom: '35px' }}>
					
							<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"70%", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px', fontSize:'25px' }}>CRUD Store App</Card.Title>
							
							<Card.Img style={{borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', paddingBottom: '10px'}} variant="top" src={store} />
							
							<Card.Text style={{opacity: '70%', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '20px', borderRadius: '100% 100% 100% 100% / 22% 22% 20% 20%', height:"40%"}}>
								<h5 className="description-projects">I created a functional store application with 13 components working together to perform all the aspects of a CRUD application.  I used a combination of class and functional components with hooks consisting of useState, setState, useHistory, and more.  In addition, I used React Router in order to create a multi page app with simple navigation.  Finally, I used React Bootstrap, React Icons, and CSS in order to design and layout my application. <br/> Click below to see the code. </h5> 
 								<Card.Link style={{color: "pink" }}><a href="https://github.com/marckrivitzky/React-Store-FinalProject">{github}</a></Card.Link>
 							</Card.Text>
						</Card>
					</Col>
					
					<Col>
						<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
					
							<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"70%",fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px', fontSize:'25px'}}>US Inflation App </Card.Title>
							
							<Card.Img  style={{borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', paddingBottom: '10px'}} variant="top" src={inflation} />
							
							<Card.Text style={{opacity: '70%', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '20px', borderRadius: '100% 100% 100% 100% / 22% 22% 20% 20%', height:"40%"}}>
 								<h5 className="description-projects">	Using ReactJS, HTML, CSS, JSX, React-Bootstrap, React-Router, Forms, Photoshop, and more I created a unique application that incorporates a timeline of important events and the Inflation rate of the USD.  Each year represented on the timeline contains a button, after you type the dollar amount you want into the form, you click one of the buttons on the timeline which will tell you how much money you typed in would have been worth today.</h5> 
 								<Card.Link style={{color: "pink" }} href="https://main.dkdigtkw0ykzh.amplifyapp.com/">Click here to see the app! <br /> <a href="https://github.com/marckrivitzky/US-Inflation-Rate">{github}</a></Card.Link>
 							</Card.Text>
						</Card>
					</Col>

				</Row>

			</div>
		)
	}
}

export default withRouter(Projects)