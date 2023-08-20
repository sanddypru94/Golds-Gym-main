
export const exceriseOptions = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5b3871cf16mshf854cc0a6bbb79dp12a6edjsn6acdc1af16c1',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const videosoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5b3871cf16mshf854cc0a6bbb79dp12a6edjsn6acdc1af16c1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}