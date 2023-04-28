import { Component } from 'react';
import './App.css';
import TitleBar from './components/title-bar/title-bar.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menus: [],
      searchField:'',
    };
  }

  componentDidMount(){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((response) => response.json())
      .then((meals) =>
        this.setState(
          () => {
            return { menus: meals.meals};
          },
          () => {
            console.log(this.state);
          }
        )
        );
  }

  onSearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {searchField}
      }
    )
  }
  render(){
    const {menus, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMenu = menus.filter((menu) =>{
      return menu.strMeal.toLocaleLowerCase().includes(searchField);
    })

   console.log(menus);
    return (
      <div className='app'>
        <TitleBar/>
        <SearchBox onChange={onSearchChange}/>
        <CardList menus = {filteredMenu}/>
      </div>
    )
  }
}

export default App;
