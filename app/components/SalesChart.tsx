import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function SalesChart({ data }: { data: any[] }) {
    const formatted = data.map((d) => ({
        day: d.day,
        total: d.totalSale,
    }));

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-4">Total Sales Over Time</h2>

            <div className="w-full h-64 sm:h-72 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={formatted}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                        <Line type="monotone" dataKey="total" stroke="#4F46E5" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
