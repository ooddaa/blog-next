import React from 'react'
import { WebLink, PB4 } from '@/app/toolbox'

function Forms() {
  return (<></>)
}

export const forms = {component: <Forms />,  description: (<div>This section contains forms that I built to improve my skills in: 
  <PB4/>
  <ul>
    <li><b>CSS-in-JS:</b> using <WebLink href="https://emotion.sh/docs/@emotion/react" alt="link to emotion react">@emotion/react</WebLink></li>
    <li><b>BEM naming:</b> <WebLink href="https://getbem.com/naming/" alt="link to BEM website">block__element--modifier</WebLink> style of classnames to improve code readability</li>
    <li><b>Design System:</b> implementing a design system, inspired by <WebLink href="https://www.youtube.com/watch?v=EK-pHkc5EL4&ab_channel=Figma" alt="link to Figma tutorial">Figma tutorial</WebLink> and <WebLink href='https://tailwindcss.com/docs/theme' alt="link to Tailwind theme docs">TailwindCSS</WebLink></li>
  </ul>
</div>)}
