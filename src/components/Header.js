import React from "react";
import FormSelect from "./FormSelect";
import style from "../styles/Header.module.css";

const Header = ({ value, onChange, bookCount }) => {
  return (
    <div className={style.header}>
      <div className={style.title}>Book List ({bookCount} pcs)</div>
      <FormSelect value={value} onChange={onChange} />
    </div>
  );
};

export default Header;
