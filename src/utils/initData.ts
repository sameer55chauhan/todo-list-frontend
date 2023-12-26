import Data from '../types';

export const initialData: Data = {
  tasks: {
    1: {
      id: 1,
      content: 'Configure Next.js application',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
    2: {
      id: 2,
      content: 'Configure Next.js and tailwind ',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
    3: {
      id: 3,
      content: 'Create sidebar navigation menu',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
    4: {
      id: 4,
      content: 'Create page footer',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
    5: {
      id: 5,
      content: 'Create page navigation menu',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
    6: {
      id: 6,
      content: 'Create page layout',
      order: 0,
      createdAt: '',
      updatedAt: '',
      columnId: 1,
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TO-DO',
      taskIds: [1, 2, 3, 4, 5, 6],
      order: 0,
      createdAt: '',
      updatedAt: '',
      userId: null,
    },
    'column-2': {
      id: 'column-2',
      title: 'IN-PROGRESS',
      taskIds: [],
      order: 0,
      createdAt: '',
      updatedAt: '',
      userId: null,
    },
    'column-3': {
      id: 'column-3',
      title: 'COMPLETED',
      taskIds: [],
      order: 0,
      createdAt: '',
      updatedAt: '',
      userId: null,
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const initialData4: Data = {
  tasks: {
    1: {
      id: 1,
      content: 'id 1 order 0',
      order: 0,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    2: {
      id: 2,
      content: 'id 2 order 1',
      order: 1,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    3: {
      id: 3,
      content: 'id 3 order 2',
      order: 2,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    4: {
      id: 4,
      content: 'id 4 order 3',
      order: 3,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 3,
    },
  },
  columns: {
    'column-1': {
      id: 1,
      title: 'Next.js',
      order: 0,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [1, 2, 3],
    },
    'column-2': {
      id: 2,
      title: 'Node.js',
      order: 1,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [],
    },
    'column-3': {
      id: 3,
      title: 'Python',
      order: 2,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [4],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const initData2: Board = {
  columnOrder: [1, 2, 3, 4],
  columns: [
    {
      id: 1,
      title: 'Next.js',
      order: 1,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [1, 2, 3],
    },
    {
      id: 2,
      title: 'Node.js',
      order: 2,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [],
    },
    {
      id: 3,
      title: 'Python',
      order: 3,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [],
    },
    {
      id: 4,
      title: 'JS',
      order: 4,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [4],
    },
  ],
  tasks: [
    {
      id: 1,
      content: 'id 1 order 0',
      order: 0,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    {
      id: 2,
      content: 'id 2 order 1',
      order: 1,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    {
      id: 3,
      content: 'id 3 order 2',
      order: 2,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 1,
    },
    {
      id: 4,
      content: 'id 4 order 0',
      order: 0,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      columnId: 4,
    },
  ],
};

export const initData3 = {
  columnOrder: [1, 2, 3, 4],
  columns: [
    {
      id: 1,
      title: 'Next.js',
      order: 1,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [
        {
          id: 1,
          content: 'id 1 order 0',
          order: 0,
          createdAt: '2023-12-24T09:48:41.085Z',
          updatedAt: '2023-12-24T09:48:41.085Z',
          columnId: 1,
        },
        {
          id: 2,
          content: 'id 2 order 1',
          order: 1,
          createdAt: '2023-12-24T09:48:41.085Z',
          updatedAt: '2023-12-24T09:48:41.085Z',
          columnId: 1,
        },
        {
          id: 3,
          content: 'id 3 order 2',
          order: 2,
          createdAt: '2023-12-24T09:48:41.085Z',
          updatedAt: '2023-12-24T09:48:41.085Z',
          columnId: 1,
        },
      ],
    },
    {
      id: 2,
      title: 'Node.js',
      order: 2,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [],
    },
    {
      id: 3,
      title: 'Python',
      order: 3,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [],
    },
    {
      id: 4,
      title: 'JS',
      order: 4,
      createdAt: '2023-12-24T09:48:41.085Z',
      updatedAt: '2023-12-24T09:48:41.085Z',
      userId: null,
      tasks: [
        {
          id: 4,
          content: 'id 4 order 0',
          order: 0,
          createdAt: '2023-12-24T09:48:41.085Z',
          updatedAt: '2023-12-24T09:48:41.085Z',
          columnId: 4,
        },
      ],
    },
  ],
};
