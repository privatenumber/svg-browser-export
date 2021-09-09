declare type exportFormats = 'png' | 'jpeg' | 'bmp' | 'ico' | 'webp';
export declare function exportSvg(svgString: string, exportFormat: exportFormats, scale?: number): Promise<string>;
export {};
