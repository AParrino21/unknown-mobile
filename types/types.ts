export interface LoginProps {
  navigation: any;
}

export interface HomeProps {
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

export interface Comments {
  id: string;
  commentAuthor: string;
  commentData: string;
  commentDate: string;
  commentReactions: number;
}

export interface CommentModalProps {
  openViewComments: boolean;
  setOpenViewComments: (open: boolean) => void;
  viewedComment: PostData[];
  setViewedComment: (value: PostData[]) => void;
}
