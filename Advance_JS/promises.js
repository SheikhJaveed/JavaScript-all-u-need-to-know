function fetchData(){
    //use new keyword to create a promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success=true;
            if(success){
                resolve("Data fetched successfully");
            }
            else{
                reject("Error fetching data");
            }
        }, 3000);
    });
}

let responseData=fetchData(); 
console.log(responseData); //Promise { <pending> }

fetchData()
 .then((data)=>{
        console.log(data); //Data fetched successfully
        return 'hello';
 })
 .then((value)=>{ //promise chaining
        console.log(value); //hello
 })
 .catch(()=>{
        console.log("Error fetching data");
 });