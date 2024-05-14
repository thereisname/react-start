import { useRef, useState } from 'react'
import './App.css'

function MyFirstReactComponent(props) {
  // const [captured, setCaptured] = useState(props.count)

  // [props.count]의 값이 변하면 setCaptured()로 값을 변경시킴.
  /*
    useEffect에서 파라미터는 함수와, array가 존재하는데
    array의 값이 바뀐다면(상태 변경) 함수를 실행시켜라는 의미로
    여기서는 값을 변경한다.

    아래 주석 처리된 코드는 가능한 이런 방식으로 사용하지말것!
  */

  // useEffect(() => {
  //   setCaptured(props.count)
  // }, [props.count])

  return (
    <div>
      우와 행복하다!: {props.name} - {props.count}
      <button
        onClick={() => {
          props.setCount(props.count + 1)
        }}
      >
        {'나도 부모님의 상태 바꿀래!'}
      </button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  // const [string, setString] = useState('')
  const stringRef = useRef()

  console.log('rerendered')

  return (
    <>
      <MyFirstReactComponent name='Aaron' count={count} setCount={setCount} />
      <button
        onClick={() => {
          console.log(stringRef.current.value)
        }}
      >
        Ref 안에 무엇이 있을까?
      </button>
      <input
        type='text'
        ref={stringRef}
        // value={string}
        // onChange={(e) => {
        //   setString(e.target.value)
        // }}
      />
    </>
  )
}

export default App
