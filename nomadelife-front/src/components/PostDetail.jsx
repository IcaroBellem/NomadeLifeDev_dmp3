import styles from './PostDetail.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const PostDetail = ({ post }) => {
    return (
        <div className={styles.post_detail}>
            <img src={post.image} />
            <h2>{post.title}</h2>
            <p>por: {post.createdBy}</p>
            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver mais</Link>
        </div>
    )
}
PostDetail.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createdBy: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
}

export default PostDetail
