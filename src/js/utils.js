export const getFullName = (codes, code) => {
    const [, title] = codes.find((item) => item.includes(code));
    return title;
  };

  export const convertTime = (date) => {

    return new Intl.DateTimeFormat("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      }).format(new Date(date));

  };