const BASE_URL = "https://autobizz-425913.uc.r.appspot.com";

export async function getAuthorize() {
  const res = await fetch(`${BASE_URL}/getAuthorize`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tokenType: "frontEndTest",
    }),
  });

  if (!res.ok) throw new Error("Authorization failed");

  return res.json();
}

export async function getSales(params: any) {
  // Only include non-empty filters
  const queryObj: Record<string, string> = {};
  if (params.startDate) queryObj.startDate = params.startDate;
  if (params.endDate) queryObj.endDate = params.endDate;
  if (params.priceMin) queryObj.priceMin = params.priceMin;
  if (!params.priceMin) queryObj.priceMin = "0";
  if (params.email) queryObj.email = params.email;
  if (params.phone) queryObj.phone = params.phone;
  if (!params.phone) queryObj.phone = "+11111111";
  if (params.sortBy) queryObj.sortBy = params.sortBy;
  if (params.sortOrder) queryObj.sortOrder = params.sortOrder;
  if (params.after) queryObj.after = params.after;
  if (params.before) queryObj.before = params.before;

  const query = new URLSearchParams(queryObj);

  const res = await fetch(`${BASE_URL}/sales?${query}`, {
    headers: {
      "X-AUTOBIZZ-TOKEN": params.token,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch sales");
  return res.json();
}
