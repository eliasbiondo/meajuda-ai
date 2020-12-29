const express = require('express');
const routes = express.Router();
const Questions = require('./models/Questions');
const Replies = require('./models/Replies')

routes.get('/', (req, res) => {

    Questions.findAll({raw: true})

    Questions.findAll({
        raw: true,
        order: [
            ['id', 'DESC']
        ],
        limit:5
    }).then(questions => {
        res.render('index', {
            questions
        });
    })


})

routes.get('/perguntar', (req, res) => {
    return res.render('ask-a-question');
})

routes.post('/perguntar/salvarpergunta', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    if(title == '' || description == '') {
        res.redirect('/perguntar')
    } else {
        Questions.create({
            title,
            description
        }).then(() => {
            res.redirect('/')
        })
    }

})

routes.get('/pergunta', (req, res) => {
    const questionId = req.query["id"];

    Questions.findAll({
        raw: true,
        where: {
            id: questionId
        }
    }).then(question => {

        Replies.findAll({
            raw: true,
            where: {
                question_id: questionId
            }
        }).then(replies => {

            res.render("question", {
                questionId: question[0].id,
                questionTitle: question[0].title,
                questionDescription: question[0].description,
                replies
            })
        })
    })
})

routes.post('/enviar-resposta', (req, res) => {
    const {reply, questionId} = req.body

    if(reply == '' || questionId == '') {
        res.redirect(`/pergunta?id=${questionId}`)
    } else {
        Replies.create({
            question_id: questionId,
            reply
        }).then(() => {
            res.redirect(`/pergunta?id=${questionId}`)
        })
    }
})

module.exports = routes;