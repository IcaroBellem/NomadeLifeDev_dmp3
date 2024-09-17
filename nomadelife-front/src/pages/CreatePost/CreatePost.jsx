import { useState }  from 'react'

export const CreatePost = () => {
    const [post, setPost] = useState("Menssagem do Post")
  return (
     <>
     <p>{post}</p>
     <button onClick={() => setPost("Outra Menssagem")}>Troca</button>
    </>
  )
}

export default CreatePost;
