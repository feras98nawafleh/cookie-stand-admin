import { useState } from 'react';
import Main from '../components/Main'
import LoginForm from '../components/LoginForm';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + 'api/token/';

const Home = () => {
  const [token, setToken] = useState('');

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // axios.get(postsEndPoint, config).then((res) => {
  //   responses = res.data;
  // });

  const submitHandler = async (e, credintials) => {
    e.preventDefault();
    axios.post(tokenUrl, credintials).then((data) => {
      setToken(data.data.access);
    });
  };

  if (!token) return <LoginForm submitHandler={submitHandler} />;
  return <Main token={token}/>;
};
export default Home;
