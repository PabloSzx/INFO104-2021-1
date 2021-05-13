import Head from "next/head";
import Layout from "../components/layout";
import TodoItem from "../components/todoItem";
import React from "react";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/data/todo.json");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function PageList({ data }) {
  //console.log(data);

  React.useEffect(() => {
    console.log(data);

    data.map((item, index) => {
      console.log(item.id);
      if (localStorage.getItem(item.id) === null) {
        localStorage.setItem(item.id, JSON.stringify(item.done));
      } else {
      }
    });
    //localStorage.setItem("listRemembered", data);
  }, []);

  return (
    <Layout pageId="page4">
      <Head>
        <title>Todo List</title>
      </Head>
      <h1>Cosas por hacer</h1>
      <div className="todo-list">
        {data.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </div>
    </Layout>
  );
}
