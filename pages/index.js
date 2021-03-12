import Link from 'next/link'
import styles from'../styles/Home.module.css'
export default function Home() {
  return (
   <div className={styles.main}>
     Home
    <br/>
     <Link href='/mentors'>Go to Mentors</Link>
   </div>
  )
}
