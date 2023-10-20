import JavaScript from './JavaScript';
import PathParameters from './PathParameters';
import Classes from "./Classes";
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoItem from './todo/TodoItem';
function Assignment3() {
    return (
      <div style={{marginLeft: 5}}>
        <h1>Assignment 3</h1>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
      </div>
    );
  }
  export default Assignment3;