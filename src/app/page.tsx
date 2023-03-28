'use client'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { TodoCard } from './features/todo'
import styles from './page.module.css'
import { store } from './store'


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
