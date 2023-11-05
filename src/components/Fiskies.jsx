import '../Fiskies.css'
import { useState, useEffect} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
const APIPath = "https://raw.githubusercontent.com/rejinnepal/fisk-tsu-hackathon/main/our_team_details";




const Fiskies = () => {

    // const superheroGrid = document.querySelector('#superhero-grid');
    // const searchBtn = document.querySelector('#btnsearch')

    const [presidents, setPresidents] = useState([]);
    const [searchInput, setSearchInput] = useState('')
    const [filteredPresidents, setFilteredPresidents] = useState([]);


    useEffect(() => {
        fetch(APIPath)
          .then((response) => response.json())
          .then((data) => {
            setPresidents(data);
            setFilteredPresidents(data);
          });
      }, []);


    // const getAlldata = () =>{
    //     fetch("https://raw.githubusercontent.com/rejinnepal/fisk-tsu-hackathon/main/our_team_details")
    //         .then(response => response.json())
    //         .then((data) => {
    //             setSuperheroes(data);
    //         });
    // }
    // useEffect(()=>{
    //     getAlldata()
    // }, [])

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
    }

    // function filterByName() {

    //     let filteredArray = [];
    //     if (searchInput !== "") {
    //         superHeros.forEach((hero) => {
    //             if (hero.name.toLowerCase()
    //                 .includes(searchInput.toLowerCase()))
    //                 filteredArray.push(hero);
    //                 setSuperheroes(filteredArray)
                
    //         });
    //     } else {
    //         getAlldata();
    //     }
    //     console.log({ searchInput });
    //     return filteredArray;
    // }

    // function filterByName() {
    //     let filteredArray = [];
      
    //     if (searchInput !== "") {
    //       filteredArray = superHeros.filter((hero) =>
    //         hero.name.toLowerCase().includes(searchInput.toLowerCase())
    //       );
    //     } else {
    //       getAlldata();
    //     }
      
    //     setSuperheroes(filteredArray);
    //     console.log({ searchInput });
    //     return filteredArray;
    //   }

    const updatePresidents = (data) => {
        return data.map((president) => (
          <div className="col" key={president.advice}>
            <div className="card">
              <img
                src={president.image}
                className="card-img-top"
                height="300"
                width="300"
                alt="President Image"
              />
              <div className="card-body">
                <h5 className="card-title">{president.name}</h5>
                <p className="card-by">{president.by}</p>
                <p className="card-by">{president.on}</p>
              </div>
            </div>
          </div>
        ));
      };

    // const filter = () => {
    //     if (searchInput && searchInput.length) {
    //       const filtered = presidents.filter((president) =>
    //         president.name.toLowerCase().includes(searchInput.toLowerCase())
    //       );
    //       return filtered;
    //     } else {
    //       return presidents;
    //     }
    //   };

      const filter = () => {
        if (searchInput && searchInput.length) {
          const filtered = presidents.filter((president) =>
            president.name.toLowerCase().includes(searchInput.toLowerCase())
          );
          return filtered;
        } else {
          return presidents;
        }
      };
    
      // const handleSearchInputChange = (e) => {
      //   setSearchInput(e.target.value);
      // };

      const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        // Update the filteredPresidents state
        setFilteredPresidents(filter());
      };
    
      const handleSearchButtonClick = () => {
        const filteredList = filter();
        setFilteredPresidents(filteredList);
      };
      


    return (
        <>
            <body >


                <h1 style={{marginTop: '70px'}} id="first">Latest Advice From Our Students</h1>

                <p id="second"> Want to advice people who look up to you? Contact Us.</p>

                <div class="row" style={{ marginLeft: '20px', marginBottom: '30px' }}>
                    <div class="col-6">
                        <div class="input-group">
                            <input id="search-input" type="text" class="form-control" placeholder="Search Your Post" aria-label="" value={searchInput} onChange={handleSearchInputChange} />
                            <button id="btn-search" type="button" class="btns btn-primary" onClick={handleSearchButtonClick}>Search</button>
                        </div>
                    </div>
                </div>



                <Row xs={1} md={2} className="g-4">
                {updatePresidents(filteredPresidents)}
                    {/* {superHeros.map(hero => (
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

                    ))} */}
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