import { CssBaseline, ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { customTheme, darkTheme, lightTheme } from '../theme';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const getTheme = (theme: string) => {
  switch (theme) {
    case 'dark':
      return darkTheme
    case 'light':
      return lightTheme
    case 'custom':
      return customTheme
    default:
      return lightTheme
  }
} 

function MyApp({ Component, pageProps }: AppProps) {

  const [currentTheme, setCurrentTheme] = useState('')

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light'
    setCurrentTheme(cookieTheme)
  }, [])
  
  return (
    <ThemeProvider theme={getTheme(currentTheme)}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
