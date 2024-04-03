import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pix2 from '../../assets/Home/pix2.jpg'
import "./Section.css";

function Section() {
    return (
        <div id="about" className=''>
            <div className="about-parent pt-5">
			<Container>
                <h2 className='text-center'>About</h2>
                <Row>
                    <Col>
                    <img src={pix2} alt="picture here" srcset="" />
                    </Col>
                    <Col>
                    <div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ftco-animate ">
		            <h2 class="mb-4 ">About Me</h2>
		            <p>I write server-side logic with nestjs using SQL and NoSQL database. I am passionate to learn new things and to improve my skill as a Backend Developer.</p>
		            <ul class="about-info mt-4 px-md-0 px-2 justify-content-between align-items-center">
		            	<li class="d-flex"><span>Name:</span> <span>Fredrick Udom</span></li>
		            	<li class="d-flex"><span>Date of birth:</span> <span>December 12, </span></li>
		            	<li class="d-flex"><span>Address:</span> <span>Uyo, Nigeria</span></li>
		            	<li class="d-flex"><span>Zip code:</span> <span>520231</span></li>
		            	<li class="d-flex"><span>Email:</span> <span>fredrickudom@gmail.com</span></li>
		            	<li class="d-flex"><span>Phone: </span> <span>+234-705-767-9807</span></li>
		            </ul>
		          </div>
		        </div>
	          <div class="counter-wrap ftco-animate d-flex mt-md-3">
              <div class="text">
              	<p class="mb-4">
	                <span class="number" data-number="120">0</span>
	                <span>Project complete</span>
                </p>
                <p><a href="./resume/myResume.pdf"target="blank" class="btn btn-primary py-3 px-3">Download Resume</a></p>
              </div>
	          </div>
	        </div>
                    </Col>
                    
                </Row>
            </Container>
			</div>
        </div>
    );
}

export default Section;