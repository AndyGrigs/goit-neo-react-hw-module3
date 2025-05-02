import React from 'react'
import Contact from './Contact'

const ContactList = ({contacts}) => {
  return (
    <ul className=''>
        {contacts.map(({id, name, number})=>(
           <Contact name={name} number={number} id={id} key={id}/>
        ))}
    </ul>
  )
}

export default ContactList