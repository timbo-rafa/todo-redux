import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { TodoCard } from './features/todo'
import { Provider } from 'react-redux'
import {store} from './store'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
      <TodoCard />

      </Provider>
    </main>
  )
}
