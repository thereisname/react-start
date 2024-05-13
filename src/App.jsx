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

const InputComponent = ({ targetMember, setClicked, onChange }) => {
  // targetMember는 클릭된 item을 가져옴.
  // targetMember중 desc의 값이 변경되고 '확인' 버튼을 눌렀다면 input내 값으로 변경하는 작업.
  // '취소' 버튼을 클릭할 경우 input에 변경한 값이 존재하더라도 기존 값을 출력함.
  const [inprogress, setInprogress] = useState(targetMember)
  return (
    <div>
      <input
        value={inprogress.desc}
        onChange={(e) => {
          setInprogress({ ...inprogress, desc: e.target.value })
        }}
      />
      <button
        onClick={() => {
          setClicked((prev) => !prev)
          onChange(inprogress)
        }}
      >
        확인
      </button>
      <button onClick={() => setClicked((prev) => !prev)}>취소</button>
    </div>
  )
}

function ItemComponent({ children, member, onChange }) {
  const [clicked, setClicked] = useState(false)
  // children: react에서 제공하는 예약어

  return (
    <li>
      <div>{children}</div>
      {clicked ? (
        <InputComponent targetMember={member} setClicked={setClicked} onChange={onChange} />
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
