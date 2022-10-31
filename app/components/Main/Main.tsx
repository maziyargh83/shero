interface MainProps {
  children: JSX.Element;
}
export const Main = ({ children }: MainProps) => {
  return (
    <main className="container mx-auto md:overflow-visible overflow-x-hidden px-5 md:px-0">
      {children}
    </main>
  );
};
