import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Cards from './components/Cards'


const EmojiMaker = props => (
  <span
  className="emoji"
  role="img"
  aria-label={props.label ? props.label : ""}
  aria-hidden={props.label ? "false" : "true"}
>
  {props.symbol}
</span>
)



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [swCharacters, setswCharacters] = useState([]) 

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      // console.log(res.data)
      setswCharacters(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header"><EmojiMaker label="Star" symbol="⭐"/>Characters<EmojiMaker label="Star" symbol="⭐"/></h1>
      <Cards swCharacters={swCharacters}></Cards>
    </div>
  );
}

export default App;
