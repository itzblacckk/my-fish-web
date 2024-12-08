export interface Fish {
  id: string;
  name: string;
  strain: string;
  age: string;
  price: {
    min: number;
    max: number;
  };
  images: string[];
  description: string;
  specifications: Record<string, string>;
  availability: boolean;
  careGuide: string;
  breedingTips: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  fishInquiry: string;
  message: string;
}