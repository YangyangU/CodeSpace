import React from 'react';
// import { useSearchParams } from 'react-router-dom';

// const Home = () => {
//     const [params] = useSearchParams();
//     console.log(params);
//     return (
//         <div>
//             <h1>Home</h1>
//             <div>id:{params.get('id')}</div>
//             <div>name:{params.get('name')}</div>
//         </div>
//     );
// };

import { Link,Outlet,useParams } from 'react-router-dom'; // 引入useParams

const Home = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>Home</h1>
            {/* <div>id:{params.id}</div>
            <div>name:{params.name}</div> */}
            <Link to="board">面板</Link>|
            <Link to="about">关于</Link>
            <Outlet />
        </div>
    );
};

export default Home;