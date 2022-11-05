import { useParams } from "react-router-dom";

const Student = () => {
  const { studentName, studentNo } = useParams();
  return (
    <div>
      <p>Student</p>
      <div>
        <div>{`The Student Name is ${studentName}`}</div>
        {studentNo ? (
          <div>{`The Student Number is ${studentNo}`}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Student;
