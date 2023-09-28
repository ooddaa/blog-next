import React, {useState} from 'react';
import cx from 'clsx';
import { Box, Text, Group, rem } from '@mantine/core';
import classes from './TableOfContents.module.css'


interface TableOfContentsProps {
  links: { label: string; order: number, new?: boolean }[];
  onClick: (link: string) => void;
}

export default function TableOfContents({ links, onClick }: TableOfContentsProps) {
  const [active, setActive] = useState(0);

  const items = links.map((item, index) => (
    <Box<'div'>
      component="div"
      onClick={(event) => {
        event.preventDefault()
        onClick(item.label)
        setActive(index)
      }}
      
      key={item.label}
      className={cx(classes.link, { [classes.linkActive]: active === index })}
      style={{ paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))` }}
    >
      { item.new ? renderNewLabel(item.label) : item.label }
    </Box>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
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
