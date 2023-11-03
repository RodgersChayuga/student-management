import { useState } from "react";
import { GoSearch } from "react-icons/go";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { applications } from "../../data";
import { columns } from "./column";
import DebouncedInput from "./DebounceInput";

const Table = () => {
  const [data] = useState(() => [...applications]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full mx-auto my-4 fill-gray-400">
      <div className="flex justify-between p-2 mb-2 bg-white rounded-lg">
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <GoSearch />
          </div>
          <DebouncedInput
            value={globalFilter ?? ""}
            onChange={(value) => setGlobalFilter(String(value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-40 sm:w-80 md:w-120 pl-10 p-2.5"
            placeholder="Search for items..."
          />
        </div>
      </div>
      <table className="w-full bg-white divide-y divide-gray-200 rounded-lg">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="rounded-t-xl bg-slate-200">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-3.5 px-4 text-sm sm:text-md md:text-lg font-bold text-left rtl:text-right text-gray-700  "
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " ↑",
                        desc: " ↓",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 fill-gray-400">
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-200 ">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="h-32 text-center">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
      <div className="flex items-center justify-between gap-2 mt-2 ">
        <div className="flex gap-1">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className={`flex items-center px-5 py-2 text-sm capitalize transition-colors duration-200 rounded-md gap-x-2
            text-gray-700  bg-gray-100 border border-gray-200  hover:border-orange-300
          `}
          >
            {"previous"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-gray-100 border border-gray-200 rounded-md gap-x-2 hover:border-orange-300 "
          >
            {"Next"}
          </button>
        </div>
        <div className="flex">
          <span className="flex items-center gap-1">
            <div className="mr-2 text-sm">Page</div>
            <span className="mx-2 text-sm">
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
          </span>
          <span>|</span>
          <span className="flex items-center gap-1 mx-2 text-sm">
            Go to page:
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="w-16 p-1 bg-transparent border rounded "
            />
          </span>
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className="p-2 bg-gray-100 border border-gray-200 rounded-md"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
