export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  isNew?: boolean;
  category?: string;
  description?: string;
  instructions?: string;
  controls?: { [key: string]: string };
}