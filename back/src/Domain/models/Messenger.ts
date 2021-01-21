class Messenger{
    status:boolean;
    message:string;
    data:any

    constructor({status, message, data}:{status?:boolean, message?:string, data?:any}){
        this.status = status?status:false;
        this.message = message?message:"";
        this.data = data;
    }
}

export default Messenger;