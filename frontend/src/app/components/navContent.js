import {
  EmployeeIcon,
  HamburgerIcon,
  HomeIcon,
  LogoutIcon,
  ProjectIcon,
} from "./navIcons";
import Link from "next/link";

export const NavSide = (props) => {
  return (
    <>
      <nav
        className={`${
          props.navState ? "" : "hidden"
        } top-16 sm:top-0 fixed sm:relative z-50 sm:flex min-h-screen w-2/3 sm:w-52 bg-primary text-secondary`}
      >
        <div className="py-10 px-4 flex flex-col gap-4 sm:gap-0 h-full w-full sm:justify-between">
          <section>
            <span className="font-semibold text-2xl">ConsultHub</span>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col gap-2 sm:gap-4">
                <NavItem name="Home" icon={HomeIcon} href="/" />
                <NavItem
                  name="Employees"
                  icon={EmployeeIcon}
                  href="/employees"
                />
                <NavItem name="Projects" icon={ProjectIcon} href="/" />
              </div>
            </div>
          </section>
          <section>
            <div className="flex">
              <NavItemLogout
                name="Logout"
                icon={LogoutIcon}
                handler={props.handlerLogout}
              />
            </div>
          </section>
        </div>
      </nav>
    </>
  );
};

export const NavUpper = (props) => {
  return (
    <>
      <nav className="fixed flex items-center w-full h-16 sm:hidden bg-primary text-secondary">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={props.navState ? props.handlerClose : props.handlerOpen}
            >
              <HamburgerIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavItemLogout = ({ name, icon: Icon, handler }) => {
  return (
    <button
      onClick={handler}
      className="bg-transparent hover:bg-secondary text-secondary hover:text-primary
    p-2 rounded-lg flex gap-2 items-center w-full"
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </button>
  );
};

const NavItem = ({ name, icon: Icon, href }) => {
  return (
    <Link
      href={href}
      className="bg-transparent hover:bg-secondary text-secondary hover:text-primary
     p-2 rounded-lg flex gap-2 items-center"
    >
      <Icon className="w-5 h-5" />
      <span>{name}</span>
    </Link>
  );
};
