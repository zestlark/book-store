async function fetchPdf(url, element) {
    let auth = localStorage.getItem('auth');

    const pdf = await pdfjsLib.getDocument(url).promise;
    let pagelenght = auth == "true" ? pdf.numPages : 3
    for (let pageNum = 1; pageNum <= pagelenght; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const scale = 1;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };

        await page.render(renderContext).promise;
        document.getElementById(element).appendChild(canvas);
    }
}