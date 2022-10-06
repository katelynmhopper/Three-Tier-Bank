function Spa(){
    const ctx = React.useContext(UserContext);
    const [users, setUsers] = React.useState(null);
    
    const setUser = (user) => {
    setUsers({ user })
    }
    
    function handle(){
    fetch("http://localhost:7000/users", {
    method: "GET",
    headers: {
    "Content-Type": "application/json",
    }})
    .then(res => res.json())
    .then(users => setUsers(users))
    .catch(error => {
    window.alert(error);
    return;
    });
    }
    
    React.useEffect(() => {
    handle()
    }, []);
    
    const HashRouter = ReactRouterDOM.HashRouter;
    console.log(users)
    
    return (
    <HashRouter>
    <UserContext.Provider value={{users: [{name: 'katie', email: 'khopper@gmail.com', password: 'secret', balance: 0}]}}>
    <NavBar/>
    <Route path="/" exact component={Home} />
    <Route path="/CreateAccount/" component={CreateAccount} />
    <Route path="/login/" component={Login} />
    <Route path="/deposit/" component={Deposit} />
    <Route path="/withdraw/" component={Withdraw} />
    <Route path="/balance/" component={Balance} />
    <Route path="/alldata/" component={AllData} />
    <br/>
    </UserContext.Provider>
    </HashRouter>
    );
    }
    
    ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
    )
    