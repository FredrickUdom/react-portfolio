import docker from '../../assets/img/docker.png';
import nestjs from '../../assets/img/nestjs.png';
import typescript from '../../assets/img/typescript_node.png';
import './Skill.css'
const Skill = () => {
    return ( 

       <div className="skill row">
        

        
	<section class="ftco-section" id="services-section">
		<div class="container">
			<div class="row justify-content-center py-5 mt-5">
				<div class="col-md-12 heading-section text-center ftco-animate">
					<h1 class="big big-2">Services</h1>
					{/* <h2 class="mb-4">Services</h2> */}
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
				</div>
			</div>

			<div class="row justify-content-between ">
				<div class="col-md-3 text-center d-flex ftco-animate shadow">
					<a href="#" class="services-1">
						<span class="">
							 <i class="flaticon-analysis"></i> 
							<img src={nestjs} alt="" srcset="" width="70%"/>
						</span>
						<div class="desc">
							<h3 class="mb-5">I write Nestjs for building and developing scalable and maintainable
								server-side APIs for both web applications and mobile applications</h3>
						</div>
					</a>
				</div>
				<div class="col-md-3 text-center d-flex ftco-animate shadow">
					<a href="#" class="services-1">
						<span class="icon">
							<img src={typescript} alt="" srcset="" width="70%"/>
						</span>
						<div class="desc">
							<h3 class="mb-5">I write Typescript and Nodejs when working on a project in Nestjs</h3>
						</div>
					</a>
				</div>
				<div class="col-md-3 text-center d-flex ftco-animate shadow">
					<a href="#" class="services-1">
						<span class="icon">
							<img src={docker} alt="" srcset="" width="30%"/>
						</span>
						<div class="desc">
							<h3 class="mb-5">Using docker container for building, shipping, and running applications in
								containers making it lightweightand portable.</h3>
						</div>
					</a>
				</div>

			</div>
		</div>
	</section>

       </div>
     );
}
 
export default Skill;