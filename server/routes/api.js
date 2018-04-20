const express = require('express');
const router = express.Router();
var sha1 = require('sha1');
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const mysql = require('mysql');


var connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'iveterinar'
});
/*
var connection = mysql.createPool({
    host: 'server9.contrateam.com:2083',
    user: 'zoranjer_koja',
    password: 'vrbovac12345',
    database: 'zoranjer_alek_kojic'
})
*/
/*
var connection = mysql.createPool({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9231131',
    password: 'p9WBlft2KD',
    database: 'sql9231131'
})*/

console.log(connection);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


router.post('/signUp', function (req, res, next) {
    console.log("pozvano!");
    connection.getConnection(function (err, conn) {
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        var email = req.body.email;
        var user = req.body.username;
        var pass = sha1(req.body.password);
        var confirmPassword = sha1(req.body.confirmPassword);

        test = {};
        var podaci = {
            "email": email,
            "username": user,
            "password": pass,
            "confirmPassword": confirmPassword
        };
        console.log(podaci);


        conn.query("insert into users SET ?", podaci, function (err, rows) {
            conn.release();
            if (!err) {
                if (!err) {
                    test.id = rows.insertId;
                    test.success = true;
                }
                else {
                    test.success = false;
                }
                res.json(test);
                console.log("Usao sam u DB!!!!");
            }
            else {
                res.json({ "code": 100, "status": "Error in connection database" });
                console.log(err);
            }
        });
        conn.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
});

router.post('/login', (req, res, next) => {
    try {
        var reqObj = req.body;
        console.log("evo me ovde radim sigurno");
        connection.getConnection(function (err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                res.json({ "code": 100, "status": "Error in connection database" });
                return next(err);
            }
            else {
                console.log(reqObj.username, sha1(reqObj.password));
                conn.query("SELECT * FROM users WHERE username=? AND password=?",
                    [reqObj.username, sha1(reqObj.password)],
                    function (err, rows, fields) {
                        conn.release();
                        console.log("zapoceo query");
                        if (err) {
                            console.error("SQL error:", err);
                            res.json({ "code": 100, "status": "Error in connection database" });
                            return next(err);
                        }
                        console.log(rows);
                        if (rows.length >= 1) {
                            console.log('usao sam ovdee u if');
                            //req.session.user = rows[0];
                            //req.session.auth = true;

                            res.send({ login: true, notVerified: false, user: '1' });
                        }
                        else {
                            console.log('usao sam ovdee u else');
                            res.send({ login: false });
                        }
                    }
                );
            }
        });
    }
    catch (ex) {
        console.error("Internal error: " + ex);
        return next(ex);
    }
});

router.get('/getUsers', function (req, res, next) {
    console.log('testtt!');
  connection.getConnection(function (err, conn) {
      if (err) {
          res.json({ "code": 100, "status": "Error in connection database" });
          return;
      }
      conn.query("SELECT * from users", function (err, rows) {
          conn.release();
          if (!err) {

              res.json(rows);
          }
          else {
              res.json({ "code": 100, "status": "Error in connection database" });
          }
      });


      conn.on('error', function (err) {
          res.json({ "code": 100, "status": "Error in connection database" });
          return;
      });
  });

});

router.get('/activeUser/:id', function (req, res, next) {
    console.log("pozvano za edit!!!");
    connection.getConnection(function (err, conn) {
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        test = {};
        var id = req.params.id;

        conn.query("UPDATE users SET active = 1 where id = ?", [id], function (err, rows) {
            conn.release();
            if (!err) {
                if (!err) {
                    test.success = true;
                }
                else {
                    test.success = false;
                }
                res.json(test);
            }
            else {
                res.json({ "code": 100, "status": "Error in connection database" });
                console.log(err);
            }
        });
        conn.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
});

router.get('/deactiveUser/:id', function (req, res, next) {
    console.log("pozvano za edit!!!");
    connection.getConnection(function (err, conn) {
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        test = {};
        var id = req.params.id;

        conn.query("UPDATE users SET active = 0 where id = ?", [id], function (err, rows) {
            conn.release();
            if (!err) {
                if (!err) {
                    test.success = true;
                }
                else {
                    test.success = false;
                }
                res.json(test);
                console.log("Usao sam u DB!!!!");
            }
            else {
                res.json({ "code": 100, "status": "Error in connection database" });
                console.log(err);
            }
        });
        conn.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
});

module.exports = router;