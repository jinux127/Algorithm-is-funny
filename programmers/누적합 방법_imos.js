/**
 * k차원 직교 좌표계에서 특정 범위에 x를 더하기
 * 같은 형태의 문제를 풀 때 사용할 수 있다.
 * 구간을 더하는 쿼리만 있을 때 이 방법을 이용하면 O(n^k)으로 해결할 수 있다.
 *
 * imos법 : 구간이 시작되는 점에 특정 값을 더하고 구간을 벗어나는 첫번째 점에 특정값을 뺀 뒤 이 사이를 누적합으로 더하며 스위핑한다.
 *
 * 1~5까지 1을 더하는 예시
 * 0 0 0 0 0 0
 * 1) 1 0 0 0 0 -1
 * ar[i] = ar[i] + ar[i-1]
 * 2) 1 1 1 1 1 0
 */
