
function getUserInfoFromDb(email){
    return new Promise((resolve,reject)=>{
        console.log("fetching user info from db");
        setTimeout(()=>{
            const user={
                name:"moinul",
                email:email,
                phone:"123456789"
            }
            resolve(user);
        },2000);
    });
}
getUserInfoFromDb("moinul@com").then((data)=>{console.log(data)}).catch((error)=>{console.log(error)});

function getUserFromDb(email){
     console.log("out of promise -top");
    return new Promise((resolve,reject) => {
       console.log("fetching user from db - in promise");   
        setTimeout(() => {
            const user = {name:"moinul",email:email,phone:"019288493"};
            resolve(user);
        },2000);
    });    
}
getUserFromDb("moinul@gmail.com").then((data)=>{console.log(data)}).catch((error)=>{console.log(error)});


function userLogin(email,password){
    return new Promise((resolve, reject)=>{
        console.log('checking login');
        setTimeout(()=>{
            const user={
                id:1,
                name:"moinul",
                email:email,
                phone:"123456789"
            }
            resolve(user);
        },2000);
    });
}
function getUserProfile(userId){
    return new Promise((resolve, reject) => {
        console.log('fetching user profile');
        setTimeout(() => {
            const userProfile = {id:1,name:"moinul",email:"moinul@gmail.com",phone:"019288493",country:"DB"};
            resolve(userProfile);
        },2000);
    });
}
function getUserPosts(userId){
    return new Promise((resolve, reject) => {
        console.log('fetching user posts');
        setTimeout(() => {
            const userPosts = [{id:1,title:"post 1"},{id:2,title:"post 2"},{id:3,title:"post 3"}];
            resolve(userPosts);
        },2000);
    });
}
userLogin("moinul@gmail.com","123456")
    .then((user)=>{
        console.log('User Logged In- ',user);
        return getUserProfile(user.id);
    })
    .then((user)=>{
        console.log('User Profile- ',user);
        return getUserPosts(user.id);
    })
    .then((posts)=>{
        console.log('User Posts- ',posts);
        console.log(posts);
    })
    .catch((error)=>{
        console.log(error);
    });

    Promise.all([
        userLogin("moinul@gmail.com","123456"),
        getUserProfile(1),
        getUserPosts(1)
    ]).then((data) =>{console.log(data)}).catch((error)=>{console.log(error)});

    //promise race
    Promise.race([
        userLogin("moinul@gmail.com","123456"),
        getUserProfile(1),
        getUserPosts(1)
    ]).then((data) =>{console.log(data)}).catch((error)=>{console.log(error)});

    //promise any
    Promise.any([
        userLogin("moinul@gmail.com","123456"),
        getUserProfile(1),
        getUserPosts(1)
    ]).then((data) =>{console.log(data)}).catch((error)=>{console.log(error)});//returns first resolved promise

    //promise allSettled
    Promise.allSettled([
        userLogin("moinul@gmail.com","123456"),
        getUserProfile(1),
        getUserPosts(1)
    ]).then((data) =>{console.log(data)}).catch((error)=>{console.log(error)});//returns all promises

    //async and await 
    //async/await does not chnage the promise but it makes the code more readable
    //async/await is more prettier than promises syntax

    //async function return ALWAYS Promise data

    //syntax
    async function test() {     
    }

    async function getData(){
        const user = await userLogin("moinul@gmail.com","123456");
        const profile = await getUserProfile(user.id);
        const posts = await getUserPosts(user.id);
        console.log(user);
        console.log(profile);
        console.log(posts);
    }
    getData();

    //async always return promise
    async function hello() {
        return "Hello";
    }

    console.log(hello()); //Output: Promise { 'Hello' }