declare module "imagetracerjs" {
  interface ImageTracerOptions {
    ltres?: number;
    qtres?: number;
    pathomit?: number;
    colorsampling?: number;
    numberofcolors?: number;
    mincolorratio?: number;
    colorquantcycles?: number;
    scale?: number;
    linefilter?: boolean;
    rightangleenhance?: boolean;
    viewbox?: boolean;
    desc?: boolean;
  }

  const ImageTracer: {
    imagedataToSVG(
      imageData: ImageData,
      options?: ImageTracerOptions,
    ): string;
    imageToSVG(
      url: string,
      callback: (svg: string) => void,
      options?: ImageTracerOptions,
    ): void;
  };

  export default ImageTracer;
}
