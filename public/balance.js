function Balance(){

  const ctx = React.useContext(UserContext);  
  const [status, setStatus]     = React.useState('');
  const [balance, setBalance]   = React.useState(ctx.users[0].balance);
  
  
  return (
      <Card
        bgcolor="info card title"
        header="You're Account Balance"
        status={status}
        body={(<>
                <div className="callout">Balance: ${balance.toFixed(2)}</div> <br/>
              </>
        )}
          />
      )
  }
      