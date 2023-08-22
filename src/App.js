import React,{useState} from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import DisplayImage from './Components/DisplayImage';

function App() {
  const [search,setSearch]=useState('');
  return (
    <div className="App">
      <SearchBar setSearch={setSearch}/>
      <DisplayImage search={search}/>

      <h3>Made By PIYUSH JAIN ❤️</h3>
    </div>
  );
}

export default App;
