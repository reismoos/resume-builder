export const months: string[] = [
  'Январь', 'Февраль', 'Март', 'Апрель', 
  'Май', 'Июнь', 'Июль', 'Август', 
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear - 60; year <= currentYear; year++) {
    years.push(year);
  }
  return years;
};

export const skillsLevels: string[] = ['Начальный', 'Средне', 'Хорошо', 'Очень хорошо', 'Отлично']