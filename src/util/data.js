const multer = require("multer");
const fs = require("fs");

// Upload files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Tạo đường dẫn đầy đủ cho thư mục lưu trữ của submission đó
    var path = "uploads/";
    // Tạo thư mục nếu chưa tồn tại
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Hàm filter
const imageFilter = function (req, file, cb) {
  // Chỉ chấp nhận file hình ảnh
  if (
    !file.originalname.match(
      /\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF|heic|HEIC|webp|WEBP)$/
    )
  ) {
    return cb(new Error("Chỉ chấp nhận file hình ảnh"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: imageFilter, // sử dụng hàm filter để chỉ lấy file ảnh
});

module.exports = { upload };
