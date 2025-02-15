/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

const hackModelConfig = {
  "hackaigc/uncensored": {
    baseURL: process.env.HACKAIGC_UNCENSORED_BASE_URL,
    apiKey: process.env.HACKAIGC_UNCENSORED_API_KEY,
    model: process.env.HACKAIGC_UNCENSORED_MODEL,
  },
}

const hackModelEnv = hackModelConfig as Record<string, any>;


export const getHackRealModel = (model: string) => {
  if (!model.includes('hackaigc')) {
    return model;
  }
  return hackModelEnv[model].model as string;
}

export const getHackModelOptions = (model: string) => {
  const options = hackModelEnv[model];
  const { baseURL, apiKey } = options;
  return { baseURL, apiKey };
}
