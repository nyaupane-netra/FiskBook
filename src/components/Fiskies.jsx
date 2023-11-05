import '../Fiskies.css'
import { useState, useEffect} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';



const Fiskies = () => {

    // const superheroGrid = document.querySelector('#superhero-grid');
    // const searchBtn = document.querySelector('#btnsearch')
    const [superHeros, setSuperheroes] = useState([]);
    const [searchInput, setSearch] = useState('')

    

    const getAlldata = () =>{
        fetch("https://raw.githubusercontent.com/rejinnepal/fisk-tsu-hackathon/main/our_team_details")
            .then(response => response.json())
            .then((data) => {
                setSuperheroes(data);
            });
    }
    useEffect(()=>{
        getAlldata()
    }, [])

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

    function filterByName() {

        let filteredArray = [];
        if (searchInput !== "") {
            superHeros.forEach((hero) => {
                if (hero.name.toLowerCase()
                    .startsWith(searchInput.toLowerCase()))
                    filteredArray.push(hero);
                    setSuperheroes(filteredArray)
                
            });
        } else {
            getAlldata();
        }
        console.log({ searchInput });
        return filteredArray;
    }


    return (
        <>
            <body >


                <h1 style={{marginTop: '70px'}} id="first">Latest Advice From Our Students</h1>

                <p id="second"> Want to advice people who look up to you? Contact Us.</p>

                <div class="row" style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <div class="col-6">
                        <div class="input-group">
                            <input id="search-input" type="text" class="form-control" placeholder="Search Your Post" aria-label="" onChange={handleSearchInput} />
                            <button id="btn-search" type="button" class="btns btn-primary" onClick={filterByName}>Search</button>
                        </div>
                    </div>
                </div>



                <Row xs={1} md={2} className="g-4">
                    {superHeros.map(hero => (
                        <Col style={{ marginLeft: '20px' }}>
                            <Card>
                                <Card.Img style={{ maxHeight: '300px' }} variant="top" src={hero.image} />
                                <Card.Body>
                                    <Card.Title>{hero.name}</Card.Title>
                                    <Card.Text>
                                        {hero.by}
                                    </Card.Text>
                                    <Card.Text>
                                        {hero.advice}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))}
                </Row>
                

                <br /><br /><br />

                <div class="end-part">
                    <div class="connection">Connect with us SOCIALLY !!! </div>

                    <footer class="social-footer">
                    <div className="social-icons">
                        <a href="https://youtube.com">
                            <SocialIcon  network="youtube" ></SocialIcon>
                        </a>
                        
                        <a href="https://facebook.com">
                            <SocialIcon  network="facebook"  ></SocialIcon>
                        </a>
                        
                        <a href="https://instagram.com">
                            <SocialIcon network="instagram" ></SocialIcon>
                        </a>
                    </div>
                    </footer>

                    <footer>
                        <p class="cr">© FiskBook 2023</p>
                    </footer>
                </div>
            </body>
        </>

    )
}

export default Fiskies