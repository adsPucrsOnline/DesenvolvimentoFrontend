import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import UserList from './UserList';

jest.mock('axios');

test('deve exibir a lista de usuários corretamente', async () => {
  const mockUsers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  axios.get.mockResolvedValueOnce({ data: mockUsers });

  const { getByText } = render(<UserList />);

  await waitFor(() => {
    const user1 = getByText('John Doe');
    const user2 = getByText('Jane Smith');

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
  });
});

test('deve lidar com erro ao buscar os usuários', async () => {
  const errorMessage = 'Erro ao buscar os usuários';

  axios.get.mockRejectedValueOnce(new Error(errorMessage));

  const { getByText } = render(<UserList />);

  await waitFor(() => {
    const errorElement = getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
