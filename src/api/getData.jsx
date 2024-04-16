export async function GetData() {
  const apiURL = "https://www.aladin.co.kr/ttb/api/";

  const TTBKey = `ttbds05199k1053001`;

  const restUrl =
    `ItemSearch.aspx?` +
    `ttbkey=${TTBKey}` +
    `&Query=love` +
    `&QueryType=Title` +
    `&MaxResults=100&Id}&output=js&Version=20131101`;

  let data = await (await fetch(apiURL + restUrl)).json();

  return data;
}
