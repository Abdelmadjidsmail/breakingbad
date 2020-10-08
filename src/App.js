import React , {useState ,useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/character/CharacterGrid' ;
import Search from './components/ui/Search' ;
import './App.css';

const App =() => {
  const [item,setItem] = useState([]) ;
  const [isLoading,setIsLoading] = useState(true) ;
  const [Query, setQuery] = useState('');


  useEffect(() => {
    const fetchItems =async ()=>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${Query}`) ;
      console.log(result.data);
      setItem(result.data) ;
      setIsLoading(false) ;

    }
    fetchItems() ;

  

  },[Query]) ;





  return (
    <div className="container">
    <Header/>
    <Search getquery={(q)=> setQuery(q)} />
    <CharacterGrid isLoading={isLoading}  items={item}/>

    </div>
  );
}

export default App;
