import { ChangeEvent, FC, useState } from "react"
import { GetServerSideProps } from 'next'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import Layout from "../components/layouts/Layout"
import Cookies from 'js-cookie'
import axios from 'axios'

interface Props {
  theme: string
}

const Theme: FC<Props> = ({ theme }) => {

  const [currentTheme, setTheme] = useState(theme)

  const onThemeChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setTheme(e.target.value)
    Cookies.set('theme', e.target.value)
  }

  const onClick = async () => {
    const resp = await axios.get('/api/hello');
    console.log({ data: resp.data })
  }

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Theme</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel 
                value='light'
                control={<Radio />}
                label='Light'
              />
              <FormControlLabel 
                value='dark'
                control={<Radio />}
                label='Dark'
              />
              <FormControlLabel 
                value='custom'
                control={<Radio />}
                label='Custom'
              />
            </RadioGroup>
          </FormControl>
          {/* <Button 
            onClick={onClick}
          >
            Request
          </Button> */}
        </CardContent>
      </Card>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { theme = 'ligth' } = ctx.req.cookies

  const validTheme = ['light', 'dark', 'custom'];
  
  return {
    props: {
      theme: validTheme.includes(theme) ? theme : 'dark',
    }
  }
}

export default Theme