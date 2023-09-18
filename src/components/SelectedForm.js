import React, { useState, useEffect } from 'react';
import styles from '../style.module.css';
 

function SelectForm() {

    const [selectedValue, setSelectedValue] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [addedItems, setAddedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
 

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

 
  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

 

  const handleAddItem = () => {

    if (selectedValue && selectedPrice) {

      const newItem = { value: selectedValue, price: parseFloat(selectedPrice) };
      setAddedItems([...addedItems, newItem]);
      setSelectedValue('');
      setSelectedPrice('');

    }

  };

 

  const handleDeleteItem = (index) => {
    const updatedItems = [...addedItems];
    updatedItems.splice(index, 1);
    setAddedItems(updatedItems);
  };


  useEffect(() => {
    const calculatedTotalPrice = addedItems.reduce(
        (accumulator, currentItem) => accumulator + currentItem.price, 0
    );
    setTotalPrice(calculatedTotalPrice);
  }, [addedItems]);

  let count = 1;

  return (

    <div>

      <h2 className={styles.subheading}>Add and Remove Items with Prices</h2>

      <div className={styles.form__wrapper}>

        <select className={styles.input} value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select an item</option>
          <option value="Cabbage">Cabbage</option>
          <option value="Strawberries">Strawberries</option>
          <option value="Bananas">Bananas</option>
          <option value="Onions">Onions</option>
          <option value="Carrots">Carrots</option>
          <option value="Florette Salad">Florette Salad</option>
          <option value="Tomoatos">Tomoatos</option>
          <option value="Lemon Grass">Lemon Grass</option>
          <option value="Battered Cod">Battered Cod</option>
          <option value="McCain Oven Chips">McCain Oven Chips</option>
          <option value="Mashed Potato">Mashed Potato</option>
        </select>
    
        <input
          className={styles.input}
          type="text"
          placeholder="Price"
          value={selectedPrice}
          onChange={handlePriceChange}
        />
        <br></br>
        <br></br>

        <button className={styles.input} onClick={handleAddItem}>Add</button>

      </div>

      <div>

        <h2 className={styles.subheading}>Added Items:</h2>

        <ul className={styles.added}>
            
          {addedItems.map((item, index) => (

            

            <li key={index}>
              <span className={styles.item__name}><span className={styles.count}>{ count++ }</span>{item.value} - £{item.price.toFixed(2)}</span>
              <button className={styles.input__small} onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>

          ))}

        </ul>

      </div>
      <div>
        <h3>Total Price:</h3>
        <h3>£{totalPrice.toFixed(2)}</h3>
      </div>

    </div>

    

  );

}

 

export default SelectForm;
