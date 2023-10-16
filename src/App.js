import React from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import { useState } from 'react'
import { useMemo } from  'react'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aa', body: 'bb'},
    {id: 2, title: 'bb', body: 'zz'},
    {id: 3, title: 'zz', body: 'aa'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))];
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  //Получаем post из дочернего компонента
  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск'
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {sortedAndSearchedPost.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPost} title='Список постов 1'/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
      </h1>
      }
    </div>
  );
}

export default App;
