import { useState } from "react";
import * as SeoulIcons from "@apt.today/react-seoul-icons";
import "./App.css";

// 서울시 행정구 순서 (공식 순서)
const districts = [
  { name: "JongnoGu", label: "종로구" },
  { name: "JungGu", label: "중구" },
  { name: "YongsanGu", label: "용산구" },
  { name: "SeongdongGu", label: "성동구" },
  { name: "GwangjinGu", label: "광진구" },
  { name: "DongdaemunGu", label: "동대문구" },
  { name: "JungnangGu", label: "중랑구" },
  { name: "SeongbukGu", label: "성북구" },
  { name: "GangbukGu", label: "강북구" },
  { name: "DobongGu", label: "도봉구" },
  { name: "NowonGu", label: "노원구" },
  { name: "EunpyeongGu", label: "은평구" },
  { name: "SeodaemunGu", label: "서대문구" },
  { name: "MapoGu", label: "마포구" },
  { name: "YangcheonGu", label: "양천구" },
  { name: "GangseoGu", label: "강서구" },
  { name: "GuroGu", label: "구로구" },
  { name: "GeumcheonGu", label: "금천구" },
  { name: "YeongdeungpoGu", label: "영등포구" },
  { name: "DongjakGu", label: "동작구" },
  { name: "GwanakGu", label: "관악구" },
  { name: "SeochoGu", label: "서초구" },
  { name: "GangnamGu", label: "강남구" },
  { name: "SongpaGu", label: "송파구" },
  { name: "GangdongGu", label: "강동구" },
];

function App() {
  const [iconSize, setIconSize] = useState(64);
  const [darkMode, setDarkMode] = useState(false);

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

      <section className="gallery">
        <h2>전체 아이콘 갤러리</h2>
        <div className="icon-grid">
          {districts.map(({ name, label }) => {
            const Icon = SeoulIcons[
              name as keyof typeof SeoulIcons
            ] as React.FC<React.SVGProps<SVGSVGElement>>;
            return (
              <div key={name} className="icon-item">
                <Icon width={iconSize} height={iconSize} />
                <span className="icon-label">{label}</span>
                <code className="icon-name">{name}</code>
              </div>
            );
          })}
        </div>
      </section>

      <section className="examples">
        <h2>사용 예제</h2>

        <div className="example-box">
          <h3>1. 개별 Import</h3>
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
          <h3>2. 전체 Import</h3>
          <pre>{`import * as SeoulIcons from '@apt.today/react-seoul-icons'

function MyComponent() {
  return <SeoulIcons.JongnoGu width={48} />
}`}</pre>
        </div>

        <div className="example-box">
          <h3>3. 동적 아이콘</h3>
          <pre>{`const districts = ['GangnamGu', 'MapoGu']

districts.map(name => {
  const Icon = SeoulIcons[name]
  return <Icon key={name} width={48} />
})`}</pre>
        </div>

        <div className="example-box">
          <h3>4. Tailwind CSS 사용</h3>
          <pre>{`import { GangnamGu, MapoGu } from '@apt.today/react-seoul-icons'

function MyComponent() {
  return (
    <div className="flex gap-4">
      <GangnamGu className="w-12 h-12" />
      <MapoGu className="w-16 h-16 hover:opacity-80" />
    </div>
  )
}`}</pre>
        </div>

        <div className="example-box">
          <h3>5. 이벤트 핸들러와 함께 사용</h3>
          <pre>{`<GangnamGu 
  className="w-12 h-12 cursor-pointer"
  onClick={() => console.log('Clicked!')}
  onMouseEnter={() => console.log('Hovered!')}
/>`}</pre>
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
