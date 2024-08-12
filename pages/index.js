import Head from 'next/head';
import DraggableList from '../components/DraggableList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Draggable List</title>
      </Head>
      <main className="mt-5">
        <DraggableList />
      </main>
    </div>
  );
}
