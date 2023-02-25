import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  AbilitiesPanel,
  EnemiesPanel,
  ElementsPanel,
  LandingPanel,
  PreferencesPanel
} from '.'
// import AbilitiesPanel from './Abilities/AbilitiesPanel'
import './contentPane.scss'

const ContentPane = () => (<div id='content-pane-container'>
  <Routes>
    <Route path="/" element={<LandingPanel />} />
    <Route path="/Abilities" element={<AbilitiesPanel />} />
    <Route path="/Elements" element={<ElementsPanel />} />
    <Route path="/Enemies" element={<EnemiesPanel />} />
    <Route path="/Accounts" element={<div>Accounts</div>} />
    <Route path="/Authorization" element={<div>Authorization</div>} />
    <Route path="/Articles" element={<div>Articles</div>} />
    <Route path="/Scores" element={<div>Scores</div>} />
    <Route path="/Stats" element={<div>Stats</div>} />
    <Route path="/Tokens" element={<div>Tokens</div>} />
    <Route path="/Users" element={<div>Users</div>} />
    <Route path="/Preferences" element={<PreferencesPanel />} />
  </Routes>
</div>
)

export default ContentPane