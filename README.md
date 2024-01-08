# @lasbe/react-scroll-animation

손쉽게 스크롤 애니메이션을 구현할 수 있는 리액트 컴포넌트 패키지입니다.  
[Github Repository](https://github.com/LasBe-code/react-scroll-animation)  
[NPM](https://www.npmjs.com/package/@lasbe/react-scroll-animation)  
[CodeSandbox 사용 예제](https://codesandbox.io/s/sharp-herschel-sgvnhq?file=/src/App.tsx)

### install

```bash
$ npm i @lasbe/react-scroll-animation
```

### `<ScrollAnimation />` Props

|   **Name**    | **Value**                                      | **Default Value** | **description**                                                                        |
| :-----------: | ---------------------------------------------- | :---------------: | -------------------------------------------------------------------------------------- |
| startingPoint | `'top'` or `'right'` or `'bottom'` or `'left'` |      `'top'`      | 애니메이션 시작 지점입니다.                                                            |
|   duration    | `number`                                       |       `0.5`       | 애니메이션 지속시간입니다. 단위는 '초'이며 0보다 작을 수 없습니다.                     |
|    amount     | `number`                                       |       `100`       | 애니메이션 움직임의 양입니다. 단위는 px이며, 0보다 작을 수 없습니다.                   |
|     delay     | `number`                                       |        `0`        | 스크롤 감지 후 애니메이션 실행 지연시간입니다. 단위는 '초'이며 0보다 작을 수 없습니다. |
|    repeat     | `boolean`                                      |      `false`      | 범위를 벗어났을 때 애니메이션 재적용 여부입니다.                                       |
|    ...rest    | `React.ComponentProps<'div'>`                  |         -         | 기본적인 div HTML Element properties를 사용해 요소를 핸들링할 수 있습니다.             |

### 사용 방법

`ScrollAnimation`을 감싸주기만 하면 감싸진 요소가 사용자 화면 안에 들어올 때 애니메이션이 트리거 됩니다.

```javascript
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

function App() {
  return (
    <div>
      <ScrollAnimation>
        <div>요소1</div>
      </ScrollAnimation>
      <ScrollAnimation startingPoint="right" amount={300} duration={1} duration={1} repeat={true}>
        <div>요소2</div>
      </ScrollAnimation>
    </div>
  );
}

export default App;
```
