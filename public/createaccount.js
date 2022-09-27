function CreateAccount(){
    const [show, setShow]   =React.useState(true); 
    const [status, setStatus]   =React.useState(''); 

    return (
        <Card
         bgcolor="primary"
         header="Create Account"
         status={status}
         body={show ? 
            <CreateForm setShow={setShow}/> : 
            <CreateMsg setShow={setShow}/>}
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
    const [name, setName]           = React.useState('');  
    const [email, setEmail]         = React.useState(''); 
    const [password, setPassword]   = React.useState(''); 

    function handle(){
        console.log(name,email,password); 
        (async () => { fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: {
                "name": " ", 
                "email": " ", 
                "password": " "
            }})
        .catch(error => {
            window.alert(error);
            return;
        });
        setForm({ name: "", position: "", level: "" });
        });
    }

    return(<>
        Name <br/>
            <input type = "input"
                className="form-control"
                placeholder="Enter name"
                value = {name}
                onChange = {e => setName (e.currentTarget.value)} /><br/>

        Email address <br/>
            <input type = "input"
                className="form-control"
                placeholder="Enter Email"
                value = {email}
                onChange = {e => setEmail (e.currentTarget.value)} /><br/>

        Password <br/>
            <input type = "input"
                className="form-control"
                placeholder="Enter Password"
                value = {password}
                onChange = {e => setPassword (e.currentTarget.value)} /><br/>
        <button type = "sumbit"
            className= "btn btn-light"
            onClick={handle}> Create Account </button>
        </>)
}