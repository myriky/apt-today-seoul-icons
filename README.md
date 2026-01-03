# @apt.today/react-seoul-icons

[![npm version](https://img.shields.io/npm/v/@apt.today/react-seoul-icons.svg?style=flat-square)](https://www.npmjs.com/package/@apt.today/react-seoul-icons)
[![npm downloads](https://img.shields.io/npm/dm/@apt.today/react-seoul-icons.svg?style=flat-square)](https://www.npmjs.com/package/@apt.today/react-seoul-icons)
[![GitHub stars](https://img.shields.io/github/stars/myriky/apt-today-react-seoul-icons.svg?style=flat-square)](https://github.com/myriky/apt-today-react-seoul-icons)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Custom-orange.svg?style=flat-square)](./LICENSE)

![Seoul Icons Preview](https://myriky.github.io/apt-today-react-seoul-icons/preview.png)

서울시 25개 행정구 아이콘을 React 컴포넌트로 제공하는 라이브러리입니다.

🌐 [데모 페이지](https://myriky.github.io/apt-today-react-seoul-icons/)

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

### 전체 Import (네임스페이스)

```tsx
import * as SeoulIcons from "@apt.today/react-seoul-icons";

function App() {
  return (
    <div>
      <SeoulIcons.GangnamGu width={48} />
      <SeoulIcons.JongnoGu className="w-12 h-12" />
    </div>
  );
}
```

### 동적 아이콘 렌더링 (컴포넌트 이름 기반)

```tsx
import * as SeoulIcons from "@apt.today/react-seoul-icons";

const districts = ["GangnamGu", "MapoGu", "JongnoGu"];

function App() {
  return (
    <div className="flex gap-4">
      {districts.map((name) => {
        const Icon = SeoulIcons[name as keyof typeof SeoulIcons] as React.FC<
          React.SVGProps<SVGSVGElement>
        >;
        return <Icon key={name} width={48} height={48} />;
      })}
    </div>
  );
}
```

### 행정구역 코드로 아이콘 가져오기 ⭐

```tsx
import { getIconByCode } from "@apt.today/react-seoul-icons";

function App() {
  const GangnamIcon = getIconByCode(11680); // 강남구
  const JungIcon = getIconByCode(11140); // 중구

  return (
    <div>
      {GangnamIcon && <GangnamIcon width={48} height={48} />}
      {JungIcon && <JungIcon width={48} height={48} />}
    </div>
  );
}
```

### 이름으로 아이콘 가져오기

```tsx
import { getIconByName } from "@apt.today/react-seoul-icons";

// 다양한 형식 지원
const Icon1 = getIconByName("강남구"); // ✅
const Icon2 = getIconByName("강남"); // ✅
const Icon3 = getIconByName("서울특별시 강남구"); // ✅
const Icon4 = getIconByName("서울 강남구"); // ✅

// 중복되는 이름(중구 등)은 region 옵션 필요
const SeoulJung = getIconByName("중구", { region: "서울" }); // ✅
const BusanJung = getIconByName("중구", { region: "부산" }); // ✅ (추후 지원)
```

### 모든 지역 정보 가져오기

```tsx
import {
  getAllDistrictInfo,
  getDistrictsByRegion,
} from "@apt.today/react-seoul-icons";

// 모든 지역 정보
const allDistricts = getAllDistrictInfo();

// 서울시만 가져오기
const seoulDistricts = getDistrictsByRegion("서울");

function App() {
  return (
    <div>
      {seoulDistricts.map((district) => {
        const Icon = district.component;
        return (
          <div key={district.code}>
            <Icon width={48} height={48} />
            <span>{district.name}</span>
            <code>{district.code}</code>
          </div>
        );
      })}
    </div>
  );
}
```

## API 레퍼런스

### 아이콘 가져오기

| 함수                            | 설명                            | 반환 타입                             |
| ------------------------------- | ------------------------------- | ------------------------------------- |
| `getIconByCode(code)`           | 행정구역 코드로 아이콘 가져오기 | `Component \| undefined`              |
| `getIconByName(name, options?)` | 이름으로 아이콘 가져오기        | `Component \| undefined`              |
| `getDistrictInfo(code)`         | 행정구역 코드로 정보 가져오기   | `DistrictInfo \| undefined`           |
| `getNameByCode(code)`           | 행정구역 코드로 이름 가져오기   | `string \| undefined`                 |
| `getAllDistrictInfo()`          | 모든 지역 정보 가져오기         | `readonly DistrictInfo[]`             |
| `getDistrictsByRegion(region)`  | 특정 시/도의 지역 정보          | `DistrictInfo[]`                      |
| `getAllCodes()`                 | 모든 행정구역 코드 목록         | `number[]`                            |
| `isValidCode(code)`             | 유효한 코드인지 확인            | `boolean`                             |

### 타입

```tsx
import type {
  RegionCode, // "서울" | "부산" | "대구" | ...
  SeoulGuCode, // 11110 | 11140 | ...
  DistrictInfo, // 지역 정보 객체
  SeoulGuIconComponent, // SVG 컴포넌트 타입
  GetIconByNameOptions, // { region?: RegionCode }
} from "@apt.today/react-seoul-icons";
```

### DistrictInfo 타입

```tsx
interface DistrictInfo {
  code: number; // 행정구역 코드 (예: 11680)
  region: RegionCode; // 시/도 (예: "서울")
  regionFullName: string; // 시/도 전체 이름 (예: "서울특별시")
  name: string; // 구 이름 (예: "강남구")
  shortName: string; // 짧은 이름 (예: "강남")
  component: SeoulGuIconComponent; // React 컴포넌트
}
```

## 행정구역 코드표

| 코드    | 행정구   | 컴포넌트명       |
| ------- | -------- | ---------------- |
| `11110` | 종로구   | `JongnoGu`       |
| `11140` | 중구     | `JungGu`         |
| `11170` | 용산구   | `YongsanGu`      |
| `11200` | 성동구   | `SeongdongGu`    |
| `11215` | 광진구   | `GwangjinGu`     |
| `11230` | 동대문구 | `DongdaemunGu`   |
| `11260` | 중랑구   | `JungnangGu`     |
| `11290` | 성북구   | `SeongbukGu`     |
| `11305` | 강북구   | `GangbukGu`      |
| `11320` | 도봉구   | `DobongGu`       |
| `11350` | 노원구   | `NowonGu`        |
| `11380` | 은평구   | `EunpyeongGu`    |
| `11410` | 서대문구 | `SeodaemunGu`    |
| `11440` | 마포구   | `MapoGu`         |
| `11470` | 양천구   | `YangcheonGu`    |
| `11500` | 강서구   | `GangseoGu`      |
| `11530` | 구로구   | `GuroGu`         |
| `11545` | 금천구   | `GeumcheonGu`    |
| `11560` | 영등포구 | `YeongdeungpoGu` |
| `11590` | 동작구   | `DongjakGu`      |
| `11620` | 관악구   | `GwanakGu`       |
| `11650` | 서초구   | `SeochoGu`       |
| `11680` | 강남구   | `GangnamGu`      |
| `11710` | 송파구   | `SongpaGu`       |
| `11740` | 강동구   | `GangdongGu`     |

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

### API 응답에서 동적으로 사용

```tsx
import { getIconByCode, getIconByName } from "@apt.today/react-seoul-icons";

// API에서 행정구역 코드를 받은 경우
function DistrictIcon({ code }: { code: number }) {
  const Icon = getIconByCode(code);
  if (!Icon) return null;
  return <Icon width={48} height={48} />;
}

// API에서 지역명을 받은 경우
function DistrictIconByName({ name }: { name: string }) {
  // "서울특별시 강남구" 같은 형식도 OK
  const Icon = getIconByName(name);
  if (!Icon) return null;
  return <Icon width={48} height={48} />;
}
```

### 지역 목록 렌더링

```tsx
import { getAllDistrictInfo } from "@apt.today/react-seoul-icons";

function DistrictList() {
  const districts = getAllDistrictInfo();

  return (
    <div className="grid grid-cols-5 gap-4">
      {districts.map((district) => (
        <div key={district.code} className="flex flex-col items-center">
          <district.component className="w-12 h-12" />
          <span>{district.name}</span>
        </div>
      ))}
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
