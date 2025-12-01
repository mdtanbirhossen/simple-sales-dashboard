"use client";

import { useState } from "react";
import { useAuthToken } from "./hooks/useAuth";
import { useSales } from "./hooks/useSales";
import Filters from "./components/Filters";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import Pagination from "./components/Pagination";

export default function Dashboard() {
  const { data: token, isLoading: tokenLoading } = useAuthToken();
  console.log("token", token)

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    priceMin: "",
    email: "",
    phone: "",
    sortBy: "date",
    sortOrder: "asc",
    after: "",
    before: "",
  });

  const {
    data,
    isLoading: salesLoading,
  } = useSales(token, filters);

  const totalSales = data?.results?.TotalSales || [];
  const sales = data?.results?.Sales || [];
  const pagination = data?.pagination || {};

  if (tokenLoading) return <div>Loading...</div>;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Sales Dashboard</h1>

      <Filters filters={filters} setFilters={setFilters} />

      <SalesChart data={totalSales} />

      <SalesTable data={sales} filters={filters} setFilters={setFilters} />

      <Pagination
        before={pagination.before}
        after={pagination.after}
        setFilters={setFilters}
      />
    </div>
  );
}
