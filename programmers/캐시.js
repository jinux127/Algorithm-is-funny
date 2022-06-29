function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities.map((city) => {
    const lowerCityName = city.toLowerCase();
    const cacheDataIndex = cache.indexOf(lowerCityName);
    if (cacheDataIndex !== -1) {
      answer += 1;
      cache.splice(cacheDataIndex, 1);
      cache.push(lowerCityName);
    } else {
      answer += 5;
      cache.push(lowerCityName);
      if (cache.length > cacheSize) {
        cache.splice(0, 1);
      }
    }
  });
  return answer;
}
