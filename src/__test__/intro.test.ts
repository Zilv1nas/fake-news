// tslint:disable no-console

describe("TypeScript Intro", () => {
  type Id = string | number;

  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
  }

  console.log({ Direction });

  interface Post {
    id?: Id;
    title: string;
    body: string;
  }

  const post: Post = {
    body: "Some shit",
    title: "hello world"
  };

  console.log({ post });

  const logTime = (fn: any) => {
    // tslint:disable-next-line
    console.log(`Executing: ${new Date().getTime()}`);
    fn();
  };

  const add = (x: number, y: number): number => {
    const sum = x + y;
    return sum;
  };

  console.log({ add: add(12, 12) });
  console.log({ add: add("12", 12) });

  class ApiClient {
    @logTime
    get() {
      return { response: "response" };
    }
  }
});
