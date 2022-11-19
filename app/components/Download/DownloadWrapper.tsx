export const DownloadWrapper = ({
  children,
  icon,
}: {
  children: JSX.Element[] | JSX.Element;
  icon: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="flex items-center ">
      <div className="pr-3">{children}</div>
      <div className="border-l border-gray-G7 pl-3">{icon}</div>
    </div>
  );
};
