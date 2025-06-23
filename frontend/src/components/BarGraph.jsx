import { BarChart, Bar, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BarGraph({ data }) {
    return (
        <ResponsiveContainer width={"60%"} height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="Frequency" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}