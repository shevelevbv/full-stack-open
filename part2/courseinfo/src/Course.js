const Header = ({ course }) => <h3>{course}</h3>;

const Total = ({ parts }) => {
  const total = parts.reduce((init, x) => init + x.exercises, 0);
  return <h4>total of {total} exercises</h4>;
};

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>;

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>;

const Course = ({course}) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>
);

export default Course;