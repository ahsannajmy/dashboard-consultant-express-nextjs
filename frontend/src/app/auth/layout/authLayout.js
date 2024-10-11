export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="hidden sm:block bg-primary w-2/3 h-screen">
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-6xl text-secondary shadow-sm font-bold">
              ConsultHub
            </span>
            <span className="text-lg text-secondary">
              Handle your team and consultant projects here
            </span>
          </div>
        </div>
        <div className="bg-secondary w-full sm:w-1/3 h-screen">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-6 items-center">
              <div className="sm:hidden flex flex-col items-center">
                <span className="text-4xl text-primary font-bold text-center text-wrap">
                  ConsultHub
                </span>
                <span className="text-sm text-primar text-wrap text-center font-medium">
                  Handle your team and consultant projects here
                </span>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
