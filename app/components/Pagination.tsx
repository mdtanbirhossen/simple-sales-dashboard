export default function Pagination({ before, after, setFilters }: { before: string | null; after: string | null; setFilters: any }) {
    return (
        <div className="flex justify-between mt-4">
            <button
                disabled={!before}
                onClick={() => setFilters((f: any) => ({ ...f, before, after: "" }))}
                className="px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100"
            >
                Previous
            </button>

            <button
                disabled={!after}
                onClick={() => setFilters((f: any) => ({ ...f, after, before: "" }))}
                className="px-4 py-2 bg-gray-200 rounded disabled:bg-gray-100"
            >
                Next
            </button>
        </div>
    );
}
