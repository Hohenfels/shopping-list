import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const App = () => {
  const savedShoppingList = localStorage.getItem("shoppingList");
  const [items, setItems] = useState(
    savedShoppingList ? JSON.parse(savedShoppingList) : []
  );

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.title = "My shopping list";
    localStorage.setItem("shoppingList", JSON.stringify(items));
  });

  const total = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleNewItems = () => {
    if (inputValue) {
      if (!items.find(({ itemName }) => itemName === inputValue)) {
        const newItem = {
          itemName: inputValue,
          isSelected: false,
          quantity: 1,
        };
        setItems([...items, newItem]);
      } else {
        alert("Cette élément existe déjà dans la liste :-)");
      }
    }
  };

  const handleKeyEvent = (event) => {
    if (event.key === "Enter") {
      handleNewItems();
    }
  };

  const handleItemQuantity = (index, increase = true) => {
    const newItems = [...items];

    if (!increase) {
      if (newItems[index].quantity - 1 <= 0) {
        const itemsWithoutCurrentIndex = items.filter(
          (item) => item.itemName !== newItems[index].itemName
        );

        setItems(itemsWithoutCurrentIndex);
        return;
      } else {
        newItems[index].quantity--;
      }
    } else {
      newItems[index].quantity++;
    }
    setItems(newItems);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            onChange={(event) => setInputValue(event.target.value)}
            onKeyPress={(event) => handleKeyEvent(event)}
            className="add-item-input"
            placeholder="Truc a acheter"
            maxLength="15"
          />
          <button onClick={handleNewItems}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div key={`${item.itemName}-${index}`} className="item-container">
              <div className="item-name">
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
              <div className="quantity">
                <button>
                  <FontAwesomeIcon
                    onClick={() => handleItemQuantity(index, false)}
                    icon={faChevronLeft}
                  />
                </button>
                <span>{item.quantity}</span>
                <button>
                  <FontAwesomeIcon
                    onClick={() => handleItemQuantity(index)}
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="total">Total: {total}</div>
      </div>
    </div>
  );
};

export default App;
