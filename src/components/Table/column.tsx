import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("", {
    id: "No",
    cell: (info) => <span>{info.row.index + 1}</span>,
    header: "No",
  }),
  columnHelper.accessor("name", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Application No.",
  }),
  columnHelper.accessor("university", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "University",
  }),
  columnHelper.accessor("country", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Country",
  }),
  columnHelper.accessor("duration", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Duration",
  }),
  columnHelper.accessor("cost", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Cost",
  }),
  columnHelper.accessor("deadline", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Duration",
  }),
  columnHelper.accessor("language", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Language",
  }),
];
