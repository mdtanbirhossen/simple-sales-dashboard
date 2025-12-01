"use client";

import { useState } from "react";
import { useAuthToken } from "../hooks/useAuth";
import { useSales } from "../hooks/useSales";
import Filters from "./components/Filters";
import SalesChart from "./components/SalesChart";
import SalesTable from "./components/SalesTable";
import Pagination from "./components/Pagination";

export default function Dashboard() {
  const { data: token, isLoading: tokenLoading } = useAuthToken();
  console.log("token is", token)

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

  if (tokenLoading) return <div className=" px-4 sm:px-6 lg:px-8 py-6 h-screen w-screen flex items-center justify-center text-red-600">Loading...</div>;

  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-6">
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
