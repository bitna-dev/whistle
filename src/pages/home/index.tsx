import { IoImagesOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { AiOutlineComment } from 'react-icons/ai'

export interface PostProps {
  id: string
  email: string
  content: string
  createdAt: string
  uid: string
  profileUrl?: string
  likes?: string[]
  likeCount?: number
  comments?: any
}

const posts: PostProps[] = [
  {
    id: '1',
    email: '22@gmail.com',
    content: '내용입니다.',
    createdAt: '2024-01-22',
    uid: '123123',
  },
  {
    id: '2',
    email: '2@gmail.com',
    content: '내용입니다1.',
    createdAt: '2024-01-22',
    uid: '123123',
  },
  {
    id: '3',
    email: '122@gmail.com',
    content: '내용입니다2.',
    createdAt: '2024-04-22',
    uid: '123123',
  },
  {
    id: '4',
    email: '22333@gmail.com',
    content: '내용입니다3.',
    createdAt: '2024-03-22',
    uid: '123123',
  },
  {
    id: '5',
    email: '22444@gmail.com',
    content: '내용입니다4.',
    createdAt: '2024-08-11',
    uid: '123123',
  },
]
const Home = () => {
  const handleFileUpload = () => {}
  const handleDelete = () => {}
  const handleEdit = () => {}
  return (
    <div className="home">
      <div className="home__title">Home</div>
      <div className="home__tabs">
        <div className="home__tab home__tab--active">For You</div>
        <div className="home__tab home__tab">Following</div>
      </div>
      <form>
        <div className="post-form">
          <textarea
            className="post-form__textarea"
            required
            name="content"
            id="content"
            placeholder="What is happening?"
          />
          <div className="post-form__submit-area">
            <label htmlFor="file-input" className="post-form__file">
              <IoImagesOutline className="post-form__file-icon" />
            </label>
            <input
              type="file"
              name="file-input"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <input
              type="submit"
              value="Whistle"
              className="post-form__submit-btn"
            />
          </div>
        </div>
      </form>
      <div className="post">
        {posts?.map((post) => (
          <div className="post__box" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className="post__box-profile">
                <div className="post__flex">
                  {post?.profileUrl ? (
                    <img
                      src={post.profileUrl}
                      alt="profile"
                      className="post_-box-profile-img"
                    />
                  ) : (
                    <FaUserCircle className="post__box-profile-icon" />
                  )}
                  <div className="post__email">{post?.email}</div>
                  <div className="post__createdAt">{post?.createdAt}</div>
                </div>
              </div>
              <div className="post__box-content">{post?.content}</div>
            </Link>
            <div className="post__box-footer">
              <button
                type="button"
                className="post__delete"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button type="button" className="post__edit">
                <Link to={`/posts/edit/${post?.id}`}>Edit</Link>
              </button>
              <button type="button" className="post__likes">
                <Link to={`/posts/edit/${post?.id}`}>
                  <FaRegHeart />
                  {post?.likeCount || 0}
                </Link>
              </button>
              <button type="button" className="post__comments">
                <Link to={`/posts/edit/${post?.id}`}>
                  <AiOutlineComment />
                  {post?.comments || 0}
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
