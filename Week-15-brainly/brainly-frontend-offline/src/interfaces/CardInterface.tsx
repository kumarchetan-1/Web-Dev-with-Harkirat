
export interface CardInterface{
    title: string,
    type: "twitter" | "youtube",
    link: string,
    customClass?: string,
    _id?: string,
    onDelete?: ()=>void
}