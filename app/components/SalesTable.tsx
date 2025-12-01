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
      {/* horizontal scroll for mid-size screens, show table on md+ and stacked cards on smaller screens */}
      <div className="overflow-x-auto">
        <table className="w-full text-left hidden md:table">
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

        {/* stacked list for small screens */}
        <div className="flex flex-col space-y-3 md:hidden">
          {data.map((row) => (
            <div key={row._id} className="p-3 border rounded">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">{new Date(row.date).toLocaleString()}</div>
                <div className="text-sm font-semibold text-indigo-600">{row.price}</div>
              </div>

              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <div>
                  <span className="font-medium mr-1">Email:</span>
                  <span className="truncate">{row.customerEmail}</span>
                </div>
                <div>
                  <span className="font-medium mr-1">Phone:</span>
                  <span>{row.customerPhone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
