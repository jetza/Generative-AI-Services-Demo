import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-IqMovZVWETQ9MS84c3gxwYKp",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
export const openai = new OpenAIApi(configuration);