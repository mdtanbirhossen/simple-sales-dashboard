"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"; // Change path if needed

export default function SalesTable({ data, filters, setFilters }: { data: any; filters: any; setFilters: any }) {
  return (
    <div className="mt-6 border rounded-xl p-4 bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Sales List</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6 text-muted-foreground">
                No results found
              </TableCell>
            </TableRow>
          )}

          {data?.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell>{new Date(item.date).toLocaleString() || "--"}</TableCell>
              <TableCell>{item?.customerPhone || "--"}</TableCell>
              <TableCell>{item?.customerEmail || "--"}</TableCell>
              <TableCell className="font-medium">{item?.price || "--"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
