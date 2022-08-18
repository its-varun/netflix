import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <>
    <Nav/>
    <Banner />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Actions Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={true} isSmallRow={true}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={true} isSmallRow={true}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true} isSmallRow={true}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true} isSmallRow={true}/>
    </>
  );
}

export default App;
