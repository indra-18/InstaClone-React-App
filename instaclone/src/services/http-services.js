// const BASE_URL=process.env.NODE_API;
// const BASE_URL='http://localhost:5000';
const BASE_URL='https://instaclone-node-api.onrender.com';
// console.log(BASE_URL)


export function getAllPosts() {

    return fetch(`${BASE_URL}/view`)
    .then(res => {
        // console.log(res.json())
       return res.json()
})
    .catch(err => console.log(`Error occured: ${err.message}`));
}

export function newPost(post) {
    return fetch(`${BASE_URL}/new`,{
        method: 'POST',
        body: post
    })
    .then(res => res.json())
    .catch(err => console.log(`Error occured while Posting: ${err.message}`));
}