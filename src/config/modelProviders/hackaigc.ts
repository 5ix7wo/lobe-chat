import { ModelProviderCard } from '@/types/llm';


const HackAIGC: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 16_384,
      description:
        'HackAIGC Uncensored Desc',
      displayName: 'HackAIGC Uncensored',
      enabled: true,
      id: 'uncensored',
      maxOutput: 4096,
      pricing: {
        input: 1,
        output: 2,
      },
    },
    {
      contextWindowTokens: 16_384,
      description:
        'HackAIGC NSFW Desc',
      displayName: 'HackAIGC NSFW',
      enabled: true,
      id: 'nsfw',
      maxOutput: 4096,
      pricing: {
        input: 1,
        output: 2,
      },
    },
  ],
  checkModel: 'uncensored',
  description:
    'HackAIGC Desc',
  enabled: true,
  id: 'hackaigc',
  modelList: { showModelFetcher: true },
  name: 'HackAIGC',
  settings: {
    sdkType: 'hackaigc',
    showModelFetcher: true,
  },
  url: 'https://hackaigc.com'
};

export default HackAIGC;
