// useSearchParams传参
// import React from 'react';
// import { useSearchParams } from 'react-router-dom'; // 引入useParams

// const Article = () => {
//     const [params] = useSearchParams();
//     console.log(params);
//     return (
//         <div>
//             <h1>article</h1>
//             <br/>
//             id:{params.get('id')}
//             <br/>
//             name:{params.get('name')}
//         </div>
//     );
// };

// export default Article;

//useParams 传参
import React from 'react';
import { useParams } from 'react-router-dom'; // 引入useParams

const Article = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h1>article</h1>
            <br/>
            id:{params.id}
            <br/>
            name:{params.name}
        </div>
    );
};

export default Article;