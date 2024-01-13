export interface ITourData {
    id?: string | number;
    title: string;
    city: string;
    address: string;
    distance: number;
    price: number;
    maxGroupSize: number;
    desc: string;
    reviews: any[];
    photo: string;
    featured: boolean;
}
