import'./Contact.css'
const Contact = () => {
    return ( 

		<div className="container contact mt-3 mb-5 mt-5">
		
		<div className="content">

		</div>


			<div class="row no-gutters block-9 ">
				<div class="col-md-6 order-md-last d-flex">
					
					<form action="#" class="shadow p-4 p-md-5 contact-form bg-light">
						<h5 className='text-center pb-3'>Let's Connect Via Mail</h5>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Your Name"/>
						</div>
						<div class="form-group pt-3">
							<input type="text" class="form-control" placeholder="Your Email"/>
						</div>
						<div class="form-group pt-3">
							<input type="text" class="form-control" placeholder="Subject"/>
						</div>
						<div class="form-group pt-3">
							<textarea name="" id="" cols="30" rows="7" class="form-control"
								placeholder="Message"></textarea>
						</div>
						<div class="form-group pt-3">
							<input type="submit" value="Send Message" class="btn btn-primary py-3 px-5 contact-btn"/>
						</div>
					</form>
				</div>					
				</div>

			</div>

     );
}
 
export default Contact;
{/* <div class="img" style="background-image: url(images/about.jpg);"></div> */}