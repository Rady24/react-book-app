import React from "react";
import styles from "../styles/FormSelect.module.css";

const FormSelect = ({ value, onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select value={value} onChange={onChange} className={styles.select}>
        <option value="" disabled>
          Select a category
        </option>
        <option value="math">Math</option>
        <option value="javascript">JavaScript</option>
        <option value="teach">Teach</option>
        <option value="class">Class</option>
      </select>
    </div>
  );
};

export default FormSelect;
