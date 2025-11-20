// Example: load JSON and log a metric; replace with D3/Chart.js code
fetch('data/analysis.json')
  .then(r => r.json())
  .then(data => {
    console.log('Loaded analysis', data);
    // compute a demo metric
    const avg = data.reduce((s,x)=>s+x.value,0) / data.length;
    console.log('Average value:', avg);
  })
  .catch(e => console.error('Could not load data', e));
