export interface AuthProviderProps {
  token: any;
  isAuthenticated: boolean;
  authenticate: (token: any) => void;
  logout: () => void;
  createUser: (email: string, password: string, displayName: string) => void;
  login: (email: string, password: string) => void;
  storageLoginLoad: boolean
}

export interface childrenProps {
  children: React.ReactNode;
}

export interface NavigationProp {
  navigation: any;
}

export interface LoginProps extends NavigationProp {}

export interface SignupProps extends NavigationProp {}

export interface HomeProps extends NavigationProp {}

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

export interface LoadingProps {
  message: string;
}
