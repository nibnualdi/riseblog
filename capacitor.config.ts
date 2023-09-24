import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.riseblog.app',
  appName: 'riseblog',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
