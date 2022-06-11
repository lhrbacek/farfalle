import { useEffect } from 'react'
import { Center, createStyles, Footer } from '@mantine/core'

import '../../index.css'

function FooterBar() {

  return (
    <Footer height={50} p="md" className='footer'>{<Center>©Farfalle Team</Center>}</Footer>
  )
}

export default FooterBar
