import React from "react";
import { Text, createStyles } from "@mantine/core";
import { Prism } from "@mantine/prism";

import type { Post } from "./types.d.ts";

const log = (...args: any) => console.log(...args);

function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function resolveMonth(num: number, config: { short?: boolean } = {}): string {
  const mapping: {[key:number]: string} = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  if (config.short) return mapping[num].slice(0, 3);
  return mapping[num];
}

interface Props {
  [key: string]: any
}

interface WrapperComponent {
  children: React.ReactNode,
  // children: string | string[] | React.ReactNode | React.ReactNode[],
  props?: Props
}

interface Range {
  from: string,
  to: string,
}

interface Gradient extends Range {
  deg: number,
}
interface TailwindClasses {
  tailwindClasses?: string,
}

interface Span {
  variant: string,
  color: string,
  weight: number,
  className: string,
  style: { verticalAlign: string, display: string },
  gradient: Gradient  
  size: string
}

interface JS extends TailwindClasses {
  colorScheme?: string
  noCopy?: boolean
  classNames?: string
}

interface PB {
  pb: number
}


/* https://mantine.dev/core/text/ */
function Span({ children, ...props }: Partial<WrapperComponent> & Partial<Span>) {
  return (
    <Text component="span" {...props}>
      {children}
    </Text>
  );
}

function Bold({ children, ...props }: Partial<WrapperComponent>) {
  return (
    <Span weight={700} {...props}>
      {children}
    </Span>
  );
}

function Super({ children, ...props }: Partial<WrapperComponent>) {
  return (
    <Span
      className="super-scripted"
      style={{ verticalAlign: "super", display: "inline-block" }}
    >
      {children}
    </Span>
  );
}

function get_weight(props: Props | undefined): number {
  if (props && "weight" in props) return props.weight
  return 600
}

function GradientSpan({ children, from, to, ...props }: Partial<WrapperComponent> & Range) {
  return (
    <Span
      variant="gradient"
      gradient={{
        from: from ?? "indigo",
        to: to ?? "cyan",
        deg: 45,
      }}
      weight={get_weight(props)}
      {...props}
    >
      {children}
    </Span>
  );
}

function JS({ children, tailwindClasses, ...props }: any) {
// function JS({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & JS) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "pb-4";
  return (
    <Prism
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      
      language="javascript"
      withLineNumbers
      {...props}
    >
      {children}
    </Prism>
  );
}

function JSDark({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses) {
  return <JS colorScheme="dark" tailwindClasses={tailwindClasses} {...props}>{children}</JS>
}



function Emoji({ children, whitespace=true, style, classNames, ...rest }: Partial<WrapperComponent> & Partial<{whitespace: boolean, style: Object, classNames: string}>) {
  const { cx } = createStyles(() => ({}))();
  return (
    <div
      className={cx("emoji", classNames)}
      style={
        style
          ? { display: "inline-block", ...style }
          : { display: "inline-block", paddingRight: whitespace ? "1rem" : "0" }
      }
      {...rest}
    >
      {children}
    </div>
  );
}

interface HProps {
  children: any;
  props?: Object;
  style?: Object;
  tailwindClasses?: string;
}

const H3: React.FC<HProps> = ({ children, style, tailwindClasses, ...props }) => {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "font-bold text-2xl pb-4 tracking-tight";
  return (
    <h3
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      style={style ?? {}}
      {...props}
    >
      {children}
    </h3>
  );
};
const H2: React.FC<HProps> = ({ children, style, tailwindClasses, ...props }) => {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = "font-bold text-3xl pb-4 tracking-tight";
  return (
    <h2
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      style={style ?? {}}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * Turns Post[] into a tree, sorting by year and month.
 *
 * @nonPure Produces side effects.
 * @param {Post} posts
 * @param {Map} tree
 * @returns {Map}
 */
function treefyPosts(posts: Post[], tree = new Map()): Map<number, number> {
  posts.forEach((post) => {
    const [year, month] = post.dateCreated;
    tree.has(year)
      ? tree.get(year).has(month)
        ? tree.get(year).get(month).push(post)
        : tree.get(year).set(month, [post])
      : tree.set(year, new Map().set(month, [post]));
  });
  return tree;
}

function TLDR({ children, ...props }: Partial<WrapperComponent>) {
  return (
    <div className="tl-dr pb-16" {...props}>
      <Span
        variant="gradient"
        gradient={{ from: "indigo", to: "cyan", deg: 45 }}
        weight={600}
      >
        <>TL/DR:{" "}</>
      </Span>
      {children}
    </div>
  );
}


function P({ children, pb, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses & Partial<PB>) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = `pb-${pb ?? 0}`;
  return (
    <div
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      {...props}
    >
      {children}
    </div>
  );
}


function PB8({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses) {
  return (
    <P
    pb={8}
    tailwindClasses={tailwindClasses}
    {...props}
    >{children}</P>
  );
}

function PB4({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses) {
  return (
    <P
    pb={4}
    tailwindClasses={tailwindClasses}
    {...props}
    >{children}</P>
  );
}

function M({ children, pb, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses & PB) {
  const { cx } = createStyles(() => ({}))();
  const defaultClasses = `pb-${pb ?? 0}`;
  return (
    <div
      className={cx(
        tailwindClasses ? [defaultClasses, tailwindClasses] : defaultClasses
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function MB8({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses) {
  return (
    <M pb={8} tailwindClasses={tailwindClasses} {...props}>
      {children}
    </M>
  );
}
function MB4({ children, tailwindClasses, ...props }: Partial<WrapperComponent> & TailwindClasses) {
  return (
    <M pb={4} tailwindClasses={tailwindClasses} {...props}>
      {children}
    </M>
  );
}

interface A {
  href: string
  alt: string,
}
function WebLink({ children, tailwindClasses, href, alt, ...props }: Partial<WrapperComponent> & TailwindClasses & A) {
  return (<a href={href} className={tailwindClasses || "text-sky-700 hover:underline"}>{children}</a>);
  // return (<a href={href} alt={alt} className={tailwindClasses || "text-sky-700 hover:underline"}>{children}</a>);
}

const emptyObject = () => ({});

function Code({ children, block, ...props }: Partial<WrapperComponent> & TailwindClasses & { block?: boolean}) {
  return (
    <Span className={`flex-inline justify-center items-center bg-gray-100 rounded px-2 py-1 text-base font-light text-gray-800 border ${block ? "block" : ""}`} {...props}>
      {children}
    </Span>
  );
}

export {
  log,
  reverseString,
  resolveMonth,
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  JSDark,
  Emoji,
  H3,
  H2,
  treefyPosts,
  TLDR,
  P,
  PB8,
  PB4,
  M,
  MB8,
  MB4,
  emptyObject,
  WebLink,
  Code
};
