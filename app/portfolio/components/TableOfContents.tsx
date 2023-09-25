/**@jsxImportSource @emotion/react */
import React, {useState} from 'react';
import { createStyles, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    lineHeight: 1.2,
    fontSize: theme.fontSizes.sm,
    padding: theme.spacing.xs,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      cursor: 'pointer',
    },
  },

  linkActive: {
    fontWeight: 500,
    borderLeftColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 6 : 7],
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
    },
  },
}));

interface TableOfContentsProps {
  links: { label: string; order: number, new?: boolean }[];
  onClick: (link: string) => void;
}

export default function TableOfContents({ links, onClick }: TableOfContentsProps) {
  const [active, setActive] = useState("Caves")
  const { classes, cx } = useStyles();
  const items = links.map((item) => { 
    return (
    <div 
      className={cx(classes.link, { [classes.linkActive]: active === item.label })}
      key={item.label}
      onClick={() => {
        onClick(item.label)
        setActive(item.label)
      }}
      css={{paddingLeft: `${item.order * 1}rem`}}
    >
      { item.new ? renderNewLabel(item.label) : item.label }
    </div>
  )});

  return (
    <div>
      <Group mb="md">
        <Text>Table of contents</Text>
      </Group>
      {items}
    </div>
  );
}

function renderNewLabel(label: string): JSX.Element {
  return (
    <div className='flex flex-row justify-between items-center'>
      <span>{label}</span> 
      <span className="text-sm text-red-500 rounded-xl px-2">new</span>
    </div>
  )
}
