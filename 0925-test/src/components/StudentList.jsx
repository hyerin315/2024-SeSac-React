import PropTypes from 'prop-types'; // PropTypes 임포트

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>학생 점수 테이블</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.score}
            </li>
          ))}
        </ul>
      ) : (
        <p>정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

// PropTypes 정의
StudentList.propTypes = {
  students: PropTypes.array.isRequired, // students는 필수 배열
};

export default StudentList;
