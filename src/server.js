require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const mysql = require('mysql');
const app = express();

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME || 'localhost';

configViewEngine(app);

// Khai báo router
app.use('/', webRouter);

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kiemtra"
});

con.connect(function(err) {
  if (err) throw err;

  // Truy vấn SELECT
  con.query("SELECT * FROM nhanvien", function(err, result, fields) {
    if (err) throw err;
    console.log(result);

    // Truy vấn DELETE sau khi SELECT hoàn thành
    const sqlDelete = "DELETE FROM nhanvien WHERE noi_sinh = 'HCM'";
    con.query(sqlDelete, function(err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);

      // Truy vấn UPDATE sau khi DELETE hoàn thành
      const sqlUpdate = "UPDATE nhanvien SET PHAI = 'NAM' WHERE PHAI = 'NU'";
      con.query(sqlUpdate, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");

        // Bắt đầu lắng nghe sau khi tất cả truy vấn đã hoàn thành
        app.listen(port, hostname, () => {
          console.log(`Server đang chạy tại http://${hostname}:${port}`);
        });
      });
    });
  });
});
