function Home(){
  return (
    <Card
      bgcolor="secondary card title"
      txtcolor="white"
      header="Welcome to the 
      Bank of Hopper"
      body= <div className="home"> 
      Please login or if this is your first time here please visit our sign up page
      We are here for all your banking needs.
      <br/>
      <br/>
      <a href = "#/CreateAccount/" className="btn btn-dark  mr-2"> Create Account</a>
      <a href="#/login/" className="btn btn-dark  mr-2">Login</a>
      </div>
    />    
  );  
}
