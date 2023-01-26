# React Template

- [x] eslint, prettier
- [x] craco
- [x] styled-components
  - [x] styled-reset
- [x] axios
- [x] react-router-dom
- [x] recoil

## Usage
### `router`
```typescript
// src/meta/routerMeta.ts
const routerMeta: RouterMetaType = {
  ${Conmonent name}: ${path},
};
```

## Getting Started

#### Install
```
npm i
```
#### Build
```
npm run build
```
#### Start
```
npm start
```
#### env

- Fill out .env for your api key & server url
```
REACT_APP_SERVER_URL = ${your server url}
```

## Directory

```bash
├── public
├── src
│   ├── lib
│   │    ├── api # 서버 통신 함수
│   │    ├── hooks # 커스텀 훅
│   │    ├── services.js # 외부 api 함수
│   │    ├── statics.js # 정적 파일
│   │    ├── styles.js # 스타일링 관련
│   │    └── utils.js # 유틸 함수
│   ├── assets # css, images
│   ├── pages # 페이지 관리
│   ├── containers # 비즈니스 로직 컴포넌트
│   ├── components # Presenter 컴포넌트
│   ├── App.js
│   └── index.js
└── ....etc
```