// import SkillListItem from './SkillListItem.jsx'


// export default function SkillList({ skills }) {
//     const skillListItems = skills.map(s => (<SkillListItem skills={s} />));
//     console.log(skillListItems)
//     return (
//       <ul className={"padding-0"}>{skillListItems}</ul>
//     );
//   }


  import SkillListItem from './SkillListItem.jsx'

export default function SkillList({skills}) {

    const skillListItems = skills.map(s => (<SkillListItem skill={s} />));

    console.log(skillListItems)
    return (
        <ul className={"padding-0"}>{skillListItems}</ul>
    );
}
