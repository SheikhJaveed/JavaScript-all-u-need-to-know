function fetchPostData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({'title':'Post 1','content':'This is post 1'});
        },3000);
    });
}

function fetchCommentsData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(['Nice post','Awesome post']);
        },2000);
    });
}

async function getPostData(){
    try{
        console.log("Fetching post data...");
        //this is the normal way
        // let postData=await fetchPostData();
        // let commentData=await fetchCommentsData();

        //better way -> use Promise.all
        const [postData,commentData]=await Promise.all([fetchPostData(),fetchCommentsData()]);
        console.log(postData);
        console.log(commentData);
        console.log("Fetched post data successfully");
    }
    catch(error){
        console.error("Error fetching post data");
        console.error(error);
    }
}

getPostData();