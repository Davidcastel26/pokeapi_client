import { useState } from "react"
// import useFetchPromise from "../hooks/useFetchPromise"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

export const SearchBox = ({ 
    id,
    name, 
    label, 
    placeholder,
    autoComplate,
    maxItems,
    styles,
    debounceWait,
    listBox,
    noItemMessage,
    errorMessage,
    transformData,
    dataPromise
}) => {

    // const [query, setQuery] = useState('')
    // const [dataSave, setDataSave, error] = useFetchPromise(
        // query, 
        // transformData, 
        // dataPromise, 
        // debounceWait)

    // const handleChange = (event) => {
    //     setQuery(event.target.value)
    // }

    return (
        <FormControl>
            <FormLabel htmlFor={name}>
                {label}
            </FormLabel>
            <Input
                // htmlSize={6}
                width='auto'
                // className={styles.input}
                placeholder={placeholder}
                name={name}
                // id={id}
                // value={query}
                // onChange={handleChange}
            />
            {/* {dataSave && dataSave.length > 0 && listBox(dataSave)} */}
        </FormControl>
    )
}