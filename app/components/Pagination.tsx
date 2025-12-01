export default function Pagination({ before, after, setFilters }: { before: string | null; after: string | null; setFilters: any }) {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-2 mt-4">
            <button
                aria-label="Previous page"
                disabled={!before}
                onClick={() => setFilters((f: any) => ({ ...f, before, after: "" }))}
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100"
            >
                Previous
            </button>

            <button
                aria-label="Next page"
                disabled={!after}
                onClick={() => setFilters((f: any) => ({ ...f, after, before: "" }))}
                className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100"
            >
                Next
            </button>
        </div>
    );
}
