export function processJson(data: any) {
  const timestamp = data.ts;
  const url = new URL(data.u);
  const domain = url.hostname;
  const path = url.pathname;
  const query = url.searchParams;
  const queryObject: any = {};
  query.forEach((value, key) => {
    queryObject[key] = value;
  });
  const hash = url.hash;

  const result = data.e.map((item: any) => {
    return {
      timestamp: timestamp,
      url_object: {
        domain: domain,
        path: path,
        query_object: queryObject,
        hash: hash,
      },
      ec: item,
    };
  });

  return result;
}
