import React from "react";
import styles from "./Input.module.css";
const InputElement = ({ label, type, id, placeholder, value }) => {
  return (
    <>
      <label for="category" class={styles.formLabel}>
        {label}
      </label>
      <input
        type={type}
        class={styles.formControl}
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default InputElement;
