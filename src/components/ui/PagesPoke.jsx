// import React from 'react'
import { Button, Stack } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

export const PagesPoke = () => {
  return (
    <div className='mt-5'>
       <Stack spacing={3} direction='row' align='center'>
       <Button colorScheme='teal' size='xs'>
             <ArrowLeftIcon />   <span className='ml-2'>back</span> 
        </Button>
        
        <Button colorScheme='teal' size='xs'>
            <span className='mr-2'>next</span>  <ArrowRightIcon />
        </Button>
      </Stack>
        </div>
  )
}
