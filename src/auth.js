function requireAuth(req, res, next) { if (req.session && req.session.admin) return next(); res.redirect('/login'); }
function guestOnly(req, res, next) { if (req.session && req.session.admin) return res.redirect('/dashboard'); next(); }
module.exports = { requireAuth, guestOnly };
