export type LogType = Record<
  string,
  {
    svg: () => JSX.Element;
  }
>;
