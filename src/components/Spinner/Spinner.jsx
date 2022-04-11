import { Bars } from 'react-loader-spinner';
import { SpinnerContainer } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <Bars color="#00BFFF" height={80} width={80} />
    </SpinnerContainer>
  );
};
