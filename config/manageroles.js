module.exports = {
    authPhy: function(req, res, next) {
      if (req.user.subjects.includes("physics")) {
        return next();
      }
    res.send('<h1>You dont hv access</h1>')
    },
    authMath: function(req, res, next) {
        if (req.user.subjects.includes("mathematics")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authEconomics: function(req, res, next) {
        if (req.user.subjects.includes("economics")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authAccountancy: function(req, res, next) {
        if (req.user.subjects.includes("accountancy")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authChemistry: function(req, res, next) {
        if (req.user.subjects.includes("chemistry")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authEnglish: function(req, res, next) {
        if (req.user.subjects.includes("english")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authGeography: function(req, res, next) {
        if (req.user.subjects.includes("geography")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authBiology: function(req, res, next) {
        if (req.user.subjects.includes("biology")) {
          return next();
        }
      res.send('<h1>You dont hv access</h1>')
      },
      authMentor: function(req, res, next) {
        if (req.user.role === "mentor") {
          return next();
        }
      res.send('<h1>Only Mentors hv access</h1>')
      },
      
};
