const loadImage = (imageUrl) => new Promise((resolve) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image), { once: true });
    image.src = imageUrl;
});
const exportImageAsBitmap = (image, exportFormat = 'png') => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    return canvas.toDataURL(`image/${exportFormat}`);
};
export async function exportSvg(svgString, exportFormat, scale) {
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
