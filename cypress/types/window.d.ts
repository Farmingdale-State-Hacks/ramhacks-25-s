// Augment the Window interface for custom properties we might have in our application
interface Window {
  // Add any custom window properties here that our app might use
  // For example:
  ramhacksData?: {
    name: string;
    date: string;
    location: string;
    participants: number;
    sections: string[];
    contacts: {
      sponsor: string;
      registration: string;
    };
  };

  // For analytics or other global objects
  dataLayer?: any[];
  ga?: Function;
}
