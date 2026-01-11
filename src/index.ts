export * from "./components";
export {
  // ============================================
  // 시도 (Sido) 관련
  // ============================================
  getSidoIcon,
  getSidoInfo,
  getSidoByShortName,
  getAllSidoInfo,
  getAvailableSidoInfo,

  // ============================================
  // 시군구 (Sigungu) 관련
  // ============================================
  getSigunguIcon,
  getSigunguInfo,
  getSigunguBySido,
  getAllSigunguInfo,
  getSigunguIconByName,

  // ============================================
  // 유틸리티
  // ============================================
  getAllCodes,
  isValidCode,

  // ============================================
  // 하위 호환성 (deprecated)
  // ============================================
  getIconByCode,
  getIconByName,
  getNameByCode,
  getDistrictInfo,
  getAllDistrictInfo,
  getDistrictsByRegion,
  getAllGuInfo,
  seoulGuIconMap,

  // ============================================
  // 타입
  // ============================================
  type SidoCode,
  type SidoInfo,
  type SigunguInfo,
  type IconComponent,
  // 하위 호환성 타입
  type RegionCode,
  type SeoulGuCode,
  type SeoulGuIconComponent,
  type DistrictInfo,
  type GetIconByNameOptions,
} from "./helpers";
