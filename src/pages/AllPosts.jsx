import React , {useState , useEffect}from 'react'
import { Container , PostCard } from '../components'
import service from '../appwrite/services/config'
function AllPosts() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
     
    
      return () => {
        
      }
    }, [])
    service.getRows([]).then((posts)=>{if(posts)setPosts(posts.document)});
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                 {posts.map((post)=>{
                    return(
                        <div key={post.$id} className='p-2 w-1/4'><PostCard post={post}/></div>
                )
            })}
            </div>
           
        </Container> 
    </div>
  )
}

export default AllPosts