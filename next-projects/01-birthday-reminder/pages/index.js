import Head from 'next/head';
import { useState } from 'react';
import Person from '../components/Person';

export default function Home({ data }) {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <Head>
        <title>Reminder Setup Next</title>
      </Head>

      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => (
          <Person {...person} key={person.id} />
        ))}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
     
  );
}

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3001/api/people");

  return {
    props: {
      data: await resp.json(),
    }
  }
}
