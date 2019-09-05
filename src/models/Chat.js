const mongoose=require('mongoose');
const{ Schema }=mongoose;
const ChatSchema=new Schema;
new Schema({
    nick: string,
    msg: string,
    created_at:  {
        type: Date,
        default: Date.now
    }

});
module.exports=mongoose.model('Chat',ChatSchema);
