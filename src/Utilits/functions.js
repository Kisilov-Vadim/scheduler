export const getHours = (startTime, endTime) => {
  const arr = [];
  
  while(startTime <= endTime) {
    arr.push(`${startTime}:00`)
    startTime = (startTime * 60 + 60) / 60; 
  }

  return arr;
}

export const getCorrectDate = (current) => {
  let day = new Date().getDate(), 
      month = new Date().getMonth() === 12 ? 1 : new Date().getMonth() + 1;

  if (current !== new Date().getDay()) {
    let d = new Date();
    d.setDate(d.getDate() + (current + 7 - d.getDay()) % 7);
    day = d.getDate();
  }; 
  
  return `${day}.${month}`
}