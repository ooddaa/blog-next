import React from 'react'
import { WebLink, PB4 } from '@/app/toolbox'
import Image from 'next/image'
import userFlow from '@/public/user_registration_flow.png'
import userFlow2 from '@/public/user_registration_flow_2.png'

function KatcherUserFlow() {
  return (<div className='p-12'>
    {/* <Image src={userFlow} alt="katcher user registration flow"/>
    <PB4/> */}
    <Image src={userFlow2} alt="katcher user registration flow take 2"/>
  </div>)
}

export const katcherUserFlow = {component: <KatcherUserFlow />,  description: (<div>User registration flow for <WebLink href='www.katcher.bio' alt="link to katcher">Katcher platform</WebLink>. 
</div>)}
