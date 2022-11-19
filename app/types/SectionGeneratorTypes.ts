type generateType = "number" | "dots";
export interface SectionGeneratorType {
  title?: string;
  sectionData?: string;
  generateType?: generateType;
}
export interface SectionGeneratorDataType {
  generateType: generateType;
  data: SectionGeneratorType[];
}
