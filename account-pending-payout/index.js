const axios = require('axios');
const chalk = require('chalk');

const node = `/node/version`;
const baseURL = `http://127.0.0.1:8080`;
const accountAddr = process.argv[2];
const depth = process.argv[3] || 3;

const converterBase = 1000000000000;

const payoutURL = `/accounts/${accountAddr}/staking-payouts?depth=${depth}`;

async function showNetwork() {
  let chainName = await axios.get(baseURL + node).then((res) => res.data.chain);
  console.log(
    chalk.red('Chain Name', chalk.underline.bgBlack.yellow(chainName) + '!')
  );
}
async function getPendingPayout() {
  console.log(`-------Fetching Data ------`);
  let response = await axios.get(baseURL + payoutURL).then((res) => res.data);
  let fianl;
  if (response.erasPayouts[0].message) {
    final = 'Sorry no pending payout 😢';
  } else {
    const allPayouts = response.erasPayouts.reduce((acc, singleErasPayout) => {
      return acc.concat(singleErasPayout.payouts);
    }, []);

    let totalPlanck = allPayouts
      .filter((s) => !s.claimed)
      .map((p) => Number(p.nominatorStakingPayout))
      .reduce((a, b) => a + b);

    final = totalPlanck / converterBase;
  }

  console.log(
    chalk.bold.red(
      'Pending Payouts:',
      chalk.underline.bgBlack.yellow(final),
      ' KSM'
    )
  );
}

(async function () {
  showNetwork();
  getPendingPayout();
})();
