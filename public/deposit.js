function Deposit(){
  const ctx = React.useContext(UserContext);  
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState('');
    const [balance, setBalance]   = React.useState(ctx.users[0].balance);
    const [disabled, setDisabled] = React.useState(true);
  
  
    const validate = amount => {
        if (isNaN(amount)) {
          setStatus('Error: please enter a number');
          return false; 
        }
        if (!amount) {
          setStatus('Error: please enter a value');
          return false;
        } if (amount <= 0) {
          setStatus('Error: Deposit cannot be zero or a negative number');
          return false;
        }
        return true;
    }


  const makeDeposit = amount => {
  if (!validate(amount)) return;
  setBalance(Number(balance) + Number(amount));
  setShow(false);
  setStatus('');
  ctx.users[0].balance += Number(amount);
  }
  
  function clearForm(){
    setDeposit('');
    setShow(true);
  }
  
  
  React.useEffect(() => {
    if (!deposit) {
      setDisabled(true); 
    } else {
      setDisabled(false);
    }
  },   [deposit]);
  
  
    return (
      <Card
        bgcolor="success"
        header="Deposit"
        status={status}
        body={show ? (  
                <>
                <div className="callout">Balance: ${balance.toFixed(2)}</div> <br/>
                How much do you want to deposit?<br/>
                <input type="deposit" className="form-control" id="deposit" placeholder="Deposit Amount $" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/> <br/>
                <button type="submit" className="btn btn-dark" onClick={() => makeDeposit(deposit)} disabled={disabled}>Deposit</button>
                </>
              ):(
                <>
                <h5>Deposit has been made!</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
                </>
              )}
      />
    )
  }