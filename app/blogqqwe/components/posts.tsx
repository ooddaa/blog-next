import {
  Span,
  Bold,
  Super,
  GradientSpan,
  JS,
  JSDark,
  Emoji,
  H3,
  H2,
  P,
  PB8,
  PB4,
  M,
  MB8,
  MB4,
  TLDR,
  WebLink,
  Code
} from "../../toolbox";
import type { Post } from "../../types";
import { Text, Blockquote, Center, List } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { Prism } from "@mantine/prism";
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ["latin"] })

const codeSnippet = `const a = 1;
function fun() {
 let smth = 0;
 return smth;
}`;

const stub = {
  id: 0,
  slug: "slug",
  header: "header",
  subheader: "subheader",
  dateCreated: [2022, 2, 10],
  author: "author",
  timeToRead: "timeToRead",
  timeToThink: "timeToThink",
  ersion: "0.0.1",
  tags: [],
  body:  <div className={open_sans.className + " text-base/6 sm:text-xl/8"}> </div>
};
const SpongeBob = (
  <GradientSpan from="yellow" to="orange">
    SpongeBob
  </GradientSpan>
);
export default [
  {
    id: 9,
    slug: "object-to-graph-mapping-tool",
    header: "Object-To-Graph mapping tool",
    subheader: "What made me want to create knowledge graphs",
    dateCreated: [2022, 2, 10],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "10min",
    tags: ["knowledge graphs", "Mango", "Neo4j"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
            Property-rich Knowledge Graphs provide
            machine-readable context critical for AI understand humans.
        </TLDR>

        <H3>Single Source of Truth</H3>

        <MB8>
          In engineering an Enterprise Knowledge Graph (<Bold>EKG</Bold>) that
          holds identity data the key challenge from the start was how to
          ascertain the uniquness of data. How to make sure that the data
          supplied to the EKG could be accessed as a Single Source of Truth (
          <Bold>SST</Bold>) for its users?
        </MB8>

        <MB8>
          The key architectual decision was made to design a platform which
          would help ensure that there are no copies of the same Node. A Node
          would constitue whatever user deemed a <Bold>mental entity </Bold> to
          which they already attached a &quot;uniquness&quot; attribute in their minds.
        </MB8>

        <H3>For example</H3>

        <MB8>
          Suppose there is a CEO, {SpongeBob}, in our organization. All
          employees have the same &quot;unique&quot; {SpongeBob} in mind when they talk
          about him in the pub after work. But when it comes to representing{" "}
          {SpongeBob} outside of employee&apos;s collective mind, say, writing an
          email with some details/attributes of {SpongeBob}, then each employee
          might refer to their &quot;copy&quot; of these attributes, located wherever (on
          their desktops/in their emails/in folders on Sharepoint/on pages of
          Confluence etc).
        </MB8>
        <MB8>
          What&apos;s important here is that regardless of the quality and
          consistency of this attribute data, there is not an equivalent digital
          representation of {SpongeBob} that can easily be referred to by all
          employees should they need to &quot;speak&quot; of him digitally. There is
          seldom an SST representation of {SpongeBob} and as the result, a lot
          of time is spent searching for the latest updated version of{" "}
          {SpongeBob}&apos;s attributes (long phone calls / emails to chase /
          searching by text string and not by the meaning - {SpongeBob}-ness).
        </MB8>

        <MB8>
          The essence, the &quot;CEO&quot;-ness is in fact transient -current CEO might
          step down and another person can become a new CEO. In this case
          everyone would make essential modifications to the notion of the
          &quot;current CEO&quot;. But {SpongeBob} won&apos;t go anywhere - it will persist in
          the EKG as a new Chairsponge.
        </MB8>

        <H3>The Idea</H3>
        <MB4>
          The idea came up when I worked for a family office and was dealing
          with bits and pieces of data coming across my desk. I noticed that I
          would spend most of my time and effort not on the value-generating
          activities relating to the data, but on solving questions like:
        </MB4>
        <MB8>
          <List>
            <List.Item>
              1. What is the correct full address of Person X? And at the point
              of time T?
            </List.Item>
            <List.Item>
              2. Did we send that document to Y? When? What was in it?
            </List.Item>
            <List.Item>3. Where can I find XYZ?</List.Item>
          </List>
        </MB8>

        <MB8>
          It was obvious that the solutions to these questions (99% of time that
          would be a source document, or colleague&apos;s advice) resided within my
          colleague&apos;s minds or on their desktops/emails. We did have an old and
          limited database that had some records of some legal entities and
          natural persons - but to use that knowledge it had to be checked and
          double-checked with colleagues first.
        </MB8>

        <MB8>
          Which in 50% of situations required them requesting the info from
          their counterparties. The problem was that once all the effort was
          made and the relevant info was received, verified and utilized, it was
          simply forgotten until the next time when same problem arrived. And
          when it did, usually after a prolonged period of time, no one could
          easily locate the previous result to reduce the amount of cognitive
          work.
        </MB8>

        <H3>Touch it if it&apos;s broken</H3>
        <MB4>
          A simple solution was to agree to share all such hard-earned
          knowledge, but:
        </MB4>
        <MB8>
          <List>
            <List.Item>
              1. Everyone wants to go on writing emails and making phone calls
              (status quo bias).
            </List.Item>
            <List.Item>
              2. There was no simple way to do it. We tried Confluence - but it
              required a learning curve that no one wanted (it at least did not
              seem too exiting to do extra mental work for free).
            </List.Item>
          </List>
        </MB8>
        <MB8>
          No one wants to archive. Archiving is a difficult mental work which is
          not rewarded in an obvious, immediate way. Therefore no one does it at
          will. This creates a huge (but familiar) tech debt in a form of
          knowledge search, repeating same work that already has been done by
          others.{" "}
        </MB8>
        <MB8>
          On the upside this is how office workers v1.0 justify the time they
          spend in the office getting paid.
        </MB8>

        <H3>Future solution</H3>
        <MB8>
          Office workers v2.0 need to recognize, embrace and be rewarded for
          Knowledge Sharing activities. They need to be confident in knowing
          that there is a Single Source of Truth, accessible without{" "}
          <a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch">
            extra mental effort
          </a>
          . And if there is extra mental effort required (to upload knowledge),
          then it is rewarded immediately (reputation/points/perks etc) to
          recognize Knowledge Sharing as a critical value-generating activity of
          the 21 century.
        </MB8>
      </div>
    ),
  },
  {
    id: 1,
    slug: "setting-up-yahoo-prices-api-on-heroku",
    header: "Setting up Yahoo Prices API on Heroku",
    subheader: "Without the docs, it&apos;s unusable.",
    dateCreated: [2022, 3, 5],
    timeToRead: "2 min",
    timeToThink: "10 min",
    author: "oda",
    tags: [
      "python",
      "api",
      "REST",
      "postman",
      "heroku",
      "documentation",
      "yahoo finance",
      "options trading",
      "Interactive Brokers",
    ],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
          Setting up a REST API on Heroku to retreive Yahoo! Finance stock prices as close as possible to daily option trades is easier if you write some documentation.
          Well, any software maintenance is easier with documentation. DOCUMENTATION!
        </TLDR>

        <H2>
          What do you do when your wife trades US stock options?
        </H2>
        <MB8>
          You try to stay out of it as much as possble <Emoji whitespace={false} >😂</Emoji> . But how can I say no when my dear wife, K, asks me to help her add US stocks prices to her
          option trading log, which she runs on Google Sheets?
        </MB8>

        <H3>So</H3>
        <MB8>
          K, after a hard trading day, copy-pastes her option combos, strangles
          and whatnot data to Sheets from Interactive Brokers&apos; TWS.
          Unfortunately, IB&apos;s option trade reports do not come with a precise
          price of the underlying at the moment of option trade&apos;s execution.
        </MB8>
        <MB4>Let&apos;s say she has this record:</MB4>
        <MB4>
            <JS noCopy colorScheme="dark">{`AMD [STOCK PRICE ???] 19/11/2020 11:43:35 BTO LONG CALL +3 AMD NOV27'20 93 CALL 0.57 3.59`}</JS>
        </MB4>
        <MB8>
          It would be handy to know how much AMD traded for at 11:43:35 on
          November 19, 2020, right? Ok, maybe we aren&apos;t that fastidious and can
          round time down to 11:43.
        </MB8>
        <MB8>
          If so, then the easiest way to get stock prices is to use YahooPrices
          API. ...of which no documentation in human-readable format exists...
        </MB8>
        <MB8>
          Ran Aroussi published a nice Python package - <a href="https://pypi.org/project/yfinance/">yfinance</a>. Many thanks,
          Ran! We are going to use this package to set up our simple Yahoo! Prices
          REST API on Heroku.
        </MB8>
        <MB4>
          <strong>My initial logic was to:</strong>
        </MB4>
        <div className="pb--3rem">
          <ol>
            <li>launch a Python Yahoo Prices API on Heroku,</li>
            <li>call it from the Sheets and</li>
            <li>
              automatically update K&apos;s trading logs with underlying prices.
            </li>
          </ol>
        </div>

        <MB4>
          The API is now accessible on{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a>. To use it -
          simply POST with an application/json body set as follows:
        </MB4>
        <div className="pb--2rem">
          <Code block>{`{ "data": Ticker[] }`}</Code>
        </div>
        <MB4>Where each Ticker is:</MB4>
        <div className="pb--2rem">
          {/* <Code block language="python">{`[ */}
          <Code block>{`[
    ticker: str, 
    # price may be skipped for POST request, add null in Postman
    price: null, 
    # at the moment of writing this post, it&apos;s hard to remember
    # why I split time into two lists like this.         
    [
      year:int, 
      month:int, 
      day:int
    ], 
    [
      hour:int, 
      min:int, 
      sec:int
    ]
]`}</Code>
        </div>
        <MB4>
          If it all goes right, Yahoo Prices API will add a
        </MB4>
        <MB4>
          <Code block>price: float</Code>
        </MB4>
        <div className="pb--2rem">to each Ticker.</div>

        <div className="three-days-later pb--2rem">
          {/* <Image
            className="rounded-lg"
            fill={true}
            src="/img/3dayslater.jpeg"
            alt="Some time has passed"
          /> */}
        </div>
        <p>
          As I am writing this, a month has passed since I launched the stuff
          above, and I hardly can remember how things were arranged!
        </p>
        <MB4>
          I am sending a POST request with Postman to{" "}
          <a href="https://yahooprices.herokuapp.com">Heroku</a> with a proper
          JSON:
        </MB4>
        <MB4>
          <Code block>
            {`{ 
    "data": [
        ["AMD", null, [2022, 3, 10], [15, 0, 0]]
    ]
}`}
          </Code>
        </MB4>
        <div className="pb--2rem">
          But get a{" "}
          <a href="https://www.lifewire.com/500-internal-server-error-explained-2622938">
            500 Internal Server Error
          </a>{" "}
          response, which is 😬
        </div>

        <MB4>Let&apos;s investigate, shall we 🕵🏻‍♂️</MB4>
        <div className="pb--2rem">
          <Code block>$ heroku logs -app=yahooprices --tail</Code>
        </div>

        <MB4>
          Lo and behold, we&quot;ve got ourselves a bug!
        </MB4>
        <div className="yahoo-prices-bug pb--2rem">
          {/* <Image
            className="rounded-lg"
            src="/img/ypb.png"
            alt="Screenshot of Heroku logs"
          /> */}
        </div>
        <MB4>🤔 ???</MB4>
        <MB4>
          Ah yes, it all comes back to me now - the last feature that I added
          was to allow for all prices from the query to be returned as part of
          the response. Then users could sort themselves out should the main
          timestamp not be available. I did it by adding a new route:
        </MB4>
        <div className="pb--2rem">
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/allPrices
          </Code>
        </div>

        <MB4>
          But in so doing, I forgot to set a default value to the new argument
        </MB4>
        <MB4>
          <Code block>attach_prices=False</Code>
        </MB4>
        <MB4>
          of the underlying function that handles data requests for both routes.
          I should have done like this:
        </MB4>
        <MB4>
          <Code block>
            {`# yahoo.py 
def get_prices(tickers, attach_prices=False): ...`}
          </Code>
        </MB4>

        <MB4>Now, when users call the old route:</MB4>
        <MB4>
          <Code block>
            <strong>POST</strong> https://yahooprices.herokuapp.com/
          </Code>
        </MB4>

        <MB4>they get</MB4>

        <div className="pb--3rem">
          <Code block>
            {`{
    "data": [
        [
            "AMD",
            105.810302734375,
            [
                2022,
                3,
                10
            ],
            [
                15,
                0,
                0
            ]
        ]
    ]
}`}
          </Code>
        </div>
        
        <PB8/>

        <H3>I&apos;ll have a takeaway, please 🍟 </H3>
        <div className="pb--3rem">
          <ol>
            <li>Write more WHY-comments in your code.</li>
            <li>Set sensible defaults.</li>
            <li>Test all the time.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    slug: "git-stash",
    header: "git stash to the rescue",
    subheader:
      "Haven&apos;t thought it through before making changes on this branch? No biggie - git stash it!",
    dateCreated: [2022, 3, 12],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "4.5 min",
    tags: ["git"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
          If you practice everyone&apos;s favourite{" "}
          <Bold>
            <i>code first - think later</i>
          </Bold>{" "}
          approach, then these are your best friends:
          <div className="pt-4">
            <ul>
              <li>
                <Code>git stash</Code>
              </li>
              <li>
                <Code>git stash list</Code>
              </li>
              <li>
                <Code>git stash pop</Code>
              </li>
            </ul>
          </div>
        </TLDR>

        <H3>My workflow</H3>
        <PB8>
          Sometimes I struggle with keeping my coding organised. My projects are
          fair game for me - I can touch any part of it whenever I want. Which
          produces convoluted coding sessions.
        </PB8>

        <PB8>
          Which more often than not creates a lot of unnecessary code
          re-writing. Or, even more often, after I wrote something, I realise
          that it logically belongs to another branch.
        </PB8>

        <MB4>
          If there is <span className="text-lg font-bold">NO</span> other
          branch, I simply
        </MB4>

        <JS colorScheme="dark" noCopy classNames="pb-8">
          {`$ git checkout -b newBranch
$ git commit -am "stuff that should be on newBranch"`}
        </JS>

        <MB4>
          If there <span className="text-lg font-bold">IS</span> the other
          branch that logically owns the changes, no biggie,{" "}
          <Code>git stash</Code> to the rescue!
        </MB4>

        <JS colorScheme="dark" noCopy classNames="pb-8">
          {`$ git stash       // all changes on current branch are 
                  // reverted, equals to git reset --hard
$ git checkout anotherBranch
$ git stash list  // shows us the stack of stash@{number}: WIP on <branchName>: <branchHash> <branchComment>
$ git stash pop   // there might be some conflicts for manual resolution, 
                  // I accept all incoming (stashed) changes
$ git commit -am "stuff that should have been on anotherBranch"`}
        </JS>

        <H3>Voila! </H3>
        <div>
          We now have appropriately positioned and accounted for our code. 🥳
        </div>
      </div>
    ),
  },
  {
    id: 3,
    slug: "how-i-stopped-worrying-and-started-to-love-open-source",
    header: "How I stopped worrying and started to love open source",
    subheader: "post 3 subheader",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "3 min",
    tags: ["open source", "GitHub", "BitBucket", "git push"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <div className="blog-post__body__tldr">
          <div className="pb--2rem">
            <Span
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              weight={600}
            >
              TL/DR:{" "}
            </Span>
            Transition between hoarding behaviour and open source (in my case
            private Bitbucket vs public GitHub) - takes a mindshift. The
            question boils down to the famous quote from Aristotel:
          </div>
          <Blockquote className="pb--3rem" cite="- Aristotel">
            Do I want to be a better developer/coder/programmer/professional?
          </Blockquote>
          <MB4>
            If the answer is{" "}
            <Span
              variant="gradient"
              gradient={{ from: "green", to: "lime", deg: 45 }}
              weight={600}
            >
              YES
            </Span>{" "}
            - go public. If the answer is{" "}
            <Span
              variant="gradient"
              gradient={{ from: "red", to: "pink", deg: 45 }}
              weight={600}
            >
              {" "}
              NO{" "}
            </Span>
            - stick with a private repo.
          </MB4>
        </div>

        <H3>Public vs Private</H3>
        <p>
          Since the beginning of my coding hobby, in 2012, I was under the
          impression that what I code matters. Not that I would be able to put
          my finger on how exactly it mattered or why. Or why I was so sure that
          anyone would ever spend any of their valuable time
          reading/stealing/using my precious code.
        </p>
        <div className="pb-12">
          Uploading my work to a public place changes how I think about the
          quality of my work. I have three rules:
        </div>
        <div className="pb-12">
          <ol>
            <li className="pb-12">
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan", deg: 45 }}
                  weight={600}
                >
                  To push is better than to hoard.{" "}
                </Span>
              </MB4>
              Pushing to main branch forces me to focus on solving an issue
              within the restricted timespan (I like those green commits, I do).
              But at the same time I realise I don&apos;t want to push garbage, so a
              this becomes a battle against{" "}
              <strong>Unrelenting Standards</strong> (ie &quot;it&apos;s better now and
              imperfect than perfect and never&quot;).
            </li>

            <li className="pb-12">
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "green", to: "yellow", deg: 45 }}
                  weight={600}
                >
                  To write documentation is better than to write code.{" "}
                </Span>
              </MB4>
              <MB4>
                I want my work to be something that I am proud of. The only sure
                way to get there for me is to incrementally improve on my work.
                Since &quot;incrementally&quot; means &quot;step by step over time&quot; - I ran
                into the old{" "}
                <Blockquote className="" cite="- everyone">
                  <Bold>WHAT_THE_HELL_IS_THIS_DOING_HERE ??</Bold>
                </Blockquote>
                <strong></strong> problem.
              </MB4>
              It usually takes me a lot of time to remember what I was trying to
              achieve with this code, whether this code is even important or it
              can be ignored. Hence I make myself spend time on adding code
              comments, documentation, and notes. And if I am completely honest,
              the benefit that I get when I actually think of what I am trying
              to achive by way of writing code far outweighs the benefits of
              having banged out some code and later rewrite it 5 times and
              delete twice.{" "}
            </li>

            <li className="pb-12">
              <MB4>
                <Span
                  size="lg"
                  variant="gradient"
                  gradient={{ from: "orange", to: "red", deg: 45 }}
                  weight={600}
                >
                  To compete is better that to delude yourself.{" "}
                </Span>
              </MB4>
              <MB4>
                This is the biggest one for me. I think open source allows ideas
                to compete. Even if they compete only within my own head,
                because, let&apos;s get real for a sec, no one is going to go through
                my repos with any level of attention. If they do, I&apos;d be chaffed
                to bits to listen to their comments (after a couple of deep
                breaths that is).
              </MB4>
              Hoarding code in my drawer kills any opportunity for it to be
              grown into something usable by actual humans. Pushing it out there
              in the public gives it at least a chance (however small). There is
              lots of work to do after just simple <Code>git push</Code> but
              without the first step, there won&apos;t be any others.
            </li>
          </ol>
        </div>
        <H3>Conclusion</H3>
        <div className="pb-16">
          Choosing to keep my code in a public repo
          <Emoji>
            <Super>🍉</Super>
          </Emoji>
          vs hoarding all of it in a private repo gives me motivation to develop
          myself as a professional.
        </div>
        <div className="subscript">
          <div color="grey">
            <Emoji>
              <Super>🍉</Super>
            </Emoji>
            <i>
              do not forget to remove all <Bold>PID</Bold> - <Bold>P</Bold>
              rivately <Bold>I</Bold>dentifiable <Bold>D</Bold>ata from your
              public repo before you push!
            </i>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    slug: "future-posts",
    header: "Future posts",
    subheader: "What I need to write about",
    dateCreated: [2022, 3, 23],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "hours and hours",
    tags: ["googlesheets", "Mantine.dev", "Next.js", "Figma", "Phoenix LiveView"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <ol>
          <li>
            1.{" "}
            <Span color="green">
              Done - found <a href="https://mantine.dev/">Mantine.dev</a>
            </Span>{" "}
            find library that styles html code - mine looks horrible and takes
            forever to add
          </li>
          <li>
            2. write a bunch of <i>1min solutions</i> based on the problems &
            solutions from my googlesheets
          </li>
          <li>3. add links to whatever I mention in my posts</li>
        </ol>
        <p></p>
      </div>
    ),
  },
  {
    id: 5,
    slug: "using-mantine-prism-to-highlight-code",
    header: "Using Mantine Prism to highlight code",
    subheader: "'Mantine pwns!' S1E1",
    dateCreated: [2022, 4, 2],
    author: "oda",
    timeToRead: "3 min",
    timeToThink: "15 min",
    tags: ["Mantine.dev", "CSS-in-JS", "Styled components", "React"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <p>
          First thing that I discovered after starting this blog is that it is
          not exactly easy to present a code snippet so that it doesn&apos;t look
          ugly af. And I consider myself an <i>anti-ugly-af</i> guy most of the
          time.
        </p>
        <p>
          Youtube algo decided to take care of my problem and suggested that I
          watch{" "}
          <a href="https://www.youtube.com/watch?v=LOpFYMPXqE4">
            2022 is gonna be wild for developers...
          </a>{" "}
          which introduced me to <a href="https://mantine.dev">Mantine!</a>
        </p>
        <MB4>
          So now instead of writing a bunch of ugly spans and styles like this:
        </MB4>
        <div className="pb--2rem">
          <pre>
            <code>
              <span style={{ color: "green" }}>
                {'// to highlight code like this'}
              </span>
              <br />
              <span style={{ color: "blue" }}>const</span> a = 1;
              <br />
              <span style={{ color: "blue" }}>function</span>{" "}
              <span style={{ color: "orange" }}>fun</span>() {`{`}
              <br />
              <span style={{ color: "blue" }}> let</span> smth = 0;
              <br />
              <span style={{ color: "purple" }}> return</span> smth;
              <br />
              {`}`}
              <br />
              <span style={{ color: "green" }}>
                {'// I had to write it like this'}{" "}
              </span>
              <br />
              {`<pre>
  <code>
  <span style={{ color: "green" }}>
  // to highlight code like this
  </span>
  <br />
  <span style={{ color: "blue" }}>const</span> a = 1;
  <br />
  <span style={{ color: "blue" }}>function</span>{" "}
  <span style={{ color: "orange" }}>fun</span>() {\`{\`}
  <br />
  <span style={{ color: "blue" }}> let</span> smth = 0;
  <br />
  <span style={{ color: "purple" }}> return</span> smth;
  <br />
  {\`}\`}
  <span style={{ color: "green" }}>
  // I had to write it like this
  </span>
  <br />
  </code>
  </pre>`}
            </code>
          </pre>
        </div>

        <MB4>
          ... I can just use a <Code>{"<Prism />"}</Code> component from{" "}
          <a href="https://mantine.dev/others/prism/">Mantine Prism</a> to
          highlight my code snippets. Voilà:
        </MB4>
        <div className="pb--3rem">
          <Prism language="tsx">{codeSnippet}</Prism>
        </div>

        <PB8>
          Or use <Code>colorScheme=&quot;dark&quot;</Code> to make it dark like{" "}
          <a href="https://www.imdb.com/name/nm3211470/">Rober Eggers&apos;s</a>{" "}
          movies:
        </PB8>

        <JS classNames="pb-8" colorScheme="dark">
          {codeSnippet}
        </JS>

        <H3>Isn&apos;t it lovely? 💥</H3>
      </div>
    ),
  },
  {
    id: 6,
    slug: "setting-document-event-listeners-with-React-useEffect-hook",
    header: "Setting document event listeners with React useEffect hook",
    subheader: "Dependency array is key",
    dateCreated: [2022, 4, 5],
    author: "oda",
    timeToRead: "4min",
    timeToThink: "10min",
    tags: ["react", "useEffect", "useState"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
        The most important thing to remember here is that <Code>useEffect</Code> hook runs its logic (produces effects) <Bold>ON EVERY RENDER</Bold>. But there are simple techniques to fine-tune this behaviour: 
        <div className="pt-4">
            <ul>
              <li>
                <Code>[]</Code>
              </li>
              <li>
                <Code>[dependencies]</Code>
              </li>
              <li>
                <Code>return a clean up function</Code>
              </li>
            </ul>
          </div>
        </TLDR>

        <H2>
          Active listening
        </H2>
        <div className="pb--2rem">
          I have been helping my dear wife 👩‍💻 with her multiplication{" "}
          <Link href="https://github.com/med4kat/x11">project</Link>. She needed
          the user to give an answer to a{" "}
          <GradientSpan from="orange" to="cyan">
            x * 11
          </GradientSpan>{" "}
          problem. So my task was simple - to figure out how to do it without an{" "}
          <Code>{`<input>`}</Code> tag.
        </div>
        <div className="pb--2rem">
          <div>
            I figured I could grab keyboard events and take it from there.
          </div>
        </div>

        <MB4>
          {/* <div> */}
          Last time I used the <Code>useEffect</Code> hook, it was to initialize
          my Component&apos;s state. It looked quite straightforward:
          {/* </div> */}
        </MB4>
        <MB4>
          <JSDark>{`// note the empty [] passed as the second argument
// that is what makes this set up run once after component renders
useEffect(() => {
  initState();
}, []);

// or as a one liner
useEffect(initState, []); 
`}</JSDark>
          {/* <Prism>{`useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [answerArr, task.product, isCorrectAnswer]);`}</Prism> */}
        </MB4>
        <MB4>
          Important detail here is the empty array passed as the second argument.
          This sets the <Code>useEffect</Code> to fire only once per the
          Component&apos;s lifecycle. Namely - right after the Component has been
          rendered to the DOM.
        </MB4>
        <MB4>
          This signature gives us the functionality of{" "}
          <Code>componentDidMount</Code> lifecycle method of the classic style
          of
        </MB4>
        <MB4>
        <JSDark>MyComponent extends React.Component</JSDark>
        </MB4>

        <MB4>
          My first approach to user input was to set up an <Code>{`<input></input>`}</Code> element and then user would have to click on it and enter their answer. Then we could grab whatever user entered and deal with it accordingly.
        </MB4>

        <MB4>
          But in this instance, K wanted user to simply use keyboards to enter numerical answers, without clicking on anything with the mouse. So <Code>{`<input></input>`}</Code> was out of the question.
        </MB4>

        <MB4>
          Apparently, I needed to grab user&apos;s key strokes so I had to listen to <Code>keydown</Code> events.
        </MB4>

        <MB4>
          Which brings us to the following code:
        </MB4>

        <JSDark>
{`/* add listeners */
useEffect(() => {
  document.addEventListener("keydown", handleKeyDown);
  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [answerArr, task.product, isCorrectAnswer]);`}
        </JSDark>

        <MB4>
          Let me explain what&apos;s going on here:
        </MB4>
        <MB4>
        <ol>
            <li>Line 3. We ask the browser to fire a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event">Keydown event and provide a function that will be called with that event as the only argument - in our case we call it <Code>handleKeyDown</Code></a></li>
            <li>Lines 4 and 5. Clean up. If the component within which we are setting this functionality is ever removed from the DOM (unmounted), this is how we tell useEffect what to do to clean things up. This is the equivalent of using <Code>componentWillUnmount</Code> lifecycle method from React class component, which is called immediately <a href="https://reactjs.org/docs/react-component.html#componentwillunmount" >before the component is destroyed</a>. Here we simply don&apos;t want our event listeners to clutter and will clean them up, tidy tidy tidy up.</li>
            <li>Line 7. Performance optimization. To make useEffect efficient, we may provide a dependecy array - if nothing in this array changes, useEffect will skip and not perform its actions, adding and removing listeners in this case. <a href="https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects">Check this tip</a></li>
          </ol>
        </MB4>

      </div>
    ),
  },
  {
    id: 7,
    slug: "git-stash-vs-git-reset",
    header: "git stash vs git reset",
    subheader: "why oh why do I not stash enough?",
    dateCreated: [2022, 4, 22],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "2min",
    tags: ["git", "Netlify", "DevOps"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
          Yesterday, after ditching a bunch of useful code because I thought it
          contained a bug which it did not, I made a rule to:
          <Bold>
            {" "}
            <Code>git stash</Code> <Span color="red">instead of </Span>{" "}
            <Code>git reset --hard</Code>
          </Bold>
        </TLDR>
        <H2>Of course it depends</H2>
        <PB8>
          on what kind of garbage code you are throwing away. If you are 100%
          sure it should perish, then <Code>git reset --hard</Code> and never
          look back. But what if you&apos;re wrong and you&quot;ve just binned a code that
          might worth at least 50kcal ??
        </PB8>
        <H3>Let me share my example.</H3>
        <P pb={4}>
          Yesterday I helped my wife deploy her React project to{" "}
          <a
            className="hover:text-amber-600 underline decoration-solid"
            href="https://www.netlify.com"
          >
            Netlify
          </a>
          . The build was failing because by default Netlify&apos;s build
          configuration was set to treat React&apos;s warnings as errors. Two plans
          were obvious, I should either:
        </P>
        <PB8>
          <ol className="ml-4 list-decimal">
            <li className="mb-0">
              Correct the codebase - get rid of warnings; or
            </li>
            <li>Correct Netlify&apos;s config - make it ignore warnings.</li>
          </ol>
        </PB8>
        <H3>1. Dealing with warnings</H3>
        <PB8>
          As I wrote in my recent{" "}
          <Link href="/blog/setting-document-event-listeners-with-React-useEffect-hook">
            Setting document event listeners with React useEffect hook
          </Link>{" "}
          blogpost, I used a <Code>useEffect</Code> hooks to set up document
          listeners and React&apos;s linter warned me:
          <Center className="pt-4">
            {/* <Image
              className="rounded-lg"
              src="/img/missingDependency.png"
              alt=""
            /> */}
          </Center>
        </PB8>
        <PB8>
          Naturally, I did not pay any attention to the warning, because:
          <Blockquote cite="Donald Knuth">
            Premature optimization is the root of all evil
          </Blockquote>
        </PB8>
        <PB8>
          That is until the moment when Netlify deployment was derailed off of
          these unhandled warnings.
        </PB8>
        <H3>Long story short</H3>
        <PB8>
          I managed to wrap everything in <Code>useCallback</Code> hooks or move
          function definitions inside useEffect hook so that its dependencies do
          not change on each render. As per the suggestion:
          <Center className="pt-4 pb-4">
            {/* <Image
              className="rounded-lg"
              src="/img/wrapInuseCallback.png"
              alt=""
            /> */}
          </Center>
          It was a bit of struggle. But then I was all set - no warnings from
          compiler. Yas!
        </PB8>
        <PB8>
          <P pb={4}>
            The only problem was that in a previous commit I added a dependency
            to
          </P>
          <JS colorScheme="dark">{`/* init state */
  useEffect(() => {
    reset();
  }, []);`}</JS>
          <P pb={4}>Like this:</P>
          <JSDark>{`/* init state */
  useEffect(() => {
    reset();
  }, [reset]);`}</JSDark>
          Again, as per Create-react-app&apos;s suggestion:
          <Center className="pt-4 pb-4">
            {/* <Image
              className="rounded-lg"
              src="/img/addResetAsDependency.png"
              alt=""
            /> */}
          </Center>
          Which went horribly wrong - the app just kept re-setting its state,
          because that&apos;s what <Code>reset()</Code> is for. But nevermind.
          Important thing here is that I missed the fact that I broke the app
          following compiler&apos;s advice and commited a bug. Then, after I wrangled
          all warnings and was ready to show Netlify who&apos;s the boss, I quickly
          peeked at whether the app was actually doing what it supposed to do.
          Which it wasn&apos;t.
        </PB8>
        <PB8>
          My quick panic reaction was that it must have been the current latest
          changes (a lot of wrangling with moving code/adding
          dependencies/wrapping in useCallbacks) that introduced the error. So I
          decided to discard all convoluted code wrangling and hit{" "}
          <Code>git reset --hard</Code>...
        </PB8>
        <PB8>
          ... only to discover that nope, that code was not the reason the bug
          existed. And yes, I{" "}
          <a href="https://git-scm.com/docs/git-reset#Documentation/git-reset.txt---hard">
            cannot
          </a>{" "}
          get it back.
        </PB8>
        <P pb={4}>What I should have done was to</P>
        <P pb={4}>
          <JS noCopy colorScheme="dark">{`$ git stash save wrangleDeps`}</JS>
        </P>
        <PB8>
          which would&apos;ve discarded all the changes in the current working tree
          anyways, <Bold>AND</Bold> I&apos;d have access to the work I had done.
          Which turned out to be useful and not related to the bug that I
          caught. The sad part - now I need to do the wrangling again. But this
          time I&apos;ll
        </PB8>

        <PB8>
          <Center>
            <Bold>
              {" "}
              <Code>git stash</Code> <Span color="red">instead of </Span>{" "}
              <Code>git reset</Code>
            </Bold>
          </Center>
        </PB8>
        <H3 tailwindClasses="pb-4 pt-16">to be continued ...</H3>
        <P>
          My plan now is to correct the <Code>reset</Code> as a dependency
          mistake and then follow Option 2 - make Netlify ignore my warnings.{" "}
        </P>
      </div>
    ),
  },
  {
    id: 8,
    slug: "git-clean",
    header: "Removing untracked files with git clean",
    subheader: "Cleaning untracked files",
    dateCreated: [2022, 4, 23],
    author: "oda",
    timeToRead: "3min",
    timeToThink: "2min",
    tags: ["git", "TypeScript"],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
          My brave attempt to turn my JavaScript Create-React-App into a
          TypeScript one by simply renaming all .jsx files into .tsx did not
          work.
        </TLDR>
        <PB8>
          To revert back all changes to my working tree I tried{" "}
          <Code>git stash</Code> and, failing that,{" "}
          <Code>git reset --hard</Code>. To my surprise neither worked - my new
          .tsx copies of .jsx files remained in the folders.{" "}
          <Code>git status</Code> called them &quot;untracked files&quot; and refused just
          simply forget about them.
        </PB8>
        <PB8>
          Ok, I need to remove these new untracked files somehow. I really hoped{" "}
          <Code>git reset --hard</Code> would do all this work for me, like a
          magic bullet. A bit of googling brings a new git toy in a form of{" "}
          <Code>git clean</Code> command.
        </PB8>
        <PB8>
          Actually first I do a dry-run to see which files will be removed -{" "}
          <Code>git clean -d -n</Code>. All seems fine, let&apos;s go berserk on
          these .tsx pesky unwanted untracked red-colored files.
        </PB8>
        <PB8>
          <Code>git clean -d -f</Code> bam! Yas! all good now, files are gone,
          peace restored.
        </PB8>
        <H3>Conclusion</H3>
        <PB8>
          If previously I always got away with either{" "}
          <Code>git reset --hard</Code> or, lately, <Code>git stash</Code>, then
          now I discovered that these two do not touch untracked files which
          have to be forcefully removed with <Code>git clean -d -f</Code>{" "}
        </PB8>
      </div>
    ),
  },
  {
    id: 9,
    slug: "rant-1",
    header: "Rant #1. Balancing Housekeeping and Exploration: Maximizing Results under Time Constraints",
    subheader: "",
    dateCreated: [2022, 5, 13],
    author: "oda",
    timeToRead: "5min",
    timeToThink: "whole life",
    version: "0.0.2",
    tags: [
      "philosophy",
      "tech debt",
      "efficiency"
    ],
    body: <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
      <TLDR>
      In the end of the day, choosing the right combination of &quot;Housekeeping&quot; vs &quot;Exploration&quot; depends on what I suck at. I should attack what bores me the most. This way I&apos;ll grab the biggest gain per unit of effort. 
      </TLDR>
      <H2>Intro</H2>
      I often find myself pondering over a common dilemma: How do I strike a balance between completing old projects and tasks, which often involve dealing with technical debt, versus starting new endeavors? What guidelines should I follow? Even when I have only 30 minutes to spare, should I dedicate that time to incrementing progress on existing projects or venture into something from my &quot;Need to try before I die&quot; list?
      <PB8></PB8>
      While there&apos;s no definitive answer, the approach may depend on the long-term goals I want to achieve. Surprisingly, focusing on seemingly less exciting or rewarding projects can yield more positive results than anticipated. Personally, I place a high value on competence, and because of this iterating over past work offers me a multiplier effect in terms of assessing its value.

      <PB8></PB8>
      In simple words - it turns out that at this point of my life the best solution for me is to spend 2/3 of my work time improving on the existing stuff, iterating over what I have done (&quot;housekeeping&quot;) and the rest - 1/3 - to do something completely new and creative. 
      <PB8></PB8>
      <PB8></PB8>

      <H2>Example of the Learning Process</H2>
      Let me draw a parallel from my school days. I recall how I disliked the two-stage approach to completing homework: the first draft followed by the &quot;clean&quot; version for the teacher. In an attempt to save time, which I&apos;d spend on &quot;Exploration&quot;, I often skipped working on the draft version of my home assignment and jumped straight into creating the final version. 
      <PB8></PB8>
      However, this approach overlooked the crucial aspect of repetition in the learning process. As the saying goes, &quot;practice makes it perfect.&quot; The requirement for a draft was not solely about ensuring the readability of the final version for the teacher (&quot;that&apos;s how I explained it to myself&quot;); it was also intended to foster a valuable learning experience — an opportunity to experiment and refine my work by iterating over it in a &quot;sandbox&quot; environment. Unfortunately, by rushing to finish quickly, I missed the chance to become comfortable and respectful of the iterative method of producing quality work. So my &quot;Housekeeping&quot; sucked a lot.
      <PB8></PB8>
      On the upside, I heavily invested into &quot;Exploration&quot; so I was constantly engaged into creative/explorative/testing/breaking activities. Through which I learned other useful skills - &quot;perseverance&quot; - when stuff doesn&apos;t work out the first time, keep going until it does. 
      <PB8></PB8>
      <PB8></PB8>

      <H2>Drawbacks of the &quot;Do-It-In-One-Go&quot; Approach</H2>
      There are a few reasons why this Do-It-In-One-Go approach is not ideal. 
      <PB8></PB8>
      <Span className="font-bold">Firstly, </Span>
it taught me to devalue the results of my work. If I became accustomed to starting from scratch without hesitation, it implied that my previous efforts were not worth saving and improving upon. I could always start anew. 
      <PB8></PB8>
      <Span className="font-bold">Secondly, </Span> complex systems are rarely created in a single attempt. Instead, they are built by piecing together simple blocks and iteratively combining them into increasingly complex structures. Mistaking a complicated, non-functional system for a functioning complex system often arises from a &quot;let&apos;s write this post in one go&quot; mentality, which fails to account for the importance of incremental progress. And access to that is what I missed by not spending enough time carefully drilling through the fundamentals of most of my home assignments. 
      <PB8></PB8>
      I was optimising for &quot;Exploration&quot; behaviour aka &quot;chasing dopamine&quot;. 
      <PB8></PB8>
      <PB8></PB8>
      <H2>Conclusion</H2>
      In conclusion, finding the right balance between housekeeping activities, which involve addressing existing projects or tasks, and exploration, which entails starting new endeavors, is a constant challenge. And this challenge is well seen at school. However, by recognizing the value of incremental work and the benefits of repetition in the learning process, we can make more informed choices. So, the next time I have a limited amount of time or resources, I&apos;d consider the potential positive outcomes of incrementing on &quot;less dopamine-promising&quot; projects rather than solely focusing on the allure of new ventures. 
      <PB8></PB8>
      <PB8></PB8>
      <H2>Remember: </H2>
      true competence is cultivated through a combination of revisiting old ground and exploring new horizons.
    </div>,
  },
  {
    id: 10,
    slug: "improve-code-organization-in-phoenix-liveview",
    header: "Improve code organisation with embed_templates/2 in Phoenix LiveView",
    subheader: "Extract .heex markup into separate files",
    dateCreated: [2023, 6, 8],
    timeToRead: "5 min",
    timeToThink: "30 min",
    author: "oda",
    tags: [
      "code organisation",
      ".heex",
      "Elixir",
      "Phoenix",
      "Phoenix LiveView"
    ],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
        One of the challenges we often face when working with Phoenix LiveView is the growing size of module files due to the inclusion of .heex markup. With logic and views combined in a single file, it becomes difficult to read and work with the code.
        </TLDR>

        <H2>
          Put .heex into templates
        </H2>
        <MB8>
        To address this issue, we can employ the <a href="https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html#embed_templates/2"  className="text-sky-700 hover:underline">embed_templates/2</a> function provided by Phoenix LiveView. By placing our .heex files into separate template files and importing (or embedding) them into our module, we can achieve better code organization and improve readability.
        </MB8>

        {/* <H3>So</H3> */}
        <MB4>
        To get started, we need to create a directory structure that separates our module file from the .heex templates. For example:
        </MB4>
        <MB4>
            <JS noCopy colorScheme="dark">{`/..
|-- my_module.ex
|-- my_module_template.html.heex
`}</JS>
<MB4>
Inside our my_module.ex file, we can use the embed_templates/2 function to import all .heex files from the current folder. Here&apos;s an example:
</MB4>
{/* <Prism block language="elixir">{`defmodule MyModule do */}
<Prism language="typescript">{`defmodule MyModule do
  embed_templates "*"    # This will grab all .heex files in the current folder

  def my_module_template(assigns)
end
`}</Prism>

        </MB4>
        <MB8>
        With this setup, the .heex templates are compiled at compile time and become available as function components within our module. 
        </MB8>

        <H2>
          Provide attributes and improve code quality
        </H2>

        <MB4>
        We can now provide attributes that the component expects to get, improving the organization and readability of our code.
        </MB4>
        {/* <Prism block language="elixir">{`defmodule MyModule do */}
        <Prism language="typescript" >{`defmodule MyModule do
  embed_templates "*"     # This will grab all .heex files in the current folder

  attr :name, :string, required: true     # we need a name
  attr :nickname, :string                # and might have a nickname as well
  def my_module_template(assigns)

end
`}</Prism>
    <MB4></MB4>

        <a href="https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html#module-attributes" className="text-sky-700 hover:underline">Attributes</a> are a great tool to use when you want to document the expected usage of the component. Which is always a good practice. 
    <MB4></MB4>

        By separating our markup into individual template files and utilizing the embed_templates/2 function, we can achieve a cleaner and more maintainable codebase in Phoenix LiveView.

      </div>
    ),
  },
  {
    id: 11,
    slug: "use-custom-fonts-with-phoenix-liveview",
    header: "Use Custom Fonts with Phoenix LiveView to get rid of FOUT",
    subheader: "hint: .ttf are evil, use .woff2",
    dateCreated: [2023, 6, 10],
    timeToRead: "15 min",
    timeToThink: "30 min",
    author: "oda",
    version: "0.0.2",
    tags: [
      "fonts",
      ".heex",
      "Phoenix",
      "LiveView",
      "FOUT",
      ".ttf",
      ".woff2"
    ],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
          <Code>:phoenix, &quot;~&gt; 1.7.2&quot;</Code>
          <Code>:phoenix_live_view, &quot;~&gt; 0.18.18&quot;</Code>
          <PB4></PB4>
        <WebLink href="https://www.zachleat.com/web/webfont-glossary/#fout" alt="Flash Of Unstyled Text link">FOUT</WebLink> or <b>Flash Of Unstyled Text</b> is a pesky bug that really makes my OCD sad. 
          To get rid of it, I needed to stop linking Google Fonts from cdn and instead, provide them as ready-to-use assets. This way client does not need to wait precious milliseconds while fonts are downloaded and no FOUT occurs. 

        The process of downloading and using custom fonts for Phoenix LiveView seems a bit involved at first and it helps to have a step-by-step guide at hand to start with. 
        <PB4></PB4>
        {/* <Image
            className="rounded-lg"
            src="/img/fout.gif"
            alt="FOUT bug"
          /> */}
        </TLDR>
      
        <H2>Introduction</H2>

Managing fonts efficiently is essential for creating visually appealing and consistent designs. In this blog post, we&apos;ll explore a systematic approach to download, convert, and integrate fonts into your project using Google Fonts as an example. By following these step-by-step instructions, you&apos;ll be able to optimize font loading, eliminate Flash of Unstyled Text (FOUT), and enhance the overall user experience.
<PB8></PB8>
<PB8></PB8>

<H2>Step-by-Step Guide</H2>

<H3>1. Downloading Fonts from Google Fonts</H3>

Visit the <WebLink href="https://fonts.google.com/specimen/Inter?query=Inter" alt="link to google fonts website">Google Fonts website</WebLink>.
Select the desired font, in this case, &quot;Inter&quot;.
Click the download font family button to save the font files to your computer.
<PB8></PB8>

<H3>2. Converting Font Files</H3>

This is the most important bit that took me a while to figure out. It turns out that Phoenix LiveView is not friendly to .ttf that you get from GoogleFonts. Therefore, convert the downloaded .ttf font file to .woff2 format using a tool like <WebLink href="https://cloudconvert.com/ttf-to-woff2" alt="link to CloudConvert website">CloudConvert</WebLink>.
<PB8></PB8>

<H3>3. Creating Font Folder</H3>

If you are running a mix project (which you should), your directory stuctrure by default looks something like this: 
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
my_awesome_project/
  |-- assets 
  |-- config
  |-- lib
  |-- priv
  |-- rel
  |-- test
  |-- mix.exs
`}</JS>
With the <Code>/assets</Code> folder containing things that <Code>esbuild</Code> will process at compile time (configured via `config/config.exs`). This is what my <Code>/assets</Code> folder looks like before adding fonts:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
my_awesome_project/
  |-- assets 
      |-- css
      |-- js
      |-- vendor
      |-- tailwind.config.js
`}</JS>

This is what it will look like after I add <Code>Inter</Code> font in the correct format and the correct .css rules. So I go ahead, put my inter.woff2 here and proceed to create an empty <Code>inter.css</Code>: 
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
my_awesome_project/
  |-- assets 
      |-- css
      |-- fonts
          |-- inter
              |-- inter.woff2
              |-- inter.css
      |-- js
      |-- vendor
      |-- tailwind.config.js
`}</JS>
<PB8></PB8>

<H3>4. Adding Font CSS</H3>

In the <Code>my_awesome_project/assets/fonts/inter/inter.css</Code> file, define the <WebLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face" alt="link to font-face rule">@font-face rule</WebLink> to specify font properties and paths for both the <Code>.woff2</Code> font file (and, optionally <Code>.woff</Code> for weird old browsers).
<PB4></PB4>
Result:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
# my_awesome_project/assets/fonts/inter/inter.css

@font-face {
  font-family: 'Inter';
  src: url('inter.woff2') format('woff2');
}
`}</JS>
<PB8></PB8>

<H3>5. Configuring esbuild</H3>

Locate the &quot;config.exs&quot; file in your project:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
my_awesome_project/
  |-- config 
      |-- config.exs
      |-- dev.exs
      |-- prod.exs
      |-- runtime.exs
      |-- test.exs
`}</JS>

Now add paths to <Code>inter.css</Code> and <Code>inter.woff2</Code> to make esbuild process and copy these files to <Code>--outdir=../priv/static/assets</Code> 
<PB4></PB4>
Before:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
# my_awesome_project/config/config.exs

config :esbuild,
version: "0.17.11",
default: [
  args:
    ~w(js/app.js --bundle --target=es2015 --outdir=../priv/static/assets --external:/fonts/* --external:/images/* --external:/temp/*),
  cd: Path.expand("../assets", __DIR__),
  env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
]
`}</JS>


After:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
# my_awesome_project/config/config.exs

config :esbuild,
version: "0.17.11",
default: [
  args:
    ~w(js/app.js --bundle --target=es2015 --outdir=../priv/static/assets --external:/fonts/* --external:/images/* --external:/temp/*),
  cd: Path.expand("../assets", __DIR__),
  env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
]
`}</JS>

<PB4></PB4>
<Code>--loader</Code> option tells esbuild how to treat .woff2 extetion files. In this case no special treatment needed, esbuild will copy it, adding a unique identifier, to make sure we can later update it on the client, should it need to change, ie perform a <WebLink href="https://sparkbox.com/foundry/browser_cache_busting_explained" alt="cache bust explaination">cache bust</WebLink>.


<PB8></PB8>
<H3>6. Extending Tailwind Configuration</H3>

To be able to use our new font as a TailwindCSS class <Code>className=&quot;font-inter&quot;</Code> instead of the usual <Code>className=&quot;font-[Inter]&quot;</Code> we could extend <Code>tailwind.config.js</Code> file.
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
my_awesome_project/
  |-- assets 
      ...
      |-- tailwind.config.js
`}</JS>

Under the <Code>fontFamily</Code> section, add the &quot;Inter&quot; font as an option, along with a fallback font if desired:
<PB4></PB4>
Before:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
// my_awesome_project/assets/tailwind.config.js

module.exports = {
  // ...other stuff
  theme: {
    extend: {
      // put things in here
    }
  }
}
`}</JS>

After:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
// my_awesome_project/assets/tailwind.config.js

module.exports = {
  // ...other stuff
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', &apos;system-ui'],
      }
    }
  }
}
`}</JS>

<PB8></PB8>
<H3>7. Linking Font Stylesheet</H3>

In your project&apos;s root HTML file (e.g., <Code>root.html.heex</Code>), add a link to the font&apos;s CSS file <Code>my_awesome_project/assets/fonts/inter/inter.css</Code>.
Ensure that the link is placed before any content that requires the font like this, ie above the <Code>app.css</Code>:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
// my_awesome_project/lib/my_awesome_project_web/components/layouts/root.html.heex
...
<head>
<link phx-track-static rel="stylesheet" href={~p"/assets/fonts/inter/inter.css"} />
<link phx-track-static rel="stylesheet" href={~p"/assets/app.css"} />
</head>
...
`}</JS>

<Bold>Fun fact: <Code>~p&quot;/assets/fonts/Inter/inter.css&quot;</Code> path (note the upcased <Code>Inter</Code>) would also work locally, but it will take away a couple of hours of your time, when you deploy to <WebLink href="https://fly.io/docs/speedrun/" alt="link to fly.io website">fly.io</WebLink> (or elsewhere?) and find that your fonts aren&apos;t available as assets 🫣. I&apos;ll write another another blogpost about deploying to fly.io in future. </Bold>

<PB8></PB8>
<H3>8. Optimizing Font Loading</H3>

Congratulations! All should work now! 
By linking the font stylesheet, you&apos;ve pre-loaded the fonts, reducing the likelihood of FOUT (Flash of Unstyled Text).

For further optimization, consider loading the entire font family as base64-encoded data. Refer to the <WebLink href="https://www.zachleat.com/web/comprehensive-webfonts/#critical-foft-with-data-uri" alt="link to zachleat's website">expert advice</WebLink> for detailed instructions.

<PB8></PB8>
<H3>Conclusion</H3>
By following these steps, you&apos;ve successfully integrated the &quot;Inter&quot; font into your project, ensuring a consistent and visually pleasing user experience. By optimizing font loading and eliminating FOUT, you&apos;ve taken a crucial step toward enhancing your design&apos;s overall impact. Enjoy the benefits of a well-managed font system, providing a polished and professional touch to your web projects.
</div>
    ),
  },
  {
    id: 12,
    slug: "aoc-2021-d6",
    header: "Advent Of Code: 2021, Day 6",
    subheader: "--- Day 6: Lanternfish ---",
    dateCreated: [2023, 6, 15],
    timeToRead: "5 min",
    timeToThink: "30 min",
    author: "oda",
    version: "0.0.1",
    tags: [
      "advent of code",
      "elixir",
      "LiveBook",
      "genetic algorithms",
    ],
    body: (
      <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
        <TLDR>
        <WebLink href="https://adventofcode.com/2021/day/6" alt="link to Lanternfish problem">Lanternfish</WebLink> grow exponentially! As does any population
          that just procreates over and over. They must be immortal or something... 

          The best approach for this task is to use a genetic algorithm, that evolves a population over a number of generations. Of course I did not start with it 😂
        </TLDR>
      
        <H2>Introduction</H2>

        Genetic algorithms are something I never expected to use in my day-to-day Elixir. <WebLink href="https://www.youtube.com/watch?v=NWXSiZ-vi-o" alt="link to youtube talk">This talk</WebLink> by Sean Moriarity introduced me to the concept and I immediately ordered Sean&apos;s book: <WebLink href="https://www.amazon.co.uk/Genetic-Algorithms-Elixir-Problems-Evolution/dp/168050794X/ref=sr_1_1?crid=3E31871QHHXAX&keywords=Sean+Moriarity&qid=1686837419&sprefix=sean+moriarty%2Caps%2C137&sr=8-1" alt="link to Amazon">Genetic Algorithms in Elixir: Solve Problems Using Evolution</WebLink>. I mean, who wouldn&apos;t want Mother Nature to help you out with Advent Of Code, for example? Yep!

<PB8></PB8>
<PB8></PB8>

<H3>Part 1</H3>

As always, I solved the first part of the puzzle, the most straightforward way possible - with a list. 
It worked, as the input had to be iterated over 80 times. Quite manageable for a LiveBook session.
AOC is all about making it WAY harder in <Bold>Part 2</Bold>.
<PB8></PB8>

<H3>Part 2</H3>

Why is it still going?? 🤔 I asked myself after 5min of waiting. Ah I see, that pesky <Code>exponential</Code> in front of <Code>growth</Code>. Maybe if I remove a couple of <Code>Enum.reverse(list)</Code>, it will do the trick? 
<PB4></PB4>
Well, nope 😁. Alright, what do we have here? 
<PB8></PB8>

<H3>The actual problem</H3>
Well it turns out that following each individual unit of the population (aka 🐟) is not what we want here at all. What we want is to know the `size` of each age group. Because we can work with groups of fish (`schools of fish` 🤔) and represent the problem with a neat map. 
<PB8></PB8>

<H3>Use the algorithm</H3>
So the best way for me to solve this was to follow the simple algorithm. I am not the smartest bunny in the world, so when I cannot immediately see the required shape, I need a simple algorithm to go step-by-step.
<PB4></PB4>
The steps are:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
create_population(input)
|> evaluate()
|> select_parents()
|> procreate()
|> repeat()
`}</JS>

Which translates into a skeleton module:
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
defmodule Fish do
  @moduledoc """

  """
  def population(input) do
    # must not screw this up here
  end

  def select_parents(population) do
    # gonna be easy
  end

  def procreate(population) do
    # that&apos;s where the nature does its thing
  end

  def count(population) do
    # we need a final answer to be an integer
  end

  def run(population, days) do
    # run, Nature, run!
  end
end
`}</JS>

<PB8></PB8>
<H2>Solution</H2>

Once I have a skeleton of the solution (which I am sure is gonna work, because Mother Nature said so), I just throw myself against the keyboard until the test input answer matches. 

<PB8></PB8>
<H3>1. Population</H3>
Step one: define a population.
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
defmodule Fish do

  @doc"""
  I want represent population as a
  collection of {age, size} buckets. 
  Then it will have all the info that
  I need to:
  - select_parents
  - procreate

  Example:
  Fish.population([3, 4, 3, 1, 2])
  %{0 => 0, 1 => 1, 2 => 1, 3 => 2, 4 => 1, 5 => 0, 6 => 0, 7 => 0, 8 => 0}
  Which tells us that we have {3, 2} == two fishes that have 3 days before 
  they produce 3 baby-fishes. I want to pad age buckets to have a full 
  picture of the population per age group.
  Therefore the %{5 => 0, 6 => 0, 7 => 0, 8 => 0} bit
  """
  def population(input) do
    0..8
    |> Enum.map(&{&1, 0})
    |> Map.new()
    |> Map.merge(Enum.frequencies(input))
  end

end
`}</JS>

<PB8></PB8>
<H3>2. Select Parents</H3>
Step two: find out how many parents we will work with. In our case it&apos;s easy - just pick the {"0"} age bucket (0 days left to have sex of its life, assuming they give birth immediately... hm what&apos;s the gestation period of lanternfish??). Anyways...
<PB4></PB4>
<JS noCopy colorScheme="dark">{`
defmodule Fish do

  ...

  @doc"""
  The easiest part, as our data structure has the answer ready
  """
  def select_parents(population), do: Map.get(population, 0, 0)

end
`}</JS>

<PB8></PB8>
<H3>3. Procreate!!</H3>
I mean EVOLVE! I decided to lump a bunch of things together here because 
I think of them as happening all at once and they all constitute one <Code>transition</Code> 
between old and new states:
<ul>
  <li><Code>add children</Code></li>
  <li><Code>age population</Code></li>
  <li><Code>reset parents</Code></li>
</ul>
<PB4></PB4>
Horrible function name that only captures a part of what&apos;s going on - is a 
signature move of mine. Let&apos;s move on:
<PB4></PB4>

<JS noCopy colorScheme="dark">{`
defmodule Fish do

  ...

  @doc"""
  I&apos;m going to do all "generation moving forward" actions in one
  place. It should really be called "evolve(population)" but 
  I'm bad at naming things until it&apos;s too late. 
  """
  def procreate(population) do
    # get the parents == they also represent the number of children
    # as per "One baby fish per parent per week" policy.
    parents = select_parents(population)

    population
    |> Enum.map(fn
      {age, size} when age == 0 -> {8, size}  # baby making part
      {age, size} -> {age - 1, size}          # everyone is getting older part
    end)
    |> Map.new()
    |> Map.update(6, 0, &(&1 + parents))      # parents get a week long rest
  end

end
`}</JS>

<PB8 />
<H3>4. Count and run</H3>
Fuf, hopefully we have not run into a pesky <Code>n+1</Code> problem here, so let&apos;s wrap up with counting and termination criteria. 
<PB4></PB4>

<JS noCopy colorScheme="dark">{`
defmodule Fish do

  ...

  @doc"""
  Easy-peasy, count the fish!
  """
  def count(population) do
    population
    |> Map.values()
    |> Enum.sum()
  end

  @doc"""
  Stop once we have no days/generations left.
  Othervise, go on, fish, frolic all you like! 
  """
  def run(population, 0), do: count(population)
  def run(population, days) do
    run(procreate(population), days - 1)
  end

end
`}</JS>
<PB8></PB8>

<H3>The whole thing</H3>
Also on my <WebLink href="https://github.com/ooddaa/advent_of_code/blob/main/2021/elixir/day-06/day-06.livemd" alt="link to Github website">Github</WebLink>.
<PB4></PB4>

<JS noCopy colorScheme="dark">{`
defmodule Fish do

  @doc"""
  I want represent population as a
  collection of {age, size} buckets. 
  Where age == the number of days until the fish
  creates a new lanternfish.

  Then it will have all the info that
  I need to:
  - select_parents
  - procreate

  Example:
  Fish.population([3, 4, 3, 1, 2])
  %{0 => 0, 1 => 1, 2 => 1, 3 => 2, 4 => 1, 5 => 0, 6 => 0, 7 => 0, 8 => 0}
  Which tells us that we have {3, 2} == two fishes that have 3 days before 
  they produce 3 baby-fishes. I want to pad age buckets to have a full 
  picture of the population per age group.
  Therefore the %{5 => 0, 6 => 0, 7 => 0, 8 => 0} bit
  """
  def population(input) do
    0..8
    |> Enum.map(&{&1, 0})
    |> Map.new()
    |> Map.merge(Enum.frequencies(input))
  end

  @doc"""
  The easiest part, as our data structure has the answer ready
  """
  def select_parents(population), do: Map.get(population, 0, 0)

  @doc"""
  I'm going to do all "generation moving forward" actions in one
  place. It should really be called "evolve(population)" but 
  I'm bad at naming things until it&apos;s too late. 
  """
  def procreate(population) do
    # get the parents == they also represent the number of children
    # as per "One baby fish per parent per week" policy.
    parents = select_parents(population)

    population
    |> Enum.map(fn
      {age, size} when age == 0 -> {8, size}  # baby making part
      {age, size} -> {age - 1, size}          # everyone is getting older part
    end)
    |> Map.new()
    |> Map.update(6, 0, &(&1 + parents))      # parents get a week long rest
  end

  @doc"""
  Easy-peasy, count the fish!
  """
  def count(population) do
    population
    |> Map.values()
    |> Enum.sum()
  end

  @doc"""
  Stop once we have no days/generations left.
  Othervise, go on, fish, frolic all you like! 
  """
  def run(population, 0), do: count(population)
  def run(population, days) do
    run(procreate(population), days - 1)
  end

end
`}</JS>

<PB8></PB8>
<H3>Conclusion</H3>
This gave me answer in no time, as all this algo does is adding groups of fish and creating a few maps along the way. What it definitely doesn&apos;t do is creating loooooooong lists, iterating over them, incrementing each element, ie it works with <Code>populations</Code>, evolving them over a number of generations. Each population is very efficiently represented as a collection of <Code>{"{agent, size}"}</Code> buckets. These tuples are perfect as they can be worked with by Enum and Map modules with no fuzz at all. 
<PB4></PB4>
To sum up, I liked the genetic algo approach (granted, this task doesn&apos;t leave many other choices tbf), as it helps to clearly state the problem and offers an intuitive step-by-step approach that we all know from Mother Nature herself.
      </div>
    ),
  },
  {
    id: 12,
    slug: "rewriting-blog-to-nextjs",
    header: "Transitioning from Create-React-App to Next.js 13",
    subheader: "blog wrought right",
    dateCreated: [2023, 8, 22],
    author: "oda",
    ersion: "0.0.1",
    timeToRead: "5 min",
    timeToThink: "however long you want",
    tags: ["Next.js", "TypeScript", "Bun", "asdf", "Figma"],
    body: <div className={open_sans.className + " text-base/6 sm:text-xl/8"}>
      <TLDR>
        After not touching my old blog, scaffolded with <Code>create-react-app</Code>, for a long while, I decided it was time to jazz it up a bit. By <Code>a bit</Code> I mean <Code>let&apos;s not rewrite it again from scratch in Elixir</Code> (I&apos;ll do it another time). So <WebLink href="https://nextjs.org/" alt="link to Next.js website">Next.js 13</WebLink>, here we go!    
        <PB4 />
        I was pleasantly surprised with Next.js 13, especially its new <WebLink href="https://nextjs.org/docs/app/building-your-application/routing#the-app-router" alt="link to App router docs">App Router</WebLink> and, overall, the quality of the documentation.  
        
        It took me no more than 5 minutes to solve the hiccups that I ran into - all thanks to the sane documentation. Well, typical Typescript&apos;s moaning aside that is. 
        <PB4 />
        In fact, it feels like I deleted more code than I wrote and everything still works fine 😂
      </TLDR>

      <H2>Part 1</H2>
As I sat down to rewrite my blog, I found myself facing a familiar challenge in the JS/TS landscape. After a year spent in the realm of Elixir, Phoenix, and LiveView, I braced myself for the return to the world of JavaScript. However, armed with determination and a newfound excitement, I embarked on the journey of transforming my blog from a Create-React-App to a Next.js 13 application. Little did I know that this transition would not only reignite my interest in TypeScript but also showcase the brilliance of Next.js.
<PB8/>
<PB4/>

<H2>Freshen up the environment</H2>
The first step was to ensure I had the right tools for the task at hand. I swiftly installed the latest version of Node.js (20.5.1) using the heavenly <WebLink href="https://asdf-vm.com/" alt="link to asdf">asdf</WebLink>. 
<PB4/>
<JS noCopy colorScheme="dark">{`
// install asdf plugin for Node.js and 
$ asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
// list what's available to be installed 
$ asdf list-all nodejs
// pick a version and install it
$ asdf install nodejs 20.5.1
// to see which versions are installed on your machine 
$ ls ~/.asdf/installs/nodejs/
`}</JS>
<PB4/>

Ok, why not treat ourselves while we&apos;re at it? I mean install <WebLink href="https://bun.sh/" alt="link to Bun website">Bun</WebLink> to speed up local development.
<PB4/>
<JS noCopy colorScheme="dark">{`
// install asdf plugin for Bun and 
$ asdf plugin add bun
// list what's available to be installed 
$ asdf list-all bun
// pick a version and install it
$ asdf install bun 0.7.3
// to see which versions are installed on your machine 
$ ls ~/.asdf/installs/bun/
`}</JS>
<PB4/>
Now to run my blog with <Code>Node.js 20.5.1</Code> or <Code>Bun 0.7.3</Code> all I have to do is:
<PB4/>
<JS noCopy colorScheme="dark">{`
// create a .tool-versions file in the 
// project root folder with the nodejs version
$ echo "nodejs 20.5.1" > .tool-versions
$ echo "bun 0.7.3" >> .tool-versions
`}</JS>
<PB4/>

With this, I was ready to dive into the world of Next.js. Gone were the days of struggling with the Node.js module system; this time, I was determined to conquer it.
<PB8/>
<PB4/>

<H3>Documentation</H3>
My experience with Elixir had taught me the value of well-written documentation, and I was pleasantly surprised to find that Next.js shared the same sentiment. Navigating the the Next.js API documentation and the changelogs became a breeze, reminiscent of my days with Elixir.
<PB8/>
<PB4/>

<H3>ECMAScript 2023</H3>
Next on the agenda was catching up with the latest developments in the JavaScript world. A quick glance at the new features in ECMAScript 2023 (ES14) revealed some welcome <WebLink href="https://www.infoworld.com/article/3703571/all-the-new-features-in-ecmascript-2023-es14.html" alt="link to article">additions</WebLink>, including the handy <Code>Array.toReversed</Code> and <Code>Array.toSorted</Code> methods which create new arrays so, at least here, you can forget about mutability. Wow, has JS been moving in the direction of functional programming lately? I hope so.
<PB8/>
<PB4/>

<H3>Create Next App</H3>
With a clear vision in mind, I embarked on the process of transforming my blog. The journey began with a simple command: 
<PB4/>
<JS noCopy colorScheme="dark">{`
// create the project, agree to all defaults
$ npm create-next-app@latest
`}</JS>
<PB4/>
The default setup was seamless, providing me with a solid foundation to build upon. Delving into the Next.js documentation, I navigated the intricacies of the App Router, folder structure, and other key components.
<PB8/>
<PB4/>

<H3>Freshen up the landing page</H3>
As I copied over my Welcome page and toolbox utility from the old project to the new, TypeScript types became a priority. Thankfully, TypeScript&apos;s compatibility with Next.js allowed me to fix types with ease. Additionally, I streamlined the Welcome page&apos;s structure, opting for a simpler and more visually appealing design with a touch of green.
<PB4/>
In addition, I put in some background noise to make green portion look more textured and interesting. The noise was generated in Figma with awesome <WebLink href="https://www.figma.com/community/plugin/1138854718618193875/Noise-%26-Texture" alt="link to Noise and Texture Figma plugin">Noise & Texture plugin</WebLink>.
<PB8/>
<PB4/>

<H3>Deploy to Heroku</H3>
With my welcome page and blog content finally ready, it was time to deploy my creation to the cloud. Heroku was the chosen platform for this task. Why not Versel, I hear you ask. Well, prosaically, my old blog was running on Heroku, so &quot;the shortest road is the one you know&quot;. Following a straightforward process, I created a new app named &quot;oda-blog-next&quot; and linked it to my repository. A simple git push heroku main later, my Next.js blog was live.
<PB4/>
<JS noCopy colorScheme="dark">{`
// create a new project
$ heroku create oda-blog-next
// link to repo
$ heroku git:remote -a oda-blog-next
// go online
$ git push heroku main
`}</JS>
<PB4/>
As the final touch, I pointed my custom domain, www.ooddaa.co, to the new blog app. For that to happen I removed the custom domain from the old blog app, added it to the new one, updated DNS records at GoDaddy, and secured it with an SSL certificate auto-managed by Heroku.
<PB8/>
<PB4/>


<H3>Not so fast, TypeScript here</H3>

Of course, a transition of this magnitude wasn&apos;t without its challenges. When I said <Code>was live</Code>, well, it wasn&apos;t until I wrestled all the errors that TS threw at me. Admittedly some of the problems were dealt with in a drastic way, <Code>just delete this crap cmon</Code>, some required learning from the <WebLink href="https://www.youtube.com/watch?v=lMfGp29Ht8c&list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b" alt="link to Matt Pocock youtube playlist">masters themselves</WebLink>. Felt good though, once the project compiled. It does, doesn&apos;t it 😁
<PB8/>
<PB4/>

<H3>Kudos where kudos due</H3>
In conclusion, my venture from Create-React-App to Next.js 13 turned out to be not painfull at all, rather surprisingly I say. I would attribute it to the quality documentation and, well, 13th edition of software done by people way smarter than me, kudos to them!  
<PB8/>

    </div>,
  }
] as Post[]

/* add posts */
// for (let i = 100; i <= 130; i++) {
//   posts.push({
//     ...stub,
//     id: i,
//     slug: `slug${i}`,
//     tags: [`tag${i}`],
//   });
// }


