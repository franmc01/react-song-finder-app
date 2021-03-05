import { Fragment, useState, useEffect } from 'react';
import { Formulario } from './components/Formulario';
import axios from 'axios';
import { Letra } from './components/Letra';

function App() {

  const [search, setSearch] = useState({});
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    const url = `https://api.lyrics.ovh/v1/${search?.artist}/${search?.music}`;
    if (Object.entries(search).length !== 0) {
      consultarApi(url);
    }
  }, [search])

  const consultarApi = async (url) => {
    const result = await axios.get(url);
    const { data } = result;
    setLyrics(data.lyrics)
  }

  return (
    <Fragment>
      <Formulario setSearch={setSearch}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

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
