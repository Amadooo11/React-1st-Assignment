import './App.css';
import cat from './images/cat.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/country';
import { Container } from '@mui/material';

function App() {

  const [data,setdata] = useState([]);
  const [isData,setIsData] = useState(false);


  async function getCountriesData() {
	try {
		const { data } = await axios.get("http://universities.hipolabs.com/search?country=United+States");
    
    const filtered = [];
    filtered.push(data[0]);
    console.log(filtered);
    setdata(filtered);
    setIsData(true)

	}
	catch (error) {
		console.log(error);
	}
}

useEffect(()=> {
  getCountriesData();
}, [])


  return (
      <Container maxWidth="lg">
        <div>
          <br/>
          <br/>
        </div>
      <div className='row'>
        <div className='col-6'>
          <img src={cat} width="400" height="250" />
        </div>
        <div className='col-6'>
          <h1>Faisal</h1>
          <h2>Your iD</h2>
        </div>
      </div>
      <br />    <br />
    {isData && <Country data={data}/>}
    </Container>  
  );
}

export default App;
