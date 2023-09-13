import './skills.css';

export function Skills(){
    return(
        <div id="skills-id">
		<div class="skills">
			<div class="fixed-container">
				<div class="skills-title">
					Skills
				</div>
				<div class="skills-information">
				
						<div class="first-skill">
							<div class="img1-skill"><img src="img/html-css.png"/></div>
							<div class="inf1-skill"> Proficiency in HTML for structuring web content. Strong knowledge of CSS for styling and layout.</div>
						</div>
						<div class="second-skill">
							<div class="img2-skill"><img src="img/javascript.png"/></div>
							<div class="inf2-skill"> Proficiency in JavaScript for adding interactivity and dynamic behavior to websites.</div>
						</div>
					
						<div class="third-skill">
							<div class="img3-skill"><img src="img/react.svg"/></div>
							<div class="inf3-skill">Proficiency in React: Component-Based Architecture, Virtual DOM, State Management, JSX, React Router, Lifecycle Methods, Hooks</div>
						</div>
						<div class="fourth-skill">
							<div class="img4-skill"><img src="img/github.png"/></div>
							<div class="inf4-skill"> Proficiency in using Git for version control and collaboration with other developers. </div>
						</div>
				
				</div>
				<div class="skills-information-tablet">
					<div class ="two1-tablet">
						<div class="first-skill">
							<div class="img1-skill"><img src="img/1.png"/></div>
							<div class="inf1-skill"> Вёрстка лендинг-страниц и сайтов любой сложности </div>
						</div>
						<div class="second-skill">
							<div class="img2-skill"><img src="img/2.png"/></div>
							<div class="inf2-skill"> Адаптивная вёрстка под все браузеры и устройства</div>
						</div>
					</div>	
					<div class ="two2-tablet">
						<div class="third-skill">
							<div class="img3-skill"><img src="img/3.png"/></div>
							<div class="inf3-skill"> Frontend–разработка и программирование </div>
						</div>
						<div class="fourth-skill">
							<div class="img4-skill"><img src="img/4.png"/></div>
							<div class="inf4-skill"> Исправление и доработка существующей вёрстки </div>
						</div>
					</div>
				</div>
				<div class="btn-about">
					<button class="about-me"><a href="#about-me-info-id">About me</a></button>
				</div>
			</div>	
		</div>
	</div>
    );
};