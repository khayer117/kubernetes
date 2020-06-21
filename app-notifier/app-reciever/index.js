var amqpUrl = 'amqp://hxojonoh:deWjEiFHYQvBVr9LnEUXxZ6uUa8UBdFK@termite.rmq.cloudamqp.com/hxojonoh';
var queue = 'notifier-1';

// Consumer
var open = require('amqplib').connect(amqpUrl);
open.then(function(conn) {
return conn.createChannel();
}).then(function(ch) {
    return ch.assertQueue(queue).then(function(ok) {
        console.log("Listening queue: %s",queue);
        return ch.consume(queue, function(msg) {
            if (msg !== null) {
            console.log(msg.content.toString());
            ch.ack(msg);
            }
        });
    });
}).catch(console.warn);