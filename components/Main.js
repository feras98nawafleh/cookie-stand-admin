import { useState } from 'react'
import Report from '../components/ReportTable';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/';
const postsEndPoint = baseUrl + 'api/v1/posts';
const posts = baseUrl + 'api/v1/posts/';

const Main = (props) => {
  const [branch, setBranch] = useState('');
  const [branches, setBranches] = useState([])

  const config = {
    headers: { Authorization: `Bearer ${props.token}` },
  };

  axios.get(postsEndPoint, config).then((res) => {
    setBranches(res.data);
  });
  const formHandler = (e) => {
    e.preventDefault();
    setBranch(e.target.city.value);
    if(branch !== '')
      setBranches((branches) => [...branches, branch]);
  };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="w-3/4 p-2 mx-auto my-5 bg-green-200 rounded-lg place-content-center py-5"
      >
        {/* <h2 className="text-lg font-semibold text-center ">
          Create Cookie Stand
        </h2> */}
        <div className="grid grid-cols-3 gap-6 px-10">
          <div className="col-span-2 justify-between">
            <label className="font-bold" for="city">
              ADD LOCATION
            </label>
            <input
              className="w-5/6"
              name="city"
              type="text"
              placeholder="Cookie Stand Location"
            />
          </div>
          <button className="w-40 h-15 bg-green-500 place-content-center">
            Create
          </button>
        </div>
        <div className="py-6 flex">
          <div className="py-6 grid gap-4 grid-cols-1">
            <label className="font-bold" for="min">
              Minimum Customer per Hour
              <input className="w-5/6" name="min" type="number" />
            </label>
          </div>
          <div className="py-6 grid gap-4 grid-cols-1">
            <label className="font-bold" for="max">
              Minimum Customer per Hour
              <input className="w-5/6" name="max" type="number" />
            </label>
          </div>
          <div className="py-6 grid gap-4 grid-cols-1">
            <label className="font-bold" for="avg">
              Minimum Customer per Hour
              <input className="w-5/6" name="avg" type="number" />
            </label>
          </div>
        </div>
      </form>
      <Report branches={branches} />
    </>
  );
}

export default Main;