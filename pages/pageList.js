import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import TodoItem from '../components/todoItem'

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/data/todo.json');
    const data = await res.json();
    
    if (!data) {
        return {
            notFound: true,
        }
    }
    
    return {
        props: { data }
    }
  }

export default function PageList({data}) {
    console.log(data);
    return (

        <Layout pageId="page4">
        <Head>
            <title>Todo List</title>
        </Head>
        <h1>Cosas por hacer</h1>
        <div className="todo-list">
        {
            data.map((item) => (
                <TodoItem item={item} />
            ))
        }
        </div>
        

        </Layout>

    )
}