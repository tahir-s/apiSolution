'use strict';
module.exports = function(app) {
    // var Urls = require('../models/apiUrlModel');
    var apiUrls = require('../controllers/apiUrlController');

    app.route('/urls')
        .get(apiUrls.list_all_urls)
        .post(apiUrls.create_a_url);

    app.route('/urls/:urlId')
        .get(apiUrls.read_a_url)
        .put(apiUrls.update_a_url)
        .delete(apiUrls.delete_a_url);

    app.route('/*')
        .get(apiUrls.read_by_url);

    // app.route('/*')
    //     .get(function (req, res) {
    //         Urls.find({ url: req.url }, function (err, pageData) {
    //             console.log(pageData);
    //             // res.render('page-template', {
    //             //     pageContent: pageData.content,
    //             //     pageTitle: pageData.title
    //             // });
    //         });
    //     });
};