import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
