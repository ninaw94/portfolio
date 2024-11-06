import Head from "next/head"
import {useState} from "react"
import Link from "next/link"
import Layout from './components/layout'

export default function Counter() {
    const [count, setCount] = useState(0)

    return(<>
    <Layout>
    <Head><title>A Counter</title></Head>
    <main>
        <button onClick={() => setCount(count+1)}>Counter is {count}</button>
        <Link href="/">Home</Link>
    </main>
    </Layout>
    </>)

}