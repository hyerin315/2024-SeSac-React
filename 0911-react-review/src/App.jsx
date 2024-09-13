import './App.css'
// import Todo from './components/Todo'
// import User from './components/User'
import Student from './components/Student'
import BookList from './components/BookList'
import Counter from './components/Counter'
import MyComponent from './components/MyComponent'
import Button from './components/Button'


function App() {
  // const number = 20;
  // const user = {
  //   name: "John",
  //   age: 20
  // }

  // const users = [
  //   { name: "John", age: 25 },
  //   { name: "Jenie", age: 30 }
  // ]

  // * 조건부 렌더링
  // 1) if문을 사용한 조건부 렌더링
  // if (number % 2 === 0) {
  //   return <div>{number} : 짝수입니다.</div>
  // } else {
  //   return <div>{number} : 홀수 입니다.</div>
  // }


  // return (
  //   // 최상위 태그가 무조건 있어야하므로 빈태그 넣어주기
  //   <>
  //     <h1>{number + '2'}</h1>
  //     <h1>{user.name + user.age}</h1>
  //     {/* 2) 삼항연산자를 이용한 조건부 렌더링 - 조건문 ? 참인 경우 : 아닌 경우 */}
  //     <h1>{number}은 {number % 2 === 0 ? "짝수" : "홀수"} 입니다.</h1>
  //     <Todo />

  //     {/* * Props */}
  //     {/* 1) 부모 연산자가 자식 연산자에게 값 전달 */}
  //     <User name="May" age="22" />
  //     <User name="Yeseo" age="2" />
  //     {/* 2) 스프레드 연산자로 여러개의 값 전달 */}
  //     <User name={users[0].name} age={users[0].age} />
  //     <User {...users[1]} /> 간략하게 작성하여 전달
  //   </>
  // )



  //실습 1. 
  const students = [
    { name: "John Doe", age: 20, major: 'Computer Science' },
    { name: "Jane Smith", age: 22, major: 'Mathematics' },
    { name: "Alice Johnson", age: 19, major: 'Physics' },
    { name: "Bob Brown", age: 21, major: 'Chemistry' },
  ]

  let studentComponents = [];

  // 1) 반복문을 사용하여 배열 전달
  for (let i = 0; i < students.length; i++) {
    studentComponents.push(<Student key={students[i].id} {...students[i]} />);
  }

  alert(studentComponents[0])

  return (
    <>
      {/* <Student {...students[0]} />
      <Student {...students[1]} />
      <Student {...students[2]} />
      <Student {...students[3]} /> */}
      <div>
        {/* 2) map을 사용하여 배열 전달 */}
        {students.map((student) =>
          // <Student key={student.id} name={student.name} age={student.age} major={student.major} />
          <Student key={student.id} {...student} />
        )}
      </div>
      <div>
        {studentComponents}
      </div>
      <BookList /><br />
      <Counter /><br />
      <MyComponent /><br />
      <hr></hr>
      <Button />
    </>
  )


}

export default App
