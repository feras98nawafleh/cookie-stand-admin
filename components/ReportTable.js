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
              <th className="bg-green-500">Location</th>
              {workingHours.map((hour) => (
                <th className="bg-green-500">{hour}</th>
              ))}
            </tr>
          </thead>
          <tbody >
            {props.branches.map((branch) => (
              <tr>
                <td className="bg-green-500 font-semibold p-2">{branch}</td>
                {hourlySales.map((hour) => (
                  <td className="bg-green-500">{hour}</td>
                ))}
                <td className="bg-green-500">
                  {Math.floor(Math.random() * 30)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <th className="bg-green-500">Totals</th>
            {workingHours.map((hour) => (
              <th className="bg-green-500">{Math.floor(Math.random() * 90)}</th>
            ))}
          </tfoot>
        </table>
      )}
      <Footer count={props.branches.length} />
    </div>
  );
}

export default Report;