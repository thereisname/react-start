import { useState } from 'react'
import './App.css'

function ItemComponent(props) {
  // children: react에서 제공하는 예약어
  return (
    <li>
      <div>{props.children}</div>
      <input value={props.member.desc} />
    </li>
  )
}

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

function ListComponent() {
  const [members, setMembers] = useState()
  const [selectedMember, setSelectedMember] = useState(initMembers[0])
  return (
    <>
      <ul>
        {initMembers.map((eachMember) => {
          return (
            <ItemComponent
              key={eachMember.id}
              member={eachMember}
              onChange={(changedMember) => {
                const changedMembers = members.map((each) => {
                  if (eachMember.id === each.id) {
                    return changedMember
                  } else {
                    return each
                  }
                })
                setMembers(changedMembers)
              }}
            >
              {eachMember.name}
            </ItemComponent>
          )
        })}
      </ul>
      <div>내가 선택한것은 무엇이야: {selectedMember.name}</div>
    </>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListComponent />
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
