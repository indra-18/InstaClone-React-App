import React, { createContext, useEffect, useState } from "react";
import { getAllPosts } from "../../services/http-services";
// console.log(getAllPosts)
const PostContext = createContext()

export default function PostContextProvider({children}) {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        getAllPosts().then(res => {
            setPosts(res)
            // console.log(res)
        })
    }, [])

    return <PostContext.Provider 
    value={{
        posts: posts,
        addPost: (post) => {
            // console.log(post)
            const latestPost = [post, ...posts];
            setPosts(latestPost);
        }
    }}>
        {children}
    </PostContext.Provider>
}

export {
    PostContext
}