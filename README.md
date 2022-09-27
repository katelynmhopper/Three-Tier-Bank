# BadBank

## Description
  This projects is a banking application that allows users to create accounts, deposit, withdraw, check balances and track all their data. Someone can use this application to track transactions to keep a running total and balance or to just practice their code. 
 
## How to run 
  To run this project you will need to clone these files to your local machine. Then in the folder you will need to make sure you have npm installed. You will need to have express, mongodb, cors installed if they didn't install when you ran the npm install command. Once you have the files cloned and the packages installed you will need to run node index.js which will launch a local sever that you will display the site. 
  
## Roadmap of future improvements
  Down the road I will add more routes that connect to the backend outside of just the create account and all data. I want to update the formatting of the all data page so that it is extracted from the array and displays nicely for the user to read. I will connect to firebase to provide authentication and would like to make it so that if you are on the home page and not logged in that only login and create account are shown. Then once logged in it would no longer show those options but would show deposit, balance, withdraw and all data. I also want to add some validation to the login and create account pages to ensure that the email and the password meet certain criteria. 
  
 ## Features
 This app has a lot more going on then what initially appears. This is a complete three tier application that connects the front end app to a backend database using mongodb. You are able to deposit and withdraw money and the site will keep track and show you the current balance. 
 
## Technology
The tech stack for this project is: node, react, mongodb, express, bootstrap
  
## License Information 
MIT License

Copyright (c) 2020 John Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
