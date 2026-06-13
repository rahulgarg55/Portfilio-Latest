import { Kafka } from 'kafkajs';
import logger from './logger.js';

const kafka = new Kafka({
  clientId: 'portfolio-app',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
});

const producer = kafka.producer();

export const connectProducer = async () => {
  try {
    await producer.connect();
    logger.info('Kafka Producer Connected');
  } catch (error) {
    logger.warn('Kafka connection failed (mock mode active): ' + error.message);
  }
};

export const trackEvent = async (topic, message) => {
  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  } catch (error) {
    logger.warn(`Failed to send Kafka event to ${topic}: ` + error.message);
  }
};

if (process.env.NODE_ENV !== 'test') {
  connectProducer();
}
