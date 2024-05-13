import { useState } from 'react'
import './App.css'

const initMembers = [
  {
    id: 1,
    name: 'Aaron',
    desc: '잘부탁드립니다.',
  },
  {
    id: 2,
    name: 'Baron',
    desc: '잘부탁드립니다.',
  },
  {
    id: 3,
    name: 'Caron',
    desc: '잘부탁드립니다.',
  },
  {
    id: 4,
    name: 'Daron',
    desc: '잘부탁드립니다.',
  },
]

function ItemComponent({ children, member, onChange }) {
  const [clicked, setClicked] = useState(false)
  // children: react에서 제공하는 예약어

  return (
    <li>
      <div>{children}</div>
      {clicked ? (
        <input
          value={member.desc}
          onChange={(e) => {
            onChange({ ...member, desc: e.target.value })
          }}
          onClick={() => setClicked(!clicked)}
        />
      ) : (
        <div onClick={() => setClicked(!clicked)}>
          <div>{member.desc}</div>
        </div>
      )}
    </li>
  )
}

function ListComponent() {
  const [members, setMembers] = useState(initMembers)
  return (
    <>
      <ul>
        {members.map((eachMember) => {
          return (
            <ItemComponent
              key={eachMember.id}
              member={eachMember}
              onChange={(changedMember) => {
                const changedMembers = members.map((each) =>
                  each.id === eachMember.id ? changedMember : each,
                )
                setMembers(changedMembers)
              }}
            >
              {eachMember.name}
            </ItemComponent>
          )
        })}
      </ul>
    </>
  )
}
function App() {
  return (
    <>
      <ListComponent />
    </>
  )
}

export default App
