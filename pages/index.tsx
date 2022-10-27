import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = (props) => {

  const router = useRouter();
  const slideChange = () => {
      router.push('/1')
    }
    
    return (
            <div style={{backgroundColor: 'yellow', height: '100vh'}}>
                <button onClick={slideChange} >link</button>
                <div>
                    移動しました
                </div>
            </div>
    )
  }

export default Home
