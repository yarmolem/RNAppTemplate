import {View} from 'react-native';
import {Button} from '@/components/ui/button';

const OnboardingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-2">
      <View className="flex-row gap-x-2">
        <Button size="md" text="Button" variant="solid-primary" />
        <Button size="md" text="Button" variant="outline-primary" />
        <Button size="md" text="Button" variant="ghost-primary" />
      </View>
    </View>
  );
};

export default OnboardingScreen;
