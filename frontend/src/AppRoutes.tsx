import  Layout  from './layout/Layout';
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<Layout>Home Page </Layout> }/>
        <Route path='/user-profile'  element={<span>User Page</span>} />
        <Route path='*'  element={<span> Page</span>} />
    </Routes>
  )
}

export default AppRoutes