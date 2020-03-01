/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const bodyParser = require('body-parser');
const readline = require('readline');
const fs = require('fs');
const jwt = require('jsonwebtoken')
const cors = require('cors')

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(401);
  }
}
// const xml = require('xml');
// const path = require('path');

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',

  // chainWebpack: config => {
  //   config.resolve.alias
  //       .set('@', path.resolve(__dirname, '/src'));
  // },
  devServer: {
    // proxy: {
    //     '/api*': {
    //         // Forward frontend dev server request for /api to django dev server
    //         // target: 'http://localhost:8000/',
    //     }
    // },

    before(app) {
      app.use(cors())
      app.use(bodyParser.urlencoded());
      app.use(bodyParser.json());

      // fetch .mzxml
      app.post('/sheet-music/demo', (request, response) => {
        let content = '';
        const reader = readline.createInterface({
          input: fs.createReadStream(`${__dirname}/mock/MozartTrio.musicxml`),
        });
        reader.on('line', (line) => {
          content += `${line}`;
        });

        reader.on('close', () => {
          response.set('Content-Type', 'text/xml');
          // response.type('application/xml');
          response.send(content);
        });
      });

      // app.get('/', (req, res) => {
      //   res.json({
      //     message: 'Welcome to the API.'
      //   })
      // })

      app.get('/transcription', verifyToken, (req, res) => {
        jwt.verify(req.token, 'the_secret_key', err => {
          if (err) {
            res.sendStatus(401)
          }
        })
      });

      app.post('/register', (req, res) => {
        if (req.body) {
          const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            // In a production app, you'll want to encrypt the password
          }
          const data = JSON.stringify(user, null, 2)

          var dbUserEmail = require('./db/user.json').email
          var errorsToSend = []

          if (dbUserEmail === user.email) {
            errorsToSend.push('An account with this email already exists.')
          }
          if (user.password.length < 5) {
            errorsToSend.push('Password too short.')
          }
          if (errorsToSend.length > 0) {
            res.status(400).json({
              errors: errorsToSend
            })
          } else {
            fs.writeFile('./db/user.json', data, err => {
              if (err) {
                console.log(err + data)
              } else {
                const token = jwt.sign({
                  user
                }, 'the_secret_key')
                // In a production app, you'll want the secret key to be an environment variable
                res.json({
                  token,
                  email: user.email,
                  name: user.name
                })
              }
            })
          }
        } else {
          res.sendStatus(400)
        }
      })

      app.post('/login', (req, res) => {
        const userDB = fs.readFileSync('./db/user.json')
        const userInfo = JSON.parse(userDB)
        if (
          req.body &&
          req.body.email === userInfo.email &&
          req.body.password === userInfo.password
        ) {
          const token = jwt.sign({
            userInfo
          }, 'the_secret_key');
          // In a production app, you'll want the secret key to be an environment variable
          res.json({
            token,
            email: userInfo.email,
            name: userInfo.name
          });
          console.log('success');
        } else {
          res.status(401).json({
            error: 'Invalid login. Please try again.'
          });
          console.log('failed');
        }
      })
    }
  }
}
