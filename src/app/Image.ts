export interface Image {
    _id: string,
    title: string,
    description: string,
    filename: string,
    path: string,
    originalName: string,
    mimetype: string,
    size: number,
    likes: number,
    comments: [],
    created_at: Date
}