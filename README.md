# React Boilerplate
> 2023-01-26

- [x] typescript
- [x] eslint, prettier
- [x] craco
- [x] styled-components
- [x] axios
- [x] react-router-dom
- [x] React.lazy & Suspense

## Usage
#### router

- `페이지 컴포이름: 경로` 추가하면 동적 라우터 생성

```javascript
// src/lib/routerMeta.ts
const routerMeta: RouterMetaType = {
  ${Component name}: ${path},
};
```

#### 토큰 클래스
```javascript
// example
import token from "lib/token";

token.getToken(key)
token.setToken(key, token)
token.removeToken(key)
```

#### palette
```javascript
// Fill out styles/palette.ts for your service colors
export const palette = {
  primary: '',
  secondary: '',
  dark: '#333333',
  darkGrey: '',
  grey: '#f6f7f9',
  white: '#ffffff',
};

// example
import { palette } from 'styles/palette';

export const DarkDiv = styled.div`
  background-color: ${palette.dark};
`;
```

#### craco alias
1. src 하위 폴더 생성
2. tsconfig.paths.json 아래와 같이 추가
```json
"paths": {
  ...
  "new/*": ["new/*"],
}
```

```javascript
// before
import NewComponent from '../../new/NewComponent';

// after
import NewComponent from 'new/NewComponent';
```

#### customAxios

- lib/apis


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
