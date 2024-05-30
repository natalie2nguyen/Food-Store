export class Food{
    // required class has exclamation after it 
    // optional class has question mark after it
    id!:  string;
    name!: string;
    price!: number;
    tags?: string[];
    favorite!: boolean;
    stars!: number;
    imageURL!: string;
    origins!: string[];
    cookTime!: string;
}