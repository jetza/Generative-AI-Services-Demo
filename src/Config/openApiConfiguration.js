import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-iw4ja26Oph0uy3PIFUNr56hK",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
export const openai = new OpenAIApi(configuration);