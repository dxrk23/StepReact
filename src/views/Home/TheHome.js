import React from "react";
import { ReactDOM } from "react";
import Timer from "../../components/Timer/Timer";
import ToDoList from "../../components/ToDoList/ToDoList";

class TheHome extends React.Component {
    render(){
        return (
            <>
                <ToDoList />
            </>
        )
    }
}

export default TheHome