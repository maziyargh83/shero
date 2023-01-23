export const DownloadWrapper = ({
  children,
  icon,
}: {
  children: JSX.Element[] | JSX.Element;
  icon: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div className="flex items-center rtl:flex-row-reverse">
      <div className="px-3">{children}</div>
      <div className="border-l border-gray-G7 px-3">{icon}</div>
    </div>
  );
};
