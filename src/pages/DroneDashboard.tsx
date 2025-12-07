import { useDrones } from "../hooks/useDrones";
import { DroneList } from "../components/DroneList/DroneList";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { SortSelect } from "../components/SortSelect/SortSelect";
import { StatusFilter } from "../components/StatusFilter/StatusFilter";

export default function DroneDashboard() {
  const {
    drones,
    search,
    setSearch,
    sort,
    setSort,
    statusFilter,
    setStatusFilter,
  } = useDrones();

  return (
    <div>
      <div>
        <Header />

        <div>
          <SearchBar value={search} onChange={setSearch} />
          <SortSelect value={sort} onChange={setSort} />
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        </div>

        <DroneList drones={drones} />
      </div>
    </div>
  );
}
