/* Get 'home' page */
module.exports.homelist = function(req, res){
    res.render('locations-list', {title: 'Home'});
};

/* Get 'info' page */
module.exports.locationInfo = function(req, res){
    res.render('locations-info', {title: 'Location info'});
};

/* Get 'review' page */
module.exports.addReview = function(req, res){
    res.render('locations-review-form', {title: 'Add review'});
};