export interface Product{
  id: number;
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  online: any;
}

export interface Login{
  data: [
    {
      adminID: number;
      email: string;
      password: string;
    }
  ],
  login: boolean;
  message: string;
}

