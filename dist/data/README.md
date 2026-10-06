# 캐릭터 데이터 편집 안내

## 파일 구성

- `characters/index.json`: 출시 캐릭터 ID, 출시 예정 캐릭터 ID, 명단의 공통 정보와 감시 목록을 관리합니다.
- `characters/{id}.json`: 캐릭터 한 명의 기본 명단 정보와 상세 정보, 설정, 소개, 전투 데이터, 계수, 검수 기록, 콘솔 추천, 필드 스킬을 모읍니다. 파일 이름과 `id`, `roster.id`는 같은 영문 ID를 사용합니다.
- `character-data-meta-v1.4.json`: 각 데이터 묶음의 공통 출처, 버전, 번역·검수 방법과 캐릭터별로 분리되지 않은 검수 기록을 보관합니다.
- `nte-cartridge-sets-v1.4.json`: 여러 캐릭터가 함께 사용하는 카트리지 세트 정의를 보관합니다. 캐릭터별 추천은 각 캐릭터 파일의 `console`에 있습니다.
- `nte-character-signature-arcs-v1.4.json`, `nte-character-growth-v1.4.json`: 전용 아크와 성장 재료는 현재처럼 별도 파일로 관리합니다.

## 캐릭터를 추가할 때

1. `characters/{영문 ID}.json` 파일을 만들고 기존 캐릭터 파일의 필드 구조를 복사합니다.
2. 그 파일의 `id`와 `roster.id`를 같은 ID로 바꾸고 캐릭터 데이터를 채웁니다.
3. 아직 확인하지 못한 자료는 `null` 또는 빈 배열로 둡니다. JSON에는 주석이나 마지막 항목 뒤의 쉼표를 넣지 않습니다.
4. 출시된 캐릭터면 `releasedCharacterIds`, 출시 예정이면 `upcomingCharacterIds`에 ID를 추가합니다. 캐릭터 표시 순서는 이 목록의 순서를 따릅니다.
5. 전용 아크 연결 정보와 성장 재료는 기존 아크·성장 파일에서 별도로 갱신합니다.

캐릭터별 데이터의 출처와 검수 방법은 캐릭터 파일의 출처 필드와 `character-data-meta-v1.4.json`을 함께 확인하세요. `nte-character-source-audit.md`는 수집 당시의 상세 조사 기록입니다.
