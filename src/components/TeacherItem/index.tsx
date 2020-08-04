import React from 'react'
import TeacherForm from '../../pages/TeacherForm'

import whatsappIconImg from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    
      <article className="teacher-item">
        <header>
          <img src="https://avatars1.githubusercontent.com/u/967220?s=460&v=4" alt="Carlos Marx"/>
          <div>
            <strong>Carlos Marx</strong>
            <span>Música</span>
          </div>
        </header>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          <br />
          Numquam eveniet est accusantium dolorem tempore quasi ab. 
        </p>

        <footer>
          <p>
            Preço/hora
            <strong>R$ 80,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIconImg} alt="Whatsapp" />
            Entrar em contato
          </button>
        </footer>
      </article>
  
  )
}

export default TeacherItem