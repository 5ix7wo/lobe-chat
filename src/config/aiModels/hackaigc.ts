import { AIChatModelCard } from '@/types/aiModel';
import { HackModelId } from '@/config/hackaigcModelConfig';

const hackChatModels: AIChatModelCard[] = [
  {
    contextWindowTokens: 8192,
    description:
      'HackAIGC Uncensored Chat Desc',
    displayName: 'Uncensored Chat',
    enabled: true,
    id: HackModelId.UNCENSORED_CHAT,
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'HackAIGC NSFW Chat Desc',
    displayName: 'NSFW Chat',
    enabled: true,
    id: HackModelId.NSFW_CHAT,
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    description:
      'HackAIGC Uncensored Text-to-Image Desc',
    displayName: 'Uncensored Text-to-Image',
    enabled: true,
    id: HackModelId.UNCENSORED_TEXT2IMAGE,
    type: 'chat',
  },
  
];

export const allModels = [...hackChatModels];

export default allModels;
