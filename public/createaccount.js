function CreateAccount(){
    const [show, setShow]           =React.useState(true);
    const [status, setStatus]       =React.useState(''); 
    const [name, setName]           =React.useState(); 
    const [email, setEmail]         =React.useState(); 
    const [password, setPassword]   =React.useState(); 
    const [disabled, setDisabled] = React.useState(false);
    const ctx = React.useContext(UserContext); 
    
    function validate(field, label){
        if (!field) {
            setStatus('Error:' + label); 
            return false;
        }
        if (password.length < 8) {
            setStatus('Password must be at least 8 characters')
            return false; 
        }
        return true; 
    }

    function handleCreate(){
        let info = {name, email, password}
        console.log(info); 
        if (!validate(name,       'name'))    return; 
        if (!validate(email,      'email'))   return; 
        if (!validate(password,   'password'))  return;
        
        ctx.users.push(info)
        setShow(false);
        alert("Your account has been created!");
        }



    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    React.useEffect(() => {
        if ( name === undefined || email === undefined || password === undefined ){
            setDisabled(true);
        } 
        else {
         setDisabled(false);
        }
    });
      


    return (
        <Card
            bgcolor="info card title"
            header="Create Account"
            status={status}
            body={show ? (
                    <>
                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disabled}> Create Account</button>
                    </>
                 ):(
                    <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}> Add another account</button>
                    </>
                 )}
        
        />
    )
}
