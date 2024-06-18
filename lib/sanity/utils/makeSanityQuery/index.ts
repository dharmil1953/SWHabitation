import {
    MakeGroqQueryParam,
    MakeGroqQueryParamValue,
  } from "../fetchDataFromSanity";
  
  export const makeSanityQuery = (fields: MakeGroqQueryParam) => {
    let query = "";
    Object.entries(fields).forEach(([key, value]) => {
      query = query + getQueryString(key, value);
    });
    return query;
  };
  
  const getQueryString = (key: string, value: MakeGroqQueryParamValue) => {
    let query = "";
    const arrayString = value.isArray ? `[${value.filters || ""}]` : "";
    if (value.isReference) {
      query = `${key}${arrayString} -> { 
          ${value.fetchAllFields ? "...," : ""}
          ${value.children ? makeSanityQuery(value.children) : ""}
        },`;
    } else if (value.children) {
      query = `${key}${arrayString}{ ${
        value.fetchAllFields ? "...," : ""
      } ${makeSanityQuery(value.children)}},`;
    } else {
      query = `${key},`;
    }
    if (value.as) {
      query = `"${value.as}" : ${query}`;
    }
    return query;
  };
  
