import type { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Search drones</label>
      <input id="search" type="text" value={value} onChange={handleInput} />
    </div>
  );
}
