import { BuiltinRender } from '@/types/tool';

import { DalleManifest } from './dalle';
import DalleRender from './dalle/Render';
import { HackModelId } from '@/config/hackaigcModelConfig';

export const BuiltinToolsRenders: Record<string, BuiltinRender> = {
  [DalleManifest.identifier]: DalleRender as BuiltinRender,
  [HackModelId.UNCENSORED_TEXT2IMAGE]: DalleRender as BuiltinRender,
};
