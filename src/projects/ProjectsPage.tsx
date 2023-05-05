import { MOCK_PROJECTS } from './MockProjects';

function Greeter(props) {
  props.first = 'Dave';
    return <h1>Hello, {props.first}</h1>;
  }
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Greeter first="Joe" />
  );

function ProjectsPage() {
 return (
 <>    
 <h1>Projects</h1>
  <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
   </>
  );
}

export default ProjectsPage;