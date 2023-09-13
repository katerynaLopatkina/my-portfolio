import './portfolio.css'

export function Portfolio(){
    return(
        <div id="my-portfolio-id">
		<div class="my-portfolio">
			<div class="fixed-container">
				<div class="my-portfolio-title">
					My Portfolio
				</div>
				<div class="portfolio-slider">

                    <div className='portfolio-1'>
                        <a href="https://katerynalopatkina.github.io/online-cinema/" >
                            <div class="portfolio-1-img">
                                <img src="img/online-cinema.png" alt="Online cinema"/>
                            </div>
                            <div class="portfolio-1-inf">
                                Online cinema
                            </div>
                        </a>
                    </div>

                    <div className='portfolio-2'>
                        <a href="https://katerynalopatkina.github.io/fortnite-shop-react/">
                            <div class="portfolio-2-img">
                                <img src="img/fortnite-shop.png"/>
                            </div>
                            <div class="portfolio-2-inf">
                                Fortnite shop
                            </div>
                        </a>
                    </div>
{/* 
                    <div className='portfolio-3'>
                        <a href="https://katerynalopatkina.github.io/online-cinema/">
                            <div class="portfolio-3-img">
                                <img src="img/porf1.png"/>
                            </div>
                            <div class="portfolio-3-inf">
                                Сайт дерматолога
                            </div>
                        </a>
                    </div> */}
				</div>
				<div class="btn-about">
					<button class="about-me">
                        <a href="https://www.behance.net/clo_design">
                            My Behince
                        </a>
                    </button>
				</div>
			</div>
		</div>
	</div>
    )
}