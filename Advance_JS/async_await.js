function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({'name':'Google',url:'https://www.google.com'});
        },3000);
    })
}

async function getUserData(){
    try{
        console.log("Fetching user data...");
        const user=await fetchUserData();
        console.log("Fetched user data successfully"); //This line will be executed only after the fetchUserData function is resolved
        console.log(user);
    }catch(error){
        console.error("Error fetching user data");
        console.error(error);
    }
}

getUserData();