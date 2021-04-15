import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'



function App() {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then (res => {
      setUsers(res.data)
    })
    .catch (err => {
      console.log(err)
    }, []);
    
  })

  return (
    <div className="App">
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}

export default App;
