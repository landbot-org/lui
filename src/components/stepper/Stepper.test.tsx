import { render, screen } from '../../test-utils';
import { Stepper } from './Stepper';
import { StepperProps } from './Stepper.types';

const renderComponent = (props: Partial<StepperProps> = {}) => render(<Stepper steps={[]} {...props} />);

describe('Stepper', () => {
  it('should render button for all steps', () => {
    renderComponent({ steps: [{ label: 'First step' }, { label: 'Second step' }] });

    expect(screen.getByRole('button', { name: 'First step' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Second step' })).toBeVisible();
  });
  it('should render button disabled when step is disabled', () => {
    renderComponent({ steps: [{ label: 'First step' }, { label: 'Second step', variant: 'disabled' }] });

    expect(screen.getByRole('button', { name: 'Second step' })).toBeDisabled();
  });
  it('should call onClickStep with step number clicked when click in button', async () => {
    const spyOnClickStep = jest.fn();
    const { user } = renderComponent({
      steps: [{ label: 'First step' }, { label: 'Second step' }],
      onClickStep: spyOnClickStep,
    });

    await user.click(screen.getByRole('button', { name: 'Second step' }));

    expect(spyOnClickStep).toHaveBeenCalledWith(1);
  });
  it('should render content for active step', () => {
    renderComponent({
      activeStep: 1,
      steps: [
        { label: 'First step', content: 'First step content' },
        { label: 'Second step', content: 'Second step content' },
      ],
    });

    expect(screen.getByText('Second step content')).toBeVisible();
  });
});
