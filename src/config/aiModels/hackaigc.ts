import { AIChatModelCard } from '@/types/aiModel';

const hackChatModels: AIChatModelCard[] = [
  {
    contextWindowTokens: 8192,
    description:
      'HackAIGC Uncensored Desc',
    displayName: 'HackAIGC Uncensored',
    enabled: true,
    id: 'hackaigc/uncensored',
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'HackAIGC NSFW Desc',
    displayName: 'HackAIGC NSFW',
    enabled: true,
    id: 'hackaigc/nsfw',
    type: 'chat',
  },
  
];

export const allModels = [...hackChatModels];

export default allModels;
