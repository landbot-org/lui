import { render, screen, waitFor } from '../../test-utils';
import { RichTextEditor } from './RichTextEditor';

describe('RichTextEditor', () => {
  it('should render textbox', () => {
    render(<RichTextEditor />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('can be not editable with the prop "readOnly"', () => {
    render(<RichTextEditor readOnly />);

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-readonly', 'true');
  });

  it('should display value', () => {
    render(<RichTextEditor initialValue="Value" inputFormat="text" />);

    expect(screen.getByText('Value')).toBeVisible();
  });

  it('should render placeholder', () => {
    render(<RichTextEditor placeholder="Placeholder" />);

    expect(screen.getByText('Placeholder')).toBeVisible();
  });

  it('should render label', () => {
    render(<RichTextEditor label="Label" />);

    expect(screen.getByLabelText('Label')).toBeVisible();
  });

  it('should render description', () => {
    render(<RichTextEditor description="Description" />);

    expect(screen.getByLabelText('Description')).toBeVisible();
  });

  it('should render label and description', () => {
    render(<RichTextEditor label="Label" description="Description" />);

    expect(screen.getByLabelText('LabelDescription')).toBeVisible();
  });

  it('should render helper text', () => {
    render(<RichTextEditor helperText="Helper text" />);

    expect(screen.getByText('Helper text')).toBeVisible();
  });

  it('should render helper text on error state', () => {
    render(<RichTextEditor helperText="Helper text" error />);

    expect(screen.getByText('Helper text')).toBeVisible();
  });

  it('should display value when input format is "json"', () => {
    const initialValue =
      '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Heading","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';
    render(<RichTextEditor initialValue={initialValue} inputFormat="json" />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  it('should display value when input format is "html"', () => {
    const initialValue = '<h1>Heading</h1>';
    render(<RichTextEditor initialValue={initialValue} inputFormat="html" />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  it('should display value when input format is "markdown"', () => {
    const initialValue = '# Heading';
    render(<RichTextEditor initialValue={initialValue} inputFormat="markdown" />);

    expect(screen.getByRole('heading', { name: 'Heading' })).toBeVisible();
  });

  it('should display value when input format is "text"', () => {
    const initialValue = 'Text';
    render(<RichTextEditor initialValue={initialValue} inputFormat="text" />);

    expect(screen.getByText('Text')).toBeVisible();
  });

  it('should call onChange when value changes', async () => {
    const onChange = jest.fn();
    const label = 'Label';
    const { user } = render(<RichTextEditor label={label} onChange={onChange} />);

    await user.click(screen.getByLabelText(label));
    await user.click(screen.getByRole('button', { name: 'heading' }));

    expect(onChange).toHaveBeenCalledWith({
      htmlString: '<h1 class="editor-heading-h1"><br></h1>',
      jsonString: expect.any(String),
      markdownString: '# ',
      text: '',
    });
  });

  it('should limit the number of characters', async () => {
    const maxLength = 10;
    const { user } = render(<RichTextEditor maxLength={maxLength} />);

    await user.type(screen.getByRole('textbox'), '12345678901');

    waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveTextContent('1234567890');
    });
  });
});
