링크 주소 : https://poolnametodolist.netlify.app/

## Language
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)

## Build
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visualstudiocode&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

## 🚀 Lighthouse Performance Score
![Lighthouse Performance](https://img.shields.io/badge/Performance-100-brightgreen) ![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-75-success) ![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100-success) ![Lighthouse SEO](https://img.shields.io/badge/SEO-90-brightgreen)

### 1. 투두 관리 기능 (CRUD Operations)
- 추가 (Create): 내용을 입력하고 '추가' 버튼을 누르거나 Enter키로 입력 추가, 빈 내용은 입력창으로 다시 포커싱
- 조회 (Read): 현재 상태에 따라 전체 할 일 목록을 표시
- 수정/토글 (Update - Check): 각 항목의 체크박스를 클릭하여 할 일의 완료 상태를 토글 사용
- 삭제 (Delete): 각 항목의 '삭제' 버튼을 클릭하여 해당 할 일을 목록에서 제거


### 2. 효율적인 상태 관리
- useReducer 관리: Todo의 생성, 수정, 삭제 로직을 reducer 함수로 분리해서 관리
- useCallback 최적화: CRUD를 useCallback으로 리렌더링 시 불필요하게 함수 재생성 방지


### 3. 목록 필터링 및 검색
- 실시간 검색 기능: 키워드를 검색하면 할 일 내용(content)을 기준으로 실시간으로 필터링 (대소문자 구분 없음)


### 4. 성능 최적화 (Memoization)
- memo 컴포넌트 최적화: 하위 컴포넌트를 React.memo로 감싸 Props가 변경되지 않으면 리렌더링을 건너뛰도록 성능을 최적화
- useMemo 계산 최적화: 할 일의 개수들을 계산해 useMemo로 감싸 todos 상태가 변경될 때만 다시 계산


### 5. 사용자 경험 개선 (UX)
- 날짜 표시: 각 할 일 항목에 추가된 날짜를 로컬 형식으로 표시
- 상태 요약 정보: 현재 할 일의 총 개수, 완료된 개수, 미완료된 개수를 상단에 요약
