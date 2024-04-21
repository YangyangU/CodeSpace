import React from 'react'
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/login'
import LayoutWrap from '../pages/layout'
import Students from '../pages/students'
import Employment from '../pages/employment'
import Personal from '../pages/personal'

const routerList =[
    {
        path:'/login',
        element:<Login />
    },
    {
        path:'/layout',
        element:<LayoutWrap />,
        children:[
            {
                path:'',
                element:<Navigate to='/layout/students'/>
            },
            {
                path:'/layout/students',
                element:<Students/>
            },
            {
                path:'/layout/employment',
                element:<Employment/>
            },
            {
                path:'/layout/personal',
                element:<Personal/>
            }
        ]
    }
]

function Element(){
    return useRoutes(routerList)
}

function WrapperRputes(){
    
    return(
        <BrowserRouter>
            <Element></Element>
        </BrowserRouter>
    )
}



export default WrapperRputes