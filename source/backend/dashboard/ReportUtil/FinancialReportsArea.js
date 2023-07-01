const db = require('../../DbConfig');
const reportsVisitor = require('./FinancialReportVisitor')

async function selectFinancialReportPicnic(startDate,endDate) {
  try {
    var reportData = [];
    const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
    const formattedEndDate = new Date(endDate).toISOString().split('T')[0];
    reportData.push(await reportsVisitor.FinancialAdultNational('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid612National('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid06National('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdult65National('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdultForeign('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid612Foreign('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid06Foreign('Picnic', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdult65Foreign('Picnic', formattedStartDate, formattedEndDate));
    return orderData(formattedStartDate, formattedEndDate, reportData);
  } catch (error) {
    throw error;
  }
};

async function selectFinancialReportCamping(startDate,endDate) {
  try {
    var reportData = [];
    const formattedStartDate = new Date(startDate).toISOString().split('T')[0];
    const formattedEndDate = new Date(endDate).toISOString().split('T')[0];
    reportData.push(await reportsVisitor.FinancialAdultNational('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid612National('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid06National('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdult65National('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdultForeign('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid612Foreign('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialKid06Foreign('Camping', formattedStartDate, formattedEndDate));
    reportData.push(await reportsVisitor.FinancialAdult65Foreign('Camping', formattedStartDate, formattedEndDate));
    var result = orderData(formattedStartDate, formattedEndDate, reportData);
    formatDates(result);
    return result;
  } catch (error) {
    throw error;
  }
};

function orderData(startDate, endDate, reportData) {
  var data = [];
  var start = new Date(startDate);
  var end = new Date(endDate);
  while (start <= end) {
    data.push([new Date(start)]);
    start.setDate(start.getDate()+1);
  }
  return addTicketTotalValues(reportData,data);
};

function addTicketTotalValues(databaseData, dates) {
  const result = [];

  for (let i = 0; i < dates.length; ++i) {
    const currentDate = dates[i][0].toISOString().split('T')[0];
    result.push([currentDate])
    
    let insertions = 0;
    let aggregate = 0;
    for (let j = 0; j < databaseData.length; ++j) {
      const innerArray = databaseData[j];
      const numbers = [0, 0];
      for (let k = 0; k < innerArray.length; ++k) {
        const entry = innerArray[k];
        if (entry.Fecha.toISOString().split('T')[0] === currentDate) {
          numbers[0] += entry.Tiquetes;
          numbers[1] += entry.Total;
          aggregate += entry.Total;
        }
      }
      result[result.length-1].push(...numbers)
      insertions += 1;
      if (insertions === 4) {
        result[result.length-1].push(aggregate);
        aggregate = 0;
        insertions = 0;
      }
    }
  }

  return result;
}

const formatDates = (array) => {
  array.forEach(item => {
    const date = new Date(item[0]);
    const formattedDate = date.toLocaleDateString('en-US', {
      timeZone: 'UTC',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    item[0] = formattedDate;
  });
  return array;
}

module.exports = {
  selectFinancialReportPicnic,
  selectFinancialReportCamping,
}
