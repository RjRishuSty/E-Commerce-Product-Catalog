import { Container, Stack } from '@mui/material'
import Styles from './HeroSection.module.css';
import React from 'react'
import Search from '../Search/Search';

const HeroSection = () => {
  return (
    <Stack className={Styles.heroSection}>
        <Container >
            <Search/>
        </Container>
    </Stack>
  )
}

export default HeroSection