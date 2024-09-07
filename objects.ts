interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
  id: 2,
  name: "Pedro",
  //   age: 22,
  greet(message) {
    console.log(message);
  },
};

if (!User.age) {
  console.log("no user age");
} else {
  console.log(User.age);
}
console.log(User.age);

User.greet("Hello, how are you?");
