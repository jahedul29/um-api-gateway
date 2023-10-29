import { createClient } from "redis";
import logger from "./logger";
import { log } from "console";
import config from "../config";

let redisClient = createClient({
    url: config.redis.url,
});

redisClient.on('error', (err) => logger.error(`Redis error ${JSON.stringify(err)}`));
redisClient.on('connect', () => logger.info("Redis connected"));

const connect = async (): Promise<void> => {
    await redisClient.connect();
};

export const RedisClient = {
    connect
}