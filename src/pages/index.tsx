import Head from "next/head";
import styles from "../styles/Home.module.css";

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   //tuple型 型、長さを指定できる
//   role: [number, string];
// } = {
//   name: "John",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//０から順に値がつけられる、=5のように値を指定すると、５以降は自動で６、７となる
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoliteActivities: string[];
favoliteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
