import Papa from 'papaparse';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

export const exportToCSV = (data: ContactSubmission[], filename: string = 'contactmsg.csv') => {
  const csv = Papa.unparse(data, {
    header: true,
    columns: ['id', 'name', 'email', 'subject', 'message', 'created_at']
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const appendToCSV = (newMessage: ContactSubmission, existingData: ContactSubmission[]) => {
  const updatedData = [...existingData, newMessage];
  exportToCSV(updatedData, 'contactmsg.csv');
  return updatedData;
};

export const parseCSV = (file: File): Promise<ContactSubmission[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        if (results.errors.length > 0) {
          reject(results.errors);
        } else {
          resolve(results.data as ContactSubmission[]);
        }
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};

export const importFromCSV = (file: File, callback: (data: ContactSubmission[]) => void) => {
  parseCSV(file)
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error parsing CSV:', error);
      throw error;
    });
};