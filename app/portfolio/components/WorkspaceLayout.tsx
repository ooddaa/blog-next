import { HEADER_HEIGHT } from "@/app/components/MantineHeader"

type WorkspaceLayoutProps = {
  children: React.ReactNode,
}

export default function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  return (
    <div 
    className='bg-slate-50 flex flex-col justify-start items-center'
    style={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
      {children}
    </div>
  )
}
