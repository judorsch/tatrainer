import EditableDndList, { Task } from "editable-dnd-list";
import { useState } from "react";

export function UserList({users, setUsers}: {users:Task[], setUsers:(t: Task[])=>void}):JSX.Element{
    function handleChange(newUsers: Task[]):void{
        console.log(newUsers);
    }
    return <EditableDndList items={users} onChange={handleChange}></EditableDndList>
}