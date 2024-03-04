import { useGetAccountQuery } from "../redux/api/AdminSlice";

function Admin() {
  const { data, error, isLoading } = useGetAccountQuery();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}
            </p>
          ))}

        {/* <button onClick={() => dispatch(increment())}>Increment +</button> */}
      </div>
    </div>
  );
}

export default Admin;
