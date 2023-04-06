const BASE_URL=process.env.NODE_API;

export function getAllPosts() {

    return fetch(`${BASE_URL}/view`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}

export function newPost(post) {
    return fetch(`${BASE_URL}/new`,{
        method : "POST",
        body : post
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
}