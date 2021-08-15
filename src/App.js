import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App=()=> {
  const [data,setData]=useState([]);
	const [ search, setSearch ] = useState("");
	const changeHandler = (e) => {
		setSearch(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response =>setData(response.data.photos.photo)
    
    )
		console.log(search);
	};
	return (
		<div>
			<center>
				<form onSubmit={submitHandler}>
					<h2>Galary Snapshots</h2>
					<input type="text" value={search} onChange={changeHandler} /> <br /> <br />
					<input type="submit" name="Search" />
				</form><br/>
       {data.length>=1?<Gallery data={data}/>:<h2>No Data Found</h2>} 
			</center>
		</div>
	);
}

export default App;
