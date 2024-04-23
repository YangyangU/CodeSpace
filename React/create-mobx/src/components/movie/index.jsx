import React,{useEffect} from 'react';
// import movieStore from '../../store/movieStore';
// import { observer } from 'mobx-react-lite';

//从模块化仓库引入
import { useStore,observer } from '../../store';

const MovieList = () => {
    const {movieStore} = useStore();
    
    useEffect(() => {
        movieStore.setMovieList();
    }, []);
    return (
        <div>
            {
                movieStore.movieList.map(item => {
                    return <div key={item.id}>{item.nm}--{item.star}</div>
                })
            }
        </div>
    );
};

export default observer(MovieList);