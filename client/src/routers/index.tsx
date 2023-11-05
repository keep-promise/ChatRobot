import React from 'react';

const ChatPage = React.lazy(() => import('@/pages/chat'))

export const routers = [
  {
    id: 'ChatPage',
    path: '/',
    element: <ChatPage />,
    children: [],
    configure: {
      verifToken: false,
      role: ['user', 'administrator']
    }
  }
];

