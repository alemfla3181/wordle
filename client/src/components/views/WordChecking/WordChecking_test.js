const axios = require("axios");
const cheerio = require("cheerio");

export function f1(props) {
  const getHTML = async (keyword) => {
    try {
      return await axios.get("/" + keyword)
    } catch(err) {
      console.log(err);
    }
  } 

  const parsing = async(keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $List = $("body");
    
    // console.log($List);
    let List = [];
    $List.each((idx, node) => {
      console.log($(node).find(".pseg > b").text());
      if (keyword === $(node).find("h2").text() || keyword === $(node).find(".pseg >b").text()) {
        List.push($(node).find("h2").text());
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

// await axios.get("/https://www.thefreedictionary.com/" + keyword).then((response) => {
//     const $ = cheerio.load(response.data);
//     // const $List = $(".content");

//     let List = [];
//     console.log($);
//     // List.push($('.pseg > b').text())
//     // $List.each((idx, node) => {
//     //   const searchText = $(node).find(".h2");
//     //   List.push(searchText);
//     // })
//     console.log(List);

//     // let List = [];
//     // $List.each((idx, node) => {
//     //   if (keyword === $(node).find("h2").text() || (keyword === $(node).find(".hvr").text())) {
//     //     List.push($(node).find("h2").text());
//     //     console.log(List);
//     //   }
//     // })
//     // if (List[0] === "" || List[0] === undefined) {
//     //   return false;
//     // } else {
//     //   return true;
//     // }

//   })
//   // try {
//   //   return await axios.get("https://www.thefreedictionary.com/" + keyword)
//   // } catch(err) {
//   //   console.log(err);
//   // }
// }