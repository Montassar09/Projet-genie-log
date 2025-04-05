function downloadFile() {
    const fileUrl = 'imgs/e.jpg'; // Change this to your file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'e.jpg'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}