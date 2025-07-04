import React from 'react';

function App() {

  const students = [
  { id: 1, name: "Aarav Sharma", age: 17, grade: "12th", email: "aarav.sharma@example.com" },
  { id: 2, name: "Neha Verma", age: 16, grade: "11th", email: "neha.verma@example.com" },
  { id: 3, name: "Rahul Mehta", age: 18, grade: "12th", email: "rahul.mehta@example.com" },
  { id: 4, name: "Sneha Patel", age: 15, grade: "10th", email: "sneha.patel@example.com" },
  { id: 5, name: "Kabir Rao", age: 17, grade: "12th", email: "kabir.rao@example.com" },
  { id: 6, name: "Meera Joshi", age: 16, grade: "11th", email: "meera.joshi@example.com" },
  { id: 7, name: "Rohan Kapoor", age: 15, grade: "10th", email: "rohan.kapoor@example.com" },
  { id: 8, name: "Anjali Desai", age: 17, grade: "12th", email: "anjali.desai@example.com" },
  { id: 9, name: "Vikram Iyer", age: 16, grade: "11th", email: "vikram.iyer@example.com" },
  { id: 10, name: "Priya Nair", age: 15, grade: "10th", email: "priya.nair@example.com" }
];

  return (
    <>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>age</th>
            <th>Grade</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student=>(
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
