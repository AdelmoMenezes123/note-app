const indexCtrl = {};


indexCtrl.renderIndex = (req, res) => {
    return res.render('index')
}

indexCtrl.renderAbout = (req, res) => {
    return res.render('about')
}


module.exports = indexCtrl;