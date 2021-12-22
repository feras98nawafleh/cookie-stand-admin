import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';

const Admin = () => {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Home />
    </>
  );
};

export default Admin;
