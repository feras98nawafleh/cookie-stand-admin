import workingHours from '../data'
// import hourlySales from '../data'
import Footer from '../components/Footer';

const Report = (props) => {
  let hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];

  return (
    <div className="flex justify-center">
      {props.branches.length === 0 && (
        <div className="p-5 text-2xl font-semibold italic text-center hover:not-italic text-gray-800">
          <h2>No Cookie Stands Available</h2>
        </div>
      )}

      {props.branches.length > 0 && (
        <table className="w-3/4 my-5 table-auto w-border-green-900 border-collapse border">
          <thead>
            <tr>
              <th className="bg-green-700">Location</th>
              {workingHours.map((hour) => (
                <th className="bg-green-700">{hour}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.branches.map((branch) => (
              <tr>
                <td className="flex justify-between bg-green-500 font-semibold p-2">
                  {branch.location}
                    <button onClick={()=>props.deleteBranch(branch.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="#F05454"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                </td>
                {hourlySales.map((hour) => (
                  <td className="bg-green-500">{hour}</td>
                ))}
                <td className="bg-green-500">516</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <th className="bg-green-500">Totals</th>
            {hourlySales.map((hour) => (
              <th className="bg-green-500">{hour * props.branches.length}</th>
            ))}
            <th className="bg-green-500">{516 * props.branches.length}</th>
          </tfoot>
        </table>
      )}
      <Footer count={props.branches.length} />
    </div>
  );
}

export default Report;
