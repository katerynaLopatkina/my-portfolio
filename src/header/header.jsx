import './header.css'

export function Header() {
    return(
        
            	<div class="header">
		<div class="fixed-container">
			<div class="header-line">
				<div class="nav">
					<div class = "no-style"><a  href="#skills-id">Skills</a></div>
					<div class = "with-style"><a href="#my-portfolio-id">My Portfolio</a></div>
					<div class = "no-style"><a href="#about-me-info-id">My Degree</a></div>
				</div>
				<div class="nav-mobile"><img src="img/nav-button.png"/></div>
				<div class="tel">
					<a href="#">+38(066) 218 77 71</a>
				</div>
				<div class="telegram">
					<button><a href="https://t.me/equin15">Message me on Telegram</a></button>
				</div>
			</div>
			<div class="main-information">
				<div class="txt-information">
					<div class="name">
						<p>Catherina Lopatkina</p>
					</div>
					<div class="job-name">
						<p>Frontend-developer</p>
					</div>
					<div class="job-name-mob">
						<p>Frontend-developer</p>
					</div>
					<div class="more-information">
						<button><a href="#skills-id">See more</a></button>
					</div>
				</div>
				<div class="img-information">
					<div class="my-image">
						<img src="./img/my.png"/>
					</div>
					<div class="bg-img">
						<img src="./img/vector.png"/>
					</div>
				</div>
			</div>
		</div>
	</div>
    
    );
};