const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It`s my first message', likesCount: 15},
    {id: 3, message: 'Hoooo', likesCount: 3},
  ],
  newPostText: 'CyberShaman'
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {id: 8, message: state.newPostText,likesCount: 0}
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText : ''
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText : action.newText
      }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;