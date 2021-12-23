import { useState } from 'react';
import Main from '../components/Main'
import LoginForm from '../components/LoginForm';
import axios from 'axios';

const baseUrl = 'https://feras-cookie-stand-api.herokuapp.com/'
const tokenUrl = baseUrl + 'api/token/';

const Home = () => {
  const [token, setToken] = useState('');

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

