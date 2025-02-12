import { PDFDocument } from "./core";
import { Stream } from "./stream";

export class LocalPdfManager {
  public stream: Stream;
  public pdfModel: PDFDocument;

  constructor (data: ArrayBuffer | ArrayBufferLike | Buffer) {
    this.stream = new Stream(data);
    this.pdfModel = new PDFDocument(this, this.stream);
  }

  async ensure (obj: any, prop: string, args?: any[]) {
    let value = obj[prop];

    if (typeof(value) === "function") {
      value = value.apply(obj, args);
    }

    return value;
  }

  async onLoadedStream () {
    return this.stream;
  }

  // @ts-expect-error
  ensureModel (prop, args) {
    return this.ensure(this.pdfModel, prop, args);
  }

  // @ts-expect-error
  ensureXRef (prop, args) {
    return this.ensure(this.pdfModel.xref, prop, args);
  }

  // @ts-expect-error
  ensureCatalog (prop, args) {
    return this.ensure(this.pdfModel.catalog, prop, args);
  }

  getPage (pageIndex: number) {
    return this.pdfModel.getPage(pageIndex);
  }

  cleanup () {
    return this.pdfModel.cleanup();
  }
}
