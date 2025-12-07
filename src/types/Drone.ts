export interface Drone {
  id: string;
  name: string;
  status: "idle" | "in_flight" | "charging";
  battery: number; // 0–100
  location: string;
  lastUpdated: string; // ISO date
}

export type Status = "idle" | "in_flight"| "charging";
export type SortField = "name" | "battery";
export type StatusFilter = "all" | Status;
