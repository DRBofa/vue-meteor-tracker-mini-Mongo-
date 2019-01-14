import Home from './pages/Home'
import Indexs from './pages/Index'
import Footer from './pages/Page_Footer'
import Branch from './pages/Branch'
import Item from './pages/Item'
import ListByBranch from './pages/List_Branch'
import Register from './pages/Register'
import Login from './pages/Login'
// import Images from './pages/Images'

const routes = [
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/index',
        component: Indexs
    },
    {
        path: '/footer',
        component: Footer
    },
    {
        path: '/branch',
        component: Branch
    },
    {
        path: '/item',
        component: Item
    },
    {
        path: '/listview',
        component: ListByBranch
    },
]
export default routes