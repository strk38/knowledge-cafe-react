import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className='bg-slate-100 p-4 m-4 rounded-xl'>
            <h4 className='text-2xl'>{title}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired

}
export default Bookmark;