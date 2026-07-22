import Link from "next/link";
import { StatusDot } from "@/components/ui/StatusDot";

type DataTableProps = {
  columns: string[];
  rows: string[][];
  statusColumn: number;
  rowHrefs?: string[];
};

export function DataTable({ columns, rows, statusColumn, rowHrefs }: DataTableProps) {
  return (
    // Desktop matches the Figma width; smaller screens can scroll the table instead of compressing columns.
    <div className="w-full overflow-x-auto xl:overflow-visible">
      <table className="w-full min-w-[960px] border-collapse text-left xl:min-w-0">
        <thead>
          <tr className="h-[73px] border-y border-border">
            {columns.map((column) => (
              <th key={column} className="px-4 text-[16px] font-bold text-foreground xl:px-7">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => {
            const selected = rowIndex === rows.length - 1;
            const striped = rowIndex % 2 === 0;
            const href = rowHrefs?.[rowIndex];

            return (
              <tr
                key={`${row[0]}-${rowIndex}`}
                className={`h-[73px] border-b border-border text-[14px] transition ${
                  selected
                    ? "bg-brand text-white"
                    : striped
                      ? "bg-surface-muted text-muted hover:bg-[#ebe7e1]"
                      : "bg-white text-muted hover:bg-surface-soft"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="px-4 xl:px-7">
                    {href ? (
                      <Link href={href} className="block">
                        {cellIndex === statusColumn && !selected ? <StatusDot status={cell} /> : cell}
                      </Link>
                    ) : cellIndex === statusColumn && !selected ? (
                      <StatusDot status={cell} />
                    ) : (
                      cell
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
