import jsonPlaceHolder from '../APIs/jsonPlaceHolder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ type: 'FETCH_POST', payload: response })
}
