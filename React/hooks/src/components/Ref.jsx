import {useEffect, useRef} from 'react';

const Ref = () => {
    const h2Ref = useRef(null);

    useEffect(() => {
        console.log(h2Ref.current);
    },[])//失去目标，只初始调用一次
    return (
        <div>
            <h2 ref={h2Ref}>Ref</h2>
        </div>
    );
};

export default Ref;