
function NavBar(){


    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aira-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" id = "#/CreateAccount/" href="#/CreateAccount/">Create Account</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" id = "#/login/" href="#/login/">Login</a>
                    </li>       

                    <li className="nav-item">
                        <a className="nav-link" id="#/Deposit/" href="#/Deposit/">Deposit</a>
                    </li>       

                    <li className="nav-item">
                        <a className="nav-link" id="#/withdraw/" href="#/withdraw/">Withdraw</a>
                    </li>   

                    <li className="nav-item">
                        <a className="nav-link" id="#/balance/" href="#/balance/">Balance</a>
                    </li>   

                    <li className="nav-item">
                        <a className="nav-link" id="#/alldata/" href="#/alldata/">All Data</a>
                    </li>
                </ul>
            </div>
            </nav>
                </>
                
            );
            
        }
