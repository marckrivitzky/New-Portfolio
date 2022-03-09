
import React from "react";
import { Card, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import drawing1 from "../assets/drawing1a.png"
import drawing2 from "../assets/drawing2a.png"
import drawing6 from "../assets/drawing6a.png"
import drawing7 from "../assets/drawing7a.png"
import drawing8 from "../assets/drawing8a.png"
import drawing10 from "../assets/drawing10a.png"
import commissioned from "../assets/commissioned.jpg"

function Artwork (){
	return(	
		<div className="artwork-container">
			<h2 className="artwork-title">Personal: Photoshop and Procreate</h2>
			
			<br/><br/>

			<Row style={{width: '70%',  position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>

				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto', paddingBottom: '20px' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Daisy the Dachshund</Card.Title>
						
						<Card.Img  variant="top" src={drawing7} />
						<br/>
						
					</Card>
				</Col>
				<br/>
				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Will Smith's Tiger</Card.Title>
						
						<Card.Img  variant="top" src={drawing10} />
						<br/>
						
					</Card>
				</Col>

			</Row>
			<br/>
			<Row style={{width: '70%',  position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>

				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto', paddingBottom: '20px' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Rapper 'Lil Dicky"</Card.Title>
						
						<Card.Img  variant="top" src={drawing1} />
						<br/>
						
					</Card>
				</Col>
				<br/>
				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Snickers the Cat</Card.Title>
						
						<Card.Img  variant="top" src={drawing2} />
						<br/>
						
					</Card>
				</Col>

			</Row>
			<br/>
			<Row style={{width: '70%',  position: 'relative', marginRight: 'auto', marginLeft: 'auto'}}>

				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto', paddingBottom: '20px' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Cheetah Cub</Card.Title>
						
						<Card.Img  variant="top" src={drawing8} />
						<br/>
						
					</Card>
				</Col>
				
				<Col>
					<Card style={{backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
				
						<Card.Title style={{opacity: '70%', position: 'relative', marginLeft: 'auto', marginRight:'auto', width:"max-content", fontFamily: 'Open Sans Condensed', backgroundColor: 'rgb(48, 46, 46)', color: 'white',padding: '15px'}}>Skip the Chihuahua</Card.Title>
						
						<Card.Img  variant="top" src={drawing6} />
						<br/>
						
					</Card>
				</Col>

			</Row>
			<br/>




			<h2 className="artwork-title">Commissioned: Photoshop</h2>
		
				<Row style={{width:'65%', position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
					<Card style={{ backgroundColor: 'transparent', border: 'none',position: 'relative', marginLeft: 'auto', marginRight:'auto' }}>
							
						<br/>
						<Card.Img style={{width:'100%', position: 'relative', marginRight: 'auto', marginLeft: 'auto'}} variant="top" src={commissioned} />
						<br/>
					
					</Card>
				</Row>
		</div>
		)
		
	}

export default Artwork