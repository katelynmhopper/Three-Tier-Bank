function Home(){
  return (
    <Card
      bgcolor="secondary card title"
      txtcolor="white"
      header="BadBank Inc. Home"
      title="Welcome to the bank of Hopper"
      body= <div className="home"> 
      Please login or if this is your first time here please visit our sign up page
      We are here for all your banking needs.
      <br/>
      <br/>
      <a href="#/CreateAccount/" className="btn btn-dark stretched-link mr-1" >Sign Up</a> 
      <a href="#/login/" className="btn btn-dark stretched-link mr-1">Login</a>
      </div>
    />    
  );  
}
