import * as React from "react";
import {
  // 시도
  Seoul,
  Gyeonggi,
  Busan,
  Ulsan,
  Daegu,
  // 서울 시군구
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
  // 경기도 시군구
  SuwonSi,
  GoyangSi,
  YonginSi,
  HwaseongSi,
  SeongnamSi,
  AnyangSi,
  GwangmyeongSi,
  GwacheonSi,
  GuriSi,
  NamyangjuSi,
  HanamSi,
  UiwangSi,
  GimpoSi,
  PajuSi,
  // 부산 시군구
  HaeundaeGu,
  // 울산 시군구
  UlsanNamGu,
  // 대구 시군구
  SuseongGu,
  // 인천 시군구
  Incheon,
  YeonsuGu,
} from "../components";

// ============================================
// 타입 정의
// ============================================

/**
 * 시도 코드 (행정안전부 표준 코드)
 */
export type SidoCode =
  | 11 // 서울특별시
  | 26 // 부산광역시
  | 27 // 대구광역시
  | 28 // 인천광역시
  | 29 // 광주광역시
  | 30 // 대전광역시
  | 31 // 울산광역시
  | 36 // 세종특별자치시
  | 41 // 경기도
  | 42 // 강원특별자치도
  | 43 // 충청북도
  | 44 // 충청남도
  | 45 // 전북특별자치도
  | 46 // 전라남도
  | 47 // 경상북도
  | 48 // 경상남도
  | 50; // 제주특별자치도

/**
 * 시도 단축명 (하위 호환성)
 */
export type RegionCode =
  | "서울"
  | "부산"
  | "대구"
  | "인천"
  | "광주"
  | "대전"
  | "울산"
  | "세종"
  | "경기"
  | "강원"
  | "충북"
  | "충남"
  | "전북"
  | "전남"
  | "경북"
  | "경남"
  | "제주";

/**
 * 서울시 행정구역 코드 (시군구 5자리)
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

export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// 하위 호환성
export type SeoulGuIconComponent = IconComponent;

// ============================================
// 시도 (Sido) 정보
// ============================================

export interface SidoInfo {
  code: SidoCode;
  name: string; // "서울특별시"
  shortName: RegionCode; // "서울"
  englishName: string; // "Seoul"
  component: IconComponent | null; // 아이콘이 없으면 null
}

const sidoData: SidoInfo[] = [
  {
    code: 11,
    name: "서울특별시",
    shortName: "서울",
    englishName: "Seoul",
    component: Seoul,
  },
  {
    code: 26,
    name: "부산광역시",
    shortName: "부산",
    englishName: "Busan",
    component: Busan,
  },
  {
    code: 27,
    name: "대구광역시",
    shortName: "대구",
    englishName: "Daegu",
    component: Daegu,
  },
  {
    code: 28,
    name: "인천광역시",
    shortName: "인천",
    englishName: "Incheon",
    component: Incheon,
  },
  {
    code: 29,
    name: "광주광역시",
    shortName: "광주",
    englishName: "Gwangju",
    component: null,
  },
  {
    code: 30,
    name: "대전광역시",
    shortName: "대전",
    englishName: "Daejeon",
    component: null,
  },
  {
    code: 31,
    name: "울산광역시",
    shortName: "울산",
    englishName: "Ulsan",
    component: Ulsan,
  },
  {
    code: 36,
    name: "세종특별자치시",
    shortName: "세종",
    englishName: "Sejong",
    component: null,
  },
  {
    code: 41,
    name: "경기도",
    shortName: "경기",
    englishName: "Gyeonggi",
    component: Gyeonggi,
  },
  {
    code: 42,
    name: "강원특별자치도",
    shortName: "강원",
    englishName: "Gangwon",
    component: null,
  },
  {
    code: 43,
    name: "충청북도",
    shortName: "충북",
    englishName: "Chungbuk",
    component: null,
  },
  {
    code: 44,
    name: "충청남도",
    shortName: "충남",
    englishName: "Chungnam",
    component: null,
  },
  {
    code: 45,
    name: "전북특별자치도",
    shortName: "전북",
    englishName: "Jeonbuk",
    component: null,
  },
  {
    code: 46,
    name: "전라남도",
    shortName: "전남",
    englishName: "Jeonnam",
    component: null,
  },
  {
    code: 47,
    name: "경상북도",
    shortName: "경북",
    englishName: "Gyeongbuk",
    component: null,
  },
  {
    code: 48,
    name: "경상남도",
    shortName: "경남",
    englishName: "Gyeongnam",
    component: null,
  },
  {
    code: 50,
    name: "제주특별자치도",
    shortName: "제주",
    englishName: "Jeju",
    component: null,
  },
];

// 시도 조회용 맵
const sidoCodeMap = new Map<SidoCode, SidoInfo>(
  sidoData.map((info) => [info.code, info])
);

const sidoShortNameMap = new Map<RegionCode, SidoInfo>(
  sidoData.map((info) => [info.shortName, info])
);

// ============================================
// 시군구 (Sigungu) 정보
// ============================================

export interface SigunguInfo {
  code: number; // 5자리 시군구 코드
  sidoCode: SidoCode; // 2자리 시도 코드
  name: string; // "강남구"
  shortName: string; // "강남"
  component: IconComponent;
}

// 하위 호환성
export interface DistrictInfo {
  code: number;
  region: RegionCode;
  regionFullName: string;
  name: string;
  shortName: string;
  component: IconComponent;
}

const sigunguData: SigunguInfo[] = [
  {
    code: 11110,
    sidoCode: 11,
    name: "종로구",
    shortName: "종로",
    component: JongnoGu,
  },
  {
    code: 11140,
    sidoCode: 11,
    name: "중구",
    shortName: "중",
    component: JungGu,
  },
  {
    code: 11170,
    sidoCode: 11,
    name: "용산구",
    shortName: "용산",
    component: YongsanGu,
  },
  {
    code: 11200,
    sidoCode: 11,
    name: "성동구",
    shortName: "성동",
    component: SeongdongGu,
  },
  {
    code: 11215,
    sidoCode: 11,
    name: "광진구",
    shortName: "광진",
    component: GwangjinGu,
  },
  {
    code: 11230,
    sidoCode: 11,
    name: "동대문구",
    shortName: "동대문",
    component: DongdaemunGu,
  },
  {
    code: 11260,
    sidoCode: 11,
    name: "중랑구",
    shortName: "중랑",
    component: JungnangGu,
  },
  {
    code: 11290,
    sidoCode: 11,
    name: "성북구",
    shortName: "성북",
    component: SeongbukGu,
  },
  {
    code: 11305,
    sidoCode: 11,
    name: "강북구",
    shortName: "강북",
    component: GangbukGu,
  },
  {
    code: 11320,
    sidoCode: 11,
    name: "도봉구",
    shortName: "도봉",
    component: DobongGu,
  },
  {
    code: 11350,
    sidoCode: 11,
    name: "노원구",
    shortName: "노원",
    component: NowonGu,
  },
  {
    code: 11380,
    sidoCode: 11,
    name: "은평구",
    shortName: "은평",
    component: EunpyeongGu,
  },
  {
    code: 11410,
    sidoCode: 11,
    name: "서대문구",
    shortName: "서대문",
    component: SeodaemunGu,
  },
  {
    code: 11440,
    sidoCode: 11,
    name: "마포구",
    shortName: "마포",
    component: MapoGu,
  },
  {
    code: 11470,
    sidoCode: 11,
    name: "양천구",
    shortName: "양천",
    component: YangcheonGu,
  },
  {
    code: 11500,
    sidoCode: 11,
    name: "강서구",
    shortName: "강서",
    component: GangseoGu,
  },
  {
    code: 11530,
    sidoCode: 11,
    name: "구로구",
    shortName: "구로",
    component: GuroGu,
  },
  {
    code: 11545,
    sidoCode: 11,
    name: "금천구",
    shortName: "금천",
    component: GeumcheonGu,
  },
  {
    code: 11560,
    sidoCode: 11,
    name: "영등포구",
    shortName: "영등포",
    component: YeongdeungpoGu,
  },
  {
    code: 11590,
    sidoCode: 11,
    name: "동작구",
    shortName: "동작",
    component: DongjakGu,
  },
  {
    code: 11620,
    sidoCode: 11,
    name: "관악구",
    shortName: "관악",
    component: GwanakGu,
  },
  {
    code: 11650,
    sidoCode: 11,
    name: "서초구",
    shortName: "서초",
    component: SeochoGu,
  },
  {
    code: 11680,
    sidoCode: 11,
    name: "강남구",
    shortName: "강남",
    component: GangnamGu,
  },
  {
    code: 11710,
    sidoCode: 11,
    name: "송파구",
    shortName: "송파",
    component: SongpaGu,
  },
  {
    code: 11740,
    sidoCode: 11,
    name: "강동구",
    shortName: "강동",
    component: GangdongGu,
  },
  // 경기도 시군구
  {
    code: 41110,
    sidoCode: 41,
    name: "수원시",
    shortName: "수원",
    component: SuwonSi,
  },
  {
    code: 41280,
    sidoCode: 41,
    name: "고양시",
    shortName: "고양",
    component: GoyangSi,
  },
  {
    code: 41460,
    sidoCode: 41,
    name: "용인시",
    shortName: "용인",
    component: YonginSi,
  },
  {
    code: 41590,
    sidoCode: 41,
    name: "화성시",
    shortName: "화성",
    component: HwaseongSi,
  },
  {
    code: 41130,
    sidoCode: 41,
    name: "성남시",
    shortName: "성남",
    component: SeongnamSi,
  },
  {
    code: 41170,
    sidoCode: 41,
    name: "안양시",
    shortName: "안양",
    component: AnyangSi,
  },
  {
    code: 41210,
    sidoCode: 41,
    name: "광명시",
    shortName: "광명",
    component: GwangmyeongSi,
  },
  {
    code: 41290,
    sidoCode: 41,
    name: "과천시",
    shortName: "과천",
    component: GwacheonSi,
  },
  {
    code: 41310,
    sidoCode: 41,
    name: "구리시",
    shortName: "구리",
    component: GuriSi,
  },
  {
    code: 41360,
    sidoCode: 41,
    name: "남양주시",
    shortName: "남양주",
    component: NamyangjuSi,
  },
  {
    code: 41450,
    sidoCode: 41,
    name: "하남시",
    shortName: "하남",
    component: HanamSi,
  },
  {
    code: 41430,
    sidoCode: 41,
    name: "의왕시",
    shortName: "의왕",
    component: UiwangSi,
  },
  {
    code: 41570,
    sidoCode: 41,
    name: "김포시",
    shortName: "김포",
    component: GimpoSi,
  },
  {
    code: 41480,
    sidoCode: 41,
    name: "파주시",
    shortName: "파주",
    component: PajuSi,
  },
  // 부산광역시 시군구
  {
    code: 26350,
    sidoCode: 26,
    name: "해운대구",
    shortName: "해운대",
    component: HaeundaeGu,
  },
  // 울산광역시 시군구
  {
    code: 31140,
    sidoCode: 31,
    name: "남구",
    shortName: "남",
    component: UlsanNamGu,
  },
  // 대구광역시 시군구
  {
    code: 27260,
    sidoCode: 27,
    name: "수성구",
    shortName: "수성",
    component: SuseongGu,
  },
  // 인천광역시 시군구
  {
    code: 28185,
    sidoCode: 28,
    name: "연수구",
    shortName: "연수",
    component: YeonsuGu,
  },
];

// 시군구 조회용 맵
const sigunguCodeMap = new Map<number, SigunguInfo>(
  sigunguData.map((info) => [info.code, info])
);

// 이름으로 찾기 위한 맵
const nameToSigunguMap = new Map<string, SigunguInfo[]>();

function addToNameMap(key: string, info: SigunguInfo) {
  const existing = nameToSigunguMap.get(key);
  if (existing) {
    existing.push(info);
  } else {
    nameToSigunguMap.set(key, [info]);
  }
}

sigunguData.forEach((info) => {
  const sido = sidoCodeMap.get(info.sidoCode);
  if (sido) {
    addToNameMap(info.name, info); // "강남구"
    addToNameMap(info.shortName, info); // "강남"
    addToNameMap(`${sido.name} ${info.name}`, info); // "서울특별시 강남구"
    addToNameMap(`${sido.shortName} ${info.name}`, info); // "서울 강남구"
  }
});

// ============================================
// 시도 (Sido) 함수
// ============================================

/**
 * 시도 코드로 아이콘을 가져옵니다.
 * @param code - 시도 코드 (예: 11 = 서울특별시)
 */
export function getSidoIcon(code: SidoCode): IconComponent | null {
  return sidoCodeMap.get(code)?.component ?? null;
}

/**
 * 시도 코드로 정보를 가져옵니다.
 */
export function getSidoInfo(code: SidoCode): SidoInfo | undefined {
  return sidoCodeMap.get(code);
}

/**
 * 시도 단축명으로 정보를 가져옵니다.
 * @param shortName - 시도 단축명 (예: "서울", "부산")
 */
export function getSidoByShortName(
  shortName: RegionCode
): SidoInfo | undefined {
  return sidoShortNameMap.get(shortName);
}

/**
 * 모든 시도 정보를 반환합니다.
 */
export function getAllSidoInfo(): readonly SidoInfo[] {
  return sidoData;
}

/**
 * 아이콘이 있는 시도 정보만 반환합니다.
 */
export function getAvailableSidoInfo(): SidoInfo[] {
  return sidoData.filter((info) => info.component !== null);
}

// ============================================
// 시군구 (Sigungu) 함수
// ============================================

/**
 * 시군구 코드로 아이콘을 가져옵니다.
 * @param code - 시군구 코드 (예: 11680 = 강남구)
 */
export function getSigunguIcon(code: number): IconComponent | undefined {
  return sigunguCodeMap.get(code)?.component;
}

/**
 * 시군구 코드로 정보를 가져옵니다.
 */
export function getSigunguInfo(code: number): SigunguInfo | undefined {
  return sigunguCodeMap.get(code);
}

/**
 * 특정 시도의 모든 시군구 정보를 반환합니다.
 */
export function getSigunguBySido(sidoCode: SidoCode): SigunguInfo[] {
  return sigunguData.filter((info) => info.sidoCode === sidoCode);
}

/**
 * 모든 시군구 정보를 반환합니다.
 */
export function getAllSigunguInfo(): readonly SigunguInfo[] {
  return sigunguData;
}

export interface GetIconByNameOptions {
  /**
   * 시/도를 지정합니다. 중복되는 이름(예: 중구)을 검색할 때 필요합니다.
   */
  region?: RegionCode;
}

/**
 * 시군구 이름으로 아이콘을 가져옵니다.
 */
export function getSigunguIconByName(
  name: string,
  options?: GetIconByNameOptions
): IconComponent | undefined {
  const sigunguList = nameToSigunguMap.get(name);

  if (!sigunguList || sigunguList.length === 0) {
    return undefined;
  }

  if (options?.region) {
    const sido = sidoShortNameMap.get(options.region);
    if (!sido) return undefined;
    const filtered = sigunguList.filter((s) => s.sidoCode === sido.code);
    return filtered.length === 1 ? filtered[0].component : undefined;
  }

  return sigunguList.length === 1 ? sigunguList[0].component : undefined;
}

// ============================================
// 하위 호환성 함수들
// ============================================

/**
 * @deprecated getSigunguIcon 사용 권장
 */
export function getIconByCode(code: SeoulGuCode): IconComponent;
export function getIconByCode(code: number): IconComponent | undefined;
export function getIconByCode(code: number): IconComponent | undefined {
  return getSigunguIcon(code);
}

/**
 * @deprecated getSigunguIconByName 사용 권장
 */
export function getIconByName(
  name: string,
  options?: GetIconByNameOptions
): IconComponent | undefined {
  return getSigunguIconByName(name, options);
}

/**
 * @deprecated getSigunguInfo 사용 권장
 */
export function getNameByCode(code: number): string | undefined {
  return sigunguCodeMap.get(code)?.name;
}

/**
 * @deprecated getSigunguInfo 사용 권장
 */
export function getDistrictInfo(code: number): DistrictInfo | undefined {
  const sigungu = sigunguCodeMap.get(code);
  if (!sigungu) return undefined;

  const sido = sidoCodeMap.get(sigungu.sidoCode);
  if (!sido) return undefined;

  return {
    code: sigungu.code,
    region: sido.shortName,
    regionFullName: sido.name,
    name: sigungu.name,
    shortName: sigungu.shortName,
    component: sigungu.component,
  };
}

/**
 * @deprecated getAllSigunguInfo 사용 권장
 */
export function getAllDistrictInfo(): readonly DistrictInfo[] {
  return sigunguData.map((sigungu) => {
    const sido = sidoCodeMap.get(sigungu.sidoCode)!;
    return {
      code: sigungu.code,
      region: sido.shortName,
      regionFullName: sido.name,
      name: sigungu.name,
      shortName: sigungu.shortName,
      component: sigungu.component,
    };
  });
}

/**
 * @deprecated getSigunguBySido 사용 권장
 */
export function getDistrictsByRegion(region: RegionCode): DistrictInfo[] {
  const sido = sidoShortNameMap.get(region);
  if (!sido) return [];

  return getSigunguBySido(sido.code).map((sigungu) => ({
    code: sigungu.code,
    region: sido.shortName,
    regionFullName: sido.name,
    name: sigungu.name,
    shortName: sigungu.shortName,
    component: sigungu.component,
  }));
}

/**
 * 모든 시군구 코드 목록을 반환합니다.
 */
export function getAllCodes(): number[] {
  return sigunguData.map((info) => info.code);
}

/**
 * 유효한 시군구 코드인지 확인합니다.
 */
export function isValidCode(code: number): boolean {
  return sigunguCodeMap.has(code);
}

/**
 * @deprecated getAllDistrictInfo 사용 권장
 */
export const getAllGuInfo = getAllDistrictInfo;

/**
 * 서울시 자치구 아이콘 맵 (하위 호환성)
 */
export const seoulGuIconMap: Record<SeoulGuCode, IconComponent> =
  Object.fromEntries(
    sigunguData
      .filter((info) => info.sidoCode === 11)
      .map((info) => [info.code, info.component])
  ) as Record<SeoulGuCode, IconComponent>;
