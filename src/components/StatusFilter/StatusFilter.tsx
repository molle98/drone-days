import type { StatusFilter as StatusFilterType } from "../../types/Drone";

interface Props {
  value: StatusFilterType;
  onChange: (val: StatusFilterType) => void;
}

export function StatusFilter({ value, onChange }: Props) {
  return (
    <label>
      Status
      <select
        id="status-filter"
        value={value}
        onChange={(e) => onChange(e.target.value as StatusFilterType)}
      >
        <option value="all">All</option>
        <option value="idle">Idle</option>
        <option value="in_flight">In Flight</option>
        <option value="charging">Charging</option>
      </select>
    </label>
  );
}
