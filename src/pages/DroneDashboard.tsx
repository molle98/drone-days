import { useDrones } from "../hooks/useDrones";
import { DroneList } from "../components/DroneList";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { SortSelect } from "../components/SortSelect";
import { StatusFilter } from "../components/StatusFilter";

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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />

        <div className="flex flex-col sm:flex-row gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <SortSelect value={sort} onChange={setSort} />
          <StatusFilter value={statusFilter} onChange={setStatusFilter} />
        </div>

        <DroneList drones={drones} />
      </div>
    </div>
  );
}
