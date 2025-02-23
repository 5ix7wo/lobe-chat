/* eslint-disable typescript-sort-keys/string-enum */
/* eslint-disable sort-keys-fix/sort-keys-fix , typescript-sort-keys/interface */

export enum HackVipLevel {
  HOBBY = 'hobby',
  PREMIUM = 'premium',
  ULTIMATE = 'ultimate',
}

// 添加 HackAIGCModel 枚举
export enum HackModelId {
  UNCENSORED_CHAT = 'hackaigc/uncensored-chat',
  NSFW_CHAT = 'hackaigc/nsfw-chat',
  UNCENSORED_TEXT2IMAGE = 'hackaigc/uncensored-text2image',
}

const hackModelConfig = {
  [HackModelId.UNCENSORED_CHAT]: {
    baseURL: process.env.HACKAIGC_UNCENSORED_BASE_URL,
    apiKey: process.env.HACKAIGC_UNCENSORED_API_KEY,
    realModel: process.env.HACKAIGC_UNCENSORED_MODEL,
  },
}

const hackModelEnv = hackModelConfig as Record<string, any>;


export const getHackRealModel = (model: string) => {
  if (!model.includes('hackaigc')) {
    return model;
  }
  return hackModelEnv[model].realModel as string;
}

export const getHackModelOptions = (model: string) => {
  const options = hackModelEnv[model];
  const { baseURL, apiKey } = options;
  return { baseURL, apiKey };
}

export const isHackText2ImageModel = (model: string | undefined) => {
  return model === HackModelId.UNCENSORED_TEXT2IMAGE;
}
