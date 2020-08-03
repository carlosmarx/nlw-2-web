import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIconImg from '../../assets/images/icons/back.svg'

function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIconImg} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Logo Proffy"/>
      </div>

      <div className="header-content">
        <strong>
          Esses são os Proffys disponíveis!
        </strong>
      </div>
    </header>
  )
}

export default PageHeader