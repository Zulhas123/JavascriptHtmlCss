
//dummy Data
// const posts=[
//     {
//         title: "This is title one",
//         body: "This is body one"
//     },
//     {
//         title: "This is title two",
//         body: "This is body two"
//     },
//     {
//         title: "This is title three",
//         body: "This is body three"
//     },
//     {
//         title: "This is title four",
//         body: "This is body four"
//     },
//     {
//         title: "This is title Five",
//         body: "This is body five"
//     },
//     {
//         title: "This is title six",
//         body: "This is body six"
//     },
//     {
//         title: "This is title seven",
//         body: "This is body seven"
//     },
//     {
//         title: "This is title eight",
//         body: "This is body eight"
//     }
// ];

/* <div class="post">
            <h4 class="post-title">Post Title</h4>
            <p class="post-body">Post Description</p>
        </div> */

//Selection part

// Call API and create card( Fetch data)

const fetchData = async (config) =>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
     throw Error("Data is not fetch")
    }

};




 const postsElement=document.querySelector(".posts");

const loadData = async() => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts")
    posts.map((post)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML=`
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);

    });
   
};
loadData();