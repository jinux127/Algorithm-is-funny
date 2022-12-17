/**
 * x = a*k
 * y = b*k
 * a = 0,1,2,3,...
 * b = 0,1,2,3,..
 * @param {*} k
 * @param {*} d
 * @returns
 */
function solution(k, d) {
  var answer = 0;
  for (let x = 0; x <= d; x += k) {
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));

    answer += parseInt(y / k) + 1;
  }

  return answer;
}

const reserved = {
  colNo: 10,
  fstRegDt: '2022-04-15 14:52:27',
  fstRegrNo: 191201063,
  gateTyCd: null,
  horzCoorVal: 10,
  horzPosiRt: 0,
  horzSizeRt: 1,
  lstUptDt: '2022-04-15 14:52:27',
  lstUptrNo: 191201063,
  rowNm: 'E',
  rowNo: 5,
  rowStatCd: 'A',
  seatChoiDircVal: '0',
  seatChoiGrpNm: 'E14',
  seatChoiGrpNo: 14,
  seatChoiGrpSeq: 2,
  seatChoiRowCnt: 12,
  seatClassCd: 'GERN_CLS',
  seatDispTyCd: 'SD01',
  seatExpoAt: 'Y',
  seatGrpNo: null,
  seatNo: 9,
  seatNotiMsg: null,
  seatSellChnlCd: null,
  seatSellTyCd: 'GERN_SELL',
  seatStatCd: 'SCT04',
  seatUniqNo: '00501001',
  seatZoneCd: 'GERN_ZONE',
  sellPrirRank: 225,
  smapBaseNo: 11620,
  vertCoorVal: 5,
  vertPosiRt: 0,
};
const not_reserved = {
  colNo: 9,
  fstRegDt: '2022-04-15 14:52:27',
  fstRegrNo: 191201063,
  gateTyCd: null,
  horzCoorVal: 9,
  horzPosiRt: 0,
  horzSizeRt: 1,
  lstUptDt: '2022-04-15 14:52:27',
  lstUptrNo: 191201063,
  rowNm: 'E',
  rowNo: 5,
  rowStatCd: 'A',
  seatChoiDircVal: '0',
  seatChoiGrpNm: 'E14',
  seatChoiGrpNo: 14,
  seatChoiGrpSeq: 1,
  seatChoiRowCnt: 12,
  seatClassCd: 'GERN_CLS',
  seatDispTyCd: 'SD01',
  seatExpoAt: 'Y',
  seatGrpNo: null,
  seatNo: 8,
  seatNotiMsg: null,
  seatSellChnlCd: null,
  seatSellTyCd: 'GERN_SELL',
  seatStatCd: 'GERN_SELL',
  seatUniqNo: '00500901',
  seatZoneCd: 'GERN_ZONE',
  sellPrirRank: 226,
  smapBaseNo: 11620,
  vertCoorVal: 5,
  vertPosiRt: 0,
};

const keys = Object.keys(reserved).filter((reserved_key) => {
  if (reserved[reserved_key] !== not_reserved[reserved_key]) return reserved_key;
});

console.log(keys);

keys.forEach((key) => {
  console.log(`reserved ${key}:`, reserved[key]);
  console.log(`not reserved ${key}:`, not_reserved[key]);
});
