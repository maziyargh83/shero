interface MainProps {
  children: JSX.Element;
}
export const Main = ({ children }: MainProps) => {
  return <main className="container mx-auto">{children}</main>;
};
