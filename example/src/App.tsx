import { useState } from "react";
import {
  // 시도 컴포넌트
  Seoul,
  Gyeonggi,
  // 시군구 컴포넌트
  GangnamGu,
  MapoGu,
  JongnoGu,
  // 시도 헬퍼 함수
  getSidoIcon,
  getAllSidoInfo,
  getAvailableSidoInfo,
  // 시군구 헬퍼 함수
  getSigunguIcon,
  getSigunguBySido,
  getSigunguIconByName,
  // 하위 호환성 함수
  getAllDistrictInfo,
  getIconByCode,
  getIconByName,
  getDistrictsByRegion,
  type DistrictInfo,
  type SidoInfo,
  type SigunguInfo,
} from "@apt.today/react-seoul-icons";
import "./App.css";

function App() {
  const [iconSize, setIconSize] = useState(64);
  const [darkMode, setDarkMode] = useState(false);
  const [searchName, setSearchName] = useState("");

  // 시도 정보 가져오기
  const allSido: readonly SidoInfo[] = getAllSidoInfo();
  const availableSido = allSido.filter((s) => s.component !== null);

  // 시군구가 있는 시도 목록 (갤러리용)
  const sidoWithSigungu = getAvailableSidoInfo().filter((sido) => {
    const sigunguList = getSigunguBySido(sido.code);
    return sigunguList.length > 0;
  });

  // 시도 코드로 아이콘 가져오기
  const SeoulIcon = getSidoIcon(11);

  // 헬퍼를 통해 서울시 모든 구 정보 가져오기
  const districts: readonly DistrictInfo[] = getAllDistrictInfo();

  // 또는 특정 지역만 가져오기
  const seoulDistricts = getDistrictsByRegion("서울");

  // 새로운 API: 시군구 정보
  const seoulSigungu = getSigunguBySido(11);
  const gyeonggiSigungu = getSigunguBySido(41);

  // 코드로 아이콘 가져오기 예시
  const GangnamIcon = getIconByCode(11680);

  // 새로운 API: 시군구 코드로 아이콘 가져오기
  const GangnamIcon2 = getSigunguIcon(11680);

  // 이름으로 아이콘 검색
  const SearchedIcon = searchName ? getIconByName(searchName) : null;

  // 새로운 API: 이름으로 시군구 아이콘 검색
  const SearchedIcon2 = searchName ? getSigunguIconByName(searchName) : null;

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <div className="header-top">
          <div>
            <h1>🏙️ @apt.today/react-seoul-icons</h1>
            <p>대한민국 광역/기초자치단체 로고 아이콘 React 라이브러리</p>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="테마 전환"
          >
            {darkMode ? "☀️ 라이트 모드" : "🌙 다크 모드"}
          </button>
        </div>
      </header>

      <section className="controls">
        <div className="control-group">
          <label>
            아이콘 크기: {iconSize}px
            <input
              type="range"
              min="32"
              max="128"
              value={iconSize}
              onChange={(e) => setIconSize(Number(e.target.value))}
            />
          </label>
        </div>
      </section>

      <section className="demo-section">
        <h2>🏛️ 시도 아이콘</h2>

        <div className="demo-grid">
          <div className="demo-box highlight">
            <h3>서울특별시</h3>
            <p>import {"{ Seoul }"} from '...'</p>
            <div className="demo-icon">
              <Seoul width={iconSize} height={iconSize} />
            </div>
            <code>&lt;Seoul /&gt;</code>
          </div>

          <div className="demo-box highlight">
            <h3>경기도</h3>
            <p>import {"{ Gyeonggi }"} from '...'</p>
            <div className="demo-icon">
              <Gyeonggi width={iconSize} height={iconSize} />
            </div>
            <code>&lt;Gyeonggi /&gt;</code>
          </div>

          <div className="demo-box">
            <h3>getSidoIcon(11)</h3>
            <p>시도 코드로 아이콘 가져오기</p>
            <div className="demo-icon">
              {SeoulIcon && <SeoulIcon width={iconSize} height={iconSize} />}
            </div>
            <code>서울특별시 (코드: 11)</code>
          </div>

          <div className="demo-box">
            <h3>아이콘 보유 시도</h3>
            <p>
              {availableSido.length}개 / 전체 {allSido.length}개
            </p>
            <div className="mini-icons">
              {availableSido.map(
                (s) =>
                  s.component && (
                    <s.component
                      key={s.code}
                      width={iconSize * 0.75}
                      height={iconSize * 0.75}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>🏘️ 시군구 아이콘</h2>

        <div className="demo-grid">
          <div className="demo-box">
            <h3>컴포넌트 직접 사용</h3>
            <p>import {"{ GangnamGu }"} from '...'</p>
            <div className="demo-icon">
              <GangnamGu width={iconSize} height={iconSize} />
            </div>
            <code>&lt;GangnamGu /&gt;</code>
          </div>

          <div className="demo-box">
            <h3>여러 컴포넌트 사용</h3>
            <p>import {"{ MapoGu, JongnoGu }"} from '...'</p>
            <div className="demo-icon" style={{ display: "flex", gap: "8px" }}>
              <MapoGu width={iconSize * 0.8} height={iconSize * 0.8} />
              <JongnoGu width={iconSize * 0.8} height={iconSize * 0.8} />
            </div>
            <code>&lt;MapoGu /&gt; &lt;JongnoGu /&gt;</code>
          </div>

          <div className="demo-box">
            <h3>getIconByCode(11680)</h3>
            <p>행정구역 코드로 아이콘 가져오기</p>
            <div className="demo-icon">
              {GangnamIcon && (
                <GangnamIcon width={iconSize} height={iconSize} />
              )}
            </div>
            <code>강남구</code>
          </div>

          <div className="demo-box">
            <h3>getIconByName 검색</h3>
            <input
              type="text"
              placeholder="강남, 강남구, 서울특별시 강남구..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="search-input"
            />
            <div className="demo-icon">
              {SearchedIcon ? (
                <SearchedIcon width={iconSize} height={iconSize} />
              ) : searchName ? (
                <span className="no-result">결과 없음</span>
              ) : (
                <span className="placeholder">이름을 입력하세요</span>
              )}
            </div>
          </div>

          <div className="demo-box">
            <h3>getSigunguBySido(11)</h3>
            <p>서울시 시군구: {seoulSigungu.length}개</p>
            <div className="mini-icons">
              {seoulSigungu.slice(0, 5).map((d) => (
                <d.component
                  key={d.code}
                  width={iconSize * 0.5}
                  height={iconSize * 0.5}
                />
              ))}
              <span>...</span>
            </div>
            <code>새로운 API ⭐</code>
          </div>

          <div className="demo-box">
            <h3>getDistrictsByRegion("서울")</h3>
            <p>서울시 구 개수: {seoulDistricts.length}개</p>
            <div className="mini-icons">
              {seoulDistricts.slice(0, 5).map((d) => (
                <d.component
                  key={d.code}
                  width={iconSize * 0.5}
                  height={iconSize * 0.5}
                />
              ))}
              <span>...</span>
            </div>
            <code>하위 호환성</code>
          </div>

          <div className="demo-box">
            <h3>getSigunguBySido(41)</h3>
            <p>경기도 시군구: {gyeonggiSigungu.length}개</p>
            <div className="mini-icons">
              {gyeonggiSigungu.slice(0, 5).map((d) => (
                <d.component
                  key={d.code}
                  width={iconSize * 0.5}
                  height={iconSize * 0.5}
                />
              ))}
              <span>...</span>
            </div>
            <code>경기도 시군구 ⭐</code>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>전체 아이콘 갤러리</h2>

        {sidoWithSigungu.map((sido) => {
          const sigunguList: SigunguInfo[] = getSigunguBySido(sido.code);
          const SidoIcon = sido.component;

          return (
            <div key={sido.code} className="sido-section">
              <div className="sido-header">
                {SidoIcon && (
                  <SidoIcon
                    width={32}
                    height={32}
                    className="sido-header-icon"
                  />
                )}
                <h3>{sido.name}</h3>
                <span className="sido-count">
                  {sigunguList.length}개 시군구
                </span>
              </div>
              <div className="icon-grid">
                {sigunguList.map((sigungu) => {
                  const Icon = sigungu.component;
                  return (
                    <div key={sigungu.code} className="icon-item">
                      <Icon width={iconSize} height={iconSize} />
                      <span className="icon-label">{sigungu.name}</span>
                      <code className="icon-name">{sigungu.code}</code>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <section className="examples">
        <h2>사용 예제</h2>

        <div className="example-box">
          <h3>1. 컴포넌트 개별 Import</h3>
          <pre>{`import { GangnamGu, MapoGu } from '@apt.today/react-seoul-icons'

function MyComponent() {
  return (
    <>
      <GangnamGu width={48} height={48} />
      <MapoGu style={{ width: 48, height: 48 }} />
    </>
  )
}`}</pre>
        </div>

        <div className="example-box">
          <h3>2. 전체 Import (네임스페이스)</h3>
          <pre>{`import * as SeoulIcons from '@apt.today/react-seoul-icons'

function MyComponent() {
  return (
    <>
      <SeoulIcons.GangnamGu width={48} />
      <SeoulIcons.JongnoGu className="w-12 h-12" />
    </>
  )
}`}</pre>
        </div>

        <div className="example-box">
          <h3>3. 행정구역 코드로 아이콘 가져오기 ⭐</h3>
          <pre>{`import { getIconByCode } from '@apt.today/react-seoul-icons'

function MyComponent() {
  const GangnamIcon = getIconByCode(11680) // 강남구
  const JungIcon = getIconByCode(11140)    // 중구
  
  return (
    <>
      {GangnamIcon && <GangnamIcon width={48} />}
      {JungIcon && <JungIcon width={48} />}
    </>
  )
}`}</pre>
        </div>

        <div className="example-box">
          <h3>4. 이름으로 아이콘 가져오기</h3>
          <pre>{`import { getIconByName } from '@apt.today/react-seoul-icons'

// 다양한 형식 지원
getIconByName("강남구")              // ✅
getIconByName("강남")                // ✅
getIconByName("서울특별시 강남구")    // ✅
getIconByName("서울 강남구")         // ✅

// 중복되는 이름(중구 등)은 region 옵션 필요
getIconByName("중구", { region: "서울" }) // ✅`}</pre>
        </div>

        <div className="example-box">
          <h3>5. 모든 지역 정보 가져오기</h3>
          <pre>{`import { 
  getAllDistrictInfo, 
  getDistrictsByRegion 
} from '@apt.today/react-seoul-icons'

// 모든 지역 정보
const allDistricts = getAllDistrictInfo()

// 서울시만 가져오기
const seoulDistricts = getDistrictsByRegion("서울")

allDistricts.map(district => {
  const Icon = district.component
  return (
    <div key={district.code}>
      <Icon width={48} />
      <span>{district.name}</span>
    </div>
  )
})`}</pre>
        </div>

        <div className="example-box">
          <h3>6. Tailwind CSS 사용</h3>
          <pre>{`import { getIconByCode } from '@apt.today/react-seoul-icons'

function MyComponent() {
  const GangnamIcon = getIconByCode(11680)
  
  return (
    <div className="flex gap-4">
      {GangnamIcon && (
        <GangnamIcon className="w-12 h-12 hover:opacity-80" />
      )}
    </div>
  )
}`}</pre>
        </div>

        <div className="example-box">
          <h3>7. API 응답에서 동적으로 사용</h3>
          <pre>{`import { getIconByCode, getIconByName } from '@apt.today/react-seoul-icons'

// API에서 행정구역 코드를 받은 경우
function DistrictIcon({ code }: { code: number }) {
  const Icon = getIconByCode(code)
  if (!Icon) return null
  return <Icon width={48} />
}

// API에서 지역명을 받은 경우
function DistrictIconByName({ name }: { name: string }) {
  // "서울특별시 강남구" 같은 형식도 OK
  const Icon = getIconByName(name)
  if (!Icon) return null
  return <Icon width={48} />
}`}</pre>
        </div>
      </section>

      <footer>
        <p>
          📦 설치: <code>yarn add @apt.today/react-seoul-icons</code> 또는{" "}
          <code>npm install @apt.today/react-seoul-icons</code>
        </p>
        <p>📄 라이선스: 아이콘은 공공누리 제1유형, 코드는 MIT</p>
        <p>
          🏠 Made by{" "}
          <a
            href="https://apt.today"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            apt.today 오늘의아파트
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
