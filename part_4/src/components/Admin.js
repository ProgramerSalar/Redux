import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
} from "../redux/api/AdminSlice";

function Admin() {
  // this is distructore element, if you get the data
  const { data, error, isLoading } = useGetAccountQuery();
  // if you chanage the data then used to array, LIKE this method: POST, PUT, DELETE
  const [
    addAccount, // this is variable run the request
    Addresponse, // this is response veriable, what is the response when send the data ya delete the data
  ] = useAddAccountMutation();
  const [deleteAccount, deleteResponse] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation()
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {data &&
          data.map((account) => (
            <div>
              <p>
                {account.id} : {account.amount}
              </p>
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account -
              </button>
              <button onClick={() => updateAccount({id:account.id, amount:777})}>
                update Account 
              </button>

            </div>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account +
        </button>
      </div>
    </div>
  );
}

export default Admin;
