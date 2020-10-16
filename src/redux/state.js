import { reranderEntireTree } from '../render';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you', likesCount: 13 },
      { id: 2, message: "It's my first post", likesCount: 12 },
      { id: 3, message: 'Hi, how are you2', likesCount: 13 },
      { id: 4, message: "It's my first post2", likesCount: 12 },
    ],
    newPostText: 'Replace this text',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Sasha' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Valera' },
      { id: 5, name: 'Roma' },
      { id: 6, name: 'Fedya' },
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'no' },
      { id: 3, message: 'yes' },
      { id: 4, message: 'do' },
      { id: 5, message: 'homework' },
      { id: 6, message: 'I am' },
    ],
  },
  sidebar: {},
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  reranderEntireTree(state);
  state.profilePage.newPostText = '';
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reranderEntireTree(state);
};

export default state;
