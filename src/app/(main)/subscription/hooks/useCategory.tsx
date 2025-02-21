import { Icon } from '@lobehub/ui';
import { Tag } from 'antd';
import { Bot, Brain, Cloudy, Info, Mic2, Settings2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import type { MenuProps } from '@/components/Menu';
import { SubscriptionTabs } from '@/store/global/initialState';

export const useCategory = () => {
  const { t } = useTranslation('subscription');


  const cateItems: MenuProps['items'] = useMemo(
    () =>
      [
        {
          icon: <Icon icon={Settings2} />,
          key: SubscriptionTabs.Pricing,
          label: (
            <Link href={'/subscription/pricing'} onClick={(e) => e.preventDefault()}>
              {t('tab.pricing')}
            </Link>
          ),
        },
        {
          icon: <Icon icon={Sparkles} />,
          key: SubscriptionTabs.Billing,
          label: (
            <Link href={'/subscription/billing'} onClick={(e) => e.preventDefault()}>
              {t('tab.billing')}
            </Link>
          ),
        },
        
      ].filter(Boolean) as MenuProps['items'],
    [t],
  );

  return cateItems;
};
