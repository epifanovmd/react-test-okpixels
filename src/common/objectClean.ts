export const objectClean = (obj: any) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    }
  }

  return obj;
};
