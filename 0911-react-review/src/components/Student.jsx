
function Student({ name, age, major }) {

  return (
    <>
      {/* JS를 쓰기 위한 {} + JS 객체를 위한 {} */}
      <h4 style={{ textDecoration: age >= 20 ? 'underline' : 'none' }}>
        {name} : {age} : {major}
      </h4 >
    </>
  );

}

export default Student;