# react-seoul-icons

서울시 25개 행정구 아이콘을 React 컴포넌트로 제공하는 라이브러리입니다.

## 설치

```bash
npm install react-seoul-icons
```

또는

```bash
yarn add react-seoul-icons
```

## 사용법

### 개별 컴포넌트 Import

```tsx
import { GangnamGu, JongnoGu, MapoGu } from "react-seoul-icons";

function App() {
  return (
    <div>
      <GangnamGu className="w-12 h-12" />
      <JongnoGu style={{ width: 48, height: 48 }} />
      <MapoGu width={48} height={48} />
    </div>
  );
}
```

### 모든 컴포넌트 Import

```tsx
import * as SeoulIcons from "react-seoul-icons";

function App() {
  return <SeoulIcons.GangnamGu className="w-12 h-12" />;
}
```

## 지원하는 행정구

| 컴포넌트명 | 행정구 |
|------------|--------|
| `DobongGu` | 도봉구 |
| `DongdaemunGu` | 동대문구 |
| `DongjakGu` | 동작구 |
| `EunpyeongGu` | 은평구 |
| `GangbukGu` | 강북구 |
| `GangdongGu` | 강동구 |
| `GangnamGu` | 강남구 |
| `GangseoGu` | 강서구 |
| `GeumcheonGu` | 금천구 |
| `GuroGu` | 구로구 |
| `GwanakGu` | 관악구 |
| `GwangjinGu` | 광진구 |
| `JongnoGu` | 종로구 |
| `JungGu` | 중구 |
| `JungnangGu` | 중랑구 |
| `MapoGu` | 마포구 |
| `NowonGu` | 노원구 |
| `SeochoGu` | 서초구 |
| `SeodaemunGu` | 서대문구 |
| `SeongbukGu` | 성북구 |
| `SeongdongGu` | 성동구 |
| `SongpaGu` | 송파구 |
| `YangcheonGu` | 양천구 |
| `YeongdeungpoGu` | 영등포구 |
| `YongsanGu` | 용산구 |

## Props

모든 컴포넌트는 SVG 요소의 표준 props를 지원합니다:

```tsx
interface IconProps extends React.SVGProps<SVGSVGElement> {}
```

일반적으로 사용되는 props:
- `className`: CSS 클래스명
- `style`: 인라인 스타일
- `width`: 너비
- `height`: 높이
- `fill`: 색상 (일부 아이콘은 고정 색상)
- `onClick`: 클릭 이벤트 핸들러

## 예제

### Tailwind CSS와 함께 사용

```tsx
import { GangnamGu } from "react-seoul-icons";

function Example() {
  return (
    <GangnamGu className="w-16 h-16 text-blue-500 hover:text-blue-700" />
  );
}
```

### 동적 아이콘 렌더링

```tsx
import * as SeoulIcons from "react-seoul-icons";

const districts = ["GangnamGu", "MapoGu", "JongnoGu"];

function Example() {
  return (
    <div className="flex gap-4">
      {districts.map((district) => {
        const Icon = SeoulIcons[district as keyof typeof SeoulIcons];
        return <Icon key={district} className="w-12 h-12" />;
      })}
    </div>
  );
}
```

## 라이선스

MIT

## 기여

이슈 제보 및 풀 리퀘스트는 언제나 환영합니다!

