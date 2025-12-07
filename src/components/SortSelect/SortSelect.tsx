interface SortSelectProps {
  value: "name" | "battery";
  onChange: (val: "name" | "battery") => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div>
      <label htmlFor="sort">Sort by</label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as "name" | "battery")}
      >
        <option value="name">Sort by Name</option>
        <option value="battery">Sort by Battery</option>
      </select>
    </div>
  );
}
