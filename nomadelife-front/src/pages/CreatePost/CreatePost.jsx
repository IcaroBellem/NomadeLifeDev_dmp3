import styles from './CreatePost.module.css'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useState } from 'react'
import { useInsertDocument } from '../../hooks/useInsertDocument'

export const CreatePost = () => {
  const [title, SetTitle] = useState("")
  const [image, SetImage] = useState("")
  const [body, SetBody] = useState("")
  const [Tags, SetTags] = useState("")
  const [formError, SetFormError] = useState("")
  const [user, SetUser] = useState("")
  const useNavigate = useNavigate("")

  const { insertDocument, response } = useInsertDocument("Post")

  const handlerSubmit = (e) => {
    e.preventDefault()
    SetFormError("");

    try {
      new URL(image)
    } catch (error) {
      SetFormError("a Imagem precisa ser uma URL")
    }
    const tagsArray = tags.split(',').map((tag) => tag.trim().toLowerCase())

    if (!title || image || tags || body) {
      SetFormError("Por favor, preencha todos os campos do formulário do post")
    }

    console.log(tagsArray)

    console.log({
      title,
      image,
      tags: tagsArray,
      id: user.id,
      createBy: user.displayName
    })

    if (SetFormError) return

    insertDocument({
      title,
      image,
      tags: tagsArray,
      id: user.id,
      createBy: user.displayName
    })

    Navigate('/')
  }

  return (
    <>

    </>
  )
}
export default CreatePost;