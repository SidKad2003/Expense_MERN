
// var request = require('request');   // install request module by - 'npm install request'
// var querystring = require('querystring')

// const form_data = {
//     // 'urls': 'https://goo.gl/ICoiHc'
//     'urls': 'https://i.stack.imgur.com/WewLf.png'
// }

// const options = {
//     url : "https://app.nanonets.com/api/v2/OCR/Model/5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3/LabelUrls/?async=false",
//     body: querystring.stringify(form_data),
//     headers: {
//         'Authorization' : 'Basic ' + Buffer.from('698975ac-a4c0-11ed-8eea-2e320c0c3d43' + ':').toString('base64'),
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
// }
// request.post(options, function(err, httpResponse, body) {
//     console.log(body);
// });



var request = require('request');   // install request module by - 'npm install request'
var fs = require('fs')

const form_data = {
  file: fs.createReadStream('test.jpg'),
}

const options = {
    url : "https://app.nanonets.com/api/v2/OCR/Model/5a29a63c-ac53-4e7e-bb33-c6f7b4f91ac3/LabelFile/?async=false",
    formData: form_data,
    headers: {
        'Authorization' : 'Basic ' + Buffer.from('698975ac-a4c0-11ed-8eea-2e320c0c3d43' + ':').toString('base64')
    }
}
request.post(options, function(err, httpResponse, body) {
    console.log(body);
});
