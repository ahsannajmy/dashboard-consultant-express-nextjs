import { DashboardLayout } from "./components/dashboardLayout";
import { UserIcon } from "./components/generalIcon";

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <div className="flex flex-col gap-4">
          <div className="bg-secondary/80 drop-shadow-lg rounded-lg w-full p-4">
            <div className="flex items-center justify-end text-primary">
              <div className="flex flex-row gap-2 items-center">
                <span>User 1</span>
                <UserIcon className="w-5 h-5" />
              </div>
            </div>
          </div>
          <span className="text-primary">Halaman utama</span>
        </div>
      </DashboardLayout>
    </>
  );
}
