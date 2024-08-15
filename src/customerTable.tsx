import {SortingState, RowModel, useReactTable, createColumnHelper, getCoreRowModel, HeaderContext, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';
import React, { useState } from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box
} from '@chakra-ui/react'
import { tabClasses } from '@mui/material';


const DATA = [
  { id: '1', name: 'Tanner', age: 33, status: 'Married' },
  { id: '2', name: 'Kevin', age: 27, status: 'Single' },
  { id: '3', name: 'Jenny', age: 26, status: 'Single' },
  { id: '4', name: 'John', age: 33, status: 'Married' },
  { id: '5', name: 'Katie', age: 27, status: 'Single' },
  { id: '6', name: 'Jenny', age: 26, status: 'Single' },
  { id: '7', name: 'John', age: 33, status: 'Married' },
  { id: '8', name: 'Katie', age: 27, status: 'Single' },
  { id: '9', name: 'Jenny', age: 26, status: 'Single' },
  { id: '10', name: 'John', age: 33, status: 'Married' },
  { id: '11', name: 'Katie', age: 27, status: 'Single' },
  { id: '12', name: 'Jenny', age: 26, status: 'Single' },
  { id: '13', name: 'John', age: 33, status: 'Married' },
  { id: '14', name: 'Katie', age: 27, status: 'Single' },
  { id: '15', name: 'Jenny', age: 26, status: 'Single' },
  { id: '16', name: 'John', age: 33, status: 'Married' },
  { id: '17', name: 'Katie', age: 27, status: 'Single' },
  { id: '18', name: 'Jenny', age: 26, status: 'Single' },
  { id: '19', name: 'John', age: 33, status: 'Married' },
  { id: '20', name: 'Katie', age: 27, status: 'Single' },
  { id: '21', name: 'Jenny', age: 26, status: 'Single' },
  { id: '22', name: 'John', age: 33, status: 'Married' },
  { id: '23', name: 'Katie', age: 27, status: 'Single' },
  { id: '24', name: 'Jenny', age: 26, status: 'Single' },
  { id: '25', name: 'John', age: 33, status: 'Married' },
  { id: '26', name: 'Katie', age: 27, status: 'Single' },
  { id: '27', name: 'Jenny', age: 26, status: 'Single' },
  { id: '28', name: 'John', age: 33, status: 'Married' },
  { id: '29', name: 'Katie', age: 27, status: 'Single' },
];



export default function CustomerTable() {
  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor('id', {
      header: 'ID',
      cell: info => {
        return info.getValue()
      },
      enableSorting:true

    }),
    columnHelper.accessor('name', {
      header: 'Name',
      enableSorting:true,

    }),
    columnHelper.accessor('age', {
      header: 'Age',
      enableSorting:true

    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => {
        return info.getValue() === 'Married' ? '👫' : '🚶‍♂️'
      },
      enableSorting:true

    }),
  ];

  let [data, setData] = useState(DATA);
  let [filter, setFilter] = useState('');
  let [sort, setSort] = useState<SortingState>([]);
  let table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting:sort,
      globalFilter:filter
    },
    onSortingChange: setSort,
    onGlobalFilterChange:setFilter,
    getFilteredRowModel:getFilteredRowModel()
  });


  return (
    <TableContainer className='flex justify-center'>
      <input type="text" value={filter} onChange={(e) => {
        setFilter(e.target.value)
      }} className="border border-slate-500 rounded-lg p-2 mb-4" placeholder="Search..." />
      <table className="max-w-4xl w-full border-collapse border border-slate-500 rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
        <caption className="caption-top text-2xl font-bold mb-4 text-center text-gray-300">Customer Data</caption>
        <thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <tr className='bg-gray-700' key={headerGroup.id}>
                {
                  headerGroup.headers.map((header) => (
                    <th className='border-b border-slate-600 px-6 py-4 text-left text-white uppercase tracking-wider font-semibold' key={header.id} onClick={header.column.getToggleSortingHandler()}>
                     {header.isPlaceholder ? null : (
                        <div className="flex items-center">
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getIsSorted() === 'asc' ? ' 🔼' : header.column.getIsSorted() === 'desc' ? ' 🔽' : null}
                         
                        </div>
                      )}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody>
          {
            table.getRowModel().rows.map(row => (
              <tr className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200" key={row.id}>
                {
                  row.getVisibleCells().map(cell => (
                    <td className="px-6 py-4 border-b border-slate-600 text-white" key={cell.id}>
                      <p className="text-center">{flexRender(cell.column.columnDef.cell, cell.getContext())}</p>

                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='flex flex-row space-x-8 justify-center my-10'>
        <button onClick={() => {
          table.previousPage()

        }}>
          Previous
        </button>
        <button onClick={() => {
          table.nextPage()
        }}>
          Next
        </button>
        <button onClick={() => {
          table.setPageIndex(table.getPageCount() - 1)
        }}>
          Last
        </button>
        <button onClick={() => {
          table.setPageIndex(0)
        }}>
          First
        </button>

      </div>

    </TableContainer>
  );
}
