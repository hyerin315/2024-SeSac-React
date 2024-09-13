// function User(props) {
//   return (
//     <>
//       <h2>
//         {props.name}
//       </h2>
//       <h2>
//         {props.age}
//       </h2>
//     </>
//   )
// }


// Default Props
// User.defaultProps = {
//   name: "Unknown",
//   age: 1
// };


import PropTypes from 'prop-types';

// Type 지정
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};


// 구조 분해 할당
function User({ name, age }) {
  return (
    <>
      <h2>
        {name}
      </h2>
      <h2>
        {age}
      </h2>
    </>
  )
}


export default User;