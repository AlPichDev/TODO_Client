import { useState } from "react";
import { ITask } from "../../app/types";

interface ITaskProp extends ITask {
    onUpdate: (task: ITask) => void,
    onDelete: (id: string) => void,
}

export const Task = ({id, description, done, onUpdate, onDelete}: ITaskProp) => {
    let [isEdit, setIsEdit] = useState(false)
    let [editedDesr, setEditedDesr] = useState(description)

    let handleToggleDone = () => {
        onUpdate({id, description, done: !done})
    }

    let handleEdit = () => {
        setIsEdit(true)
    }
    
    let handleSave = () => {
        onUpdate({id, description: editedDesr, done})
        setIsEdit(false)
    }

    let handleDelete = () => {
        onDelete(id)
    }
    return (
        <li>
            <input type="checkbox" checked={done} onChange={handleToggleDone}/>
            {isEdit ? (
                <input type="text" value={editedDesr} onChange={e => setEditedDesr(e.target.value)}/>
            ) : <span>{description}</span>}
            <div>
                {isEdit ? (
                    <button onClick={handleSave}>Save</button>
                ): <button onClick={handleEdit}>Edit</button>}
                <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    )
};

