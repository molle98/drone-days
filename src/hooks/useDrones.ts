import { useState, useMemo } from "react";
import { drones as mock } from "../data/drones";
import type { Status } from "../types/Drone";

export function useDrones() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<"name" | "battery">("name");
    const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");

    const filtered = useMemo(() => {
        let list = [...mock];

        if (search) {
            list = list.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (statusFilter !== "all") {
            list.filter(d => d.status === statusFilter);
        }

        list.sort((a,b) => {
            if (sort === "name") return a.name.localeCompare(b.name);
            return b.battery - a.battery;
        });

        return list;

    }, [search, sort, statusFilter]);

    return {
        search,
        setSearch,
        sort,
        setSort,
        statusFilter,
        setStatusFilter,
        drones: filtered,
    }
}