import {ToastProvider} from 'react-native-toast-notifications';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import RootRouter from './routers/root-router';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <ToastProvider placement="top">
            <RootRouter />
          </ToastProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
}

export default App;
