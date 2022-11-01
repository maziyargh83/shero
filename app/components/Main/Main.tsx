interface MainProps {
  children: JSX.Element;
}
export const Main = ({ children }: MainProps) => {
  return <main className="container mx-auto px-5 md:px-0 ">{children}</main>;
};
