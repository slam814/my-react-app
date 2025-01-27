import { useState, useEffect} from "react"
import Post from "./Post"

export default function Postes(){
    
    const [posts, setPosts] = useState([])
 
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())

        .then(data => setPosts(data))
    },[])
    

    return(
        <div>
            <h1>Posts: {posts.length} </h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}