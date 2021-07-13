import React, {useState} from 'react'
import {SCRIPT} from '../shared/script'
import Page from './Page'


export default function PageFrame() {
  const [thisPage, setThisPage] = useState(0)
  const pageForward = () => {
    setThisPage(thisPage + 1)
  }
  const {bitCount, number, toggle, text} = SCRIPT[thisPage]
  return (
    <Page bitCount={bitCount} number={number} toggle={toggle} text={text} forward={pageForward} />
  )
}
