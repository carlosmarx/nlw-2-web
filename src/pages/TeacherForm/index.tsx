import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'

import warningIconImg from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader 
      title="Que incrível que você quer dar aula!" 
      description="O primeiro passo é preencher esse formulário de inscrição"
      ></PageHeader>
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar URL" />
          <Input name="whatsapp" label="Whatsapp" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>

        <footer>
          <p>
            <img src={warningIconImg} alt="Aviso importante"/>
            Importante <br />
            Preencha todos os dados!
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm