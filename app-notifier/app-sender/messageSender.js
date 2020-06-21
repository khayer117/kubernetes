var amqpUrl = 'amqp://hxojonoh:deWjEiFHYQvBVr9LnEUXxZ6uUa8UBdFK@termite.rmq.cloudamqp.com/hxojonoh';
var queue = 'notifier-1';

var exports=module.exports={};

//  used ConfirmChannel bcoz it return act promize
exports.send = function(msg) {
    return new Promise(function(resolve,reject){
        var open = require('amqplib').connect(amqpUrl);
        open.then(function(conn) {
            conn.createConfirmChannel().then(function(ch) {
                ch.sendToQueue(queue, Buffer.from(msg), {},
                    function(err, ok) {
                        if (err !== null)
                            reject(err);
                        else{
                            console.info("Enqueue: %s",queue);
                            resolve(true);
                        }
                        conn.close();
                });
            });
        }).catch(err => {
            console.log('Error: %s' ,err);
            reject(err);
        });
    });
}
