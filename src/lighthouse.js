const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function launchChromeAndRunLighthouse(url, opts, config = null) {
    const chrome = await chromeLauncher.launch({chromeFlags: opts.chromeFlags})
    opts.port = chrome.port
    const results = await lighthouse(url, opts, config)
    await chrome.kill()

    // use results.lhr for the JS-consumeable output
    // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
    // use results.report for the HTML/JSON/CSV output as a string
    // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
    return results.report
}


const opts = {
    output:'html',
    // chromeFlags: ['--headless'],
    chromeFlags: ['--show-paint-rects'],
    // logLevel: 'info',
    // onlyCategories: ['performance'],
    view:true,
};

module.exports = async function(url){ 
    const results = await launchChromeAndRunLighthouse(url, opts)
    
    require('fs').writeFileSync('report.html',results)

    return {}
}