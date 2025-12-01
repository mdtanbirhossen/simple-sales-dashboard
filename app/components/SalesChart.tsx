import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function SalesChart({ data }: { data: any[] }) {
    const formatted = data.map((d) => ({
        day: d.day,
        total: d.totalSale,
    }));

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-4">Total Sales Over Time</h2>

            <LineChart width={800} height={300} data={formatted}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
        </div>
    );
}
