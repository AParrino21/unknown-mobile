export interface LoginProps {
  navigation: any;
}

export interface PostData {
  id: string;
  postData: string;
  author: string | null | undefined;
  date: string;
  reactions: { bs: number; real: number };
  comments: {
    id: string;
    commentAuthor: string;
    commentData: string;
    commentDate: string;
    commentReactions: number;
  }[];
}