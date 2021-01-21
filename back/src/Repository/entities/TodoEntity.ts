import { Column, Entity, PrimaryColumn } from "typeorm";
import TodoView from '../../API/views/TodoView';
import { v4 as uuidv4 } from 'uuid';

type TodoEntityKeysWithoutId = Exclude<TodoEntity, 'id'>;
type TodoEntityWithoutId = Pick<TodoEntityKeysWithoutId, 'id'>;

@Entity("Todo")
class TodoEntity {

    @PrimaryColumn()
    id:string

    @Column()
    Name:string;

    @Column()
    Date:Date;

    @Column()
    Done:boolean;

    constructor(props: TodoEntityWithoutId){
        Object.assign(this, props);
    }
}

export default TodoEntity;