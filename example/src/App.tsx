import { useState } from "react";
import {
  // 컴포넌트 직접 Import
  GangnamGu,
  MapoGu,
  JongnoGu,
  // 헬퍼 함수
  getAllDistrictInfo,
  getIconByCode,
  getIconByName,
  getDistrictsByRegion,
  type DistrictInfo,
} from "@apt.today/react-seoul-icons";
import "./App.css";

function App() {
  const [iconSize, setIconSize] = useState(64);
  const [darkMode, setDarkMode] = useState(false);
  const [searchName, setSearchName] = useState("");

  // 헬퍼를 통해 서울시 모든 구 정보 가져오기
  const districts: readonly DistrictInfo[] = getAllDistrictInfo();

  // 또는 특정 지역만 가져오기
  const seoulDistricts = getDistrictsByRegion("서울");

  // 코드로 아이콘 가져오기 예시
  const GangnamIcon = getIconByCode(11680);

  // 이름으로 아이콘 검색
  const SearchedIcon = searchName ? getIconByName(searchName) : null;

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <div className="header-top">
          <div>
            <h1>🏙️ @apt.today/react-seoul-icons</h1>
            <p>서울시 25개 행정구 아이콘 React 컴포넌트 라이브러리</p>
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
        <h2>🎯 사용 방법 데모</h2>

        <div className="demo-grid">
          <div className="demo-box">
            <h3>컴포넌트 직접 사용</h3>
            <p>import {"{ GangnamGu }"} from '...'</p>
            <div className="demo-icon">
              <GangnamGu width={80} height={80} />
            </div>
            <code>&lt;GangnamGu /&gt;</code>
          </div>

          <div className="demo-box">
            <h3>여러 컴포넌트 사용</h3>
            <p>import {"{ MapoGu, JongnoGu }"} from '...'</p>
            <div className="demo-icon" style={{ display: "flex", gap: "8px" }}>
              <MapoGu width={60} height={60} />
              <JongnoGu width={60} height={60} />
            </div>
            <code>&lt;MapoGu /&gt; &lt;JongnoGu /&gt;</code>
          </div>

          <div className="demo-box">
            <h3>getIconByCode(11680)</h3>
            <p>행정구역 코드로 아이콘 가져오기</p>
            <div className="demo-icon">
              {GangnamIcon && <GangnamIcon width={80} height={80} />}
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
                <SearchedIcon width={80} height={80} />
              ) : searchName ? (
                <span className="no-result">결과 없음</span>
              ) : (
                <span className="placeholder">이름을 입력하세요</span>
              )}
            </div>
          </div>

          <div className="demo-box">
            <h3>getDistrictsByRegion("서울")</h3>
            <p>서울시 구 개수: {seoulDistricts.length}개</p>
            <div className="mini-icons">
              {seoulDistricts.slice(0, 5).map((d) => (
                <d.component key={d.code} width={32} height={32} />
              ))}
              <span>...</span>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>전체 아이콘 갤러리</h2>
        <div className="icon-grid">
          {districts.map((district) => {
            const Icon = district.component;
            return (
              <div key={district.code} className="icon-item">
                <Icon width={iconSize} height={iconSize} />
                <span className="icon-label">{district.name}</span>
                <code className="icon-name">{district.code}</code>
              </div>
            );
          })}
        </div>
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
