import * as React from "react";
import {
  DobongGu,
  DongdaemunGu,
  DongjakGu,
  EunpyeongGu,
  GangbukGu,
  GangdongGu,
  GangnamGu,
  GangseoGu,
  GeumcheonGu,
  GuroGu,
  GwanakGu,
  GwangjinGu,
  JongnoGu,
  JungGu,
  JungnangGu,
  MapoGu,
  NowonGu,
  SeochoGu,
  SeodaemunGu,
  SeongbukGu,
  SeongdongGu,
  SongpaGu,
  YangcheonGu,
  YeongdeungpoGu,
  YongsanGu,
} from "../components";

/**
 * 시/도 코드
 */
export type RegionCode =
  | "서울"
  | "부산"
  | "대구"
  | "인천"
  | "광주"
  | "대전"
  | "울산"
  | "세종";

/**
 * 서울시 행정구역 코드
 */
export type SeoulGuCode =
  | 11110 // 종로구
  | 11140 // 중구
  | 11170 // 용산구
  | 11200 // 성동구
  | 11215 // 광진구
  | 11230 // 동대문구
  | 11260 // 중랑구
  | 11290 // 성북구
  | 11305 // 강북구
  | 11320 // 도봉구
  | 11350 // 노원구
  | 11380 // 은평구
  | 11410 // 서대문구
  | 11440 // 마포구
  | 11470 // 양천구
  | 11500 // 강서구
  | 11530 // 구로구
  | 11545 // 금천구
  | 11560 // 영등포구
  | 11590 // 동작구
  | 11620 // 관악구
  | 11650 // 서초구
  | 11680 // 강남구
  | 11710 // 송파구
  | 11740; // 강동구

export type SeoulGuIconComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement>
>;

export interface DistrictInfo {
  code: number;
  region: RegionCode;
  regionFullName: string; // "서울특별시", "부산광역시" 등
  name: string; // 강남구
  shortName: string; // 강남
  component: SeoulGuIconComponent;
}

const districtData: DistrictInfo[] = [
  {
    code: 11110,
    region: "서울",
    regionFullName: "서울특별시",
    name: "종로구",
    shortName: "종로",
    component: JongnoGu,
  },
  {
    code: 11140,
    region: "서울",
    regionFullName: "서울특별시",
    name: "중구",
    shortName: "중",
    component: JungGu,
  },
  {
    code: 11170,
    region: "서울",
    regionFullName: "서울특별시",
    name: "용산구",
    shortName: "용산",
    component: YongsanGu,
  },
  {
    code: 11200,
    region: "서울",
    regionFullName: "서울특별시",
    name: "성동구",
    shortName: "성동",
    component: SeongdongGu,
  },
  {
    code: 11215,
    region: "서울",
    regionFullName: "서울특별시",
    name: "광진구",
    shortName: "광진",
    component: GwangjinGu,
  },
  {
    code: 11230,
    region: "서울",
    regionFullName: "서울특별시",
    name: "동대문구",
    shortName: "동대문",
    component: DongdaemunGu,
  },
  {
    code: 11260,
    region: "서울",
    regionFullName: "서울특별시",
    name: "중랑구",
    shortName: "중랑",
    component: JungnangGu,
  },
  {
    code: 11290,
    region: "서울",
    regionFullName: "서울특별시",
    name: "성북구",
    shortName: "성북",
    component: SeongbukGu,
  },
  {
    code: 11305,
    region: "서울",
    regionFullName: "서울특별시",
    name: "강북구",
    shortName: "강북",
    component: GangbukGu,
  },
  {
    code: 11320,
    region: "서울",
    regionFullName: "서울특별시",
    name: "도봉구",
    shortName: "도봉",
    component: DobongGu,
  },
  {
    code: 11350,
    region: "서울",
    regionFullName: "서울특별시",
    name: "노원구",
    shortName: "노원",
    component: NowonGu,
  },
  {
    code: 11380,
    region: "서울",
    regionFullName: "서울특별시",
    name: "은평구",
    shortName: "은평",
    component: EunpyeongGu,
  },
  {
    code: 11410,
    region: "서울",
    regionFullName: "서울특별시",
    name: "서대문구",
    shortName: "서대문",
    component: SeodaemunGu,
  },
  {
    code: 11440,
    region: "서울",
    regionFullName: "서울특별시",
    name: "마포구",
    shortName: "마포",
    component: MapoGu,
  },
  {
    code: 11470,
    region: "서울",
    regionFullName: "서울특별시",
    name: "양천구",
    shortName: "양천",
    component: YangcheonGu,
  },
  {
    code: 11500,
    region: "서울",
    regionFullName: "서울특별시",
    name: "강서구",
    shortName: "강서",
    component: GangseoGu,
  },
  {
    code: 11530,
    region: "서울",
    regionFullName: "서울특별시",
    name: "구로구",
    shortName: "구로",
    component: GuroGu,
  },
  {
    code: 11545,
    region: "서울",
    regionFullName: "서울특별시",
    name: "금천구",
    shortName: "금천",
    component: GeumcheonGu,
  },
  {
    code: 11560,
    region: "서울",
    regionFullName: "서울특별시",
    name: "영등포구",
    shortName: "영등포",
    component: YeongdeungpoGu,
  },
  {
    code: 11590,
    region: "서울",
    regionFullName: "서울특별시",
    name: "동작구",
    shortName: "동작",
    component: DongjakGu,
  },
  {
    code: 11620,
    region: "서울",
    regionFullName: "서울특별시",
    name: "관악구",
    shortName: "관악",
    component: GwanakGu,
  },
  {
    code: 11650,
    region: "서울",
    regionFullName: "서울특별시",
    name: "서초구",
    shortName: "서초",
    component: SeochoGu,
  },
  {
    code: 11680,
    region: "서울",
    regionFullName: "서울특별시",
    name: "강남구",
    shortName: "강남",
    component: GangnamGu,
  },
  {
    code: 11710,
    region: "서울",
    regionFullName: "서울특별시",
    name: "송파구",
    shortName: "송파",
    component: SongpaGu,
  },
  {
    code: 11740,
    region: "서울",
    regionFullName: "서울특별시",
    name: "강동구",
    shortName: "강동",
    component: GangdongGu,
  },
];

// 코드로 빠르게 찾기 위한 맵
const codeMap = new Map<number, DistrictInfo>(
  districtData.map((info) => [info.code, info])
);

// 이름으로 찾기 위한 맵 (중복 가능성 체크)
// key: 이름, value: 해당 이름을 가진 지역들의 배열
const nameToDistrictsMap = new Map<string, DistrictInfo[]>();

function addToNameMap(key: string, info: DistrictInfo) {
  const existing = nameToDistrictsMap.get(key);
  if (existing) {
    existing.push(info);
  } else {
    nameToDistrictsMap.set(key, [info]);
  }
}

districtData.forEach((info) => {
  // "강남구"
  addToNameMap(info.name, info);
  // "강남"
  addToNameMap(info.shortName, info);
  // "서울특별시 강남구" - 풀네임은 유일함
  addToNameMap(`${info.regionFullName} ${info.name}`, info);
  // "서울 강남구"
  addToNameMap(`${info.region} ${info.name}`, info);
});

export interface GetIconByNameOptions {
  /**
   * 시/도를 지정합니다. 중복되는 이름(예: 중구)을 검색할 때 필요합니다.
   */
  region?: RegionCode;
}

/**
 * 행정구역 코드로 아이콘 컴포넌트를 가져옵니다.
 * @param code - 행정구역 코드 (예: 11680 = 강남구, 26110 = 부산 중구)
 * @returns 해당 구의 SVG 아이콘 컴포넌트, 없으면 undefined
 * @example
 * const Icon = getIconByCode(11680);
 * <Icon width={100} height={100} />
 */
export function getIconByCode(code: SeoulGuCode): SeoulGuIconComponent;
export function getIconByCode(code: number): SeoulGuIconComponent | undefined;
export function getIconByCode(code: number): SeoulGuIconComponent | undefined {
  return codeMap.get(code)?.component;
}

/**
 * 구 이름으로 아이콘 컴포넌트를 가져옵니다.
 *
 * - 풀네임은 항상 동작: "서울특별시 강남구", "서울 강남구"
 * - 유일한 이름은 그대로 동작: "강남구", "강남"
 * - 중복되는 이름(예: 중구)은 region 옵션 필요
 *
 * @param name - 구 이름
 * @param options - 옵션 (region: 시/도 지정)
 * @returns 해당 구의 SVG 아이콘 컴포넌트, 없거나 중복이면 undefined
 * @example
 * // 유일한 이름
 * getIconByName("강남구")
 * getIconByName("강남")
 *
 * // 풀네임
 * getIconByName("서울특별시 강남구")
 * getIconByName("서울 중구")
 *
 * // 중복되는 이름 (region 필요)
 * getIconByName("중구", { region: "서울" })
 * getIconByName("중구", { region: "부산" })
 */
export function getIconByName(
  name: string,
  options?: GetIconByNameOptions
): SeoulGuIconComponent | undefined {
  const districts = nameToDistrictsMap.get(name);

  if (!districts || districts.length === 0) {
    return undefined;
  }

  // region 옵션이 있으면 해당 지역만 필터링
  if (options?.region) {
    const filtered = districts.filter((d) => d.region === options.region);
    return filtered.length === 1 ? filtered[0].component : undefined;
  }

  // 유일한 이름이면 반환, 중복이면 undefined
  return districts.length === 1 ? districts[0].component : undefined;
}

/**
 * 모든 행정구역 코드 목록을 반환합니다.
 */
export function getAllCodes(): number[] {
  return districtData.map((info) => info.code);
}

/**
 * 유효한 행정구역 코드인지 확인합니다.
 */
export function isValidCode(code: number): boolean {
  return codeMap.has(code);
}

/**
 * 행정구역 코드로 구 이름을 가져옵니다.
 * @param code - 행정구역 코드
 * @returns 구 이름 (예: "강남구"), 없으면 undefined
 */
export function getNameByCode(code: number): string | undefined {
  return codeMap.get(code)?.name;
}

/**
 * 행정구역 코드로 전체 정보를 가져옵니다.
 * @param code - 행정구역 코드
 * @returns 지역 정보 객체, 없으면 undefined
 */
export function getDistrictInfo(code: number): DistrictInfo | undefined {
  return codeMap.get(code);
}

/**
 * 모든 지역 정보를 반환합니다.
 */
export function getAllDistrictInfo(): readonly DistrictInfo[] {
  return districtData;
}

/**
 * 특정 시/도의 모든 지역 정보를 반환합니다.
 * @param region - 시/도 코드 (예: "서울", "부산")
 */
export function getDistrictsByRegion(region: RegionCode): DistrictInfo[] {
  return districtData.filter((d) => d.region === region);
}

// 하위 호환성을 위한 맵 객체
export const seoulGuIconMap: Record<SeoulGuCode, SeoulGuIconComponent> =
  Object.fromEntries(
    districtData
      .filter((info) => info.region === "서울")
      .map((info) => [info.code, info.component])
  ) as Record<SeoulGuCode, SeoulGuIconComponent>;

// 하위 호환성을 위한 별칭
export const getAllGuInfo = getAllDistrictInfo;
