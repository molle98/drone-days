import type { Drone } from "../types/Drone";

export const drones: Drone[] = [
    {
    id: "DR-001",
    name: "Skyhawk A1",
    status: "idle",
    battery: 87,
    location: "Sector 12",
    lastUpdated: "2025-12-01T10:30:00Z",
  },
  {
    id: "DR-002",
    name: "Falcon X3",
    status: "in_flight",
    battery: 42,
    location: "Sector 7",
    lastUpdated: "2025-12-01T10:28:00Z",
  },
  {
    id: "DR-003",
    name: "Eagle Pro",
    status: "charging",
    battery: 12,
    location: "Docking Station 2",
    lastUpdated: "2025-12-01T09:58:00Z",
  },
]