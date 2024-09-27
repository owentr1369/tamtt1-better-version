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
