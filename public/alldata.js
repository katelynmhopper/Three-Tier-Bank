function AllData(){
    const ctx = React.useContext(UserContext);
    const [users] = React.useState(null);
    
const data = Object.entries(ctx)
data.pop();


console.log('the data', data)



if(data1 !== null || undefined) {
    console.log('success', data.flat())
} else {
    console.log('failed')
}

let data1 = data[0][1]; 
console.log('data1', data1)

let test = () => { 
    let data2;
    if(data1 !== null) {
        data2 = data1.user;
    } else {
        data2 = '';
    }
    return (
        data2
)}

var test1 = test(); 
var test2 = test1; 

console.log('almost', test2)


    if (test1 !== undefined ){
        console.log('>>>>>' , Object.values(test2).toString())
    } else {
        console.log('Failed')
    }

    


return (
            <>
            <h5> All Data ( need to get from database ) </h5>
            <h5> User {data.email} </h5>
            </>
        ); 
}