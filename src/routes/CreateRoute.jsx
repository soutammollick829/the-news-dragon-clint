import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Category from "../pages/home/category/Category";
import NewsLayout from "../pages/main-layout/newslayout/NewsLayout";
import News from "../pages/news/News";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/category/:id',
                element:<Category/>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout/>,
        children:[
            {
                path:'/news/:id',
                element:<News/>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;