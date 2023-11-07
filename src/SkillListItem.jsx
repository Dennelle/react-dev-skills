import './SkillListItem.css'

export default function SkillListItem ({skill}) {

    return (
        <li className={"SkillListItem"}>
            <div>{skill.name}</div>
            <div className={"level"}>{skill.level}</div>
        </li>
    )
}
