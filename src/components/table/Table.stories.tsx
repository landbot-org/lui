import { useState } from 'react';
import { styled } from 'styled-components';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Meta, StoryObj } from '@storybook/react';
import { Box } from '../box';
import { Button } from '../button/Button';
import { Icon } from '../icon';
import { Menu, Warning, WhatsApp } from '../icon/icons';
import { MenuButton } from '../menu/MenuButton';
import { Popover, PopoverContent, PopoverTrigger } from '../popover';
import { Typography } from '../typography';
import { Table } from './Table';
import { TableBody } from './Table.Body';
import { TableBodySkeleton } from './Table.BodySkeleton';
import { TableHeader } from './Table.Header';
import { TableHeaderCell } from './Table.HeaderCell';
import { TablePaginationFooter } from './Table.PaginationFooter';
import { TablePopoverCell } from './Table.PopoverCell';
import { TableRow } from './Table.Row';
import { TableTextCell } from './Table.TextCell';
import { useTablePageSelector } from './useTablePageSelector';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

const headers = [
  'Person',
  'Most interest in',
  'Age',
  'long long long long long long long long long long long long text',
];

const data = [
  [
    'Chris',
    'HTML tables',
    22,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  [
    'Dennis',
    'Web accessibility',
    45,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  [
    'Sarah',
    'JavaScript frameworks',
    29,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  ['Karen', 'Web performance', 36, 'Hello'],
  ['Chris', 'HTML tables', 22, 'welcome'],
  [
    'Dennis',
    'Web accessibility',
    45,
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  ],
  ['Sarah', 'JavaScript frameworks', 29, 'test'],
  ['Karen', 'Web performance', 36, 'bay'],
];

const sizes = [200, 200, 200, 200];

export const Interactive: Story = {
  render: function Render() {
    return (
      <>
        <Table>
          <TableHeader index>
            {headers.map((header, i) => {
              return (
                <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                  {header}
                </TableHeaderCell>
              );
            })}
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow index={i.toString()} key={i}>
                {row.map((cell, j) => {
                  if (row.length - 1 === j) {
                    return (
                      <TablePopoverCell flexGrow={1} size={sizes[j]} key={cell}>
                        {cell.toString()}
                      </TablePopoverCell>
                    );
                  }
                  return (
                    <TableTextCell key={cell} size={sizes[j]}>
                      {cell}
                    </TableTextCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePaginationFooter
          pageSizeOptions={{ onPageSizeChange: () => {}, options: [10, 20, 30], selectedSize: 10 }}
          currentPage={1}
          totalPages={100}
          onPageChange={() => {}}
        />
      </>
    );
  },
};

export const Loading: Story = {
  render: function Render() {
    return (
      <Table>
        <TableHeader index>
          {headers.map((header, i) => {
            return (
              <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                {header}
              </TableHeaderCell>
            );
          })}
        </TableHeader>
        <TableBodySkeleton rows={data.length} columns={headers.length} longCellsPositions={[3]} showIndex />
      </Table>
    );
  },
};

export const RowSelection: Story = {
  render: function Render() {
    const rowIds = Array.from({ length: data.length }, (_, index) => index);
    const { selection, allSelectionState, toggleSelection, toggleAllSelection } = useTablePageSelector(rowIds);

    return (
      <Table>
        <TableHeader index selectOptions={{ onToggleSelection: toggleAllSelection, selected: allSelectionState }}>
          {headers.map((header, i) => {
            return (
              <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                {header}
              </TableHeaderCell>
            );
          })}
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow
              index={i.toString()}
              key={i}
              selectOptions={{ onToggleSelection: toggleSelection, value: i, selected: selection.includes(i) }}
            >
              {row.map((cell, j) => {
                if (row.length - 1 === j) {
                  return (
                    <TablePopoverCell flexGrow={1} size={sizes[j]} key={cell}>
                      {cell.toString()}
                    </TablePopoverCell>
                  );
                }
                return (
                  <TableTextCell key={cell} size={sizes[j]}>
                    {cell}
                  </TableTextCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

const StyledSubscriptionTag = styled(Box).attrs({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  backgroundColor: 'neutral.100',
  radius: 2,
})`
  padding: 2px 4px;
`;

export const CustomPopoverCell: Story = {
  render: function Render() {
    const rowIds = [1, 2, 3];
    const channelsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { selection, allSelectionState, toggleSelection, toggleAllSelection } = useTablePageSelector(rowIds);

    return (
      <Table>
        <TableHeader index selectOptions={{ onToggleSelection: toggleAllSelection, selected: allSelectionState }}>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Age</TableHeaderCell>
          <TableHeaderCell size={300}>Channels</TableHeaderCell>
          <TableHeaderCell>Food</TableHeaderCell>
        </TableHeader>
        <TableBody>
          {rowIds.map((i) => (
            <TableRow
              index={i.toString()}
              key={i}
              selectOptions={{ onToggleSelection: toggleSelection, value: i, selected: selection.includes(i) }}
            >
              <TableTextCell>Name {i}</TableTextCell>
              <TableTextCell>Age {i}</TableTextCell>
              <TablePopoverCell
                size={300}
                popoverChildren={
                  <Box display="flex" flexWrap="wrap" gap={8} style={{ maxHeight: '100px', overflowY: 'auto' }}>
                    {channelsIds.map((channelId) => (
                      <Box key={channelId} style={{ width: 'fit-content', backgroundColor: 'red' }}>
                        <Icon icon={<Warning />} />
                        <Typography variant="text14">Channel {channelId}</Typography>
                      </Box>
                    ))}
                  </Box>
                }
              >
                <Box display="flex" alignItems="center" gap={8}>
                  {channelsIds.map((channelId) => (
                    <StyledSubscriptionTag key={channelId}>
                      <Icon icon={<WhatsApp />} />
                      <Typography variant="text14">Channel {channelId}</Typography>
                    </StyledSubscriptionTag>
                  ))}
                </Box>
              </TablePopoverCell>
              <TableTextCell>Ramen {i}</TableTextCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

const StyledMenuContainer = styled(Box)`
  min-width: 200px;
`;

const StyledMenuActions = styled(Button)`
  margin-left: auto;
`;

export const HeaderCellWithMenuActions: Story = {
  render: function Render() {
    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);

    const FirstMenuActions = (
      <Popover open={openFirst} setOpen={setOpenFirst} placement="bottom" hasCloseButton={false} hasArrow={false}>
        <PopoverTrigger>
          <StyledMenuActions
            variant="text"
            color="blue.main"
            startIcon={<Icon icon={<FontAwesomeIcon icon={faEllipsisV} />} />}
            aria-label="Bulk actions"
          />
        </PopoverTrigger>
        <PopoverContent>
          <Menu>
            <StyledMenuContainer>
              <MenuButton
                color="error.main"
                startIcon={<Icon icon={<FontAwesomeIcon icon={faTrash} />} />}
                onClick={() => {}}
              >
                Delete
              </MenuButton>
            </StyledMenuContainer>
          </Menu>
        </PopoverContent>
      </Popover>
    );

    const SecondMenuActions = (
      <Popover open={openSecond} setOpen={setOpenSecond} placement="bottom" hasCloseButton={false} hasArrow={false}>
        <PopoverTrigger>
          <StyledMenuActions
            variant="text"
            color="blue.main"
            startIcon={<Icon icon={<FontAwesomeIcon icon={faEllipsisV} />} />}
            aria-label="Bulk actions"
          />
        </PopoverTrigger>
        <PopoverContent>
          <Menu>
            <StyledMenuContainer>
              <MenuButton
                color="error.main"
                startIcon={<Icon icon={<FontAwesomeIcon icon={faTrash} />} />}
                onClick={() => {}}
              >
                Delete
              </MenuButton>
            </StyledMenuContainer>
          </Menu>
        </PopoverContent>
      </Popover>
    );

    return (
      <Table>
        <TableHeader index>
          <TableHeaderCell
            menuActions={FirstMenuActions}
            size={sizes[0]}
            flexGrow={headers.length - 1 === 0 ? 1 : undefined}
          >
            {headers[0]}
          </TableHeaderCell>
          {headers.slice(1, 3).map((header, i) => {
            return (
              <TableHeaderCell size={sizes[i]} flexGrow={headers.length - 1 === i ? 1 : undefined}>
                {header}
              </TableHeaderCell>
            );
          })}
          <TableHeaderCell
            menuActions={SecondMenuActions}
            size={sizes[3]}
            flexGrow={headers.length - 1 === 3 ? 1 : undefined}
          >
            {headers[3]}
          </TableHeaderCell>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow index={i.toString()} key={i}>
              {row.map((cell, j) => {
                if (row.length - 1 === j) {
                  return (
                    <TablePopoverCell flexGrow={1} size={sizes[j]} key={cell}>
                      {cell.toString()}
                    </TablePopoverCell>
                  );
                }
                return (
                  <TableTextCell key={cell} size={sizes[j]}>
                    {cell}
                  </TableTextCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
