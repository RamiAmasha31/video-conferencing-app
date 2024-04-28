import React from 'react';

const PDFHistory = ({ pdfList }) => {
  const handleDownload = (pdfUrl) => {
    // Function to trigger download of PDF file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'filename.pdf';
    link.click();
  };

  return (
    <div>
      <h2>PDF History</h2>
      <ul>
        {pdfList.map((pdf, index) => (
          <li key={index} onClick={() => handleDownload(pdf.url)}>
            {pdf.name} - {pdf.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFHistory;
