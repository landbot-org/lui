import { Typography } from '../typography';

interface AutocompleteNoResultsProps {
  children?: React.ReactNode;
}

export const AutocompleteNoResults = ({ children }: AutocompleteNoResultsProps) => {
  if (children) return <>{children}</>;

  return (
    <Typography variant="text12" color="neutral.400" p={1}>
      NO RESULTS...
    </Typography>
  );
};
