import React from 'react';
import { Banner } from './component/Banner';
import { Nav } from './component/Nav';
import { Row } from './component/Row';
import { requests } from './requests';



function App() {
  return (
    <div className="App">
    <Nav />
    <Banner />
      <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
    />
    <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
    <Row title="Action Movies" fetchUrl={requests.feactActionMovies} />
    <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
    <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
    <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
