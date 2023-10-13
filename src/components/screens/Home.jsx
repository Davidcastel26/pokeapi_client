import { Text } from '@chakra-ui/react'
import React from 'react'

export const Home = () => {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-12">
        
       
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <Text className=' mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                Welcome to Pokemon Web Inform App
            </Text>
            <Text className="text-base sm:text-lg mb-6 lg:text-xl ">
            Create a TypeScript-based REST API using Node.js and Express.js as the framework, with PostgreSQL as the database, and Prisma as the Object-Relational Mapping (ORM) tool. This api will enable you to build a robust and efficient backend system for the front-ends' applications, ensuring seamless data management and powerful REST endpoints. 
            </Text>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <img src="src/assets/pokemon.png" alt="logo" />
        </div>
    </div>
  )
}
