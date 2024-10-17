import React from "react";

const Transactions = () => {
  return (
    <div className="bg-light p-4 rounded-4 min-vh-100" style={{ marginLeft: "20%" }}>
      <h2>Transactions</h2>
      <div className="row p-5 mt-5 bg-white text-center mx-3 rounded-4">
        <table className="table table-bordered">
          <thead className="border">
            <tr>
              <th className="border">ID</th>
              <th className="border">Name</th>
              <th className="border">Amount</th>
              <th className="border">Transaction ID</th>
              <th className="border">Date</th>
              <th className="border">Pan Card</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="border">1</td>
              <td className="border">Ahmed</td>
              <td className="border">10</td>
              <td className="border">some_random_id</td>
              <td className="border">Fri Mar 24 2024</td>
              <td className="border">ABCDE1234F</td>
            </tr>
            <tr className="border">
              <td className="border">2</td>
              <td className="border">Ahmed</td>
              <td className="border">10</td>
              <td className="border">some_random_id</td>
              <td className="border">Fri Mar 24 2024</td>
              <td className="border">ABCDE1234F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
