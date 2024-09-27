let userName: string = "Max";
// userName = 34
// Type 'number' is not assignable to type 'string'.
let userAge: number = 30;
let isValid: boolean = true;

// Union type
let userID: string | number = "abc";
userID = 123;

// Object types
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};
user = {
  name: "Max",
  age: 30,
  isAdmin: true,
  id: 123,
};

// Array types
let hobbies: string[] = ["Sports", "Cooking"];
let favNumbers: number[] = [1, 2, 3];
let favThings: (string | number)[] = ["Sports", 1];
let favThings2: Array<string | number> = ["Sports", 1];

// Adding types to functions - parameters & return values
function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}
