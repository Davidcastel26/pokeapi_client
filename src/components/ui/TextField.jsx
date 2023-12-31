import {
    Field,
    useField} from "formik"
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'


export const Textfield= (
    {
        label,
        // ...props 
        name,
        placeholder,
        autoComplete,
        type
    }
) => {
  
    const [field, meta] = useField(name)

    const isBooleand = meta.touched && meta.error ? true : false

  return (
    <FormControl isInvalid={isBooleand}>
        <FormLabel>{label}</FormLabel>
        <Input 
            as={Field} 
            {...field} 
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            type={type}
        />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  )
}