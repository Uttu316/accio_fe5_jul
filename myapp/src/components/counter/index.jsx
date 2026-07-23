import { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  const onAdd = () => {
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    console.log(value);
  };
  const onMinus = () => {
    setValue((curr) => curr - 1);
    setValue((curr) => curr - 1);
    setValue((curr) => curr - 1);
    setValue((curr) => curr - 1);
    console.log(value);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Counter</h2>
      <h3 className={styles.value} id="counter_value">
        {value}
      </h3>
      <div className={styles.actions}>
        <button className={styles.btnAdd} onClick={onAdd}>
          Add
        </button>
        <button className={styles.btnMinus} onClick={onMinus}>
          Minus
        </button>
      </div>
    </div>
  );
};

export default Counter;
