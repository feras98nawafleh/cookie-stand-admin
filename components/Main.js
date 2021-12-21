import { useState } from 'react'
import Report from '../components/ReportTable';
const Main = () => {
  const [branch, setBranch] = useState('amman');
  const [branches, setBranches] = useState([])
  const formHandler = (e) => {
    e.preventDefault();
    setBranch(e.target.city.value);
    // let branchInfo = {
    //   location: e.target.city.value,
    //   min: Number(e.target.min),
    //   max: Number(e.target.max.value),
    //   avg: Number(e.target.avg.value),
    // }; 
    setBranches((branches) => [...branches, branch]);
  };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="w-3/4 p-2 mx-auto my-5 bg-green-300 rounded-lg place-content-center"
      >
        <h2 className="text-lg font-semibold text-center ">
          Create Cookie Stand
        </h2>
        <div>
          <label className="px-4" for="city">
            Location
          </label>
          <input className="w-5/6" name="city" type="text" />
        </div>
        <div className="py-6 grid gap-4 grid-cols-4">
          <div className="py-6 grid gap-4 grid-cols-1 bg-green-200">
            <label for="min">
              Minimum Customer per Hour
              <input name="min" type="number" />
            </label>
          </div>
          <div className="py-6 grid gap-4 grid-cols-1 bg-green-200">
            <label for="max">
              Minimum Customer per Hour
              <input name="max" type="number" />
            </label>
          </div>
          <div className="py-6 grid gap-4 grid-cols-1 bg-green-200">
            <label for="avg">
              Minimum Customer per Hour
              <input name="avg" type="number" />
            </label>
          </div>
          <div className="p-2">
            <button className="w-40 h-20 bg-green-500 place-content-center">
              Create
            </button>
          </div>
        </div>
      </form>
      <Report branches={branches} />
    </>
  );
}

export default Main;