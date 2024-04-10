/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

const List = (props) => {
    const arr = props.colors
    const lis = arr.map((color, index) =>{
        return <li key={index}>{color.name}</li>
    })
    return (
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    );
};

List.propTypes = {//为组件添加校验规则
    colors: PropTypes.array,
    fn: PropTypes.func.isRequired, //必须要传
    obj: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number
    }).isRequired

}

export default List;