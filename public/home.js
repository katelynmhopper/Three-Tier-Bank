function Home(){
  return (
    <Card
      bgcolor="info card title"
      txtcolor="white"
      header="BadBank Inc. Home"
      title="Welcome to the bank"
      text="Use the navigation bar to access all your banking needs."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
