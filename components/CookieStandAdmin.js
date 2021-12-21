import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

const Admin = () => {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
    </>
  );
};

export default Admin;
