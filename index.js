let encode = require('@prudent/encode');

exports.start = function (callback, params) {

    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {

        try {
            const input = process.stdin.read();
            if (input !== null) {
                let object = JSON.parse(input);
                if ((object.name === 'parameters') && (object.content === 'query')) {
                    console.log(encode.protocol('parameters', params));
                } else if (object.name === 'parameters') {
                    callback(object.content);
                }
            } else if (params !== undefined) {
                callback(params);
            } else if (process.argv[2] !== null) {
                callback(process.argv[2]);
            } 
        } catch (e) {
            console.log(encode.protocol('error', e.message));
        }

    });
    
};