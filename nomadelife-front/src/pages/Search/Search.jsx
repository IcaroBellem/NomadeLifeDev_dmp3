 import styles from './Search.module.css'
import { useQuery } from '../../hooks/useQuery'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'
import PostDetail from '../../components/PostDetail'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents: posts} = useFetchDocuments("posts", search)
  return (
    <div className={styles.search_container}>
        <h1>Resultados encontrados para: {search}</h1>
        <div>
            {posts && posts.length === 0 && (
                <>
                <p>Nao foram encontrados</p>
                <Link to="/">Voltar</Link>
                </>
            )}
            {posts && posts.map((post) => (
                <PostDetail key={post.id} post={post}/>
            ))}
        </div>
    </div>
  )
}

export default Search
