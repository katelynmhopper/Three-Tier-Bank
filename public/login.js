function Login(){
    const ctx = React.useContext(UserContext);
    const [users, setUsers] = React.useState(null);  
    
    const [show, setShow]           =React.useState(true);
    const [status, setStatus]       =React.useState(''); 
    const [email, setEmail]        =React.useState('');
    const [password, setPassword]  =React.useState('');
    const [loggedin, setLoggedin] = React.useState(false); 

console.log('state', loggedin)

    function handle(){
        fetch("http://localhost:7000/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })})
        .then(res => res.json())
        .then(res => setLoggedin(true))
        .then(users => setUsers(users))
        .then(res => setEmail(email))
        .then(res => alert('Success') && clearForm())
        .catch(error => {
        window.alert(error);
        return;
        });
        }  
        
        console.log('>>>', users);
        console.log('>>>', email )
    
        

    function validate(field, label){
        if (!field) {
            setStatus('Error:' + label); 
            setTimeout(() => setStatus(''),3000); 
            return false;
        }
        return true; 
    }    

    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function LogOut() {
       setLoggedin(false); 
       window.alert('Logged Out')
       clearForm()

    }

 return (
    <UserContext.Provider value={{users: users}}>
        <Card
            bgcolor="secondary"
            header="Login"
            status={status}
            body={
                    <>
                   Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light mr-1" onClick={handle}>Login</button>
                    <button id = "logout" className="btn btn-light mr-1" onClick={LogOut}>Logout</button> 
                    <h1> Welcome! {email}</h1>
                    </>
                    }
        
        />
        </UserContext.Provider>
    )
}
