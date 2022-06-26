import '../App.css'

const Showcase = () => {

    return (
        <>
            <section className='bg-dark text-light text-center'>
                <div className='container py-4'>
                    <div className='p-4'>
                        <h2>
                            Välkommen till
                            <span className='text-danger'> SpelGalleriet</span>
                        </h2>
                        <p className='lead my-4'>
                            En webbsida där du kan söka efter erbjudanden på digitala PC-spel och kolla vilka spel som är på rea just nu från en mängd olika spelbutiker. Här kan du hitta det billigaste priset för ett visst spel och även få information om prishistoriken. API:et som används på denna webbsida är CheapShark API.
                        </p>
                        <button className='btn btn-danger bg-lg mb-3'>
                            <a
                                href='https://apidocs.cheapshark.com/'
                                className='link-light text-dark'
                            >
                                Läs mer om CheapShark
                            </a>
                        </button>
                    </div>
                    <div>

                        <div id="carouselExampleCaptions" className="carousel slide carousel-fade pb-5" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner rounded-5 shadow-4-strong">

                                <div className="carousel-item active">
                                    <img src="https://images.ctfassets.net/vfkpgemp7ek3/3098815104/c9eb4e66e6dcd3efec72034b80291feb/call-of-duty-mobile-first-week-china.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Call of Duty</h5>
                                        <p>En första-person shooter-videospelsserie publicerad av Activision.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/133845-games-review-the-witcher-3-wild-hunt-review-image1-07yik9ul5s.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>The Witcher 3: Wild Hunt</h5>
                                        <p>Ett actionrollspel som utspelar sig i en öppen spelvärld, utvecklad och utgivet av den polska datorspelsutvecklaren CD Projekt RED..</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://sm.ign.com/t/ign_nordic/gallery/e/elden-ring/elden-ring-gameplay-trailer-4k-screenshots-summer-of-games_fpa2.1080.jpg" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Elden Ring</h5>
                                        <p>Ett actionrollspel utvecklat av FromSoftware och publicerat av Bandai Namco Entertainment.</p>
                                    </div>
                                </div>

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>                  
                </div>
                

            </section>

        </>
    )
}

export default Showcase
