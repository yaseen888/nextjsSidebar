'use client';

import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Box, Button } from '@mui/material';

type User = {
  id: number;
  articleTitle: string;
  keyword: string [number];
  words: number;
  createdOn:string;

};

const UserDataGrid = () => {
  const data = useMemo<User[]>(
    () => [
      {
        id: 1,
        articleTitle: "How to Improve Your Skills in League of Legends",
        keyword: "league of legends[22400000]",
        words: 4575,
        createdOn: "20 hours ago",
      },
      {
        id: 2,
        articleTitle: "How to Master Last Hitting in League of Legends",
        keyword: "league of legends[22400000]",
        words: 3480,
        createdOn: "21 hours ago",
      },
      {
        id: 3,
        articleTitle: "7 Tips for Better Teamplay in League of Legends",
        keyword: "league of legends[22400000]",
        words: 2676,
        createdOn: "a day ago",
      },
      {
        id: 4,
        articleTitle: "Top Virtual Executive Assistant Services[2024]",
        keyword: "virtual executive assistant[2900]",
        words: 2408,
        createdOn: "1 oct 24",
      },
      {
        id: 5,
        articleTitle: "Unlimited Graphic Design services",
        keyword: "unlimited graphic design services[390]",
        words: 1793,
        createdOn: "...",
      },
  
    ],
    []
  );

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'articleTitle',
        header: 'Article Title',
      },
      {
        accessorKey: 'keyword',
        header: 'Keyword[Traffic]',
      },
      {
        accessorKey: 'words',
        header: 'Words',
        size: 80,
      },
       {
        accessorKey: 'createdOn',
        header: 'Created On',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true, // Enables checkbox selection
    enableRowActions: true, // Enables row actions column
    positionActionsColumn: 'last', // Positions actions column at the end
    renderRowActions: ({ row }) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          // Handle the view action here
          alert(`Viewing details for ${row.original.articleTitle} ${row.original.keyword}`);
        }}
      >
        View
      </Button>
    ),
  });

  return (
    <Box sx={{ maxWidth: '100%', padding: 2 }}>
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default UserDataGrid;
