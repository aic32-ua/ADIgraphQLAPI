export class Usuario {
    id?: number;
    nombre?: string;
    apellido?: string;
    email?: string;
    password?: string;
}

export var usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "John",
      apellido: "Doe",
      email: "john.doe@example.com",
      password: "password123"
    },
    {
      id: 2,
      nombre: "Jane",
      apellido: "Smith",
      email: "jane.smith@example.com",
      password: "securepass456"
    },
    {
      id: 3,
      nombre: "Bob",
      apellido: "Johnson",
      email: "bob.johnson@example.com",
      password: "mysecretpass"
    },
    {
      id: 4,
      nombre: "Alice",
      apellido: "Williams",
      email: "alice.williams@example.com",
      password: "pass1234"
    },
    {
      id: 5,
      nombre: "Eva",
      apellido: "Miller",
      email: "eva.miller@example.com",
      password: "strongpassword789"
    }
  ];