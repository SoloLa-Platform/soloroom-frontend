/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const bodyParser = require('body-parser');
const readline = require('readline');
const fs = require('fs');


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
          app.use(bodyParser.urlencoded());
          app.use(bodyParser.json());
          // Fake user data
          const FAKE_USER = {
            email: 'superguitarhero@gmail.com',
            password: 'Abc12345678',
            name: 'guitarHero',
          };

          app.post('/register', (request, response) => {
            // request
            const body = request.body;
            if (body.email === FAKE_USER.email
              && body.password === FAKE_USER.password) {
              response.status(409);
              response.send({result: 'User exist'});
            } else {
              response.status(200);
              response.send({id: `${Math.floor(Math.random()*1000)}`});
            }
          });

          app.post('/login', (request, response) => {
            const body = request.body;
            if (body.email === FAKE_USER.email
                && body.password === FAKE_USER.password) {
              response.status(200);
              response.send({result: 'successfully login'});
            } else {
              response.status(401);
              response.send({result: 'fail to authenticate'});
            }
          });


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
        }        
    }
}
