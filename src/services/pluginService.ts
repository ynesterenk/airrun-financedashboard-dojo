import { PluginConfig } from '../plugins/types';
import { crossAssetMonitorConfig } from '../plugins/CrossAssetMonitor';

// Import other plugin configs here

const activePlugins: PluginConfig[] = [
  crossAssetMonitorConfig,
  // Add other active plugins here
];

export const getActivePlugins = (): PluginConfig[] => {
  return activePlugins;
};

export const getPluginByName = (name: string): PluginConfig | undefined => {
  return activePlugins.find(plugin => plugin.name === name);
};