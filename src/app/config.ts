let host = location.host == `172.16.246.228` ? `172.16.246.228` : `www.controldata.co.th`;

export const url: any = `http://${host}/mpsicc/iccServer/stock-alert`;
export const stockurl = `http://${host}/mpsicc/stock/ajax`;
export const stockhome = `http://${host}/mpsicc/stock/`;

// export const url: any = `http://${host}/mpsicc/iccServer/stock-alert-dev`;
// export const stockurl = `http://${host}/mpsicc/stock-dev/ajax`;
// export const stockhome = `http://${host}/mpsicc/stock-dev/`;


// proxy
// export const url: any= `/stock-alert`;
