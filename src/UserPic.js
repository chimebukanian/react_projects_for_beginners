// import './App.css';
import styles from './App.module.css'

export default function UserPic() {
    return (
        <div>
            <img 
            alt="Mark"
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            className={styles['profile-pic']}
             />
        </div>
    )
}