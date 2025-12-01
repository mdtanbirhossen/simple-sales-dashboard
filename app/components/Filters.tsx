export default function Filters({ filters, setFilters }: { filters: any; setFilters: any }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white p-4 rounded shadow">

            <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="border p-2 rounded"
            />

            <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="border p-2 rounded"
            />

            <input
                type="number"
                placeholder="Min Price"
                value={filters.priceMin}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                className="border p-2 rounded"
            />

            <input
                type="email"
                placeholder="Email"
                value={filters.email}
                onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                className="border p-2 rounded"
            />

            <input
                type="text"
                placeholder="Phone"
                value={filters.phone}
                onChange={(e) => setFilters({ ...filters, phone: e.target.value })}
                className="border p-2 rounded"
            />
        </div>
    );
}
