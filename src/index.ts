export * from "./components";
export {
  // 아이콘 가져오기
  getIconByCode,
  getIconByName,
  // 정보 조회
  getNameByCode,
  getDistrictInfo,
  getAllDistrictInfo,
  getDistrictsByRegion,
  // 유틸리티
  getAllCodes,
  isValidCode,
  // 하위 호환성
  getAllGuInfo,
  seoulGuIconMap,
  // 타입
  type RegionCode,
  type SeoulGuCode,
  type SeoulGuIconComponent,
  type DistrictInfo,
  type GetIconByNameOptions,
} from "./helpers";
