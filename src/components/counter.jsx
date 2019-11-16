import React from "react"

export const RECIPE_CORTADO = 'Cortado';
export const RECIPE_ESPRESSO = 'Espresso';
export const RECIPE_FLATWHITE = 'Flat White';

export function Counter({ type, amount }) {

  const ingredients = () => {
    let waterRatio, milkRatio, coffeeRatio = 0;
    switch (type) {
      case RECIPE_CORTADO:
        waterRatio = 2;
        milkRatio = 4;
        coffeeRatio = 3;
        break;
      case RECIPE_ESPRESSO:
        waterRatio = 2;
        milkRatio = 0;
        coffeeRatio = 2;
        break;
      case RECIPE_FLATWHITE:
        waterRatio = 2;
        milkRatio = 4;
        coffeeRatio = 3;
        break;
      default:
        console.log('Drink coffee be fluffy')
    }
    let water = amount * waterRatio;
    let milk = amount * milkRatio;
    let coffee = amount * coffeeRatio;
    return (
      <div>
        <p className="water">Water {water}</p>
        <p className="coffee">Coffee {coffee}</p>
        <p className="milk">Milk {milk}</p>
      </div>
    )
  }

  return (
    <div className="input-container">
      <span role="img" aria-label="Coffee">
        ☕
        </span>
      {ingredients()}
    </div>
  );
}


export default Counter;