import docker from '../../assets/img/docker.png';
import nestjs from '../../assets/img/nestjs.png';
import typescript from '../../assets/img/typescript_node.png';
import './Skill.css'
const Skill = () => {
	return (

		<div className="skill">



			<section class="ftco-section" id="services-section">
				<div class="container">
					<div class="row justify-content-center py-2">
						<div class="col-md-12 heading-section text-center ftco-animate">
							<h2 class="big big-2"><p>Services</p></h2>
							<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
						</div>
					</div>

					<div class="row service-section">
						<div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={nestjs} alt="" class="img-fluid " />
								</span>
								<div class="desc">
									<h3>I write Nestjs for building scalable server-side APIs</h3>
								</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={typescript} alt="" class="img-fluid" />
								</span>
								<div class="desc">
									<h3>I use Typescript and Nodejs with Nestjs</h3>
								</div>
							</a>
						</div>
						<div class="col-lg-4 col-md-6 text-center d-flex ftco-animate shadow">
							<a href="#" class="services-1 w-100">
								<span class="icon">
									<img src={docker} alt="" class="img-fluid" />
								</span>
								<div class="desc">
									<h3>Using Docker for containerization</h3>
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