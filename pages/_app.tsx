import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {CSSTransition, TransitionGroup} from "react-transition-group"
import { useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <TransitionGroup>
      <CSSTransition key={router.route} timeout={1000} classNames="slider" >
            <Component {...pageProps} />
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MyApp
