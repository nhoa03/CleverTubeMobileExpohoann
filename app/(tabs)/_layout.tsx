import React from 'react';

import TabNavigator from '@/common/navigation/TabNavigator';
import { ReduxProvider } from '@/common/redux/ReduxProvider';

export default function TabLayout() {

  return (
    <ReduxProvider>
      <TabNavigator/>
    </ReduxProvider>
  );
}
