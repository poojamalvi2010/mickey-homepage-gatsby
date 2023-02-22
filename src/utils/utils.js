import _ from "underscore";

import useWindowDimensions from "../hooks/useWindowDimensions"

var dateFormat = require("dateformat");


export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function formatOrderNumber(orderNumber) {
  return orderNumber.slice(0, 3) + "-" + orderNumber.slice(4, 7) + "-" + orderNumber.slice(8, orderNumber.length)
}

export function titleCase(value) {
  if (!value) {
    return ''
  }
  return value.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export function camelToTitleCase(str) {
  return titleCase(str.replace('_', ' '))
}

export function formatDjangoDate(d) {
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}

function index(obj, i) {
  return obj[i]
}

export function djangoResponseToInputValues(groups, data) {
  let clone = { ...data }
  for (let group in groups) {
    for (let field in groups[group].fields) {
      if (clone[field]) {
        let type = groups[group].fields[field]['type'];

        if (type === 'date') {
          clone[field] = data[field] ? new Date(data[field]) : undefined;
        } else if (type === 'multiple dropdown') {
          clone[field] = _.map(data[field], (field) => {
            return field.id
          });
        } else if (type === 'search') {
          clone[field] = groups[group].fields[field]['title_fields'].length > 1 ? _.reduce(groups[group].fields[field]['title_fields'], (memo, num) => {
            return `${memo.split('.').reduce(index, data[field])} ${num.split('.').reduce(index, data[field])}`;
          }) : groups[group].fields[field]['title_fields'][0].split('.').reduce(index, data[field])
        }
      }
    }
  }

  return clone
}

export function formatTotalPrice(number) {
  if (!number) {
    return ''
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(number)
}

export function formatUnitPrice(number) {
  if (!number) {
    return ''
  }

  var parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  let total = parts.join(".").replace(/^/, '$')
  return total;
}

export function formatQuantities(number) {
  if (!number) {
    return '0'
  }

  var parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}


export function formatDate(javascriptDate) {
  return dateFormat(javascriptDate, "mmmm dS, yyyy");
}

export function getDaysArray(start, end) {
  start = new Date(start);
  end = new Date(end);
  for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push(formatDate(new Date(dt)));
  }
  return arr;
}


export function getTransactionTotal(transaction) {
  if (transaction.transaction_type === 'buy') {
    return parseFloat(transaction.price) * parseFloat(transaction.receipt_volume)
  } else if (transaction.transaction_type === 'sell') {
    return parseFloat(transaction.price) * parseFloat(transaction.delivery_volume)
  } else if (transaction.transaction_type === 'transport' || transaction.transaction_type === 'storage') {
    return -1 * (parseFloat(transaction.variable_cost) * parseFloat(transaction.receipt_volume))
  }
}


export function GraphConfig(data) {
  const { height, width } = useWindowDimensions()
  return {
    width: width - 265,
    height: height - 250,
    node: {
      highlightStrokeColor: 'green',
      labelProperty: "name",
      fontSize: 70
    },
    d3: {
      linkStrength: 1,
      gravity: -5000
    },
    initialZoom: 0.5,
    directed: true,
    link: {
      strokeWidth: 10,
      fontSize: 60,
      renderLabel: true,
      type: 'CURVE_SMOOTH'
    }
  }
}