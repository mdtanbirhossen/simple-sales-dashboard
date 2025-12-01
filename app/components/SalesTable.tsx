import { FaSort } from "react-icons/fa";

export default function SalesTable({ data, filters, setFilters }: { data: any[]; filters: any; setFilters: any }) {
  const toggleSort = (field:any) => {
    const order =
      filters.sortBy === field && filters.sortOrder === "asc"
        ? "desc"
        : "asc";

    setFilters({ ...filters, sortBy: field, sortOrder: order });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th onClick={() => toggleSort("date")} className="cursor-pointer">
              Date <FaSort className="inline" />
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th onClick={() => toggleSort("price")} className="cursor-pointer">
              Price <FaSort className="inline" />
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row._id} className="border-t">
              <td>{new Date(row.date).toLocaleString()}</td>
              <td>{row.customerEmail}</td>
              <td>{row.customerPhone}</td>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
