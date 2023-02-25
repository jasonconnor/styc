import React from 'react'

const EnemiesPanel = () => {
  return (
    <div>
    <h2>Enemies Panel</h2>
    <NotAForm>Name</NotAForm>
    <NotAForm>Level Base</NotAForm>
    <NotAForm>Exp Base</NotAForm>
    <NotAForm>HP Base</NotAForm>
    <NotAForm>Attack Base</NotAForm>
    <NotAForm>Attack Element</NotAForm>
    <NotAForm>Attack Accuracy</NotAForm>
    <NotAForm>Attack Frequency</NotAForm>
    <NotAForm>Defense Base</NotAForm>
    <NotAForm>Defense Evade</NotAForm>
    <NotAForm>Defense Element Resistances</NotAForm>
    <NotAForm>Defense Element Vulnerabilities</NotAForm>
    <NotAForm>Magic Base</NotAForm>
    <NotAForm>Magic Elements</NotAForm>
    <NotAForm>Magic Accuracy</NotAForm>
    <NotAForm>Magic Cooldown</NotAForm>
    <NotAForm>Status Chance</NotAForm>
    <NotAForm>Article</NotAForm>
    <button>Create Enemy</button>
  </div>
  )
}

const NotAForm = ({children}) => {
  return <div>
    <span>{children}</span>&nbsp;
    <input></input>
  </div>
}

export default EnemiesPanel