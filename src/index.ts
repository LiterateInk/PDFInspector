import type { Page } from "./converter/types";
import PDF from "./converter/pdf";

export const parsePDF = async (buffer: ArrayBuffer | ArrayBufferLike | Buffer): Promise<Page[]> => {
  const pdf = new PDF();
  await pdf.parse(buffer);

  return pdf.pages;
};

export type { Page, Fill, Text } from "./converter/types";
export { kColors, kFontFaces, kFontStyles } from "./converter/pdfconst";
