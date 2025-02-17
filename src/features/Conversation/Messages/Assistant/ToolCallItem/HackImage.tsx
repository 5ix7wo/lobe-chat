import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import PluginRender from '@/features/PluginsUI/Render';
import { useChatStore } from '@/store/chat';
import { chatPortalSelectors, chatSelectors } from '@/store/chat/selectors';
import { ChatMessage } from '@/types/message';

import { HackModelId } from '@/config/hackaigcModelConfig';

const Tool = memo<
  ChatMessage & {
    showPortal?: boolean;
  }
>(({ id, content, pluginState, plugin }) => {
  const [loading] = useChatStore((s) => [
    chatSelectors.isPluginApiInvoking(id)(s),
    chatPortalSelectors.isPluginUIOpen(id)(s),
  ]);

  return (
    <Flexbox gap={12} id={id} width={'100%'}>
      <PluginRender
          arguments={plugin?.arguments}
          content={content}
          id={id}
          identifier={HackModelId.UNCENSORED_TEXT2IMAGE}
          loading={loading}
          payload={plugin}
          pluginState={pluginState}
          type='builtin'
        />
    </Flexbox>
  );
});

export default Tool;
