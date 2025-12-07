import type { ChangeEvent } from "react";
import styles from "../SearchBar/SearchBar.module.scss";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.search__label}>
        Search drones
      </label>
      <input
        className={styles.search__input}
        id="search"
        type="text"
        value={value}
        onChange={handleInput}
      />
    </div>
  );
}
