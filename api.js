const db = require('./db');
const models = db.Models;
const Status = db.Status;
const express = require('express');
const router = express.Router();
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createDiaryRecord',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newRecordParams = {
        Title : req.body.title,
        Content : req.body.content,
        CreactDate :  new Date(),
        LastEditDate : new Date(),
        Status : Status.Normal,
        Author : req.body.author?req.body.author:'ohyeah'
    };

    let newRecord = new models.Diary(newRecordParams);
    // 保存数据newRecord数据进mongoDB
    newRecord.save((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(newRecordParams);
        }
    });
});


router.get('/api/login/getDiaryRecord',(req,res) => {
    // 通过模型去查找数据库
    models.Diary.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;