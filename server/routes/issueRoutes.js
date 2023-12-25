const express = require("express");
const { issueComplain, getComplain, renderAdminDashboard } = require("../controllers/issueControllers");
const { isAuthenticated, restrictedToAdmin } = require("../middlewares/middlewares");
const router = express.Router();


router.route('/issueComplain').post(isAuthenticated, issueComplain).get(getComplain);

router.route('/admin').get(isAuthenticated, restrictedToAdmin, renderAdminDashboard);





module.exports = router;