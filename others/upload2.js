const multer = require('multer');
const storage = multer.memoryStorage(); // Lưu trữ tạm thời trong bộ nhớ

const upload = multer({ storage: storage });

module.exports = upload;
