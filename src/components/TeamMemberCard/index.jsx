import './index.css'
const TeamMemberCard = props => {
  const {name, role, imageUrl, department} = props
  return (
    <li className="member-card">
      <img src={imageUrl} className="member-img" alt={name} />
      <h1 className="member-name">{name}</h1>
      <p className="member-role">{role}</p>
      <p className="member-department">Department: {department}</p>
    </li>
  )
}
export default TeamMemberCard
