const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface User {
  _id: string;
  name: string;
  email: string;
  password?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
}

//Create a User
export async function createUser(user: {
  name: string;
  email: string;
  password: string;
}): Promise<ApiResponse<User>> {
  const res = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return res.json();
}

//Get All Users
export async function getAllUsers(): Promise<ApiResponse<User[]>> {
  const res = await fetch(`${API_BASE_URL}`);
  return res.json();
}

//Get Single User by ID
export async function getUserById(id: string): Promise<ApiResponse<User>> {
  const res = await fetch(`${API_BASE_URL}/${id}`);
  return res.json();
}

//Update User by ID
export async function updateUser(id: string, updatedData: Partial<User>): Promise<ApiResponse<User>> {
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });

  return res.json();
}

//Delete User by ID
export async function deleteUser(id: string): Promise<ApiResponse<any>> {
  const res = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  return res.json();
}
