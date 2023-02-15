# react-prac-todoList-lv2
## 📅 schedule
- 2022 Feb 13 :
  - Project 시작
  - todoList-lv1 가져오기(https://github.com/JellyKingdom/react-prac-todoList-lv1)
  - 패키지 설치 (styled-components, redux, react-router-dom)
  - 폴더구조 잡기
  - styled-components 적용(우선 각각의 컴포넌트에 적용해보기)
  - 리덕스 적용해보기
  - react-router-dom 적용해서 상세페이지 만들기!

- 2022 Feb 14 :
  - 상세페이지 css 적용

## 🗂 src -> app.js
- pages 폴더의 TodoList.jsx
- Router와 연결
## 🗂 src -> pages
- TodoList.jsx : components 폴더의 Layout, TodoForm, TodoItems
- Details.jsx : Todo에서 넘어오는 상세페이지
## 🗂 src -> components
- Layout
  - 전체 틀 및 헤더
- TodoForm
  - insert Form 컴포넌트
- TodoItems
  - working 과 done을 나눠주고, Todo가 리스팅 되는 부분 컴포넌트
  - Todo와 연결
- Todo
  - 각각의 Todo
## 🗂 src -> redux
- 리덕스와 관련된 코드를 모두 모아놓을 폴더
## 🗂 src -> redux -> config
- 리덕스 설정과 관련된 파일들을 놓을 폴더
- configStore.js -> store를 만드는 설정 코드들이 있는 파일
## 🗂 src -> redux -> modules
- state들의 그룹
- todos.js -> todoList의 state들(create, update, delete)
## 🗂 src -> shared
- Router.js : 
  - URL 1개당 페이지 컴포넌트를 매칭해주는 것, 이 한개의 URL을 Route라고 한다.
  - Router.js는 Route들을 설정하는 코드!
## 제한사항
- id값에 todos.length 넣지않기. (lv-1에서 해결 했습니다, 참고:https://github.com/JellyKingdom/react-prac-todoList-lv1)
  - id값에 todos.length + 1을 넣으니, id값 중복 발생
  - ex) id값이 [1,2,3,4,5] 일때 배열의 length는 5, 3,4을 삭제하면 [1,2,5], 배열의 length는 3! 두개의 카드를 더 추가하면 [1,2,5,4,5]가 됨! 아이디값 5가 중복!!
  - 배열의 길이 말고, id값의 제일 마지막 값(max값) + 1을 해줌
