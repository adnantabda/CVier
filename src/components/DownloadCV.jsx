import React from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const downloadPDF = () => {
  const content = document.getElementById('content');

  if (!content) {
    console.error("Content element not found");
    return;
  }

  html2canvas(content, { logging: true, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    if (!imgData) {
      console.error("Image data not found");
      return;
    }

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('download.pdf');
  }).catch(error => {
    console.error("Error generating PDF: ", error);
  });
};

export function DownloadPdf() {
  return (
    <div>
      <button onClick={downloadPDF} id="download">Download as PDF</button>
    </div>
  );
}
