import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pix2 from '../../assets/Home/pix2.jpg'
import "./About.css";

function About() {
	return (
		<section class="ftco-about img ftco-section ftco-no-pb pt-5 my-5" id="about-section">
    	<div class="container">
    		<div class="row d-flex">
				
			<h2 class="mb-4  pt-5 h2"><p>About Me</p></h2>
    			<div class="col-md-6 col-lg-6 d-flex">
    				<div class="img-about img d-flex">
    					<div class="overlay"></div>
	    				<div class="img pix2 d-flex align-self-stretch align-items-center">
							<img src={pix2} alt="" srcset="" />
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-6 pl-lg-5 pb-5 context">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ftco-animate ">
		           
		           <div className="shadow px-3 mt-5 about  ">
				   <p>I write server-side logic with nestjs using SQL and NoSQL database. I am passionate to learn new things and to improve my skill as a Backend Developer.   I am a season developer with 2 years of experience on ExpressJs/NestJs and Html, Css, Boostrap. I guide aspiring developers who are eager to dive into the world of tech through web development, fostering their growth and problem-solving skills.</p>
					
				   <p className='pt-3'>I am a seasoned web developer with more than 6 years of full-stack web engineering experience. My expertise in front-end and back-end web development enables me to create dynamic and user-friendly web applications. With my experience, I guide aspiring developers who are eager to dive into the world of tech through web development, fostering their growth and problem-solving skills.
				   </p>
		            {/* <ul class="about-info mt-4 px-md-0 px-2 ">
		            	<li class="d-flex"><span>Name:</span> <span className='info'>Fredrick Udom</span></li>
		            	<li class="d-flex"><span>Date of birth:</span > <span className='info'>December 12, </span></li>
		            	<li class="d-flex"><span>Address:</span> <span className='info'>Uyo, Nigeria</span></li>
		            	<li class="d-flex"><span>Zip code:</span> <span className='info'>520231</span></li>
		            	<li class="d-flex"><span>Email:</span> <span className='info'>fredrickudom@gmail.com</span></li>
		            	<li class="d-flex"><span>Phone: </span> <span className='info'>+234-705-767-9807</span></li>
		            </ul> */}
				   </div>
		          </div>
		        </div>
	          <div class="counter-wrap ftco-animate d-flex mt-md-3">
              <div class="text">
              	{/* <p class="mb-4">
	                <span class="number" data-number="120">0</span>
	                <span>Project complete</span>
                </p> */}
                <p><a href="./resume/myResume.pdf"target="blank" class="btn btn-primary py-3 px-3">Download Resume</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
	);
}

export default About;