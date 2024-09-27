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
