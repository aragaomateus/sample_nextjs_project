import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/ListOperations.module.css';

const ListOperationsPage = () => {
  const [sampleList, setSampleList] = useState([5, 3, 8, 1, 9, 6, 7]);
  const [appendValue, setAppendValue] = useState('');
  const [indexValue, setIndexValue] = useState('');
  const [popIndex, setPopIndex] = useState('');
  const [indexDisplay, setIndexDisplay] = useState('');

  const updateListDisplay = () => {
    return sampleList.map((item, index) => (
      <div key={index} className={styles.element}>
        {item}
      </div>
    ));
  };

  const handleAppend = () => {
    const newValue = parseInt(appendValue);
    if (!isNaN(newValue)) {
      setSampleList([...sampleList, newValue]);
    }
  };

  const handleIndex = () => {
    const searchValue = parseInt(indexValue);
    const index = sampleList.indexOf(searchValue);
    const displayText = index !== -1 ? `Index of ${searchValue}: ${index}` : "Value not found";
    setIndexDisplay(displayText);
  };

  const handlePop = () => {
    const index = parseInt(popIndex);
    if (!isNaN(index) && index >= 0 && index < sampleList.length) {
      const newList = [...sampleList];
      newList.splice(index, 1);
      setSampleList(newList);
    } else {
      setSampleList(sampleList.slice(0, -1));
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>List Operations</h1>
        <div className={styles.listContainer} id="list-container">
          {updateListDisplay()}
        </div>
        <input type="number" value={appendValue} onChange={(e) => setAppendValue(e.target.value)} id="append-value" />
        <button onClick={handleAppend} id="append-btn">Append</button>
        <input type="number" value={indexValue} onChange={(e) => setIndexValue(e.target.value)} id="index-value" />
        <button onClick={handleIndex} id="index-btn">Find Index</button>
        <div id="index-display">{indexDisplay}</div>
        <input type="number" value={popIndex} onChange={(e) => setPopIndex(e.target.value)} id="pop-index" />
        <button onClick={handlePop} id="pop-btn">Pop</button>
      </div>
    </div>
  );
};

export default ListOperationsPage;
