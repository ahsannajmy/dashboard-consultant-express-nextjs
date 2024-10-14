import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import {
  employeeColumns,
  enum_position_map,
  enum_status_regist_map,
  enum_status_sertif_map,
  status_registrasi_color,
} from "../utils/tableContent";
import { Spinner } from "@nextui-org/spinner";
import { Pagination } from "@nextui-org/pagination";

import Link from "next/link";

export const EmployeeTable = (props) => {
  return (
    <>
      <Table
        classNames={{
          th: "bg-button1",
        }}
        isStriped
        bottomContent={
          props.totalPage > 1 ? (
            <div className="flex justify-center w-full">
              <Pagination
                showControls
                isCompact
                page={props.page}
                total={props.totalPage}
                onChange={props.changePageHandler}
                classNames={{
                  cursor: "bg-button1",
                }}
              />
            </div>
          ) : null
        }
      >
        <TableHeader columns={employeeColumns}>
          {(column) => (
            <TableColumn className="text-center" key={column.key}>
              <span className="text-xs font-semibold text-secondary">
                {column.label}
              </span>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          isLoading={props.loadingState}
          loadingContent={
            <Spinner color="black" label="Loading..." size="lg" />
          }
          emptyContent={"No employee currently"}
        >
          {props.data.map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="rounded-l-lg">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium">{employee.nama}</span>
                  <Link href={`/employees/${employee.id}`}>
                    <span className="text-gray-500 text-xs">More..</span>
                  </Link>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span
                  className={`
                    text-xs font-medium ${
                      status_registrasi_color[employee.status_registrasi]
                    } px-2 py-1 rounded-lg text-secondary`}
                >
                  {enum_status_regist_map[employee.status_registrasi]}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-xs font-medium">
                  {enum_position_map[employee.jabatan]}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-xs font-medium">
                  {enum_status_sertif_map[employee.status_sertifikasi]}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-xs font-medium">
                  {employee.status_kuasa_hukum
                    ? "KUASA HUKUM"
                    : "BUKAN KUASA HUKUM"}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className="text-xs font-medium">
                  {employee.izin_berlaku_pengacara}
                </span>
              </TableCell>
              <TableCell className="rounded-r-lg text-center">
                <span className="text-xs font-medium">
                  {employee.izin_berlaku_konsultan}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
