import { styled } from 'styled-components';

export const StepperWrapper = styled.div<{ $numberSteps: number }>`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(${({ $numberSteps }) => $numberSteps}, minmax(0, 1fr));
`;
