import React , {useState , useEffect}from 'react'
import { Container , PostCard } from '../components'
import service from '../appwrite/services/config'
function AllPosts() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
     
    service.getRows([]).then((posts)=>{
      if(posts){
        setPosts(posts.rows)
      }
      console.log(posts.rows);
      
    })
    console.log(posts);
    
     
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                  posts.length > 0 ?
                  posts.map((post)=>(
                    <PostCard {...post}/>
                  ))
                  : <h1> NO POSTS TO SHOW</h1>
                }
            </div>
           
        </Container> 
    </div>
  )
}

export default AllPosts