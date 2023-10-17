import React from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import { useState } from 'react'
import { useMemo } from  'react'
import PostFilter from './components/PostFilter'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'bb'},
    {id: 2, title: 'bb', body: 'zz'},
    {id: 3, title: 'zz', body: 'aa'}
  ])
  const [filter, setFilter] = useState({sort: '', query: ''});

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts.sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))];
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //Получаем post из дочернего компонента
  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts={sortedAndSearchedPost} title='Список постов 1'/>
    </div>
  );
}

export default App;
