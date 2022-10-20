export class ProductItemModel
{
    img: string;
    desc: string;
    cardTitle: string;
    link: string;

    constructor(img: string, desc: string, cardTitle: string, link: string)
    {
    this.img = img;
    this.desc = desc;
    this.cardTitle = cardTitle;
    this.link = link;
    }

}