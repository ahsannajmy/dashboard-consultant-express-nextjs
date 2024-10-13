import { DashboardLayout } from "../layout/dashboardLayout";

export default function ProjectPage() {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-bold">List of Projects</span>
        </div>
      </DashboardLayout>
    </>
  );
}
