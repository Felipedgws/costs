import loading from '../../img/Spinner@1x-1.0s-200px-200px (1).svg'
import styles from './Loading.module.css'

function Loading (){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loading" />
        </div>
    )
}

export default Loading