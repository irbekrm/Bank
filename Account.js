const transactions = [];

exports.statement = _ => {
  if(!(transactions.length)) return 'No transactions available';
}

