// import User from './User'; 
// import { useState, useEffect} from 'react'
// function App(){

//     const [users, setUsers] = useState({});
//     const [newUser, setNewUser] = useState({})

//     const fetchUsers = () => {
//       fetch('/users')
//         .then(res => res.json())
//         .then(data => setUsers(data))
//     }
  
//     useEffect(() => {
//       fetchUsers()
//     }, []); 

//     const HashRouter  = ReactRouterDOM.HashRouter;
//     return (
//         <div classname="App">
            
//         <h1>WTF</h1>
//         {users.length && users.map(user=> <User user={user} key = {user._id}/> )}
//         <HashRouter>
//             <NavBar/>
//             <Route path="/" exact component={Home} />
//             <Route path="/CreateAccount/" component={CreateAccount} />
//             <Route path="/login/" component={Login} />
//             <Route path="/deposit/" component={Deposit} />
//             <Route path="/withdraw/" component={Withdraw} />
//             <Route path="/balance/" component={Balance} />
//             <Route path="/alldata/" component={AllData} />
//             <br/> 
//         </HashRouter>
//         </div>
//     );
// } 
// export default App;