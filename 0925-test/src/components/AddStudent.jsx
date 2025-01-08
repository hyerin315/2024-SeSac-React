import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // PropTypes 임포트

const AddStudent = ({ fetchStudents }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudent = { name, score: parseInt(score) };

    try {
      const response = await axios.post('http://localhost:8080/api/students/add', newStudent);
      console.log('Student added successfully:', response.data);
      setName('');
      setScore('');
      alert(`${newStudent.name} :  ${newStudent.score} 점수 등록 완료!`);
      fetchStudents(); // 학생 추가 후 목록 다시 조회
    } catch (error) {
      console.error('There was an error adding the student!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>학생 점수 추가하기</h2>
      <div>
        <label>학생명:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>점수:</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
      </div>
      <button type="submit">학생 점수 추가</button>
    </form>
  );
};

// PropTypes 정의
AddStudent.propTypes = {
  fetchStudents: PropTypes.func.isRequired, // fetchStudents는 필수 함수
};

export default AddStudent;
