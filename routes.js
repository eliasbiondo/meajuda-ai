const express = require('express');
const routes = express.Router();
const Questions = require('./models/Questions');

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
    return res.render('perguntar');
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

module.exports = routes;