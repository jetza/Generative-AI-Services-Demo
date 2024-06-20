import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-5LS3JaoVfuvDJjb6fh42Xndo",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
export const openai = new OpenAIApi(configuration);