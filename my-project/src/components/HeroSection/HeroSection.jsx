import { Container, Stack } from '@mui/material'
import Styles from './HeroSection.module.css';
import React from 'react'

const HeroSection = () => {
  return (
    <Stack className={Styles.heroSection}>
        <Container sx={{border:'2px solid red'}}></Container>
    </Stack>
  )
}

export default HeroSection