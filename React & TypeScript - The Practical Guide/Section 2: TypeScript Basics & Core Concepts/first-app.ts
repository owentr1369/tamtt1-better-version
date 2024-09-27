let userName: string = "Max";
// userName = 34
// Type 'number' is not assignable to type 'string'.
let userAge: number = 30;
let isValid: boolean = true;

// Union type
let userID: StringOrNum = "abc";
userID = 123;

// Object types
let user: User;
user = {
  name: "Max",
  age: 30,
  isAdmin: true,
  id: 123,
};

// Array types
let hobbies: string[] = ["Sports", "Cooking"];
let favNumbers: number[] = [1, 2, 3];
let favThings: StringOrNum[] = ["Sports", 1];
let favThings2: Array<StringOrNum> = ["Sports", 1];

// Adding types to functions - parameters & return values
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

// Function types
function calculate(a: number, b: number, operation: operationFn): number {
  return operation(a, b);
}

calculate(10, 20, add);

// Custom types / type aliases
type operationFn = (a: number, b: number) => number;
type StringOrNum = string | number;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// Defining objects types with interfaces
interface Credentials {
  password: string;
  email: string;
}
let credentials: Credentials;
credentials = {
  password: "1234",
  email: "",
};

// Interfaces vs Custom types
class AuthCredentials implements Credentials {
  password: string;
  email: string;
  userName: string;
}

function login(credentials: Credentials) {
  // login logic
}

login(new AuthCredentials());

// Merging types
type Admin = {
  permissions: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;
let admin: AppAdmin;
admin = {
  userName: "Max",
  permissions: ["read", "write"],
};
interface AppAdmin2 extends Admin, AppUser {}
let admin2: AppAdmin2;
admin2 = {
  userName: "Max",
  permissions: ["read", "write"],
};

// Being more specific with literal types
type Role = "admin" | "user" | "guest";
let role: Role; // 'admin' | 'user' | 'guest'
role = "admin";
role = "user";
role = "guest";
// role = 'superuser'; // Type '"superuser"' is not assignable to type '"admin" | "user" | "guest"'.

// Adding types guards
function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // perform admin action
  } else if (role === "user") {
    // perform user action
  } else {
    // perform guest action
  }
}

// Making sense of generic types
let roles: Array<Role>;
roles = ["admin", "user", "guest"];
type DataStorage<T> = {
  storage: T[];
  add: (item: T) => void;
};
const textStorage: DataStorage<string> = {
  storage: ["Hi", "Hello"],
  add: (item) => {
    this.storage.push(item);
  },
};
const userStorage: DataStorage<User> = {
  storage: [{ name: "Max", age: 30, isAdmin: true, id: 123 }],
  add: (user) => {
    this.storage.push(user);
  },
};
function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}
const newUser = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
