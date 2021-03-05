import { Fragment, useState, useEffect } from 'react';
import { Formulario } from './components/Formulario';
import axios from 'axios';
import { Letra } from './components/Letra';
import { Informacion } from './components/Informacion';

function App() {

  const [search, setSearch] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [information, setInformation] = useState({});

  useEffect(() => {
    const urlOne = `https://api.lyrics.ovh/v1/${search?.artist}/${search?.music}`;
    const urlTwo = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search?.artist}`;
    if (Object.entries(search).length !== 0) {
      Promise.all([
        consultarApiLyrics(urlOne),
        consultarApiArtist(urlTwo)
      ])
    }
  }, [search, information])

  const consultarApiLyrics = async (urlOne) => {
    const result = await axios.get(urlOne);
    const { data } = result;
    const lyrics = data.lyrics;
    setLyrics(lyrics);
  }

  const consultarApiArtist = async (urlTwo) => {
    const result = await axios.get(urlTwo);
    const { data } = result;
    const [artist] = data.artists;
    setInformation(artist);
  }

  return (
    <Fragment>
      <Formulario setSearch={setSearch}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion information={information} />
          </div>
          <div className="col-md-6">
            <Letra lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
