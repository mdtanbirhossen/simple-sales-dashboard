export default function Filters({ filters, setFilters }: { filters: any; setFilters: any }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 bg-white p-4 rounded shadow">

            <input
                type="date"
                aria-label="Start date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
                className="border p-2 rounded w-full"
            />

            <input
                type="date"
                aria-label="End date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
                className="border p-2 rounded w-full"
            />

            <input
                type="number"
                placeholder="Min Price"
                aria-label="Minimum price"
                value={filters.priceMin}
                onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                className="border p-2 rounded w-full"
            />

            <input
                type="email"
                placeholder="Email"
                aria-label="Customer email"
                value={filters.email}
                onChange={(e) => setFilters({ ...filters, email: e.target.value })}
                className="border p-2 rounded w-full"
            />

            <input
                type="text"
                placeholder="Phone"
                aria-label="Customer phone"
                value={filters.phone}
                onChange={(e) => setFilters({ ...filters, phone: e.target.value })}
                className="border p-2 rounded w-full"
            />
        </div>
    );
}
