const userDashboard = (req, res, next) => {
  const { is_admin: isAdmin } = req.cookies;

  if (isAdmin) {
    next();
  } else {
    res.redirect(301, '/login');
  }
};

module.exports = userDashboard;
