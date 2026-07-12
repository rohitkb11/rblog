import React , {useEffect , useState} from 'react'
import service from '../appwrite/services/config'
import { Container , PostCard } from '../components'


function Home() {
    const [posts , setPosts]= useState([]);
    useEffect(()=>{
        service.getRows().then((posts)=>{
            if(posts){
                setPosts(posts);
            }
        }).catch(()=>{
            console.log("posts not found");
            setPosts([]);
            
        }
        
        )
        console.log(posts);
        
    },[])
 return ( <h1>hello </h1> )

}

export default Home