import { SignIn } from '@/screen/signIn';
import { Karla_400Regular, Karla_700Bold, useFonts } from '@expo-google-fonts/karla';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold})

  return (
    <GluestackUIProvider config={config}>
      <StatusBar 
      barStyle="light-content" 
      backgroundColor="transparent"
      translucent
      />
      <SignIn/>
    </GluestackUIProvider>
  );
}

