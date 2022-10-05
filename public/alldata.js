function AllData(){
    const ctx = React.useContext(UserContext);
    console.log('alldata', ctx)

    

    // function handle(){
    //     fetch("http://localhost:7000/Users", {
    //     method: "GET",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email, password, balance })})
    //     .then((res) => res.send(res))
    //     console.log(user)
    //     .catch(error => {
    //     window.alert(error);
    //     return;
    //     });
    //     }  
        

    return (
            <>
            <h5> All Data ( need to get from database ) </h5>
            <h3>Name: {ctx.name}</h3>
            <h3>Age: {ctx.email}</h3>
            </>
        ); 
}