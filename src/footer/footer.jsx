import './footer.css'

export function Footer(){
    return(
        <div>
        <div class="footer">
		<div class="fixed-container">
			<div class="left-footer">
				<div class = "nav-footer1"><a  href="#skills-id">Skills</a></div>
				<div class = "nav-footer2"><a href="#my-portfolio-id">My Portfolio</a></div>
				<div class = "nav-footer3"><a href="#about-me-info-id">My Degree</a></div>
			</div>
			<div class="center-footer">
				<div class="tel-footer">
					<div class="img-tel-footer"><img src="img/tel.png"/></div>
					<div class="tel-number-footer">+38(066) 218 77 71</div>
				</div>
				<div class="email-footer">
					<div class="img-email-footer"><img src="img/email.png"/></div>
					<div class="email-txt-footer">design.lopatkina@gmail.com</div>
				</div>
			</div>
			<div class="right-footer">
				<div class="button-footer"><button><a href="https://t.me/equin15">Message me on Telegram</a></button></div>
				<div class="icons-footer">
					<div class="facebook-icon"><a href="#"><img src="img/facebook.png"/></a></div>
					<div class="instagram-icon"><a href="#"><img src="img/instagram.png"/></a></div>
				</div>
			</div>
		</div>
	</div>
    <div class="by">
		<div class="fixed-container">
			<div class="by-info">@ Catherina Lopatkina,2023</div>
		</div>
	</div>
    </div>
    )
}