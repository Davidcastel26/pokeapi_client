import React from 'react'
import { SearchBox } from './ui/SearchBox'

export const Search = () => {
  return (
    <SearchBox 
        // id="personName"
        name="pokeName"
        label="Search for a pokemon"
        placeholder="Enter your fav pokemon name"
        // autoComplate={true}
        // maxItems={5}
        // styles={{
        //   label:"",
        //   input:""
        // }}
        // debounceWait={400}
        // listBox={(items) => <ListBox items={items} />}
        // noItemMessage={() => <div> Sorry no person found</div>}
        // errorMessage={() => <div> Sorry no person found</div>}
        // transformData={transformData}
        // dataPromise={dataPromise}
    />
  )
}
