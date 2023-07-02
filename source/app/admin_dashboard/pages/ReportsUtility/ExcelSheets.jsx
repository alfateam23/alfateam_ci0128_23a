import * as XLSX from "xlsx";
import * as data from "./ExcelData";

export const createVisitationSheet = async (title, startDate, endDate) => {
  const wsName = "Reporte visitacion";
  title.push(["FECHA", "TIPO DE VISITANTE", "PROCEDENCIA",
  "TIPO DE VISITA", "TIPO DE TIQUETE", "CANTIDAD DE VISITANTES",
  "COD RESERVACIÓN", "CATEGORIA"]);
  const ws = XLSX.utils.aoa_to_sheet(title);
  var wsData = await data.getVisitationData(startDate, endDate);
  wsData = formatDates(wsData);
  XLSX.utils.sheet_add_json(ws, wsData,{skipHeader: true, origin: "A7"});
  ws["!merges"] = [
    { s:{r:0, c:0}, e:{r:0, c:7} },
    { s:{r:1, c:0}, e:{r:1, c:7} },
    { s:{r:2, c:0}, e:{r:2, c:7} },
    { s:{r:3, c:0}, e:{r:3, c:7} },
    { s:{r:4, c:0}, e:{r:4, c:7} },
  ];
  return [ws,wsName];
};

export const createPicnicFinancialSheet = async (title, startDate, endDate) => {
  const wsName = "Reporte Ingresos-Picnic";
  var prices = await data.getPrices();
  prices = transformData(prices,"Picnic");
  var header = data.getHeader(prices);
  var body = await data.getBody(startDate, endDate, 'P');
  console.log(body);
  title.push(["FECHA", "Residentes",
  "", "", "", "", "", "", "", "Total de ingresos Residentes",
  "No Residentes", "", "", "", "", "", "", "",
  "Total de ingresos No Residentes", "Total de ingresos"]);
  const ws = XLSX.utils.aoa_to_sheet(title);
  XLSX.utils.sheet_add_aoa(ws,header, {origin:"B7"});
  XLSX.utils.sheet_add_aoa(ws,body, {origin:"A9"});
  ws["!merges"] = [
    { s:{r:0, c:0}, e:{r:0, c:19} },
    { s:{r:1, c:0}, e:{r:1, c:19} },
    { s:{r:2, c:0}, e:{r:2, c:19} },
    { s:{r:3, c:0}, e:{r:3, c:19} },
    { s:{r:4, c:0}, e:{r:4, c:19} },
    { s:{r:5, c:0}, e:{r:7, c:0} },
    { s:{r:5, c:1}, e:{r:5, c:8} },
    { s:{r:5, c:9}, e:{r:7, c:9} },
    { s:{r:5, c:10}, e:{r:5, c:17} },
    { s:{r:5, c:18}, e:{r:7, c:18} },
    { s:{r:5, c:19}, e:{r:7, c:19} },
  ];
  return [ws,wsName];
}

export const createCampingFinancialSheet = async (title, startDate, endDate) => {
  const wsName = "Reporte Ingresos-Camping";
  var prices = await data.getPrices();
  prices = transformData(prices,"Camping");
  var header = data.getHeader(prices);
  var body = await data.getBody(startDate, endDate, 'C');
  console.log(body);
  title.push(["FECHA", "Residentes",
  "", "", "", "", "", "", "", "Total de ingresos Residentes",
  "No Residentes", "", "", "", "", "", "", "",
  "Total de ingresos No Residentes", "Total de ingresos"]);
  const ws = XLSX.utils.aoa_to_sheet(title);
  XLSX.utils.sheet_add_aoa(ws,header, {origin:"B7"});
  XLSX.utils.sheet_add_aoa(ws,body, {origin:"A9"});
  ws["!merges"] = [
    { s:{r:0, c:0}, e:{r:0, c:19} },
    { s:{r:1, c:0}, e:{r:1, c:19} },
    { s:{r:2, c:0}, e:{r:2, c:19} },
    { s:{r:3, c:0}, e:{r:3, c:19} },
    { s:{r:4, c:0}, e:{r:4, c:19} },
    { s:{r:5, c:0}, e:{r:7, c:0} },
    { s:{r:5, c:1}, e:{r:5, c:8} },
    { s:{r:5, c:9}, e:{r:7, c:9} },
    { s:{r:5, c:10}, e:{r:5, c:17} },
    { s:{r:5, c:18}, e:{r:7, c:18} },
    { s:{r:5, c:19}, e:{r:7, c:19} },
  ];
  return [ws,wsName];
}

function transformData(data, tipoVisita) {
  const transformedData = {};

  data.forEach(item => {
    const { TipoProcedencia, Estatus, Monto, Moneda, TipoVisita } = item;

    if (TipoVisita === tipoVisita) {
      if (!transformedData[TipoProcedencia]) {
        transformedData[TipoProcedencia] = [];
      }

      transformedData[TipoProcedencia].push({ Estatus, Monto, Moneda });
    }
  });

  return transformedData;
};

const formatDates = (array) => {
  array.forEach(item => {
    const date = new Date(item.FECHA);
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });

    item.FECHA = formattedDate;
  });
  return array;
}