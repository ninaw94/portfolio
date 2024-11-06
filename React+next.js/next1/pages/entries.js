import Head from "next/head";

export default function Entries({allEntries}) {

    return (<>
    <Head><title>Entries</title></Head>
    <main>
        <ul>
            {allEntries.map(({date,contents}) => (
                <li key={date}><em>{date}</em> -- {contents}</li>
            ))}
        </ul>
    </main>
    </>)

}

export async function getStaticProps() {

    const allEntries = [
        {date: "Today", contents: "im so tired"},
        {date: "Tomorrow", contents: "fridAAAYY"},
        {date: "Yesterday", contents: "goodnight"}
    ]

    return {
        props: { allEntries }
    }
}