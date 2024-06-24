import Home from '@pages/home/index'
import LoginPage from '@pages/auth/login'
import Notifications from '@pages/common/notifications'
import PostListPage from '@pages/posts'
import PostDetail from '@pages/posts/postDetail'
import PostEdit from '@pages/posts/PostEditPage'
import ProfilePage from '@pages/profile'
import ProfileEdit from '@pages/profile/profileEdit'
import Search from '@pages/common/search'
import SignupPage from '@pages/auth/signup'
import { Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/posts" Component={PostListPage} />
      <Route path="/posts/:id" Component={PostDetail} />
      <Route path="/posts/edit/:id" Component={PostEdit} />
      <Route path="/profile" Component={ProfilePage} />
      <Route path="/profile/edit" Component={ProfileEdit} />
      <Route path="/search" Component={Search} />
      <Route path="/notifications" Component={Notifications} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/signup" Component={SignupPage} />
      <Route path="/*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default Router
