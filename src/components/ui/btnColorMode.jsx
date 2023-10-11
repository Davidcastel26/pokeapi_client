// import  from 'react'
import { useColorMode} from '@chakra-ui/color-mode'
import { Button } from '@chakra-ui/button'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
 
const ToggleColorMode = () => {

    const { colorMode, toggleColorMode } = useColorMode()

  return (
    <li className='pl-4'>
    <Button
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
      onClick={() => toggleColorMode()}>
        {
            colorMode === "dark" ? <SunIcon color="orange.400" /> : <MoonIcon color="blue.700"/>
        }
    </Button>  
    </li>
  )
}

export default ToggleColorMode;