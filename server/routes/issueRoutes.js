const express = require("express");
const { issueComplain, getComplain, renderAdminDashboard, uploadNotice, renderUploadForm, showNotice } = require("../controllers/issueControllers");
const { isAuthenticated, restrictedToAdmin } = require("../middlewares/middlewares");
const { storage, multer } = require("../middlewares/multerConfig");
const router = express.Router();
const upload = multer({ storage: storage })


router.route('/issueComplain').post(isAuthenticated, issueComplain).get( getComplain);

router.route('/admin').get(isAuthenticated, restrictedToAdmin("admin"), renderAdminDashboard);

router.route('/uploadNotice').get(renderUploadForm).post(isAuthenticated, upload.single('image'), uploadNotice)

router.route('/getNotice').get(showNotice);





module.exports = router;