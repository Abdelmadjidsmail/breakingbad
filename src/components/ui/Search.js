import React ,{useState} from 'react'

const Search = ({getquery}) => {
    const [text , setText] =useState('')
    const onChange =(q)=>{
        setText(q);
        getquery(q);
    }
    return (
        <section className='search'>
            <form>
                <input type='text' className='form-control' placeholder='Search'  value={text}  onChange={(e) => onChange(e.target.value) } autoFocus/>
            </form>
        </section >
    )
}

export default Search
