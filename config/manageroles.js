module.exports = {
    authPhy: function(req, res, next) {
      if (req.user.subjects.includes("physics")) {
        return next();
      }
    res.redirect('/accessdenied')
    },
    authMath: function(req, res, next) {
        if (req.user.subjects.includes("mathematics")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authEconomics: function(req, res, next) {
        if (req.user.subjects.includes("economics")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authAccountancy: function(req, res, next) {
        if (req.user.subjects.includes("accountancy")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authChemistry: function(req, res, next) {
        if (req.user.subjects.includes("chemistry")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authEnglish: function(req, res, next) {
        if (req.user.subjects.includes("english")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authGeography: function(req, res, next) {
        if (req.user.subjects.includes("geography")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authBiology: function(req, res, next) {
        if (req.user.subjects.includes("biology")) {
          return next();
        }
      res.redirect('/accessdenied')
      },
      authMentor: function(req, res, next) {
        if (req.user.role === "mentor") {
          return next();
        }
        res.redirect('/accessdenied')
      },
      
};
