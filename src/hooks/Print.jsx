import { useState } from 'react';
import { useReactToPrint } from 'react-to-print';

export const usePrintResume = (componentRef, formData) => {
  const [isPrinting, setIsPrinting] = useState(false);
  const [printInstructions, setPrintInstructions] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: formData?.header?.fullName 
      ? `${formData.header.fullName.replace(/\s+/g, '_')}_Resume` 
      : 'Resume',
    onBeforeGetContent: () => {
      const originalTitle = document.title;
      
      document.title = formData?.header?.fullName 
        ? `${formData.header.fullName} - Resume` 
        : 'Resume';
        
      setIsPrinting(true);
      return new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    },
    onAfterPrint: () => {
      setIsPrinting(false);
      setPrintInstructions(false);
      
      document.title = "Resume Builder";
    },
    onPrintError: (error) => {
      console.error("Print error", error);
      setIsPrinting(false);
    }
  });

  const printWithInstructions = () => {
    setPrintInstructions(true);
    setTimeout(() => {
      handlePrint();
    }, 500);
  };

  return {
    isPrinting,
    printInstructions,
    handlePrint,
    printWithInstructions
  };
};