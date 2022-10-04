import {User} from './User';
const [user, setUser]  = React.useState();

function App(){
    
    const fetchUser = () => {
        fetch('/users') 
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }
    
    useEffect(() => {
        fetchUser ()
    }, []);
    
    return (
    <div className="App">
        <h1> Welcome to your bank! </h1>
        {users.length && users.map(user => <User user={user} key={user._id} /> )}
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users: [{name: 'katie', email: 'khopper@gmail.com', password: 'secret', balance: 0}]}}>
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
    </div>
    );
} 

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)