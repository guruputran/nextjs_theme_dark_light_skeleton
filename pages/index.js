/** @format */

import Head from "next/head";
import fs from "fs";
import { join } from "path";
import Navbar from "@components/Navbar";
import Card from "@components/Card";
import { Container, Grid } from "@mui/material";
export async function getServerSideProps() {
  // get all the todos, https://sweetcode.io/how-to-implement-material-ui-with-next-js/
  //https://dev.to/hajhosein/nextjs-mui-v5-tutorial-2k35#step-four
  //https://www.telerik.com/blogs/routing-nextjs for routing

  let todos_path = join(__dirname, "..", "..", "..", "data", "todos.json");
  let todos = await fs.promises.readFile(todos_path, "utf8");
  return {
    props: {
      todos: JSON.parse(todos),
    },
  };
}
export default function Home({ todos }) {
  return (
    <div>
      <Head>
        <title>Todos App</title>
        <meta name="description" content="Todos app with Material UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Grid key={index} marginBottom={4} marginTop={4}>
              <Card todo={todo} key={index} />
            </Grid>
          ))
        ) : (
          <p>No saved todos yet!!</p>
        )}
      </Container>
    </div>
  );
}
