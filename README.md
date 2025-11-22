# @apt.today/react-seoul-icons

[![npm version](https://img.shields.io/npm/v/@apt.today/react-seoul-icons.svg?style=flat-square)](https://www.npmjs.com/package/@apt.today/react-seoul-icons)
[![npm downloads](https://img.shields.io/npm/dm/@apt.today/react-seoul-icons.svg?style=flat-square)](https://www.npmjs.com/package/@apt.today/react-seoul-icons)
[![GitHub stars](https://img.shields.io/github/stars/myriky/apt-today-seoul-icons.svg?style=flat-square)](https://github.com/myriky/apt-today-seoul-icons)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Custom-orange.svg?style=flat-square)](./LICENSE)

![Seoul Icons Preview](https://myriky.github.io/apt-today-seoul-icons/preview.png)

서울시 25개 행정구 아이콘을 React 컴포넌트로 제공하는 라이브러리입니다.

🌐 [데모 페이지](https://myriky.github.io/apt-today-seoul-icons/)

## 설치

```bash
npm install @apt.today/react-seoul-icons
```

또는

```bash
yarn add @apt.today/react-seoul-icons
```

## 사용법

### 개별 컴포넌트 Import

```tsx
import { GangnamGu, JongnoGu, MapoGu } from "@apt.today/react-seoul-icons";

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
import * as SeoulIcons from "@apt.today/react-seoul-icons";

function App() {
  return <SeoulIcons.GangnamGu className="w-12 h-12" />;
}
```

## 지원하는 행정구

| 컴포넌트명       | 행정구   |
| ---------------- | -------- |
| `DobongGu`       | 도봉구   |
| `DongdaemunGu`   | 동대문구 |
| `DongjakGu`      | 동작구   |
| `EunpyeongGu`    | 은평구   |
| `GangbukGu`      | 강북구   |
| `GangdongGu`     | 강동구   |
| `GangnamGu`      | 강남구   |
| `GangseoGu`      | 강서구   |
| `GeumcheonGu`    | 금천구   |
| `GuroGu`         | 구로구   |
| `GwanakGu`       | 관악구   |
| `GwangjinGu`     | 광진구   |
| `JongnoGu`       | 종로구   |
| `JungGu`         | 중구     |
| `JungnangGu`     | 중랑구   |
| `MapoGu`         | 마포구   |
| `NowonGu`        | 노원구   |
| `SeochoGu`       | 서초구   |
| `SeodaemunGu`    | 서대문구 |
| `SeongbukGu`     | 성북구   |
| `SeongdongGu`    | 성동구   |
| `SongpaGu`       | 송파구   |
| `YangcheonGu`    | 양천구   |
| `YeongdeungpoGu` | 영등포구 |
| `YongsanGu`      | 용산구   |

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
import { GangnamGu } from "@apt.today/react-seoul-icons";

function Example() {
  return <GangnamGu className="w-16 h-16 text-blue-500 hover:text-blue-700" />;
}
```

### 동적 아이콘 렌더링

```tsx
import * as SeoulIcons from "@apt.today/react-seoul-icons";

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

### 아이콘 저작권

본 라이브러리의 아이콘은 서울특별시 각 자치구청의 공식 심볼/로고로, 공공누리 제1유형(출처표시)에 따라 자유롭게 이용할 수 있습니다.

### 라이브러리 코드

본 라이브러리의 소스 코드는 MIT 라이선스를 따릅니다.

자세한 내용은 [LICENSE](./LICENSE) 파일을 참고하세요

## About apt.today

이 라이브러리는 [apt.today](https://apt.today) 프로젝트의 일부입니다.

**apt.today**는 부동산 정보를 제공하는 서비스로, 서울특별시 지자체별 고시공고문, 모집공고문, 토지거래허가내역을 비롯한 다양한 아파트 관련 정보를 확인 할 수 있는 플랫폼입니다.

본 아이콘 라이브러리는 apt.today 서비스에서 서울시 각 행정구의 데이터를 시각적으로 표현하기 위해 개발되었으며, 누구나 자유롭게 사용할 수 있도록 오픈소스로 공개되었습니다.

### 관련 프로젝트

- 🏢 [apt.today](https://apt.today) - 손 쉽게 찾는 부동산 정보, 오늘의 아파트

## 기여

이슈 제보 및 풀 리퀘스트는 언제나 환영합니다!
