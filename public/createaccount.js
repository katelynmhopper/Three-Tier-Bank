function CreateAccount(){
    const [show, setShow] =React.useState(true);
    const [user, setUser] = React.useState(null);      
    console.log({show})
    
    return (
    <Card
    bgcolor="secondary"
    header="Create Account"
    status={status}
    body={show ?
    <CreateForm setShow={setShow} /> :
    <CreateMSG setShow={setShow} />}
    />
    )
    }
    
    function CreateMSG(props){
    return(<>
    <h5>Success</h5>
    <button type="submit"
    className = "btn btn-light"
    onClick={() => props.setShow(true)}>Add another account </button>
    </>);
    }
    function CreateForm(props){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    function handle(){
    fetch("http://localhost:7000/auth/signup", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password })})
    .then((res) => res.status === 200 && props.setShow(false))
    .catch(error => {
    window.alert(error);
    return;
    });
    }
    
    return(<>
    Name <br/>
    <input type = "input"
    className="form-control"
    placeholder="Enter name"
    value = {name}
    onChange = {e => setName(e.currentTarget.value)} /><br/>
    
    Email address <br/>
    <input type = "input"
    className="form-control"
    placeholder="Enter Email"
    value = {email}
    onChange = {e => setEmail(e.currentTarget.value)} /><br/>
    
    Password <br/>
    <input type = "input"
    className="form-control"
    placeholder="Enter Password"
    value = {password}
    onChange = {e => setPassword(e.currentTarget.value)} /><br/>
    <button type = "sumbit"
    className= "btn btn-light"
    onClick={handle}> Create Account </button>
    </>)
    }
    