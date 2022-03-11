const axios = require("axios");
const cheerio = require("cheerio");

export function f1(props) {
  const getHTML = async (keyword) => {
    try {
      return await axios.get("https://www.wordreference.com/enko/" + keyword)
    } catch(err) {
      console.log(err);
    }
  }

  const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $List = $(".content");
    
    
    let List = [];
    $List.each((idx, node) => {
      const searchText = $(node).find(".FrWrd>strong").first().text().split("").splice(0,5).join("").toLowerCase();
      if (keyword === searchText) {
        List.push(searchText);
        console.log(List);
      }
    })
    if (List[0] === "" || List[0] === undefined) {
      return false;
    } else {
      return true;
    }
  }

  let value = [];
  for (let i in props) {
    value.push(props[i]);
  }

  return parsing(value.join(""));
}