import { useState, useEffect } from 'react'
import Report from '../components/ReportTable';
import axios from 'axios';

const baseUrl = 'https://feras-cookie-stand-api.herokuapp.com/';
const postsEndPoint = baseUrl + 'api/v1/cookies';

const Main = (props) => {
  const [branches, setBranches] = useState([])
  const config = {
    headers: { Authorization: `Bearer ${props.token}` },
  };

  useEffect(function effectFunction() {
    async function fetchBranches() {
      const response = await axios.get(postsEndPoint, config);
      response.data.map((data) => {
        console.log(data);
        setBranches(branches => [...branches, data])
      }
      )}
    fetchBranches();
  }, []);

  const deleteBranch = (id) => {
    axios.delete(postsEndPoint + '/' + id, config);
    alert('Branch with id ' + id + ' deleted')
  }

  const formHandler = (e) => {
    e.preventDefault();
    let branchInfo = {
      location: e.target.city.value,
      description: location + 'branch',
      min: Number(e.target.min),
      max: Number(e.target.max.value),
      avg: Number(e.target.avg.value),
      hourlySales: 15,
      owner: 1
    };
    // axios
    //   .post(postsEndPoint, branchInfo, config)
    //   .then((res) => {
    //     console.log('RESPONSE RECEIVED: ', res);
    //   })
    //   .catch((err) => {
    //     console.log('AXIOS ERROR: ', err);
    //   });
    setBranches((branches) => [...branches, branchInfo]);
  };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="w-3/4 p-2 mx-auto my-5 bg-green-200 rounded-lg place-content-center py-5"
      >
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
      <Report branches={branches} deleteBranch={deleteBranch}/>
    </>
  );
}

export default Main;