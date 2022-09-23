
export interface user{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
};

export interface User {
    id: number;
    email: string;
    first_name: string;
  };

export interface AllProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string,
    },
    images: string[]
}