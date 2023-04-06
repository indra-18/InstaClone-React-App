import React, { createContext, useEffect, useState } from "react";
import { getAllPosts } from "../../services/http-services";

export const PostContext = createContext()

export default function PostContextProvider({children}) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(res => {
            setPosts(res.result)
        })
    }, [])


    return <PostContext.Provider value={{
        posts: posts,
        addPost: post => {
            const latestPost = [post, ...posts];
            setPosts(latestPost);
        }
    }}>
        {children}
    </PostContext.Provider>
}