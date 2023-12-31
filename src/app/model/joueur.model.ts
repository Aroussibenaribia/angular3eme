import { Label } from "./label.model";
import { Image } from "./image.model";

export class Joueur {
  idJoueur!: number;
  title!: string;
  artist!: string;
  releaseDate!: Date;
  genre!: string;
  label!: Label;
  image! : Image
  imageStr!:string
}
