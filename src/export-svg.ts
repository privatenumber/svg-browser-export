const loadImage = (imageUrl: string) => new Promise<HTMLImageElement>(
	(resolve) => {
		const image = new Image();
		image.addEventListener(
			'load',
			() => resolve(image),
			{ once: true },
		);
		image.src = imageUrl;
	},
);

// https://stackoverflow.com/a/28545631/911407
type exportFormats = 'png' | 'jpeg' | 'bmp' | 'ico' | 'webp';

const exportImageAsBitmap = (
	image: HTMLImageElement,
	exportFormat: exportFormats = 'png',
) => {
	const canvas = document.createElement('canvas');
	canvas.width = image.width;
	canvas.height = image.height;

	const context = canvas.getContext('2d');
	context!.drawImage(image, 0, 0, image.width, image.height);

	return canvas.toDataURL(`image/${exportFormat}`);
};

export async function exportSvg(
	svgString: string,
	exportFormat: exportFormats,
	scale?: number,
) {
	const svgBlob = new Blob([svgString], {
		type: 'image/svg+xml',
	});
	const svgUrl = URL.createObjectURL(svgBlob);
	const image = await loadImage(svgUrl);
	URL.revokeObjectURL(svgUrl);

	if (scale) {
		image.width *= scale;
		image.height *= scale;
	}

	return exportImageAsBitmap(image, exportFormat);
}
