import { Component } from "react";
import './card-list.styles.css';
import Card from "./card.component";

class CardList extends Component{
    render(){
        console.log(this.props);
        const {menus} = this.props;
        console.log(menus);
        return(
            <ul className="card-list">
                {menus.map((menu) => (
                    <Card menu={menu} key={menu.idMeal}/>
                ))}
            </ul>
        )
    }
}

export default CardList;