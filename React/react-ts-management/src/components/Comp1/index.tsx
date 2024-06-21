import styles from "./comp1.module.scss";
import { Button } from 'antd'
function Comp1() {
    return (
        <div className={styles.box}>
            Comp1
            <Button>123</Button>
        </div>
    )
}

export default Comp1;
