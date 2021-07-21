import { useCallback, useEffect, useState } from 'react';
import Announcements from './announcements';
import Api from './api';
import './App.css';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [apiCalls, setApiCalls] = useState(0);
  const [announcements, setAnnouncements] = useState([]);

  const searchAnnouncementsCalbback = useCallback(async () => {
    setApiCalls((oldApiCalls) => oldApiCalls + 1);
    const data = await Api.searchAnnouncements(searchText);
    setAnnouncements(data);
  }, [searchText]);

  useEffect(() => {
    searchAnnouncementsCalbback();
  }, [searchAnnouncementsCalbback]);

  return (
    <div className="App">
      <div className="inputContainer">
        <h1 className="title">Dojo - React Hooks</h1>
        <input
          className="input"
          placeholder="Pesquise ..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <p>chamadas na API: {apiCalls}</p>
      </div>
      <Announcements announcements={announcements} />
    </div>
  );
}

export default App;
