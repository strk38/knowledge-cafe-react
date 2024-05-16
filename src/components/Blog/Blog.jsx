import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, author_img, author, posted_date, reading_time, hashtag } = blog;

    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-2 '>
                <div className='flex'>
                    <img className='w-14' src={author_img} />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)} className='ml-2 text-red-600'><FaBookmark></FaBookmark>
                    </button>

                </div>

            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;