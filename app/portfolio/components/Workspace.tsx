import WorkspaceLayout from "./WorkspaceLayout";
import WorkspaceDescription from "./WorkspaceDescription";
import { ComponentEntryValue } from "./collection";
type WorkspaceProps = {
  children: ComponentEntryValue,
}

export default function Workspace({ children }: WorkspaceProps) {
  return (
    <div className="portfolio-workspace">
      <WorkspaceLayout>
        <WorkspaceDescription>{children?.description}</WorkspaceDescription>
        {children?.component}
      </WorkspaceLayout>
    </div>
  );
}
