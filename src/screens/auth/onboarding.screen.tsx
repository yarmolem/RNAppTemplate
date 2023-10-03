import {styled} from 'nativewind';
import React from 'react';
import {View, Text} from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

const OnboardingScreen = () => {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledView className="p-4 rounded shadow-2xl bg-slate-300">
        <StyledText className="text-4xl font-MontserratExtraBold tracking-tight text-black">
          HEADER 1
        </StyledText>
        <StyledText className="text-3xl font-MontserratSemiBold tracking-tight text-black">
          HEADER 2
        </StyledText>
        <StyledText className="text-2xl font-MontserratSemiBold tracking-tight text-black">
          HEADER 3
        </StyledText>
        <StyledText className="text-xl font-MontserratSemiBold tracking-tight text-black">
          HEADER 4
        </StyledText>
        <StyledText className="text-xl font-RubikRegular text-black">
          PARAGRAPH
        </StyledText>
        <StyledText className="text-sm font-RubikMedium text-black">
          SMALL
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default OnboardingScreen;
