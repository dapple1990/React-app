import React, { useState, useEffect } from "react"


export const RECIPE_CORTADO = 'Cortado';
export const RECIPE_ESPRESSO = 'Espresso';
export const RECIPE_FLATWHITE = 'Flat White';

export function Counter({ type, amount }) {
  const [{ waterRatio, milkRatio, coffeeRatio }, setRatios] =
    useState({ waterRatio: 0, milkRatio: 0, coffeeRatio: 0 })
  useEffect(() => {
    switch (type) {
      case RECIPE_CORTADO:
        setRatios(() => ({ waterRatio: 2, milkRatio: 4, coffeeRatio: 3 }));
        break;
      case RECIPE_ESPRESSO:
        setRatios(() => ({ waterRatio: 2, milkRatio: 0, coffeeRatio: 2 }));
        break;
      case RECIPE_FLATWHITE:
        setRatios(() => ({ waterRatio: 2, milkRatio: 4, coffeeRatio: 4 }));
        break;
      default:
        console.log('Drink coffee be fluffy')
    }

  }, [type]);

  let water = amount * waterRatio;
  let milk = amount * milkRatio;
  let coffee = amount * coffeeRatio;

  return (
    <div className="input-container">
      <span role="img" aria-label="Coffee">
        ☕
        </span>
      <div>
        <p className="water">Water {water}</p>
        <p className="coffee">Coffee {coffee}</p>
        <p className="milk">Milk {milk}</p>
      </div>
    </div>
  );
}

export default Counter;