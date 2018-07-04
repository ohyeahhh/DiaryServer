// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://127.0.0.1:27017/diary',{ useNewUrlParser: true }); // 地址跟第一步的地址对应。

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', console.error.bind(console, 'connection error:'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const DiarySchema = mongoose.Schema({
    Title : String,
    Content : String,
    CreactDate : Date,
    LastEditDate : Date,
    Status : String,
    Author : String
});

/************** 定义模型Model **************/
const Models = {
    Diary : mongoose.model('Diary',DiarySchema)
}
const Status = {
    Normal: '01',
    Deleted: '02'
};
module.exports = {
    Models,
    Status
};


