import { useState, useEffect } from 'react'

const Main = () => {
  const [branch, setBranch] = useState('Report table comming soon...');
  const [report, setReport] = useState(true)
    const formHandler = (e) => {
      e.preventDefault();
      let branchInfo = {
        location: e.target.city.value,
        min: Number(e.target.min),
        max: Number(e.target.max.value),
        avg: Number(e.target.avg.value),
      };
      setBranch(JSON.stringify(branchInfo));
      setReport(false)
    };
  return (
    <>
      <form
        onSubmit={formHandler}
        className="place-content-center rounded-lg w-1/2 bg-green-300 mx-auto my-5 p-2"
      >
        <h2 className="text-center text-lg font-semibold	">
          Create Cookie Stand
        </h2>
        <div>
          <label className=" px-4" for="city">
            Location
          </label>
          <input className="w-5/6" name="city" type="text" />
        </div>
        <div className="flex justify-between py-8">
          <div>
            <label for="min">
              Minimum Customer per Hour
              <input name="min" type="number" />
            </label>
          </div>
          <div>
            <label for="max">
              Minimum Customer per Hour
              <input name="max" type="number" />
            </label>
          </div>
          <div>
            <label for="avg">
              Minimum Customer per Hour
              <input name="avg" type="number" />
            </label>
          </div>
          <div>
            <button className=" h-10 w-20 bg-green-500	place-content-center">
              Create
            </button>
          </div>
        </div>
      </form>
      <div className="m-5">
        <div className="italic hover:not-italic font-sans	 text-center p-5">
          <p>Report Table Coming Soon...</p>
        </div>
        {
          !report && (
          <div className="italic hover:not-italic font-sans text-center p-5">
            <p>{branch}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Main