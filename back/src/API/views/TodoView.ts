class ToDoView {
    id: string
    Name: string
    Date: Date
    Done: boolean

    constructor(props: ToDoView) {
        this.id = props.id;
        this.Name = props.Name;
        this.Date = props.Date;
        this.Done = props.Done;
    }
}

export default ToDoView;