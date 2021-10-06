const {Kafka} =require('kafkajs')
const { runInContext } = require('vm')

run().then(() => console.log("Done"),err => console.log(err));

async function run (){
    const kafka = new Kafka({brokers : ["localhost:9092"]});
    
    const producer = kafka.producer();
    await producer.connect();

    await producer.send({
        topic: "mymessage-service",
        messages:[
            {value: "welcome to kafka producer"}
        ]
    });
}
