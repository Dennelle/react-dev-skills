import { useState } from "react";
import NewSkillForm from './NewSkillForm.jsx';
import SkillList from "./SkillList.jsx";
import './App.css'


const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {

  return (
    <div className={ "App"}>
      <h1 className={ "teal-text"}>React Dev Skills</h1>
      < SkillList skills = { skills }  />
      <hr></hr>
      <NewSkillForm />
    </div>
  )
}
