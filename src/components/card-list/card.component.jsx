import { Component } from "react";
import './card.styles.css';

class Card extends Component {
  render() {
    const {menu} = this.props;
    return (
        <li class="cards_item">
        <div class="card">
        <div class="card_image"><img src={menu.strMealThumb} alt={menu.strMeal}/></div>
          <div class="card_content">
            <h2 class="card_title">{menu.strMeal}</h2>
            <div class="card_text">
              <p>{menu.strInstructions}</p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
