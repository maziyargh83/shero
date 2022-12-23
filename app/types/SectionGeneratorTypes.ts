type generateType = "number" | "dots" | "dashed" | "none";
export interface SectionGeneratorType {
  title?: string;
  sectionData?: string;
  generateType?: generateType;
  child?: SectionGeneratorType[];
}
export interface SectionGeneratorDataType {
  generateType: generateType;
  data: SectionGeneratorType[];
}
