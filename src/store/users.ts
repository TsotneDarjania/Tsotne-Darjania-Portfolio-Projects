export const users: User[] = [];

export type User = {
  email: string;
  password: string;
};

export function saveUser(user: User) {
  users.push(user);
}
