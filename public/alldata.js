function AllData(){
    const ctx = React.useContext(UserContext);
    console.log('alldata', ctx)
        

    return (
            <>
            <h5> All Data ( need to get from database ) </h5>
            <h3>Name: {ctx.name}</h3>
            <h3>Age: {ctx.email}</h3>
            </>
        ); 
}