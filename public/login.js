const User = require("../src/routes/model/User");

function Login(){
    const [show, setShow]           =React.useState(true);
    const [status, setStatus]       =React.useState(''); 
    const [email, setEmail]        =React.useState('');
    const [password, setPassword]  =React.useState('');

    function loginMSG(props){
        return(<>
        <h5>Success</h5>
        <button type="submit"
        className = "btn btn-light"
        onClick={() => props.setShow(true)}> Welcome {User} </button>
        </>);
        }

    function handle(){
        fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })})
        .then((res) => alert("Success!") && clearForm())
        .catch(error => {
        window.alert(error);
        return;
        });
        }  
        

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

 return (
        <Card
            bgcolor="info card title"
            header="Login"
            status={status}
            body={
                    <>
                   Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handle}>Login</button>
                    <button id = "logout">Logout</button> 
                    </>

 }
        
        />
    )
}
