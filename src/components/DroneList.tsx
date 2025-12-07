import type { Drone } from "../types/Drone";

interface Props {
  drones: Drone[];
}

export function DroneList({ drones }: Props) {
  return (
    <ul>
      {drones.map((drone) => (
        <li key={drone.id}>
          <p>{drone.name}</p>
          <p>{drone.status}</p>
          <p>{drone.battery}%</p>
          <p>{drone.location}</p>
        </li>
      ))}
    </ul>
  );
}
