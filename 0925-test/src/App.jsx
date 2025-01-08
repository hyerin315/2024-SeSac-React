import { useEffect, useState } from 'react';
import axios from 'axios';
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  // 학생 목록 조회
  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/students/all');
      setStudents(response.data);
    } catch (error) {
      console.error('There was an error fetching the students!', error);
    }
  };

  // 컴포넌트가 마운트될 때 학생 목록 조회
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>학생 점수 관리 시스템</h1>
      <AddStudent fetchStudents={fetchStudents} /> {/* fetchStudents prop 전달 */}
      <StudentList students={students} /> {/* 학생 목록을 props로 전달 */}
    </div>
  );
};

export default App;
