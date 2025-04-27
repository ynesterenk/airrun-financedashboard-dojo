import { lazy } from 'react';
import { PluginConfig } from '../types';

const CrossAssetMonitor = lazy(() => import('./CrossAssetMonitor'));

export const crossAssetMonitorConfig: PluginConfig = {
  name: 'Cross Asset Monitor',
  component: CrossAssetMonitor,
  icon: 'ChartBar',
};

export default crossAssetMonitorConfig;