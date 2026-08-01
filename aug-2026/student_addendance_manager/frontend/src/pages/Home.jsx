import { useEffect, useState } from "react";
import { useStudents } from "../hooks/useStudents";

const Home = () => {

  const [data, setData] = useState([]);
  const { getAllStudentsDetails } = useStudents();

  useEffect(() => {
    const fetchStudents = async () => {
      const students = await getAllStudentsDetails();
      console.log(students.data)
      setData(students.data);
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <table border="1" cellPadding="10" cellSpacing="0">
  <thead>
    <tr>
      <th>Name</th>
      <th>Roll</th>
      <th>Class</th>
      <th>Section</th>
    </tr>
  </thead>
  <tbody>
    {data.map((student) => (
      <tr key={student.id}>
        <td>{student.name}</td>
        <td>{student.roll}</td>
        <td>{student.student_class}</td>
        <td>{student.section}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
};


//   console.log("Home rendered");

//   const [data, setData] = useState([]);
//   const { getAllStudentsDetails } = useStudents();

//   useEffect(() => {
//     console.log("useEffect");

//     const fetchStudents = async () => {
//       console.log("fetchStudents");
//       const students = await getAllStudentsDetails();
//       console.log(students);
//       setData(students);
//     };

//     fetchStudents();
//   }, []);

//   return <div>Home</div>;

export default Home;